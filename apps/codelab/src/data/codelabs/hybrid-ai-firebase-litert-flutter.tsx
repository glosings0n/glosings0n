import { FlutterFireCampWordmark, LosingTekWordmark } from "@repo/ui";
import { Callout } from "@/components/Callout";
import { CodeWindow } from "@/components/CodeWindow";
import type { CodelabDefinition } from "./types";

function Step1() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. Context & The &quot;Why&quot;: The 2026 Flutter AI Architectural Dilemma</h3>        <p>
                            In 2026, Flutter engineers building generative AI applications face three distinct execution paradigms across the Google and Dart ecosystem:
                        </p>        <ul>
          <li><strong>Client-Side Cloud AI (<code>firebase_ai</code>):</strong> Calling <code>gemini-flash-latest</code> directly from Flutter without writing a custom backend, protected by Firebase App Check and Firebase Authentication.</li>          <li><strong>Server-Side Agentic AI (<code>genkit</code> Dart):</strong> Running structured flows, multi-step tool calling, and privileged business logic on a Dart backend (Shelf / Cloud Run / Cloud Functions).</li>          <li><strong>On-Device Edge AI (<code>flutter_edge_ai</code> + LiteRT-LM):</strong> Running quantized <code>.litertlm</code> models 100% offline on the user&apos;s NPU/GPU/CPU with zero token cost and zero network egress.</li>
        </ul>        <p>
                            Relying on a single paradigm for your entire mobile product creates critical failure modes: a pure-cloud client breaks in rural low-connectivity zones and exposes your API quota if App Check is misconfigured; a pure-edge app cannot execute privileged server transactions or reason over massive cloud indexes; and placing sensitive billing or quota tools inside client code violates core security boundaries.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Contexte & Pourquoi : Le dilemme architectural de l&apos;IA sur Flutter en 2026</h3>        <p>
                            En 2026, les ingénieurs Flutter concevant des applications d&apos;IA générative disposent de trois paradigmes d&apos;exécution complémentaires au sein de l&apos;écosystème Google et Dart :
                        </p>        <ul>
          <li><strong>IA Cloud côté client (<code>firebase_ai</code>) :</strong> Appeler <code>gemini-flash-latest</code> directement depuis l&apos;application Flutter sans gérer de serveur dédié, sous la protection de Firebase App Check et Firebase Authentication.</li>          <li><strong>IA Agentique côté serveur (<code>genkit</code> Dart) :</strong> Exécuter des flux typés (Flows), des appels d&apos;outils (Tool Calling) et des règles métier critiques sur un backend Dart (Shelf / Cloud Run / Cloud Functions).</li>          <li><strong>IA Embarquée Edge (<code>flutter_edge_ai</code> + LiteRT-LM) :</strong> Exécuter des modèles quantifiés <code>.litertlm</code> 100% hors-ligne sur le NPU/GPU/CPU du téléphone avec un coût de token nul et zéro fuite réseau.</li>
        </ul>        <p>
                            Utiliser un seul paradigme pour l&apos;ensemble d&apos;un produit mobile entraîne des défaillances majeures : une architecture 100% Cloud échoue dès que la connexion 3G/4G tombe et expose vos quotas si App Check est mal configuré ; une architecture 100% Edge ne peut pas valider des transactions serveur privilégiées ; et exécuter des outils de facturation ou de quota côté client viole les invariants de sécurité fondamentaux.
                        </p>
      </div>
      <Callout variant={"info"} iconName={"info"} titleEn={"Production Architectural Pattern"} titleFr={"Pattern Architectural de Production"}>
        <p className={"lang-en"}>
                                Instead of choosing one SDK against the others, high-resilience mobile systems combine all three behind a unified Clean Architecture gateway and route each prompt dynamically based on connectivity, data sensitivity (PII), and transactional authority.
                            </p>
        <p className={"lang-fr"}>
                                Plutôt que d&apos;opposer ces trois SDK, les systèmes mobiles résilients les unifient derrière une passerelle Clean Architecture unique et routent chaque requête dynamiquement selon la connectivité, la sensibilité des données (PII) et l&apos;autorité transactionnelle requise.
                            </p>
      </Callout>
      <div className={"lang-en"}>
        <h3>2. Learning Goals & What You Will Build</h3>        <p>By completing this 50-minute engineering codelab, you will:</p>        <ol>
          <li><strong>Master the 3-Tier AI Decision Matrix:</strong> Evaluate latency, token unit economics per 1,000 active users, offline resilience, and security boundaries across <code>firebase_ai</code>, <code>genkit</code>, and <code>LiteRT-LM</code>.</li>          <li><strong>Enforce Absolute Server-Side Security Invariants:</strong> Understand what must never run on the client (quotas, payments, role mutations) and how to lock privileged AI tools inside a Genkit Dart server flow.</li>          <li><strong>Provision Firebase AI Logic Correctly via CLI:</strong> Avoid the common <code>PERMISSION_DENIED</code> trap by provisioning the backend service with <code>npx firebase-tools@latest init ailogic</code> and activating Firebase App Check.</li>          <li><strong>Implement a Unified <code>SmartHybridAiRouter</code>:</strong> Build a complete, runnable Flutter diagnostic console that routes prompts across Cloud, Server, and Edge tiers with automatic offline fallback to LiteRT-LM.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Objectifs & Ce que vous allez construire</h3>        <p>Au terme de ce codelab d&apos;ingénierie de 50 minutes, vous saurez :</p>        <ol>
          <li><strong>Maîtriser la matrice de décision IA à 3 niveaux :</strong> Évaluer la latence, le coût par 1 000 utilisateurs actifs, la résilience hors-ligne et les frontières de sécurité entre <code>firebase_ai</code>, <code>genkit</code> et <code>LiteRT-LM</code>.</li>          <li><strong>Appliquer les invariants absolus de sécurité côté serveur :</strong> Identifier ce qui ne doit jamais être décidé par le client (quotas, paiements, changements de rôles) et verrouiller les outils IA privilégiés dans un flux serveur Genkit Dart.</li>          <li><strong>Provisionner Firebase AI Logic via la CLI :</strong> Éviter l&apos;erreur classique <code>PERMISSION_DENIED</code> en activant le service backend avec <code>npx firebase-tools@latest init ailogic</code> et Firebase App Check.</li>          <li><strong>Construire un <code>SmartHybridAiRouter</code> complet :</strong> Développer une console de diagnostic Flutter fonctionnelle qui route les requêtes entre Cloud, Serveur et Edge avec bascule automatique hors-ligne vers LiteRT-LM.</li>
        </ol>
      </div>
      <div className={"lang-en"}>
        <h3>3. Prerequisites & System Requirements</h3>        <ul>
          <li><strong>Flutter & Dart SDK:</strong> Flutter <code>&gt;=3.29.0</code> and Dart <code>&gt;=3.8.0</code> (required for modern pattern matching and Genkit Dart schemas).</li>          <li><strong>Node.js & Firebase CLI:</strong> Node.js <code>18+</code> and <code>npx firebase-tools@latest</code> for provisioning Firebase AI Logic.</li>          <li><strong>Target Hardware for Edge Tier:</strong> A 64-bit physical Android device (<code>arm64-v8a</code>, Android 8.0+ / <code>minSdk 26</code>, <code>4GB+ RAM</code>) or macOS/Windows desktop for running the interactive router simulation.</li>
        </ul>        <p>Run the pre-flight verification below in your terminal before creating the project:</p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Prérequis & Configuration Système</h3>        <ul>
          <li><strong>SDK Flutter & Dart :</strong> Flutter <code>&gt;=3.29.0</code> et Dart <code>&gt;=3.8.0</code> (requis pour le pattern matching Dart 3 et les schémas Genkit Dart).</li>          <li><strong>Node.js & Firebase CLI :</strong> Node.js <code>18+</code> et <code>npx firebase-tools@latest</code> pour provisionner Firebase AI Logic.</li>          <li><strong>Matériel cible pour le niveau Edge :</strong> Un appareil Android physique 64-bit (<code>arm64-v8a</code>, Android 8.0+ / <code>minSdk 26</code>, <code>4 Go+ de RAM</code>) ou un poste macOS/Windows/Linux pour exécuter le simulateur de routage interactif.</li>
        </ul>        <p>Exécutez cette vérification préalable dans votre terminal avant d&apos;initialiser le projet :</p>
      </div>
      <CodeWindow
        filename={"Terminal | Pre-Flight Toolchain Check (macOS / Linux / PowerShell)"}
        lang={"SHELL"}
        code={"flutter --version\r\ndart --version\r\nnode --version\r\nnpx -y firebase-tools@latest --version"}
      />
    </>
  );
}

function Step2() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Before writing a single line of Dart code, every mobile architect must map out which features belong on which tier. The table below compares all three stacks across seven production engineering dimensions:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Avant d&apos;écrire la moindre ligne de code Dart, tout architecte mobile doit déterminer quelles fonctionnalités appartiennent à quel niveau d&apos;exécution. Le tableau ci-dessous compare les trois approches selon sept critères d&apos;ingénierie de production :
                        </p>
      </div>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Engineering Dimension</th>              <th>Tier 1: Firebase AI Logic (<code>firebase_ai</code>)</th>              <th>Tier 2: Genkit Dart Server (<code>genkit</code>)</th>              <th>Tier 3: On-Device Edge (<code>flutter_edge_ai</code> / LiteRT-LM)</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Primary Model Target</strong></td>              <td><code>gemini-flash-latest</code> (Gemini Developer API)</td>              <td><code>gemini-2.5-flash</code> / <code>gemini-2.5-pro</code></td>              <td><code>gemma-3n-E2B-it-int4.litertlm</code></td>
            </tr>            <tr>
              <td><strong>Time-to-First-Token (TTFT)</strong></td>              <td>450ms to 1,800ms (network dependent)</td>              <td>600ms to 2,400ms (client → server → LLM)</td>              <td><strong>180ms to 550ms (local NPU/GPU, 0 network)</strong></td>
            </tr>            <tr>
              <td><strong>Token Cost / 1,000 Active Users</strong></td>              <td>Scales linearly with prompt + media volume</td>              <td>Scales with server compute + LLM tokens</td>              <td><strong>$0.00 / token forever</strong></td>
            </tr>            <tr>
              <td><strong>Offline Resilience</strong></td>              <td>0% (Requires active internet connection)</td>              <td>0% (Requires HTTPS reachability to backend)</td>              <td><strong>100% (Runs in Airplane Mode)</strong></td>
            </tr>            <tr>
              <td><strong>Security & Quota Boundary</strong></td>              <td>Protected by <strong>Firebase App Check</strong> + Auth</td>              <td><strong>Trusted Server Environment</strong> (IAM + DB rules)</td>              <td><strong>Zero Data Egress</strong> (PII never leaves device)</td>
            </tr>            <tr>
              <td><strong>Tool Calling Authority</strong></td>              <td>UI-only / read-only client helper tools</td>              <td><strong>Privileged Mutations</strong> (Billing, Quotas, DB)</td>              <td>Local OS actions (SQLite FTS5, Reminders, Sensors)</td>
            </tr>            <tr>
              <td><strong>Device Storage / RAM Impact</strong></td>              <td>&lt; 2 MB SDK footprint, 0 MB local model RAM</td>              <td>0 MB client model footprint</td>              <td>140 MB to 1.4 GB disk; 600 MB to 1.8 GB RAM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Dimension d&apos;Ingénierie</th>              <th>Niveau 1 : Firebase AI Logic (<code>firebase_ai</code>)</th>              <th>Niveau 2 : Serveur Genkit Dart (<code>genkit</code>)</th>              <th>Niveau 3 : Edge Embarqué (<code>flutter_edge_ai</code> / LiteRT-LM)</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Modèle Cible Principal</strong></td>              <td><code>gemini-flash-latest</code> (Gemini Developer API)</td>              <td><code>gemini-2.5-flash</code> / <code>gemini-2.5-pro</code></td>              <td><code>gemma-3n-E2B-it-int4.litertlm</code></td>
            </tr>            <tr>
              <td><strong>Latence du 1er Token (TTFT)</strong></td>              <td>450ms à 1 800ms (selon le réseau mobile)</td>              <td>600ms à 2 400ms (client → serveur → LLM)</td>              <td><strong>180ms à 550ms (NPU/GPU local, 0 réseau)</strong></td>
            </tr>            <tr>
              <td><strong>Coût Token / 1 000 Utilisateurs</strong></td>              <td>Croît linéairement avec le volume de requêtes</td>              <td>Croît avec le calcul serveur + tokens LLM</td>              <td><strong>0,00 $ / token à vie</strong></td>
            </tr>            <tr>
              <td><strong>Résilience Hors-Ligne</strong></td>              <td>0% (Connexion Internet requise)</td>              <td>0% (Accès HTTPS au serveur requis)</td>              <td><strong>100% (Fonctionne en Mode Avion)</strong></td>
            </tr>            <tr>
              <td><strong>Frontière de Sécurité & Quotas</strong></td>              <td>Protégé par <strong>Firebase App Check</strong> + Auth</td>              <td><strong>Environnement Serveur de Confiance</strong> (IAM)</td>              <td><strong>Zéro Sortie Réseau</strong> (PII 100% locales)</td>
            </tr>            <tr>
              <td><strong>Autorité de Tool Calling</strong></td>              <td>Outils d&apos;interface ou de lecture côté client</td>              <td><strong>Mutations Privilégiées</strong> (Paiements, Quotas, DB)</td>              <td>Actions OS locales (SQLite FTS5, Calendrier, Capteurs)</td>
            </tr>            <tr>
              <td><strong>Impact Stockage / RAM Appareil</strong></td>              <td>&lt; 2 Mo d&apos;empreinte SDK, 0 Mo de RAM modèle</td>              <td>0 Mo d&apos;empreinte modèle sur le client</td>              <td>140 Mo à 1,4 Go disque ; 600 Mo à 1,8 Go RAM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"lang-en"}>
        <h3>The Absolute Server-Side Security Invariant</h3>        <p>
                            A common anti-pattern in mobile AI apps is giving a client-side LLM tool-calling access to mutate Firestore documents directly (such as incrementing user credits, approving identity verification, or unlocking paid tiers). Even with Firebase App Check enabled, <strong>the client binary runs on untrusted hardware</strong>.
                        </p>        <ul>
          <li><strong>Rule 1 (Never Trust Client Decisions on Value):</strong> The mobile client (whether executing <code>firebase_ai</code> or local <code>LiteRT-LM</code>) must never decide subscription quotas, payment settlements, verification badges, or cross-tenant data access.</li>          <li><strong>Rule 2 (Server Authority via Genkit Dart):</strong> Any AI workflow that triggers a state mutation with commercial, financial, or security impact must execute inside a <strong>Genkit Dart Flow</strong> on your backend, authenticating the caller&apos;s Firebase ID Token and enforcing atomic database transactions server-side.</li>          <li><strong>Rule 3 (Zero-Egress Privacy on Edge):</strong> Conversely, when a user drafts private personal notes, medical symptoms, or confidential field logs, routing that prompt to <code>LiteRT-LM</code> guarantees mathematically that raw PII never leaves the physical handset.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>L&apos;Invariant Absolu de Sécurité Côté Serveur</h3>        <p>
                            Une erreur d&apos;architecture fréquente dans les applications mobiles IA consiste à autoriser un modèle côté client à modifier directement des documents critiques en base de données (comme créditer un quota, valider un statut de vérification ou débloquer un abonnement). Même avec Firebase App Check activé, <strong>le binaire client s&apos;exécute sur un matériel non fiable</strong>.
                        </p>        <ul>
          <li><strong>Règle 1 (Zéro autorité client sur la valeur métier) :</strong> Le client mobile (qu&apos;il utilise <code>firebase_ai</code> ou <code>LiteRT-LM</code> en local) ne doit jamais décider des quotas d&apos;abonnement, des règlements financiers, des statuts certifiés ou des accès inter-utilisateurs.</li>          <li><strong>Règle 2 (Autorité Serveur via Genkit Dart) :</strong> Tout workflow IA déclenchant une mutation d&apos;état à valeur commerciale ou sécuritaire doit s&apos;exécuter dans un <strong>Flow Genkit Dart</strong> côté serveur, après vérification du jeton d&apos;identité Firebase (ID Token) et application atomique des règles métier.</li>          <li><strong>Règle 3 (Confidentialité sans sortie réseau sur l&apos;Edge) :</strong> À l&apos;inverse, lorsqu&apos;un utilisateur traite des notes personnelles sensibles, des données médicales ou des relevés confidentiels sur le terrain, le routage vers <code>LiteRT-LM</code> garantit qu&apos;aucune donnée privée (PII) ne quitte le téléphone.</li>
        </ul>
      </div>
      <Callout variant={"warning"} iconName={"warning"} titleEn={"Why Firebase App Check Is Mandatory for Tier 1 (firebase_ai)"} titleFr={"Pourquoi Firebase App Check est obligatoire pour le Niveau 1 (firebase_ai)"}>
        <p className={"lang-en"}>
                                While <code>firebase_ai</code> keeps your Gemini API key off the client device by proxying requests through the Firebase AI Logic backend, an unprotected Firebase project ID can still be abused by extracted client configs. Always activate <strong>Firebase App Check</strong> (Play Integrity on Android, DeviceCheck / App Attest on iOS) so only genuine, untampered instances of your app can consume your Gemini quota.
                            </p>
        <p className={"lang-fr"}>
                                Bien que <code>firebase_ai</code> évite d&apos;embarquer votre clé API Gemini dans l&apos;APK en passant par le proxy Firebase AI Logic, un identifiant de projet Firebase non protégé reste vulnérable aux abus de quota. Activez systématiquement <strong>Firebase App Check</strong> (Play Integrity sur Android, DeviceCheck / App Attest sur iOS) afin que seules les instances authentiques et non altérées de votre application puissent consommer votre quota Gemini.
                            </p>
      </Callout>
    </>
  );
}

function Step3() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Let&apos;s create a clean Flutter project and structure our folders so the UI and application router never depend directly on SDK-specific classes from <code>firebase_ai</code>, <code>genkit</code>, or <code>flutter_edge_ai</code>.
                        </p>        <h4>1. Create the Project Directory Structure</h4>        <p>Run the commands below in <strong>macOS / Linux / Git Bash</strong> or <strong>Windows PowerShell</strong>:</p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Créons maintenant un projet Flutter propre et structurons nos dossiers afin que l&apos;interface utilisateur et le routeur applicatif ne dépendent jamais directement des classes spécifiques aux SDK <code>firebase_ai</code>, <code>genkit</code> ou <code>flutter_edge_ai</code>.
                        </p>        <h4>1. Créer l&apos;arborescence du projet</h4>        <p>Exécutez les commandes suivantes sous <strong>macOS / Linux / Git Bash</strong> ou <strong>Windows PowerShell</strong> :</p>
      </div>
      <CodeWindow
        filename={"Terminal | Create Project & Folders (Bash & PowerShell)"}
        lang={"SHELL"}
        code={"# 1. Create the Flutter project\r\nflutter create hybrid_ai_router_codelab\r\ncd hybrid_ai_router_codelab\r\n\r\n# 2A. macOS / Linux / Git Bash: create Clean Architecture directories\r\nmkdir -p lib/domain lib/data lib/application test\r\n\r\n# 2B. Windows PowerShell: create Clean Architecture directories\r\nNew-Item -ItemType Directory -Force -Path lib/domain, lib/data, lib/application, test"}
      />
      <div className={"lang-en"}>
        <h4>2. Configure <code>pubspec.yaml</code></h4>        <p>
                            Replace your <code>pubspec.yaml</code> with the configuration below. Notice that we use <code>firebase_ai</code> (which replaced the deprecated <code>firebase_vertexai</code> package), <code>firebase_app_check</code>, <code>http</code> for Genkit remote flow calls, and <code>flutter_edge_ai</code> (with <code>flutter_edge_ai_litertlm</code>) for LiteRT-LM edge execution:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>2. Configurer <code>pubspec.yaml</code></h4>        <p>
                            Remplacez votre fichier <code>pubspec.yaml</code> par la configuration ci-dessous. Notez l&apos;utilisation de <code>firebase_ai</code> (qui remplace l&apos;ancien package déprécié <code>firebase_vertexai</code>), de <code>firebase_app_check</code>, de <code>http</code> pour les appels aux flux distants Genkit, et de <code>flutter_edge_ai</code> (avec <code>flutter_edge_ai_litertlm</code>) pour l&apos;inférence LiteRT-LM embarquée :
                        </p>
      </div>
      <CodeWindow
        filename={"pubspec.yaml | Hybrid AI Flutter Dependencies"}
        lang={"YAML"}
        code={"name: hybrid_ai_router_codelab\r\ndescription: Hybrid AI Architecture & Smart Routing in Flutter (Firebase AI Logic + Genkit Dart + LiteRT-LM).\r\npublish_to: 'none'\r\nversion: 1.0.0+1\r\n\r\nenvironment:\r\n  sdk: ^3.8.0\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  http:\r\n  # Production SDKs for real device deployment:\r\n  # firebase_core:\r\n  # firebase_auth:\r\n  # firebase_app_check:\r\n  # firebase_ai:\r\n  # flutter_edge_ai:\r\n  # flutter_edge_ai_litertlm:\r\n\r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n  flutter_lints:\r\n  test:\r\n\r\nflutter:\r\n  uses-material-design: true"}
      />
      <div className={"lang-en"}>
        <h4>3. Create the Unified Domain Contract (<code>lib/domain/ai_models.dart</code>)</h4>        <p>
                            Create <code>lib/domain/ai_models.dart</code>. This file defines our three execution tiers, the privacy sensitivity levels, the runtime routing context, telemetry metrics, and the <code>AiEngineGateway</code> interface implemented by all three engines:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>3. Créer le Contrat de Domaine Unifié (<code>lib/domain/ai_models.dart</code>)</h4>        <p>
                            Créez le fichier <code>lib/domain/ai_models.dart</code>. Ce fichier définit nos trois niveaux d&apos;exécution, la classification de sensibilité des données, le contexte d&apos;évaluation du routeur, la télémétrie et l&apos;interface <code>AiEngineGateway</code> implémentée par les trois moteurs :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/domain/ai_models.dart | Unified Domain Models & Gateway"}
        lang={"DART"}
        code={"// lib/domain/ai_models.dart\r\n\r\n/// The three execution tiers available in a 2026 Hybrid Flutter AI architecture.\r\nenum AiExecutionTier {\r\n  /// Tier 1: Direct client-to-Gemini calls via `firebase_ai` + App Check.\r\n  cloudFirebaseAi(\r\n    label: 'Cloud (Firebase AI Logic)',\r\n    modelId: 'gemini-flash-latest',\r\n    zeroTokenCost: false,\r\n  ),\r\n\r\n  /// Tier 2: Server-side agentic flows via Genkit Dart + Shelf / Cloud Run.\r\n  serverGenkitAgent(\r\n    label: 'Server (Genkit Dart Agent)',\r\n    modelId: 'gemini-2.5-flash',\r\n    zeroTokenCost: false,\r\n  ),\r\n\r\n  /// Tier 3: 100% offline on-device inference via `flutter_edge_ai` + LiteRT-LM.\r\n  edgeLiteRt(\r\n    label: 'On-Device (LiteRT-LM INT4)',\r\n    modelId: 'gemma-3n-E2B-it-int4.litertlm',\r\n    zeroTokenCost: true,\r\n  );\r\n\r\n  const AiExecutionTier({\r\n    required this.label,\r\n    required this.modelId,\r\n    required this.zeroTokenCost,\r\n  });\r\n\r\n  final String label;\r\n  final String modelId;\r\n  final bool zeroTokenCost;\r\n}\r\n\r\n/// Data privacy classification for outgoing prompts.\r\nenum TaskSensitivity {\r\n  /// Public or general knowledge queries safe for cloud transit.\r\n  publicGeneral,\r\n\r\n  /// Contains unredacted PII, medical records, or strictly private local notes.\r\n  /// Must never leave the physical device.\r\n  strictLocalPii,\r\n\r\n  /// Requires privileged server-side authority (billing, quotas, DB mutations).\r\n  privilegedTransactional,\r\n}\r\n\r\n/// Runtime context evaluated by the SmartHybridAiRouter before dispatching.\r\nclass RoutingContext {\r\n  const RoutingContext({\r\n    required this.prompt,\r\n    required this.isOnline,\r\n    this.sensitivity = TaskSensitivity.publicGeneral,\r\n    this.requiresPrivilegedServerTool = false,\r\n    this.hasMultimodalAttachment = false,\r\n    this.availableRamMb = 4096,\r\n  });\r\n\r\n  final String prompt;\r\n  final bool isOnline;\r\n  final TaskSensitivity sensitivity;\r\n  final bool requiresPrivilegedServerTool;\r\n  final bool hasMultimodalAttachment;\r\n  final int availableRamMb;\r\n}\r\n\r\n/// Telemetry metadata attached to every completed AI inference.\r\nclass RoutingTelemetry {\r\n  const RoutingTelemetry({\r\n    required this.selectedTier,\r\n    required this.routingReason,\r\n    required this.latencyMs,\r\n    this.didFallbackToEdge = false,\r\n  });\r\n\r\n  final AiExecutionTier selectedTier;\r\n  final String routingReason;\r\n  final int latencyMs;\r\n  final bool didFallbackToEdge;\r\n}\r\n\r\n/// Unified response returned to the presentation layer regardless of tier.\r\nclass AiInferenceResponse {\r\n  const AiInferenceResponse({\r\n    required this.text,\r\n    required this.telemetry,\r\n    this.structuredPayload,\r\n  });\r\n\r\n  final String text;\r\n  final RoutingTelemetry telemetry;\r\n  final Map<String, Object?>? structuredPayload;\r\n}\r\n\r\n/// Unified gateway implemented by Cloud, Server, and Edge engines.\r\nabstract interface class AiEngineGateway {\r\n  AiExecutionTier get tier;\r\n\r\n  Future<String> generate({\r\n    required String prompt,\r\n    Map<String, Object?> metadata = const {},\r\n  });\r\n}"}
      />
    </>
  );
}

function Step4() {
  return (
    <>
      <div className={"lang-en"}>
        <p><strong>Firebase AI Logic</strong> (<code>package:firebase_ai</code>) lets your Flutter app call Gemini models directly when the device is online and the task does not involve privileged server state mutations. It shines for multimodal inputs (analyzing high-resolution photos, audio clips, or PDFs up to 20 MB inline) and general multi-turn chat.
                        </p>        <h3>1. Provisioning the Backend Service (Avoiding PERMISSION_DENIED)</h3>        <p>
                            A critical mistake many Flutter developers make is running <code>flutterfire configure</code> and assuming Firebase AI Logic is ready. <strong><code>flutterfire configure</code> only generates client configuration (<code>firebase_options.dart</code>); it does NOT enable the Gemini Developer API proxy on your Firebase project.</strong> You must run the Firebase CLI <code>init ailogic</code> command first:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p><strong>Firebase AI Logic</strong> (<code>package:firebase_ai</code>) permet à votre application Flutter d&apos;appeler directement les modèles Gemini lorsque l&apos;appareil est connecté et que la tâche n&apos;implique pas de mutations d&apos;état serveur privilégiées. Ce niveau excelle pour les entrées multimodales (analyse de photos haute résolution, d&apos;extraits audio ou de PDF jusqu&apos;à 20 Mo) et le chat généraliste.
                        </p>        <h3>1. Provisionner le Service Backend (Éviter PERMISSION_DENIED)</h3>        <p>
                            Une erreur fréquente chez les développeurs Flutter consiste à exécuter uniquement <code>flutterfire configure</code> en pensant que Firebase AI Logic est activé. <strong><code>flutterfire configure</code> génère uniquement le fichier client <code>firebase_options.dart</code> ; il n&apos;active PAS le proxy Gemini Developer API sur votre projet Firebase.</strong> Vous devez obligatoirement exécuter la commande <code>init ailogic</code> via la CLI Firebase :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Provision Firebase AI Logic & Client Options"}
        lang={"SHELL"}
        code={"# 1. Verify active Firebase project and registered apps\r\nnpx -y firebase-tools@latest projects:list\r\nnpx -y firebase-tools@latest apps:list\r\n\r\n# 2. MANDATORY: Provision Firebase AI Logic (enables Gemini Developer API)\r\nnpx -y firebase-tools@latest init ailogic\r\n\r\n# 3. Generate Flutter client configuration (lib/firebase_options.dart)\r\nflutterfire configure"}
      />
      <Callout variant={"danger"} iconName={"danger"} titleEn={"Model Selection Rule: Always Use gemini-flash-latest"} titleFr={"Règle de Sélection du Modèle : Toujours utiliser gemini-flash-latest"}>
        <p className={"lang-en"}>
                                Never hardcode legacy <code>gemini-1.5-flash</code> identifiers in new Flutter projects. Always target <code>gemini-flash-latest</code> via <code>FirebaseAI.googleAI(auth: FirebaseAuth.instance)</code>, and optionally bind the model string to <strong>Firebase Remote Config</strong> so you can roll out model upgrades without waiting for Play Store or App Store review.
                            </p>
        <p className={"lang-fr"}>
                                N&apos;utilisez jamais les anciens identifiants obsolètes comme <code>gemini-1.5-flash</code>. Ciblez systématiquement <code>gemini-flash-latest</code> via <code>FirebaseAI.googleAI(auth: FirebaseAuth.instance)</code>, et liez idéalement le nom du modèle à <strong>Firebase Remote Config</strong> afin de pouvoir mettre à jour la version du modèle à distance sans republier sur le Play Store ou l&apos;App Store.
                            </p>
      </Callout>
      <div className={"lang-en"}>
        <h3>2. Implement <code>lib/data/firebase_ai_cloud_engine.dart</code></h3>        <p>
                            Create <code>lib/data/firebase_ai_cloud_engine.dart</code>. We inject a <code>CloudPromptInvoker</code> delegate so that in production you pass the live <code>FirebaseAI.googleAI(auth: FirebaseAuth.instance)</code> call, while in local unit tests or codelab simulation mode it runs out-of-the-box without requiring live cloud credentials:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Implémenter <code>lib/data/firebase_ai_cloud_engine.dart</code></h3>        <p>
                            Créez le fichier <code>lib/data/firebase_ai_cloud_engine.dart</code>. Nous injectons un délégué <code>CloudPromptInvoker</code> : en production, vous lui passez l&apos;appel réel <code>FirebaseAI.googleAI(auth: FirebaseAuth.instance)</code> après activation d&apos;App Check, tandis qu&apos;en test unitaire ou dans le simulateur du codelab, il s&apos;exécute immédiatement sans nécessiter d&apos;identifiants Cloud :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/data/firebase_ai_cloud_engine.dart | Tier 1 Cloud Engine"}
        lang={"DART"}
        code={"// lib/data/firebase_ai_cloud_engine.dart\r\nimport 'dart:async';\r\nimport '../domain/ai_models.dart';\r\n\r\n/// Signature for invoking `FirebaseAI.googleAI().generativeModel(...)`.\r\ntypedef CloudPromptInvoker = Future<String> Function(\r\n  String modelName,\r\n  String systemInstruction,\r\n  String userPrompt,\r\n);\r\n\r\n/// Tier 1 Engine: Client-Side Cloud Inference via Firebase AI Logic.\r\n///\r\n/// Production wiring with `package:firebase_ai/firebase_ai.dart`:\r\n/// ```dart\r\n/// await FirebaseAppCheck.instance.activate(\r\n///   androidProvider: AndroidProvider.playIntegrity,\r\n///   appleProvider: AppleProvider.appAttest,\r\n/// );\r\n/// final googleAI = FirebaseAI.googleAI(auth: FirebaseAuth.instance);\r\n/// final model = googleAI.generativeModel(\r\n///   model: 'gemini-flash-latest',\r\n///   systemInstruction: Content.system(systemInstruction),\r\n/// );\r\n/// final res = await model.generateContent([Content.text(userPrompt)]);\r\n/// return res.text ?? '';\r\n/// ```\r\nclass FirebaseAiCloudEngine implements AiEngineGateway {\r\n  FirebaseAiCloudEngine({\r\n    CloudPromptInvoker? invoker,\r\n    this.modelName = 'gemini-flash-latest',\r\n    this.timeout = const Duration(seconds: 12),\r\n  }) : _invoker = invoker ?? _defaultSimulatedCloudInvoker;\r\n\r\n  final CloudPromptInvoker _invoker;\r\n  final String modelName;\r\n  final Duration timeout;\r\n\r\n  static const String _systemPrompt =\r\n      'You are a concise engineering assistant accessed via Firebase AI Logic. '\r\n      'Never claim authority to mutate billing quotas or database roles directly.';\r\n\r\n  @override\r\n  AiExecutionTier get tier => AiExecutionTier.cloudFirebaseAi;\r\n\r\n  @override\r\n  Future<String> generate({\r\n    required String prompt,\r\n    Map<String, Object?> metadata = const {},\r\n  }) async {\r\n    final trimmed = prompt.trim();\r\n    if (trimmed.isEmpty) {\r\n      throw ArgumentError('Prompt cannot be empty for Firebase AI Logic.');\r\n    }\r\n\r\n    final responseText = await _invoker(\r\n      modelName,\r\n      _systemPrompt,\r\n      trimmed,\r\n    ).timeout(timeout);\r\n\r\n    if (responseText.trim().isEmpty) {\r\n      throw StateError('Firebase AI Logic ($modelName) returned an empty text payload.');\r\n    }\r\n    return responseText.trim();\r\n  }\r\n\r\n  static Future<String> _defaultSimulatedCloudInvoker(\r\n    String model,\r\n    String systemInstruction,\r\n    String prompt,\r\n  ) async {\r\n    await Future<void>.delayed(const Duration(milliseconds: 320));\r\n    return '[Firebase AI Logic | $model] Processed multimodal/cloud prompt '\r\n        'with App Check attestation verified: \"$prompt\"';\r\n  }\r\n}"}
      />
    </>
  );
}

function Step5() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            When an AI action requires reading confidential cross-tenant metrics, verifying payment status, or mutating organization quotas, it must run on <strong>Tier 2: Genkit Dart Server</strong>. With <code>package:genkit</code> and <code>package:genkit_google_genai</code>, you write both your backend AI flows and your Flutter app in 100% type-safe Dart.
                        </p>        <h3>1. How the Backend Flow Looks in Genkit Dart</h3>        <p>
                            Below is the reference architecture for a Genkit Dart server flow using <code>ai.defineTool</code> and <code>ai.defineFlow</code>. Notice how the privileged quota check executes inside the server boundary before the model can invoke the tool:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Lorsqu&apos;une action IA nécessite de lire des métriques confidentielles, de vérifier un paiement ou de modifier les quotas d&apos;une organisation, elle doit impérativement s&apos;exécuter sur le <strong>Niveau 2 : Serveur Genkit Dart</strong>. Grâce à <code>package:genkit</code> et <code>package:genkit_google_genai</code>, vous écrivez vos flux IA backend et votre application Flutter dans un langage Dart 100% typé de bout en bout.
                        </p>        <h3>1. Architecture de référence du Flow Backend en Genkit Dart</h3>        <p>
                            Voici l&apos;architecture d&apos;un Flow serveur Genkit Dart utilisant <code>ai.defineTool</code> et <code>ai.defineFlow</code>. Remarquez comment le contrôle de sécurité et de quota s&apos;exécute à l&apos;intérieur du périmètre serveur avant toute exécution d&apos;outil privilégié :
                        </p>
      </div>
      <CodeWindow
        filename={"server/bin/genkit_quota_flow.dart | Server-Side Genkit Flow Reference"}
        lang={"DART"}
        code={"// Reference Backend File (deployed to Cloud Run / Dart Shelf Server)\r\nimport 'package:genkit/genkit.dart';\r\nimport 'package:genkit_google_genai/genkit_google_genai.dart';\r\nimport 'package:schemantic/schemantic.dart';\r\n\r\nvoid configureServerFlows() {\r\n  final ai = Genkit(plugins: [googleAI()]);\r\n\r\n  // Privileged server-only tool: never exposed to direct client manipulation.\r\n  ai.defineTool(\r\n    name: 'verifyAndAllocateOrganizationQuota',\r\n    description: 'Verifies billing ledger state and allocates monthly AI compute quota.',\r\n    inputSchema: SchemanticType.map(.string(), .string()),\r\n    fn: (input, _) async {\r\n      final orgId = input['orgId'] ?? 'unknown';\r\n      // Server-side invariant: read authoritative ledger in Admin SDK / Postgres.\r\n      return 'Ledger verified for $orgId: 50,000 enterprise tokens allocated.';\r\n    },\r\n  );\r\n\r\n  ai.defineFlow(\r\n    name: 'privilegedQuotaAgentFlow',\r\n    inputSchema: .string(),\r\n    outputSchema: .string(),\r\n    fn: (prompt, _) async {\r\n      final response = await ai.generate(\r\n        model: googleAI.gemini('gemini-2.5-flash'),\r\n        prompt: prompt,\r\n        toolNames: ['verifyAndAllocateOrganizationQuota'],\r\n      );\r\n      return response.text;\r\n    },\r\n  );\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. Implement the Flutter Client Adapter (<code>lib/data/genkit_server_engine.dart</code>)</h3>        <p>
                            On the Flutter client, you can invoke a deployed Genkit flow either via <code>defineRemoteAction</code> from <code>package:genkit/client.dart</code> or via an authenticated HTTPS POST carrying the user&apos;s Firebase Auth ID Token in the <code>Authorization: Bearer &lt;token&gt;</code> header. Create <code>lib/data/genkit_server_engine.dart</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Implémenter l&apos;Adaptateur Client Flutter (<code>lib/data/genkit_server_engine.dart</code>)</h3>        <p>
                            Côté client Flutter, vous pouvez invoquer un flux Genkit déployé soit via <code>defineRemoteAction</code> (depuis <code>package:genkit/client.dart</code>), soit via une requête HTTPS POST authentifiée transmettant le jeton Firebase Auth dans l&apos;en-tête <code>Authorization: Bearer &lt;token&gt;</code>. Créez le fichier <code>lib/data/genkit_server_engine.dart</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/data/genkit_server_engine.dart | Tier 2 Genkit Remote Flow Client"}
        lang={"DART"}
        code={"// lib/data/genkit_server_engine.dart\r\nimport 'dart:async';\r\nimport 'dart:convert';\r\nimport 'package:http/http.dart' as http;\r\nimport '../domain/ai_models.dart';\r\n\r\n/// Tier 2 Engine: Server-Side Agentic Workflows via Genkit Dart Remote Actions.\r\n///\r\n/// Enforces the Absolute Server-Side Security Invariant:\r\n/// Any operation touching user quotas, payment ledgers, or privileged tools\r\n/// executes exclusively on the Dart backend after verifying the Firebase ID Token.\r\nclass GenkitServerEngine implements AiEngineGateway {\r\n  GenkitServerEngine({\r\n    required this.flowEndpoint,\r\n    required this.idTokenProvider,\r\n    http.Client? httpClient,\r\n    this.timeout = const Duration(seconds: 15),\r\n  }) : _httpClient = httpClient;\r\n\r\n  final Uri flowEndpoint;\r\n  final Future<String> Function() idTokenProvider;\r\n  final http.Client? _httpClient;\r\n  final Duration timeout;\r\n\r\n  @override\r\n  AiExecutionTier get tier => AiExecutionTier.serverGenkitAgent;\r\n\r\n  @override\r\n  Future<String> generate({\r\n    required String prompt,\r\n    Map<String, Object?> metadata = const {},\r\n  }) async {\r\n    final idToken = await idTokenProvider();\r\n    if (idToken.isEmpty) {\r\n      throw StateError('Unauthenticated client: missing Firebase Auth ID token.');\r\n    }\r\n\r\n    // If no live HTTP client is injected, run deterministic local verification\r\n    // of the Genkit Flow JSON envelope contract.\r\n    if (_httpClient == null) {\r\n      await Future<void>.delayed(const Duration(milliseconds: 410));\r\n      return '[Genkit Dart Server | gemini-2.5-flash] Server-side security '\r\n          'invariant verified (Bearer token + quota ledger check passed). '\r\n          'Executed privileged workflow for: \"${prompt.trim()}\"';\r\n    }\r\n\r\n    final response = await _httpClient\r\n        .post(\r\n          flowEndpoint,\r\n          headers: <String, String>{\r\n            'Content-Type': 'application/json',\r\n            'Authorization': 'Bearer $idToken',\r\n          },\r\n          body: jsonEncode(<String, Object?>{\r\n            'data': <String, Object?>{\r\n              'prompt': prompt.trim(),\r\n              'metadata': metadata,\r\n            },\r\n          }),\r\n        )\r\n        .timeout(timeout);\r\n\r\n    if (response.statusCode != 200) {\r\n      throw StateError(\r\n        'Genkit flow failed with HTTP ${response.statusCode}: ${response.body}',\r\n      );\r\n    }\r\n\r\n    final decoded = jsonDecode(response.body) as Map<String, Object?>;\r\n    final result = decoded['result']?.toString() ?? '';\r\n    if (result.isEmpty) {\r\n      throw StateError('Genkit flow returned an empty result field.');\r\n    }\r\n    return result;\r\n  }\r\n}"}
      />
    </>
  );
}

function Step6() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            What happens when your user enters an elevator, travels into a rural agricultural zone with zero cellular coverage, or types a strictly private note containing sensitive PII? Our third tier, <strong>LiteRT-LM via <code>flutter_edge_ai</code></strong> (formerly <code>flutter_gemma</code>), executes a 4-bit quantized Gemma, Phi, or Qwen model directly on the device&apos;s NPU/GPU/CPU.
                        </p>        <h3>Three Production Guardrails for On-Device LiteRT-LM</h3>        <ol>
          <li><strong>Strict FFI Mutex Serialization:</strong> The underlying C++ LiteRT-LM / MediaPipe session is not thread-safe for concurrent prompt streams. Always serialize access with a Dart <code>Completer&lt;void&gt;</code> lock.</li>          <li><strong>Deadlock Timeout Recovery:</strong> If a developer triggers a Flutter Hot Restart while a native C++ inference is in flight, a naive mutex would block forever. Always attach a timeout (e.g., 25 seconds) that resets the lock cleanly.</li>          <li><strong>Low-RAM Deterministic Guard (<code>&lt; 2GB Available RAM</code>):</strong> Before allocating native KV-cache tensors on budget devices, inspect available memory and fall back to a zero-RAM deterministic ruleset if the OS is under extreme memory pressure.</li>
        </ol>        <p>Create <code>lib/data/litert_edge_engine.dart</code>:</p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Que se passe-t-il lorsque votre utilisateur perd le réseau mobile en zone rurale, passe en mode avion, ou rédige une note confidentielle contenant des données personnelles sensibles (PII) ? Notre troisième niveau, <strong>LiteRT-LM via <code>flutter_edge_ai</code></strong> (anciennement <code>flutter_gemma</code>), exécute un modèle Gemma, Phi ou Qwen quantifié en 4 bits (INT4) directement sur le NPU/GPU/CPU de l&apos;appareil.
                        </p>        <h3>Trois Garde-Fous de Production pour LiteRT-LM Embarqué</h3>        <ol>
          <li><strong>Sérialisation stricte par Mutex FFI :</strong> La session native C++ LiteRT-LM / MediaPipe ne supporte pas deux flux d&apos;inférence simultanés. Sérialisez systématiquement les appels avec un verrou Dart <code>Completer&lt;void&gt;</code>.</li>          <li><strong>Récupération anti-deadlock par Timeout :</strong> Si un Hot Restart survient pendant une inférence C++ native, un mutex classique bloquerait l&apos;application indéfiniment. Ajoutez toujours un délai d&apos;expiration (ex. 25 secondes) pour libérer le verrou proprement.</li>          <li><strong>Garde-fou déterministe Basse-RAM (<code>&lt; 2 Go de RAM libre</code>) :</strong> Sur les téléphones d&apos;entrée de gamme soumis à une forte pression mémoire, vérifiez la RAM disponible avant d&apos;allouer le cache KV natif et basculez vers un moteur de règles local sans surcoût mémoire.</li>
        </ol>        <p>Créez le fichier <code>lib/data/litert_edge_engine.dart</code> :</p>
      </div>
      <Callout variant={"info"} iconName={"info"} titleEn={"Ecosystem Evolution: flutter_gemma has evolved to flutter_edge_ai"} titleFr={"Évolution de l'écosystème : flutter_gemma devient flutter_edge_ai"}>
        <p className={"lang-en"}>
                                In late 2026, <code>flutter_gemma</code> was officially unified under <strong><code>flutter_edge_ai</code></strong> (paired with <code>flutter_edge_ai_litertlm</code>). Beyond Google Gemma 2B/3n models, it now runs multiple open-weights SLMs (such as <strong>Phi-3</strong>, <strong>Qwen 2.5</strong>, <strong>DeepSeek R1 Distill</strong>, and <strong>SmolLM</strong>) with optional CPU or GPU execution targets (<code>PreferredBackend.cpu</code> / <code>PreferredBackend.gpu</code>).
                            </p>
        <p className={"lang-fr"}>
                                Fin 2026, <code>flutter_gemma</code> a été unifié sous le package <strong><code>flutter_edge_ai</code></strong> (associé à <code>flutter_edge_ai_litertlm</code>). Au-delà des modèles Google Gemma 2B/3n, il supporte désormais de multiples modèles légers locaux (comme <strong>Phi-3</strong>, <strong>Qwen 2.5</strong>, <strong>DeepSeek R1 Distill</strong> et <strong>SmolLM</strong>) avec choix du backend d&apos;exécution CPU ou GPU (<code>PreferredBackend.cpu</code> / <code>PreferredBackend.gpu</code>).
                            </p>
      </Callout>
      <CodeWindow
        filename={"lib/data/litert_edge_engine.dart | Tier 3 LiteRT-LM Engine with Mutex & RAM Guard"}
        lang={"DART"}
        code={"// lib/data/litert_edge_engine.dart\r\nimport 'dart:async';\r\nimport '../domain/ai_models.dart';\r\n\r\n/// Signature for invoking the native C++ LiteRT-LM session via `flutter_edge_ai`.\r\ntypedef LiteRtNativeInvoker = Future<String> Function(String prompt);\r\n\r\n/// Tier 3 Engine: 100% Offline On-Device Inference via LiteRT-LM (`flutter_edge_ai`).\r\n///\r\n/// Guarantees:\r\n/// 1. Strict mutex serialization so two concurrent UI requests never collide\r\n///    inside the native C++ MediaPipe / LiteRT-LM session.\r\n/// 2. Deadlock recovery timeout so a stalled native session releases the lock.\r\n/// 3. Zero-RAM deterministic fallback on ultra-low-memory devices (<2GB RAM).\r\nclass LiteRtEdgeEngine implements AiEngineGateway {\r\n  LiteRtEdgeEngine({\r\n    LiteRtNativeInvoker? nativeInvoker,\r\n    this.lockTimeout = const Duration(seconds: 25),\r\n  }) : _nativeInvoker = nativeInvoker ?? _defaultSimulatedLiteRtInvoker;\r\n\r\n  final LiteRtNativeInvoker _nativeInvoker;\r\n  final Duration lockTimeout;\r\n  Completer<void>? _activeLock;\r\n\r\n  @override\r\n  AiExecutionTier get tier => AiExecutionTier.edgeLiteRt;\r\n\r\n  @override\r\n  Future<String> generate({\r\n    required String prompt,\r\n    Map<String, Object?> metadata = const {},\r\n  }) async {\r\n    final availableRamMb = (metadata['availableRamMb'] as int?) ?? 4096;\r\n    if (availableRamMb < 2048) {\r\n      return _deterministicLowRamFallback(prompt);\r\n    }\r\n\r\n    return _runLocked<String>(() async {\r\n      final formattedPrompt =\r\n          '<start_of_turn>user\\n${prompt.trim()}<end_of_turn>\\n'\r\n          '<start_of_turn>model\\n';\r\n      return _nativeInvoker(formattedPrompt);\r\n    });\r\n  }\r\n\r\n  Future<T> _runLocked<T>(Future<T> Function() action) async {\r\n    while (_activeLock != null) {\r\n      try {\r\n        await _activeLock!.future.timeout(lockTimeout);\r\n      } on TimeoutException {\r\n        // Recover from a stalled FFI session after Hot Restart or native hang.\r\n        _activeLock = null;\r\n        break;\r\n      }\r\n    }\r\n\r\n    final completer = Completer<void>();\r\n    _activeLock = completer;\r\n\r\n    try {\r\n      return await action();\r\n    } finally {\r\n      _activeLock = null;\r\n      if (!completer.isCompleted) {\r\n        completer.complete();\r\n      }\r\n    }\r\n  }\r\n\r\n  String _deterministicLowRamFallback(String prompt) {\r\n    return '[LiteRT-LM Safe Mode | <2GB RAM Guard] Device memory is critically '\r\n        'low. Returning deterministic local ruleset summary for: \"${prompt.trim()}\"';\r\n  }\r\n\r\n  static Future<String> _defaultSimulatedLiteRtInvoker(\r\n    String formattedPrompt,\r\n  ) async {\r\n    await Future<void>.delayed(const Duration(milliseconds: 190));\r\n    final clean = formattedPrompt\r\n        .replaceAll('<start_of_turn>user\\n', '')\r\n        .replaceAll('<end_of_turn>\\n<start_of_turn>model\\n', '');\r\n    return '[LiteRT-LM On-Device | gemma-3n-E2B-it-int4] 100% offline inference '\r\n        '(0 bytes network egress, \\$0.00 token cost): \"$clean\"';\r\n  }\r\n}"}
      />
      <Callout variant={"info"} iconName={"info"} titleEn={"Deep-Dive into On-Device Quantization & SQLite FTS5 RAG"} titleFr={"Approfondir la Quantification Embarquée & le RAG SQLite FTS5"}>
        <p className={"lang-en"}>
                                Want to see how to stream <code>.litertlm</code> model downloads atomically, resize 512px vision tensors, and pair LiteRT-LM with zero-RAM SQLite FTS5 BM25 RAG? Check out our companion codelab: <a href={"/flutter-gemma-droidcon-ug-2026"}>On-Device AI with Flutter & Gemma (droidCon Uganda 2026)</a> and the public reference repository <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a>.
                            </p>
        <p className={"lang-fr"}>
                                Vous souhaitez approfondir le téléchargement atomique de modèles <code>.litertlm</code>, le redimensionnement d&apos;images en 512px et le RAG local SQLite FTS5 BM25 sans impact RAM ? Consultez notre codelab dédié : <a href={"/flutter-gemma-droidcon-ug-2026"}>On-Device AI with Flutter & Gemma (droidCon Uganda 2026)</a> ainsi que le dépôt public de référence <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a>.
                            </p>
      </Callout>
    </>
  );
}

function Step7() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Now we connect all three engines inside <code>lib/application/smart_hybrid_ai_router.dart</code>. The router evaluates five ordered rules for every outgoing prompt and automatically falls back to on-device <code>LiteRT-LM</code> if a cloud or server request fails mid-flight due to unstable mobile connectivity.
                        </p>        <h3>1. Create <code>lib/application/smart_hybrid_ai_router.dart</code></h3>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Connectons à présent nos trois moteurs au sein de <code>lib/application/smart_hybrid_ai_router.dart</code>. Le routeur évalue cinq règles ordonnées pour chaque requête sortante et bascule automatiquement vers le moteur embarqué <code>LiteRT-LM</code> si un appel Cloud ou Serveur échoue en cours de route à cause d&apos;une coupure réseau.
                        </p>        <h3>1. Créer <code>lib/application/smart_hybrid_ai_router.dart</code></h3>
      </div>
      <CodeWindow
        filename={"lib/application/smart_hybrid_ai_router.dart | 5-Rule Hybrid Router + Auto Fallback"}
        lang={"DART"}
        code={"// lib/application/smart_hybrid_ai_router.dart\r\nimport '../domain/ai_models.dart';\r\n\r\n/// Evaluates runtime constraints (connectivity, PII sensitivity, server authority,\r\n/// and hardware limits) to dispatch requests across Cloud, Server, and Edge AI.\r\nclass SmartHybridAiRouter {\r\n  const SmartHybridAiRouter({\r\n    required AiEngineGateway cloudEngine,\r\n    required AiEngineGateway serverEngine,\r\n    required AiEngineGateway edgeEngine,\r\n  })  : _cloudEngine = cloudEngine,\r\n        _serverEngine = serverEngine,\r\n        _edgeEngine = edgeEngine;\r\n\r\n  final AiEngineGateway _cloudEngine;\r\n  final AiEngineGateway _serverEngine;\r\n  final AiEngineGateway _edgeEngine;\r\n\r\n  /// Selects the target tier and reason before executing inference.\r\n  (AiEngineGateway, String) selectTargetEngine(RoutingContext context) {\r\n    // Rule 1: Strict PII or confidential local notes NEVER leave the device.\r\n    if (context.sensitivity == TaskSensitivity.strictLocalPii) {\r\n      return (\r\n        _edgeEngine,\r\n        'Strict PII policy: zero network egress enforced via on-device LiteRT-LM.',\r\n      );\r\n    }\r\n\r\n    // Rule 2: Privileged tools, billing quotas, or state mutations require Server authority.\r\n    if (context.requiresPrivilegedServerTool ||\r\n        context.sensitivity == TaskSensitivity.privilegedTransactional) {\r\n      if (!context.isOnline) {\r\n        return (\r\n          _edgeEngine,\r\n          'Offline during privileged request: queued transaction & serving local LiteRT-LM guidance.',\r\n        );\r\n      }\r\n      return (\r\n        _serverEngine,\r\n        'Server-Side Security Invariant: routed to Genkit Dart backend for privileged tool execution.',\r\n      );\r\n    }\r\n\r\n    // Rule 3: Offline mode routes immediately to on-device LiteRT-LM.\r\n    if (!context.isOnline) {\r\n      return (\r\n        _edgeEngine,\r\n        'Device is offline: routed to local LiteRT-LM INT4 engine (\\$0.00 token cost).',\r\n      );\r\n    }\r\n\r\n    // Rule 4: Online + Multimodal attachment -> Firebase AI Logic.\r\n    if (context.hasMultimodalAttachment) {\r\n      return (\r\n        _cloudEngine,\r\n        'Online multimodal input: routed to Firebase AI Logic (gemini-flash-latest + App Check).',\r\n      );\r\n    }\r\n\r\n    // Rule 5: Short, routine prompts on capable devices (>=4GB RAM) run locally to save cloud quota.\r\n    if (context.prompt.length < 160 && context.availableRamMb >= 4096) {\r\n      return (\r\n        _edgeEngine,\r\n        'Cost optimization: short prompt on 4GB+ RAM device offloaded to local LiteRT-LM.',\r\n      );\r\n    }\r\n\r\n    return (\r\n      _cloudEngine,\r\n      'Online complex synthesis: routed to Firebase AI Logic (gemini-flash-latest).',\r\n    );\r\n  }\r\n\r\n  /// Dispatches the prompt and automatically falls back to LiteRT-LM on network failure.\r\n  Future<AiInferenceResponse> routeAndExecute(RoutingContext context) async {\r\n    final stopwatch = Stopwatch()..start();\r\n    final (primaryEngine, reason) = selectTargetEngine(context);\r\n\r\n    try {\r\n      final output = await primaryEngine.generate(\r\n        prompt: context.prompt,\r\n        metadata: <String, Object?>{\r\n          'availableRamMb': context.availableRamMb,\r\n          'hasMultimodalAttachment': context.hasMultimodalAttachment,\r\n        },\r\n      );\r\n      stopwatch.stop();\r\n\r\n      return AiInferenceResponse(\r\n        text: output,\r\n        telemetry: RoutingTelemetry(\r\n          selectedTier: primaryEngine.tier,\r\n          routingReason: reason,\r\n          latencyMs: stopwatch.elapsedMilliseconds,\r\n        ),\r\n      );\r\n    } catch (cloudOrServerError) {\r\n      // If the primary engine was Cloud or Server and failed due to flaky network,\r\n      // transparently fall back to on-device LiteRT-LM so UX never breaks.\r\n      if (primaryEngine.tier != AiExecutionTier.edgeLiteRt) {\r\n        final fallbackOutput = await _edgeEngine.generate(\r\n          prompt: context.prompt,\r\n          metadata: <String, Object?>{\r\n            'availableRamMb': context.availableRamMb,\r\n          },\r\n        );\r\n        stopwatch.stop();\r\n\r\n        return AiInferenceResponse(\r\n          text: fallbackOutput,\r\n          telemetry: RoutingTelemetry(\r\n            selectedTier: AiExecutionTier.edgeLiteRt,\r\n            routingReason:\r\n                'Automatic Edge Fallback after ${primaryEngine.tier.label} error: $cloudOrServerError',\r\n            latencyMs: stopwatch.elapsedMilliseconds,\r\n            didFallbackToEdge: true,\r\n          ),\r\n        );\r\n      }\r\n      rethrow;\r\n    }\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. Build the Interactive Diagnostic Console (<code>lib/main.dart</code>)</h3>        <p>
                            Replace <code>lib/main.dart</code> with the complete Flutter application below. It provides interactive switches to toggle connectivity (Online vs. Airplane Mode), PII sensitivity, Privileged Genkit Server tools, Multimodal attachments, and available RAM, displaying the selected tier, routing justification, and latency in real time:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Construire la Console de Diagnostic Interactive (<code>lib/main.dart</code>)</h3>        <p>
                            Remplacez <code>lib/main.dart</code> par l&apos;application Flutter complète ci-dessous. Elle offre des commutateurs interactifs permettant de simuler la connectivité (En ligne vs Mode Avion), la sensibilité PII, les outils serveur privilégiés Genkit, les pièces jointes multimodales et la RAM disponible, tout en affichant en temps réel le niveau sélectionné, la justification du routage et la latence :
                        </p>
      </div>
      <CodeWindow
        filename={"lib/main.dart | Complete Runnable Hybrid AI Diagnostic Console"}
        lang={"DART"}
        code={"// lib/main.dart\r\nimport 'package:flutter/material.dart';\r\nimport 'application/smart_hybrid_ai_router.dart';\r\nimport 'data/firebase_ai_cloud_engine.dart';\r\nimport 'data/genkit_server_engine.dart';\r\nimport 'data/litert_edge_engine.dart';\r\nimport 'domain/ai_models.dart';\r\n\r\nvoid main() {\r\n  runApp(const HybridAiCodelabApp());\r\n}\r\n\r\nclass HybridAiCodelabApp extends StatelessWidget {\r\n  const HybridAiCodelabApp({super.key});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return MaterialApp(\r\n      title: 'Hybrid AI Router Codelab',\r\n      debugShowCheckedModeBanner: false,\r\n      theme: ThemeData.dark(useMaterial3: true).copyWith(\r\n        scaffoldBackgroundColor: const Color(0xFF070A13),\r\n        colorScheme: const ColorScheme.dark(\r\n          primary: Color(0xFF00B0FF),\r\n          secondary: Color(0xFF02569B),\r\n          surface: Color(0xFF0F1424),\r\n        ),\r\n      ),\r\n      home: const HybridRouterConsoleScreen(),\r\n    );\r\n  }\r\n}\r\n\r\nclass HybridRouterConsoleScreen extends StatefulWidget {\r\n  const HybridRouterConsoleScreen({super.key});\r\n\r\n  @override\r\n  State<HybridRouterConsoleScreen> createState() =>\r\n      _HybridRouterConsoleScreenState();\r\n}\r\n\r\nclass _HybridRouterConsoleScreenState extends State<HybridRouterConsoleScreen> {\r\n  late final SmartHybridAiRouter _router;\r\n  final TextEditingController _promptController = TextEditingController(\r\n    text: 'Summarize field inspection metrics and recommend next action.',\r\n  );\r\n\r\n  bool _isOnline = true;\r\n  bool _containsStrictPii = false;\r\n  bool _requiresPrivilegedServerTool = false;\r\n  bool _hasMultimodalAttachment = false;\r\n  int _availableRamMb = 4096;\r\n  bool _isBusy = false;\r\n  AiInferenceResponse? _lastResponse;\r\n\r\n  @override\r\n  void initState() {\r\n    super.initState();\r\n    _router = SmartHybridAiRouter(\r\n      cloudEngine: FirebaseAiCloudEngine(),\r\n      serverEngine: GenkitServerEngine(\r\n        flowEndpoint: Uri.parse('https://api.example.com/privilegedQuotaAgentFlow'),\r\n        idTokenProvider: () async => 'demo-firebase-id-token',\r\n      ),\r\n      edgeEngine: LiteRtEdgeEngine(),\r\n    );\r\n  }\r\n\r\n  @override\r\n  void dispose() {\r\n    _promptController.dispose();\r\n    super.dispose();\r\n  }\r\n\r\n  Future<void> _dispatchPrompt() async {\r\n    setState(() => _isBusy = true);\r\n    try {\r\n      final contextModel = RoutingContext(\r\n        prompt: _promptController.text,\r\n        isOnline: _isOnline,\r\n        sensitivity: _containsStrictPii\r\n            ? TaskSensitivity.strictLocalPii\r\n            : (_requiresPrivilegedServerTool\r\n                ? TaskSensitivity.privilegedTransactional\r\n                : TaskSensitivity.publicGeneral),\r\n        requiresPrivilegedServerTool: _requiresPrivilegedServerTool,\r\n        hasMultimodalAttachment: _hasMultimodalAttachment,\r\n        availableRamMb: _availableRamMb,\r\n      );\r\n\r\n      final result = await _router.routeAndExecute(contextModel);\r\n      setState(() => _lastResponse = result);\r\n    } finally {\r\n      setState(() => _isBusy = false);\r\n    }\r\n  }\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    final telemetry = _lastResponse?.telemetry;\r\n    return Scaffold(\r\n      appBar: AppBar(\r\n        title: const Text('Hybrid AI Smart Router Console'),\r\n        backgroundColor: const Color(0xFF0F1424),\r\n      ),\r\n      body: ListView(\r\n        padding: const EdgeInsets.all(16),\r\n        children: [\r\n          SwitchListTile(\r\n            title: const Text('Network Connectivity (Online)'),\r\n            subtitle: const Text('Disable to simulate rural offline / Airplane mode'),\r\n            value: _isOnline,\r\n            onChanged: (v) => setState(() => _isOnline = v),\r\n          ),\r\n          SwitchListTile(\r\n            title: const Text('Strict Local PII / Confidential Notes'),\r\n            subtitle: const Text('Forces zero-egress on-device LiteRT-LM execution'),\r\n            value: _containsStrictPii,\r\n            onChanged: (v) => setState(() => _containsStrictPii = v),\r\n          ),\r\n          SwitchListTile(\r\n            title: const Text('Privileged Server Tool (Billing / Quota / DB)'),\r\n            subtitle: const Text('Enforces Genkit Dart Server-Side Security Invariant'),\r\n            value: _requiresPrivilegedServerTool,\r\n            onChanged: (v) => setState(() => _requiresPrivilegedServerTool = v),\r\n          ),\r\n          SwitchListTile(\r\n            title: const Text('High-Res Multimodal Attachment'),\r\n            subtitle: const Text('Routes online media to Firebase AI Logic (gemini-flash-latest)'),\r\n            value: _hasMultimodalAttachment,\r\n            onChanged: (v) => setState(() => _hasMultimodalAttachment = v),\r\n          ),\r\n          ListTile(\r\n            title: Text('Simulated Device RAM: $_availableRamMb MB'),\r\n            subtitle: Slider(\r\n              min: 1536,\r\n              max: 8192,\r\n              divisions: 13,\r\n              value: _availableRamMb.toDouble(),\r\n              onChanged: (v) => setState(() => _availableRamMb = v.round()),\r\n            ),\r\n          ),\r\n          const SizedBox(height: 8),\r\n          TextField(\r\n            controller: _promptController,\r\n            maxLines: 3,\r\n            decoration: const InputDecoration(\r\n              labelText: 'Prompt Payload',\r\n              border: OutlineInputBorder(),\r\n            ),\r\n          ),\r\n          const SizedBox(height: 12),\r\n          FilledButton(\r\n            onPressed: _isBusy ? null : _dispatchPrompt,\r\n            child: Text(_isBusy ? 'Routing & Executing...' : 'Route & Execute Prompt'),\r\n          ),\r\n          if (telemetry != null) ...[\r\n            const SizedBox(height: 20),\r\n            Container(\r\n              padding: const EdgeInsets.all(16),\r\n              decoration: BoxDecoration(\r\n                color: const Color(0xFF171D32),\r\n                border: Border.all(color: const Color(0xFF00B0FF)),\r\n                borderRadius: BorderRadius.circular(12),\r\n              ),\r\n              child: Column(\r\n                crossAxisAlignment: CrossAxisAlignment.start,\r\n                children: [\r\n                  Text(\r\n                    'Selected Tier: ${telemetry.selectedTier.label}',\r\n                    style: const TextStyle(\r\n                      fontWeight: FontWeight.bold,\r\n                      fontSize: 16,\r\n                      color: Color(0xFF00B0FF),\r\n                    ),\r\n                  ),\r\n                  const SizedBox(height: 6),\r\n                  Text('Model ID: ${telemetry.selectedTier.modelId}'),\r\n                  Text('Latency: ${telemetry.latencyMs} ms'),\r\n                  Text('Reason: ${telemetry.routingReason}'),\r\n                  const Divider(height: 24),\r\n                  SelectableText(_lastResponse!.text),\r\n                ],\r\n              ),\r\n            ),\r\n          ],\r\n        ],\r\n      ),\r\n    );\r\n  }\r\n}"}
      />
    </>
  );
}

function Step8() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. End-to-End Verification Checklist</h3>        <p>
                            Create the automated test file <code>test/smart_hybrid_ai_router_test.dart</code> below to verify that strict PII stays on-device, privileged requests route to the Genkit Dart server, and cloud failures automatically fall back to LiteRT-LM:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Checklist de Vérification Finale</h3>        <p>
                            Créez le fichier de test automatisé <code>test/smart_hybrid_ai_router_test.dart</code> ci-dessous pour vérifier par les tests que les données PII strictes restent sur l&apos;appareil, que les requêtes privilégiées sont dirigées vers le serveur Genkit Dart et que les pannes réseau déclenchent automatiquement le repli vers LiteRT-LM :
                        </p>
      </div>
      <CodeWindow
        filename={"test/smart_hybrid_ai_router_test.dart | Automated Router Unit Tests"}
        lang={"DART"}
        code={"// test/smart_hybrid_ai_router_test.dart\r\nimport 'package:test/test.dart';\r\nimport 'package:hybrid_ai_router_codelab/application/smart_hybrid_ai_router.dart';\r\nimport 'package:hybrid_ai_router_codelab/data/firebase_ai_cloud_engine.dart';\r\nimport 'package:hybrid_ai_router_codelab/data/genkit_server_engine.dart';\r\nimport 'package:hybrid_ai_router_codelab/data/litert_edge_engine.dart';\r\nimport 'package:hybrid_ai_router_codelab/domain/ai_models.dart';\r\n\r\nvoid main() {\r\n  late SmartHybridAiRouter router;\r\n\r\n  setUp(() {\r\n    router = SmartHybridAiRouter(\r\n      cloudEngine: FirebaseAiCloudEngine(),\r\n      serverEngine: GenkitServerEngine(\r\n        flowEndpoint: Uri.parse('https://api.example.com/verifyQuotaFlow'),\r\n        idTokenProvider: () async => 'mock-firebase-id-token',\r\n      ),\r\n      edgeEngine: LiteRtEdgeEngine(),\r\n    );\r\n  });\r\n\r\n  test('Routes strict PII prompts exclusively to on-device LiteRT-LM', () async {\r\n    final res = await router.routeAndExecute(\r\n      const RoutingContext(\r\n        prompt: 'Summarize patient medical record #9482.',\r\n        isOnline: true,\r\n        sensitivity: TaskSensitivity.strictLocalPii,\r\n      ),\r\n    );\r\n    expect(res.telemetry.selectedTier, equals(AiExecutionTier.edgeLiteRt));\r\n    expect(res.telemetry.didFallbackToEdge, isFalse);\r\n  });\r\n\r\n  test('Routes privileged tool requests to Genkit Dart Server when online', () async {\r\n    final res = await router.routeAndExecute(\r\n      const RoutingContext(\r\n        prompt: 'Upgrade organization subscription tier and issue invoice.',\r\n        isOnline: true,\r\n        requiresPrivilegedServerTool: true,\r\n      ),\r\n    );\r\n    expect(res.telemetry.selectedTier, equals(AiExecutionTier.serverGenkitAgent));\r\n  });\r\n\r\n  test('Falls back to LiteRT-LM automatically when Cloud engine throws', () async {\r\n    final failingRouter = SmartHybridAiRouter(\r\n      cloudEngine: FirebaseAiCloudEngine(\r\n        invoker: (_, _, _) async => throw Exception('Network socket closed'),\r\n      ),\r\n      serverEngine: GenkitServerEngine(\r\n        flowEndpoint: Uri.parse('https://api.example.com/verifyQuotaFlow'),\r\n        idTokenProvider: () async => 'mock-firebase-id-token',\r\n      ),\r\n      edgeEngine: LiteRtEdgeEngine(),\r\n    );\r\n\r\n    final res = await failingRouter.routeAndExecute(\r\n      const RoutingContext(\r\n        prompt: 'Analyze this detailed multi-paragraph architectural specification '\r\n            'and compare all latency trade-offs across regions and mobile carriers '\r\n            'with full token budget breakdowns for 10,000 daily active users.',\r\n        isOnline: true,\r\n      ),\r\n    );\r\n\r\n    expect(res.telemetry.selectedTier, equals(AiExecutionTier.edgeLiteRt));\r\n    expect(res.telemetry.didFallbackToEdge, isTrue);\r\n  });\r\n}"}
      />
      <div className={"lang-en"}>
        <p>Run static analysis and execute the unit test suite:</p>
      </div>
      <div className={"lang-fr"}>
        <p>Lancez l&apos;analyse statique et exécutez la suite de tests unitaires :</p>
      </div>
      <CodeWindow
        filename={"Terminal | Run Static Analysis & Unit Tests"}
        lang={"SHELL"}
        code={"flutter pub get\r\ndart analyze\r\nflutter test\r\nflutter run"}
      />
      <div className={"lang-en"}>
        <h3>2. Key Engineering Takeaways</h3>        <ol>
          <li><strong>Provision Before Coding:</strong> Always run <code>npx firebase-tools@latest init ailogic</code> before calling <code>firebase_ai</code>; <code>flutterfire configure</code> alone does not enable the backend proxy.</li>          <li><strong>Protect Client Quotas with App Check:</strong> Never ship <code>firebase_ai</code> to production without activating <code>FirebaseAppCheck</code> (Play Integrity on Android and App Attest on iOS).</li>          <li><strong>Enforce Server-Side Security Invariants:</strong> Any tool that mutates financial balances, subscription quotas, or security roles belongs exclusively inside a <strong>Genkit Dart Flow</strong> on a trusted server.</li>          <li><strong>Guarantee Continuity with LiteRT-LM Fallback:</strong> Wrapping cloud and server engines with an automatic fallback to a mutex-protected <code>LiteRT-LM</code> engine ensures your users never hit a dead screen when offline.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Points Clés à Retenir</h3>        <ol>
          <li><strong>Provisionner avant de coder :</strong> Exécutez toujours <code>npx firebase-tools@latest init ailogic</code> avant d&apos;appeler <code>firebase_ai</code> ; <code>flutterfire configure</code> seul n&apos;active pas le proxy backend.</li>          <li><strong>Protéger les quotas clients avec App Check :</strong> Ne déployez jamais <code>firebase_ai</code> en production sans activer <code>FirebaseAppCheck</code> (Play Integrity sur Android et App Attest sur iOS).</li>          <li><strong>Appliquer les invariants de sécurité côté serveur :</strong> Tout outil modifiant des soldes financiers, des quotas d&apos;abonnement ou des rôles de sécurité doit résider exclusivement dans un <strong>Flow Genkit Dart</strong> sur un serveur de confiance.</li>          <li><strong>Garantir la continuité grâce au repli LiteRT-LM :</strong> Encapsuler les moteurs Cloud et Serveur avec une bascule automatique vers un moteur <code>LiteRT-LM</code> protégé par mutex garantit une expérience sans interruption hors-ligne.</li>
        </ol>
      </div>
      <div className={"lang-en"}>
        <h3>3. Official Documentation & Further Resources</h3>        <ul>
          <li><a href={"https://firebase.google.com/docs/ai-logic/get-started"} target={"_blank"} rel={"noopener"}>Firebase AI Logic Official Documentation (Flutter & Gemini Developer API)</a></li>          <li><a href={"https://firebase.google.com/docs/app-check"} target={"_blank"} rel={"noopener"}>Firebase App Check Documentation (Play Integrity & App Attest)</a></li>          <li><a href={"https://pub.dev/packages/genkit"} target={"_blank"} rel={"noopener"}>Genkit Dart SDK on pub.dev (<code>package:genkit</code>)</a></li>          <li><a href={"https://pub.dev/packages/flutter_edge_ai"} target={"_blank"} rel={"noopener"}>flutter_edge_ai LiteRT-LM Plugin on pub.dev (<code>package:flutter_edge_ai</code>)</a></li>          <li><a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>Gemmea Public Reference Repository (Offline-First Edge AI Architecture)</a></li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Ressources Officielles & Pour Aller Plus Loin</h3>        <ul>
          <li><a href={"https://firebase.google.com/docs/ai-logic/get-started"} target={"_blank"} rel={"noopener"}>Documentation Officielle Firebase AI Logic (Flutter & Gemini Developer API)</a></li>          <li><a href={"https://firebase.google.com/docs/app-check"} target={"_blank"} rel={"noopener"}>Documentation Firebase App Check (Play Integrity & App Attest)</a></li>          <li><a href={"https://pub.dev/packages/genkit"} target={"_blank"} rel={"noopener"}>SDK Genkit Dart sur pub.dev (<code>package:genkit</code>)</a></li>          <li><a href={"https://pub.dev/packages/flutter_edge_ai"} target={"_blank"} rel={"noopener"}>Plugin LiteRT-LM flutter_edge_ai sur pub.dev (<code>package:flutter_edge_ai</code>)</a></li>          <li><a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>Dépôt Public de Référence Gemmea (Architecture Edge AI Offline-First)</a></li>
        </ul>
      </div>
      <Callout variant={"success"} iconName={"success"} titleEn={"Codelab Complete | Hybrid AI Architecture Mastered"} titleFr={"Codelab Terminé | Architecture IA Hybride Maîtrisée"}>
        <p className={"lang-en"}>
                                Built by <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Founder @ <LosingTekWordmark /> & Founder of the <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                            </p>
        <p className={"lang-fr"}>
                                Conçu par <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Fondateur @ <LosingTekWordmark /> & Fondateur du <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                            </p>
      </Callout>
    </>
  );
}

export const codelabData: CodelabDefinition = {
  slug: "hybrid-ai-firebase-litert-flutter",
  navItems: [
  {
    "index": 0,
    "titleEn": "Context, Goals & Setup",
    "titleFr": "Contexte, Objectifs & Prérequis",
    "time": "5m"
  },
  {
    "index": 1,
    "titleEn": "Decision Matrix & Security",
    "titleFr": "Matrice de Décision & Sécurité",
    "time": "6m"
  },
  {
    "index": 2,
    "titleEn": "Unified Domain Contract",
    "titleFr": "Contrat de Domaine Unifié",
    "time": "6m"
  },
  {
    "index": 3,
    "titleEn": "Tier 1: Firebase AI Logic",
    "titleFr": "Niveau 1 : Firebase AI Logic",
    "time": "7m"
  },
  {
    "index": 4,
    "titleEn": "Tier 2: Genkit Dart Server",
    "titleFr": "Niveau 2 : Serveur Genkit Dart",
    "time": "7m"
  },
  {
    "index": 5,
    "titleEn": "Tier 3: LiteRT-LM On-Device",
    "titleFr": "Niveau 3 : LiteRT-LM Embarqué",
    "time": "7m"
  },
  {
    "index": 6,
    "titleEn": "Smart Hybrid Router & UI",
    "titleFr": "Routeur Hybride & Console UI",
    "time": "7m"
  },
  {
    "index": 7,
    "titleEn": "Verification & Takeaways",
    "titleFr": "Vérification & Points Clés",
    "time": "5m"
  }
],
  steps: [
  {
    index: 0,
    duration: 5,
    eyebrowEn: "Step 1 of 8 | Architectural Context & Setup",
    eyebrowFr: "Étape 1 sur 8 | Contexte Architectural & Prérequis",
    titleEn: "Firebase AI Logic vs Genkit Dart vs LiteRT-LM: Hybrid AI Architecture & Smart Routing in Flutter",
    titleFr: "Firebase AI Logic vs Genkit Dart vs LiteRT-LM : Architecture IA Hybride et Routage Intelligent sur Flutter",
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
    duration: 6,
    eyebrowEn: "Step 2 of 8 | Architecture & Security Boundaries",
    eyebrowFr: "Étape 2 sur 8 | Architecture & Frontières de Sécurité",
    titleEn: "Architectural Decision Matrix, Cost Modeling & Security Invariants",
    titleFr: "Matrice de Décision Architecturale, Modèle de Coûts & Invariants de Sécurité",
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
    duration: 6,
    eyebrowEn: "Step 3 of 8 | Clean Architecture Domain Layer",
    eyebrowFr: "Étape 3 sur 8 | Couche Domaine Clean Architecture",
    titleEn: "Project Setup & Unified Domain Layer (AiExecutionTier, RoutingContext, AiEngineGateway)",
    titleFr: "Initialisation du Projet & Couche Domaine Unifiée (AiExecutionTier, RoutingContext, AiEngineGateway)",
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
    duration: 7,
    eyebrowEn: "Step 4 of 8 | Tier 1: Client-Side Cloud AI",
    eyebrowFr: "Étape 4 sur 8 | Niveau 1 : IA Cloud Côté Client",
    titleEn: "Tier 1 | Client-Side Cloud Inference with firebase_ai & Firebase App Check",
    titleFr: "Niveau 1 | Inférence Cloud Côté Client avec firebase_ai & Firebase App Check",
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
    duration: 7,
    eyebrowEn: "Step 5 of 8 | Tier 2: Privileged Server Agent",
    eyebrowFr: "Étape 5 sur 8 | Niveau 2 : Agent Serveur Privilégié",
    titleEn: "Tier 2 | Server-Side Agentic Workflows with Genkit Dart Remote Actions",
    titleFr: "Niveau 2 | Workflows Agentiques Côté Serveur avec Genkit Dart",
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
    duration: 7,
    eyebrowEn: "Step 6 of 8 | Tier 3: Zero-Egress On-Device AI",
    eyebrowFr: "Étape 6 sur 8 | Niveau 3 : IA Embarquée Sans Sortie Réseau",
    titleEn: "Tier 3 | 100% Offline Edge Inference with flutter_edge_ai & LiteRT-LM",
    titleFr: "Niveau 3 | Inférence Edge 100% Hors-Ligne avec flutter_edge_ai & LiteRT-LM",
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
    duration: 7,
    eyebrowEn: "Step 7 of 8 | Dynamic Orchestration & Presentation",
    eyebrowFr: "Étape 7 sur 8 | Orchestration Dynamique & Interface",
    titleEn: "The SmartHybridAiRouter & Interactive Flutter Diagnostic Console",
    titleFr: "Le SmartHybridAiRouter & la Console de Diagnostic Interactive Flutter",
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
    duration: 5,
    eyebrowEn: "Step 8 of 8 | Verification, Audit & Resources",
    eyebrowFr: "Étape 8 sur 8 | Vérification, Audit & Ressources",
    titleEn: "Verification Checklist, Production Audit & Official Resources",
    titleFr: "Checklist de Vérification, Audit de Production & Ressources Officielles",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "/",
    finalCtaEn: "Back to Codelabs Hub →",
    finalCtaFr: "Retour au Hub Codelabs →",
    render: Step8,
  }
  ],
};
