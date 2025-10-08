import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room 遊戲關卡攻略，第1-${levels.length}關完整通關指南`,
  subtitle: `${levels.length}關完整通關攻略 | 收納整理技巧 | 房間佈置方案`,
  searchPlaceholder: `輸入關卡編號 (1-${levels.length})`,
  levelRange: {
    start: "第",
    end: "關",
  },
  levelNumber: "關卡",
  meta: {
    title: `Dreamy Room遊戲攻略|第1到${levels.length}關完整通關視頻指南_收納整理技巧`,
    description: `Dreamy Room遊戲官方攻略網站，提供1-${levels.length}關完整圖文攻略，包含詳細的收納技巧、物品擺放方案和通關視頻。讓您輕鬆通關，打造完美溫馨的生活空間。`,
    keywords:
      "Dreamy Room攻略,Dreamy Room通關攻略,收納遊戲攻略,房間佈置遊戲,整理遊戲技巧,治癒系遊戲,解壓遊戲",
    siteName: "Dreamy Room官方攻略站",
    author: "Dreamy Room攻略組",
    category: "遊戲攻略",
    classification: "休閒解謎遊戲",
  },
} as const;

export default level;
