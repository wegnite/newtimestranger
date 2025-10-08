import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "레벨 목록",
  },
  notFound: {
    title: "레벨을 찾을 수 없습니다",
    description: "죄송합니다. 찾으시는 레벨이 존재하지 않습니다",
    backToList: "레벨 목록으로 돌아가기",
  },
  levelNumber: "레벨",
  levelRange: {
    prefix: "Day",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room 레벨 {{level}} - 게임 공략 및 가이드 - Dreamy Room {{level}} & 비디오 팁`,
    description: `Dreamy Room {{level}}, Dreamy Room 레벨 {{level}} 완전 공략 가이드, 상세한 정리 팁, 아이템 배치 솔루션, 비디오 가이드 제공. 레벨을 쉽게 완료하고 완벽하고 아늑한 생활 공간을 만들도록 도와드립니다.`,
    siteName: "Dreamy Room 공식 공략 사이트",
    invalidId: {
      title: "잘못된 레벨 번호",
      description: `유효한 레벨 번호를 입력해 주세요 (1-${levels.length})`,
    },
    notFound: {
      title: "레벨이 존재하지 않습니다",
      description:
        "접근하려는 레벨이 존재하지 않습니다. 다른 레벨을 선택해 주세요",
    },
    langNotFound: {
      title: "언어 팩을 찾을 수 없습니다",
      description:
        "현재 언어의 번역 내용을 찾을 수 없습니다. 다른 언어로 전환해 주세요",
    },
  },
  sidebar: {
    adjacentLevels: "인접 레벨",
    allLevels: "모든 레벨",
  },
  shareLabel: "레벨 가이드 공유",
  linkCopiedText: "링크가 복사되었습니다!",
} as const;

export default levelDetail;
