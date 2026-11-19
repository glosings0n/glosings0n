export interface CodelabSummary {
  slug: string;
  id: string;
  tags: string[];
  titleEn: string;
  titleFr: string;
  summaryEn: string;
  summaryFr: string;
  metaEn: string;
  metaFr: string;
  datePublished: string;
  dateModified: string;
  keywords: string;
  headerTitleEn: string;
  headerTitleFr: string;
  initialTimeLeft: string;
  githubUrl?: string;
  footerRoleEn: string;
  footerRoleFr: string;
  footerTrackLabelEn: string;
  footerTrackLabelFr: string;
  footerTrackValue: string;
  copyrightYear: number;
}

export const CODELAB_CATALOG: CodelabSummary[] = [
  {
    slug: "flutter-gemma-droidcon-ug-2026",
    id: "card-droidcon-ug-2026",
    tags: [
      "droidCon Uganda 2026",
      "flutter_edge_ai",
      "Gemma 4 / LiteRT-LM",
      "SQLite FTS5 RAG",
    ],
    titleEn:
      "On-Device AI with Flutter & Gemma: Building Offline-First AI Mobile Apps for Africa",
    titleFr:
      "IA Embarquée avec Flutter & Gemma : Concevoir des Applications Mobiles IA 100% Hors Ligne",
    summaryEn:
      "Learn how to run Google's Gemma models and multi-model SLMs (Phi-3, Qwen, DeepSeek) 100% offline using flutter_edge_ai (formerly flutter_gemma), optimize CPU vs. GPU hardware inference, build a zero-RAM SQLite FTS5 RAG engine, prevent native FFI deadlocks, and distill a custom model under 150 MB.",
    summaryFr:
      "Apprenez à exécuter les modèles Google Gemma et multi-modèles SLM (Phi-3, Qwen, DeepSeek) 100% hors ligne avec flutter_edge_ai (anciennement flutter_gemma), optimiser l'inférence matérielle CPU vs GPU, concevoir un moteur RAG SQLite FTS5 à zéro-RAM, éviter les deadlocks FFI et distiller un modèle sous 150 Mo.",
    metaEn: "48 min | 9 Steps",
    metaFr: "48 min | 9 Étapes",
    datePublished: "2026-10-28",
    dateModified: "2026-11-04",
    keywords:
      "On-Device AI with Flutter and Gemma, flutter_edge_ai, flutter_edge_ai_litertlm, flutter_gemma, Google Gemma, Gemma 4, Phi, Qwen, DeepSeek, SmolLM, LiteRT-LM, MediaPipe LLM Inference, Offline AI Mobile Apps Africa, droidCon Uganda 2026, Kampala, Gemmea, GDG on Campus UCB Build with Gemma 2026, SQLite FTS5 RAG, BM25 Local RAG, Model Distillation under 150MB, INT4 Quantization, ai-edge-torch, Georges Byona, Georges Losingson, Byona Georges, glosings0n, @glosings0n, Losingson, Losings0n, @losingson, g-losingson, LosingTek, Losing Tek, FlutterFire Summer Camp, FlutterFire Camp",
    headerTitleEn: "On-Device AI with Flutter & Gemma (droidCon Uganda 2026)",
    headerTitleFr: "IA Embarquée avec Flutter & Gemma (droidCon Uganda 2026)",
    initialTimeLeft: "45 min left",
    githubUrl: "https://github.com/glosings0n/gemmea",
    footerRoleEn: "Speaker:",
    footerRoleFr: "Intervenant :",
    footerTrackLabelEn: "Event:",
    footerTrackLabelFr: "Événement :",
    footerTrackValue: "droidCon Uganda 2026 | Kampala",
    copyrightYear: 2026,
  },
  {
    slug: "genkit-dart-agentic-workflows",
    id: "card-genkit-dart",
    tags: ["Genkit Dart", "Dart Shelf", "schemantic", "Flutter Streaming"],
    titleEn:
      "Full-Stack Agentic Dart: Building End-to-End Typed AI Agents with Genkit Dart & Shelf",
    titleFr:
      "Full-Stack Agentic Dart : Construire des Agents IA Typés de Bout en Bout avec Genkit Dart & Shelf",
    summaryEn:
      "Architect end-to-end type-safe AI agents in pure Dart. Share strongly-typed schemantic contracts between your Dart Shelf backend and Flutter client, enforce server-side tool calling and human-in-the-loop approval middleware, and stream responses with defineRemoteAction.",
    summaryFr:
      "Concevez des agents IA typés de bout en bout 100% en Dart. Partagez des schémas schemantic entre votre serveur Dart Shelf et votre client Flutter, sécurisez vos outils côté serveur avec validation humaine (toolApproval) et streamez les réponses via defineRemoteAction.",
    metaEn: "45 min | 8 Steps",
    metaFr: "45 min | 8 Étapes",
    datePublished: "2026-10-28",
    dateModified: "2026-11-04",
    keywords:
      "Full-Stack Agentic Dart, Genkit Dart, genkit, genkit_google_genai, genkit_shelf, genkit_middleware, schemantic, schemantic_builder, Dart AI Agents, Flutter AI Client, defineRemoteAction, defineFlow, defineTool, toolApproval, Human in the Loop AI, Dart Shelf Server, Gemini 2.5 Flash, Georges Byona, Georges Losingson, Byona Georges, glosings0n, @glosings0n, Losingson, Losings0n, @losingson, g-losingson, LosingTek, Losing Tek, FlutterFire Summer Camp, FlutterFire Camp",
    headerTitleEn: "Full-Stack Agentic Dart: Genkit Dart & Shelf",
    headerTitleFr: "Full-Stack Agentic Dart : Genkit Dart & Shelf",
    initialTimeLeft: "45 min left",
    footerRoleEn: "Author:",
    footerRoleFr: "Auteur :",
    footerTrackLabelEn: "Track:",
    footerTrackLabelFr: "Parcours :",
    footerTrackValue: "Developer Community | AI & Dart Engineering",
    copyrightYear: 2026,
  },
  {
    slug: "agentic-coding-flutter-mcp-skills",
    id: "card-agentic-coding-mcp",
    tags: [
      "Agentic Coding",
      "Dart MCP Server",
      "AGENTS.md & Skills",
      "Clean Architecture",
    ],
    titleEn:
      "Agentic Coding for Flutter: Mastering Dart MCP Server, AGENTS.md & Custom Skills",
    titleFr:
      "Agentic Coding pour Flutter : Maîtriser Dart MCP Server, AGENTS.md et les Skills Personnalisés",
    summaryEn:
      'Eliminate the "Verification Tax" of AI-assisted coding. Connect the official dart mcp-server to live analyzer diagnostics and hot reload, write a zero-drift AGENTS.md constitution, author reusable SKILL.md workflows, and build a custom architecture-guard MCP server in Dart.',
    summaryFr:
      'Éliminez la "Verification Tax" du développement assisté par IA. Connectez le serveur officiel dart mcp-server aux diagnostics de l\'analyseur et au Hot Reload, rédigez une constitution AGENTS.md sans dérive, créez des skills SKILL.md réutilisables et un serveur MCP sur mesure en Dart.',
    metaEn: "40 min | 8 Steps",
    metaFr: "40 min | 8 Étapes",
    datePublished: "2026-10-28",
    dateModified: "2026-11-04",
    keywords:
      "Agentic Coding for Flutter, Dart MCP Server, dart mcp-server, Model Context Protocol Flutter, AGENTS.md Flutter, SKILL.md Agent Skills, genkit_mcp Dart, Genkit Dart Middleware, Vibe Coding vs Agentic Engineering, AI Verification Tax, Flutter Clean Architecture AI Agent, Georges Byona, Georges Losingson, Byona Georges, glosings0n, @glosings0n, Losingson, Losings0n, @losingson, g-losingson, LosingTek, Losing Tek, FlutterFire Summer Camp, FlutterFire Camp",
    headerTitleEn:
      "Agentic Coding for Flutter: Mastering Dart MCP Server, AGENTS.md & Custom Skills",
    headerTitleFr:
      "Agentic Coding pour Flutter : Maîtriser Dart MCP Server, AGENTS.md et les Skills Personnalisés",
    initialTimeLeft: "40 min left",
    footerRoleEn: "Author:",
    footerRoleFr: "Auteur :",
    footerTrackLabelEn: "Track:",
    footerTrackLabelFr: "Parcours :",
    footerTrackValue: "Developer Community | Agentic Engineering",
    copyrightYear: 2026,
  },
  {
    slug: "hybrid-ai-firebase-litert-flutter",
    id: "card-hybrid-ai-flutter",
    tags: [
      "Hybrid AI",
      "Firebase AI Logic",
      "Genkit Dart",
      "flutter_edge_ai",
    ],
    titleEn:
      "Firebase AI Logic vs Genkit Dart vs LiteRT-LM: Hybrid AI Architecture & Smart Routing in Flutter",
    titleFr:
      "Firebase AI Logic vs Genkit Dart vs LiteRT-LM : Architecture IA Hybride et Routage Intelligent sur Flutter",
    summaryEn:
      "Navigate the 2026 Flutter AI landscape with a complete decision matrix, cost model, and security boundary guide. Combine client-side firebase_ai (protected by App Check), server-side Genkit Dart invariants, and offline flutter_edge_ai (formerly flutter_gemma) behind a single SmartHybridAiRouter.",
    summaryFr:
      "Maîtrisez les 3 architectures IA sur Flutter en 2026 grâce à une matrice de décision complète (coûts, latence, sécurité). Unifiez firebase_ai (avec App Check), vos flux serveur Genkit Dart et l'inférence locale hors ligne flutter_edge_ai (anciennement flutter_gemma) derrière un routeur intelligent SmartHybridAiRouter.",
    metaEn: "50 min | 8 Steps",
    metaFr: "50 min | 8 Étapes",
    datePublished: "2026-10-28",
    dateModified: "2026-11-04",
    keywords:
      "Firebase AI Logic, firebase_ai, Genkit Dart, genkit, LiteRT-LM, flutter_edge_ai, flutter_edge_ai_litertlm, flutter_gemma, Hybrid AI Architecture Flutter, Smart AI Router Flutter, Firebase App Check AI, Gemini Flash Latest, gemini-flash-latest, Server-Side Security Invariants, Edge AI vs Cloud AI Flutter, Georges Byona, Georges Losingson, Byona Georges, glosings0n, @glosings0n, Losingson, Losings0n, @losingson, g-losingson, LosingTek, Losing Tek, FlutterFire Summer Camp, FlutterFire Camp",
    headerTitleEn:
      "Firebase AI Logic vs Genkit Dart vs LiteRT-LM: Hybrid AI in Flutter",
    headerTitleFr:
      "Firebase AI Logic vs Genkit Dart vs LiteRT-LM : IA Hybride sur Flutter",
    initialTimeLeft: "50 min left",
    footerRoleEn: "Author:",
    footerRoleFr: "Auteur :",
    footerTrackLabelEn: "Track:",
    footerTrackLabelFr: "Parcours :",
    footerTrackValue: "Developer Community | Full-Stack & Edge AI",
    copyrightYear: 2026,
  },
  {
    slug: "apps-script-workspace-automation",
    id: "card-apps-script-workshop",
    tags: [
      "GDG Workspace Training",
      "Google Apps Script",
      "Workspace Automation",
      "Web App Dashboard",
    ],
    titleEn:
      "Automation with Google Apps Script Workshop | GDG - Google Workspace Training",
    titleFr:
      "Workshop Automatisation avec Google Apps Script | GDG - Formation Google Workspace",
    summaryEn:
      "Conceived for Day 5 of the intensive Google Workspace masterclass delivered across GDG Afrique Francophone, GDG Pointe-Noire, and GDG on Campus CUEA. Build 8 interconnected automations across Gmail, Forms, Sheets, Slides vector e-certificates, Calendar Meet office hours, Docs, and interactive Web Apps.",
    summaryFr:
      "Conçu pour le Jour 5 du parcours intensif Google Workspace dispensé auprès de GDG Afrique Francophone, GDG Pointe-Noire et GDG on Campus CUEA. Réalisez 8 automatisations interconnectées : Gmail, Forms, Sheets, e-certificats vectoriels Slides, créneaux Meet Calendar, Docs et Web Apps interactives.",
    metaEn: "60 min | 10 Steps",
    metaFr: "60 min | 10 Étapes",
    datePublished: "2026-10-29",
    dateModified: "2026-11-04",
    keywords:
      "Google Apps Script, Apps Script Automation, Google Workspace Training, GDG, GDG Afrique Francophone, GDG Pointe-Noire, GDG on Campus CUEA, SpreadsheetApp, GmailApp, DriveApp, SlidesApp, DocumentApp, FormApp, ContactsApp, CalendarApp, HtmlService, Web App Apps Script, Google Workspace Automation, Georges Byona, Georges Losingson, Byona Georges, glosings0n, @glosings0n, Losingson, Losings0n, @losingson, g-losingson, LosingTek, Losing Tek, FlutterFire Summer Camp, FlutterFire Camp",
    headerTitleEn: "Automation with Google Apps Script Workshop",
    headerTitleFr: "Workshop Automatisation avec Google Apps Script",
    initialTimeLeft: "60 min left",
    footerRoleEn: "Author:",
    footerRoleFr: "Auteur :",
    footerTrackLabelEn: "Track:",
    footerTrackLabelFr: "Parcours :",
    footerTrackValue: "Google Workspace Training",
    copyrightYear: 2026,
  },
];

export function getCodelabBySlug(slug: string): CodelabSummary | undefined {
  return CODELAB_CATALOG.find((item) => item.slug === slug);
}
