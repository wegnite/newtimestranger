import levels from "@/data/levels";

export const level = {
  title: `Hướng dẫn Cấp độ Trò chơi Dreamy Room, Walkthrough Hoàn chỉnh cho Cấp độ 1-${levels.length}`,
  subtitle: `Walkthrough Hoàn chỉnh cho ${levels.length} Cấp độ | Mẹo Sắp xếp | Giải pháp Bố trí Phòng`,
  searchPlaceholder: `Nhập số cấp độ (1-${levels.length})`,
  levelRange: {
    start: "Cấp độ ",
    end: "",
  },
  levelNumber: "Cấp độ",
  meta: {
    title: `Hướng dẫn Trò chơi Dreamy Room | Walkthrough Video Hoàn chỉnh cho Cấp độ 1-${levels.length} | Mẹo Sắp xếp`,
    description: `Trang web hướng dẫn trò chơi Dreamy Room chính thức, cung cấp walkthrough hoàn chỉnh cho các cấp độ 1-${levels.length}, bao gồm các mẹo sắp xếp chi tiết, giải pháp đặt vật phẩm và hướng dẫn video. Giúp bạn dễ dàng hoàn thành các cấp độ và tạo ra không gian sống ấm cúng hoàn hảo.`,
    keywords:
      "Hướng dẫn Dreamy Room, Walkthrough Dreamy Room, Hướng dẫn trò chơi sắp xếp, Trò chơi trang trí phòng, Mẹo trò chơi sắp xếp, Trò chơi chữa lành, Trò chơi giải tỏa căng thẳng",
    siteName: "Hướng dẫn Chính thức Dreamy Room",
    author: "Đội ngũ Hướng dẫn Dreamy Room",
    category: "Hướng dẫn Trò chơi",
    classification: "Trò chơi Giải đố Thông thường",
  },
} as const;

export default level;
