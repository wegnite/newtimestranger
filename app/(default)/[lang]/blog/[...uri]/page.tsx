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
        template: `%s | Knit Out`,
        default: `${dict.blog.posts.title} - ${dict.blog.breadcrumbs.page.replace("{0}", page.toString())}`,
      },
      description: dict.blog.subtitle,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blog/${page}`,
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

  return {
    title: {
      template: `%s | Knit Out Blog`,
      default: post.title,
    },
    description: post.excerpt,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blog/${uri[0]}`,
      languages: {
        "x-default": ensureTrailingSlash(`/${lang}/blog/${uri[0]}`),
      },
    },
    openGraph: {
      title: `${post.title} | Knit Out Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: ensureTrailingSlash(`/${lang}/blog/${uri[0]}`),
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

  return (
    <BlogLayout
      title={post.title}
      breadcrumbs={[{ label: post.title }]}
      lang={lang}
      date={post.date}
    >
      <div className="max-w-4xl mx-auto prose dark:prose-invert">
        <PostContent post={post} hideTitle />
      </div>
    </BlogLayout>
  );
}
