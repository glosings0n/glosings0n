import type { ComponentType, ReactNode } from "react";

export interface CodelabStepNavItem {
  index: number;
  titleEn: ReactNode;
  titleFr: ReactNode;
  time: string;
}

export interface CodelabStepMeta {
  index: number;
  duration: number;
  eyebrowEn: ReactNode;
  eyebrowFr: ReactNode;
  titleEn: ReactNode;
  titleFr: ReactNode;
  lastUpdatedIso: string;
  lastUpdatedEn: string;
  lastUpdatedFr: string;
  finalCtaHref: string;
  finalCtaEn: ReactNode;
  finalCtaFr: ReactNode;
  render: ComponentType;
}

export interface CodelabDefinition {
  slug: string;
  navItems: CodelabStepNavItem[];
  steps: CodelabStepMeta[];
}
