/**
 * next.config.ts - Next.js configuration
 * Add your proxy/redirects/headers here
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  eslint: {
    dirs: ["src"],
  },
  // Add your custom redirects/headers using src/proxy.ts
  // Or configure them directly here
};

export default nextConfig;
