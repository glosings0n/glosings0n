"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 15000;

type ColorKey = "blue" | "green" | "amber" | "red";
type RuleType = "word" | "text" | "bg";

interface ColorSpec {
  key: ColorKey;
  labelEn: string;
  labelFr: string;
  bgHex: string;
  borderHex: string;
  inkHex: string;
}

const COLORS: ColorSpec[] = [
  {
    key: "blue",
    labelEn: "BLUE",
    labelFr: "BLEU",
    bgHex: "#172554",
    borderHex: "#38bdf8",
    inkHex: "#38bdf8",
  },
  {
    key: "green",
    labelEn: "GREEN",
    labelFr: "VERT",
    bgHex: "#064e3b",
    borderHex: "#4ade80",
    inkHex: "#4ade80",
  },
  {
    key: "amber",
    labelEn: "AMBER",
    labelFr: "JAUNE",
    bgHex: "#78350f",
    borderHex: "#fbbf24",
    inkHex: "#fbbf24",
  },
  {
    key: "red",
    labelEn: "RED",
    labelFr: "ROUGE",
    bgHex: "#7f1d1d",
    borderHex: "#f87171",
    inkHex: "#f87171",
  },
];

interface StroopCard {
  word: ColorSpec;
  textColor: ColorSpec;
  bgColor: ColorSpec;
}

interface StroopRound {
  rule: RuleType;
  target: ColorSpec;
  cards: StroopCard[];
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function buildRound(): StroopRound {
  const rules: RuleType[] = ["word", "text", "bg"];
  const rule = rules[Math.floor(Math.random() * rules.length)]!;
  const words = shuffle(COLORS);
  const texts = shuffle(COLORS);
  const bgs = shuffle(COLORS);

  // Ensure textColor differs from bgColor so text is always readable and deceptive
  for (let i = 0; i < 4; i++) {
    if (texts[i]!.key === bgs[i]!.key) {
      const next = (i + 1) % 4;
      [texts[i], texts[next]] = [texts[next]!, texts[i]!];
    }
  }

  const cards: StroopCard[] = COLORS.map((_, idx) => ({
    word: words[idx]!,
    textColor: texts[idx]!,
    bgColor: bgs[idx]!,
  }));

  const target = COLORS[Math.floor(Math.random() * COLORS.length)]!;
  return { rule, target, cards };
}

export function StroopTrapGame({ lang, onFinish }: MiniGameProps) {
  const [round, setRound] = useState<StroopRound>(() => buildRound());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);
  const [feedback, setFeedback] = useState<"ok" | "bad" | null>(null);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const maxStreakRef = useRef(0);
  const correctRef = useRef(0);
  const totalRef = useRef(0);
  const finishedRef = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const start = performance.now();
    const interval = setInterval(() => {
      if (finishedRef.current) return;
      const left = Math.max(0, DURATION_MS - (performance.now() - start));
      setRemainingMs(left);
      if (left <= 0) {
        finishedRef.current = true;
        clearInterval(interval);
        const accuracy =
          totalRef.current > 0
            ? Math.round((correctRef.current / totalRef.current) * 100)
            : 0;
        onFinishRef.current({
          score: Math.max(0, scoreRef.current),
          meta: { accuracy, streak: maxStreakRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts (${accuracy}% accuracy, streak ${maxStreakRef.current})`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts (${accuracy}% précision, série ${maxStreakRef.current})`,
        });
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (card: StroopCard) => {
    if (finishedRef.current) return;
    totalRef.current += 1;

    const matched =
      (round.rule === "word" && card.word.key === round.target.key) ||
      (round.rule === "text" && card.textColor.key === round.target.key) ||
      (round.rule === "bg" && card.bgColor.key === round.target.key);

    if (matched) {
      correctRef.current += 1;
      streakRef.current += 1;
      maxStreakRef.current = Math.max(maxStreakRef.current, streakRef.current);
      const pts = 100 + Math.min(100, streakRef.current * 15);
      scoreRef.current += pts;
      setFeedback("ok");
    } else {
      streakRef.current = 0;
      scoreRef.current = Math.max(0, scoreRef.current - 40);
      setFeedback("bad");
    }

    setScore(scoreRef.current);
    setStreak(streakRef.current);
    setRound(buildRound());
    setTimeout(() => setFeedback(null), 160);
  };

  const targetName = lang === "fr" ? round.target.labelFr : round.target.labelEn;

  const promptText =
    lang === "fr"
      ? round.rule === "word"
        ? `Carte dont le MOT écrit est ${targetName}`
        : round.rule === "text"
          ? `Carte dont la COULEUR DU TEXTE est ${targetName}`
          : `Carte dont la COULEUR DE FOND est ${targetName}`
      : round.rule === "word"
        ? `Card whose WRITTEN WORD says ${targetName}`
        : round.rule === "text"
          ? `Card whose TEXT COLOR is ${targetName}`
          : `Card whose BACKGROUND is ${targetName}`;

  const ruleTag =
    lang === "fr"
      ? round.rule === "word"
        ? "MOT"
        : round.rule === "text"
          ? "COULEUR TEXTE"
          : "COULEUR FOND"
      : round.rule === "word"
        ? "WORD"
        : round.rule === "text"
          ? "TEXT INK"
          : "BACKGROUND";

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between gap-3">
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

      <div
        className={`rounded-xl p-4 border text-center transition-colors ${
          feedback === "ok"
            ? "border-[var(--color-green)] bg-[var(--color-green-bg)]"
            : feedback === "bad"
              ? "border-[var(--color-red)] bg-[var(--color-red-bg)]"
              : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
        }`}
      >
        <div className="inline-block font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--color-cyan)] mb-2">
          {ruleTag}
        </div>
        <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
          {promptText}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {round.cards.map((card, idx) => (
          <button
            key={idx}
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              handleSelect(card);
            }}
            style={{
              backgroundColor: card.bgColor.bgHex,
              borderColor: card.bgColor.borderHex,
            }}
            className="tap-zone h-24 sm:h-30 rounded-xl border-2 flex items-center justify-center active:scale-95 transition-transform"
          >
            <span
              className="font-mono text-2xl sm:text-3xl font-extrabold tracking-wider px-3 py-1 rounded-lg bg-[#070a13]/75"
              style={{ color: card.textColor.inkHex }}
            >
              {lang === "fr" ? card.word.labelFr : card.word.labelEn}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
