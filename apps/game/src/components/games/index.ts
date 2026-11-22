import type { ComponentType } from "react";
import { BitSnapGame } from "./BitSnapGame";
import { BugSquashGame } from "./BugSquashGame";
import { DashClimbGame } from "./DashClimbGame";
import { ExactTimerGame } from "./ExactTimerGame";
import { PingReflexGame } from "./PingReflexGame";
import { StroopTrapGame } from "./StroopTrapGame";
import { SwipeStormGame } from "./SwipeStormGame";
import { SyntaxSpotterGame } from "./SyntaxSpotterGame";
import { TapBlitzGame } from "./TapBlitzGame";
import { TrueOrGlitchGame } from "./TrueOrGlitchGame";
import type { MiniGameProps } from "./types";

export const GAME_COMPONENTS: Record<string, ComponentType<MiniGameProps>> = {
  "tap-blitz": TapBlitzGame,
  "stroop-trap": StroopTrapGame,
  "dash-climb": DashClimbGame,
  "ping-reflex": PingReflexGame,
  "bug-squash": BugSquashGame,
  "syntax-spotter": SyntaxSpotterGame,
  "exact-timer": ExactTimerGame,
  "bit-snap": BitSnapGame,
  "swipe-storm": SwipeStormGame,
  "true-or-glitch": TrueOrGlitchGame,
};

export type { GameResult, MiniGameProps } from "./types";
