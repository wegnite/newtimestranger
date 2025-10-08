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
    title: `Dreamy Room Tahap {{level}} - Panduan Permainan dan Walkthrough - Dreamy Room {{level}} & Petua Video`,
    description: `Dreamy Room {{level}}, Panduan lengkap untuk Dreamy Room Tahap {{level}}, menyediakan petua penyusunan terperinci, penyelesaian penempatan item, dan walkthrough video. Bantu anda melengkapkan tahap dengan mudah dan mencipta ruang tamu yang selesa dan sempurna.`,
    siteName: "Panduan Rasmi Dreamy Room",
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
      title: "Pek Bahasa Tidak Ditemui",
      description:
        "Kandungan terjemahan untuk bahasa semasa tidak ditemui, sila tukar ke bahasa lain",
    },
  },
  sidebar: {
    adjacentLevels: "Tahap Bersebelahan",
    allLevels: "Semua Tahap",
  },
  shareLabel: "Kongsi Panduan Tahap",
  linkCopiedText: "Pautan disalin!",
} as const;

export default levelDetail;
