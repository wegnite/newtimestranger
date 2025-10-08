import levels from "@/data/levels";

export const level = {
  title: `Panduan Level Game Dreamy Room, Walkthrough Lengkap untuk Level 1-${levels.length}`,
  subtitle: `Walkthrough Lengkap untuk ${levels.length} Level | Tips Organisasi | Solusi Tata Letak Ruangan`,
  searchPlaceholder: `Masukkan nomor level (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Panduan Game Dreamy Room | Walkthrough Video Lengkap untuk Level 1-${levels.length} | Tips Organisasi`,
    description: `Situs web panduan game resmi Dreamy Room, menyediakan walkthrough lengkap untuk level 1-${levels.length}, termasuk tips organisasi terperinci, solusi penempatan item, dan panduan video. Membantu Anda menyelesaikan level dengan mudah dan menciptakan ruang tamu yang nyaman dan sempurna.`,
    keywords:
      "Panduan Dreamy Room, Walkthrough Dreamy Room, Panduan game organisasi, Game dekorasi ruangan, Tips game organisasi, Game penyembuhan, Game penghilang stres",
    siteName: "Panduan Resmi Dreamy Room",
    author: "Tim Panduan Dreamy Room",
    category: "Panduan Game",
    classification: "Game Puzzle Kasual",
  },
} as const;

export default level;
