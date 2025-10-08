const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

// 加载关卡数据
const levelsData = require("../data/levelsSitemap.json");

// 缩略图输出目录
const outputDir = path.join(__dirname, "../public/images/levelResult");

// 从命令行参数获取游戏名称和网站URL
function getArgsFromCommandLine() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("❌ 错误：请提供游戏名称作为命令行参数");
    console.log(
      '📖 使用方法：node download-youtube-thumbnails-crop.js "游戏名称" [网站URL]'
    );
    console.log(
      '📖 示例：npm run download:crop "Time Stranger" "digimonstorytimestranger.com"'
    );
    process.exit(1);
  }

  return {
    gameName: args[0],
    websiteUrl: args[1] || "digimonstorytimestranger.com", // 默认URL
  };
}

// 配置选项
const CONFIG = {
  concurrency: 8, // 并发下载数量（Windows推荐8以下，避免文件句柄冲突）
  quality: 80, // WebP质量
  retryAttempts: 3, // 失败重试次数
  timeout: 30000, // 超时时间（毫秒）
  crop: {
    enabled: true, // 是否启用裁剪
    // 针对1280x720的图片，只裁剪左右两侧，保持完整高度
    left: 336, // 裁剪起始X坐标 (1280的25%)
    top: 0, // 不裁剪顶部，保持完整高度
    width: 549, // 裁剪宽度 (1280的50%)
    height: 720, // 保持完整高度
    deleteOriginal: false, // 是否删除裁剪前的原图（true=删除，false=保留）
  },
};

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 将游戏名称转换为SEO友好的文件名格式
function formatGameNameForSEO(gameName) {
  return gameName
    .trim()
    .replace(/\s+/g, "-") // 空格替换为连字符
    .replace(/[^a-zA-Z0-9\-]/g, "") // 移除特殊字符
    .replace(/\-+/g, "-") // 多个连字符合并为一个
    .replace(/^\-|\-$/g, ""); // 移除开头和结尾的连字符
}

// 从YouTube URL提取视频ID
function getYouTubeVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
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
            `下载失败，已重试 ${CONFIG.retryAttempts} 次：HTTP ${response.statusCode}`
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

      reject(new Error(`下载超时，已重试 ${CONFIG.retryAttempts} 次`));
    });

    request.on("error", (err) => {
      file.close();
      fs.unlink(filepath, () => {});

      if (attempt < CONFIG.retryAttempts) {
        console.log(
          `⚠ 网络错误重试 ${attempt}/${CONFIG.retryAttempts} - ${path.basename(
            filepath
          )}: ${err.message}`
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
  });
}

// 裁剪并转换为WebP格式
async function cropAndConvertToWebP(inputPath, outputPath) {
  let sharpInstance = null;

  try {
    sharpInstance = sharp(inputPath);

    // 添加裁剪处理
    if (CONFIG.crop.enabled) {
      sharpInstance = sharpInstance.extract({
        left: CONFIG.crop.left,
        top: CONFIG.crop.top,
        width: CONFIG.crop.width,
        height: CONFIG.crop.height,
      });
    }

    // 转换为WebP
    await sharpInstance.webp({ quality: CONFIG.quality }).toFile(outputPath);

    // 强制释放Sharp资源
    if (sharpInstance) {
      try {
        sharpInstance.destroy();
      } catch (destroyError) {
        // 忽略销毁错误
      }
    }

    // 强制垃圾回收（如果可用）
    if (global.gc) {
      global.gc();
    }

    // 等待一个事件循环，让资源完全释放
    await new Promise((resolve) => setImmediate(resolve));

    // 根据配置决定是否删除原始JPG临时文件
    if (CONFIG.crop.deleteOriginal) {
      try {
        fs.unlinkSync(inputPath);
        // 删除成功，静默处理
      } catch (unlinkError) {
        // Windows文件权限问题，静默处理，稍后批量清理
        // 不打印重试信息，避免日志污染
      }
    }

    return true;
  } catch (error) {
    console.error(`✗ 裁剪转换失败 ${path.basename(inputPath)}:`, error.message);

    // 确保Sharp实例被销毁
    if (sharpInstance) {
      try {
        sharpInstance.destroy();
      } catch (destroyError) {
        // 忽略销毁错误
      }
    }

    // 转换失败时，根据配置决定是否清理原图
    if (CONFIG.crop.deleteOriginal) {
      try {
        fs.unlinkSync(inputPath);
      } catch (cleanupError) {
        // 静默处理
      }
    }
    try {
      fs.unlinkSync(outputPath);
    } catch (cleanupError) {
      // 静默处理
    }
    return false;
  }
}

// 处理单个关卡
async function processLevel(
  level,
  index,
  total,
  gameNameFormatted,
  websiteUrl
) {
  const videoId = getYouTubeVideoId(level.videoUrl);
  if (!videoId) {
    throw new Error(`无法从URL提取视频ID: ${level.videoUrl}`);
  }

  // SEO友好的文件名格式：Game-Name-Level-X.webp
  const seoFilename = `${gameNameFormatted}-Level-${level.id}.webp`;
  const finalPath = path.join(outputDir, seoFilename);

  // 如果WebP文件已存在则跳过
  if (fs.existsSync(finalPath)) {
    console.log(`⏭ [${index + 1}/${total}] 跳过关卡 ${level.id} (文件已存在: ${finalPath})`);
    return { success: true, skipped: true };
  }

  // YouTube缩略图URL（maxresdefault获取最高质量）
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // 临时文件路径
  const tempFilename = `${gameNameFormatted}-Level-${
    level.id
  }-temp-${Date.now()}.jpg`;
  const tempPath = path.join(outputDir, tempFilename);

  console.log(
    `📥 [${index + 1}/${total}] 下载并裁剪关卡 ${level.id} - ${seoFilename}...`
  );

  try {
    // 下载原始图片
    await downloadImage(thumbnailUrl, tempPath);

    // 裁剪并转换为WebP
    const converted = await cropAndConvertToWebP(tempPath, finalPath);

    if (converted) {
      console.log(
        `✓ [${index + 1}/${total}] 完成关卡 ${level.id} - ${seoFilename}`
      );
      return { success: true, skipped: false };
    } else {
      return { success: false, skipped: false };
    }
  } catch (error) {
    // 清理临时文件
    fs.unlink(tempPath, () => {});
    throw error;
  }
}

// 并发处理器
async function processConcurrently(
  levels,
  concurrency,
  gameNameFormatted,
  websiteUrl
) {
  const results = {
    success: 0,
    errors: 0,
    skipped: 0,
    startTime: Date.now(),
  };

  // 创建批次进行并发处理
  const batches = [];
  for (let i = 0; i < levels.length; i += concurrency) {
    batches.push(levels.slice(i, i + concurrency));
  }

  let processedCount = 0;
  const total = levels.length;

  for (const batch of batches) {
    const promises = batch.map(async (level, batchIndex) => {
      const globalIndex = processedCount + batchIndex;
      try {
        const result = await processLevel(
          level,
          globalIndex,
          total,
          gameNameFormatted,
          websiteUrl
        );
        if (result.skipped) {
          results.skipped++;
        } else {
          results.success++;
        }
      } catch (error) {
        console.error(
          `✗ [${globalIndex + 1}/${total}] 处理关卡 ${level.id} 时出错:`,
          error.message
        );
        results.errors++;
      }
    });

    await Promise.all(promises);
    processedCount += batch.length;

    // 进度更新
    const elapsed = ((Date.now() - results.startTime) / 1000).toFixed(1);
    const progress = ((processedCount / total) * 100).toFixed(1);
    console.log(
      `\n📊 进度: ${processedCount}/${total} (${progress}%) | 用时: ${elapsed}秒\n`
    );
  }

  return results;
}

// 强力清理临时文件函数（Windows专用）
async function forceCleanupTempFiles() {
  try {
    const files = fs.readdirSync(outputDir);
    const tempFiles = files.filter(
      (file) => file.includes("-temp-") && file.endsWith(".jpg")
    );

    if (tempFiles.length === 0) {
      console.log(`\n✨ 没有发现JPG临时文件，目录已清洁`);
      return;
    }

    console.log(`\n🧹 发现 ${tempFiles.length} 个JPG临时文件，开始强力清理...`);

    let successCount = 0;
    let failCount = 0;

    // 使用更长的延迟，给Windows更多时间释放文件句柄
    console.log(`⏳ 等待5秒，让Windows释放文件句柄...`);
    await new Promise((resolve) => setTimeout(resolve, 5000));

    for (const tempFile of tempFiles) {
      const tempPath = path.join(outputDir, tempFile);

      try {
        // 尝试改变文件属性（Windows特有）
        try {
          const stats = fs.statSync(tempPath);
          if (stats.isFile()) {
            // 移除只读属性
            fs.chmodSync(tempPath, 0o666);
          }
        } catch (attrError) {
          // 忽略属性错误
        }

        // 尝试删除
        fs.unlinkSync(tempPath);
        successCount++;
      } catch (error) {
        failCount++;
        // 只在最后汇总显示失败的文件
      }
    }

    console.log(`🧹 清理完成: 成功删除 ${successCount} 个JPG文件`);

    if (failCount > 0) {
      console.log(`⚠ ${failCount} 个文件因Windows权限问题无法删除`);
      console.log(
        `💡 这些临时文件不影响网站运行，可以手动删除或重启电脑后自动清理`
      );
      console.log(`💡 或者稍后运行: npm run clean:crop`);
    } else {
      console.log(`✨ 所有JPG临时文件已清理完毕！`);
    }
  } catch (error) {
    console.log(`⚠ 清理临时文件时出错: ${error.message}`);
  }
}

// 清理临时文件函数
async function cleanupTempFiles() {
  await forceCleanupTempFiles();
}

// 主函数
async function downloadAllThumbnails() {
  // 获取游戏名称
  const { gameName, websiteUrl } = getArgsFromCommandLine();
  const gameNameFormatted = formatGameNameForSEO(gameName);

  console.log(`🚀 开始下载并裁剪 ${levelsData.length} 个缩略图...`);
  console.log(`🎮 游戏名称: "${gameName}"`);
  console.log(`📝 SEO文件名格式: "${gameNameFormatted}-Level-X.webp"`);
  console.log(`📁 输出目录: ${outputDir}`);
  console.log(
    `⚙️  配置: ${CONFIG.concurrency} 个并发下载，WebP质量 ${CONFIG.quality}%`
  );

  // 显示裁剪配置
  if (CONFIG.crop.enabled) {
    console.log(`✂️  图片裁剪: 已启用`);
    console.log(`   - 裁剪区域: X=${CONFIG.crop.left}, Y=${CONFIG.crop.top}`);
    console.log(`   - 裁剪尺寸: ${CONFIG.crop.width}x${CONFIG.crop.height}px`);
    console.log(`   - 说明: 提取中间房间游戏场景`);
    console.log(`   - 保留原图: ${CONFIG.crop.deleteOriginal ? '否' : '是'}`);
  } else {
    console.log(`✂️  图片裁剪: 已禁用`);
  }

  console.log(""); // 空行

  try {
    const results = await processConcurrently(
      levelsData,
      CONFIG.concurrency,
      gameNameFormatted,
      websiteUrl
    );

    const totalTime = ((Date.now() - results.startTime) / 1000).toFixed(1);
    const avgTime = (totalTime / levelsData.length).toFixed(2);

    console.log("\n" + "=".repeat(60));
    console.log(`🎉 下载并裁剪完成！`);
    console.log(`✓ 成功: ${results.success} 个文件`);
    console.log(`⏭ 跳过: ${results.skipped} 个文件`);
    console.log(`✗ 失败: ${results.errors} 个文件`);
    console.log(`⏱️  总用时: ${totalTime}秒`);
    console.log(`📈 平均每个文件: ${avgTime}秒`);
    console.log(`📁 文件保存在: ${outputDir}`);
    console.log(`🔍 SEO优化文件名格式: ${gameNameFormatted}-Level-X.webp`);
    if (CONFIG.crop.enabled) {
      console.log(`✂️  所有图片已裁剪为中间房间场景 (${CONFIG.crop.width}x${CONFIG.crop.height}px)`);
    }

    // 清理临时文件
    await cleanupTempFiles();
  } catch (error) {
    console.error("❌ 致命错误:", error.message);
    process.exit(1);
  }
}

// 运行脚本
downloadAllThumbnails().catch(console.error);
