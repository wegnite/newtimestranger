const fs = require('fs');
const path = require('path');

// 颜色输出辅助函数
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 递归复制文件夹
function copyRecursive(source, target) {
  if (!fs.existsSync(source)) {
    log(`Source directory ${source} does not exist`, 'red');
    return;
  }

  // 创建目标目录（如果不存在）
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // 获取源目录中的所有文件和文件夹
  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      // 递归复制子文件夹
      copyRecursive(sourcePath, targetPath);
    } else {
      // 复制文件
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

// 主函数
async function postBuild() {
  log('🚀 Starting post-build processing...', 'blue');

  const outDir = path.join(process.cwd(), 'out');
  const enDir = path.join(outDir, 'en');

  // 检查 out 目录是否存在
  if (!fs.existsSync(outDir)) {
    log('Error: out directory does not exist. Please run next build first.', 'red');
    process.exit(1);
  }

  // 检查 en 目录是否存在
  if (!fs.existsSync(enDir)) {
    log('Error: out/en directory does not exist.', 'red');
    process.exit(1);
  }

  // Step 1: 复制英文版内容到根目录
  log('📋 Copying English content to root directory...', 'yellow');

  const enFiles = fs.readdirSync(enDir);
  let copiedCount = 0;

  enFiles.forEach((file) => {
    const sourcePath = path.join(enDir, file);
    const targetPath = path.join(outDir, file);

    // 跳过已存在的语言文件夹
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()
        && ['en', 'zh', 'ja', 'tw', 'de', 'ko', 'fr'].includes(file)) {
      log(`  Skipping language folder: ${file}`, 'blue');
      return;
    }

    if (fs.statSync(sourcePath).isDirectory()) {
      log(`  Copying directory: ${file}`, 'green');
      copyRecursive(sourcePath, targetPath);
    } else {
      // 不覆盖已存在的根目录文件（如 404.html, favicon.ico 等）
      if (!fs.existsSync(targetPath)) {
        log(`  Copying file: ${file}`, 'green');
        fs.copyFileSync(sourcePath, targetPath);
        copiedCount++;
      }
    }
  });

  // Step 2: 创建或更新 index.html（从 en.html 复制）
  const indexPath = path.join(outDir, 'index.html');
  const enHtmlPath = path.join(outDir, 'en.html');

  if (fs.existsSync(enHtmlPath)) {
    log('📝 Copying en.html to index.html...', 'yellow');
    fs.copyFileSync(enHtmlPath, indexPath);
    log('  index.html created successfully', 'green');
  } else {
    log('⚠️  Warning: en.html not found, skipping index.html creation', 'yellow');
  }

  // Step 3: 创建 404.html（GitHub Pages 需要）
  const notFoundPath = path.join(outDir, '404.html');
  if (!fs.existsSync(notFoundPath)) {
    log('📝 Creating 404.html for GitHub Pages...', 'yellow');

    const html404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found | Digimon Story Time Stranger</title>
  <meta http-equiv="refresh" content="0; url=/">
  <script>
    // 尝试根据路径重定向到对应的语言版本
    const path = window.location.pathname;
    const supportedLangs = ['en', 'zh', 'ja', 'tw', 'de', 'ko', 'fr'];
    const pathParts = path.split('/').filter(p => p);

    if (pathParts.length > 0 && !supportedLangs.includes(pathParts[0])) {
      // 如果路径不是以语言代码开头，重定向到英文版
      window.location.href = '/en' + path;
    } else {
      // 否则重定向到首页
      window.location.href = '/';
    }
  </script>
</head>
<body>
  <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
    <h1>404 - Page Not Found</h1>
    <p>Redirecting to homepage...</p>
  </div>
</body>
</html>`;

    fs.writeFileSync(notFoundPath, html404);
    log('  404.html created successfully', 'green');
  }

  // Step 4: 创建 .nojekyll 文件（GitHub Pages 需要）
  const nojekyllPath = path.join(outDir, '.nojekyll');
  if (!fs.existsSync(nojekyllPath)) {
    log('📝 Creating .nojekyll file for GitHub Pages...', 'yellow');
    fs.writeFileSync(nojekyllPath, '');
    log('  .nojekyll created successfully', 'green');
  }

  // Step 5: 生成语言切换提示文件
  const langSuggestPath = path.join(outDir, '_lang_suggest.js');
  if (!fs.existsSync(langSuggestPath)) {
    log('📝 Creating language suggestion script...', 'yellow');

    const langScript = `// Language detection and suggestion
(function() {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.split('-')[0].toLowerCase();
  const supportedLangs = {
    'zh': '/zh',
    'ja': '/ja',
    'de': '/de',
    'ko': '/ko',
    'fr': '/fr',
    'tw': '/tw'
  };

  // Only suggest on homepage
  if (window.location.pathname === '/' && supportedLangs[lang]) {
    const message = {
      'zh': '切换到中文版？',
      'ja': '日本語版に切り替えますか？',
      'de': 'Zur deutschen Version wechseln?',
      'ko': '한국어 버전으로 전환하시겠습니까?',
      'fr': 'Passer à la version française ?',
      'tw': '切換到繁體中文版？'
    };

    // Create a simple language suggestion banner
    setTimeout(function() {
      if (!sessionStorage.getItem('langSuggested')) {
        const suggest = confirm(message[lang] || 'Switch to your language version?');
        if (suggest) {
          window.location.href = supportedLangs[lang];
        }
        sessionStorage.setItem('langSuggested', 'true');
      }
    }, 1000);
  }
})();`;

    fs.writeFileSync(langSuggestPath, langScript);
    log('  _lang_suggest.js created successfully', 'green');
  }

  log(`\n✅ Post-build processing completed successfully!`, 'green');
  log(`📊 Summary:`, 'blue');
  log(`  - English content copied to root directory`, 'green');
  log(`  - 404.html created for error handling`, 'green');
  log(`  - .nojekyll file created for GitHub Pages`, 'green');
  log(`  - Language suggestion script created`, 'green');
  log(`\n🎉 Your site is ready for deployment to GitHub Pages!`, 'blue');
}

// 执行后处理
postBuild().catch((error) => {
  log(`Error during post-build: ${error.message}`, 'red');
  process.exit(1);
});