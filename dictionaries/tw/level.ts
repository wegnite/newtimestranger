import levels from "@/data/levels";

export const level = {
  title: `《Knit Out》游戏关卡指南，1-${levels.length}关完整攻略`,
  subtitle: `${levels.length}关完整攻略 | 策略提示 | 解结方案`,
  searchPlaceholder: `输入关卡编号 (1-${levels.length})`,
  levelRange: {
    start: "第",
    end: "关",
  },
  levelNumber: "第",
  meta: {
    title: `《Knit Out》游戏指南 | 1-${levels.length}关完整视频攻略 | 策略提示`,
    description: `《Knit Out》官方游戏指南网站，提供1-${levels.length}关完整攻略，包括详细策略提示、解结方案及视频指南。助您轻松通关并解决所有谜题。`,
    keywords:
      "《Knit Out》指南, 《Knit Out》攻略, 解谜游戏指南, 解结游戏, 策略游戏提示, 解谜, 休闲游戏",
    siteName: "《Knit Out》官方指南",
    author: "《Knit Out》指南团队",
    category: "游戏指南",
    classification: "休闲解谜游戏",
  },
} as const;

export default level;
