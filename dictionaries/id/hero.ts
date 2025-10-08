import levels from "@/data/levels";

export const hero = {
  badge: "Koleksi Panduan Game",
  title: "Lihat Semua Panduan Level Dreamy Room",
  description:
    "Jelajahi walkthrough terperinci, tips, dan strategi untuk setiap level ruangan. Masukkan nomor level untuk melompat langsung ke panduan yang sesuai.",
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
      notFound: "Tidak ada panduan yang ditemukan untuk level ini",
    },
  },
  buttons: {
    browseAll: "Jelajahi Semua Panduan Level",
    downloadGame: "Unduh Game",
  },
  downloadCard: {
    title: "Unduh Dreamy Room",
    description:
      "Mulailah perjalanan yang hangat dan menyembuhkan dalam merapikan dan mengatur!",
  },
  videoSection: {
    title: "Video Strategi Game",
    description:
      "Tonton tutorial video game terperinci untuk mempelajari teknik merapikan dan mengatur",
  },
} as const;

export default hero;
