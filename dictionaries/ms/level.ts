import levels from "@/data/levels";

export const level = {
  title: `Panduan Tahap Permainan Knit Out, Panduan Lengkap untuk Tahap 1-${levels.length}`,
  subtitle: `Panduan Lengkap untuk ${levels.length} Tahap | Petunjuk Strategi | Penyelesaian Penyusutan`,
  searchPlaceholder: `Masukkan nombor tahap (1-${levels.length})`,
  levelRange: {
    start: "Tahap ",
    end: "",
  },
  levelNumber: "Tahap",
  meta: {
    title: `Panduan Permainan Knit Out | Panduan Video Lengkap untuk Tahap 1-${levels.length} | Petunjuk Strategi`,
    description: `Laman web rasmi panduan permainan Knit Out, menyediakan panduan video lengkap untuk tahap 1-${levels.length}, termasuk petunjuk strategi terperinci, penyelesaian penyusutan simpul, dan panduan video. Membantu anda dengan mudah menyelesaikan tahap dan menyelesaikan semua teka-teki.`,
    keywords:
      "Panduan Knit Out, Panduan Knit Out, Panduan permainan teka-teki, Permainan penyusutan, Petunjuk permainan strategi, Penyelesaian teka-teki, Permainan santai",
    siteName: "Panduan Resmi Knit Out",
    author: "Pasukan Panduan Knit Out",
    category: "Panduan Permainan",
    classification: "Permainan Teka-Teki Santai",
  },
} as const;

export default level;
