import type { MetadataRoute } from "next";

const CODELAB_SLUGS = [
  "flutter-gemma-droidcon-ug-2026",
  "genkit-dart-agentic-workflows",
  "agentic-coding-flutter-mcp-skills",
  "hybrid-ai-firebase-litert-flutter",
  "apps-script-workspace-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codelab.glosings0n.dev/",
      lastModified: "2026-11-04",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...CODELAB_SLUGS.map((slug) => ({
      url: `https://codelab.glosings0n.dev/${slug}`,
      lastModified: "2026-11-04",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
