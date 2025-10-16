import levels from "@/data/levels";

export const hero = {
  badge: "Game Guides Collection",
  title: "Bekijk alle Knit Out Level Guides",
  description:
    "Ontdek gedetailleerde walkthroughs, tips en strategieën voor elk niveau. Voer een niveau nummer in om direct naar de bijbehorende handleiding te springen.",
  stats: {
    guides: levels.length + "+ Level Guides",
    videoTutorials: `${levels.length}+ Video Tutorials`,
    quickSearch: "Quick Level Search",
  },
  search: {
    placeholder: `Voer niveau nummer in (1-${levels.length})`,
    button: "Zoek handleiding",
    error: {
      invalid: "Voer aub een geldig niveau nummer in",
      notFound: "Geen handleiding gevonden voor dit niveau",
    },
  },
  buttons: {
    browseAll: "Bekijk alle Level Guides",
    downloadGame: "Download Game",
  },
  downloadCard: {
    title: "Download Knit Out",
    description: "Begin een ontspannende en strategische puzzelavontuur!",
  },
  videoSection: {
    title: "Knit Out Strategy Videos",
    description:
      "Bekijk gedetailleerde game video tutorials om strategieën te leren voor het voltooien van niveaus",
  },
} as const;
