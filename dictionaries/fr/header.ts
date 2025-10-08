export const header = {
  brand: "Chambre de Rêve",
  navItems: [
    { name: "Accueil", href: "/" },
    { name: "Niveaux", href: "/level/" },
    { name: "Jouer en ligne", href: "/game" },
    { name: "Télécharger", href: "/app/" },
    { name: "Blog", href: "/blog/" },
  ],
} as const;

export default header;
