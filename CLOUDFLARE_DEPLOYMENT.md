# Cloudflare Workers 部署指南

## 项目概述

本项目已成功改造为兼容 Cloudflare Workers 的 Next.js 应用。主要特点：

- ✅ 支持 Cloudflare Workers 运行时
- ✅ 多语言国际化支持
- ✅ 静态资源优化
- ✅ 图片优化（使用 Cloudflare Images）
- ✅ 缓存策略配置

## 部署步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
# 使用 Next.js 开发服务器（推荐用于开发）
npm run dev

# 使用 Cloudflare Workers 运行时预览（推荐用于测试）
npm run preview
```

### 3. 构建和部署

```bash
# 构建项目
npm run build

# 部署到 Cloudflare Workers
npm run deploy
```

## 配置文件说明

### wrangler.jsonc

Cloudflare Workers 配置文件，包含：

- 兼容性设置
- 资源绑定配置

### open-next.config.ts

OpenNext 适配器配置，包含：

- 缓存策略
- 图片优化设置

## 兼容性说明

### 已兼容的功能

- ✅ Next.js 14.2.15
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ 国际化中间件
- ✅ 静态资源服务
- ✅ API 路由

### 注意事项

- ⚠️ 某些 Node.js 特定功能在 Workers 环境中不可用
- ⚠️ 文件系统操作需要使用 Cloudflare 的绑定
- ⚠️ 数据库连接需要使用 D1 或其他 Cloudflare 数据库服务

## 性能优化

### 缓存策略

- 静态资源：30 天缓存
- API 响应：5 分钟缓存
- 图片：使用 Cloudflare Images 优化

### 构建优化

- 使用 `output: 'standalone'` 模式
- 排除不兼容的包（如 sharp）
- 优化资源加载

## 故障排除

### 常见问题

1. **构建失败**

   - 检查 Node.js 版本（推荐 18+）
   - 确保所有依赖已正确安装

2. **运行时错误**

   - 查看 Cloudflare Workers 日志
   - 检查网络连接

3. **图片加载问题**
   - 确保图片路径正确
   - 检查 Cloudflare Images 配置

### 调试命令

```bash
# 生成 Cloudflare 类型定义
npm run cf-typegen

# 本地预览（Workers 运行时）
npm run preview

# 查看构建输出
ls .open-next/
```

## 监控和维护

### 性能监控

- 使用 Cloudflare Analytics
- 监控 Workers 执行时间
- 跟踪缓存命中率

### 更新部署

- 定期更新依赖包
- 监控安全更新
- 测试新功能兼容性

## 扩展功能

### 数据库集成

如需添加数据库功能，建议使用：

- Cloudflare D1（SQLite）
- Cloudflare KV（键值存储）
- Cloudflare R2（对象存储）

### 示例配置

```typescript
// wrangler.jsonc 中添加
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "my-database",
      "database_id": "your-database-id"
    }
  ]
}
```

## 联系支持

如有问题，请参考：

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [OpenNext 文档](https://opennext.js.org/)
- [Next.js 文档](https://nextjs.org/docs)
