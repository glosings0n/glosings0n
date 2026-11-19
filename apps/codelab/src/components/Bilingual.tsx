import type { ReactNode } from "react";

export function Bilingual({
  en,
  fr,
}: {
  en: ReactNode;
  fr: ReactNode;
}) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-fr">{fr}</span>
    </>
  );
}
