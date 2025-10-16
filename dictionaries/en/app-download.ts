export const appDownload = {
  meta: {
    title: "Download Knit Out - Untangle the Knots!",
    description:
      "Download Knit Out and start untangling colorful knots. A relaxing and strategic puzzle game.",
  },
  title: "Download Knit Out",
  subtitle: "Untangle the knots!",
  stats: {
    rating: "4.7",
    downloads: "100K+ Downloads",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Download on App Store",
      link: "https://apps.apple.com/us/app/knit-out/id6740406762",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Get it on Google Play",
      link: "https://play.google.com/store/apps/details?id=com.sbg.knitout",
    },
  },
  features: {
    organize: {
      title: "Hundreds of Puzzles",
      description: "Hundreds of intricate puzzles to solve",
    },
    story: {
      title: "Relaxing Gameplay",
      description: "Relaxing gameplay with no timers—perfect for unwinding",
    },
  },
} as const;

export default appDownload;
