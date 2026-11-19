import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/assets"],
  async redirects() {
    return [
      {
        source: "/codelabs",
        destination: "https://codelab.glosings0n.dev/",
        permanent: true,
      },
      {
        source: "/codelabs/",
        destination: "https://codelab.glosings0n.dev/",
        permanent: true,
      },
      {
        source: "/codelab",
        destination: "https://codelab.glosings0n.dev/",
        permanent: true,
      },
      {
        source: "/codelab/",
        destination: "https://codelab.glosings0n.dev/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
