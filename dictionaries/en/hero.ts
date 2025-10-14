import levels from "@/data/levels";

export const hero = {
  badge: "Digimon Story Time Stranger Walkthrough HQ",
  title: "Track Every Digimon Story Time Stranger Story Chapter",
  description:
    "Digimon Story Time Stranger squads follow spoiler-aware routes, boss prep, and collectible notes as you progress through the Digital World's timeline. Keep Digimon Story Time Stranger decisions aligned with our live timeline monitors.",
  stats: {
    guides: `${levels.length}+ Digimon Story Time Stranger Story Routes`,
    videoTutorials: `${levels.length}+ Digimon Story Time Stranger Briefings`,
    quickSearch: "Instant Digimon Story Time Stranger Chapter Lookup",
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
    browseAll: "Browse Digimon Story Time Stranger Walkthroughs",
    downloadGame: "Download Digimon Story Time Stranger",
  },
  downloadCard: {
    title: "Download Digimon Story Time Stranger",
    description:
      "Jump into Digimon Story Time Stranger and sync your squad with our Digimon Story Time Stranger guides.",
  },
  videoSection: {
    title: "Featured Digimon Story Time Stranger Videos",
    description:
      "Preview Digimon Story Time Stranger walkthrough clips before diving into the next mission.",
  },
} as const;

export default hero;
