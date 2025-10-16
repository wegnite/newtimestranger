import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "レベル一覧",
  },
  notFound: {
    title: "レベルが見つかりません",
    description: "申し訳ありませんが、探しているレベルは存在しません",
    backToList: "レベル一覧に戻る",
  },
  levelNumber: "レベル",
  levelRange: {
    prefix: "日",
    suffix: "",
  },
  meta: {
    title: `Knit Out レベル{{level}} - 攻略と解決策とゲーム`,
    description: `Knit Out {{level}}、Knit Out レベル{{level}}の完全ガイド。詳細な戦略ヒント、ロープとボビンの解決策、ビデオ攻略を提供します。あなたが簡単にレベルをクリアし、すべての結び目を解くのを助けます。`,
    siteName: "Knit Out公式ガイド",
    invalidId: {
      title: "無効なレベル番号",
      description: `有効なレベル番号(1-${levels.length})を入力してください`,
    },
    notFound: {
      title: "レベルが存在しません",
      description:
        "アクセスしようとしているレベルは存在しません。別のレベルを選択してください",
    },
    langNotFound: {
      title: "言語パックが見つかりません",
      description:
        "現在の言語の翻訳内容が見つかりません。別の言語に切り替えてください",
    },
  },
  sidebar: {
    adjacentLevels: "隣接するレベル",
    allLevels: "すべてのレベル",
  },
  shareLabel: "レベルガイドを共有",
  linkCopiedText: "コピー完了！",
} as const;
