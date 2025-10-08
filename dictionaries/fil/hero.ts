import levels from "@/data/levels";

export const hero = {
  badge: "Koleksyon ng Mga Gabay sa Laro",
  title: "Tingnan ang Lahat ng Gabay sa Antas ng Dreamy Room",
  description:
    "Galugarin ang mga detalyadong walkthrough, tip, at estratehiya para sa bawat antas ng kwarto. Maglagay ng numero ng antas upang direktang pumunta sa kaukulang gabay.",
  stats: {
    guides: levels.length + "+ Mga Gabay sa Antas",
    videoTutorials: `${levels.length}+ Mga Video Tutorial`,
    quickSearch: "Mabilis na Paghahanap ng Antas",
  },
  search: {
    placeholder: `Ilagay ang numero ng antas (1-${levels.length})`,
    button: "Maghanap ng Gabay",
    error: {
      invalid: "Mangyaring maglagay ng wastong numero ng antas",
      notFound: "Walang gabay na natagpuan para sa antas na ito",
    },
  },
  buttons: {
    browseAll: "I-browse ang Lahat ng Gabay sa Antas",
    downloadGame: "I-download ang Laro",
  },
  downloadCard: {
    title: "I-download ang Dreamy Room",
    description:
      "Simulan ang isang mainit at nakakagaling na paglalakbay ng pag-aayos at pag-oorganisa!",
  },
  videoSection: {
    title: "Mga Video ng Estratehiya sa Laro",
    description:
      "Panoorin ang mga detalyadong video tutorial ng laro upang matutunan ang mga teknik sa pag-aayos at pag-oorganisa",
  },
} as const;

export default hero;
