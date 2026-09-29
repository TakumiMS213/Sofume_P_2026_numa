(() => {
  "use strict";
  const { escapeHTML: esc, mediaPath, observeReveal } = window.Site;
  const games = window.GAMES || [];
  const game = games.find(item => item.id === new URLSearchParams(location.search).get("id"));
  const root = document.getElementById("game-detail");
  if (!game) {
    document.title = `作品が見つかりません — ${window.EXHIBITION.name}`;
    root.innerHTML = '<section class="error-page container"><div class="error-code mono">404 /</div><p class="eyebrow">GAME NOT FOUND</p><h1>この作品は見つかりませんでした。</h1><p>URLが変更されたか、展示が終了した可能性があります。<br>作品一覧から、気になるゲームを探してみてください。</p><a class="button button-dark" href="./index.html#games">作品一覧へ戻る <span aria-hidden="true">↗</span></a></section>';
    return;
  }
  document.title = `${game.title} — ${window.EXHIBITION.name}`;
  document.querySelector('meta[name="description"]').content = game.subtitle || game.title;
  const shots = game.screenshots || [];
  const controls = game.controls || [];
  const video = game.video;
  const validVideo = video && ((video.type === "local" && video.src) || (video.type === "youtube" && /^[\w-]{11}$/.test(video.id)));
  const number = String(games.indexOf(game) + 1).padStart(2, "0");
  const information = [["ジャンル", game.genre], ["プレイ人数", game.players], ["プレイ時間", game.playTime], ["対応機種", game.platform], ["制作者", Array.isArray(game.creators) ? game.creators.join(" / ") : game.creators], ["開発チーム", game.team]].filter(([, value]) => value);

  root.innerHTML = `<div class="container"><div class="breadcrumb"><a href="./index.html#games"><span aria-hidden="true">←</span> GAME LIST</a><span aria-hidden="true">/</span><span>${esc(game.title)}</span></div><section class="detail-hero" aria-labelledby="game-title"><div class="detail-art"><img src="${esc(mediaPath(game.icon))}" alt="${esc(game.iconAlt || game.title + 'のゲームアイコン')}" width="600" height="600" fetchpriority="high"><span class="card-number mono">GAME / ${number}</span></div><div class="detail-copy"><p class="eyebrow"><span class="status-dot"></span> ORIGINAL GAME / ${number}</p><h1 id="game-title">${esc(game.title)}</h1>${game.subtitle ? `<p class="detail-subtitle">${esc(game.subtitle)}</p>` : ""}<div class="detail-badges">${[game.genre, game.players, game.playTime].filter(Boolean).map(item => `<span>${esc(item)}</span>`).join("")}</div>${controls.length ? '<a class="button button-green" href="#controls">操作方法を見る <span aria-hidden="true">↓</span></a>' : '<a class="button button-green" href="#overview">ゲームについて <span aria-hidden="true">↓</span></a>'}${window.EXHIBITION.sampleMode ? '<p class="sample-label">※ 展示イメージ用のサンプル作品です。</p>' : ""}</div></section></div>
    <nav class="detail-nav" aria-label="この作品のページ内ナビゲーション"><div class="container">${controls.length ? '<a href="#controls">操作方法 ↓</a>' : ""}<a href="#overview">ゲーム概要</a>${shots.length ? '<a href="#screenshots">スクリーンショット</a>' : ""}${validVideo ? '<a href="#video">動画</a>' : ""}</div></nav>
    <div class="detail-body container"><section class="detail-section" id="overview"><p class="eyebrow">ABOUT THIS GAME</p><h2>このゲームについて</h2><p class="description-text">${esc(game.description)}</p>${information.length ? `<dl class="game-info">${information.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>` : ""}</section>
    ${controls.length ? `<section class="detail-section controls-section" id="controls"><div class="controls-heading"><div><p class="eyebrow">READY TO PLAY?</p><h2>操作方法</h2></div><span class="control-symbol" aria-hidden="true">✳</span></div><div class="device-tabs" role="tablist" aria-label="操作デバイス">${controls.map((control, i) => `<button type="button" class="device-tab" id="device-tab-${i}" role="tab" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" aria-controls="device-panel-${i}" data-device="${i}">${esc(control.device)}</button>`).join("")}</div>${controls.map((control, i) => `<div id="device-panel-${i}" role="tabpanel" aria-labelledby="device-tab-${i}" tabindex="0"${i === 0 ? "" : " hidden"}>${(control.items || []).map(item => `<div class="control-row"><div class="control-keys">${(item.keys || []).map(key => `<kbd>${esc(key)}</kbd>`).join("")}</div><span class="control-action">${esc(item.action)}</span></div>`).join("")}</div>`).join("")}${game.tip ? `<p class="control-tip"><span aria-hidden="true">↳</span><span>${esc(game.tip)}</span></p>` : ""}</section>` : ""}
    ${shots.length ? `<section class="detail-section" id="screenshots"><div class="section-top-row"><div><p class="eyebrow">A GLIMPSE OF THE WORLD</p><h2>スクリーンショット</h2></div>${shots.length > 1 ? '<div class="gallery-arrows"><button type="button" class="icon-button" id="gallery-prev" aria-label="ギャラリーの前の画像へ">←</button><button type="button" class="icon-button" id="gallery-next" aria-label="ギャラリーの次の画像へ">→</button></div>' : ""}</div><p class="gallery-hint">横にスワイプして見る / 画像をタップで拡大</p><div class="gallery" id="gallery">${shots.map((shot, i) => `<figure><button type="button" class="screenshot-button" data-shot="${i}" aria-label="画像${i + 1}を拡大：${esc(shot.alt || game.title)}"><img src="${esc(mediaPath(shot.src))}" alt="${esc(shot.alt || game.title + 'のスクリーンショット ' + (i + 1))}" width="960" height="540" loading="lazy" decoding="async"><span aria-hidden="true">⤢</span></button><figcaption>${esc(shot.caption || shot.alt)}</figcaption></figure>`).join("")}</div></section>` : ""}
    ${validVideo ? `<section class="detail-section" id="video"><p class="eyebrow">SEE IT IN MOTION</p><h2>動画で見てみよう</h2><div class="video-frame" id="video-frame">${video.type === "local" ? `<video controls playsinline preload="none"${video.poster ? ` poster="${esc(mediaPath(video.poster))}"` : ""} aria-label="${esc(game.title)}の紹介動画"><source src="${esc(mediaPath(video.src))}" type="video/mp4">お使いのブラウザは動画再生に対応していません。</video>` : '<div class="youtube-placeholder"><span class="eyebrow">GAME MOVIE</span><p>再生するとYouTubeに接続します。</p><button class="button button-green" id="load-youtube" type="button">動画を読み込む <span aria-hidden="true">▶</span></button></div>'}</div>${video.caption ? `<p class="video-caption">${esc(video.caption)}</p>` : ""}</section>` : ""}
    <div class="detail-bottom"><a class="button button-dark" href="./index.html#games"><span aria-hidden="true">←</span> GAME LIST / 作品一覧へ</a></div></div>`;

  const tabs = [...root.querySelectorAll("[data-device]")];
  function selectDevice(index) {
    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      document.getElementById(`device-panel-${i}`).hidden = i !== index;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectDevice(index));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectDevice(next); tabs[next].focus(); }
    });
  });

  const gallery = document.getElementById("gallery");
  const scrollBehavior = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
  if (shots.length > 1) {
    document.getElementById("gallery-prev").addEventListener("click", () => gallery.scrollBy({ left: -gallery.querySelector("figure").offsetWidth - 14, behavior: scrollBehavior() }));
    document.getElementById("gallery-next").addEventListener("click", () => gallery.scrollBy({ left: gallery.querySelector("figure").offsetWidth + 14, behavior: scrollBehavior() }));
  }
  const dialog = document.getElementById("lightbox");
  let selectedShot = 0;
  let opener;
  function showShot(index) {
    selectedShot = (index + shots.length) % shots.length;
    const shot = shots[selectedShot];
    const image = document.getElementById("lightbox-image");
    delete image.dataset.fallback;
    image.src = mediaPath(shot.src);
    image.alt = shot.alt || `${game.title}のスクリーンショット ${selectedShot + 1}`;
    document.getElementById("lightbox-caption").textContent = shot.caption || shot.alt || game.title;
    document.getElementById("lightbox-count").textContent = `${String(selectedShot + 1).padStart(2, "0")} / ${String(shots.length).padStart(2, "0")}`;
  }
  root.querySelectorAll("[data-shot]").forEach(button => button.addEventListener("click", () => {
    opener = button;
    showShot(Number(button.dataset.shot));
    dialog.showModal();
    dialog.querySelector(".lightbox-close").focus();
  }));
  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".lightbox-prev").addEventListener("click", () => showShot(selectedShot - 1));
  dialog.querySelector(".lightbox-next").addEventListener("click", () => showShot(selectedShot + 1));
  dialog.querySelector(".lightbox-prev").hidden = shots.length < 2;
  dialog.querySelector(".lightbox-next").hidden = shots.length < 2;
  dialog.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { event.preventDefault(); showShot(selectedShot - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); showShot(selectedShot + 1); }
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => opener?.focus({ preventScroll: true }));
  const youtubeButton = document.getElementById("load-youtube");
  if (youtubeButton) youtubeButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0`;
    iframe.title = `${game.title}の紹介動画`;
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    document.getElementById("video-frame").replaceChildren(iframe);
    iframe.focus();
  });
  const localVideo = root.querySelector("video");
  if (localVideo) {
    const showVideoError = () => {
      const frame = document.getElementById("video-frame");
      if (frame.querySelector(".video-error")) return;
      const message = document.createElement("p");
      message.className = "video-error";
      message.setAttribute("role", "status");
      message.textContent = "動画を読み込めませんでした。通信環境をご確認のうえ、ページを再読み込みしてください。";
      frame.replaceChildren(message);
    };
    localVideo.addEventListener("error", showVideoError);
    localVideo.querySelector("source").addEventListener("error", showVideoError);
  }
  observeReveal(root);
  // Direct links such as game.html?id=game01#controls work after dynamic rendering.
  if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant" }));
})();
