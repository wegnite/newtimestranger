export const appDownload = {
  meta: {
    title: "下載 Dreamy Room - 溫馨治癒的收納整理遊戲",
    description:
      "下載 Dreamy Room，開啟一段溫馨治癒的收納整理之旅。通過整理和裝飾房間，創造屬於你的完美生活空間。",
  },
  title: "下載 Dreamy Room",
  subtitle: "一款溫馨治癒的收納整理遊戲",
  stats: {
    rating: "4.8",
    downloads: "100萬+ 下載",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "立即在 App Store 下載",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "立即在 Google Play 下載",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "收納整理",
      description: "為每件物品找到完美的位置",
    },
    story: {
      title: "溫馨故事",
      description: "通過物品擺放講述生活故事",
    },
  },
} as const;

export default appDownload;
