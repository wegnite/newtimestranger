import levels from "@/data/levels";

export const hero = {
  badge: "Коллекция игровых гайдов",
  title: "Посмотреть все гайды по уровням Knit Out",
  description:
    "Изучайте подробные пошаговые инструкции, советы и стратегии для каждого уровня. Введите номер уровня, чтобы сразу перейти к соответствующему гайду.",
  stats: {
    guides: levels.length + "+ гайдов по уровням",
    videoTutorials: `${levels.length}+ видеокурсов`,
    quickSearch: "Быстрый поиск уровня",
  },
  search: {
    placeholder: `Введите номер уровня (1-${levels.length})`,
    button: "Найти гайд",
    error: {
      invalid: "Пожалуйста, введите действительный номер уровня",
      notFound: "Для этого уровня не найден гайд",
    },
  },
  buttons: {
    browseAll: "Просмотреть все гайды по уровням",
    downloadGame: "Скачать игру",
  },
  downloadCard: {
    title: "Скачать Knit Out",
    description: "Начните расслабляющее и стратегическое приключение в пазлах!",
  },
  videoSection: {
    title: "Видео-стратегии Knit Out",
    description:
      "Смотрите подробные видеокурсы по игре, чтобы изучить стратегии по прохождению уровней",
  },
} as const;
