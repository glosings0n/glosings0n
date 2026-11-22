"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 15000;

interface TechFact {
  en: string;
  fr: string;
  truth: boolean;
}

const FACTS: TechFact[] = [
  {
    en: "Dart compiles AOT to native ARM64 machine code for mobile.",
    fr: "Dart compile en AOT vers du code machine natif ARM64 sur mobile.",
    truth: true,
  },
  {
    en: "HTTP status 404 means Internal Server Error.",
    fr: "Le code HTTP 404 signifie Erreur Interne du Serveur.",
    truth: false,
  },
  {
    en: "In Flutter, everything is a Widget (UI, layout, padding, theme).",
    fr: "Dans Flutter, tout est un Widget (UI, mise en page, marge, thème).",
    truth: true,
  },
  {
    en: "git reset --hard keeps all your uncommitted edits safely.",
    fr: "git reset --hard conserve intactes toutes vos modifications non commitées.",
    truth: false,
  },
  {
    en: "HTTPS uses TLS encryption to secure data in transit.",
    fr: "HTTPS utilise le chiffrement TLS pour sécuriser les échanges.",
    truth: true,
  },
  {
    en: "In TypeScript, type annotations exist at runtime in Node.js.",
    fr: "En TypeScript, les types restent présents à l'exécution dans Node.js.",
    truth: false,
  },
  {
    en: "Cloud Firestore supports real-time listeners via onSnapshot.",
    fr: "Cloud Firestore propose des écouteurs temps réel via onSnapshot.",
    truth: true,
  },
  {
    en: "INT8 quantization makes an LLM 8x larger than FP32.",
    fr: "La quantification INT8 rend un LLM 8x plus lourd qu'en FP32.",
    truth: false,
  },
  {
    en: "Flutter's Impeller engine precompiles shaders to avoid jank.",
    fr: "Le moteur Impeller de Flutter précompile les shaders pour éviter les saccades.",
    truth: true,
  },
  {
    en: "SQLite requires a separate dedicated cloud server to run.",
    fr: "SQLite exige obligatoirement un serveur cloud dédié pour fonctionner.",
    truth: false,
  },
  {
    en: "DNS translates domain names like glosings0n.dev into IP addresses.",
    fr: "Le DNS traduit les noms de domaine comme glosings0n.dev en adresses IP.",
    truth: true,
  },
  {
    en: "JavaScript === compares values with automatic type coercion.",
    fr: "En JavaScript, === compare avec conversion automatique de type.",
    truth: false,
  },
];

function shuffleFacts(): TechFact[] {
  return [...FACTS].sort(() => Math.random() - 0.5);
}

export function TrueOrGlitchGame({ lang, onFinish }: MiniGameProps) {
  const [deck] = useState<TechFact[]>(() => shuffleFacts());
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const correctRef = useRef(0);
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
          meta: { streak: correctRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts (${correctRef.current} correct)`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts (${correctRef.current} bonnes réponses)`,
        });
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const fact = deck[index % deck.length]!;

  const answer = (choice: boolean) => {
    if (finishedRef.current) return;
    if (choice === fact.truth) {
      correctRef.current += 1;
      streakRef.current += 1;
      scoreRef.current += 100 + Math.min(80, streakRef.current * 15);
    } else {
      streakRef.current = 0;
      scoreRef.current = Math.max(0, scoreRef.current - 40);
    }
    setScore(scoreRef.current);
    setStreak(streakRef.current);
    setIndex((i) => i + 1);
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

      <div className="arcade-card p-6 min-h-[140px] flex items-center justify-center text-center">
        <p className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
          {lang === "fr" ? fact.fr : fact.en}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            answer(true);
          }}
          className="tap-zone h-20 rounded-xl border-2 border-[var(--color-green)] bg-[var(--color-green-bg)] text-[var(--color-green)] font-mono text-lg font-extrabold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <AppIcon name="success" size={20} strokeWidth={2} />
          {lang === "fr" ? "VRAI" : "TRUE"}
        </button>
        <button
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            answer(false);
          }}
          className="tap-zone h-20 rounded-xl border-2 border-[var(--color-red)] bg-[var(--color-red-bg)] text-[var(--color-red)] font-mono text-lg font-extrabold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <AppIcon name="danger" size={20} strokeWidth={2} />
          GLITCH
        </button>
      </div>
    </div>
  );
}
