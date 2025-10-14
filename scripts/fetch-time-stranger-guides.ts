import fs from "fs/promises";
import path from "path";
import { load } from "cheerio";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const SEARCH_QUERY = "Time Stranger game guide walkthrough";
const SEARCH_ENDPOINT = "https://html.duckduckgo.com/html/";
const OUTPUT_DIR = path.join(process.cwd(), "data", "time-stranger-guides");
const MAX_RESULTS = 6;
const PARAGRAPH_LIMIT = 12;
const MAX_OUTLINE_LEVEL = 4;

type SearchResult = {
  title: string;
  url: string;
};

type OutlineItem = {
  title: string;
  level: number;
  id?: string;
};

type GuideRecord = {
  title: string;
  url: string;
  summary: string;
  retrievedAt: string;
  storedFile: string;
  outline: OutlineItem[];
};

function decodeDuckDuckGoRedirect(rawUrl: string): string | null {
  if (!rawUrl) return null;
  try {
    const url = new URL(rawUrl, "https://html.duckduckgo.com");
    if (url.hostname.endsWith("duckduckgo.com")) {
      const uddg = url.searchParams.get("uddg");
      if (uddg) {
        return decodeURIComponent(uddg);
      }
    }
    return url.href;
  } catch {
    return null;
  }
}

async function fetchSearchResults(query: string): Promise<SearchResult[]> {
  const params = new URLSearchParams({ q: query, ia: "web" });
  const response = await fetch(`${SEARCH_ENDPOINT}?${params.toString()}`, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!response.ok) {
    throw new Error(
      `DuckDuckGo search failed with status ${response.status}`,
    );
  }

  const html = await response.text();
  const $ = load(html);
  const results: SearchResult[] = [];

  $("a.result__a, a.result__title")
    .filter((_, el) => !!$(el).attr("href"))
    .each((_, el) => {
      if (results.length >= MAX_RESULTS) return false;

      const rawHref = $(el).attr("href") ?? "";
      const resolvedUrl = decodeDuckDuckGoRedirect(rawHref);
      if (!resolvedUrl) return;

      const title = $(el).text().trim();
      if (!title) return;

      results.push({ title, url: resolvedUrl });
      return results.length < MAX_RESULTS;
    });

  return results;
}

async function fetchGuideContent(url: string) {
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

function extractContent(html: string): {
  title: string;
  summary: string;
  paragraphs: string[];
  outline: OutlineItem[];
} {
  const $ = load(html);
  const title = $("title").first().text().trim() || "Untitled";

  const outline: OutlineItem[] = $("h1, h2, h3, h4")
    .map((_, el) => {
      const tagName = el.tagName?.toLowerCase() ?? "";
      const level = Number.parseInt(tagName.replace("h", ""), 10);
      if (!level || level > MAX_OUTLINE_LEVEL) return null;
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (!text) return null;
      return {
        title: text,
        level,
        id: $(el).attr("id") || undefined,
      } as OutlineItem;
    })
    .get()
    .filter((item): item is OutlineItem => item !== null);

  const paragraphs = $("p")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
    .slice(0, PARAGRAPH_LIMIT);

  const excerpt = paragraphs.slice(0, 3).join("\n\n");
  return {
    title,
    summary: excerpt || "No paragraph content extracted from this page.",
    outline,
    paragraphs,
  };
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "time-stranger-guide";
}

async function resetOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const files = await fs.readdir(OUTPUT_DIR);
  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(OUTPUT_DIR, file);
      await fs.rm(filePath, { recursive: true, force: true });
    }),
  );
}

function renderOutlineMarkdown(outline: OutlineItem[]): string {
  if (!outline.length) {
    return "暂无可用的目录结构。";
  }

  return outline
    .map((item) => {
      const indent = "  ".repeat(Math.max(0, item.level - 1));
      const label = item.id ? `[${item.title}](#${item.id})` : item.title;
      return `${indent}- ${label}`;
    })
    .join("\n");
}

async function saveGuide(
  guide: GuideRecord,
  paragraphs: string[],
): Promise<void> {
  const filePath = path.join(OUTPUT_DIR, guide.storedFile);
  const fullExtract =
    paragraphs.length > 0
      ? paragraphs.join("\n\n")
      : "No paragraph content extracted from this page.";

  const markdown = `---
source: ${guide.url}
title: ${guide.title}
retrievedAt: ${guide.retrievedAt}
---

# ${guide.title}

${guide.summary}

---

## Table of Contents

${renderOutlineMarkdown(guide.outline)}

---

## Raw Extract

${fullExtract}
`;
  await fs.writeFile(filePath, markdown, "utf8");
}

async function saveIndex(guides: GuideRecord[]): Promise<void> {
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  await fs.writeFile(indexPath, JSON.stringify(guides, null, 2), "utf8");
}

async function main() {
  console.log("🔎 Searching for Time Stranger guides...");
  await resetOutputDir();

  const searchResults = await fetchSearchResults(SEARCH_QUERY);
  if (!searchResults.length) {
    console.warn("No search results found for query:", SEARCH_QUERY);
    return;
  }

  const collectedGuides: GuideRecord[] = [];

  for (const result of searchResults) {
    try {
      console.log(`➡️  Fetching: ${result.url}`);
      const html = await fetchGuideContent(result.url);
      const { title, summary, outline, paragraphs } = extractContent(html);
      const slug = slugify(`${title}-${result.url}`);
      const storedFile = `${slug}.md`;

      const guideSummary: GuideRecord = {
        title,
        url: result.url,
        summary,
        retrievedAt: new Date().toISOString(),
        storedFile,
        outline,
      };

      await saveGuide(guideSummary, paragraphs);
      collectedGuides.push(guideSummary);
    } catch (error) {
      console.error(`Failed to process ${result.url}:`, error);
    }
  }

  if (collectedGuides.length) {
    await saveIndex(collectedGuides);
    console.log(
      `✅ Collected ${collectedGuides.length} guides into ${OUTPUT_DIR}`,
    );
  } else {
    console.warn("No guides were successfully collected.");
  }
}

main().catch((error) => {
  console.error("Guide scraping failed:", error);
  process.exitCode = 1;
});
