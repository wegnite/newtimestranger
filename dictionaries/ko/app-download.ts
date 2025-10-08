export const appDownload = {
  meta: {
    title: "Dreamy Room 다운로드 - 따뜻한 정리정돈 게임",
    description:
      "Dreamy Room을 다운로드하고 따뜻한 정리정돈의 여행을 시작하세요. 방을 정리하고 꾸미면서 당신만의 완벽한 생활공간을 만들어보세요.",
  },
  title: "Dreamy Room 다운로드",
  subtitle: "마음을 치유하는 정리정돈 게임",
  stats: {
    rating: "4.8",
    downloads: "100만+ 다운로드",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "App Store에서 다운로드",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Google Play에서 다운로드",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "정리정돈",
      description: "모든 물건의 완벽한 자리를 찾아보세요",
    },
    story: {
      title: "따뜻한 이야기",
      description: "물건 배치로 이야기를 들려주세요",
    },
  },
} as const;

export default appDownload;
