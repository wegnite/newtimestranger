import levels from "@/data/levels";

export const hero = {
  badge: "Collectie Spelgidsen",
  title: "Bekijk Alle Dreamy Room Niveau Gidsen",
  description:
    "Verken gedetailleerde walkthroughs, tips en strategieën voor elk kamerniveau. Voer een niveaunummer in om direct naar de bijbehorende gids te springen.",
  stats: {
    guides: levels.length + "+ Niveau Gidsen",
    videoTutorials: `${levels.length}+ Video Tutorials`,
    quickSearch: "Snel Niveau Zoeken",
  },
  search: {
    placeholder: `Voer niveaunummer in (1-${levels.length})`,
    button: "Zoek Gids",
    error: {
      invalid: "Voer een geldig niveaunummer in",
      notFound: "Geen gids gevonden voor dit niveau",
    },
  },
  buttons: {
    browseAll: "Blader door Alle Niveau Gidsen",
    downloadGame: "Download Spel",
  },
  downloadCard: {
    title: "Download Dreamy Room",
    description: "Begin een warme en helende reis van opruimen en organiseren!",
  },
  videoSection: {
    title: "Spelstrategie Video's",
    description:
      "Bekijk gedetailleerde spelvideo tutorials om opruim- en organisatietechnieken te leren",
  },
} as const;

export default hero;
