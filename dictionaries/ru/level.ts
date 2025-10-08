import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room Руководство по Прохождению Уровней 1-${levels.length}`,
  subtitle: `Полное прохождение ${levels.length} уровней | Советы по организации | Решения по планировке комнат`,
  searchPlaceholder: `Введите номер уровня (1-${levels.length})`,
  levelRange: {
    start: "Уровни ",
    end: "",
  },
  levelNumber: "Уровень",
  searchNotFound: "Уровень не найден.",
  rangeNotFound: "В этом диапазоне уровни не найдены.",
  meta: {
    title: `Dreamy Room Руководство | Полное Видео Прохождение Уровней 1-${levels.length} | Советы по организации`,
    description: `Официальный сайт руководств по игре Dreamy Room, предоставляющий полное прохождение уровней 1-${levels.length}, включая подробные советы по организации, решения по размещению предметов и видеогайды. Поможем вам легко пройти уровни и создать идеальное уютное жилое пространство.`,
    keywords:
      "Dreamy Room руководство, Dreamy Room прохождение, Руководство по игре-организации, Игра по декору комнат, Советы по игре-организации, Расслабляющая игра, Игра для снятия стресса",
    siteName: "Dreamy Room Официальное Руководство",
    author: "Команда Dreamy Room Guide",
    category: "Руководство по игре",
    classification: "Казуальная головоломка",
  },
} as const;

export default level;
