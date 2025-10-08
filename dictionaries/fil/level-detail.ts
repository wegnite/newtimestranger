import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Listahan ng Antas",
  },
  notFound: {
    title: "Hindi Nahanap ang Antas",
    description: "Paumanhin, ang antas na iyong hinahanap ay hindi umiiral",
    backToList: "Bumalik sa Listahan ng Antas",
  },
  levelNumber: "Antas",
  levelRange: {
    prefix: "Araw",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Antas {{level}} - Gabay sa Laro at Walkthrough - Dreamy Room {{level}} at Mga Tip sa Video`,
    description: `Dreamy Room {{level}}, Kumpletong gabay para sa Dreamy Room Antas {{level}}, nagbibigay ng detalyadong mga tip sa organisasyon, mga solusyon sa paglalagay ng item, at mga video walkthrough. Tulungan kang madaling makumpleto ang antas at lumikha ng perpektong maaliwalas na espasyo sa pamumuhay.`,
    siteName: "Opisyal na Gabay ng Dreamy Room",
    invalidId: {
      title: "Hindi Wastong Numero ng Antas",
      description: `Mangyaring maglagay ng wastong numero ng antas (1-${levels.length})`,
    },
    notFound: {
      title: "Hindi Umiiral ang Antas",
      description:
        "Ang antas na sinusubukan mong i-access ay hindi umiiral, mangyaring pumili ng ibang antas",
    },
    langNotFound: {
      title: "Hindi Nahanap ang Language Pack",
      description:
        "Hindi nahanap ang nilalaman ng pagsasalin para sa kasalukuyang wika, mangyaring lumipat sa ibang wika",
    },
  },
  sidebar: {
    adjacentLevels: "Mga Katabing Antas",
    allLevels: "Lahat ng Antas",
  },
  shareLabel: "Ibahagi ang Gabay sa Antas",
  linkCopiedText: "Nakopya ang link!",
} as const;

export default levelDetail;
