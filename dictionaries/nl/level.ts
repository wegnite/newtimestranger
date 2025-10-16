import levels from "@/data/levels";

export const level = {
  title: `Knit Out Spel Levelgids, Volledige Walkthrough voor Niveaus 1-${levels.length}`,
  subtitle: `Volledige Walkthrough voor ${levels.length} Niveaus | Strategie Tips | Ontmuddeling oplossingen`,
  searchPlaceholder: `Voer niveau nummer in (1-${levels.length})`,
  levelRange: {
    start: "Niveau ",
    end: "",
  },
  levelNumber: "Niveau",
  meta: {
    title: `Knit Out Spelgids | Volledige Videowalkthrough voor Niveaus 1-${levels.length} | Strategie Tips`,
    description: `Officieel Knit Out spelgids website, die volledige walkthroughs biedt voor niveaus 1-${levels.length}, inclusief gedetailleerde strategie tips, ontmuddeling oplossingen en videogidsen. Help je gemakkelijk niveaus te voltooien en alle puzzels op te lossen.`,
    keywords:
      "Knit Out gids, Knit Out walkthrough, Puzzelspelgids, Ontmuddeling spel, Strategie spel tips, Puzzel oplossen, Casual spel",
    siteName: "Knit Out Officiële Gids",
    author: "Knit Out Gids Team",
    category: "Spelgids",
    classification: "Casual Puzzelspel",
  },
} as const;

export default level;
