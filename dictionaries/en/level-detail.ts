import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Level List",
  },
  notFound: {
    title: "Level Not Found",
    description: "Sorry, the level you are looking for does not exist",
    backToList: "Back to Level List",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Day",
    suffix: "",
  },
  meta: {
    title: `Knit Out Level {{level}} - Walkthrough & Solution & Game`,
    description: `Knit Out {{level}}, Complete guide for Knit Out Level {{level}}, providing detailed strategy tips, rope and bobbin solutions, and video walkthroughs. Help you easily complete the level and untangle all the knots.`,
    siteName: "Knit Out Official Guide",
    invalidId: {
      title: "Invalid Level Number",
      description: `Please enter a valid level number (1-${levels.length})`,
    },
    notFound: {
      title: "Level Does Not Exist",
      description:
        "The level you are trying to access does not exist, please select another level",
    },
    langNotFound: {
      title: "Language Pack Not Found",
      description:
        "Translation content for current language not found, please switch to another language",
    },
  },
  sidebar: {
    adjacentLevels: "Adjacent Levels",
    allLevels: "All Levels",
  },
  shareLabel: "Share Level Guide",
  linkCopiedText: "Copied Successfully!",
} as const;

export default levelDetail;
