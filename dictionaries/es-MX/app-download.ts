export const appDownload = {
  meta: {
    title:
      "Descargar Habitación de Ensueño / Dreamy Room - Juego de Organización Acogedor",
    description:
      "Descarga Habitación de Ensueño (o Dreamy Room) y comienza tu viaje de organización y decoración. Crea tu espacio vital perfecto.",
  },
  title: "Descargar Habitación de Ensueño / Dreamy Room",
  subtitle: "Un Juego de Organización de Habitaciones Acogedor y Sanador",
  stats: {
    rating: "4.8",
    downloads: "+1 M Descargas",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Descargar en App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Consíguelo en Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Organización",
      description: "Encuentra el lugar perfecto para cada artículo",
    },
    story: {
      title: "Historia Conmovedora",
      description:
        "Cuenta historias de vida a través de la colocación de artículos",
    },
  },
} as const;

export default appDownload;
