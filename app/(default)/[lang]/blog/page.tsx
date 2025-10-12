import { type BlogPost, getCachedPosts } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";
import { Pagination } from "@/components/blog/pagination";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/blog/blog-layout";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { ensureTrailingSlash } from "@/lib/utils";
import { buildAbsoluteUrl, getSiteName, getSiteUrl } from "@/lib/siteConfig";

// 为所有语言生成静态路径
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

const POSTS_PER_PAGE = 10;

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
  const canonical = buildAbsoluteUrl(`/${lang}/blog`);

  return {
    title: {
      template: `%s | Dreamy Room`,
      default: dict.blog.title,
    },
    description: dict.blog.subtitle,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        i18n.locales.map((locale: Locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/blog`),
        ]),
      ),
    },
  };
}

export default async function BlogIndex({
  params: { lang },
}: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const currentPage = 1; // 默认第一页，分页通过动态路由处理
  const posts = await getCachedPosts(lang);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const canonicalUrl = buildAbsoluteUrl(`/${lang}/blog`);
  const organizationId = `${getSiteUrl()}/#organization`;

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${canonicalUrl}#blog`,
    url: canonicalUrl,
    name: dict.blog.title,
    description: dict.blog.subtitle,
    inLanguage: lang,
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: getSiteName(),
    },
    blogPost: paginatedPosts.map((post: BlogPost) => {
      const postUrl = buildAbsoluteUrl(`/${lang}/blog/${post.slug}`);
      return {
        "@type": "BlogPosting",
        "@id": `${postUrl}#entry`,
        url: postUrl,
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
      };
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.home?.meta?.title || getSiteName(),
        item: getSiteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.blog.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <BlogLayout
      title={dict.blog.title}
      subtitle={dict.blog.subtitle}
      breadcrumbs={
        currentPage > 1
          ? [
              {
                label: dict.blog.breadcrumbs.page.replace(
                  "{0}",
                  currentPage.toString(),
                ),
              },
            ]
          : []
      }
      lang={lang}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogListJsonLd, breadcrumbJsonLd]),
        }}
      />
      <PostList posts={paginatedPosts} lang={lang} />
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            lang={lang}
          />
        </div>
      )}
    </BlogLayout>
  );
}
