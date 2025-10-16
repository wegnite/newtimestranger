import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Lista de Níveis",
  },
  notFound: {
    title: "Nível Não Encontrado",
    description: "Desculpe, o nível que você está procurando não existe",
    backToList: "Voltar para a Lista de Níveis",
  },
  levelNumber: "Nível",
  levelRange: {
    prefix: "Dia",
    suffix: "",
  },
  meta: {
    title: `Nível {{level}} do Knit Out - Guia do Jogo e Passo a Passo - Knit Out Nível {{level}} & Dicas em Vídeo`,
    description: `Knit Out Nível {{level}}, Guia completo para o Nível {{level}} do Knit Out, fornecendo dicas detalhadas de organização, soluções de posicionamento de itens e passo a passo em vídeo. Ajuda você a completar facilmente o nível e criar o espaço perfeito e aconchegante.`,
    siteName: "Guia Oficial do Knit Out",
    invalidId: {
      title: "Número de Nível Inválido",
      description: `Por favor, insira um número de nível válido (1-${levels.length})`,
    },
    notFound: {
      title: "Nível Não Existe",
      description:
        "O nível que você está tentando acessar não existe, por favor selecione outro nível",
    },
    langNotFound: {
      title: "Pacote de Idioma Não Encontrado",
      description:
        "Conteúdo de tradução para o idioma atual não encontrado, por favor mude para outro idioma",
    },
  },
} as const;

export default levelDetail;
