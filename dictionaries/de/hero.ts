import levels from "@/data/levels";

export const hero = {
  badge: "Spielleitfäden-Sammlung",
  title: "Alle Digimon Story Time Stranger Levelleitfäden anzeigen",
  description:
    "Entdecken Sie detaillierte Durchführungen, Tipps und Strategien für jedes Level. Geben Sie eine Levelnummer ein, um direkt zum entsprechenden Leitfaden zu springen.",
  stats: {
    guides: levels.length + "+ Levelleitfäden",
    videoTutorials: `${levels.length}+ Videotutorials`,
    quickSearch: "Schnelle Levelsuche",
  },
  search: {
    placeholder: `Geben Sie die Levelnummer ein (1-${levels.length})`,
    button: "Leitfaden suchen",
    error: {
      invalid: "Bitte geben Sie eine gültige Levelnummer ein",
      notFound: "Für dieses Level wurde kein Leitfaden gefunden",
    },
  },
  buttons: {
    browseAll: "Alle Levelleitfäden durchsuchen",
    downloadGame: "Spiel herunterladen",
  },
  downloadCard: {
    title: "Digimon Story Time Stranger herunterladen",
    description: "Beginne ein entspanntes und strategisches Puzzleabenteuer!",
  },
  videoSection: {
    title: "Digimon Story Time Stranger Strategievideos",
    description:
      "Schauen Sie sich detaillierte Videotutorials des Spiels an, um Strategien zum Beenden der Level zu lernen",
  },
} as const;
