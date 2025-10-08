export const companyInfo = {
  title: "Informazioni su Dreamy Room",
  subtitle: "Un Accogliente Gioco di Organizzazione Amato da Milioni nel Mondo",
  stats: {
    players: "+1M", // M = Milione
    countries: "+150",
    recipes: "+50", // Nota: 'Ricette' è corretto qui?
    rating: "4.8/5",
  },
  sections: {
    about: {
      title: "Chi Siamo",
      content:
        "Dreamy Room è un accogliente gioco di organizzazione. La nostra missione è portare calore e gioia attraverso l'organizzazione e la decorazione delle stanze.",
    },
    mission: {
      title: "La Nostra Missione",
      content:
        "Creare un'esperienza di organizzazione rilassante e affascinante che combina perfettamente la bellezza della vita con storie commoventi.",
    },
  },
} as const;

export default companyInfo;
