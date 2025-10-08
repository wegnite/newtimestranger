import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "@/i18n";
import Negotiator from "negotiator";
import { CustomMiddleware } from "./chain";

// 辅助函数：将浏览器语言代码映射到我们支持的语言代码
function mapBrowserLocaleToSupported(
    browserLocale: string
): string | undefined {
  // 语言映射表
  const localeMap: Record<string, string> = {
    zh: "cn",
    "zh-CN": "cn",
    "zh-HK": "tw",
    "zh-TW": "tw",
    "zh-SG": "cn",
    ja: "ja",
    en: "en",
    de: "de",
    fr: "fr",
    ar: "ar",
    "ar-SA": "ar",
    "ar-AE": "ar",
    "ar-EG": "ar",
    "ko-KR": "ko",
    ko: "ko",
    it: "it",
    fa: "fa",
    es: "es",
    ru: "ru",
    "ru-RU": "ru",
  };

  // 先尝试完整匹配
  if (localeMap[browserLocale]) {
    return localeMap[browserLocale];
  }

  // 如果没有完整匹配，尝试匹配主语言代码
  const mainLang = browserLocale.split("-")[0];
  return localeMap[mainLang];
}

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // 获取浏览器语言列表
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // 遍历浏览器语言列表，找到第一个支持的语言
  for (const lang of languages) {
    const mappedLocale = mapBrowserLocaleToSupported(lang.toLowerCase());
    if (mappedLocale && i18n.locales.includes(mappedLocale as any)) {
      return mappedLocale;
    }
  }

  // 如果没有找到匹配的语言，返回默认语言
  return i18n.defaultLocale;
}

export default function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
      request: NextRequest,
      event: NextFetchEvent,
      response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname;

    // 如果是 API 路径，直接返回
    if (pathname.startsWith("/api")) {
      return middleware(request, event, response);
    }

    const pathnameHasValidLocale = i18n.locales.some((locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    const isDefaultLocalePath =
        pathname === `/${i18n.defaultLocale}` ||
        pathname.startsWith(`/${i18n.defaultLocale}/`);

    // 如果路径不包含有效的语言前缀，并且不是默认语言路径
    if (!pathnameHasValidLocale && !isDefaultLocalePath) {
      // 如果访问的是根路径，直接重写到默认语言，不改变 URL
      if (pathname === "/") {
        return NextResponse.rewrite(
            new URL(`/${i18n.defaultLocale}`, request.url)
        );
      } else {
        // 如果不是根路径，则根据用户首选语言重写到对应的语言路径，不改变 URL
        const locale = getLocale(request);
        return NextResponse.rewrite(
            new URL(`/${locale}${pathname}`, request.url)
        );
      }
    }

    // 如果路径包含的语言前缀不是有效的语言，并且不是默认语言路径，则重写到默认语言，不改变 URL
    if (pathnameHasValidLocale) {
      const detectedLocale = i18n.locales.find(
          (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
      );
      if (!detectedLocale && !isDefaultLocalePath) {
        return NextResponse.rewrite(
            new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
        );
      }
    }

    return middleware(request, event, response);
  };
}
