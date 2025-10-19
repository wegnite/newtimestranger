import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";

export default function withRedirectMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname;

    // 处理 level 到 videos 的重定向
    if (pathname.includes("/level")) {
      // 301 永久重定向，保持 SEO 权重
      const redirectUrl = pathname.replace(/\/level/g, "/videos");
      return NextResponse.redirect(new URL(redirectUrl, request.url), 301);
    }

    // 处理根目录的 level 路径重定向
    if (pathname === "/level") {
      return NextResponse.redirect(new URL("/videos", request.url), 301);
    }

    // 处理带语言前缀的 level 路径重定向
    const levelPattern = /^\/([a-z]{2})\/level$/;
    const levelMatch = pathname.match(levelPattern);
    if (levelMatch) {
      const [, lang] = levelMatch;
      return NextResponse.redirect(
        new URL(`/${lang}/videos`, request.url),
        301
      );
    }

    // 处理带语言前缀的 level/[id] 路径重定向
    const levelIdPattern = /^\/([a-z]{2})\/level\/(\d+)$/;
    const levelIdMatch = pathname.match(levelIdPattern);
    if (levelIdMatch) {
      const [, lang, id] = levelIdMatch;
      return NextResponse.redirect(
        new URL(`/${lang}/videos/${id}`, request.url),
        301
      );
    }

    // 处理不带语言前缀的 level/[id] 路径重定向
    const rootLevelIdPattern = /^\/level\/(\d+)$/;
    const rootLevelIdMatch = pathname.match(rootLevelIdPattern);
    if (rootLevelIdMatch) {
      const [, id] = rootLevelIdMatch;
      return NextResponse.redirect(new URL(`/videos/${id}`, request.url), 301);
    }

    return middleware(request, event, response);
  };
}
