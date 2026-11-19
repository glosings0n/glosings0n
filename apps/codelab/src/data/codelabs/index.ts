import { codelabData as agenticCoding } from "./agentic-coding-flutter-mcp-skills";
import { codelabData as appsScript } from "./apps-script-workspace-automation";
import { codelabData as flutterGemma } from "./flutter-gemma-droidcon-ug-2026";
import { codelabData as genkitDart } from "./genkit-dart-agentic-workflows";
import { codelabData as hybridAi } from "./hybrid-ai-firebase-litert-flutter";
import type { CodelabDefinition } from "./types";

export const CODELABS_BY_SLUG: Record<string, CodelabDefinition> = {
  "flutter-gemma-droidcon-ug-2026": flutterGemma,
  "genkit-dart-agentic-workflows": genkitDart,
  "agentic-coding-flutter-mcp-skills": agenticCoding,
  "hybrid-ai-firebase-litert-flutter": hybridAi,
  "apps-script-workspace-automation": appsScript,
};

export function getCodelabDefinition(slug: string): CodelabDefinition | undefined {
  return CODELABS_BY_SLUG[slug];
}
