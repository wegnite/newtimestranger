export const digimonList = {
  meta: {
    title: "Digimon Story Time Stranger Digimon List - Complete Guide",
    description:
      "Digimon Story Time Stranger Digimon List - Complete list of all 459 Digimon with stats, locations, and evolution info",
  },
  title: "Digimon Story Time Stranger Digimon List",
  subtitle:
    "Discover all 459 Digimon in Digimon Story Time Stranger. Find detailed information about each Digimon including stats, locations, and evolution paths.",
  searchPlaceholder: "Search Digimon by name, type, or personality...",
  filterGeneration: "Generation",
  filterAttribute: "Attribute",
  filterType: "Type",
  filterPersonality: "Personality",
  viewDetails: "View Details",
  backToList: "Back to Digimon List",
  showingResults: "Showing {count} of {total} Digimon",
  noResults:
    "No Digimon found matching your criteria. Try adjusting your search or filters.",
  allGenerations: "All Generations",
  allAttributes: "All Attributes",
  allTypes: "All Types",
  allPersonalities: "All Personalities",
} as const;

export const digimonDetail = {
  meta: {
    title: "{name} - Digimon Story Time Stranger Guide",
    description:
      "{name} is a {generation} level {type} Digimon with {attribute} attribute. Find location, stats, and evolution info.",
  },
  backToList: "Back to Digimon List",
  viewOfficialDetails: "View Official Details",
  basicInformation: "Basic Information",
  locationAcquisition: "Location & Acquisition",
  additionalInformation: "Additional Information",
  relatedActions: "Related Actions",
  viewWalkthrough: "View Walkthrough",
  downloadGame: "Download Game",
  type: "Type",
  attribute: "Attribute",
  personality: "Personality",
  generation: "Generation",
  location: "Location",
  evolutionStage: "Evolution Stage",
} as const;

export default { digimonList, digimonDetail };

