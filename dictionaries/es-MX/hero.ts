import levels from "@/data/levels";

export const hero = {
  badge: "Colección de Guías del Juego",
  title: "Ver Todas las Guías de Nivel de Habitación de Ensueño / Dreamy Room",
  description:
    "Explora soluciones detalladas, consejos y estrategias para cada nivel de habitación. Introduce un número de nivel para ir directamente a la guía correspondiente.",
  stats: {
    guides: levels.length + "+ Guías de Nivel",
    videoTutorials: `${levels.length}+ Tutoriales en Vídeo`,
    quickSearch: "Búsqueda Rápida de Nivel",
  },
  search: {
    placeholder: `Introduce el número de nivel (1-${levels.length})`,
    button: "Buscar Guía",
    error: {
      invalid: "Por favor, introduce un número de nivel válido",
      notFound: "No se encontró guía para este nivel",
    },
  },
  buttons: {
    browseAll: "Ver Todas las Guías de Nivel",
    downloadGame: "Descargar Juego",
  },
  downloadCard: {
    title: "Descargar Habitación de Ensueño / Dreamy Room",
    description: "¡Comienza un cálido y sanador viaje de orden y organización!",
  },
  videoSection: {
    title: "Vídeos de Estrategia del Juego",
    description:
      "Mira tutoriales detallados en vídeo del juego para aprender técnicas de orden y organización",
  },
} as const;

export default hero;
