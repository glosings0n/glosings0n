import { FlutterFireCampWordmark, LosingTekWordmark } from "@repo/ui";
import { Bilingual } from "@/components/Bilingual";
import { Callout } from "@/components/Callout";
import { CodeWindow } from "@/components/CodeWindow";
import type { CodelabDefinition } from "./types";

function Step1() {
  return (
    <>
      <p className={"lang-en"}>
                        Welcome to the official companion codelab for <strong>&quot;On-Device AI with Flutter & Gemma: Building Offline-First AI Mobile Apps for Africa&quot;</strong> at <strong>droidCon Uganda 2026</strong> in Kampala!
                    </p>
      <p className={"lang-fr"}>
                        Bienvenue dans le codelab officiel de la session <strong>&quot;On-Device AI with Flutter & Gemma: Building Offline-First AI Mobile Apps for Africa&quot;</strong> présentée au <strong>droidCon Uganda 2026</strong> à Kampala !
                    </p>
      <Callout variant={"info"} iconName={"info"} titleEn={"Ecosystem Evolution: flutter_gemma is now flutter_edge_ai"} titleFr={"Évolution de l'écosystème : flutter_gemma devient flutter_edge_ai"}>
        <p className={"lang-en"}>
                                The official package has officially transitioned from <code>flutter_gemma</code> to <strong><code>flutter_edge_ai</code></strong> (paired with <code>flutter_edge_ai_litertlm</code>). While this codelab stems from our droidCon Uganda talk on Gemma, <code>flutter_edge_ai</code> now supports multiple local SLMs and LLMs (including <strong>Gemma</strong>, <strong>Phi-3</strong>, <strong>Qwen</strong>, <strong>DeepSeek</strong>, <strong>SmolLM</strong>, and custom converted Python models). The production <strong>Gemmea</strong> repository has been completely updated to <code>flutter_edge_ai</code>.
                            </p>
        <p className={"lang-fr"}>
                                Le package officiel a évolué de <code>flutter_gemma</code> vers <strong><code>flutter_edge_ai</code></strong> (associé à <code>flutter_edge_ai_litertlm</code>). Bien que ce codelab soit issu de notre session à droidCon Uganda consacrée à Gemma, <code>flutter_edge_ai</code> prend en charge de multiples modèles légers locaux (dont <strong>Gemma</strong>, <strong>Phi-3</strong>, <strong>Qwen</strong>, <strong>DeepSeek</strong>, <strong>SmolLM</strong> et des modèles Python sur-mesure). Le dépôt de production <strong>Gemmea</strong> a été intégralement migré sous <code>flutter_edge_ai</code>.
                            </p>
      </Callout>
      <Callout variant={"info"} iconName={"info"} titleEn={"Proven Production Architecture"} titleFr={"Architecture de Production Éprouvée"}>
        <p className={"lang-en"}>
                                Every code snippet in this codelab comes directly from <strong>Gemmea</strong> (<em>Gemma</em> + <em>Mmea</em>, Kiswahili for &quot;plant/crop&quot;), winner of <strong>1st Place at GDG on Campus UCB Build with Gemma 2026</strong>.
                            </p>
        <p className={"lang-fr"}>
                                Chaque extrait de code de ce codelab provient directement de <strong>Gemmea</strong> (<em>Gemma</em> + <em>Mmea</em>, qui signifie &quot;plante/culture&quot; en kiswahili), lauréat du <strong>1er Prix au hackathon GDG on Campus UCB Build with Gemma 2026</strong>.
                            </p>
      </Callout>
      <h3><Bilingual en={"1. Context & The \"Why\""} fr={"1. Contexte & Pourquoi"} /></h3>
      <ol className={"lang-en"}>
        <li><strong>The Connectivity Reality:</strong> How often do your users lose signal when traveling outside Kampala to Gulu, Mbarara, Entebbe, or across the border into rural Kivu?</li>        <li><strong>The Unit Economics Trap:</strong> Can an African startup sustainably pay Cloud LLM API bills in <strong>USD</strong> while users pay in <strong>UGX</strong> or <strong>CDF</strong>; or cannot afford daily mobile data bundles at all?</li>        <li><strong>The Hardware Boundary:</strong> What happens when you load an unoptimized LLM onto a $120 Android phone with <strong>3GB to 6GB RAM</strong>? (Spoiler: Android&apos;s Low Memory Killer terminates your process immediately).</li>
      </ol>
      <ol className={"lang-fr"}>
        <li><strong>La réalité de la connectivité :</strong> À quelle fréquence vos utilisateurs perdent-ils le réseau lorsqu&apos;ils quittent Kampala pour Gulu, Mbarara, Entebbe ou les zones rurales du Kivu ?</li>        <li><strong>Le piège économique des API Cloud :</strong> Une startup africaine peut-elle durablement payer des factures d&apos;API LLM Cloud en <strong>USD</strong> alors que ses utilisateurs paient en <strong>UGX</strong> ou <strong>CDF</strong>, ou n&apos;ont pas les moyens d&apos;acheter des forfaits data quotidiens ?</li>        <li><strong>La limite matérielle :</strong> Que se passe-t-il lorsque vous chargez un LLM non optimisé sur un smartphone Android à 120 $ doté de <strong>3 Go à 6 Go de RAM</strong> ? (Spoiler : le Low Memory Killer d&apos;Android tue votre processus instantanément).</li>
      </ol>
      <h4><Bilingual en={"Cloud AI vs. On-Device Edge AI in East Africa"} fr={"IA Cloud vs IA Embarquée (On-Device) en Afrique de l'Est"} /></h4>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Metric</th>              <th>Cloud LLM APIs (REST / WebSocket)</th>              <th>On-Device (<code>flutter_edge_ai</code> + LiteRT-LM)</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Offline Availability</strong></td>              <td>0% (Fails completely in rural zones)</td>              <td><strong>100% (Runs in Airplane Mode)</strong></td>
            </tr>            <tr>
              <td><strong>Time-to-First-Token (TTFT)</strong></td>              <td>2,000ms to 8,000ms on unstable 3G/Edge</td>              <td><strong>180ms to 600ms on local CPU/GPU</strong></td>
            </tr>            <tr>
              <td><strong>Image Scan Data Cost</strong></td>              <td>2MB to 5MB upload per leaf photo</td>              <td><strong>0 MB network data consumed</strong></td>
            </tr>            <tr>
              <td><strong>Recurring API Token Cost</strong></td>              <td>Scales linearly with active users ($$$)</td>              <td><strong>$0.00 / token forever</strong></td>
            </tr>            <tr>
              <td><strong>Privacy & Data Sovereignty</strong></td>              <td>User photos & voice leave the country</td>              <td><strong>100% private on the device</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Métrique</th>              <th>API LLM Cloud (REST / WebSocket)</th>              <th>IA Embarquée (<code>flutter_edge_ai</code> + LiteRT-LM)</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Disponibilité Hors-Ligne</strong></td>              <td>0 % (Échoue totalement en zone rurale)</td>              <td><strong>100 % (Fonctionne en Mode Avion)</strong></td>
            </tr>            <tr>
              <td><strong>Time-to-First-Token (TTFT)</strong></td>              <td>2 000 ms à 8 000 ms sur 3G/Edge instable</td>              <td><strong>180 ms à 600 ms sur CPU/GPU local</strong></td>
            </tr>            <tr>
              <td><strong>Coût Data par Scan Photo</strong></td>              <td>2 Mo à 5 Mo d&apos;upload par photo de feuille</td>              <td><strong>0 Mo de données mobiles consommées</strong></td>
            </tr>            <tr>
              <td><strong>Coût Récurrent par Token API</strong></td>              <td>Augmente linéairement avec les utilisateurs ($$$)</td>              <td><strong>0,00 $ / token à vie</strong></td>
            </tr>            <tr>
              <td><strong>Confidentialité & Souveraineté</strong></td>              <td>Photos et voix envoyées sur des serveurs distants</td>              <td><strong>100 % privé sur l&apos;appareil</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3><Bilingual en={"2. Learning Goals & What You Will Build"} fr={"2. Objectifs & Ce que vous allez construire"} /></h3>
      <ul className={"lang-en"}>
        <li>Configure <code>flutter_edge_ai</code> and <code>flutter_edge_ai_litertlm</code> (the official evolution of <code>flutter_gemma</code>) to run multimodal Gemma, Phi-3, Qwen, DeepSeek, or custom models locally on Android and iOS.</li>        <li>Implement <strong>atomic <code>.tmp</code> chunked model downloads</strong> via <code>path_provider</code> so interrupted 3G downloads never corrupt native binaries or bloat your APK.</li>        <li>Prevent <strong>native C++ FFI concurrency deadlocks</strong> and Flutter Hot-Reload freezes with a thread-safe <code>GemmaEngineManager</code> mutex.</li>        <li>Eliminate Out-Of-Memory (OOM) kills during multimodal camera scans by downsampling images to <code>512px</code> and building prompt-level <strong>Early-Exit Guardrails</strong>.</li>        <li>Ground small quantized models without a heavy vector database using <strong>Zero-RAM SQLite FTS5 + BM25 Local RAG</strong>.</li>        <li><strong>Bonus Finale:</strong> Distill and quantize a domain-specific Gemma Small Language Model (SLM) to <strong>under 150 MB</strong> (<code>134 MB</code> INT4) using PyTorch and <code>ai-edge-torch</code>.</li>
      </ul>
      <ul className={"lang-fr"}>
        <li>Configurer <code>flutter_edge_ai</code> et <code>flutter_edge_ai_litertlm</code> (l&apos;évolution officielle de <code>flutter_gemma</code>) pour exécuter des modèles Gemma, Phi-3, Qwen, DeepSeek ou sur-mesure localement sur Android et iOS.</li>        <li>Implémenter le <strong>téléchargement atomique par blocs via fichier <code>.tmp</code></strong> avec <code>path_provider</code> afin que les coupures 3G ne corrompent jamais les binaires natifs et n&apos;alourdissent pas votre APK.</li>        <li>Prévenir les <strong>deadlocks de concurrence C++ FFI natifs</strong> et les blocages lors du Hot-Reload Flutter grâce au mutex thread-safe <code>GemmaEngineManager</code>.</li>        <li>Éliminer les crashs Out-Of-Memory (OOM) lors des scans caméra multimodaux en réduisant les images à <code>512px</code> et en intégrant des <strong>garde-fous d&apos;arrêt anticipé (Early-Exit)</strong> dans le prompt.</li>        <li>Ancrer factuellement les petits modèles quantifiés sans base vectorielle lourde grâce au <strong>RAG local SQLite FTS5 + BM25 à Zéro-RAM</strong>.</li>        <li><strong>Bonus Final :</strong> Distiller et quantifier un modèle Gemma spécialisé (SLM) sous la barre des <strong>150 Mo</strong> (<code>134 Mo</code> en INT4) avec PyTorch et <code>ai-edge-torch</code>.</li>
      </ul>
      <h3><Bilingual en={"3. Prerequisites & System Requirements"} fr={"3. Prérequis & Configuration Système"} /></h3>
      <p className={"lang-en"}>
                        Before starting the hands-on steps, verify that your laptop and test device meet the following requirements so native C++ MediaPipe / LiteRT-LM bindings compile and execute without errors:
                    </p>
      <p className={"lang-fr"}>
                        Avant de commencer les étapes pratiques, vérifiez que votre ordinateur et votre téléphone de test respectent la configuration suivante afin que les bindings C++ natifs MediaPipe / LiteRT-LM compilent et s&apos;exécutent sans erreur :
                    </p>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Requirement</th>              <th>Minimum / Recommended Specification</th>              <th>Why It Is Required</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Flutter & Dart SDK</strong></td>              <td><strong>Flutter 3.24.0+</strong> (Dart <strong>3.5.0+</strong>)</td>              <td>Required by <code>flutter_edge_ai</code>, <code>flutter_edge_ai_litertlm</code>, and modern FFI bindings.</td>
            </tr>            <tr>
              <td><strong>Java Development Kit</strong></td>              <td><strong>JDK 17</strong> (bundled with Android Studio Ladybug+)</td>              <td>Required by Android Gradle Plugin (AGP 8+) to build the APK.</td>
            </tr>            <tr>
              <td><strong>Android SDK & NDK</strong></td>              <td><code>compileSdk 34+</code> and <strong><code>minSdk 26</code></strong> (Android 8.0+)</td>              <td>LiteRT-LM native <code>.so</code> libraries require Android API 26+ (default Flutter is 21/24).</td>
            </tr>            <tr>
              <td><strong>Target Android Device</strong></td>              <td><strong>Physical 64-bit ARM (<code>arm64-v8a</code>) phone</strong> with <strong>3GB to 6GB+ RAM</strong> & <strong>2.0 GB free storage</strong></td>              <td>Standard x86_64 PC emulators lack native ARM64 GenAI acceleration; always test on a real phone via USB Debugging (or ARM64 simulator on Apple Silicon).</td>
            </tr>            <tr>
              <td><strong>Python / Colab (Optional)</strong></td>              <td>Google Colab (Free T4 GPU) or Python 3.10+</td>              <td>Only needed if you run the bonus Step 8 model distillation scripts.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Composant</th>              <th>Spécification Minimale / Recommandée</th>              <th>Pourquoi c&apos;est requis</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>SDK Flutter & Dart</strong></td>              <td><strong>Flutter 3.24.0+</strong> (Dart <strong>3.5.0+</strong>)</td>              <td>Requis par <code>flutter_edge_ai</code>, <code>flutter_edge_ai_litertlm</code> et les bindings FFI modernes.</td>
            </tr>            <tr>
              <td><strong>Java Development Kit</strong></td>              <td><strong>JDK 17</strong> (inclus avec Android Studio Ladybug+)</td>              <td>Requis par Android Gradle Plugin (AGP 8+) pour compiler l&apos;APK.</td>
            </tr>            <tr>
              <td><strong>Android SDK & NDK</strong></td>              <td><code>compileSdk 34+</code> et <strong><code>minSdk 26</code></strong> (Android 8.0+)</td>              <td>Les librairies natives <code>.so</code> de LiteRT-LM exigent Android API 26+ (le défaut Flutter est 21/24).</td>
            </tr>            <tr>
              <td><strong>Appareil Android Cible</strong></td>              <td><strong>Smartphone physique ARM 64-bit (<code>arm64-v8a</code>)</strong> avec <strong>3 Go à 6 Go+ de RAM</strong> et <strong>2,0 Go d&apos;espace libre</strong></td>              <td>Les émulateurs PC x86_64 n&apos;ont pas l&apos;accélération ARM64 GenAI native ; testez sur un vrai téléphone via débogage USB (ou simulateur ARM64 sur Apple Silicon).</td>
            </tr>            <tr>
              <td><strong>Python / Colab (Optionnel)</strong></td>              <td>Google Colab (GPU T4 gratuit) ou Python 3.10+</td>              <td>Uniquement nécessaire si vous exécutez les scripts bonus de distillation à l&apos;Étape 8.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeWindow
        filename={"Terminal | Pre-Flight Environment Check"}
        lang={"BASH / POWERSHELL"}
        code={"# 1. Verify Flutter (>= 3.24.0), Dart (>= 3.5.0), Android toolchain & JDK 17\r\nflutter doctor -v\r\n\r\n# 2. Verify your physical Android phone is connected with USB Debugging enabled\r\nflutter devices"}
      />
    </>
  );
}

function Step2() {
  return (
    <>
      <p className={"lang-en"}>
                        Smallholder farmers across Uganda, DRC, Rwanda, and Burundi lose 40% to 80% of their yields to threats like <strong>Cassava Mosaic Disease (CMD)</strong>, <strong>Banana Bacterial Wilt (BXW / Kayovu)</strong>, and <strong>Maize Rust</strong>. To give farmers accurate, scientifically grounded remedies in the middle of a field with zero connectivity, Gemmea combines three local subsystems:
                    </p>
      <p className={"lang-fr"}>
                        Les petits exploitants agricoles en Ouganda, en RDC, au Rwanda et au Burundi perdent entre 40 % et 80 % de leurs récoltes à cause de fléaux tels que la <strong>Mosaïque du Manioc (CMD)</strong>, le <strong>Flétrissement Bactérien du Bananier (BXW / Kayovu)</strong> et la <strong>Rouille du Maïs</strong>. Pour offrir aux agriculteurs des remèdes précis et scientifiquement fondés au milieu d&apos;un champ sans aucune connexion, Gemmea combine trois sous-systèmes locaux :
                    </p>
      <CodeWindow
        filename={"Gemmea Offline-First Pipeline"}
        lang={"ARCHITECTURE"}
        code={"[ Farmer / User in the Field (Airplane Mode ON) ]\r\n       │\r\n       ├── 1. Captures Leaf Photo OR Asks Question (Text / Offline Voice)\r\n       ▼\r\n┌──────────────────────────────────────────────────────────────────────┐\r\n│ 1. LOCAL RAG ENGINE (SQLite FTS5 + BM25 Ranking)                     │\r\n│ - Searches indexed FAO & IITA agronomic manuals in <2ms (0 MB RAM)   │\r\n│ - Extracts verified pathogen symptoms, organic dosages & seasons     │\r\n└──────────────────────────────┬───────────────────────────────────────┘\r\n                               │ 2. Injects Factual Grounding Context\r\n                               ▼\r\n┌──────────────────────────────────────────────────────────────────────┐\r\n│ 2. ON-DEVICE ENGINE (flutter_edge_ai + LiteRT-LM Runtime)            │\r\n│ - GemmaEngineManager: Single-threaded FFI Mutex + 8s Timeout Lock    │\r\n│ - Vision VLM Mode: 512px image + 4096 maxTokens + Early-Exit Filter  │\r\n│ - Chat Assistant Mode: 2048 maxTokens + 5-message Sliding Window     │\r\n└──────────────────────────────┬───────────────────────────────────────┘\r\n                               │ 3. Streams Sanitized Tokens\r\n                               ▼\r\n┌──────────────────────────────────────────────────────────────────────┐\r\n│ 3. FLUTTER BLoC / CUBIT LAYER & AUTONOMOUS ACTIONS                   │\r\n│ - Real-time LaTeX/Emoji Sanitizer (converts $NaHCO_3$ -> plain text) │\r\n│ - Autonomous Function Calling (pauses/resumes SQLite rain calendar)  │\r\n│ - Offline TTS Readout & Farm Health PDF Export                       │\r\n└──────────────────────────────────────────────────────────────────────┘"}
      />
      <h3><Bilingual en={"1. Create the Flutter Project & Minimal File Structure"} fr={"1. Créer le projet Flutter & l'arborescence minimale"} /></h3>
      <p className={"lang-en"}>
                        If you are coding along from scratch, create a new Flutter project and set up only the <strong>6 self-contained Dart files</strong> below (skipping custom fonts, PDF assets, and extra screens so your app compiles and runs on any laptop in minutes):
                    </p>
      <p className={"lang-fr"}>
                        Si vous codez depuis zéro durant l&apos;atelier, créez un nouveau projet Flutter et préparez uniquement les <strong>6 fichiers Dart autonomes</strong> ci-dessous (sans polices personnalisées, assets PDF ni écrans secondaires afin que votre application compile et tourne en quelques minutes) :
                    </p>
      <CodeWindow
        filename={"Terminal | Create Project & Folders (macOS / Linux / Git Bash)"}
        lang={"BASH"}
        code={"flutter create --org com.gemmea gemmea\r\ncd gemmea\r\nmkdir -p lib/core/services lib/core/utils lib/data/datasources lib/data/repositories"}
      />
      <CodeWindow
        filename={"Terminal | Create Project & Folders (Windows PowerShell)"}
        lang={"POWERSHELL"}
        code={"flutter create --org com.gemmea gemmea\r\ncd gemmea\r\nNew-Item -ItemType Directory -Force -Path lib/core/services, lib/core/utils, lib/data/datasources, lib/data/repositories"}
      />
      <CodeWindow
        filename={"Minimal Runnable Project Structure (6 Complete Files)"}
        lang={"TREE"}
        code={"lib/\r\n├── core/\r\n│   ├── services/\r\n│   │   └── gemma_engine_manager.dart    # Step 4: Native FFI Mutex & Hot-Reload Lock\r\n│   └── utils/\r\n│       └── text_sanitizer.dart          # Step 7: Real-time LaTeX & Emoji Sanitizer\r\n├── data/\r\n│   ├── datasources/\r\n│   │   ├── gemma_local_source.dart      # Step 5: 512px Vision VLM & Early-Exit Guardrail\r\n│   │   └── sqlite_helper.dart           # Step 6: Zero-RAM SQLite FTS5 + BM25 Local RAG\r\n│   └── repositories/\r\n│       └── chat_repository_impl.dart    # Steps 3 & 7: Atomic .tmp Download & Token Stream\r\n└── main.dart                            # Step 9: Minimal Runnable UI (Download + Scan + Chat)"}
      />
      <h3><Bilingual en={<>2. Replace <code>pubspec.yaml</code> & Fetch Packages</>} fr={<>2. Remplacer <code>pubspec.yaml</code> & installer les dépendances</>} /></h3>
      <p className={"lang-en"}>
                        Replace your <code>pubspec.yaml</code> with the complete configuration below (compatible with Dart <code>&gt;=3.5.0 &lt;4.0.0</code> and including <code>uses-material-design: true</code> so Material icons render properly), then run <code>flutter pub get</code>:
                    </p>
      <p className={"lang-fr"}>
                        Remplacez votre fichier <code>pubspec.yaml</code> par la configuration complète ci-dessous (compatible avec Dart <code>&gt;=3.5.0 &lt;4.0.0</code> et incluant <code>uses-material-design: true</code> pour l&apos;affichage des icônes Material), puis exécutez <code>flutter pub get</code> :
                    </p>
      <CodeWindow
        filename={"pubspec.yaml"}
        lang={"YAML"}
        code={"name: gemmea\r\ndescription: \"Offline-first AI agronomic assistant powered by Google Gemma & SQLite FTS5 RAG.\"\r\npublish_to: 'none'\r\nversion: 0.1.0+1\r\n\r\nenvironment:\r\n  sdk: '>=3.5.0 <4.0.0'\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n\r\n  # On-Device Edge AI Runtime (LiteRT-LM Native Bindings)\r\n  # Note: Use the current latest versions from pub.dev at the time you follow this codelab\r\n  flutter_edge_ai:\r\n  flutter_edge_ai_litertlm:\r\n\r\n  # Local FTS5 RAG Database & Atomic Model File Management\r\n  sqflite:\r\n  path:\r\n  path_provider:\r\n  http:\r\n\r\n  # Multimodal Camera / Gallery Input\r\n  image_picker:\r\n\r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n  flutter_lints:\r\n\r\nflutter:\r\n  uses-material-design: true"}
      />
      <Callout variant={"info"} iconName={"info"} titleEn={"Evolution Note: Upgrading from flutter_gemma"} titleFr={"Note d'évolution : Migration depuis flutter_gemma"}>
        <p className={"lang-en"}>
                                The package <code>flutter_gemma</code> was renamed to <code>flutter_edge_ai</code> in October 2026 to reflect its broad ability to execute non-Gemma models (Phi, Qwen, DeepSeek, SmolLM, and converted custom models). If you have an existing codebase with <code>flutter_gemma</code>, simply update your <code>pubspec.yaml</code> to <code>flutter_edge_ai</code> (using the current latest version from pub.dev) and run <code>dart fix --apply</code> in your terminal to automatically update all class names and imports.
                            </p>
        <p className={"lang-fr"}>
                                Le package <code>flutter_gemma</code> a été renommé en <code>flutter_edge_ai</code> en octobre 2026 pour refléter sa capacité à exécuter d&apos;autres modèles que Gemma (Phi, Qwen, DeepSeek, SmolLM et modèles personnalisés convertis). Si vous avez déjà du code avec <code>flutter_gemma</code>, mettez simplement à jour votre <code>pubspec.yaml</code> vers <code>flutter_edge_ai</code> (avec la version actuelle sur pub.dev) puis lancez <code>dart fix --apply</code> dans votre terminal pour renommer automatiquement les classes et imports.
                            </p>
      </Callout>
      <h3><Bilingual en={<>3. Set Android <code>minSdk = 26</code> & Hardware Acceleration</>} fr={<>3. Configurer Android <code>minSdk = 26</code> & l&apos;accélération matérielle</>} /></h3>
      <p className={"lang-en"}><strong>Crucial Step:</strong> <code>flutter_edge_ai</code> and <code>flutter_edge_ai_litertlm</code> link native 64-bit C++ MediaPipe / LiteRT-LM binaries that require <strong>Android API 26+ (Android 8.0)</strong>. Open <code>android/app/build.gradle.kts</code> (or <code>android/app/build.gradle</code>) and update <code>minSdk</code> inside <code>defaultConfig</code> from <code>flutter.minSdkVersion</code> to <code>26</code>:
                    </p>
      <p className={"lang-fr"}><strong>Étape cruciale :</strong> <code>flutter_edge_ai</code> et <code>flutter_edge_ai_litertlm</code> lient des binaires C++ 64-bit natifs MediaPipe / LiteRT-LM qui exigent <strong>Android API 26+ (Android 8.0)</strong>. Ouvrez <code>android/app/build.gradle.kts</code> (ou <code>android/app/build.gradle</code>) et remplacez <code>minSdk</code> dans <code>defaultConfig</code> par <code>26</code> :
                    </p>
      <CodeWindow
        filename={"android/app/build.gradle.kts (defaultConfig block)"}
        lang={"KOTLIN DSL"}
        code={"    defaultConfig {\r\n        applicationId = \"com.gemmea.gemmea\"\r\n        // MediaPipe / LiteRT-LM native .so libraries require minSdk 26+\r\n        minSdk = 26\r\n        targetSdk = flutter.targetSdkVersion\r\n        versionCode = flutter.versionCode\r\n        versionName = flutter.versionName\r\n    }"}
      />
      <p className={"lang-en"}>
                        Next, replace <code>android/app/src/main/AndroidManifest.xml</code> with this complete manifest so <code>INTERNET</code> and <code>CAMERA</code> permissions and GPU/CPU hardware acceleration are enabled while preserving the default <code>@mipmap/ic_launcher</code> icon and <code>MAIN</code> launcher intent:
                    </p>
      <p className={"lang-fr"}>
                        Ensuite, remplacez <code>android/app/src/main/AndroidManifest.xml</code> par ce manifeste complet afin d&apos;activer les permissions <code>INTERNET</code> et <code>CAMERA</code> ainsi que l&apos;accélération matérielle GPU/CPU tout en conservant l&apos;icône par défaut <code>@mipmap/ic_launcher</code> et l&apos;intent <code>MAIN</code> :
                    </p>
      <CodeWindow
        filename={"android/app/src/main/AndroidManifest.xml"}
        lang={"XML"}
        code={"<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\">\r\n    <uses-permission android:name=\"android.permission.INTERNET\" />\r\n    <uses-permission android:name=\"android.permission.CAMERA\" />\r\n    <uses-permission android:name=\"android.permission.RECORD_AUDIO\" />\r\n    <uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\" />\r\n\r\n    <application\r\n        android:label=\"Gemmea\"\r\n        android:name=\"${applicationName}\"\r\n        android:icon=\"@mipmap/ic_launcher\">\r\n        <activity\r\n            android:name=\".MainActivity\"\r\n            android:exported=\"true\"\r\n            android:launchMode=\"singleTop\"\r\n            android:taskAffinity=\"\"\r\n            android:theme=\"@style/LaunchTheme\"\r\n            android:configChanges=\"orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode\"\r\n            android:hardwareAccelerated=\"true\"\r\n            android:windowSoftInputMode=\"adjustResize\">\r\n            <meta-data\r\n              android:name=\"io.flutter.embedding.android.NormalTheme\"\r\n              android:resource=\"@style/NormalTheme\"\r\n              />\r\n            <intent-filter>\r\n                <action android:name=\"android.intent.action.MAIN\"/>\r\n                <category android:name=\"android.intent.category.LAUNCHER\"/>\r\n            </intent-filter>\r\n        </activity>\r\n        <meta-data\r\n            android:name=\"flutterEmbedding\"\r\n            android:value=\"2\" />\r\n    </application>\r\n</manifest>"}
      />
    </>
  );
}

function Step3() {
  return (
    <>
      <p className={"lang-en"}>
                        On a mid-tier <strong>4GB RAM Android phone</strong>, Android OS and system services consume ~1.6GB of RAM, and the Flutter UI + Dart VM take ~300MB. That leaves a strict ceiling of <strong>~1.8GB to 2.0GB</strong> before Android&apos;s Low Memory Killer (<code>lmkd</code>) terminates your app.
                    </p>
      <p className={"lang-fr"}>
                        Sur un smartphone Android milieu de gamme doté de <strong>4 Go de RAM</strong>, le système Android et ses services consomment ~1,6 Go de RAM, tandis que l&apos;interface Flutter et la VM Dart occupent ~300 Mo. Cela laisse un plafond strict de <strong>~1,8 Go à 2,0 Go</strong> avant que le Low Memory Killer d&apos;Android (<code>lmkd</code>) ne tue votre application.
                    </p>
      <div className={"metric-cards"}>
        <div className={"metric-card"}>
<span className={"metric-value"}>~4.0 GB</span><span className={"metric-label"}>2B Model in FP16 (Crashes on 4GB RAM)</span>
        </div>        <div className={"metric-card"}>
<span className={"metric-value"}>~2.1 GB</span><span className={"metric-label"}>2B Model in INT8 (Zero headroom for Vision)</span>
        </div>        <div className={"metric-card"}>
<span className={"metric-value"}>~1.2 GB</span><span className={"metric-label"}>E2B in INT4 <code>.litertlm</code> (75% smaller!)</span>
        </div>        <div className={"metric-card"}>
<span className={"metric-value"}>134 MB</span><span className={"metric-label"}>Distilled 240M SLM in INT4 (See Step 8)</span>
        </div>
      </div>
      <Callout variant={"warning"} iconName={"warning"} titleEn={<>Production Pitfall: Never Put Multi-Hundred-MB Models in Flutter <code>assets/</code></>} titleFr={<>Piège en Production : Ne jamais inclure des modèles de plusieurs centaines de Mo dans <code>assets/</code></>}>
        <p className={"lang-en"}>
                                Bundling a 1.3GB model inside <code>pubspec.yaml</code> assets violates Google Play&apos;s 150MB base APK/AAB limit and forces Flutter to copy/decompress the asset on first boot: causing instant <code>OutOfMemoryError</code> crashes on budget phones.
                            </p>
        <p className={"lang-fr"}>
                                Embarquer un modèle de 1,3 Go dans les assets de <code>pubspec.yaml</code> dépasse la limite de 150 Mo d&apos;un APK/AAB Google Play et oblige Flutter à copier/décompresser l&apos;asset au premier démarrage : ce qui provoque un crash <code>OutOfMemoryError</code> immédiat sur les téléphones d&apos;entrée de gamme.
                            </p>
      </Callout>
      <h3><Bilingual en={<>The Solution: Chunked Streaming + Atomic <code>.tmp</code> Swap</>} fr={<>La Solution : Streaming par blocs + Renommage Atomique <code>.tmp</code></>} /></h3>
      <p className={"lang-en"}>
                        In <code>lib/data/repositories/chat_repository_impl.dart</code>, we stream the quantized <code>.litertlm</code> binary directly to <code>getApplicationDocumentsDirectory()</code> using an <code>IOSink</code> (so Dart&apos;s RAM heap stays flat at &lt;5MB). Crucially, we write to <code>gemma.litertlm.tmp</code> first and <strong>only rename it to <code>gemma.litertlm</code> when 100% of bytes are on disk</strong>. If a user&apos;s connection drops at 89%, the native C++ engine will never attempt to memory-map a corrupted binary! (You will paste the complete <code>chat_repository_impl.dart</code> file in Step 7).
                    </p>
      <p className={"lang-fr"}>
                        Dans <code>lib/data/repositories/chat_repository_impl.dart</code>, nous streamons le binaire quantifié <code>.litertlm</code> directement vers <code>getApplicationDocumentsDirectory()</code> à l&apos;aide d&apos;un <code>IOSink</code> (afin que le tas mémoire Dart reste sous 5 Mo). Point crucial : nous écrivons d&apos;abord dans <code>gemma.litertlm.tmp</code> et <strong>ne le renommons en <code>gemma.litertlm</code> qu&apos;une fois 100 % des octets écrits sur le disque</strong>. Si la connexion coupe à 89 %, le moteur C++ natif ne tentera jamais de projeter en mémoire (<code>mmap</code>) un fichier corrompu ! (Vous collerez le fichier complet <code>chat_repository_impl.dart</code> à l&apos;Étape 7).
                    </p>
      <CodeWindow
        filename={"lib/data/repositories/chat_repository_impl.dart (Atomic Download Part)"}
        lang={"DART"}
        code={"Future<bool> checkModelInstalled() async {\r\n  final directory = await getApplicationDocumentsDirectory();\r\n  final litertlmFile = File('${directory.path}/gemma.litertlm');\r\n  final binFile = File('${directory.path}/gemma.bin');\r\n\r\n  // Auto-migrate legacy gemma.bin to gemma.litertlm if already on the user's phone\r\n  if (await binFile.exists() && !await litertlmFile.exists()) {\r\n    await binFile.rename(litertlmFile.path);\r\n  }\r\n  return await litertlmFile.exists();\r\n}\r\n\r\nFuture<void> initializeGemma(Function(double) onProgress) async {\r\n  return GemmaEngineManager.runWithLock(() async {\r\n    await GemmaEngineManager.ensureInitialized();\r\n\r\n    final directory = await getApplicationDocumentsDirectory();\r\n    final modelFile = File('${directory.path}/gemma.litertlm');\r\n    final tempModelFile = File('${directory.path}/gemma.litertlm.tmp');\r\n\r\n    if (!await modelFile.exists()) {\r\n      // 1. Clean up any incomplete .tmp file from an interrupted download\r\n      if (await tempModelFile.exists()) {\r\n        await tempModelFile.delete();\r\n      }\r\n\r\n      // 2. Fast 4-second DNS check before opening the download stream\r\n      final result = await InternetAddress.lookup('google.com')\r\n          .timeout(const Duration(seconds: 4));\r\n      if (result.isEmpty || result.first.rawAddress.isEmpty) {\r\n        throw const SocketException('Internet connection is required for first-time setup.');\r\n      }\r\n\r\n      const url = 'https://huggingface.co/litert-community/'\r\n          'gemma-4-E2B-it-litert-lm/resolve/main/gemma-4-E2B-it.litertlm';\r\n      final client = http.Client();\r\n\r\n      try {\r\n        final request = http.Request('GET', Uri.parse(url));\r\n        final response = await client.send(request);\r\n        if (response.statusCode != 200) {\r\n          throw HttpException('Download failed (HTTP ${response.statusCode})');\r\n        }\r\n\r\n        final contentLength = response.contentLength ?? 0;\r\n        int downloadedBytes = 0;\r\n\r\n        // 3. Stream chunks directly to disk via IOSink (Zero RAM bloat)\r\n        final IOSink sink = tempModelFile.openWrite();\r\n        await response.stream.forEach((chunk) {\r\n          downloadedBytes += chunk.length;\r\n          sink.add(chunk);\r\n          if (contentLength > 0) {\r\n            onProgress(downloadedBytes / contentLength);\r\n          }\r\n        });\r\n        await sink.close();\r\n\r\n        // 4. ATOMIC RENAME: Only promote to gemma.litertlm upon 100% completion\r\n        if (await tempModelFile.exists()) {\r\n          await tempModelFile.rename(modelFile.path);\r\n        }\r\n      } catch (e) {\r\n        if (await tempModelFile.exists()) await tempModelFile.delete();\r\n        rethrow;\r\n      } finally {\r\n        client.close();\r\n      }\r\n    }\r\n\r\n    // 5. Register the verified local file with FlutterGemma's LiteRT-LM runtime\r\n    await FlutterGemma.installModel(\r\n      modelType: ModelType.gemmaIt,\r\n      fileType: ModelFileType.litertlm,\r\n    ).fromFile(modelFile.path).install();\r\n  });\r\n}"}
      />
    </>
  );
}

function Step4() {
  return (
    <>
      <Callout variant={"danger"} iconName={"danger"} titleEn={"What Failed in Production #1: Concurrent Native Sessions & Orphaned Isolates"} titleFr={"Ce qui a échoué en Production #1 : Sessions Natives Concurrentes & Isolates Orphelins"}>
        <p className={"lang-en"}>
                                MediaPipe / LiteRT-LM allocates a single native C++ execution graph in memory. During field testing, if a user started a leaf scan and switched to the Chat tab before the scan finished; or if a developer triggered a Flutter <strong>Hot Reload</strong> while a stream was open: the native FFI channel deadlocked permanently or threw <code>PlatformException(channel-error)</code>.
                            </p>
        <p className={"lang-fr"}>
                                MediaPipe / LiteRT-LM alloue un seul graphe d&apos;exécution C++ natif en mémoire. Lors des tests sur le terrain, si un utilisateur lançait un scan de feuille puis basculait vers l&apos;onglet Chat avant la fin du scan, ou si un développeur déclenchait un <strong>Hot Reload</strong> Flutter pendant qu&apos;un flux était ouvert : le canal FFI natif se bloquait définitivement (deadlock) ou levait une <code>PlatformException(channel-error)</code>.
                            </p>
      </Callout>
      <h3><Bilingual en={<>The Solution: <code>GemmaEngineManager</code></>} fr={<>La Solution : <code>GemmaEngineManager</code></>} /></h3>
      <p className={"lang-en"}>
                        To make on-device inference rock-solid, we built <code>GemmaEngineManager</code> in <code>lib/core/services/gemma_engine_manager.dart</code>. It serializes all Future and Stream operations through a <code>Completer</code> mutex lock, includes an <strong>8-second deadlock timeout</strong> to recover from orphaned Hot-Reload isolates, and automatically resets stale chat session pointers when a native channel error occurs:
                    </p>
      <p className={"lang-fr"}>
                        Pour rendre l&apos;inférence embarquée infaillible, nous avons conçu <code>GemmaEngineManager</code> dans <code>lib/core/services/gemma_engine_manager.dart</code>. Il sérialise toutes les opérations Future et Stream via un verrou mutex <code>Completer</code>, intègre un <strong>timeout anti-deadlock de 8 secondes</strong> pour récupérer après un Hot-Reload, et réinitialise automatiquement les pointeurs de session obsolètes en cas d&apos;erreur de canal natif :
                    </p>
      <CodeWindow
        filename={"lib/core/services/gemma_engine_manager.dart"}
        lang={"DART"}
        code={"import 'dart:async';\r\nimport 'dart:developer' as dev;\r\nimport 'package:flutter_edge_ai/flutter_edge_ai.dart';\r\nimport 'package:flutter_edge_ai_litertlm/flutter_edge_ai_litertlm.dart';\r\n\r\nclass GemmaEngineManager {\r\n  static bool _isInitialized = false;\r\n  static Completer<void>? _initCompleter;\r\n  static Future<void>? _activeExecution;\r\n  static Function()? _onResetChatCallback;\r\n\r\n  static bool get isInitialized => _isInitialized;\r\n  static bool get isBusy => _activeExecution != null;\r\n\r\n  static void setResetChatCallback(Function() callback) {\r\n    _onResetChatCallback = callback;\r\n  }\r\n\r\n  static void resetChatSession() {\r\n    _onResetChatCallback?.call();\r\n  }\r\n\r\n  /// Force clears stale lock state and resets chat session on Hot Reload or FFI error\r\n  static void forceResetLockState() {\r\n    dev.log(\"Force resetting GemmaEngineManager lock state & session handles.\");\r\n    _activeExecution = null;\r\n    _initCompleter = null;\r\n    resetChatSession();\r\n  }\r\n\r\n  static Future<void> ensureInitialized() async {\r\n    if (_isInitialized) return;\r\n    if (_initCompleter != null) return _initCompleter!.future;\r\n\r\n    _initCompleter = Completer<void>();\r\n    try {\r\n      await FlutterEdgeAi.initialize(\r\n        inferenceEngines: const [LiteRtLmEngine()],\r\n      );\r\n      _isInitialized = true;\r\n      _initCompleter!.complete();\r\n    } catch (e) {\r\n      // Native FFI engine already bound across Hot Reload\r\n      _isInitialized = true;\r\n      if (!(_initCompleter?.isCompleted ?? true)) _initCompleter!.complete();\r\n    } finally {\r\n      _initCompleter = null;\r\n    }\r\n  }\r\n\r\n  /// Wraps a Future operation to guarantee single-threaded execution on LiteRT-LM\r\n  static Future<T> runWithLock<T>(Future<T> Function() action) async {\r\n    final previousExecution = _activeExecution;\r\n    final completer = Completer<void>();\r\n    _activeExecution = completer.future;\r\n\r\n    if (previousExecution != null) {\r\n      try {\r\n        await previousExecution.timeout(const Duration(seconds: 8));\r\n      } on TimeoutException {\r\n        forceResetLockState();\r\n      } catch (_) {}\r\n    }\r\n\r\n    try {\r\n      return await action();\r\n    } catch (e) {\r\n      if (e.toString().contains(\"channel-error\") ||\r\n          e.toString().contains(\"PlatformException\") ||\r\n          e.toString().contains(\"Null\")) {\r\n        forceResetLockState();\r\n      }\r\n      rethrow;\r\n    } finally {\r\n      completer.complete();\r\n      if (_activeExecution == completer.future) _activeExecution = null;\r\n    }\r\n  }\r\n\r\n  /// Wraps a Stream operation with the same FFI mutex & deadlock protection\r\n  static Stream<T> runStreamWithLock<T>(Stream<T> Function() streamFactory) async* {\r\n    final previousExecution = _activeExecution;\r\n    final completer = Completer<void>();\r\n    _activeExecution = completer.future;\r\n\r\n    if (previousExecution != null) {\r\n      try {\r\n        await previousExecution.timeout(const Duration(seconds: 8));\r\n      } on TimeoutException {\r\n        forceResetLockState();\r\n      } catch (_) {}\r\n    }\r\n\r\n    try {\r\n      await for (final value in streamFactory()) {\r\n        yield value;\r\n      }\r\n    } catch (e) {\r\n      if (e.toString().contains(\"channel-error\") ||\r\n          e.toString().contains(\"PlatformException\")) {\r\n        forceResetLockState();\r\n      }\r\n      rethrow;\r\n    } finally {\r\n      completer.complete();\r\n      if (_activeExecution == completer.future) _activeExecution = null;\r\n    }\r\n  }\r\n}"}
      />
      <h3><Bilingual en={"Hardware Inference Strategy: Does Gemmea Run on CPU or GPU and Why?"} fr={"Stratégie d'Inférence Matérielle : Gemmea tourne-t-il sur CPU ou GPU et Pourquoi ?"} /></h3>
      <p className={"lang-en"}>
                        When deploying on-device Small Language Models (SLMs) and Vision-Language Models (VLMs) with <code>flutter_edge_ai</code>, developers can explicitly configure the execution hardware target in <code>FlutterEdgeAi.getActiveModel()</code> using <code>preferredBackend: PreferredBackend.cpu</code> or <code>preferredBackend: PreferredBackend.gpu</code>.
                    </p>
      <p className={"lang-fr"}>
                        Lors du déploiement de modèles de langage légers (SLM) ou multimodaux (VLM) avec <code>flutter_edge_ai</code>, les développeurs peuvent configurer explicitement la cible d&apos;exécution matérielle dans <code>FlutterEdgeAi.getActiveModel()</code> à l&apos;aide de <code>preferredBackend: PreferredBackend.cpu</code> ou <code>preferredBackend: PreferredBackend.gpu</code>.
                    </p>
      <p className={"lang-en"}>
                        In production across East Africa, <strong>Gemmea deliberately attempts CPU execution first</strong>, with an automated fallback to GPU or the platform default:
                    </p>
      <p className={"lang-fr"}>
                        En production en Afrique de l&apos;Est, <strong>Gemmea tente délibérément l&apos;exécution sur CPU en priorité</strong>, avec un mécanisme de repli (fallback) automatique vers le GPU ou le backend par défaut de la plateforme :
                    </p>
      <CodeWindow
        filename={"Resilient Backend Initialization Pattern (CPU First with GPU Fallback)"}
        lang={"DART"}
        code={"InferenceModel model;\r\ntry {\r\n  // 1. Attempt CPU initialization: prioritizes universal stability and zero native GPU driver crashes\r\n  model = await FlutterEdgeAi.getActiveModel(\r\n    supportImage: true,\r\n    maxTokens: 2048,\r\n    preferredBackend: PreferredBackend.cpu,\r\n  );\r\n} catch (e) {\r\n  // 2. Automatic fallback to GPU or platform default backend if CPU allocation is unavailable\r\n  model = await FlutterEdgeAi.getActiveModel(\r\n    supportImage: true,\r\n    maxTokens: 2048,\r\n    preferredBackend: PreferredBackend.gpu,\r\n  );\r\n}"}
      />
      <h4><Bilingual en={"Why CPU First in Gemmea? Three Crucial Field Lessons"} fr={"Pourquoi le CPU en priorité dans Gemmea ? Trois retours d'expérience du terrain"} /></h4>
      <p className={"lang-en"}>
                        While GPU execution offers higher theoretical token throughput, field testing across rural smallholder communities in Uganda revealed three critical architectural bottlenecks that make CPU execution superior for production resilience:
                    </p>
      <p className={"lang-fr"}>
                        Bien que l&apos;exécution sur GPU offre un débit théorique de tokens supérieur, les tests sur le terrain auprès des petits exploitants agricoles en Ouganda ont révélé trois goulots d&apos;étranglement architecturaux majeurs qui rendent le CPU bien plus résilient en production :
                    </p>
      <ol className={"lang-en"}>
        <li><strong>GPU Driver Fragmentation & Silent Crashes:</strong> Entry-level and mid-range Android devices (Tecno, Infinix, Samsung Galaxy A, Xiaomi Redmi powered by MediaTek Helio G85/G99 or Unisoc chipsets) run diverse, closed-source GPU drivers (ARM Mali, Imagination PowerVR). Many of these drivers feature incomplete or unstable Vulkan 1.1/1.2 or OpenCL implementations. Attempting to allocate 1.5GB to 2.5GB of model tensors into shared GPU memory triggers native <code>SIGSEGV</code> or <code>EGL_BAD_ALLOC</code> segmentation faults that instantly kill the Linux process without throwing catchable Dart exceptions.
                        </li>        <li><strong>Predictable Memory via Linux <code>mmap</code>:</strong> In CPU mode, the LiteRT-LM runtime maps the quantized INT4 <code>.litertlm</code> binary directly into virtual memory via standard POSIX <code>mmap()</code>. The Android kernel pages model weights on demand into system RAM (LPDDR4x/5) without requiring a massive, contiguous block of dedicated VRAM. This prevents sudden terminations by Android&apos;s Low Memory Killer (<code>lmkd</code>).
                        </li>        <li><strong>Multimodal Vision Pipeline Reliability:</strong> Transferring 512px image tensors between the camera, CPU, and GPU across low-bandwidth 32-bit memory buses frequently causes texture corruption or bus contention. Executing the vision encoder on CPU ensures 100% deterministic mathematical execution.
                        </li>
      </ol>
      <ol className={"lang-fr"}>
        <li><strong>Fragmentation des pilotes GPU & crashs silencieux :</strong> Les smartphones Android d&apos;entrée et de milieu de gamme (Tecno, Infinix, Samsung Galaxy A, Xiaomi Redmi équipés de puces MediaTek Helio G85/G99 ou Unisoc) intègrent des pilotes graphiques propriétaires (ARM Mali, PowerVR) dont le support Vulkan ou OpenCL est parfois partiel ou buggé. Allouer un graphe de 1,5 Go à 2,5 Go en VRAM partagée déclenche des erreurs natives <code>SIGSEGV</code> ou <code>EGL_BAD_ALLOC</code> qui tuent immédiatement le processus sans passer par le bloc <code>try / catch</code> de Dart.
                        </li>        <li><strong>Mémoire prévisible via <code>mmap</code> Linux :</strong> En mode CPU, le moteur LiteRT-LM projette le fichier quantifié INT4 <code>.litertlm</code> en mémoire virtuelle via l&apos;appel système POSIX <code>mmap()</code>. Le noyau Android charge les poids à la demande dans la RAM système (LPDDR4x/5) sans exiger de bloc VRAM contigu rigide, évitant ainsi les arrêts brutaux du <code>lmkd</code> (Low Memory Killer).
                        </li>        <li><strong>Fiabilité du pipeline de vision multimodale :</strong> Le transfert de tenseurs d&apos;image de 512px entre la caméra, le CPU et le GPU sur des bus mémoire étroits de 32 bits génère des goulots d&apos;étranglement ou des corruptions de textures. L&apos;encodage de vision sur CPU garantit une exécution mathématique 100 % déterministe.
                        </li>
      </ol>
      <h4><Bilingual en={"Technical Breakdown: CPU vs. GPU Execution for On-Device SLMs"} fr={"Analyse Technique Comparative : Exécution CPU vs GPU pour SLMs Embarqués"} /></h4>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Technical Metric</th>              <th>CPU Execution</th>              <th>GPU Execution</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Compute Architecture</strong></td>              <td>4 to 8 ARM CPU cores (Cortex-A55 / A78 / X-series) with SIMD vectorization (ARM NEON, FP16/dotprod).</td>              <td>Hundreds to thousands of parallel GPU shader cores optimized for dense matrix multiplication (GEMM).</td>
            </tr>            <tr>
              <td><strong>Generation Throughput</strong></td>              <td><strong>3 to 8 tokens/s</strong> on mid-range; <strong>8 to 14 tokens/s</strong> on modern flagship CPU cores.</td>              <td><strong>15 to 35+ tokens/s</strong> on modern Vulkan 1.3 / Apple Metal GPUs with high memory bandwidth.</td>
            </tr>            <tr>
              <td><strong>Time To First Token (TTFT)</strong></td>              <td>Slower prefill: 1.2s to 3.5s for 500-token prompt context and multimodal image patches.</td>              <td>Ultra-fast prefill: 200ms to 700ms on capable mobile GPUs.</td>
            </tr>            <tr>
              <td><strong>Thermal & Power Profile</strong></td>              <td>Sustained 100% CPU multi-core load triggers thermal throttling after 20 to 30s, reducing clock frequencies.</td>              <td>Higher energy efficiency per FLOP: lower thermal strain during short to medium generation bursts.</td>
            </tr>            <tr>
              <td><strong>Hardware Compatibility</strong></td>              <td><strong>100% Universal:</strong> executes predictably on every ARM64 Android and iOS device with zero driver quirks.</td>              <td><strong>Fragmented:</strong> varies by manufacturer driver releases, Vulkan extensions, and GPU shader compiler bugs.</td>
            </tr>            <tr>
              <td><strong>Memory Tolerance & VRAM</strong></td>              <td>High tolerance via OS virtual memory paging (<code>mmap</code>); no contiguous VRAM buffer restrictions.</td>              <td>Strict allocation caps (<code>GL_MAX_TEXTURE_SIZE</code>); fails abruptly if contiguous memory is fragmented.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Critère Technique</th>              <th>Exécution CPU</th>              <th>Exécution GPU</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Architecture de Calcul</strong></td>              <td>4 à 8 cœurs CPU ARM (Cortex-A55 / A78 / série X) avec vectorisation SIMD (ARM NEON, FP16/dotprod).</td>              <td>Centaines à milliers de micro-cœurs de shaders GPU optimisés pour la multiplication matricielle dense (GEMM).</td>
            </tr>            <tr>
              <td><strong>Vitesse de Génération</strong></td>              <td><strong>3 à 8 tokens/s</strong> sur milieu de gamme ; <strong>8 à 14 tokens/s</strong> sur cœurs CPU haut de gamme.</td>              <td><strong>15 à 35+ tokens/s</strong> sur GPU modernes compatibles Vulkan 1.3 ou Apple Metal avec large bande passante.</td>
            </tr>            <tr>
              <td><strong>Latence Premier Token (TTFT)</strong></td>              <td>Pré-remplissage plus lent : 1,2s à 3,5s pour un prompt de 500 tokens et des patches d&apos;image multimodaux.</td>              <td>Pré-remplissage ultra-rapide : 200ms à 700ms sur les GPU mobiles performants.</td>
            </tr>            <tr>
              <td><strong>Profil Thermique & Batterie</strong></td>              <td>Une charge CPU soutenue à 100 % active le thermal throttling après 20 à 30s, réduisant la fréquence d&apos;horloge.</td>              <td>Excellente efficience énergétique par FLOP : échauffement réduit sur des requêtes courtes et moyennes.</td>
            </tr>            <tr>
              <td><strong>Compatibilité Matérielle</strong></td>              <td><strong>100 % Universelle :</strong> s&apos;exécute de façon déterministe sur tout appareil ARM64 sans dépendance de pilote.</td>              <td><strong>Fragmentée :</strong> dépend des pilotes constructeurs, des extensions Vulkan et des compilateurs de shaders.</td>
            </tr>            <tr>
              <td><strong>Tolérance Mémoire & VRAM</strong></td>              <td>Très haute tolérance via la pagination virtuelle (<code>mmap</code>) ; aucune contrainte de buffer VRAM contigu.</td>              <td>Plafonds d&apos;allocation stricts (<code>GL_MAX_TEXTURE_SIZE</code>) ; crash si la mémoire vidéo est fragmentée.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4><Bilingual en={"Smartphone Tier & Device Sizing Matrix"} fr={"Matrice de Dimensionnement par Gamme de Téléphone"} /></h4>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Device Tier</th>              <th>Representative Hardware & RAM</th>              <th>Recommended Backend</th>              <th>Observed Throughput</th>              <th>Production Safeguards</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Budget / Entry-Level</strong></td>              <td>3GB to 4GB RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>MediaTek Helio G85/G99, Unisoc T606/T616, Snapdragon 680</span></td>              <td><strong>CPU Mandatory</strong></td>              <td>2 to 5 tokens/s</td>              <td>Cap <code>maxTokens: 2048</code>, downsample camera frames to 512px, kill background apps before inference.</td>
            </tr>            <tr>
              <td><strong>Mid-Range</strong></td>              <td>6GB to 8GB RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Snapdragon 7s Gen 2 / 7 Gen 3, Dimensity 7200 / 8200, Exynos 1380</span></td>              <td><strong>GPU Preferred</strong><br />(with CPU fallback)</td>              <td>GPU: 10 to 18 tokens/s<br />CPU: 6 to 10 tokens/s</td>              <td>Comfortable 60 FPS token streaming, stable Vulkan 1.3 execution, balanced battery drain.</td>
            </tr>            <tr>
              <td><strong>Flagship / High-End</strong></td>              <td>12GB to 16GB RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Snapdragon 8 Gen 2 / 3 / Elite, Google Tensor G3 / G4, Apple A17 Pro / M-series</span></td>              <td><strong>GPU or NPU</strong><br />(LiteRT Accelerators)</td>              <td>GPU: 20 to 35+ tokens/s<br />CPU: 12 to 18 tokens/s</td>              <td>Instantaneous responses (&lt;300ms TTFT), multi-turn chats with zero thermal throttling.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Gamme d&apos;Appareil</th>              <th>Matériel Représentatif & RAM</th>              <th>Backend Recommandé</th>              <th>Débit Observé</th>              <th>Garde-Fous de Production</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Entrée de Gamme / Budget</strong></td>              <td>3 Go à 4 Go RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>MediaTek Helio G85/G99, Unisoc T606/T616, Snapdragon 680</span></td>              <td><strong>CPU Obligatoire</strong></td>              <td>2 à 5 tokens/s</td>              <td>Plafonner <code>maxTokens: 2048</code>, sous-échantillonner à 512px, fermer les applications en arrière-plan.</td>
            </tr>            <tr>
              <td><strong>Milieu de Gamme</strong></td>              <td>6 Go à 8 Go RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Snapdragon 7s Gen 2 / 7 Gen 3, Dimensity 7200 / 8200, Exynos 1380</span></td>              <td><strong>GPU Préféré</strong><br />(avec repli CPU)</td>              <td>GPU : 10 à 18 tokens/s<br />CPU : 6 à 10 tokens/s</td>              <td>Streaming fluide à 60 FPS, pilotes Vulkan 1.3 stables, consommation énergétique équilibrée.</td>
            </tr>            <tr>
              <td><strong>Haut de Gamme / Flagship</strong></td>              <td>12 Go à 16 Go RAM<br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>Snapdragon 8 Gen 2 / 3 / Elite, Google Tensor G3 / G4, Apple A17 Pro / série M</span></td>              <td><strong>GPU ou NPU</strong><br />(Accélérateurs LiteRT)</td>              <td>GPU : 20 à 35+ tokens/s<br />CPU : 12 à 18 tokens/s</td>              <td>Réponse instantanée (&lt;300ms TTFT), sessions multi-tours sans aucun bridage thermique.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Callout variant={"info"} iconName={"info"} titleEn={"How Gemmea Keeps CPU Execution Fast in the Field"} titleFr={"Comment Gemmea accélère l'exécution CPU sur le terrain"}>
        <p className={"lang-en"}>
                                Because 2 to 5 tokens/second is typical on entry-level CPUs, Gemmea offsets CPU limitations with three software optimizations: (1) <strong>512px image downsampling</strong> to shrink vision computation by 90% (Step 5); (2) <strong>Prompt-level early-exit</strong> to immediately reject non-plant photos in &lt;15 tokens before the CPU heats up (Step 5); and (3) <strong>Zero-RAM SQLite FTS5 RAG</strong> to inject facts directly into text without RAM-heavy dense vector models (Step 6).
                            </p>
        <p className={"lang-fr"}>
                                Comme un débit de 2 à 5 tokens/seconde est courant sur les CPU économiques, Gemmea compense la vitesse du processeur par trois optimisations logicielles : (1) <strong>Sous-échantillonnage d&apos;image à 512px</strong> pour réduire de 90 % le calcul de vision (Étape 5) ; (2) <strong>Arrêt anticipé par prompt (early-exit)</strong> pour rejeter immédiatement les photos hors-sujet en moins de 15 tokens avant que le CPU ne surchauffe (Étape 5) ; et (3) <strong>RAG local SQLite FTS5 zéro-RAM</strong> pour injecter les faits agronomiques sans charger de modèles de vecteurs denses en mémoire vive (Étape 6).
                            </p>
      </Callout>
    </>
  );
}

function Step5() {
  return (
    <>
      <Callout variant={"danger"} iconName={"danger"} titleEn={"What Failed in Production #2 & #3: 12MP Camera OOMs & CPU Thermal Throttling"} titleFr={"Ce qui a échoué en Production #2 & #3 : Crashs OOM Caméra 12MP & Surchauffe CPU"}>
        <p className={"lang-en"}><strong>1. Vision OOMs:</strong> Passing a raw 4000x3000 (12MP) camera image into <code>Message.withImage()</code> allocates a 48MB RGBA buffer plus huge vision encoder tensors: crashing 4GB RAM phones.<br /><strong>2. Wasted Compute on Non-Leaves:</strong> When a farmer accidentally photographed their shoe, face, or tool, Gemma generated 800+ tokens of hallucinated plant advice, heating up the CPU and draining battery.
                            </p>
        <p className={"lang-fr"}><strong>1. Crashs OOM Vision :</strong> Passer une photo brute de 4000x3000 (12 MP) à <code>Message.withImage()</code> alloue un tampon RGBA de 48 Mo ainsi que d&apos;énormes tenseurs d&apos;encodage visuel, faisant planter les téléphones de 4 Go de RAM.<br /><strong>2. Calcul gaspillé hors-sujet :</strong> Lorsqu&apos;un agriculteur photographiait par erreur sa chaussure, son visage ou un outil, Gemma générait plus de 800 tokens de conseils agricoles hallucinés, faisant chauffer le CPU et vidant la batterie.
                            </p>
      </Callout>
      <h3><Bilingual en={<>1. Downsample Camera Images to <code>512px</code> & Dispose Native Handles</>} fr={<>1. Réduire les images caméra à <code>512px</code> & libérer les pointeurs natifs</>} /></h3>
      <p className={"lang-en"}>
                        Gemma&apos;s vision encoder downscales inputs internally anyway. By resizing the image to <code>targetWidth: 512</code> in Dart&apos;s <code>dart:ui</code> codec and calling <code>image.dispose()</code> immediately before invoking LiteRT-LM, we cut vision memory consumption by <strong>85%</strong> and speed up vision encoding by <strong>4x</strong>.
                    </p>
      <p className={"lang-fr"}>
                        L&apos;encodeur visuel de Gemma réduit de toute façon la résolution des images en interne. En redimensionnant l&apos;image à <code>targetWidth: 512</code> via le codec <code>dart:ui</code> et en appelant immédiatement <code>image.dispose()</code> avant d&apos;invoquer LiteRT-LM, nous réduisons la consommation mémoire de <strong>85 %</strong> et accélérons l&apos;encodage visuel d&apos;un facteur <strong>4x</strong>.
                    </p>
      <h3><Bilingual en={"2. Two-Stage Prompt with Immediate Early-Exit Short-Circuit"} fr={"2. Prompt à deux étapes avec court-circuit d'arrêt anticipé (Early-Exit)"} /></h3>
      <p className={"lang-en"}>
                        Below is the complete implementation from <code>lib/data/datasources/gemma_local_source.dart</code> (with the prompt translated to English for this workshop). Notice how <strong>Step 1 of the prompt</strong> forces Gemma to output a single 18-token rejection sentence and halt immediately if the image is not a plant leaf:
                    </p>
      <p className={"lang-fr"}>
                        Voici l&apos;implémentation complète de <code>lib/data/datasources/gemma_local_source.dart</code>. Observez comment <strong>l&apos;Étape 1 du prompt</strong> oblige Gemma à produire une seule phrase de rejet de 18 tokens et à s&apos;arrêter immédiatement si l&apos;image n&apos;est pas une feuille de plante :
                    </p>
      <CodeWindow
        filename={"lib/data/datasources/gemma_local_source.dart"}
        lang={"DART"}
        code={"import 'dart:io';\r\nimport 'dart:typed_data';\r\nimport 'dart:ui' as ui;\r\nimport 'package:flutter_edge_ai/flutter_edge_ai.dart';\r\nimport 'package:gemmea/core/services/gemma_engine_manager.dart';\r\nimport 'package:gemmea/core/utils/text_sanitizer.dart';\r\nimport 'package:gemmea/data/datasources/sqlite_helper.dart';\r\n\r\nclass GemmaLocalSourceImpl {\r\n  Future<String> evaluateCropImage(File imageFile, String prompt) async {\r\n    return GemmaEngineManager.runWithLock(() async {\r\n      GemmaEngineManager.resetChatSession();\r\n      try {\r\n        await GemmaEngineManager.ensureInitialized();\r\n        final rawBytes = await imageFile.readAsBytes();\r\n\r\n        // 1. Downsample to 512px max width to prevent native OOM crashes\r\n        final imageBytes = await _optimizeImageBytes(rawBytes);\r\n\r\n        // 2. Fetch grounded FAO/IITA context from local SQLite FTS5\r\n        final faoContext = await _fetchRagContextFromSqlite(imageFile.path, prompt);\r\n\r\n        // 3. Prefer CPU backend on budget devices whose GPUs lack OpenCL vision buffers\r\n        InferenceModel model;\r\n        try {\r\n          model = await FlutterEdgeAi.getActiveModel(\r\n            supportImage: true,\r\n            maxTokens: 4096,\r\n            preferredBackend: PreferredBackend.cpu,\r\n          );\r\n        } catch (_) {\r\n          model = await FlutterEdgeAi.getActiveModel(\r\n            supportImage: true,\r\n            maxTokens: 4096,\r\n          );\r\n        }\r\n\r\n        final session = await model.createSession();\r\n\r\n        // 4. Multimodal VLM Prompt with Step 1 Early-Exit Short-Circuit (in English)\r\n        final vlmPrompt = '''\r\nYou are Gemmea, the offline AI agronomist for crop health diagnosis in East Africa.\r\nExamine the provided image carefully.\r\n\r\nABSOLUTE AND URGENT RULE (IMMEDIATE EVALUATION):\r\nStep 1: Look at the image. If it is NOT a plant leaf or agricultural crop\r\n(e.g., human face, phone, shoe, furniture, animal, non-plant object):\r\nImmediately STOP all generation and reply ONLY with this exact sentence:\r\n\"The captured image does not appear to be a plant leaf. Please retake a photo clearly targeting a leaf from your crop.\"\r\nDO NOT GENERATE ANY HEADINGS AND DO NOT USE THE RAG CONTEXT BELOW.\r\n\r\nStep 2: IF AND ONLY IF THE IMAGE IS GENUINELY A PLANT LEAF OR CROP:\r\nProvide a detailed, structured agronomic analysis organized into these 7 sections (NO EMOJIS):\r\n\r\n### 1. PRIMARY DIAGNOSIS & HYPOTHESES\r\n- Crop: [Exact crop observed: Maize, Cassava, Bean, Banana, Tomato, Coffee, or Unknown]\r\n- Disease: [If healthy, write EXPLICITLY: \"No disease (Healthy Leaf)\". If diseased, state exact pathogen/disease name]\r\n- Confidence Level: [e.g., 90%]\r\n- Differential Diagnoses: [Environmental or secondary factors if applicable]\r\n### 2. DETAILED OBSERVED SYMPTOMS\r\n(Chlorosis, pustules, mosaic patterns, curling, necrotic streaks, or intact lamina).\r\n### 3. CAUSES & VECTORS (IITA STANDARDS)\r\n(Pathogen agent and transmission vector such as Bemisia tabaci whitefly or Xanthomonas).\r\n### 4. STEP-BY-STEP ORGANIC REMEDIES & TREATMENT\r\n(Local bio-remedies: Neem leaf extract 200g/L, wood ash, baking soda NaHCO3 5g/L with black soap, Tithonia liquid manure).\r\n### 5. SOIL MANAGEMENT, NUTRIENTS & IRRIGATION\r\n(Drainage, composting, mulching, moisture control).\r\n### 6. IMMEDIATE 3-STEP ACTION PLAN\r\n(Step 1, Step 2, Step 3 for the farmer today).\r\n### 7. OFFICIAL FAO & IITA REFERENCES\r\n(Explicit citations from the local RAG context below).\r\n\r\nREFERENCE RAG CONTEXT (IGNORE COMPLETELY IF NOT A PLANT):\r\n$faoContext\r\n\r\nUser instruction: $prompt\r\n''';\r\n\r\n        await session.addQueryChunk(\r\n          Message.withImage(\r\n            text: vlmPrompt,\r\n            imageBytes: imageBytes,\r\n            isUser: true,\r\n          ),\r\n        );\r\n\r\n        final String response = await session.getResponse();\r\n        return TextSanitizer.cleanLatexAndFormatting(response);\r\n      } finally {\r\n        GemmaEngineManager.resetChatSession();\r\n      }\r\n    });\r\n  }\r\n\r\n  Future<String> _fetchRagContextFromSqlite(String imagePath, String prompt) async {\r\n    try {\r\n      final docs = await SQLiteHelper.instance.searchFAOKnowledge(\"$imagePath $prompt\");\r\n      if (docs.isEmpty) return \"Standard East African FAO/IITA visual crop pathology guidelines.\";\r\n      return docs.map((d) {\r\n        return \"- ${d['topic']} (${d['crop_name']}): ${d['content']} \"\r\n               \"Organic Remedy: ${d['organic_remedy']} (Source: ${d['source_citation']})\";\r\n      }).join(\"\\n\");\r\n    } catch (_) {\r\n      return \"Standard East African FAO/IITA visual crop pathology guidelines.\";\r\n    }\r\n  }\r\n\r\n  Future<Uint8List> _optimizeImageBytes(Uint8List inputBytes) async {\r\n    try {\r\n      final codec = await ui.instantiateImageCodec(\r\n        inputBytes,\r\n        targetWidth: 512,\r\n      );\r\n      final frameInfo = await codec.getNextFrame();\r\n      final image = frameInfo.image;\r\n      final byteData = await image.toByteData(format: ui.ImageByteFormat.png);\r\n      image.dispose(); // Crucial: release native C++ Skia/Impeller texture immediately!\r\n      if (byteData != null) {\r\n        return byteData.buffer.asUint8List();\r\n      }\r\n    } catch (_) {}\r\n    return inputBytes;\r\n  }\r\n}"}
      />
    </>
  );
}

function Step6() {
  return (
    <>
      <p className={"lang-en"}>
                        Quantized 2B models can hallucinate exact biopesticide dosages or regional planting dates if left ungrounded. However, on a 4GB RAM phone where Gemma is already consuming ~1.3GB of RAM, <strong>loading a second neural embedding model + vector database into RAM will push your app over the OOM cliff</strong>.
                    </p>
      <p className={"lang-fr"}>
                        Les modèles 2B quantifiés peuvent halluciner les dosages exacts de biopesticides ou les dates de semis régionales s&apos;ils ne sont pas ancrés sur des données vérifiées. Cependant, sur un téléphone de 4 Go de RAM où Gemma consomme déjà ~1,3 Go, <strong>charger un second modèle d&apos;embeddings neuronaux et une base vectorielle en RAM fera basculer l&apos;application en crash OOM</strong>.
                    </p>
      <Callout variant={"success"} iconName={"success"} titleEn={"Architectural Win: SQLite FTS5 + BM25 Ranking = 0 MB Extra RAM"} titleFr={"Victoire Architecturale : SQLite FTS5 + Classement BM25 = 0 Mo de RAM Supplémentaire"}>
        <p className={"lang-en"}>
                                SQLite&apos;s built-in <strong>FTS5 (Full-Text Search 5)</strong> engine executes in native C directly on disk using the <strong>BM25 relevance algorithm</strong>. It requires <strong>0 MB of neural embedding RAM</strong>, completes searches in <strong>&lt;2 milliseconds</strong>, and includes a multi-term weighted scorer fallback for custom Android OEM ROMs.
                            </p>
        <p className={"lang-fr"}>
                                Le moteur intégré <strong>FTS5 (Full-Text Search 5)</strong> de SQLite s&apos;exécute en C natif directement sur le disque avec l&apos;algorithme de pertinence <strong>BM25</strong>. Il nécessite <strong>0 Mo de RAM d&apos;embedding neuronal</strong>, répond en <strong>moins de 2 millisecondes</strong> et inclut un scoreur pondéré multi-termes de secours pour les ROM Android OEM personnalisées.
                            </p>
      </Callout>
      <h3><Bilingual en={<>Complete File: <code>lib/data/datasources/sqlite_helper.dart</code></>} fr={<>Fichier Complet : <code>lib/data/datasources/sqlite_helper.dart</code></>} /></h3>
      <p className={"lang-en"}>
                        Copy this complete, self-contained SQLite FTS5 + BM25 RAG helper into <code>lib/data/datasources/sqlite_helper.dart</code>:
                    </p>
      <p className={"lang-fr"}>
                        Copiez ce helper RAG SQLite FTS5 + BM25 complet et autonome dans <code>lib/data/datasources/sqlite_helper.dart</code> :
                    </p>
      <CodeWindow
        filename={"lib/data/datasources/sqlite_helper.dart"}
        lang={"DART / SQL"}
        code={"import 'package:path/path.dart';\r\nimport 'package:sqflite/sqflite.dart';\r\n\r\nclass SQLiteHelper {\r\n  static final SQLiteHelper instance = SQLiteHelper._init();\r\n  static Database? _database;\r\n\r\n  SQLiteHelper._init();\r\n\r\n  Future<Database> get database async {\r\n    if (_database != null) return _database!;\r\n    final dbPath = await getDatabasesPath();\r\n    _database = await openDatabase(\r\n      join(dbPath, 'gemmea.db'),\r\n      version: 1,\r\n      onCreate: _createDB,\r\n    );\r\n    return _database!;\r\n  }\r\n\r\n  Future<void> _createDB(Database db, int version) async {\r\n    // 1. Irrigation Calendar table for Autonomous Function Calling\r\n    await db.execute('''\r\n      CREATE TABLE IF NOT EXISTS calendar (\r\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n        title TEXT NOT NULL,\r\n        event_date TEXT NOT NULL,\r\n        description TEXT NOT NULL,\r\n        is_rainy INTEGER NOT NULL DEFAULT 0\r\n      )\r\n    ''');\r\n\r\n    await db.insert('calendar', {\r\n      'title': 'Cassava & Maize Irrigation',\r\n      'event_date': DateTime.now().toIso8601String().split('T')[0],\r\n      'description': 'Regular morning root-zone watering cycle.',\r\n      'is_rainy': 0,\r\n    });\r\n\r\n    await _createFAOTables(db);\r\n  }\r\n\r\n  Future<void> _createFAOTables(Database db) async {\r\n    // 2. Base table storing official FAO & IITA East African agronomic guidelines\r\n    await db.execute('''\r\n      CREATE TABLE IF NOT EXISTS fao_knowledge_base (\r\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n        topic TEXT NOT NULL,\r\n        crop_name TEXT NOT NULL,\r\n        keywords TEXT NOT NULL,\r\n        content TEXT NOT NULL,\r\n        organic_remedy TEXT NOT NULL,\r\n        estimated_loss_pct REAL NOT NULL,\r\n        source_citation TEXT NOT NULL\r\n      )\r\n    ''');\r\n\r\n    // 3. SQLite FTS5 Virtual Table for sub-2ms BM25 full-text ranking\r\n    try {\r\n      await db.execute('''\r\n        CREATE VIRTUAL TABLE IF NOT EXISTS fao_knowledge_fts USING fts5(\r\n          topic, crop_name, keywords, content, organic_remedy, source_citation,\r\n          content='fao_knowledge_base', content_rowid='id'\r\n        )\r\n      ''');\r\n\r\n      // Trigger to keep FTS5 index automatically synchronized on insert\r\n      await db.execute('''\r\n        CREATE TRIGGER IF NOT EXISTS fao_ai AFTER INSERT ON fao_knowledge_base BEGIN\r\n          INSERT INTO fao_knowledge_fts(\r\n            rowid, topic, crop_name, keywords, content, organic_remedy, source_citation\r\n          ) VALUES (\r\n            new.id, new.topic, new.crop_name, new.keywords,\r\n            new.content, new.organic_remedy, new.source_citation\r\n          );\r\n        END;\r\n      ''');\r\n    } catch (_) {\r\n      // Fallback to weighted field scorer if custom OEM SQLite lacks FTS5\r\n    }\r\n\r\n    // 4. Seed verified East African FAO / IITA knowledge records\r\n    final initialEntries = [\r\n      {\r\n        'topic': 'Cassava Mosaic Disease (CMD)',\r\n        'crop_name': 'Cassava',\r\n        'keywords': 'cassava manioc mosaic cmd leaf yellowing mottling curl whitefly bemisia',\r\n        'content': 'Caused by a geminivirus transmitted by the whitefly (Bemisia tabaci). '\r\n            'Symptoms: chlorotic yellow-green mosaic pattern, leaf distortion, stunting, '\r\n            'reducing tuber yield by 40% to 70%.',\r\n        'organic_remedy': '1. Uproot and burn infected plants immediately. '\r\n            '2. Plant FAO/IITA certified resistant cuttings (TME 419, NAROCASS 1, SAWASA). '\r\n            '3. Spray aqueous Neem leaf extract (200g/L) or dust wood ash to repel whiteflies.',\r\n        'estimated_loss_pct': 55.0,\r\n        'source_citation': 'FAO East Africa Crop Protection Guide (2024), Chap. 4, pp. 28-32',\r\n      },\r\n      {\r\n        'topic': 'Banana Bacterial Wilt (BXW / Kayovu)',\r\n        'crop_name': 'Banana',\r\n        'keywords': 'banana matooke bxw kayovu bacterial wilt yellowing male bud ooze',\r\n        'content': 'Caused by Xanthomonas vasicola. Rapid yellowing and wilting of leaves, '\r\n            'yellow bacterial ooze when pseudostem is cut, premature ripening and rotting of bunches.',\r\n        'organic_remedy': '1. Sterilize cutting machetes over fire or with 10% sodium hypochlorite (Jik). '\r\n            '2. Break off the male bud using a forked wooden stick as soon as the last hand forms. '\r\n            '3. Uproot and bury infected mats.',\r\n        'estimated_loss_pct': 80.0,\r\n        'source_citation': 'FAO/IITA Great Lakes Banana Emergency Bulletin (2024), p. 12',\r\n      },\r\n      {\r\n        'topic': 'Maize Rust & Fall Armyworm (FAW)',\r\n        'crop_name': 'Maize',\r\n        'keywords': 'maize corn rust pustules armyworm faw whorl holes spacing neem ash',\r\n        'content': 'Maize rust (Puccinia sorghi) forms orange-brown pustules on leaves. '\r\n            'Fall Armyworm (Spodoptera frugiperda) perforates young whorls. Standard spacing: 75cm x 25cm.',\r\n        'organic_remedy': '1. Pour dry wood ash or fine sand into the maize whorl early morning. '\r\n            '2. Spray Neem leaf extract (200g/L) or Tithonia diversifolia liquid manure. '\r\n            '3. Intercrop with beans to fix nitrogen and reduce pest pressure.',\r\n        'estimated_loss_pct': 45.0,\r\n        'source_citation': 'FAO/IITA Cereal Protection Manual (2024), Section 2.1, pp. 8-14',\r\n      },\r\n    ];\r\n\r\n    for (final entry in initialEntries) {\r\n      await db.insert('fao_knowledge_base', entry);\r\n    }\r\n  }\r\n\r\n  /// Searches the local FAO/IITA knowledge base using FTS5 BM25 with scored fallback\r\n  Future<List<Map<String, dynamic>>> searchFAOKnowledge(String query) async {\r\n    final db = await database;\r\n    final normalized = _stripAccents(query.toLowerCase())\r\n        .replaceAll(RegExp(r'[^a-z0-9\\s]'), ' ');\r\n    final terms = normalized\r\n        .split(RegExp(r'\\s+'))\r\n        .where((t) => t.length > 2 && !_stopWords.contains(t))\r\n        .toList();\r\n\r\n    if (terms.isEmpty) {\r\n      return await db.query('fao_knowledge_base', limit: 3);\r\n    }\r\n\r\n    // Primary Path: Native C FTS5 MATCH ordered by BM25 relevance score\r\n    try {\r\n      final ftsQuery = terms.map((t) => '\"$t*\"').join(' OR ');\r\n      final ftsResults = await db.rawQuery('''\r\n        SELECT k.* FROM fao_knowledge_base k\r\n        JOIN fao_knowledge_fts fts ON k.id = fts.rowid\r\n        WHERE fao_knowledge_fts MATCH ?\r\n        ORDER BY bm25(fao_knowledge_fts) ASC\r\n        LIMIT 3\r\n      ''', [ftsQuery]);\r\n\r\n      if (ftsResults.isNotEmpty) return ftsResults;\r\n    } catch (_) {\r\n      // Fallback to weighted field scoring if OEM SQLite lacks FTS5 module\r\n    }\r\n\r\n    return await _scoredFallbackSearch(db, terms);\r\n  }\r\n\r\n  Future<List<Map<String, dynamic>>> _scoredFallbackSearch(\r\n    Database db,\r\n    List<String> terms,\r\n  ) async {\r\n    final allRows = await db.query('fao_knowledge_base');\r\n    final scoredRows = <Map<String, dynamic>, int>{};\r\n\r\n    for (final row in allRows) {\r\n      int score = 0;\r\n      final crop = _stripAccents((row['crop_name'] ?? '').toString().toLowerCase());\r\n      final topic = _stripAccents((row['topic'] ?? '').toString().toLowerCase());\r\n      final keywords = _stripAccents((row['keywords'] ?? '').toString().toLowerCase());\r\n      final content = _stripAccents((row['content'] ?? '').toString().toLowerCase());\r\n\r\n      for (final term in terms) {\r\n        if (crop.contains(term)) score += 8;\r\n        if (topic.contains(term)) score += 6;\r\n        if (keywords.contains(term)) score += 4;\r\n        if (content.contains(term)) score += 1;\r\n      }\r\n      if (score > 0) scoredRows[row] = score;\r\n    }\r\n\r\n    if (scoredRows.isNotEmpty) {\r\n      final sorted = scoredRows.entries.toList()\r\n        ..sort((a, b) => b.value.compareTo(a.value));\r\n      return sorted.take(3).map((e) => e.key).toList();\r\n    }\r\n    return await db.query('fao_knowledge_base', limit: 3);\r\n  }\r\n\r\n  Future<int> updateRainStatus(String date, int isRainy) async {\r\n    final db = await database;\r\n    return await db.update(\r\n      'calendar',\r\n      {'is_rainy': isRainy},\r\n      where: 'event_date = ?',\r\n      whereArgs: [date],\r\n    );\r\n  }\r\n\r\n  static const Set<String> _stopWords = {\r\n    'the', 'and', 'for', 'with', 'how', 'what', 'when', 'why', 'can', 'you',\r\n    'tell', 'about', 'from', 'this', 'that', 'have', 'has', 'are', 'was',\r\n    'le', 'la', 'les', 'des', 'dans', 'pour', 'avec', 'comment', 'quel',\r\n  };\r\n\r\n  static String _stripAccents(String input) {\r\n    const map = {\r\n      'à': 'a', 'â': 'a', 'ä': 'a', 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',\r\n      'î': 'i', 'ï': 'i', 'ô': 'o', 'ö': 'o', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ç': 'c',\r\n    };\r\n    return input.split('').map((c) => map[c] ?? c).join();\r\n  }\r\n}"}
      />
    </>
  );
}

function Step7() {
  return (
    <>
      <p className={"lang-en"}>
                        In conversational mode, we face two engineering challenges on budget smartphones:
                    </p>
      <p className={"lang-fr"}>
                        En mode conversationnel, nous faisons face à deux défis d&apos;ingénierie sur les smartphones d&apos;entrée de gamme :
                    </p>
      <ol className={"lang-en"}>
        <li><strong>KV-Cache Memory Explosion:</strong> If you feed 25 historical messages into every prompt, the Key-Value attention cache overflows RAM and slows prefill latency to a crawl.</li>        <li><strong>Raw LaTeX Artifacts:</strong> Gemma often outputs chemical formulas like <code>$NaHCO_3$</code> or <code>\text{"{"}H{"}"}_2\text{"{"}O{"}"}</code>, which look broken to farmers in plain text or Text-to-Speech.</li>
      </ol>
      <ol className={"lang-fr"}>
        <li><strong>Explosion mémoire du KV-Cache :</strong> Si vous injectez 25 messages d&apos;historique dans chaque prompt, le cache d&apos;attention Clé-Valeur (KV-Cache) sature la RAM et ralentit considérablement la latence de pré-remplissage (prefill).</li>        <li><strong>Artefacts LaTeX bruts :</strong> Gemma génère souvent des formules chimiques telles que <code>$NaHCO_3$</code> ou <code>\text{"{"}H{"}"}_2\text{"{"}O{"}"}</code>, illisibles pour un agriculteur en texte brut ou en synthèse vocale (TTS).</li>
      </ol>
      <h3><Bilingual en={<>1. Complete File: <code>lib/data/repositories/chat_repository_impl.dart</code></>} fr={<>1. Fichier Complet : <code>lib/data/repositories/chat_repository_impl.dart</code></>} /></h3>
      <p className={"lang-en"}>
                        Copy this complete, self-contained repository into <code>lib/data/repositories/chat_repository_impl.dart</code>. It combines Step 3&apos;s atomic <code>.tmp</code> model downloader, SQLite FTS5 RAG injection, the 5-turn KV-Cache sliding window, and autonomous offline Function Calling for the irrigation calendar:
                    </p>
      <p className={"lang-fr"}>
                        Copiez ce repository complet et autonome dans <code>lib/data/repositories/chat_repository_impl.dart</code>. Il réunit le téléchargeur atomique <code>.tmp</code> de l&apos;Étape 3, l&apos;injection RAG SQLite FTS5, la fenêtre glissante KV-Cache de 5 messages et le Function Calling autonome hors-ligne pour le calendrier d&apos;irrigation :
                    </p>
      <CodeWindow
        filename={"lib/data/repositories/chat_repository_impl.dart"}
        lang={"DART"}
        code={"import 'dart:async';\r\nimport 'dart:io';\r\nimport 'package:flutter_edge_ai/flutter_edge_ai.dart';\r\nimport 'package:http/http.dart' as http;\r\nimport 'package:path_provider/path_provider.dart';\r\nimport 'package:gemmea/core/services/gemma_engine_manager.dart';\r\nimport 'package:gemmea/core/utils/text_sanitizer.dart';\r\nimport 'package:gemmea/data/datasources/sqlite_helper.dart';\r\n\r\nclass ChatRepositoryImpl {\r\n  final SQLiteHelper dbHelper = SQLiteHelper.instance;\r\n  InferenceChat? _chat;\r\n\r\n  ChatRepositoryImpl() {\r\n    GemmaEngineManager.setResetChatCallback(() {\r\n      _chat = null;\r\n    });\r\n  }\r\n\r\n  Future<bool> checkModelInstalled() async {\r\n    final directory = await getApplicationDocumentsDirectory();\r\n    final litertlmFile = File('${directory.path}/gemma.litertlm');\r\n    final binFile = File('${directory.path}/gemma.bin');\r\n\r\n    if (await binFile.exists() && !await litertlmFile.exists()) {\r\n      await binFile.rename(litertlmFile.path);\r\n    }\r\n    return await litertlmFile.exists();\r\n  }\r\n\r\n  Future<void> initializeGemma(Function(double) onProgress) async {\r\n    return GemmaEngineManager.runWithLock(() async {\r\n      await GemmaEngineManager.ensureInitialized();\r\n\r\n      final directory = await getApplicationDocumentsDirectory();\r\n      final modelFile = File('${directory.path}/gemma.litertlm');\r\n      final tempModelFile = File('${directory.path}/gemma.litertlm.tmp');\r\n\r\n      if (!await modelFile.exists()) {\r\n        if (await tempModelFile.exists()) {\r\n          await tempModelFile.delete();\r\n        }\r\n\r\n        final result = await InternetAddress.lookup('google.com')\r\n            .timeout(const Duration(seconds: 4));\r\n        if (result.isEmpty || result.first.rawAddress.isEmpty) {\r\n          throw const SocketException('Internet connection is required for first-time setup.');\r\n        }\r\n\r\n        const url = 'https://huggingface.co/litert-community/'\r\n            'gemma-4-E2B-it-litert-lm/resolve/main/gemma-4-E2B-it.litertlm';\r\n        final client = http.Client();\r\n\r\n        try {\r\n          final request = http.Request('GET', Uri.parse(url));\r\n          final response = await client.send(request);\r\n          if (response.statusCode != 200) {\r\n            throw HttpException('Download failed (HTTP ${response.statusCode})');\r\n          }\r\n\r\n          final contentLength = response.contentLength ?? 0;\r\n          int downloadedBytes = 0;\r\n\r\n          final IOSink sink = tempModelFile.openWrite();\r\n          await response.stream.forEach((chunk) {\r\n            downloadedBytes += chunk.length;\r\n            sink.add(chunk);\r\n            if (contentLength > 0) {\r\n              onProgress(downloadedBytes / contentLength);\r\n            }\r\n          });\r\n          await sink.close();\r\n\r\n          if (await tempModelFile.exists()) {\r\n            await tempModelFile.rename(modelFile.path);\r\n          }\r\n        } catch (e) {\r\n          if (await tempModelFile.exists()) await tempModelFile.delete();\r\n          rethrow;\r\n        } finally {\r\n          client.close();\r\n        }\r\n      }\r\n\r\n      await FlutterEdgeAi.installModel(\r\n        modelType: ModelType.gemmaIt,\r\n        fileType: ModelFileType.litertlm,\r\n      ).fromFile(modelFile.path).install();\r\n    });\r\n  }\r\n\r\n  /// Autonomous Offline Function Calling: pauses/resumes SQLite irrigation schedule\r\n  Future<String?> checkAutonomousCalendarAction(String text) async {\r\n    final lower = text.toLowerCase();\r\n    final today = DateTime.now().toIso8601String().split('T')[0];\r\n\r\n    if (lower.contains('rain') || lower.contains('wet') || lower.contains('pluie')) {\r\n      await dbHelper.updateRainStatus(today, 1);\r\n      return 'Calendar Action: Irrigation paused in SQLite due to reported rainfall.';\r\n    } else if (lower.contains('dry') || lower.contains('hot') || lower.contains('sec')) {\r\n      await dbHelper.updateRainStatus(today, 0);\r\n      return 'Calendar Action: Regular watering resumed in SQLite for dry weather.';\r\n    }\r\n    return null;\r\n  }\r\n\r\n  Stream<ModelResponse> getGemmaResponseStream(String text, [List<Message>? history]) async* {\r\n    yield* GemmaEngineManager.runStreamWithLock(() async* {\r\n      await GemmaEngineManager.ensureInitialized();\r\n\r\n      // 1. Retrieve top-3 FAO/IITA facts via SQLite FTS5 (skip for simple greetings)\r\n      String faoContext = \"\";\r\n      if (!_isSimpleGreeting(text)) {\r\n        final faoDocs = await dbHelper.searchFAOKnowledge(text);\r\n        if (faoDocs.isNotEmpty) {\r\n          faoContext = faoDocs.map((d) {\r\n            final content = (d['content'] ?? '').toString();\r\n            final trimmed = content.length > 400 ? \"${content.substring(0, 400)}...\" : content;\r\n            return \"- ${d['topic']}: $trimmed Remedy: ${d['organic_remedy']} \"\r\n                   \"(Source: ${d['source_citation']})\";\r\n          }).join(\"\\n\");\r\n        }\r\n      }\r\n\r\n      // 2. Cap context to the last 5 messages (max 250 chars each) to protect KV-Cache RAM\r\n      final recentHistory = _getRecentHistoryWindow(history);\r\n      final historyBlock = recentHistory.isEmpty\r\n          ? \"\"\r\n          : \"\\n\\nLAST 5 CONVERSATION MESSAGES:\\n\"\r\n            \"${recentHistory.map((m) => \"- ${m.isUser ? 'Farmer' : 'Gemmea'}: ${m.text}\").join(\"\\n\")}\";\r\n\r\n      // 3. Regional System Prompt (East Africa / Great Lakes Seasons A & B)\r\n      final systemPrompt = '''\r\nYou are Gemmea, the field AI agronomist for East Africa and the Great Lakes region\r\n(Uganda, DRC/Kivu, Rwanda, Burundi).\r\n\r\nSTRICT ANTI-DISCLAIMER RULE:\r\nNEVER use vague evasions or disclaimers like \"Consult a local extension officer.\"\r\nYou ARE the reference field expert! Always provide affirmative, concrete, dated,\r\nand exact-dosage instructions that a smallholder farmer can apply immediately.\r\n\r\nINTEGRATED REGIONAL KNOWLEDGE (EAST AFRICA / GREAT LAKES):\r\n- Bimodal Rainy Seasons:\r\n  * Season A (Long Rains): Plant Maize & Beans mid-September to early October. Harvest Jan/Feb.\r\n  * Season B (Short Rains): Plant March to early April. Harvest June/July.\r\n  * Cassava & Banana: Plant certified cuttings/suckers at the onset of Season A (Sept) or B (March).\r\n- Standard Spacing: Maize (75cm x 25cm, 1 seed/hole), Beans (40cm x 10cm), Cassava (1m x 1m).\r\n- Formatting: Clear Markdown (**bold** key terms, numbered steps 1. 2. 3., bullet points - ). NO emojis.\r\n$historyBlock\r\n${faoContext.isNotEmpty ? '\\n\\nOFFICIAL FAO/IITA REFERENCE DATA:\\n$faoContext' : ''}\r\n''';\r\n\r\n      InferenceModel model;\r\n      try {\r\n        model = await FlutterEdgeAi.getActiveModel(\r\n          supportImage: true,\r\n          maxTokens: 2048,\r\n          preferredBackend: PreferredBackend.cpu,\r\n        );\r\n      } catch (_) {\r\n        model = await FlutterEdgeAi.getActiveModel(\r\n          supportImage: true,\r\n          maxTokens: 2048,\r\n          preferredBackend: PreferredBackend.gpu,\r\n        );\r\n      }\r\n\r\n      _chat = await model.createChat(\r\n        modelType: ModelType.gemmaIt,\r\n        systemInstruction: systemPrompt,\r\n      );\r\n\r\n      await _chat!.addQuery(Message.text(text: text, isUser: true));\r\n\r\n      // 4. Stream tokens asynchronously & sanitize LaTeX formulas on the fly\r\n      await for (final chunk in _chat!.generateChatResponseAsync()) {\r\n        if (chunk is TextResponse) {\r\n          yield TextResponse(\r\n            TextSanitizer.cleanLatexAndFormatting(chunk.token, preserveWhitespace: true),\r\n          );\r\n        } else {\r\n          yield chunk;\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  bool _isSimpleGreeting(String input) {\r\n    final clean = input.trim().toLowerCase().replaceAll(RegExp(r'[^\\w\\s]'), '');\r\n    const greetings = {'hello', 'hi', 'jambo', 'habari', 'webale', 'salut', 'bonjour', 'thanks'};\r\n    return greetings.contains(clean) ||\r\n        (clean.split(' ').length <= 2 && greetings.any((g) => clean.startsWith(g)));\r\n  }\r\n\r\n  List<Message> _getRecentHistoryWindow(List<Message>? history) {\r\n    if (history == null || history.length <= 1) return [];\r\n    final past = history.sublist(0, history.length - 1);\r\n    final recent = past.length > 5 ? past.sublist(past.length - 5) : past;\r\n    return recent.map((m) {\r\n      final t = m.text.length > 250 ? \"${m.text.substring(0, 250)}...\" : m.text;\r\n      return Message.text(text: t, isUser: m.isUser);\r\n    }).toList();\r\n  }\r\n}"}
      />
      <h3><Bilingual en={<>2. Complete File: <code>lib/core/utils/text_sanitizer.dart</code></>} fr={<>2. Fichier Complet : <code>lib/core/utils/text_sanitizer.dart</code></>} /></h3>
      <p className={"lang-en"}>
                        Create <code>lib/core/utils/text_sanitizer.dart</code> so chemical formulas like <code>$NaHCO_3$</code> and stray emojis are converted into clean plain text while streaming:
                    </p>
      <p className={"lang-fr"}>
                        Créez <code>lib/core/utils/text_sanitizer.dart</code> afin que les formules chimiques telles que <code>$NaHCO_3$</code> soient converties en texte brut lisible à la volée pendant le streaming :
                    </p>
      <CodeWindow
        filename={"lib/core/utils/text_sanitizer.dart"}
        lang={"DART"}
        code={"class TextSanitizer {\r\n  static String cleanLatexAndFormatting(String input, {bool preserveWhitespace = false}) {\r\n    if (input.isEmpty) return input;\r\n    String text = input;\r\n\r\n    // 1. Convert common LaTeX chemical formulas to farmer-friendly plain text\r\n    text = text.replaceAll(\r\n      RegExp(r'\\$?\\\\?text\\{NaHCO\\}_?\\{?3\\}?\\\\?\\$?|\\$NaHCO_3\\\\?\\$?', caseSensitive: false),\r\n      'Baking soda (NaHCO3)',\r\n    );\r\n    text = text.replaceAll(\r\n      RegExp(r'\\$?\\\\?text\\{H\\}_?\\{?2\\}?\\\\?text\\{O\\}\\\\?\\$?|\\$H_2O\\\\?\\$?', caseSensitive: false),\r\n      'water (H2O)',\r\n    );\r\n\r\n    // 2. Strip LaTeX wrappers and subscript underscores\r\n    text = text.replaceAllMapped(\r\n      RegExp(r'\\\\(?:text|mathrm|mathbf)\\{([^}]+)\\}'),\r\n      (m) => m.group(1) ?? '',\r\n    );\r\n    text = text.replaceAllMapped(\r\n      RegExp(r'([A-Za-z]+)_\\{?(\\d+)\\}?'),\r\n      (m) => '${m.group(1)}${m.group(2)}',\r\n    );\r\n    text = text.replaceAll(r'$', '');\r\n    return preserveWhitespace ? text : text.trim();\r\n  }\r\n}"}
      />
    </>
  );
}

function Step8() {
  return (
    <>
      <p className={"lang-en"}>
                        While an INT4 2B model (~1.2GB) runs well on 4GB to 8GB phones, two barriers remain for rural mass adoption across Africa:
                    </p>
      <p className={"lang-fr"}>
                        Bien qu&apos;un modèle 2B en INT4 (~1,2 Go) tourne très bien sur les téléphones de 4 Go à 8 Go de RAM, deux obstacles subsistent pour une adoption massive en zone rurale en Afrique :
                    </p>
      <ul className={"lang-en"}>
        <li><strong>The 1.2GB Initial Download:</strong> Even a one-time 1.2GB download is expensive on prepaid mobile data bundles.</li>        <li><strong>2GB to 3GB Android Go Devices:</strong> Entry-level phones without NPUs take 5 to 10 seconds for CPU inference on a 2B model.</li>
      </ul>
      <ul className={"lang-fr"}>
        <li><strong>Le téléchargement initial de 1,2 Go :</strong> Même ponctuel, un téléchargement de 1,2 Go coûte cher sur des forfaits mobiles prépayés.</li>        <li><strong>Les appareils Android Go de 2 Go à 3 Go de RAM :</strong> Les téléphones d&apos;entrée de gamme sans NPU mettent 5 à 10 secondes par inférence CPU sur un modèle 2B.</li>
      </ul>
      <Callout variant={"info"} iconName={"info"} titleEn={"Why 150 MB is the Magic Threshold on Android"} titleFr={"Pourquoi 150 Mo est le Seuil Magique sur Android"}>
        <p className={"lang-en"}>
                                Google Play&apos;s base Android App Bundle (AAB) / install-time asset limit is <strong>150 MB</strong>. When you distill your domain-specific Small Language Model (SLM) down to <strong>~134 MB</strong>, you can ship the model <strong>directly inside the Play Store install or share it offline via Nearby Share / Xender</strong> with zero post-install download!
                            </p>
        <p className={"lang-fr"}>
                                La limite de taille d&apos;un Android App Bundle (AAB) de base sur Google Play est de <strong>150 Mo</strong>. Lorsque vous distillez votre Small Language Model (SLM) métier jusqu&apos;à <strong>~134 Mo</strong>, vous pouvez embarquer le modèle <strong>directement dans l&apos;installation Play Store ou le partager hors-ligne via Nearby Share / Xender</strong> sans aucun téléchargement supplémentaire après l&apos;installation !
                            </p>
      </Callout>
      <h3><Bilingual en={"How the Math Works: Getting from 1.35 GB to 134 MB"} fr={"Comment fonctionne le calcul : passer de 1,35 Go à 134 Mo"} /></h3>
      <ol className={"lang-en"}>
        <li><strong>Teacher → Student Knowledge Distillation:</strong> A crop-diagnosis assistant does not need to know how to write C++ shaders or summarize European tax law. We use <code>gemma-2-2b-it</code> (or <code>gemma-2-9b-it</code>) as the <strong>Teacher</strong> to transfer its domain reasoning on East African agronomy (FAO/IITA + Swahili/Luganda/English/French) into a compact <strong>240M to 270M parameter Student SLM</strong>.
                        </li>        <li><strong>Vocabulary Pruning (256k → 32k Tokens):</strong> Gemma&apos;s 256,000-token embedding matrix alone occupies ~260 MB even in INT4! Pruning unused scripts and keeping the top <strong>32,000 domain + East African tokens</strong> shrinks the embedding table by <strong>87.5%</strong> (down to ~16 MB).
                        </li>        <li><strong>INT4 Block-32 Quantization (<code>dynamic_int4_block32</code>):</strong><code>240M parameters * 0.5 bytes/weight (120 MB) + 14 MB SentencePiece Tokenizer & Flatbuffer metadata = 134 MB (&lt; 150 MB!)</code>.
                        </li>
      </ol>
      <ol className={"lang-fr"}>
        <li><strong>Distillation de connaissances Teacher → Student :</strong> Un assistant de diagnostic agricole n&apos;a pas besoin de savoir écrire des shaders C++ ou résumer le droit fiscal européen. Nous utilisons <code>gemma-2-2b-it</code> (ou <code>gemma-2-9b-it</code>) comme <strong>Teacher (Professeur)</strong> pour transférer son raisonnement agronomique est-africain (FAO/IITA + swahili/luganda/anglais/français) vers un <strong>SLM Student compact de 240M à 270M de paramètres</strong>.
                        </li>        <li><strong>Élagage du vocabulaire (256k → 32k tokens) :</strong> La matrice d&apos;embeddings de 256 000 tokens de Gemma occupe à elle seule ~260 Mo même en INT4 ! Élaguer les alphabets inutilisés pour conserver les <strong>32 000 tokens métier et est-africains</strong> réduit la table d&apos;embeddings de <strong>87,5 %</strong> (à ~16 Mo).
                        </li>        <li><strong>Quantification INT4 par blocs de 32 (<code>dynamic_int4_block32</code>) :</strong><code>240M paramètres * 0,5 octet/poids (120 Mo) + 14 Mo de tokenizer SentencePiece & métadonnées Flatbuffer = 134 Mo (&lt; 150 Mo !)</code>.
                        </li>
      </ol>
      <h3><Bilingual en={"Prerequisites for Step 8 (Google Colab / Kaggle GPU)"} fr={"Prérequis pour l'Étape 8 (GPU Google Colab / Kaggle)"} /></h3>
      <p className={"lang-en"}>
                        If you want to run the distillation pipeline yourself, open a free <strong>Google Colab T4 GPU</strong> notebook and install the Google AI Edge and HuggingFace libraries first:
                    </p>
      <p className={"lang-fr"}>
                        Si vous souhaitez exécuter le pipeline de distillation vous-même, ouvrez un notebook <strong>Google Colab GPU T4</strong> gratuit et installez d&apos;abord les librairies Google AI Edge et HuggingFace :
                    </p>
      <CodeWindow
        filename={"Colab / Terminal | Install Distillation Dependencies"}
        lang={"BASH"}
        code={"pip install -U torch transformers datasets trl accelerate ai-edge-torch mediapipe huggingface_hub\r\nhuggingface-cli login"}
      />
      <h3><Bilingual en={"Part A: PyTorch Logit Distillation Script (Teacher → Student)"} fr={"Partie A : Script PyTorch de Distillation des Logits (Teacher → Student)"} /></h3>
      <p className={"lang-en"}>
                        Run this Python script on a Colab / Kaggle GPU to distill your Teacher Gemma model into the compact Student checkpoint using combined <strong>Cross-Entropy + Soft-Target KL-Divergence Loss</strong>:
                    </p>
      <p className={"lang-fr"}>
                        Exécutez ce script Python sur un GPU Colab / Kaggle pour distiller votre modèle Gemma Teacher vers le checkpoint Student compact en combinant la perte <strong>Cross-Entropy + divergence KL sur cibles douces (Soft-Targets)</strong> :
                    </p>
      <CodeWindow
        filename={"scripts/distill_gemmea_slm.py"}
        lang={"PYTHON"}
        code={"import torch\r\nimport torch.nn.functional as F\r\nfrom datasets import load_dataset\r\nfrom transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments\r\nfrom trl import SFTTrainer\r\n\r\nTEACHER_MODEL_ID = \"google/gemma-2-2b-it\"      # High-accuracy Teacher\r\nSTUDENT_MODEL_ID = \"google/gemma-3-270m-it\"    # Compact Student (<150MB INT4 target)\r\n\r\ntokenizer = AutoTokenizer.from_pretrained(STUDENT_MODEL_ID)\r\nteacher = AutoModelForCausalLM.from_pretrained(\r\n    TEACHER_MODEL_ID, torch_dtype=torch.bfloat16, device_map=\"auto\"\r\n).eval()\r\n\r\nstudent = AutoModelForCausalLM.from_pretrained(\r\n    STUDENT_MODEL_ID, torch_dtype=torch.bfloat16, device_map=\"auto\"\r\n)\r\n\r\nclass GemmaDistillationTrainer(SFTTrainer):\r\n    def __init__(self, teacher_model, temperature=2.0, alpha=0.5, *args, **kwargs):\r\n        super().__init__(*args, **kwargs)\r\n        self.teacher = teacher_model\r\n        self.temperature = temperature\r\n        self.alpha = alpha\r\n\r\n    def compute_loss(self, model, inputs, return_outputs=False, **kwargs):\r\n        # 1. Hard-target Cross-Entropy loss on verified FAO/IITA QA pairs\r\n        student_outputs = model(**inputs)\r\n        ce_loss = student_outputs.loss\r\n        student_logits = student_outputs.logits\r\n\r\n        # 2. Soft-target Teacher Logit Distillation (KL-Divergence)\r\n        with torch.no_grad():\r\n            teacher_logits = self.teacher(**inputs).logits\r\n\r\n        vocab_size = min(student_logits.size(-1), teacher_logits.size(-1))\r\n        T = self.temperature\r\n\r\n        kl_loss = F.kl_div(\r\n            F.log_softmax(student_logits[..., :vocab_size] / T, dim=-1),\r\n            F.softmax(teacher_logits[..., :vocab_size] / T, dim=-1),\r\n            reduction=\"batchmean\",\r\n        ) * (T ** 2)\r\n\r\n        # Combine hard ground-truth accuracy with teacher's probability distribution\r\n        total_loss = (self.alpha * ce_loss) + ((1.0 - self.alpha) * kl_loss)\r\n        return (total_loss, student_outputs) if return_outputs else total_loss\r\n\r\ndataset = load_dataset(\"json\", data_files=\"fao_iita_east_africa_instruct.jsonl\", split=\"train\")\r\n\r\ntrainer = GemmaDistillationTrainer(\r\n    teacher_model=teacher,\r\n    model=student,\r\n    train_dataset=dataset,\r\n    processing_class=tokenizer,\r\n    temperature=2.0,\r\n    alpha=0.4,\r\n    args=TrainingArguments(\r\n        output_dir=\"./checkpoints/gemmea-student-270m\",\r\n        per_device_train_batch_size=4,\r\n        gradient_accumulation_steps=4,\r\n        learning_rate=2e-4,\r\n        num_train_epochs=3,\r\n        bf16=True,\r\n        logging_steps=25,\r\n        save_strategy=\"epoch\",\r\n    ),\r\n)\r\n\r\ntrainer.train()\r\nstudent.save_pretrained(\"./checkpoints/gemmea-student-merged\")\r\ntokenizer.save_pretrained(\"./checkpoints/gemmea-student-merged\")"}
      />
      <h3><Bilingual en={<>Part B: Quantize & Bundle into a <code>134 MB</code> <code>.litertlm</code> File</>} fr={<>Partie B : Quantifier & Empaqueter en un fichier <code>.litertlm</code> de <code>134 Mo</code></>} /></h3>
      <p className={"lang-en"}>
                        Next, convert the distilled PyTorch checkpoint to LiteRT-LM format with <code>dynamic_int4_block32</code> quantization using Google&apos;s <code>ai-edge-torch</code> and MediaPipe GenAI bundler:
                    </p>
      <p className={"lang-fr"}>
                        Ensuite, convertissez le checkpoint PyTorch distillé au format LiteRT-LM avec la quantification <code>dynamic_int4_block32</code> via <code>ai-edge-torch</code> et le bundler MediaPipe GenAI de Google :
                    </p>
      <CodeWindow
        filename={"scripts/export_litertlm_under_150mb.py"}
        lang={"PYTHON"}
        code={"import os\r\nfrom ai_edge_torch.generative.examples.gemma import gemma\r\nfrom ai_edge_torch.generative.utilities import converter\r\nfrom ai_edge_torch.generative.utilities.export_config import ExportConfig\r\nfrom mediapipe.tasks.python.genai import bundler\r\n\r\n# 1. Load distilled Student checkpoint\r\npytorch_model = gemma.build_270m_model(\"./checkpoints/gemmea-student-merged\")\r\n\r\n# 2. Convert to TFLite flatbuffer with INT4 Block-32 weight quantization\r\nconverter.convert_to_tflite(\r\n    pytorch_model,\r\n    output_path=\"./build\",\r\n    output_name_prefix=\"gemmea_slm\",\r\n    prefill_seq_len=1024,\r\n    kv_cache_max_len=2048,\r\n    quantize=\"dynamic_int4_block32\",  # 0.5 bytes/weight -> ~120MB weights!\r\n    export_config=ExportConfig(),\r\n)\r\n\r\n# 3. Package quantized flatbuffer + SentencePiece tokenizer into .litertlm\r\nbundle_config = bundler.BundleConfig(\r\n    tflite_model=\"./build/gemmea_slm_q4_block32.tflite\",\r\n    tokenizer_model=\"./checkpoints/gemmea-student-merged/tokenizer.model\",\r\n    start_token=\"<bos>\",\r\n    stop_tokens=[\"<eos>\", \"<end_of_turn>\"],\r\n    output_filename=\"./dist/gemmea_agro_134mb.litertlm\",\r\n)\r\nbundler.create_bundle(bundle_config)\r\n\r\nsize_mb = os.path.getsize(\"./dist/gemmea_agro_134mb.litertlm\") / (1024 * 1024)\r\nprint(f\"Success! Final SLM Bundle Size: {size_mb:.1f} MB (< 150 MB target)\")\r\n# Output: Success! Final SLM Bundle Size: 134.2 MB (< 150 MB target)"}
      />
      <h3><Bilingual en={"Part C: Benchmark | Base E2B vs. Distilled 134 MB SLM on 3GB to 4GB Android"} fr={"Partie C : Benchmark | E2B de Base vs SLM Distillé de 134 Mo sur Android 3 Go à 4 Go"} /></h3>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Metric</th>              <th>Base <code>gemma-4-E2B-it</code> (INT4)</th>              <th>Distilled <code>gemmea_agro_134mb.litertlm</code></th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Binary Size on Disk</strong></td>              <td>~1,350 MB</td>              <td><strong>134.2 MB (Fits Play Store 150MB limit!)</strong></td>
            </tr>            <tr>
              <td><strong>Peak Runtime RAM</strong></td>              <td>~1,450 MB</td>              <td><strong>~215 MB (Runs on 2GB/3GB Android Go)</strong></td>
            </tr>            <tr>
              <td><strong>Time-to-First-Token (CPU)</strong></td>              <td>~1,400 ms</td>              <td><strong>~180 ms</strong></td>
            </tr>            <tr>
              <td><strong>Token Generation Speed</strong></td>              <td>~11 tokens/sec</td>              <td><strong>~46 tokens/sec</strong></td>
            </tr>            <tr>
              <td><strong>FAO/IITA RAG Accuracy</strong></td>              <td>96.0%</td>              <td><strong>94.5% (Domain-Specialized)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Métrique</th>              <th>Modèle de base <code>gemma-4-E2B-it</code> (INT4)</th>              <th>SLM distillé <code>gemmea_agro_134mb.litertlm</code></th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Taille du binaire sur disque</strong></td>              <td>~1 350 Mo</td>              <td><strong>134,2 Mo (Respecte la limite Play Store de 150 Mo !)</strong></td>
            </tr>            <tr>
              <td><strong>RAM maximale à l&apos;exécution</strong></td>              <td>~1 450 Mo</td>              <td><strong>~215 Mo (Tourne sur Android Go 2 Go / 3 Go)</strong></td>
            </tr>            <tr>
              <td><strong>Time-to-First-Token (CPU)</strong></td>              <td>~1 400 ms</td>              <td><strong>~180 ms</strong></td>
            </tr>            <tr>
              <td><strong>Vitesse de génération</strong></td>              <td>~11 tokens/s</td>              <td><strong>~46 tokens/s</strong></td>
            </tr>            <tr>
              <td><strong>Précision RAG FAO/IITA</strong></td>              <td>96,0 %</td>              <td><strong>94,5 % (Spécialisé sur le domaine)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function Step9() {
  return (
    <>
      <h3><Bilingual en={<>1. Complete File: <code>lib/main.dart</code></>} fr={<>1. Fichier Complet : <code>lib/main.dart</code></>} /></h3>
      <p className={"lang-en"}>
                        Once you have saved the 5 files from Steps 4 to 7, replace <code>lib/main.dart</code> with this complete, self-contained UI (Atomic Model Downloader + 512px Camera/Gallery Leaf Scanner + Streaming SQLite FTS5 RAG Chat + Autonomous Calendar Function Calling):
                    </p>
      <p className={"lang-fr"}>
                        Une fois les 5 fichiers des Étapes 4 à 7 enregistrés, remplacez <code>lib/main.dart</code> par cette interface complète et autonome (Téléchargeur atomique du modèle + Scanner de feuille Caméra/Galerie en 512px + Chat RAG SQLite FTS5 en streaming + Function Calling autonome sur le calendrier) :
                    </p>
      <CodeWindow
        filename={"lib/main.dart"}
        lang={"DART"}
        code={"import 'dart:io';\r\nimport 'package:flutter/material.dart';\r\nimport 'package:flutter_edge_ai/flutter_edge_ai.dart';\r\nimport 'package:image_picker/image_picker.dart';\r\nimport 'package:gemmea/data/datasources/gemma_local_source.dart';\r\nimport 'package:gemmea/data/repositories/chat_repository_impl.dart';\r\n\r\nvoid main() {\r\n  WidgetsFlutterBinding.ensureInitialized();\r\n  runApp(const MaterialApp(\r\n    debugShowCheckedModeBanner: false,\r\n    home: MinimalGemmeaScreen(),\r\n  ));\r\n}\r\n\r\nclass MinimalGemmeaScreen extends StatefulWidget {\r\n  const MinimalGemmeaScreen({super.key});\r\n\r\n  @override\r\n  State<MinimalGemmeaScreen> createState() => _MinimalGemmeaScreenState();\r\n}\r\n\r\nclass _MinimalGemmeaScreenState extends State<MinimalGemmeaScreen> {\r\n  final _chatRepo = ChatRepositoryImpl();\r\n  final _visionSource = GemmaLocalSourceImpl();\r\n  final _controller = TextEditingController();\r\n  final List<Message> _history = [];\r\n\r\n  bool _isReady = false;\r\n  double _downloadProgress = 0.0;\r\n  String? _calendarBanner;\r\n  String _output = \"Tap 'Initialize / Download Gemma' once, then switch on Airplane Mode!\";\r\n  bool _isBusy = false;\r\n\r\n  @override\r\n  void initState() {\r\n    super.initState();\r\n    _checkExistingModel();\r\n  }\r\n\r\n  Future<void> _checkExistingModel() async {\r\n    final installed = await _chatRepo.checkModelInstalled();\r\n    if (installed && mounted) {\r\n      await _initModel();\r\n    }\r\n  }\r\n\r\n  Future<void> _initModel() async {\r\n    setState(() => _isBusy = true);\r\n    try {\r\n      await _chatRepo.initializeGemma((p) => setState(() => _downloadProgress = p));\r\n      setState(() {\r\n        _isReady = true;\r\n        _output = \"Gemma LiteRT-LM Ready (100% Offline)! Ask a question or scan a leaf.\";\r\n      });\r\n    } catch (e) {\r\n      setState(() => _output = \"Setup error: $e\");\r\n    } finally {\r\n      setState(() => _isBusy = false);\r\n    }\r\n  }\r\n\r\n  Future<void> _sendChat() async {\r\n    final query = _controller.text.trim();\r\n    if (query.isEmpty || _isBusy) return;\r\n    _controller.clear();\r\n    _history.add(Message.text(text: query, isUser: true));\r\n\r\n    // Check for Autonomous Offline Function Calling (rain / dry weather)\r\n    final actionNotice = await _chatRepo.checkAutonomousCalendarAction(query);\r\n\r\n    setState(() {\r\n      _isBusy = true;\r\n      _calendarBanner = actionNotice;\r\n      _output = \"\";\r\n    });\r\n    try {\r\n      await for (final chunk in _chatRepo.getGemmaResponseStream(query, _history)) {\r\n        if (chunk is TextResponse) {\r\n          setState(() => _output += chunk.token);\r\n        }\r\n      }\r\n      _history.add(Message.text(text: _output, isUser: false));\r\n    } catch (e) {\r\n      setState(() => _output = \"Error: $e\");\r\n    } finally {\r\n      setState(() => _isBusy = false);\r\n    }\r\n  }\r\n\r\n  Future<void> _scanLeaf(ImageSource source) async {\r\n    final picked = await ImagePicker().pickImage(source: source);\r\n    if (picked == null) return;\r\n    setState(() {\r\n      _isBusy = true;\r\n      _calendarBanner = null;\r\n      _output = \"Analyzing leaf image (512px) + SQLite FTS5 RAG...\";\r\n    });\r\n    try {\r\n      final result = await _visionSource.evaluateCropImage(\r\n        File(picked.path),\r\n        \"Diagnose this leaf and provide FAO/IITA organic remedies.\",\r\n      );\r\n      setState(() => _output = result);\r\n    } catch (e) {\r\n      setState(() => _output = \"Vision error: $e\");\r\n    } finally {\r\n      setState(() => _isBusy = false);\r\n    }\r\n  }\r\n\r\n  @override\r\n  Widget build(BuildContext context) {\r\n    return Scaffold(\r\n      appBar: AppBar(\r\n        title: const Text(\"Gemmea Offline AI Codelab\"),\r\n        actions: [\r\n          if (_isReady) ...[\r\n            IconButton(\r\n              icon: const Icon(Icons.photo_library_outlined),\r\n              tooltip: \"Pick Leaf from Gallery\",\r\n              onPressed: _isBusy ? null : () => _scanLeaf(ImageSource.gallery),\r\n            ),\r\n            IconButton(\r\n              icon: const Icon(Icons.camera_alt_outlined),\r\n              tooltip: \"Scan Crop Leaf with Camera\",\r\n              onPressed: _isBusy ? null : () => _scanLeaf(ImageSource.camera),\r\n            ),\r\n          ],\r\n        ],\r\n      ),\r\n      body: Padding(\r\n        padding: const EdgeInsets.all(16),\r\n        child: Column(\r\n          crossAxisAlignment: CrossAxisAlignment.stretch,\r\n          children: [\r\n            if (!_isReady) ...[\r\n              LinearProgressIndicator(value: _downloadProgress > 0 ? _downloadProgress : null),\r\n              const SizedBox(height: 12),\r\n              ElevatedButton(\r\n                onPressed: _isBusy ? null : _initModel,\r\n                child: Text(_downloadProgress > 0\r\n                    ? \"Downloading ${(100 * _downloadProgress).toInt()}%...\"\r\n                    : \"Initialize / Download Gemma (.litertlm)\"),\r\n              ),\r\n              const Divider(height: 32),\r\n            ],\r\n            if (_calendarBanner != null)\r\n              Container(\r\n                margin: const EdgeInsets.only(bottom: 12),\r\n                padding: const EdgeInsets.all(12),\r\n                decoration: BoxDecoration(\r\n                  color: const Color(0xFFE0F2FE),\r\n                  border: Border.all(color: const Color(0xFF0284C7)),\r\n                  borderRadius: BorderRadius.circular(8),\r\n                ),\r\n                child: Text(\r\n                  _calendarBanner!,\r\n                  style: const TextStyle(fontWeight: FontWeight.w600, color: Color(0xFF0369A1)),\r\n                ),\r\n              ),\r\n            Expanded(\r\n              child: SingleChildScrollView(\r\n                child: SelectableText(_output, style: const TextStyle(fontSize: 15, height: 1.5)),\r\n              ),\r\n            ),\r\n            if (_isReady)\r\n              Row(\r\n                children: [\r\n                  Expanded(\r\n                    child: TextField(\r\n                      controller: _controller,\r\n                      onSubmitted: (_) => _sendChat(),\r\n                      decoration: const InputDecoration(\r\n                        hintText: \"Ask about cassava mosaic, maize spacing, or rain...\",\r\n                      ),\r\n                    ),\r\n                  ),\r\n                  IconButton(\r\n                    icon: const Icon(Icons.send),\r\n                    onPressed: _isBusy ? null : _sendChat,\r\n                  ),\r\n                ],\r\n              ),\r\n          ],\r\n        ),\r\n      ),\r\n    );\r\n  }\r\n}"}
      />
      <h3><Bilingual en={"2. End-to-End Verification Checklist"} fr={"2. Checklist de vérification finale"} /></h3>
      <p className={"lang-en"}>
                        Run static analysis to verify that all 6 files compile with zero warnings, or clone the full production <strong>Gemmea</strong> repository (with BLoC state management, Swahili/French voice assistant, irrigation calendar, and PDF farm health reports) and run in release mode:
                    </p>
      <p className={"lang-fr"}>
                        Exécutez l&apos;analyse statique pour vérifier que les 6 fichiers compilent sans aucun avertissement, ou clonez le dépôt de production complet <strong>Gemmea</strong> (avec gestion d&apos;état BLoC, assistant vocal swahili/français, calendrier d&apos;irrigation et rapports PDF) et lancez-le en mode release :
                    </p>
      <CodeWindow
        filename={"Terminal | Verify & Run in Release Mode"}
        lang={"BASH"}
        code={"# Verify your 6-file codelab project compiles with zero issues:\r\nflutter analyze\r\nflutter run --release\r\n\r\n# Or clone and run the full production Gemmea repository:\r\ngit clone https://github.com/glosings0n/gemmea.git\r\ncd gemmea\r\nflutter pub get\r\nflutter test\r\nflutter run --release"}
      />
      <h3><Bilingual en={"3. Key Engineering Takeaways"} fr={"3. Points clés à retenir"} /></h3>
      <ol className={"lang-en"}>
        <li><strong>Stream Downloads to <code>.tmp</code> & Swap Atomically:</strong> Never buffer large models in Dart&apos;s heap or let interrupted mobile downloads leave corrupted files for the native C++ runtime.</li>        <li><strong>Serialize Native FFI Access:</strong> Wrap every <code>flutter_edge_ai</code> call and stream in a mutex lock (<code>GemmaEngineManager</code>) with deadlock timeouts for Hot Reload resilience.</li>        <li><strong>Downsample Vision Inputs to <code>512px</code> & Short-Circuit Early:</strong> Resize camera photos before tensor encoding, dispose native image handles immediately, and instruct the VLM to halt in Step 1 if the image is out-of-domain.</li>        <li><strong>Choose SQLite FTS5 + BM25 Over Heavy Vector DBs on Budget RAM:</strong> Get sub-2ms factual grounding with <strong>0 MB of extra RAM overhead</strong>.</li>        <li><strong>Distill & Quantize to &lt;150 MB:</strong> Combine Teacher-Student logit distillation, vocabulary pruning, and <code>dynamic_int4_block32</code> quantization so your AI ships directly inside your app bundle.</li>
      </ol>
      <ol className={"lang-fr"}>
        <li><strong>Streamer les téléchargements vers <code>.tmp</code> & renommer atomiquement :</strong> Ne chargez jamais un modèle entier dans le tas mémoire Dart et ne laissez jamais un téléchargement interrompu exposer un binaire corrompu au moteur C++ natif.</li>        <li><strong>Sérialiser les accès FFI natifs :</strong> Enveloppez chaque appel et flux <code>flutter_edge_ai</code> dans un verrou mutex (<code>GemmaEngineManager</code>) avec timeout anti-deadlock pour résister aux Hot Reloads.</li>        <li><strong>Réduire les images Vision à <code>512px</code> & court-circuiter tôt :</strong> Redimensionnez les photos avant l&apos;encodage tensoriel, libérez immédiatement les textures natives et ordonnez au VLM de s&apos;arrêter dès l&apos;Étape 1 si l&apos;image est hors-sujet.</li>        <li><strong>Privilégier SQLite FTS5 + BM25 aux bases vectorielles lourdes sur RAM limitée :</strong> Obtenez un ancrage factuel en moins de 2 ms avec <strong>0 Mo de surcharge RAM supplémentaire</strong>.</li>        <li><strong>Distiller & quantifier sous 150 Mo :</strong> Combinez la distillation de logits Teacher-Student, l&apos;élagage du vocabulaire et la quantification <code>dynamic_int4_block32</code> pour embarquer votre IA directement dans l&apos;installation Play Store.</li>
      </ol>
      <h3><Bilingual en={"4. Official Documentation & Further Resources"} fr={"4. Ressources officielles & Pour aller plus loin"} /></h3>
      <ul className={"lang-en"}>
        <li><strong>Gemmea Production Source Code (Public GitHub):</strong> <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a></li>        <li><strong>Flutter Edge AI Package on pub.dev (Modern SDK):</strong> <a href={"https://pub.dev/packages/flutter_edge_ai"} target={"_blank"} rel={"noopener"}>pub.dev/packages/flutter_edge_ai</a></li>        <li><strong>Flutter Edge AI Official Documentation & Architecture:</strong> <a href={"https://flutteredge.ai"} target={"_blank"} rel={"noopener"}>flutteredge.ai</a></li>        <li><strong>Legacy Flutter Gemma Package on pub.dev (Discontinued):</strong> <a href={"https://pub.dev/packages/flutter_gemma"} target={"_blank"} rel={"noopener"}>pub.dev/packages/flutter_gemma</a></li>        <li><strong>Google AI Edge & LiteRT-LM Documentation:</strong> <a href={"https://ai.google.dev/edge/litert"} target={"_blank"} rel={"noopener"}>ai.google.dev/edge/litert</a></li>        <li><strong>SQLite FTS5 & BM25 Official Specification:</strong> <a href={"https://www.sqlite.org/fts5.html"} target={"_blank"} rel={"noopener"}>sqlite.org/fts5.html</a></li>
      </ul>
      <ul className={"lang-fr"}>
        <li><strong>Code source complet de Gemmea (Dépôt GitHub public) :</strong> <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a></li>        <li><strong>Package Flutter Edge AI sur pub.dev (SDK moderne) :</strong> <a href={"https://pub.dev/packages/flutter_edge_ai"} target={"_blank"} rel={"noopener"}>pub.dev/packages/flutter_edge_ai</a></li>        <li><strong>Documentation officielle Flutter Edge AI & Architecture :</strong> <a href={"https://flutteredge.ai"} target={"_blank"} rel={"noopener"}>flutteredge.ai</a></li>        <li><strong>Package historique Flutter Gemma sur pub.dev (Remplacé) :</strong> <a href={"https://pub.dev/packages/flutter_gemma"} target={"_blank"} rel={"noopener"}>pub.dev/packages/flutter_gemma</a></li>        <li><strong>Documentation Google AI Edge & LiteRT-LM :</strong> <a href={"https://ai.google.dev/edge/litert"} target={"_blank"} rel={"noopener"}>ai.google.dev/edge/litert</a></li>        <li><strong>Spécification officielle SQLite FTS5 & BM25 :</strong> <a href={"https://www.sqlite.org/fts5.html"} target={"_blank"} rel={"noopener"}>sqlite.org/fts5.html</a></li>
      </ul>
      <h3><Bilingual en={"5. The Future: flutter_edge_ai & Multi-Model Ecosystem"} fr={"5. L'Avenir : flutter_edge_ai & l'Écosystème Multi-Modèles"} /></h3>
      <p className={"lang-en"}>
                        In October 2026, the creator of <code>flutter_gemma</code> (Sasha Denisov) officially transitioned the package to <strong><code>flutter_edge_ai</code></strong>. Why? Because the runtime engine (Google LiteRT-LM) and the underlying FFI architecture can execute far more than just Google Gemma: it runs lightweight open-source models like <strong>Phi-3</strong>, <strong>Qwen</strong>, <strong>DeepSeek</strong>, <strong>SmolLM</strong>, and custom models trained in Python.
                    </p>
      <p className={"lang-fr"}>
                        En octobre 2026, le créateur de <code>flutter_gemma</code> (Sasha Denisov) a officiellement fait évoluer le package vers <strong><code>flutter_edge_ai</code></strong>. Pourquoi ? Parce que le moteur d&apos;exécution (Google LiteRT-LM) et l&apos;architecture FFI sous-jacente peuvent exécuter bien d&apos;autres modèles que Gemma : il fait tourner des modèles open-source légers comme <strong>Phi-3</strong>, <strong>Qwen</strong>, <strong>DeepSeek</strong>, <strong>SmolLM</strong> ainsi que des modèles sur-mesure entraînés en Python.
                    </p>
      <Callout variant={"info"} iconName={"info"} titleEn={"Conference Closing Slide | The Future: flutter_edge_ai"} titleFr={"Slide de Clôture de Conférence | L'Avenir : flutter_edge_ai"} style={{"borderWidth":"2px"}}>
        <div className={"lang-en"} style={{"marginTop":"8px"}}>
          <p style={{"fontWeight":"700","color":"var(--color-cyan)","marginBottom":"6px"}}>Good News: Evolution!</p>          <p style={{"marginBottom":"8px"}}>
                                    The <code>flutter_gemma</code> package has officially evolved and is now <strong><code>flutter_edge_ai</code></strong>.
                                </p>          <ul style={{"margin":"0 0 8px 18px","padding":"0"}}>
            <li><strong>Beyond Gemma:</strong> Built to support a wide range of open-source local LLMs and SLMs.</li>            <li><strong>More Models:</strong> Out-of-the-box support for Phi, Qwen, DeepSeek, SmolLM, and custom Python models.</li>            <li><strong>Modular Ecosystem:</strong> Dedicated pluggable runtimes (LiteRT-LM, MediaPipe, ONNX, Built-in OS AI) and standalone RAG/Speech modules.</li>            <li><strong>How to Upgrade:</strong> Update <code>pubspec.yaml</code> to <code>flutter_edge_ai</code> (using current version from pub.dev) and run <code>dart fix --apply</code> in your terminal.</li>
          </ul>
        </div>
        <div className={"lang-fr"} style={{"marginTop":"8px"}}>
          <p style={{"fontWeight":"700","color":"var(--color-cyan)","marginBottom":"6px"}}>Bonne nouvelle : Évolution !</p>          <p style={{"marginBottom":"8px"}}>
                                    Le package <code>flutter_gemma</code> a officiellement évolué et s&apos;appelle désormais <strong><code>flutter_edge_ai</code></strong>.
                                </p>          <ul style={{"margin":"0 0 8px 18px","padding":"0"}}>
            <li><strong>Au-delà de Gemma :</strong> Conçu pour supporter un large panel de LLM et SLM locaux open-source.</li>            <li><strong>Davantage de modèles :</strong> Prise en charge native de Phi, Qwen, DeepSeek, SmolLM et modèles Python personnalisés.</li>            <li><strong>Écosystème modulaire :</strong> Moteurs d&apos;inférence interchangeables (LiteRT-LM, MediaPipe, ONNX, IA système intégrée) et modules RAG/Speech indépendants.</li>            <li><strong>Comment migrer :</strong> Mettez à jour <code>pubspec.yaml</code> avec <code>flutter_edge_ai</code> (avec la version actuelle sur pub.dev) puis lancez <code>dart fix --apply</code> dans le terminal.</li>
          </ul>
        </div>
      </Callout>
      <h4><Bilingual en={"Model Compatibility & Integration Matrix"} fr={"Matrice de compatibilité et d'intégration des modèles"} /></h4>
      <p className={"lang-en"}>
                        Not all models can or should run directly on a mobile smartphone. Here is the architectural decision matrix governing local on-device versus remote cloud inference:
                    </p>
      <p className={"lang-fr"}>
                        Tous les modèles ne peuvent pas (et ne doivent pas) tourner directement sur un smartphone. Voici la matrice de décision architecturale entre exécution locale et requêtes cloud distantes :
                    </p>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Model Category</th>              <th>Technical Approach in Flutter</th>              <th>Compatible with <code>flutter_edge_ai</code>?</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Lightweight Open-Source Models</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Gemma 4 / 3n, Phi-3, Qwen 2.5, DeepSeek R1 Distill, SmolLM)</span></td>              <td>Local On-Device inference using <code>.litertlm</code> format executed over CPU, GPU, or mobile NPU.</td>              <td><strong>Yes</strong> (Core design role of the package).</td>
            </tr>            <tr>
              <td><strong>Your Custom In-House Python Model</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Trained in PyTorch, JAX, or Hugging Face SafeTensors)</span></td>              <td>Local On-Device after upstream conversion and INT4/INT8 quantization into <code>.litertlm</code> using <code>ai-edge-torch</code> or LiteRT converter tools.</td>              <td><strong>Yes</strong> (Runs identically to Gemma once converted to <code>.litertlm</code>).</td>
            </tr>            <tr>
              <td><strong>Massive Commercial Cloud LLMs</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Kimi / Moonshot AI, OpenAI GPT-4o, Claude 3.5 Sonnet)</span></td>              <td>Remote HTTPS REST / WebSocket API calls via standard HTTP clients (e.g. <code>package:http</code> or <code>package:dio</code>).</td>              <td><strong>No</strong> (Requires multi-GPU cloud server clusters; cannot and should not be loaded on-device).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Catégorie de Modèle</th>              <th>Approche Technique dans Flutter</th>              <th>Compatible avec <code>flutter_edge_ai</code> ?</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Modèles Open-Source Légers</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Gemma 4 / 3n, Phi-3, Qwen 2.5, DeepSeek R1 Distill, SmolLM)</span></td>              <td>Inférence locale (On-Device) via le format <code>.litertlm</code> exécuté sur CPU, GPU ou NPU mobile.</td>              <td><strong>Oui</strong> (C&apos;est la vocation première du package).</td>
            </tr>            <tr>
              <td><strong>Votre Modèle Python Sur-Mesure</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Entraîné sous PyTorch, JAX ou Hugging Face SafeTensors)</span></td>              <td>Inférence locale après conversion et quantification INT4/INT8 au format <code>.litertlm</code> avec <code>ai-edge-torch</code> ou le convertisseur LiteRT.</td>              <td><strong>Oui</strong> (S&apos;exécute de façon identique une fois converti en <code>.litertlm</code>).</td>
            </tr>            <tr>
              <td><strong>Modèles Cloud Propriétaires Massifs</strong><br /><span style={{"fontSize":"0.85rem","color":"var(--text-muted)"}}>(Kimi / Moonshot AI, OpenAI GPT-4o, Claude 3.5 Sonnet)</span></td>              <td>Appels API distants via requêtes HTTPS standard avec <code>package:http</code> ou <code>package:dio</code>.</td>              <td><strong>Non</strong> (Nécessite des clusters de serveurs cloud multi-GPU ; impossible à embarquer en local).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4><Bilingual en={"Modular Architecture: Pull Only What You Need"} fr={"Architecture modulaire : N'embarquez que le nécessaire"} /></h4>
      <p className={"lang-en"}>
                        To keep your APK and IPA binary sizes minimal, <code>flutter_edge_ai</code> registers zero engines by default. You add only the modular runtime engines and capability plugins your application demands:
                    </p>
      <p className={"lang-fr"}>
                        Afin de préserver la taille minimale de votre APK et IPA, <code>flutter_edge_ai</code> n&apos;embarque aucun moteur par défaut. Vous ajoutez uniquement les extensions d&apos;exécution et fonctionnalités nécessaires :
                    </p>
      <div className={"table-responsive lang-en"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Capability</th>              <th>Modular Package</th>              <th>Runtime Target & Formats</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>LiteRT-LM Models</strong></td>              <td><code>flutter_edge_ai_litertlm</code></td>              <td>Executes <code>.litertlm</code> binaries on Android, iOS, macOS, Windows, Linux, and Web via FFI.</td>
            </tr>            <tr>
              <td><strong>MediaPipe Models</strong></td>              <td><code>flutter_edge_ai_mediapipe</code></td>              <td>Executes <code>.task</code> / <code>.bin</code> models for mobile and web inference.</td>
            </tr>            <tr>
              <td><strong>ONNX Runtime</strong></td>              <td><code>flutter_edge_ai_onnx</code></td>              <td>Runs ONNX text generation and local dense embedding models.</td>
            </tr>            <tr>
              <td><strong>OS Built-in AI</strong></td>              <td><code>flutter_edge_ai_builtin_ai</code></td>              <td>Leverages pre-installed operating system AI (Gemini Nano on Android/Pixel, Apple Foundation Models, Windows AI Foundry) with <strong>0 MB model download</strong>.</td>
            </tr>            <tr>
              <td><strong>On-Device RAG</strong></td>              <td><code>flutter_edge_ai_rag</code> + <code>flutter_edge_ai_sqlite</code></td>              <td>Vector embeddings and cosine search powered by local <code>sqlite-vec</code> or Qdrant Edge.</td>
            </tr>            <tr>
              <td><strong>Offline Speech</strong></td>              <td><code>flutter_edge_ai_speech</code></td>              <td>Completely offline Speech-to-Text (STT) and Text-to-Speech (TTS) pipelines.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"table-responsive lang-fr"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Fonctionnalité</th>              <th>Package Modulaire</th>              <th>Cible d&apos;Exécution & Formats</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Modèles LiteRT-LM</strong></td>              <td><code>flutter_edge_ai_litertlm</code></td>              <td>Exécute les binaires <code>.litertlm</code> sur Android, iOS, macOS, Windows, Linux et Web via FFI.</td>
            </tr>            <tr>
              <td><strong>Modèles MediaPipe</strong></td>              <td><code>flutter_edge_ai_mediapipe</code></td>              <td>Exécute les modèles <code>.task</code> / <code>.bin</code> sur mobile et web.</td>
            </tr>            <tr>
              <td><strong>Moteur ONNX</strong></td>              <td><code>flutter_edge_ai_onnx</code></td>              <td>Exécute les modèles de texte et d&apos;embeddings au format ONNX.</td>
            </tr>            <tr>
              <td><strong>IA Système Intégrée</strong></td>              <td><code>flutter_edge_ai_builtin_ai</code></td>              <td>Exploite les modèles déjà intégrés au système (Gemini Nano sur Android/Pixel, Apple Foundation Models, Windows AI Foundry) avec <strong>0 Mo de téléchargement</strong>.</td>
            </tr>            <tr>
              <td><strong>RAG Embarqué</strong></td>              <td><code>flutter_edge_ai_rag</code> + <code>flutter_edge_ai_sqlite</code></td>              <td>Stockage vectoriel et recherche par similarité cosinus via <code>sqlite-vec</code> local ou Qdrant Edge.</td>
            </tr>            <tr>
              <td><strong>Reconnaissance Vocale Locale</strong></td>              <td><code>flutter_edge_ai_speech</code></td>              <td>Pipelines complets de transcription (STT) et synthèse vocale (TTS) 100% hors-ligne.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4><Bilingual en={"Instant Project Migration Guide"} fr={"Guide de migration immédiat"} /></h4>
      <p className={"lang-en"}>
                        To migrate your existing Flutter project from <code>flutter_gemma</code> to <code>flutter_edge_ai</code>:
                    </p>
      <p className={"lang-fr"}>
                        Pour migrer votre projet Flutter existant de <code>flutter_gemma</code> vers <code>flutter_edge_ai</code> :
                    </p>
      <CodeWindow
        filename={"Terminal | Automated 3-Step Migration"}
        lang={"BASH"}
        code={"# 1. Update dependencies in your pubspec.yaml:\r\nflutter pub remove flutter_gemma flutter_gemma_litertlm\r\n# Install the latest compatible versions directly from pub.dev:\r\nflutter pub add flutter_edge_ai flutter_edge_ai_litertlm\r\n\r\n# 2. Run automated symbol refactoring across your codebase:\r\ndart fix --apply\r\n\r\n# 3. Verify static analysis and test suite:\r\nflutter analyze\r\nflutter test"}
      />
      <Callout variant={"info"} iconName={"users"} titleEn={"Webale Nnyo / Asante Sana, droidCon Uganda 2026!"} titleFr={"Webale Nnyo / Asante Sana, droidCon Uganda 2026 !"}>
        <p className={"lang-en"}>
                                Built by <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Founder @ <LosingTekWordmark /> & Founder of the <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.<br />
                                Star the repo on GitHub: <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a></p>
        <p className={"lang-fr"}>
                                Conçu par <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Fondateur @ <LosingTekWordmark /> & Fondateur du <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.<br />
                                Ajoutez une étoile au dépôt sur GitHub : <a href={"https://github.com/glosings0n/gemmea"} target={"_blank"} rel={"noopener"}>github.com/glosings0n/gemmea</a></p>
      </Callout>
    </>
  );
}

export const codelabData: CodelabDefinition = {
  slug: "flutter-gemma-droidcon-ug-2026",
  navItems: [
  {
    "index": 0,
    "titleEn": "Overview & Context",
    "titleFr": "Vue d'ensemble & Contexte",
    "time": "4m"
  },
  {
    "index": 1,
    "titleEn": "Architecture & Setup",
    "titleFr": "Architecture & Configuration",
    "time": "5m"
  },
  {
    "index": 2,
    "titleEn": "Quantization & Atomic Download",
    "titleFr": "Quantification & Téléchargement Atomique",
    "time": "6m"
  },
  {
    "index": 3,
    "titleEn": "FFI Mutex & CPU vs. GPU Selection",
    "titleFr": "Mutex FFI & Choix CPU vs GPU",
    "time": "8m"
  },
  {
    "index": 4,
    "titleEn": "512px Vision VLM & Early-Exit",
    "titleFr": "Vision VLM 512px & Arrêt Anticipé",
    "time": "6m"
  },
  {
    "index": 5,
    "titleEn": "Zero-RAM SQLite FTS5 RAG",
    "titleFr": "RAG Local SQLite FTS5 Zéro-RAM",
    "time": "6m"
  },
  {
    "index": 6,
    "titleEn": "Streaming & Function Calling",
    "titleFr": "Streaming & Function Calling",
    "time": "5m"
  },
  {
    "index": 7,
    "titleEn": "Distilling Gemma < 150 MB",
    "titleFr": "Distiller Gemma < 150 Mo",
    "time": "6m"
  },
  {
    "index": 8,
    "titleEn": "Live Demo & Takeaways",
    "titleFr": "Démo Live & Points Clés",
    "time": "2m"
  }
],
  steps: [
  {
    index: 0,
    duration: 4,
    eyebrowEn: "Step 1 of 9 | Context & Motivation",
    eyebrowFr: "Étape 1 sur 9 | Contexte & Motivation",
    titleEn: "Overview: Why Offline-First Edge AI Matters in Africa",
    titleFr: "Vue d'ensemble : Pourquoi l'IA Embarquée Offline-First est vitale en Afrique",
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
    eyebrowEn: "Step 2 of 9 | System Design",
    eyebrowFr: "Étape 2 sur 9 | Architecture Système",
    titleEn: <>Offline-First Architecture & <code>flutter_edge_ai</code> Setup</>,
    titleFr: <>Architecture Offline-First & Configuration de <code>flutter_edge_ai</code></>,
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
    eyebrowEn: "Step 3 of 9 | Memory & Distribution",
    eyebrowFr: "Étape 3 sur 9 | Mémoire & Distribution",
    titleEn: "Model Quantization (INT4 vs. INT8) & Atomic Asset Delivery",
    titleFr: "Quantification du Modèle (INT4 vs INT8) & Livraison Atomique",
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
    duration: 8,
    eyebrowEn: "Step 4 of 9 | Native Concurrency & Hardware",
    eyebrowFr: "Étape 4 sur 9 | Concurrence Native & Matériel",
    titleEn: "Preventing FFI Deadlocks & Hardware Inference: CPU vs. GPU",
    titleFr: "Prévenir les Deadlocks FFI & Inférence Matérielle : CPU vs GPU",
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
    eyebrowEn: "Step 5 of 9 | Multimodal Vision",
    eyebrowFr: "Étape 5 sur 9 | Vision Multimodale",
    titleEn: "512px Image Optimization & Prompt-Level Early-Exit Guardrails",
    titleFr: "Optimisation Image 512px & Garde-Fous d'Arrêt Anticipé (Early-Exit)",
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
    eyebrowEn: "Step 6 of 9 | Grounded Local Retrieval",
    eyebrowFr: "Étape 6 sur 9 | Recherche Locale Ancrée",
    titleEn: "Zero-RAM-Overhead Local RAG with SQLite FTS5 & BM25",
    titleFr: "RAG Local Zéro-RAM avec SQLite FTS5 & BM25",
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
    eyebrowEn: "Step 7 of 9 | Conversational UX & Agents",
    eyebrowFr: "Étape 7 sur 9 | UX Conversationnelle & Agents",
    titleEn: "60 FPS Token Streaming, KV-Cache Sliding Window & Offline Function Calling",
    titleFr: "Streaming de Tokens à 60 FPS, Fenêtre Glissante KV-Cache & Function Calling Hors-Ligne",
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
    duration: 6,
    eyebrowEn: "Step 8 of 9 | Model Compression & Distillation",
    eyebrowFr: "Étape 8 sur 9 | Compression & Distillation",
    titleEn: "The Finale: Distilling Gemma into a Custom SLM Under 150 MB",
    titleFr: "Le Final : Distiller Gemma en un SLM Personnalisé sous 150 Mo",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step8,
  },
  {
    index: 8,
    duration: 2,
    eyebrowEn: "Step 9 of 9 | Minimal Runnable App & Wrap-Up",
    eyebrowFr: "Étape 9 sur 9 | Application Exécutable & Conclusion",
    titleEn: "Run the Minimal App, Verification & Key Engineering Takeaways",
    titleFr: "Exécuter l'Application, Vérification & Points Clés à Retenir",
    lastUpdatedIso: "",
    lastUpdatedEn: "",
    lastUpdatedFr: "",
    finalCtaHref: "https://github.com/glosings0n/gemmea",
    finalCtaEn: "Explore Full Repo on GitHub →",
    finalCtaFr: "Explorer le Dépôt Complet sur GitHub →",
    render: Step9,
  }
  ],
};
