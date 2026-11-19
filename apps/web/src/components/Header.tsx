"use client";

import { logoSvg } from "@repo/assets";
import { useIsLocalHost } from "@repo/ui";
import { AppConfig } from "@/data/config";
import type { PortfolioCopy, PortfolioLang } from "@/data/translations";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  lang: PortfolioLang;
  copy: PortfolioCopy;
  activeSection: string;
  onChangeLang: (lang: PortfolioLang) => void;
  onNavigateHash: (id: string) => void;
  onNavigateHome: () => void;
}

export function Header({
  lang,
  copy,
  activeSection,
  onChangeLang,
  onNavigateHash,
  onNavigateHome,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLocal = useIsLocalHost();
  const codelabsHref = isLocal
    ? "http://localhost:3001"
    : AppConfig.links.codelabs;

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        menuOpen &&
        !target.closest("#navigation-menu") &&
        !target.closest("#mobile-menu-btn")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  return (
    <header className="header" id="main-header">
      <div className="nav-container">
        <Link
          href="/"
          className="logo"
          id="logo-link"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            onNavigateHome();
          }}
        >
          <img
            src={logoSvg.src}
            alt="LosingTek Logo"
            className="logo-icon"
            id="logo-img"
            width={32}
            height={32}
          />
          <span className="logo-text">glosings0n</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          id="mobile-menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-menu${menuOpen ? " open" : ""}`} id="navigation-menu">
          <Link
            href="/"
            className={`nav-link${activeSection === "home" ? " active" : ""}`}
            id="nav-item-home"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onNavigateHome();
            }}
          >
            {copy.navHome}
          </Link>
          <a
            href="#about"
            className={`nav-link${activeSection === "about" ? " active" : ""}`}
            id="nav-item-about"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onNavigateHash("about");
            }}
          >
            {copy.navAbout}
          </a>
          <a
            href={codelabsHref}
            className="nav-link"
            id="nav-item-codelabs"
            onClick={() => setMenuOpen(false)}
          >
            Codelabs
          </a>
          <a
            href="#contact"
            className={`nav-link${activeSection === "contact" ? " active" : ""}`}
            id="nav-item-contact"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onNavigateHash("contact");
            }}
          >
            {copy.navContact}
          </a>
          <div className="lang-selector">
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              id="lang-btn-en"
              data-lang="en"
              onClick={() => onChangeLang("en")}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn${lang === "fr" ? " active" : ""}`}
              id="lang-btn-fr"
              data-lang="fr"
              onClick={() => onChangeLang("fr")}
            >
              FR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
