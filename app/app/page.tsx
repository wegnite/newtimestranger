import AppDownload from "@/components/sections/app-download";
import { getDictionary } from "@/lib/dictionary";
import { LevelShowcase } from "@/components/sections/level-showcase";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

export async function generateMetadata() {
  const dict = await getDictionary('en');
  return {
    title: dict.appDownload.meta.title,
    description: dict.appDownload.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/app`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function DownloadPage() {
  // 默认使用英文
  const lang = 'en';
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/app`;
  const logoUrl = siteUrl + "/images/logo.webp";
  const searchUrlTemplate = `${siteUrl}/level?search={search_term_string}`;

  // Prepare SoftwareApplication data
  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}/#app`, // Unique ID for the application on this page
    name: dict.appDownload.title,
    description: dict.appDownload.subtitle,
    operatingSystem: "iOS, Android", // Specify supported OS
    applicationCategory: "GameApplication", // General category
    offers: [
      // Offer for App Store
      {
        "@type": "Offer",
        price: "0", // Assuming free with potential IAPs
        priceCurrency: "USD", // Standard currency
        availability: "https://schema.org/InStock", // Indicate it's available
        url: dict.appDownload.downloadOptions.appStore.link,
        seller: {
          "@type": "Organization",
          name: "App Store", // Platform name
        },
      },
      // Offer for Google Play
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: dict.appDownload.downloadOptions.googlePlay.link,
        seller: {
          "@type": "Organization",
          name: "Google Play", // Platform name
        },
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Restore WebSite schema
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
      // Restore Organization schema
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
      // WebPage schema (remains the same)
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.appDownload.meta.title,
        description: dict.appDownload.meta.description,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}/#app`,
        },
      },
      softwareApplication, // Include the SoftwareApplication details
    ],
  };

  return (
    <DictionaryProvider dictionary={dict}>
      <MainLayout lang={lang} footerDict={dict.footer}>
        {/* Add JSON-LD to the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="container mx-auto px-4 mt-20">
          <AppDownload />
          <LevelShowcase
              lang={lang}
              levelShowcaseDict={dict.levelShowcase}
              commonDict={dict.common}
          />
        </div>
        <AdContainer/>
        <LocaleSuggest currentLang={lang}/>
      </MainLayout>
    </DictionaryProvider>
  );
}
