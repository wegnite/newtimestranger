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

type SearchResult = {
  title: string;
  url: string;
};

type GuideSummary = {
  title: string;
  url: string;
  summary: string;
  retrievedAt: string;
  storedFile: string;
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

function extractSummary(html: string): { title: string; excerpt: string } {
  const $ = load(html);
  const title = $("title").first().text().trim() || "Untitled";
  const paragraphs = $("p")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
    .slice(0, PARAGRAPH_LIMIT);

  const excerpt = paragraphs.join("\n\n");
  return {
    title,
    excerpt: excerpt || "No paragraph content extracted from this page.",
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

async function ensureOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function saveGuide(
  guide: GuideSummary,
  content: string,
): Promise<void> {
  const filePath = path.join(OUTPUT_DIR, guide.storedFile);
  const markdown = `---
source: ${guide.url}
title: ${guide.title}
retrievedAt: ${guide.retrievedAt}
---

# ${guide.title}

${guide.summary}

---

## Raw Extract

${content}
`;
  await fs.writeFile(filePath, markdown, "utf8");
}

async function saveIndex(guides: GuideSummary[]): Promise<void> {
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  await fs.writeFile(indexPath, JSON.stringify(guides, null, 2), "utf8");
}

async function main() {
  console.log("🔎 Searching for Time Stranger guides...");
  await ensureOutputDir();

  const searchResults = await fetchSearchResults(SEARCH_QUERY);
  if (!searchResults.length) {
    console.warn("No search results found for query:", SEARCH_QUERY);
    return;
  }

  const collectedGuides: GuideSummary[] = [];

  for (const result of searchResults) {
    try {
      console.log(`➡️  Fetching: ${result.url}`);
      const html = await fetchGuideContent(result.url);
      const { title, excerpt } = extractSummary(html);
      const slug = slugify(`${title}-${result.url}`);
      const storedFile = `${slug}.md`;

      const guideSummary: GuideSummary = {
        title,
        url: result.url,
        summary: excerpt,
        retrievedAt: new Date().toISOString(),
        storedFile,
      };

      await saveGuide(guideSummary, excerpt);
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
