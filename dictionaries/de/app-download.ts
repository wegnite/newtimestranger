export const appDownload = {
  meta: {
    title: "Traumzimmer & Dreamy Room App herunterladen",
    description:
      "Laden Sie die Traumzimmer (Dreamy Room) App herunter und beginnen Sie Ihre herzerwärmende Reise des Organisierens und Dekorierens von Räumen. Schaffen Sie Ihren perfekten Wohnraum durch achtsame Organisation.",
  },
  title: "Traumzimmer & Dreamy Room App herunterladen",
  subtitle: "Ein gemütliches und heilsames Raumorganisationsspiel",
  stats: {
    rating: "4,8",
    downloads: "1 Mio.+ Downloads",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "Im App Store laden",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "Jetzt bei Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "Organisation",
      description: "Finden Sie den perfekten Platz für jeden Gegenstand",
    },
    story: {
      title: "Herzerwärmende Geschichte",
      description:
        "Erzählen Sie Lebensgeschichten durch die Platzierung von Gegenständen",
    },
  },
} as const;

export default appDownload;
