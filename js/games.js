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
    "subtitle": "拾ったパーツで身体を組み替える、暗い雰囲気の3Dアクション",
    "icon": "./assets/images/games/garagara.png",
    "iconAlt": "身体組み替えアクション『ガラガラ』のゲームアイコン",
    "description": "あなたは廃棄場に捨てられた、型落ちのガラクタロボット。拾ったパーツで身体を組み替えながら、下へ降りていく短編アクションゲームです。\n\n足をタイヤに替えれば、跳ぶ力の代わりに走る力を。腕をワイヤーフックに替えれば、物を持つ力の代わりにスウィングが可能になります。しかし、完全なパーツはありません。",
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
    "subtitle": "鉤縄で敵や障害物をかわし、アクロバティックにゴールを目指すアクション",
    "icon": "./assets/images/games/kaginawa-hisho.png",
    "iconAlt": "鉤縄飛翔のゲームアイコン",
    "description": "鉤縄を使って敵や障害物を避けて進むゲームです。アクロバティックな動きでゴールを目指しましょう。\n\n毒の沼や敵が行く手を阻みます。鉤縄と壁ジャンプをうまく使ってかわしましょう。",
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
    "subtitle": "記憶した宝石と障害物の位置を頼りに、線を引いてゴールを目指すパズル",
    "icon": "./assets/images/games/memory-line-puzzle.png",
    "iconAlt": "MemoryLinePuzzleのゲームアイコン",
    "description": "女の子が通る道を、線を描いて教えてあげるゲーム。宝石を全部集めてゴールしよう。線を引く時はスタートとゴールの場所しか見ることができないから注意！\n\n最初に宝石や障害物の位置を確認し、覚えた道を描きます。線が長すぎると女の子が体力切れになってしまうので、道筋を工夫しましょう。",
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
    "subtitle": "文字数と正確さでロケットの飛距離が変わるタイピングゲーム",
    "icon": "./assets/images/games/typing-rocket.png",
    "iconAlt": "タイピング・ロケットのゲームアイコン",
    "description": "タイピング練習をして、ロケットを打ち上げるゲームです。入力文字数が多いほど，ロケットは空高く打ち上がります。正タイプ率が95%を切ってしまうと打ち上げ失敗になってしまうので、焦らず正確に。\n\n無事に打ち上げられたら、ランキングへ登録することもできます。ハイスコアと宇宙を目指しましょう。",
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
    "subtitle": "上から落ちる火や箸をかわし、3分間生き残るゲーム",
    "icon": "",
    "iconAlt": "",
    "description": "火や箸など、上から落ちてくるものを避けて3分間生き残るゲームです。\n\n最初はひよこですが、落ちてきたものに5回当たるとニワトリに成長します。唐揚げにならないように生き残りましょう。",
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
    "subtitle": "植物を育てて売り、借金完済を目指す農業シミュレーション",
    "icon": "",
    "iconAlt": "",
    "description": "債務者による農業シミュレーションゲームです。プレイヤーは植物を育て、売り捌き借金完済を目指します。栽培物が売れ残った場合は、ご自身で処理していただくだけの簡単なお仕事です。\n\n警察による嫌疑を躱す必要があります。また、作物処理による副作用に関して責任を負いません。\n\n種を購入 → 栽培 → 売る → 1日の終わりに返済と証拠隠滅、を完済まで繰り返します。",
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
    "subtitle": "段ボールを落とさず、綺麗に早く積み上げる1人用パズル",
    "icon": "",
    "iconAlt": "",
    "description": "1人用パズルゲーム。ルールは簡単、段ボールを落とさず積み上げるだけ。綺麗に早く段ボールを積もう。段ボールを落とすと損失が出るよ。",
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
    "subtitle": "3分の1の確率に挑み、告白成功の階層と倍率を上げるシミュレーション",
    "icon": "",
    "iconAlt": "",
    "description": "3分の1の確率を当て、告白成功の人数にあたる階層と倍率を上げていくゲームです。\n\n説明を読んでスタートボタン「いざ、尋常に勝負！」を押し、貢ぎ額を設定して好きなボタンを選びます。途中で終わる場合はキャッシュアウトを選べます。",
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
    "subtitle": "磁石の力で恋人を探す、2D横スクロールアクション",
    "icon": "./assets/images/games/magnet-synapse.png",
    "iconAlt": ".｡ﾟ+..ℳ𝒶𝑔𝓃ℯ𝓉 𝒮𝓎𝓃𝒶𝓅𝓈ℯ｡+..｡*ﾟ+のゲームアイコン",
    "description": "下手したら死を引き起こすドーパミンドパドパな白い花を摂取して磁石の力を得つつ，無垢な女の子が恋人を探しに冒険する2D横スクロールアクションゲームです。\n\n磁石の引き合う力と反発する力で上へ登ったり、敵を避けたりします。ゲーム内の「白い花」をすべて取ると、エンディングが見られるかもしれません。",
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
      "イヴ"
    ],
    "team": "",
    "gameCard": "なし",
    "tip": "ジャンプボタンはありません。右上の表示や主人公の色で現在の極を確認し、異なる極の引力と同じ極の反発を使いましょう。",
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
    "subtitle": "駒を挟んで裏返し、数字のダメージで相手を倒す対戦ボードゲーム",
    "icon": "",
    "iconAlt": "",
    "description": "リバーシの盤で駒を挟み合う対戦ボードゲームです。裏返した相手の駒の数字がダメージになり、相手の体力を先に0にした方が勝ちです。対局前に配られる3枚のスキルカードから1枚を選び、ゲージが満タンになるたびに使えます。\n\nCPU対戦（イージー・ノーマル・ハード）のほか、連勝数のランキングに挑む「エンドレス」、同じ端末での2人対戦、招待リンクによるオンライン対戦に対応しています。",
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
    "tip": "はじめての人は、ゲーム内メニューの「遊び方」から確認してください。",
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
    "subtitle": "宇宙で敵を殲滅するシューティング",
    "icon": "",
    "iconAlt": "",
    "description": "宇宙で敵の殲滅を目指すシューティングゲームです。",
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
    "subtitle": "難易度を選んで遊び、譜面の制作・共有もできる音楽ゲーム",
    "icon": "",
    "iconAlt": "",
    "description": "キーボードを使用した音楽ゲームです。曲と難易度を選んでプレイし、自分で譜面を作って共有することもできます。\n\n曲を選択 → 難易度を選択 → プレイ、の順に進みます。",
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
    "subtitle": "色付きの壁で弾丸を染め、同じ色の敵を倒すシューティング・パズル",
    "icon": "",
    "iconAlt": "",
    "description": "弾丸を四方の色付きの壁に当てることで染めることができます。跳弾した弾丸を同じ色の敵に当てることでゲージを破壊して倒すことができます。\n\nタイトル画面で、スマホでは画面をひっくり返す、PCではRキーを押すと隠し機能が出現します。",
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
    "subtitle": "納豆魔法のスキルを組み合わせて戦う、見下ろし型ローグライト・シューティング",
    "icon": "./assets/images/games/magical-neverland.gif",
    "iconAlt": "ぐるぐる？マジカル！？ねばーらんどのゲームアイコン",
    "description": "納豆魔法で海賊たちをぐるぐるかき混ぜて、砂漠に緑を取り戻せ！！ スキルを集めて組み合わせ、海賊だらけのダンジョンに挑むローグライト・シューティングです。\n\nレベルアップ時に3枚のカードからスキルを1つ選び、全13種類から最大6つまで装備できます。宝箱やショップで戦力を整え、3層目のボス撃破を目指します。持ち帰ったソウルでは永続強化もできます。",
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
      "cone i7"
    ],
    "team": "",
    "gameCard": "あり",
    "tip": "特定のスキル2種類をLv2にすると合成スキルを選べます。体験版は3層まで遊べます。",
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
    "subtitle": "武器を組み上げ、背後の門を守るスチームパンク風2Dローグライトアクション",
    "icon": "./assets/images/games/gearcraft-recreated.jpg",
    "iconAlt": "GearCraft:ReCreatedのゲームアイコン",
    "description": "スチームパンク風2Dローグライトアクション！迫りくる敵を独自の武装とアップグレードでなぎ倒し、祖国を守り切れ！\n\n昨年の津田沼祭の作品をリメイク。ガラクタをかき集めて武器を組み上げ、迫りくる敵兵から背後の門を守ります。",
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
    "tip": "BOOSTを起動すると攻撃速度が上がります。",
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
      "Takumi"
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
    "subtitle": "謎の生物「トリトリ」を叩く、モグラ叩き系ミニゲーム",
    "icon": "",
    "iconAlt": "",
    "description": "鶏に似た謎の生物「トリトリ」をぶっ叩く、モグラ叩き系ミニゲームです。高いスコアを取ると、トリトリが褒めてくれるかもしれません。",
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
    "subtitle": "迷路づくりと敵の送り込みで、攻めと守りを同時に競う対戦型タワーディフェンス",
    "icon": "",
    "iconAlt": "",
    "description": "自分の盤面にタワーで迷路を作って敵を遠回りさせながら、同じお金で相手の迷路へモブを送り込む、攻めと守りを同時に戦う対戦型タワーディフェンスです。\n\nモブを送るほど収入が伸びるので、守るか攻めて稼ぐかの配分が勝負を分け、ここぞというときに必殺技「総攻撃」でモブを流し込んで一気に押し切れます。",
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
