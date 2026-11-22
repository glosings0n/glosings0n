"use client";

import {
  generateQrDataUrl,
  getArcadeGame,
  normalizeSessionCode,
  subscribeSession,
  subscribeSessionLeaderboard,
  type ArcadeSession,
  type PlayerScoreEntry,
} from "@repo/arcade";
import { AppIcon } from "@repo/ui";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useArcadeSettings } from "./ArcadeContext";
import { ArcadeTopbar } from "./ArcadeTopbar";

const emptySubscribe = () => () => {};

interface LeaderboardClientProps {
  gameSlug: string;
  rawSessionCode: string;
}

export function LeaderboardClient({
  gameSlug,
  rawSessionCode,
}: LeaderboardClientProps) {
  const { lang } = useArcadeSettings();
  const game = getArcadeGame(gameSlug);
  const sessionCode = normalizeSessionCode(rawSessionCode);

  const [session, setSession] = useState<ArcadeSession | null>(null);
  const [entries, setEntries] = useState<PlayerScoreEntry[]>([]);
  const [showQr, setShowQr] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const origin = useSyncExternalStore(
    emptySubscribe,
    () => window.location.origin,
    () => "https://game.glosings0n.dev",
  );
  const joinLink = game ? `${origin}/${game.slug}/${sessionCode}` : "";

  useEffect(() => {
    if (!game) return;
    const unsubSession = subscribeSession(game.slug, sessionCode, setSession);
    const unsubBoard = subscribeSessionLeaderboard(
      game.slug,
      sessionCode,
      game.sortOrder,
      setEntries,
    );
    return () => {
      unsubSession();
      unsubBoard();
    };
  }, [game, sessionCode]);

  useEffect(() => {
    if (!game) return;
    const url = `${window.location.origin}/${game.slug}/${sessionCode}`;
    void generateQrDataUrl(url).then(setQrUrl);
  }, [game, sessionCode]);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <ArcadeTopbar />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="arcade-surface p-8 text-center">
            <h1 className="text-xl font-bold">Game not found</h1>
            <Link href="/" className="arcade-btn arcade-btn-primary mt-4 h-10 px-4">
              Back
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const copyLink = async () => {
    if (!joinLink) return;
    await navigator.clipboard.writeText(joinLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const podium = entries.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <ArcadeTopbar
        subtitle={`/ ${game.slug} / ${sessionCode} / leaderboard`}
        backHref={`/${game.slug}/${sessionCode}`}
      />

      <main className="flex-1 w-full px-5 sm:px-8 py-6 flex flex-col gap-6">
        {/* Projector Header */}
        <section className="arcade-surface p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-cyan)] shrink-0">
              <AppIcon name={game.icon} size={24} strokeWidth={1.8} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--color-cyan)]">
                  {lang === "fr" ? game.titleFr : game.titleEn}
                </span>
                <span
                  className={`font-mono text-xs font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                    session?.status === "active"
                      ? "bg-[var(--color-green-bg)] border-[var(--color-green)] text-[var(--color-green)]"
                      : "bg-[var(--color-amber-bg)] border-[var(--color-amber)] text-[var(--color-amber)]"
                  }`}
                >
                  {session?.status || "OFFLINE"}
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {entries.length}{" "}
                  {lang === "fr" ? "joueurs" : "players"}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mt-1">
                {session?.eventName || `Session #${sessionCode}`}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setShowQr((s) => !s)}
              className="arcade-btn h-10 px-3.5 text-xs font-mono"
            >
              <AppIcon name="qr" size={16} strokeWidth={2} />
              {showQr
                ? lang === "fr"
                  ? "Masquer QR"
                  : "Hide QR"
                : lang === "fr"
                  ? "Afficher QR"
                  : "Show QR"}
            </button>
            <button
              type="button"
              onClick={() => void toggleFullscreen()}
              className="arcade-btn h-10 px-3.5 text-xs font-mono"
            >
              <AppIcon name="fullscreen" size={16} strokeWidth={2} />
              {lang === "fr" ? "Plein écran" : "Fullscreen"}
            </button>
            <Link
              href={`/${game.slug}/${sessionCode}`}
              className="arcade-btn arcade-btn-primary h-10 px-4 text-xs font-mono"
            >
              <AppIcon name="play" size={15} strokeWidth={2} />
              {lang === "fr" ? "Jouer" : "Join"}
            </Link>
          </div>
        </section>

        {/* Optional QR Projector Drawer */}
        {showQr && qrUrl ? (
          <section className="arcade-surface p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src={qrUrl}
              alt={`QR code for ${joinLink}`}
              width={200}
              height={200}
              className="rounded-xl border border-[var(--border-color)] bg-white p-2"
            />
            <div className="flex flex-col gap-3 max-w-md text-center sm:text-left">
              <h2 className="text-lg font-bold">
                {lang === "fr"
                  ? "Scannez pour rejoindre en direct"
                  : "Scan to Join Live"}
              </h2>
              <p className="font-mono text-xs text-[var(--color-cyan)] break-all">
                {joinLink}
              </p>
              <div className="flex gap-2 justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => void copyLink()}
                  className="arcade-btn h-9 px-3.5 text-xs font-mono"
                >
                  <AppIcon
                    name={copied ? "check" : "copy"}
                    size={14}
                    strokeWidth={2}
                  />
                  {copied
                    ? lang === "fr"
                      ? "Copié !"
                      : "Copied!"
                    : lang === "fr"
                      ? "Copier le lien"
                      : "Copy Link"}
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {/* Top 3 Podium */}
        {podium.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {podium.map((entry, idx) => {
              const borderStyle =
                idx === 0
                  ? "border-[var(--color-amber)]"
                  : idx === 1
                    ? "border-[var(--color-cyan)]"
                    : "border-[#c4502a]";
              const rankBadge =
                idx === 0 ? "#1" : idx === 1 ? "#2" : "#3";
              return (
                <div
                  key={entry.uid}
                  className={`arcade-surface p-5 border-2 ${borderStyle} flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-2xl font-extrabold text-[var(--color-cyan)]">
                      {rankBadge}
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-lg truncate">
                        {entry.displayName}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        {entry.attempts}{" "}
                        {entry.attempts > 1
                          ? lang === "fr"
                            ? "essais"
                            : "runs"
                          : lang === "fr"
                            ? "essai"
                            : "run"}
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-2xl font-extrabold text-[var(--text-primary)] shrink-0">
                    {entry.metricLabel}
                  </div>
                </div>
              );
            })}
          </section>
        ) : null}

        {/* Full Live Table */}
        <section className="arcade-surface overflow-hidden">
          {entries.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center gap-3">
              <AppIcon
                name="users"
                size={32}
                className="text-[var(--text-muted)]"
              />
              <p className="text-sm text-[var(--text-secondary)]">
                {lang === "fr"
                  ? "En attente du premier joueur... Le classement se met à jour en temps réel."
                  : "Waiting for the first player... Scores appear here in real time."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--bg-tertiary)] border-b border-[var(--border-color)] font-mono text-xs uppercase text-[var(--text-muted)]">
                    <th className="py-3 px-4 w-16">#</th>
                    <th className="py-3 px-4">
                      {lang === "fr" ? "Participant" : "Player"}
                    </th>
                    <th className="py-3 px-4 text-right">
                      {lang === "fr" ? "Score" : "Score"}
                    </th>
                    <th className="py-3 px-4 text-right">
                      {lang === "fr" ? "Essais" : "Runs"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, idx) => (
                    <tr
                      key={entry.uid}
                      className="border-b border-[var(--border-color)] last:border-b-0 hover:bg-[var(--bg-tertiary)]/50"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-[var(--color-cyan)]">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {entry.displayName}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold">
                        {entry.metricLabel}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-xs text-[var(--text-muted)]">
                        {entry.attempts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
