export const appDownload = {
  meta: {
    title: "Knit Out жүктеп алу - Жайлы бөлмені ұйымдастыру ойыны",
    description:
      "Knit Out жүктеп алып, бөлмелерді ұйымдастыру және безендірудің жүрек жылытатын саяхатын бастаңыз. Саналы ұйымдастыру арқылы мінсіз өмір сүру кеңістігіңізді жасаңыз.",
  },
  title: "Knit Out жүктеп алу",
  subtitle: "Жайлы және емдік бөлмені ұйымдастыру ойыны",
  stats: {
    rating: "4.8",
    downloads: "1М+ Жүктеп алулар",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "App Store дүкенінен жүктеп алу",
      link: "https://apps.apple.com/us/app/hole-people/id6477853705",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Google Play дүкенінен алу",
      link: "https://play.google.com/store/apps/details?id=com.hyperup.holepeople",
    },
  },
  features: {
    organize: {
      title: "Ұйымдастыру",
      description: "Әрбір затқа тамаша орын табыңыз",
    },
    story: {
      title: "Жүрек жылытатын әңгіме",
      description: "Заттарды орналастыру арқылы өмірлік әңгімелерді айтыңыз",
    },
  },
} as const;

export default appDownload;
