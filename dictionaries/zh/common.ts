export const common = {
  buttons: {
    submit: "Submit",
    cancel: "Cancel",
    confirm: "Confirm",
    back: "Back",
    next: "Next",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    download: "Download",
    close: "Close",
  },
  messages: {
    loading: "Loading...",
    success: "Operation successful",
    error: "An error occurred",
    confirm: "Are you sure?",
    required: "This field is required",
    invalidInput: "Invalid input",
  },
  navigation: {
    home: "Home",
    about: "About",
    contact: "Contact",
    features: "Features",
    pricing: "Pricing",
    guides: "Walkthrough",
    settings: "Settings",
  },
  activePlayers: "Active Players",
  countries: "Countries",
  coffeeRecipes: "Chapters",
  userRating: "User Rating",
  localeSuggest: {
    switchToTitle: "Switch to {langName}?",
    currentLangDesc: "Current language is {langName}.",
    dismissPermanent: "Do not prompt again",
    switchToAlt: "Switch to {langName}",
    switchToButton: "Switch",
  },
  onlineGames: {
    bannerTitle: "Ready to Start Your Adventure?",
    bannerDescription:
      "Get the full game on Steam and follow our complete walkthrough guides",
    playNowButton: "Buy Now",
    featured: "Featured Games",
    viewAllGames: "View All Games",
    levelCompletionText: "Play Digimon Story Time Stranger!",
  },
} as const;

export default common;
