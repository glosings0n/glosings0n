"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 5000;

export function TapBlitzGame({ lang, onFinish }: MiniGameProps) {
  const [taps, setTaps] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);
  const [pulseKey, setPulseKey] = useState(0);

  const tapsRef = useRef(0);
  const finishedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    const interval = setInterval(() => {
      if (startTimeRef.current === null || finishedRef.current) return;
      const elapsed = performance.now() - startTimeRef.current;
      const left = Math.max(0, DURATION_MS - elapsed);
      setRemainingMs(left);

      if (left <= 0) {
        finishedRef.current = true;
        clearInterval(interval);
        const total = tapsRef.current;
        const tps = Number((total / 5).toFixed(1));
        onFinishRef.current({
          score: total,
          meta: { tapsPerSec: tps },
          summaryEn: `${total} taps (${tps} taps/s)`,
          summaryFr: `${total} taps (${tps} taps/s)`,
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleTap = () => {
    if (finishedRef.current) return;
    tapsRef.current += 1;
    setTaps(tapsRef.current);
    setPulseKey((k) => k + 1);
  };

  const progressPct = (remainingMs / DURATION_MS) * 100;
  const elapsedSec = Math.max(0.2, (DURATION_MS - remainingMs) / 1000);
  const currentTps = (taps / elapsedSec).toFixed(1);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="arcade-card px-4 py-2 flex items-center gap-2">
          <AppIcon name="timer" size={16} className="text-[var(--color-cyan)]" />
          <span className="font-mono text-lg font-bold">
            {(remainingMs / 1000).toFixed(2)}s
          </span>
        </div>
        <div className="arcade-card px-4 py-2 font-mono text-sm text-[var(--text-secondary)]">
          {currentTps} taps/s
        </div>
      </div>

      <div className="w-full h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden border border-[var(--border-color)]">
        <div
          className="h-full bg-[var(--color-cyan)] transition-[width] duration-75"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <button
        type="button"
        onPointerDown={(e) => {
          e.preventDefault();
          handleTap();
        }}
        onKeyDown={(e) => {
          if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault();
            handleTap();
          }
        }}
        className="tap-zone touch-none w-full h-[clamp(210px,38dvh,320px)] rounded-2xl border-2 border-[var(--color-cyan)] bg-[var(--bg-tertiary)] flex flex-col items-center justify-center gap-3 active:scale-[0.98] transition-transform"
      >
        <div
          key={pulseKey}
          className="tap-animate font-mono text-6xl sm:text-7xl font-extrabold text-[var(--color-cyan)]"
        >
          {taps}
        </div>
        <span className="text-sm font-semibold tracking-wide uppercase text-[var(--text-secondary)]">
          {lang === "fr" ? "TAPE ICI ULTRA VITE !" : "TAP HERE FAST!"}
        </span>
      </button>
    </div>
  );
}
