"use client";

import { AppIcon } from "@repo/ui";
import { useState } from "react";
import { useCodelabSettings } from "./CodelabContext";

interface CodeWindowProps {
  filename: string;
  lang: string;
  code: string;
}

export function CodeWindow({ filename, lang, code }: CodeWindowProps) {
  const { lang: uiLang } = useCodelabSettings();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const label = copied
    ? uiLang === "fr"
      ? "Copié !"
      : "Copied!"
    : uiLang === "fr"
      ? "Copier"
      : "Copy";

  return (
    <div className="code-window">
      <div className="code-window-header">
        <div className="code-window-meta">
          <div className="window-dots">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
          </div>
          <span className="code-filename">{filename}</span>
          <span className="code-lang-badge">{lang}</span>
        </div>
        <button
          type="button"
          className={`copy-code-btn${copied ? " copied" : ""}`}
          onClick={handleCopy}
        >
          <AppIcon
            name={copied ? "check" : "copy"}
            size={13}
            strokeWidth={copied ? 2.2 : 2}
          />
          {label}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
