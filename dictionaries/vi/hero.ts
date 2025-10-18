import levels from "@/data/levels";

export const hero = {
  badge: "Tập hợp Hướng dẫn Trò chơi",
  title: "Xem tất cả Hướng dẫn Cấp độ Digimon Story Time Stranger",
  description:
    "Khám phá các hướng dẫn chi tiết, mẹo và chiến lược cho mỗi cấp độ. Nhập số cấp độ để nhảy trực tiếp đến hướng dẫn tương ứng.",
  stats: {
    guides: levels.length + "+ Hướng dẫn Cấp độ",
    videoTutorials: `${levels.length}+ Hướng dẫn Video`,
    quickSearch: "Tìm kiếm nhanh Cấp độ",
  },
  search: {
    placeholder: `Nhập số cấp độ (1-${levels.length})`,
    button: "Tìm kiếm Hướng dẫn",
    error: {
      invalid: "Vui lòng nhập số cấp độ hợp lệ",
      notFound: "Không tìm thấy hướng dẫn cho cấp độ này",
    },
  },
  buttons: {
    browseAll: "Duyệt tất cả Hướng dẫn Cấp độ",
    downloadGame: "Tải xuống Trò chơi",
  },
  downloadCard: {
    title: "Tải xuống Digimon Story Time Stranger",
    description: "Bắt đầu một cuộc phiêu lưu thách đấu giải đố thư giãn và có chiến lược!",
  },
  videoSection: {
    title: "Video Chiến lược Digimon Story Time Stranger",
    description:
      "Xem các hướng dẫn video chi tiết của trò chơi để học các chiến lược hoàn thành các cấp độ",
  },
} as const;
