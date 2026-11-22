"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const TARGET_MS = 5000;
const HIDE_AFTER_MS = 1500;
const AUTO_TIMEOUT_MS = 9500;

export function ExactTimerGame({ lang, onFinish }: MiniGameProps) {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [stopped, setStopped] = useState(false);

  const startRef = useRef<number | null>(null);
  const stoppedRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const finalize = (finalMs: number) => {
    if (stoppedRef.current) return;
    stoppedRef.current = true;
    setStopped(true);
    setElapsedMs(finalMs);

    const delta = Math.round(Math.abs(finalMs - TARGET_MS));
    const secStr = (finalMs / 1000).toFixed(3);
    setTimeout(() => {
      onFinishRef.current({
        score: delta,
        meta: { deltaMs: delta },
        summaryEn: `Stopped at ${secStr}s (${delta} ms off 5.000s)`,
        summaryFr: `Arrêté à ${secStr}s (écart de ${delta} ms)`,
      });
    }, 650);
  };

  useEffect(() => {
    startRef.current = performance.now();
    const interval = setInterval(() => {
      if (startRef.current === null || stoppedRef.current) return;
      const nowElapsed = performance.now() - startRef.current;
      setElapsedMs(nowElapsed);
      if (nowElapsed >= AUTO_TIMEOUT_MS) {
        clearInterval(interval);
        finalize(AUTO_TIMEOUT_MS);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleStop = () => {
    if (startRef.current === null || stoppedRef.current) return;
    finalize(performance.now() - startRef.current);
  };

  const hidden = !stopped && elapsedMs >= HIDE_AFTER_MS;

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="arcade-card w-full p-6 text-center flex flex-col items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)]">
          {lang === "fr" ? "Cible exacte : 5.000s" : "Exact Target: 5.000s"}
        </span>
        <div className="font-mono text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)]">
          {hidden ? "?.??? s" : `${(elapsedMs / 1000).toFixed(3)} s`}
        </div>
        <span className="text-xs text-[var(--text-muted)]">
          {hidden
            ? lang === "fr"
              ? "Chrono masqué. Compte dans ta tête !"
              : "Clock hidden. Count silently in your head!"
            : stopped
              ? lang === "fr"
                ? `Écart : ${Math.round(Math.abs(elapsedMs - TARGET_MS))} ms`
                : `Offset: ${Math.round(Math.abs(elapsedMs - TARGET_MS))} ms`
              : lang === "fr"
                ? "Le chrono va bientôt disparaître..."
                : "Digits hide at 1.500s..."}
        </span>
      </div>

      <button
        type="button"
        disabled={stopped}
        onPointerDown={(e) => {
          e.preventDefault();
          handleStop();
        }}
        className="tap-zone touch-none w-full h-[clamp(140px,28dvh,200px)] rounded-2xl border-2 border-[var(--color-cyan)] bg-[var(--color-cyan-tint)] flex flex-col items-center justify-center gap-2 text-[var(--color-cyan)] active:scale-[0.98] transition-transform"
      >
        <AppIcon name="stop" size={36} strokeWidth={2} />
        <span className="font-mono text-2xl font-extrabold">
          {lang === "fr" ? "STOP À 5.000s" : "STOP AT 5.000s"}
        </span>
      </button>
    </div>
  );
}
