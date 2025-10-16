import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Danh sách关卡",
  },
  notFound: {
    title: "关卡未找到",
    description: "Xin lỗi,关卡 bạn đang tìm kiếm không tồn tại",
    backToList: "Quay lại Danh sách关卡",
  },
  levelNumber: "关卡",
  levelRange: {
    prefix: "Ngày",
    suffix: "",
  },
  meta: {
    title: `Knit Out关卡{{level}} - Hướng dẫn và Giải pháp & Trò chơi`,
    description: `Knit Out {{level}}, Hướng dẫn đầy đủ cho关卡Knit Out {{level}}, cung cấp các mẹo chiến lược chi tiết, giải pháp dây và bobbing, và các hướng dẫn video. Giúp bạn dễ dàng hoàn thành关卡và giải quyết tất cả các nút bấm.`,
    siteName: "Hướng dẫn chính thức Knit Out",
    invalidId: {
      title: "Số关卡không hợp lệ",
      description: `Vui lòng nhập một số关卡đúng (1-${levels.length})`,
    },
    notFound: {
      title: "关卡không tồn tại",
      description:
        "关卡 bạn đang cố truy cập không tồn tại, vui lòng chọn một关卡khác",
    },
    langNotFound: {
      title: "Gói ngôn ngữ không tìm thấy",
      description:
        "Nội dung dịch cho ngôn ngữ hiện tại không tìm thấy, vui lòng chuyển sang ngôn ngữ khác",
    },
  },
  sidebar: {
    adjacentLevels: "Các关卡kề",
    allLevels: "Tất cả các关卡",
  },
  shareLabel: "Chia sẻ Hướng dẫn关卡",
  linkCopiedText: "Đã sao chép thành công!",
} as const;
