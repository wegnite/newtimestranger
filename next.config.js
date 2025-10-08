/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
    return config;
  },
  transpilePackages: ["katex"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  // 静态导出配置
  output: "export",
  // 移除 trailingSlash 以允许静态文件正常访问
  // trailingSlash: true,
};

module.exports = nextConfig;
