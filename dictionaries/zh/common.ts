export const common = {
  buttons: {
    submit: "提交",
    cancel: "取消",
    confirm: "确认",
    back: "返回",
    next: "下一步",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    view: "查看",
    download: "下载",
    close: "关闭",
  },
  messages: {
    loading: "加载中...",
    success: "操作成功",
    error: "发生错误",
    confirm: "您确定吗？",
    required: "此字段为必填项",
    invalidInput: "输入无效",
  },
  navigation: {
    home: "首页",
    about: "关于",
    contact: "联系",
    features: "特色",
    pricing: "价格",
    guides: "攻略",
    settings: "设置",
  },
  activePlayers: "活跃玩家",
  countries: "国家",
  coffeeRecipes: "章节",
  userRating: "用户评分",
  localeSuggest: {
    switchToTitle: "切换到{langName}？",
    currentLangDesc: "当前语言是{langName}。",
    dismissPermanent: "不再提示",
    switchToAlt: "切换到{langName}",
    switchToButton: "切换",
  },
  onlineGames: {
    bannerTitle: "准备开始您的冒险？",
    bannerDescription:
      "在Steam上获取完整游戏并跟随我们的完整攻略指南",
    playNowButton: "立即购买",
    featured: "精选游戏",
    viewAllGames: "查看所有游戏",
    levelCompletionText: "游玩《数码宝贝物语：时空陌生人》！",
  },
} as const;

export default common;
