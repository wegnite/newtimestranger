const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

// 加载Digimon数据
const digimonData = require("../data/digimon-list.json");

// Digimon图片输出目录
const outputDir = path.join(__dirname, "../public/images/digimons");

// 配置选项
const CONFIG = {
  concurrency: 6, // 并发下载数量（Digimon图片较小，可以适当增加）
  quality: 80, // WebP质量（Digimon图片质量可以稍高一些）
  retryAttempts: 3, // 失败重试次数
  timeout: 20000, // 超时时间（毫秒）
  resize: {
    enabled: false, // Digimon图片本身较小，不需要缩放
  },
};

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 从URL提取文件名
function getFileNameFromUrl(url, digimonName) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // 提取文件名（包含扩展名）
    const fileName = path.basename(pathname);

    if (fileName && fileName.includes(".")) {
      return fileName;
    }

    // 如果没有找到合适的文件名，使用Digimon名称
    const extension = path.extname(pathname) || ".png";
    const safeName = digimonName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/\-+/g, "-")
      .replace(/^\-|\-$/g, "");

    return `${safeName}${extension}`;
  } catch (error) {
    console.error(`❌ 解析URL失败: ${url}`, error.message);
    return `${digimonName.toLowerCase().replace(/\s+/g, "-")}.png`;
  }
}

// 下载图片函数，支持超时和重试
function downloadImage(url, filepath, attempt = 1) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    const request = https.get(url, { timeout: CONFIG.timeout }, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(filepath, () => {}); // 清理部分下载的文件

        if (attempt < CONFIG.retryAttempts) {
          console.log(
            `⚠ 重试 ${attempt}/${CONFIG.retryAttempts} - ${path.basename(
              filepath
            )}`
          );
          setTimeout(() => {
            downloadImage(url, filepath, attempt + 1)
              .then(resolve)
              .catch(reject);
          }, 1000 * attempt); // 指数退避
          return;
        }

        reject(
          new Error(
            `下载失败: HTTP ${response.statusCode} - ${path.basename(filepath)}`
          )
        );
        return;
      }

      response.pipe(file);

      file.on("finish", () => {
        file.close();
        resolve();
      });

      file.on("error", (err) => {
        file.close();
        fs.unlink(filepath, () => {}); // 清理部分下载的文件
        reject(err);
      });
    });

    request.on("error", (err) => {
      file.close();
      fs.unlink(filepath, () => {}); // 清理部分下载的文件

      if (attempt < CONFIG.retryAttempts) {
        console.log(
          `⚠ 网络错误重试 ${attempt}/${CONFIG.retryAttempts} - ${path.basename(
            filepath
          )}`
        );
        setTimeout(() => {
          downloadImage(url, filepath, attempt + 1)
            .then(resolve)
            .catch(reject);
        }, 1000 * attempt);
        return;
      }

      reject(err);
    });

    request.on("timeout", () => {
      request.destroy();
      file.close();
      fs.unlink(filepath, () => {});

      if (attempt < CONFIG.retryAttempts) {
        console.log(
          `⚠ 超时重试 ${attempt}/${CONFIG.retryAttempts} - ${path.basename(
            filepath
          )}`
        );
        setTimeout(() => {
          downloadImage(url, filepath, attempt + 1)
            .then(resolve)
            .catch(reject);
        }, 1000 * attempt);
        return;
      }

      reject(new Error(`下载超时: ${path.basename(filepath)}`));
    });
  });
}

// 转换为WebP格式
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath).webp({ quality: CONFIG.quality }).toFile(outputPath);

    // 删除原始文件
    fs.unlinkSync(inputPath);

    return true;
  } catch (error) {
    console.error(
      `❌ WebP转换失败: ${path.basename(inputPath)}`,
      error.message
    );
    return false;
  }
}

// 处理单个Digimon图片
async function processDigimon(digimon, index, total) {
  const { "digimon-img-src": imageUrl, name: digimonName } = digimon;

  if (!imageUrl) {
    console.log(`⚠ 跳过 ${digimonName}: 没有图片URL`);
    return { success: false, reason: "no-url" };
  }

  try {
    // 生成文件名
    const originalFileName = getFileNameFromUrl(imageUrl, digimonName);
    const webpFileName = originalFileName.replace(/\.[^.]+$/, ".webp");

    const originalPath = path.join(outputDir, originalFileName);
    const webpPath = path.join(outputDir, webpFileName);

    // 检查文件是否已存在
    if (fs.existsSync(webpPath)) {
      console.log(`✅ 已存在 ${index + 1}/${total} - ${digimonName}`);
      return { success: true, reason: "already-exists" };
    }

    console.log(`📥 下载中 ${index + 1}/${total} - ${digimonName}`);

    // 下载原始图片
    await downloadImage(imageUrl, originalPath);

    // 转换为WebP
    const converted = await convertToWebP(originalPath, webpPath);

    if (converted) {
      console.log(`✅ 完成 ${index + 1}/${total} - ${digimonName}`);
      return { success: true, reason: "downloaded" };
    } else {
      return { success: false, reason: "conversion-failed" };
    }
  } catch (error) {
    console.error(
      `❌ 处理失败 ${index + 1}/${total} - ${digimonName}:`,
      error.message
    );
    return { success: false, reason: "error", error: error.message };
  }
}

// 并发处理Digimon图片
async function processConcurrently(digimons, concurrency) {
  const results = {
    success: 0,
    failed: 0,
    skipped: 0,
    errors: [],
  };

  console.log(
    `🚀 开始下载 ${digimons.length} 个Digimon图片，并发数: ${concurrency}`
  );
  console.log(`📁 输出目录: ${outputDir}`);
  console.log("");

  for (let i = 0; i < digimons.length; i += concurrency) {
    const batch = digimons.slice(i, i + concurrency);

    const batchPromises = batch.map((digimon, batchIndex) =>
      processDigimon(digimon, i + batchIndex, digimons.length)
    );

    const batchResults = await Promise.all(batchPromises);

    // 统计结果
    batchResults.forEach((result) => {
      if (result.success) {
        if (result.reason === "already-exists") {
          results.skipped++;
        } else {
          results.success++;
        }
      } else {
        results.failed++;
        if (result.error) {
          results.errors.push(result.error);
        }
      }
    });

    // 显示进度
    const processed = Math.min(i + concurrency, digimons.length);
    const progress = ((processed / digimons.length) * 100).toFixed(1);
    console.log(`📊 进度: ${processed}/${digimons.length} (${progress}%)`);
    console.log("");
  }

  return results;
}

// 清理临时文件
async function cleanupTempFiles() {
  try {
    const files = fs.readdirSync(outputDir);
    const tempFiles = files.filter(
      (file) =>
        file.endsWith(".tmp") ||
        file.endsWith(".temp") ||
        (file.includes(".") && !file.endsWith(".webp"))
    );

    if (tempFiles.length > 0) {
      console.log(`🧹 清理 ${tempFiles.length} 个临时文件...`);
      tempFiles.forEach((file) => {
        const filePath = path.join(outputDir, file);
        try {
          fs.unlinkSync(filePath);
        } catch (error) {
          console.warn(`⚠ 无法删除临时文件: ${file}`);
        }
      });
    }
  } catch (error) {
    console.warn("⚠ 清理临时文件时出错:", error.message);
  }
}

// 主函数
async function downloadAllDigimonImages() {
  try {
    console.log("🎯 Digimon图片下载器启动");
    console.log(`📊 找到 ${digimonData.length} 个Digimon`);
    console.log("");

    // 过滤出有图片URL的Digimon
    const digimonsWithImages = digimonData.filter(
      (digimon) =>
        digimon["digimon-img-src"] && digimon["digimon-img-src"].trim() !== ""
    );

    console.log(`📸 其中 ${digimonsWithImages.length} 个有图片URL`);
    console.log("");

    if (digimonsWithImages.length === 0) {
      console.log("❌ 没有找到需要下载的Digimon图片");
      return;
    }

    // 开始下载
    const results = await processConcurrently(
      digimonsWithImages,
      CONFIG.concurrency
    );

    // 清理临时文件
    await cleanupTempFiles();

    // 显示最终结果
    console.log("🎉 下载完成！");
    console.log("📊 统计结果:");
    console.log(`  ✅ 成功下载: ${results.success}`);
    console.log(`  ⏭ 跳过(已存在): ${results.skipped}`);
    console.log(`  ❌ 失败: ${results.failed}`);
    console.log(`  📁 输出目录: ${outputDir}`);

    if (results.errors.length > 0) {
      console.log("\n❌ 错误详情:");
      results.errors.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    }
  } catch (error) {
    console.error("💥 程序执行出错:", error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  downloadAllDigimonImages();
}

module.exports = {
  downloadAllDigimonImages,
  processDigimon,
  CONFIG,
};
