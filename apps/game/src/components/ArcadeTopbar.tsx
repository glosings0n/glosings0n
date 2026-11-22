"use client";

import { logoSvg } from "@repo/assets";
import { signOutFirebase, type AuthUser } from "@repo/arcade";
import { AppIcon, useIsLocalHost } from "@repo/ui";
import Link from "next/link";
import { useArcadeSettings } from "./ArcadeContext";

interface ArcadeTopbarProps {
  subtitle?: string;
  user?: AuthUser | null;
  backHref?: string;
}

export function ArcadeTopbar({
  subtitle = "/ game",
  user,
  backHref,
}: ArcadeTopbarProps) {
  const { lang, setLang, theme, toggleTheme } = useArcadeSettings();
  const isLocal = useIsLocalHost();
  const portfolioHref = isLocal
    ? "http://localhost:3000"
    : "https://glosings0n.dev";

  const themeLabel =
    theme === "dark"
      ? lang === "fr"
        ? "Mode clair"
        : "Light mode"
      : lang === "fr"
        ? "Mode sombre"
        : "Dark mode";

  return (
    <header className="arcade-topbar">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {backHref ? (
            <Link
              href={backHref}
              className="arcade-btn w-9 h-9"
              aria-label={lang === "fr" ? "Retour" : "Back"}
              title={lang === "fr" ? "Retour" : "Back"}
            >
              <AppIcon name="arrowLeft" size={17} strokeWidth={2} />
            </Link>
          ) : null}
          <a
            href={portfolioHref}
            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--color-cyan)] shrink-0"
          >
            <img
              src={logoSvg.src}
              alt="glosings0n logo"
              width={24}
              height={24}
              style={{ filter: "var(--logo-filter)" }}
            />
            <span className="font-mono font-semibold text-base tracking-tight">
              glosings0n
            </span>
          </a>
          <Link
            href="/"
            className="font-mono text-sm font-medium text-[var(--color-cyan)] hover:underline truncate"
          >
            {subtitle}
          </Link>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <button
              type="button"
              onClick={() => void signOutFirebase()}
              className="arcade-btn h-9 px-3 text-xs font-mono"
              title={
                lang === "fr"
                  ? `Déconnecter (${user.displayName || user.email || "Google"})`
                  : `Sign out (${user.displayName || user.email || "Google"})`
              }
            >
              <span className="hidden sm:inline max-w-[120px] truncate">
                {user.displayName || user.email}
              </span>
              <AppIcon name="logout" size={15} strokeWidth={2} />
            </button>
          ) : null}

          <div
            className="flex items-center p-0.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] h-9"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2 h-full rounded-md font-mono text-xs font-bold transition-colors ${
                lang === "en"
                  ? "bg-[var(--color-cyan)] text-[var(--text-on-accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`px-2 h-full rounded-md font-mono text-xs font-bold transition-colors ${
                lang === "fr"
                  ? "bg-[var(--color-cyan)] text-[var(--text-on-accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="arcade-btn w-9 h-9"
            aria-label={themeLabel}
            title={themeLabel}
          >
            <AppIcon
              name={theme === "dark" ? "sun" : "moon"}
              size={17}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
