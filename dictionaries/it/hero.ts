import levels from "@/data/levels";

export const hero = {
  badge: "Raccolta Guide di Gioco",
  title: "Visualizza Tutte le Guide dei Livelli di Dreamy Room",
  description:
    "Esplora walkthrough dettagliati, suggerimenti e strategie per ogni livello della stanza. Inserisci un numero di livello per passare direttamente alla guida corrispondente.",
  stats: {
    guides: levels.length + "+ Guide dei Livelli",
    videoTutorials: `${levels.length}+ Tutorial Video`,
    quickSearch: "Ricerca Rapida Livello",
  },
  search: {
    placeholder: `Inserisci numero livello (1-${levels.length})`,
    button: "Cerca Guida",
    error: {
      invalid: "Inserisci un numero di livello valido",
      notFound: "Nessuna guida trovata per questo livello",
    },
  },
  buttons: {
    browseAll: "Sfoglia Tutte le Guide dei Livelli",
    downloadGame: "Scarica Gioco",
  },
  downloadCard: {
    title: "Scarica Dreamy Room",
    description:
      "Inizia un viaggio caldo e curativo di riordino e organizzazione!",
  },
  videoSection: {
    title: "Video Strategie di Gioco",
    description:
      "Guarda tutorial video di gioco dettagliati per imparare le tecniche di riordino e organizzazione",
  },
} as const;

export default hero;
