import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "关卡列表",
  },
  notFound: {
    title: "关卡未找到",
    description: "抱歉，您要查找的关卡不存在",
    backToList: "返回关卡列表",
  },
  levelNumber: "关卡",
  levelRange: {
    prefix: "第",
    suffix: "天",
  },
  meta: {
    title: `Knit Out 关卡 {{level}} - 攻略与解决方案及游戏`,
    description: `Knit Out {{level}}，Knit Out 关卡 {{level}} 的完整指南，提供详细的策略提示、绳索和线轴解决方案以及视频攻略。帮助您轻松完成关卡并解开所有绳结。`,
    siteName: "Knit Out 官方指南",
    invalidId: {
      title: "无效的关卡编号",
      description: `请输入有效的关卡编号 (1-${levels.length})`,
    },
    notFound: {
      title: "关卡不存在",
      description:
        "您试图访问的关卡不存在，请选择其他关卡",
    },
    langNotFound: {
      title: "未找到语言包",
      description:
        "未找到当前语言的翻译内容，请切换到其他语言",
    },
  },
  sidebar: {
    adjacentLevels: "相邻关卡",
    allLevels: "所有关卡",
  },
  shareLabel: "分享关卡指南",
  linkCopiedText: "已成功复制！",
} as const;
