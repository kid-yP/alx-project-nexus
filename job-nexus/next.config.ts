const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@nodelib/fs.scandir",
    "@nodelib/fs.walk", 
    "fast-glob"
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
