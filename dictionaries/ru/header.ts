export const header = {
  brand: "Dreamy Room",
  navItems: [
    { name: "Главная", href: "/" },
    { name: "Уровни", href: "/level/" },
    { name: "Играть онлайн", href: "/game" },
    { name: "Скачать", href: "/app/" },
    { name: "Блог", href: "/blog/" },
  ],
} as const;

export default header;
