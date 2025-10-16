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
    title: `Knit Out Level {{level}} - Panduan & Solusi & Permainan`,
    description: `Knit Out {{level}}, Panduan lengkap untuk Knit Out Level {{level}}, memberikan tips strategi rinci, solusi tali dan bobbin, dan panduan video. Membantu Anda dengan mudah menyelesaikan level dan membuka semua simpul.`,
    siteName: "Petunjuk Resmi Knit Out",
    invalidId: {
      title: "Nomor Level Tidak Valid",
      description: `Silakan masukkan nomor level yang valid (1-${levels.length})`,
    },
    notFound: {
      title: "Level Tidak Ada",
      description:
        "Level yang Anda coba akses tidak ada, silakan pilih level lain",
    },
    langNotFound: {
      title: "Paket Bahasa Tidak Ditemukan",
      description:
        "Isi terjemahan untuk bahasa saat ini tidak ditemukan, silakan ganti ke bahasa lain",
    },
  },
  sidebar: {
    adjacentLevels: "Level Tetangga",
    allLevels: "Semua Level",
  },
  shareLabel: "Bagikan Panduan Level",
  linkCopiedText: "Berhasil disalin!",
} as const;
