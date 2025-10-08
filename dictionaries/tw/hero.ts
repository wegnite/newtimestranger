import levels from "@/data/levels";

export const hero = {
  badge: "遊戲攻略大全",
  title: "查看 Dreamy Room 所有關卡攻略",
  description:
    "探索每個房間關卡的詳細通關教程、技巧和策略，輸入關卡編號可直接跳轉到對應攻略。",
  stats: {
    guides: levels.length + "+ 關卡攻略",
    videoTutorials: `${levels.length}+ 視頻教程`,
    quickSearch: "快速關卡搜索",
  },
  search: {
    placeholder: `輸入關卡編號 (1-${levels.length})`,
    button: "搜索攻略",
    error: {
      invalid: "請輸入有效的關卡編號",
      notFound: "未找到該關卡的攻略",
    },
  },
  buttons: {
    browseAll: "瀏覽所有關卡攻略",
    downloadGame: "下載遊戲",
  },
  downloadCard: {
    title: "下載 Dreamy Room",
    description: "開啟一段溫馨治癒的收納整理之旅！",
  },
  videoSection: {
    title: "遊戲攻略視頻",
    description: "觀看詳細的遊戲視頻教程，學習收納整理技巧",
  },
} as const;

export default hero;
