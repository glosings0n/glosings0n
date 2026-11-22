import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://glosings0n.dev/",
      lastModified: "2026-11-22",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://glosings0n.dev/privacy",
      lastModified: "2026-11-22",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
