import levels from "@/data/levels";

export const hero = {
  badge: "Koleksi Panduan Permainan",
  title: "Lihat Semua Panduan Tahap Dreamy Room",
  description:
    "Terokai walkthrough terperinci, petua, dan strategi untuk setiap tahap bilik. Masukkan nombor tahap untuk terus ke panduan yang sepadan.",
  stats: {
    guides: levels.length + "+ Panduan Tahap",
    videoTutorials: `${levels.length}+ Tutorial Video`,
    quickSearch: "Carian Tahap Pantas",
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
    browseAll: "Semak Semua Panduan Tahap",
    downloadGame: "Muat Turun Permainan",
  },
  downloadCard: {
    title: "Muat Turun Dreamy Room",
    description: "Mulakan perjalanan mengemas dan menyusun yang menenangkan!",
  },
  videoSection: {
    title: "Video Strategi Permainan",
    description:
      "Tonton tutorial video permainan terperinci untuk belajar teknik mengemas dan menyusun",
  },
} as const;

export default hero;
