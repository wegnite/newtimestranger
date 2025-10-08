import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { getGameById, games } from "@/data/games";
import { type Locale, i18n } from "@/i18n";
import GamePage from "../(gameComponents)/GamePage";

interface PageProps {
  params: {
    lang: Locale;
    id: string;
  };
}

// 为所有语言和游戏组合生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    // 遍历所有游戏
    for (const game of games) {
      paths.push({
        lang,
        id: game.id,
      });
    }
  }

  return paths;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  if (!dictionary) return notFound();

  const game = getGameById(params.id);

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

// 动态路由页面现在只是简单地传递参数给共享的GamePage组件
export default function Page({ params }: PageProps) {
  return <GamePage params={params} />;
}
