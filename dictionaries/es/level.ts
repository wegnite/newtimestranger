import levels from "@/data/levels";

export const level = {
  title: `Guía de niveles del juego Digimon Story Time Stranger, Recorrido completo para los niveles 1-${levels.length}`,
  subtitle: `Recorrido completo para ${levels.length} niveles | Consejos de estrategia | Soluciones para desenredar`,
  searchPlaceholder: `Ingrese el número de nivel (1-${levels.length})`,
  levelRange: {
    start: "Nivel ",
    end: "",
  },
  levelNumber: "Nivel",
  meta: {
    title: `Guía del juego Digimon Story Time Stranger | Recorrido completo en video para los niveles 1-${levels.length} | Consejos de estrategia`,
    description: `Sitio web oficial de la guía del juego Digimon Story Time Stranger, que ofrece recorridos completos para los niveles 1-${levels.length}, incluyendo consejos de estrategia detallados, soluciones para desenredar nudos y guías en video. Ayúdale a completar fácilmente los niveles y resolver todos los puzzles.`,
    keywords:
      "Guía de Digimon Story Time Stranger, Recorrido de Digimon Story Time Stranger, Guía de juego de puzzles, Juego de desenredar, Consejos de juego de estrategia, Resolución de puzzles, Juego casual",
    siteName: "Guía oficial de Digimon Story Time Stranger",
    author: "Equipo de Guía de Digimon Story Time Stranger",
    category: "Guía de juegos",
    classification: "Juego casual de puzzles",
  },
} as const;

export default level;
