import { getDictionary } from "@/lib/dictionary";
import LevelContent from "@/app/(default)/[lang]/videos/components/level-content";
import { Metadata } from "next";
import {OnlineGamingBanner} from "@/components/sections/online-gaming-banner";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary('en');
  
  return {
    title: dict.level.meta.title,
    description: dict.level.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/videos`,
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

export default async function LevelPage() {
  const lang = 'en';
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/videos`;
  const logoUrl = siteUrl + "/images/logo.webp";
  const searchUrlTemplate = `${siteUrl}/level?search={search_term_string}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.home?.meta?.siteName || "Knit Out Game Guide",
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
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.level.meta.title,
        description: dict.level.meta.description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}/#level-list`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: dict.home?.meta?.siteName || "Knit Out Game Guide",
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
    <DictionaryProvider dictionary={dict}>
      <MainLayout lang={lang} footerDict={dict.footer}>
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
        <AdContainer/>
        <LocaleSuggest currentLang={lang}/>
      </MainLayout>
    </DictionaryProvider>
  );
}
