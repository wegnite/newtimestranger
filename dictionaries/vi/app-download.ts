export const appDownload = {
  meta: {
    title: "Tải xuống Dreamy Room - Trò chơi Sắp xếp Phòng Ấm cúng",
    description:
      "Tải xuống Dreamy Room và bắt đầu hành trình sắp xếp và trang trí phòng đầy cảm động của bạn. Tạo không gian sống hoàn hảo của bạn thông qua việc sắp xếp có ý thức.",
  },
  title: "Tải xuống Dreamy Room",
  subtitle: "Trò chơi Sắp xếp Phòng Ấm cúng và Chữa lành",
  stats: {
    rating: "4.8",
    downloads: "1Tr+ Lượt tải", // Tr = Triệu
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Tải xuống trên App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Tải về trên Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Sắp xếp",
      description: "Tìm vị trí hoàn hảo cho mọi vật phẩm",
    },
    story: {
      title: "Câu chuyện Cảm động",
      description:
        "Kể những câu chuyện cuộc đời thông qua việc sắp đặt vật phẩm",
    },
  },
} as const;

export default appDownload;
