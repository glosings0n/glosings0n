"use client";

import { AppIcon, type AppIconName } from "@repo/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 12000;

type Dir = "up" | "down" | "left" | "right";

const OPPOSITE: Record<Dir, Dir> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const DIR_ICON: Record<Dir, AppIconName> = {
  up: "arrowUp",
  down: "arrowDown",
  left: "arrowLeft",
  right: "arrowRight",
};

interface SwipePrompt {
  dir: Dir;
  invert: boolean;
}

function nextPrompt(): SwipePrompt {
  const dirs: Dir[] = ["up", "down", "left", "right"];
  return {
    dir: dirs[Math.floor(Math.random() * dirs.length)]!,
    invert: Math.random() < 0.45,
  };
}

export function SwipeStormGame({ lang, onFinish }: MiniGameProps) {
  const [prompt, setPrompt] = useState<SwipePrompt>(() => nextPrompt());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const finishedRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const promptRef = useRef(prompt);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    promptRef.current = prompt;
  }, [prompt]);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const submitMove = useCallback((dir: Dir) => {
    if (finishedRef.current) return;
    const current = promptRef.current;
    const expected = current.invert ? OPPOSITE[current.dir] : current.dir;

    if (dir === expected) {
      streakRef.current += 1;
      scoreRef.current += 100 + Math.min(80, streakRef.current * 15);
    } else {
      streakRef.current = 0;
      scoreRef.current = Math.max(0, scoreRef.current - 35);
    }

    setScore(scoreRef.current);
    setStreak(streakRef.current);
    setPrompt(nextPrompt());
  }, []);

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
          meta: { streak: streakRef.current },
          summaryEn: `${Math.max(0, scoreRef.current)} pts`,
          summaryFr: `${Math.max(0, scoreRef.current)} pts`,
        });
      }
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        submitMove("up");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        submitMove("down");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        submitMove("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        submitMove("right");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [submitMove]);

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

      <div
        onPointerDown={(e) => {
          pointerStartRef.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={(e) => {
          const start = pointerStartRef.current;
          pointerStartRef.current = null;
          if (!start) return;
          const dx = e.clientX - start.x;
          const dy = e.clientY - start.y;
          if (Math.hypot(dx, dy) < 24) return;
          if (Math.abs(dx) > Math.abs(dy)) {
            submitMove(dx > 0 ? "right" : "left");
          } else {
            submitMove(dy > 0 ? "down" : "up");
          }
        }}
        className={`tap-zone touch-none rounded-2xl border-2 p-5 sm:p-7 flex flex-col items-center justify-center gap-2.5 ${
          prompt.invert
            ? "border-[var(--color-red)] bg-[var(--color-red-bg)] text-[var(--color-red)]"
            : "border-[var(--color-cyan)] bg-[var(--color-cyan-tint)] text-[var(--color-cyan)]"
        }`}
      >
        <AppIcon name={DIR_ICON[prompt.dir]} size={64} strokeWidth={2.2} />
        <span className="font-mono text-sm font-bold uppercase tracking-wider">
          {prompt.invert
            ? lang === "fr"
              ? "SENS OPPOSÉ !"
              : "SWIPE OPPOSITE!"
            : lang === "fr"
              ? "MÊME SENS !"
              : "SWIPE WITH ARROW!"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto w-full">
        <div />
        <button
          type="button"
          aria-label="Up"
          onPointerDown={(e) => {
            e.preventDefault();
            submitMove("up");
          }}
          className="arcade-btn h-12"
        >
          <AppIcon name="arrowUp" size={20} />
        </button>
        <div />
        <button
          type="button"
          aria-label="Left"
          onPointerDown={(e) => {
            e.preventDefault();
            submitMove("left");
          }}
          className="arcade-btn h-12"
        >
          <AppIcon name="arrowLeft" size={20} />
        </button>
        <button
          type="button"
          aria-label="Down"
          onPointerDown={(e) => {
            e.preventDefault();
            submitMove("down");
          }}
          className="arcade-btn h-12"
        >
          <AppIcon name="arrowDown" size={20} />
        </button>
        <button
          type="button"
          aria-label="Right"
          onPointerDown={(e) => {
            e.preventDefault();
            submitMove("right");
          }}
          className="arcade-btn h-12"
        >
          <AppIcon name="arrowRight" size={20} />
        </button>
      </div>
    </div>
  );
}
