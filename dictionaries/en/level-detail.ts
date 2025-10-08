import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Chapter List",
  },
  notFound: {
    title: "Chapter Not Found",
    description: "Sorry, the chapter you are looking for does not exist",
    backToList: "Back to Chapter List",
  },
  levelNumber: "Chapter",
  levelRange: {
    prefix: "Chapter",
    suffix: "",
  },
  meta: {
    title: `Time Stranger Chapter {{level}} - Guide, Walkthrough & Video Briefing`,
    description: `Time Stranger Chapter {{level}} complete guide covering branch choices, encounter prep, and embedded video walkthroughs so your squad stays aligned with the timeline.`,
    siteName: "Time Stranger Guide Hub",
    invalidId: {
      title: "Invalid Chapter Number",
      description: `Please enter a valid chapter number (1-${levels.length})`,
    },
    notFound: {
      title: "Chapter Does Not Exist",
      description:
        "The chapter you are trying to access does not exist, please select another chapter",
    },
    langNotFound: {
      title: "Language Pack Not Found",
      description:
        "Translation content for current language not found, please switch to another language",
    },
  },
  sidebar: {
    adjacentLevels: "Adjacent Chapters",
    allLevels: "All Chapters",
  },
  shareLabel: "Share Chapter Guide",
  linkCopiedText: "Link copied!",
} as const;

export default levelDetail;
