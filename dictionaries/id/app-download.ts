export const appDownload = {
  meta: {
    title: "Unduh Dreamy Room - Game Organisasi Ruangan yang Nyaman",
    description:
      "Unduh Dreamy Room dan mulailah perjalanan mengharukan Anda dalam mengatur dan mendekorasi ruangan. Ciptakan ruang hidup sempurna Anda melalui organisasi yang penuh perhatian.",
  },
  title: "Unduh Dreamy Room",
  subtitle: "Game Organisasi Ruangan yang Nyaman dan Menyembuhkan",
  stats: {
    rating: "4.8",
    downloads: "1 Juta+ Unduhan",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Unduh di App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Dapatkan di Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Organisasi",
      description: "Temukan tempat yang sempurna untuk setiap item",
    },
    story: {
      title: "Kisah Mengharukan",
      description: "Ceritakan kisah hidup melalui penempatan item",
    },
  },
} as const;

export default appDownload;
