import levels from "@/data/levels";

export const hero = {
  badge: "ゲーム攻略大全",
  title: "(夢の部屋)ドリーミールーム 攻略ガイド | 全レベル一覧",
  description:
    "(夢の部屋)ドリーミールーム の各レベルの詳細な攻略法、コツ、戦略を探索しましょう。「ドリーミー ルーム」のレベル番号を入力すると、対応するガイドに直接ジャンプできます。",
  stats: {
    guides: levels.length + "+ レベル攻略",
    videoTutorials: `${levels.length}+ ビデオチュートリアル`,
    quickSearch: "クイックレベル検索",
  },
  search: {
    placeholder: `レベル番号を入力 (1-${levels.length})`,
    button: "攻略を検索",
    error: {
      invalid: "有効なレベル番号を入力してください",
      notFound: "このレベルの攻略が見つかりません",
    },
  },
  buttons: {
    browseAll: "すべてのレベル攻略を閲覧",
    downloadGame: "ゲームをダウンロード",
  },
  downloadCard: {
    title: "(夢の部屋)ドリーミールーム をダウンロード",
    description: "心温まる癒しの整理整頓の旅を始めましょう！",
  },
  videoSection: {
    title: "(夢の部屋)ドリーミールーム 攻略ビデオ",
    description:
      "(夢の部屋)ドリーミールーム の詳細なビデオチュートリアルを見て、整理整頓のテクニックを学びましょう",
  },
} as const;

export default hero;
