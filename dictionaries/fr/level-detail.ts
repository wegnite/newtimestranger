import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Liste des niveaux",
  },
  notFound: {
    title: "Niveau non trouvé",
    description: "Désolé, le niveau que vous cherchez n'existe pas",
    backToList: "Retour à la liste des niveaux",
  },
  levelNumber: "Niveau",
  levelRange: {
    prefix: "Jour",
    suffix: "",
  },
  meta: {
    title: `Digimon Story Time Stranger Niveau {{level}} - Guide étape par étape & Solution & Jeu`,
    description: `Digimon Story Time Stranger {{level}}, Guide complet pour le niveau Digimon Story Time Stranger {{level}}, fournissant des conseils stratégiques détaillés, des solutions pour les cordes et les bobines, et des vidéos de guide étape par étape. Vous aider à compléter facilement le niveau et à démêler tous les noeuds.`,
    siteName: "Guide officiel de Digimon Story Time Stranger",
    invalidId: {
      title: "Numéro de niveau invalide",
      description: `Veuillez entrer un numéro de niveau valide (1-${levels.length})`,
    },
    notFound: {
      title: "Le niveau n'existe pas",
      description:
        "Le niveau que vous essayez d'accéder n'existe pas, veuillez sélectionner un autre niveau",
    },
    langNotFound: {
      title: "Paquet de langue non trouvé",
      description:
        "Contenu de traduction pour la langue actuelle non trouvé, veuillez basculer sur une autre langue",
    },
  },
  sidebar: {
    adjacentLevels: "Niveaux adjacents",
    allLevels: "Tous les niveaux",
  },
  shareLabel: "Partager le guide du niveau",
  linkCopiedText: "Copié avec succès!",
} as const;
