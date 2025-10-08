import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Danh sách Cấp độ",
  },
  notFound: {
    title: "Không tìm thấy Cấp độ",
    description: "Xin lỗi, cấp độ bạn đang tìm kiếm không tồn tại",
    backToList: "Quay lại Danh sách Cấp độ",
  },
  levelNumber: "Cấp độ",
  levelRange: {
    prefix: "Ngày",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Cấp độ {{level}} - Hướng dẫn trò chơi và Walkthrough - Dreamy Room {{level}} & Mẹo Video`,
    description: `Dreamy Room {{level}}, Hướng dẫn đầy đủ cho Dreamy Room Cấp độ {{level}}, cung cấp các mẹo sắp xếp chi tiết, giải pháp đặt vật phẩm và walkthrough video. Giúp bạn dễ dàng hoàn thành cấp độ và tạo ra không gian sống ấm cúng hoàn hảo.`,
    siteName: "Hướng dẫn Chính thức Dreamy Room",
    invalidId: {
      title: "Số Cấp độ Không hợp lệ",
      description: `Vui lòng nhập số cấp độ hợp lệ (1-${levels.length})`,
    },
    notFound: {
      title: "Cấp độ Không tồn tại",
      description:
        "Cấp độ bạn đang cố gắng truy cập không tồn tại, vui lòng chọn cấp độ khác",
    },
    langNotFound: {
      title: "Không tìm thấy Gói ngôn ngữ",
      description:
        "Không tìm thấy nội dung dịch cho ngôn ngữ hiện tại, vui lòng chuyển sang ngôn ngữ khác",
    },
  },
  sidebar: {
    adjacentLevels: "Cấp độ Liền kề",
    allLevels: "Tất cả Cấp độ",
  },
  shareLabel: "Chia sẻ Hướng dẫn Cấp độ",
  linkCopiedText: "Đã sao chép liên kết!",
} as const;

export default levelDetail;
