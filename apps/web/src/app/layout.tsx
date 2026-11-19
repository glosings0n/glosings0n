import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glosings0n.dev"),
  title: "Georges Byona (glosings0n) - Software Engineer & Founder @ LosingTek",
  description:
    "Official portfolio of Georges Byona (alias @glosings0n / @losingson) - Software Engineer, Founder of LosingTek, Initiator of the FlutterFire Summer Camp, and former GDG Lead.",
  keywords: [
    "Georges Byona",
    "Georges Losingson",
    "Byona Georges",
    "Losingson",
    "Losings0n",
    "glosingon",
    "glosings0n",
    "losing",
    "losingson",
    "g-losingson",
    "G-Losingson",
    "Glosing",
    "Glosings0n",
    "glosing",
    "glos",
    "gloss",
    "glosingson Georges",
    "Losingson Georges",
    "Losings0n Georges",
    "Glosingson",
    "LosingTek",
    "Losing Tek",
    "FlutterFire Summer Camp",
    "GDG Bukavu",
    "GDG UCB",
    "GDG on Campus UCB",
    "Université Catholique de Bukavu",
    "Software Engineer",
    "Flutter",
    "Firebase",
    "Dart",
    "Congo Tech",
    "SautiLM",
    "SautiLM Initiative",
    "Edge-AI",
    "Small Language Models",
    "LiteRT",
    "Unsloth",
    "On-Device AI",
  ],
  authors: [{ name: "Georges Byona", url: "https://glosings0n.dev" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://glosings0n.dev",
  },
  openGraph: {
    title: "Georges Byona (glosings0n) - Software Engineer & Founder @ LosingTek",
    description:
      "Discover the official portfolio of Georges Byona (@glosings0n / @losingson): Founder of LosingTek, Initiator of the FlutterFire Summer Camp, and former GDG Lead.",
    type: "profile",
    url: "https://glosings0n.dev",
    siteName: "glosings0n Portfolio",
    images: [
      {
        url: "https://glosings0n.dev/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Georges Byona - glosings0n",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@glosings0n",
    creator: "@glosings0n",
    title: "Georges Byona (glosings0n) - Software Engineer & Founder @ LosingTek",
    description:
      "Official portfolio of Georges Byona (@glosings0n / @losingson): Founder of LosingTek, former GDG Lead, and Initiator of the FlutterFire Summer Camp.",
    images: ["https://glosings0n.dev/assets/hero.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://glosings0n.dev/#person",
      name: "Georges Byona",
      additionalName: "Georges Losingson",
      description:
        "Georges Byona (also known as @glosings0n or @losingson) is a Software Engineer based in the Democratic Republic of the Congo. He is the founder of LosingTek and initiator of the FlutterFire Summer Camp, and previously served as GDG Lead.",
      alternateName: [
        "glosings0n",
        "Glosingson",
        "Georges Byona",
        "Georges Losingson",
        "Losingson",
        "Byona Georges",
        "Losings0n",
        "glosingon",
        "g-losingson",
        "G-Losingson",
        "Glosings0n",
        "glosingson Georges",
        "Losingson Georges",
        "Losings0n Georges",
        "losing",
        "losingson",
        "Losing",
        "LosingTek",
        "Losing Tek",
      ],
      url: "https://glosings0n.dev",
      image: "https://glosings0n.dev/assets/hero.png",
      jobTitle: "Software Engineer",
      knowsAbout: [
        "Software Engineering",
        "Mobile Development",
        "Flutter",
        "Dart",
        "iOS",
        "Android",
        "Firebase",
        "Google Cloud Platform",
        "Web Development",
        "AI Technologies",
        "Edge-AI",
        "Tech Communities",
      ],
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
          description: "Innovative software architectures and development firm.",
        },
        {
          "@type": "ResearchProject",
          name: "SautiLM",
          url: "https://sautilm.com",
          description:
            "Offline-First Edge-AI and Quantized Small Language Models research initiative for mother-tongue learning in displaced and nomadic communities.",
        },
        {
          "@type": "EducationalOrganization",
          name: "FlutterFire Summer Camp",
          alternateName: "FlutterFire Camp",
          url: "https://flutterfirecamp.dev",
          description:
            "An educational initiative and developer training camp for Flutter & Firebase, founded by Georges Byona.",
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "Google Developer Groups on Campus UCB",
          alternateName: "GDG on Campus Université Catholique de Bukavu",
          url: "https://gdg.community.dev/gdg-on-campus-universite-catholique-de-bukavu-bukavu-democratic-republic-of-the-congo/",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://glosings0n.dev/#website",
      url: "https://glosings0n.dev",
      name: "glosings0n | Portfolio",
      publisher: {
        "@id": "https://glosings0n.dev/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://glosings0n.dev/#profile",
      url: "https://glosings0n.dev",
      name: "Georges Byona (glosings0n) Official Profile Page",
      about: {
        "@id": "https://glosings0n.dev/#person",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${figtree.variable} ${jetbrainsMono.variable} ${urbanist.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
