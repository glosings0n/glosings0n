import { FlutterFireCampWordmark, MusanTekWordmark } from "@repo/ui";
import { Callout } from "@/components/Callout";
import { CodeWindow } from "@/components/CodeWindow";
import type { CodelabDefinition } from "./types";

function Step1() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. Context & The &quot;Why&quot;: Escaping the Vibe-Coding Verification Tax</h3>        <p>
                            Over 79% of Flutter and Dart developers now use AI coding assistants daily. Yet across production mobile teams, a painful paradox has emerged: while raw code generation is faster than ever, engineers spend hours fixing hallucinated <code>pub.dev</code> APIs, unbounded <code>RenderFlex</code> layout overflows, leaked <code>BuildContext</code> references across async gaps, and broken layer boundaries where database DTOs leak directly into UI widgets.
                        </p>        <p>
                            This hidden productivity drain is known as <strong>The Verification Tax</strong>. It happens when developers rely on unconstrained <em>Vibe-Coding</em> (prompting an LLM in a vacuum without compiler grounding or architectural contracts) instead of <strong>Agentic Engineering</strong>.
                        </p>        <Callout variant={"info"} iconName={"info"} titleEn={"Core Thesis of Agentic Engineering"} titleFr={"Core Thesis of Agentic Engineering"}>
          <p>
                                    An AI coding agent is only as reliable as the tools it can invoke, the architectural constitution it must obey, and the deterministic verification loop that gates its output.
                                </p>
        </Callout>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>Engineering Dimension</th>                <th>Unconstrained Vibe-Coding</th>                <th>Deterministic Agentic Engineering</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>Compiler & Runtime Awareness</strong></td>                <td>Blind text prediction; guesses method signatures</td>                <td>Live AST & VM introspection via <code>dart mcp-server</code></td>
              </tr>              <tr>
                <td><strong>Architectural Boundaries</strong></td>                <td>Imports data/network classes directly inside Widgets</td>                <td>Governed by a root <code>AGENTS.md</code> constitution</td>
              </tr>              <tr>
                <td><strong>Context Window Hygiene</strong></td>                <td>Bloated prompts that degrade model reasoning</td>                <td>Modular on-demand <code>SKILL.md</code> procedural files</td>
              </tr>              <tr>
                <td><strong>Domain Guardrails</strong></td>                <td>Manual human code review after every prompt</td>                <td>Custom project MCP tools built with <code>genkit_mcp</code></td>
              </tr>              <tr>
                <td><strong>Definition of Done</strong></td>                <td>&quot;It looks plausible in the chat window&quot;</td>                <td><code>flutter analyze --fatal-infos</code> & <code>flutter test</code> pass</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>2. Learning Goals & What You Will Build</h3>        <p>
                            By the end of this hands-on codelab, you will design and verify a complete <strong>Agentic Flutter Engineering Workspace</strong>:
                        </p>        <ol>
          <li><strong>Wire the Official Dart & Flutter MCP Server (<code>dart mcp-server</code>):</strong> Connect your IDE or CLI coding agent to the Dart analyzer, pub package manager, live Widget Inspector, and stateful Hot Reload over the Model Context Protocol.</li>          <li><strong>Engineer a Zero-Drift <code>AGENTS.md</code> Constitution:</strong> Write a concise, high-signal project constitution enforcing strict Domain/Application/Presentation separation, immutable entities, explicit <code>Result&lt;T&gt;</code> error handling, and design token invariants.</li>          <li><strong>Build On-Demand Procedural Skills (<code>SKILL.md</code>):</strong> Package complex, multi-step feature scaffolding rules into <code>.agents/skills/flutter-clean-feature/SKILL.md</code> so agents load procedural instructions only when needed.</li>          <li><strong>Implement a Governed Flutter Telemetry Feature:</strong> Build a 100% self-contained Flutter application using <code>flutter_bloc</code> and Dart 3 sealed classes that passes strict static analysis with zero warnings.</li>          <li><strong>Build a Custom Architecture-Guard MCP Server in Dart (<code>genkit_mcp</code>):</strong> Write a custom MCP server in Dart that exposes a live <code>checkLayerImports</code> tool and a <code>project://design-tokens</code> resource to any MCP-compatible agent.</li>          <li><strong>Enforce Automated Verification Loops:</strong> Write deterministic widget tests and cross-platform pre-commit verification scripts that prevent broken agent code from ever landing in your branch.</li>
        </ol>        <h3>3. Prerequisites & System Requirements</h3>        <ul>
          <li><strong>Dart SDK:</strong> <code>&gt;=3.8.0</code> (includes the built-in <code>dart mcp-server</code> command).</li>          <li><strong>Flutter SDK:</strong> <code>&gt;=3.29.0</code> (stable channel recommended).</li>          <li><strong>Git:</strong> <code>&gt;=2.40.0</code> for workspace state inspection.</li>          <li><strong>MCP-Compatible Agent Host:</strong> Google Antigravity, Gemini CLI, Cursor, VS Code with GitHub Copilot Agent mode, or Claude Code.</li>
        </ul>        <p>
                            Run the pre-flight verification commands below in your terminal to confirm your local SDK toolchain is ready:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Contexte & Pourquoi : Échapper à la Taxe de Vérification du Vibe-Coding</h3>        <p>
                            Plus de 79 % des développeurs Flutter et Dart utilisent aujourd&apos;hui des assistants IA au quotidien. Pourtant, au sein des équipes mobiles en production, un paradoxe coûteux est apparu : bien que la génération brute de code soit plus rapide que jamais, les ingénieurs passent des heures à corriger des APIs <code>pub.dev</code> hallucinées, des erreurs de rendu <code>RenderFlex</code> non bornées, des fuites de <code>BuildContext</code> après des appels asynchrones, et des violations d&apos;architecture où les DTOs de base de données fuient directement dans les widgets UI.
                        </p>        <p>
                            Cette perte de productivité cachée s&apos;appelle la <strong>Taxe de Vérification (Verification Tax)</strong>. Elle survient lorsque les développeurs s&apos;appuient sur du <em>Vibe-Coding</em> non contraint (solliciter un LLM à l&apos;aveugle sans ancrage dans le compilateur ni contrat architectural) au lieu de pratiquer l&apos;<strong>Agentic Engineering</strong>.
                        </p>        <Callout variant={"info"} iconName={"info"} titleEn={"Thèse Centrale de l'Agentic Engineering"} titleFr={"Thèse Centrale de l'Agentic Engineering"}>
          <p>
                                    Un agent de programmation IA n&apos;est fiable que dans la mesure des outils qu&apos;il peut invoquer, de la constitution architecturale à laquelle il obéit, et de la boucle de vérification déterministe qui valide son code.
                                </p>
        </Callout>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>Dimension d&apos;Ingénierie</th>                <th>Vibe-Coding Non Contraint</th>                <th>Agentic Engineering Déterministe</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>Conscience du Compilateur & VM</strong></td>                <td>Prédiction textuelle à l&apos;aveugle ; devine les signatures</td>                <td>Introspection AST & VM en direct via <code>dart mcp-server</code></td>
              </tr>              <tr>
                <td><strong>Frontières Architecturales</strong></td>                <td>Importe les classes réseau/données directement dans les Widgets</td>                <td>Gouverné par une constitution racine <code>AGENTS.md</code></td>
              </tr>              <tr>
                <td><strong>Hygiène de la Fenêtre de Contexte</strong></td>                <td>Prompts surchargés qui dégradent le raisonnement</td>                <td>Fichiers procéduraux modulaires <code>SKILL.md</code> chargés à la demande</td>
              </tr>              <tr>
                <td><strong>Garde-fous Métier</strong></td>                <td>Revue manuelle humaine après chaque prompt</td>                <td>Outils MCP personnalisés construits avec <code>genkit_mcp</code></td>
              </tr>              <tr>
                <td><strong>Définition de &quot;Terminé&quot;</strong></td>                <td>&quot;Le code a l&apos;air plausible dans le chat&quot;</td>                <td><code>flutter analyze --fatal-infos</code> & <code>flutter test</code> passent à 100 %</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>2. Objectifs & Ce que vous allez construire</h3>        <p>
                            À la fin de ce codelab pratique, vous aurez conçu et vérifié un <strong>Environnement Flutter d&apos;Agentic Engineering</strong> complet :
                        </p>        <ol>
          <li><strong>Connecter le Serveur MCP Officiel Dart & Flutter (<code>dart mcp-server</code>) :</strong> Relier votre IDE ou agent CLI à l&apos;analyseur Dart, au gestionnaire de paquets pub, au Widget Inspector en direct et au Hot Reload via le Model Context Protocol.</li>          <li><strong>Concevoir une Constitution <code>AGENTS.md</code> Zéro-Dérive :</strong> Rédiger une constitution de projet concise et déterministe imposant la séparation Domain/Application/Presentation, l&apos;immuabilité des entités, la gestion d&apos;erreurs explicite via <code>Result&lt;T&gt;</code> et le respect des jetons de design.</li>          <li><strong>Créer des Skills Procéduraux à la Demande (<code>SKILL.md</code>) :</strong> Encapsuler les règles de génération de fonctionnalités dans <code>.agents/skills/flutter-clean-feature/SKILL.md</code> afin que l&apos;agent ne les charge qu&apos;au moment opportun.</li>          <li><strong>Implémenter une Feature Flutter Gouvernée :</strong> Construire une application Flutter de télémétrie 100 % autonome utilisant <code>flutter_bloc</code> et les classes scellées Dart 3, compilant sans aucun avertissement d&apos;analyse statique.</li>          <li><strong>Construire un Serveur MCP d&apos;Architecture en Dart (<code>genkit_mcp</code>) :</strong> Écrire un serveur MCP personnalisé en Dart exposant un outil <code>checkLayerImports</code> et une ressource <code>project://design-tokens</code> à tout agent compatible MCP.</li>          <li><strong>Imposer des Boucles de Vérification Automatisées :</strong> Écrire des tests de widgets déterministes et des scripts multiplateformes qui empêchent tout code défectueux d&apos;entrer dans votre branche.</li>
        </ol>        <h3>3. Prérequis & Configuration Système</h3>        <ul>
          <li><strong>SDK Dart :</strong> <code>&gt;=3.8.0</code> (inclut nativement la commande <code>dart mcp-server</code>).</li>          <li><strong>SDK Flutter :</strong> <code>&gt;=3.29.0</code> (canal stable recommandé).</li>          <li><strong>Git :</strong> <code>&gt;=2.40.0</code> pour l&apos;inspection de l&apos;espace de travail.</li>          <li><strong>Hôte Agent Compatible MCP :</strong> Google Antigravity, Gemini CLI, Cursor, VS Code avec GitHub Copilot Agent, ou Claude Code.</li>
        </ul>        <p>
                            Exécutez les commandes de vérification pré-vol ci-dessous dans votre terminal pour confirmer que votre chaîne d&apos;outils SDK est prête :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Pre-Flight SDK & MCP Check (macOS / Linux / Windows PowerShell)"}
        lang={"SH / PS1"}
        code={"# 1. Verify Flutter & Dart SDK versions (Dart >= 3.8.0 required)\r\nflutter --version\r\ndart --version\r\n\r\n# 2. Verify the built-in Dart MCP Server binary responds\r\ndart mcp-server --help\r\n\r\n# 3. Create a clean workspace for this codelab\r\nflutter create --empty agentic_telemetry_demo\r\ncd agentic_telemetry_demo\r\nflutter pub add flutter_bloc"}
      />
    </>
  );
}

function Step2() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Without tool grounding, an LLM treats Dart like untyped plain text. It frequently invents named parameters that do not exist in your installed version of <code>flutter_bloc</code> or <code>MaterialApp</code>, and it cannot see runtime layout exceptions thrown inside your running emulator.
                        </p>        <p>
                            Starting with Dart 3.8, the Dart SDK ships with a first-party Model Context Protocol server invoked via <code>dart mcp-server</code>. It bridges your coding agent directly to the Dart Analysis Server, the <code>pub</code> package manager, and the Dart Tooling Daemon (DTD) connected to your running Flutter VM.
                        </p>        <h3>The 5 Live Superpowers of <code>dart mcp-server</code></h3>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>MCP Tool Category</th>                <th>Exposed MCP Tool Name</th>                <th>What It Replaces in Agent Workflows</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>Static Analysis</strong></td>                <td><code>analyze_files</code></td>                <td>Eliminates hallucinated imports, type mismatches, and unused variables before you even read the diff.</td>
              </tr>              <tr>
                <td><strong>AST Symbol Lookup</strong></td>                <td><code>signature_help</code> / <code>hover</code></td>                <td>Lets the agent inspect exact constructor parameters and doc comments from your local <code>.pub-cache</code>.</td>
              </tr>              <tr>
                <td><strong>Package Management</strong></td>                <td><code>pub</code> / <code>pub_dev_search</code></td>                <td>Searches <code>pub.dev</code> for current package versions and executes <code>flutter pub add</code> safely.</td>
              </tr>              <tr>
                <td><strong>Runtime Inspection</strong></td>                <td><code>get_widget_tree</code> / <code>get_runtime_errors</code></td>                <td>Reads live <code>RenderFlex</code> overflow trees and active stack traces directly from the running Flutter app.</td>
              </tr>              <tr>
                <td><strong>Stateful Iteration</strong></td>                <td><code>hot_reload</code> / <code>hot_restart</code></td>                <td>Applies edits to the running VM in sub-second cycles and verifies that runtime errors disappear.</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>1. Register <code>dart mcp-server</code> in Your Agent Host</h3>        <p>
                            Create the MCP configuration file in your project root for your preferred agent environment (such as <code>.gemini/settings.json</code> for Gemini CLI / Google Antigravity, or <code>.cursor/mcp.json</code> for Cursor):
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Sans ancrage d&apos;outils, un LLM traite le code Dart comme du simple texte non typé. Il invente régulièrement des paramètres nommés qui n&apos;existent pas dans votre version installée de <code>flutter_bloc</code> ou <code>MaterialApp</code>, et il est aveugle aux exceptions de rendu déclenchées dans votre émulateur en cours d&apos;exécution.
                        </p>        <p>
                            Depuis Dart 3.8, le SDK Dart intègre nativement un serveur officiel Model Context Protocol accessible via <code>dart mcp-server</code>. Il connecte directement votre agent de codage au serveur d&apos;analyse Dart, au gestionnaire de paquets <code>pub</code>, ainsi qu&apos;au Dart Tooling Daemon (DTD) relié à la machine virtuelle Flutter active.
                        </p>        <h3>Les 5 Super-Pouvoirs en Direct de <code>dart mcp-server</code></h3>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>Catégorie d&apos;Outil MCP</th>                <th>Outil MCP Exposé</th>                <th>Ce qu&apos;il remplace dans le flux de l&apos;agent</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>Analyse Statique</strong></td>                <td><code>analyze_files</code></td>                <td>Élimine les imports hallucinés, erreurs de typage et variables inutilisées avant même la lecture du diff.</td>
              </tr>              <tr>
                <td><strong>Résolution AST</strong></td>                <td><code>signature_help</code> / <code>hover</code></td>                <td>Permet à l&apos;agent d&apos;inspecter les constructeurs exacts et la documentation depuis votre <code>.pub-cache</code> local.</td>
              </tr>              <tr>
                <td><strong>Gestion de Paquets</strong></td>                <td><code>pub</code> / <code>pub_dev_search</code></td>                <td>Recherche les versions actuelles sur <code>pub.dev</code> et exécute <code>flutter pub add</code> proprement.</td>
              </tr>              <tr>
                <td><strong>Inspection Runtime</strong></td>                <td><code>get_widget_tree</code> / <code>get_runtime_errors</code></td>                <td>Lit l&apos;arbre des widgets et les erreurs <code>RenderFlex</code> directement depuis l&apos;application Flutter active.</td>
              </tr>              <tr>
                <td><strong>Itération Stateful</strong></td>                <td><code>hot_reload</code> / <code>hot_restart</code></td>                <td>Applique les modifications à la VM active en moins d&apos;une seconde et vérifie la disparition des erreurs.</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>1. Enregistrer <code>dart mcp-server</code> dans votre Hôte Agent</h3>        <p>
                            Créez le fichier de configuration MCP à la racine de votre projet pour votre environnement d&apos;agent (par exemple <code>.gemini/settings.json</code> pour Gemini CLI / Google Antigravity, ou <code>.cursor/mcp.json</code> pour Cursor) :
                        </p>
      </div>
      <CodeWindow
        filename={".gemini/settings.json | Workspace MCP Server Configuration"}
        lang={"JSON"}
        code={"{\r\n  \"mcpServers\": {\r\n    \"dart\": {\r\n      \"command\": \"dart\",\r\n      \"args\": [\r\n        \"mcp-server\",\r\n        \"--force-roots-fallback\"\r\n      ],\r\n      \"env\": {}\r\n    }\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <Callout variant={"warning"} iconName={"warning"} titleEn={"Why Pass --force-roots-fallback?"} titleFr={"Why Pass --force-roots-fallback?"}>
          <p>
                                    Some CLI and editor MCP clients do not yet implement the MCP <code>roots/list</code> capability natively. Passing <code>--force-roots-fallback</code> allows the agent to register workspace roots dynamically via tool calls so <code>analyze_files</code> and <code>pub</code> always resolve your project directory accurately.
                                </p>
        </Callout>        <h3>2. Launching Flutter with the Dart Tooling Daemon (DTD)</h3>        <p>
                            When you run your Flutter app during an agentic coding session, pass <code>--print-dtd</code> so your agent (or IDE) can attach to the live VM service and inspect the widget tree or trigger Hot Reloads:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <Callout variant={"warning"} iconName={"warning"} titleEn={"Pourquoi passer l'argument --force-roots-fallback ?"} titleFr={"Pourquoi passer l'argument --force-roots-fallback ?"}>
          <p>
                                    Certains clients MCP en ligne de commande ou éditeurs n&apos;implémentent pas encore nativement la capacité MCP <code>roots/list</code>. L&apos;option <code>--force-roots-fallback</code> permet à l&apos;agent d&apos;enregistrer dynamiquement la racine du projet via un appel d&apos;outil afin que <code>analyze_files</code> et <code>pub</code> ciblent toujours le bon dossier.
                                </p>
        </Callout>        <h3>2. Lancer Flutter avec le Dart Tooling Daemon (DTD)</h3>        <p>
                            Lorsque vous lancez votre application Flutter pendant une session de codage agentique, passez le drapeau <code>--print-dtd</code> pour permettre à votre agent d&apos;inspecter l&apos;arbre de widgets ou de déclencher un Hot Reload :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Launch Flutter with DTD URI Exposed for MCP"}
        lang={"BASH"}
        code={"# Start Flutter on your target device/emulator and print the DTD connection URI\r\nflutter run --print-dtd\r\n\r\n# Example output:\r\n# The Dart Tooling Daemon is listening on ws://127.0.0.1:58432/AbCdEfGhIjKl=/\r\n# Your agent passes this URI to the `connect_dart_tooling_daemon` MCP tool!"}
      />
    </>
  );
}

function Step3() {
  return (
    <>
      <div className={"lang-en"}>
        <p><code>dart mcp-server</code> tells the agent whether your code <em>compiles</em>, but it does not tell the agent how your team <em>architects</em> software. Without explicit architectural rules, an agent will happily mix HTTP calls inside <code>StatefulWidget.build()</code>, hardcode hex colors across 40 files, or swallow exceptions with empty <code>catch (_) {"{"}{"}"}</code> blocks.
                        </p>        <p><code>AGENTS.md</code> is the open standard for repository-level instructions read automatically at the start of every session by modern coding agents. Think of <code>AGENTS.md</code> as a <strong>compiler constitution for agent behavior</strong>: it must be concise, unambiguous, and strictly focused on global invariants that apply to <em>every</em> task in the repository.
                        </p>        <h3>Anatomy of a High-Signal Flutter <code>AGENTS.md</code></h3>        <ul>
          <li><strong>Keep it under 150 lines:</strong> Every token in <code>AGENTS.md</code> is injected into every conversation turn. Put universal invariants in <code>AGENTS.md</code> and move task-specific playbooks into modular <code>SKILL.md</code> files (Step 4).</li>          <li><strong>Define Strict Layer Dependency Direction:</strong> Explicitly forbid <code>lib/domain/</code> from importing <code>package:flutter/</code> or data-layer DTOs.</li>          <li><strong>Mandate Exhaustive Pattern Matching:</strong> Require Dart 3 <code>sealed class</code> hierarchies for states and results so the compiler forces exhaustive <code>switch</code> expressions in widgets.</li>          <li><strong>Define the Verification Gate:</strong> Instruct the agent that no task is complete until <code>analyze_files</code> (or <code>flutter analyze --fatal-infos</code>) and <code>flutter test</code> return zero issues.</li>
        </ul>        <p>
                            Create the following <code>AGENTS.md</code> file at the root of your <code>agentic_telemetry_demo</code> workspace:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p><code>dart mcp-server</code> indique à l&apos;agent si votre code <em>compile</em>, mais ne lui dit pas comment votre équipe <em>architecture</em> ses logiciels. Sans règles architecturales explicites, un agent mélangera volontiers des appels HTTP directement dans <code>StatefulWidget.build()</code>, codera en dur des couleurs hexadécimales dans 40 fichiers, ou masquera les exceptions avec des blocs <code>catch (_) {"{"}{"}"}</code> vides.
                        </p>        <p><code>AGENTS.md</code> est le standard ouvert d&apos;instructions au niveau du dépôt, lu automatiquement au début de chaque session par les agents de codage modernes. Considérez <code>AGENTS.md</code> comme une <strong>constitution de compilateur pour le comportement de l&apos;agent</strong> : elle doit être concise, sans ambiguïté et strictement concentrée sur les invariants globaux qui s&apos;appliquent à <em>chaque</em> tâche du dépôt.
                        </p>        <h3>Anatomie d&apos;un <code>AGENTS.md</code> Flutter à Fort Signal</h3>        <ul>
          <li><strong>Rester sous les 150 lignes :</strong> Chaque jeton de <code>AGENTS.md</code> est injecté à chaque tour de conversation. Placez uniquement les invariants universels dans <code>AGENTS.md</code> et déportez les procédures spécifiques dans des fichiers modulaires <code>SKILL.md</code> (Étape 4).</li>          <li><strong>Définir la Direction Stricte des Dépendances :</strong> Interdire explicitement à <code>lib/domain/</code> d&apos;importer <code>package:flutter/</code> ou des DTOs de la couche de données.</li>          <li><strong>Imposer le Pattern Matching Exhaustif :</strong> Exiger des hiérarchies <code>sealed class</code> Dart 3 pour les états et résultats afin que le compilateur impose des expressions <code>switch</code> exhaustives dans les widgets.</li>          <li><strong>Définir la Porte de Vérification :</strong> Instruire l&apos;agent qu&apos;aucune tâche n&apos;est terminée tant que <code>analyze_files</code> (ou <code>flutter analyze --fatal-infos</code>) et <code>flutter test</code> ne retournent pas zéro erreur.</li>
        </ul>        <p>
                            Créez le fichier <code>AGENTS.md</code> suivant à la racine de votre projet <code>agentic_telemetry_demo</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"AGENTS.md | Root Architectural Constitution for Flutter Agents"}
        lang={"MARKDOWN"}
        code={"# AGENTS.md | Flutter & Dart Engineering Constitution\r\n\r\nThese architectural and verification rules are mandatory across all files in this repository.\r\n\r\n## 1. Strict Layered Architecture & Dependency Rule\r\n- `lib/domain/`: Pure Dart only. Contains immutable entities, value objects, `sealed class Result<T>`, and `abstract interface class` repository contracts.\r\n  - FORBIDDEN in `lib/domain/`: Never import `package:flutter/...`, `package:flutter_bloc/...`, HTTP clients, or JSON serialization packages.\r\n- `lib/application/`: State management (`Cubit` / `Bloc`) and use-case orchestration.\r\n  - Every state hierarchy MUST be a `sealed class` with `final class` subtypes (`Initial`, `Loading`, `Loaded`, `Error`).\r\n- `lib/main.dart` & `lib/presentation/`: Flutter widgets consuming `Cubit`/`Bloc` states via exhaustive Dart 3 `switch` expressions.\r\n  - Widgets MUST NOT instantiate repositories directly or perform raw I/O inside `build()`.\r\n\r\n## 2. Error Handling & Type Safety Invariants\r\n- Never throw raw strings or swallow exceptions with empty `catch (_) {}` blocks.\r\n- All repository methods that can fail MUST return `Future<Result<T>>` (`Success<T>` or `Failure<T>` with `message` and `code`).\r\n- Always use `const` constructors wherever possible and enable `prefer_const_constructors`.\r\n\r\n## 3. UI Design Tokens & Accessibility\r\n- Surface Primary: `Color(0xFF070A13)` | Surface Card: `Color(0xFF0F1424)` | Border: `Color(0xFF202B46)`\r\n- Accent Cyan: `Color(0xFF00B0FF)` | Accent Blue: `Color(0xFF02569B)`\r\n- Status Nominal: `Color(0xFF10B981)` | Degraded: `Color(0xFFF59E0B)` | Critical: `Color(0xFFEF4444)`\r\n- Zero gradients: use solid fills and crisp `1px` borders (`Border.all(color: Color(0xFF202B46))`).\r\n- Every interactive `IconButton` or action button MUST include a stable `Key(...)` for deterministic widget testing and a descriptive `tooltip`.\r\n\r\n## 4. Mandatory MCP & Verification Workflow\r\n1. Before adding any dependency, query `pub_dev_search` via the Dart MCP server.\r\n2. After creating or modifying any Dart file, run the `analyze_files` MCP tool (or `flutter analyze --fatal-infos`).\r\n3. Never report a task as finished until `flutter analyze --fatal-infos` and `flutter test` pass with 0 warnings and 0 failures."}
      />
    </>
  );
}

function Step4() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            A common mistake when adopting AI agents is dumping 3,000 lines of feature templates, database migration guides, release checklists, and widget testing recipes into <code>AGENTS.md</code>. When your root instruction file grows too large, the agent suffers from <strong>instruction dilution</strong> (attention degradation in the middle of long prompts) and burns unnecessary context tokens on every single chat turn.
                        </p>        <p>
                            The solution is <strong>Agent Skills</strong>: self-contained folders inside <code>.agents/skills/&lt;skill-name&gt;/SKILL.md</code>. Each skill begins with a compact YAML frontmatter containing only <code>name</code> and <code>description</code>. At startup, the agent reads <em>only</em> the 2-line YAML frontmatter of each skill. When your prompt matches a skill&apos;s description (for example, scaffolding a new Clean Architecture feature), the agent dynamically loads the full <code>SKILL.md</code> body into context!
                        </p>        <Callout variant={"success"} iconName={"success"} titleEn={"Rule of Thumb: AGENTS.md vs. SKILL.md"} titleFr={"Rule of Thumb: AGENTS.md vs. SKILL.md"}>
          <p>
                                    Put <strong>&quot;What must always be true&quot;</strong> (invariants, forbidden imports, verification gates) in <code>AGENTS.md</code>. Put <strong>&quot;How to execute a specific workflow step-by-step&quot;</strong> (scaffolding a feature, writing FFI bindings, migrating tests) in <code>.agents/skills/&lt;name&gt;/SKILL.md</code>.
                                </p>
        </Callout>        <h3>Create the <code>flutter-clean-feature</code> Skill</h3>        <p>
                            Create the file <code>.agents/skills/flutter-clean-feature/SKILL.md</code> in your workspace:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Une erreur fréquente lors de l&apos;adoption d&apos;agents IA consiste à déverser 3 000 lignes de modèles de fonctionnalités, de guides de migration SQLite, de checklists de publication et de recettes de tests dans <code>AGENTS.md</code>. Lorsque votre fichier d&apos;instructions racine devient trop volumineux, l&apos;agent souffre de <strong>dilution d&apos;instructions</strong> (dégradation de l&apos;attention au milieu de longs contextes) et consomme inutilement des milliers de jetons à chaque message.
                        </p>        <p>
                            La solution repose sur les <strong>Agent Skills</strong> : des dossiers modulaires situés dans <code>.agents/skills/&lt;nom-du-skill&gt;/SKILL.md</code>. Chaque skill commence par un en-tête YAML compact contenant uniquement <code>name</code> et <code>description</code>. Au démarrage, l&apos;agent ne lit <em>que</em> ces deux lignes. Lorsque votre demande correspond à la description du skill (par exemple, générer une nouvelle fonctionnalité Clean Architecture), l&apos;agent charge dynamiquement le contenu complet de <code>SKILL.md</code> !
                        </p>        <Callout variant={"success"} iconName={"success"} titleEn={"Règle d'Or : AGENTS.md vs SKILL.md"} titleFr={"Règle d'Or : AGENTS.md vs SKILL.md"}>
          <p>
                                    Placez <strong>&quot;Ce qui doit toujours être vrai&quot;</strong> (invariants, imports interdits, portes de validation) dans <code>AGENTS.md</code>. Placez <strong>&quot;Comment exécuter une procédure étape par étape&quot;</strong> (créer une feature, générer des bindings FFI, écrire des tests) dans <code>.agents/skills/&lt;nom&gt;/SKILL.md</code>.
                                </p>
        </Callout>        <h3>Créer le Skill <code>flutter-clean-feature</code></h3>        <p>
                            Créez le fichier <code>.agents/skills/flutter-clean-feature/SKILL.md</code> dans votre espace de travail :
                        </p>
      </div>
      <CodeWindow
        filename={".agents/skills/flutter-clean-feature/SKILL.md | On-Demand Procedural Skill"}
        lang={"MARKDOWN"}
        code={"---\r\nname: flutter-clean-feature\r\ndescription: Step-by-step playbook for scaffolding, wiring, and widget-testing a layered Flutter feature with pure Dart domain models, Cubit state management, and exhaustive switch expressions. Use whenever creating or refactoring a Flutter feature.\r\n---\r\n\r\n# Flutter Clean Feature Scaffolding Playbook\r\n\r\nFollow these exact steps in order whenever asked to create or update a feature:\r\n\r\n## Step 1: Pure Domain Layer (`lib/domain/<feature>.dart`)\r\n1. Define immutable entities with `final` fields, `const` constructors, and `copyWith`.\r\n2. Compute derived domain properties (such as `HealthStatus`) via pure getters on the entity.\r\n3. Define repository contracts as `abstract interface class` returning `Future<Result<T>>`.\r\n4. Verify zero `package:flutter/` imports in this file.\r\n\r\n## Step 2: Application State & Cubit (`lib/application/<feature>_cubit.dart`)\r\n1. Declare a `sealed class <Feature>State` with `const` constructor.\r\n2. Create four `final class` subtypes: `Initial`, `Loading`, `Loaded`, and `Error`.\r\n3. In the `Cubit`, emit `Loading`, await the repository's `Result<T>`, and use an exhaustive `switch (result)` with pattern destructuring (`case Success(:final value):`, `case Failure(:final message, :final code):`).\r\n\r\n## Step 3: Presentation Layer (`lib/main.dart` or `lib/presentation/`)\r\n1. Inject the `Cubit` via `BlocProvider` and render state via `BlocBuilder`.\r\n2. Use an exhaustive `switch (state)` expression inside `BlocBuilder.builder`.\r\n3. Attach explicit `const Key('...')` identifiers to loading indicators, status badges, and action buttons.\r\n\r\n## Step 4: Mandatory Verification\r\n1. Write a `testWidgets` test in `test/<feature>_widget_test.dart` covering both the nominal `Loaded` path and the `Error` recovery path.\r\n2. Call `analyze_files` via the Dart MCP server and run `flutter test`."}
      />
    </>
  );
}

function Step5() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            With <code>dart mcp-server</code> active, <code>AGENTS.md</code> at the project root, and <code>.agents/skills/flutter-clean-feature/SKILL.md</code> registered, let us examine the exact 4-file Flutter application produced under these constraints. Every file below is 100% self-contained and verified against <code>flutter analyze --fatal-infos</code>.
                        </p>        <h3>1. Project Dependencies (<code>pubspec.yaml</code>)</h3>        <p>
                            Ensure your <code>pubspec.yaml</code> declares Dart <code>^3.8.0</code> and <code>flutter_bloc</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Avec <code>dart mcp-server</code> actif, <code>AGENTS.md</code> à la racine du projet et <code>.agents/skills/flutter-clean-feature/SKILL.md</code> enregistré, examinons l&apos;application Flutter complète en 4 fichiers produite sous ces contraintes. Chaque fichier ci-dessous est 100 % autonome et vérifié avec <code>flutter analyze --fatal-infos</code>.
                        </p>        <h3>1. Dépendances du Projet (<code>pubspec.yaml</code>)</h3>        <p>
                            Assurez-vous que votre fichier <code>pubspec.yaml</code> déclare Dart <code>^3.8.0</code> et <code>flutter_bloc</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"pubspec.yaml | Governed Flutter Workspace Manifest"}
        lang={"YAML"}
        code={"name: agentic_telemetry_demo\r\ndescription: Deterministic Flutter feature governed by AGENTS.md, Skills, and Dart MCP.\r\npublish_to: 'none'\r\nversion: 1.0.0+1\r\n\r\nenvironment:\r\n  sdk: ^3.8.0\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  flutter_bloc:\r\n\r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n  flutter_lints:\r\n\r\nflutter:\r\n  uses-material-design: true"}
      />
      <div className={"lang-en"}>
        <h3>2. Pure Dart Domain Layer (<code>lib/domain/telemetry_snapshot.dart</code>)</h3>        <p>
                            Notice how this file obeys Section 1 and Section 2 of <code>AGENTS.md</code>: it has zero Flutter or third-party imports, defines a sealed <code>Result&lt;T&gt;</code> algebraic type, computes <code>HealthStatus</code> deterministically, and exposes an <code>abstract interface class TelemetryRepository</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Couche Domaine Pure Dart (<code>lib/domain/telemetry_snapshot.dart</code>)</h3>        <p>
                            Observez comment ce fichier respecte les sections 1 et 2 de <code>AGENTS.md</code> : il ne contient aucun import Flutter ou tiers, définit un type algébrique scellé <code>Result&lt;T&gt;</code>, calcule <code>HealthStatus</code> de façon déterministe et expose un contrat <code>abstract interface class TelemetryRepository</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/domain/telemetry_snapshot.dart | Pure Domain Entities & Contracts"}
        lang={"DART"}
        code={"// lib/domain/telemetry_snapshot.dart\r\n// Pure Dart domain layer: zero Flutter UI or platform imports allowed.\r\n\r\nsealed class Result<T> {\r\n  const Result();\r\n}\r\n\r\nfinal class Success<T> extends Result<T> {\r\n  final T value;\r\n  const Success(this.value);\r\n}\r\n\r\nfinal class Failure<T> extends Result<T> {\r\n  final String message;\r\n  final String code;\r\n  const Failure({required this.message, required this.code});\r\n}\r\n\r\nenum HealthStatus { nominal, degraded, critical }\r\n\r\nfinal class TelemetrySnapshot {\r\n  final String nodeId;\r\n  final int latencyMs;\r\n  final double memoryUsageMb;\r\n  final int activeIsolates;\r\n  final DateTime recordedAt;\r\n\r\n  const TelemetrySnapshot({\r\n    required this.nodeId,\r\n    required this.latencyMs,\r\n    required this.memoryUsageMb,\r\n    required this.activeIsolates,\r\n    required this.recordedAt,\r\n  });\r\n\r\n  HealthStatus get status {\r\n    if (latencyMs >= 500 || memoryUsageMb >= 512.0) {\r\n      return HealthStatus.critical;\r\n    }\r\n    if (latencyMs >= 200 || memoryUsageMb >= 256.0) {\r\n      return HealthStatus.degraded;\r\n    }\r\n    return HealthStatus.nominal;\r\n  }\r\n\r\n  TelemetrySnapshot copyWith({\r\n    String? nodeId,\r\n    int? latencyMs,\r\n    double? memoryUsageMb,\r\n    int? activeIsolates,\r\n    DateTime? recordedAt,\r\n  }) {\r\n    return TelemetrySnapshot(\r\n      nodeId: nodeId ?? this.nodeId,\r\n      latencyMs: latencyMs ?? this.latencyMs,\r\n      memoryUsageMb: memoryUsageMb ?? this.memoryUsageMb,\r\n      activeIsolates: activeIsolates ?? this.activeIsolates,\r\n      recordedAt: recordedAt ?? this.recordedAt,\r\n    );\r\n  }\r\n}\r\n\r\nabstract interface class TelemetryRepository {\r\n  Future<Result<TelemetrySnapshot>> fetchLatestSnapshot({\r\n    required String nodeId,\r\n  });\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Application Layer Cubit & Sealed States (<code>lib/application/telemetry_cubit.dart</code>)</h3>        <p>
                            Next, create <code>lib/application/telemetry_cubit.dart</code>. It uses Dart 3 pattern matching (<code>case Success(:final value):</code>) to transition cleanly from <code>TelemetryLoading</code> to either <code>TelemetryLoaded</code> or <code>TelemetryError</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Couche Application Cubit & États Scellés (<code>lib/application/telemetry_cubit.dart</code>)</h3>        <p>
                            Créez ensuite <code>lib/application/telemetry_cubit.dart</code>. Il utilise la déstructuration par motif de Dart 3 (<code>case Success(:final value):</code>) pour passer proprement de <code>TelemetryLoading</code> à <code>TelemetryLoaded</code> ou <code>TelemetryError</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/application/telemetry_cubit.dart | Sealed State & Cubit Orchestration"}
        lang={"DART"}
        code={"// lib/application/telemetry_cubit.dart\r\nimport 'package:flutter_bloc/flutter_bloc.dart';\r\nimport '../domain/telemetry_snapshot.dart';\r\n\r\nsealed class TelemetryState {\r\n  const TelemetryState();\r\n}\r\n\r\nfinal class TelemetryInitial extends TelemetryState {\r\n  const TelemetryInitial();\r\n}\r\n\r\nfinal class TelemetryLoading extends TelemetryState {\r\n  const TelemetryLoading();\r\n}\r\n\r\nfinal class TelemetryLoaded extends TelemetryState {\r\n  final TelemetrySnapshot snapshot;\r\n  const TelemetryLoaded(this.snapshot);\r\n}\r\n\r\nfinal class TelemetryError extends TelemetryState {\r\n  final String message;\r\n  final String code;\r\n  const TelemetryError({required this.message, required this.code});\r\n}\r\n\r\nclass InMemoryTelemetryRepository implements TelemetryRepository {\r\n  bool simulateFailure;\r\n  final Duration latency;\r\n\r\n  InMemoryTelemetryRepository({\r\n    this.simulateFailure = false,\r\n    this.latency = const Duration(milliseconds: 120),\r\n  });\r\n\r\n  @override\r\n  Future<Result<TelemetrySnapshot>> fetchLatestSnapshot({\r\n    required String nodeId,\r\n  }) async {\r\n    await Future<void>.delayed(latency);\r\n    if (simulateFailure) {\r\n      return const Failure<TelemetrySnapshot>(\r\n        message: 'Telemetry node unreachable over local socket.',\r\n        code: 'ERR_NODE_TIMEOUT',\r\n      );\r\n    }\r\n    return Success<TelemetrySnapshot>(\r\n      TelemetrySnapshot(\r\n        nodeId: nodeId,\r\n        latencyMs: 42,\r\n        memoryUsageMb: 118.4,\r\n        activeIsolates: 3,\r\n        recordedAt: DateTime.utc(2026, 10, 28, 12, 0),\r\n      ),\r\n    );\r\n  }\r\n}\r\n\r\nclass TelemetryCubit extends Cubit<TelemetryState> {\r\n  final TelemetryRepository _repository;\r\n\r\n  TelemetryCubit(this._repository) : super(const TelemetryInitial());\r\n\r\n  Future<void> refreshSnapshot({String nodeId = 'edge-node-kampala-01'}) async {\r\n    emit(const TelemetryLoading());\r\n    final result = await _repository.fetchLatestSnapshot(nodeId: nodeId);\r\n    switch (result) {\r\n      case Success<TelemetrySnapshot>(:final value):\r\n        emit(TelemetryLoaded(value));\r\n      case Failure<TelemetrySnapshot>(:final message, :final code):\r\n        emit(TelemetryError(message: message, code: code));\r\n    }\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>4. Presentation Layer & Exhaustive Switch UI (<code>lib/main.dart</code>)</h3>        <p>
                            Finally, create <code>lib/main.dart</code>. Every color token (<code>0xFF070A13</code>, <code>0xFF0F1424</code>, <code>0xFF202B46</code>, <code>0xFF00B0FF</code>) and widget key (<code>toggle_failure_btn</code>, <code>refresh_telemetry_btn</code>, <code>retry_telemetry_btn</code>, <code>health_status_badge</code>) matches the exact contract in <code>AGENTS.md</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>4. Couche Présentation & UI par Switch Exhaustif (<code>lib/main.dart</code>)</h3>        <p>
                            Enfin, créez <code>lib/main.dart</code>. Chaque jeton de couleur (<code>0xFF070A13</code>, <code>0xFF0F1424</code>, <code>0xFF202B46</code>, <code>0xFF00B0FF</code>) et chaque clé de widget (<code>toggle_failure_btn</code>, <code>refresh_telemetry_btn</code>, <code>retry_telemetry_btn</code>, <code>health_status_badge</code>) respecte strictement le contrat défini dans <code>AGENTS.md</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/main.dart | Exhaustive Pattern-Matched Flutter UI"}
        lang={"DART"}
        code={"// lib/main.dart\r\nimport 'package:flutter/material.dart';\r\nimport 'package:flutter_bloc/flutter_bloc.dart';\r\nimport 'application/telemetry_cubit.dart';\r\nimport 'domain/telemetry_snapshot.dart';\r\n\r\nvoid main() {\r\n  final repository = InMemoryTelemetryRepository();\r\n  runApp(AgenticTelemetryApp(repository: repository));\r\n}\r\n\r\nclass AgenticTelemetryApp extends StatelessWidget {\r\n  final InMemoryTelemetryRepository repository;\r\n\r\n  const AgenticTelemetryApp({super.key, required this.repository});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return MaterialApp(\r\n      title: 'Agentic Telemetry Monitor',\r\n      debugShowCheckedModeBanner: false,\r\n      theme: ThemeData.dark().copyWith(\r\n        scaffoldBackgroundColor: const Color(0xFF070A13),\r\n        colorScheme: const ColorScheme.dark(\r\n          primary: Color(0xFF00B0FF),\r\n          secondary: Color(0xFF02569B),\r\n          surface: Color(0xFF0F1424),\r\n        ),\r\n      ),\r\n      home: BlocProvider<TelemetryCubit>(\r\n        create: (_) => TelemetryCubit(repository)..refreshSnapshot(),\r\n        child: TelemetryDashboardScreen(repository: repository),\r\n      ),\r\n    );\r\n  }\r\n}\r\n\r\nclass TelemetryDashboardScreen extends StatelessWidget {\r\n  final InMemoryTelemetryRepository repository;\r\n\r\n  const TelemetryDashboardScreen({super.key, required this.repository});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return Scaffold(\r\n      appBar: AppBar(\r\n        backgroundColor: const Color(0xFF0F1424),\r\n        title: const Text('Edge Telemetry Monitor'),\r\n        actions: [\r\n          IconButton(\r\n            key: const Key('toggle_failure_btn'),\r\n            tooltip: 'Toggle simulated socket failure',\r\n            icon: const Icon(Icons.bug_report_outlined),\r\n            onPressed: () {\r\n              repository.simulateFailure = !repository.simulateFailure;\r\n              context.read<TelemetryCubit>().refreshSnapshot();\r\n            },\r\n          ),\r\n          IconButton(\r\n            key: const Key('refresh_telemetry_btn'),\r\n            tooltip: 'Refresh telemetry snapshot',\r\n            icon: const Icon(Icons.refresh),\r\n            onPressed: () => context.read<TelemetryCubit>().refreshSnapshot(),\r\n          ),\r\n        ],\r\n      ),\r\n      body: Padding(\r\n        padding: const EdgeInsets.all(24),\r\n        child: BlocBuilder<TelemetryCubit, TelemetryState>(\r\n          builder: (context, state) {\r\n            return switch (state) {\r\n              TelemetryInitial() => const Center(\r\n                child: Text('Ready to query telemetry node.'),\r\n              ),\r\n              TelemetryLoading() => const Center(\r\n                child: CircularProgressIndicator(\r\n                  key: Key('telemetry_loading_indicator'),\r\n                ),\r\n              ),\r\n              TelemetryLoaded(:final snapshot) => _TelemetryMetricView(\r\n                snapshot: snapshot,\r\n              ),\r\n              TelemetryError(:final message, :final code) => _TelemetryErrorView(\r\n                message: message,\r\n                code: code,\r\n                onRetry: () {\r\n                  repository.simulateFailure = false;\r\n                  context.read<TelemetryCubit>().refreshSnapshot();\r\n                },\r\n              ),\r\n            };\r\n          },\r\n        ),\r\n      ),\r\n    );\r\n  }\r\n}\r\n\r\nclass _TelemetryMetricView extends StatelessWidget {\r\n  final TelemetrySnapshot snapshot;\r\n\r\n  const _TelemetryMetricView({required this.snapshot});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    final statusColor = switch (snapshot.status) {\r\n      HealthStatus.nominal => const Color(0xFF10B981),\r\n      HealthStatus.degraded => const Color(0xFFF59E0B),\r\n      HealthStatus.critical => const Color(0xFFEF4444),\r\n    };\r\n\r\n    return Column(\r\n      crossAxisAlignment: CrossAxisAlignment.stretch,\r\n      children: [\r\n        Container(\r\n          padding: const EdgeInsets.all(16),\r\n          decoration: BoxDecoration(\r\n            color: const Color(0xFF0F1424),\r\n            border: Border.all(color: const Color(0xFF202B46)),\r\n            borderRadius: BorderRadius.circular(12),\r\n          ),\r\n          child: Row(\r\n            mainAxisAlignment: MainAxisAlignment.spaceBetween,\r\n            children: [\r\n              Text(\r\n                'Node: ${snapshot.nodeId}',\r\n                style: const TextStyle(\r\n                  fontSize: 16,\r\n                  fontWeight: FontWeight.w600,\r\n                ),\r\n              ),\r\n              Container(\r\n                padding: const EdgeInsets.symmetric(\r\n                  horizontal: 12,\r\n                  vertical: 4,\r\n                ),\r\n                decoration: BoxDecoration(\r\n                  color: statusColor.withValues(alpha: 0.15),\r\n                  border: Border.all(color: statusColor),\r\n                  borderRadius: BorderRadius.circular(999),\r\n                ),\r\n                child: Text(\r\n                  snapshot.status.name.toUpperCase(),\r\n                  key: const Key('health_status_badge'),\r\n                  style: TextStyle(\r\n                    color: statusColor,\r\n                    fontWeight: FontWeight.w700,\r\n                    fontSize: 12,\r\n                  ),\r\n                ),\r\n              ),\r\n            ],\r\n          ),\r\n        ),\r\n        const SizedBox(height: 16),\r\n        Row(\r\n          children: [\r\n            Expanded(\r\n              child: _MetricTile(\r\n                label: 'Latency',\r\n                value: '${snapshot.latencyMs} ms',\r\n              ),\r\n            ),\r\n            const SizedBox(width: 16),\r\n            Expanded(\r\n              child: _MetricTile(\r\n                label: 'Heap RAM',\r\n                value: '${snapshot.memoryUsageMb.toStringAsFixed(1)} MB',\r\n              ),\r\n            ),\r\n            const SizedBox(width: 16),\r\n            Expanded(\r\n              child: _MetricTile(\r\n                label: 'Isolates',\r\n                value: '${snapshot.activeIsolates}',\r\n              ),\r\n            ),\r\n          ],\r\n        ),\r\n      ],\r\n    );\r\n  }\r\n}\r\n\r\nclass _MetricTile extends StatelessWidget {\r\n  final String label;\r\n  final String value;\r\n\r\n  const _MetricTile({required this.label, required this.value});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return Container(\r\n      padding: const EdgeInsets.all(16),\r\n      decoration: BoxDecoration(\r\n        color: const Color(0xFF0F1424),\r\n        border: Border.all(color: const Color(0xFF202B46)),\r\n        borderRadius: BorderRadius.circular(12),\r\n      ),\r\n      child: Column(\r\n        crossAxisAlignment: CrossAxisAlignment.start,\r\n        children: [\r\n          Text(\r\n            label,\r\n            style: const TextStyle(color: Color(0xFF94A3B8), fontSize: 13),\r\n          ),\r\n          const SizedBox(height: 8),\r\n          Text(\r\n            value,\r\n            style: const TextStyle(\r\n              color: Color(0xFFF8FAFC),\r\n              fontSize: 20,\r\n              fontWeight: FontWeight.w700,\r\n            ),\r\n          ),\r\n        ],\r\n      ),\r\n    );\r\n  }\r\n}\r\n\r\nclass _TelemetryErrorView extends StatelessWidget {\r\n  final String message;\r\n  final String code;\r\n  final VoidCallback onRetry;\r\n\r\n  const _TelemetryErrorView({\r\n    required this.message,\r\n    required this.code,\r\n    required this.onRetry,\r\n  });\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return Container(\r\n      padding: const EdgeInsets.all(16),\r\n      decoration: BoxDecoration(\r\n        color: const Color(0xFF0F1424),\r\n        border: Border.all(color: const Color(0xFFEF4444)),\r\n        borderRadius: BorderRadius.circular(12),\r\n      ),\r\n      child: Column(\r\n        mainAxisSize: MainAxisSize.min,\r\n        crossAxisAlignment: CrossAxisAlignment.start,\r\n        children: [\r\n          Text(\r\n            'Error [$code]',\r\n            style: const TextStyle(\r\n              color: Color(0xFFEF4444),\r\n              fontWeight: FontWeight.w700,\r\n              fontSize: 16,\r\n            ),\r\n          ),\r\n          const SizedBox(height: 8),\r\n          Text(message),\r\n          const SizedBox(height: 16),\r\n          ElevatedButton(\r\n            key: const Key('retry_telemetry_btn'),\r\n            onPressed: onRetry,\r\n            child: const Text('Retry Connection'),\r\n          ),\r\n        ],\r\n      ),\r\n    );\r\n  }\r\n}"}
      />
    </>
  );
}

function Step6() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            What if you want your coding agent to verify custom domain rules automatically, such as scanning <code>lib/domain/</code> to prove that zero Flutter UI or data-layer imports slipped in, or querying your canonical design system tokens as an MCP resource?
                        </p>        <p>
                            With <code>genkit</code> and <code>genkit_mcp</code> in Dart, you can build and expose a custom Model Context Protocol server in ~60 lines of Dart code using <code>createMcpServer</code>, <code>ai.defineTool</code>, and <code>ai.defineResource</code>!
                        </p>        <h3>1. Write the Custom Dart MCP Server (<code>tools/architecture_mcp_server.dart</code>)</h3>        <p>
                            This standalone Dart script exposes two MCP primitives over standard I/O (<code>stdio</code>):
                        </p>        <ul>
          <li><strong>Tool <code>checkLayerImports</code>:</strong> Recursively scans every <code>.dart</code> file in <code>lib/domain</code> and reports any forbidden <code>package:flutter/</code>, <code>package:flutter_bloc/</code>, or <code>/data/</code> imports.</li>          <li><strong>Resource <code>project://design-tokens</code>:</strong> Serves the canonical JSON design tokens so any connected agent can read exact hex codes on demand.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Que faire si vous souhaitez que votre agent vérifie automatiquement des règles métier personnalisées, comme scanner <code>lib/domain/</code> pour prouver qu&apos;aucun import Flutter UI ou couche de données ne s&apos;y est glissé, ou interroger vos jetons de design sous forme de ressource MCP ?
                        </p>        <p>
                            Grâce aux paquets <code>genkit</code> et <code>genkit_mcp</code> en Dart, vous pouvez créer et exposer votre propre serveur Model Context Protocol en une soixantaine de lignes de Dart avec <code>createMcpServer</code>, <code>ai.defineTool</code> et <code>ai.defineResource</code> !
                        </p>        <h3>1. Écrire le Serveur MCP Dart Personnalisé (<code>tools/architecture_mcp_server.dart</code>)</h3>        <p>
                            Ce script Dart autonome expose deux primitives MCP sur l&apos;entrée/sortie standard (<code>stdio</code>) :
                        </p>        <ul>
          <li><strong>Outil <code>checkLayerImports</code> :</strong> Parcourt récursivement chaque fichier <code>.dart</code> dans <code>lib/domain</code> et signale tout import interdit vers <code>package:flutter/</code>, <code>package:flutter_bloc/</code> ou <code>/data/</code>.</li>          <li><strong>Ressource <code>project://design-tokens</code> :</strong> Sert les jetons de design JSON canoniques afin que tout agent connecté puisse lire les codes hexadécimaux exacts à la demande.</li>
        </ul>
      </div>
      <CodeWindow
        filename={"tools/architecture_mcp_server.dart | Custom MCP Server with genkit_mcp"}
        lang={"DART"}
        code={"// tools/architecture_mcp_server.dart\r\n// Run with: dart run tools/architecture_mcp_server.dart\r\nimport 'dart:convert';\r\nimport 'dart:io';\r\nimport 'package:genkit/genkit.dart';\r\nimport 'package:genkit_mcp/genkit_mcp.dart';\r\nimport 'package:schemantic/schemantic.dart';\r\n\r\nvoid main() async {\r\n  final ai = Genkit();\r\n\r\n  // 1. Expose an MCP Tool that audits lib/domain/ for layer boundary violations\r\n  ai.defineTool(\r\n    name: 'checkLayerImports',\r\n    description:\r\n        'Scans lib/domain/ to verify zero package:flutter, flutter_bloc, or data-layer imports.',\r\n    inputSchema: SchemanticType.map(\r\n      SchemanticType.string(),\r\n      SchemanticType.dynamicSchema(),\r\n    ),\r\n    fn: (input, _) async {\r\n      final domainPath = (input['domainPath'] as String?) ?? 'lib/domain';\r\n      final dir = Directory(domainPath);\r\n      if (!dir.existsSync()) {\r\n        return jsonEncode({\r\n          'status': 'error',\r\n          'message': 'Directory $domainPath does not exist.',\r\n        });\r\n      }\r\n\r\n      final violations = <String>[];\r\n      final forbiddenPatterns = [\r\n        'package:flutter/',\r\n        'package:flutter_bloc/',\r\n        '/data/',\r\n        '/presentation/',\r\n      ];\r\n\r\n      await for (final entity in dir.list(recursive: true)) {\r\n        if (entity is File && entity.path.endsWith('.dart')) {\r\n          final lines = await entity.readAsLines();\r\n          for (var i = 0; i < lines.length; i++) {\r\n            final line = lines[i].trim();\r\n            if (line.startsWith('import ')) {\r\n              for (final pattern in forbiddenPatterns) {\r\n                if (line.contains(pattern)) {\r\n                  violations.add('${entity.path}:${i + 1} -> $line');\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      return jsonEncode({\r\n        'status': violations.isEmpty ? 'passed' : 'failed',\r\n        'checkedDirectory': domainPath,\r\n        'violationCount': violations.length,\r\n        'violations': violations,\r\n      });\r\n    },\r\n  );\r\n\r\n  // 2. Expose an MCP Resource serving canonical UI design tokens\r\n  ai.defineResource(\r\n    name: 'design-tokens',\r\n    uri: 'project://design-tokens',\r\n    fn: (_, _) async => ResourceOutput(\r\n      content: [\r\n        TextPart(\r\n          text: jsonEncode({\r\n            'surfacePrimary': '#070A13',\r\n            'surfaceCard': '#0F1424',\r\n            'borderColor': '#202B46',\r\n            'accentCyan': '#00B0FF',\r\n            'accentBlue': '#02569B',\r\n            'statusNominal': '#10B981',\r\n            'statusDegraded': '#F59E0B',\r\n            'statusCritical': '#EF4444',\r\n          }),\r\n        ),\r\n      ],\r\n    ),\r\n  );\r\n\r\n  // 3. Start the MCP Server over stdio transport\r\n  final server = createMcpServer(\r\n    ai,\r\n    McpServerOptions(name: 'flutter-arch-guard', version: '1.0.0'),\r\n  );\r\n  await server.start();\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. Register Both MCP Servers Together in <code>.gemini/settings.json</code></h3>        <p>
                            Add <code>flutter-arch-guard</code> right alongside the official <code>dart</code> MCP server so your agent can invoke both compiler tools and your custom architectural audit tool in the same session:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Enregistrer les Deux Serveurs MCP dans <code>.gemini/settings.json</code></h3>        <p>
                            Ajoutez <code>flutter-arch-guard</code> aux côtés du serveur MCP officiel <code>dart</code> afin que votre agent puisse invoquer à la fois les outils du compilateur et votre outil d&apos;audit architectural personnalisé dans la même session :
                        </p>
      </div>
      <CodeWindow
        filename={".gemini/settings.json | Combined Official + Custom Dart MCP Configuration"}
        lang={"JSON"}
        code={"{\r\n  \"mcpServers\": {\r\n    \"dart\": {\r\n      \"command\": \"dart\",\r\n      \"args\": [\"mcp-server\", \"--force-roots-fallback\"]\r\n    },\r\n    \"flutter-arch-guard\": {\r\n      \"command\": \"dart\",\r\n      \"args\": [\"run\", \"tools/architecture_mcp_server.dart\"]\r\n    }\r\n  }\r\n}"}
      />
    </>
  );
}

function Step7() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            The defining difference between Vibe-Coding and Agentic Engineering is a <strong>closed-loop verification gate</strong>. When an agent writes a widget test using the stable <code>Key</code> contracts mandated in <code>AGENTS.md</code>, it can prove in under 2 seconds that the UI renders nominal states, handles socket failures gracefully, and recovers when the user taps Retry.
                        </p>        <h3>1. Create the Deterministic Widget Test (<code>test/telemetry_widget_test.dart</code>)</h3>        <p>
                            Save the following test file in <code>test/telemetry_widget_test.dart</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            La différence fondamentale entre le Vibe-Coding et l&apos;Agentic Engineering réside dans une <strong>boucle de vérification fermée</strong>. Lorsqu&apos;un agent écrit un test de widget en s&apos;appuyant sur les contrats de clés <code>Key</code> imposés par <code>AGENTS.md</code>, il peut prouver en moins de 2 secondes que l&apos;interface affiche l&apos;état nominal, gère proprement les erreurs de socket et rétablit l&apos;état lorsque l&apos;utilisateur appuie sur Réessayer.
                        </p>        <h3>1. Créer le Test de Widget Déterministe (<code>test/telemetry_widget_test.dart</code>)</h3>        <p>
                            Enregistrez le fichier de test suivant dans <code>test/telemetry_widget_test.dart</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"test/telemetry_widget_test.dart | Full State Transition Widget Test"}
        lang={"DART"}
        code={"// test/telemetry_widget_test.dart\r\nimport 'package:flutter/foundation.dart';\r\nimport 'package:flutter_test/flutter_test.dart';\r\nimport 'package:agentic_telemetry_demo/application/telemetry_cubit.dart';\r\nimport 'package:agentic_telemetry_demo/main.dart';\r\n\r\nvoid main() {\r\n  testWidgets(\r\n    'renders nominal telemetry metrics and recovers from simulated failure',\r\n    (WidgetTester tester) async {\r\n      final repository = InMemoryTelemetryRepository(\r\n        latency: const Duration(milliseconds: 10),\r\n      );\r\n\r\n      await tester.pumpWidget(AgenticTelemetryApp(repository: repository));\r\n\r\n      // Initially loading while async repository resolves\r\n      expect(\r\n        find.byKey(const Key('telemetry_loading_indicator')),\r\n        findsOneWidget,\r\n      );\r\n\r\n      await tester.pumpAndSettle();\r\n\r\n      // Verify nominal loaded state\r\n      expect(find.text('Node: edge-node-kampala-01'), findsOneWidget);\r\n      expect(find.byKey(const Key('health_status_badge')), findsOneWidget);\r\n      expect(find.text('NOMINAL'), findsOneWidget);\r\n      expect(find.text('42 ms'), findsOneWidget);\r\n      expect(find.text('118.4 MB'), findsOneWidget);\r\n\r\n      // Trigger simulated failure via the app bar action button\r\n      await tester.tap(find.byKey(const Key('toggle_failure_btn')));\r\n      await tester.pumpAndSettle();\r\n\r\n      expect(find.text('Error [ERR_NODE_TIMEOUT]'), findsOneWidget);\r\n      expect(\r\n        find.text('Telemetry node unreachable over local socket.'),\r\n        findsOneWidget,\r\n      );\r\n\r\n      // Recover by tapping Retry Connection\r\n      await tester.tap(find.byKey(const Key('retry_telemetry_btn')));\r\n      await tester.pumpAndSettle();\r\n\r\n      expect(find.text('NOMINAL'), findsOneWidget);\r\n    },\r\n  );\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. Cross-Platform Pre-Commit Verification Gate</h3>        <p>
                            Run this three-stage verification gate in your terminal (or wire it into <code>.git/hooks/pre-commit</code>) so neither a human nor an AI agent can commit unformatted, warning-ridden, or failing Flutter code:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Porte de Vérification Pré-Commit Multiplateforme</h3>        <p>
                            Exécutez cette porte de vérification en trois étapes dans votre terminal (ou intégrez-la dans <code>.git/hooks/pre-commit</code>) afin que ni un humain ni un agent IA ne puisse commiter du code Flutter mal formaté, contenant des avertissements ou cassant les tests :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Cross-Platform Verification Gate (Bash & PowerShell)"}
        lang={"SH / PS1"}
        code={"# macOS / Linux / Git Bash\r\ndart format --output=none --set-exit-if-changed lib test && \\\r\nflutter analyze --fatal-infos && \\\r\nflutter test --reporter expanded\r\n\r\n# Windows PowerShell\r\ndart format --output=none --set-exit-if-changed lib test; if ($LASTEXITCODE -eq 0) { flutter analyze --fatal-infos }; if ($LASTEXITCODE -eq 0) { flutter test --reporter expanded }"}
      />
    </>
  );
}

function Step8() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. End-to-End Verification Checklist</h3>        <p>
                            Before wrapping up, confirm that your project passes every check below:
                        </p>        <ul>
          <li><strong>MCP Server Active:</strong> <code>.gemini/settings.json</code> (or your IDE MCP config) registers <code>dart mcp-server --force-roots-fallback</code>.</li>          <li><strong>Zero Domain Leakage:</strong> <code>lib/domain/telemetry_snapshot.dart</code> has zero <code>package:flutter/</code> imports.</li>          <li><strong>Zero Static Analysis Warnings:</strong> <code>flutter analyze --fatal-infos</code> outputs <code>No issues found!</code>.</li>          <li><strong>100% Green Widget Tests:</strong> <code>flutter test</code> passes the nominal load, simulated failure, and retry recovery assertions.</li>
        </ul>        <h3>2. Key Engineering Takeaways: The 4 Primitives of Agentic Coding</h3>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>Agentic Primitive</th>                <th>File / Command</th>                <th>When It Loads</th>                <th>Primary Engineering Responsibility</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>1. Constitution</strong></td>                <td><code>AGENTS.md</code></td>                <td>Every session turn</td>                <td>Global invariants, layer dependency rules, design tokens, and definition of done.</td>
              </tr>              <tr>
                <td><strong>2. Procedural Skill</strong></td>                <td><code>.agents/skills/*/SKILL.md</code></td>                <td>On-demand when matched</td>                <td>Step-by-step scaffolding, testing, or migration playbooks without bloating context.</td>
              </tr>              <tr>
                <td><strong>3. Live Tooling (MCP)</strong></td>                <td><code>dart mcp-server</code> & <code>genkit_mcp</code></td>                <td>Invoked via tool calls</td>                <td>Compiler diagnostics, pub search, DTD Widget Inspector, Hot Reload, and custom audits.</td>
              </tr>              <tr>
                <td><strong>4. Verification Gate</strong></td>                <td><code>flutter analyze</code> + <code>flutter test</code></td>                <td>Before task completion</td>                <td>Deterministic proof that generated code compiles cleanly and satisfies behavioral contracts.</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>3. Official Documentation & Further Resources</h3>        <ul>
          <li><strong>Official Dart & Flutter MCP Server Guide:</strong> <a href={"https://docs.flutter.dev/ai/mcp-server"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://docs.flutter.dev/ai/mcp-server</a></li>          <li><strong>Dart MCP Packages (<code>dart_mcp</code>):</strong> <a href={"https://pub.dev/packages/dart_mcp"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://pub.dev/packages/dart_mcp</a></li>          <li><strong>Genkit Dart MCP Integration (<code>genkit_mcp</code>):</strong> <a href={"https://pub.dev/packages/genkit_mcp"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://pub.dev/packages/genkit_mcp</a></li>          <li><strong>AGENTS.md Open Standard:</strong> <a href={"https://agents.md"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://agents.md</a></li>          <li><strong>Related Codelab (On-Device AI with Flutter & Gemma):</strong> <a href={"https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026</a></li>
        </ul>        <Callout variant={"info"} iconName={"users"} titleEn={"About the Author"} titleFr={"About the Author"}>
          <p>
                                    Authored by <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Software Engineer, Edge-AI Researcher, Founder @ <MusanTekWordmark /> & Founder of <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </Callout>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Checklist de Vérification Finale</h3>        <p>
                            Avant de conclure, vérifiez que votre projet valide chacun des points suivants :
                        </p>        <ul>
          <li><strong>Serveur MCP Actif :</strong> <code>.gemini/settings.json</code> (ou la configuration MCP de votre IDE) enregistre <code>dart mcp-server --force-roots-fallback</code>.</li>          <li><strong>Zéro Fuite dans le Domaine :</strong> <code>lib/domain/telemetry_snapshot.dart</code> ne contient aucun import <code>package:flutter/</code>.</li>          <li><strong>Zéro Avertissement d&apos;Analyse Statique :</strong> <code>flutter analyze --fatal-infos</code> affiche <code>No issues found!</code>.</li>          <li><strong>100 % des Tests de Widgets au Vert :</strong> <code>flutter test</code> valide l&apos;état nominal, la panne simulée et la reprise après clic sur Retry.</li>
        </ul>        <h3>2. Points Clés à Retenir : Les 4 Primitives de l&apos;Agentic Coding</h3>        <div className={"table-responsive"}>
          <table className={"codelab-table"}>
            <thead>
              <tr>
                <th>Primitive Agentique</th>                <th>Fichier / Commande</th>                <th>Moment de Chargement</th>                <th>Responsabilité d&apos;Ingénierie Principale</th>
              </tr>
            </thead>            <tbody>
              <tr>
                <td><strong>1. Constitution</strong></td>                <td><code>AGENTS.md</code></td>                <td>À chaque tour de session</td>                <td>Invariants globaux, règles de dépendances entre couches, jetons UI et critères de validation.</td>
              </tr>              <tr>
                <td><strong>2. Skill Procédural</strong></td>                <td><code>.agents/skills/*/SKILL.md</code></td>                <td>À la demande selon la tâche</td>                <td>Guides étape par étape de création de feature ou de test sans saturer la fenêtre de contexte.</td>
              </tr>              <tr>
                <td><strong>3. Outillage Live (MCP)</strong></td>                <td><code>dart mcp-server</code> & <code>genkit_mcp</code></td>                <td>Invoqué par appel d&apos;outil</td>                <td>Diagnostics du compilateur, recherche pub, Widget Inspector DTD, Hot Reload et audits métier.</td>
              </tr>              <tr>
                <td><strong>4. Porte de Vérification</strong></td>                <td><code>flutter analyze</code> + <code>flutter test</code></td>                <td>Avant de clore la tâche</td>                <td>Preuve déterministe que le code généré compile proprement et respecte les contrats.</td>
              </tr>
            </tbody>
          </table>
        </div>        <h3>3. Ressources Officielles & Pour Aller Plus Loin</h3>        <ul>
          <li><strong>Guide Officiel Dart & Flutter MCP Server :</strong> <a href={"https://docs.flutter.dev/ai/mcp-server"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://docs.flutter.dev/ai/mcp-server</a></li>          <li><strong>Paquet Dart MCP (<code>dart_mcp</code>) :</strong> <a href={"https://pub.dev/packages/dart_mcp"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://pub.dev/packages/dart_mcp</a></li>          <li><strong>Intégration MCP Genkit Dart (<code>genkit_mcp</code>) :</strong> <a href={"https://pub.dev/packages/genkit_mcp"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://pub.dev/packages/genkit_mcp</a></li>          <li><strong>Standard Ouvert AGENTS.md :</strong> <a href={"https://agents.md"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://agents.md</a></li>          <li><strong>Codelab Associé (On-Device AI with Flutter & Gemma) :</strong> <a href={"https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026</a></li>
        </ul>        <Callout variant={"info"} iconName={"users"} titleEn={"À propos de l'Auteur"} titleFr={"À propos de l'Auteur"}>
          <p>
                                    Conçu par <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Software Engineer, Edge-AI Researcher, Fondateur @ <MusanTekWordmark /> & Fondateur du <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </Callout>
      </div>
    </>
  );
}

export const codelabData: CodelabDefinition = {
  slug: "agentic-coding-flutter-mcp-skills",
  navItems: [
  {
    "index": 0,
    "titleEn": "Context, Goals & Prerequisites",
    "titleFr": "Contexte, Objectifs & Prérequis",
    "time": "5m"
  },
  {
    "index": 1,
    "titleEn": "Dart & Flutter MCP Server",
    "titleFr": "Serveur MCP Dart & Flutter",
    "time": "5m"
  },
  {
    "index": 2,
    "titleEn": "Zero-Drift AGENTS.md Constitution",
    "titleFr": "Constitution AGENTS.md Zéro-Dérive",
    "time": "5m"
  },
  {
    "index": 3,
    "titleEn": "Modular On-Demand SKILL.md",
    "titleFr": "Skills Modulaires SKILL.md",
    "time": "5m"
  },
  {
    "index": 4,
    "titleEn": "Governed Flutter Feature",
    "titleFr": "Feature Flutter sous Gouvernance",
    "time": "6m"
  },
  {
    "index": 5,
    "titleEn": "Custom Architecture MCP Server",
    "titleFr": "Serveur MCP d'Architecture en Dart",
    "time": "5m"
  },
  {
    "index": 6,
    "titleEn": "Automated Verification Loops",
    "titleFr": "Boucles de Vérification Automatisées",
    "time": "5m"
  },
  {
    "index": 7,
    "titleEn": "Checklist, Takeaways & Resources",
    "titleFr": "Checklist, Points Clés & Ressources",
    "time": "4m"
  }
],
  steps: [
  {
    index: 0,
    duration: 5,
    eyebrowEn: "Step 1 of 8 | Context, Learning Goals & System Requirements",
    eyebrowFr: "Étape 1 sur 8 | Contexte, Objectifs & Configuration Système",
    titleEn: "Eliminating the AI Verification Tax with Agentic Engineering",
    titleFr: "Éliminer la Taxe de Vérification IA grâce à l'Agentic Engineering",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step1,
  },
  {
    index: 1,
    duration: 5,
    eyebrowEn: "Step 2 of 8 | Model Context Protocol Integration",
    eyebrowFr: "Étape 2 sur 8 | Intégration du Model Context Protocol",
    titleEn: "Connecting the Official Dart & Flutter MCP Server",
    titleFr: "Connecter le Serveur MCP Officiel Dart & Flutter",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step2,
  },
  {
    index: 2,
    duration: 5,
    eyebrowEn: "Step 3 of 8 | Project Governance & System Invariants",
    eyebrowFr: "Étape 3 sur 8 | Gouvernance Projet & Invariants Système",
    titleEn: "Engineering a Zero-Drift AGENTS.md Constitution",
    titleFr: "Concevoir une Constitution AGENTS.md Zéro-Dérive",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step3,
  },
  {
    index: 3,
    duration: 5,
    eyebrowEn: "Step 4 of 8 | Progressive Context Disclosure",
    eyebrowFr: "Étape 4 sur 8 | Divulgation Progressive du Contexte",
    titleEn: "Creating On-Demand Procedural Skills (SKILL.md)",
    titleFr: "Créer des Skills Procéduraux à la Demande (SKILL.md)",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step4,
  },
  {
    index: 4,
    duration: 6,
    eyebrowEn: "Step 5 of 8 | Clean Layered Implementation",
    eyebrowFr: "Étape 5 sur 8 | Implémentation en Couches Propres",
    titleEn: "Building the Reference Flutter Feature Under Agent Governance",
    titleFr: "Construire la Feature Flutter de Référence sous Gouvernance Agent",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step5,
  },
  {
    index: 5,
    duration: 5,
    eyebrowEn: "Step 6 of 8 | Custom Tooling with genkit_mcp",
    eyebrowFr: "Étape 6 sur 8 | Outillage Personnalisé avec genkit_mcp",
    titleEn: "Building a Custom Architecture-Guard MCP Server in Dart",
    titleFr: "Construire un Serveur MCP Garde-Fou d'Architecture en Dart",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step6,
  },
  {
    index: 6,
    duration: 5,
    eyebrowEn: "Step 7 of 8 | Deterministic Quality Gates",
    eyebrowFr: "Étape 7 sur 8 | Portes de Qualité Déterministes",
    titleEn: "Automated Agent Verification Loops & Deterministic Widget Tests",
    titleFr: "Boucles de Vérification Agent Automatisées & Tests de Widgets Déterministes",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step7,
  },
  {
    index: 7,
    duration: 4,
    eyebrowEn: "Step 8 of 8 | Verification, Takeaways & Official Resources",
    eyebrowFr: "Étape 8 sur 8 | Vérification, Points Clés & Ressources Officielles",
    titleEn: "Verification Checklist, Key Takeaways & Official Resources",
    titleFr: "Checklist de Vérification, Points Clés & Ressources Officielles",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "/",
    finalCtaEn: "Back to All Codelabs →",
    finalCtaFr: "Retour à tous les Codelabs →",
    render: Step8,
  }
  ],
};
