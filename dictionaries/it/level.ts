import levels from "@/data/levels";

export const level = {
  title: `Guida ai livelli del gioco Digimon Story Time Stranger, Walkthrough completo per i livelli 1-${levels.length}`,
  subtitle: `Walkthrough completo per ${levels.length} livelli | Consigli strategici | Soluzioni per slegare i nodi`,
  searchPlaceholder: `Inserisci il numero del livello (1-${levels.length})`,
  levelRange: {
    start: "Livello ",
    end: "",
  },
  levelNumber: "Livello",
  meta: {
    title: `Guida al gioco Digimon Story Time Stranger | Walkthrough video completo per i livelli 1-${levels.length} | Consigli strategici`,
    description: `Sito ufficiale della guida al gioco Digimon Story Time Stranger, che offre walkthrough completi per i livelli 1-${levels.length}, inclusi dettagliati consigli strategici, soluzioni per slegare i nodi e guide video. Ti aiuta a completare facilmente i livelli e a risolvere tutti i puzzle.`,
    keywords:
      "Guida a Digimon Story Time Stranger, Walkthrough di Digimon Story Time Stranger, Guida a giochi di puzzle, Gioco di slegamento dei nodi, Consigli per i giochi strategici, Risoluzione di puzzle, Giochi casual",
    siteName: "Guida ufficiale a Digimon Story Time Stranger",
    author: "Team Guida a Digimon Story Time Stranger",
    category: "Guida a giochi",
    classification: "Gioco casual di puzzle",
  },
} as const;

export default level;
