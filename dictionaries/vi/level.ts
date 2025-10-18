import levels from "@/data/levels";

export const level = {
  title: `Hướng dẫn các cấp trong trò chơi Digimon Story Time Stranger, Dẫn đường chơi đầy đủ cho các cấp từ 1 - ${levels.length}`,
  subtitle: `Dẫn đường chơi đầy đủ cho ${levels.length} cấp | Những mẹo chiến thuật | Các giải pháp để giải đuối`,
  searchPlaceholder: `Nhập số cấp (1 - ${levels.length})`,
  levelRange: {
    start: "Cấp ",
    end: "",
  },
  levelNumber: "Cấp",
  meta: {
    title: `Hướng dẫn trò chơi Digimon Story Time Stranger | Dẫn đường chơi video đầy đủ cho các cấp từ 1 - ${levels.length} | Những mẹo chiến thuật`,
    description: `Trang web hướng dẫn chính thức cho trò chơi Digimon Story Time Stranger, cung cấp các hướng dẫn chơi đầy đủ cho các cấp từ 1 - ${levels.length}, bao gồm các mẹo chiến thuật chi tiết, các giải pháp để giải đuối rối và các hướng dẫn video. Giúp bạn dễ dàng hoàn thành các cấp và giải quyết tất cả các bài toán rối.`,
    keywords:
      "Hướng dẫn Digimon Story Time Stranger, Dẫn đường chơi Digimon Story Time Stranger, Hướng dẫn trò chơi益智, Trò chơi giải đuối, Những mẹo chiến thuật cho trò chơi chiến lược, Giải quyết bài toán rối, Trò chơi giải trí nhẹ nhàng",
    siteName: "Hướng dẫn chính thức Digimon Story Time Stranger",
    author: "Nhóm Hướng dẫn Digimon Story Time Stranger",
    category: "Hướng dẫn trò chơi",
    classification: "Trò chơi giải trí nhẹ nhàng và rối",
  },
} as const;

export default level;
