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
    guides: "Guides",
    settings: "Settings",
  },
  activePlayers: "Active Tamers",
  countries: "Regions",
  coffeeRecipes: "Timeline Routes",
  userRating: "User Rating",
  localeSuggest: {
    switchToTitle: "Switch to {langName}?",
    currentLangDesc: "Current language is {langName}.",
    dismissPermanent: "Do not prompt again",
    switchToAlt: "Switch to {langName}",
    switchToButton: "Switch",
  },
  onlineGames: {
    bannerTitle: "Want to play games directly?",
    bannerDescription:
      "Experience Time Stranger and more games directly in your browser, no download required",
    playNowButton: "Play Now",
    featured: "Featured Games",
    viewAllGames: "View All Games",
    levelCompletionText: "Play Time Stranger Online!",
  },
} as const;

export default common;
