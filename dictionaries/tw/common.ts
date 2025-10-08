export const common = {
  buttons: {
    submit: "提交",
    cancel: "取消",
    confirm: "確認",
    back: "返回",
    next: "下一步",
    save: "儲存",
    delete: "刪除",
    edit: "編輯",
    view: "查看",
    download: "下載",
    close: "關閉",
  },
  messages: {
    loading: "載入中...",
    success: "操作成功",
    error: "發生錯誤",
    confirm: "確定要執行此操作嗎？",
    required: "此欄位為必填項",
    invalidInput: "輸入無效",
  },
  navigation: {
    home: "首頁",
    about: "關於",
    contact: "聯絡我們",
    features: "功能特色",
    pricing: "價格方案",
    guides: "使用指南",
    settings: "設定",
  },
  activePlayers: "活躍玩家",
  countries: "覆蓋國家",
  coffeeRecipes: "咖啡配方",
  userRating: "用戶評分",
  localeSuggest: {
    switchToTitle: "切換到 {langName}？",
    currentLangDesc: "目前語言為 {langName}。",
    dismissPermanent: "不再提示",
    switchToAlt: "切換到 {langName}",
    switchToButton: "切換",
  },
  onlineGames: {
    bannerTitle: "想直接體驗遊戲？",
    bannerDescription:
      "無需下載，直接在瀏覽器中體驗 Dreamy Room 及更多精彩遊戲",
    playNowButton: "立即暢玩",
    featured: "熱門遊戲",
    viewAllGames: "查看全部遊戲",
    levelCompletionText: "線上遊玩 Dreamy Room！",
  },
} as const;

export default common;
