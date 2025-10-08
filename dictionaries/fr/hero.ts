import levels from "@/data/levels";

export const hero = {
  badge: "Collection de guides de jeu",
  title: "Parcourir tous les guides de niveau de Chambre de Rêve / Dreamy Room",
  description:
    "Explorez des soluces détaillées, des astuces et des stratégies pour chaque niveau de pièce (Chambre de Rêve / Dreamy Room). Entrez le numéro de niveau pour accéder directement au guide correspondant.",
  stats: {
    guides: levels.length + "+ Guides de niveau",
    videoTutorials: `${levels.length}+ Tutoriels vidéo`,
    quickSearch: "Recherche rapide de niveau",
  },
  search: {
    placeholder: `Entrez le numéro de niveau (1-${levels.length})`,
    button: "Trouver le guide",
    error: {
      invalid: "Veuillez entrer un numéro de niveau valide",
      notFound: "Guide pour ce niveau introuvable",
    },
  },
  buttons: {
    browseAll: "Parcourir tous les guides",
    downloadGame: "Télécharger le jeu",
  },
  downloadCard: {
    title: "Télécharger Chambre de Rêve / Dreamy Room",
    description:
      "Commencez un voyage chaleureux et apaisant de rangement et d'organisation !",
  },
  videoSection: {
    title: "Vidéos de soluce du jeu",
    description:
      "Regardez des tutoriels vidéo détaillés sur le jeu pour apprendre les techniques de rangement et d'organisation",
  },
  mainScreenshotAlt:
    "Capture d'écran principale du gameplay de Chambre de Rêve (Dreamy Room)",
  screenshotAltTemplate:
    "Capture d'écran du jeu Chambre de Rêve (Dreamy Room) {num}",
} as const;

export default hero;
