import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Niveaulijst",
  },
  notFound: {
    title: "Niveau Niet Gevonden",
    description: "Sorry, het niveau dat je zoekt bestaat niet",
    backToList: "Terug naar Niveaulijst",
  },
  levelNumber: "Niveau",
  levelRange: {
    prefix: "Dag",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Niveau {{level}} - Spelgids en Walkthrough - Dreamy Room {{level}} & Videotips`,
    description: `Dreamy Room {{level}}, Complete gids voor Dreamy Room Niveau {{level}}, met gedetailleerde organisatietips, oplossingen voor itemplaatsing en video walkthroughs. Help je het niveau gemakkelijk te voltooien en de perfecte gezellige leefruimte te creëren.`,
    siteName: "Officiële Dreamy Room Gids",
    invalidId: {
      title: "Ongeldig Niveaunummer",
      description: `Voer een geldig niveaunummer in (1-${levels.length})`,
    },
    notFound: {
      title: "Niveau Bestaat Niet",
      description:
        "Het niveau dat je probeert te openen bestaat niet, selecteer een ander niveau",
    },
    langNotFound: {
      title: "Taalpakket Niet Gevonden",
      description:
        "Vertaalinhoud voor de huidige taal niet gevonden, schakel over naar een andere taal",
    },
  },
  sidebar: {
    adjacentLevels: "Aangrenzende Niveaus",
    allLevels: "Alle Niveaus",
  },
  shareLabel: "Deel Niveau Gids",
  linkCopiedText: "Link gekopieerd!",
} as const;

export default levelDetail;
