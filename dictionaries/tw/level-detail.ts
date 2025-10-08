import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "關卡列表",
  },
  notFound: {
    title: "關卡未找到",
    description: "抱歉，您要查找的關卡不存在",
    backToList: "返回關卡列表",
  },
  levelNumber: "關卡",
  levelRange: {
    prefix: "第",
    suffix: "天",
  },
  meta: {
    title: `Dreamy Room 第 {{level}} 關 - 遊戲指南與攻略 - Dreamy Room {{level}} & 影片提示`,
    description: `Dreamy Room {{level}}, Dreamy Room 第 {{level}} 關完整指南，提供詳細的整理技巧、物品放置解決方案和影片攻略。幫助您輕鬆完成關卡，打造完美的舒適生活空間。`,
    siteName: "Dreamy Room官方攻略站",
    invalidId: {
      title: "無效的關卡編號",
      description: `請輸入有效的關卡編號（1-${levels.length}）`,
    },
    notFound: {
      title: "關卡不存在",
      description: "您訪問的關卡不存在，請選擇其他關卡",
    },
    langNotFound: {
      title: "語言包未找到",
      description: "當前語言的翻譯內容未找到，請切換其他語言",
    },
  },
  sidebar: {
    adjacentLevels: "相鄰關卡",
    allLevels: "全部關卡",
  },
  shareLabel: "分享關卡指南",
  linkCopiedText: "複製成功！",
} as const;

export default levelDetail;
