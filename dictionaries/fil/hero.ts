import levels from "@/data/levels";

export const hero = {
  badge: "Koleksyon ng Mga Gabay sa Laro",
  title: "Tingnan ang Lahat ng Mga Gabay sa Lebel ng Digimon Story Time Stranger",
  description:
    "Galugarin ang mga detalyadong pagsasama, tips, at diskarte para sa bawat lebel. Ipasok ang isang numero ng lebel upang tumalon direktang sa kaukulang gabay.",
  stats: {
    guides: levels.length + "+ Mga Gabay sa Lebel",
    videoTutorials: `${levels.length}+ Mga Video Tutorial`,
    quickSearch: "Mabilis na Paghahanap sa Lebel",
  },
  search: {
    placeholder: `Ipasok ang numero ng lebel (1-${levels.length})`,
    button: "Hanapin ang Gabay",
    error: {
      invalid: "Mangyaring mag-enter ng isang wastong numero ng lebel",
      notFound: "Walang natagpuan na gabay para sa lebel na ito",
    },
  },
  buttons: {
    browseAll: "Magbrowse ng Lahat ng Mga Gabay sa Lebel",
    downloadGame: "Mag-download ng Laro",
  },
  downloadCard: {
    title: "Mag-download ng Digimon Story Time Stranger",
    description: "Simulan ang isang mapapakalma at makatotohanang pakikipagsapalaran sa puzzle!",
  },
  videoSection: {
    title: "Mga Video ng Diskarte sa Digimon Story Time Stranger",
    description:
      "Panoorin ang mga detalyadong video tutorial ng laro upang matuto ng mga diskarte para sa pagkumpleto ng mga lebel",
  },
} as const;
