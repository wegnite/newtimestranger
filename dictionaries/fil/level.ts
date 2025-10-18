import levels from "@/data/levels";

export const level = {
  title: `Ang Gabay sa Mga Lebel ng Larong Digimon Story Time Stranger, Kompletong Paglalakbay sa Mga Lebel mula 1-${levels.length}`,
  subtitle: `Kumpletong Paglalakbay sa ${levels.length} Mga Lebel | Mga Tips sa Diskarte | Mga Solusyon sa Pagkawala ng mga Udyok`,
  searchPlaceholder: `Ilagay ang numero ng lebel (1-${levels.length})`,
  levelRange: {
    start: "Lebel ",
    end: "",
  },
  levelNumber: "Lebel",
  meta: {
    title: `Gabay sa Larong Digimon Story Time Stranger | Kumpletong Video Walkthrough para sa Mga Lebel mula 1-${levels.length} | Mga Tips sa Diskarte`,
    description: `Opisyal na website ng gabay sa laro ng Digimon Story Time Stranger, na nagbibigay ng kumpletong paglalakbay sa mga lebel mula 1-${levels.length}, kabilang ang mga detalyadong tip sa diskarte, mga solusyon sa pagkawala ng mga udyok, at mga video guide. Tumulong sa iyo na madaling makumpleto ang mga lebel at malutas ang lahat ng mga palaisipan.`,
    keywords:
      "Gabay sa Digimon Story Time Stranger, Walkthrough sa Digimon Story Time Stranger, Gabay sa Laro ng Palaisipan, Larong Pagkawala ng Udyok, Mga Tips sa Laro ng Diskarte, Paglutas ng Palaisipan, Palaro ng Mapagkolektibo",
    siteName: "Oficial na Gabay sa Digimon Story Time Stranger",
    author: "Digimon Story Time Stranger Guide Team",
    category: "Gabay sa Laro",
    classification: "Palaro ng Mapagkolektibong Palaisipan",
  },
} as const;

export default level;
