import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;