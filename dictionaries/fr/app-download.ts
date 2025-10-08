export const appDownload = {
  meta: {
    title:
      "Télécharger Chambre de Rêve / Dreamy Room - Jeu d'organisation cosy",
    description:
      "Téléchargez Chambre de Rêve (ou Dreamy Room) et commencez votre voyage réconfortant d'organisation et de décoration. Créez l'espace de vie parfait grâce à une organisation attentive.",
  },
  title: "Télécharger Chambre de Rêve / Dreamy Room",
  subtitle: "Un jeu d'organisation de pièce cosy et apaisant",
  stats: {
    rating: "4.8",
    downloads: "1 M+ Téléchargements",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Télécharger sur l'App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Disponible sur Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Organisation",
      description: "Trouvez l'endroit parfait pour chaque objet",
    },
    story: {
      title: "Histoire touchante",
      description:
        "Racontez des histoires de vie à travers le placement d'objets",
    },
  },
} as const;

export default appDownload;
