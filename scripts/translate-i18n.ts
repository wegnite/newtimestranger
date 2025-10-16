#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";

// OpenAI API 配置
const OPENAI_API_KEY = "a22ca661-15da-4712-840b-57f2099a9ce9";
const OPENAI_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const OPENAI_MODEL = "doubao-1-5-lite-32k-250115";

// 品牌名称映射 - 如果某个语言有特定的品牌名称，在这里配置
const BRAND_NAME_MAPPING: Record<string, Record<string, string>> = {
  // 游戏品牌名称映射
  "Knit Out": {
    // 如果某些语言有特定的品牌名称翻译，可以在这里添加
    // "zh": "编织解结", // 示例：如果中文有特定名称
    // "ja": "ニットアウト", // 示例：如果日语有特定名称
    // 默认情况下，如果没有配置，就保持英文原名
  },
};

// 翻译配置
const TRANSLATION_CONFIG = {
  sourceLanguage: "en", // 源语言
  // 目标语言列表 - 在这里配置需要翻译的语言
  targetLanguages: [
    "zh", // 西班牙语
    // "nl", // 荷兰语
    /*"it", // 意大利语
    "ru", // 俄语
    "th", // 泰语
    "vi", // 越南语
    "id", // 印尼语
    "ms", // 马来语
    "fil", // 菲律宾语*/
  ],
  // 排除的文件列表（这些文件不会被翻译）
  // 注意：locale.ts 已有专门处理逻辑，会自动更新语言代码
  excludeFiles: ["index.ts"],
  // 是否跳过已存在的语言文件夹
  skipExisting: false,
  // 并发控制配置
  concurrency: 60, // 同时处理的语言数量（语言级并发）和每个语言内同时翻译的文件数量（文件级并发）
  delayBetweenFiles: 1000, // 文件批次间延迟（毫秒）
  delayBetweenLanguages: 1000, // 语言间延迟（毫秒）
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

interface TranslationRequest {
  model: string;
  messages: Array<{
    role: "system" | "user";
    content: string;
  }>;
  temperature: number;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// 全局统计变量
const TRANSLATION_STATS = {
  totalFiles: 0,
  syntaxErrors: 0,
  aiFixAttempts: 0,
  aiFixSuccesses: 0,
  aiFixFailures: 0,
  // 记录需要手动检查的文件列表
  failedFiles: [] as Array<{
    file: string;
    language: string;
    errors: string[];
  }>,
};

// 生成品牌名称保护指令
function generateBrandProtectionInstructions(targetLanguage: string): string {
  const brandNames = Object.keys(BRAND_NAME_MAPPING);
  let instructions = "";

  if (brandNames.length > 0) {
    instructions += "\n\nBRAND NAME PROTECTION:\n";
    brandNames.forEach((brandName) => {
      const localizedName = BRAND_NAME_MAPPING[brandName][targetLanguage];
      if (localizedName) {
        instructions += `- "${brandName}" should be translated to "${localizedName}"\n`;
      } else {
        instructions += `- "${brandName}" should remain as "${brandName}" (keep original English name)\n`;
      }
    });
  }

  return instructions;
}

async function callOpenAI(
  content: string,
  targetLanguage: string
): Promise<string> {
  const brandProtectionInstructions =
    generateBrandProtectionInstructions(targetLanguage);

  const systemPrompt = `你是一位专业的TypeScript国际化文件翻译专家。你的任务是将英文的TypeScript i18n字典文件翻译成${
    LANGUAGE_MAP[targetLanguage] || targetLanguage
  }。

重要规则：
1. 只翻译双引号、单引号内的字符串值，不要翻译：
   - 变量名
   - 对象键名
   - TypeScript语法
   - import/export语句
   - 代码相关的注释
2. 完全保持TypeScript语法、结构和格式
3. 保留所有占位符如 {0}, {{level}}, {langName}, \${levels.length} 等
4. 保持所有HTML标签和markdown语法完整
5. 保持相同的换行符和缩进
6. 对于URL、邮箱地址和技术术语，保持不变
7. 翻译要自然且符合目标语言的语境
8. 如果字符串包含可翻译文本和技术术语，只翻译可翻译部分${brandProtectionInstructions}

特别注意我们i18n文件的特殊结构：
9. 模板字符串（反引号\`）：许多字符串使用反引号包裹，内部包含\${变量}插值，必须保持反引号完整配对
10. 长文本内容：某些字符串非常长，包含markdown格式，注意不要截断
11. 嵌套对象结构：文件包含多层嵌套对象，注意逗号的正确位置
12. 多语言特殊字符：某些语言包含撇号(')，需要正确转义，如法语的"n'existe"，意大利语的"dell'utente"
13. 引号转义：在双引号字符串内的撇号不需要转义，但在单引号字符串内的撇号需要转义为\'

常见错误避免：
- 不要将模板字符串的反引号(\`)误写为单引号(')或双引号(")
- 不要丢失字符串结尾的逗号
- 不要破坏 } as const; 的结构
- 注意法语、意大利语等语言的撇号(')转义

输出要求：
10. 只输出TypeScript代码，不要任何解释、代码块标记或额外注释

示例：
输入: title: "Download Knit Out - Untangle the Knots!",
输出: title: "下载 Knit Out - 解开绳结！",

注意："Knit Out"作为品牌名称保持英文。`;

  const userPrompt = `请将这个TypeScript i18n文件翻译成${
    LANGUAGE_MAP[targetLanguage] || targetLanguage
  }。

重要：只返回翻译后的TypeScript代码，不要markdown格式、解释或额外注释。
确保输出是有效的TypeScript语法，特别注意模板字符串的反引号配对和撇号转义。

\`\`\`typescript
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

  try {
    const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid API response format");
    }

    let translatedContent = data.choices[0].message.content;

    // 更强力的清理和验证逻辑
    translatedContent = cleanAndValidateContent(translatedContent);

    return translatedContent;
  } catch (error) {
    console.error("Translation API error:", error);
    throw error;
  }
}

// 新增：内容清理和验证函数
function cleanAndValidateContent(content: string): string {
  // 1. 移除代码块标记
  content = content.replace(/^```[\w]*\n/gm, "");
  content = content.replace(/\n```$/gm, "");
  content = content.replace(/^```$/gm, "");

  // 2. 移除开头和结尾的多余空白
  content = content.trim();

  // 3. 移除可能的解释性文本（通常在文件末尾）
  // 查找最后一个有效的TypeScript结构（export default 或 } as const）
  const lines = content.split("\n");
  let lastValidLine = lines.length - 1;

  // 从后往前找最后一个有效的TypeScript行
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (
      line.endsWith("} as const;") ||
      line.endsWith("export default footer;") ||
      line.endsWith("export default gamePage;") ||
      line.endsWith("export default gamesText;") ||
      line.endsWith("export default level;") ||
      line === "}" ||
      line === "};"
    ) {
      lastValidLine = i;
      break;
    }
  }

  // 只保留到最后一个有效行
  content = lines.slice(0, lastValidLine + 1).join("\n");

  // 4. 移除可能的注释行（以 "注：" 或 "Note:" 开头的行）
  content = content.replace(/\n\s*注：.*$/gm, "");
  content = content.replace(/\n\s*Note:.*$/gm, "");
  content = content.replace(/\n\s*\/\/.*注：.*$/gm, "");

  // 5. 修复常见的语法问题
  content = fixCommonSyntaxErrors(content);

  // 6. 确保文件以换行符结尾
  if (!content.endsWith("\n")) {
    content += "\n";
  }

  return content;
}

// 新增：修复常见语法错误的函数
function fixCommonSyntaxErrors(content: string): string {
  const lines = content.split("\n");
  const fixedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmedLine = line.trim();

    // 检查是否是对象的最后一个属性但缺少逗号
    if (i < lines.length - 1) {
      const nextLine = lines[i + 1]?.trim();

      // 如果当前行结束一个属性值，且下一行是 } 或 } as const，则添加逗号
      if (
        (trimmedLine.endsWith('"') ||
          trimmedLine.endsWith("'") ||
          trimmedLine.endsWith("`") ||
          trimmedLine.endsWith("},")) &&
        !trimmedLine.endsWith(",") &&
        (nextLine === "}" ||
          nextLine === "} as const;" ||
          nextLine.startsWith("}") ||
          nextLine === "},")
      ) {
        // 在行末添加逗号
        if (trimmedLine.endsWith("},")) {
          // 已经有逗号了，不需要添加
        } else {
          line = line.replace(/([^,])(\s*)$/, "$1,$2");
        }
      }
    }

    // 修复 } as const 的位置问题
    if (trimmedLine === "} as const;" && i > 0) {
      const prevLine = lines[i - 1]?.trim();
      // 如果前一行是结束对象的花括号，需要在前一行添加逗号（如果没有的话）
      if (prevLine === "}" && i >= 2) {
        const beforePrevLine = fixedLines[fixedLines.length - 2];
        if (
          beforePrevLine &&
          !beforePrevLine.trim().endsWith(",") &&
          (beforePrevLine.trim().endsWith('"') ||
            beforePrevLine.trim().endsWith("'") ||
            beforePrevLine.trim().endsWith("`"))
        ) {
          fixedLines[fixedLines.length - 2] = beforePrevLine.replace(
            /([^,])(\s*)$/,
            "$1,$2"
          );
        }
      }
    }

    fixedLines.push(line);
  }

  return fixedLines.join("\n");
}

// 新增：基本的TypeScript语法验证
function validateTypeScriptSyntax(content: string): ValidationResult {
  const errors: string[] = [];
  const lines = content.split("\n");

  let braceCount = 0;
  let parenCount = 0;
  let squareBracketCount = 0;
  let inString = false;
  let stringChar = "";
  let inTemplateString = false;
  let templateStringDepth = 0;
  let escapeNext = false;

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    const trimmedLine = line.trim();

    // 跳过空行和注释
    if (
      !trimmedLine ||
      trimmedLine.startsWith("//") ||
      trimmedLine.startsWith("/*")
    ) {
      continue;
    }

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const prevChar = i > 0 ? line[i - 1] : "";
      const nextChar = i < line.length - 1 ? line[i + 1] : "";

      if (escapeNext) {
        escapeNext = false;
        continue;
      }

      if (char === "\\" && (inString || inTemplateString)) {
        escapeNext = true;
        continue;
      }

      // 处理模板字符串
      if (char === "`" && !inString) {
        if (!inTemplateString) {
          inTemplateString = true;
          templateStringDepth = 1;
        } else {
          templateStringDepth--;
          if (templateStringDepth === 0) {
            inTemplateString = false;
          }
        }
        continue;
      }

      // 在模板字符串内部处理 ${}
      if (inTemplateString && char === "$" && nextChar === "{") {
        templateStringDepth++;
        i++; // 跳过 {
        continue;
      }

      if (inTemplateString && char === "}" && templateStringDepth > 1) {
        templateStringDepth--;
        continue;
      }

      // 处理普通字符串
      if (!inTemplateString && (char === '"' || char === "'")) {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
          stringChar = "";
        }
        continue;
      }

      // 在字符串或模板字符串内部跳过其他字符
      if (inString || inTemplateString) {
        continue;
      }

      // 计算括号
      switch (char) {
        case "{":
          braceCount++;
          break;
        case "}":
          braceCount--;
          break;
        case "(":
          parenCount++;
          break;
        case ")":
          parenCount--;
          break;
        case "[":
          squareBracketCount++;
          break;
        case "]":
          squareBracketCount--;
          break;
      }
    }

    // 检查行尾的语法问题
    const lineContent = line.trim();

    // 检查是否在模板字符串内但行未结束
    if (
      inTemplateString &&
      templateStringDepth === 1 &&
      !lineContent.endsWith("`")
    ) {
      // 只有在明显错误的情况下才报告（不是多行模板字符串）
      const restOfContent = lines.slice(lineNum + 1).join("\n");
      if (!restOfContent.includes("`")) {
        errors.push(
          `第 ${lineNum + 1} 行可能有未闭合的模板字符串: ${lineContent}`
        );
      }
    }

    // 检查普通字符串未闭合
    if (inString) {
      errors.push(
        `第 ${lineNum + 1} 行可能有未闭合的${
          stringChar === '"' ? "双引号" : "单引号"
        }字符串: ${lineContent}`
      );
      // 重置状态，避免后续行都被标记为错误
      inString = false;
      stringChar = "";
    }

    // 注释掉逗号检查，因为它经常误报正确的TypeScript语法
    // 例如 `breadcrumbs: {` 和 `navItems: [` 等都是正确的，不需要逗号
    /*
    // 检查对象属性后是否缺少逗号（更精确的检查，减少误报）
    // 只检查明确以简单值（字符串、数字、布尔值）结尾且不以逗号结尾的属性行
    if (
      lineContent.match(
        /^[a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*("[^"]*"|'[^']*'|`[^`]*`|\d+|true|false|null)$/
      ) &&
      lineNum < lines.length - 1
    ) {
      const nextLineContent = lines[lineNum + 1]?.trim();
      // 只有当下一行确实是另一个属性时才报错
      if (
        nextLineContent &&
        nextLineContent.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*\s*:/) &&
        !nextLineContent.startsWith("}") &&
        !nextLineContent.startsWith("]") &&
        nextLineContent !== "} as const;"
      ) {
        errors.push(
          `第 ${lineNum + 1} 行对象属性后可能缺少逗号: ${lineContent}`
        );
      }
    }
    */

    // 特别检查常见的i18n文件错误模式

    // 检查是否有单引号开始但用反引号结束的情况
    if (
      lineContent.match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*'[^']*`\s*,?\s*$/)
    ) {
      errors.push(
        `第 ${
          lineNum + 1
        } 行引号类型混合错误（单引号开始，反引号结束）: ${lineContent}`
      );
    }

    // 检查是否有反引号开始但单引号结束的情况
    if (
      lineContent.match(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*`[^`]*'\s*,?\s*$/)
    ) {
      errors.push(
        `第 ${
          lineNum + 1
        } 行引号类型混合错误（反引号开始，单引号结束）: ${lineContent}`
      );
    }

    // 检查包含变量插值但使用错误引号的情况
    if (lineContent.includes("${") && !lineContent.includes("`")) {
      errors.push(
        `第 ${lineNum + 1} 行包含变量插值但未使用模板字符串: ${lineContent}`
      );
    }
  }

  // 检查括号匹配
  if (braceCount !== 0) {
    errors.push(
      `花括号不匹配: ${braceCount > 0 ? "缺少" : "多余"} ${Math.abs(
        braceCount
      )} 个闭合花括号`
    );
  }

  if (parenCount !== 0) {
    errors.push(
      `圆括号不匹配: ${parenCount > 0 ? "缺少" : "多余"} ${Math.abs(
        parenCount
      )} 个闭合圆括号`
    );
  }

  if (squareBracketCount !== 0) {
    errors.push(
      `方括号不匹配: ${squareBracketCount > 0 ? "缺少" : "多余"} ${Math.abs(
        squareBracketCount
      )} 个闭合方括号`
    );
  }

  // 检查是否有正确的导出结构
  const hasValidExport =
    content.includes("} as const") ||
    content.includes("export default") ||
    content.includes("export const");
  if (!hasValidExport) {
    errors.push("缺少有效的TypeScript导出语句");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// 新增：语法修复专用的AI调用函数
async function fixSyntaxWithAI(
  content: string,
  errors: string[],
  targetLanguage: string
): Promise<string> {
  const systemPrompt = `你是TypeScript语法修复专家。你的任务是修复翻译后的TypeScript i18n字典文件中的语法错误。

重要规则：
1. 只修复语法错误，不要改变任何翻译内容
2. 保持所有翻译完全相同
3. 修复常见问题：
   - 未闭合的模板字符串（反引号\`）
   - 对象属性间缺少逗号
   - 花括号不匹配
   - 未闭合的字符串
   - 撇号转义问题

针对i18n文件特点的修复：
4. 模板字符串修复：确保\`开头的字符串以\`结尾，不要误用单引号或双引号
5. 变量插值保护：保持\${variable}格式完整
6. 多语言撇号处理：
   - 法语: n'existe → "n'existe" 或 'n\'existe'
   - 意大利语: dell'utente → "dell'utente" 或 'dell\'utente'
   - 其他包含撇号的语言同理
7. 长文本处理：确保markdown格式的长字符串完整
8. 对象结构：确保所有对象属性后有正确的逗号
9. 确保最后的 } as const; 结构正确

常见修复模式：
- \`文本\${variable}文本 → \`文本\${variable}文本\`
- "text with ' apostrophe" → "text with ' apostrophe"（双引号内的撇号不需要转义）
- 'text with ' apostrophe' → 'text with \' apostrophe'（单引号内的撇号需要转义）
- property: "value" → property: "value",（添加缺少的逗号）

输出要求：
只输出修复后的TypeScript代码，不要任何解释或代码块标记`;

  const userPrompt = `请修复这个TypeScript i18n文件中的语法错误。

检测到的错误：
${errors.map((error) => `- ${error}`).join("\n")}

需要修复的内容：
\`\`\`typescript
${content}
\`\`\`

只返回修复后的TypeScript代码：`;

  const requestBody: TranslationRequest = {
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.1,
  };

  try {
    const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `Syntax fix API request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid syntax fix API response format");
    }

    let fixedContent = data.choices[0].message.content;

    // 清理修复后的内容
    fixedContent = cleanAndValidateContent(fixedContent);

    return fixedContent;
  } catch (error) {
    console.error("Syntax fix API error:", error);
    throw error;
  }
}

async function translateFile(
  filePath: string,
  targetLanguage: string,
  fileIndex: number,
  totalFiles: number
): Promise<void> {
  try {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`  📄 [${fileIndex}/${totalFiles}] 正在翻译: ${relativePath}`);

    // 特殊处理 locale.ts 文件
    if (path.basename(filePath) === "locale.ts") {
      const localeContent = `// This file is auto-generated. Do not edit manually.
export const locale = "${targetLanguage}" as const;

export default locale;
`;
      fs.writeFileSync(filePath, localeContent, "utf-8");
      console.log(
        `  ✅ [${fileIndex}/${totalFiles}] 语言代码更新: ${relativePath} → ${targetLanguage}`
      );
      TRANSLATION_STATS.totalFiles++;
      return;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const translatedContent = await callOpenAI(content, targetLanguage);

    TRANSLATION_STATS.totalFiles++;

    // 验证翻译后的内容
    const validation = validateTypeScriptSyntax(translatedContent);
    if (!validation.isValid) {
      TRANSLATION_STATS.syntaxErrors++;
      console.warn(
        `  ⚠️  [${fileIndex}/${totalFiles}] 语法警告 ${relativePath}:`
      );
      validation.errors.forEach((error) => {
        console.warn(`     - ${error}`);
      });

      try {
        // 使用AI修复语法错误
        TRANSLATION_STATS.aiFixAttempts++;
        console.log(`  🔧 [${fileIndex}/${totalFiles}] 尝试AI修复语法错误...`);
        const fixedContent = await fixSyntaxWithAI(
          translatedContent,
          validation.errors,
          targetLanguage
        );

        // 再次验证修复后的内容
        const revalidation = validateTypeScriptSyntax(fixedContent);
        if (revalidation.isValid) {
          TRANSLATION_STATS.aiFixSuccesses++;
          console.log(
            `  ✅ [${fileIndex}/${totalFiles}] AI修复成功: ${relativePath}`
          );
          fs.writeFileSync(filePath, fixedContent, "utf-8");
        } else {
          TRANSLATION_STATS.aiFixFailures++;
          // 记录失败的文件信息
          TRANSLATION_STATS.failedFiles.push({
            file: relativePath,
            language: targetLanguage,
            errors: revalidation.errors,
          });
          console.warn(
            `  ⚠️  [${fileIndex}/${totalFiles}] AI修复失败，剩余错误:`
          );
          revalidation.errors.forEach((error) => {
            console.warn(`     - ${error}`);
          });

          // 保存错误的翻译内容到txt文件
          const errorContentPath = filePath.replace(
            /\.ts$/,
            "_translation_error.txt"
          );
          const errorReport = `=== AI翻译修复失败报告 ===
文件: ${relativePath}
目标语言: ${LANGUAGE_MAP[targetLanguage] || targetLanguage} (${targetLanguage})
生成时间: ${new Date().toLocaleString("zh-CN")}

错误列表:
${revalidation.errors.map((error) => `• ${error}`).join("\n")}

原始翻译内容:
${"-".repeat(50)}
${translatedContent}
${"-".repeat(50)}

说明: 
该文件因为语法错误无法正常使用，已恢复为英文原版以确保项目正常运行。
请手动检查上述错误并重新翻译此文件。
`;
          fs.writeFileSync(errorContentPath, errorReport, "utf-8");

          // 恢复为英文原版内容
          const sourceFilePath = filePath.replace(
            `dictionaries/${targetLanguage}/`,
            `dictionaries/${TRANSLATION_CONFIG.sourceLanguage}/`
          );
          const originalContent = fs.readFileSync(sourceFilePath, "utf-8");
          fs.writeFileSync(filePath, originalContent, "utf-8");

          console.warn(
            `  💾 [${fileIndex}/${totalFiles}] 已恢复为英文原版，错误内容保存到: ${path.relative(
              process.cwd(),
              errorContentPath
            )}`
          );
        }
      } catch (fixError) {
        TRANSLATION_STATS.aiFixFailures++;
        // 记录失败的文件信息
        TRANSLATION_STATS.failedFiles.push({
          file: relativePath,
          language: targetLanguage,
          errors: [`AI修复过程出错: ${fixError}`],
        });
        console.error(
          `  ❌ [${fileIndex}/${totalFiles}] AI修复失败: ${relativePath}`,
          fixError
        );

        // 保存错误的翻译内容到txt文件
        const errorContentPath = filePath.replace(
          /\.ts$/,
          "_translation_error.txt"
        );
        const errorReport = `=== AI翻译修复失败报告 ===
文件: ${relativePath}
目标语言: ${LANGUAGE_MAP[targetLanguage] || targetLanguage} (${targetLanguage})
生成时间: ${new Date().toLocaleString("zh-CN")}

错误列表:
• AI修复过程出错: ${fixError}

原始语法错误:
${validation.errors.map((error) => `• ${error}`).join("\n")}

原始翻译内容:
${"-".repeat(50)}
${translatedContent}
${"-".repeat(50)}

说明: 
该文件的AI修复过程出现错误，已恢复为英文原版以确保项目正常运行。
请手动检查上述错误并重新翻译此文件。
`;
        fs.writeFileSync(errorContentPath, errorReport, "utf-8");

        // 恢复为英文原版内容
        const sourceFilePath = filePath.replace(
          `dictionaries/${targetLanguage}/`,
          `dictionaries/${TRANSLATION_CONFIG.sourceLanguage}/`
        );
        const originalContent = fs.readFileSync(sourceFilePath, "utf-8");
        fs.writeFileSync(filePath, originalContent, "utf-8");

        console.warn(
          `  💾 [${fileIndex}/${totalFiles}] 已恢复为英文原版，错误内容保存到: ${path.relative(
            process.cwd(),
            errorContentPath
          )}`
        );
      }
    } else {
      fs.writeFileSync(filePath, translatedContent, "utf-8");
    }

    console.log(`  ✅ [${fileIndex}/${totalFiles}] 翻译完成: ${relativePath}`);

    // 移除文件级别的延迟，现在在批次级别控制
  } catch (error) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.error(
      `  ❌ [${fileIndex}/${totalFiles}] 翻译失败: ${relativePath}`,
      error
    );
    throw error;
  }
}

// 检查文件是否应该被排除
function shouldExcludeFile(fileName: string): boolean {
  return TRANSLATION_CONFIG.excludeFiles.some((excludePattern) => {
    // 支持精确匹配和通配符匹配
    if (excludePattern.includes("*")) {
      // 简单的通配符匹配
      const regex = new RegExp(excludePattern.replace(/\*/g, ".*"));
      return regex.test(fileName);
    } else {
      // 精确匹配
      return fileName === excludePattern;
    }
  });
}

async function translateDirectory(
  dirPath: string,
  targetLanguage: string
): Promise<void> {
  // 首先收集所有需要翻译的文件
  const filesToTranslate: string[] = [];
  const excludedFiles: string[] = [];

  function collectFiles(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        collectFiles(filePath);
      } else if (file.endsWith(".ts")) {
        if (shouldExcludeFile(file)) {
          excludedFiles.push(filePath);
          console.log(
            `  ⏭️  跳过文件: ${path.relative(process.cwd(), filePath)}`
          );
        } else {
          filesToTranslate.push(filePath);
        }
      }
    }
  }

  collectFiles(dirPath);

  console.log(`  📊 找到 ${filesToTranslate.length} 个文件需要翻译`);
  if (excludedFiles.length > 0) {
    console.log(`  🚫 跳过 ${excludedFiles.length} 个文件`);
  }

  // 并发翻译文件，按批次处理以控制并发数量
  const fileConcurrency = Math.min(
    TRANSLATION_CONFIG.concurrency,
    filesToTranslate.length
  );
  console.log(`  ⚡ 使用 ${fileConcurrency} 个并发线程翻译文件`);

  for (let i = 0; i < filesToTranslate.length; i += fileConcurrency) {
    const batch = filesToTranslate.slice(i, i + fileConcurrency);

    console.log(
      `  📦 翻译批次 ${Math.floor(i / fileConcurrency) + 1}/${Math.ceil(
        filesToTranslate.length / fileConcurrency
      )}: ${batch.length} 个文件`
    );

    // 并发翻译当前批次的文件
    const batchPromises = batch.map((filePath, batchIndex) =>
      translateFile(
        filePath,
        targetLanguage,
        i + batchIndex + 1,
        filesToTranslate.length
      )
    );

    try {
      await Promise.all(batchPromises);
      console.log(`  ✅ 批次 ${Math.floor(i / fileConcurrency) + 1} 完成`);

      // 如果还有更多批次，添加批次间延迟
      if (i + fileConcurrency < filesToTranslate.length) {
        console.log(
          `  ⏱️  批次间等待 ${TRANSLATION_CONFIG.delayBetweenFiles}ms...`
        );
        await new Promise((resolve) =>
          setTimeout(resolve, TRANSLATION_CONFIG.delayBetweenFiles)
        );
      }
    } catch (error) {
      console.error(
        `  ❌ 批次 ${Math.floor(i / fileConcurrency) + 1} 翻译失败:`,
        error
      );
      throw error;
    }
  }
}

function copyDirectory(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function translateToLanguage(
  sourceLanguage: string,
  targetLanguage: string,
  languageIndex: number,
  totalLanguages: number
): Promise<void> {
  const dictionariesPath = path.join(process.cwd(), "dictionaries");
  const sourcePath = path.join(dictionariesPath, sourceLanguage);
  const targetPath = path.join(dictionariesPath, targetLanguage);

  console.log(
    `\n🌍 [${languageIndex}/${totalLanguages}] 开始翻译到 ${
      LANGUAGE_MAP[targetLanguage] || targetLanguage
    }`
  );

  try {
    // 检查是否跳过已存在的文件夹
    if (TRANSLATION_CONFIG.skipExisting && fs.existsSync(targetPath)) {
      console.log(`  ⏭️  跳过已存在的语言文件夹: ${targetPath}`);
      return;
    }

    // 如果目标文件夹已存在，删除它
    if (fs.existsSync(targetPath)) {
      console.log(`  🗑️  删除已存在的文件夹: ${targetPath}`);
      fs.rmSync(targetPath, { recursive: true, force: true });
    }

    // 复制源文件夹到目标文件夹
    console.log(`  📁 复制文件夹结构...`);
    copyDirectory(sourcePath, targetPath);

    // 翻译所有文件
    console.log(`  🔄 开始翻译文件...`);
    await translateDirectory(targetPath, targetLanguage);

    console.log(
      `  🎉 [${languageIndex}/${totalLanguages}] ${
        LANGUAGE_MAP[targetLanguage] || targetLanguage
      } 翻译完成！`
    );

    // 语言间延迟
    if (languageIndex < totalLanguages) {
      console.log(
        `  ⏱️  等待 ${TRANSLATION_CONFIG.delayBetweenLanguages}ms 后继续下一个语言...`
      );
      await new Promise((resolve) =>
        setTimeout(resolve, TRANSLATION_CONFIG.delayBetweenLanguages)
      );
    }
  } catch (error) {
    console.error(
      `  ❌ [${languageIndex}/${totalLanguages}] ${
        LANGUAGE_MAP[targetLanguage] || targetLanguage
      } 翻译失败:`,
      error
    );
    throw error;
  }
}

// 限制并发数量的异步函数
async function translateWithConcurrency(
  sourceLanguage: string,
  targetLanguages: string[]
): Promise<void> {
  const concurrency = TRANSLATION_CONFIG.concurrency;
  const results: Promise<void>[] = [];

  for (let i = 0; i < targetLanguages.length; i += concurrency) {
    const batch = targetLanguages.slice(i, i + concurrency);
    const batchPromises = batch.map((lang, index) =>
      translateToLanguage(
        sourceLanguage,
        lang,
        i + index + 1,
        targetLanguages.length
      )
    );

    // 等待当前批次完成
    await Promise.all(batchPromises);

    // 如果还有更多批次，添加批次间延迟
    if (i + concurrency < targetLanguages.length) {
      console.log(
        `\n⏸️  批次完成，等待 ${TRANSLATION_CONFIG.delayBetweenLanguages}ms 后继续下一批次...`
      );
      await new Promise((resolve) =>
        setTimeout(resolve, TRANSLATION_CONFIG.delayBetweenLanguages)
      );
    }
  }
}

// 重置统计数据
function resetStats() {
  TRANSLATION_STATS.totalFiles = 0;
  TRANSLATION_STATS.syntaxErrors = 0;
  TRANSLATION_STATS.aiFixAttempts = 0;
  TRANSLATION_STATS.aiFixSuccesses = 0;
  TRANSLATION_STATS.aiFixFailures = 0;
  TRANSLATION_STATS.failedFiles = [];
}

async function main() {
  const { sourceLanguage, targetLanguages, excludeFiles } = TRANSLATION_CONFIG;

  // 重置统计数据
  resetStats();

  console.log("🚀 自动国际化翻译脚本启动");
  console.log("=".repeat(50));
  console.log(
    `📖 源语言: ${
      LANGUAGE_MAP[sourceLanguage] || sourceLanguage
    } (${sourceLanguage})`
  );
  console.log(`🎯 目标语言: ${targetLanguages.length} 个语言`);
  targetLanguages.forEach((lang, index) => {
    console.log(`   ${index + 1}. ${LANGUAGE_MAP[lang] || lang} (${lang})`);
  });
  console.log(
    `⚙️  语言级并发: ${TRANSLATION_CONFIG.concurrency} 个语言同时处理`
  );
  console.log(
    `⚡ 文件级并发: ${TRANSLATION_CONFIG.concurrency} 个文件同时翻译`
  );
  console.log(`⏱️  批次间延迟: ${TRANSLATION_CONFIG.delayBetweenFiles}ms`);
  console.log(`⏱️  语言间延迟: ${TRANSLATION_CONFIG.delayBetweenLanguages}ms`);
  console.log(
    `🔄 跳过已存在: ${TRANSLATION_CONFIG.skipExisting ? "是" : "否"}`
  );
  console.log(`🚫 排除文件: ${excludeFiles.join(", ")}`);

  // 显示品牌名称保护信息
  const brandNames = Object.keys(BRAND_NAME_MAPPING);
  if (brandNames.length > 0) {
    console.log(`🛡️  品牌名称保护: ${brandNames.join(", ")}`);
  }

  console.log("=".repeat(50));

  // 验证源语言
  if (!LANGUAGE_MAP[sourceLanguage]) {
    console.error(`❌ 不支持的源语言: ${sourceLanguage}`);
    process.exit(1);
  }

  // 验证目标语言
  for (const lang of targetLanguages) {
    if (!LANGUAGE_MAP[lang]) {
      console.error(`❌ 不支持的目标语言: ${lang}`);
      process.exit(1);
    }
  }

  // 检查源语言文件夹是否存在
  const dictionariesPath = path.join(process.cwd(), "dictionaries");
  const sourcePath = path.join(dictionariesPath, sourceLanguage);

  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ 源语言文件夹不存在: ${sourcePath}`);
    process.exit(1);
  }

  if (targetLanguages.length === 0) {
    console.log(
      "⚠️  没有配置目标语言，请在 TRANSLATION_CONFIG.targetLanguages 中添加需要翻译的语言"
    );
    process.exit(0);
  }

  try {
    const startTime = Date.now();

    // 开始翻译
    await translateWithConcurrency(sourceLanguage, targetLanguages);

    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    console.log("\n" + "=".repeat(60));
    console.log("🎊 所有翻译任务完成！");
    console.log(`⏱️  总耗时: ${duration} 秒`);
    console.log(`📊 翻译统计:`);
    console.log(
      `   - 源语言: ${LANGUAGE_MAP[sourceLanguage]} (${sourceLanguage})`
    );
    console.log(`   - 目标语言: ${targetLanguages.length} 个`);
    console.log(`   - 翻译完成的语言:`);
    targetLanguages.forEach((lang, index) => {
      console.log(`     ${index + 1}. ${LANGUAGE_MAP[lang]} (${lang})`);
    });

    console.log(`📈 质量统计:`);
    console.log(`   - 总文件数: ${TRANSLATION_STATS.totalFiles}`);
    console.log(
      `   - 语法错误文件: ${TRANSLATION_STATS.syntaxErrors} (${(
        (TRANSLATION_STATS.syntaxErrors / TRANSLATION_STATS.totalFiles) *
        100
      ).toFixed(1)}%)`
    );

    if (TRANSLATION_STATS.aiFixAttempts > 0) {
      const fixSuccessRate = (
        (TRANSLATION_STATS.aiFixSuccesses / TRANSLATION_STATS.aiFixAttempts) *
        100
      ).toFixed(1);
      console.log(`🔧 AI修复统计:`);
      console.log(`   - 修复尝试: ${TRANSLATION_STATS.aiFixAttempts} 次`);
      console.log(`   - 修复成功: ${TRANSLATION_STATS.aiFixSuccesses} 次`);
      console.log(`   - 修复失败: ${TRANSLATION_STATS.aiFixFailures} 次`);
      console.log(`   - 修复成功率: ${fixSuccessRate}%`);
      if (TRANSLATION_STATS.aiFixFailures > 0) {
        console.log(
          `   - 生成错误报告: ${TRANSLATION_STATS.aiFixFailures} 个 *_translation_error.txt 文件`
        );
      }

      if (TRANSLATION_STATS.aiFixFailures > 0) {
        console.log(
          `🔴 需要手动修复的文件 (${TRANSLATION_STATS.aiFixFailures} 个):`
        );
        console.log("");
        TRANSLATION_STATS.failedFiles.forEach((failedFile, index) => {
          console.log(`   📄 ${index + 1}. ${failedFile.file}`);
          console.log(
            `      🌍 语言: ${
              LANGUAGE_MAP[failedFile.language] || failedFile.language
            } (${failedFile.language})`
          );
          console.log(`      ❌ 错误 (${failedFile.errors.length} 个):`);
          failedFile.errors.slice(0, 2).forEach((error) => {
            console.log(`         • ${error}`);
          });
          if (failedFile.errors.length > 2) {
            console.log(
              `         • ... 还有 ${failedFile.errors.length - 2} 个错误`
            );
          }
          if (index < TRANSLATION_STATS.failedFiles.length - 1) {
            console.log("");
          }
        });
        console.log("");
        console.log(`💡 修复说明:`);
        console.log(`   ✅ 失败的文件已恢复为英文原版，确保项目正常运行`);
        console.log(`   📄 错误翻译内容已保存为 *_translation_error.txt 文件`);
        console.log(`   🔧 请查看错误报告文件，手动修复语法错误后重新应用翻译`);
        console.log(
          `   💡 常见问题: 撇号转义(法语/意大利语)、模板字符串配对、逗号缺失`
        );
      }
    }

    if (excludeFiles.length > 0) {
      console.log(`🚫 排除的文件: ${excludeFiles.join(", ")}`);
    }
    if (brandNames.length > 0) {
      console.log(`🛡️  保护的品牌名称: ${brandNames.join(", ")}`);
    }
    console.log("=".repeat(60));
  } catch (error) {
    console.error("\n❌ 翻译过程中出现错误:", error);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  main().catch(console.error);
}
