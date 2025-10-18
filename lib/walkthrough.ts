import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WALKTHROUGH_DIR = path.join(process.cwd(), "walkthrough/posts");
const CACHE_DIR = path.join(process.cwd(), ".cache/walkthrough");

export interface WalkthroughPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: "main-storyline" | "side-quests";
  chapter?: number;
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert";
  estimatedTime?: string;
  questType?: string;
}

interface FrontMatter {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  category: "main-storyline" | "side-quests";
  chapter?: number;
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert";
  estimatedTime?: string;
  questType?: string;
}

interface CacheData {
  posts: WalkthroughPost[];
  tags: string[];
}

const postsCache: Record<string, WalkthroughPost[]> = {};
const tagsCache: Record<string, string[]> = {};

export async function getAllWalkthroughPosts(
  lang: string
): Promise<WalkthroughPost[]> {
  const files = fs.readdirSync(path.join(WALKTHROUGH_DIR, lang));

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(
        path.join(WALKTHROUGH_DIR, lang, file),
        "utf-8"
      );
      const { data, content } = matter(source) as unknown as {
        data: Required<FrontMatter>;
        content: string;
      };

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        content,
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category: data.category,
        chapter: data.chapter,
        difficulty: data.difficulty,
        estimatedTime: data.estimatedTime,
        questType: data.questType,
      };
    })
    .sort((a, b) => {
      // Sort by category first, then by chapter number
      if (a.category !== b.category) {
        return a.category === "main-storyline" ? -1 : 1;
      }
      if (a.chapter && b.chapter) {
        return a.chapter - b.chapter;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export async function getWalkthroughPostBySlug(
  lang: string,
  slug: string
): Promise<WalkthroughPost | null> {
  const posts = await getAllWalkthroughPosts(lang);
  // Decode the URL-encoded slug to match with the original filename
  const decodedSlug = decodeURIComponent(slug);
  return posts.find((post) => post.slug === decodedSlug) || null;
}

export async function getCachedWalkthroughPosts(
  lang: string
): Promise<WalkthroughPost[]> {
  if (postsCache[lang]) {
    return postsCache[lang];
  }

  const posts = await getAllWalkthroughPosts(lang);
  postsCache[lang] = posts;
  return posts;
}

export async function getAllWalkthroughTags(lang: string): Promise<string[]> {
  if (tagsCache[lang]) {
    return tagsCache[lang];
  }

  const posts = await getAllWalkthroughPosts(lang);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  tagsCache[lang] = tags;
  return tags;
}

export async function generateWalkthroughStaticParams() {
  const languages = ["en", "zh", "ja", "ko", "de", "fr", "tw"];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of languages) {
    try {
      const langDir = path.join(WALKTHROUGH_DIR, lang);
      if (!fs.existsSync(langDir)) {
        console.warn(`Walkthrough directory not found for language: ${lang}`);
        continue;
      }

      const posts = await getAllWalkthroughPosts(lang);
      for (const post of posts) {
        // URL encode the slug to handle spaces and special characters
        const encodedSlug = encodeURIComponent(post.slug);
        params.push({ lang, slug: encodedSlug });
      }
    } catch (error) {
      console.warn(`No walkthrough posts found for language: ${lang}`, error);
    }
  }

  console.log(`Generated ${params.length} static params for walkthrough pages`);
  return params;
}
