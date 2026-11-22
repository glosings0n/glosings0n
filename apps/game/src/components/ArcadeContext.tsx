"use client";

import {
  useStoredLang,
  useStoredTheme,
  type UiLang,
  type UiTheme,
} from "@repo/ui";
import { createContext, useContext, type ReactNode } from "react";

interface ArcadeSettingsContextValue {
  lang: UiLang;
  theme: UiTheme;
  setLang: (lang: UiLang) => void;
  toggleTheme: () => void;
}

const ArcadeSettingsContext = createContext<ArcadeSettingsContextValue>({
  lang: "en",
  theme: "dark",
  setLang: () => {},
  toggleTheme: () => {},
});

export function ArcadeSettingsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useStoredLang("glosings0n_arcade_lang", true);
  const [theme, toggleTheme] = useStoredTheme("glosings0n_arcade_theme");

  return (
    <ArcadeSettingsContext.Provider
      value={{ lang, theme, setLang, toggleTheme }}
    >
      {children}
    </ArcadeSettingsContext.Provider>
  );
}

export function useArcadeSettings() {
  return useContext(ArcadeSettingsContext);
}
