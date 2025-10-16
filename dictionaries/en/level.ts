import levels from "@/data/levels";

export const level = {
  title: `Knit Out Game Level Guide, Complete Walkthrough for Levels 1-${levels.length}`,
  subtitle: `Complete Walkthrough for ${levels.length} Levels | Strategy Tips | Untangling Solutions`,
  searchPlaceholder: `Enter level number (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Knit Out Game Guide | Complete Video Walkthrough for Levels 1-${levels.length} | Strategy Tips`,
    description: `Official Knit Out game guide website, providing complete walkthroughs for levels 1-${levels.length}, including detailed strategy tips, knot untangling solutions, and video guides. Help you easily complete levels and solve all puzzles.`,
    keywords:
      "Knit Out guide, Knit Out walkthrough, Puzzle game guide, Untangling game, Strategy game tips, Puzzle solving, Casual game",
    siteName: "Knit Out Official Guide",
    author: "Knit Out Guide Team",
    category: "Game Guide",
    classification: "Casual Puzzle Game",
  },
} as const;

export default level;
