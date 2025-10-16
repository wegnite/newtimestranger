import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Senarai Tahap",
  },
  notFound: {
    title: "Tahap Tidak Ditemui",
    description: "Maaf, tahap yang anda cari tidak wujud",
    backToList: "Kembali ke Senarai Tahap",
  },
  levelNumber: "Tahap",
  levelRange: {
    prefix: "Hari",
    suffix: "",
  },
  meta: {
    title: `Knit Out Tahap {{level}} - Panduan & Penyelesaian & Permainan`,
    description: `Knit Out {{level}}, Panduan lengkap untuk Knit Out Tahap {{level}}, menyediakan petunjuk strategi terperinci, penyelesaian tali dan bobin, dan panduan video. Membantu anda dengan mudah melengkapi tahap dan membuka semua simpul.`,
    siteName: "Panduan Rasmi Knit Out",
    invalidId: {
      title: "Nombor Tahap Tidak Sah",
      description: `Sila masukkan nombor tahap yang sah (1-${levels.length})`,
    },
    notFound: {
      title: "Tahap Tidak Wujud",
      description:
        "Tahap yang anda cuba akses tidak wujud, sila pilih tahap lain",
    },
    langNotFound: {
      title: "Pakej Bahasa Tidak Ditemui",
      description:
        "Kandungan terjemahan untuk bahasa semasa tidak ditemui, sila tukar ke bahasa lain",
    },
  },
  sidebar: {
    adjacentLevels: "Tahap Bertetangga",
    allLevels: "Semua Tahap",
  },
  shareLabel: "Kongsi Panduan Tahap",
  linkCopiedText: "Berjaya Disalin!",
} as const;
