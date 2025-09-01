import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make a static site in ./out
  output: "export",
  // If you ever use <Image>, this avoids server-side optimization
  images: { unoptimized: true },
  // Optional: nicer URLs on static hosts
  trailingSlash: true,
};

export default nextConfig;