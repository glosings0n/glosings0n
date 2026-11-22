"use client";

import { AppIcon } from "@repo/ui";
import { useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

const DURATION_MS = 10000;
const CANVAS_W = 360;
const CANVAS_H = 420;

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  label: string;
}

interface Gem {
  x: number;
  y: number;
  r: number;
  collected: boolean;
}

function drawDashMascot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  vy: number,
  wingPhase: number,
  stunTimer: number,
) {
  ctx.save();
  ctx.translate(x, y);

  const tilt = Math.max(-0.42, Math.min(0.45, vy / 620));
  ctx.rotate(tilt);

  // Tail feathers (Flutter dark blue)
  ctx.fillStyle = "#0175C2";
  ctx.beginPath();
  ctx.ellipse(-20, 4, 11, 6, -0.35, 0, Math.PI * 2);
  ctx.fill();

  // Head crest (3-feather tuft)
  const tuftAngle = Math.max(-0.25, Math.min(0.25, -vy / 900));
  ctx.save();
  ctx.translate(-2, -21);
  ctx.rotate(tuftAngle);
  ctx.fillStyle = "#0175C2";
  ctx.beginPath();
  ctx.ellipse(-4, -5, 4, 8, -0.35, 0, Math.PI * 2);
  ctx.ellipse(2, -7, 4, 9, 0.05, 0, Math.PI * 2);
  ctx.ellipse(7, -4, 3.5, 7, 0.45, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Feet
  ctx.fillStyle = "#FFB300";
  ctx.beginPath();
  ctx.ellipse(-6, 22, 5, 3, 0, 0, Math.PI * 2);
  ctx.ellipse(6, 22, 5, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Round plump Flutter Dash body
  ctx.fillStyle = stunTimer > 0 ? "#ef4444" : "#13B9FD";
  ctx.beginPath();
  ctx.ellipse(0, 2, 22, 21, 0, 0, Math.PI * 2);
  ctx.fill();

  // Soft sky-blue belly patch
  ctx.fillStyle = "#B3E5FC";
  ctx.beginPath();
  ctx.ellipse(3, 7, 13, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Animated flapping wing
  const flap = Math.sin(wingPhase) * 0.55;
  ctx.save();
  ctx.translate(-6, 2);
  ctx.rotate(flap);
  ctx.fillStyle = "#02569B";
  ctx.beginPath();
  ctx.ellipse(-4, 2, 12, 7, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Expressive eyes
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(8, -5, 7.5, 0, Math.PI * 2);
  ctx.fill();

  if (stunTimer > 0) {
    // Surprised X eye on collision
    ctx.strokeStyle = "#070a13";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(5, -8);
    ctx.lineTo(11, -2);
    ctx.moveTo(11, -8);
    ctx.lineTo(5, -2);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#070a13";
    ctx.beginPath();
    ctx.arc(10, -5, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(11.3, -6.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Beak
  ctx.fillStyle = "#FFB300";
  ctx.beginPath();
  ctx.moveTo(16, -2);
  ctx.lineTo(27, 2);
  ctx.lineTo(16, 6);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

export function DashClimbGame({ lang, onFinish }: MiniGameProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [altitude, setAltitude] = useState(0);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);

  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const dashRef = useRef({
    x: CANVAS_W / 2,
    y: CANVAS_H * 0.65,
    vx: 0,
    vy: -120,
    wingPhase: 0,
    wingBoost: 0,
    stunTimer: 0,
    altitude: 0,
    gemsPicked: 0,
    hits: 0,
  });

  const flap = (clientX?: number) => {
    const canvas = canvasRef.current;
    const d = dashRef.current;
    d.vy = -310;
    d.wingBoost = 0.85;

    if (canvas && typeof clientX === "number") {
      const rect = canvas.getBoundingClientRect();
      const relX = ((clientX - rect.left) / rect.width) * CANVAS_W;
      const deltaX = relX - d.x;
      d.vx = Math.max(-210, Math.min(210, deltaX * 1.9));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const obstacles: Obstacle[] = [];
    const gems: Gem[] = [];
    const trapLabels = ["RenderFlex", "null!", "OOM", "404", "Crash"];
    let spawnObsTimer = 0.2;
    let spawnGemTimer = 0.1;

    const startTime = performance.now();
    let prevTime = startTime;
    let rafId = 0;
    let finished = false;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        flap();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        dashRef.current.vx = -220;
        dashRef.current.vy = Math.min(dashRef.current.vy, -240);
        dashRef.current.wingBoost = 0.7;
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        dashRef.current.vx = 220;
        dashRef.current.vy = Math.min(dashRef.current.vy, -240);
        dashRef.current.wingBoost = 0.7;
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;

      const elapsed = now - startTime;
      const left = Math.max(0, DURATION_MS - elapsed);
      setRemainingMs(left);

      const d = dashRef.current;

      // Physics
      d.vy += 680 * dt;
      d.x += d.vx * dt;
      d.vx *= Math.pow(0.08, dt);
      d.y += d.vy * dt;

      if (d.x < 26) d.x = 26;
      if (d.x > CANVAS_W - 26) d.x = CANVAS_W - 26;
      if (d.y < 36) {
        d.y = 36;
        d.vy = Math.max(0, d.vy);
      }
      if (d.y > CANVAS_H - 36) {
        d.y = CANVAS_H - 36;
        d.vy = -210;
      }

      const climbRate = Math.max(12, ((CANVAS_H - d.y) / CANVAS_H) * 58);
      if (d.stunTimer <= 0) {
        d.altitude += climbRate * dt;
      }
      d.stunTimer = Math.max(0, d.stunTimer - dt);

      d.wingPhase += (10 + d.wingBoost * 24) * dt;
      d.wingBoost = Math.max(0, d.wingBoost - dt * 2.2);

      // Spawn obstacles
      spawnObsTimer -= dt;
      if (spawnObsTimer <= 0) {
        spawnObsTimer = 0.78;
        const w = 78 + Math.random() * 34;
        obstacles.push({
          x: Math.random() * (CANVAS_W - w - 16) + 8,
          y: -28,
          w,
          h: 22,
          vx: (Math.random() - 0.5) * 75,
          label: trapLabels[Math.floor(Math.random() * trapLabels.length)]!,
        });
      }

      // Spawn collectible Flutter gems
      spawnGemTimer -= dt;
      if (spawnGemTimer <= 0) {
        spawnGemTimer = 0.95;
        gems.push({
          x: 34 + Math.random() * (CANVAS_W - 68),
          y: -20,
          r: 12,
          collected: false,
        });
      }

      const scrollSpeed = 195 + Math.min(130, d.altitude * 0.25);

      for (const obs of obstacles) {
        obs.y += scrollSpeed * dt;
        obs.x += obs.vx * dt;
        if (obs.x < 6 || obs.x + obs.w > CANVAS_W - 6) obs.vx *= -1;

        if (
          d.stunTimer <= 0 &&
          d.x + 16 > obs.x &&
          d.x - 16 < obs.x + obs.w &&
          d.y + 16 > obs.y &&
          d.y - 16 < obs.y + obs.h
        ) {
          d.stunTimer = 0.35;
          d.vy = 190;
          d.altitude = Math.max(0, d.altitude - 15);
          d.hits += 1;
        }
      }

      for (const gem of gems) {
        gem.y += scrollSpeed * 0.92 * dt;
        if (!gem.collected) {
          const dist = Math.hypot(d.x - gem.x, d.y - gem.y);
          if (dist < 28) {
            gem.collected = true;
            d.altitude += 25;
            d.gemsPicked += 1;
          }
        }
      }

      setAltitude(Math.round(d.altitude));

      // Draw crisp solid background (zero gradients per AGENTS.md)
      ctx.fillStyle = "#070a13";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Subtle scrolling altitude grid lines
      ctx.strokeStyle = "#171d32";
      ctx.lineWidth = 1;
      const gridOffset = (d.altitude * 4) % 52;
      for (let gy = gridOffset; gy < CANVAS_H; gy += 52) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(CANVAS_W, gy);
        ctx.stroke();
      }

      // Draw Flutter diamonds (gems)
      for (const gem of gems) {
        if (gem.collected || gem.y > CANVAS_H + 20) continue;
        ctx.save();
        ctx.translate(gem.x, gem.y);
        ctx.fillStyle = "#00B0FF";
        ctx.beginPath();
        ctx.moveTo(0, -12);
        ctx.lineTo(10, 0);
        ctx.lineTo(0, 12);
        ctx.lineTo(-10, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#B3E5FC";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // Draw traps
      for (const obs of obstacles) {
        if (obs.y > CANVAS_H + 30) continue;
        ctx.fillStyle = "#7f1d1d";
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(obs.x, obs.y, obs.w, obs.h, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#fecaca";
        ctx.font = "bold 11px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(obs.label, obs.x + obs.w / 2, obs.y + obs.h / 2 + 0.5);
      }

      drawDashMascot(ctx, d.x, d.y, d.vy, d.wingPhase, d.stunTimer);

      if (left <= 0 && !finished) {
        finished = true;
        const finalAlt = Math.round(d.altitude);
        onFinishRef.current({
          score: finalAlt,
          meta: { streak: d.gemsPicked },
          summaryEn: `${finalAlt} m climbed (${d.gemsPicked} gems, ${d.hits} hits)`,
          summaryFr: `${finalAlt} m grimpés (${d.gemsPicked} gemmes, ${d.hits} chocs)`,
        });
        return;
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="w-full flex items-center justify-between gap-3">
        <div className="arcade-card px-4 py-2 flex items-center gap-2">
          <AppIcon name="timer" size={16} className="text-[var(--color-cyan)]" />
          <span className="font-mono text-lg font-bold">
            {(remainingMs / 1000).toFixed(1)}s
          </span>
        </div>
        <div className="arcade-card px-4 py-2 font-mono text-lg font-bold text-[var(--color-cyan)]">
          {altitude} m
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        onPointerDown={(e) => {
          e.preventDefault();
          flap(e.clientX);
        }}
        className="tap-zone touch-none h-[clamp(260px,50dvh,420px)] w-auto max-w-full aspect-[360/420] rounded-2xl border border-[var(--border-color)] cursor-pointer bg-[#070a13]"
      />

      <p className="text-xs text-[var(--text-muted)] text-center">
        {lang === "fr"
          ? "Tape à gauche/droite pour diriger Dash, esquive les pièges rouges et prends les gemmes bleues."
          : "Tap left/right to steer Dash, dodge red traps, and collect blue Flutter gems."}
      </p>
    </div>
  );
}
