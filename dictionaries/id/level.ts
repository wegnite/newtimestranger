import levels from "@/data/levels";

export const level = {
  title: `Panduan Level Game Knit Out, Panduan Lengkap untuk Level 1-${levels.length}`,
  subtitle: `Panduan Lengkap untuk ${levels.length} Level | Tips Strategi | Solusi Penyelesaian Simpul`,
  searchPlaceholder: `Masukkan nomor level (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Panduan Game Knit Out | Panduan Video Lengkap untuk Level 1-${levels.length} | Tips Strategi`,
    description: `Situs resmi panduan game Knit Out, menyediakan panduan lengkap untuk level 1-${levels.length}, termasuk tips strategi rinci, solusi penyelesaian simpul, dan panduan video. Membantu Anda dengan mudah menyelesaikan level dan menyelesaikan semua teka-teki.`,
    keywords:
      "Panduan Knit Out, Panduan Knit Out, Panduan Game Puzzle, Game Penyelesaian Simpul, Tips Game Strategi, Penyelesaian Teka-Teki, Game Casual",
    siteName: "Panduan Resmi Knit Out",
    author: "Tim Panduan Knit Out",
    category: "Panduan Game",
    classification: "Game Puzzle Casual",
  },
} as const;

export default level;
