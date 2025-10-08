import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Elenco Livelli",
  },
  notFound: {
    title: "Livello Non Trovato",
    description: "Spiacenti, il livello che stai cercando non esiste",
    backToList: "Torna all'Elenco Livelli",
  },
  levelNumber: "Livello",
  levelRange: {
    prefix: "Giorno",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Livello {{level}} - Guida al Gioco e Walkthrough - Dreamy Room {{level}} & Suggerimenti Video`,
    description: `Dreamy Room {{level}}, Guida completa per Dreamy Room Livello {{level}}, che fornisce suggerimenti dettagliati sull'organizzazione, soluzioni per il posizionamento degli oggetti e walkthrough video. Ti aiuta a completare facilmente il livello e a creare lo spazio abitativo accogliente perfetto.`,
    siteName: "Guida Ufficiale Dreamy Room",
    invalidId: {
      title: "Numero Livello Non Valido",
      description: `Inserisci un numero di livello valido (1-${levels.length})`,
    },
    notFound: {
      title: "Il Livello Non Esiste",
      description:
        "Il livello a cui stai tentando di accedere non esiste, seleziona un altro livello",
    },
    langNotFound: {
      title: "Pacchetto Lingua Non Trovato",
      description:
        "Contenuto della traduzione per la lingua corrente non trovato, passa a un'altra lingua",
    },
  },
  sidebar: {
    adjacentLevels: "Livelli Adiacenti",
    allLevels: "Tutti i Livelli",
  },
  shareLabel: "Condividi Guida del Livello",
  linkCopiedText: "Link copiato!",
} as const;

export default levelDetail;
