import { type BlogPost, getAllPosts, getPostBySlug } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";
import { Pagination } from "@/components/blog/pagination";
import { PostContent } from "@/components/blog/post-content";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/blog/blog-layout";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { ensureTrailingSlash } from "@/lib/utils";
import { buildAbsoluteUrl, getSiteName, getSiteUrl } from "@/lib/siteConfig";

interface Props {
  params: { lang: string; uri: string[] };
}

// 生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string; uri: string[] }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    const posts = await getAllPosts(lang);

    // 添加文章页面路径
    paths.push(
      ...posts.map((post) => ({
        lang,
        uri: [post.slug],
      })),
    );

    // 添加分页路径
    const totalPages = Math.ceil(posts.length / 10);
    for (let page = 1; page <= totalPages; page++) {
      paths.push({
        lang,
        uri: [page.toString()],
      });
    }
  }

  return paths;
}

export async function generateMetadata({
  params: { lang, uri },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  // Handle pagination route /blog/2
  if (uri.length === 1 && !isNaN(Number(uri[0]))) {
    const page = parseInt(uri[0]);
    return {
      title: {
        template: `%s | Dreamy Room`,
        default: `${dict.blog.posts.title} - ${dict.blog.breadcrumbs.page.replace("{0}", page.toString())}`,
      },
      description: dict.blog.subtitle,
      alternates: {
        canonical: buildAbsoluteUrl(`/${lang}/blog/${page}`),
        languages: {
          "x-default": ensureTrailingSlash(`/${lang}/blog/${page}`),
        },
      },
    };
  }

  // Handle blog post content /blog/article-slug
  const post = await getPostBySlug(lang, uri[0]);
  if (!post) {
    notFound();
  }

  const articleUrl = buildAbsoluteUrl(`/${lang}/blog/${uri[0]}`);

  return {
    title: {
      template: `%s | Dreamy Room Blog`,
      default: post.title,
    },
    description: post.excerpt,
    alternates: {
      canonical: articleUrl,
      languages: {
        "x-default": ensureTrailingSlash(`/${lang}/blog/${uri[0]}`),
      },
    },
    openGraph: {
      title: `${post.title} | Dreamy Room Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: articleUrl,
      tags: post.tags,
    },
  };
}

export default async function BlogPost({ params: { lang, uri } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  // Handle pagination route /blog/2
  if (uri.length === 1 && !isNaN(Number(uri[0]))) {
    const page = parseInt(uri[0]);
    const postsPerPage = 10;
    const posts = await getAllPosts(lang);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    if (page < 1 || page > totalPages) {
      notFound();
    }

    const paginatedPosts = posts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage,
    );

    const pageUrl = buildAbsoluteUrl(`/${lang}/blog/${page}`);
    const organizationId = `${getSiteUrl()}/#organization`;

    const collectionJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      url: pageUrl,
      name: `${dict.blog.posts.title} - ${dict.blog.breadcrumbs.page.replace(
        "{0}",
        page.toString(),
      )}`,
      description: dict.blog.subtitle,
      inLanguage: lang,
      isPartOf: {
        "@type": "Blog",
        "@id": `${buildAbsoluteUrl(`/${lang}/blog`)}#blog`,
      },
      publisher: {
        "@type": "Organization",
        "@id": organizationId,
        name: getSiteName(),
      },
      hasPart: paginatedPosts.map((post: BlogPost) => {
        const articleUrl = buildAbsoluteUrl(`/${lang}/blog/${post.slug}`);
        return {
          "@type": "BlogPosting",
          "@id": `${articleUrl}#entry`,
          url: articleUrl,
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
          item: buildAbsoluteUrl(`/${lang}/blog`),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: dict.blog.breadcrumbs.page.replace("{0}", page.toString()),
          item: pageUrl,
        },
      ],
    };

    return (
      <BlogLayout
        title={dict.blog.posts.title}
        breadcrumbs={[
          {
            label: dict.blog.breadcrumbs.page.replace("{0}", page.toString()),
          },
        ]}
        lang={lang}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([collectionJsonLd, breadcrumbJsonLd]),
          }}
        />
        <PostList posts={paginatedPosts} lang={lang} />
        <div className="mt-12">
          <Pagination currentPage={page} totalPages={totalPages} lang={lang} />
        </div>
      </BlogLayout>
    );
  }

  // Handle blog post content /blog/article-slug
  const post = await getPostBySlug(lang, uri[0]);

  if (!post) {
    notFound();
  }

  const articleUrl = buildAbsoluteUrl(`/${lang}/blog/${uri[0]}`);
  const organizationId = `${getSiteUrl()}/#organization`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#entry`,
    url: articleUrl,
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    inLanguage: lang,
    isPartOf: {
      "@type": "Blog",
      "@id": `${buildAbsoluteUrl(`/${lang}/blog`)}#blog`,
      name: dict.blog.title,
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: getSiteName(),
    },
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
        item: buildAbsoluteUrl(`/${lang}/blog`),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <BlogLayout
      title={post.title}
      breadcrumbs={[{ label: post.title }]}
      lang={lang}
      date={post.date}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
      />
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <PostContent post={post} hideTitle />
      </div>
    </BlogLayout>
  );
}
