import { CodelabViewer } from "@/components/CodelabViewer";
import { CODELAB_CATALOG, getCodelabBySlug } from "@/data/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CODELAB_CATALOG.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(context: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await context.params;
  const item = getCodelabBySlug(slug);
  if (!item) return {};

  const url = `https://codelab.glosings0n.dev/${item.slug}`;
  return {
    title: `${item.titleEn} | glosings0n Codelabs`,
    description: item.summaryEn,
    keywords: item.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: item.headerTitleEn,
      description: item.summaryEn,
      type: "article",
      url,
      siteName: "glosings0n Codelabs",
      publishedTime: item.datePublished,
      modifiedTime: item.dateModified,
      authors: ["https://glosings0n.dev"],
      images: [
        {
          url: "https://glosings0n.dev/assets/hero.png",
          width: 1200,
          height: 630,
          alt: `${item.headerTitleEn} | Georges Byona (@glosings0n)`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@glosings0n",
      creator: "@glosings0n",
      title: item.headerTitleEn,
      description: item.summaryEn,
      images: ["https://glosings0n.dev/assets/hero.png"],
    },
  };
}

export default async function CodelabDetailPage(context: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await context.params;
  const item = getCodelabBySlug(slug);
  if (!item) {
    notFound();
  }

  const url = `https://codelab.glosings0n.dev/${item.slug}`;
  const jsonLd = {
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
          "LosingTek",
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
            "@id": "https://glosings0n.dev/#losingtek",
            name: "LosingTek",
            url: "https://losingtek.com",
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
        "@type": ["TechArticle", "LearningResource"],
        "@id": `${url}#codelab`,
        headline: item.titleEn,
        name: item.titleEn,
        description: item.summaryEn,
        url,
        image: "https://glosings0n.dev/assets/hero.png",
        datePublished: item.datePublished,
        dateModified: item.dateModified,
        inLanguage: "en",
        learningResourceType: "Codelab",
        author: {
          "@id": "https://glosings0n.dev/#person",
        },
        publisher: {
          "@id": "https://glosings0n.dev/#losingtek",
        },
        isPartOf: {
          "@id": "https://codelab.glosings0n.dev/#website",
        },
        keywords: item.keywords,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "glosings0n Portfolio",
            item: "https://glosings0n.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "glosings0n Codelabs",
            item: "https://codelab.glosings0n.dev",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.headerTitleEn,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CodelabViewer summary={item} />
    </>
  );
}
