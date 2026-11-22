import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/assets", "@repo/arcade"],
};

export default nextConfig;
