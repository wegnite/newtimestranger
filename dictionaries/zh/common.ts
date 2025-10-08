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
    confirm: "确定要执行此操作吗？",
    required: "此字段为必填项",
    invalidInput: "输入无效",
  },
  navigation: {
    home: "首页",
    about: "关于",
    contact: "联系我们",
    features: "功能特性",
    pricing: "价格方案",
    guides: "使用指南",
    settings: "设置",
  },
  activePlayers: "活跃玩家",
  countries: "覆盖国家",
  coffeeRecipes: "咖啡配方",
  userRating: "用户评分",
  localeSuggest: {
    switchToTitle: "切换到 {langName}？",
    currentLangDesc: "当前语言是 {langName}。",
    dismissPermanent: "不再提示",
    switchToAlt: "切换到 {langName}",
    switchToButton: "切换",
  },
  onlineGames: {
    bannerTitle: "想直接体验游戏？",
    bannerDescription:
      "无需下载，直接在浏览器中体验 Dreamy Room 及更多精彩游戏",
    playNowButton: "立即畅玩",
    featured: "热门游戏",
    viewAllGames: "查看全部游戏",
    levelCompletionText: "在线游玩 Dreamy Room！",
  },
} as const;

export default common;
