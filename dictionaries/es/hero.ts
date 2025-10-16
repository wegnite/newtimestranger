import levels from "@/data/levels";

export const hero = {
  badge: "Colección de Guías de Juego",
  title: "Ver todas las guías de niveles de Knit Out",
  description:
    "Explora guías detalladas, consejos y estrategias para cada nivel. Ingresa un número de nivel para saltar directamente a la guía correspondiente.",
  stats: {
    guides: levels.length + "+ Guías de Niveles",
    videoTutorials: `${levels.length}+ Tutoriales de Vídeo`,
    quickSearch: "Búsqueda Rápida de Niveles",
  },
  search: {
    placeholder: `Ingresa el número de nivel (1-${levels.length})`,
    button: "Buscar Guía",
    error: {
      invalid: "Por favor, ingresa un número de nivel válido",
      notFound: "No se encontró ninguna guía para este nivel",
    },
  },
  buttons: {
    browseAll: "Explorar todas las guías de niveles",
    downloadGame: "Descargar Juego",
  },
  downloadCard: {
    title: "Descargar Knit Out",
    description: "¡Comienza una aventura de puzzles relajante y estratégica!",
  },
  videoSection: {
    title: "Vídeos de Estrategia de Knit Out",
    description:
      "Ve tutoriales de video detallados del juego para aprender estrategias para completar los niveles",
  },
} as const;
