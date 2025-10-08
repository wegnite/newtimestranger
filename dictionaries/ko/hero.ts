import levels from "@/data/levels";

export const hero = {
  badge: "게임 공략 대전집",
  title: "Dreamy Room 모든 레벨 공략 보기",
  description:
    "각 방 레벨의 상세한 클리어 가이드, 팁 및 전략을 탐색하세요. 레벨 번호를 입력하면 해당 공략으로 바로 이동할 수 있습니다.",
  stats: {
    guides: levels.length + "+ 레벨 공략",
    videoTutorials: `${levels.length}+ 비디오 튜토리얼`,
    quickSearch: "빠른 레벨 검색",
  },
  search: {
    placeholder: `레벨 번호 입력 (1-${levels.length})`,
    button: "공략 검색",
    error: {
      invalid: "유효한 레벨 번호를 입력해 주세요",
      notFound: "해당 레벨의 공략을 찾을 수 없습니다",
    },
  },
  buttons: {
    browseAll: "모든 레벨 공략 둘러보기",
    downloadGame: "게임 다운로드",
  },
  downloadCard: {
    title: "Dreamy Room 다운로드",
    description: "따뜻하고 치유적인 정리정돈의 여정을 시작하세요!",
  },
  videoSection: {
    title: "게임 공략 비디오",
    description:
      "상세한 게임 비디오 튜토리얼을 시청하고 정리정돈 기술을 배우세요",
  },
} as const;

export default hero;
