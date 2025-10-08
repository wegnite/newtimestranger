import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room 게임 레벨 공략, 레벨1-${levels.length} 완전 공략 가이드`,
  subtitle: `${levels.length}레벨 완전 공략 | 정리정돈 팁 | 방 꾸미기 솔루션`,
  searchPlaceholder: `레벨 번호 입력 (1-${levels.length})`,
  levelRange: {
    start: "레벨",
    end: "",
  },
  levelNumber: "레벨",
  meta: {
    title: `Dreamy Room 게임 공략|레벨1-${levels.length} 완전 공략 비디오 가이드_정리정돈 팁`,
    description: `Dreamy Room 게임 공식 공략 사이트. 레벨1-${levels.length}의 완전 공략 가이드, 상세한 정리정돈 팁, 아이템 배치 방법, 클리어 비디오를 제공합니다. 편안한 공간 만들기를 지원합니다.`,
    keywords:
      "Dreamy Room 공략,Dreamy Room 클리어 공략,정리정돈 게임 공략,방 꾸미기 게임,정리 게임 팁,힐링 게임,스트레스 해소 게임",
    siteName: "Dreamy Room 공식 공략 사이트",
    author: "Dreamy Room 공략 팀",
    category: "게임 공략",
    classification: "캐주얼 퍼즐 게임",
  },
} as const;

export default level;
