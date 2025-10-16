import levels from "@/data/levels";

export const hero = {
  badge: "游戏指南合集",
  title: "查看所有《Knit Out》关卡指南",
  description:
    "探索每个关卡的详细攻略、提示和策略。输入关卡编号可直接跳转到相应指南。",
  stats: {
    guides: levels.length + "+ 关卡指南",
    videoTutorials: `${levels.length}+ 视频教程`,
    quickSearch: "快速关卡搜索",
  },
  search: {
    placeholder: `输入关卡编号 (1-${levels.length})`,
    button: "搜索指南",
    error: {
      invalid: "请输入有效的关卡编号",
      notFound: "未找到此关卡的指南",
    },
  },
  buttons: {
    browseAll: "浏览所有关卡指南",
    downloadGame: "下载游戏",
  },
  downloadCard: {
    title: "下载《Knit Out》",
    description: "开启一场轻松且具策略性的解谜冒险！",
  },
  videoSection: {
    title: "《Knit Out》策略视频",
    description:
      "观看详细的游戏视频教程，学习完成关卡的策略",
  },
} as const;
