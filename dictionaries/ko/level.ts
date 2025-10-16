import levels from "@/data/levels";

export const level = {
  title: `Knit Out 게임 레벨 가이드, 1-${levels.length} 레벨까지의 완벽한 전략 가이드`,
  subtitle: `${levels.length}개의 레벨에 대한 완벽한 전략 가이드 | 전략 팁 | 풀어내기 솔루션`,
  searchPlaceholder: `레벨 번호 입력 (1-${levels.length})`,
  levelRange: {
    start: "레벨 ",
    end: "",
  },
  levelNumber: "레벨",
  meta: {
    title: `Knit Out 게임 가이드 | 1-${levels.length} 레벨까지의 완벽한 비디오 전략 가이드 | 전략 팁`,
    description: `公式 Knit Out 게임 가이드 웹사이트. 1-${levels.length} 레벨까지의 완벽한 전략 가이드를 제공하며, 자세한 전략 팁, 매듭 풀어내기 솔루션 및 비디오 가이드를 포함합니다. 모든 퍼즐을 쉽게 해결하고 레벨을 완료하는 데 도움이 됩니다.`,
    keywords:
      "Knit Out 가이드, Knit Out 전략 가이드, 퍼즐 게임 가이드, 풀어내기 게임, 전략 게임 팁, 퍼즐 해결, 캐주얼 게임",
    siteName: "Knit Out 공식 가이드",
    author: "Knit Out 가이드 팀",
    category: "게임 가이드",
    classification: "캐주얼 퍼즐 게임",
  },
} as const;

export default level;
