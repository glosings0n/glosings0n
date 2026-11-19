import { FlutterFireCampWordmark, LosingTekWordmark } from "@repo/ui";
import { Callout } from "@/components/Callout";
import { CodeWindow } from "@/components/CodeWindow";
import type { CodelabDefinition } from "./types";

function Step1() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. Context & The &quot;Why&quot;: Why Client-Embedded Cloud LLM Calls Fail in Production</h3>        <p>
                            When mobile teams prototype their first cloud-powered AI feature in Flutter, the most common shortcut is calling the Gemini REST SDK directly from the mobile binary. While convenient for a hackathon, shipping direct cloud LLM calls inside a production APK or IPA creates three critical engineering failures:
                        </p>        <ol>
          <li><strong>Credential Extraction & Billing Abuse:</strong> Any API key compiled into a mobile binary or passed via <code>--dart-define</code> can be extracted via static decompilation (`strings`, `jadx`) or TLS proxy inspection (`mitmproxy`), exposing your cloud billing quota to unlimited abuse.</li>          <li><strong>Prompt Tampering & Bypassed Business Rules:</strong> If the mobile app constructs the system prompt or executes tool callbacks locally, a modified client can spoof tool outputs, bypass regional order quotas, or inject unauthorized discounts.</li>          <li><strong>Schema Drift Between Backend & Mobile:</strong> Historically, moving AI orchestration to the backend forced Flutter teams to maintain a Python or Node.js microservice, duplicating JSON serialization logic and breaking compile-time type safety across the wire.</li>
        </ol>        <p><strong>Genkit Dart</strong> eliminates this trade-off. You write your AI flows, server-side tools, human-in-the-loop guardrails, and HTTP endpoints in <strong>100% pure Dart</strong> on the server, and share the exact same <code>schemantic</code> data contracts with your Flutter client.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Contexte & Pourquoi : L&apos;échec des appels LLM Cloud embarqués côté client</h3>        <p>
                            Lorsqu&apos;une équipe mobile prototype sa première fonctionnalité IA Cloud dans Flutter, le raccourci le plus fréquent consiste à appeler l&apos;API Gemini directement depuis le binaire mobile. Bien que pratique pour une démonstration rapide, embarquer des appels LLM Cloud directement dans un APK ou IPA de production entraîne trois failles majeures :
                        </p>        <ol>
          <li><strong>Extraction de clés API & Abus de facturation :</strong> Toute clé API compilée dans un binaire mobile ou injectée via <code>--dart-define</code> peut être extraite par décompilation statique (`strings`, `jadx`) ou interception réseau (`mitmproxy`), exposant votre quota Cloud à des abus illimités.</li>          <li><strong>Altération des Prompts & Contournement des règles métier :</strong> Si l&apos;application mobile construit le prompt système ou exécute les outils localement, un client modifié peut falsifier les réponses d&apos;outils, contourner les quotas régionaux ou s&apos;attribuer des remises non autorisées.</li>          <li><strong>Divergence de schémas entre Backend et Mobile :</strong> Historiquement, déporter l&apos;orchestration IA côté serveur obligeait les équipes Flutter à maintenir un microservice Python ou Node.js, dupliquant la sérialisation JSON et brisant le typage fort de bout en bout.</li>
        </ol>        <p><strong>Genkit Dart</strong> résout définitivement ce dilemme. Vous développez vos flows IA, vos outils serveur, vos garde-fous avec validation humaine et vos endpoints HTTP en <strong>100% pur Dart</strong> côté serveur, tout en partageant exactement les mêmes contrats <code>schemantic</code> avec votre client Flutter.
                        </p>
      </div>
      <Callout variant={"info"} iconName={"info"} titleEn={"One Language, Shared Schemas, Zero Drift"} titleFr={"One Language, Shared Schemas, Zero Drift"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
One Language, Shared Schemas, Zero Drift
          </div>          <p>
                                    With <code>schemantic</code> + <code>genkit</code> + <code>genkit_shelf</code> on the backend and <code>package:genkit/client.dart</code> in Flutter, a single <code>@Schema()</code> definition validates LLM structured outputs on the server and deserializes streaming responses on the phone.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
Un seul langage, des schémas partagés, zéro divergence
          </div>          <p>
                                    Avec <code>schemantic</code> + <code>genkit</code> + <code>genkit_shelf</code> côté serveur et <code>package:genkit/client.dart</code> dans Flutter, une seule définition <code>@Schema()</code> valide la sortie structurée du LLM sur le serveur et désérialise les flux en temps réel sur le téléphone.
                                </p>
        </div>
      </Callout>
      <div className={"lang-en"}>
        <h3>2. Learning Goals & What You Will Build</h3>        <p>
                            In this 45-minute engineering codelab, you will build a complete B2B supply-chain compliance & order audit workspace (<code>agentic_commerce_workspace</code>) organized as a pure Dart & Flutter monorepo:
                        </p>        <ul>
          <li><strong>Shared Typed Contracts (<code>packages/shared_contracts</code>):</strong> Define compile-time and runtime JSON schemas using <code>schemantic</code> (<code>$OrderAuditInput</code>, <code>$OrderAuditResult</code>, <code>$InventoryLookupInput</code>, <code>$PartnerDiscountInput</code>) with field boundary constraints.</li>          <li><strong>Genkit Dart Server & Structured Output Flows (<code>packages/agent_server</code>):</strong> Configure <code>Genkit(plugins: [googleAI()])</code> with <code>gemini-2.5-flash</code> and enforce strict JSON schema conformance via <code>outputSchema</code>.</li>          <li><strong>Authoritative Server-Side Tools:</strong> Register <code>verifyInventoryAndQuota</code> and <code>applyPartnerDiscount</code> via <code>ai.defineTool</code> so prices, stock levels, and regional quotas are resolved strictly on the server.</li>          <li><strong>Human-in-the-Loop Guardrails (<code>genkit_middleware</code>):</strong> Intercept sensitive state-mutating tool calls with <code>ToolApprovalPlugin()</code>, handle <code>FinishReason.interrupted</code>, and resume generation safely via <code>interruptRestart</code>.</li>          <li><strong>Real-Time Streaming & Shelf HTTP Server (<code>genkit_shelf</code>):</strong> Stream live audit progress chunks via <code>context.sendChunk()</code> while returning a final strongly typed <code>OrderAuditResult</code>, mounted onto a custom <code>shelf_router</code> pipeline.</li>          <li><strong>Flutter Streaming Client (<code>apps/flutter_client</code>):</strong> Consume both unary and streaming remote flows using <code>defineRemoteAction</code> from <code>package:genkit/client.dart</code>.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Objectifs & Ce que vous allez construire</h3>        <p>
                            Au cours de ce codelab technique de 45 minutes, vous allez construire un système complet d&apos;audit et de conformité de commandes B2B (<code>agentic_commerce_workspace</code>) structuré en monorepo Dart & Flutter :
                        </p>        <ul>
          <li><strong>Contrats Typés Partagés (<code>packages/shared_contracts</code>) :</strong> Définir des schémas JSON validés à la compilation et à l&apos;exécution avec <code>schemantic</code> (<code>$OrderAuditInput</code>, <code>$OrderAuditResult</code>, <code>$InventoryLookupInput</code>, <code>$PartnerDiscountInput</code>).</li>          <li><strong>Serveur Genkit Dart & Flows à Sortie Structurée (<code>packages/agent_server</code>) :</strong> Initialiser <code>Genkit(plugins: [googleAI()])</code> avec <code>gemini-2.5-flash</code> et imposer un schéma de sortie strict via <code>outputSchema</code>.</li>          <li><strong>Outils Serveur Autoritatifs :</strong> Enregistrer <code>verifyInventoryAndQuota</code> et <code>applyPartnerDiscount</code> avec <code>ai.defineTool</code> afin que les prix, les stocks et les quotas régionaux soient vérifiés exclusivement côté serveur.</li>          <li><strong>Garde-fous Human-in-the-Loop (<code>genkit_middleware</code>) :</strong> Intercepter les appels d&apos;outils sensibles avec <code>ToolApprovalPlugin()</code>, gérer l&apos;état <code>FinishReason.interrupted</code> et reprendre l&apos;exécution après approbation via <code>interruptRestart</code>.</li>          <li><strong>Streaming Temps Réel & Serveur HTTP Shelf (<code>genkit_shelf</code>) :</strong> Diffuser la narration d&apos;audit en direct via <code>context.sendChunk()</code> tout en retournant un objet final typé <code>OrderAuditResult</code> exposé sur <code>shelf_router</code>.</li>          <li><strong>Client Flutter Streaming (<code>apps/flutter_client</code>) :</strong> Consommer les flows distants en mode unitaire et streaming avec <code>defineRemoteAction</code> de <code>package:genkit/client.dart</code>.</li>
        </ul>
      </div>
      <div className={"table-responsive"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Architectural Layer</th>              <th>Client-Direct LLM Anti-Pattern</th>              <th>Full-Stack Genkit Dart + Shelf</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>API Key Custody</strong></td>              <td>Exposed inside APK/IPA binary</td>              <td><strong>100% isolated in server environment</strong></td>
            </tr>            <tr>
              <td><strong>Contract Type Safety</strong></td>              <td>Unverified raw JSON maps</td>              <td><strong>Shared Schemantic classes (Server + Flutter)</strong></td>
            </tr>            <tr>
              <td><strong>Tool Execution Trust</strong></td>              <td>Untrusted client-side callbacks</td>              <td><strong>Authoritative server tools + HITL middleware</strong></td>
            </tr>            <tr>
              <td><strong>Observability & Tracing</strong></td>              <td>Blind console logs on user devices</td>              <td><strong>Full step-by-step spans in Genkit Dev UI</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"lang-en"}>
        <h3>3. Prerequisites & System Requirements</h3>        <p>
                            Ensure your workstation meets the following requirements before starting Step 2:
                        </p>        <ul>
          <li><strong>Dart SDK:</strong> <code>&gt;=3.12.0</code> (or Flutter SDK <code>&gt;=3.29.0</code> bundling modern Dart).</li>          <li><strong>Genkit CLI:</strong> Installed globally to launch the local reflection & trace inspector UI on port <code>4000</code>.</li>          <li><strong>Google AI Gemini API Key:</strong> Exported as the <code>GEMINI_API_KEY</code> environment variable on your server machine (never hardcoded in source files).</li>
        </ul>        <p>Run the pre-flight verification commands below in your terminal:</p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Prérequis & Configuration Système</h3>        <p>
                            Vérifiez que votre poste de travail respecte les prérequis suivants avant de passer à l&apos;étape 2 :
                        </p>        <ul>
          <li><strong>SDK Dart :</strong> <code>&gt;=3.12.0</code> (ou SDK Flutter <code>&gt;=3.29.0</code> incluant Dart moderne).</li>          <li><strong>Genkit CLI :</strong> Installé globalement pour lancer l&apos;interface locale d&apos;inspection des traces sur le port <code>4000</code>.</li>          <li><strong>Clé API Google AI Gemini :</strong> Définie dans la variable d&apos;environnement <code>GEMINI_API_KEY</code> côté serveur (jamais écrite en dur dans le code source).</li>
        </ul>        <p>Exécutez les commandes de vérification pré-vol ci-dessous dans votre terminal :</p>
      </div>
      <CodeWindow
        filename={"Terminal | Pre-Flight Verification (macOS / Linux / Git Bash & Windows PowerShell)"}
        lang={"SHELL"}
        code={"# 1. Verify Dart and Flutter SDK versions\r\ndart --version\r\nflutter --version\r\n\r\n# 2. Install the Genkit CLI globally (choose cURL or npm)\r\ncurl -sL cli.genkit.dev | bash\r\n# OR via npm:\r\nnpm install -g genkit-cli\r\n\r\n# 3. Verify Genkit CLI installation\r\ngenkit --version"}
      />
    </>
  );
}

function Step2() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            We will organize our project as a clean 3-package workspace (<code>agentic_commerce_workspace</code>) so that our Shelf backend and our Flutter application import the exact same schema definitions:
                        </p>        <ul>
          <li><code>packages/shared_contracts</code>: Pure Dart package containing our <code>@Schema()</code> definitions and generated <code>.g.dart</code> runtime JSON Schemas.</li>          <li><code>packages/agent_server</code>: Dart backend powered by <code>genkit</code>, <code>genkit_google_genai</code>, <code>genkit_middleware</code>, and <code>genkit_shelf</code>.</li>          <li><code>apps/flutter_client</code>: Cross-platform Flutter app consuming our server flows via <code>package:genkit/client.dart</code>.</li>
        </ul>        <h3>1. Create the Monorepo Directory Structure</h3>        <p>
                            Run the commands below for your operating system to scaffold the workspace directories:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Nous allons organiser notre projet sous forme d&apos;un workspace propre à 3 paquets (<code>agentic_commerce_workspace</code>) afin que notre backend Shelf et notre application Flutter importent exactement les mêmes définitions de schémas :
                        </p>        <ul>
          <li><code>packages/shared_contracts</code> : Paquet pur Dart contenant nos définitions <code>@Schema()</code> et les schémas JSON <code>.g.dart</code> générés.</li>          <li><code>packages/agent_server</code> : Backend Dart propulsé par <code>genkit</code>, <code>genkit_google_genai</code>, <code>genkit_middleware</code> et <code>genkit_shelf</code>.</li>          <li><code>apps/flutter_client</code> : Application Flutter multiplateforme consommant nos flows serveur via <code>package:genkit/client.dart</code>.</li>
        </ul>        <h3>1. Créer l&apos;arborescence du Monorepo</h3>        <p>
                            Exécutez les commandes ci-dessous selon votre système d&apos;exploitation pour initialiser les dossiers du workspace :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Create Workspace Folders (macOS / Linux / Git Bash & PowerShell)"}
        lang={"SHELL"}
        code={"# macOS / Linux / Git Bash\r\nmkdir -p agentic_commerce_workspace/packages/shared_contracts/lib\r\nmkdir -p agentic_commerce_workspace/packages/agent_server/lib/flows\r\nmkdir -p agentic_commerce_workspace/packages/agent_server/lib/tools\r\nmkdir -p agentic_commerce_workspace/packages/agent_server/bin\r\ncd agentic_commerce_workspace\r\n\r\n# Windows PowerShell\r\nNew-Item -ItemType Directory -Force -Path \"agentic_commerce_workspace\\packages\\shared_contracts\\lib\"\r\nNew-Item -ItemType Directory -Force -Path \"agentic_commerce_workspace\\packages\\agent_server\\lib\\flows\"\r\nNew-Item -ItemType Directory -Force -Path \"agentic_commerce_workspace\\packages\\agent_server\\lib\\tools\"\r\nNew-Item -ItemType Directory -Force -Path \"agentic_commerce_workspace\\packages\\agent_server\\bin\"\r\nSet-Location agentic_commerce_workspace"}
      />
      <div className={"lang-en"}>
        <h3>2. Complete File: <code>packages/shared_contracts/pubspec.yaml</code></h3>        <p>
                            The <code>schemantic</code> library binds strongly typed Dart classes to runtime JSON Schemas. In <code>dev_dependencies</code>, we include <code>schemantic_builder</code> and <code>build_runner</code> to generate the concrete implementation classes and static <code>$schema</code> descriptors:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Fichier complet : <code>packages/shared_contracts/pubspec.yaml</code></h3>        <p>
                            La bibliothèque <code>schemantic</code> relie des classes Dart fortement typées à des schémas JSON d&apos;exécution. Dans <code>dev_dependencies</code>, nous incluons <code>schemantic_builder</code> et <code>build_runner</code> pour générer les classes concrètes ainsi que les descripteurs statiques <code>$schema</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/shared_contracts/pubspec.yaml"}
        lang={"YAML"}
        code={"name: shared_contracts\r\ndescription: Shared Schemantic data contracts for Genkit server and Flutter client.\r\nversion: 1.0.0\r\npublish_to: 'none'\r\n\r\nenvironment:\r\n  sdk: ^3.12.0\r\n\r\ndependencies:\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  schemantic:\r\n\r\ndev_dependencies:\r\n  build_runner:\r\n  lints:\r\n  schemantic_builder:"}
      />
      <div className={"lang-en"}>
        <h3>3. Complete File: <code>packages/shared_contracts/lib/agent_contracts.dart</code></h3>        <p>
                            In <code>schemantic</code>, you annotate abstract schema blueprints with <code>@Schema()</code> and prefix the abstract class name with <code>$</code> (for example, <code>$OrderAuditInput</code>). Field annotations like <code>@IntegerField</code> and <code>@StringField</code> embed validation boundaries (`minimum`, `maximum`, `enumValues`, `description`) directly into the JSON Schema sent to Gemini:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Fichier complet : <code>packages/shared_contracts/lib/agent_contracts.dart</code></h3>        <p>
                            Avec <code>schemantic</code>, vous annotez vos classes abstraites avec <code>@Schema()</code> en préfixant leur nom par <code>$</code> (par exemple <code>$OrderAuditInput</code>). Les annotations de champs telles que <code>@IntegerField</code> et <code>@StringField</code> intègrent directement les contraintes de validation (`minimum`, `maximum`, `enumValues`, `description`) dans le schéma JSON transmis à Gemini :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/shared_contracts/lib/agent_contracts.dart"}
        lang={"DART"}
        code={"import 'package:schemantic/schemantic.dart';\r\n\r\npart 'agent_contracts.g.dart';\r\n\r\n@Schema()\r\nabstract class $OrderAuditInput {\r\n  String get orderId;\r\n  String get sku;\r\n\r\n  @IntegerField(\r\n    minimum: 1,\r\n    description: 'Requested unit count for the wholesale order',\r\n  )\r\n  int get quantity;\r\n\r\n  @StringField(\r\n    minLength: 2,\r\n    enumValues: ['EAST_AFRICA', 'CENTRAL_AFRICA', 'WEST_AFRICA'],\r\n    description: 'Target fulfillment corridor',\r\n  )\r\n  String get region;\r\n\r\n  String? get partnerCode;\r\n}\r\n\r\n@Schema()\r\nabstract class $OrderAuditResult {\r\n  String get orderId;\r\n  bool get approved;\r\n\r\n  @StringField(\r\n    enumValues: ['APPROVED', 'HOLD_QUOTA_EXCEEDED', 'REJECTED_OUT_OF_STOCK'],\r\n  )\r\n  String get status;\r\n\r\n  @IntegerField(\r\n    minimum: 0,\r\n    description: 'Verified units allocated from regional warehouse',\r\n  )\r\n  int get allocatedQuantity;\r\n\r\n  double get finalTotalUsd;\r\n  String get reasoningSummary;\r\n}\r\n\r\n@Schema()\r\nabstract class $InventoryLookupInput {\r\n  String get sku;\r\n  String get region;\r\n\r\n  @IntegerField(minimum: 1)\r\n  int get requestedUnits;\r\n}\r\n\r\n@Schema()\r\nabstract class $PartnerDiscountInput {\r\n  String get orderId;\r\n  String get partnerCode;\r\n\r\n  @IntegerField(\r\n    minimum: 1,\r\n    maximum: 50,\r\n    description: 'Requested partner discount percentage (1 to 50)',\r\n  )\r\n  int get requestedDiscountPct;\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>4. Generate the Concrete Classes & Runtime Schemas</h3>        <p>
                            Run <code>build_runner</code> inside <code>packages/shared_contracts</code> to generate <code>agent_contracts.g.dart</code>. This produces concrete classes (<code>OrderAuditInput</code>, <code>OrderAuditResult</code>, <code>InventoryLookupInput</code>, <code>PartnerDiscountInput</code>) with <code>.fromJson()</code>, <code>.toJson()</code>, and static <code>.$schema</code> getters:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>4. Générer les classes concrètes & les schémas d&apos;exécution</h3>        <p>
                            Exécutez <code>build_runner</code> dans <code>packages/shared_contracts</code> pour générer <code>agent_contracts.g.dart</code>. Cela produit les classes concrètes (<code>OrderAuditInput</code>, <code>OrderAuditResult</code>, <code>InventoryLookupInput</code>, <code>PartnerDiscountInput</code>) dotées de <code>.fromJson()</code>, <code>.toJson()</code> et du descripteur statique <code>.$schema</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Generate Schemantic .g.dart Files"}
        lang={"BASH"}
        code={"cd packages/shared_contracts\r\ndart pub get\r\ndart run build_runner build\r\ndart analyze\r\ncd ../.."}
      />
    </>
  );
}

function Step3() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Instead of writing fragile regular expressions to strip Markdown fences from LLM responses, Genkit Dart&apos;s <code>ai.defineFlow</code> and <code>ai.generate</code> accept an <code>outputSchema</code> parameter backed by <code>schemantic</code>. Genkit passes the JSON Schema directly to Gemini&apos;s constrained decoding engine and parses the output into a strongly typed Dart instance via <code>response.output</code>.
                        </p>        <h3>1. Complete File: <code>packages/agent_server/pubspec.yaml</code></h3>        <p>
                            Create <code>packages/agent_server/pubspec.yaml</code> referencing our local <code>shared_contracts</code> package alongside <code>genkit</code>, <code>genkit_google_genai</code>, <code>genkit_middleware</code>, and <code>genkit_shelf</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Au lieu d&apos;écrire des expressions régulières fragiles pour nettoyer les blocs Markdown des réponses d&apos;un LLM, <code>ai.defineFlow</code> et <code>ai.generate</code> de Genkit Dart acceptent un paramètre <code>outputSchema</code> propulsé par <code>schemantic</code>. Genkit transmet le schéma JSON directement au moteur de décodage contraint de Gemini et convertit la réponse en une instance Dart fortement typée accessible via <code>response.output</code>.
                        </p>        <h3>1. Fichier complet : <code>packages/agent_server/pubspec.yaml</code></h3>        <p>
                            Créez le fichier <code>packages/agent_server/pubspec.yaml</code> référençant notre paquet local <code>shared_contracts</code> ainsi que <code>genkit</code>, <code>genkit_google_genai</code>, <code>genkit_middleware</code> et <code>genkit_shelf</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/agent_server/pubspec.yaml"}
        lang={"YAML"}
        code={"name: agent_server\r\ndescription: Genkit Dart + Shelf Agentic Backend Server.\r\nversion: 1.0.0\r\npublish_to: 'none'\r\n\r\nenvironment:\r\n  sdk: ^3.12.0\r\n\r\ndependencies:\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  genkit:\r\n  genkit_google_genai:\r\n  genkit_middleware:\r\n  genkit_shelf:\r\n  schemantic:\r\n  shared_contracts:\r\n    path: ../shared_contracts\r\n  shelf:\r\n  shelf_router:\r\n\r\ndev_dependencies:\r\n  lints:"}
      />
      <div className={"lang-en"}>
        <h3>2. Complete File: <code>packages/agent_server/lib/flows/audit_flow.dart</code></h3>        <p>
                            Create <code>packages/agent_server/lib/flows/audit_flow.dart</code>. Notice how both the flow boundary (<code>defineFlow</code>) and the model invocation (<code>ai.generate</code>) use <code>OrderAuditInput.$schema</code> and <code>OrderAuditResult.$schema</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Fichier complet : <code>packages/agent_server/lib/flows/audit_flow.dart</code></h3>        <p>
                            Créez <code>packages/agent_server/lib/flows/audit_flow.dart</code>. Remarquez comment la déclaration du flow (<code>defineFlow</code>) et l&apos;appel au modèle (<code>ai.generate</code>) utilisent tous deux <code>OrderAuditInput.$schema</code> et <code>OrderAuditResult.$schema</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/agent_server/lib/flows/audit_flow.dart"}
        lang={"DART"}
        code={"import 'package:genkit/genkit.dart';\r\nimport 'package:genkit_google_genai/genkit_google_genai.dart';\r\nimport 'package:shared_contracts/agent_contracts.dart';\r\n\r\n/// Defines a strictly typed order audit flow returning [OrderAuditResult].\r\nFlow<OrderAuditInput, OrderAuditResult, void, void> defineAuditOrderFlow(\r\n  Genkit ai,\r\n) {\r\n  return ai.defineFlow(\r\n    name: 'auditOrder',\r\n    inputSchema: OrderAuditInput.$schema,\r\n    outputSchema: OrderAuditResult.$schema,\r\n    fn: (OrderAuditInput input, _) async {\r\n      final response = await ai.generate(\r\n        model: googleAI.gemini('gemini-2.5-flash'),\r\n        prompt: '''\r\nYou are a principal wholesale order compliance auditor.\r\nAudit the following order request using the authoritative server tool `verifyInventoryAndQuota`:\r\n- Order ID: ${input.orderId}\r\n- SKU: ${input.sku}\r\n- Requested Quantity: ${input.quantity}\r\n- Target Corridor: ${input.region}\r\n- Partner Code: ${input.partnerCode ?? 'NONE'}\r\n\r\nRules:\r\n1. Always call `verifyInventoryAndQuota` first to obtain the authoritative stock, quota, and unit price.\r\n2. If the SKU is out of stock (availableUnits < requestedUnits), set approved=false, status='REJECTED_OUT_OF_STOCK', allocatedQuantity=0, finalTotalUsd=0.\r\n3. If requested quantity exceeds maxOrderQuota, set approved=false, status='HOLD_QUOTA_EXCEEDED', allocatedQuantity=maxOrderQuota, and compute finalTotalUsd for the capped allocation.\r\n4. Otherwise set approved=true, status='APPROVED', allocatedQuantity=quantity, and compute finalTotalUsd = quantity * unitPriceUsd.\r\n''',\r\n        toolNames: ['verifyInventoryAndQuota'],\r\n        outputSchema: OrderAuditResult.$schema,\r\n      );\r\n\r\n      final structuredOutput = response.output;\r\n      if (structuredOutput == null) {\r\n        throw StateError(\r\n          'Model failed to produce a valid OrderAuditResult schema payload.',\r\n        );\r\n      }\r\n      return structuredOutput;\r\n    },\r\n  );\r\n}"}
      />
      <Callout variant={"success"} iconName={"success"} titleEn={"Why Wrap Logic in ai.defineFlow?"} titleFr={"Why Wrap Logic in ai.defineFlow?"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
Why Wrap Logic in <code>ai.defineFlow</code>?
          </div>          <p>
                                    Every Genkit Flow automatically registers with the local reflection server for interactive testing in the Genkit Developer UI, emits OpenTelemetry trace spans, validates incoming JSON against <code>inputSchema</code>, and exposes a clean handler for <code>genkit_shelf</code>.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
Pourquoi encapsuler la logique dans <code>ai.defineFlow</code> ?
          </div>          <p>
                                    Chaque Flow Genkit s&apos;enregistre automatiquement auprès du serveur de réflexion local pour être testé dans Genkit Developer UI, émet des traces télémétriques, valide le JSON entrant via <code>inputSchema</code> et s&apos;expose directement sur HTTP via <code>genkit_shelf</code>.
                                </p>
        </div>
      </Callout>
    </>
  );
}

function Step4() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            When designing production AI agents for commerce, fintech, or logistics, you must enforce one non-negotiable architectural rule:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Lors de la conception d&apos;agents IA de production pour le commerce, la fintech ou la logistique, vous devez appliquer une règle architecturale absolue :
                        </p>
      </div>
      <Callout variant={"warning"} iconName={"warning"} titleEn={"The Server-Side Security Invariant"} titleFr={"The Server-Side Security Invariant"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
The Server-Side Security Invariant
          </div>          <p><strong>Never trust the client for prices, quotas, or verification statuses.</strong> Notice that <code>OrderAuditInput</code> only accepts <code>orderId</code>, <code>sku</code>, <code>quantity</code>, and <code>region</code>. The mobile client cannot pass a unit price or override a regional quota limit; our server-side Genkit tool resolves those figures directly from the authoritative server ledger before returning context to the model via <code>ToolResult.response(...)</code>.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
L&apos;Invariant de Sécurité Côté Serveur
          </div>          <p><strong>Ne faites jamais confiance au client pour les prix, les quotas ou les statuts de vérification.</strong> Remarquez que <code>OrderAuditInput</code> n&apos;accepte que <code>orderId</code>, <code>sku</code>, <code>quantity</code> et <code>region</code>. Le client mobile ne peut ni imposer un prix unitaire ni contourner un quota régional ; notre outil Genkit côté serveur interroge directement le registre serveur autoritatif avant de renvoyer le résultat au modèle via <code>ToolResult.response(...)</code>.
                                </p>
        </div>
      </Callout>
      <div className={"lang-en"}>
        <h3>Complete File: <code>packages/agent_server/lib/tools/inventory_tools.dart</code></h3>        <p>
                            In Genkit Dart, tools are registered with <code>ai.defineTool</code> and return a <code>ToolResult</code> (such as <code>ToolResult.response(...)</code> for normal execution or <code>ToolResult.interrupt(...)</code> to pause generation). Copy this complete file into <code>packages/agent_server/lib/tools/inventory_tools.dart</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>Fichier complet : <code>packages/agent_server/lib/tools/inventory_tools.dart</code></h3>        <p>
                            Dans Genkit Dart, les outils sont déclarés via <code>ai.defineTool</code> et retournent un <code>ToolResult</code> (tel que <code>ToolResult.response(...)</code> pour une réponse normale ou <code>ToolResult.interrupt(...)</code> pour interrompre la boucle de génération). Copiez ce fichier complet dans <code>packages/agent_server/lib/tools/inventory_tools.dart</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/agent_server/lib/tools/inventory_tools.dart"}
        lang={"DART"}
        code={"import 'package:genkit/genkit.dart';\r\nimport 'package:shared_contracts/agent_contracts.dart';\r\n\r\n/// Authoritative server-side catalog and regional quota ledger.\r\n/// The mobile client never sends prices or quota limits; the server resolves them.\r\nconst Map<String, Map<String, Object>> _serverInventoryCatalog = {\r\n  'SOLAR-INV-3KW': {\r\n    'unitPriceUsd': 420.0,\r\n    'stockByRegion': {\r\n      'EAST_AFRICA': 45,\r\n      'CENTRAL_AFRICA': 18,\r\n      'WEST_AFRICA': 30,\r\n    },\r\n    'maxOrderQuota': 20,\r\n  },\r\n  'LFP-BATT-5KWH': {\r\n    'unitPriceUsd': 680.0,\r\n    'stockByRegion': {\r\n      'EAST_AFRICA': 12,\r\n      'CENTRAL_AFRICA': 6,\r\n      'WEST_AFRICA': 15,\r\n    },\r\n    'maxOrderQuota': 10,\r\n  },\r\n};\r\n\r\n/// Registers authoritative inventory and partner discount tools on [ai].\r\nvoid registerInventoryTools(Genkit ai) {\r\n  ai.defineTool(\r\n    name: 'verifyInventoryAndQuota',\r\n    description:\r\n        'Checks authoritative regional warehouse stock, unit price in USD, '\r\n        'and maximum per-order quota for a given SKU and region.',\r\n    inputSchema: InventoryLookupInput.$schema,\r\n    fn: (InventoryLookupInput input, _) async {\r\n      final skuRecord = _serverInventoryCatalog[input.sku.toUpperCase()];\r\n      if (skuRecord == null) {\r\n        return ToolResult.response({\r\n          'found': false,\r\n          'sku': input.sku,\r\n          'error': 'SKU not found in authoritative catalog.',\r\n        });\r\n      }\r\n\r\n      final stockMap = skuRecord['stockByRegion']! as Map<String, int>;\r\n      final availableUnits = stockMap[input.region] ?? 0;\r\n      final maxQuota = skuRecord['maxOrderQuota']! as int;\r\n      final unitPriceUsd = skuRecord['unitPriceUsd']! as double;\r\n\r\n      return ToolResult.response({\r\n        'found': true,\r\n        'sku': input.sku.toUpperCase(),\r\n        'region': input.region,\r\n        'availableUnits': availableUnits,\r\n        'maxOrderQuota': maxQuota,\r\n        'unitPriceUsd': unitPriceUsd,\r\n        'withinQuota': input.requestedUnits <= maxQuota,\r\n        'sufficientStock': input.requestedUnits <= availableUnits,\r\n      });\r\n    },\r\n  );\r\n\r\n  ai.defineTool(\r\n    name: 'applyPartnerDiscount',\r\n    description:\r\n        'Applies a privileged partner discount percentage to an order. '\r\n        'Sensitive state-mutating tool protected by human-in-the-loop approval.',\r\n    inputSchema: PartnerDiscountInput.$schema,\r\n    fn: (PartnerDiscountInput input, _) async {\r\n      final cappedPct = input.requestedDiscountPct.clamp(1, 25);\r\n      return ToolResult.response(\r\n        'Partner discount of $cappedPct% authorized for order '\r\n        '${input.orderId} under partner code ${input.partnerCode}.',\r\n      );\r\n    },\r\n  );\r\n}"}
      />
    </>
  );
}

function Step5() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            Autonomous agents frequently mix <strong>read-only tools</strong> (like <code>verifyInventoryAndQuota</code>) with <strong>high-stakes state-mutating tools</strong> (like <code>applyPartnerDiscount</code>, issuing refunds, or modifying files). The official <code>genkit_middleware</code> package provides three composable plugins that you register on your <code>Genkit</code> instance:
                        </p>        <ul>
          <li><code>FilesystemPlugin()</code> + <code>filesystem(rootDirectory: &apos;...&apos;)</code>: Sandboxes file reading, writing, and search-and-replace strictly inside an allowed workspace directory.</li>          <li><code>SkillsPlugin()</code> + <code>skills(skillPaths: [&apos;...&apos;])</code>: Dynamically loads specialized <code>SKILL.md</code> domain instructions on demand.</li>          <li><code>ToolApprovalPlugin()</code> + <code>toolApproval(approved: [...])</code>: Intercepts any tool call NOT listed in <code>approved</code>, halts the LLM generation loop before the tool body runs, and returns <code>FinishReason.interrupted</code>.</li>
        </ul>        <h3>Complete File: <code>packages/agent_server/lib/flows/guarded_action_flow.dart</code></h3>        <p>
                            When <code>response.finishReason == FinishReason.interrupted</code>, you inspect <code>response.interrupts.first</code>, request supervisor confirmation, and resume the conversation by passing <code>messages: response.messages</code> and setting <code>&apos;tool-approved&apos;: true</code> inside <code>interruptRestart</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Les agents autonomes combinent souvent des <strong>outils en lecture seule</strong> (comme <code>verifyInventoryAndQuota</code>) avec des <strong>outils critiques modifiant l&apos;état</strong> (comme <code>applyPartnerDiscount</code>, le déclenchement d&apos;un remboursement ou l&apos;écriture de fichiers). Le paquet officiel <code>genkit_middleware</code> fournit trois plugins composables à enregistrer dans votre instance <code>Genkit</code> :
                        </p>        <ul>
          <li><code>FilesystemPlugin()</code> + <code>filesystem(rootDirectory: &apos;...&apos;)</code> : Restreint la lecture, l&apos;écriture et la recherche de fichiers à un répertoire racine sécurisé (sandbox).</li>          <li><code>SkillsPlugin()</code> + <code>skills(skillPaths: [&apos;...&apos;])</code> : Injecte dynamiquement des instructions métier spécialisées depuis des fichiers <code>SKILL.md</code>.</li>          <li><code>ToolApprovalPlugin()</code> + <code>toolApproval(approved: [...])</code> : Intercepte tout appel d&apos;outil non listé dans <code>approved</code>, met en pause la boucle du modèle avant l&apos;exécution de l&apos;outil et retourne <code>FinishReason.interrupted</code>.</li>
        </ul>        <h3>Fichier complet : <code>packages/agent_server/lib/flows/guarded_action_flow.dart</code></h3>        <p>
                            Lorsque <code>response.finishReason == FinishReason.interrupted</code>, vous inspectez <code>response.interrupts.first</code>, sollicitez la validation d&apos;un superviseur, puis reprenez la génération en passant <code>messages: response.messages</code> et <code>&apos;tool-approved&apos;: true</code> dans <code>interruptRestart</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/agent_server/lib/flows/guarded_action_flow.dart"}
        lang={"DART"}
        code={"import 'package:genkit/genkit.dart';\r\nimport 'package:genkit_google_genai/genkit_google_genai.dart';\r\nimport 'package:genkit_middleware/genkit_middleware.dart';\r\nimport 'package:schemantic/schemantic.dart';\r\nimport 'package:shared_contracts/agent_contracts.dart';\r\n\r\n/// Defines a flow guarded by `toolApproval` middleware.\r\n/// Read-only `verifyInventoryAndQuota` runs automatically, while\r\n/// `applyPartnerDiscount` triggers `FinishReason.interrupted` for supervisor review.\r\nFlow<OrderAuditInput, String, void, void> defineGuardedDiscountFlow(\r\n  Genkit ai, {\r\n  required Future<bool> Function(ToolRequestPart interrupt) onSupervisorReview,\r\n}) {\r\n  return ai.defineFlow(\r\n    name: 'guardedDiscountAudit',\r\n    inputSchema: OrderAuditInput.$schema,\r\n    outputSchema: SchemanticType.string(),\r\n    fn: (OrderAuditInput input, _) async {\r\n      final response = await ai.generate(\r\n        model: googleAI.gemini('gemini-2.5-flash'),\r\n        prompt: '''\r\nVerify inventory for Order ${input.orderId} (SKU: ${input.sku}, qty: ${input.quantity}, region: ${input.region}).\r\nIf partnerCode (${input.partnerCode ?? 'NONE'}) is present, call `applyPartnerDiscount` with a 15% partner discount.\r\n''',\r\n        toolNames: ['verifyInventoryAndQuota', 'applyPartnerDiscount'],\r\n        use: [\r\n          // Read-only lookup is pre-approved; state-mutating discount requires approval\r\n          toolApproval(approved: ['verifyInventoryAndQuota']),\r\n        ],\r\n      );\r\n\r\n      if (response.finishReason == FinishReason.interrupted) {\r\n        final interrupt = response.interrupts.first;\r\n        final isApproved = await onSupervisorReview(interrupt);\r\n\r\n        if (!isApproved) {\r\n          return 'Order ${input.orderId}: Partner discount tool call '\r\n              '(${interrupt.toolRequest.name}) rejected by supervisor.';\r\n        }\r\n\r\n        final resumedResponse = await ai.generate(\r\n          model: googleAI.gemini('gemini-2.5-flash'),\r\n          messages: response.messages,\r\n          toolChoice: ToolChoice.none,\r\n          interruptRestart: [\r\n            ToolRequestPart(\r\n              toolRequest: interrupt.toolRequest,\r\n              metadata: {\r\n                ...?interrupt.metadata,\r\n                'tool-approved': true,\r\n              },\r\n            ),\r\n          ],\r\n        );\r\n\r\n        return resumedResponse.text;\r\n      }\r\n\r\n      return response.text;\r\n    },\r\n  );\r\n}"}
      />
    </>
  );
}

function Step6() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            A great mobile UX gives users immediate visual feedback while an agent executes multi-step tool calls, and still delivers a strongly typed result at the end. Genkit Dart flows support dual-channel execution:
                        </p>        <ul>
          <li><code>streamSchema: SchemanticType.string()</code>: Defines the type of incremental chunks pushed to the client in real time via <code>context.sendChunk(chunk.text)</code>.</li>          <li><code>outputSchema: OrderAuditResult.$schema</code>: Defines the final strongly typed return value resolved when the flow finishes.</li>
        </ul>        <p>
                            To expose flows over HTTP, <code>genkit_shelf</code> provides two patterns:
                        </p>        <ol>
          <li><strong>Custom Shelf Router (<code>shelfHandler(flow)</code>):</strong> Mount flows onto specific routes alongside your existing authentication middleware, health checks, or REST endpoints.</li>          <li><strong>Standalone Server (<code>startFlowServer</code>):</strong> Boot a dedicated HTTP flow server in one function call.</li>
        </ol>        <h3>Complete File: <code>packages/agent_server/bin/server.dart</code></h3>        <p>
                            Copy this complete, runnable server entrypoint into <code>packages/agent_server/bin/server.dart</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Une expérience mobile fluide offre à l&apos;utilisateur un retour visuel immédiat pendant que l&apos;agent exécute ses appels d&apos;outils, tout en livrant un résultat fortement typé à la fin. Les flows Genkit Dart prennent en charge ce double canal nativement :
                        </p>        <ul>
          <li><code>streamSchema: SchemanticType.string()</code> : Définit le type des fragments envoyés en temps réel au client via <code>context.sendChunk(chunk.text)</code>.</li>          <li><code>outputSchema: OrderAuditResult.$schema</code> : Définit la valeur finale fortement typée retournée à la clôture du flow.</li>
        </ul>        <p>
                            Pour exposer vos flows sur HTTP, <code>genkit_shelf</code> propose deux approches :
                        </p>        <ol>
          <li><strong>Routeur Shelf personnalisé (<code>shelfHandler(flow)</code>) :</strong> Montez vos flows sur des routes dédiées aux côtés de vos middlewares d&apos;authentification ou de vos sondes de santé (health checks).</li>          <li><strong>Serveur autonome (<code>startFlowServer</code>) :</strong> Démarrez un serveur HTTP dédié aux flows en un seul appel de fonction.</li>
        </ol>        <h3>Fichier complet : <code>packages/agent_server/bin/server.dart</code></h3>        <p>
                            Copiez ce point d&apos;entrée serveur complet dans <code>packages/agent_server/bin/server.dart</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"packages/agent_server/bin/server.dart"}
        lang={"DART"}
        code={"import 'dart:io';\r\nimport 'package:genkit/genkit.dart';\r\nimport 'package:genkit_google_genai/genkit_google_genai.dart';\r\nimport 'package:genkit_middleware/genkit_middleware.dart';\r\nimport 'package:genkit_shelf/genkit_shelf.dart';\r\nimport 'package:schemantic/schemantic.dart';\r\nimport 'package:shared_contracts/agent_contracts.dart';\r\nimport 'package:shelf/shelf.dart';\r\nimport 'package:shelf/shelf_io.dart' as io;\r\nimport 'package:shelf_router/shelf_router.dart';\r\n\r\nimport 'package:agent_server/flows/audit_flow.dart';\r\nimport 'package:agent_server/flows/guarded_action_flow.dart';\r\nimport 'package:agent_server/tools/inventory_tools.dart';\r\n\r\nFuture<void> main() async {\r\n  final apiKey = Platform.environment['GEMINI_API_KEY'];\r\n  if (apiKey == null || apiKey.isEmpty) {\r\n    stderr.writeln('ERROR: GEMINI_API_KEY environment variable is not set.');\r\n    exit(1);\r\n  }\r\n\r\n  // 1. Initialize Genkit with Google AI and Middleware plugins\r\n  final ai = Genkit(\r\n    plugins: [\r\n      googleAI(),\r\n      FilesystemPlugin(),\r\n      SkillsPlugin(),\r\n      ToolApprovalPlugin(),\r\n    ],\r\n  );\r\n\r\n  // 2. Register authoritative server-side tools\r\n  registerInventoryTools(ai);\r\n\r\n  // 3. Register typed and guarded flows\r\n  final auditOrderFlow = defineAuditOrderFlow(ai);\r\n  final guardedDiscountFlow = defineGuardedDiscountFlow(\r\n    ai,\r\n    onSupervisorReview: (interrupt) async {\r\n      stdout.writeln(\r\n        '[HITL Supervisor] Intercepted tool: ${interrupt.toolRequest.name} '\r\n        'with input: ${interrupt.toolRequest.input}',\r\n      );\r\n      return true;\r\n    },\r\n  );\r\n\r\n  // 4. Define a real-time streaming flow with chunked narration + final typed output\r\n  final streamOrderAuditFlow = ai.defineFlow(\r\n    name: 'streamOrderAudit',\r\n    inputSchema: OrderAuditInput.$schema,\r\n    outputSchema: OrderAuditResult.$schema,\r\n    streamSchema: SchemanticType.string(),\r\n    fn: (OrderAuditInput input, context) async {\r\n      final stream = ai.generateStream(\r\n        model: googleAI.gemini('gemini-2.5-flash'),\r\n        prompt: '''\r\nStream a concise, real-time compliance log while auditing Order ${input.orderId}\r\n(SKU: ${input.sku}, quantity: ${input.quantity}, corridor: ${input.region}).\r\nCall `verifyInventoryAndQuota` to inspect stock and quota constraints.\r\n''',\r\n        toolNames: ['verifyInventoryAndQuota'],\r\n      );\r\n\r\n      await for (final chunk in stream) {\r\n        if (chunk.text.isNotEmpty) {\r\n          context.sendChunk(chunk.text);\r\n        }\r\n      }\r\n\r\n      return auditOrderFlow(input);\r\n    },\r\n  );\r\n\r\n  // 5. Mount Genkit flows onto a custom Shelf Router alongside health probes\r\n  // (Alternatively, call `await startFlowServer(flows: [...], port: 3400);`)\r\n  final router = Router()\r\n    ..get('/healthz', (Request req) => Response.ok('{\"status\":\"ok\"}'))\r\n    ..post('/auditOrder', shelfHandler(auditOrderFlow))\r\n    ..post('/streamOrderAudit', shelfHandler(streamOrderAuditFlow))\r\n    ..post('/guardedDiscountAudit', shelfHandler(guardedDiscountFlow));\r\n\r\n  final handler = const Pipeline()\r\n      .addMiddleware(logRequests())\r\n      .addHandler(router.call);\r\n\r\n  final port = int.parse(Platform.environment['PORT'] ?? '3400');\r\n  final server = await io.serve(handler, InternetAddress.anyIPv4, port);\r\n  stdout.writeln(\r\n    'Genkit Shelf Agent Server listening on http://${server.address.host}:${server.port}',\r\n  );\r\n}"}
      />
    </>
  );
}

function Step7() {
  return (
    <>
      <div className={"lang-en"}>
        <p>
                            On the Flutter side, you do NOT import server plugins or bundle API keys. Instead, you import lightweight client utilities from <code>package:genkit/client.dart</code> and your shared <code>package:shared_contracts/agent_contracts.dart</code>.
                        </p>        <p>
                            With <code>defineRemoteAction</code>, calling a remote Genkit flow over HTTP feels identical to calling a local Dart function:
                        </p>        <ul>
          <li><strong>Unary Invocation:</strong> <code>final result = await auditOrderAction(input: request);</code></li>          <li><strong>Streaming Invocation:</strong> <code>final stream = streamOrderAuditAction.stream(input: request);</code> iterates over real-time <code>String</code> chunks as they arrive, and <code>await stream.onResult</code> resolves the final typed <code>OrderAuditResult</code>!</li>
        </ul>        <h3>1. Complete File: <code>apps/flutter_client/pubspec.yaml</code></h3>        <p>
                            Create the Flutter client package configuration in <code>apps/flutter_client/pubspec.yaml</code>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Côté Flutter, vous n&apos;importez AUCUN plugin serveur et n&apos;embarquez aucune clé API. Vous importez uniquement le client léger <code>package:genkit/client.dart</code> ainsi que votre paquet partagé <code>package:shared_contracts/agent_contracts.dart</code>.
                        </p>        <p>
                            Grâce à <code>defineRemoteAction</code>, l&apos;appel d&apos;un flow Genkit distant sur HTTP s&apos;écrit exactement comme un appel de fonction Dart locale :
                        </p>        <ul>
          <li><strong>Appel Unitaire :</strong> <code>final result = await auditOrderAction(input: request);</code></li>          <li><strong>Appel Streaming :</strong> <code>final stream = streamOrderAuditAction.stream(input: request);</code> écoute les fragments <code>String</code> en temps réel, puis <code>await stream.onResult</code> récupère l&apos;objet final typé <code>OrderAuditResult</code> !</li>
        </ul>        <h3>1. Fichier complet : <code>apps/flutter_client/pubspec.yaml</code></h3>        <p>
                            Créez le fichier de configuration Flutter dans <code>apps/flutter_client/pubspec.yaml</code> :
                        </p>
      </div>
      <CodeWindow
        filename={"apps/flutter_client/pubspec.yaml"}
        lang={"YAML"}
        code={"name: flutter_client\r\ndescription: Flutter streaming client for Genkit Dart Shelf server.\r\nversion: 1.0.0\r\npublish_to: 'none'\r\n\r\nenvironment:\r\n  sdk: ^3.12.0\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  genkit:\r\n  schemantic:\r\n  shared_contracts:\r\n    path: ../../packages/shared_contracts\r\n\r\ndev_dependencies:\r\n  flutter_lints:\r\n  flutter_test:\r\n    sdk: flutter"}
      />
      <div className={"lang-en"}>
        <h3>2. Complete File: <code>apps/flutter_client/lib/main.dart</code></h3>        <p>
                            Copy this complete, self-contained Material 3 Flutter client into <code>apps/flutter_client/lib/main.dart</code>. Note that on an Android emulator, localhost on the host machine is reachable at <code>10.0.2.2:3400</code> (or use <code>adb reverse tcp:3400 tcp:3400</code> to use <code>localhost:3400</code> directly on physical USB devices):
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Fichier complet : <code>apps/flutter_client/lib/main.dart</code></h3>        <p>
                            Copiez ce client Flutter Material 3 complet et autonome dans <code>apps/flutter_client/lib/main.dart</code>. Notez que sur un émulateur Android, le localhost de la machine hôte est accessible via <code>10.0.2.2:3400</code> (ou exécutez <code>adb reverse tcp:3400 tcp:3400</code> pour utiliser <code>localhost:3400</code> directement sur un téléphone physique en USB) :
                        </p>
      </div>
      <CodeWindow
        filename={"apps/flutter_client/lib/main.dart"}
        lang={"DART / FLUTTER"}
        code={"import 'package:flutter/material.dart';\r\nimport 'package:genkit/client.dart';\r\nimport 'package:schemantic/schemantic.dart';\r\nimport 'package:shared_contracts/agent_contracts.dart';\r\n\r\nvoid main() {\r\n  runApp(const AgenticAuditApp());\r\n}\r\n\r\nclass AgenticAuditApp extends StatelessWidget {\r\n  const AgenticAuditApp({super.key});\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return MaterialApp(\r\n      title: 'Genkit Dart Agentic Auditor',\r\n      debugShowCheckedModeBanner: false,\r\n      theme: ThemeData(\r\n        colorSchemeSeed: const Color(0xFF0284C7),\r\n        useMaterial3: true,\r\n      ),\r\n      home: const OrderAuditScreen(),\r\n    );\r\n  }\r\n}\r\n\r\nclass OrderAuditScreen extends StatefulWidget {\r\n  const OrderAuditScreen({super.key});\r\n\r\n  @override\r\n  State<OrderAuditScreen> createState() => _OrderAuditScreenState();\r\n}\r\n\r\nclass _OrderAuditScreenState extends State<OrderAuditScreen> {\r\n  static const String _serverBaseUrl = String.fromEnvironment(\r\n    'GENKIT_SERVER_URL',\r\n    defaultValue: 'http://localhost:3400',\r\n  );\r\n\r\n  late final _streamOrderAuditAction = defineRemoteAction(\r\n    url: '$_serverBaseUrl/streamOrderAudit',\r\n    inputSchema: OrderAuditInput.$schema,\r\n    outputSchema: OrderAuditResult.$schema,\r\n    streamSchema: SchemanticType.string(),\r\n  );\r\n\r\n  String _selectedSku = 'SOLAR-INV-3KW';\r\n  String _selectedRegion = 'EAST_AFRICA';\r\n  int _quantity = 12;\r\n  bool _isStreaming = false;\r\n  String _liveNarration = '';\r\n  OrderAuditResult? _finalResult;\r\n  String? _errorMessage;\r\n\r\n  Future<void> _runStreamingAudit() async {\r\n    setState(() {\r\n      _isStreaming = true;\r\n      _liveNarration = '';\r\n      _finalResult = null;\r\n      _errorMessage = null;\r\n    });\r\n\r\n    final requestInput = OrderAuditInput(\r\n      orderId: 'ORD-${DateTime.now().millisecondsSinceEpoch % 100000}',\r\n      sku: _selectedSku,\r\n      quantity: _quantity,\r\n      region: _selectedRegion,\r\n      partnerCode: 'SOLAR-PARTNER-UG',\r\n    );\r\n\r\n    try {\r\n      final stream = _streamOrderAuditAction.stream(input: requestInput);\r\n\r\n      await for (final chunk in stream) {\r\n        if (!mounted) return;\r\n        setState(() {\r\n          _liveNarration += chunk;\r\n        });\r\n      }\r\n\r\n      final typedResult = await stream.onResult;\r\n      if (!mounted) return;\r\n      setState(() {\r\n        _finalResult = typedResult;\r\n      });\r\n    } catch (e) {\r\n      if (!mounted) return;\r\n      setState(() {\r\n        _errorMessage = e.toString();\r\n      });\r\n    } finally {\r\n      if (mounted) {\r\n        setState(() {\r\n          _isStreaming = false;\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    final result = _finalResult;\r\n    return Scaffold(\r\n      appBar: AppBar(\r\n        title: const Text('Genkit Dart | Full-Stack Order Auditor'),\r\n      ),\r\n      body: Padding(\r\n        padding: const EdgeInsets.all(16),\r\n        child: Column(\r\n          crossAxisAlignment: CrossAxisAlignment.stretch,\r\n          children: [\r\n            Row(\r\n              children: [\r\n                Expanded(\r\n                  child: DropdownButtonFormField<String>(\r\n                    initialValue: _selectedSku,\r\n                    decoration: const InputDecoration(labelText: 'Catalog SKU'),\r\n                    items: const [\r\n                      DropdownMenuItem(\r\n                        value: 'SOLAR-INV-3KW',\r\n                        child: Text('SOLAR-INV-3KW (3kW Inverter)'),\r\n                      ),\r\n                      DropdownMenuItem(\r\n                        value: 'LFP-BATT-5KWH',\r\n                        child: Text('LFP-BATT-5KWH (5kWh Battery)'),\r\n                      ),\r\n                    ],\r\n                    onChanged: _isStreaming\r\n                        ? null\r\n                        : (v) => setState(() => _selectedSku = v!),\r\n                  ),\r\n                ),\r\n                const SizedBox(width: 12),\r\n                Expanded(\r\n                  child: DropdownButtonFormField<String>(\r\n                    initialValue: _selectedRegion,\r\n                    decoration: const InputDecoration(labelText: 'Corridor'),\r\n                    items: const [\r\n                      DropdownMenuItem(\r\n                        value: 'EAST_AFRICA',\r\n                        child: Text('EAST_AFRICA'),\r\n                      ),\r\n                      DropdownMenuItem(\r\n                        value: 'CENTRAL_AFRICA',\r\n                        child: Text('CENTRAL_AFRICA'),\r\n                      ),\r\n                      DropdownMenuItem(\r\n                        value: 'WEST_AFRICA',\r\n                        child: Text('WEST_AFRICA'),\r\n                      ),\r\n                    ],\r\n                    onChanged: _isStreaming\r\n                        ? null\r\n                        : (v) => setState(() => _selectedRegion = v!),\r\n                  ),\r\n                ),\r\n              ],\r\n            ),\r\n            const SizedBox(height: 12),\r\n            Row(\r\n              children: [\r\n                Expanded(\r\n                  child: Slider(\r\n                    value: _quantity.toDouble(),\r\n                    min: 1,\r\n                    max: 30,\r\n                    divisions: 29,\r\n                    label: '$_quantity units',\r\n                    onChanged: _isStreaming\r\n                        ? null\r\n                        : (v) => setState(() => _quantity = v.round()),\r\n                  ),\r\n                ),\r\n                Text(\r\n                  'Qty: $_quantity',\r\n                  style: const TextStyle(fontWeight: FontWeight.w700),\r\n                ),\r\n              ],\r\n            ),\r\n            const SizedBox(height: 8),\r\n            FilledButton(\r\n              onPressed: _isStreaming ? null : _runStreamingAudit,\r\n              child: Text(\r\n                _isStreaming\r\n                    ? 'Streaming Server Audit...'\r\n                    : 'Run Typed Genkit Audit Flow',\r\n              ),\r\n            ),\r\n            const SizedBox(height: 16),\r\n            if (_errorMessage != null)\r\n              Container(\r\n                padding: const EdgeInsets.all(12),\r\n                decoration: BoxDecoration(\r\n                  color: const Color(0xFFFEE2E2),\r\n                  border: Border.all(color: const Color(0xFFDC2626)),\r\n                  borderRadius: BorderRadius.circular(8),\r\n                ),\r\n                child: Text(\r\n                  _errorMessage!,\r\n                  style: const TextStyle(color: Color(0xFF991B1B)),\r\n                ),\r\n              ),\r\n            Expanded(\r\n              child: SingleChildScrollView(\r\n                child: Column(\r\n                  crossAxisAlignment: CrossAxisAlignment.stretch,\r\n                  children: [\r\n                    if (_liveNarration.isNotEmpty) ...[\r\n                      const Text(\r\n                        'Live Stream Chunks (streamSchema: String):',\r\n                        style: TextStyle(fontWeight: FontWeight.bold),\r\n                      ),\r\n                      const SizedBox(height: 6),\r\n                      SelectableText(_liveNarration),\r\n                      const Divider(height: 28),\r\n                    ],\r\n                    if (result != null)\r\n                      Container(\r\n                        padding: const EdgeInsets.all(14),\r\n                        decoration: BoxDecoration(\r\n                          color: const Color(0xFFE0F2FE),\r\n                          border: Border.all(color: const Color(0xFF0284C7)),\r\n                          borderRadius: BorderRadius.circular(10),\r\n                        ),\r\n                        child: Column(\r\n                          crossAxisAlignment: CrossAxisAlignment.start,\r\n                          children: [\r\n                            Text(\r\n                              'Typed OrderAuditResult (${result.status})',\r\n                              style: const TextStyle(\r\n                                fontWeight: FontWeight.w700,\r\n                                fontSize: 16,\r\n                              ),\r\n                            ),\r\n                            const SizedBox(height: 6),\r\n                            Text('Order ID: ${result.orderId}'),\r\n                            Text('Approved: ${result.approved}'),\r\n                            Text('Allocated Units: ${result.allocatedQuantity}'),\r\n                            Text(\r\n                              'Authoritative Total: \\$${result.finalTotalUsd.toStringAsFixed(2)} USD',\r\n                            ),\r\n                            const SizedBox(height: 6),\r\n                            Text(result.reasoningSummary),\r\n                          ],\r\n                        ),\r\n                      ),\r\n                  ],\r\n                ),\r\n              ),\r\n            ),\r\n          ],\r\n        ),\r\n      ),\r\n    );\r\n  }\r\n}"}
      />
    </>
  );
}

function Step8() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. End-to-End Verification Checklist & Genkit Developer UI</h3>        <p>
                            When you launch your Dart server through <code>genkit start</code>, the Genkit CLI sets <code>GENKIT_ENV=dev</code>, connects to the reflection server built into <code>Genkit()</code>, and serves the interactive <strong>Genkit Developer UI</strong> at <code>http://localhost:4000</code>. From there, you can trigger <code>auditOrder</code>, <code>streamOrderAudit</code>, and <code>guardedDiscountAudit</code> with sample JSON payloads and inspect every prompt, tool call, and latency span.
                        </p>        <p>
                            Run the verification sequence below in your terminal to confirm zero static analysis warnings and launch the server:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Checklist de vérification finale & Genkit Developer UI</h3>        <p>
                            Lorsque vous démarrez votre serveur Dart via <code>genkit start</code>, le CLI Genkit active <code>GENKIT_ENV=dev</code>, se connecte au serveur de réflexion intégré à <code>Genkit()</code> et démarre l&apos;interface interactive <strong>Genkit Developer UI</strong> sur <code>http://localhost:4000</code>. Vous pouvez y tester <code>auditOrder</code>, <code>streamOrderAudit</code> et <code>guardedDiscountAudit</code> et inspecter chaque prompt, appel d&apos;outil et temps de latence.
                        </p>        <p>
                            Exécutez la séquence de vérification ci-dessous dans votre terminal pour valider l&apos;analyse statique et lancer le serveur :
                        </p>
      </div>
      <CodeWindow
        filename={"Terminal | Static Analysis & Launch with Genkit Developer UI"}
        lang={"SHELL"}
        code={"# 1. Verify shared contracts package\r\ncd packages/shared_contracts\r\ndart analyze\r\n\r\n# 2. Verify Genkit Shelf server package\r\ncd ../agent_server\r\ndart pub get\r\ndart analyze\r\n\r\n# 3. Export your Gemini API key (macOS / Linux / Git Bash)\r\nexport GEMINI_API_KEY=\"YOUR_GEMINI_API_KEY\"\r\n# Or in Windows PowerShell:\r\n# $env:GEMINI_API_KEY=\"YOUR_GEMINI_API_KEY\"\r\n\r\n# 4. Start the Dart server attached to the Genkit Developer UI (http://localhost:4000)\r\ngenkit start -- dart run bin/server.dart\r\n\r\n# 5. In a second terminal, verify and run the Flutter client\r\ncd ../../apps/flutter_client\r\nflutter pub get\r\nflutter analyze\r\nflutter run"}
      />
      <div className={"lang-en"}>
        <h3>2. Key Engineering Takeaways</h3>        <ol>
          <li><strong>Single-Language Full-Stack Velocity:</strong> Sharing a pure Dart <code>schemantic</code> package across your Shelf server and Flutter client eliminates manual DTO synchronization and runtime casting errors.</li>          <li><strong>Authoritative Server-Side Tools:</strong> Keep API keys, pricing catalogs, and quota ledgers exclusively inside server-side <code>ai.defineTool</code> handlers returning <code>ToolResult.response(...)</code>.</li>          <li><strong>Deterministic Guardrails with <code>toolApproval</code>:</strong> Never let an LLM execute state-mutating tools unchecked; use <code>ToolApprovalPlugin()</code> to trigger <code>FinishReason.interrupted</code> and require explicit supervisor sign-off before resuming with <code>interruptRestart</code>.</li>          <li><strong>Dual-Channel Streaming UX:</strong> Combine <code>streamSchema</code> + <code>context.sendChunk()</code> for sub-second streaming progress with <code>outputSchema</code> + <code>stream.onResult</code> for a guaranteed structured final payload.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Points clés à retenir</h3>        <ol>
          <li><strong>Vélocité Full-Stack en un seul langage :</strong> Partager un paquet pur Dart <code>schemantic</code> entre votre serveur Shelf et votre client Flutter élimine toute désynchronisation de DTO et les erreurs de typage à l&apos;exécution.</li>          <li><strong>Outils Serveur Autoritatifs :</strong> Conservez les clés API, les catalogues de prix et les quotas exclusivement dans des gestionnaires <code>ai.defineTool</code> côté serveur retournant <code>ToolResult.response(...)</code>.</li>          <li><strong>Garde-fous déterministes avec <code>toolApproval</code> :</strong> Ne laissez jamais un LLM exécuter des outils modifiant l&apos;état sans contrôle ; utilisez <code>ToolApprovalPlugin()</code> pour déclencher <code>FinishReason.interrupted</code> et exiger une validation explicite avant reprise via <code>interruptRestart</code>.</li>          <li><strong>Expérience Streaming à double canal :</strong> Combinez <code>streamSchema</code> + <code>context.sendChunk()</code> pour l&apos;affichage en direct et <code>outputSchema</code> + <code>stream.onResult</code> pour garantir un résultat final structuré.</li>
        </ol>
      </div>
      <div className={"lang-en"}>
        <h3>3. Official Documentation & Further Resources</h3>        <ul>
          <li><a href={"https://pub.dev/packages/genkit"} target={"_blank"} rel={"noopener"}><code>package:genkit</code> on pub.dev</a>: Core Genkit Dart SDK (`Genkit`, `defineFlow`, `defineTool`, `package:genkit/client.dart`).</li>          <li><a href={"https://pub.dev/packages/schemantic"} target={"_blank"} rel={"noopener"}><code>package:schemantic</code> on pub.dev</a>: Compile-time and runtime JSON Schema generation (`@Schema()`, `schemantic_builder`).</li>          <li><a href={"https://pub.dev/packages/genkit_google_genai"} target={"_blank"} rel={"noopener"}><code>package:genkit_google_genai</code> on pub.dev</a>: Official Google AI Gemini plugin for Genkit Dart.</li>          <li><a href={"https://pub.dev/packages/genkit_shelf"} target={"_blank"} rel={"noopener"}><code>package:genkit_shelf</code> on pub.dev</a>: Shelf HTTP server integration (`shelfHandler`, `startFlowServer`).</li>          <li><a href={"https://pub.dev/packages/genkit_middleware"} target={"_blank"} rel={"noopener"}><code>package:genkit_middleware</code> on pub.dev</a>: `ToolApprovalPlugin`, `FilesystemPlugin`, and `SkillsPlugin` guardrails.</li>          <li><a href={"https://github.com/genkit-ai/genkit-dart"} target={"_blank"} rel={"noopener"}>Official <code>genkit-ai/genkit-dart</code> GitHub Repository</a>: Upstream source code and samples.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Ressources officielles & Pour aller plus loin</h3>        <ul>
          <li><a href={"https://pub.dev/packages/genkit"} target={"_blank"} rel={"noopener"}><code>package:genkit</code> sur pub.dev</a> : SDK principal Genkit Dart (`Genkit`, `defineFlow`, `defineTool`, `package:genkit/client.dart`).</li>          <li><a href={"https://pub.dev/packages/schemantic"} target={"_blank"} rel={"noopener"}><code>package:schemantic</code> sur pub.dev</a> : Génération de schémas JSON (`@Schema()`, `schemantic_builder`).</li>          <li><a href={"https://pub.dev/packages/genkit_google_genai"} target={"_blank"} rel={"noopener"}><code>package:genkit_google_genai</code> sur pub.dev</a> : Plugin officiel Google AI Gemini pour Genkit Dart.</li>          <li><a href={"https://pub.dev/packages/genkit_shelf"} target={"_blank"} rel={"noopener"}><code>package:genkit_shelf</code> sur pub.dev</a> : Intégration serveur HTTP Shelf (`shelfHandler`, `startFlowServer`).</li>          <li><a href={"https://pub.dev/packages/genkit_middleware"} target={"_blank"} rel={"noopener"}><code>package:genkit_middleware</code> sur pub.dev</a> : Plugins `ToolApprovalPlugin`, `FilesystemPlugin` et `SkillsPlugin`.</li>          <li><a href={"https://github.com/genkit-ai/genkit-dart"} target={"_blank"} rel={"noopener"}>Dépôt GitHub officiel <code>genkit-ai/genkit-dart</code></a> : Code source amont et exemples officiels.</li>
        </ul>
      </div>
      <Callout variant={"info"} iconName={"users"} titleEn={"Built for the Dart & Flutter Engineering Community"} titleFr={"Built for the Dart & Flutter Engineering Community"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
Built for the Dart & Flutter Engineering Community
          </div>          <p>
                                    Authored by <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Founder @ <LosingTekWordmark /> & Founder of the <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
Conçu pour la communauté d&apos;ingénierie Dart & Flutter
          </div>          <p>
                                    Rédigé par <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Fondateur @ <LosingTekWordmark /> & Fondateur du <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </div>
      </Callout>
    </>
  );
}

export const codelabData: CodelabDefinition = {
  slug: "genkit-dart-agentic-workflows",
  navItems: [
  {
    "index": 0,
    "titleEn": "Context, Goals & Prerequisites",
    "titleFr": "Contexte, Objectifs & Prérequis",
    "time": "5m"
  },
  {
    "index": 1,
    "titleEn": "Typed Contracts with Schemantic",
    "titleFr": "Contrats Typés avec Schemantic",
    "time": "5m"
  },
  {
    "index": 2,
    "titleEn": "Genkit Server & Structured Flows",
    "titleFr": "Serveur Genkit & Flows Structurés",
    "time": "6m"
  },
  {
    "index": 3,
    "titleEn": "Server Tools & Security Invariants",
    "titleFr": "Outils Serveur & Invariants Sécurité",
    "time": "6m"
  },
  {
    "index": 4,
    "titleEn": "Guardrails & toolApproval HITL",
    "titleFr": "Garde-fous & toolApproval HITL",
    "time": "6m"
  },
  {
    "index": 5,
    "titleEn": "Streaming Flows & Genkit Shelf",
    "titleFr": "Flows Streaming & Genkit Shelf",
    "time": "6m"
  },
  {
    "index": 6,
    "titleEn": "Flutter Remote Action Client",
    "titleFr": "Client Flutter Remote Action",
    "time": "6m"
  },
  {
    "index": 7,
    "titleEn": "Dev UI Tracing & Verification",
    "titleFr": "Traçage Dev UI & Vérification",
    "time": "5m"
  }
],
  steps: [
  {
    index: 0,
    duration: 5,
    eyebrowEn: "Step 1 of 8 | Context, Architecture & Prerequisites",
    eyebrowFr: "Étape 1 sur 8 | Contexte, Architecture & Prérequis",
    titleEn: "Full-Stack Agentic Dart: Building End-to-End Typed AI Agents with Genkit Dart & Shelf",
    titleFr: "Full-Stack Agentic Dart : Construire des Agents IA Typés de Bout en Bout avec Genkit Dart & Shelf",
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
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Workspace Setup & Shared Typed Contracts with Schemantic",
    titleFr: "Configuration du Workspace & Contrats Typés Partagés avec Schemantic",
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
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Initializing the Genkit Dart Server & Structured Output Flows",
    titleFr: "Initialisation du Serveur Genkit Dart & Flows à Sortie Structurée",
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
    duration: 6,
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Server-Side Tool Calling & Strict Security Invariants",
    titleFr: "Appel d'Outils Côté Serveur & Invariants de Sécurité Stricts",
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
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Agent Guardrails & Human-in-the-Loop toolApproval Middleware",
    titleFr: "Garde-fous d'Agent & Middleware Human-in-the-Loop toolApproval",
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
    duration: 6,
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Streaming Flows & HTTP Server with genkit_shelf",
    titleFr: "Flows en Streaming & Serveur HTTP avec genkit_shelf",
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
    duration: 6,
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Consuming Remote Typed & Streaming Flows in Flutter",
    titleFr: "Consommation des Flows Typés & Streaming dans Flutter",
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
    eyebrowEn: "",
    eyebrowFr: "",
    titleEn: "Genkit Developer UI Tracing, Verification Checklist & Official Resources",
    titleFr: "Traçage Genkit Developer UI, Checklist de Vérification & Ressources Officielles",
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
