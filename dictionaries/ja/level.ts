import levels from "@/data/levels";

export const level = {
  title: `ニットアウト ゲームのレベルガイド、レベル1-${levels.length}までの完全ウォークスルー`,
  subtitle: `${levels.length}レベルの完全ウォークスルー | 攻略ヒント | 解結方法`,
  searchPlaceholder: `レベル番号を入力してください (1-${levels.length})`,
  levelRange: {
    start: "レベル ",
    end: "",
  },
  levelNumber: "レベル",
  meta: {
    title: `ニットアウト ゲームガイド | レベル1-${levels.length}までの完全動画ウォークスルー | 攻略ヒント`,
    description: `公式のニットアウト ゲームガイドサイトで、レベル1-${levels.length}までの完全ウォークスルーを提供しています。詳細な攻略ヒント、結び目の解き方、動画ガイドも含まれています。簡単にレベルをクリアし、すべてのパズルを解くのを助けます。`,
    keywords:
      "ニットアウトガイド、ニットアウトウォークスルー、パズルゲームガイド、解結ゲーム、攻略ゲームヒント、パズル解決、カジュアルゲーム",
    siteName: "ニットアウト公式ガイド",
    author: "ニットアウトガイドチーム",
    category: "ゲームガイド",
    classification: "カジュアルパズルゲーム",
  },
} as const;

export default level;
