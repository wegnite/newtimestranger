import levels from "@/data/levels";

export const home = {
  meta: {
    title: `(夢の部屋)ドリーミールーム 攻略ガイド | 全レベル${levels.length}解説 | Dreamy Room`,
    description: `(夢の部屋)ドリーミールーム の完全攻略ガイドへようこそ！全レベル (レベル 1-${levels.length}) のクリア方法を詳細な手順と動画で解説。「ドリーミー ルーム」のヒントと答えを見つけて、パズルを解き明かしましょう。Your guide for Dreamy Room!`,
    siteName: "(夢の部屋)ドリーミールーム 攻略 | Dreamy Room Walkthrough",
    author: "グッドコーヒーゲーム攻略チーム",
    category: "ゲーム攻略",
    classification: "ゲーム",
  },
} as const;

export default home;
