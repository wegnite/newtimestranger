import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "レベル一覧",
  },
  notFound: {
    title: "レベルが見つかりません",
    description: "申し訳ありませんが、お探しのレベルは存在しません",
    backToList: "レベル一覧に戻る",
  },
  levelNumber: "攻略レベル",
  levelRange: {
    prefix: "第",
    suffix: "日目",
  },
  meta: {
    title: `ドリーミールーム レベル {{level}} 攻略ガイド(夢の部屋)Dreamy Room`,
    description: `(夢の部屋)ドリーミールーム レベル {{level}} の完全攻略ガイドです。クリア方法、動画解説、そして「ドリーミー ルーム」レベル {{level}} のヒントを提供します。このパズルを解き明かしましょう！Your guide for Dreamy Room!`,
    siteName: "Dreamy Room公式攻略サイト",
    invalidId: {
      title: "無効なレベル番号",
      description: `有効なレベル番号を入力してください（1-${levels.length}）`,
    },
    notFound: {
      title: "レベルが存在しません",
      description:
        "アクセスしようとしたレベルは存在しません。他のレベルを選択してください",
    },
    langNotFound: {
      title: "言語パックが見つかりません",
      description:
        "現在の言語の翻訳コンテンツが見つかりません。他の言語に切り替えてください",
    },
  },
  sidebar: {
    adjacentLevels: "隣接レベル",
    allLevels: "すべてのレベル",
  },
  shareLabel: "レベルガイドを共有",
  linkCopiedText: "リンクをコピーしました！",
} as const;

export default levelDetail;
