export const appDownload = {
  meta: {
    title:
      "下载《数码宝贝物语：时空陌生人》- 完整指南与攻略",
    description:
      "在Steam、PlayStation和Xbox上下载《数码宝贝物语：时空陌生人》。体验终极数码宝贝RPG冒险，包含时间旅行机制、450+数码兽收集和战略性回合制战斗。",
  },
  title: "下载《数码宝贝物语：时空陌生人》",
  subtitle:
    "踏上跨越人类世界和数码世界的史诗时间旅行冒险！",
  stats: {
    rating: "4.8",
    downloads: "100K+ 玩家",
  },
  downloadOptions: {
    steam: {
      platform: "Steam",
      description: "在Steam上下载",
      link: "https://store.steampowered.com/app/1984270/Digimon_Story_Time_Stranger/",
    },
    playstation: {
      platform: "PlayStation商店",
      description: "在PlayStation上获取",
      link: "https://store.playstation.com/en-us/product/UP0700-PPSA25917_00-DSTS0DEMO0000000",
    },
    xbox: {
      platform: "Xbox商店",
      description: "在Xbox上下载",
      link: "https://www.xbox.com/en-US/games/store/digimon-story-time-stranger-demo/9NXKLQWLZ637/0010",
    },
  },
  features: {
    organize: {
      title: "450+ 数码兽",
      description:
        "收集和训练超过450种不同的数码兽，每种都有独特的进化路径",
    },
    story: {
      title: "时间旅行冒险",
      description:
        "体验跨越人类世界和数码世界伊利亚斯的独特时间旅行故事线",
    },
  },
} as const;

export default appDownload;
