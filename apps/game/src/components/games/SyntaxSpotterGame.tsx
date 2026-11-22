"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 15000;

interface PairSpec {
  normal: string;
  odd: string;
}

const TOKEN_PAIRS: PairSpec[] = [
  { normal: "flutter", odd: "fluter" },
  { normal: "===", odd: "==" },
  { normal: "async", odd: "asyn" },
  { normal: "const", odd: "count" },
  { normal: "return", odd: "retun" },
  { normal: "Widget", odd: "Wiget" },
  { normal: "{}", odd: "[]" },
  { normal: "import", odd: "improt" },
  { normal: "await", odd: "awiat" },
  { normal: "=>", odd: "->" },
  { normal: "String", odd: "Sting" },
  { normal: "final", odd: "finel" },
];

interface SpotRound {
  gridSize: 3 | 4;
  oddIndex: number;
  tiles: string[];
}

function makeRound(level: number): SpotRound {
  const gridSize: 3 | 4 = level >= 3 ? 4 : 3;
  const total = gridSize * gridSize;
  const pair = TOKEN_PAIRS[Math.floor(Math.random() * TOKEN_PAIRS.length)]!;
  const oddIndex = Math.floor(Math.random() * total);
  const tiles = Array.from({ length: total }, (_, idx) =>
    idx === oddIndex ? pair.odd : pair.normal,
  );
  return { gridSize, oddIndex, tiles };
}

export function SyntaxSpotterGame({ lang, onFinish }: MiniGameProps) {
  const [level, setLevel] = useState(0);
  const [round, setRound] = useState<SpotRound>(() => makeRound(0));
  const [score, setScore] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const scoreRef = useRef(0);
  const foundRef = useRef(0);
  const finishedRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const start = performance.now();
    const timer = setInterval(() => {
      if (finishedRef.current) return;
      const left = Math.max(0, DURATION_MS - (performance.now() - start));
      setRemainingMs(left);
      if (left <= 0) {
        finishedRef.current = true;
        clearInterval(timer);
        onFinishRef.current({
          score: Math.max(0, scoreRef.current),
          meta: { streak: foundRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts (${foundRef.current} bugs spotted)`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts (${foundRef.current} erreurs repérées)`,
        });
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handlePick = (idx: number) => {
    if (finishedRef.current) return;
    if (idx === round.oddIndex) {
      foundRef.current += 1;
      scoreRef.current += 120;
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setScore(scoreRef.current);
      setRound(makeRound(nextLevel));
    } else {
      scoreRef.current = Math.max(0, scoreRef.current - 35);
      setScore(scoreRef.current);
    }
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

      <div className="text-center text-sm font-semibold text-[var(--text-secondary)]">
        {lang === "fr"
          ? "Trouve l'unique mot / symbole différent :"
          : "Spot the 1 sneaky typo in the code grid:"}
      </div>

      <div
        className={`grid gap-2.5 ${
          round.gridSize === 4 ? "grid-cols-4" : "grid-cols-3"
        }`}
      >
        {round.tiles.map((token, idx) => (
          <button
            key={`${level}-${idx}`}
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              handlePick(idx);
            }}
            className="tap-zone h-16 sm:h-20 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] hover:border-[var(--color-cyan)] font-mono text-sm sm:text-base font-semibold text-[var(--text-primary)] active:scale-95 transition-transform"
          >
            {token}
          </button>
        ))}
      </div>
    </div>
  );
}
