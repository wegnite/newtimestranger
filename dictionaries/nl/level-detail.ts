import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Level Lijst",
  },
  notFound: {
    title: "Level Niet Gevonden",
    description: "Sorry, het level dat u zoekt bestaat niet",
    backToList: "Terug naar Level Lijst",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Dag",
    suffix: "",
  },
  meta: {
    title: `Knit Out Level {{level}} - Walkthrough & Solution & Game`,
    description: `Knit Out {{level}}, Volledige handleiding voor Knit Out Level {{level}}, met gedetailleerde strategie tips, touw- en bobbin oplossingen en video walkthroughs. Help u gemakkelijk het level te voltooien en alle knopen los te maken.`,
    siteName: "Knit Out Official Guide",
    invalidId: {
      title: "Ongeldig Levelnummer",
      description: `Voer a.u.b. een geldig levelnummer in (1-${levels.length})`,
    },
    notFound: {
      title: "Level bestaat niet",
      description:
        "Het level dat u probeert te openen bestaat niet, selecteer a.u.b. een ander level",
    },
    langNotFound: {
      title: "Taalpakket Niet Gevonden",
      description:
        "Vertaling inhoud voor de huidige taal niet gevonden, schakel a.u.b. over naar een andere taal",
    },
  },
  sidebar: {
    adjacentLevels: "Buren Levels",
    allLevels: "Alle Levels",
  },
  shareLabel: "Delen Level Handleiding",
  linkCopiedText: "Succesvol gekopieerd!",
} as const;
