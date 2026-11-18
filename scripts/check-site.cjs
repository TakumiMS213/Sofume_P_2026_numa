/* Optional browser QA. Requires Playwright + @axe-core/playwright outside the site. */
const { chromium } = require('playwright');
const { default: AxeBuilder } = require('@axe-core/playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const base = process.env.SITE_URL || 'http://127.0.0.1:8000/';
const out = path.resolve(__dirname, '../test-results');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  // Chrome can abort cross-document transitions during automated navigation.
  // Disable only that visual effect in the reduced-motion QA context.
  await context.route('**/css/style.css*', async route => {
    const response = await route.fetch();
    await route.fulfill({ response, body: await response.text() + '\n@view-transition { navigation: none; }\n' });
  });
  const page = await context.newPage();
  const errors = [];
  const broken = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) broken.push(`${response.status()} ${response.url()}`); });
  const visit = route => page.goto(base + route, { waitUntil: 'networkidle' });
  const noOverflow = async label => assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow: ${label}`);

  // Validate the published dataset before using sample fixtures for media/control tests.
  if (!process.argv.includes('--features-only')) {
    await visit('index.html');
    const published = await page.evaluate(() => window.GAMES);
    assert(published.length > 0, 'Published works must exist');
    assert.equal(new Set(published.map(game => game.id)).size, published.length, 'Unique work IDs');
    for (const width of [320, 375, 390, 430, 768, 1440]) {
      await page.setViewportSize({ width, height: 960 });
      await visit('index.html');
      assert.equal(await page.locator('.game-card').count(), published.length);
      assert.equal(await page.locator('.sample-badge').count(), 0);
      await noOverflow(`published list ${width}`);
      for (const game of published) {
        await visit(`game.html?id=${encodeURIComponent(game.id)}`);
        assert.equal(await page.locator('#game-title').textContent(), game.title);
        const info = await page.locator('.game-info').textContent();
        assert(info.includes(game.creators.join(' / ')), `Planner: ${game.id}`);
        assert(info.includes(game.gameCard), `Game card: ${game.id}`);
        assert.deepEqual(await page.locator('.detail-badges span').allTextContents(), [...game.tags, game.players, game.playTime].filter(Boolean));
        assert.equal(await page.locator('.description-text').textContent(), game.description);
        assert.equal(await page.locator('#controls').count(), game.controls.length ? 1 : 0);
        assert.equal(await page.locator('a[href$=".pdf"], .manual-link').count(), 0, 'Reference PDFs must not be published');
        if (game.inputDevices?.length) assert(info.includes(game.inputDevices.join(' / ')), `Input devices: ${game.id}`);

        for (const [index, control] of game.controls.entries()) {
          await page.locator(`[data-device="${index}"]`).click();
          const panel = page.locator(`#device-panel-${index}`);
          assert(await panel.isVisible(), `Control panel: ${game.id}/${index}`);
          assert.deepEqual(await panel.locator('.control-action').allTextContents(), control.items.map(item => item.action));
          assert.deepEqual(await panel.locator('kbd').allTextContents(), control.items.flatMap(item => item.keys));
        }
        const icon = page.locator('.detail-art img');
        await icon.evaluate(image => image.decode());
        assert.equal(await icon.getAttribute('src'), game.icon || './assets/images/placeholder.svg');
        assert.equal(await page.locator('.sample-label, #screenshots').count(), 0);
        assert.equal(await page.locator('#video').count(), game.video ? 1 : 0);
        if (game.video) {
          assert.equal(await page.locator('video source').getAttribute('src'), game.video.src);
          const fitsFrame = await page.locator('video').evaluate(video => {
            const media = video.getBoundingClientRect();
            const frame = video.parentElement.getBoundingClientRect();
            return ['x', 'y', 'width', 'height'].every(key => Math.abs(media[key] - frame[key]) < 1);
          });
          assert(fitsFrame, `Video controls must fit inside the frame: ${game.id}/${width}px`);
          assert.equal(await page.locator('video').getAttribute('preload'), 'none');
          assert.equal(await page.locator('video').getAttribute('autoplay'), null);
          assert.equal(await page.locator('.detail-nav a[href="#video"]').count(), 1);
        }
        await noOverflow(`published ${game.id} ${width}`);
      }
      console.log(`PASS: ${published.length} published details and list at ${width}px`);
    }
    const publishedTags = [...new Set(published.flatMap(game => game.tags))];
    for (const tag of publishedTags) {
      await visit(`index.html?tag=${encodeURIComponent(tag)}`);
      assert.deepEqual(await page.locator('.game-card h3').allTextContents(), published.filter(game => game.tags.includes(tag)).map(game => game.title));
    }
    for (const width of [320, 1440]) {
      await page.setViewportSize({ width, height: 960 });
      for (const route of ['index.html', ...published.map(game => `game.html?id=${game.id}`)]) {
        await visit(route);
        const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        assert.deepEqual(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `Published accessibility: ${width}px ${route}`);
      }
    }
    await visit('index.html');
    await page.screenshot({ path: path.join(out, 'submissions-desktop.png'), fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await visit(`game.html?id=${published[0].id}`);
    await page.screenshot({ path: path.join(out, 'submissions-detail-mobile.png'), fullPage: true });
    console.log('PASS: published tag filters and WCAG A/AA on every published page');
  }
  if (process.argv.includes('--published-only')) {
    assert.deepEqual(errors, [], 'Uncaught JavaScript errors');
    assert.deepEqual(broken, [], 'Broken resource requests');
    await browser.close();
    return;
  }

  // Keep feature regression checks independent of which works have submitted media.
  const sampleSource = fs.readFileSync(path.join(__dirname, 'fixtures/sample-games.js'), 'utf8');
  await page.route('**/js/games.js*', route => route.fulfill({ contentType: 'text/javascript', body: sampleSource }));

  for (const width of [320, 375, 390, 430, 768, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await visit('index.html');
    assert.equal(await page.locator('.game-card').count(), 3);
    await noOverflow(`list ${width}`);
    for (const id of ['game01', 'game02', 'game03']) {
      await visit(`game.html?id=${id}`);
      assert.equal(await page.locator('#game-title').count(), 1);
      await noOverflow(`${id} ${width}`);
    }
    console.log(`PASS: list and all details at ${width}px`);
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await visit('index.html');
  await page.screenshot({ path: path.join(out, 'desktop.png'), fullPage: true });
  for (const [genre, title] of [['アクション', 'MOSSBOUND'], ['パズル', 'ORBIT SHIFT'], ['レース', 'NEON DRIFT']]) {
    await page.getByRole('button', { name: 'すべて', exact: true }).click();
    await page.getByRole('button', { name: genre, exact: true }).click();
    assert.equal(await page.locator('.game-card').count(), 1);
    assert.equal(await page.locator('.game-card h3').textContent(), title);
    await page.reload();
    assert.equal(await page.locator('.game-card').count(), 1, 'Filter must survive reload');
  }
  await visit('index.html?tag=ソロプレイ&tag=2D');
  assert.equal(await page.locator('.game-card h3').textContent(), 'MOSSBOUND');
  assert.deepEqual(await page.locator('#filters [aria-pressed="true"]').allTextContents(), ['2D', 'ソロプレイ']);
  await page.getByRole('button', { name: '3D', exact: true }).click();
  assert.equal(await page.locator('.game-card').count(), 0);
  assert(await page.getByText('選択したタグすべてに当てはまる作品はありません。', { exact: false }).isVisible());
  await page.getByRole('button', { name: '2D', exact: true }).click();
  assert.equal(await page.locator('.game-card h3').textContent(), 'ORBIT SHIFT');
  await page.reload();
  assert.equal(await page.locator('.game-card h3').textContent(), 'ORBIT SHIFT');
  assert.deepEqual(new URL(page.url()).searchParams.getAll('tag'), ['ソロプレイ', '3D']);
  await page.getByRole('button', { name: 'すべて', exact: true }).click();
  assert.equal(new URL(page.url()).search, '');
  await page.getByRole('button', { name: 'ソロプレイ', exact: true }).focus();
  await page.keyboard.press('Space');
  assert.equal(await page.getByRole('button', { name: 'ソロプレイ', exact: true }).getAttribute('aria-pressed'), 'true');
  await page.keyboard.press('Enter');
  assert.equal(await page.getByRole('button', { name: 'すべて', exact: true }).getAttribute('aria-pressed'), 'true');
  await visit('index.html?genre=パズル');
  assert.equal(await page.locator('.game-card h3').textContent(), 'ORBIT SHIFT');
  await visit('index.html?tag=unknown');
  assert.equal(await page.locator('.game-card').count(), 3);
  assert.deepEqual(await page.locator('.game-card').first().locator('.card-tags span').allTextContents(), ['アクション', '2D', 'ソロプレイ']);
  await page.getByRole('button', { name: 'すべて', exact: true }).click();
  for (let index = 0; index < 3; index++) {
    const expected = await page.locator('.game-card h3').nth(index).textContent();
    await page.locator('.game-card-link').nth(index).click();
    await page.waitForLoadState('networkidle');
    assert.equal(await page.locator('#game-title').textContent(), expected);
    await page.locator('.breadcrumb a').click();
    await page.waitForLoadState('networkidle');
    assert.equal(await page.locator('.game-card').count(), 3);
  }
  console.log('PASS: multiple tags, AND filtering, toggling/reset, keyboard, URL persistence/legacy URLs, every card and return link');

  await visit('game.html?id=game01');
  assert.deepEqual((await page.locator('.detail-badges span').allTextContents()).slice(0, 3), ['アクション', '2D', 'ソロプレイ']);
  assert(await page.locator('.game-info').getByText('アクション / 2D / ソロプレイ', { exact: true }).isVisible());
  await page.getByRole('link', { name: '操作方法を見る' }).click();
  assert.equal(new URL(page.url()).hash, '#controls');
  await page.getByRole('tab', { name: 'ゲームパッド' }).click();
  assert(await page.getByRole('tabpanel').getByText('左スティック').isVisible());
  await page.getByRole('tab', { name: 'ゲームパッド' }).press('ArrowLeft');
  assert(await page.getByRole('tabpanel').getByText('Space', { exact: true }).isVisible());
  await page.locator('[data-shot="0"]').click();
  assert(await page.locator('#lightbox').isVisible());
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#lightbox-count').textContent(), '02 / 03');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await page.locator('#lightbox-count').textContent(), '01 / 03');
  await page.keyboard.press('Escape');
  assert(!(await page.locator('#lightbox').isVisible()));
  assert(await page.locator('[data-shot="0"]').evaluate(el => document.activeElement === el));
  await page.locator('#gallery-next').click();
  await page.waitForFunction(() => document.getElementById('gallery').scrollLeft > 0);
  await page.locator('video').evaluate(async video => { await video.play(); });
  await page.waitForFunction(() => document.querySelector('video').currentTime > 0.1);
  const duration = await page.locator('video').evaluate(video => { video.pause(); return video.duration; });
  assert(duration > 0 && duration <= 7);
  console.log(`PASS: control tabs, keyboard, lightbox, focus return, gallery, MP4 playback (${duration}s)`);

  for (const route of ['game.html', 'game.html?id=does-not-exist', 'game.html?id=%3Cscript%3E']) {
    await visit(route);
    assert.equal(await page.locator('.error-page').count(), 1);
    assert.equal(await page.locator('.error-page a').getAttribute('href'), './index.html#games');
  }
  await visit('game.html?id=game02');
  assert.equal(await page.locator('#video').count(), 0);
  await page.getByRole('tab', { name: 'スマートフォン' }).click();
  assert(await page.getByRole('tabpanel').getByText('スワイプ', { exact: true }).isVisible());
  console.log('PASS: unknown/missing/malformed IDs and optional video');

  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    for (const route of ['index.html', 'game.html?id=game01', 'game.html?id=game02', 'game.html?id=game03', 'game.html?id=unknown']) {
      await visit(route);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      assert.deepEqual(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `Accessibility: ${width}px ${route}`);
    }
  }
  console.log('PASS: WCAG A/AA automated checks on list, all details and error page');

  await page.setViewportSize({ width: 390, height: 844 });
  await visit('index.html');
  await page.screenshot({ path: path.join(out, 'mobile.png'), fullPage: true });
  await visit('game.html?id=game01');
  await page.screenshot({ path: path.join(out, 'detail-mobile.png'), fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: path.join(out, 'detail-desktop.png'), fullPage: true });

  // Check every declared media path, even images that lazy loading has not requested.
  const paths = await page.evaluate(() => window.GAMES.flatMap(game => [game.icon, ...game.screenshots.map(shot => shot.src), game.video?.src, game.video?.poster].filter(Boolean)));
  for (const file of new Set(paths)) {
    const response = await context.request.get(new URL(file, base).href);
    assert(response.ok(), `Missing media: ${file}`);
  }
  assert.deepEqual(errors, [], 'Uncaught JavaScript errors');
  assert.deepEqual(broken, [], 'Broken resource requests');
  console.log('PASS: all media paths, no broken requests, no JavaScript errors');

  // Data-driven edge cases use local fixtures; no YouTube request leaves the browser.
  const fixtures = await context.newPage();
  const source = sampleSource;
  let mutation = '';
  await fixtures.route('**/js/games.js*', route => route.fulfill({ contentType: 'text/javascript', body: source + '\n' + mutation }));
  mutation = 'window.GAMES[0].tags = [" アクション ", "アクション", "", null, 42, "<b>独自タグ</b>"]; delete window.GAMES[1].tags; window.GAMES[1].genre = "旧ジャンル"; window.GAMES[2].tags = [];';
  await fixtures.goto(base + 'index.html');
  assert.deepEqual(await fixtures.locator('.game-card').first().locator('.card-tags span').allTextContents(), ['アクション', '<b>独自タグ</b>']);
  assert.equal(await fixtures.locator('.card-tags b, #filters b').count(), 0);
  assert.equal(await fixtures.locator('.game-card').nth(2).locator('.card-tags').count(), 0);
  await fixtures.getByRole('button', { name: '旧ジャンル', exact: true }).click();
  assert.equal(await fixtures.locator('.game-card h3').textContent(), 'ORBIT SHIFT');
  await fixtures.goto(base + 'game.html?id=game02');
  assert(await fixtures.locator('.detail-badges').getByText('旧ジャンル', { exact: true }).isVisible());
  mutation = 'window.GAMES[0].tags = ["アクション", "パズル", "3D", "ソロプレイ", "マルチプレイ", "協力", "対戦", "LongCustomTag".repeat(15)];';
  await fixtures.setViewportSize({ width: 320, height: 960 });
  for (const route of ['index.html', 'game.html?id=game01']) {
    await fixtures.goto(base + route);
    assert(await fixtures.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Many tags overflow: ${route}`);
  }
  console.log('PASS: legacy data, empty/duplicate tags, escaping and many/long tags at 320px');
  mutation = 'window.GAMES = [];';
  await fixtures.goto(base + 'index.html');
  assert(await fixtures.getByText('作品はただいま準備中です。もうしばらくお待ちください。').isVisible());
  mutation = 'window.GAMES = Array.from({length:30}, (_, i) => ({...window.GAMES[i % 3], id:`sample-${i}`, title:`GAME ${i + 1}`}));';
  await fixtures.goto(base + 'index.html');
  assert.equal(await fixtures.locator('.game-card').count(), 30);
  mutation = 'window.GAMES[0].controls = []; window.GAMES[0].screenshots = []; window.GAMES[0].video = null;';
  await fixtures.goto(base + 'game.html?id=game01');
  assert.equal(await fixtures.locator('#controls, #screenshots, #video').count(), 0);
  mutation = 'window.GAMES[1].video = {type:"youtube", id:"abcdefghijk"};';
  let embedRequests = 0;
  await fixtures.route('https://www.youtube-nocookie.com/**', route => {
    embedRequests++;
    return route.fulfill({ contentType: 'text/html', body: '<html><body>Local embed fixture</body></html>' });
  });
  await fixtures.goto(base + 'game.html?id=game02');
  assert.equal(embedRequests, 0);
  assert.equal(await fixtures.locator('iframe').count(), 0);
  await fixtures.getByRole('button', { name: '動画を読み込む' }).click();
  await fixtures.locator('iframe').waitFor();
  assert.equal(await fixtures.locator('iframe').getAttribute('src'), 'https://www.youtube-nocookie.com/embed/abcdefghijk?rel=0');
  mutation = 'window.GAMES[0].icon = "./assets/images/not-found.svg";';
  await fixtures.goto(base + 'game.html?id=game01');
  await fixtures.waitForFunction(() => document.querySelector('.detail-art img').src.endsWith('/placeholder.svg'));
  mutation = 'window.GAMES[0].video.src = "./assets/videos/not-found.mp4";';
  await fixtures.goto(base + 'game.html?id=game01');
  await fixtures.locator('video').evaluate(video => { video.load(); });
  await fixtures.locator('.video-error').waitFor();
  console.log('PASS: zero/30 games, omitted sections, lazy YouTube embed, missing image and video handling');

  const touchContext = await browser.newContext({ viewport: {width: 390, height: 844}, hasTouch: true, isMobile: true, reducedMotion: 'reduce' });
  const touch = await touchContext.newPage();
  await touch.route('**/js/games.js*', route => route.fulfill({ contentType: 'text/javascript', body: sampleSource }));
  await touch.goto(base + 'index.html');
  await touch.locator('.game-card-link').first().tap();
  assert.equal(await touch.locator('#game-title').textContent(), 'MOSSBOUND');
  await touch.getByRole('link', {name: '操作方法を見る'}).tap();
  await touch.getByRole('tab', {name: 'ゲームパッド'}).tap();
  assert(await touch.getByRole('tabpanel').getByText('左スティック').isVisible());
  await touch.locator('[data-shot="0"]').tap();
  assert(await touch.locator('#lightbox').isVisible());
  await touch.getByRole('button', {name: '拡大画像を閉じる'}).tap();
  assert(!(await touch.locator('#lightbox').isVisible()));
  console.log('PASS: mobile touch navigation, control selection and gallery');
  await touchContext.close();
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
