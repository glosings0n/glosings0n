"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AppIcon, type AppIconName } from "./AppIcon";

export interface AppSelectOption<T extends string = string> {
  value: T;
  label: string;
  hint?: string;
  icon?: AppIconName;
}

interface AppSelectProps<T extends string = string> {
  id?: string;
  value: T;
  options: readonly AppSelectOption<T>[];
  onChange: (value: T) => void;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
}

export function AppSelect<T extends string = string>({
  id,
  value,
  options,
  onChange,
  placeholder = "Select...",
  ariaLabel,
  disabled = false,
  className = "",
  triggerClassName = "",
  menuClassName = "",
}: AppSelectProps<T>) {
  const generatedId = useId();
  const listboxId = `${id ?? generatedId}-listbox`;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value) ?? null;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (options.length === 0) return;
        const currentIndex = options.findIndex((o) => o.value === value);
        const delta = event.key === "ArrowDown" ? 1 : -1;
        const nextIndex =
          currentIndex < 0
            ? 0
            : (currentIndex + delta + options.length) % options.length;
        const nextOption = options[nextIndex];
        if (nextOption) onChange(nextOption.value);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onChange, open, options, value]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        className={`w-full h-11 px-3.5 rounded-[10px] border bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-between gap-2.5 text-left transition-colors focus:outline-none ${
          open
            ? "border-[var(--color-cyan)]"
            : "border-[var(--border-color)] hover:border-[var(--color-cyan)]"
        } ${disabled ? "opacity-45 cursor-not-allowed" : "cursor-pointer"} ${triggerClassName}`}
      >
        <span className="flex items-center gap-2 min-w-0 flex-1">
          {selected?.icon ? (
            <AppIcon
              name={selected.icon}
              size={16}
              strokeWidth={1.8}
              className="text-[var(--color-cyan)] shrink-0"
            />
          ) : null}
          <span className="truncate font-medium">
            {selected ? selected.label : placeholder}
          </span>
          {selected?.hint ? (
            <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
              {selected.hint}
            </span>
          ) : null}
        </span>

        <AppIcon
          name="arrowDown"
          size={16}
          strokeWidth={2}
          className={`text-[var(--text-secondary)] shrink-0 transition-transform duration-150 ${
            open ? "rotate-180 text-[var(--color-cyan)]" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          className={`absolute left-0 right-0 mt-1.5 z-50 max-h-64 overflow-y-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-1.5 shadow-[var(--shadow-md)] ${menuClassName}`}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-[8px] flex items-center justify-between gap-2 text-left text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-cyan-tint)] text-[var(--color-cyan)] font-semibold"
                      : "text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0 flex-1">
                    {opt.icon ? (
                      <AppIcon
                        name={opt.icon}
                        size={15}
                        strokeWidth={1.8}
                        className={
                          isSelected
                            ? "text-[var(--color-cyan)] shrink-0"
                            : "text-[var(--text-secondary)] shrink-0"
                        }
                      />
                    ) : null}
                    <span className="truncate">{opt.label}</span>
                  </span>

                  <span className="flex items-center gap-2 shrink-0">
                    {opt.hint ? (
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {opt.hint}
                      </span>
                    ) : null}
                    {isSelected ? (
                      <AppIcon
                        name="check"
                        size={14}
                        strokeWidth={2.2}
                        className="text-[var(--color-cyan)]"
                      />
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
