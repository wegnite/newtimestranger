import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Level-Liste",
  },
  notFound: {
    title: "Level nicht gefunden",
    description: "Entschuldigung, das gesuchte Level existiert nicht.",
    backToList: "Zurück zur Level-Liste",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Tag ",
    suffix: "",
  },
  meta: {
    title: `Traumzimmer & Dreamy Room: Level {{level}} - Anleitung & Komplettlösung`,
    description: `Anleitung für Traumzimmer Level {{level}}. Holen Sie sich die Komplettlösung für Dreamy Room Level {{level}}, inklusive Video-Guide und Tipps. Meistern Sie dieses Traumzimmer Level!`,
    siteName: "Dreamy Room Offizielle Anleitung",
    invalidId: {
      title: "Ungültige Levelnummer",
      description: `Bitte geben Sie eine gültige Levelnummer ein (1-${levels.length})`,
    },
    notFound: {
      title: "Level existiert nicht",
      description:
        "Das Level, auf das Sie zugreifen möchten, existiert nicht. Bitte wählen Sie ein anderes Level.",
    },
    langNotFound: {
      title: "Sprachpaket nicht gefunden",
      description:
        "Übersetzungsinhalte für die aktuelle Sprache nicht gefunden. Bitte wechseln Sie zu einer anderen Sprache.",
    },
  },
  sidebar: {
    adjacentLevels: "Benachbarte Level",
    allLevels: "Alle Level",
  },
  shareLabel: "Level-Anleitung teilen",
  linkCopiedText: "Link kopiert!",
} as const;

export default levelDetail;
