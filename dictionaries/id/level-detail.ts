import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Daftar Level",
  },
  notFound: {
    title: "Level Tidak Ditemukan",
    description: "Maaf, level yang Anda cari tidak ada",
    backToList: "Kembali ke Daftar Level",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Hari",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Level {{level}} - Panduan Game dan Walkthrough - Dreamy Room {{level}} & Tips Video`,
    description: `Dreamy Room {{level}}, Panduan lengkap untuk Dreamy Room Level {{level}}, menyediakan tips organisasi terperinci, solusi penempatan item, dan walkthrough video. Membantu Anda menyelesaikan level dengan mudah dan menciptakan ruang tamu yang nyaman dan sempurna.`,
    siteName: "Panduan Resmi Dreamy Room",
    invalidId: {
      title: "Nomor Level Tidak Valid",
      description: `Silakan masukkan nomor level yang valid (1-${levels.length})`,
    },
    notFound: {
      title: "Level Tidak Ada",
      description:
        "Level yang coba Anda akses tidak ada, silakan pilih level lain",
    },
    langNotFound: {
      title: "Paket Bahasa Tidak Ditemukan",
      description:
        "Konten terjemahan untuk bahasa saat ini tidak ditemukan, silakan beralih ke bahasa lain",
    },
  },
  sidebar: {
    adjacentLevels: "Level Berdekatan",
    allLevels: "Semua Level",
  },
  shareLabel: "Bagikan Panduan Level",
  linkCopiedText: "Tautan disalin!",
} as const;

export default levelDetail;
