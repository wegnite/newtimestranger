/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");

// 添加日期格式化函数
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
}

// 定义所有需要生成的路由
const routes = [
  "", // 首页
  "app",
  "level",
  "blog",
  "privacy",
  "terms-of-service",
  "about",
  "game",
];

// 定义所有支持的语言
const locales = [
  "en",
  "zh",
];

// 读取关卡数据
const levelsPath = path.join(process.cwd(), "data", "levelsSitemap.json");
const levels = fs.existsSync(levelsPath)
  ? JSON.parse(fs.readFileSync(levelsPath, "utf-8"))
  : [];

module.exports = {
  siteUrl: process.env.SITE_URL || "https://digimonstorytimestranger.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./public",
  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "/static/*",
    "/404",
    "/500",
    "/*.json$",
  ],
  transform: async (config, path) => {
    const result = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
    return result;
  },
  additionalPaths: async (config) => {
    const result = [];

    // 添加不带语言前缀的路径
    for (const route of routes) {
      const localePath = `/${route}`;
      result.push({
        loc: localePath,
        priority: route === "" ? 0.9 : 0.8,
        changefreq: "daily",
        lastmod: new Date().toISOString(),
      });
    }

    // 添加各语言版本的路径
    for (const locale of locales) {
      for (const route of routes) {
        const localePath = route ? `/${locale}/${route}` : `/${locale}`;
        result.push({
          loc: localePath,
          priority: route === "" ? 0.9 : 0.8,
          changefreq: "daily",
          lastmod: new Date().toISOString(),
        });
      }
    }

    // 添加关卡详情页面的路径
    for (const level of levels) {
      // 添加不带语言前缀的路径
      result.push({
        loc: `/videos/${level.id}`,
        priority: 0.7,
        changefreq: "weekly",
        lastmod: new Date().toISOString(),
      });

      // 添加各语言版本的路径
      for (const locale of locales) {
        const localeLevelPath = `/${locale}/videos/${level.id}`;
        result.push({
          loc: localeLevelPath,
          priority: 0.7,
          changefreq: "weekly",
          lastmod: new Date().toISOString(),
        });
      }
    }

    // 处理博客相关路径
    for (const locale of locales) {
      const cachePath = path.join(
        process.cwd(),
        ".cache",
        "blog",
        `${locale}.json`
      );
      if (fs.existsSync(cachePath)) {
        const cacheContent = fs.readFileSync(cachePath, "utf-8");
        const { posts } = JSON.parse(cacheContent);

        // 添加每篇文章的URL
        for (const post of posts) {
          const postPath = `/${locale}/blog/${post.slug}`;
          result.push({
            loc: postPath,
            priority: 0.6,
            changefreq: "weekly",
            lastmod: formatDate(post.date),
          });
        }

        // 添加分页
        const postsPerPage = 10;
        const totalPages = Math.ceil(posts.length / postsPerPage);
        for (let page = 2; page <= totalPages; page++) {
          const pagePath = `/${locale}/blog/${page}`;
          result.push({
            loc: pagePath,
            priority: 0.5,
            changefreq: "daily",
            lastmod: new Date().toISOString(),
          });
        }
      }
    }

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "GPTBot",
        allow: ["/llms.txt", "/llms-full.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/llms.txt", "/llms-full.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/llms.txt", "/llms-full.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/llms.txt", "/llms-full.txt"],
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/admin/",
          "/404",
          "/500",
          "/*.json$",
        ],
      },
    ],
  },
};
