# Digimon 图片下载脚本

这个脚本用于从 `data/digimon-list.json` 文件中下载所有 Digimon 的图片，并转换为 WebP 格式保存到 `public/images/digimons/` 目录中。

## 功能特性

- ✅ 自动下载所有 Digimon 图片
- ✅ 转换为 WebP 格式以优化文件大小
- ✅ 支持并发下载提高效率
- ✅ 自动重试机制处理网络错误
- ✅ 跳过已存在的文件避免重复下载
- ✅ 详细的进度跟踪和错误报告
- ✅ SEO 友好的文件名生成

## 使用方法

### 方法 1：使用 npm 脚本（推荐）

```bash
npm run download:digimons
```

### 方法 2：直接运行脚本

```bash
node scripts/download-digimon-images.js
```

## 配置选项

脚本中的配置选项可以在 `scripts/download-digimon-images.js` 文件的 `CONFIG` 对象中修改：

```javascript
const CONFIG = {
  concurrency: 6, // 并发下载数量
  quality: 80, // WebP质量 (1-100)
  retryAttempts: 3, // 失败重试次数
  timeout: 20000, // 超时时间（毫秒）
  resize: {
    enabled: false, // 是否启用图片缩放（Digimon图片较小，通常不需要）
  },
};
```

## 输出目录

下载的图片将保存到：

```
public/images/digimons/
```

文件命名格式：

- 原始文件名：`kuramon.png`
- WebP 文件名：`kuramon.webp`

## 依赖要求

- Node.js
- sharp (图片处理库)
- https (内置模块)

## 注意事项

1. 确保网络连接稳定
2. 脚本会自动创建输出目录
3. 已存在的文件会被跳过
4. 下载失败的文件会在控制台显示错误信息
5. 脚本会自动清理临时文件

## 错误处理

脚本包含完善的错误处理机制：

- 网络超时自动重试
- HTTP 错误状态码处理
- 文件系统错误处理
- 详细的错误日志输出

## 性能优化

- 使用并发下载提高效率
- WebP 格式减少文件大小
- 智能跳过已存在文件
- 自动清理临时文件

