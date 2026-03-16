import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows the build to finish even if there are linting errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;