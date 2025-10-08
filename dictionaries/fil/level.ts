import levels from "@/data/levels";

export const level = {
  title: `Gabay sa Antas ng Larong Dreamy Room, Kumpletong Walkthrough para sa Mga Antas 1-${levels.length}`,
  subtitle: `Kumpletong Walkthrough para sa ${levels.length} na Antas | Mga Tip sa Organisasyon | Mga Solusyon sa Layout ng Kwarto`,
  searchPlaceholder: `Ilagay ang numero ng antas (1-${levels.length})`,
  levelRange: {
    start: "Antas ",
    end: "",
  },
  levelNumber: "Antas",
  meta: {
    title: `Gabay sa Larong Dreamy Room | Kumpletong Video Walkthrough para sa Mga Antas 1-${levels.length} | Mga Tip sa Organisasyon`,
    description: `Opisyal na website ng gabay sa larong Dreamy Room, nagbibigay ng kumpletong walkthrough para sa mga antas 1-${levels.length}, kasama ang mga detalyadong tip sa organisasyon, mga solusyon sa paglalagay ng item, at mga gabay sa video. Tulungan kang madaling makumpleto ang mga antas at lumikha ng perpektong maaliwalas na espasyo sa pamumuhay.`,
    keywords:
      "Gabay sa Dreamy Room, Walkthrough ng Dreamy Room, Gabay sa larong organisasyon, Laro ng dekorasyon ng kwarto, Mga tip sa larong organisasyon, Larong nakakagaling, Larong pampatanggal ng stress",
    siteName: "Opisyal na Gabay ng Dreamy Room",
    author: "Koponan ng Gabay ng Dreamy Room",
    category: "Gabay sa Laro",
    classification: "Kaswal na Larong Palaisipan",
  },
} as const;

export default level;
