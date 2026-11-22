export type TechMascotId =
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

export interface TechMascotMeta {
  id: TechMascotId;
  name: string;
  tech: string;
  accentHex: string;
  bgHex: string;
}

export const TECH_MASCOTS: TechMascotMeta[] = [
  {
    id: "dash",
    name: "Dash",
    tech: "Flutter",
    accentHex: "#00B0FF",
    bgHex: "#082f49",
  },
  {
    id: "droid",
    name: "Droid",
    tech: "Android",
    accentHex: "#34d399",
    bgHex: "#064e3b",
  },
  {
    id: "sparky",
    name: "Sparky",
    tech: "Firebase",
    accentHex: "#fbbf24",
    bgHex: "#451a03",
  },
  {
    id: "gopher",
    name: "Gopher",
    tech: "Go",
    accentHex: "#38bdf8",
    bgHex: "#0c4a6e",
  },
  {
    id: "octo",
    name: "Octo",
    tech: "Git",
    accentHex: "#a78bfa",
    bgHex: "#2e1065",
  },
  {
    id: "crab",
    name: "Ferris",
    tech: "Rust",
    accentHex: "#fb7185",
    bgHex: "#4c0519",
  },
  {
    id: "penguin",
    name: "Tux",
    tech: "Linux",
    accentHex: "#facc15",
    bgHex: "#1e293b",
  },
  {
    id: "dino",
    name: "Deno",
    tech: "TypeScript",
    accentHex: "#60a5fa",
    bgHex: "#172554",
  },
  {
    id: "whale",
    name: "Moby",
    tech: "Docker",
    accentHex: "#22d3ee",
    bgHex: "#083344",
  },
  {
    id: "spark",
    name: "Nova",
    tech: "Edge-AI",
    accentHex: "#2dd4bf",
    bgHex: "#042f2e",
  },
];

export const DEFAULT_MASCOT_ID: TechMascotId = "dash";

export function normalizeMascotId(raw?: string | null): TechMascotId {
  if (!raw) return DEFAULT_MASCOT_ID;
  const found = TECH_MASCOTS.find((m) => m.id === raw);
  return found ? found.id : DEFAULT_MASCOT_ID;
}

export function getTechMascot(raw?: string | null): TechMascotMeta {
  const id = normalizeMascotId(raw);
  return TECH_MASCOTS.find((m) => m.id === id) ?? TECH_MASCOTS[0]!;
}
