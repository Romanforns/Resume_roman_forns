/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
