import levels from "@/data/levels";

export const hero = {
  badge: "ゲームガイドコレクション",
  title: "すべてのDigimon Story Time Strangerのレベルガイドを表示する",
  description:
    "各レベルの詳細な攻略、ヒント、戦略を探検します。レベル番号を入力して、対応するガイドに直接ジャンプします。",
  stats: {
    guides: levels.length + "+ レベルガイド",
    videoTutorials: `${levels.length}+ ビデオチュートリアル`,
    quickSearch: "クイックレベル検索",
  },
  search: {
    placeholder: `レベル番号を入力してください (1-${levels.length})`,
    button: "攻略を検索する",
    error: {
      invalid: "有効なレベル番号を入力してください",
      notFound: "このレベルに対応する攻略は見つかりませんでした",
    },
  },
  buttons: {
    browseAll: "すべてのレベル攻略を参照する",
    downloadGame: "ゲームをダウンロードする",
  },
  downloadCard: {
    title: "Digimon Story Time Strangerをダウンロードする",
    description: "くつろぎながら戦略的なパズル冒険を始めましょう！",
  },
  videoSection: {
    title: "Digimon Story Time Strangerの攻略動画",
    description:
      "レベルをクリアするための戦略を学ぶために、詳細なゲーム動画チュートリアルを見てください",
  },
} as const;
