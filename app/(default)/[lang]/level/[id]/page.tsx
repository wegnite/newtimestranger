import { redirect } from "next/navigation";
import { i18n } from "@/i18n";
import levels from "@/data/levels";

interface LevelIdRedirectProps {
  params: {
    lang: string;
    id: string;
  };
}

// 为所有语言和关卡组合生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    // 遍历所有关卡
    for (const level of levels) {
      paths.push({
        lang,
        id: level.id.toString(),
      });
    }
  }

  return paths;
}

export default function LevelIdRedirect({ params }: LevelIdRedirectProps) {
  // 服务端重定向到对应的 [lang]/videos/[id] 页面
  redirect(`/${params.lang}/videos/${params.id}`);
}
