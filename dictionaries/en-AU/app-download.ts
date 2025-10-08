export const appDownload = {
  meta: {
    title: "Download Time Stranger – Tactical JRPG Adventure",
    description:
      "Install Time Stranger to explore shifting timelines, recruit iconic partners, and tackle campaign arcs with our companion guides.",
  },
  title: "Download Time Stranger",
  subtitle: "Timeline-shifting JRPG for dedicated tamers",
  stats: {
    rating: "4.8",
    downloads: "1M+ Downloads",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Download on App Store",
      link: "https://digimonstorytimestranger.com/app-store",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Get it on Google Play",
      link: "https://digimonstorytimestranger.com/google-play",
    },
  },
  features: {
    organize: {
      title: "Strategic Combat",
      description: "Coordinate timeline shifts with synchronized squad abilities.",
    },
    story: {
      title: "Branching Story",
      description: "Navigate timeline choices that shape allies, quests, and endings.",
    },
  },
} as const;

export default appDownload;
