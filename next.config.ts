import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // output: 'export',
 // basePath: '/test',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

export default nextConfig;