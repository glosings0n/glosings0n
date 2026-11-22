"use client";

import { logoSvg } from "@repo/assets";
import { AppIcon, useIsLocalHost } from "@repo/ui";
import Link from "next/link";
import { Bilingual } from "./Bilingual";
import { useCodelabSettings } from "./CodelabContext";

interface CodelabTopbarProps {
  codelabTitleEn?: string;
  codelabTitleFr?: string;
  remainingMins?: number;
  progressPct?: number;
  githubUrl?: string;
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  showSidebarToggle?: boolean;
}

export function CodelabTopbar({
  codelabTitleEn,
  codelabTitleFr,
  remainingMins,
  progressPct,
  githubUrl,
  sidebarOpen = false,
  onToggleSidebar,
  showSidebarToggle = false,
}: CodelabTopbarProps) {
  const { lang, setLang, theme, toggleTheme } = useCodelabSettings();
  const isLocal = useIsLocalHost();
  const portfolioHref = isLocal ? "http://localhost:3000" : "https://glosings0n.dev";

  const themeLabel =
    theme === "dark"
      ? lang === "fr"
        ? "Mode clair"
        : "Light mode"
      : lang === "fr"
        ? "Mode sombre"
        : "Dark mode";

  const ghLabel =
    lang === "fr" ? "Ouvrir le dépôt GitHub" : "Open the GitHub repo";

  const hasPublicGithub =
    typeof githubUrl === "string" &&
    githubUrl.trim().startsWith("https://github.com/") &&
    githubUrl.trim().length > "https://github.com/".length;

  return (
    <header className="codelab-topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          {showSidebarToggle ? (
            <button
              type="button"
              className={`sidebar-toggle-btn${sidebarOpen ? " open" : ""}`}
              id="sidebar-toggle-btn"
              aria-label="Toggle Steps Drawer"
              aria-expanded={sidebarOpen}
              onClick={onToggleSidebar}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          ) : null}

          <a
            href={portfolioHref}
            id={showSidebarToggle ? "codelab-home-link" : "hub-brand-link"}
            className="brand-link"
          >
            <img
              src={logoSvg.src}
              alt="glosings0n logo"
              className="brand-logo"
              width={26}
              height={26}
            />
            <span className="brand-text">glosings0n</span>
          </a>

          {showSidebarToggle ? (
            <Link
              href="/"
              id="codelab-sub-link"
              className="brand-subtext"
              style={{ textDecoration: "none" }}
            >
              / codelabs
            </Link>
          ) : (
            <span className="brand-subtext">/ codelabs</span>
          )}

          {codelabTitleEn && codelabTitleFr ? (
            <>
              <span className="topbar-divider">/</span>
              <span className="codelab-header-title">
                <Bilingual en={codelabTitleEn} fr={codelabTitleFr} />
              </span>
            </>
          ) : null}
        </div>

        <div className="topbar-right">
          {typeof remainingMins === "number" ? (
            <div className="time-pill" title="Time remaining">
              <AppIcon
                name="clock"
                size={14}
                strokeWidth={2}
                className="time-pill-icon"
              />
              <span id="time-remaining-label">
                {lang === "fr"
                  ? `${remainingMins} min restantes`
                  : `${remainingMins} min left`}
              </span>
            </div>
          ) : null}

          <div className="lang-switch" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              id="lang-btn-en"
              data-lang="en"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${lang === "fr" ? " active" : ""}`}
              id="lang-btn-fr"
              data-lang="fr"
              aria-pressed={lang === "fr"}
              onClick={() => setLang("fr")}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            className="action-btn icon-only"
            id="theme-toggle-btn"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            <span id="theme-toggle-icon">
              <AppIcon
                name={theme === "dark" ? "sun" : "moon"}
                size={17}
                strokeWidth={2}
              />
            </span>
          </button>

          {showSidebarToggle && hasPublicGithub ? (
            <a
              href={githubUrl}
              id="codelab-github-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn icon-only codelab-github-btn"
              aria-label={ghLabel}
              title={ghLabel}
            >
              <AppIcon name="github" size={17} strokeWidth={2} />
            </a>
          ) : null}
        </div>
      </div>

      {typeof progressPct === "number" ? (
        <div className="codelab-progress-track">
          <div
            className="codelab-progress-fill"
            id="codelab-progress-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      ) : null}
    </header>
  );
}
