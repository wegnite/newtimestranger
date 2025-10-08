import levels from "@/data/levels";

export const level = {
  title: `Guida ai Livelli del Gioco Dreamy Room, Walkthrough Completo per i Livelli 1-${levels.length}`,
  subtitle: `Walkthrough Completo per ${levels.length} Livelli | Suggerimenti sull'Organizzazione | Soluzioni per la Disposizione della Stanza`,
  searchPlaceholder: `Inserisci il numero del livello (1-${levels.length})`,
  levelRange: {
    start: "Livello ",
    end: "",
  },
  levelNumber: "Livello",
  meta: {
    title: `Guida al Gioco Dreamy Room | Walkthrough Video Completo per i Livelli 1-${levels.length} | Suggerimenti sull'Organizzazione`,
    description: `Sito web ufficiale della guida al gioco Dreamy Room, che fornisce walkthrough completi per i livelli 1-${levels.length}, inclusi suggerimenti dettagliati sull'organizzazione, soluzioni per il posizionamento degli oggetti e guide video. Ti aiuta a completare facilmente i livelli e a creare lo spazio abitativo accogliente perfetto.`,
    keywords:
      "Guida Dreamy Room, Walkthrough Dreamy Room, Guida gioco organizzazione, Gioco decorazione stanza, Suggerimenti gioco organizzazione, Gioco rilassante, Gioco antistress",
    siteName: "Guida Ufficiale Dreamy Room",
    author: "Team Guida Dreamy Room",
    category: "Guida al Gioco",
    classification: "Gioco Puzzle Casual",
  },
} as const;

export default level;
