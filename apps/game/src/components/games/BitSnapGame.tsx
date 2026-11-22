"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 15000;

interface BitPuzzle {
  promptEn: string;
  promptFr: string;
  expression: string;
  options: string[];
  answer: string;
}

function buildBitPuzzle(): BitPuzzle {
  const mode = Math.floor(Math.random() * 3);

  if (mode === 0) {
    // 4-bit binary to decimal
    const num = 1 + Math.floor(Math.random() * 15);
    const bin = num.toString(2).padStart(4, "0");
    const distractors = new Set<number>([num]);
    while (distractors.size < 4) {
      distractors.add(1 + Math.floor(Math.random() * 15));
    }
    const opts = Array.from(distractors)
      .sort(() => Math.random() - 0.5)
      .map(String);
    return {
      promptEn: "Convert binary to decimal",
      promptFr: "Convertis en décimal",
      expression: `0b${bin}`,
      options: opts,
      answer: String(num),
    };
  }

  if (mode === 1) {
    // Powers of 2
    const exp = 3 + Math.floor(Math.random() * 6); // 8 .. 256
    const val = 2 ** exp;
    const distractors = new Set<number>([val, val * 2, val / 2, val + 16]);
    while (distractors.size < 4) {
      distractors.add(2 ** (3 + Math.floor(Math.random() * 7)));
    }
    const opts = Array.from(distractors)
      .slice(0, 4)
      .sort(() => Math.random() - 0.5)
      .map(String);
    return {
      promptEn: "Compute power of 2",
      promptFr: "Calcule la puissance de 2",
      expression: `2^${exp}`,
      options: opts,
      answer: String(val),
    };
  }

  // Boolean / bitwise logic
  const boolQuestions: Array<{ expr: string; ans: string }> = [
    { expr: "!false && true", ans: "true" },
    { expr: "!(true && false)", ans: "true" },
    { expr: "true && !true", ans: "false" },
    { expr: "false || (true && false)", ans: "false" },
    { expr: "5 & 3 (bitwise AND)", ans: "1" },
    { expr: "4 | 1 (bitwise OR)", ans: "5" },
  ];
  const pick = boolQuestions[Math.floor(Math.random() * boolQuestions.length)]!;
  const opts =
    pick.ans === "true" || pick.ans === "false"
      ? ["true", "false", "null", "0"]
      : ["1", "3", "4", "5"];

  return {
    promptEn: "Evaluate expression",
    promptFr: "Évalue l'expression",
    expression: pick.expr,
    options: opts,
    answer: pick.ans,
  };
}

export function BitSnapGame({ lang, onFinish }: MiniGameProps) {
  const [puzzle, setPuzzle] = useState<BitPuzzle>(() => buildBitPuzzle());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const solvedRef = useRef(0);
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
          meta: { streak: solvedRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts (${solvedRef.current} solved)`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts (${solvedRef.current} résolus)`,
        });
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (opt: string) => {
    if (finishedRef.current) return;
    if (opt === puzzle.answer) {
      solvedRef.current += 1;
      streakRef.current += 1;
      scoreRef.current += 100 + Math.min(80, streakRef.current * 20);
    } else {
      streakRef.current = 0;
      scoreRef.current = Math.max(0, scoreRef.current - 30);
    }
    setScore(scoreRef.current);
    setStreak(streakRef.current);
    setPuzzle(buildBitPuzzle());
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
        <div className="flex items-center gap-2">
          <span className="arcade-card px-3 py-2 font-mono text-sm">
            {lang === "fr" ? "Série" : "Streak"}: {streak}
          </span>
          <span className="arcade-card px-4 py-2 font-mono text-lg font-bold text-[var(--color-cyan)]">
            {score}
          </span>
        </div>
      </div>

      <div className="arcade-card p-6 text-center flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
          {lang === "fr" ? puzzle.promptFr : puzzle.promptEn}
        </span>
        <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[var(--color-cyan)]">
          {puzzle.expression}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {puzzle.options.map((opt) => (
          <button
            key={opt}
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              handleAnswer(opt);
            }}
            className="tap-zone h-20 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] hover:border-[var(--color-cyan)] font-mono text-2xl font-bold text-[var(--text-primary)] active:scale-95 transition-transform"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
