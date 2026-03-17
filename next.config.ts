import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This ignores type errors during the build
    ignoreBuildErrors: true,
  },
  // We removed the 'eslint' key because Next.js handles it differently now
};

export default nextConfig;