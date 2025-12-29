/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 核心：跳过类型检查
  },
  eslint: {
    ignoreDuringBuilds: true, // 核心：构建时忽略 ESLint
  },
};
export default nextConfig;