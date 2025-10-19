export const digimonList = {
  meta: {
    title: "《数码宝贝物语：时空陌生人》数码宝贝图鉴 - 完整指南",
    description:
      "《数码宝贝物语：时空陌生人》数码宝贝图鉴 - 包含所有459种数码宝贝的完整列表，包括属性、位置和进化信息",
  },
  title: "《数码宝贝物语：时空陌生人》数码宝贝图鉴",
  subtitle:
    "探索《数码宝贝物语：时空陌生人》中的所有459种数码宝贝。查找每个数码宝贝的详细信息，包括属性、位置和进化路径。",
  searchPlaceholder: "按名称、类型或性格搜索数码宝贝...",
  filterGeneration: "世代",
  filterAttribute: "属性",
  filterType: "类型",
  filterPersonality: "性格",
  viewDetails: "查看详情",
  backToList: "返回数码宝贝列表",
  showingResults: "显示 {count} / {total} 个数码宝贝",
  noResults: "未找到符合您条件的数码宝贝。请尝试调整搜索或筛选条件。",
  allGenerations: "所有世代",
  allAttributes: "所有属性",
  allTypes: "所有类型",
  allPersonalities: "所有性格",
  // Homepage section
  homepage: {
    title: "数码宝贝图鉴",
    subtitle: "探索《数码宝贝物语：时空陌生人》中的所有459种数码宝贝",
    searchPlaceholder: "按名称、类型或属性搜索数码宝贝...",
    viewAllButton: "查看完整图鉴",
    noResults: "未找到匹配搜索条件的数码宝贝。",
    viewDetails: "查看详情",
  },
} as const;

export const digimonDetail = {
  meta: {
    title: "{name} - 《数码宝贝物语：时空陌生人》攻略",
    description:
      "{name} 是{generation}级别的{type}数码宝贝，具有{attribute}属性。查找位置、属性和进化信息。",
  },
  backToList: "返回数码宝贝列表",
  viewOfficialDetails: "查看官方详情",
  basicInformation: "基本信息",
  locationAcquisition: "位置与获得",
  additionalInformation: "附加信息",
  relatedActions: "相关操作",
  viewWalkthrough: "查看攻略",
  downloadGame: "下载游戏",
  type: "类型",
  attribute: "属性",
  personality: "性格",
  generation: "世代",
  location: "位置",
  evolutionStage: "进化阶段",
} as const;

export default { digimonList, digimonDetail };
