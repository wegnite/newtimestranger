import levels from "@/data/levels";

export const level = {
  title: `Traumzimmer & Dreamy Room: Level Anleitung (1-${levels.length})`,
  subtitle: `Komplettlösung für alle ${levels.length} Traumzimmer Level | Organisationstipps`,
  searchPlaceholder: `Levelnummer eingeben (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Traumzimmer & Dreamy Room: Level 1-${levels.length} Anleitung & Komplettlösung | Video-Guides`,
    description: `Offizielle Anleitung für Traumzimmer & Dreamy Room. Komplette Komplettlösungen für Level 1-${levels.length}, Video-Guides und Organisationstipps. Schließe jedes Traumzimmer Level leicht ab!`,
    siteName: "Dreamy Room Offizielle Anleitung",
    author: "Dreamy Room Guide Team",
    category: "Spielanleitung",
    classification: "Gelegenheits-Puzzlespiel",
  },
} as const;

export default level;
