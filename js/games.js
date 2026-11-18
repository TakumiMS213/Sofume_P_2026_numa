/* サイトの名前と全作品をここで管理します。追加方法はREADME.mdを参照してください。 */
window.EXHIBITION = {
  name: "ソフトメディア研究会",
  logo: "./assets/images/SofumeLogo_BlackTextAlpha_1920x1080.png",
  year: "2026",
  festivalName: "津田沼祭 P班作品展",
  message: "操作や展示について不明な点は、P班ブースのスタッフにお尋ねください。",
  sampleMode: false,
};

// 本提出の作品のみ掲載。照合元・表記変更は docs/submission-reconciliation.md を参照。
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
    "icon": "",
    "iconAlt": "",
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
    "video": null,
    "inputDevices": [
      "キーボード"
    ]
  },
  {
    "id": "goodragshop",
    "title": "Goodragshop",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
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
    "video": null,
    "inputDevices": [
      "マウス",
      "キーボード"
    ]
  },
  {
    "id": "danfall",
    "title": "だんふぉ～る",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "confession-tower",
    "title": "confession tower",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
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
    "video": null,
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
    "icon": "",
    "iconAlt": "",
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
    "video": null,
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
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "phaselink",
    "title": "PhaseLINK",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
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
    "video": null,
    "inputDevices": [
      "キーボード",
      "マウス"
    ]
  },
  {
    "id": "re-color",
    "title": "RE:COLOR",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "diva-player",
    "title": "DIVA Player",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
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
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "toritori-tataki",
    "title": "トリトリ叩き",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
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
    "video": null,
    "inputDevices": [
      "マウス",
      "キーボード"
    ]
  },
  {
    "id": "palca-defector",
    "title": "パルカディフェクタ",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "shitetu-kantai",
    "title": "紫鉄艦隊",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "final-boss",
    "title": "FINAL BOSS",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  },
  {
    "id": "twinfront",
    "title": "TwinFront",
    "subtitle": "",
    "icon": "",
    "iconAlt": "",
    "description": "",
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
    "controls": [],
    "screenshots": [],
    "video": null
  }
];
