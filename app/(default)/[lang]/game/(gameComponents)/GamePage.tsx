import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { getGameById, games, getRecommendedGames } from "@/data/games";
import Markdown from "react-markdown";
import ShareButtons from "@/components/common/share-buttons";
import { i18n, type Locale } from "@/i18n";
import Link from "next/link";
import GamePlayer from "@/components/game/game-player";
import {LevelShowcase} from "@/components/sections/level-showcase";

interface GamePageProps {
  params: {
    lang: Locale;
    id: string;
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const dictionary = await getDictionary(params.lang);

  if (!dictionary) return notFound();

  const game = getGameById(params.id);

  if (!game) return notFound();

  // 获取游戏名称和描述
  const [gameTextKey, nameProperty] = game.nameKey.split(".");
  const gameName = dictionary.gamesText[gameTextKey][nameProperty];

  const [descTextKey, descProperty] = game.markdownDescriptionKey.split(".");
  const gameDescription = dictionary.gamesText[descTextKey][descProperty];

  // 获取推荐游戏列表
  const recommendedGames = getRecommendedGames(game.id);

  // 构建绝对URL用于分享
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://dreamyroom.vercel.app";
  const pageUrl = `${baseUrl}/${params.lang}/game/${params.id}`;
  const logoUrl = `${baseUrl}/images/logo.webp`;

  // 页面标题用于分享
  const pageTitle = dictionary.gamePage.metaTitle.replace(
    "{gameName}",
    gameName
  );

  // 创建 JSON-LD 结构化数据
  const jsonLd = {
    "@context": "https://schema.org", // 指定使用Schema.org词汇表
    "@graph": [
      // 包含多个关联实体的数组
      {
        "@type": "WebSite", // 网站实体
        "@id": `${baseUrl}/#website`, // 网站唯一标识符
        url: baseUrl, // 网站URL
        name: dictionary.home?.meta?.siteName || "Digimon Story Time Stranger Game Guide", // 网站名称
        logo: logoUrl, // 网站Logo
      },
      {
        "@type": "WebPage", // 网页实体
        "@id": `${pageUrl}/#webpage`, // 网页唯一标识符
        url: pageUrl, // 当前页面URL
        name: pageTitle, // 页面标题
        description: dictionary.gamePage.metaDescription
          .replace("{gameName}", gameName)
          .replace(
            "{descriptionSnippet}",
            gameDescription
              .split("\n")[0]
              .replace(/^#+\s+/, "")
              .substring(0, 150)
          ), // 页面描述，结合游戏名称和描述片段
        inLanguage: params.lang, // 页面语言
        primaryImageOfPage: {
          // 页面主要图片
          "@type": "ImageObject",
          contentUrl: game.thumbnailUrl
            ? `${baseUrl}${game.thumbnailUrl}`
            : `${baseUrl}/images/games/game-placeholder.webp`, // 图片URL
        },
        mainEntity: {
          // 指定页面的主要内容实体是游戏
          "@id": `${pageUrl}/#game`, // 引用下方定义的游戏实体
        },
      },
      {
        "@type": "VideoGame", // 游戏实体，使用Schema.org的VideoGame类型
        "@id": `${pageUrl}/#game`, // 游戏唯一标识符
        name: gameName, // 游戏名称
        description: gameDescription
          .split("\n")[0]
          .replace(/^#+\s+/, "")
          .substring(0, 150), // 游戏简短描述
        url: pageUrl, // 游戏页面URL
        inLanguage: params.lang, // 游戏语言
        gamePlatform: "Web Browser", // 游戏平台
        applicationCategory: "Game", // 应用类别
        playMode: "SinglePlayer", // 游戏模式（单人）
        image: {
          // 游戏图片
          "@type": "ImageObject",
          url: game.thumbnailUrl
            ? `${baseUrl}${game.thumbnailUrl}`
            : `${baseUrl}/images/games/game-placeholder.webp`, // 图片URL
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto pt-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左侧游戏区域 */}
          <div className="lg:col-span-9">
            <GamePlayer
              gameName={gameName}
              gameUrl={game.iframeUrl}
              thumbnailUrl={
                game.thumbnailUrl || "/images/games/game-placeholder.webp"
              }
              dictionary={dictionary}
            />

            {/* 分享按钮 */}
            <div className="mt-4">
              <ShareButtons
                pageTitle={pageTitle}
                pageUrl={pageUrl}
                shareLabel={dictionary.gamePage.shareLabel}
                linkCopiedText={dictionary.gamePage.linkCopiedText}
              />
            </div>
            <h1 className="text-3xl font-bold mb-6">
              {dictionary.gamePage.title.replace("{gameName}", gameName)}
            </h1>
            {/* 游戏描述 */}
            <div className="mt-6 prose prose-gray dark:prose-invert max-w-none">
              <Markdown>{gameDescription}</Markdown>
            </div>
          </div>

          {/* 右侧推荐游戏列表 */}
          <div className="lg:col-span-3">
            <div className="bg-muted/30 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">
                {dictionary.gamePage.recommendedGames}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {recommendedGames.map((recommendedGame) => {
                  const [recGameTextKey, recNameProperty] =
                    recommendedGame.nameKey.split(".");
                  const recGameName =
                    dictionary.gamesText[recGameTextKey][recNameProperty];

                  return (
                    <Link
                      href={`/${params.lang}/game/${recommendedGame.id}`}
                      key={recommendedGame.id}
                      className="block"
                    >
                      <div className="bg-background hover:bg-muted/50 transition-colors rounded-lg overflow-hidden h-full">
                        <div className="relative">
                          <img
                            src={
                              recommendedGame.thumbnailUrl ||
                              "/images/games/game-placeholder.webp"
                            }
                            width="300"
                            height="170"
                            alt={recGameName}
                            className="w-full h-auto aspect-video object-cover"
                          />
                          {recommendedGame.rating && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold text-black px-1.5 py-0.5 rounded flex items-center">
                              <span className="mr-0.5">★</span>
                              {recommendedGame.rating.toFixed(1)}
                            </div>
                          )}
                        </div>
                        <div className="p-2">
                          <h3 className="font-semibold text-sm truncate">
                            {recGameName}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LevelShowcase
          lang={params.lang}
          levelShowcaseDict={dictionary.levelShowcase}
          commonDict={dictionary.common}
      />
    </>
  );
}
