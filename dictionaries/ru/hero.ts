import levels from "@/data/levels";

export const hero = {
  badge: "Коллекция руководств по игре",
  title: "Просмотреть все руководства по прохождению уровней Dreamy Room",
  description:
    "Изучите подробное прохождение, советы и стратегии для каждого уровня комнаты. Введите номер уровня, чтобы перейти непосредственно к соответствующему руководству.",
  stats: {
    guides: levels.length + "+ Руководств по уровням",
    videoTutorials: `${levels.length}+ Видеоуроков`,
    quickSearch: "Быстрый поиск уровня",
  },
  search: {
    placeholder: `Введите номер (1-${levels.length}) уровень`,
    button: "Найти руководство",
    error: {
      invalid: "Пожалуйста, введите действительный номер уровня",
      notFound: "Руководство для этого уровня не найдено",
    },
  },
  buttons: {
    browseAll: "Просмотреть все руководства",
    downloadGame: "Скачать игру",
  },
  downloadCard: {
    title: "Скачать Dreamy Room",
    description:
      "Начните теплое и исцеляющее путешествие по уборке и организации!",
  },
  videoSection: {
    title: "Видео по прохождению игры",
    description:
      "Смотрите подробные видеоуроки по игре, чтобы изучить техники уборки и организации",
  },
  mainScreenshotAlt: "Основной скриншот геймплея Dreamy Room",
  screenshotAltTemplate: "Скриншот игры Dreamy Room {num}",
} as const;

export default hero;
