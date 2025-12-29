/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 强制忽略 TypeScript 错误
  },
  eslint: {
    ignoreDuringBuilds: true, // 强制忽略 ESLint 检查
  },
};
export default nextConfig;