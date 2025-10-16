import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Level Liste",
  },
  notFound: {
    title: "Level nicht gefunden",
    description: "Entschuldigung, das Level, das Sie suchen, existiert nicht",
    backToList: "Zurück zur Level Liste",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Tag",
    suffix: "",
  },
  meta: {
    title: `Knit Out Level {{level}} - Durchführung & Lösung & Spiel`,
    description: `Knit Out {{level}}, vollständige Anleitung für Knit Out Level {{level}}, die detaillierte Strategie-Tipps, Lösungen für Seile und Spulen sowie Video-Durchführungen bietet. Hilft Ihnen, das Level leicht zu absolvieren und alle Knoten aufzulösen.`,
    siteName: "Knit Out Offizielle Anleitung",
    invalidId: {
      title: "Ungültige Levelnummer",
      description: `Bitte geben Sie eine gültige Levelnummer ein (1-${levels.length})`,
    },
    notFound: {
      title: "Level existiert nicht",
      description:
        "Das Level, das Sie versuchen, zuzugreifen, existiert nicht. Bitte wählen Sie ein anderes Level",
    },
    langNotFound: {
      title: "Sprachpaket nicht gefunden",
      description:
        "Übersetzung für die aktuelle Sprache nicht gefunden. Bitte wechseln Sie zu einer anderen Sprache",
    },
  },
  sidebar: {
    adjacentLevels: "Benachbarte Level",
    allLevels: "Alle Level",
  },
  shareLabel: "Levelleitung teilen",
  linkCopiedText: "Erfolgreich kopiert!",
} as const;
