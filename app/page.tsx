"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 检测浏览器语言
    const browserLang = navigator.language.split("-")[0];
    const supportedLangs = ["en", "zh"];
    const defaultLang = "en";

    // 如果浏览器语言在支持的语言列表中，则跳转到对应语言，否则跳转到默认语言
    const targetLang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

    router.replace(`/${targetLang}`);
  }, [router]);

  // 显示加载状态，添加 noscript 标签作为后备
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en" />
      </noscript>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        <div>Loading...</div>
      </div>
    </>
  );
}
