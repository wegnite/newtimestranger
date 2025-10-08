export interface Game {
  id: string; // e.g., "dreamy-room"
  nameKey: string; // Key to look up localized name in dictionaries, e.g., "dreamyRoomName"
  iframeUrl: string;
  markdownDescriptionKey: string; // Key for the Markdown description in dictionaries
  thumbnailUrl: string; // 添加缩略图字段
  rating?: number; // 添加评分字段（可选）
  isDefault?: boolean; // 添加表示默认游戏的字段
  // Potentially: genreKey, etc. for recommended games module
}

export const games: Game[] = [
  {
    id: "dreamy-room",
    nameKey: "dreamyRoom.name",
    iframeUrl:
        "https://html5.gamedistribution.com/2752a06ef4f9406cbbe85d3f78096d25/?gd_sdk_referrer_url=https://gamedistribution.com/games/ballistic-breakthrough/",
    markdownDescriptionKey: "dreamyRoom.descriptionMarkdown",
    thumbnailUrl: "/images/games/dreamy-room.webp",
    rating: 4.8,
  },
  {
    id: "stick-hole-io",
    nameKey: "stickHoleIo.name",
    iframeUrl:
        "https://html5.gamedistribution.com/c2d673029a644ae58decd5774b5d630d/?gd_sdk_referrer_url=https://gamedistribution.com/games/ballistic-breakthrough/",
    markdownDescriptionKey: "stickHoleIo.descriptionMarkdown",
    thumbnailUrl: "/images/games/stickhole-io.webp",
    rating: 4.5,
    isDefault: true, // 标记为默认游戏
  },
  {
    id: "hole-io",
    nameKey: "holeIo.name",
    iframeUrl:
        "https://html5.gamedistribution.com/bf10577cd0644646a2a0152fe3b4d586/?gd_sdk_referrer_url=https://gamedistribution.com/games/ballistic-breakthrough/",
    markdownDescriptionKey: "holeIo.descriptionMarkdown",
    thumbnailUrl: "/images/games/hole-io.webp",
    rating: 4.7,
  },
  {
    id: "crazy-cattle-3d",
    nameKey: "crazyCattle.name",
    iframeUrl: "https://1games.io/game/crazy-cattle-3d/",
    markdownDescriptionKey: "crazyCattle.descriptionMarkdown",
    thumbnailUrl: "/images/games/crazy-cattle-3d.webp",
    rating: 4.6,
  },
];

// Helper function to get a game by ID
export const getGameById = (id: string): Game | undefined =>
    games.find((g) => g.id === id);

// Helper function to get recommended games (excluding the current game)
export const getRecommendedGames = (
    currentGameId: string,
    limit: number = 3
): Game[] => {
  // 过滤掉当前游戏
  const filteredGames = games.filter((game) => game.id !== currentGameId);

  // 随机打乱游戏数组
  const shuffled = [...filteredGames].sort(() => 0.5 - Math.random());

  // 返回指定数量的随机游戏
  return shuffled.slice(0, limit);
};

// 添加获取默认游戏的辅助函数
export const getDefaultGame = (): Game | undefined =>
    games.find((g) => g.isDefault);
