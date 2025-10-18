import levels from "@/data/levels";

export const level = {
  title: `Digimon Story Time Stranger Game Level Guide, Complete Walkthrough for Levels 1-${levels.length}`,
  subtitle: `Complete Walkthrough for ${levels.length} Levels | Strategy Tips | Untangling Solutions`,
  searchPlaceholder: `Enter level number (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Digimon Story Time Stranger Game Guide | Complete Video Walkthrough for Levels 1-${levels.length} | Strategy Tips`,
    description: `Official Digimon Story Time Stranger game guide website, providing complete walkthroughs for levels 1-${levels.length}, including detailed strategy tips, knot untangling solutions, and video guides. Help you easily complete levels and solve all puzzles.`,
    keywords:
      "Digimon Story Time Stranger guide, Digimon Story Time Stranger walkthrough, Puzzle game guide, Untangling game, Strategy game tips, Puzzle solving, Casual game",
    siteName: "Digimon Story Time Stranger Official Guide",
    author: "Digimon Story Time Stranger Guide Team",
    category: "Game Guide",
    classification: "Casual Puzzle Game",
  },
} as const;

export default level;
