# ソフトメディア研究会 — 津田沼祭 ゲーム作品展

ソフトメディア研究会が津田沼祭で展示するゲームを紹介する、スマートフォンを中心に設計したサイトです。HTML・CSS・JavaScriptだけで動きます。ビルド・Node.js・データベースは不要です。

**新しいゲームを追加するときに編集するのは `js/games.js` です。** 一覧と詳細ページのHTMLを書き足す必要はありません。

現在の3作品・画像・紹介映像はすべてサンプルです。公開する前に実際の情報に置き換えてください。サンプル作品そのものをプレイする機能はありません。

## 1. まずサイトを見る

一番簡単な方法は、`index.html` をChromeやSafariで開くことです。作品一覧・詳細・画像の拡大を確認できます。公開に近い環境で確認する場合は、次の方法を使ってください。

1. このフォルダでターミナルを開きます。
2. Python 3がある場合、次を実行します。

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. ブラウザで <http://localhost:8000/> を開きます。
4. 終了するときはターミナルで `Control + C` を押します。

Pythonがない場合は、VS CodeのLive Serverなどでも確認できます。**公開サイトを動かすためにPythonは必要ありません。**

## 2. サークル名・文化祭名を変える

`js/games.js` の最初の `window.EXHIBITION` を編集します。

```js
window.EXHIBITION = {
  name: "ソフトメディア研究会",
  logo: "./assets/images/SofumeLogo_BlackTextAlpha_1920x1080.png",
  year: "2026",
  festivalName: "津田沼祭 ゲーム作品展",
  message: "会場は○号館○○教室です。スタッフにお気軽に声をかけてください。",
  sampleMode: false,
};
```

`sampleMode: false` にすると「サンプル作品」の注記が消えます。実作品へ差し替えてから変更してください。ヘッダー・フッター・ページタイトルに名前が自動で反映されます。トップの案内文は `index.html` で変更できます。JavaScriptが動く前のページタイトル・説明文も変更したい場合は、両方のHTMLの `<title>` と `<meta name="description">` も編集します。

トップの大きな見出しは `festivalName` から表示します。`津田沼祭 ゲーム作品展` のように祭名と展示名の間に半角スペースを入れると、2行に分けて表示します。

団体ロゴは `logo` で指定し、トップ・詳細ページのヘッダーとフッターに表示します。明るい背景用の黒文字版を使用しています。白文字版は暗い背景用として同じ画像フォルダに保存しています。元画像の透明余白は `css/style.css` の `.brand-logo` で表示位置を調整しており、画像ファイル自体は加工していません。異なる寸法のロゴへ変更する場合は、この表示枠も調整してください。JavaScript無効時のロゴも変更するには、両HTMLの `data-site-logo` が付いた画像の `src` を変更します。

## 3. ゲームを追加する

1. `assets/images/games/` に画像を置きます。
2. `js/games.js` をテキストエディターで開きます。
3. `window.GAMES = [` の中の最後の作品の後、末尾の `];` の前に、以下を貼り付けます。
4. 文字と画像パスを置き換えて保存します。
5. ブラウザを再読み込みします。一覧・件数・ジャンルの絞り込み・詳細ページに自動で反映されます。

```js
  {
    id: "game04",
    title: "新しいゲーム",
    subtitle: "ゲームの内容を短く説明。",
    icon: "./assets/images/games/game04-icon.webp",
    iconAlt: "主人公が草原を冒険しているゲームイラスト",
    description: "ゲームの説明です。\nここから次の段落です。",
    genre: "アクション",
    players: "1人",
    playTime: "約5分",
    platform: "Windows PC",
    creators: ["メンバーA", "メンバーB"],
    team: "開発チーム名",
    tip: "まずは移動とジャンプを試してみましょう。",
    controls: [
      {
        device: "キーボード",
        items: [
          { keys: ["W", "A", "S", "D"], action: "移動" },
          { keys: ["Space"], action: "ジャンプ" },
          { keys: ["Esc"], action: "メニュー" },
        ],
      },
    ],
    screenshots: [
      {
        src: "./assets/images/games/game04-screen-1.webp",
        alt: "草原のステージで主人公がジャンプしている画面",
        caption: "最初のステージの足場。",
      },
    ],
    video: null,
  },
```

注意点：

- `id` は**作品ごとに違う半角英数字とハイフン**にします。同じIDを使わないでください。公開後はIDを変えないと既存のリンクを保てます。
- 各作品の最後の `},` のカンマを忘れないでください。
- 文字は `"文字"` のように引用符で囲みます。文章中の改行には `\n` を使います。
- 文章内に半角の `"` を書きたい場合は `\"` とします。日本語の「かぎ括弧」はそのまま使えます。
- 作品は記入した順番で表示されます。順番を変えたい場合は作品の `{ ... },` 全体を移動します。
- 任意のゲーム情報は `""` または `[]` にすると表示されません。操作方法・画像はそれぞれ `controls: []`・`screenshots: []` にするとセクションごと非表示になります。
- タイトルだけ変える場合は、その作品の `title` を変更してください。一覧に表示する短い内容説明は `subtitle` です。キャッチコピーではなく、ゲームの形式や目的を簡潔に記載します。

## 4. アイコン・スクリーンショットを変える

アイコンは正方形がおすすめです。PNG・JPEG・WebP・SVGを使えます。写真やゲーム画面には軽いWebP/JPEGがおすすめです。アイコンは600×600px程度、スクリーンショットは横幅1280px程度を目安に圧縮してください。

1. 画像を `assets/images/games/` に追加します。
2. アイコンなら `icon`、画像の説明なら `iconAlt` を変更します。
3. スクリーンショットは `screenshots` の `[` と `]` の間に `{ src, alt, caption },` を追加します。

```js
screenshots: [
  { src: "./assets/images/games/game04-screen-1.webp", alt: "最初のステージの画面", caption: "最初のステージ" },
  { src: "./assets/images/games/game04-screen-2.webp", alt: "ボスと対戦する画面", caption: "ボスとの対戦画面" },
],
```

`alt` は画像を見られない方にも内容が伝わる短い説明です。`caption` は画像の下に表示する文章です。画像をタップすると拡大でき、左右ボタン・キーボードの矢印キーで移動できます。閉じるボタン・Escキー・背景のクリックで閉じます。

ファイル名は `game04-screen-1.webp` のように半角英数字を推奨します。**大文字・小文字は正確に一致させてください。** `./assets/...` のような相対パスを使い、`/assets/...` やパソコン上の絶対パスは使わないでください。

画像が見つからない場合は自作の `assets/images/placeholder.svg` が表示されます。画像がないことに気づいたら、ファイル名・拡張子を確認してください。

## 5. 操作方法を追加・変更する

`controls` にデバイスごとの項目を追加します。表示は自動でタブになります。

```js
controls: [
  {
    device: "マウス",
    items: [
      { keys: ["左クリック"], action: "攻撃" },
      { keys: ["ドラッグ"], action: "カメラ操作" },
    ],
  },
  {
    device: "スマートフォン",
    items: [
      { keys: ["タップ"], action: "ジャンプ" },
      { keys: ["スワイプ"], action: "移動" },
    ],
  },
],
```

ゲームパッドも同じ形式で登録できます。ボタン表記は実際のコントローラーに合わせてください。タブはTabキーでフォーカスし、左右矢印・Home・Endキーでも切り替えられます。

## 6. 動画を追加する

動画がないときは `video: null` にします。動画のセクションとナビゲーションが表示されなくなります。

### MP4ファイルを置く場合

1. MP4を `assets/videos/` に置きます。
2. 対象作品の `video` を次のように変えます。

```js
video: {
  type: "local",
  src: "./assets/videos/game04.mp4",
  poster: "./assets/images/games/game04-screen-1.webp",
  caption: "ゲーム紹介映像（30秒）。",
},
```

幅1280px以下・H.264形式のMP4を推奨します。通信負荷を抑えるため、短い映像を圧縮して使用してください。自動再生はせず、`preload="none"` で再生操作まで動画の読み込みを抑えます。字幕・音声説明が必要な映像は、字幕を含めるなど内容にも配慮してください。

添付の `mossbound-preview.mp4` は、オリジナルイラストから作成した6秒・音声なしのサンプル映像です。実際のゲームプレイ映像ではありません。

### YouTubeを使う場合

```js
video: {
  type: "youtube",
  id: "実際の11文字の動画ID",
  caption: "ゲームプレイ動画。",
},
```

`https://www.youtube.com/watch?v=ABCDEFGHIJK` なら、`id` は `ABCDEFGHIJK` の部分です。これは形式の説明用で、実在動画の指定ではありません。自分たちの動画IDに置き換えてください。

「動画を読み込む」を押すまではYouTubeに接続しません。押した後にプライバシー強化モードのプレーヤーを表示します。埋め込みを許可した動画を指定してください。動画の公開状態・年齢制限・通信環境によって再生できないことがあります。

## 7. 作品を削除する

`js/games.js` の対象作品の `{` から対応する `},` までを削除します。使わなくなった画像・動画は、他の作品が参照していないことを確認してから削除してください。削除した作品のURLを開くと「この作品は見つかりませんでした」と一覧へ戻るボタンを表示します。

## 8. GitHub Pagesで公開する

このフォルダは専用の新しいリポジトリとして利用してください。既存リポジトリを置き換える必要はありません。

### GitHubの画面で公開する方法

1. GitHubで右上の **＋ → New repository** を選びます。
2. Repository nameを **`game-exhibition`** にして、**Public** を選びます。すでに同名のものがある場合は別の新しい名前にしてください。
3. ローカルからpushする場合、README・.gitignore・Licenseの自動追加は選ばず、**Create repository** を押します。
4. すでにローカルに初回コミットがある場合は、以下を実行します。`YOUR-ACCOUNT` は自分のGitHubアカウント名です。

   ```sh
   git remote add origin https://github.com/YOUR-ACCOUNT/game-exhibition.git
   git push -u origin main
   ```

   Gitを使わない場合は、リポジトリの **uploading an existing file / Add file → Upload files** で `index.html`・`game.html`・`css`・`js`・`assets` をフォルダ構造を保ってアップロードできます。ブラウザアップロードにはファイルサイズ制限があるため、大きな動画は圧縮してください。

5. リポジトリの **Settings → Pages** を開きます。
6. **Build and deployment → Source** を **Deploy from a branch** にします。
7. **Branch** を **main**、フォルダを **/(root)** にして **Save** を押します。
8. 公開処理が完了したらSettings → Pagesの **Visit site** を開きます。Actions画面でも進行状況を確認できます。

設定の詳細：[GitHub公式：公開元を設定する](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### Gitの初期設定がまだの場合

すでに `.git` がある場合、この手順は不要です。まだ初期化していないコピーでのみ、次を実行します。

```sh
git init -b main
git add index.html game.html css js assets scripts README.md .gitignore .nojekyll
git commit -m "Build game exhibition website"
```

ユーザー名の設定を求められた場合は、自分の名前とGitHubのメールアドレスを **このリポジトリに対して** 設定し、commitをやり直します。

```sh
git config user.name "あなたの名前"
git config user.email "GitHubに登録したメールアドレス"
```

### 公開後の更新

```sh
git add js/games.js assets
git commit -m "Update exhibition games"
git push
```

HTMLやCSSを変更した場合は、そのファイルも `git add` に指定します。GitHub上で直接編集してコミットしても更新されます。反映されない場合は、Actionsの完了を確認してブラウザを再読み込みしてください。

## 9. 公開URLとQRコード

リポジトリ名が `game-exhibition` の場合、トップページは次の形式です。

```text
https://YOUR-ACCOUNT.github.io/game-exhibition/
```

**会場共通のQRコードには、このトップページの公開URLを設定してください。** `localhost` やGitHubのリポジトリ画面のURLは設定しません。正確なURLは必ず **Settings → Pages → Visit site** で確認します。

作品ごとの案内に直接リンクする場合：

```text
https://YOUR-ACCOUNT.github.io/game-exhibition/game.html?id=game01
```

操作方法へ直接リンクする場合：

```text
https://YOUR-ACCOUNT.github.io/game-exhibition/game.html?id=game01#controls
```

QRコードを印刷する前に、スマートフォンのモバイル回線で公開URLを開き、画像・操作方法・動画を確認してください。

## 10. ファイル構成

```text
.
├── index.html                  作品一覧・展示案内
├── game.html                   共通の作品詳細ページ
├── css/style.css               全体のデザイン・レスポンシブ・アニメーション
├── js/
│   ├── games.js                ★ サイト設定・作品データ（主な更新箇所）
│   ├── startup.js              初回表示のゲーム機起動アニメーション
│   ├── common.js               共通表示・画像フォールバック・スクロール演出
│   ├── main.js                 一覧・ジャンル絞り込み
│   └── game-detail.js          詳細・操作タブ・ギャラリー・動画
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── placeholder.svg
│   │   └── games/              アイコン・スクリーンショット
│   └── videos/                 ローカルMP4
├── scripts/
│   ├── generate_art.py         サンプルSVGの再生成（任意）
│   └── check-site.cjs          ブラウザ動作検証（開発者向け・任意）
├── .gitignore
├── .nojekyll                   静的ファイルをそのまま公開するための設定
└── README.md
```

サイトの動作に外部ライブラリや外部フォントは使っていません。装飾はCSS、画像は自作SVGです。JSをES Modulesにせず通常のdeferスクリプトとして読み込んでいるので、ファイルを直接開いた場合も作品データを参照できます。

## 11. 確認・開発用メモ

- 320 / 375 / 390 / 430pxで横にはみ出さないことを確認します。
- 作品カード・一覧への戻りリンク・操作タブ・画像の拡大とEscキー・MP4再生を確認します。
- `game.html?id=unknown` と `game.html` のエラー案内を確認します。
- `prefers-reduced-motion` を尊重し、端末で動きを減らす設定のときはアニメーションとスムーズスクロールを停止します。
- トップページの初回表示時に、ゲーム機のアイコンが点灯する約1.5秒の起動アニメーションを表示します。同じタブでは繰り返さず、詳細ページや `#games` などへの直接リンクでは表示しません。タップ・キー入力・スクロールで即座に終了できます。動きを減らす設定やJavaScript無効時は省略します。もう一度確認する場合は、新しいプライベートウィンドウで開いてください。
- 外部サービスに送信するフォームやアクセス解析はありません。YouTubeはユーザーが読み込みを押したときだけ接続します。
- サンプルSVGの再生成は `python3 scripts/generate_art.py` です。実際の作品画像は別名で保存すれば影響しません。

開発者向けのブラウザ検証は任意です。実行する場合だけ、プロジェクト外の一時フォルダ等に `playwright` と `@axe-core/playwright` をインストールし、Chromeで `scripts/check-site.cjs` を実行します。Node.jsやこれらの依存は公開サイトには不要です。

macOS / Linuxでの実行例（Google ChromeとNode.jsが必要）：

```sh
npm install --prefix /tmp/game-exhibition-checks --no-save playwright @axe-core/playwright
# 別のターミナルで、このサイトのPythonプレビューサーバーを起動しておきます。
NODE_PATH=/tmp/game-exhibition-checks/node_modules node scripts/check-site.cjs
```

別の公開ルートで確認するときは `SITE_URL=https://example.com/game-exhibition/` のように指定できます。実サイトに変更を加えるテストではなく、ブラウザ内でサンプルデータを差し替えて確認します。スクリーンショットはGit管理外の `test-results/` に保存されます。

2026-09-29に、Chromeで320 / 375 / 390 / 430 / 768 / 1440pxの全作品ページ、タッチ操作、MP4再生、サブディレクトリ配置、0・30作品、画像・動画の欠損、YouTube埋め込み生成を確認しました。YouTubeの検証は外部に通信しない模擬プレーヤーによるもので、実動画は登録後に別途確認してください。axeによるWCAG A/AAの自動検査では検出事項0件でした。実機・SafariやFirefoxでの確認は含みません。
