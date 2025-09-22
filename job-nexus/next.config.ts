// next.config.js
import type { NextConfig } from "next";
const withTM = require("next-transpile-modules")([
  "@nodelib/fs.scandir",
  "@nodelib/fs.walk",
  "fast-glob"
]);

const nextConfig: NextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true
  }
});

export default nextConfig;
