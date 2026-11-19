import { AppIcon } from "@repo/ui";
import type { CSSProperties, ReactNode } from "react";
import { Bilingual } from "./Bilingual";

export type CalloutVariant = "info" | "success" | "warning" | "danger";
export type CalloutIconName = "info" | "success" | "warning" | "danger" | "users";

interface CalloutProps {
  variant?: CalloutVariant;
  iconName?: CalloutIconName;
  titleEn: ReactNode;
  titleFr: ReactNode;
  style?: CSSProperties;
  children: ReactNode;
}

export function Callout({
  variant = "info",
  iconName,
  titleEn,
  titleFr,
  style,
  children,
}: CalloutProps) {
  const resolvedIcon: CalloutIconName = iconName ?? variant;

  return (
    <div className={`callout callout-${variant}`} style={style}>
      <AppIcon
        name={resolvedIcon}
        size={20}
        strokeWidth={2}
        className="callout-icon"
      />
      <div className="callout-body">
        <div className="callout-title">
          <Bilingual en={titleEn} fr={titleFr} />
        </div>
        {children}
      </div>
    </div>
  );
}
