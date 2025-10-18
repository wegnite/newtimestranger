import levels from "@/data/levels";

export const hero = {
  badge: "Koleksi Panduan Permainan",
  title: "Lihat Semua Panduan Tahap Digimon Story Time Stranger",
  description:
    "Jelajahi panduan langkah demi langkah, petunjuk, dan strategi untuk setiap tahap. Masukkan nombor tahap untuk melompat terus ke panduan yang sepadan.",
  stats: {
    guides: levels.length + "+ Panduan Tahap",
    videoTutorials: `${levels.length}+ Tutorial Video`,
    quickSearch: "Cari Pantas Tahap",
  },
  search: {
    placeholder: `Masukkan nombor tahap (1-${levels.length})`,
    button: "Cari Panduan",
    error: {
      invalid: "Sila masukkan nombor tahap yang sah",
      notFound: "Tiada panduan ditemui untuk tahap ini",
    },
  },
  buttons: {
    browseAll: "Lihat Semua Panduan Tahap",
    downloadGame: "Muat Turun Permainan",
  },
  downloadCard: {
    title: "Muat Turun Digimon Story Time Stranger",
    description: "Mula petualangan teka-teki santai dan strategik!",
  },
  videoSection: {
    title: "Video Strategi Digimon Story Time Stranger",
    description:
      "Tonton tutorial video permainan terperinci untuk belajar strategi untuk menyelesaikan setiap tahap",
  },
} as const;
