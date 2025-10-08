import levels from "@/data/levels";

export const hero = {
  badge: "Coleção de Guias do Jogo",
  title: "Ver Todos os Guias de Nível do Dreamy Room",
  description:
    "Explore guias detalhados, dicas e estratégias para cada nível de quarto. Insira um número de nível para ir diretamente ao guia correspondente.",
  stats: {
    guides: `${levels.length}+ Guias de Nível`,
    videoTutorials: `${levels.length}+ Tutoriais em Vídeo`,
    quickSearch: "Pesquisa Rápida de Nível",
  },
  search: {
    placeholder: `Digite o número do nível (1-${levels.length})`,
    button: "Pesquisar Guia",
    error: {
      invalid: "Por favor, insira um número de nível válido",
      notFound: "Nenhum guia encontrado para este nível",
    },
  },
  buttons: {
    browseAll: "Ver Todos os Guias de Nível",
    downloadGame: "Baixar Jogo",
  },
  downloadCard: {
    title: "Baixar Dreamy Room",
    description:
      "Comece uma jornada aconchegante e curativa de arrumação e organização!",
  },
  videoSection: {
    title: "Vídeos de Estratégia do Jogo",
    description:
      "Assista a tutoriais em vídeo detalhados do jogo para aprender técnicas de arrumação e organização",
  },
} as const;

export default hero;
