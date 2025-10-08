import levels from "@/data/levels";

export const level = {
  title: `Chambre de Rêve / Dreamy Room Guide de Soluce des Niveaux 1-${levels.length}`,
  subtitle: `Soluce complète pour ${levels.length} niveaux | Astuces d'organisation | Solutions d'agencement de pièce | Chambre de Rêve / Dreamy Room`,
  searchPlaceholder: `Entrez le numéro de niveau (1-${levels.length})`,
  levelRange: {
    start: "Niveaux ",
    end: "",
  },
  levelNumber: "Niveau",
  searchNotFound: "Niveau non trouvé.",
  rangeNotFound: "Aucun niveau trouvé dans cette plage.",
  meta: {
    title: `Guide Chambre de Rêve / Dreamy Room | Soluce Vidéo Complète Niveaux 1-${levels.length} | Astuces`,
    description: `Site officiel du guide du jeu Chambre de Rêve / Dreamy Room, fournissant une soluce complète pour les niveaux 1-${levels.length}, y compris des astuces d'organisation détaillées, des solutions de placement d'objets et des guides vidéo pour Dreamy Room. Vous aide à passer facilement les niveaux de Chambre de Rêve et à créer l'espace parfait.`,
    siteName: "Guide Officiel Chambre de Rêve / Dreamy Room",
    author: "Équipe du Guide Chambre de Rêve / Dreamy Room",
    category: "Guide de jeu",
    classification: "Puzzle Casual",
  },
} as const;

export default level;
