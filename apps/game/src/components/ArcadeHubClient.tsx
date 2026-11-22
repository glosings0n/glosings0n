"use client";

import {
  ARCADE_GAMES,
  normalizeSessionCode,
  subscribeArcadeConfig,
  subscribeAuthState,
  type AuthUser,
  type GameCategory,
} from "@repo/arcade";
import { AppIcon, AppSelect, type AppSelectOption } from "@repo/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useArcadeSettings } from "./ArcadeContext";
import { ArcadeTopbar } from "./ArcadeTopbar";

const CATEGORIES: Array<{
  key: "all" | GameCategory;
  en: string;
  fr: string;
}> = [
  { key: "all", en: "All (10)", fr: "Tous (10)" },
  { key: "speed", en: "Speed", fr: "Rapidité" },
  { key: "focus", en: "Focus", fr: "Concentration" },
  { key: "mobility", en: "Mobility", fr: "Mobilité" },
  { key: "reflex", en: "Reflex", fr: "Réflexes" },
  { key: "logic", en: "Logic", fr: "Logique" },
];

export function ArcadeHubClient() {
  const { lang } = useArcadeSettings();
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | GameCategory>(
    "all",
  );
  const [enabledGames, setEnabledGames] = useState<string[] | null>(null);
  const [joinGame, setJoinGame] = useState(ARCADE_GAMES[0]!.slug);
  const [joinCode, setJoinCode] = useState("00001");
  const currentYear = new Date().getFullYear();

  const gameSelectOptions = useMemo<AppSelectOption[]>(
    () =>
      ARCADE_GAMES.map((g) => ({
        value: g.slug,
        label: lang === "fr" ? g.titleFr : g.titleEn,
        hint: g.durationLabel,
        icon: g.icon,
      })),
    [lang],
  );

  useEffect(() => {
    const unsubAuth = subscribeAuthState(setUser);
    const unsubCfg = subscribeArcadeConfig((cfg) => {
      if (cfg && Array.isArray(cfg.enabledGames) && cfg.enabledGames.length > 0) {
        setEnabledGames(cfg.enabledGames);
      } else {
        setEnabledGames(null);
      }
    });
    return () => {
      unsubAuth();
      unsubCfg();
    };
  }, []);

  const visibleGames = ARCADE_GAMES.filter((game) => {
    if (enabledGames && !enabledGames.includes(game.slug)) return false;
    if (selectedCategory !== "all" && game.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const handleJoin = (e: FormEvent, toLeaderboard = false) => {
    e.preventDefault();
    const code = normalizeSessionCode(joinCode) || "00001";
    router.push(
      toLeaderboard ? `/${joinGame}/${code}/leaderboard` : `/${joinGame}/${code}`,
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ArcadeTopbar user={user} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-10 flex flex-col gap-8">
        <section className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-center px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] font-mono text-xs font-semibold text-[var(--color-cyan)]">
            <AppIcon name="game" size={15} strokeWidth={2} />
            <span>
              {lang === "fr"
                ? "10 Mini-Jeux Échauffement | 5s à 15s"
                : "10 Warm-Up Mini-Games | 5s to 15s"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {lang === "fr"
              ? "Réveille la salle avant la session"
              : "Wake Up the Room Before Your Talk"}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {lang === "fr"
              ? "Scannez le QR code d'événement, connectez-vous avec Google en un clic et grimpez sur le classement projeté en temps réel."
              : "Scan an event QR code, sign in with Google in one tap, and climb the live projected leaderboard."}
          </p>
        </section>

        {/* Join an Event Session */}
        <section className="arcade-surface p-5 sm:p-6">
          <form
            onSubmit={(e) => handleJoin(e, false)}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
          >
            <div className="md:col-span-5 flex flex-col gap-1.5">
              <label
                htmlFor="join-game"
                className="font-mono text-xs font-semibold text-[var(--text-secondary)] uppercase"
              >
                {lang === "fr" ? "Jeu" : "Game"}
              </label>
              <AppSelect
                id="join-game"
                value={joinGame}
                options={gameSelectOptions}
                onChange={setJoinGame}
              />
            </div>

            <div className="md:col-span-3 flex flex-col gap-1.5">
              <label
                htmlFor="join-code"
                className="font-mono text-xs font-semibold text-[var(--text-secondary)] uppercase"
              >
                {lang === "fr" ? "Code Événement" : "Event Code"}
              </label>
              <input
                id="join-code"
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                placeholder="00001 / devfest-kg-2026"
                className="arcade-input font-mono h-11"
              />
            </div>

            <div className="md:col-span-4 flex gap-2">
              <button
                type="submit"
                className="arcade-btn arcade-btn-primary h-11 px-4 flex-1 text-sm"
              >
                <AppIcon name="play" size={16} strokeWidth={2} />
                {lang === "fr" ? "Rejoindre" : "Join Session"}
              </button>
              <button
                type="button"
                onClick={(e) => handleJoin(e, true)}
                className="arcade-btn h-11 px-4 text-sm"
                title={
                  lang === "fr" ? "Voir le classement live" : "Open Live Leaderboard"
                }
              >
                <AppIcon name="trophy" size={16} strokeWidth={2} />
                <span className="hidden sm:inline">
                  {lang === "fr" ? "Classement" : "Board"}
                </span>
              </button>
            </div>
          </form>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold border transition-colors ${
                  active
                    ? "bg-[var(--color-cyan)] border-[var(--color-cyan)] text-[var(--text-on-accent)]"
                    : "bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--color-cyan)]"
                }`}
              >
                {lang === "fr" ? cat.fr : cat.en}
              </button>
            );
          })}
        </div>

        {/* Games Grid (centered for odd/partial counts) */}
        <section className="flex flex-wrap justify-center gap-5">
          {visibleGames.map((game) => (
            <article
              key={game.slug}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)] arcade-surface p-6 flex flex-col gap-4 hover:border-[var(--color-cyan)] transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-cyan)]">
                  <AppIcon name={game.icon} size={20} strokeWidth={1.8} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--color-cyan)]">
                    {game.durationLabel}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                    {lang === "fr" ? game.categoryLabelFr : game.categoryLabelEn}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  {lang === "fr" ? game.titleFr : game.titleEn}
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  {lang === "fr" ? game.taglineFr : game.taglineEn}
                </p>
                <p className="font-mono text-xs text-[var(--text-muted)] pt-1">
                  {lang === "fr" ? game.trackHintFr : game.trackHintEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-2">
                <Link
                  href={`/${game.slug}/solo`}
                  className="arcade-btn arcade-btn-primary h-10 px-4 flex-1 text-sm"
                >
                  <AppIcon name="play" size={15} strokeWidth={2} />
                  {lang === "fr" ? "Jouer (Solo)" : "Play Solo"}
                </Link>
                <Link
                  href={`/${game.slug}/${normalizeSessionCode(joinCode) || "00001"}`}
                  className="arcade-btn h-10 px-3 text-xs font-mono"
                  title={
                    lang === "fr"
                      ? "Rejoindre avec le code saisi"
                      : "Join with entered event code"
                  }
                >
                  #{normalizeSessionCode(joinCode) || "00001"}
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-5 px-4 text-center text-sm text-[var(--text-muted)]">
        &copy; {currentYear} <span className="font-mono">glosings0n</span>
      </footer>
    </div>
  );
}
