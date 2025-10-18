import levels from "@/data/levels";

export const level = {
  title: `Книга руководства по уровням игры Digimon Story Time Stranger, полный обзор для уровней 1-${levels.length}`,
  subtitle: `Полный обзор для ${levels.length} уровней | Советы по стратегии | Решения для развязки узлов`,
  searchPlaceholder: `Введите номер уровня (1-${levels.length})`,
  levelRange: {
    start: "Уровень ",
    end: "",
  },
  levelNumber: "Уровень",
  meta: {
    title: `Книга руководства по игре Digimon Story Time Stranger | Полный видеоквест для уровней 1-${levels.length} | Советы по стратегии`,
    description: `Официальный сайт с руководством по игре Digimon Story Time Stranger, предоставляющий полные обзоры для уровней 1-${levels.length}, включая подробные советы по стратегии, решения для развязки узлов и видеоквесты. Поможет вам легко пройти уровни и решить все головоломки.`,
    keywords:
      "Руководство по Digimon Story Time Stranger, Обзор по Digimon Story Time Stranger, Руководство по益智ной игре, Игры для развязки узлов, Советы по стратегии в играх, Решение головоломок, Легкая игра",
    siteName: "Официальное руководство по Digimon Story Time Stranger",
    author: "Команда по руководству Digimon Story Time Stranger",
    category: "Руководство по игре",
    classification: "Легкая益智ная игра",
  },
} as const;

export default level;
