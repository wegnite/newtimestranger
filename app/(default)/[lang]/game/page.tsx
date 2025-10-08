import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { getGameById, getDefaultGame } from "@/data/games";
import { i18n, type Locale } from "@/i18n";
import GamePage from "./(gameComponents)/GamePage";

// 为所有语言生成静态路径
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

interface PageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  if (!dictionary) return notFound();

  // 默认游戏页面，使用默认游戏
  const defaultGame = getDefaultGame();
  if (!defaultGame) return notFound();
  
  const game = defaultGame;

  if (!game) return notFound();

  // 获取游戏名称和描述
  const [gameTextKey, nameProperty] = game.nameKey.split(".");
  const gameName = dictionary.gamesText[gameTextKey][nameProperty];

  const [descTextKey, descProperty] = game.markdownDescriptionKey.split(".");
  const gameDescription = dictionary.gamesText[descTextKey][descProperty];

  // 为元数据提取描述片段 - 可以是第一段或摘要
  const descriptionSnippet = gameDescription
    .split("\n")[0] // 获取第一段
    .replace(/^#+\s+/, "") // 移除可能的标题标记
    .substring(0, 150); // 限制长度

  return {
    title: dictionary.gamePage.metaTitle.replace("{gameName}", gameName),
    description: dictionary.gamePage.metaDescription
      .replace("{gameName}", gameName)
      .replace("{descriptionSnippet}", descriptionSnippet),
  };
}

export default function Page({ params }: PageProps) {
  // 获取默认游戏
  const defaultGame = getDefaultGame();

  if (!defaultGame) {
    throw new Error("No default game found");
  }

  return <GamePage params={{ lang: params.lang, id: defaultGame.id }} />;
}
