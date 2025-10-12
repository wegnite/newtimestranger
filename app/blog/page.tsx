import { type BlogPost, getCachedPosts } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";
import { Pagination } from "@/components/blog/pagination";
import { BlogLayout } from "@/components/blog/blog-layout";
import { getDictionary } from "@/lib/dictionary";
import { MainLayout } from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import { LocaleSuggest } from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";
import { buildAbsoluteUrl, getSiteName, getSiteUrl } from "@/lib/siteConfig";

const POSTS_PER_PAGE = 10;

export async function generateMetadata() {
  const dict = await getDictionary("en");
  const canonical = buildAbsoluteUrl("/blog");
  return {
    title: {
      template: `%s | Dreamy Room`,
      default: dict.blog.title,
    },
    description: dict.blog.subtitle,
    alternates: {
      canonical,
    },
  };
}

export default async function BlogIndex() {
  // 默认使用英文
  const lang = "en";
  const dict = await getDictionary(lang);
  const currentPage = 1; // 默认第一页，分页通过动态路由处理
  const posts = await getCachedPosts(lang);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const canonicalUrl = buildAbsoluteUrl("/blog");
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
      const articleUrl = buildAbsoluteUrl(`/blog/${post.slug}`);
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
        item: canonicalUrl,
      },
    ],
  };

  return (
    <DictionaryProvider dictionary={dict}>
      <MainLayout lang={lang} footerDict={dict.footer}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([blogListJsonLd, breadcrumbJsonLd]),
          }}
        />
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
        <AdContainer/>
        <LocaleSuggest currentLang={lang}/>
      </MainLayout>
    </DictionaryProvider>
  );
}
