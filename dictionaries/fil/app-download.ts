export const appDownload = {
  meta: {
    title:
      "I-download ang Dreamy Room - Isang Maaliwalas na Laro ng Organisasyon ng Kwarto",
    description:
      "I-download ang Dreamy Room at simulan ang iyong nakakaantig na paglalakbay sa pag-aayos at pagpapalamuti ng mga kwarto. Lumikha ng iyong perpektong espasyo sa pamumuhay sa pamamagitan ng maingat na organisasyon.",
  },
  title: "I-download ang Dreamy Room",
  subtitle:
    "Isang Maaliwalas at Nakakagaling na Laro ng Organisasyon ng Kwarto",
  stats: {
    rating: "4.8",
    downloads: "1M+ Mga Pag-download",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "I-download sa App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Kunin ito sa Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Organisasyon",
      description: "Hanapin ang perpektong lugar para sa bawat item",
    },
    story: {
      title: "Nakakaantig na Kwento",
      description:
        "Isalaysay ang mga kwento ng buhay sa pamamagitan ng paglalagay ng item",
    },
  },
} as const;

export default appDownload;
