import levels from "@/data/levels";

export const hero = {
  badge: "Collection de Guides de Jeu",
  title: "Voir tous les guides de niveaux de Digimon Story Time Stranger",
  description:
    "Explorez les parcours détaillés, les astuces et les stratégies pour chaque niveau. Entrez un numéro de niveau pour accéder directement au guide correspondant.",
  stats: {
    guides: levels.length + "+ Guides de Niveaux",
    videoTutorials: `${levels.length}+ Vidéos de tutoriel`,
    quickSearch: "Recherche rapide de niveau",
  },
  search: {
    placeholder: `Entrez le numéro de niveau (1-${levels.length})`,
    button: "Rechercher le guide",
    error: {
      invalid: "Veuillez entrer un numéro de niveau valide",
      notFound: "Aucun guide trouvé pour ce niveau",
    },
  },
  buttons: {
    browseAll: "Parcourir tous les guides de niveaux",
    downloadGame: "Télécharger le jeu",
  },
  downloadCard: {
    title: "Télécharger Digimon Story Time Stranger",
    description: "Démarrez une aventure de puzzle relaxante et stratégique !",
  },
  videoSection: {
    title: "Vidéos de stratégie de Digimon Story Time Stranger",
    description:
      "Regardez des vidéos de tutoriel de jeu détaillées pour apprendre les stratégies pour compléter les niveaux",
  },
} as const;
