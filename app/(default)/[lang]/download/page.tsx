import AppDownload from "@/components/sections/app-download";
import SystemRequirements from "@/components/sections/system-requirements";
import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/i18n";
import { ensureTrailingSlash } from "@/lib/utils";
import { LevelShowcase } from "@/components/sections/level-showcase";

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
}) {
  const dict = await getDictionary(lang);
  return {
    title: dict.appDownload.meta.title,
    description: dict.appDownload.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/download`,
      languages: Object.fromEntries(
        i18n.locales.map((locale: Locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/download`),
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
      },
    },
  };
}

export default async function DownloadPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/${lang}/download`;
  const logoUrl = siteUrl + "/images/logo.webp";
  const searchUrlTemplate = `${siteUrl}/${lang}/level?search={search_term_string}`;

  // Prepare SoftwareApplication data
  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}/#app`, // Unique ID for the application on this page
    name: dict.appDownload.title,
    description: dict.appDownload.subtitle,
    operatingSystem: "Windows, PlayStation, Xbox", // Specify supported OS
    applicationCategory: "GameApplication", // General category
    offers: [
      // Offer for Steam
      {
        "@type": "Offer",
        price: "59.99", // Estimated price
        priceCurrency: "USD", // Standard currency
        availability: "https://schema.org/InStock", // Indicate it's available
        url: dict.appDownload.downloadOptions.steam.link,
        seller: {
          "@type": "Organization",
          name: "Steam", // Platform name
        },
      },
      // Offer for PlayStation Store
      {
        "@type": "Offer",
        price: "59.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: dict.appDownload.downloadOptions.playstation.link,
        seller: {
          "@type": "Organization",
          name: "PlayStation Store", // Platform name
        },
      },
      // Offer for Xbox Store
      {
        "@type": "Offer",
        price: "59.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: dict.appDownload.downloadOptions.xbox.link,
        seller: {
          "@type": "Organization",
          name: "Xbox Store", // Platform name
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
        name: dict.home?.meta?.siteName || "Digimon Story Time Stranger Walkthrough",
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
        name: dict.home?.meta?.siteName || "Digimon Story Time Stranger Walkthrough",
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
    <>
      {/* Add JSON-LD to the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 mt-20">
        <AppDownload />
        <SystemRequirements />
        <LevelShowcase
          lang={lang}
          levelShowcaseDict={dict.levelShowcase}
          commonDict={dict.common}
        />
      </div>
    </>
  );
}
