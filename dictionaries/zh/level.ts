import levels from "@/data/levels";

export const level = {
  title: `《Digimon Story Time Stranger》游戏关卡指南，第1-${levels.length}关完整攻略`,
  subtitle: `${levels.length}关完整攻略 | 策略提示 | 解结方案`,
  searchPlaceholder: `输入关卡编号(1-${levels.length})`,
  levelRange: {
    start: "第",
    end: "关",
  },
  levelNumber: "第",
  meta: {
    title: `《Digimon Story Time Stranger》游戏指南 | 第1-${levels.length}关完整视频攻略 | 策略提示`,
    description: `《Digimon Story Time Stranger》官方游戏指南网站，提供第1-${levels.length}关的完整攻略，包括详细的策略提示、解结方案和视频指南。帮助您轻松通关并解决所有谜题。`,
    keywords:
      "《Digimon Story Time Stranger》指南, 《Digimon Story Time Stranger》攻略, 益智游戏指南, 解结游戏, 策略游戏提示, 解谜, 休闲游戏",
    siteName: "《Digimon Story Time Stranger》官方指南",
    author: "《Digimon Story Time Stranger》指南团队",
    category: "游戏指南",
    classification: "休闲益智游戏",
  },
} as const;

export default level;
