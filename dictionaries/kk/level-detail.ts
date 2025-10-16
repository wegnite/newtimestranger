import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Деңгейлер тізімі",
  },
  notFound: {
    title: "Деңгей табылмады",
    description: "Кешіріңіз, сіз іздеген деңгей жоқ",
    backToList: "Деңгейлер тізіміне оралу",
  },
  levelNumber: "Деңгей",
  levelRange: {
    prefix: "Күн",
    suffix: "",
  },
  meta: {
    title: `Knit Out {{level}} деңгейі - Ойын нұсқаулығы және өту жолдары - Knit Out {{level}} & Видео кеңестер`,
    description: `Knit Out {{level}}, Knit Out {{level}} деңгейіне арналған толық нұсқаулық, ұйымдастыру бойынша егжей-тегжейлі кеңестер, заттарды орналастыру шешімдері және видео өту жолдары ұсынылған. Деңгейді оңай аяқтап, тамаша жайлы өмір сүру кеңістігін құруға көмектеседі.`,
    siteName: "Knit Out Ресми Нұсқаулығы",
    invalidId: {
      title: "Жарамсыз деңгей нөмірі",
      description: `Жарамды деңгей нөмірін енгізіңіз (1-${levels.length})`,
    },
    notFound: {
      title: "Деңгей жоқ",
      description:
        "Сіз кіруге тырысып жатқан деңгей жоқ, басқа деңгейді таңдаңыз",
    },
    langNotFound: {
      title: "Тіл пакеті табылмады",
      description:
        "Ағымдағы тілге арналған аударма мазмұны табылмады, басқа тілге ауысыңыз",
    },
  },
} as const;

export default levelDetail;
