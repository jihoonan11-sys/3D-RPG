/* All prices, news and release/event dates below are fictional sample data. */
const APP_DATA = {
  pokemon: [
    {id:1,name:"Bulbasaur",types:["Grass","Poison"],gen:1,evolves:"Ivysaur",symbol:"🌱"},
    {id:2,name:"Ivysaur",types:["Grass","Poison"],gen:1,evolves:"Venusaur",symbol:"🌿"},
    {id:3,name:"Venusaur",types:["Grass","Poison"],gen:1,evolves:"—",symbol:"🌺"},
    {id:4,name:"Charmander",types:["Fire"],gen:1,evolves:"Charmeleon",symbol:"🔥"},
    {id:5,name:"Charmeleon",types:["Fire"],gen:1,evolves:"Charizard",symbol:"🦎"},
    {id:6,name:"Charizard",types:["Fire","Flying"],gen:1,evolves:"—",symbol:"🐉"},
    {id:7,name:"Squirtle",types:["Water"],gen:1,evolves:"Wartortle",symbol:"💧"},
    {id:8,name:"Wartortle",types:["Water"],gen:1,evolves:"Blastoise",symbol:"🐢"},
    {id:9,name:"Blastoise",types:["Water"],gen:1,evolves:"—",symbol:"🌊"},
    {id:10,name:"Caterpie",types:["Bug"],gen:1,evolves:"Metapod",symbol:"🐛"},
    {id:25,name:"Pikachu",types:["Electric"],gen:1,evolves:"Raichu",symbol:"⚡"},
    {id:26,name:"Raichu",types:["Electric"],gen:1,evolves:"—",symbol:"⚡"},
    {id:39,name:"Jigglypuff",types:["Normal","Fairy"],gen:1,evolves:"Wigglytuff",symbol:"🎵"},
    {id:52,name:"Meowth",types:["Normal"],gen:1,evolves:"Persian",symbol:"🐱"},
    {id:94,name:"Gengar",types:["Ghost","Poison"],gen:1,evolves:"—",symbol:"👻"},
    {id:133,name:"Eevee",types:["Normal"],gen:1,evolves:"Vaporeon / Jolteon / Flareon",symbol:"🦊"},
    {id:150,name:"Mewtwo",types:["Psychic"],gen:1,evolves:"—",symbol:"🔮"},
    {id:151,name:"Mew",types:["Psychic"],gen:1,evolves:"—",symbol:"✨"},
    {id:152,name:"Chikorita",types:["Grass"],gen:2,evolves:"Bayleef",symbol:"🍃"},
    {id:155,name:"Cyndaquil",types:["Fire"],gen:2,evolves:"Quilava",symbol:"🔥"},
    {id:158,name:"Totodile",types:["Water"],gen:2,evolves:"Croconaw",symbol:"💦"},
    {id:252,name:"Treecko",types:["Grass"],gen:3,evolves:"Grovyle",symbol:"🌿"},
    {id:255,name:"Torchic",types:["Fire"],gen:3,evolves:"Combusken",symbol:"🐥"},
    {id:258,name:"Mudkip",types:["Water"],gen:3,evolves:"Marshtomp",symbol:"🐟"},
    {id:387,name:"Turtwig",types:["Grass"],gen:4,evolves:"Grotle",symbol:"🌱"},
    {id:390,name:"Chimchar",types:["Fire"],gen:4,evolves:"Monferno",symbol:"🐒"},
    {id:393,name:"Piplup",types:["Water"],gen:4,evolves:"Prinplup",symbol:"🐧"},
    {id:495,name:"Snivy",types:["Grass"],gen:5,evolves:"Servine",symbol:"🌿"},
    {id:498,name:"Tepig",types:["Fire"],gen:5,evolves:"Pignite",symbol:"🐗"},
    {id:501,name:"Oshawott",types:["Water"],gen:5,evolves:"Dewott",symbol:"🦦"},
    {id:906,name:"Sprigatito",types:["Grass"],gen:9,evolves:"Floragato",symbol:"🐈"},
    {id:909,name:"Fuecoco",types:["Fire"],gen:9,evolves:"Crocalor",symbol:"🐊"},
    {id:912,name:"Quaxly",types:["Water"],gen:9,evolves:"Quaxwell",symbol:"🦆"}
  ],
  sets: [
    {id:"sv1",name:"Scarlet & Violet Base Set",released:"2023-03-31",total:198},
    {id:"pal",name:"Paldea Evolved",released:"2023-06-09",total:193},
    {id:"obs",name:"Obsidian Flames",released:"2023-08-11",total:197},
    {id:"151",name:"151",released:"2023-09-22",total:165},
    {id:"demo",name:"Collector Hub Demo Set",released:"",total:12}
  ],
  cards: [
    {id:"sv1-1",name:"Bulbasaur",number:"1/198",set:"sv1",lang:"en",rarity:"Common",pokedexId:1,prices:{us:{value:0.35,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:80,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:500,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"sv1-4",name:"Charmander",number:"4/198",set:"sv1",lang:"en",rarity:"Common",pokedexId:4,prices:{us:{value:0.55,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:100,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:700,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"sv1-7",name:"Squirtle",number:"7/198",set:"sv1",lang:"en",rarity:"Common",pokedexId:7,prices:{us:{value:0.4,currency:"USD",type:"listing",condition:"Near Mint",source:"Sample data"},jp:{value:90,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:600,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"sv1-25",name:"Pikachu",number:"25/198",set:"sv1",lang:"en",rarity:"Uncommon",pokedexId:25,prices:{us:{value:1.25,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:220,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:1800,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"pal-94",name:"Eevee",number:"94/193",set:"pal",lang:"en",rarity:"Common",pokedexId:133,prices:{us:{value:0.6,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:120,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:900,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"obs-125",name:"Charizard",number:"125/197",set:"obs",lang:"en",rarity:"Rare",pokedexId:6,prices:{us:{value:4.5,currency:"USD",type:"sold",condition:"Near Mint",source:"Sample data"},jp:{value:450,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:5500,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"151-25",name:"Pikachu",number:"025/165",set:"151",lang:"ja",rarity:"Common",pokedexId:25,prices:{us:{value:0.9,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:150,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:1300,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"demo-1",name:"Mew",number:"001/012",set:"demo",lang:"en",rarity:"Illustration Rare",pokedexId:151,prices:{us:{value:12,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:1250,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:16000,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"demo-2",name:"Gengar",number:"002/012",set:"demo",lang:"en",rarity:"Rare",pokedexId:94,prices:{us:{value:3.2,currency:"USD",type:"market",condition:"Lightly Played",source:"Sample data"},jp:{value:300,currency:"JPY",type:"market",condition:"Lightly Played",source:"Sample data"},kr:{value:4200,currency:"KRW",type:"market",condition:"Lightly Played",source:"Sample data"}}},
    {id:"demo-3",name:"Sprigatito",number:"003/012",set:"demo",lang:"en",rarity:"Common",pokedexId:906,prices:{us:{value:0.25,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:60,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:400,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"demo-4",name:"Fuecoco",number:"004/012",set:"demo",lang:"en",rarity:"Common",pokedexId:909,prices:{us:{value:0.3,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:65,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:450,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}},
    {id:"demo-5",name:"Quaxly",number:"005/012",set:"demo",lang:"en",rarity:"Common",pokedexId:912,prices:{us:{value:0.22,currency:"USD",type:"market",condition:"Near Mint",source:"Sample data"},jp:{value:55,currency:"JPY",type:"market",condition:"Near Mint",source:"Sample data"},kr:{value:380,currency:"KRW",type:"market",condition:"Near Mint",source:"Sample data"}}}
  ],
  news: [
    {id:"n1",title:"Sample TCG set announcement",summary:"Fictional sample entry demonstrating the news layout and source links.",date:"2026-11-15",category:"TCG",region:"Global",source:"Demo placeholder",url:"",sample:true},
    {id:"n2",title:"Sample Pokémon game event",summary:"A fictional event entry for testing the release calendar. This is not an actual announcement.",date:"2026-11-22",category:"Games",region:"Japan",source:"Demo placeholder",url:"",sample:true},
    {id:"n3",title:"Sample collector checklist update",summary:"Example editorial item showing how a short summary and category are displayed.",date:"2026-12-03",category:"Community",region:"Korea",source:"Demo placeholder",url:"",sample:true},
    {id:"n4",title:"Sample merchandise release",summary:"Fictional release date used to test filters and calendar rendering.",date:"2026-12-12",category:"Merchandise",region:"US",source:"Demo placeholder",url:"",sample:true}
  ],
  lessons: [
    {id:"types",title:"Type effectiveness",body:"Type matchups affect battle damage. A move can be super effective, not very effective, or have no effect depending on the target's type. Always check the matchup rather than guessing.",question:"What should you check before choosing a move?",options:["The type matchup","The card price","The Pokédex number only"],answer:0,explain:"Type matchups are the key factor in this example."},
    {id:"card-reading",title:"Reading a TCG card",body:"A card's set number helps identify the printing. Rarity, language, condition, and edition can all matter when comparing the same named Pokémon across cards.",question:"Which detail helps identify a card within its set?",options:["Set number","Your browser theme","The page background"],answer:0,explain:"The set number identifies a card's position in a particular set."},
    {id:"condition",title:"Card condition basics",body:"Condition descriptions vary by seller. Check corners, edges, surface, and centering, and read each marketplace's condition definitions before comparing listings.",question:"What is a sensible comparison practice?",options:["Compare cards with similar condition","Ignore condition","Assume all listings are identical"],answer:0,explain:"Condition differences can make prices non-comparable."},
    {id:"market",title:"Understanding price types",body:"An asking price is not the same as a completed sale. Market estimates, active listings, and sold prices describe different things and should be labelled separately.",question:"Which price type records a transaction that has already completed?",options:["Completed sale","Asking listing","Wishlist target"],answer:0,explain:"Completed-sale data describes transactions, when a reliable source is available."}
  ],
  sources: [
    {name:"PokéAPI",url:"https://pokeapi.co/",note:"Optional public Pokémon detail endpoint. This demo does not use it for market prices."},
    {name:"TCGdex",url:"https://tcgdex.dev/",note:"Potential card and set metadata source; review terms and coverage before production use."},
    {name:"Pokémon official website",url:"https://www.pokemon.com/",note:"Check official announcements and release dates directly. No live news feed is configured in this demo."}
  ]
};

const I18N = {
  en: {appTitle:"Pokémon Collector Hub",nav_home:"Home",nav_dex:"Pokédex & TCG",nav_market:"TCG Market",nav_news:"News & Calendar",nav_pdf:"PDF Library",nav_academy:"Academy",nav_collection:"My Collection",nav_watchlist:"Watchlist",nav_settings:"Settings",home_title:"Dashboard",home_sub:"Your collection and collector tools at a glance.",demoNotice:"Demo project: market prices, news and dates are sample data, not live information.",home_news:"Latest news",home_releases:"Release calendar",home_market:"Market snapshot",home_recent:"Recently viewed Pokémon",home_quick:"Explore the hub",dex_title:"Pokédex & TCG Database",type:"Type",generation:"Generation",search:"Search",reset:"Reset",owned:"Owned",wanted:"Wanted",watching:"Watching",alerts:"Unread alerts",empty:"Nothing to show yet.",sample:"SAMPLE",add:"Add",cancel:"Cancel",remove:"Remove",saved:"Saved.",noData:"Data unavailable.",pdfHint:"Direct PDF uses standard fonts; use Print for full Korean/Japanese support."},
  ko: {appTitle:"포켓몬 컬렉터 허브",nav_home:"홈",nav_dex:"도감 및 카드",nav_market:"카드 시세",nav_news:"뉴스 및 일정",nav_pdf:"PDF 체크리스트",nav_academy:"학습",nav_collection:"내 컬렉션",nav_watchlist:"관심 목록",nav_settings:"설정",home_title:"대시보드",home_sub:"컬렉션과 수집 도구를 한눈에 확인하세요.",demoNotice:"데모 프로젝트입니다. 시세, 뉴스, 날짜는 실제 정보가 아닌 예시 데이터입니다.",home_news:"최신 뉴스 예시",home_releases:"출시 일정 예시",home_market:"시세 예시",home_recent:"최근 본 포켓몬",home_quick:"허브 둘러보기",dex_title:"도감 및 TCG 데이터베이스",type:"타입",generation:"세대",search:"검색",reset:"초기화",owned:"보유",wanted:"원하는 카드",watching:"관심 카드",alerts:"읽지 않은 알림",empty:"표시할 항목이 없습니다.",sample:"예시",add:"추가",cancel:"취소",remove:"삭제",saved:"저장했습니다.",noData:"데이터를 사용할 수 없습니다.",pdfHint:"직접 PDF는 기본 글꼴을 사용합니다. 한국어/일본어는 인쇄 기능을 이용하세요."},
  ja: {appTitle:"ポケモン・コレクター・ハブ",nav_home:"ホーム",nav_dex:"図鑑・カード",nav_market:"カード相場",nav_news:"ニュース・予定",nav_pdf:"PDFチェックリスト",nav_academy:"学習",nav_collection:"コレクション",nav_watchlist:"ウォッチリスト",nav_settings:"設定",home_title:"ダッシュボード",home_sub:"コレクションとツールをまとめて確認できます。",demoNotice:"デモ用プロジェクトです。価格、ニュース、日付はサンプルであり、実際の情報ではありません。",home_news:"ニュース例",home_releases:"発売予定例",home_market:"相場サンプル",home_recent:"最近見たポケモン",home_quick:"機能を見る",dex_title:"図鑑・TCGデータベース",type:"タイプ",generation:"世代",search:"検索",reset:"リセット",owned:"所持",wanted:"欲しいカード",watching:"ウォッチ中",alerts:"未読通知",empty:"表示する項目がありません。",sample:"サンプル",add:"追加",cancel:"キャンセル",remove:"削除",saved:"保存しました。",noData:"データを利用できません。",pdfHint:"直接生成するPDFは標準フォントです。日本語には印刷機能を使用してください。"}
};
