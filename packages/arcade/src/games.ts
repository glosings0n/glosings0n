import type { AppIconName } from "@repo/ui";

export type GameCategory =
  | "speed"
  | "focus"
  | "mobility"
  | "reflex"
  | "logic";

export type GameSortOrder = "desc" | "asc";

export interface ArcadeGameMeta {
  slug: string;
  titleEn: string;
  titleFr: string;
  taglineEn: string;
  taglineFr: string;
  instructionsEn: string;
  instructionsFr: string;
  category: GameCategory;
  categoryLabelEn: string;
  categoryLabelFr: string;
  durationSec: number;
  durationLabel: string;
  sortOrder: GameSortOrder;
  unitLabel: string;
  icon: AppIconName;
  trackHintEn: string;
  trackHintFr: string;
}

export const ARCADE_GAMES: ArcadeGameMeta[] = [
  {
    slug: "tap-blitz",
    titleEn: "Tap Blitz",
    titleFr: "Tap Blitz",
    taglineEn: "Pure finger speed for 5 seconds flat.",
    taglineFr: "Vitesse pure au doigt pendant 5 secondes chrono.",
    instructionsEn:
      "Tap the target pad as fast as you possibly can for 5 seconds. Every tap counts.",
    instructionsFr:
      "Tape la zone centrale le plus rapidement possible pendant 5 secondes. Chaque tap compte.",
    category: "speed",
    categoryLabelEn: "Speed",
    categoryLabelFr: "Rapidité",
    durationSec: 5,
    durationLabel: "5s",
    sortOrder: "desc",
    unitLabel: "taps",
    icon: "flash",
    trackHintEn: "All Tech Sessions | Icebreaker",
    trackHintFr: "Toutes Sessions Tech | Brise-glace",
  },
  {
    slug: "stroop-trap",
    titleEn: "Stroop Trap",
    titleFr: "Piège Stroop",
    taglineEn: "Color vs word vs background. Read the rule fast.",
    taglineFr: "Couleur vs mot vs fond. Lis bien la consigne.",
    instructionsEn:
      "Read the prompt carefully each round: tap the card matching the WORD, TEXT COLOR, or BACKGROUND.",
    instructionsFr:
      "Lis bien la consigne à chaque tour : choisis la carte selon le MOT, la COULEUR DU TEXTE ou le FOND.",
    category: "focus",
    categoryLabelEn: "Focus",
    categoryLabelFr: "Concentration",
    durationSec: 15,
    durationLabel: "15s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "eye",
    trackHintEn: "Attention & Precision Warm-Up",
    trackHintFr: "Échauffement Attention & Consignes",
  },
  {
    slug: "dash-climb",
    titleEn: "Dash Sky Climb",
    titleFr: "Dash Sky Climb",
    taglineEn: "Tap to boost Flutter Dash upward and dodge runtime traps.",
    taglineFr: "Tape pour faire monter Dash et esquiver les bugs.",
    instructionsEn:
      "Tap or press Space to flap Dash higher for 10 seconds. Collect blue gems (+25m) and dodge red traps.",
    instructionsFr:
      "Tape ou appuie sur Espace pour faire monter Dash pendant 10 secondes. Prends les gemmes (+25m) et esquive les pièges.",
    category: "mobility",
    categoryLabelEn: "Mobility",
    categoryLabelFr: "Mobilité",
    durationSec: 10,
    durationLabel: "10s",
    sortOrder: "desc",
    unitLabel: "m",
    icon: "sparkles",
    trackHintEn: "Flutter & Dart Sessions",
    trackHintFr: "Sessions Flutter & Dart",
  },
  {
    slug: "ping-reflex",
    titleEn: "Ping Reflex",
    titleFr: "Ping Reflex",
    taglineEn: "Wait for 200 OK and react in milliseconds.",
    taglineFr: "Attends le 200 OK et réagis en millisecondes.",
    instructionsEn:
      "Wait on amber WAITING... and tap the instant it turns green 200 OK. Lower average ms wins.",
    instructionsFr:
      "Attends sur WAITING... puis tape dès que le panneau passe au vert 200 OK. La plus petite moyenne (ms) gagne.",
    category: "reflex",
    categoryLabelEn: "Reflex",
    categoryLabelFr: "Réflexes",
    durationSec: 12,
    durationLabel: "3 rounds",
    sortOrder: "asc",
    unitLabel: "ms",
    icon: "target",
    trackHintEn: "Backend, Cloud & APIs",
    trackHintFr: "Backend, Cloud & APIs",
  },
  {
    slug: "bug-squash",
    titleEn: "Bug Squash",
    titleFr: "Chasse aux Bugs",
    taglineEn: "Squash red bugs in the 3x3 grid. Spare PROD OK.",
    taglineFr: "Écrase les bugs dans la grille 3x3. Épargne PROD OK.",
    instructionsEn:
      "Tap red BUG tiles (+100 pts) before they vanish. Never hit green PROD OK badges (-120 pts).",
    instructionsFr:
      "Tape les cases BUG rouges (+100 pts) avant qu'elles disparaissent. Ne touche jamais PROD OK (-120 pts).",
    category: "reflex",
    categoryLabelEn: "Reflex",
    categoryLabelFr: "Réflexes",
    durationSec: 12,
    durationLabel: "12s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "bug",
    trackHintEn: "Debugging & Engineering",
    trackHintFr: "Débogage & Ingénierie",
  },
  {
    slug: "syntax-spotter",
    titleEn: "Syntax Spotter",
    titleFr: "Détecteur de Syntaxe",
    taglineEn: "Spot the 1 subtle typo hidden in the code grid.",
    taglineFr: "Repère l'unique faute de syntaxe dans la grille.",
    instructionsEn:
      "One tile in the matrix has a sneaky bug (e.g. fluter vs flutter). Tap the outlier as fast as possible.",
    instructionsFr:
      "Une seule case contient une erreur subtile (ex. fluter au lieu de flutter). Trouve l'intrus le plus vite possible.",
    category: "focus",
    categoryLabelEn: "Focus",
    categoryLabelFr: "Observation",
    durationSec: 15,
    durationLabel: "15s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "code",
    trackHintEn: "Code Review & Students",
    trackHintFr: "Code Review & Étudiants",
  },
  {
    slug: "exact-timer",
    titleEn: "Exact 5.000s",
    titleFr: "Chrono 5.000s",
    taglineEn: "The clock hides at 1.5s. Stop it right on 5.000s.",
    taglineFr: "Le chrono se cache à 1.5s. Arrête-le à 5.000s pile.",
    instructionsEn:
      "Start the timer, count silently once the digits hide, and hit STOP as close to 5.000s as possible.",
    instructionsFr:
      "Lance le chrono, compte dans ta tête quand les chiffres disparaissent et appuie sur STOP au plus près de 5.000s.",
    category: "focus",
    categoryLabelEn: "Precision",
    categoryLabelFr: "Précision",
    durationSec: 10,
    durationLabel: "~10s",
    sortOrder: "asc",
    unitLabel: "ms off",
    icon: "timer",
    trackHintEn: "Zero Device Advantage | Fair Play",
    trackHintFr: "Équité Totale | Sans Avantage Matériel",
  },
  {
    slug: "bit-snap",
    titleEn: "Bit Snap",
    titleFr: "Bit Snap",
    taglineEn: "4-bit binary, booleans and powers of 2 at high speed.",
    taglineFr: "Binaire 4 bits, booléens et puissances de 2 express.",
    instructionsEn:
      "Solve rapid CS micro-puzzles (binary, boolean logic, powers of 2) before the 15s clock runs out.",
    instructionsFr:
      "Résous des micro-énigmes tech (binaire, logique booléenne, puissances de 2) en 15 secondes.",
    category: "logic",
    categoryLabelEn: "Logic",
    categoryLabelFr: "Logique",
    durationSec: 15,
    durationLabel: "15s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "cpu",
    trackHintEn: "CS Students & Campus Talks",
    trackHintFr: "Étudiants & Campus Talks",
  },
  {
    slug: "swipe-storm",
    titleEn: "Swipe Storm",
    titleFr: "Swipe Storm",
    taglineEn: "Cyan = swipe with the arrow. Red = swipe the opposite.",
    taglineFr: "Cyan = swipe dans le sens. Rouge = sens opposé.",
    instructionsEn:
      "Swipe (or use arrow keys / D-pad) in the arrow direction when CYAN, and the OPPOSITE direction when RED.",
    instructionsFr:
      "Glisse le doigt (ou flèches / pavé) dans le sens de la flèche CYAN, et dans le sens OPPOSÉ quand elle est ROUGE.",
    category: "mobility",
    categoryLabelEn: "Mobility",
    categoryLabelFr: "Mobilité",
    durationSec: 12,
    durationLabel: "12s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "game",
    trackHintEn: "Flexibility & Coordination",
    trackHintFr: "Flexibilité & Coordination",
  },
  {
    slug: "true-or-glitch",
    titleEn: "True or Glitch",
    titleFr: "Vrai ou Glitch",
    taglineEn: "Rapid-fire tech facts: TRUE or GLITCH in 15s.",
    taglineFr: "Quiz tech éclair : VRAI ou GLITCH en 15s.",
    instructionsEn:
      "Decide fast if each statement about Flutter, AI, Git, Web, or Linux is TRUE or a GLITCH.",
    instructionsFr:
      "Décide vite si chaque affirmation sur Flutter, l'IA, Git, le Web ou Linux est VRAIE ou un GLITCH.",
    category: "logic",
    categoryLabelEn: "Knowledge",
    categoryLabelFr: "Culture Tech",
    durationSec: 15,
    durationLabel: "15s",
    sortOrder: "desc",
    unitLabel: "pts",
    icon: "layers",
    trackHintEn: "DevFest, AI & Flutter Talks",
    trackHintFr: "DevFest, IA & Conférences Flutter",
  },
];

export function getArcadeGame(slug: string): ArcadeGameMeta | undefined {
  return ARCADE_GAMES.find((game) => game.slug === slug);
}

export function formatScoreMetric(game: ArcadeGameMeta, score: number): string {
  if (game.slug === "ping-reflex") {
    return `${Math.round(score)} ms`;
  }
  if (game.slug === "exact-timer") {
    return `${Math.round(score)} ms off`;
  }
  if (game.slug === "dash-climb") {
    return `${Math.round(score)} m`;
  }
  if (game.slug === "tap-blitz") {
    return `${Math.round(score)} taps`;
  }
  return `${Math.round(score)} pts`;
}
