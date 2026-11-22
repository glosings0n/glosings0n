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
  title: "glosings0n Studio | Arcade Admin Console",
  description:
    "Private event session manager and real-time leaderboard console for glosings0n Arcade.",
  robots: {
    index: false,
    follow: false,
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
