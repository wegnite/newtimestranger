export const header = {
  brand: "Habitación de Ensueño",
  navItems: [
    { name: "Inicio", href: "/" },
    { name: "Niveles", href: "/level/" },
    { name: "Jugar en línea", href: "/game" },
    { name: "Descargar", href: "/app/" },
    { name: "Blog", href: "/blog/" },
  ],
} as const;

export default header;
