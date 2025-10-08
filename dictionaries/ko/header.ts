export const header = {
  brand: "Dreamy Room",
  navItems: [
    { name: "홈", href: "/" },
    { name: "레벨", href: "/level" },
    { name: "온라인 플레이", href: "/game" },
    { name: "다운로드", href: "/app" },
    { name: "블로그", href: "/blog" },
  ],
  tryButton: "Dreamy Room 시작하기",
  tryChatMistralButton: "Chat Mistral 시작하기",
} as const;

export default header;
