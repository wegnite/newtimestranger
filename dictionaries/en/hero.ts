import levels from "@/data/levels";

export const hero = {
  badge: "Time Stranger Walkthrough HQ",
  title: "Track Every Time Stranger Story Chapter",
  description:
    "Follow spoiler-aware routes, boss prep, and collectible notes as you progress through the Digital World's timeline.",
  stats: {
    guides: `${levels.length}+ Story Routes`,
    videoTutorials: `${levels.length}+ Video Briefings`,
    quickSearch: "Instant Chapter Lookup",
  },
  search: {
    placeholder: `Enter chapter number (1-${levels.length})`,
    button: "Find Walkthrough",
    error: {
      invalid: "Please enter a valid chapter number",
      notFound: "No walkthrough found for this chapter",
    },
  },
  buttons: {
    browseAll: "Browse Walkthrough Library",
    downloadGame: "Download Time Stranger",
  },
  downloadCard: {
    title: "Download Time Stranger",
    description:
      "Jump into the timeline-shifting RPG and sync your squad with our guides.",
  },
  videoSection: {
    title: "Featured Time Stranger Videos",
    description:
      "Preview essential walkthrough clips before diving into the next mission.",
  },
} as const;

export default hero;
