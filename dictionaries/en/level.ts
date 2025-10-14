import levels from "@/data/levels";

export const level = {
  title: `Digimon Story Time Stranger Chapter Guide, Complete Walkthrough for Chapters 1-${levels.length}`,
  subtitle: `Digimon Story Time Stranger Walkthrough for ${levels.length} Chapters | Timeline Routes | Boss Counters`,
  searchPlaceholder: `Enter chapter number (1-${levels.length})`,
  levelRange: {
    start: "Chapter ",
    end: "",
  },
  levelNumber: "Chapter",
  meta: {
    title: `Digimon Story Time Stranger Guide | Complete Video Walkthrough for Chapters 1-${levels.length} | Timeline Strategies`,
    description: `Official Digimon Story Time Stranger guide hub providing complete walkthroughs for chapters 1-${levels.length}, including branch routing, boss counters, and collectible callouts to keep your squad synced with the Digimon Story Time Stranger timeline.`,
    keywords:
      "Digimon Story Time Stranger guide, Digimon Story Time Stranger walkthrough, Digimon Story Time Stranger boss strategy, Digimon Story Time Stranger collectibles, Digimon Story Time Stranger timeline routes, Digimon Story Time Stranger RPG tips, Digimon Story Time Stranger strategies",
    siteName: "Digimon Story Time Stranger Guide Hub",
    author: "Digimon Story Time Stranger Strategy Network",
    category: "Digimon Story Time Stranger Game Guide",
    classification: "Digimon Story Time Stranger JRPG Strategy",
  },
} as const;

export default level;
