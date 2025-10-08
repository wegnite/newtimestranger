import levels from "@/data/levels";

export const hero = {
  badge: "Spielanleitungs-Sammlung",
  title: "Alle Traumzimmer & Dreamy Room Level-Anleitungen ansehen",
  description:
    "Entdecken Sie detaillierte Komplettlösungen, Tipps und Strategien für jedes Raumlevel. Geben Sie eine Levelnummer ein, um direkt zur entsprechenden Anleitung zu springen.",
  stats: {
    guides: levels.length + "+ Level-Anleitungen",
    videoTutorials: `${levels.length}+ Video-Tutorials`,
    quickSearch: "Schnelle Level-Suche",
  },
  search: {
    placeholder: `Levelnummer eingeben (1-${levels.length})`,
    button: "Anleitung suchen",
    error: {
      invalid: "Bitte geben Sie eine gültige Levelnummer ein",
      notFound: "Keine Anleitung für dieses Level gefunden",
    },
  },
  buttons: {
    browseAll: "Alle Level-Anleitungen durchsuchen",
    downloadGame: "Spiel herunterladen",
  },
  downloadCard: {
    title: "Traumzimmer & Dreamy Room herunterladen",
    description:
      "Beginnen Sie eine warme und heilsame Reise des Aufräumens und Organisierens!",
  },
  videoSection: {
    title: "Spielstrategie-Videos",
    description:
      "Sehen Sie sich detaillierte Spiel-Video-Tutorials an, um Aufräum- und Organisationstechniken zu lernen.",
  },
} as const;

export default hero;
