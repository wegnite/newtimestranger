import levels from "@/data/levels";

export const level = {
  title: `Guia de Níveis do Jogo Knit Out, Passo a Passo Completo para os Níveis 1-${levels.length}`,
  subtitle: `Passo a Passo Completo para ${levels.length} Níveis | Dicas de Organização | Soluções de Layout de Quarto`,
  searchPlaceholder: `Digite o número do nível (1-${levels.length})`,
  levelRange: {
    start: "Nível ",
    end: "",
  },
  levelNumber: "Nível",
  meta: {
    title: `Guia do Jogo Knit Out | Passo a Passo Completo em Vídeo para os Níveis 1-${levels.length} | Dicas de Organização`,
    description: `Site oficial do guia do jogo Knit Out, fornecendo passo a passo completos para os níveis 1-${levels.length}, incluindo dicas detalhadas de organização, soluções de posicionamento de itens e guias em vídeo. Ajuda você a completar facilmente os níveis e criar o espaço de vida perfeito e aconchegante.`,
    keywords:
      "Guia Knit Out, Passo a passo Knit Out, Guia de jogo de organização, Jogo de decoração de quarto, Dicas de jogo de organização, Jogo relaxante, Jogo anti-stress",
    siteName: "Guia Oficial do Knit Out",
    author: "Equipe do Guia Knit Out",
    category: "Guia do Jogo",
    classification: "Jogo Casual de Quebra-Cabeça",
  },
} as const;

export default level;
