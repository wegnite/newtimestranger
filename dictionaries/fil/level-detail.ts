import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Listahan ng Lebel",
  },
  notFound: {
    title: "Hindi Makita ang Lebel",
    description: "Sorry, ang lebel na hinahanap mo ay hindi umiiral",
    backToList: "Balik sa Listahan ng Lebel",
  },
  levelNumber: "Lebel",
  levelRange: {
    prefix: "Araw",
    suffix: "",
  },
  meta: {
    title: `Digimon Story Time Stranger Level {{level}} - Walkthrough & Solution & Laro`,
    description: `Digimon Story Time Stranger {{level}}, kumpletong gabay para sa Digimon Story Time Stranger Level {{level}}, nagbibigay ng detalyadong mga tip ng diskarte, solusyon sa lubid at bobin, at video walkthroughs. Tumulong sa iyo na madaliang makumpleto ang lebel at tanggalin ang lahat ng mga knot.`,
    siteName: "Oficyal na Gabay ng Digimon Story Time Stranger",
    invalidId: {
      title: "Hindi wastong Numero ng Lebel",
      description: `Mangyaring mag-enter ng wastong numero ng lebel (1-${levels.length})`,
    },
    notFound: {
      title: "Hindi Umiiiral ang Lebel",
      description:
        "Ang lebel na sinusubukan mong pasukin ay hindi umiiral, mangyaring pumili ng isa pang lebel",
    },
    langNotFound: {
      title: "Hindi Makita ang Pakete ng Wika",
      description:
        "Hindi nakita ang nilalaman ng pagsasalin para sa kasalukuyang wika, mangyaring lumipat sa ibang wika",
    },
  },
  sidebar: {
    adjacentLevels: "Mga Katabing Lebel",
    allLevels: "Lahat ng Lebel",
  },
  shareLabel: "I-share ang Gabay ng Lebel",
  linkCopiedText: "Nakopya nang Maayos!",
} as const;
