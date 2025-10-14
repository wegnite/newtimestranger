import fs from "fs/promises";
import path from "path";
import { load } from "cheerio";

const BASE_INDEX_URL = "https://game8.co/games/Digimon-Story-Time-Stranger";
const HOSTNAME = new URL(BASE_INDEX_URL).hostname;
const MAX_PAGES = 40;
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const OUTPUT_DIR = path.join(
  process.cwd(),
  "data",
  "time-stranger-guides",
  "game8",
);

type Section = {
  heading: string;
  level: number;
  content: string[];
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
  outline: OutlineItem[];
  sections: Section[];
  retrievedAt: string;
  storedFile: string;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || "time-stranger-guide";
}

function canonicalGame8Url(rawUrl: string): string {
  const url = new URL(rawUrl, BASE_INDEX_URL);
  url.search = "";
  url.hash = "";
  return url.toString();
}

function withOutputParam(rawUrl: string): string {
  const url = new URL(rawUrl, BASE_INDEX_URL);
  if (!url.searchParams.has("output")) {
    url.searchParams.set("output", "1");
  }
  return url.toString();
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

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

function getContentRoot($: ReturnType<typeof load>) {
  const main = $(".p-archiveContent__main").first();
  if (main.length) return main;
  const article = $("article").first();
  if (article.length) return article;
  const body = $("body");
  return body;
}

function extractSections(html: string): {
  title: string;
  summary: string;
  outline: OutlineItem[];
  sections: Section[];
} {
  const $ = load(html);
  const title = $("title").first().text().trim() || "Untitled";
  const root = getContentRoot($);

  const sections: Section[] = [];
  const outline: OutlineItem[] = [];
  let currentSection: Section | null = null;

  root
    .find("h1, h2, h3, h4, p, ul, ol")
    .each((_, el) => {
      const tagName = el.tagName?.toLowerCase();
      if (!tagName) return;

      if (["h1", "h2", "h3", "h4"].includes(tagName)) {
        const level = Number.parseInt(tagName.replace("h", ""), 10);
        const headingText = $(el).text().replace(/\s+/g, " ").trim();
        if (!headingText) return;
        const id = $(el).attr("id") || undefined;
        outline.push({ title: headingText, level, id });

        if (level === 1 && sections.length === 0) {
          currentSection = {
            heading: headingText,
            level,
            content: [],
          };
          sections.push(currentSection);
          return;
        }

        currentSection = {
          heading: headingText,
          level,
          content: [],
        };
        sections.push(currentSection);
        return;
      }

      if (tagName === "p") {
        const text = $(el).text().replace(/\s+/g, " ").trim();
        if (!text) return;
        if (!currentSection) {
          currentSection = {
            heading: "简介",
            level: 1,
            content: [],
          };
          sections.push(currentSection);
        }
        currentSection.content.push(text);
        return;
      }

      if (tagName === "ul" || tagName === "ol") {
        const items = $(el)
          .find("> li")
          .map((_, li) => $(li).text().replace(/\s+/g, " ").trim())
          .get()
          .filter(Boolean);
        if (!items.length) return;
        if (!currentSection) {
          currentSection = {
            heading: "要点列表",
            level: 1,
            content: [],
          };
          sections.push(currentSection);
        }
        const prefix = tagName === "ol" ? "1." : "-";
        currentSection.content.push(
          items.map((item) => `${prefix} ${item}`).join("\n"),
        );
      }
    });

  const summary = sections
    .flatMap((section) => section.content)
    .filter(Boolean)
    .slice(0, 3)
    .join("\n\n") || "未能提取到摘要内容。";

  return { title, summary, outline, sections };
}

function renderOutline(outline: OutlineItem[]): string {
  if (!outline.length) {
    return "暂无目录。";
  }
  return outline
    .map((item) => {
      const indent = "  ".repeat(Math.max(0, item.level - 1));
      const label = item.id ? `[${item.title}](#${item.id})` : item.title;
      return `${indent}- ${label}`;
    })
    .join("\n");
}

function renderSections(sections: Section[]): string {
  if (!sections.length) {
    return "_暂无结构化内容。_";
  }
  return sections
    .map((section) => {
      const headingPrefix = "#".repeat(Math.min(section.level + 1, 6));
      const body = section.content
        .map((block) =>
          block
            .split("\n")
            .map((line) => line.trim())
            .join("\n"),
        )
        .join("\n\n");
      return `${headingPrefix} ${section.heading}\n\n${body}`;
    })
    .join("\n\n");
}

async function saveGuide(record: GuideRecord): Promise<void> {
  const filePath = path.join(OUTPUT_DIR, record.storedFile);
  const markdown = `---
source: ${record.url}
title: ${record.title}
retrievedAt: ${record.retrievedAt}
---

# ${record.title}

${record.summary}

---

## 目录结构

${renderOutline(record.outline)}

---

## 详细内容

${renderSections(record.sections)}
`;
  await fs.writeFile(filePath, markdown, "utf8");
}

async function saveIndex(records: GuideRecord[]): Promise<void> {
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  await fs.writeFile(indexPath, JSON.stringify(records, null, 2), "utf8");
}

function collectLinks(html: string, currentUrl: string): string[] {
  const $ = load(html);
  const root = getContentRoot($);
  const links = new Set<string>();

  root.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    if (href.startsWith("javascript:")) return;
    const resolved = new URL(href, currentUrl);
    if (resolved.hostname !== HOSTNAME) return;
    if (!resolved.pathname.startsWith("/games/Digimon-Story-Time-Stranger"))
      return;
    const canonical = canonicalGame8Url(resolved.toString());
    links.add(canonical);
  });

  return Array.from(links);
}

async function main() {
  console.log("🔎 正在抓取 Game8 Time Stranger 站内页面...");
  await resetOutputDir();

  const queue: string[] = [canonicalGame8Url(BASE_INDEX_URL)];
  const visited = new Set<string>();
  const records: GuideRecord[] = [];

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    const url = queue.shift();
    if (!url || visited.has(url)) continue;

    visited.add(url);

    try {
      console.log(`➡️  抓取 ${url}`);
      const html = await fetchHtml(withOutputParam(url));
      const { title, summary, outline, sections } = extractSections(html);
      const slug = slugify(`${title}-${url}`);
      const record: GuideRecord = {
        title,
        url,
        summary,
        outline,
        sections,
        retrievedAt: new Date().toISOString(),
        storedFile: `${slug}.md`,
      };
      await saveGuide(record);
      records.push(record);

      const newLinks = collectLinks(html, url);
      for (const link of newLinks) {
        if (!visited.has(link) && !queue.includes(link) && records.length + queue.length < MAX_PAGES + 20) {
          queue.push(link);
        }
      }
    } catch (error) {
      console.error(`❌ 抓取失败 ${url}:`, error);
    }
  }

  await saveIndex(records);
  console.log(`✅ 已整理 ${records.length} 篇 Game8 攻略到 ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error("程序运行失败:", error);
  process.exitCode = 1;
});
