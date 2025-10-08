import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room Spel Niveau Gids, Complete Walkthrough voor Niveaus 1-${levels.length}`,
  subtitle: `Complete Walkthrough voor ${levels.length} Niveaus | Organisatietips | Kamerindeling Oplossingen`,
  searchPlaceholder: `Voer niveaunummer in (1-${levels.length})`,
  levelRange: {
    start: "Niveau ",
    end: "",
  },
  levelNumber: "Niveau",
  meta: {
    title: `Dreamy Room Spelgids | Complete Video Walkthrough voor Niveaus 1-${levels.length} | Organisatietips`,
    description: `Officiële Dreamy Room spelgids website, die complete walkthroughs biedt voor niveaus 1-${levels.length}, inclusief gedetailleerde organisatietips, oplossingen voor itemplaatsing en videogidsen. Help je gemakkelijk niveaus te voltooien en de perfecte gezellige leefruimte te creëren.`,
    keywords:
      "Dreamy Room gids, Dreamy Room walkthrough, Organisatiespel gids, Kamerdecoratiespel, Organisatiespel tips, Helend spel, Stressverlichtend spel",
    siteName: "Officiële Dreamy Room Gids",
    author: "Dreamy Room Gids Team",
    category: "Spelgids",
    classification: "Casual Puzzelspel",
  },
} as const;

export default level;
