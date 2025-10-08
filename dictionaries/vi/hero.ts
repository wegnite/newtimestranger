import levels from "@/data/levels";

export const hero = {
  badge: "Bộ sưu tập Hướng dẫn Trò chơi",
  title: "Xem Tất cả Hướng dẫn Cấp độ Dreamy Room",
  description:
    "Khám phá các walkthrough chi tiết, mẹo và chiến lược cho mỗi cấp độ phòng. Nhập số cấp độ để chuyển trực tiếp đến hướng dẫn tương ứng.",
  stats: {
    guides: levels.length + "+ Hướng dẫn Cấp độ",
    videoTutorials: `${levels.length}+ Video Hướng dẫn`,
    quickSearch: "Tìm kiếm Cấp độ Nhanh",
  },
  search: {
    placeholder: `Nhập số cấp độ (1-${levels.length})`,
    button: "Tìm kiếm Hướng dẫn",
    error: {
      invalid: "Vui lòng nhập số cấp độ hợp lệ",
      notFound: "Không tìm thấy hướng dẫn nào cho cấp độ này",
    },
  },
  buttons: {
    browseAll: "Duyệt Tất cả Hướng dẫn Cấp độ",
    downloadGame: "Tải xuống Trò chơi",
  },
  downloadCard: {
    title: "Tải xuống Dreamy Room",
    description: "Bắt đầu hành trình dọn dẹp và sắp xếp ấm áp và chữa lành!",
  },
  videoSection: {
    title: "Video Chiến lược Trò chơi",
    description:
      "Xem video hướng dẫn trò chơi chi tiết để học các kỹ thuật dọn dẹp và sắp xếp",
  },
} as const;

export default hero;
