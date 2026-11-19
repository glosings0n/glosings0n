"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export type UiLang = "en" | "fr";
export type UiTheme = "dark" | "light";

const PREFS_EVENT = "glosings0n:prefs";

function subscribeNoop() {
  return () => {};
}

function subscribePrefs(onChange: () => void) {
  window.addEventListener(PREFS_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(PREFS_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useIsLocalHost(): boolean {
  return useSyncExternalStore(
    subscribeNoop,
    () => ["localhost", "127.0.0.1", ""].includes(window.location.hostname),
    () => false,
  );
}

export function useStoredLang(
  storageKey: string,
  syncDataLang = false,
): [UiLang, (next: UiLang) => void] {
  const getSnapshot = useCallback((): UiLang => {
    const saved = localStorage.getItem(storageKey);
    if (saved === "en" || saved === "fr") return saved;
    const browserLang = (navigator.language || "en").toLowerCase();
    return browserLang.startsWith("fr") ? "fr" : "en";
  }, [storageKey]);

  const lang = useSyncExternalStore<UiLang>(
    subscribePrefs,
    getSnapshot,
    () => "en",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    if (syncDataLang) {
      document.documentElement.setAttribute("data-lang", lang);
    }
  }, [lang, syncDataLang]);

  const setLang = useCallback(
    (next: UiLang) => {
      localStorage.setItem(storageKey, next);
      document.documentElement.lang = next;
      if (syncDataLang) {
        document.documentElement.setAttribute("data-lang", next);
      }
      window.dispatchEvent(new Event(PREFS_EVENT));
    },
    [storageKey, syncDataLang],
  );

  return [lang, setLang];
}

export function useStoredTheme(
  storageKey: string,
): [UiTheme, () => void] {
  const getSnapshot = useCallback((): UiTheme => {
    const saved = localStorage.getItem(storageKey);
    return saved === "light" || saved === "dark" ? saved : "dark";
  }, [storageKey]);

  const theme = useSyncExternalStore<UiTheme>(
    subscribePrefs,
    getSnapshot,
    () => "dark",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: UiTheme = getSnapshot() === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event(PREFS_EVENT));
  }, [getSnapshot, storageKey]);

  return [theme, toggleTheme];
}
