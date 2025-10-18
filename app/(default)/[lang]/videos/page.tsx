import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/i18n";
import { ensureTrailingSlash } from "@/lib/utils";
import LevelContent from "./components/level-content";
import { Metadata } from "next";
import {OnlineGamingBanner} from "@/components/sections/online-gaming-banner"; // Import the new function

// 为所有语言生成静态路径
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);

  return {
    title: dict.level.meta.title,
    description: dict.level.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/videos`,
      languages: Object.fromEntries(
        i18n.locales.map((locale: Locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/videos`),
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LevelPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/${lang}/videos`;
  const logoUrl = siteUrl + "/images/logo.webp";
  const searchUrlTemplate = `${siteUrl}/${lang}/level?search={search_term_string}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.home?.meta?.siteName || "Digimon Story Time Stranger Game Guide", // Use consistent site name
        logo: logoUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: searchUrlTemplate,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "CollectionPage", // Use CollectionPage for list pages
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.level.meta.title, // Use metadata title
        description: dict.level.meta.description, // Use metadata description
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}/#level-list`, // Link to the ItemList
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: dict.home?.meta?.siteName || "Digimon Story Time Stranger Game Guide",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": logoUrl,
          url: logoUrl,
        },
        description:
          dict.companyInfo?.sections?.about?.content ||
          dict.companyInfo?.subtitle,
      },
    ],
  };

  return (
    <>
      {/* Add JSON-LD to the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LevelContent lang={lang} dict={dict} />
      <OnlineGamingBanner
          lang={lang}
          commonDict={dict.common}
          className="py-8"
      />
    </>
  );
}
