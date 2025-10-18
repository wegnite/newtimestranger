import levels from "@/data/levels";

export const level = {
  title: `Guide des niveaux du jeu Digimon Story Time Stranger, Parcours complet pour les niveaux 1-${levels.length}`,
  subtitle: `Parcours complet pour ${levels.length} niveaux | Conseils de stratégie | Solutions pour démêler les noeuds`,
  searchPlaceholder: `Entrez le numéro de niveau (1-${levels.length})`,
  levelRange: {
    start: "Niveau ",
    end: "",
  },
  levelNumber: "Niveau",
  meta: {
    title: `Guide du jeu Digimon Story Time Stranger | Parcours vidéo complet pour les niveaux 1-${levels.length} | Conseils de stratégie`,
    description: `Site web officiel de guide du jeu Digimon Story Time Stranger, offrant des parcours complets pour les niveaux 1-${levels.length}, y compris des conseils de stratégie détaillés, des solutions pour démêler les noeuds et des guides vidéo. Vous aider à compléter facilement les niveaux et à résoudre tous les puzzles.`,
    keywords:
      "Guide Digimon Story Time Stranger, Parcours Digimon Story Time Stranger, Guide de jeu de puzzles, Jeu de démêlage, Conseils de jeu de stratégie, Résolution de puzzles, Jeu de loisirs",
    siteName: "Guide officiel Digimon Story Time Stranger",
    author: "Équipe de guide Digimon Story Time Stranger",
    category: "Guide de jeu",
    classification: "Jeu de puzzles de loisirs",
  },
} as const;

export default level;
