import levels from "@/data/levels";

export const level = {
  title: `(夢の部屋)ドリーミールーム レベル 1-${levels.length} 攻略ガイド | Dreamy Room`,
  subtitle: `全${levels.length}レベル完全攻略 | (夢の部屋)ドリーミールーム の収納テクニック`,
  searchPlaceholder: `レベル番号を入力 (1-${levels.length})`,
  levelRange: {
    start: "第",
    end: "レベル",
  },
  levelNumber: "レベル",
  meta: {
    title: `ドリーミールーム レベル 1-${levels.length} 攻略＆ビデオガイド(夢の部屋)Dreamy Room`,
    description: `(夢の部屋)ドリーミールーム 公式攻略サイト。レベル 1-${levels.length} の完全攻略ガイド、収納テクニック、「ドリーミー ルーム」クリア動画を提供。各レベルを簡単にクリアしましょう！Your guide for Dreamy Room!`,
    siteName: "Dreamy Room公式攻略サイト",
    author: "Dreamy Room攻略チーム",
    category: "ゲーム攻略",
    classification: "カジュアルパズルゲーム",
  },
} as const;

export default level;
