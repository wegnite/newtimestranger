import { redirect } from "next/navigation";

export default function RootLevelRedirect() {
  // 服务端重定向到根目录的 videos 页面
  redirect("/videos");
}
