import levels from "@/data/levels";

export const hero = {
  badge: "Ойын Нұсқаулықтары Жинағы",
  title: "Барлық Digimon Story Time Stranger Деңгей Нұсқаулықтарын Көру",
  description:
    "Әр бөлме деңгейі үшін егжей-тегжейлі өту жолдарын, кеңестерді және стратегияларды зерттеңіз. Сәйкес нұсқаулыққа тікелей өту үшін деңгей нөірін енгізіңіз.",
  stats: {
    guides: levels.length + "+ Деңгей Нұсқаулығы",
    videoTutorials: `${levels.length}+ Видео Оқулық`,
    quickSearch: "Жылдам Деңгей Іздеу",
  },
  search: {
    placeholder: `Деңгей нөмірін енгізіңіз (1-${levels.length})`,
    button: "Нұсқаулықты Іздеу",
    error: {
      invalid: "Жарамды деңгей нөмірін енгізіңіз",
      notFound: "Бұл деңгейге арналған нұсқаулық табылмады",
    },
  },
  buttons: {
    browseAll: "Барлық Деңгей Нұсқаулықтарын Шолу",
    downloadGame: "Ойынды Жүктеп Алу",
  },
  downloadCard: {
    title: "Digimon Story Time Stranger жүктеп алу",
    description:
      "Жинастыру мен ұйымдастырудың жылы әрі емдік саяхатын бастаңыз!",
  },
  videoSection: {
    title: "Ойын Стратегиясы Видеолары",
    description:
      "Жинастыру және ұйымдастыру техникаларын үйрену үшін егжей-тегжейлі ойын видео оқулықтарын көріңіз",
  },
} as const;

export default hero;
