import levels from "@/data/levels";

export const hero = {
  badge: "PC Game Guide",
  title: "Digimon Story Time Stranger",
  description:
    "Embark on an epic RPG adventure spanning human and Digital worlds. Collect 450+ Digimon, uncover time travel mysteries, and experience strategic turn-based combat.",
  stats: {
    guides: "26+ Chapter Guides",
    videoTutorials: "Complete Story Guide",
    quickSearch: "Chapter Navigation",
  },
  search: {
    placeholder: `Search chapter (1-${levels.length})`,
    button: "Search Guide",
    error: {
      invalid: "Please enter a valid chapter number",
      notFound: "No guide found for this chapter",
    },
  },
  buttons: {
    browseAll: "View Complete Walkthrough",
    downloadGame: "Get on Steam",
  },
  downloadCard: {
    title: "Get Digimon Story Time Stranger",
    description:
      "Purchase the game on Steam and start your Digital World adventure!",
  },
  videoSection: {
    title: "Game Trailer & Strategy Videos",
    description:
      "Watch game trailers and detailed strategy videos to learn game features and completion tips",
  },
  mainScreenshotAlt: "Digimon Story Time Stranger main screenshot",
  screenshotAltTemplate: "Digimon Story Time Stranger game screenshot",
  onlineGames: {
    bannerTitle: "Ready to Start Your Adventure?",
    bannerDescription:
      "Get the full game on Steam and follow our complete walkthrough",
    playNowButton: "Buy Now",
  },
} as const;

export default hero;
