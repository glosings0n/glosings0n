"use client";

import { heroImg, logoSvg } from "@repo/assets";
import {
  ARCADE_GAMES,
  createArcadeSession,
  deleteArcadeSession,
  deletePlayerScore,
  generateQrDataUrl,
  getArcadeGame,
  getNextSequentialCode,
  normalizeSessionCode,
  signInWithGoogle,
  signOutFirebase,
  subscribeAllSessions,
  subscribeArcadeConfig,
  subscribeAuthState,
  subscribeSessionLeaderboard,
  updateArcadeConfig,
  updateArcadeSession,
  type ArcadeSession,
  type AuthUser,
  type PlayerScoreEntry,
  type SessionStatus,
} from "@repo/arcade";
import {
  AppIcon,
  AppSelect,
  useIsLocalHost,
  useStoredLang,
  useStoredTheme,
  type AppSelectOption,
} from "@repo/ui";
import { useEffect, useMemo, useState, type FormEvent } from "react";

type AdminTab = "sessions" | "games";

export function AdminDashboardClient() {
  const [lang, setLang] = useStoredLang("glosings0n_arcade_lang", true);
  const [theme, toggleTheme] = useStoredTheme("glosings0n_arcade_theme");
  const isLocal = useIsLocalHost();

  const gameBaseUrl = isLocal
    ? "http://localhost:3002"
    : "https://game.glosings0n.dev";
  const portfolioUrl = isLocal
    ? "http://localhost:3000"
    : "https://glosings0n.dev";

  const [user, setUser] = useState<AuthUser | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [authErrorCode, setAuthErrorCode] = useState<
    "misconfigured" | "denied" | "network" | null
  >(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  const [tab, setTab] = useState<AdminTab>("sessions");
  const [sessions, setSessions] = useState<ArcadeSession[]>([]);
  const [enabledGames, setEnabledGames] = useState<string[]>(() =>
    ARCADE_GAMES.map((g) => g.slug),
  );
  const [filterGame, setFilterGame] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Create session form
  const [newGameSlug, setNewGameSlug] = useState(ARCADE_GAMES[0]!.slug);
  const [newEventName, setNewEventName] = useState("");
  const [newCode, setNewCode] = useState("00001");
  const [newMaxAttempts, setNewMaxAttempts] = useState(3);
  const [creating, setCreating] = useState(false);
  const [formMsg, setFormMsg] = useState<string | null>(null);

  // Selected session for QR + Live Leaderboard inspector
  const [selectedSession, setSelectedSession] = useState<ArcadeSession | null>(
    null,
  );
  const [selectedScores, setSelectedScores] = useState<PlayerScoreEntry[]>([]);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const unsub = subscribeAuthState((nextUser) => {
      if (!active) return;

      if (!nextUser) {
        setUser(null);
        setAuthorized(false);
        setAuthReady(true);
        return;
      }

      setAuthReady(false);
      void (async () => {
        try {
          const idToken = await nextUser.getIdToken();
          const res = await fetch("/api/admin/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
          });
          if (!active) return;

          if (res.ok) {
            setUser(nextUser);
            setAuthorized(true);
            setAuthErrorCode(null);
            setAuthError(null);
          } else if (res.status === 500) {
            await signOutFirebase();
            setUser(null);
            setAuthorized(false);
            setAuthErrorCode("misconfigured");
          } else {
            await signOutFirebase();
            setUser(null);
            setAuthorized(false);
            setAuthErrorCode("denied");
          }
        } catch {
          if (!active) return;
          setUser(null);
          setAuthorized(false);
          setAuthErrorCode("network");
        } finally {
          if (active) setAuthReady(true);
        }
      })();
    });

    return () => {
      active = false;
      unsub();
    };
  }, []);

  useEffect(() => {
    if (!authorized) return;
    const unsubSessions = subscribeAllSessions((list) => setSessions(list));
    const unsubCfg = subscribeArcadeConfig((cfg) => {
      if (cfg && Array.isArray(cfg.enabledGames) && cfg.enabledGames.length > 0) {
        setEnabledGames(cfg.enabledGames);
      }
    });
    return () => {
      unsubSessions();
      unsubCfg();
    };
  }, [authorized]);

  useEffect(() => {
    if (!authorized || !selectedSession) {
      return;
    }

    const joinUrl = `${gameBaseUrl}/${selectedSession.gameSlug}/${selectedSession.sessionCode}`;
    void generateQrDataUrl(joinUrl).then(setQrDataUrl);

    return subscribeSessionLeaderboard(
      selectedSession.gameSlug,
      selectedSession.sessionCode,
      selectedSession.sortOrder,
      setSelectedScores,
    );
  }, [authorized, gameBaseUrl, selectedSession]);

  const handleGoogleLogin = async () => {
    setAuthError(null);
    setAuthErrorCode(null);
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : "Google Sign-In failed.",
      );
    } finally {
      setSigningIn(false);
    }
  };

  const gameOptions = useMemo<AppSelectOption[]>(
    () =>
      ARCADE_GAMES.map((g) => ({
        value: g.slug,
        label: lang === "fr" ? g.titleFr : g.titleEn,
        hint: g.durationLabel,
        icon: g.icon,
      })),
    [lang],
  );

  const filterGameOptions = useMemo<AppSelectOption[]>(
    () => [
      {
        value: "all",
        label: lang === "fr" ? "Tous les jeux" : "All Games",
        icon: "layers",
      },
      ...ARCADE_GAMES.map((g) => ({
        value: g.slug,
        label: lang === "fr" ? g.titleFr : g.titleEn,
        icon: g.icon,
      })),
    ],
    [lang],
  );

  const maxAttemptsOptions = useMemo<AppSelectOption[]>(
    () =>
      ["1", "2", "3", "5", "10"].map((num) => ({
        value: num,
        label: num,
      })),
    [],
  );

  const handleSuggestNextCode = async (slug = newGameSlug) => {
    try {
      const next = await getNextSequentialCode(slug);
      setNewCode(next);
    } catch {
      setNewCode("00001");
    }
  };

  const handleCreateSession = async (e: FormEvent) => {
    e.preventDefault();
    setFormMsg(null);
    setCreating(true);
    try {
      const code = normalizeSessionCode(newCode) || (await getNextSequentialCode(newGameSlug));
      const created = await createArcadeSession({
        gameSlug: newGameSlug,
        sessionCode: code,
        eventName: newEventName || `Session #${code}`,
        maxAttemptsPerPlayer: newMaxAttempts,
        createdByEmail: user?.email || "",
      });
      setSelectedSession(created);
      setNewEventName("");
      const nextSuggested = await getNextSequentialCode(newGameSlug);
      setNewCode(nextSuggested);
      setFormMsg(
        lang === "fr"
          ? `Session #${created.sessionCode} créée.`
          : `Session #${created.sessionCode} created.`,
      );
    } catch (err) {
      setFormMsg(
        err instanceof Error ? err.message : "Failed to create session.",
      );
    } finally {
      setCreating(false);
    }
  };

  const handleToggleGameEnabled = async (slug: string) => {
    const next = enabledGames.includes(slug)
      ? enabledGames.filter((s) => s !== slug)
      : [...enabledGames, slug];
    if (next.length === 0) return;
    setEnabledGames(next);
    await updateArcadeConfig({ enabledGames: next });
  };

  const handleStatusChange = async (s: ArcadeSession, status: SessionStatus) => {
    await updateArcadeSession(s.id, { status });
    if (selectedSession?.id === s.id) {
      setSelectedSession({ ...s, status });
    }
  };

  const handleDeleteSession = async (s: ArcadeSession) => {
    await deleteArcadeSession(s.id);
    if (selectedSession?.id === s.id) {
      setSelectedSession(null);
    }
  };

  const handleCopy = async (key: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 1600);
  };

  const exportCsv = () => {
    if (!selectedSession || selectedScores.length === 0) return;
    const header = "Rank,Player,Score,Metric,Attempts\n";
    const rows = selectedScores
      .map(
        (entry, i) =>
          `${i + 1},"${entry.displayName.replace(/"/g, '""')}",${entry.score},"${entry.metricLabel}",${entry.attempts}`,
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedSession.gameSlug}-${selectedSession.sessionCode}-scores.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredSessions = sessions.filter((s) => {
    if (filterGame !== "all" && s.gameSlug !== filterGame) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      return (
        s.eventName.toLowerCase().includes(q) ||
        s.sessionCode.toLowerCase().includes(q) ||
        s.gameSlug.toLowerCase().includes(q)
      );
    }
    return true;
  });

  if (!authReady || !authorized) {
    return (
      <div className="h-[100dvh] max-h-[100dvh] overflow-hidden relative bg-[var(--bg-primary)]">
        {/* Clean Floating Header matching Portfolio Hero (no line, no bg) */}
        <header className="admin-hero-header">
          <div className="w-full h-full px-5 sm:px-[2%] flex items-center justify-between gap-3">
            <a
              href={portfolioUrl}
              className="flex items-center gap-3 text-[var(--text-primary)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <img
                src={logoSvg.src}
                alt="glosings0n logo"
                width={30}
                height={30}
                style={{ filter: "var(--logo-filter)" }}
              />
              <span className="font-mono font-semibold text-xl tracking-tight">
                glosings0n
              </span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-semibold text-xs">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-1.5 py-1 cursor-pointer transition-colors ${
                    lang === "en"
                      ? "text-[var(--color-cyan)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--color-cyan)]"
                  }`}
                >
                  EN
                </button>
                <span className="text-[var(--border-color)] select-none">|</span>
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={`px-1.5 py-1 cursor-pointer transition-colors ${
                    lang === "fr"
                      ? "text-[var(--color-cyan)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--color-cyan)]"
                  }`}
                >
                  FR
                </button>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--color-cyan)] cursor-pointer transition-colors"
                aria-label="Toggle theme"
              >
                <AppIcon
                  name={theme === "dark" ? "sun" : "moon"}
                  size={18}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </header>

        {/* Full-Viewport Hero Login Section */}
        <section className="admin-hero-section">
          <img
            src={heroImg.src}
            alt="Georges Byona"
            className="admin-hero-bg-img"
          />

          <div className="relative z-10 w-full px-5 sm:px-[6%]">
            <div className="max-w-xl flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-semibold tracking-[-1.5px] leading-[1.1] text-[var(--text-primary)]">
                {lang === "fr" ? "Régie Arcade" : "Arcade Control"}{" "}
                <span className="font-mono font-normal text-[var(--color-cyan)]">
                  | Admin
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                {lang === "fr"
                  ? "Lancez vos sessions en direct, générez les QR codes et pilotez les classements temps réel."
                  : "Launch live event sessions, generate room QR codes, and manage real-time leaderboards."}
              </p>

              {authErrorCode || authError ? (
                <div className="w-full max-w-md rounded-xl px-4 py-3 border border-[var(--color-red)] bg-[var(--color-red-bg)] text-xs font-mono text-[var(--color-red)]">
                  {authErrorCode === "denied"
                    ? lang === "fr"
                      ? "Accès refusé pour ce compte Google."
                      : "Access denied for this Google account."
                    : authErrorCode === "misconfigured"
                      ? lang === "fr"
                        ? "Configuration administrateur requise côté serveur."
                        : "Server admin allowlist configuration is missing."
                      : authErrorCode === "network"
                        ? lang === "fr"
                          ? "Impossible de vérifier la session auprès du serveur."
                          : "Unable to verify session with the server."
                        : authError}
                </div>
              ) : null}

              {!authReady ? (
                <div className="h-12 flex items-center font-mono text-sm text-[var(--text-muted)]">
                  ...
                </div>
              ) : (
                <div className="pt-1">
                  <button
                    type="button"
                    disabled={signingIn}
                    onClick={() => void handleGoogleLogin()}
                    className="admin-btn admin-btn-primary h-13 px-7 text-base font-semibold"
                  >
                    <AppIcon name="google" size={18} strokeWidth={2} />
                    {signingIn
                      ? lang === "fr"
                        ? "Vérification..."
                        : "Verifying..."
                      : lang === "fr"
                        ? "Se connecter avec Google"
                        : "Sign in with Google"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <header className="sticky top-0 z-50 h-16 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="w-full px-5 h-full flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <a
              href={portfolioUrl}
              className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--color-cyan)] shrink-0"
            >
              <img
                src={logoSvg.src}
                alt="glosings0n logo"
                width={24}
                height={24}
                style={{ filter: "var(--logo-filter)" }}
              />
              <span className="font-mono font-semibold text-base">
                glosings0n
              </span>
            </a>
            <span className="font-mono text-sm font-medium text-[var(--color-cyan)] truncate">
              / admin
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {user ? (
              <button
                type="button"
                onClick={() => void signOutFirebase()}
                className="admin-btn h-9 px-3 text-xs font-mono"
              >
                <span className="hidden sm:inline">{user.email}</span>
                <AppIcon name="logout" size={15} strokeWidth={2} />
              </button>
            ) : null}

            <div className="flex items-center p-0.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] h-9">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 h-full rounded-md font-mono text-xs font-bold ${
                  lang === "en"
                    ? "bg-[var(--color-cyan)] text-[var(--text-on-accent)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`px-2 h-full rounded-md font-mono text-xs font-bold ${
                  lang === "fr"
                    ? "bg-[var(--color-cyan)] text-[var(--text-on-accent)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                FR
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="admin-btn w-9 h-9"
              aria-label="Toggle theme"
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

      {/* Main Content */}
      <main className="flex-1 w-full px-5 sm:px-8 py-6">
        <div className="flex flex-col gap-6">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTab("sessions")}
                  className={`admin-btn h-10 px-4 text-sm ${
                    tab === "sessions" ? "admin-btn-primary" : ""
                  }`}
                >
                  <AppIcon name="qr" size={16} strokeWidth={2} />
                  {lang === "fr"
                    ? `Sessions (${sessions.length})`
                    : `Sessions (${sessions.length})`}
                </button>
                <button
                  type="button"
                  onClick={() => setTab("games")}
                  className={`admin-btn h-10 px-4 text-sm ${
                    tab === "games" ? "admin-btn-primary" : ""
                  }`}
                >
                  <AppIcon name="game" size={16} strokeWidth={2} />
                  {lang === "fr" ? "Jeux (10)" : "Games (10)"}
                </button>
              </div>

              <a
                href={gameBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="admin-btn h-10 px-4 text-xs font-mono"
              >
                <AppIcon name="external" size={15} strokeWidth={2} />
                game.glosings0n.dev
              </a>
            </div>

            {tab === "sessions" ? (
              <>
                {/* Create Session Form */}
                <section className="admin-surface p-5 sm:p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <AppIcon
                      name="add"
                      size={18}
                      className="text-[var(--color-cyan)]"
                    />
                    {lang === "fr"
                      ? "Lancer une nouvelle session d'événement"
                      : "Launch New Event Session"}
                  </h2>

                  <form
                    onSubmit={(e) => void handleCreateSession(e)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
                  >
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <label className="font-mono text-xs text-[var(--text-muted)] uppercase">
                        {lang === "fr" ? "Jeu" : "Game"}
                      </label>
                      <AppSelect
                        value={newGameSlug}
                        options={gameOptions}
                        onChange={(val) => {
                          setNewGameSlug(val);
                          void handleSuggestNextCode(val);
                        }}
                      />
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="font-mono text-xs text-[var(--text-muted)] uppercase">
                        {lang === "fr" ? "Nom de l'événement" : "Event Name"}
                      </label>
                      <input
                        type="text"
                        value={newEventName}
                        onChange={(e) => setNewEventName(e.target.value)}
                        placeholder="DevFest Kigali 2026 | Flutter Talk"
                        className="admin-input h-11 text-sm"
                      />
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-1">
                      <label className="font-mono text-xs text-[var(--text-muted)] uppercase">
                        {lang === "fr" ? "Code / Slug URL" : "Session Code"}
                      </label>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={newCode}
                          onChange={(e) => setNewCode(e.target.value)}
                          placeholder="00001 / devfest-2026"
                          className="admin-input h-11 font-mono text-sm flex-1 min-w-0"
                        />
                        <button
                          type="button"
                          onClick={() => void handleSuggestNextCode()}
                          className="admin-btn h-11 px-3 text-xs font-mono shrink-0"
                          title="Auto next sequential code"
                        >
                          Auto
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-1">
                      <label className="font-mono text-xs text-[var(--text-muted)] uppercase">
                        {lang === "fr" ? "Essais max" : "Max Runs"}
                      </label>
                      <AppSelect
                        value={String(newMaxAttempts)}
                        options={maxAttemptsOptions}
                        onChange={(val) => setNewMaxAttempts(Number(val))}
                        triggerClassName="font-mono text-sm"
                      />
                    </div>

                    <div className="md:col-span-12 flex items-center justify-between gap-3 pt-2">
                      <span className="font-mono text-xs text-[var(--color-cyan)] truncate">
                        {gameBaseUrl}/{newGameSlug}/
                        {normalizeSessionCode(newCode) || "00001"}
                      </span>
                      <button
                        type="submit"
                        disabled={creating}
                        className="admin-btn admin-btn-primary h-11 px-5 text-sm shrink-0"
                      >
                        <AppIcon name="play" size={16} strokeWidth={2} />
                        {creating
                          ? "..."
                          : lang === "fr"
                            ? "Créer la session"
                            : "Launch Session"}
                      </button>
                    </div>
                  </form>

                  {formMsg ? (
                    <p className="mt-3 font-mono text-xs text-[var(--color-cyan)]">
                      {formMsg}
                    </p>
                  ) : null}
                </section>

                {/* Sessions + Inspector Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Sessions List */}
                  <section className="lg:col-span-7 admin-surface p-5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="w-full sm:w-56">
                        <AppSelect
                          value={filterGame}
                          options={filterGameOptions}
                          onChange={setFilterGame}
                          triggerClassName="h-10 text-xs font-mono"
                        />
                      </div>

                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                          lang === "fr"
                            ? "Rechercher code ou événement..."
                            : "Search code or event..."
                        }
                        className="admin-input h-10 text-xs flex-1 min-w-[180px]"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      {filteredSessions.length === 0 ? (
                        <p className="py-8 text-center text-sm text-[var(--text-muted)]">
                          {lang === "fr"
                            ? "Aucune session pour le moment."
                            : "No sessions created yet."}
                        </p>
                      ) : (
                        filteredSessions.map((s) => {
                          const gameMeta = getArcadeGame(s.gameSlug);
                          const isSelected = selectedSession?.id === s.id;
                          const joinUrl = `${gameBaseUrl}/${s.gameSlug}/${s.sessionCode}`;
                          const boardUrl = `${joinUrl}/leaderboard`;
                          return (
                            <div
                              key={s.id}
                              className={`admin-card p-4 flex flex-col gap-3 ${
                                isSelected
                                  ? "border-[var(--color-cyan)]"
                                  : ""
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-mono text-xs font-bold text-[var(--color-cyan)]">
                                      {gameMeta?.titleEn || s.gameSlug}
                                    </span>
                                    <span className="font-mono text-xs text-[var(--text-muted)]">
                                      #{s.sessionCode}
                                    </span>
                                    <span
                                      className={`font-mono text-[11px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                                        s.status === "active"
                                          ? "bg-[var(--color-green-bg)] border-[var(--color-green)] text-[var(--color-green)]"
                                          : s.status === "paused"
                                            ? "bg-[var(--color-amber-bg)] border-[var(--color-amber)] text-[var(--color-amber)]"
                                            : "bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-muted)]"
                                      }`}
                                    >
                                      {s.status}
                                    </span>
                                  </div>
                                  <h3 className="font-bold text-base mt-1">
                                    {s.eventName}
                                  </h3>
                                </div>

                                <div className="flex gap-1.5 shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => setSelectedSession(s)}
                                    className="admin-btn h-8 px-2.5 text-xs font-mono"
                                    title="Inspect QR & Leaderboard"
                                  >
                                    <AppIcon name="qr" size={14} />
                                    <AppIcon name="trophy" size={14} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => void handleDeleteSession(s)}
                                    className="admin-btn h-8 px-2.5 text-xs text-[var(--color-red)]"
                                    title="Delete session"
                                  >
                                    <AppIcon name="trash" size={14} />
                                  </button>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                                <button
                                  type="button"
                                  onClick={() =>
                                    void handleCopy(`join-${s.id}`, joinUrl)
                                  }
                                  className="admin-btn h-8 px-2.5"
                                >
                                  <AppIcon
                                    name={
                                      copiedId === `join-${s.id}`
                                        ? "check"
                                        : "copy"
                                    }
                                    size={13}
                                  />
                                  {copiedId === `join-${s.id}`
                                    ? "Copied"
                                    : "Join URL"}
                                </button>
                                <a
                                  href={boardUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="admin-btn h-8 px-2.5"
                                >
                                  <AppIcon name="external" size={13} />
                                  Leaderboard
                                </a>
                                {s.status !== "active" ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void handleStatusChange(s, "active")
                                    }
                                    className="admin-btn h-8 px-2.5 text-[var(--color-green)]"
                                  >
                                    <AppIcon name="play" size={13} />
                                    Resume
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void handleStatusChange(s, "paused")
                                    }
                                    className="admin-btn h-8 px-2.5 text-[var(--color-amber)]"
                                  >
                                    <AppIcon name="pause" size={13} />
                                    Pause
                                  </button>
                                )}
                                {s.status !== "ended" ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void handleStatusChange(s, "ended")
                                    }
                                    className="admin-btn h-8 px-2.5"
                                  >
                                    <AppIcon name="stop" size={13} />
                                    End
                                  </button>
                                ) : null}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </section>

                  {/* Right: Selected Session QR + Live Leaderboard */}
                  <section className="lg:col-span-5 admin-surface p-5 flex flex-col gap-4">
                    {!selectedSession ? (
                      <div className="py-12 text-center text-sm text-[var(--text-muted)]">
                        {lang === "fr"
                          ? "Sélectionne une session pour afficher son QR code et son classement en direct."
                          : "Select a session to display its QR code and live leaderboard."}
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="font-mono text-xs text-[var(--color-cyan)]">
                              {selectedSession.gameSlug} / #
                              {selectedSession.sessionCode}
                            </span>
                            <h3 className="text-lg font-bold">
                              {selectedSession.eventName}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={exportCsv}
                            disabled={selectedScores.length === 0}
                            className="admin-btn h-9 px-3 text-xs font-mono"
                          >
                            <AppIcon name="download" size={14} />
                            CSV
                          </button>
                        </div>

                        {qrDataUrl ? (
                          <div className="admin-card p-4 flex flex-col items-center gap-3">
                            <img
                              src={qrDataUrl}
                              alt="Session QR Code"
                              width={190}
                              height={190}
                              className="rounded-lg bg-white p-1.5"
                            />
                            <div className="flex gap-2">
                              <a
                                href={qrDataUrl}
                                download={`${selectedSession.gameSlug}-${selectedSession.sessionCode}-qr.png`}
                                className="admin-btn h-8 px-3 text-xs font-mono"
                              >
                                <AppIcon name="download" size={13} />
                                QR PNG
                              </a>
                              <a
                                href={`${gameBaseUrl}/${selectedSession.gameSlug}/${selectedSession.sessionCode}/leaderboard`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="admin-btn admin-btn-primary h-8 px-3 text-xs font-mono"
                              >
                                <AppIcon name="fullscreen" size={13} />
                                Projector
                              </a>
                            </div>
                          </div>
                        ) : null}

                        <div className="flex flex-col gap-2">
                          <div className="font-mono text-xs uppercase text-[var(--text-muted)]">
                            {lang === "fr"
                              ? `Classement live (${selectedScores.length})`
                              : `Live Leaderboard (${selectedScores.length})`}
                          </div>
                          {selectedScores.length === 0 ? (
                            <p className="text-xs text-[var(--text-muted)] py-4 text-center">
                              {lang === "fr"
                                ? "Aucun score enregistré."
                                : "No scores yet."}
                            </p>
                          ) : (
                            selectedScores.map((entry, idx) => (
                              <div
                                key={entry.uid}
                                className="admin-card px-3 py-2 flex items-center justify-between gap-2 text-xs"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="font-mono font-bold text-[var(--color-cyan)] w-5">
                                    #{idx + 1}
                                  </span>
                                  <span className="font-semibold truncate">
                                    {entry.displayName}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="font-mono font-bold">
                                    {entry.metricLabel}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      void deletePlayerScore(
                                        selectedSession.id,
                                        entry.uid,
                                      )
                                    }
                                    className="text-[var(--text-muted)] hover:text-[var(--color-red)]"
                                    title="Remove score"
                                  >
                                    <AppIcon name="trash" size={13} />
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </>
                    )}
                  </section>
                </div>
              </>
            ) : (
              /* Games Catalog Management Tab */
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ARCADE_GAMES.map((game) => {
                  const isEnabled = enabledGames.includes(game.slug);
                  const gameSessions = sessions.filter(
                    (s) => s.gameSlug === game.slug,
                  );
                  return (
                    <div
                      key={game.slug}
                      className="admin-surface p-5 flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-cyan)]">
                            <AppIcon name={game.icon} size={18} />
                          </div>
                          <div>
                            <h3 className="font-bold text-base">
                              {lang === "fr" ? game.titleFr : game.titleEn}
                            </h3>
                            <span className="font-mono text-xs text-[var(--text-muted)]">
                              {game.durationLabel} | {gameSessions.length}{" "}
                              sessions
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            void handleToggleGameEnabled(game.slug)
                          }
                          className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border ${
                            isEnabled
                              ? "bg-[var(--color-green-bg)] border-[var(--color-green)] text-[var(--color-green)]"
                              : "bg-[var(--bg-tertiary)] border-[var(--border-color)] text-[var(--text-muted)]"
                          }`}
                        >
                          {isEnabled ? "ON" : "OFF"}
                        </button>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] flex-1">
                        {lang === "fr" ? game.taglineFr : game.taglineEn}
                      </p>

                      <div className="flex gap-2 pt-2 border-t border-[var(--border-color)]">
                        <button
                          type="button"
                          onClick={() => {
                            setNewGameSlug(game.slug);
                            void handleSuggestNextCode(game.slug);
                            setTab("sessions");
                          }}
                          className="admin-btn admin-btn-primary h-9 px-3 text-xs flex-1"
                        >
                          <AppIcon name="add" size={14} />
                          {lang === "fr" ? "Nouvelle session" : "New Session"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFilterGame(game.slug);
                            setTab("sessions");
                          }}
                          className="admin-btn h-9 px-3 text-xs font-mono"
                        >
                          {lang === "fr" ? "Sessions" : "Boards"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </section>
            )}
          </div>
      </main>
    </div>
  );
}
