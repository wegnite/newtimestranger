import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { Locale, i18n } from "@/i18n";
import {
  getWalkthroughPostBySlug,
  generateWalkthroughStaticParams,
} from "@/lib/walkthrough";
import { WalkthroughLayout } from "@/components/walkthrough/walkthrough-layout";
import { WalkthroughContent } from "@/components/walkthrough/walkthrough-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, BookOpen, Download } from "lucide-react";
import { LevelShowcase } from "@/components/sections/level-showcase";

interface Props {
  params: { lang: string; slug: string };
}

export async function generateStaticParams() {
  return generateWalkthroughStaticParams();
}

export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const post = await getWalkthroughPostBySlug(lang, slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} - ${dict.walkthrough.meta.title}`,
    description: post.excerpt || dict.walkthrough.meta.description,
    keywords: [
      `digimon story time stranger ${post.slug}`,
      `digimon walkthrough ${post.title}`,
      post.category === "main-storyline"
        ? "main storyline guide"
        : "side quest guide",
      ...post.tags,
    ],
    openGraph: {
      title: `${post.title} - ${dict.walkthrough.meta.title}`,
      description: post.excerpt || dict.walkthrough.meta.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough/${slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/walkthrough/${slug}`,
        ])
      ),
    },
  };
}

export default async function WalkthroughPost({
  params: { lang, slug },
}: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const post = await getWalkthroughPostBySlug(lang, slug);

  if (!post) {
    notFound();
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough/${slug}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Digimon Story Time Stranger Walkthrough",
    },
    publisher: {
      "@type": "Organization",
      name: "Digimon Story Time Stranger Walkthrough",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/walkthrough/${slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection:
      post.category === "main-storyline" ? "Main Storyline" : "Side Quests",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WalkthroughLayout
        title={post.title}
        breadcrumbs={[
          {
            label: dict.walkthrough.breadcrumbs.walkthrough,
            href: `/${lang}/walkthrough`,
          },
          { label: post.title },
        ]}
        lang={lang}
        date={post.date}
        category={post.category}
        difficulty={post.difficulty}
        estimatedTime={post.estimatedTime}
        chapter={post.chapter}
      >
        <div className="max-w-4xl mx-auto">
          <WalkthroughContent post={post} hideTitle />

          {/* Related Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Related Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href={`/${lang}/walkthrough`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {dict.walkthrough.actions.backToList}
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={`/${lang}/digimon-list`}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Digimon List
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href={`/${lang}/download`}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Game
                </Link>
              </Button>
            </div>
          </div>

          <LevelShowcase
            lang={lang as Locale}
            levelShowcaseDict={dict.levelShowcase}
            commonDict={dict.common}
          />
        </div>
      </WalkthroughLayout>
    </>
  );
}
