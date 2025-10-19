const fs = require("fs");
const path = require("path");

// 改写模板配置
const rewriteTemplates = [
  {
    // 模板1：故事性开头
    intro:
      "Embark on your digital journey with the {missionName} mission in Digimon Story Time Stranger. This comprehensive walkthrough will help you navigate through every challenge and emerge victorious!",
    section: "Complete {missionName} Walkthrough Strategy",
    subsection: "Step-by-Step Walkthrough Guide",
  },
  {
    // 模板2：问题导向开头
    intro:
      "Struggling with the {missionName} mission? Our detailed walkthrough will guide you through every objective, ensuring you master this challenging quest in Digimon Story Time Stranger!",
    section: "{missionName} Walkthrough Strategy",
    subsection: "Complete Walkthrough Breakdown",
  },
  {
    // 模板3：技巧提示开头
    intro:
      "Master the {missionName} mission with our expert walkthrough strategies. Learn advanced techniques, battle tactics, and progression tips for Digimon Story Time Stranger!",
    section: "{missionName} Walkthrough Strategy",
    subsection: "Complete Walkthrough Guide",
  },
  {
    // 模板4：背景介绍开头
    intro:
      "Dive deeper into your Digimon Story Time Stranger adventure with the {missionName} mission. Our comprehensive walkthrough will help you overcome every obstacle and advance your journey!",
    section: "{missionName} Walkthrough Strategy",
    subsection: "Complete Walkthrough Breakdown",
  },
];

// 文章目录
const articlesDir = path.join(__dirname, "../walkthrough/posts/en");

// 获取所有文章文件
const articleFiles = fs
  .readdirSync(articlesDir)
  .filter((file) => file.endsWith(".mdx"))
  .sort();

console.log(`Found ${articleFiles.length} articles to process`);

// 处理每篇文章
articleFiles.forEach((file, index) => {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, "utf8");

  // 提取任务名称
  const taskNameMatch = content.match(/taskName: "([^"]+)"/);
  if (!taskNameMatch) {
    console.log(`Skipping ${file} - no taskName found`);
    return;
  }

  const taskName = taskNameMatch[1];
  const templateIndex = index % rewriteTemplates.length;
  const template = rewriteTemplates[templateIndex];

  // 生成新的内容
  const newIntro = template.intro.replace("{missionName}", taskName);
  const newSection = template.section.replace("{missionName}", taskName);
  const newSubsection = template.subsection;

  // 替换内容
  let newContent = content
    .replace(/This is a walkthrough for the [^!]+!/, newIntro)
    .replace(/## [^W]+Walkthrough/, `## ${newSection}`)
    .replace(/### [^C]+Guide/, `### ${newSubsection}`)
    .replace(/### [^C]+Breakdown/, `### ${newSubsection}`)
    .replace(/### [^S]+Strategy/, `### ${newSubsection}`);

  // 更新描述
  const descriptionMatch = content.match(/description: "([^"]+)"/);
  if (descriptionMatch) {
    const newDescription = `Master the ${taskName} mission with our comprehensive walkthrough. Learn battle strategies, game mechanics, and progression tips for Digimon Story Time Stranger.`;
    newContent = newContent.replace(
      descriptionMatch[0],
      `description: "${newDescription}"`
    );
  }

  // 写回文件
  fs.writeFileSync(filePath, newContent);
  console.log(`✓ Rewritten ${file} with template ${templateIndex + 1}`);
});

console.log("All articles have been rewritten!");
