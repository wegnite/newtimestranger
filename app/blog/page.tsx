import { type BlogPost, getCachedPosts } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";
import { Pagination } from "@/components/blog/pagination";
import { BlogLayout } from "@/components/blog/blog-layout";
import { getDictionary } from "@/lib/dictionary";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

const POSTS_PER_PAGE = 10;

export async function generateMetadata() {
  const dict = await getDictionary('en');
  return {
    title: {
      template: `%s | Knit Out`,
      default: dict.blog.title,
    },
    description: dict.blog.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    },
  };
}

export default async function BlogIndex() {
  // 默认使用英文
  const lang = 'en';
  const dict = await getDictionary(lang);
  const currentPage = 1; // 默认第一页，分页通过动态路由处理
  const posts = await getCachedPosts(lang);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <DictionaryProvider dictionary={dict}>
      <MainLayout lang={lang} footerDict={dict.footer}>
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
