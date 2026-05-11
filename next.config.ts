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
      {
        protocol: 'https',
        hostname: 'gradeplus.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;