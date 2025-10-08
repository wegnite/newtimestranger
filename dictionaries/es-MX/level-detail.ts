import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Lista de Niveles",
  },
  notFound: {
    title: "Nivel No Encontrado",
    description: "Lo sentimos, el nivel que buscas no existe",
    backToList: "Volver a la Lista de Niveles",
  },
  levelNumber: "Nivel",
  levelRange: {
    prefix: "Día",
    suffix: "",
  },
  meta: {
    title: `Habitación de Ensueño (Dreamy Room) Nivel {{level}} - Guía y Solución | Consejos Vídeo`,
    description: `Guía completa para Habitación de Ensueño (Dreamy Room) Nivel {{level}}, con consejos de organización, soluciones de colocación y tutoriales en vídeo. Completa fácilmente el nivel de Dreamy Room / Habitación de Ensueño.`,
    siteName: "Guía Oficial de Habitación de Ensueño / Dreamy Room",
    invalidId: {
      title: "Número de Nivel Inválido",
      description: `Por favor, introduce un número de nivel válido (1-${levels.length})`,
    },
    notFound: {
      title: "El Nivel No Existe",
      description:
        "El nivel al que intentas acceder no existe, por favor selecciona otro nivel",
    },
    langNotFound: {
      title: "Paquete de Idioma No Encontrado",
      description:
        "No se encontró contenido de traducción para el idioma actual, por favor cambia a otro idioma",
    },
  },
} as const;

export default levelDetail;
