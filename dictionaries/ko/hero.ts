import levels from "@/data/levels";

export const hero = {
  badge: "게임 가이드 모음",
  title: "모든 Knit Out 레벨 가이드 보기",
  description:
    "각 레벨에 대한 자세한 진행 가이드, 팁 및 전략을 탐색하세요. 해당 가이드로 직접 이동하려면 레벨 번호를 입력하세요.",
  stats: {
    guides: levels.length + "+ 개의 레벨 가이드",
    videoTutorials: `${levels.length}+ 개의 비디오 튜토리얼`,
    quickSearch: "빠른 레벨 검색",
  },
  search: {
    placeholder: `레벨 번호 입력 (1-${levels.length})`,
    button: "가이드 검색",
    error: {
      invalid: "유효한 레벨 번호를 입력하세요",
      notFound: "이 레벨에 대한 가이드를 찾을 수 없습니다",
    },
  },
  buttons: {
    browseAll: "모든 레벨 가이드 보기",
    downloadGame: "게임 다운로드",
  },
  downloadCard: {
    title: "Knit Out 다운로드",
    description: "휴식과 전략적인 퍼즐 모험을 시작하세요!",
  },
  videoSection: {
    title: "Knit Out 전략 비디오",
    description:
      "레벨을 완료하는 전략을 배우기 위해 자세한 게임 비디오 튜토리얼을 시청하세요",
  },
} as const;
