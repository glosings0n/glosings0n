"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 12000;

type CellKind = "idle" | "bug" | "prod";

interface GridCell {
  kind: CellKind;
  nonce: number;
}

export function BugSquashGame({ lang, onFinish }: MiniGameProps) {
  const [cells, setCells] = useState<GridCell[]>(() =>
    Array.from({ length: 9 }, () => ({ kind: "idle", nonce: 0 })),
  );
  const [score, setScore] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const scoreRef = useRef(0);
  const squashedRef = useRef(0);
  const finishedRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const start = performance.now();

    const clock = setInterval(() => {
      if (finishedRef.current) return;
      const left = Math.max(0, DURATION_MS - (performance.now() - start));
      setRemainingMs(left);
      if (left <= 0) {
        finishedRef.current = true;
        clearInterval(clock);
        onFinishRef.current({
          score: Math.max(0, scoreRef.current),
          meta: { streak: squashedRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts (${squashedRef.current} bugs squashed)`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts (${squashedRef.current} bugs écrasés)`,
        });
      }
    }, 50);

    const spawner = setInterval(() => {
      if (finishedRef.current) return;
      setCells(() => {
        const next: GridCell[] = Array.from({ length: 9 }, () => ({
          kind: "idle",
          nonce: Math.random(),
        }));
        const bugCount = Math.random() < 0.45 ? 2 : 1;
        const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(
          () => Math.random() - 0.5,
        );
        for (let i = 0; i < bugCount; i++) {
          next[indices[i]!] = { kind: "bug", nonce: Math.random() };
        }
        if (Math.random() < 0.7) {
          next[indices[bugCount]!] = { kind: "prod", nonce: Math.random() };
        }
        return next;
      });
    }, 620);

    return () => {
      clearInterval(clock);
      clearInterval(spawner);
    };
  }, []);

  const handleCellTap = (idx: number) => {
    if (finishedRef.current) return;
    setCells((prev) => {
      const target = prev[idx];
      if (!target || target.kind === "idle") return prev;

      if (target.kind === "bug") {
        scoreRef.current += 100;
        squashedRef.current += 1;
      } else {
        scoreRef.current = Math.max(0, scoreRef.current - 120);
      }
      setScore(scoreRef.current);

      const copy = [...prev];
      copy[idx] = { kind: "idle", nonce: Math.random() };
      return copy;
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <div className="arcade-card px-4 py-2 flex items-center gap-2">
          <AppIcon name="timer" size={16} className="text-[var(--color-cyan)]" />
          <span className="font-mono text-lg font-bold">
            {(remainingMs / 1000).toFixed(1)}s
          </span>
        </div>
        <div className="arcade-card px-4 py-2 font-mono text-lg font-bold text-[var(--color-cyan)]">
          {score} pts
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {cells.map((cell, idx) => (
          <button
            key={idx}
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              handleCellTap(idx);
            }}
            className={`tap-zone h-20 sm:h-26 rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-colors active:scale-95 ${
              cell.kind === "bug"
                ? "border-[var(--color-red)] bg-[var(--color-red-bg)] text-[var(--color-red)]"
                : cell.kind === "prod"
                  ? "border-[var(--color-green)] bg-[var(--color-green-bg)] text-[var(--color-green)]"
                  : "border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
            }`}
          >
            {cell.kind === "bug" ? (
              <>
                <AppIcon name="bug" size={24} strokeWidth={2} />
                <span className="font-mono text-xs font-bold">BUG +100</span>
              </>
            ) : cell.kind === "prod" ? (
              <>
                <AppIcon name="shield" size={24} strokeWidth={2} />
                <span className="font-mono text-xs font-bold">PROD OK</span>
              </>
            ) : (
              <span className="font-mono text-xs opacity-40">NODE {idx + 1}</span>
            )}
          </button>
        ))}
      </div>

      <p className="text-xs text-[var(--text-muted)] text-center">
        {lang === "fr"
          ? "Écrase les BUG rouges (+100). Ne touche jamais PROD OK (-120)."
          : "Squash red BUG nodes (+100). Never tap green PROD OK (-120)."}
      </p>
    </div>
  );
}
