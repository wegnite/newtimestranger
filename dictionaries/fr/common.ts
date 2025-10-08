export const common = {
  buttons: {
    submit: "Envoyer",
    cancel: "Annuler",
    confirm: "Confirmer",
    back: "Retour",
    next: "Suivant",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    download: "Télécharger",
    close: "Fermer",
  },
  messages: {
    loading: "Chargement...",
    success: "Opération réussie",
    error: "Une erreur s'est produite",
    confirm: "Êtes-vous sûr?",
    required: "Ce champ est requis",
    invalidInput: "Entrée invalide",
  },
  navigation: {
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    guides: "Guides",
    settings: "Paramètres",
  },
  activePlayers: "Joueurs actifs",
  countries: "Pays",
  coffeeRecipes: "Recettes de café",
  userRating: "Note des utilisateurs",
  localeSuggest: {
    switchToTitle: "Passer en {langName} ?",
    currentLangDesc: "La langue actuelle est {langName}.",
    dismissPermanent: "Ne plus afficher ce message",
    switchToAlt: "Passer en {langName}",
    switchToButton: "Changer",
  },
  onlineGames: {
    bannerTitle: "Envie de jouer directement ?",
    bannerDescription:
      "Découvrez Dreamy Room et d'autres jeux directement dans votre navigateur, sans téléchargement",
    playNowButton: "Jouer maintenant",
    featured: "Jeux en vedette",
    viewAllGames: "Voir tous les jeux",
    levelCompletionText: "Jouez à Dreamy Room en ligne !",
  },
} as const;

export default common;
