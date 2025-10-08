import levels from "@/data/levels";

export const level = {
  title: `Panduan Tahap Permainan Dreamy Room, Walkthrough Lengkap untuk Tahap 1-${levels.length}`,
  subtitle: `Walkthrough Lengkap untuk ${levels.length} Tahap | Petua Penyusunan | Penyelesaian Susun Atur Bilik`,
  searchPlaceholder: `Masukkan nombor tahap (1-${levels.length})`,
  levelRange: {
    start: "Tahap ",
    end: "",
  },
  levelNumber: "Tahap",
  meta: {
    title: `Panduan Permainan Dreamy Room | Walkthrough Video Lengkap untuk Tahap 1-${levels.length} | Petua Penyusunan`,
    description: `Laman web panduan permainan rasmi Dreamy Room, menyediakan walkthrough lengkap untuk tahap 1-${levels.length}, termasuk petua penyusunan terperinci, penyelesaian penempatan item, dan panduan video. Bantu anda melengkapkan tahap dengan mudah dan mencipta ruang tamu yang selesa dan sempurna.`,
    keywords:
      "Panduan Dreamy Room, Walkthrough Dreamy Room, Panduan permainan penyusunan, Permainan hiasan bilik, Petua permainan penyusunan, Permainan menenangkan, Permainan hilangkan stres",
    siteName: "Panduan Rasmi Dreamy Room",
    author: "Pasukan Panduan Dreamy Room",
    category: "Panduan Permainan",
    classification: "Permainan Teka-teki Santai",
  },
} as const;

export default level;
