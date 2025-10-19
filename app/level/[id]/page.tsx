import { redirect } from "next/navigation";
import levels from "@/data/levels";

interface LevelIdRedirectProps {
  params: {
    id: string;
  };
}

// 为所有关卡生成静态路径
export async function generateStaticParams() {
  const paths: { id: string }[] = [];

  // 遍历所有关卡
  for (const level of levels) {
    paths.push({
      id: level.id.toString(),
    });
  }

  return paths;
}

export default function LevelIdRedirect({ params }: LevelIdRedirectProps) {
  // 服务端重定向到对应的 videos/[id] 页面
  redirect(`/videos/${params.id}`);
}
