import { ArcadeSettingsProvider } from "@/components/ArcadeContext";
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
  metadataBase: new URL("https://game.glosings0n.dev"),
  title: "glosings0n Arcade | Interactive Tech Session Warm-Up Games",
  description:
    "10 fast, mobile-first warm-up games (5s to 15s) with live event leaderboards by Georges Byona (@glosings0n) for tech talks, Flutter sessions, student workshops, and DevFests.",
  authors: [{ name: "Georges Byona", url: "https://glosings0n.dev" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "glosings0n Arcade | Interactive Tech Session Warm-Up Games",
    description:
      "Scan, sign in with Google in one tap, play 5s to 15s reflex & focus games, and climb the live session leaderboard.",
    type: "website",
    url: "https://game.glosings0n.dev",
    siteName: "glosings0n Arcade",
    images: [
      {
        url: "https://glosings0n.dev/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "glosings0n Arcade | Tech Session Warm-Up Games",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/png" },
      { url: "/assets/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

const initPrefsScript = `(function(){try{var t=localStorage.getItem('glosings0n_arcade_theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}var l=localStorage.getItem('glosings0n_arcade_lang');if(l!=='en'&&l!=='fr'){l=(navigator.language||'en').toLowerCase().indexOf('fr')===0?'fr':'en';}document.documentElement.setAttribute('lang',l);document.documentElement.setAttribute('data-lang',l);}catch(e){}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: initPrefsScript }} />
      </head>
      <body>
        <ArcadeSettingsProvider>{children}</ArcadeSettingsProvider>
        <Analytics />
      </body>
    </html>
  );
}
