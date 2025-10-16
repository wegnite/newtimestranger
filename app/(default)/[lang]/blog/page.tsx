import { type BlogPost, getCachedPosts } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";
import { Pagination } from "@/components/blog/pagination";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/blog/blog-layout";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { ensureTrailingSlash } from "@/lib/utils";

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

  return {
    title: {
      template: `%s | Knit Out`,
      default: dict.blog.title,
    },
    description: dict.blog.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blog`,
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

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

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
