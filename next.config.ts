import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // We run tsc separately — allow Vercel to build even if type errors exist
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
