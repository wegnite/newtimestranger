import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { ensureTrailingSlash } from "@/lib/utils";
import DigimonDetailContent from "./components/digimon-detail-content";
import digimonList from "@/data/digimon-list.json";
import { LevelShowcase } from "@/components/sections/level-showcase";

// 为所有语言和数码宝贝生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string; name: string }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    // 遍历所有数码宝贝
    for (const digimon of digimonList) {
      paths.push({
        lang,
        name: digimon.name.toLowerCase().replace(/\s+/g, "-"),
      });
    }
  }

  return paths;
}

interface Props {
  params: { lang: string; name: string };
}

export async function generateMetadata({
  params: { lang, name },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  // 根据 URL 参数找到对应的数码宝贝
  const digimonName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const digimon = digimonList.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!digimon) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.digimonDetail.meta.title.replace("{name}", digimon.name),
    description: dict.digimonDetail.meta.description
      .replace("{name}", digimon.name)
      .replace("{generation}", digimon.Generation)
      .replace("{type}", digimon.type)
      .replace("{attribute}", digimon["Attribute-text"]),
    keywords: `${digimon.name}, digimon, ${digimon.Generation}, ${digimon.type}, ${digimon["Attribute-text"]}, digimon story time stranger`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/digimon-list/${name}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/digimon-list/${name}`),
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
      title: dict.digimonDetail.meta.title.replace("{name}", digimon.name),
      description: dict.digimonDetail.meta.description
        .replace("{name}", digimon.name)
        .replace("{generation}", digimon.Generation)
        .replace("{type}", digimon.type)
        .replace("{attribute}", digimon["Attribute-text"]),
      images: [digimon["digimon-img-src"]],
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/digimon-list/${name}`,
    },
  };
}

export default async function DigimonDetailPage({
  params: { lang, name },
}: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  // 根据 URL 参数找到对应的数码宝贝
  const digimon = digimonList.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, "-") === name
  );

  if (!digimon) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/${lang}/digimon-list/${name}`;

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
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${digimon.name} - Digimon Story Time Stranger Walkthrough`,
        description: `${digimon.name} is a ${digimon.Generation} level ${digimon.type} Digimon with ${digimon["Attribute-text"]} attribute`,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}/#digimon`,
        },
      },
      {
        "@type": "Thing",
        "@id": `${pageUrl}/#digimon`,
        name: digimon.name,
        description: `${digimon.name} is a ${digimon.Generation} level ${digimon.type} Digimon with ${digimon["Attribute-text"]} attribute`,
        image: {
          "@type": "ImageObject",
          url: digimon["digimon-img-src"],
          name: `${digimon.name} Digimon Icon`,
          description: `Official icon of ${digimon.name} from Digimon Story Time Stranger`,
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Generation",
            value: digimon.Generation,
          },
          {
            "@type": "PropertyValue",
            name: "Attribute",
            value: digimon["Attribute-text"],
          },
          {
            "@type": "PropertyValue",
            name: "Type",
            value: digimon.type,
          },
          {
            "@type": "PropertyValue",
            name: "Personality",
            value: digimon.Personality,
          },
          {
            "@type": "PropertyValue",
            name: "Location",
            value: digimon.location,
          },
        ],
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
      <DigimonDetailContent
        digimon={digimon}
        lang={lang as Locale}
        dict={dict}
      />

      <LevelShowcase
        lang={lang as Locale}
        levelShowcaseDict={dict.levelShowcase}
        commonDict={dict.common}
      />
    </>
  );
}
