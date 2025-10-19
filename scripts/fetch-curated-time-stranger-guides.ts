import fs from "fs/promises";
import path from "path";
import { load } from "cheerio";

const TARGET_GUIDES = [
  "https://game8.co/games/Digimon-Story-Time-Stranger/archives/553555?output=1",
  "https://www.neoseeker.com/digimon-story-time-stranger/walkthrough",
];

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const OUTPUT_DIR = path.join(
  process.cwd(),
  "data",
  "time-stranger-guides",
  "curated",
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
  retrievedAt: string;
  storedFile: string;
  summary: string;
  outline: OutlineItem[];
  sections: Section[];
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100) || "time-stranger-guide";
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

function getContentRoot($: ReturnType<typeof load>, url: string) {
  try {
    const hostname = new URL(url).hostname;
    if (hostname.includes("game8.co")) {
      const main = $(".p-archiveContent__main").first();
      if (main.length) return main;
    }
    if (hostname.includes("neoseeker.com")) {
      const container =
        $("#content .content").first().length > 0
          ? $("#content .content").first()
          : $("#content").first();
      if (container.length) return container;
    }
  } catch (error) {
    console.warn("无法解析 URL，使用默认根节点:", error);
  }

  const article =
    $("article").first().length > 0
      ? $("article").first()
      : $("main").first().length > 0
        ? $("main").first()
        : $("body");
  return article;
}

function extractSections(html: string, url: string): {
  title: string;
  summary: string;
  outline: OutlineItem[];
  sections: Section[];
} {
  const $ = load(html);
  const pageTitle = $("title").first().text().trim() || "Untitled";
  const root = getContentRoot($, url);

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

        if (level === 1 && sections.length === 0 && headingText === pageTitle) {
          currentSection = null;
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
    .join("\n\n");

  return {
    title: pageTitle,
    summary: summary || "未能提取到摘要内容。",
    outline,
    sections,
  };
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
          block.includes("\n")
            ? block
                .split("\n")
                .map((line) => line.trim())
                .join("\n")
            : block,
        )
        .join("\n\n");
      return `${headingPrefix} ${section.heading}\n\n${body}`;
    })
    .join("\n\n");
}

async function saveGuide(guide: GuideRecord): Promise<void> {
  const filePath = path.join(OUTPUT_DIR, guide.storedFile);
  const markdown = `---
source: ${guide.url}
title: ${guide.title}
retrievedAt: ${guide.retrievedAt}
---

# ${guide.title}

${guide.summary}

---

## 目录结构

${renderOutline(guide.outline)}

---

## 详细内容

${renderSections(guide.sections)}
`;
  await fs.writeFile(filePath, markdown, "utf8");
}

async function saveIndex(guides: GuideRecord[]): Promise<void> {
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  await fs.writeFile(indexPath, JSON.stringify(guides, null, 2), "utf8");
}

async function main() {
  console.log("🔎 正在抓取精选 Time Stranger 攻略...");
  await resetOutputDir();

  const collected: GuideRecord[] = [];

  for (const url of TARGET_GUIDES) {
    try {
      console.log(`➡️  抓取 ${url}`);
      const html = await fetchHtml(url);
      const canonicalUrl = url.split("?")[0];
      const { title, summary, outline, sections } = extractSections(
        html,
        url,
      );
      const slug = slugify(`${title}-${canonicalUrl}`);
      const record: GuideRecord = {
        title,
        url: canonicalUrl,
        summary,
        outline,
        sections,
        retrievedAt: new Date().toISOString(),
        storedFile: `${slug}.md`,
      };
      await saveGuide(record);
      collected.push(record);
    } catch (error) {
      console.error(`❌ 抓取失败 ${url}:`, error);
    }
  }

  await saveIndex(collected);
  console.log(`✅ 已整理 ${collected.length} 篇攻略到 ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error("程序运行失败:", error);
  process.exitCode = 1;
});
