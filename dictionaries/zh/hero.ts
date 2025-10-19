import levels from "@/data/levels";

export const hero = {
  badge: "PC游戏攻略站",
  title: "Digimon Story Time Stranger",
  description:
    "探索跨越人类世界和数码世界的史诗RPG冒险。收集450+种数码兽，揭开时间穿越的谜团，体验回合制策略战斗的乐趣。",
  stats: {
    guides: "26+ 章节攻略",
    videoTutorials: "完整故事指南",
    quickSearch: "章节导航",
  },
  search: {
    placeholder: `搜索章节 (1-${levels.length})`,
    button: "搜索攻略",
    error: {
      invalid: "请输入有效的章节编号",
      notFound: "未找到该章节的攻略",
    },
  },
  buttons: {
    browseAll: "查看完整攻略",
    downloadGame: "Steam购买",
  },
  downloadCard: {
    title: "获取《Digimon Story Time Stranger》",
    description: "在Steam上购买游戏，开启你的数码世界冒险！",
  },
  videoSection: {
    title: "游戏预告与攻略视频",
    description: "观看游戏预告片和详细攻略视频，了解游戏特色和通关技巧",
  },
  mainScreenshotAlt: "Digimon Story Time Stranger 游戏主截图",
  screenshotAltTemplate: "Digimon Story Time Stranger 游戏截图",
  onlineGames: {
    bannerTitle: "准备开始你的冒险？",
    bannerDescription: "在Steam上获取完整游戏，跟随我们的完整攻略",
    playNowButton: "立即购买",
  },
} as const;
