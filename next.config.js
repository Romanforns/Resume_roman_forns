/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? basePath : undefined,
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
