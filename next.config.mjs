/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 必须保留，确保跳过代码检查
  }
};

export default nextConfig;