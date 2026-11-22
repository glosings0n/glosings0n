"use client";

import { speaker1Img, speaker2Img, speaker3Img } from "@repo/assets";
import { AppIcon } from "@repo/ui";
import { useCallback, useEffect, useRef, useState } from "react";

const SPEAKER_CARDS = [
  { id: 0, src: speaker1Img.src, alt: "Georges Byona speaking on stage" },
  { id: 1, src: speaker2Img.src, alt: "Georges Byona technical conference talk" },
  { id: 2, src: speaker3Img.src, alt: "Georges Byona community session" },
] as const;

const SWIPE_THRESHOLD = 52;
const AUTO_ADVANCE_MS = 2500;

interface DragOffset {
  x: number;
  y: number;
  active: boolean;
}

export function SpeakerCardStack() {
  const [order, setOrder] = useState<number[]>([0, 1, 2]);
  const [drag, setDrag] = useState<DragOffset>({ x: 0, y: 0, active: false });
  const [throwing, setThrowing] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [hovered, setHovered] = useState(false);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const lockRef = useRef(false);

  const cycleTopCard = useCallback((vx: number, vy: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    const mag = Math.hypot(vx, vy) || 1;
    const tx = (vx / mag) * 280;
    const ty = (vy / mag) * 280;
    setThrowing({ x: tx, y: ty });
    setDrag({ x: 0, y: 0, active: false });

    window.setTimeout(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev;
        return first !== undefined ? [...rest, first] : prev;
      });
      setThrowing(null);
      lockRef.current = false;
    }, 185);
  }, []);

  useEffect(() => {
    if (hovered || drag.active || throwing !== null) return;
    const timer = window.setTimeout(() => {
      cycleTopCard(220, -30);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [order, hovered, drag.active, throwing, cycleTopCard]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (lockRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0, active: true });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startRef.current || lockRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    setDrag({ x: dx, y: dy, active: true });
  };

  const finishPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    startRef.current = null;

    if (lockRef.current) {
      setDrag({ x: 0, y: 0, active: false });
      return;
    }

    const distance = Math.hypot(dx, dy);
    if (distance >= SWIPE_THRESHOLD) {
      cycleTopCard(dx, dy);
    } else if (distance < 8) {
      cycleTopCard(220, -45);
    } else {
      setDrag({ x: 0, y: 0, active: false });
    }
  };

  const activeCardId = order[0] ?? 0;

  return (
    <div
      className="speaker-stack-root"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="speaker-stack-deck"
        role="region"
        aria-label="Speaker photo cards"
      >
        {[...order].reverse().map((cardId) => {
          const stackPos = order.indexOf(cardId);
          const card = SPEAKER_CARDS[cardId]!;
          const isTop = stackPos === 0;
          const isSecond = stackPos === 1;

          let transform = "translate3d(-10px, 6px, 0) rotate(-3.5deg) scale(0.94)";
          let zIndex = 10;
          let opacity = 0.85;

          if (isSecond) {
            transform = "translate3d(10px, 5px, 0) rotate(3.5deg) scale(0.97)";
            zIndex = 20;
            opacity = 0.94;
          } else if (isTop) {
            zIndex = 30;
            opacity = 1;
            if (throwing) {
              const rot = Math.max(-18, Math.min(18, throwing.x * 0.05));
              transform = `translate3d(${throwing.x}px, ${throwing.y}px, 0) rotate(${rot}deg) scale(0.96)`;
              opacity = 0;
            } else if (drag.active) {
              const rot = Math.max(-14, Math.min(14, drag.x * 0.045));
              transform = `translate3d(${drag.x}px, ${drag.y}px, 0) rotate(${rot}deg)`;
            } else {
              transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
            }
          }

          return (
            <div
              key={card.id}
              onPointerDown={isTop ? handlePointerDown : undefined}
              onPointerMove={isTop ? handlePointerMove : undefined}
              onPointerUp={isTop ? finishPointer : undefined}
              onPointerCancel={isTop ? finishPointer : undefined}
              className={`speaker-stack-card${isTop ? " is-top" : ""}${
                isTop && drag.active ? " is-dragging" : ""
              }`}
              style={{
                zIndex,
                opacity,
                transform,
                transition:
                  isTop && drag.active
                    ? "none"
                    : "transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s ease, border-color 0.2s ease",
              }}
            >
              <img
                src={card.src}
                alt={card.alt}
                draggable={false}
                className="speaker-stack-img"
              />
            </div>
          );
        })}
      </div>

      <div className="speaker-stack-controls">
        <div className="speaker-stack-dots" aria-hidden="true">
          {SPEAKER_CARDS.map((card) => (
            <span
              key={card.id}
              className={`speaker-stack-dot${
                activeCardId === card.id ? " active" : ""
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => cycleTopCard(220, -35)}
          className="speaker-stack-next"
          aria-label="Next speaker photo"
        >
          <AppIcon name="arrowRight" size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
