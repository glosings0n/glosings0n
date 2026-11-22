export type MascotId =
  | "dash"
  | "droid"
  | "sparky"
  | "gopher"
  | "octo"
  | "crab"
  | "penguin"
  | "dino"
  | "whale"
  | "spark";

interface TechMascotAvatarProps {
  mascotId?: string | null;
  size?: number;
  className?: string;
}

const MASCOT_PALETTE: Record<
  MascotId,
  { accent: string; bg: string }
> = {
  dash: { accent: "#00B0FF", bg: "#082f49" },
  droid: { accent: "#34d399", bg: "#064e3b" },
  sparky: { accent: "#fbbf24", bg: "#451a03" },
  gopher: { accent: "#38bdf8", bg: "#0c4a6e" },
  octo: { accent: "#a78bfa", bg: "#2e1065" },
  crab: { accent: "#fb7185", bg: "#4c0519" },
  penguin: { accent: "#facc15", bg: "#1e293b" },
  dino: { accent: "#60a5fa", bg: "#172554" },
  whale: { accent: "#22d3ee", bg: "#083344" },
  spark: { accent: "#2dd4bf", bg: "#042f2e" },
};

function resolveMascotId(raw?: string | null): MascotId {
  if (raw && raw in MASCOT_PALETTE) return raw as MascotId;
  return "dash";
}

export function TechMascotAvatar({
  mascotId,
  size = 36,
  className = "",
}: TechMascotAvatarProps) {
  const id = resolveMascotId(mascotId);
  const { accent, bg } = MASCOT_PALETTE[id];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl shrink-0 border ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        borderColor: accent,
      }}
      aria-hidden="true"
    >
      <svg
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        viewBox="0 0 32 32"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {id === "dash" ? (
          <>
            <path d="M13 6L16 3L19 6" stroke={accent} strokeWidth="2.2" />
            <circle cx="16" cy="17" r="9" fill={accent} />
            <circle cx="13" cy="15" r="2.2" fill="#ffffff" />
            <circle cx="19" cy="15" r="2.2" fill="#ffffff" />
            <circle cx="13.4" cy="15" r="1" fill="#070a13" />
            <circle cx="19.4" cy="15" r="1" fill="#070a13" />
            <path d="M14 19L16 22L18 19Z" fill="#fbbf24" />
          </>
        ) : null}

        {id === "droid" ? (
          <>
            <path d="M10 9L8 5M22 9L24 5" stroke={accent} strokeWidth="2.2" />
            <path
              d="M7 18C7 12.5 11 9 16 9C21 9 25 12.5 25 18V25H7V18Z"
              fill={accent}
            />
            <circle cx="12.5" cy="15" r="1.6" fill="#070a13" />
            <circle cx="19.5" cy="15" r="1.6" fill="#070a13" />
          </>
        ) : null}

        {id === "sparky" ? (
          <>
            <path
              d="M16 4L23 14L20 15L25 22L16 27L7 22L12 15L9 14L16 4Z"
              fill={accent}
            />
            <path d="M16 12L19.5 20H12.5L16 12Z" fill="#fffbeb" />
          </>
        ) : null}

        {id === "gopher" ? (
          <>
            <circle cx="9.5" cy="9.5" r="3" fill={accent} />
            <circle cx="22.5" cy="9.5" r="3" fill={accent} />
            <rect x="7" y="9" width="18" height="17" rx="8" fill={accent} />
            <circle cx="12.5" cy="15" r="2.5" fill="#ffffff" />
            <circle cx="19.5" cy="15" r="2.5" fill="#ffffff" />
            <circle cx="12.5" cy="15" r="1.1" fill="#070a13" />
            <circle cx="19.5" cy="15" r="1.1" fill="#070a13" />
            <rect x="14.5" y="19" width="3" height="3" rx="0.8" fill="#ffffff" />
          </>
        ) : null}

        {id === "octo" ? (
          <>
            <path
              d="M8 10L11 5L14 8H18L21 5L24 10V20C24 23.5 20.5 26 16 26C11.5 26 8 23.5 8 20V10Z"
              fill={accent}
            />
            <rect x="10.5" y="13" width="11" height="6" rx="3" fill="#070a13" />
            <circle cx="13.5" cy="16" r="1.4" fill="#ffffff" />
            <circle cx="18.5" cy="16" r="1.4" fill="#ffffff" />
          </>
        ) : null}

        {id === "crab" ? (
          <>
            <path
              d="M6 12L9 8L12 11M26 12L23 8L20 11"
              stroke={accent}
              strokeWidth="2.4"
            />
            <ellipse cx="16" cy="18" rx="9.5" ry="6.5" fill={accent} />
            <circle cx="12.5" cy="17" r="1.6" fill="#ffffff" />
            <circle cx="19.5" cy="17" r="1.6" fill="#ffffff" />
            <path
              d="M8 23L5.5 26M12 24.5L10.5 27.5M20 24.5L21.5 27.5M24 23L26.5 26"
              stroke={accent}
              strokeWidth="2"
            />
          </>
        ) : null}

        {id === "penguin" ? (
          <>
            <ellipse cx="16" cy="17" rx="9" ry="10.5" fill="#f8fafc" />
            <path
              d="M7 16C7 9.5 11 5.5 16 5.5C21 5.5 25 9.5 25 16C25 13 21.5 11.5 16 11.5C10.5 11.5 7 13 7 16Z"
              fill="#0f172a"
            />
            <circle cx="12.8" cy="14" r="1.4" fill="#0f172a" />
            <circle cx="19.2" cy="14" r="1.4" fill="#0f172a" />
            <path d="M13.5 17.5L16 20.5L18.5 17.5Z" fill={accent} />
          </>
        ) : null}

        {id === "dino" ? (
          <>
            <path
              d="M11 7H23V16H17V20H21V26H11V19H8V14H11V7Z"
              fill={accent}
            />
            <circle cx="19.5" cy="10.5" r="1.5" fill="#070a13" />
            <path d="M8 21H11" stroke={accent} strokeWidth="2.4" />
          </>
        ) : null}

        {id === "whale" ? (
          <>
            <rect x="9" y="11" width="4" height="4" rx="0.8" fill={accent} />
            <rect x="14" y="11" width="4" height="4" rx="0.8" fill={accent} />
            <rect x="14" y="6" width="4" height="4" rx="0.8" fill="#ffffff" />
            <path
              d="M5 17H22.5C24.5 17 26.5 14 27 12.5C27.5 15.5 27.5 18 25.5 20.5C23.5 24 19 25.5 14 25.5C8.5 25.5 5 22 5 17Z"
              fill={accent}
            />
            <circle cx="10" cy="20" r="1.3" fill="#070a13" />
          </>
        ) : null}

        {id === "spark" ? (
          <>
            <path
              d="M16 4L18.8 13.2L28 16L18.8 18.8L16 28L13.2 18.8L4 16L13.2 13.2L16 4Z"
              fill={accent}
            />
            <circle cx="16" cy="16" r="2.2" fill="#ffffff" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
