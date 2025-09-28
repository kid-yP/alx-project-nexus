import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@nodelib/fs.scandir",
    "@nodelib/fs.walk",
    "fast-glob"
  ],
};

export default nextConfig;

