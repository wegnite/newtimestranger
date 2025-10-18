import levels from "@/data/levels";

export const level = {
  title: `Digimon Story Time Stranger Ойын Деңгейлерінің Нұсқаулығы, 1-${levels.length} деңгейлеріне арналған толық өту жолдары`,
  subtitle: `Толық өту жолдары ${levels.length} Деңгейлер үшін | Ұйымдастыру Кеңестері | Бөлме Орналасуының Шешімдері`,
  searchPlaceholder: `Деңгей нөірін енгізіңіз (1-${levels.length})`,
  levelRange: {
    start: "Деңгей ",
    end: "",
  },
  levelNumber: "Деңгей",
  meta: {
    title: `Digimon Story Time Stranger Ойын Нұсқаулығы | 1-${levels.length} деңгейлеріне арналған толық видео өту жолдары | Ұйымдастыру Кеңестері`,
    description: `Digimon Story Time Stranger ресми ойын нұсқаулығы веб-сайты, 1-${levels.length} деңгейлеріне арналған толық өту жолдарын ұсынады, соның ішінде егжей-тегжейлі ұйымдастыру кеңестері, заттарды орналастыру шешімдері және видео нұсқаулықтар. Деңгейлерді оңай аяқтап, тамаша жайлы өмір сүру кеңістігін құруға көмектеседі.`,
    keywords:
      "Digimon Story Time Stranger нұсқаулығы, Digimon Story Time Stranger өту жолдары, Ұйымдастыру ойын нұсқаулығы, Бөлме безендіру ойыны, Ұйымдастыру ойыны кеңестері, Емдік ойын, Стрессті жеңілдету ойыны",
    siteName: "Digimon Story Time Stranger Ресми Нұсқаулығы",
    author: "Digimon Story Time Stranger Нұсқаулықтар Тобы",
    category: "Ойын Нұсқаулығы",
    classification: "Кездейсоқ Пазл Ойыны",
  },
} as const;

export default level;
