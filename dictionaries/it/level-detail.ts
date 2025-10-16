import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Elenco livelli",
  },
  notFound: {
    title: "Livello non trovato",
    description: "Spiacente, il livello che stai cercando non esiste",
    backToList: "Torna all'elenco livelli",
  },
  levelNumber: "Livello",
  levelRange: {
    prefix: "Giorno",
    suffix: "",
  },
  meta: {
    title: `Knit Out Livello {{level}} - Guida e soluzione e gioco`,
    description: `Knit Out {{level}}, guida completa per il livello Knit Out {{level}}, fornendo consigli di strategia dettagliati, soluzioni per corda e bobina e walkthrough video. Ti aiuta a completare facilmente il livello e slegare tutti i nodi.`,
    siteName: "Guida ufficiale di Knit Out",
    invalidId: {
      title: "Numero di livello non valido",
      description: `Inserisci un numero di livello valido (1-${levels.length})`,
    },
    notFound: {
      title: "Livello non esistente",
      description:
        "Il livello che stai cercando di accedere non esiste, seleziona un altro livello",
    },
    langNotFound: {
      title: "Pacchetto di lingue non trovato",
      description:
        "Contenuto di traduzione per la lingua corrente non trovato, passa a un'altra lingua",
    },
  },
  sidebar: {
    adjacentLevels: "Livelli adiacenti",
    allLevels: "Tutti i livelli",
  },
  shareLabel: "Condividi guida livello",
  linkCopiedText: "Copiato con successo!",
} as const;
