import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { Locale, i18n } from "@/i18n";
import { getAllWalkthroughPosts } from "@/lib/walkthrough";
import { WalkthroughLayout } from "@/components/walkthrough/walkthrough-layout";
import { MainStorylineList } from "@/components/walkthrough/main-storyline-list";

interface Props {
  params: { lang: string };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.walkthrough.meta.title,
    description: dict.walkthrough.meta.description,
    keywords: [
      "digimon story time stranger walkthrough",
      "digimon story time stranger guide",
      "digimon story time stranger main missions",
      "digimon story time stranger complete guide",
      "digimon walkthrough",
      "digimon story time stranger walkthrough guide",
      "main storyline guide",
      "side quests guide",
    ],
    openGraph: {
      title: dict.walkthrough.meta.title,
      description: dict.walkthrough.meta.description,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/walkthrough`,
        ])
      ),
    },
  };
}

export default async function WalkthroughIndex({ params: { lang } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const posts = await getAllWalkthroughPosts(lang);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: dict.walkthrough.meta.title,
    description: dict.walkthrough.meta.description,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough`,
    keywords:
      "digimon story time stranger walkthrough, digimon story time stranger guide, digimon story time stranger main missions",
    about: {
      "@type": "VideoGame",
      name: "Digimon Story Time Stranger",
      description:
        "A comprehensive walkthrough guide for Digimon Story Time Stranger main missions",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 10).map((post, index) => ({
        "@type": "Article",
        position: index + 1,
        name: post.title,
        description: post.excerpt,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough/${post.slug}`,
        datePublished: post.date,
        author: {
          "@type": "Organization",
          name: "Digimon Story Time Stranger Guide",
        },
        about: {
          "@type": "VideoGame",
          name: "Digimon Story Time Stranger",
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WalkthroughLayout
        title={dict.walkthrough.title}
        subtitle={dict.walkthrough.subtitle}
        lang={lang}
      >
        <div className="space-y-12">
          {/* Main Storyline Section */}
          <section>
            <MainStorylineList lang={lang} posts={posts} />
          </section>
        </div>
      </WalkthroughLayout>
    </>
  );
}
