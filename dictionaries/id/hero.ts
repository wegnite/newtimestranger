import levels from "@/data/levels";

export const hero = {
  badge: "Koleksi Panduan Game",
  title: "Lihat Semua Panduan Level Knit Out",
  description:
    "Jelajahi petunjuk langkah demi langkah, tips, dan strategi untuk setiap level. Masukkan nomor level untuk langsung melompat ke panduan yang sesuai.",
  stats: {
    guides: levels.length + "+ Panduan Level",
    videoTutorials: `${levels.length}+ Tutorial Video`,
    quickSearch: "Pencarian Level Cepat",
  },
  search: {
    placeholder: `Masukkan nomor level (1-${levels.length})`,
    button: "Cari Panduan",
    error: {
      invalid: "Silakan masukkan nomor level yang valid",
      notFound: "Tidak ada panduan ditemukan untuk level ini",
    },
  },
  buttons: {
    browseAll: "Jelajahi Semua Panduan Level",
    downloadGame: "Unduh Game",
  },
  downloadCard: {
    title: "Unduh Knit Out",
    description: "Mulai petualangan teka-teki santai dan strategis!",
  },
  videoSection: {
    title: "Video Strategi Knit Out",
    description:
      "Tonton tutorial video game terperinci untuk belajar strategi menyelesaikan level",
  },
} as const;
