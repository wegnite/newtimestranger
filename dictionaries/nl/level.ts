import levels from "@/data/levels";

export const level = {
  title: `Digimon Story Time Stranger Spel Levelgids, Volledige Walkthrough voor Niveaus 1-${levels.length}`,
  subtitle: `Volledige Walkthrough voor ${levels.length} Niveaus | Strategie Tips | Ontmuddeling oplossingen`,
  searchPlaceholder: `Voer niveau nummer in (1-${levels.length})`,
  levelRange: {
    start: "Niveau ",
    end: "",
  },
  levelNumber: "Niveau",
  meta: {
    title: `Digimon Story Time Stranger Spelgids | Volledige Videowalkthrough voor Niveaus 1-${levels.length} | Strategie Tips`,
    description: `Officieel Digimon Story Time Stranger spelgids website, die volledige walkthroughs biedt voor niveaus 1-${levels.length}, inclusief gedetailleerde strategie tips, ontmuddeling oplossingen en videogidsen. Help je gemakkelijk niveaus te voltooien en alle puzzels op te lossen.`,
    keywords:
      "Digimon Story Time Stranger gids, Digimon Story Time Stranger walkthrough, Puzzelspelgids, Ontmuddeling spel, Strategie spel tips, Puzzel oplossen, Casual spel",
    siteName: "Digimon Story Time Stranger Officiële Gids",
    author: "Digimon Story Time Stranger Gids Team",
    category: "Spelgids",
    classification: "Casual Puzzelspel",
  },
} as const;

export default level;
