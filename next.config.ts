import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
  ...(isProd &&
    isGitHubPages && {
      basePath: "/pine_education",
      assetPrefix: "/pine_education",
    }),
};

export default nextConfig;
