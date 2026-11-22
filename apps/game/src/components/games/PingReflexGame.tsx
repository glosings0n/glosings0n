"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

type Phase = "waiting" | "ready" | "early" | "result";

const TOTAL_ROUNDS = 3;

export function PingReflexGame({ lang, onFinish }: MiniGameProps) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("waiting");
  const [lastMs, setLastMs] = useState<number | null>(null);
  const [samples, setSamples] = useState<number[]>([]);

  const readyAtRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const scheduleRound = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("waiting");
    const delay = 1200 + Math.random() * 2100;
    timerRef.current = setTimeout(() => {
      readyAtRef.current = performance.now();
      setPhase("ready");
    }, delay);
  };

  useEffect(() => {
    const delay = 1200 + Math.random() * 2100;
    timerRef.current = setTimeout(() => {
      readyAtRef.current = performance.now();
      setPhase("ready");
    }, delay);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const recordRound = (ms: number, nextRound: boolean) => {
    const updated = [...samples, ms];
    setSamples(updated);
    setLastMs(ms);

    if (updated.length >= TOTAL_ROUNDS) {
      const avg = Math.round(updated.reduce((a, b) => a + b, 0) / updated.length);
      onFinishRef.current({
        score: avg,
        meta: { deltaMs: avg },
        summaryEn: `Avg ${avg} ms (${updated.map((s) => `${s}ms`).join(" / ")})`,
        summaryFr: `Moyenne ${avg} ms (${updated.map((s) => `${s}ms`).join(" / ")})`,
      });
      return;
    }

    if (nextRound) {
      setPhase("result");
      setTimeout(() => {
        setRoundIdx((r) => r + 1);
        scheduleRound();
      }, 650);
    }
  };

  const handleTap = () => {
    if (phase === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("early");
      setTimeout(() => {
        recordRound(500, true);
      }, 500);
      return;
    }

    if (phase === "ready") {
      const delta = Math.max(50, Math.round(performance.now() - readyAtRef.current));
      recordRound(delta, true);
    }
  };

  const panelClass =
    phase === "ready"
      ? "border-[var(--color-green)] bg-[var(--color-green-bg)] text-[var(--color-green)]"
      : phase === "early"
        ? "border-[var(--color-red)] bg-[var(--color-red-bg)] text-[var(--color-red)]"
        : "border-[var(--color-amber)] bg-[var(--color-amber-bg)] text-[var(--color-amber)]";

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <span className="arcade-card px-4 py-2 font-mono text-sm font-semibold">
          Round {Math.min(roundIdx + 1, TOTAL_ROUNDS)} / {TOTAL_ROUNDS}
        </span>
        <div className="flex gap-2">
          {samples.map((s, i) => (
            <span
              key={i}
              className="arcade-card px-2.5 py-1.5 font-mono text-xs text-[var(--color-cyan)]"
            >
              {s}ms
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onPointerDown={(e) => {
          e.preventDefault();
          handleTap();
        }}
        className={`tap-zone touch-none w-full h-[clamp(220px,42dvh,300px)] rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-colors ${panelClass}`}
      >
        <AppIcon name="target" size={38} strokeWidth={1.8} />
        <div className="font-mono text-2xl sm:text-3xl font-extrabold">
          {phase === "waiting" && "WAITING..."}
          {phase === "ready" && "200 OK | TAP NOW!"}
          {phase === "early" && "400 BAD REQUEST (+500ms)"}
          {phase === "result" && `${lastMs} ms`}
        </div>
        <span className="text-sm text-[var(--text-secondary)]">
          {phase === "waiting"
            ? lang === "fr"
              ? "Ne tape pas avant le vert..."
              : "Hold on until it turns green..."
            : phase === "ready"
              ? lang === "fr"
                ? "MAINTENANT !"
                : "TAP NOW!"
              : ""}
        </span>
      </button>
    </div>
  );
}
