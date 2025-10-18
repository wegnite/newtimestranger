# Digimon Story Time Stranger Levels - 游戏攻略网站

一个基于 Next.js 和 Cloudflare Workers 的多语言游戏攻略网站，为 Digimon Story Time Stranger 游戏提供详细的关卡攻略。

## 🚀 特性

- 🌍 **多语言支持**: 支持英语、中文、日语等多种语言
- ⚡ **高性能**: 基于 Cloudflare Workers 的边缘计算
- 📱 **响应式设计**: 适配各种设备尺寸
- 🎮 **游戏攻略**: 详细的关卡攻略和视频教程
- 🔍 **SEO 优化**: 针对搜索引擎优化
- 🎨 **现代 UI**: 使用 Tailwind CSS 构建的美观界面

## 🛠️ 技术栈

- **框架**: Next.js 14.2.15
- **运行时**: Cloudflare Workers
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI
- **部署**: Cloudflare Workers

## 📦 快速开始
****
### 环境要求

- Node.js 18+
- npm/yarn/pnpm

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
# 使用 Next.js 开发服务器
npm run dev

# 使用 Cloudflare Workers 运行时预览
npm run preview
```

### 构建和部署

```bash
# 构建项目
npm run build

# 部署到 Cloudflare Workers
npm run deploy
```

## 🌐 部署

本项目已配置为在 Cloudflare Workers 上运行。详细部署说明请参考 [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)。

## 📁 项目结构

```
crowd-express-levels/
├── app/                    # Next.js App Router
│   └── (default)/         # 默认布局
│       └── [lang]/        # 多语言路由
├── components/            # React 组件
├── data/                 # 静态数据
├── dictionaries/         # 国际化字典
├── public/              # 静态资源
├── scripts/             # 构建脚本
├── wrangler.jsonc       # Cloudflare Workers 配置
├── open-next.config.ts  # OpenNext 配置
└── CLOUDFLARE_DEPLOYMENT.md  # 部署指南
```

## 🎮 游戏攻略

网站包含 Digimon Story Time Stranger 游戏的详细攻略：

- **关卡 1-169**: 完整的关卡攻略
- **视频教程**: YouTube 视频链接
- **多语言支持**: 支持多种语言的攻略内容

## 🌍 国际化

支持的语言：

- 🇺🇸 英语 (en)
- 🇨🇳 中文 (zh)
- 🇯🇵 日语 (ja)
- 🇹🇼 繁体中文 (tw)
- 🇩🇪 德语 (de)
- 🇰🇷 韩语 (ko)
- 🇫🇷 法语 (fr)
- 🇳🇱 荷兰语 (nl)
- 🇷🇺 俄语 (ru)

## 🔧 开发

### 添加新语言

1. 在 `dictionaries/` 目录下创建新的语言文件夹
2. 复制现有语言文件并翻译内容
3. 在 `i18n.ts` 中添加新语言代码

### 添加新关卡

1. 在 `data/levels.ts` 中添加关卡数据
2. 上传对应的缩略图到 `public/images/thumbnails/`
3. 更新博客文章（如果需要）

### 构建脚本

```bash
# 生成关卡 JSON 数据
npm run build:levels

# 生成博客缓存
npm run build:blog

# 翻译国际化文件
npm run translate

# 翻译博客文章
npm run translateBlog
```

## 📊 性能优化

- **静态生成**: 大部分页面使用静态生成
- **图片优化**: 使用 Cloudflare Images
- **缓存策略**: 配置了合理的缓存策略
- **CDN**: 利用 Cloudflare 的全球 CDN

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证。

## 🔗 相关链接

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Next.js 文档](https://nextjs.org/docs)
- [OpenNext 文档](https://opennext.js.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

**注意**: 本项目已优化为在 Cloudflare Workers 环境中运行，提供了更好的性能和全球访问速度。
