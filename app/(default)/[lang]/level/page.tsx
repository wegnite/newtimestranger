import { redirect } from "next/navigation";
import { i18n } from "@/i18n";

interface LevelRedirectProps {
  params: {
    lang: string;
  };
}

// 为所有语言生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    paths.push({
      lang,
    });
  }

  return paths;
}

export default function LevelRedirect({ params }: LevelRedirectProps) {
  // 服务端重定向到对应的 [lang]/videos 页面
  redirect(`/${params.lang}/videos`);
}
