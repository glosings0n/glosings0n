import type { ScoreMeta } from "@repo/arcade";
import type { UiLang } from "@repo/ui";

export interface GameResult {
  score: number;
  meta?: ScoreMeta;
  summaryEn: string;
  summaryFr: string;
}

export interface MiniGameProps {
  lang: UiLang;
  onFinish: (result: GameResult) => void;
}
