# Next.js 项目改造为 Cloudflare Pages 静态部署完整指南

## 项目背景

本项目原本是一个 Next.js SSR（服务端渲染）项目，使用了以下技术栈：
- Next.js 14 with App Router
- OpenNext deployment with `output: "standalone"`
- 多语言支持（i18n）
- MDX 博客系统
- 动态路由

## 改造目标

将项目从 SSR 改造为纯静态导出，实现在 Cloudflare Pages 上的完全静态托管，同时保持所有功能正常运行。

## 核心改造步骤

### 1. 修改 Next.js 配置

**关键改动：将 `output: "standalone"` 改为 `output: "export"`**

```javascript
// next.config.js
const nextConfig = {
  output: "export",           // 从 "standalone" 改为 "export"
  trailingSlash: true,        // 静态导出需要
  images: {
    unoptimized: true,        // 静态导出不支持图片优化
  },
  // ... 其他配置
}
```

### 2. 为所有动态路由添加 generateStaticParams

静态导出要求所有动态路由必须在构建时预生成。需要为每个动态路由添加 `generateStaticParams` 函数：

```typescript
// app/(default)/[lang]/videos/[id]/page.tsx
export async function generateStaticParams() {
  const langs = i18n.locales;
  const levels = await getAllLevels();
  
  const params = [];
  for (const lang of langs) {
    for (const level of levels) {
      params.push({ lang, id: level.id.toString() });
    }
  }
  return params;
}
```

**需要添加 generateStaticParams 的文件：**
- `app/(default)/[lang]/page.tsx`
- `app/(default)/[lang]/videos/[id]/page.tsx`
- `app/(default)/[lang]/blog/page.tsx`
- `app/(default)/[lang]/blog/[slug]/page.tsx`
- `app/(default)/[lang]/game/[id]/page.tsx`
- 所有其他包含动态路由的页面

### 3. 移除服务端依赖

#### 3.1 移除 server-only 导入
```typescript
// lib/dictionary.ts
// 删除: import "server-only";
```

#### 3.2 替换 searchParams 为客户端处理
服务端组件的 searchParams 在静态导出时不可用，需要改为客户端组件：

```typescript
// 创建客户端组件包装器
"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LevelContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  // ... 处理逻辑
}

// 使用 Suspense 包装
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LevelContent />
    </Suspense>
  );
}
```

### 4. 处理中间件限制

静态导出不支持 middleware.ts，需要：
1. 重命名为 `middleware.ts.bak` 或删除
2. 将中间件逻辑迁移到客户端或预构建时处理

### 5. 移除 Next.js Image 组件优化

静态导出不完全支持 next/image 的优化功能，需要替换为标准 img 标签：

```typescript
// 替换前
import Image from "next/image";
<Image src="/logo.png" width={32} height={32} alt="Logo" />

// 替换后
<img src="/logo.png" width="32" height="32" alt="Logo" className="w-8 h-8" />
```

### 6. 处理缓存文件

博客系统依赖 `.cache` 目录中的预生成数据：

```bash
# .gitignore - 移除 .cache，确保缓存文件被提交
# 删除这一行：.cache
```

### 7. 简化 URL 结构（可选）

为了更好的用户体验，将英文内容设为默认语言，无需 `/en` 前缀：

```typescript
// 创建根路由页面
// app/page.tsx - 默认英文内容
// app/videos/page.tsx - 英文关卡页
// app/[lang]/page.tsx - 其他语言页面
```

## 依赖版本管理

### 关键依赖版本固定

```json
{
  "dependencies": {
    "next": "14.2.15",        // 固定版本，避免兼容性问题
  },
  "devDependencies": {
    "eslint": "^8.57.0",      // ESLint v9 与 eslint-config-next 不兼容
    "eslint-config-next": "14.2.15"  // 与 Next.js 版本保持一致
  }
}
```

## Cloudflare Pages 配置

### 构建配置

创建 `.cloudflare/config.json`（如果需要）：
```json
{
  "build": {
    "command": "npm run build"
  }
}
```

### next-sitemap 配置

```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  outDir: "./out",  // 重要：指定输出目录为 out
  // ... 其他配置
}
```

## 常见问题及解决方案

### 1. npm 依赖解析错误

**问题：** `npm error ERESOLVE unable to resolve dependency tree`

**解决方案：**
- 固定 Next.js 版本
- 确保 eslint 和 eslint-config-next 版本兼容
- 移除不必要的依赖（如 @cloudflare/next-on-pages）

### 2. 构建时找不到缓存文件

**问题：** `ENOENT: no such file or directory, open '.cache/blog/zh.json'`

**解决方案：**
- 从 .gitignore 中移除 .cache
- 提交缓存文件到仓库
- 或在构建脚本中生成缓存

### 3. Middleware 不兼容

**问题：** `Middleware cannot be used with output: export`

**解决方案：**
- 重命名或删除 middleware.ts
- 将逻辑移至客户端或构建时处理

### 4. 页面 404 或加载延迟

**问题：** 根路径访问显示 404 或长时间加载

**解决方案：**
- 创建根路径页面文件
- 移除不必要的重定向逻辑
- 确保 generateStaticParams 正确生成所有路径

### 5. searchParams 未定义

**问题：** `useSearchParams() should be wrapped in a suspense boundary`

**解决方案：**
- 将使用 searchParams 的组件改为客户端组件
- 使用 Suspense 包装组件

## 构建和部署流程

### 本地构建测试

```bash
# 1. 生成必要的数据文件
npm run build:levels
npm run build:blog

# 2. 构建项目
npm run build

# 3. 本地测试静态文件
npx serve out
```

### Cloudflare Pages 部署

1. 连接 GitHub 仓库
2. 设置构建命令：`npm run build`
3. 设置输出目录：`out`
4. 设置环境变量（如 SITE_URL）
5. 触发部署

## 性能优化建议

1. **预生成所有页面**：确保 generateStaticParams 覆盖所有可能的路由
2. **优化图片**：使用 WebP 格式，添加适当的尺寸属性
3. **减少客户端 JavaScript**：尽可能使用静态内容
4. **启用缓存**：配置适当的缓存头

## 迁移检查清单

- [ ] next.config.js 配置为 `output: "export"`
- [ ] 所有动态路由添加了 generateStaticParams
- [ ] 移除或替换了所有服务端特定代码
- [ ] 处理了 middleware.ts
- [ ] 替换了 next/image 组件
- [ ] 修复了依赖版本兼容性
- [ ] 配置了 next-sitemap 的输出目录
- [ ] 本地构建测试通过
- [ ] Cloudflare Pages 部署成功

## 总结

从 Next.js SSR 迁移到 Cloudflare Pages 静态部署是一个系统性工程，需要：

1. **理解静态导出的限制**：不支持服务端特性、中间件、动态路由等
2. **全面的代码改造**：从服务端渲染改为纯静态生成
3. **细致的测试**：确保所有功能在静态环境下正常工作
4. **持续的优化**：利用 CDN 和静态托管的优势提升性能

通过这次改造，项目成功实现了：
- ✅ 完全静态化，无需服务器
- ✅ 全球 CDN 加速
- ✅ 零运维成本
- ✅ 保持原有功能完整性
- ✅ 提升页面加载速度

最终生成了 726+ 个静态页面，完美运行在 Cloudflare Pages 上。
