/* サイトの名前と全作品をここで管理します。追加方法はREADME.mdを参照してください。 */
window.EXHIBITION = {
  name: "ソフトメディア研究会",
  logo: "./assets/images/SofumeLogo_BlackTextAlpha_1920x1080.png",
  year: "2026",
  festivalName: "津田沼祭 P班作品展",
  message: "操作や展示について不明な点は、P班ブースのスタッフにお尋ねください。",
  sampleMode: false,
};

// 本提出の作品とユーザー指定の追加作品を掲載。照合元・表記変更は docs/submission-reconciliation.md を参照。
window.GAMES = [
  {
    "id": "garagara",
    "title": "身体組み替えアクション『ガラガラ』",
    "subtitle": "",
    "icon": "./assets/images/games/garagara.png",
    "iconAlt": "身体組み替えアクション『ガラガラ』のゲームアイコン",
    "description": "あなたは廃棄場に捨てられた、型落ちのガラクタロボット。\n拾ったパーツで身体を組み替えながら、下へ降りていく短編 アクションゲーム。\n足をタイヤに替えれば、跳ぶ力の代わりに走る力を。\n腕をワイヤーフックに替えれば、物を持つ力の代わりにスウィングが可能。\nしかし、完全なパーツはない。",
    "tags": [
      "アクション"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "フケフケ大明神"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード",
        "items": [
          {
            "keys": [
              "W",
              "A",
              "S",
              "D"
            ],
            "action": "移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "H",
              "J"
            ],
            "action": "左腕パーツのアクション"
          },
          {
            "keys": [
              "K",
              "L"
            ],
            "action": "右腕パーツのアクション"
          },
          {
            "keys": [
              "E"
            ],
            "action": "エレベーター搭乗"
          },
          {
            "keys": [
              "R"
            ],
            "action": "リトライ"
          },
          {
            "keys": [
              "R 長押し"
            ],
            "action": "一つ戻る"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ポーズ"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": null,
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "kaginawa-hisho",
    "title": "鉤縄飛翔",
    "subtitle": "",
    "icon": "./assets/images/games/kaginawa-hisho.png",
    "iconAlt": "鉤縄飛翔のゲームアイコン",
    "description": "鈎縄をうまく使い，ゴールを目指しましょう．\n毒の沼や敵があなたの行く手を阻みます．\nアクロバティックな操作でかわしましょう．",
    "tags": [
      "アクション",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "HarryNox"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "A"
            ],
            "action": "左へ移動"
          },
          {
            "keys": [
              "D"
            ],
            "action": "右へ移動"
          },
          {
            "keys": [
              "クリック"
            ],
            "action": "鉤縄を発射"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "壁ジャンプ"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/kaginawa-hisho.mp4",
      "poster": "./assets/images/games/kaginawa-hisho.png"
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "memory-line-puzzle",
    "title": "MemoryLinePuzzle",
    "subtitle": "",
    "icon": "./assets/images/games/memory-line-puzzle.png",
    "iconAlt": "MemoryLinePuzzleのゲームアイコン",
    "description": "宝石を全て集めてゴールしましょう．\n主人公の女の子は引いた線の上を移動します．\nゲームが始まると，最初は宝石や障害物の位置を見ることができます．\nしかし，線を引く時は宝石や障害物の位置は見えなくなります．\nまた，女の子は体力が無いので，長すぎる線を引くと疲れてしまいます．\n工夫して線を引き，宝石を全て集めてゴールしましょう．",
    "tags": [
      "パズル",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "HarryNox"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "マウス・キーボード",
        "items": [
          {
            "keys": [
              "クリック"
            ],
            "action": "選択"
          },
          {
            "keys": [
              "クリックしたままドラッグ"
            ],
            "action": "線を引く"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/memory-line-puzzle.mp4",
      "poster": "./assets/images/games/memory-line-puzzle.png"
    },
    "inputDevices": [
      "マウス",
      "キーボード"
    ]
  },
  {
    "id": "typing-rocket",
    "title": "タイピング・ロケット",
    "subtitle": "",
    "icon": "./assets/images/games/typing-rocket.png",
    "iconAlt": "タイピング・ロケットのゲームアイコン",
    "description": "タイピング練習をしてロケットを飛ばし，宇宙を目指しましょう．\n入力文字数と正確さによってロケットの安全性と，飛ぶ距離が決まります．\n無事に発射できたらランキングに登録することもできます．\nハイスコアと宇宙を目指しましょう．",
    "tags": [
      "2D",
      "ソロプレイ",
      "タイピング"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "HarryNox"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "クリック"
            ],
            "action": "選択"
          },
          {
            "keys": [
              "文字キー"
            ],
            "action": "タイピング"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/typing-rocket.mp4",
      "poster": "./assets/images/games/typing-rocket.png"
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "tori-wa-taberaretakunai",
    "title": "鳥は食べられたくない",
    "subtitle": "",
    "icon": "./assets/images/games/tori-wa-taberaretakunai.png",
    "iconAlt": "鳥は食べられたくないの作品アイコン",
    "description": "火や箸などが上から落ちてくるものを避ける\n3分間頑張って生き残るゲーム\n最初はひよこだが、落ちてきたものに5回当たるとニワトリに成長する。\n唐揚げにならないように生き残る",
    "tags": [
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "3分",
    "platform": "",
    "creators": [
      "ポンデコ"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード",
        "items": [
          {
            "keys": [
              "A"
            ],
            "action": "左へ移動"
          },
          {
            "keys": [
              "D"
            ],
            "action": "右へ移動"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/tori-wa-taberaretakunai.mp4",
      "poster": "./assets/images/games/tori-wa-taberaretakunai.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード"
    ]
  },
  {
    "id": "goodragshop",
    "title": "Goodragshop",
    "subtitle": "",
    "icon": "./assets/images/games/goodragshop.png",
    "iconAlt": "Goodragshopの作品アイコン",
    "description": "債務者による平和な農業シミュレーションゲーム。\nプレイヤーは植物を育て、売り捌き借金完済を目指します。栽培物が売れ残った場合は、\nご自身で処理していただくだけの簡単なお仕事です。\n警察による嫌疑を躱す必要があります。また作物処理による副作用に関して責任を負いま\nせん。\n\n\nゲームの流れ\n種を購入→栽培→売る→１日の終わりにその日の返済と証拠隠滅→完済まで繰り返す",
    "tags": [
      "シミュレーション",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "ten"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "マウス・キーボード",
        "items": [
          {
            "keys": [
              "クリック"
            ],
            "action": "ショップ・ボタンの選択、成熟した作物の収穫"
          },
          {
            "keys": [
              "ドラッグ",
              "クリック"
            ],
            "action": "種を選択して畑に植える"
          },
          {
            "keys": [
              "売るボタン",
              "断るボタン"
            ],
            "action": "取引する・取引を終了"
          },
          {
            "keys": [
              "作物を一つ食べるボタン"
            ],
            "action": "1日の終わりに作物を処理"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/goodragshop.mp4",
      "poster": "./assets/images/games/goodragshop.png",
      "caption": ""
    },
    "inputDevices": [
      "マウス",
      "キーボード"
    ]
  },
  {
    "id": "danfall",
    "title": "だんふぉ～る",
    "subtitle": "",
    "icon": "./assets/images/games/danfall.png",
    "iconAlt": "だんふぉ～るの作品アイコン",
    "description": "段ボールを積むだけの簡単なアルバイトです♪\n物流センターでアルバイトをすることになったあなた。お仕事は段ボールを積み上げる\nだけの簡単なお仕事らしいが……？\n早く、きれいに、たくさん段ボールを積み上げよう。目指せ最高売り上げ！\nただし、段ボールは落とさないように気を付けてね。\n\n制限時間内に段ボールを積んだ数を競う、一人用パズルゲームです。\nリザルト画面ではランキングが表示されるので、是非一位を狙ってみてください！",
    "tags": [
      "パズル",
      "2D",
      "ソロプレイ"
    ],
    "players": "1人",
    "playTime": "",
    "platform": "",
    "creators": [
      "あんこ"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "マウス"
            ],
            "action": "選択（タイトル・ストーリー・リザルトシーン）"
          },
          {
            "keys": [
              "←",
              "→"
            ],
            "action": "段ボールの移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "段ボールを落とす"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/danfall.mp4",
      "poster": "./assets/images/games/danfall.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "confession-tower",
    "title": "confession tower",
    "subtitle": "",
    "icon": "./assets/images/games/confession-tower.png",
    "iconAlt": "confession towerの作品アイコン",
    "description": "1/3の確率をあててどんどん階層（告白成功の人数）をあげ倍率を上げていくシミュレーショ\nン？ゲーム\n\n\nゲームの流れ\n最初の説明文を読む→スタートボタン（いざ、尋常に勝負！）を押す→貢ぎ額を設定しス\nタートを押す→1pplから好きなボタンを押していく→途中で終わりたければキャッシュアウト\nボタンを押し、最終階層までいければ貢ぎ額が倍で返ってくる。",
    "tags": [
      "シミュレーション",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "瑠璃"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "マウス",
        "items": [
          {
            "keys": [
              "クリック"
            ],
            "action": "スタート・貢ぎ額の設定・ボタン選択"
          },
          {
            "keys": [
              "キャッシュアウトボタン"
            ],
            "action": "途中で終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/confession-tower.mp4",
      "poster": "./assets/images/games/confession-tower.png",
      "caption": ""
    },
    "inputDevices": [
      "マウス"
    ]
  },
  {
    "id": "magnet-synapse",
    "title": ".｡ﾟ+..ℳ𝒶𝑔𝓃ℯ𝓉 𝒮𝓎𝓃𝒶𝓅𝓈ℯ｡+..｡*ﾟ+",
    "subtitle": "",
    "icon": "./assets/images/games/magnet-synapse.png",
    "iconAlt": ".｡ﾟ+..ℳ𝒶𝑔𝓃ℯ𝓉 𝒮𝓎𝓃𝒶𝓅𝓈ℯ｡+..｡*ﾟ+のゲームアイコン",
    "description": "◎コンセプト\n下手したら死を引き起こすドーパミンドパドパな白い花を摂取して磁石の力を得つつ，無垢\nな女の子が恋人を探しに冒険する2D横スクロールアクションゲームです。\n\nゲームの中にある「白い花」をすべてとると、エンディングが見れるかも...？\n\n＊このゲームにはジャンプボタンがありません＊",
    "tags": [
      "アクション",
      "ホラー",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "✧‧˚⌖.° 石 ✧‧˚⌖.°（4DC2026Summer 4班）"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "A",
              "D"
            ],
            "action": "左右移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "磁石切り替え"
          },
          {
            "keys": [
              "左クリック"
            ],
            "action": "ボタンを押すなど"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/magnet-synapse.mp4",
      "poster": "./assets/images/games/magnet-synapse.png"
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "hasami-shogi",
    "title": "挟将",
    "subtitle": "",
    "icon": "./assets/images/games/hasami-shogi.png",
    "iconAlt": "挟将の作品アイコン",
    "description": "◎コンセプト\nリバーシの盤で駒を挟み合う二人対戦ボードゲームです。挟んで裏返した相手の駒の数字がダメ\nージになり、相手の体力（先手136・後手134）を先に0 にした方が勝ちです。対局の前に配ら\nれた3 枚のスキルカードから1 枚を選び、ゲージが満タンになるたびに使えます。\nCPU 対戦（イージー／ノーマル／ハード）のほか、勝ち続けるほどCPU が強くなる「エンドレ\nス」で連勝数のランキングに挑めます。友だちとは同じ端末の2 人対戦か、招待リンクでのオン\nライン対戦で遊べます。\n遊ぶ：https://kyosho.rukiharukichi.com/\n＊はじめての人はメニューの「遊び方」から＊",
    "tags": [
      "パズル",
      "ソロプレイ",
      "マルチプレイ",
      "対戦"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "るきは"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "マウス・キーボード",
        "items": [
          {
            "keys": [
              "持ち駒をクリック"
            ],
            "action": "置く駒を選ぶ"
          },
          {
            "keys": [
              "マスにカーソルを合わせる"
            ],
            "action": "ダメージと回復の予測を見る"
          },
          {
            "keys": [
              "光っているマスをクリック"
            ],
            "action": "駒を置く"
          },
          {
            "keys": [
              "名札のカードをクリック"
            ],
            "action": "スキルを使う（ゲージ満タン時）"
          },
          {
            "keys": [
              "右上のメニュー"
            ],
            "action": "メニューに戻る"
          },
          {
            "keys": [
              "Enter",
              "Space",
              "Esc"
            ],
            "action": "演出を飛ばす"
          }
        ]
      },
      {
        "device": "タッチ",
        "items": [
          {
            "keys": [
              "マスを1回タップ"
            ],
            "action": "ダメージと回復の予測を見る"
          },
          {
            "keys": [
              "マスを2回タップ"
            ],
            "action": "駒を置く"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/hasami-shogi.mp4",
      "poster": "./assets/images/games/hasami-shogi.png",
      "caption": ""
    },
    "inputDevices": [
      "マウス",
      "タッチ",
      "キーボード"
    ]
  },
  {
    "id": "star-shooting",
    "title": "スターシューティング",
    "subtitle": "",
    "icon": "./assets/images/games/star-shooting.png",
    "iconAlt": "スターシューティングの作品アイコン",
    "description": "敵の弾を避けて全部倒す\n敵の弾に3回当たったらゲームオーバー\n発射する弾がなくなったら自動でリロードされるが気を付けて敵をやっつけていく",
    "tags": [
      "シューティング",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "ポンデコ"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "弾発射"
          },
          {
            "keys": [
              "マウス移動"
            ],
            "action": "移動"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/star-shooting.mp4",
      "poster": "./assets/images/games/star-shooting.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "phaselink",
    "title": "PhaseLINK",
    "subtitle": "",
    "icon": "./assets/images/games/phaselink.png",
    "iconAlt": "PhaseLINKの作品アイコン",
    "description": "キーボードを使用した音楽ゲーム。自分で難易度を選びプレイ。譜面を作り、共有すること\nも可能。\n\nゲームの流れ:\n曲を選択→難易度を選択→プレイ",
    "tags": [
      "リズム"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "yu"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "W",
              "A",
              "S",
              "D",
              "矢印キー",
              "マウス"
            ],
            "action": "UIの移動・決定"
          },
          {
            "keys": [
              "ASDF",
              "JKL+",
              "QWER",
              "UIOP",
              "Shift"
            ],
            "action": "演奏（設定で変更可能）"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "戻る・ゲーム終了へのアクセス"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/phaselink.mp4",
      "poster": "./assets/images/games/phaselink.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "re-color",
    "title": "RE:COLOR",
    "subtitle": "",
    "icon": "./assets/images/games/re-color.gif",
    "iconAlt": "RE:COLORの作品アイコン",
    "description": "色付きの壁に弾丸を跳ね返らせると、弾丸がその色になります。​\n跳ね返らせた色付きの弾丸を敵に当てると、同じ色の敵を倒せます。\n​\nタイトル画面でRキーを押すと、隠しモード【スコアアタック】をプレイできます。",
    "tags": [
      "シューティング",
      "パズル",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "おいも帝国(TOAH-Χ,Takumi,cone i7)"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "選択"
          },
          {
            "keys": [
              "左クリックを押しながらドラッグ"
            ],
            "action": "向き変更"
          },
          {
            "keys": [
              "R"
            ],
            "action": "隠しモード【スコアアタック】をプレイ（タイトル画面）"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/re-color.mp4",
      "poster": "./assets/images/games/re-color.gif",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "diva-player",
    "title": "DIVA Player",
    "subtitle": "",
    "icon": "./assets/images/games/diva-player.png",
    "iconAlt": "DIVA Playerの作品アイコン",
    "description": "ボカロ曲を探して聴くための音楽プレイヤーです。曲のデータは VocaDB から取っていま\nす。YouTube・ニコニコ動画・SoundCloud・Bilibili にある曲をまとめて検索し、その場で再生\nできます。\n検索では曲名やP名、歌い手のほか、タグ・再生数・BPM・楽器・歌詞の一部でも絞り込めま\nす。聴いた曲に星で評価を付けると、好みに近い曲がおすすめに並びます。\n「サビ発掘」はサビの候補を15秒ずつ続けて流すモードです。気に入った曲はその場で保\n存できます。「曲調マップ」は、音の特徴が似た曲どうしを近くに並べた地図です。知ってい\nる曲の周りから新しい曲を探せます。\nプレイリストやフォルダーで曲を整理できます。YouTube の公開プレイリストや、ニコニコ動\n画のマイリストも取り込めます。\n・使い方の流れ：\n検索する → 再生する → 星を付ける → おすすめから次の曲へ",
    "tags": [
      "ゲームではない"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "cone i7"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "曲を再生する・ボタンを押す"
          },
          {
            "keys": [
              "/"
            ],
            "action": "検索"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "再生／一時停止"
          },
          {
            "keys": [
              "←",
              "→"
            ],
            "action": "5秒戻る／進む"
          },
          {
            "keys": [
              "Shift ＋ ←",
              "Shift ＋ →"
            ],
            "action": "前の曲／次の曲"
          },
          {
            "keys": [
              "M"
            ],
            "action": "ミュート"
          },
          {
            "keys": [
              "Ctrl ＋ Z"
            ],
            "action": "元に戻す"
          },
          {
            "keys": [
              "?"
            ],
            "action": "ショートカットの一覧"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "開いている画面を閉じる"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/diva-player.mp4",
      "poster": "./assets/images/games/diva-player.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "magical-neverland",
    "title": "ぐるぐる？マジカル！？ねばーらんど",
    "subtitle": "",
    "icon": "./assets/images/games/magical-neverland.gif",
    "iconAlt": "ぐるぐる？マジカル！？ねばーらんどのゲームアイコン",
    "description": "世界を襲った謎の砂漠化。魔法少女の納豆院ねばりは緑の大地を取り戻すために海賊たち\nの潜むダンジョンへ向かいます。手描きイラストとボイスで楽しむ見下ろし型ローグライト・アク\nションシューティングです。\nレベルアップ時に3枚のカードからスキルを1つ選びます。全13種類のスキルを最大6つまで装\n備できます。組み合わせを工夫して自分に合った戦い方を見つけましょう。敵にねばねばを溜\nめるほど与えるダメージが増えます。特定のスキル2種類をLv2にすると合成スキルも選べるよ\nうになります。\n宝箱やショップで戦力を整えて3層目のボス撃破を目指します。持ち帰ったソウルで永続強化\nを行うと次の冒険を有利に進められます。\n・ゲームの流れ：\n永続強化→探索・戦闘→スキル獲得・強化→ボスに挑戦\n※体験版は3層まで遊べます。",
    "tags": [
      "アクション",
      "シューティング",
      "RPG",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "いったん納豆のことを忘れてもいいと思います。(4DC2026Summer 4班)"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "W",
              "A",
              "S",
              "D"
            ],
            "action": "上・左・下・右へ移動"
          },
          {
            "keys": [
              "マウス移動"
            ],
            "action": "照準"
          },
          {
            "keys": [
              "左クリック"
            ],
            "action": "攻撃（押しっぱなしで連射）"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "会話・購入・宝箱を開ける"
          },
          {
            "keys": [
              "Esc",
              "設定ボタン"
            ],
            "action": "設定メニュー"
          },
          {
            "keys": [
              "Shift",
              "右クリック"
            ],
            "action": "突進攻撃（スキル「突進攻撃」取得時）"
          },
          {
            "keys": [
              "ミニマップを左クリック"
            ],
            "action": "マップ拡大・ステータス確認"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/magical-neverland.mp4",
      "poster": "./assets/images/games/magical-neverland.gif"
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "gearcraft-recreated",
    "title": "GearCraft:ReCreated",
    "subtitle": "",
    "icon": "./assets/images/games/gearcraft-recreated.jpg",
    "iconAlt": "GearCraft:ReCreatedのゲームアイコン",
    "description": "去年の沼祭からのリメイク作品\nスチームパンク風2Dローグライトアクション\n\n迫りくる敵兵から、背後の門を守れ！\nガラクタをかき集め、武器を組み上げろ！\n\n蒸気と歯車が交錯する帝国で、己の責務を全うせよ。",
    "tags": [
      "アクション",
      "シューティング",
      "2D",
      "ソロプレイ",
      "ローグライク"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "Takumi"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "選択・攻撃"
          },
          {
            "keys": [
              "A",
              "D"
            ],
            "action": "左右移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "Q"
            ],
            "action": "歯車を1枚消費してBOOSTを起動"
          },
          {
            "keys": [
              "E"
            ],
            "action": "バリア起動（バリアモジュール所持時）"
          },
          {
            "keys": [
              "左Shift"
            ],
            "action": "モード切り替え（一部の武器のみ）"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/gearcraft-recreated.mp4",
      "poster": "./assets/images/games/gearcraft-recreated.jpg"
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "sabotan",
    "title": "サボたんっ！～IQ3,されど800db～",
    "subtitle": "",
    "icon": "./assets/images/games/sabotan.png",
    "iconAlt": "サボたんっ！～IQ3,されど800db～の作品アイコン",
    "description": "ロボットサボテン探偵「サボたん」になって、Astral博士殺害事件の真相を追う2D推理アク\nションゲーム！\nサボたんは、shiftキーと様々なキーを組み合わせることで、いろいろな動きをするぞ！\n事件の真相と、サボたんの可愛さに注目！！",
    "tags": [],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "サボtral800db特殊詐欺団（4DC2026Summer 1班）"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "A / D",
              "← / →"
            ],
            "action": "左右移動"
          },
          {
            "keys": [
              "S",
              "↓"
            ],
            "action": "人物に話しかける・調べる"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "メニュー"
          },
          {
            "keys": [
              "Shift ＋ E"
            ],
            "action": "トゲ飛ばし（もう一度Shift、またはShift＋Eで照準にトゲ発射）"
          },
          {
            "keys": [
              "壁に向かってShift"
            ],
            "action": "壁張り付き"
          },
          {
            "keys": [
              "Shift ＋ 左右移動キー"
            ],
            "action": "ローリング"
          },
          {
            "keys": [
              "Shift ＋ ↑",
              "Shift ＋ W"
            ],
            "action": "ロケット（普段のジャンプより高く飛ぶ。左右移動はできない）"
          },
          {
            "keys": [
              "Shift ＋ R"
            ],
            "action": "タイムLUUP（事件前の過去に移動）"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/sabotan.mp4",
      "poster": "./assets/images/games/sabotan.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "toritori-tataki",
    "title": "トリトリ叩き",
    "subtitle": "",
    "icon": "./assets/images/games/toritori-tataki.png",
    "iconAlt": "トリトリ叩きの作品アイコン",
    "description": "鶏に似た謎の生物「トリトリ」をぶっ叩くモグラ叩き系ミニゲーム\n\n高いスコアを取ると、トリトリが褒めてくれるかも！？",
    "tags": [],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "Takumi"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "マウス・キーボード",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "トリトリを叩く"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/toritori-tataki.mp4",
      "poster": "./assets/images/games/toritori-tataki.png",
      "caption": ""
    },
    "inputDevices": [
      "マウス",
      "キーボード"
    ]
  },
  {
    "id": "palca-defector",
    "title": "パルカディフェクタ",
    "subtitle": "",
    "icon": "./assets/images/games/palca-defector.png",
    "iconAlt": "パルカディフェクタの作品アイコン",
    "description": "◎コンセプト\n新たな生命が紡がれなくなった世界で生きる一人の少女。\nある時から少女には影がつくようになり、影に対する2つの権能が扱えるように。\n権能を組み合わせて往時の世界を探索しましょう。",
    "tags": [
      "アクション",
      "パズル",
      "2D",
      "ソロプレイ",
      "協力"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "TOAH-Χ"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "A",
              "D"
            ],
            "action": "左右移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "Q"
            ],
            "action": "「解放（静止状態）」（クールタイム：5秒）"
          },
          {
            "keys": [
              "A / D ＋ Q"
            ],
            "action": "「解放（慣性移動付与）」（クールタイム：5秒）"
          },
          {
            "keys": [
              "E"
            ],
            "action": "「新生」（クールタイム：1秒）"
          },
          {
            "keys": [
              "左クリック"
            ],
            "action": "ボタンを押すなど"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/palca-defector.mp4",
      "poster": "./assets/images/games/palca-defector.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "shitetu-kantai",
    "title": "紫鉄艦隊",
    "subtitle": "",
    "icon": "./assets/images/games/shitetu-kantai.png",
    "iconAlt": "紫鉄艦隊の作品アイコン",
    "description": "◎コンセプト\n宇宙を舞台とした艦隊戦略シミュレーションです。Webならではの手軽さや交流、そして難し\nさをお伝えできたらと思います。\n\n＊多分まだバグは多いです。＊",
    "tags": [
      "シミュレーション",
      "ストラテジー",
      "3D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "ひしがた"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "ボタンを押すなど"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": null,
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "final-boss",
    "title": "FINAL BOSS",
    "subtitle": "",
    "icon": "./assets/images/games/final-boss.png",
    "iconAlt": "FINAL BOSSの作品アイコン",
    "description": "◎コンセプト\n武装を選び、弾幕を張り、BOSSを操るのだ！\n武器の組み合わせを考えながら敵を突破し、ステージの最後に待ち受ける強大なボスに挑\nむ2Dシューティングゲームです。\n多彩な攻撃を扱い、弾幕を張り、敵機体を圧倒せよ！",
    "tags": [
      "シューティング",
      "2D"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "はやっぷ"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "W / A / S / D",
              "矢印キー"
            ],
            "action": "上下左右移動"
          },
          {
            "keys": [
              "1",
              "2",
              "3"
            ],
            "action": "対応する砲セットを選択"
          },
          {
            "keys": [
              "左クリック"
            ],
            "action": "射撃"
          },
          {
            "keys": [
              "右クリック"
            ],
            "action": "特殊射撃（長押しで照準を合わせ、離して発射）"
          },
          {
            "keys": [
              "ホイール上下"
            ],
            "action": "武器の切り替え"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "一時停止（ポーズ）。ゲーム終了ボタンもある"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/final-boss-5f9a2d919163.mp4",
      "poster": "./assets/images/games/final-boss.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "twinfront",
    "title": "TwinFront",
    "subtitle": "",
    "icon": "./assets/images/games/twinfront.gif",
    "iconAlt": "TwinFrontの作品アイコン",
    "description": "迷路を作って守り、モブを送って攻める対戦型タワーディフェンスです。自陣の盤面にタ\nワーを置くと、敵のモブはそれをよけて進みます。置き方しだいで敵の歩く道が長くなり、そ\nのぶん長くタワーで撃てます。\nモブを相手の盤面へ送ると、自分の収入が継続的に増えます。守りを固めるか攻めて稼ぐ\nか、お金の分け方が勝負を決めます。敵のライフを0にするとステージ攻略で、CPU が守る5\nつのステージを攻略するとクリアです。\nステージの合間と戦闘中に、3枚のカードから1枚を選びます。選んだカードによって新しい\nタワーやモブが増えるか、レベルが上がります。敵を倒すとゲージがたまり、満タンで必殺技\nを撃てます。必殺技は準備中に、雷雨・援軍・大収穫・総攻撃・回復から1つ選びます。\n・ゲームの流れ：\nカードを選ぶ → 迷路を作る → 開戦 → 攻めと守り → 攻略",
    "tags": [],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "cone i7"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "",
    "controls": [
      {
        "device": "キーボード・マウス",
        "items": [
          {
            "keys": [
              "左クリック"
            ],
            "action": "カードを選ぶ・タワーを置く・置いたタワーを選ぶ"
          },
          {
            "keys": [
              "右クリック"
            ],
            "action": "タワーを置くのをやめる"
          },
          {
            "keys": [
              "1〜7"
            ],
            "action": "建てるタワーを選ぶ"
          },
          {
            "keys": [
              "Q〜I"
            ],
            "action": "モブを送る"
          },
          {
            "keys": [
              "Shift ＋ Q〜I",
              "モブのカードを右クリック"
            ],
            "action": "自動送りの切り替え"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "訓練（そのステージのあいだ送るモブが強くなる）"
          },
          {
            "keys": [
              "C"
            ],
            "action": "戦闘中に届いたカードを引く"
          },
          {
            "keys": [
              "F"
            ],
            "action": "必殺技"
          },
          {
            "keys": [
              "P"
            ],
            "action": "一時停止"
          },
          {
            "keys": [
              "M"
            ],
            "action": "BGMのオン／オフ"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "メニュー（タイトルへ戻る）"
          },
          {
            "keys": [
              "タイトル画面の「ゲーム終了」"
            ],
            "action": "ゲームの終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/twinfront.mp4",
      "poster": "./assets/images/games/twinfront.gif",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "akagari",
    "title": "赤刈",
    "subtitle": "",
    "icon": "./assets/images/games/akagari.png",
    "iconAlt": "赤刈の作品アイコン",
    "description": "鬼ごっこの合戦バージョンです。鬼から逃げる、鬼が落とす金銭を集めることでゲージをた\nめて、逆に鬼を倒してください。\n\nゲームの流れ\nとりあえず逃げる→余裕があればコインを集める→勝てると思えるほどにゲージをためる→\n覚悟を決めて敵に突っ込む→敵を倒す→最初に戻る",
    "tags": [
      "アクション",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "D"
    ],
    "team": "",
    "gameCard": "",
    "tip": "",
    "controls": [
      {
        "device": "戦闘画面（キーボード）",
        "items": [
          {
            "keys": [
              "W / A / S / D",
              "矢印キー"
            ],
            "action": "押した方向（主体は自分）に移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "アクション（押している間、体ゲージを消費して高速移動・壁破壊。完全に切れると、半分以上回復するまで高速移動不可）"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ポーズ画面に移動"
          }
        ]
      },
      {
        "device": "ポーズ画面（キーボード）",
        "items": [
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲームの終了を選択"
          },
          {
            "keys": [
              "Y"
            ],
            "action": "ゲームの終了（終了選択時）"
          },
          {
            "keys": [
              "Y以外のキー"
            ],
            "action": "戻る（終了選択時）"
          },
          {
            "keys": [
              "R",
              "0〜6"
            ],
            "action": "Rを押した後、0〜6のキーでゲームステージを変更"
          },
          {
            "keys": [
              "O"
            ],
            "action": "操作説明（できることとゲージの説明）"
          },
          {
            "keys": [
              "K"
            ],
            "action": "クレジットの表記"
          },
          {
            "keys": [
              "B"
            ],
            "action": "今のゲームに戻る"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/akagari.mp4",
      "poster": "./assets/images/games/akagari.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード"
    ]
  },
  {
    "id": "furafura-drunk-route",
    "title": "ふらふらドランクルート",
    "subtitle": "",
    "icon": "./assets/images/games/furafura-drunk-route.png",
    "iconAlt": "ふらふらドランクルートの作品アイコン",
    "description": "",
    "tags": [
      "アクション",
      "2D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "しい"
    ],
    "team": "",
    "gameCard": "",
    "tip": "",
    "controls": [
      {
        "device": "キーボード",
        "items": [
          {
            "keys": [
              "W",
              "A",
              "S",
              "D"
            ],
            "action": "操作（不定期にキー操作が入れ替わり、水を入手すると一定時間固定される）"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "ゲーム終了"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/furafura-drunk-route.mp4",
      "poster": "./assets/images/games/furafura-drunk-route.png",
      "caption": ""
    },
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "cubic-puzzle",
    "title": "Cubic Puzzle",
    "subtitle": "",
    "icon": "./assets/images/games/cubic-puzzle.png",
    "iconAlt": "Cubic Puzzleの作品アイコン",
    "description": "立方体の世界を冒険するアクションパズル。\nジャンプで足場を渡り、面をまたいで重力の向きを変えながら、ゴールへの道を見つけよう。",
    "tags": [
      "アクション",
      "パズル",
      "2D",
      "3D",
      "ソロプレイ"
    ],
    "players": "",
    "playTime": "",
    "platform": "",
    "creators": [
      "よもぎーま。"
    ],
    "team": "",
    "gameCard": "",
    "tip": "",
    "controls": [
      {
        "device": "コントローラー",
        "items": [
          {
            "keys": [
              "左スティック",
              "十字ボタン"
            ],
            "action": "移動"
          },
          {
            "keys": [
              "右ボタン"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "+"
            ],
            "action": "メニュー画面"
          }
        ]
      },
      {
        "device": "キーボード",
        "items": [
          {
            "keys": [
              "A",
              "D",
              "矢印キー"
            ],
            "action": "移動"
          },
          {
            "keys": [
              "Space"
            ],
            "action": "ジャンプ"
          },
          {
            "keys": [
              "Enter"
            ],
            "action": "決定（メニュー内）"
          },
          {
            "keys": [
              "Esc"
            ],
            "action": "メニュー画面"
          }
        ]
      }
    ],
    "screenshots": [],
    "video": {
      "type": "local",
      "src": "./assets/videos/cubic-puzzle.mp4",
      "poster": "./assets/images/games/cubic-puzzle.png",
      "caption": ""
    },
    "inputDevices": [
      "コントローラー",
      "キーボード"
    ]
  }
];
