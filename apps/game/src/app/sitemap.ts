import { ARCADE_GAMES } from "@repo/arcade";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://game.glosings0n.dev/",
      lastModified: "2026-11-22",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...ARCADE_GAMES.map((g) => ({
      url: `https://game.glosings0n.dev/${g.slug}/solo`,
      lastModified: "2026-11-22",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
