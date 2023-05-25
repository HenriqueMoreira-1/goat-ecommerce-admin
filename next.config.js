/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "lh3.googleusercontent.com",
          },
      ],
      minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig
