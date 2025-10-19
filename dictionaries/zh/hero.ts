import levels from "@/data/levels";

export const hero = {
  badge: "PC游戏攻略站",
  title: "数码宝贝物语：时空陌生人",
  description:
    "踏上跨越人类世界和数码世界的史诗RPG冒险。收集450+种数码兽，揭开时间旅行的谜团，体验战略性回合制战斗。",
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
      notFound: "未找到该章节的指南",
    },
  },
  buttons: {
    browseAll: "查看完整攻略",
    downloadGame: "游戏下载",
    digimonList: "数码兽图鉴",
    videos: "完整视频",
  },
  downloadCard: {
    title: "获取《数码宝贝物语：时空陌生人》",
    description: "在Steam上购买游戏，开启您的数码世界冒险！",
  },
  videoSection: {
    title: "游戏预告与攻略视频",
    description: "观看游戏预告片和详细攻略视频，了解游戏特色和通关技巧",
  },
  mainScreenshotAlt: "《数码宝贝物语：时空陌生人》游戏主截图",
  screenshotAltTemplate: "《数码宝贝物语：时空陌生人》游戏截图",
  screenshots: {
    altTemplate: "《数码宝贝物语：时空陌生人》游戏截图 {num}",
  },
  onlineGames: {
    bannerTitle: "准备开始你的冒险？",
    bannerDescription: "在Steam上获取完整游戏，跟随我们的完整攻略",
    playNowButton: "立即购买",
  },
  imageModal: {
    clickToEnlarge: "点击放大",
    closeImage: "关闭图片",
    enlargedImageAlt: "放大查看的游戏截图",
  },
  gameFeatures: {
    digimonCount: "450+",
    digimonLabel: "数码兽收集",
    chapterCount: "26+",
    chapterLabel: "章节攻略",
    dualWorld: "双世界",
    dualWorldLabel: "探索冒险",
    timeTravel: "时间穿越",
    timeTravelLabel: "史诗故事",
  },
} as const;

export default hero;
