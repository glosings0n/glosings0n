"use client";

import {
  formatScoreMetric,
  getArcadeGame,
  normalizeSessionCode,
  signInWithGoogle,
  submitPlayerScore,
  subscribeAuthState,
  subscribeSession,
  subscribeSessionLeaderboard,
  type ArcadeSession,
  type AuthUser,
  type PlayerScoreEntry,
} from "@repo/arcade";
import { AppIcon } from "@repo/ui";
import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { useArcadeSettings } from "./ArcadeContext";
import { ArcadeTopbar } from "./ArcadeTopbar";
import { GAME_COMPONENTS, type GameResult } from "./games";

const SOLO_BEST_EVENT = "glosings0n:solobest";

interface SessionPlayerClientProps {
  gameSlug: string;
  rawSessionCode: string;
}

type PlayStage = "lobby" | "countdown" | "playing" | "finished";

export function SessionPlayerClient({
  gameSlug,
  rawSessionCode,
}: SessionPlayerClientProps) {
  const { lang } = useArcadeSettings();
  const game = getArcadeGame(gameSlug);
  const sessionCode = normalizeSessionCode(rawSessionCode);
  const isSolo = sessionCode === "solo";

  const [user, setUser] = useState<AuthUser | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  const [session, setSession] = useState<ArcadeSession | null>(null);
  const [loadedSessionKey, setLoadedSessionKey] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<PlayerScoreEntry[]>([]);

  const [nickname, setNickname] = useState("");
  const [stage, setStage] = useState<PlayStage>("lobby");
  const [countdown, setCountdown] = useState(3);
  const [runKey, setRunKey] = useState(0);
  const [lastResult, setLastResult] = useState<GameResult | null>(null);
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const subscribeSoloBest = useCallback((onChange: () => void) => {
    window.addEventListener("storage", onChange);
    window.addEventListener(SOLO_BEST_EVENT, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(SOLO_BEST_EVENT, onChange);
    };
  }, []);

  const soloBest = useSyncExternalStore(
    subscribeSoloBest,
    () => {
      if (!game || !isSolo) return null;
      const raw = localStorage.getItem(`glosings0n_solo_best_${game.slug}`);
      if (!raw) return null;
      const parsed = Number(raw);
      return Number.isFinite(parsed) ? parsed : null;
    },
    () => null,
  );

  const sessionLoading =
    !isSolo && Boolean(game) && loadedSessionKey !== `${game?.slug}:${sessionCode}`;

  useEffect(() => {
    const unsubAuth = subscribeAuthState((nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
      if (nextUser) {
        const defaultName = (
          nextUser.displayName ||
          nextUser.email?.split("@")[0] ||
          "Player"
        ).slice(0, 40);
        setNickname((prev) => prev || defaultName);
      }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!game || isSolo) {
      return;
    }

    const activeKey = `${game.slug}:${sessionCode}`;
    const unsubSession = subscribeSession(game.slug, sessionCode, (doc) => {
      setSession(doc);
      setLoadedSessionKey(activeKey);
    });
    const unsubBoard = subscribeSessionLeaderboard(
      game.slug,
      sessionCode,
      game.sortOrder,
      (entries) => {
        setLeaderboard(entries);
      },
    );
    return () => {
      unsubSession();
      unsubBoard();
    };
  }, [game, isSolo, sessionCode]);

  useEffect(() => {
    if (stage !== "countdown") return;
    const timer = setTimeout(() => {
      if (countdown <= 1) {
        setCountdown(0);
        setStage("playing");
      } else {
        setCountdown((c) => c - 1);
      }
    }, 650);
    return () => clearTimeout(timer);
  }, [stage, countdown]);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <ArcadeTopbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="arcade-surface p-8 max-w-md text-center flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              {lang === "fr" ? "Jeu introuvable" : "Game not found"}
            </h1>
            <Link href="/" className="arcade-btn arcade-btn-primary h-11 px-5">
              {lang === "fr" ? "Retour au catalogue" : "Back to Arcade"}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const GameComponent = GAME_COMPONENTS[game.slug]!;
  const myEntry = user ? leaderboard.find((e) => e.uid === user.uid) : undefined;
  const myRank =
    user && myEntry
      ? leaderboard.findIndex((e) => e.uid === user.uid) + 1
      : null;
  const attemptsUsed = myEntry?.attempts ?? 0;
  const maxAttempts = session?.maxAttemptsPerPlayer ?? 3;
  const canPlaySession =
    !isSolo &&
    session?.status === "active" &&
    Boolean(user) &&
    attemptsUsed < maxAttempts;

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setAuthError(
        err instanceof Error
          ? err.message
          : lang === "fr"
            ? "Échec de connexion Google."
            : "Google Sign-In failed.",
      );
    } finally {
      setSigningIn(false);
    }
  };

  const startCountdown = () => {
    setLastResult(null);
    setSaveState("idle");
    setSaveMessage(null);
    setCountdown(3);
    setRunKey((k) => k + 1);
    setStage("countdown");
  };

  const handleFinish = async (result: GameResult) => {
    setLastResult(result);
    setStage("finished");

    if (isSolo) {
      const prev = soloBest;
      const improved =
        prev === null ||
        (game.sortOrder === "asc" ? result.score < prev : result.score > prev);
      if (improved) {
        localStorage.setItem(
          `glosings0n_solo_best_${game.slug}`,
          String(result.score),
        );
        window.dispatchEvent(new Event(SOLO_BEST_EVENT));
      }
      return;
    }

    if (!user || !session || session.status !== "active") return;
    setSaveState("saving");
    try {
      const saved = await submitPlayerScore({
        gameSlug: game.slug,
        sessionCode,
        uid: user.uid,
        displayName: nickname.trim() || user.displayName || "Player",
        photoURL: user.photoURL,
        score: result.score,
        meta: result.meta,
      });
      setSaveState("saved");
      setSaveMessage(
        saved.improved
          ? lang === "fr"
            ? `Nouveau record personnel enregistré (${formatScoreMetric(game, saved.savedScore)})`
            : `New personal best saved (${formatScoreMetric(game, saved.savedScore)})`
          : lang === "fr"
            ? `Score enregistré. Meilleur conservé : ${formatScoreMetric(game, saved.savedScore)}`
            : `Score submitted. Best kept: ${formatScoreMetric(game, saved.savedScore)}`,
      );
    } catch (err) {
      setSaveState("error");
      setSaveMessage(
        err instanceof Error
          ? err.message
          : lang === "fr"
            ? "Impossible d'enregistrer le score."
            : "Could not submit score.",
      );
    }
  };

  const isActivePlay = stage === "countdown" || stage === "playing";

  return (
    <div
      className={
        isActivePlay
          ? "h-[100dvh] max-h-[100dvh] overflow-hidden overscroll-none flex flex-col select-none"
          : "min-h-screen flex flex-col"
      }
    >
      <ArcadeTopbar
        subtitle={`/ ${game.slug} / ${sessionCode}`}
        user={user}
        backHref="/"
      />

      <main
        className={
          isActivePlay
            ? "flex-1 min-h-0 w-full px-3 sm:px-6 py-2 sm:py-4 flex flex-col justify-center overflow-hidden"
            : "flex-1 w-full px-5 sm:px-8 py-6 flex flex-col gap-5"
        }
      >
        {/* Session Header (hidden during active play so game stays zero-scroll) */}
        {!isActivePlay ? (
          <section className="arcade-surface p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-cyan)]">
                  <AppIcon name={game.icon} size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h1 className="text-xl font-bold leading-tight">
                    {lang === "fr" ? game.titleFr : game.titleEn}
                  </h1>
                  <p className="font-mono text-xs text-[var(--color-cyan)]">
                    {isSolo
                      ? lang === "fr"
                        ? "MODE ENTRAÎNEMENT SOLO"
                        : "SOLO PRACTICE MODE"
                      : session
                        ? `${session.eventName} | #${session.sessionCode}`
                        : `Session #${sessionCode}`}
                  </p>
                </div>
              </div>

              {!isSolo ? (
                <Link
                  href={`/${game.slug}/${sessionCode}/leaderboard`}
                  className="arcade-btn h-9 px-3 text-xs font-mono"
                >
                  <AppIcon name="trophy" size={15} strokeWidth={2} />
                  {lang === "fr" ? "Classement" : "Leaderboard"}
                </Link>
              ) : null}
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              {lang === "fr" ? game.instructionsFr : game.instructionsEn}
            </p>
          </section>
        ) : null}

        {/* Main Game / Auth / Result Card */}
        <section
          className={
            isActivePlay
              ? "arcade-surface p-3.5 sm:p-5 w-full max-h-full overflow-hidden flex flex-col justify-center"
              : "arcade-surface p-5 sm:p-6"
          }
        >
          {isActivePlay ? (
            <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[var(--border-color)] shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <AppIcon
                  name={game.icon}
                  size={16}
                  strokeWidth={2}
                  className="text-[var(--color-cyan)] shrink-0"
                />
                <span className="font-semibold text-sm truncate">
                  {lang === "fr" ? game.titleFr : game.titleEn}
                </span>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--color-cyan)] shrink-0">
                  {isSolo ? "SOLO" : `#${sessionCode}`}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStage("lobby")}
                className="arcade-btn h-8 px-2.5 text-xs font-mono shrink-0"
              >
                {lang === "fr" ? "Quitter" : "Exit"}
              </button>
            </div>
          ) : null}
          {!isSolo && sessionLoading ? (
            <div className="py-12 text-center font-mono text-sm text-[var(--text-muted)]">
              {lang === "fr"
                ? "Chargement de la session..."
                : "Loading session..."}
            </div>
          ) : !isSolo && !session ? (
            <div className="py-6 text-center flex flex-col items-center gap-4">
              <AppIcon
                name="warning"
                size={36}
                className="text-[var(--color-amber)]"
              />
              <div>
                <h2 className="text-lg font-bold">
                  {lang === "fr"
                    ? `Session #${sessionCode} introuvable`
                    : `Session #${sessionCode} not found`}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {lang === "fr"
                    ? "Vérifie le code ou demande à l'intervenant d'ouvrir la session depuis la console admin."
                    : "Double-check the code or wait for the speaker to launch this session from the admin console."}
                </p>
              </div>
              <Link
                href={`/${game.slug}/solo`}
                className="arcade-btn arcade-btn-primary h-11 px-5 text-sm"
              >
                <AppIcon name="play" size={16} strokeWidth={2} />
                {lang === "fr" ? "Jouer en Solo" : "Play Solo Instead"}
              </Link>
            </div>
          ) : stage === "lobby" ? (
            <div className="flex flex-col gap-5">
              {isSolo ? (
                <div className="flex flex-col gap-4 items-center text-center py-4">
                  {soloBest !== null ? (
                    <div className="arcade-card px-4 py-2 font-mono text-sm text-[var(--color-cyan)]">
                      {lang === "fr" ? "Record local :" : "Local Best:"}{" "}
                      {formatScoreMetric(game, soloBest)}
                    </div>
                  ) : null}
                  <button
                    type="button"
                    onClick={startCountdown}
                    className="arcade-btn arcade-btn-primary h-12 px-8 text-base"
                  >
                    <AppIcon name="play" size={18} strokeWidth={2} />
                    {lang === "fr" ? "Lancer le défi" : "Start Challenge"}
                  </button>
                </div>
              ) : session && session.status !== "active" ? (
                <div className="py-6 text-center flex flex-col items-center gap-4">
                  <span className="font-mono text-xs font-bold uppercase px-3 py-1 rounded-full bg-[var(--color-amber-bg)] border border-[var(--color-amber)] text-[var(--color-amber)]">
                    {session.status}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {session.status === "paused"
                      ? lang === "fr"
                        ? "Cette session est actuellement en pause."
                        : "This session is currently paused."
                      : lang === "fr"
                        ? "Cette session est terminée."
                        : "This session has ended."}
                  </p>
                  <Link
                    href={`/${game.slug}/${sessionCode}/leaderboard`}
                    className="arcade-btn arcade-btn-primary h-11 px-5 text-sm"
                  >
                    <AppIcon name="trophy" size={16} strokeWidth={2} />
                    {lang === "fr"
                      ? "Voir le classement final"
                      : "View Leaderboard"}
                  </Link>
                </div>
              ) : !authReady ? (
                <div className="py-8 text-center font-mono text-sm text-[var(--text-muted)]">
                  ...
                </div>
              ) : !user ? (
                <div className="py-4 text-center flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-cyan)]">
                    <AppIcon name="google" size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">
                      {lang === "fr"
                        ? "Connexion Google requise pour le classement"
                        : "Sign in with Google to Join the Leaderboard"}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {lang === "fr"
                        ? "Un seul clic avec ton compte Google pour enregistrer ton score en direct."
                        : "One-tap Google Sign-In so your score updates on the live room screen."}
                    </p>
                  </div>
                  {authError ? (
                    <p className="text-xs font-mono text-[var(--color-red)]">
                      {authError}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    disabled={signingIn}
                    onClick={() => void handleGoogleSignIn()}
                    className="arcade-btn arcade-btn-primary h-12 px-6 text-sm"
                  >
                    <AppIcon name="google" size={18} strokeWidth={2} />
                    {signingIn
                      ? lang === "fr"
                        ? "Connexion..."
                        : "Signing in..."
                      : lang === "fr"
                        ? "Continuer avec Google"
                        : "Continue with Google"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3 flex-wrap arcade-card p-3.5">
                    <div className="text-sm">
                      <span className="text-[var(--text-muted)]">
                        {lang === "fr" ? "Connecté :" : "Signed in:"}
                      </span>{" "}
                      <span className="font-mono font-semibold">
                        {user.email}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[var(--color-cyan)]">
                      {lang === "fr" ? "Essais" : "Attempts"}: {attemptsUsed} /{" "}
                      {maxAttempts}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="player-nickname"
                      className="font-mono text-xs font-semibold uppercase text-[var(--text-secondary)]"
                    >
                      {lang === "fr"
                        ? "Pseudo sur le classement"
                        : "Leaderboard Display Name"}
                    </label>
                    <input
                      id="player-nickname"
                      type="text"
                      maxLength={40}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="arcade-input font-medium"
                      placeholder={user.displayName || "Player"}
                    />
                  </div>

                  {myEntry ? (
                    <div className="arcade-card p-3.5 flex items-center justify-between text-sm">
                      <span>
                        {lang === "fr" ? "Ton meilleur :" : "Your Best:"}{" "}
                        <strong className="font-mono text-[var(--color-cyan)]">
                          {myEntry.metricLabel}
                        </strong>
                      </span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        Rank #{myRank} / {leaderboard.length}
                      </span>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    disabled={!canPlaySession || !nickname.trim()}
                    onClick={startCountdown}
                    className="arcade-btn arcade-btn-primary h-12 px-6 text-base w-full"
                  >
                    <AppIcon name="play" size={18} strokeWidth={2} />
                    {attemptsUsed >= maxAttempts
                      ? lang === "fr"
                        ? "Nombre max d'essais atteint"
                        : "Maximum Attempts Reached"
                      : lang === "fr"
                        ? `Démarrer (${game.durationLabel})`
                        : `Start (${game.durationLabel})`}
                  </button>
                </div>
              )}
            </div>
          ) : stage === "countdown" ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                {lang === "fr" ? "Prépare-toi..." : "Get Ready..."}
              </span>
              <div className="font-mono text-7xl font-extrabold text-[var(--color-cyan)]">
                {countdown > 0 ? countdown : "GO!"}
              </div>
            </div>
          ) : stage === "playing" ? (
            <GameComponent
              key={runKey}
              lang={lang}
              onFinish={(res) => void handleFinish(res)}
            />
          ) : (
            <div className="py-4 flex flex-col items-center gap-5 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-cyan-tint)] border border-[var(--color-cyan)] flex items-center justify-center text-[var(--color-cyan)]">
                <AppIcon name="trophy" size={28} strokeWidth={1.8} />
              </div>

              <div>
                <div className="font-mono text-4xl font-extrabold text-[var(--color-cyan)]">
                  {lastResult
                    ? formatScoreMetric(game, lastResult.score)
                    : "-"}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {lastResult
                    ? lang === "fr"
                      ? lastResult.summaryFr
                      : lastResult.summaryEn
                    : ""}
                </p>
              </div>

              {!isSolo ? (
                <div className="w-full arcade-card p-3.5 text-sm">
                  {saveState === "saving" ? (
                    <span className="font-mono text-[var(--text-muted)]">
                      {lang === "fr"
                        ? "Envoi au classement..."
                        : "Saving to live leaderboard..."}
                    </span>
                  ) : saveState === "error" ? (
                    <span className="font-mono text-[var(--color-red)]">
                      {saveMessage}
                    </span>
                  ) : (
                    <span className="font-mono text-[var(--color-green)]">
                      {saveMessage}
                      {myRank ? ` | Rank #${myRank}` : ""}
                    </span>
                  )}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                {isSolo || canPlaySession ? (
                  <button
                    type="button"
                    onClick={startCountdown}
                    className="arcade-btn arcade-btn-primary h-11 px-5 text-sm"
                  >
                    <AppIcon name="refresh" size={16} strokeWidth={2} />
                    {lang === "fr" ? "Rejouer" : "Play Again"}
                  </button>
                ) : null}

                {!isSolo ? (
                  <Link
                    href={`/${game.slug}/${sessionCode}/leaderboard`}
                    className="arcade-btn h-11 px-5 text-sm"
                  >
                    <AppIcon name="trophy" size={16} strokeWidth={2} />
                    {lang === "fr"
                      ? "Classement en direct"
                      : "Live Leaderboard"}
                  </Link>
                ) : null}
              </div>
            </div>
          )}
        </section>

        {/* Top 5 Live Preview during Event Session (hidden during active play) */}
        {!isActivePlay && !isSolo && leaderboard.length > 0 ? (
          <section className="arcade-surface p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)]">
                {lang === "fr"
                  ? `Top 5 en direct (${leaderboard.length} joueurs)`
                  : `Live Top 5 (${leaderboard.length} players)`}
              </h2>
              <Link
                href={`/${game.slug}/${sessionCode}/leaderboard`}
                className="font-mono text-xs text-[var(--color-cyan)] hover:underline"
              >
                {lang === "fr" ? "Vue complète →" : "Full board →"}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {leaderboard.slice(0, 5).map((entry, idx) => (
                <div
                  key={entry.uid}
                  className={`arcade-card px-3.5 py-2.5 flex items-center justify-between text-sm ${
                    user?.uid === entry.uid
                      ? "border-[var(--color-cyan)]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold text-[var(--color-cyan)] w-6">
                      #{idx + 1}
                    </span>
                    <span className="font-medium truncate">
                      {entry.displayName}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-[var(--text-primary)]">
                    {entry.metricLabel}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
