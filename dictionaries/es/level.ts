import levels from "@/data/levels";

export const level = {
  title: `Habitación de Ensueño / Dreamy Room Guía de Niveles, Solución Completa 1-${levels.length}`,
  subtitle: `Solución Completa para ${levels.length} Niveles | Consejos de Organización | Habitación de Ensueño / Dreamy Room`,
  searchPlaceholder: `Introduce el número de nivel (1-${levels.length})`,
  levelRange: {
    start: "Nivel ",
    end: "",
  },
  levelNumber: "Nivel",
  meta: {
    title: `Niveles 1-${levels.length} Guía Habitación de Ensueño / Dreamy Room | Solución Vídeo`,
    description: `Sitio oficial de la guía del juego Habitación de Ensueño / Dreamy Room, con soluciones para los niveles 1-${levels.length}, consejos de organización, colocación de objetos y guías en vídeo para Dreamy Room. Completa fácilmente los niveles de Habitación de Ensueño.`,
    siteName: "Guía Oficial de Habitación de Ensueño / Dreamy Room",
    author: "Equipo de la Guía Habitación de Ensueño / Dreamy Room",
    category: "Guía del Juego",
    classification: "Juego de Puzle Casual",
  },
} as const;

export default level;
