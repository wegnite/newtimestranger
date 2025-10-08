import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Список уровней",
  },
  notFound: {
    title: "Уровень не найден",
    description: "Извините, уровень, который вы ищете, не существует",
    backToList: "Назад к списку уровней",
  },
  levelNumber: "Уровень",
  levelRange: {
    prefix: "День ",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room {{level}} Уровень - Руководство по игре и Прохождение - Dreamy Room {{level}} и Видео-советы`,
    description: `Dreamy Room {{level}}, Полное руководство для Dreamy Room {{level}} Уровень, предоставляющее подробные советы по организации, решения по размещению предметов и видео-прохождения. Поможем вам легко пройти уровень и создать идеальное уютное жилое пространство.`,
    siteName: "Dreamy Room Руководство по прохождению",
    invalidId: {
      title: "Неверный номер уровня",
      description: `Пожалуйста, введите действительный номер уровня (1-${levels.length})`,
    },
    notFound: {
      title: "Уровень не существует",
      description:
        "Уровень, к которому вы пытаетесь получить доступ, не существует, пожалуйста, выберите другой уровень",
    },
    langNotFound: {
      title: "Языковой пакет не найден",
      description:
        "Содержимое перевода для текущего языка не найдено, пожалуйста, переключитесь на другой язык",
    },
  },
} as const;

export default levelDetail;
