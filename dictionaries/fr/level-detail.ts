import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Liste des niveaux",
  },
  notFound: {
    title: "Niveau non trouvé",
    description: "Désolé, le niveau que vous recherchez n'existe pas",
    backToList: "Retour à la liste des niveaux",
  },
  levelNumber: "Niveau",
  levelRange: {
    prefix: "Jour ",
    suffix: "",
  },
  meta: {
    title: `Chambre de Rêve (Dreamy Room) Niveau {{level}} - Guide et Soluce | Conseils Vidéo`,
    description: `Guide complet pour Chambre de Rêve (Dreamy Room) Niveau {{level}}, fournissant des astuces d'organisation détaillées, des solutions de placement d'objets et des soluces vidéo. Terminez facilement le niveau de Dreamy Room / Chambre de Rêve et créez l'espace parfait.`,
    siteName: "Guide officiel de Chambre de Rêve / Dreamy Room",
    invalidId: {
      title: "Numéro de niveau invalide",
      description: `Veuillez entrer un numéro de niveau valide (1-${levels.length})`,
    },
    notFound: {
      title: "Le niveau n'existe pas",
      description:
        "Le niveau auquel vous essayez d'accéder n'existe pas, veuillez sélectionner un autre niveau",
    },
    langNotFound: {
      title: "Pack de langue introuvable",
      description:
        "Le contenu de traduction pour la langue actuelle est introuvable, veuillez passer à une autre langue",
    },
  },
  sidebar: {
    adjacentLevels: "Niveaux Adjacents",
    allLevels: "Tous les Niveaux",
  },
  shareLabel: "Partager le Guide du Niveau",
  linkCopiedText: "Lien copié !",
} as const;

export default levelDetail;
