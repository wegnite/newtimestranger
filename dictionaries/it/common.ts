export const common = {
  buttons: {
    submit: "Invia",
    cancel: "Annulla",
    confirm: "Conferma",
    back: "Indietro",
    next: "Avanti",
    save: "Salva",
    delete: "Elimina",
    edit: "Modifica",
    view: "Visualizza",
    download: "Scarica",
    close: "Chiudi",
  },
  messages: {
    loading: "Caricamento...",
    success: "Operazione riuscita",
    error: "Si è verificato un errore",
    confirm: "Sei sicuro?",
    required: "Questo campo è obbligatorio",
    invalidInput: "Input non valido",
  },
  navigation: {
    home: "Home",
    about: "Chi siamo",
    contact: "Contatti",
    features: "Funzionalità",
    pricing: "Prezzi",
    guides: "Guide",
    settings: "Impostazioni",
  },
  activePlayers: "Giocatori Attivi",
  countries: "Paesi",
  coffeeRecipes: "Ricette di Caffè",
  userRating: "Valutazione Utenti",
  localeSuggest: {
    switchToTitle: "Passare a {langName}?",
    currentLangDesc: "La lingua corrente è {langName}.",
    dismissPermanent: "Non chiedere più",
    switchToAlt: "Passa a {langName}",
    switchToButton: "Cambia",
  },
  onlineGames: {
    bannerTitle: "Vuoi giocare direttamente?",
    bannerDescription:
      "Prova Dreamy Room e altri giochi direttamente nel tuo browser, senza bisogno di scaricare",
    playNowButton: "Gioca ora",
    featured: "Giochi in evidenza",
    viewAllGames: "Vedi tutti i giochi",
    levelCompletionText: "Gioca a Dreamy Room online!",
  },
} as const;

export default common;
