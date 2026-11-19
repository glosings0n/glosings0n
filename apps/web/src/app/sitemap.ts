import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://glosings0n.dev/",
      lastModified: "2026-11-19",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
