export const common = {
  buttons: {
    submit: "Einreichen",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    back: "Zurück",
    next: "Weiter",
    save: "Speichern",
    delete: "Löschen",
    edit: "Bearbeiten",
    view: "Ansehen",
    download: "Herunterladen",
    close: "Schließen",
  },
  messages: {
    loading: "Wird geladen...",
    success: "Vorgang erfolgreich",
    error: "Ein Fehler ist aufgetreten",
    confirm: "Sind Sie sicher?",
    required: "Dieses Feld ist erforderlich",
    invalidInput: "Ungültige Eingabe",
  },
  navigation: {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    features: "Funktionen",
    pricing: "Preise",
    guides: "Anleitungen",
    settings: "Einstellungen",
  },
  activePlayers: "Aktive Spieler",
  countries: "Länder",
  coffeeRecipes: "Kaffeerezepte",
  userRating: "Benutzerbewertung",
  localeSuggest: {
    switchToTitle: "Zu {langName} wechseln?",
    currentLangDesc: "Aktuelle Sprache ist {langName}.",
    dismissPermanent: "Nicht erneut fragen",
    switchToAlt: "Zu {langName} wechseln",
    switchToButton: "Wechseln",
  },
  onlineGames: {
    bannerTitle: "Spiele direkt spielen?",
    bannerDescription:
      "Erlebe Dreamy Room und weitere Spiele direkt in deinem Browser ohne Download",
    playNowButton: "Jetzt spielen",
    featured: "Empfohlene Spiele",
    viewAllGames: "Alle Spiele anzeigen",
    levelCompletionText: "Spiele Dreamy Room online!",
  },
} as const;

export default common;
