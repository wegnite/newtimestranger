import levels from "@/data/levels";

export const hero = {
  badge: "Collezione di guide per i giochi",
  title: "Visualizza tutte le guide per i livelli di Digimon Story Time Stranger",
  description:
    "Esplora le guide dettagliate, i consigli e le strategie per ogni livello. Inserisci un numero di livello per saltare direttamente alla guida corrispondente.",
  stats: {
    guides: levels.length + "+ guide per i livelli",
    videoTutorials: `${levels.length}+ Video tutorial`,
    quickSearch: "Ricerca rapida per il livello",
  },
  search: {
    placeholder: `Inserisci il numero di livello (1-${levels.length})`,
    button: "Cerca guida",
    error: {
      invalid: "Si prega di inserire un numero di livello valido",
      notFound: "Nessuna guida trovata per questo livello",
    },
  },
  buttons: {
    browseAll: "Esplora tutte le guide per i livelli",
    downloadGame: "Scarica il gioco",
  },
  downloadCard: {
    title: "Scarica Digimon Story Time Stranger",
    description: "Inizia un'avventura di puzzle rilassante e strategica!",
  },
  videoSection: {
    title: "Video strategici per Digimon Story Time Stranger",
    description:
      "Guarda i video tutorial dettagliati del gioco per imparare le strategie per completare i livelli",
  },
} as const;
