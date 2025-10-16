import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Lista de Niveles",
  },
  notFound: {
    title: "Nivel no Encontrado",
    description: "Lo siento, el nivel que estás buscando no existe",
    backToList: "Volver a la Lista de Niveles",
  },
  levelNumber: "Nivel",
  levelRange: {
    prefix: "Día",
    suffix: "",
  },
  meta: {
    title: `Knit Out Nivel {{level}} - Guía de Solución y Juego`,
    description: `Knit Out {{level}}, Guía completa para el Nivel {{level}} de Knit Out, que ofrece consejos detallados de estrategia, soluciones de cuerdas y bobinas y guías de solución de video. Te ayudará a completar fácilmente el nivel y desenredar todos los nudos.`,
    siteName: "Guía Oficial de Knit Out",
    invalidId: {
      title: "Número de Nivel Inválido",
      description: `Por favor, ingrese un número de nivel válido (1-${levels.length})`,
    },
    notFound: {
      title: "El Nivel No Existe",
      description:
        "El nivel que intentas acceder no existe, por favor selecciona otro nivel",
    },
    langNotFound: {
      title: "Paquete de Idioma No Encontrado",
      description:
        "No se encontró el contenido de traducción para el idioma actual, por favor cambie a otro idioma",
    },
  },
  sidebar: {
    adjacentLevels: "Niveles Adyacentes",
    allLevels: "Todos los Niveles",
  },
  shareLabel: "Compartir Guía de Nivel",
  linkCopiedText: "¡Copiado con Éxito!",
} as const;
