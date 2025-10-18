import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Список уровней",
  },
  notFound: {
    title: "Уровень не найден",
    description: "К сожалению, уровень, который вы ищете, не существует",
    backToList: "Вернуться к списку уровней",
  },
  levelNumber: "Уровень",
  levelRange: {
    prefix: "День",
    suffix: "",
  },
  meta: {
    title: `Digimon Story Time Stranger Уровень {{level}} - Руководство, решение и игра`,
    description: `Digimon Story Time Stranger {{level}}, Полное руководство по уровню Digimon Story Time Stranger {{level}}, с предоставлением подробных советов по стратегии, решения с веревками и катушками, а также видеороликов по прохождению. Поможет вам легко пройти уровень и развязать все узлы.`,
    siteName: "Официальное руководство Digimon Story Time Stranger",
    invalidId: {
      title: "Некорректный номер уровня",
      description: `Пожалуйста, введите действительный номер уровня (1-${levels.length})`,
    },
    notFound: {
      title: "Уровень не существует",
      description:
        "Уровень, к которому вы пытаетесь обратиться, не существует, пожалуйста, выберите другой уровень",
    },
    langNotFound: {
      title: "Пакет переводов не найден",
      description:
        "Содержание перевода для текущего языка не найдено, пожалуйста, переключитесь на другой язык",
    },
  },
  sidebar: {
    adjacentLevels: "Соседние уровни",
    allLevels: "Все уровни",
  },
  shareLabel: "Поделиться руководством по уровню",
  linkCopiedText: "Успешно скопировано!",
} as const;
