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
- **Copyright Year Policy:**
  - The main Portfolio (`index.html`) and the Codelabs Hub (`codelabs/hub.html`) use a **dynamic** `currentYear` (`new Date().getFullYear()` via `#current-year`) so the year updates automatically every year.
  - Individual Codelab Session pages (`codelabs/<slug>/index.html`) use a **fixed static year** in `.sidebar-copyright` matching the year of that specific talk/session (e.g., `&copy; 2026 glosings0n`), so a 2026 session still displays `2026` in 2028.

---

## 4. Mandatory Codelab Metadata, Spacing & SEO/AEO Indexing Rules
- **Symmetric Top & Bottom Step Spacing:**
  - In `.codelab-main`, the bottom vertical padding must ALWAYS match the top vertical padding (`padding: 36px 24px` on desktop, `padding: 20px 14px` on tablet, `padding: 12px 10px` on mobile), and `.codelab-step` must have `margin-bottom: 0`.
- **Mandatory `Last updated` Timestamp (Update on Every Code Change):**
  - Every codelab MUST display a visible `<span class="codelab-last-updated">Last updated: <time datetime="YYYY-MM-DD">Month DD, YYYY</time></span>` at the very start of Step 1 (inside `.step-header`).
  - **Whenever any code or content in a codelab is updated**, you MUST obligatoriiy update:
    1. The visible `<time datetime="YYYY-MM-DD">` in Step 1 of the codelab.
    2. `<meta property="article:modified_time" content="YYYY-MM-DD">` and JSON-LD `"dateModified": "YYYY-MM-DD"` in the codelab HTML and in `codelabs/hub.html`.
    3. The `<lastmod>YYYY-MM-DD</lastmod>` entry in `sitemap.xml`.
- **Mandatory Google SEO & AI Engine (AEO) Indexing on Every Codelab:**
  - Every existing and future codelab (`codelabs/<slug>/index.html`) and the Codelabs Hub (`codelabs/hub.html`) MUST include:
    1. Comprehensive `<meta name="keywords">`, `<meta name="description">`, `<meta name="author" content="Georges Byona">`, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`, and `<link rel="canonical" href="https://codelabs.glosings0n.dev/<slug>">`.
    2. Complete OpenGraph (`og:*`, `article:*`) and Twitter Card (`twitter:*`) tags referencing `@glosings0n`.
    3. A complete Schema.org JSON-LD `@graph` (`TechArticle`, `LearningResource`, `BreadcrumbList`, `Person` for **Georges Byona** with all aliases `glosings0n`, `@glosings0n`, `Losingson`, `Losings0n`, `@losingson`, `Georges Losingson`, `Byona Georges`, `g-losingson`, and `Organization` entities for **LosingTek** and **FlutterFire Summer Camp**, plus all technical topic tags).
    4. Registration of the new codelab URL in `sitemap.xml` and in the `hasPart` array of `codelabs/hub.html`'s `CollectionPage` JSON-LD.

---

## 5. Mandatory Codelab Prerequisites & Runnable Code Verification
- **Always Start with Prerequisites & System Requirements:**
  - Every codelab MUST include an explicit **Prerequisites & System Requirements** section in Step 1 (and environment verification commands in Step 1/Step 2) listing exact SDK versions, OS/tool dependencies (e.g., Flutter SDK, Dart SDK, JDK 17, Android SDK `minSdk`, Xcode), hardware/device requirements (RAM, storage, 64-bit `arm64-v8a` physical device vs. emulator), and pre-flight terminal checks (`flutter doctor -v`, `adb devices`).
- **100% Self-Contained, Cross-Platform & Verified Code Snippets:**
  - Every file listed in a codelab's minimal project structure MUST be presented as a complete, self-contained, copy-pasteable file (with all required `import` statements, class declarations, and helper methods included) so a participant can copy the files from Step 1 to the final step and run the project without any missing symbols, missing assets, or SDK version mismatch errors.
  - Provide terminal commands for both **macOS / Linux / Git Bash** and **Windows PowerShell** whenever shell syntax differs (such as creating nested folders).
  - Always verify codelab code with `flutter analyze` / `dart analyze` before publishing.
