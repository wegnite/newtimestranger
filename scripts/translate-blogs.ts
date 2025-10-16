#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import matter from "gray-matter"; // 用于解析文件头部信息

// --- 配置 ---

// OpenAI API 配置
const OPENAI_API_KEY = "a22ca661-15da-4712-840b-57f2099a9ce9";
const OPENAI_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const OPENAI_MODEL = "doubao-1-5-lite-32k-250115";

// 品牌名称映射 - 这些名称在翻译过程中会被保护
// 可以为特定语言指定翻译的名称
// 如果未指定语言，将使用原始英文名称
const BRAND_NAME_MAPPING: Record<string, Record<string, string>> = {
  "Knit Out": {
  },
};

// 博客翻译配置
const BLOG_TRANSLATION_CONFIG = {
  sourceLanguage: "en",
  targetLanguages: [
    "zh",
    /*"tw",
    "ja",
    "ko",
    "es",
    "fr",
    "de",
    "it",
    "ru",
    "nl",
    "th",
    "vi",
    "id",
    "ms",
    "fil",*/
  ],
  excludeFiles: [],
  skipExisting: false,
  concurrency: 10,
  delayBetweenFiles: 500,
  delayBetweenLanguages: 1000,
};

// 语言映射
const LANGUAGE_MAP: Record<string, string> = {
  en: "English",
  zh: "Chinese (Simplified)",
  tw: "Chinese (Traditional)",
  ja: "Japanese",
  ko: "Korean",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  ru: "Russian",
  nl: "Dutch",
  th: "Thai",
  vi: "Vietnamese",
  id: "Indonesian",
  ms: "Malay",
  fil: "Filipino",
  kk: "Kazakh",
  "en-AU": "English (Australian)",
  "es-MX": "Spanish (Mexican)",
};

// --- 类型定义和统计 ---

interface TranslationRequest {
  model: string;
  messages: Array<{ role: "system" | "user"; content: string }>;
  temperature: number;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

const TRANSLATION_STATS = {
  totalFiles: 0,
  syntaxErrors: 0,
  aiFixAttempts: 0,
  aiFixSuccesses: 0,
  aiFixFailures: 0,
  failedFiles: [] as Array<{
    file: string;
    language: string;
    errors: string[];
  }>,
};

// --- 核心翻译逻辑 ---

/**
 * 将品牌名称替换为占位符，并准备恢复映射
 * 映射将包含最终所需的名称（本地化或原始名称）
 * @param text 源文本
 * @param targetLanguage 目标翻译语言
 * @returns 包含占位符的文本和从占位符到最终品牌名称的映射
 */
function protectBrandNames(
  text: string,
  targetLanguage: string
): { protectedText: string; placeholderMap: Map<string, string> } {
  const placeholderMap = new Map<string, string>();
  let protectedText = text;
  Object.keys(BRAND_NAME_MAPPING).forEach((brandName, index) => {
    const placeholder = `__BRAND_${index}__`;
    const regex = new RegExp(`\\b${brandName}\\b`, "gi");

    if (regex.test(protectedText)) {
      // 确定最终名称：本地化或原始英文名称
      const finalName =
        BRAND_NAME_MAPPING[brandName][targetLanguage] || brandName;
      placeholderMap.set(placeholder, finalName);
      protectedText = protectedText.replace(regex, placeholder);
    }
  });
  return { protectedText, placeholderMap };
}

/**
 * 将占位符替换回原始或本地化品牌名称
 */
function restoreBrandNames(
  text: string,
  placeholderMap: Map<string, string>
): string {
  let restoredText = text;
  placeholderMap.forEach((finalName, placeholder) => {
    const regex = new RegExp(placeholder, "g");
    restoredText = restoredText.replace(regex, finalName);
  });
  return restoredText;
}

async function callOpenAIForMarkdown(
  content: string,
  targetLanguage: string
): Promise<string> {
  const systemPrompt = `你是一个专精于技术博客文章的专业翻译专家，这些文章使用Markdown (.mdx)格式编写。你的任务是将英文文本翻译成${
    LANGUAGE_MAP[targetLanguage] || targetLanguage
  }。

重要规则：
1. **文件头部信息（Frontmatter）**： 
   - 翻译 'title'、'description' 和 'tags' 字段。
   - 不要翻译 'date' 或其他任何字段。
   - 完美保留 '---' 分隔符和YAML结构。
2. **Markdown内容**：
   - 翻译所有段落、标题、列表项和表格内容。
   - 不要翻译代码块（如 \`\`\`js...\`\`\`）、内联代码（\`code\`）、组件名称（如 <AdContainer />）或占位符（如 __BRAND_0__）。
   - 保留所有Markdown语法：标题（#）、列表（*, -）、链接（[text](url)）、粗体（**text**）等。
   - 完全保留HTML标签和React组件（如 <div>、<Button>、<AdContainer />）。
3. **输出**：只返回翻译后的Markdown内容作为单个文本块，正确格式化文件头部信息和正文。不要添加任何解释或额外文字。`;

  const userPrompt = `请将以下.mdx文件内容翻译成${
    LANGUAGE_MAP[targetLanguage] || targetLanguage
  }。
记住只返回完整翻译后的文件内容，不要添加额外的解释。

\`\`\`markdown
${content}
\`\`\``;

  const requestBody: TranslationRequest = {
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.1,
  };

  const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok)
    throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
  const data = await response.json();
  if (!data.choices?.[0]?.message) throw new Error("无效的API响应格式");

  let translatedContent = data.choices[0].message.content;
  translatedContent = translatedContent
    .replace(/^```[\w]*\n/gm, "")
    .replace(/\n```$/gm, "")
    .trim();
  return translatedContent;
}

// --- 验证和修复 ---

function validateMarkdown(content: string): ValidationResult {
  const errors: string[] = [];
  try {
    const parsed = matter(content);
    if (!parsed.data.title) errors.push("文件头部缺少 'title' 字段。");
    if (!parsed.data.description)
      errors.push("文件头部缺少 'description' 字段。");
    if (!parsed.content || parsed.content.trim().length === 0)
      errors.push("Markdown正文内容缺失。");
  } catch (e: any) {
    errors.push(`文件头部解析错误: ${e.message}`);
  }
  return { isValid: errors.length === 0, errors };
}

async function fixMarkdownWithAI(
  content: string,
  errors: string[]
): Promise<string> {
  const systemPrompt = `你是Markdown语法修复专家。你的任务是修复翻译后博客文章中损坏的Markdown结构。最常见的错误是损坏的YAML文件头部信息。

规则：
1. **不要翻译**：不要改变翻译后的文本。你的唯一工作是修复结构。
2. **修复文件头部**：确保文件头部以'---'开始和结束（在新行），并且内部有有效的YAML语法（如 'key: "value"'）。
3. **保留内容**：确保文件头部之后的markdown正文完全保留。
4. **输出**：只返回修复后的完整Markdown文件内容。不要解释。`;

  const userPrompt = `请修复这个.mdx文件中的语法错误。

检测到的错误：
${errors.map((e) => `- ${e}`).join("\n")}

包含错误的文件内容：
\`\`\`markdown
${content}
\`\`\`

只返回修复后的内容：`;

  const requestBody: TranslationRequest = {
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.0,
  };

  const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok)
    throw new Error(
      `语法修复API请求失败: ${response.status} ${response.statusText}`
    );
  const data = await response.json();
  let fixedContent = data.choices?.[0]?.message?.content ?? content;
  fixedContent = fixedContent
    .replace(/^```[\w]*\n/gm, "")
    .replace(/\n```$/gm, "")
    .trim();
  return fixedContent;
}

// --- 文件处理 ---

async function translateFile(
  filePath: string,
  targetLanguage: string,
  fileIndex: number,
  totalFiles: number
): Promise<void> {
  const relativePath = path.relative(process.cwd(), filePath);
  console.log(`  📄 [${fileIndex}/${totalFiles}] 正在翻译: ${relativePath}`);

  try {
    const originalContent = fs.readFileSync(filePath, "utf-8");

    // 在发送到API之前保护品牌名称
    const { protectedText, placeholderMap } = protectBrandNames(
      originalContent,
      targetLanguage
    );

    const translatedProtectedText = await callOpenAIForMarkdown(
      protectedText,
      targetLanguage
    );

    // 翻译后恢复品牌名称
    const translatedContent = restoreBrandNames(
      translatedProtectedText,
      placeholderMap
    );

    TRANSLATION_STATS.totalFiles++;

    let validation = validateMarkdown(translatedContent);
    if (validation.isValid) {
      fs.writeFileSync(filePath, translatedContent, "utf-8");
    } else {
      TRANSLATION_STATS.syntaxErrors++;
      console.warn(
        `  ⚠️  [${fileIndex}/${totalFiles}] ${relativePath} 中的语法警告: ${validation.errors.join(
          ", "
        )}`
      );

      TRANSLATION_STATS.aiFixAttempts++;
      console.log(`  🔧 [${fileIndex}/${totalFiles}] 尝试AI语法修复...`);
      const fixedContentUnrestored = await fixMarkdownWithAI(
        translatedContent,
        validation.errors
      );
      const fixedContent = restoreBrandNames(
        fixedContentUnrestored,
        placeholderMap
      ); // 修复后再次恢复

      const revalidation = validateMarkdown(fixedContent);
      if (revalidation.isValid) {
        TRANSLATION_STATS.aiFixSuccesses++;
        console.log(
          `  ✅ [${fileIndex}/${totalFiles}] AI修复成功: ${relativePath}`
        );
        fs.writeFileSync(filePath, fixedContent, "utf-8");
      } else {
        TRANSLATION_STATS.aiFixFailures++;
        TRANSLATION_STATS.failedFiles.push({
          file: relativePath,
          language: targetLanguage,
          errors: revalidation.errors,
        });
        console.error(
          `  ❌ [${fileIndex}/${totalFiles}] ${relativePath} AI修复失败。恢复为原始文件。`
        );

        const errorContentPath = filePath.replace(
          /\.mdx$/,
          "_translation_error.txt"
        );
        const errorReport = `文件: ${relativePath}\n语言: ${targetLanguage}\n错误:\n${revalidation.errors.join(
          "\n"
        )}\n\n--- 翻译内容（包含错误） ---\n${translatedContent}`;
        fs.writeFileSync(errorContentPath, errorReport, "utf-8");
        fs.writeFileSync(filePath, originalContent, "utf-8"); // 恢复为原始英文内容
      }
    }
    console.log(`  ✅ [${fileIndex}/${totalFiles}] 完成: ${relativePath}`);
  } catch (error) {
    console.error(
      `  ❌ [${fileIndex}/${totalFiles}] 翻译失败 ${relativePath}:`,
      error
    );
    throw error; // 传播错误以停止批处理
  }
}

function shouldExcludeFile(fileName: string): boolean {
  return BLOG_TRANSLATION_CONFIG.excludeFiles.some((pattern) =>
    new RegExp(pattern.replace(/\*/g, ".*")).test(fileName)
  );
}

async function translateDirectory(
  dirPath: string,
  targetLanguage: string
): Promise<void> {
  const filesToTranslate = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".mdx") && !shouldExcludeFile(file))
    .map((file) => path.join(dirPath, file));

  console.log(`  📊 找到 ${filesToTranslate.length} 个文件需要翻译。`);

  const fileConcurrency = Math.min(
    BLOG_TRANSLATION_CONFIG.concurrency,
    filesToTranslate.length
  );
  for (let i = 0; i < filesToTranslate.length; i += fileConcurrency) {
    const batch = filesToTranslate.slice(i, i + fileConcurrency);
    console.log(
      `  📦 正在翻译批次 ${Math.floor(i / fileConcurrency) + 1}/${Math.ceil(
        filesToTranslate.length / fileConcurrency
      )} (${batch.length} 个文件)`
    );

    await Promise.all(
      batch.map((filePath, index) =>
        translateFile(
          filePath,
          targetLanguage,
          i + index + 1,
          filesToTranslate.length
        )
      )
    );

    if (i + fileConcurrency < filesToTranslate.length) {
      await new Promise((resolve) =>
        setTimeout(resolve, BLOG_TRANSLATION_CONFIG.delayBetweenFiles)
      );
    }
  }
}

// --- 目录和脚本编排 ---

function copyDirectory(src: string, dest: string): void {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function translateToLanguage(
  sourceLanguage: string,
  targetLanguage: string,
  langIndex: number,
  totalLangs: number
): Promise<void> {
  const blogsPath = path.join(process.cwd(), "blog", "posts");
  const sourcePath = path.join(blogsPath, sourceLanguage);
  const targetPath = path.join(blogsPath, targetLanguage);

  console.log(
    `\n🌍 [${langIndex}/${totalLangs}] 开始翻译到 ${
      LANGUAGE_MAP[targetLanguage] || targetLanguage
    }`
  );

  if (BLOG_TRANSLATION_CONFIG.skipExisting && fs.existsSync(targetPath)) {
    console.log(`  ⏭️  跳过已存在的目录: ${targetPath}`);
    return;
  }

  if (fs.existsSync(targetPath)) {
    console.log(`  🗑️  删除已存在的目录: ${targetPath}`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }

  console.log("  📁 复制目录结构...");
  copyDirectory(sourcePath, targetPath);

  console.log("  🔄 翻译文件...");
  await translateDirectory(targetPath, targetLanguage);

  console.log(
    `  🎉 [${langIndex}/${totalLangs}] 完成 ${
      LANGUAGE_MAP[targetLanguage] || targetLanguage
    }!`
  );
}

function resetStats() {
  TRANSLATION_STATS.totalFiles = 0;
  TRANSLATION_STATS.syntaxErrors = 0;
  TRANSLATION_STATS.aiFixAttempts = 0;
  TRANSLATION_STATS.aiFixSuccesses = 0;
  TRANSLATION_STATS.aiFixFailures = 0;
  TRANSLATION_STATS.failedFiles = [];
}

async function main() {
  const { sourceLanguage, targetLanguages } = BLOG_TRANSLATION_CONFIG;
  resetStats();

  console.log("🚀 博客翻译脚本启动");
  console.log("=".repeat(50));
  console.log(`📖 源语言: ${LANGUAGE_MAP[sourceLanguage]}`);
  console.log(`🎯 目标语言: ${targetLanguages.length} 种`);
  console.log(`⚙️  并发数: ${BLOG_TRANSLATION_CONFIG.concurrency}`);
  console.log("=".repeat(50));

  const startTime = Date.now();

  const concurrency = BLOG_TRANSLATION_CONFIG.concurrency;
  for (let i = 0; i < targetLanguages.length; i += concurrency) {
    const batch = targetLanguages.slice(i, i + concurrency);
    await Promise.all(
      batch.map((lang, index) =>
        translateToLanguage(
          sourceLanguage,
          lang,
          i + index + 1,
          targetLanguages.length
        )
      )
    );
    if (i + concurrency < targetLanguages.length) {
      await new Promise((resolve) =>
        setTimeout(resolve, BLOG_TRANSLATION_CONFIG.delayBetweenLanguages)
      );
    }
  }

  const duration = Math.round((Date.now() - startTime) / 1000);
  console.log("\n" + "=".repeat(60));
  console.log("🎊 所有翻译任务完成！");
  console.log(`⏱️  总耗时: ${duration}秒`);
  console.log(`📊 翻译统计:`);
  console.log(`   - 翻译文件总数: ${TRANSLATION_STATS.totalFiles}`);
  console.log(`   - 检测到语法错误: ${TRANSLATION_STATS.syntaxErrors}`);
  if (TRANSLATION_STATS.aiFixAttempts > 0) {
    console.log(`🔧 AI修复统计:`);
    console.log(`   - 尝试次数: ${TRANSLATION_STATS.aiFixAttempts}`);
    console.log(`   - 成功次数: ${TRANSLATION_STATS.aiFixSuccesses}`);
    console.log(`   - 失败次数: ${TRANSLATION_STATS.aiFixFailures}`);
  }
  if (TRANSLATION_STATS.failedFiles.length > 0) {
    console.log(
      `\n🔴 需要手动处理 ${TRANSLATION_STATS.failedFiles.length} 个文件:`
    );
    TRANSLATION_STATS.failedFiles.forEach((f) => {
      console.log(`   - ${f.file} (${f.language}): ${f.errors.join(", ")}`);
    });
  }
  console.log("=".repeat(60));
}

if (require.main === module) {
  main().catch(console.error);
}
