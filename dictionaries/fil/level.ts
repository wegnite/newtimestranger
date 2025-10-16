import levels from "@/data/levels";

export const level = {
  title: `Ang Gabay sa Mga Lebel ng Larong Knit Out, Kompletong Paglalakbay sa Mga Lebel mula 1-${levels.length}`,
  subtitle: `Kumpletong Paglalakbay sa ${levels.length} Mga Lebel | Mga Tips sa Diskarte | Mga Solusyon sa Pagkawala ng mga Udyok`,
  searchPlaceholder: `Ilagay ang numero ng lebel (1-${levels.length})`,
  levelRange: {
    start: "Lebel ",
    end: "",
  },
  levelNumber: "Lebel",
  meta: {
    title: `Gabay sa Larong Knit Out | Kumpletong Video Walkthrough para sa Mga Lebel mula 1-${levels.length} | Mga Tips sa Diskarte`,
    description: `Opisyal na website ng gabay sa laro ng Knit Out, na nagbibigay ng kumpletong paglalakbay sa mga lebel mula 1-${levels.length}, kabilang ang mga detalyadong tip sa diskarte, mga solusyon sa pagkawala ng mga udyok, at mga video guide. Tumulong sa iyo na madaling makumpleto ang mga lebel at malutas ang lahat ng mga palaisipan.`,
    keywords:
      "Gabay sa Knit Out, Walkthrough sa Knit Out, Gabay sa Laro ng Palaisipan, Larong Pagkawala ng Udyok, Mga Tips sa Laro ng Diskarte, Paglutas ng Palaisipan, Palaro ng Mapagkolektibo",
    siteName: "Oficial na Gabay sa Knit Out",
    author: "Knit Out Guide Team",
    category: "Gabay sa Laro",
    classification: "Palaro ng Mapagkolektibong Palaisipan",
  },
} as const;

export default level;
