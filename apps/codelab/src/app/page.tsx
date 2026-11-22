import { CodelabHubClient } from "@/components/CodelabHubClient";
import { CODELAB_CATALOG } from "@/data/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "glosings0n Codelabs | Hands-On Engineering Guides by Georges Byona",
  description:
    "Interactive, bilingual (EN/FR) production-grade engineering codelabs by Georges Byona (@glosings0n / @losingson), Founder of MusanTek & Founder of FlutterFire Summer Camp. Deep-dive guides on On-Device AI, Flutter, Google Gemma, LiteRT-LM, Genkit Dart, Firebase AI Logic, and Agentic Coding with MCP.",
  keywords: [
    "glosings0n Codelabs",
    "Georges Byona",
    "Georges Losingson",
    "Byona Georges",
    "Losingson",
    "Losings0n",
    "glosings0n",
    "@glosings0n",
    "@losingson",
    "g-losingson",
    "MusanTek",
    "Musan Tek",
    "FlutterFire Summer Camp",
    "FlutterFire Camp",
    "GDG on Campus UCB",
    "GDG Bukavu",
    "Flutter Codelab",
    "Google Gemma",
    "flutter_edge_ai",
    "flutter_edge_ai_litertlm",
    "flutter_gemma",
    "LiteRT-LM",
    "MediaPipe LLM",
    "On-Device AI",
    "Offline AI Africa",
    "SQLite FTS5 RAG",
    "Model Distillation",
    "Genkit Dart",
    "genkit_shelf",
    "schemantic",
    "Firebase AI Logic",
    "firebase_ai",
    "Agentic Coding",
    "Dart MCP Server",
    "AGENTS.md",
    "droidCon Uganda 2026",
    "Gemmea",
  ],
  alternates: {
    canonical: "https://codelab.glosings0n.dev",
  },
  openGraph: {
    title: "glosings0n Codelabs | Hands-On Engineering Guides by Georges Byona",
    description:
      "Step-by-step interactive codelabs (EN/FR) with real production code by Georges Byona (@glosings0n), Founder @ MusanTek & Founder @ FlutterFire Summer Camp.",
    type: "website",
    url: "https://codelab.glosings0n.dev",
    siteName: "glosings0n Codelabs",
    images: [
      {
        url: "https://glosings0n.dev/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Georges Byona | glosings0n Codelabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@glosings0n",
    creator: "@glosings0n",
    title: "glosings0n Codelabs | Hands-On Engineering Guides by Georges Byona",
    description:
      "Interactive engineering codelabs on On-Device AI, Flutter, Google Gemma, Genkit Dart, Firebase AI Logic, and Agentic Coding by Georges Byona (@glosings0n), Founder @ MusanTek & Founder @ FlutterFire Summer Camp.",
    images: ["https://glosings0n.dev/assets/hero.png"],
  },
  other: {
    "article:modified_time": "2026-11-04",
  },
};

const hubJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://glosings0n.dev/#person",
      name: "Georges Byona",
      additionalName: "Georges Losingson",
      alternateName: [
        "glosings0n",
        "@glosings0n",
        "Glosingson",
        "Georges Byona",
        "Georges Losingson",
        "Losingson",
        "Byona Georges",
        "Losings0n",
        "@losingson",
        "g-losingson",
        "MusanTek",
      ],
      url: "https://glosings0n.dev",
      image: "https://glosings0n.dev/assets/hero.png",
      jobTitle: "Software Engineer & Edge-AI Researcher",
      sameAs: [
        "https://github.com/glosings0n",
        "https://linkedin.com/in/glosings0n",
        "https://x.com/glosings0n",
        "https://medium.com/@glosings0n",
        "https://youtube.com/@FlutterFireCamp",
      ],
      founder: [
        {
          "@type": "Organization",
          "@id": "https://glosings0n.dev/#musantek",
          name: "MusanTek",
          url: "https://www.musantek.com",
        },
        {
          "@type": "EducationalOrganization",
          "@id": "https://glosings0n.dev/#flutterfirecamp",
          name: "FlutterFire Summer Camp",
          alternateName: "FlutterFire Camp",
          url: "https://flutterfirecamp.dev",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://codelab.glosings0n.dev/#website",
      url: "https://codelab.glosings0n.dev",
      name: "glosings0n Codelabs",
      inLanguage: ["en", "fr"],
      publisher: {
        "@id": "https://glosings0n.dev/#person",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://codelab.glosings0n.dev/#collection",
      url: "https://codelab.glosings0n.dev",
      name: "glosings0n Codelabs | Hands-On Engineering Guides by Georges Byona",
      dateModified: "2026-11-04",
      inLanguage: ["en", "fr"],
      author: {
        "@id": "https://glosings0n.dev/#person",
      },
      hasPart: CODELAB_CATALOG.map((item) => ({
        "@type": "TechArticle",
        headline: item.titleEn,
        url: `https://codelab.glosings0n.dev/${item.slug}`,
        datePublished: item.datePublished,
        dateModified: item.dateModified,
        author: {
          "@id": "https://glosings0n.dev/#person",
        },
      })),
    },
  ],
};

export default function CodelabsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />
      <CodelabHubClient />
    </>
  );
}
