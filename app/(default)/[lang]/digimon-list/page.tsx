import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { ensureTrailingSlash } from "@/lib/utils";
import DigimonListContent from "./components/digimon-list-content";

// 为所有语言生成静态路径
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.digimonList.meta.title,
    description: dict.digimonList.meta.description,
    keywords:
      "digimon story time stranger digimon list, digimon list, digimon story time stranger, all digimon, digimon guide, digimon stats",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/digimon-list`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/digimon-list`),
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
    openGraph: {
      title: dict.digimonList.meta.title,
      description: dict.digimonList.meta.description,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/digimon-list`,
    },
  };
}

export default async function DigimonListPage({ params: { lang } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/${lang}/digimon-list`;

  // 生成结构化数据
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Digimon Story Time Stranger Walkthrough",
        logo: `${siteUrl}/images/logo.webp`,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/${lang}/digimon-list?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: dict.digimonList.meta.title,
        description: dict.digimonList.meta.description,
        inLanguage: lang as Locale,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": `${pageUrl}/#digimon-list`,
          name: "Complete Digimon List",
          description: "All 459 Digimon in Digimon Story Time Stranger",
          numberOfItems: 459,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Digimon Story Time Stranger Walkthrough",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/images/logo.webp`,
          url: `${siteUrl}/images/logo.webp`,
        },
        description:
          "Your reliable source for Digimon Story Time Stranger game guides and walkthroughs.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigimonListContent lang={lang as Locale} dict={dict} />
    </>
  );
}
