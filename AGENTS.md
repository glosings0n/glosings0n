# AGENTS.md | Strict Brand, UI & Engineering Guidelines (glosings0n)

These rules are mandatory across all web, codelab, slide, documentation, and application files in this repository. Follow them without exception.

---

## 1. Punctuation & Copy Rules
- **Zero Long Dashes (`—` or `–`):** NEVER use em-dashes (`—`, `&mdash;`) or en-dashes (`–`, `&ndash;`) anywhere in page titles, headings, metadata, UI labels, prose, tables, or comments.
  - In `<title>`, `<meta>`, section titles, and terminal/code headers: always use the pipe separator `|` (e.g., `glosings0n Codelabs | Hands-On Engineering Guides`).
  - In sentences, lists, and ranges: use `:`, `;`, `,`, `to`, or a standard hyphen `-` (e.g., `3GB to 6GB RAM`, `180ms to 600ms`).
- **Zero Emojis:** NEVER use emojis anywhere in HTML, UI components, badges, markdown, or code comments. Always use clean, crisp inline SVG icons instead.
- **Concise Action Labels:** Prefer icon-only action buttons in top bars to maximize space, paired with short, direct `title` / `aria-label` attributes (e.g., `Light mode`, `Dark mode`, `Open the GitHub repo`).

---

## 2. Visual Design, Colors & Components
- **Zero Gradients & Zero Glows:** NEVER use `linear-gradient`, `radial-gradient`, `conic-gradient`, or neon glow effects (`box-shadow` / `text-shadow` glows).
  - Always use **solid colors** or subtle semi-transparent solid fills and borders (`rgba(...)`).
- **Primary Color Palette:**
  - Accent Cyan: `#00B0FF` (Dark mode) / `#0284c7` (Light mode)
  - Accent Blue: `#02569B`
  - Dark Surfaces: `#070a13` (primary), `#0f1424` (secondary), `#171d32` (tertiary), `#202b46` (border)
  - Light Surfaces: `#f8fafc` (primary), `#ffffff` (secondary), `#f1f5f9` (tertiary), `#cbd5e1` (border)
- **Callout / Message Boxes (`info`, `warning`, `danger`, `success`):**
  - Always use a uniform `1px solid` border on all four sides (same style from left to right).
  - NEVER use a thick colored left stripe (`border-left: 4px solid`).
- **SVG Icons:**
  - Always set `stroke-linecap="round"` and `stroke-linejoin="round"` on stroke SVGs.
  - For icons containing a dot (`info`, `warning`, `danger`), ALWAYS render the dot using an explicit filled `<circle cx="12" cy="..." r="1.25" fill="currentColor" stroke="none"></circle>` instead of a `<line x1="12" x2="12.01">` hack.
- **Scrollbars:**
  - Always style scrollbars to match the app theme with an ultra-thin `5px` thumb, rounded pill corners (`border-radius: 999px`), and hidden OS arrow buttons (`::-webkit-scrollbar-button { display: none; }`).
  - In sidebars with a footer, keep the footer fixed at the bottom (`flex-shrink: 0`) and scroll only the inner navigation list (`flex: 1; overflow-y: auto`).

---

## 3. Brand Identity & Typography
- **Brand Name:** Always write `glosings0n` (strictly NO trailing dot: never write `glosings0n.`).
- **Author & Organization Identity:**
  - **Georges Byona** (`@glosings0n`), Software Engineer, Edge-AI Researcher, Founder @ **LosingTek**, Initiator of **FlutterFire Summer Camp**.
- **Typography System:**
  - **UI & Body Text:** `'Figtree'`
  - **Code, Numbers/Digits (`0-9`, `+`), Technical Metrics & `@glosings0n` Handle:** `'JetBrains Mono'` (with `JetBrainsMonoDigits` `unicode-range: U+0030-0039, U+002B` so all numbers render in monospace automatically).
  - **LosingTek Brand Wordmark:** Always use `'Urbanist'` via `<span class="losingtek-font"><span class="brand-bold">Losing</span>Tek</span>` (`Losing` in bold `700`, `Tek` in regular `400`).
- **Domain & Routing (`codelabs.glosings0n.dev`):**
  - `https://codelabs.glosings0n.dev/` serves the Codelabs hub directly at `/` (never `/codelabs/`).
  - Each codelab is served at `https://codelabs.glosings0n.dev/<session-slug>` (e.g., `/flutter-gemma-droidcon-ug-2026`).
  - When displaying domain links in text, use a clean lowercase blue link (`codelabs-url-link`), never inside an uppercase badge.
