import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "레벨 목록",
  },
  notFound: {
    title: "레벨을 찾을 수 없음",
    description: "죄송합니다. 찾고 계신 레벨이 존재하지 않습니다.",
    backToList: "레벨 목록으로 돌아가기",
  },
  levelNumber: "레벨",
  levelRange: {
    prefix: "날짜",
    suffix: "",
  },
  meta: {
    title: `Digimon Story Time Stranger 레벨 {{level}} - 진행 방법 및 솔루션 및 게임`,
    description: `Digimon Story Time Stranger {{level}}, Digimon Story Time Stranger 레벨 {{level}}에 대한 완벽한 가이드. 자세한 전략 팁, 밧줄 및 넥타이 솔루션, 그리고 비디오 진행 방법을 제공합니다. 모든 매듭을 풀어 쉽게 레벨을 완료하도록 도와줍니다.`,
    siteName: "Digimon Story Time Stranger 공식 가이드",
    invalidId: {
      title: "잘못된 레벨 번호",
      description: `유효한 레벨 번호(1-${levels.length})를 입력해주세요.`,
    },
    notFound: {
      title: "레벨이 존재하지 않음",
      description:
        "접속하려는 레벨이 존재하지 않습니다. 다른 레벨을 선택해주세요.",
    },
    langNotFound: {
      title: "언어 팩을 찾을 수 없음",
      description:
        "현재 언어에 대한 번역 내용을 찾을 수 없습니다. 다른 언어로 전환해주세요.",
    },
  },
  sidebar: {
    adjacentLevels: "인접한 레벨",
    allLevels: "모든 레벨",
  },
  shareLabel: "레벨 가이드 공유",
  linkCopiedText: "복사 성공!",
} as const;
