import levels from "@/data/levels";

export const level = {
  title: `Time Stranger Chapter Guide, Complete Walkthrough for Chapters 1-${levels.length}`,
  subtitle: `Complete Walkthrough for ${levels.length} Chapters | Timeline Routes | Boss Counters`,
  searchPlaceholder: `Enter chapter number (1-${levels.length})`,
  levelRange: {
    start: "Chapter ",
    end: "",
  },
  levelNumber: "Chapter",
  meta: {
    title: `Time Stranger Guide | Complete Video Walkthrough for Chapters 1-${levels.length} | Timeline Strategies`,
    description: `Official Time Stranger guide hub providing complete walkthroughs for chapters 1-${levels.length}, including branch routing, boss counters, and collectible callouts to keep your squad synced with the timeline.`,
    keywords:
      "Time Stranger guide, Time Stranger walkthrough, Digimon Story Time Stranger, Time Stranger boss strategy, Time Stranger collectibles, Time Stranger timeline routes, Time Stranger RPG tips",
    siteName: "Time Stranger Guide Hub",
    author: "Time Stranger Strategy Network",
    category: "Game Guide",
    classification: "JRPG Strategy",
  },
} as const;

export default level;
