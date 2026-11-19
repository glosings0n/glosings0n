"use client";

import {
  useStoredLang,
  useStoredTheme,
  type UiLang,
  type UiTheme,
} from "@repo/ui";
import { createContext, useContext, type ReactNode } from "react";

export type CodelabLang = UiLang;
export type CodelabTheme = UiTheme;

interface CodelabSettingsContextValue {
  lang: CodelabLang;
  theme: CodelabTheme;
  setLang: (lang: CodelabLang) => void;
  toggleTheme: () => void;
}

const CodelabSettingsContext = createContext<CodelabSettingsContextValue>({
  lang: "en",
  theme: "dark",
  setLang: () => {},
  toggleTheme: () => {},
});

export function CodelabSettingsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useStoredLang("glosings0n_codelab_lang", true);
  const [theme, toggleTheme] = useStoredTheme("glosings0n_codelab_theme");

  return (
    <CodelabSettingsContext.Provider
      value={{ lang, theme, setLang, toggleTheme }}
    >
      {children}
    </CodelabSettingsContext.Provider>
  );
}

export function useCodelabSettings() {
  return useContext(CodelabSettingsContext);
}
