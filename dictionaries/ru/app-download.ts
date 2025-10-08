export const appDownload = {
  meta: {
    title: "Скачать Dreamy Room - Уютная игра об организации комнат",
    description:
      "Скачайте Dreamy Room и начните свое трогательное путешествие по организации и декорированию комнат. Создайте идеальное жилое пространство с помощью осознанной организации.",
  },
  title: "Скачать Dreamy Room",
  subtitle: "Уютная и исцеляющая игра об организации комнат",
  stats: {
    rating: "4.8",
    downloads: "1 млн+ Скачиваний",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Загрузите в App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Доступно в Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Организация",
      description: "Найдите идеальное место для каждого предмета",
    },
    story: {
      title: "Трогательная история",
      description: "Рассказывайте жизненные истории через размещение предметов",
    },
  },
} as const;

export default appDownload;
