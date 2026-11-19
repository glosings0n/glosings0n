import { CodelabSettingsProvider } from "@/components/CodelabContext";
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
  metadataBase: new URL("https://codelab.glosings0n.dev"),
  title: "glosings0n Codelabs | Hands-On Engineering Guides by Georges Byona",
  description:
    "Interactive, bilingual (EN/FR) production-grade engineering codelabs by Georges Byona (@glosings0n / @losingson), Founder of LosingTek & Founder of FlutterFire Summer Camp. Deep-dive guides on On-Device AI, Flutter, Google Gemma, LiteRT-LM, Genkit Dart, Firebase AI Logic, and Agentic Coding with MCP.",
  authors: [{ name: "Georges Byona", url: "https://glosings0n.dev" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/assets/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

const initPreferencesScript = `(function(){try{var t=localStorage.getItem('glosings0n_codelab_theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}var l=localStorage.getItem('glosings0n_codelab_lang');if(l!=='en'&&l!=='fr'){l=(navigator.language||'en').toLowerCase().indexOf('fr')===0?'fr':'en';}document.documentElement.setAttribute('lang',l);document.documentElement.setAttribute('data-lang',l);}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-lang="en"
      className={`${figtree.variable} ${jetbrainsMono.variable} ${urbanist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initPreferencesScript }} />
      </head>
      <body>
        <CodelabSettingsProvider>{children}</CodelabSettingsProvider>
        <Analytics />
      </body>
    </html>
  );
}
