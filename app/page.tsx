import { Hero } from "@/components/sections/hero";
import { MediaCoverage } from "@/components/sections/media-coverage";
import { CompanyInfo } from "@/components/sections/company-info";
import AppDownload from "@/components/sections/app-download";
import { FAQ } from "@/components/sections/faq";
import { LevelShowcase } from "@/components/sections/level-showcase";
import { getDictionary } from "@/lib/dictionary";
import {OnlineGamingBanner} from "@/components/sections/online-gaming-banner";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

export async function generateMetadata() {
  const dict = await getDictionary('en');
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
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

export default async function Home() {
  // 默认使用英文
  const lang = 'en';
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/`;
  const logoUrl = siteUrl + "/images/logo.webp";
  const searchUrlTemplate = `${siteUrl}/level?search={search_term_string}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.home.meta.siteName || "Knit Out Game Guide",
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
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.home.meta.title,
        description: dict.home.meta.description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}/#level-list`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: dict.faq.questions.map((item: any) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: dict.home.meta.siteName || "Knit Out Game Guide",
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
        <Hero lang={lang} heroDict={dict.hero} />
        <LevelShowcase
            lang={lang}
            levelShowcaseDict={dict.levelShowcase}
            commonDict={dict.common}
        />
        <MediaCoverage />
        <AppDownload />
        <CompanyInfo />
        <FAQ faqDict={dict.faq} />
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
