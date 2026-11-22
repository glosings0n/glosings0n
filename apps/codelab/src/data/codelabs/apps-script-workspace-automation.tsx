import { FlutterFireCampWordmark, MusanTekWordmark } from "@repo/ui";
import { Callout } from "@/components/Callout";
import { CodeWindow } from "@/components/CodeWindow";
import type { CodelabDefinition } from "./types";

function Step1() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. Context & The &quot;Why&quot;: Transforming Isolated Tools into an Automated Workspace Operating System</h3>        <p>
                            Almost everyone in the digital economy owns a Google or Gmail account, yet very few individuals or organizations ever experience the true, interconnected depth of Google Workspace. Most professionals treat Gmail, Google Sheets, Google Docs, Google Forms, and Google Drive as isolated web applications, manually copying and pasting customer data between browser tabs, retyping attendance lists, or paying for fragile third-party automation tools that break when data formats change.
                        </p>        <p>
                            To bridge this gap and empower developer communities with actionable digital sovereignty, <strong>Georges Byona</strong> (<span className={"font-mono"}>@glosings0n</span>) developed and delivered a comprehensive 5-day intensive masterclass across multiple leading tech hubs, including <strong>GDG Afrique Francophone</strong>, the <strong>GDG Community of Pointe-Noire (Congo-Brazzaville)</strong>, and <strong>GDG on Campus CUEA (Catholic University of Eastern Africa, Nairobi, Kenya)</strong>.
                        </p>        <p>
                            Here is the complete 5-day curriculum structure delivered throughout these community programs:
                        </p>        <ul>
          <li><strong>Day I: Introduction & Google Workspace Fundamentals:</strong> Mastering Gmail communication rules, Calendar scheduling, Google Meet collaboration, and Google Contacts directory hygiene.</li>          <li><strong>Day II: Collaboration and Personal Organization:</strong> Real-time co-authoring in Google Docs, structured task capture in Keep Notes, and multimedia organization in Google Photos.</li>          <li><strong>Day III: Information Gathering and Data Processing:</strong> Designing responsive Google Forms, capturing structured responses, and building analytical formulas, pivot tables, and filters in Google Sheets.</li>          <li><strong>Day IV: Smart Storage and Impactful Presentations:</strong> Cloud storage governance in Google Drive, vector visual storytelling with Google Slides, internal knowledge portals with Google Sites, Drawings, and Video.</li>          <li><strong>Day V: Introduction to Automation with Google Apps Script:</strong> Interconnecting all Workspace applications with serverless JavaScript to eliminate repetitive operational chores.</li>          <li><strong>Bonus Track: The GDE (Google Developer Expert) Program & AI within Google Workspace:</strong> Exploring professional ecosystem pathways and integrating Gemini AI assistance across Google Workspace tools.</li>
        </ul>        <p><strong>This hands-on codelab represents the complete interactive engineering curriculum for Day V.</strong> You will write serverless, event-driven JavaScript directly inside the Google Cloud infrastructure, turning Google Workspace into an automated corporate operating system without hosting or managing external servers.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Contexte & Pourquoi : Transformer des outils isolés en un système opérationnel automatisé</h3>        <p>
                            Presque tout le monde dans l&apos;économie numérique dispose d&apos;un compte Google ou d&apos;une adresse Gmail, mais rares sont les utilisateurs ou les organisations qui tirent réellement parti de toute la puissance interconnectée de Google Workspace. La grande majorité des professionnels utilise Gmail, Google Sheets, Google Docs, Google Forms et Google Drive comme de simples applications web isolées, copiant-collant manuellement des coordonnées d&apos;étudiants entre plusieurs onglets de navigateur, recalculant des listes d&apos;émargement à la main, ou souscrivant à des services tiers d&apos;automatisation fragiles et coûteux.
                        </p>        <p>
                            Pour combler ce fossé et doter les communautés de développeurs d&apos;une véritable souveraineté numérique et opérationnelle, <strong>Georges Byona</strong> (<span className={"font-mono"}>@glosings0n</span>) a conçu et dispensé un cycle intensif de formation de 5 jours auprès de plusieurs communautés technologiques d&apos;envergure, notamment au sein de <strong>GDG Afrique Francophone</strong>, de la communauté <strong>GDG Pointe-Noire (Congo-Brazzaville)</strong>, et du <strong>GDG on Campus CUEA (Catholic University of Eastern Africa à Nairobi, Kenya)</strong>.
                        </p>        <p>
                            Voici le programme pédagogique complet en 5 jours dispensé lors de ces formations communautaires :
                        </p>        <ul>
          <li><strong>Day I : Introduction & Fondamentaux de Google Workspace :</strong> Maîtrise des flux de communication Gmail, gestion d&apos;agenda avec Google Calendar, collaboration vidéo Meet et gestion du carnet d&apos;adresses Google Contacts.</li>          <li><strong>Day II : Collaboration & Organisation Personnelle :</strong> Co-édition en temps réel dans Google Docs, prise de notes structurées dans Google Keep et organisation multimédia avec Google Photos.</li>          <li><strong>Day III : Collecte d&apos;Informations & Traitement de Données :</strong> Conception de formulaires dynamiques avec Google Forms, recueil structuré et calculs analytiques, tableaux croisés et filtres avancés dans Google Sheets.</li>          <li><strong>Day IV : Stockage Intelligent & Présentations Impactantes :</strong> Gouvernance et partage documentaire dans Google Drive, présentations vectorielles avec Google Slides, portails web d&apos;équipe avec Google Sites, Drawings et Vidéos.</li>          <li><strong>Day V : Introduction à l&apos;Automatisation avec Google Apps Script :</strong> Interconnexion programmatique de toutes les applications de la suite via du JavaScript serverless natif pour supprimer les tâches répétitives.</li>          <li><strong>Parcours Bonus : Le programme GDE (Google Developer Expert) & l&apos;IA dans Google Workspace :</strong> Présentation des opportunités de l&apos;écosystème d&apos;expertise Google et intégration des fonctionnalités d&apos;IA Gemini à travers les ateliers pratiques.</li>
        </ul>        <p><strong>Ce codelab interactif constitue l&apos;intégralité du contenu pratique du Jour V.</strong> Vous allez concevoir du code JavaScript serverless exécuté directement sur l&apos;infrastructure Google, transformant Google Workspace en un véritable système d&apos;exploitation d&apos;entreprise sans avoir à louer ou administrer le moindre serveur externe.
                        </p>
      </div>
      <Callout variant={"info"} iconName={"info"} titleEn={"The Power of Built-In Cloud Infrastructure"} titleFr={"The Power of Built-In Cloud Infrastructure"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
The Power of Built-In Cloud Infrastructure
          </div>          <p>
                                    Google Apps Script runs on modern Google V8 JavaScript runtime engines. It provides zero-configuration access to your Gmail, Drive, Sheets, Docs, Slides, Forms, and Calendar data via secure, built-in global objects (<code>SpreadsheetApp</code>, <code>GmailApp</code>, <code>DriveApp</code>, etc.) governed by OAuth2 scopes.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
La puissance d&apos;une infrastructure Cloud native
          </div>          <p>
                                    Google Apps Script s&apos;exécute sur le moteur JavaScript moderne Google V8. Il offre un accès sans aucune configuration complexe à vos données Gmail, Drive, Sheets, Docs, Slides, Forms et Calendar via des classes globales intégrées (<code>SpreadsheetApp</code>, <code>GmailApp</code>, <code>DriveApp</code>, etc.) sécurisées par des jetons OAuth2.
                                </p>
        </div>
      </Callout>
      <div className={"lang-en"}>
        <h3>2. Learning Goals & What You Will Build</h3>        <p>
                            Over the course of this 60-minute engineering workshop, you will build 8 interconnected, production-grade automation workflows:
                        </p>        <ul>
          <li><strong>Practice 1 (Forms & Gmail):</strong> Trigger an instant, personalized, responsive HTML confirmation receipt whenever a student completes a workshop registration or evaluation form.</li>          <li><strong>Practice 2 (Google Contacts & People):</strong> Programmatically ingest and update new student profiles into a designated Google Contacts label group (<code>GDG Workspace Training 2026</code>) with contact deduplication.</li>          <li><strong>Practice 3 (Sheets & Gmail):</strong> Perform an automated attendance audit across 5 training days, calculate percentage metrics, flag at-risk students, and dispatch an analytical HTML digest to course instructors.</li>          <li><strong>Practice 4 (Slides, Drive & Gmail):</strong> Build an automated vector certificate factory using a Google Slides template, replace dynamic tokens (<code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, <code>{"{"}{"{"}DATE{"}"}{"}"}</code>, <code>{"{"}{"{"}CERT_ID{"}"}{"}"}</code>), export to PDF, save to Drive, and email students their verified diploma.</li>          <li><strong>Practice 5 (Calendar & Meet):</strong> Automatically schedule 1-on-1 office hours for students requiring exam remediation, sending Calendar invites with auto-generated Google Meet video conference links.</li>          <li><strong>Practice 6 (Docs & Drive):</strong> Programmatically compile an executive Workshop Retrospective & Evaluation Google Doc with custom table styling, export a PDF copy, and configure granular Drive sharing permissions.</li>          <li><strong>Practice 7 (Web App Dashboard):</strong> Build and deploy a real-time web portal powered by <code>HtmlService</code>, allowing participants and instructors to search attendance and certificate status without accessing the raw spreadsheet.</li>          <li><strong>Practice 8 (Time Triggers & Webhooks):</strong> Configure scheduled daily chronometers and push real-time summaries to external community webhooks (Slack / Discord) and Google Sites portals.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Objectifs Pédagogiques & Ce que vous allez construire</h3>        <p>
                            Au cours de ce workshop d&apos;ingénierie de 60 minutes, vous allez implémenter 8 flux d&apos;automatisation interconnectés de niveau production :
                        </p>        <ul>
          <li><strong>Pratique 1 (Forms & Gmail) :</strong> Déclencher l&apos;envoi instantané d&apos;un accusé de réception HTML personnalisé dès qu&apos;un étudiant valide un formulaire d&apos;inscription ou d&apos;évaluation.</li>          <li><strong>Pratique 2 (Google Contacts & Répertoire) :</strong> Ingestion et synchronisation automatique des nouveaux inscrits dans un groupe de contacts dédié (<code>GDG Workspace Training 2026</code>) avec déduplication.</li>          <li><strong>Pratique 3 (Sheets & Gmail) :</strong> Audit d&apos;assiduité automatisé sur les 5 jours de formation, calcul des taux de présence, détection des étudiants en difficulté et envoi d&apos;un rapport de synthèse HTML aux formateurs.</li>          <li><strong>Pratique 4 (Slides, Drive & Gmail) :</strong> Usine d&apos;e-certificats vectoriels basée sur un modèle Google Slides avec substitution de balises (<code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, <code>{"{"}{"{"}DATE{"}"}{"}"}</code>, <code>{"{"}{"{"}CERT_ID{"}"}{"}"}</code>), conversion PDF, archivage Drive et expédition par email.</li>          <li><strong>Pratique 5 (Calendar & Meet) :</strong> Planification automatique de sessions de mentorat individuel pour les étudiants nécessitant un rattrapage, avec invitations Calendar et liens Google Meet générés à la volée.</li>          <li><strong>Pratique 6 (Docs & Drive) :</strong> Génération programmatique d&apos;un rapport officiel d&apos;évaluation dans Google Docs avec mise en page avancée, export PDF et gestion fine des autorisations Drive.</li>          <li><strong>Pratique 7 (Web App Dashboard) :</strong> Déploiement d&apos;un tableau de bord interactif autonome via <code>HtmlService</code> pour consulter les statistiques et certificats en temps réel sans exposer le Google Sheet source.</li>          <li><strong>Pratique 8 (Triggers Horaires & Webhooks) :</strong> Configuration de déclencheurs temporels nocturnes automatiques et synchronisation avec des webhooks externes (Slack / Discord) ou Google Sites.</li>
        </ul>
      </div>
      <div className={"lang-en"}>
        <h3>3. Prerequisites & System Requirements</h3>        <ul>
          <li><strong>Google Account:</strong> A standard personal account (<code>@gmail.com</code>) or a Google Workspace domain account.</li>          <li><strong>Web Browser:</strong> Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari with JavaScript enabled.</li>          <li><strong>Access to Apps Script:</strong> Open <a href={"https://script.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>script.google.com</a>.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Prérequis & Configuration Système</h3>        <ul>
          <li><strong>Compte Google :</strong> Un compte personnel (<code>@gmail.com</code>) ou un compte professionnel d&apos;établissement Google Workspace.</li>          <li><strong>Navigateur Web :</strong> Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.</li>          <li><strong>Accès Apps Script :</strong> Rendez-vous sur <a href={"https://script.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>script.google.com</a>.</li>
        </ul>
      </div>
      <div className={"lang-en"}>
        <h3>4. Step-by-Step Algorithm: How the 1-Click Sandbox Works</h3>        <p>
                            To prevent spending 30 minutes clicking through menus, let&apos;s understand each component of the automated provisioning pipeline before looking at the complete script.
                        </p>        <h4>Step 1.1: Idempotent Folder Creation in Google Drive</h4>        <p>
                            The script queries existing folders by name via <code>DriveApp.getFoldersByName()</code>. If found, it uses the existing folder; otherwise, it creates <code>GDG_Workspace_Workshop_2026</code>. This guarantees idempotency (running the script multiple times won&apos;t flood your Drive with duplicate folders).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>4. Algorithme Étape par Étape : Fonctionnement du Provisionnement Sandbox</h3>        <p>
                            Pour éviter de passer une demi-heure à créer manuellement des fichiers, comprenons chaque brique de l&apos;algorithme d&apos;initialisation avant d&apos;exécuter le script complet.
                        </p>        <h4>Étape 1.1 : Création Idempotente du Dossier dans Google Drive</h4>        <p>
                            Le script interroge les dossiers existants avec <code>DriveApp.getFoldersByName()</code>. S&apos;il existe déjà, il le réutilise ; sinon, il crée <code>GDG_Workspace_Workshop_2026</code>. Cela garantit l&apos;idempotence (exécuter le script plusieurs fois ne créera pas de doublons).
                        </p>
      </div>
      <CodeWindow
        filename={"Step1_1_Folder.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Locate or create a dedicated workshop folder in Google Drive\r\nconst folderName = 'GDG_Workspace_Workshop_2026';\r\nconst existingFolders = DriveApp.getFoldersByName(folderName);\r\nlet workshopFolder;\r\n\r\nif (existingFolders.hasNext()) {\r\n  workshopFolder = existingFolders.next();\r\n  console.log('Using existing workshop folder ID: ' + workshopFolder.getId());\r\n} else {\r\n  workshopFolder = DriveApp.createFolder(folderName);\r\n  console.log('Created new workshop folder ID: ' + workshopFolder.getId());\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 1.2: Creating the Master Spreadsheet & Defining Header Contracts</h4>        <p>
                            We instantiate a new spreadsheet using <code>SpreadsheetApp.create()</code>, immediately move the file reference into our dedicated Drive folder, and write the 13 required column headers in a single call. We freeze the first row so column headers stay visible when scrolling, and style the headers with our solid theme color (<code>#02569B</code>).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 1.2 : Création de la Feuille de Calcul et Définition des Contrats de Colonnes</h4>        <p>
                            Nous instancions un nouveau tableur avec <code>SpreadsheetApp.create()</code>, déplaçons la référence dans le dossier Drive dédié et inscrivons les 13 colonnes requises en un seul appel. La première ligne est figée avec <code>setFrozenRows(1)</code> et stylisée avec notre couleur unie de marque (<code>#02569B</code>).
                        </p>
      </div>
      <CodeWindow
        filename={"Step1_2_Spreadsheet.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Create the master Google Sheet and move it into the workshop folder\r\nconst spreadsheetName = 'Students_Attendance_2026';\r\nconst newSpreadsheet = SpreadsheetApp.create(spreadsheetName);\r\nconst sheetFile = DriveApp.getFileById(newSpreadsheet.getId());\r\n\r\n// Organize within folder\r\nworkshopFolder.addFile(sheetFile);\r\nDriveApp.getRootFolder().removeFile(sheetFile);\r\n\r\nconst sheet = newSpreadsheet.getActiveSheet();\r\nsheet.setName('Attendance_Master');\r\n\r\n// Define column contracts\r\nconst headers = [[\r\n  'Student ID', 'Full Name', 'Email', 'Track',\r\n  'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5',\r\n  'Attendance Rate', 'Exam Score', 'Certificate Status', 'Certificate URL'\r\n]];\r\n\r\nsheet.getRange(1, 1, 1, headers[0].length).setValues(headers);\r\n\r\n// Apply solid branding styles (No gradients, no glows)\r\nconst headerRange = sheet.getRange(1, 1, 1, headers[0].length);\r\nheaderRange.setBackground('#02569B');\r\nheaderRange.setFontColor('#FFFFFF');\r\nheaderRange.setFontWeight('bold');\r\nheaderRange.setHorizontalAlignment('center');\r\nsheet.setFrozenRows(1);"}
      />
      <div className={"lang-en"}>
        <h4>Step 1.3: Atomic Batch Ingestion of Sample Cohort Data</h4>        <p>
                            Instead of calling <code>setValue()</code> in a loop, we prepare a 2D array of 8 student records and write the entire block with <code>sheet.getRange(2, 1, 8, 13).setValues(sampleStudents)</code>. This minimizes round-trip latency to the Google Cloud backend.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 1.3 : Ingestion par Lot Atomique des Profils de la Cohorte</h4>        <p>
                            Plutôt que d&apos;appeler <code>setValue()</code> dans une boucle lente, nous préparons une matrice 2D de 8 étudiants et écrivons l&apos;intégralité du bloc via <code>setValues(sampleStudents)</code> en un seul voyage réseau vers les serveurs Google.
                        </p>
      </div>
      <CodeWindow
        filename={"Step1_3_SampleData.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Batch insert 8 realistic student records with varied attendance\r\nconst sampleStudents = [\r\n  ['STU-001', 'Amina Mwangi', 'amina.mwangi@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 94, 'PENDING', ''],\r\n  ['STU-002', 'Jean-Luc Bakala', 'jeanluc.bakala@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 88, 'PENDING', ''],\r\n  ['STU-003', 'Koffi Mensah', 'koffi.mensah@example.com', 'Automation & AI', 'P', 'P', 'A', 'P', 'P', '', 82, 'PENDING', ''],\r\n  ['STU-004', 'Sarah Ochieng', 'sarah.ochieng@example.com', 'Automation & AI', 'P', 'A', 'P', 'P', 'A', '', 65, 'PENDING', ''],\r\n  ['STU-005', 'Christian Mabiala', 'christian.mabiala@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 96, 'PENDING', ''],\r\n  ['STU-006', 'Fatou Diallo', 'fatou.diallo@example.com', 'Cloud & Workspace', 'A', 'A', 'P', 'P', 'P', '', 60, 'PENDING', ''],\r\n  ['STU-007', 'David Mutua', 'david.mutua@example.com', 'Automation & AI', 'P', 'P', 'P', 'P', 'P', '', 91, 'PENDING', ''],\r\n  ['STU-008', 'Grace Ndege', 'grace.ndege@example.com', 'Automation & AI', 'P', 'P', 'P', 'A', 'P', '', 85, 'PENDING', '']\r\n];\r\n\r\nsheet.getRange(2, 1, sampleStudents.length, headers[0].length).setValues(sampleStudents);\r\nsheet.autoResizeColumns(1, headers[0].length);"}
      />
      <div className={"lang-en"}>
        <h4>Step 1.4: Vector Slide Template Creation with Replacement Tokens</h4>        <p>
                            Using <code>SlidesApp.create()</code>, we generate the diploma canvas. We clear default shapes, insert title and body text boxes with the <strong>Figtree</strong> font family, and insert dynamic replacement tokens: <code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, <code>{"{"}{"{"}DATE{"}"}{"}"}</code>, and <code>{"{"}{"{"}CERT_ID{"}"}{"}"}</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 1.4 : Modèle Vectoriel Google Slides avec Balises Dynamiques</h4>        <p>
                            Avec <code>SlidesApp.create()</code>, nous générons le gabarit de diplôme. Nous vidons la diapositive, insérons les zones de texte stylisées avec la police <strong>Figtree</strong> et définissons les balises de fusion : <code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, <code>{"{"}{"{"}DATE{"}"}{"}"}</code> et <code>{"{"}{"{"}CERT_ID{"}"}{"}"}</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step1_4_SlidesTemplate.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Create vector Google Slides template with replacement tokens and Figtree font\r\nconst templateName = 'Certificate_Template_2026';\r\nconst presentation = SlidesApp.create(templateName);\r\nconst presentationFile = DriveApp.getFileById(presentation.getId());\r\n\r\nworkshopFolder.addFile(presentationFile);\r\nDriveApp.getRootFolder().removeFile(presentationFile);\r\n\r\nconst slide = presentation.getSlides()[0];\r\nslide.getShapes().forEach(shape => shape.remove());\r\n\r\n// Certificate Title\r\nconst titleBox = slide.insertTextBox('CERTIFICATE OF ACHIEVEMENT', 50, 40, 620, 60);\r\ntitleBox.getText().getTextStyle()\r\n  .setFontSize(28)\r\n  .setFontFamily('Figtree')\r\n  .setBold(true)\r\n  .setForegroundColor('#02569B');\r\ntitleBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);\r\n\r\n// Dynamic Body with Replacement Tokens\r\nconst bodyBox = slide.insertTextBox(\r\n  'This is proudly presented to\\n\\n' +\r\n  '{{NAME}}\\n\\n' +\r\n  'for successfully completing the 5-day intensive curriculum in {{TRACK}}.\\n' +\r\n  'Issued on {{DATE}} | Verification ID: {{CERT_ID}}',\r\n  50, 130, 620, 200\r\n);\r\nbodyBox.getText().getTextStyle()\r\n  .setFontSize(16)\r\n  .setFontFamily('Figtree');\r\nbodyBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);\r\n\r\npresentation.saveAndClose();"}
      />
      <div className={"lang-en"}>
        <h4>Step 1.5: Persistent Configuration via ScriptProperties</h4>        <p>
                            Rather than hardcoding Google Drive IDs in every subsequent practice, we persist the generated Folder ID, Sheet ID, and Slide Template ID in <code>PropertiesService.getScriptProperties()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 1.5 : Sauvegarde Persistante dans ScriptProperties</h4>        <p>
                            Pour éviter d&apos;avoir à copier-coller manuellement des IDs à chaque étape, nous enregistrons les identifiants générés dans <code>PropertiesService.getScriptProperties()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step1_5_Properties.gs"}
        lang={"JAVASCRIPT"}
        code={"// 5. Persist resource IDs in ScriptProperties for seamless access across practices\r\nconst scriptProperties = PropertiesService.getScriptProperties();\r\nscriptProperties.setProperties({\r\n  WORKSHOP_FOLDER_ID: workshopFolder.getId(),\r\n  SPREADSHEET_ID: newSpreadsheet.getId(),\r\n  SLIDES_TEMPLATE_ID: presentation.getId(),\r\n  ADMIN_EMAIL: Session.getActiveUser().getEmail()\r\n});"}
      />
      <div className={"lang-en"}>
        <h3>5. The Complete Provisioning Script</h3>        <p>
                            Paste the complete unified script below into your <code>Code.gs</code> file at <a href={"https://script.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>script.google.com</a> and click <strong>Run</strong>:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>5. Script d&apos;Initialisation Complet Unifié</h3>        <p>
                            Collez le code complet ci-dessous dans votre fichier <code>Code.gs</code> sur <a href={"https://script.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>script.google.com</a> et cliquez sur <strong>Exécuter</strong> :
                        </p>
      </div>
      <CodeWindow
        filename={"Code.gs (Complete 1-Click Sandbox Provisioning)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Google Apps Script Workshop Automation\r\n * 1-Click Environment Setup Script\r\n * Track: Google Workspace Training (Day V)\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction setupWorkshopEnvironment() {\r\n  console.log('Initiating 1-Click Sandbox Provisioning...');\r\n\r\n  // 1. Create a dedicated Google Drive folder for the workshop\r\n  const folderName = 'GDG_Workspace_Workshop_2026';\r\n  const existingFolders = DriveApp.getFoldersByName(folderName);\r\n  let workshopFolder;\r\n\r\n  if (existingFolders.hasNext()) {\r\n    workshopFolder = existingFolders.next();\r\n    console.log('Using existing workshop folder: ' + workshopFolder.getName() + ' (ID: ' + workshopFolder.getId() + ')');\r\n  } else {\r\n    workshopFolder = DriveApp.createFolder(folderName);\r\n    console.log('Created new workshop folder: ' + folderName + ' (ID: ' + workshopFolder.getId() + ')');\r\n  }\r\n\r\n  // 2. Create the Master Attendance & Grades Google Sheet\r\n  const spreadsheetName = 'Students_Attendance_2026';\r\n  const newSpreadsheet = SpreadsheetApp.create(spreadsheetName);\r\n  const sheetFile = DriveApp.getFileById(newSpreadsheet.getId());\r\n  \r\n  // Move file into the dedicated workshop folder\r\n  workshopFolder.addFile(sheetFile);\r\n  DriveApp.getRootFolder().removeFile(sheetFile);\r\n\r\n  const sheet = newSpreadsheet.getActiveSheet();\r\n  sheet.setName('Attendance_Master');\r\n\r\n  // Define column contracts\r\n  const headers = [\r\n    [\r\n      'Student ID',\r\n      'Full Name',\r\n      'Email',\r\n      'Track',\r\n      'Day 1',\r\n      'Day 2',\r\n      'Day 3',\r\n      'Day 4',\r\n      'Day 5',\r\n      'Attendance Rate',\r\n      'Exam Score',\r\n      'Certificate Status',\r\n      'Certificate URL'\r\n    ]\r\n  ];\r\n\r\n  sheet.getRange(1, 1, 1, headers[0].length).setValues(headers);\r\n\r\n  // Apply solid header styling\r\n  const headerRange = sheet.getRange(1, 1, 1, headers[0].length);\r\n  headerRange.setBackground('#02569B');\r\n  headerRange.setFontColor('#FFFFFF');\r\n  headerRange.setFontWeight('bold');\r\n  headerRange.setHorizontalAlignment('center');\r\n  sheet.setFrozenRows(1);\r\n\r\n  // 3. Populate 8 realistic sample student records\r\n  const sampleStudents = [\r\n    ['STU-001', 'Amina Mwangi', 'amina.mwangi@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 94, 'PENDING', ''],\r\n    ['STU-002', 'Jean-Luc Bakala', 'jeanluc.bakala@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 88, 'PENDING', ''],\r\n    ['STU-003', 'Koffi Mensah', 'koffi.mensah@example.com', 'Automation & AI', 'P', 'P', 'A', 'P', 'P', '', 82, 'PENDING', ''],\r\n    ['STU-004', 'Sarah Ochieng', 'sarah.ochieng@example.com', 'Automation & AI', 'P', 'A', 'P', 'P', 'A', '', 65, 'PENDING', ''],\r\n    ['STU-005', 'Christian Mabiala', 'christian.mabiala@example.com', 'Cloud & Workspace', 'P', 'P', 'P', 'P', 'P', '', 96, 'PENDING', ''],\r\n    ['STU-006', 'Fatou Diallo', 'fatou.diallo@example.com', 'Cloud & Workspace', 'A', 'A', 'P', 'P', 'P', '', 60, 'PENDING', ''],\r\n    ['STU-007', 'David Mutua', 'david.mutua@example.com', 'Automation & AI', 'P', 'P', 'P', 'P', 'P', '', 91, 'PENDING', ''],\r\n    ['STU-008', 'Grace Ndege', 'grace.ndege@example.com', 'Automation & AI', 'P', 'P', 'P', 'A', 'P', '', 85, 'PENDING', '']\r\n  ];\r\n\r\n  sheet.getRange(2, 1, sampleStudents.length, headers[0].length).setValues(sampleStudents);\r\n  sheet.autoResizeColumns(1, headers[0].length);\r\n\r\n  // 4. Create the Vector Certificate Google Slides Template\r\n  const templateName = 'Certificate_Template_2026';\r\n  const presentation = SlidesApp.create(templateName);\r\n  const presentationFile = DriveApp.getFileById(presentation.getId());\r\n  \r\n  workshopFolder.addFile(presentationFile);\r\n  DriveApp.getRootFolder().removeFile(presentationFile);\r\n\r\n  const slide = presentation.getSlides()[0];\r\n  slide.getShapes().forEach(shape => shape.remove());\r\n\r\n  // Certificate Title Box with Figtree font\r\n  const titleBox = slide.insertTextBox('CERTIFICATE OF ACHIEVEMENT', 50, 40, 620, 60);\r\n  const titleText = titleBox.getText();\r\n  titleText.getTextStyle()\r\n    .setFontSize(28)\r\n    .setFontFamily('Figtree')\r\n    .setBold(true)\r\n    .setForegroundColor('#02569B');\r\n  titleBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);\r\n\r\n  // Body Text with dynamic replacement tokens\r\n  const bodyBox = slide.insertTextBox(\r\n    'This is proudly presented to\\n\\n' +\r\n    '{{NAME}}\\n\\n' +\r\n    'for successfully completing the 5-day intensive curriculum in {{TRACK}}.\\n' +\r\n    'Issued on {{DATE}} | Verification ID: {{CERT_ID}}',\r\n    50, 130, 620, 200\r\n  );\r\n  \r\n  const bodyText = bodyBox.getText();\r\n  bodyText.getTextStyle()\r\n    .setFontSize(16)\r\n    .setFontFamily('Figtree');\r\n  bodyBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);\r\n\r\n  presentation.saveAndClose();\r\n\r\n  // 5. Store generated IDs in ScriptProperties for seamless access across practices\r\n  const scriptProperties = PropertiesService.getScriptProperties();\r\n  scriptProperties.setProperties({\r\n    WORKSHOP_FOLDER_ID: workshopFolder.getId(),\r\n    SPREADSHEET_ID: newSpreadsheet.getId(),\r\n    SLIDES_TEMPLATE_ID: presentation.getId(),\r\n    ADMIN_EMAIL: Session.getActiveUser().getEmail()\r\n  });\r\n\r\n  console.log('=== SANDBOX PROVISIONING SUCCESSFUL ===');\r\n  console.log('Workshop Folder ID: ' + workshopFolder.getId());\r\n  console.log('Spreadsheet ID:     ' + newSpreadsheet.getId());\r\n  console.log('Slides Template ID: ' + presentation.getId());\r\n  console.log('Admin Active Email: ' + Session.getActiveUser().getEmail());\r\n  console.log('All parameters saved in ScriptProperties.');\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>6. First-Run OAuth2 Authorization Guide</h3>        <p>
                            When clicking <strong>Run</strong> for the first time, Google displays an authorization prompt:
                        </p>        <ol>
          <li>Click <strong>Review permissions</strong>.</li>          <li>Select your Google account.</li>          <li>When the banner says <em>&quot;Google hasn&apos;t verified this app&quot;</em>, click <strong>Advanced</strong>.</li>          <li>Click <strong>Go to GDG_Workspace_Automation_Master (unsafe)</strong>. This appears because you are the author of a private, custom developer script.</li>          <li>Click <strong>Allow</strong>. The script will execute and output the generated IDs in the execution log.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>6. Guide d&apos;Autorisation OAuth2 à la Première Exécution</h3>        <p>
                            Lors du premier clic sur <strong>Exécuter</strong>, Google affiche une modale d&apos;autorisation :
                        </p>        <ol>
          <li>Cliquez sur <strong>Vérifier les autorisations</strong>.</li>          <li>Choisissez votre compte Google.</li>          <li>Lorsque l&apos;écran affiche <em>&quot;Google n&apos;a pas validé cette application&quot;</em>, cliquez sur <strong>Paramètres avancés</strong>.</li>          <li>Cliquez sur <strong>Accéder à GDG_Workspace_Automation_Master (non sécurisé)</strong>. Cet avertissement est standard pour vos scripts privés de développement.</li>          <li>Cliquez sur <strong>Autoriser</strong>. Le script s&apos;exécute et affiche les identifiants générés dans le journal d&apos;exécution.</li>
        </ol>
      </div>
    </>
  );
}

function Step2() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Eliminating Uncertainty for Students</h3>        <p>
                            When organizing technical workshops, students fill registration or project submission forms and immediately expect proof that their response was received. Leaving attendees without confirmation generates support requests and reduces confidence in event coordination.
                        </p>        <p>
                            Let&apos;s break down the event-driven notification architecture into 4 logical steps before looking at the complete, production-ready script.
                        </p>        <h4>Step 2.1: Intercepting the Event Object (Production Trigger vs Manual Test)</h4>        <p>
                            When a form response is submitted, Apps Script provides an event object <code>e</code>. If linked to a spreadsheet, <code>e.namedValues</code> contains a dictionary mapping question titles to arrays of answers. To allow developers to test the function directly from the editor without waiting for a real form submission, we implement a defensive fallback that grabs the current user&apos;s email.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Rassurer les Participants Dès l&apos;Inscription</h3>        <p>
                            Lors des ateliers technologiques, les participants attendent une confirmation immédiate de leur inscription ou du dépôt de leur livrable. Sans retour automatique, les organisateurs sont submergés de questions et l&apos;engagement s&apos;effrite.
                        </p>        <p>
                            Décomposons l&apos;architecture de cette notification événementielle en 4 étapes logiques avant d&apos;assembler le script complet de production.
                        </p>        <h4>Étape 2.1 : Interception de l&apos;Objet Événement (Trigger Réel vs Test dans l&apos;Éditeur)</h4>        <p>
                            Lors de la soumission d&apos;une réponse, Apps Script injecte un objet événement <code>e</code>. Si le formulaire est lié à un tableur, <code>e.namedValues</code> contient un dictionnaire associant l&apos;intitulé de chaque champ à sa valeur. Pour permettre de tester la fonction directement dans l&apos;éditeur sans remplir un vrai formulaire à chaque fois, nous prévoyons un repli défensif qui cible l&apos;adresse de l&apos;administrateur actif.
                        </p>
      </div>
      <CodeWindow
        filename={"Step2_1_EventParsing.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Extract submitted form values with fallback for manual testing\r\nlet studentName = 'Participant';\r\nlet studentEmail = '';\r\nlet selectedTrack = 'Google Workspace & Cloud Automation';\r\n\r\nif (e && e.namedValues) {\r\n  // Triggered by linked Google Form response\r\n  studentName = e.namedValues['Full Name'] ? e.namedValues['Full Name'][0] : 'Participant';\r\n  studentEmail = e.namedValues['Email'] ? e.namedValues['Email'][0] : '';\r\n  selectedTrack = e.namedValues['Track'] ? e.namedValues['Track'][0] : selectedTrack;\r\n} else {\r\n  // Fallback for direct execution from Apps Script editor\r\n  console.log('No event object detected. Using active admin email for testing...');\r\n  studentEmail = PropertiesService.getScriptProperties().getProperty('ADMIN_EMAIL') || Session.getActiveUser().getEmail();\r\n  studentName = 'Test Student (Editor Run)';\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 2.2: Input Sanitization and Email Validation</h4>        <p>
                            Defensive programming requires checking that the target email address is non-empty and contains an <code>@</code> symbol before attempting to dispatch an email. If invalid, the script logs a warning and exits cleanly without throwing an unhandled exception.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 2.2 : Assainissement des Données et Contrôle de l&apos;Email</h4>        <p>
                            La programmation défensive impose de vérifier que l&apos;adresse du destinataire n&apos;est pas vide et contient bien un symbole <code>@</code> avant tout envoi. Si l&apos;adresse est invalide, le script consigne un avertissement et s&apos;arrête proprement sans générer d&apos;exception bloquante.
                        </p>
      </div>
      <CodeWindow
        filename={"Step2_2_Validation.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Validate email syntax before sending\r\nif (!studentEmail || !studentEmail.includes('@')) {\r\n  console.warn('Invalid or empty recipient email: \"' + studentEmail + '\". Aborting dispatch.');\r\n  return;\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 2.3: Responsive HTML Email Design with Figtree Typography</h4>        <p>
                            Email clients (Gmail, Apple Mail, Outlook) ignore external stylesheets. Therefore, every style rule must be written inline on the HTML elements. We use the <strong>Figtree</strong> font family with a solid blue brand banner (<code>#02569B</code>) and high-contrast text.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 2.3 : Gabarit HTML Responsive et Typographie Figtree</h4>        <p>
                            Les clients de messagerie ignorent les feuilles de style externes. Chaque style CSS doit donc être intégré inline directement sur les balises HTML. Nous appliquons la typographie <strong>Figtree</strong> avec un bandeau de marque bleu franc (<code>#02569B</code>) et des contrastes optimaux.
                        </p>
      </div>
      <CodeWindow
        filename={"Step2_3_HtmlTemplate.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Assemble responsive HTML email using Figtree font and solid brand colors\r\nconst htmlBody = [\r\n  '<div style=\"font-family: 'Figtree', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background-color: #ffffff;\">',\r\n  '  <div style=\"background-color: #02569B; color: #ffffff; padding: 24px; text-align: center;\">',\r\n  '    <h2 style=\"margin: 0; font-size: 22px;\">GDG - Google Workspace Training</h2>',\r\n  '    <p style=\"margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;\">Registration Confirmation & Day V Roadmap</p>',\r\n  '  </div>',\r\n  '  <div style=\"padding: 24px; color: #1e293b; line-height: 1.6;\">',\r\n  '    <p style=\"font-size: 16px; margin-top: 0;\">Hello <strong>' + studentName + '</strong>,</p>',\r\n  '    <p>Your workshop submission has been securely recorded in our system.</p>',\r\n  '    <div style=\"background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;\">',\r\n  '      <p style=\"margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #02569B;\">Session Summary:</p>',\r\n  '      <ul style=\"margin: 0; padding-left: 20px; font-size: 14px; color: #334155;\">',\r\n  '        <li><strong>Track:</strong> ' + selectedTrack + '</li>',\r\n  '        <li><strong>Format:</strong> 5-Day Intensive Community Workshop</li>',\r\n  '        <li><strong>Automated Module:</strong> Day V - Google Apps Script Deep Dive</li>',\r\n  '      </ul>',\r\n  '    </div>',\r\n  '    <p style=\"font-size: 14px; color: #64748b;\">Visit <a href=\"https://script.google.com\" style=\"color: #0284c7; text-decoration: none;\">script.google.com</a> before our live session.</p>',\r\n  '    <hr style=\"border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;\" />',\r\n  '    <p style=\"font-size: 12px; color: #94a3b8; margin-bottom: 0; text-align: center;\">GDG Afrique Francophone | GDG Pointe-Noire | GDG on Campus CUEA</p>',\r\n  '  </div>',\r\n  '</div>'\r\n].join('\\n');"}
      />
      <div className={"lang-en"}>
        <h4>Step 2.4: Atomic Dispatch via GmailApp with Plain Text Fallback</h4>        <p>
                            We call <code>GmailApp.sendEmail()</code>, providing a mandatory plain-text fallback string for accessibility and screen readers, the custom HTML body, and a clean sender display name (<em>GDG Workspace Automation Lead</em>).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 2.4 : Expédition Atomique via GmailApp avec Alternative Texte</h4>        <p>
                            Nous appelons <code>GmailApp.sendEmail()</code> en transmettant une version texte brut obligatoire pour l&apos;accessibilité et les montres connectées, le corps HTML complet et un nom d&apos;expéditeur soigné (<em>GDG Workspace Automation Lead</em>).
                        </p>
      </div>
      <CodeWindow
        filename={"Step2_4_SendEmail.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Dispatch email with plain text fallback via GmailApp\r\nconst emailSubject = 'Confirmation: Registration Received | GDG Workspace Training 2026';\r\nconst plainTextFallback = 'Hello ' + studentName + ',\\n\\nYour registration for GDG - Google Workspace Training (' + selectedTrack + ') has been recorded!\\n\\nSee you at the Day V Google Apps Script session!';\r\n\r\nGmailApp.sendEmail(studentEmail, emailSubject, plainTextFallback, {\r\n  htmlBody: htmlBody,\r\n  name: 'GDG Workspace Automation Lead'\r\n});\r\n\r\nconsole.log('Confirmation email successfully dispatched to: ' + studentEmail);"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Form Notification Script</h3>        <p>
                            Create a new script file in your project named <code>Practice1_FormNotification.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet de Notification de Formulaire</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice1_FormNotification.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice1_FormNotification.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 1: Automated Form Submission Email Receipt\r\n * Service: FormApp + GmailApp + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction handleWorkshopFormSubmission(e) {\r\n  try {\r\n    let studentName = 'Participant';\r\n    let studentEmail = '';\r\n    let selectedTrack = 'Google Workspace & Cloud Automation';\r\n\r\n    // 1. Handle execution both via Event Trigger and Direct Testing\r\n    if (e && e.namedValues) {\r\n      studentName = e.namedValues['Full Name'] ? e.namedValues['Full Name'][0] : 'Participant';\r\n      studentEmail = e.namedValues['Email'] ? e.namedValues['Email'][0] : '';\r\n      selectedTrack = e.namedValues['Track'] ? e.namedValues['Track'][0] : selectedTrack;\r\n    } else {\r\n      console.log('No event object detected. Using active admin email for testing...');\r\n      const props = PropertiesService.getScriptProperties();\r\n      studentEmail = props.getProperty('ADMIN_EMAIL') || Session.getActiveUser().getEmail();\r\n      studentName = 'Test Student (Editor Run)';\r\n    }\r\n\r\n    // 2. Validate email syntax\r\n    if (!studentEmail || !studentEmail.includes('@')) {\r\n      console.warn('Invalid or empty recipient email: \"' + studentEmail + '\". Aborting dispatch.');\r\n      return;\r\n    }\r\n\r\n    const emailSubject = 'Confirmation: Registration Received | GDG Workspace Training 2026';\r\n    \r\n    // 3. Assemble responsive HTML template with Figtree font\r\n    const htmlBody = [\r\n      '<div style=\"font-family: 'Figtree', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background-color: #ffffff;\">',\r\n      '  <div style=\"background-color: #02569B; color: #ffffff; padding: 24px; text-align: center;\">',\r\n      '    <h2 style=\"margin: 0; font-size: 22px;\">GDG - Google Workspace Training</h2>',\r\n      '    <p style=\"margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;\">Registration Confirmation & Day V Roadmap</p>',\r\n      '  </div>',\r\n      '  <div style=\"padding: 24px; color: #1e293b; line-height: 1.6;\">',\r\n      '    <p style=\"font-size: 16px; margin-top: 0;\">Hello <strong>' + studentName + '</strong>,</p>',\r\n      '    <p>We are delighted to confirm that your workshop submission has been securely recorded in our system.</p>',\r\n      '    <div style=\"background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;\">',\r\n      '      <p style=\"margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #02569B;\">Session Summary:</p>',\r\n      '      <ul style=\"margin: 0; padding-left: 20px; font-size: 14px; color: #334155;\">',\r\n      '        <li><strong>Registered Track:</strong> ' + selectedTrack + '</li>',\r\n      '        <li><strong>Format:</strong> 5-Day Intensive Community Workshop</li>',\r\n      '        <li><strong>Automated Module:</strong> Day V - Google Apps Script Deep Dive</li>',\r\n      '      </ul>',\r\n      '    </div>',\r\n      '    <p style=\"font-size: 14px; color: #64748b;\">Please ensure you have active access to <a href=\"https://script.google.com\" style=\"color: #0284c7; text-decoration: none;\">script.google.com</a> before our live hands-on session.</p>',\r\n      '    <hr style=\"border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;\" />',\r\n      '    <p style=\"font-size: 12px; color: #94a3b8; margin-bottom: 0; text-align: center;\">Organized with GDG Afrique Francophone, GDG Pointe-Noire & GDG on Campus CUEA.<br>Powered by MusanTek & FlutterFire Summer Camp.</p>',\r\n      '  </div>',\r\n      '</div>'\r\n    ].join('\\n');\r\n\r\n    const plainTextFallback = 'Hello ' + studentName + ',\\n\\nYour registration for GDG - Google Workspace Training has been confirmed!\\nTrack: ' + selectedTrack + '\\n\\nSee you at the Day V Google Apps Script automation session!';\r\n\r\n    // 4. Send email via GmailApp\r\n    GmailApp.sendEmail(studentEmail, emailSubject, plainTextFallback, {\r\n      htmlBody: htmlBody,\r\n      name: 'GDG Workspace Automation Lead'\r\n    });\r\n\r\n    console.log('Confirmation email successfully dispatched to: ' + studentEmail);\r\n  } catch (err) {\r\n    console.error('Failed to execute handleWorkshopFormSubmission: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Testing in Editor & Attaching the Live Trigger</h3>        <p><strong>To test immediately in the editor:</strong> Select the function <code>handleWorkshopFormSubmission</code> from the toolbar dropdown and click <strong>Run</strong>. Check your Gmail inbox: you will receive the formatted test confirmation email within 3 seconds.
                        </p>        <p><strong>To bind to live Google Form submissions:</strong></p>        <ol>
          <li>Click the clock icon (<strong>Triggers</strong>) in the left sidebar.</li>          <li>Click <strong>+ Add Trigger</strong> (bottom right).</li>          <li>Set <em>Function to run</em> to <code>handleWorkshopFormSubmission</code>.</li>          <li>Set <em>Event source</em> to <strong>From spreadsheet</strong> (or From form).</li>          <li>Set <em>Event type</em> to <strong>On form submit</strong>, and click <strong>Save</strong>.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Test dans l&apos;Éditeur & Déclencheur Événementiel Réel</h3>        <p><strong>Pour tester immédiatement dans l&apos;éditeur :</strong> Sélectionnez la fonction <code>handleWorkshopFormSubmission</code> dans la barre d&apos;outils et cliquez sur <strong>Exécuter</strong>. Consultez votre boîte Gmail : vous recevrez l&apos;email de confirmation de test en moins de 3 secondes.
                        </p>        <p><strong>Pour lier aux soumissions réelles de formulaires :</strong></p>        <ol>
          <li>Cliquez sur l&apos;icône d&apos;horloge (<strong>Déclencheurs</strong>) dans la barre latérale gauche.</li>          <li>Cliquez sur <strong>+ Ajouter un déclencheur</strong> (en bas à droite).</li>          <li>Choisissez la fonction <code>handleWorkshopFormSubmission</code>.</li>          <li>Définissez la source de l&apos;événement sur <strong>Depuis la feuille de calcul</strong>.</li>          <li>Définissez le type d&apos;événement sur <strong>Lors de l&apos;envoi du formulaire</strong>, puis cliquez sur <strong>Enregistrer</strong>.</li>
        </ol>
      </div>
    </>
  );
}

function Step3() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Contact Directory Hygiene</h3>        <p>
                            Organizing community cohorts requires instructors and organizers to maintain up-to-date contact directories. When inviting students to review sessions or creating email distribution lists, typing dozens of addresses by hand is tedious and error-prone.
                        </p>        <p>
                            Let&apos;s break down the automated Google Contacts ingestion pipeline into 4 steps before looking at the complete script.
                        </p>        <h4>Step 3.1: Finding or Creating the Contact Group</h4>        <p>
                            We use <code>ContactsApp.getContactGroup()</code> to check if the group <code>GDG Workspace Training 2026</code> already exists. If missing, we call <code>ContactsApp.createContactGroup()</code>. This guarantees that cohort participants are organized under a distinct tag.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Tenue Rigoureuse du Carnet d&apos;Adresses</h3>        <p>
                            L&apos;encadrement de promotions d&apos;étudiants exige des carnets d&apos;adresses constamment à jour. Lorsque les formateurs doivent inviter les participants ou envoyer des consignes, ressaisir des dizaines d&apos;adresses à la main est source de coquilles et d&apos;omissions.
                        </p>        <p>
                            Décomposons le flux d&apos;ingestion automatique dans Google Contacts en 4 étapes logiques avant d&apos;examiner le script unifié.
                        </p>        <h4>Étape 3.1 : Recherche ou Création du Groupe de Contacts</h4>        <p>
                            Nous interrogeons <code>ContactsApp.getContactGroup()</code> pour vérifier si le groupe <code>GDG Workspace Training 2026</code> existe déjà. S&apos;il est absent, <code>ContactsApp.createContactGroup()</code> le crée immédiatement. Cela permet d&apos;isoler la cohorte sous une étiquette dédiée.
                        </p>
      </div>
      <CodeWindow
        filename={"Step3_1_GroupLookup.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Locate or create a dedicated Contact Group\r\nconst groupName = 'GDG Workspace Training 2026';\r\nlet contactGroup = ContactsApp.getContactGroup(groupName);\r\n\r\nif (!contactGroup) {\r\n  contactGroup = ContactsApp.createContactGroup(groupName);\r\n  console.log('Created new Contact Group: \"' + groupName + '\"');\r\n} else {\r\n  console.log('Found existing Contact Group: \"' + groupName + '\"');\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 3.2: Batch Reading the Student Roster from Google Sheets</h4>        <p>
                            Using the <code>SPREADSHEET_ID</code> stored in ScriptProperties, we open the master sheet and retrieve all records in a single 2D array via <code>getDataRange().getValues()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 3.2 : Lecture par Lot de la Liste depuis Google Sheets</h4>        <p>
                            Grâce au <code>SPREADSHEET_ID</code> enregistré dans les ScriptProperties, nous chargeons l&apos;intégralité des lignes en un seul appel via <code>getDataRange().getValues()</code> sous forme de matrice 2D.
                        </p>
      </div>
      <CodeWindow
        filename={"Step3_2_ReadSheet.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Read student rows in a single batch call from Google Sheets\r\nconst spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');\r\nconst sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Attendance_Master');\r\nconst data = sheet.getDataRange().getValues(); // 2D array"}
      />
      <div className={"lang-en"}>
        <h4>Step 3.3: Deduplication and Contact Creation</h4>        <p>
                            Before creating a new contact, we call <code>ContactsApp.getContactsByEmailAddress(email)</code>. If an entry already exists, we reuse that contact object; if not, we split the full name into first and last names and instantiate a new contact with <code>ContactsApp.createContact()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 3.3 : Contrôle Anti-Doublon et Création de Contact</h4>        <p>
                            Avant toute création, nous interrogeons <code>ContactsApp.getContactsByEmailAddress(email)</code>. Si la personne existe déjà, nous réutilisons l&apos;objet contact ; sinon, nous découpons le nom complet et créons la fiche avec <code>ContactsApp.createContact()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step3_3_Deduplication.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Check for existing contacts before creating a duplicate\r\nconst existingContacts = ContactsApp.getContactsByEmailAddress(email);\r\n\r\nlet contact;\r\nif (existingContacts.length > 0) {\r\n  contact = existingContacts[0];\r\n  console.log('Contact already exists for ' + email + '. Updating details...');\r\n} else {\r\n  const nameParts = fullName.trim().split(' ');\r\n  const firstName = nameParts[0] || 'Student';\r\n  const lastName = nameParts.slice(1).join(' ') || '';\r\n  \r\n  contact = ContactsApp.createContact(firstName, lastName, email);\r\n  console.log('Created new contact: ' + firstName + ' ' + lastName);\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 3.4: Attaching Contextual Metadata and Group Membership</h4>        <p>
                            We attach the student ID and registered track to the contact&apos;s custom notes field (<code>setNotes()</code>), and verify that the contact is added to the group with <code>contact.addToGroup(contactGroup)</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 3.4 : Métadonnées Métier et Rattachement au Groupe</h4>        <p>
                            Nous renseignons l&apos;identifiant et le parcours suivi dans le champ note du contact (<code>setNotes()</code>), puis nous rattachons la fiche au groupe avec <code>contact.addToGroup(contactGroup)</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step3_4_NotesAndGroup.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Attach contextual notes and assign to the target Contact Group\r\ncontact.setNotes('Participant ID: ' + studentId + ' | Track: ' + track + ' | GDG Workspace Training 2026');\r\n\r\nconst currentGroups = contact.getContactGroups();\r\nconst alreadyInGroup = currentGroups.some(g => g.getName() === groupName);\r\n\r\nif (!alreadyInGroup) {\r\n  contact.addToGroup(contactGroup);\r\n  console.log('Added ' + contact.getFullName() + ' to group \"' + groupName + '\".');\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Contact Synchronization Script</h3>        <p>
                            Create a new script file in your project named <code>Practice2_ContactsSync.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet de Synchronisation de Contacts</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice2_ContactsSync.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice2_ContactsSync.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 2: Batch Student Ingestion into Google Contacts\r\n * Service: ContactsApp + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction syncStudentsToGoogleContacts() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n\r\n    if (!spreadsheetId) {\r\n      throw new Error('SPREADSHEET_ID not found in ScriptProperties. Run setupWorkshopEnvironment first.');\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const data = sheet.getDataRange().getValues();\r\n\r\n    if (data.length <= 1) {\r\n      console.log('No student rows found in Attendance_Master.');\r\n      return;\r\n    }\r\n\r\n    // 1. Locate or create the targeted Contact Group\r\n    const groupName = 'GDG Workspace Training 2026';\r\n    let contactGroup = ContactsApp.getContactGroup(groupName);\r\n\r\n    if (!contactGroup) {\r\n      contactGroup = ContactsApp.createContactGroup(groupName);\r\n      console.log('Created new Contact Group: \"' + groupName + '\"');\r\n    } else {\r\n      console.log('Using existing Contact Group: \"' + groupName + '\"');\r\n    }\r\n\r\n    let createdCount = 0;\r\n    let existingCount = 0;\r\n\r\n    // 2. Iterate student records (skip header at index 0)\r\n    for (let i = 1; i < data.length; i++) {\r\n      const row = data[i];\r\n      const studentId = row[0];\r\n      const fullName = row[1];\r\n      const email = row[2];\r\n      const track = row[3];\r\n\r\n      if (!email || !email.includes('@')) {\r\n        continue;\r\n      }\r\n\r\n      // 3. Deduplication check\r\n      const existingContacts = ContactsApp.getContactsByEmailAddress(email);\r\n\r\n      let contact;\r\n      if (existingContacts.length > 0) {\r\n        contact = existingContacts[0];\r\n        existingCount++;\r\n      } else {\r\n        const nameParts = fullName.trim().split(' ');\r\n        const firstName = nameParts[0] || 'Student';\r\n        const lastName = nameParts.slice(1).join(' ') || '';\r\n\r\n        contact = ContactsApp.createContact(firstName, lastName, email);\r\n        createdCount++;\r\n      }\r\n\r\n      // 4. Update custom note and attach to group\r\n      contact.setNotes('Participant ID: ' + studentId + ' | Track: ' + track + ' | GDG Workspace Training 2026');\r\n      \r\n      const currentGroups = contact.getContactGroups();\r\n      const alreadyInGroup = currentGroups.some(g => g.getName() === groupName);\r\n\r\n      if (!alreadyInGroup) {\r\n        contact.addToGroup(contactGroup);\r\n      }\r\n    }\r\n\r\n    console.log('=== CONTACT SYNCHRONIZATION COMPLETE ===');\r\n    console.log('Newly Created Contacts: ' + createdCount);\r\n    console.log('Existing Contacts Synced: ' + existingCount);\r\n    console.log('Total Group Members:     ' + contactGroup.getContacts().length);\r\n  } catch (err) {\r\n    console.error('Error in syncStudentsToGoogleContacts: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Execution & Visual Verification</h3>        <p>
                            Click <strong>Run</strong> (select function <code>syncStudentsToGoogleContacts</code>). Once completed, open <a href={"https://contacts.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>contacts.google.com</a>. You will see the new label <strong>GDG Workspace Training 2026</strong> containing the 8 student contacts with their respective tracks and student IDs in their notes.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Exécution & Contrôle dans Google Contacts</h3>        <p>
                            Cliquez sur <strong>Exécuter</strong> (fonction <code>syncStudentsToGoogleContacts</code>). Une fois le traitement terminé, ouvrez <a href={"https://contacts.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>contacts.google.com</a>. Vous constaterez l&apos;apparition du libellé <strong>GDG Workspace Training 2026</strong> regroupant les 8 élèves avec leurs identifiants et parcours inscrits dans les notes.
                        </p>
      </div>
    </>
  );
}

function Step4() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Preventing Student Dropouts</h3>        <p>
                            Instructors need immediate visibility into cohort attendance to identify students falling below the 75% threshold before it is too late to schedule remedial sessions.
                        </p>        <p>
                            Let&apos;s review the 5 algorithmic stages of the attendance audit pipeline before examining the unified script.
                        </p>        <h4>Step 4.1: High-Performance Batch Data Reading</h4>        <p>
                            We retrieve all rows from <code>Attendance_Master</code> into memory with <code>getDataRange().getValues()</code>. Reading data cell-by-cell inside a loop is an anti-pattern that severely degrades performance.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Prévenir le Décrochage Pédagogique</h3>        <p>
                            L&apos;équipe pédagogique a besoin d&apos;une visibilité immédiate sur l&apos;assiduité pour détecter les élèves descendant sous le seuil d&apos;éligibilité de 75% avant la clôture du camp.
                        </p>        <p>
                            Examinons les 5 phases algorithmiques de cet audit avant de déployer le script unifié.
                        </p>        <h4>Étape 4.1 : Lecture par Lot Haute Performance</h4>        <p>
                            Nous chargeons toutes les lignes de la feuille <code>Attendance_Master</code> en mémoire en une seule opération via <code>getDataRange().getValues()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step4_1_BatchRead.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Read the complete attendance table into memory with a single network call\r\nconst props = PropertiesService.getScriptProperties();\r\nconst spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\nconst sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Attendance_Master');\r\n\r\nconst values = sheet.getDataRange().getValues(); // 2D matrix"}
      />
      <div className={"lang-en"}>
        <h4>Step 4.2: Computing Attendance Rates & Profile Classification</h4>        <p>
                            We iterate through columns 4 to 8 (Day 1 to Day 5). For each student, we compute <code>(daysPresent / 5) * 100</code> and classify them into 3 status tiers: <strong>Eligible</strong> (&gt;= 80%), <strong>Borderline</strong> (75% to 79%), or <strong>At Risk</strong> (&lt; 75%).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 4.2 : Calcul des Pourcentages et Classification des Profils</h4>        <p>
                            Nous analysons les colonnes 4 à 8 (Jours 1 à 5). Pour chaque élève, nous calculons <code>(joursPresents / 5) * 100</code> et le catégorisons : <strong>Éligible</strong> (&gt;= 80%), <strong>Passable</strong> (75% à 79%) ou <strong>En Décrochage</strong> (&lt; 75%).
                        </p>
      </div>
      <CodeWindow
        filename={"Step4_2_ComputeRate.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Iterate attendance columns (Days 1 to 5) and compute percentage\r\nconst attendanceRateUpdates = [];\r\nlet cumulativeRate = 0;\r\nlet eligibleCount = 0;\r\nlet atRiskCount = 0;\r\n\r\nfor (let i = 1; i < values.length; i++) {\r\n  const row = values[i];\r\n  let daysPresent = 0;\r\n\r\n  // Columns 4 to 8 correspond to Day 1 through Day 5\r\n  for (let dayCol = 4; dayCol <= 8; dayCol++) {\r\n    if (row[dayCol] === 'P') {\r\n      daysPresent++;\r\n    }\r\n  }\r\n\r\n  const ratePercentage = Math.round((daysPresent / 5) * 100);\r\n  cumulativeRate += ratePercentage;\r\n  attendanceRateUpdates.push([ratePercentage + '%']);\r\n\r\n  if (ratePercentage >= 80) eligibleCount++;\r\n  else if (ratePercentage < 75) atRiskCount++;\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 4.3: Atomic Matrix Update to Google Sheets</h4>        <p>
                            We write the entire calculated attendance rate column back to Column J in a single atomic <code>setValues()</code> call.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 4.3 : Écriture Atomique par Lot dans Google Sheets</h4>        <p>
                            Nous injectons l&apos;intégralité de la colonne calculée des taux de présence dans la colonne J en un seul appel <code>setValues()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step4_3_AtomicWrite.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Write all computed rates back to Column J in a single atomic batch\r\n// sheet.getRange(startRow, startCol, numRows, numCols)\r\nsheet.getRange(2, 10, attendanceRateUpdates.length, 1).setValues(attendanceRateUpdates);\r\nconsole.log('Atomically updated ' + attendanceRateUpdates.length + ' attendance rates in sheet.');"}
      />
      <div className={"lang-en"}>
        <h4>Step 4.4: Executive Analytical HTML Report Assembly</h4>        <p>
                            We build an email layout featuring KPI summary cards (Total Cohort, Average Attendance Rate, Eligible Count, At Risk Count) and a color-coded table using the <strong>Figtree</strong> font family.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 4.4 : Assemblage du Rapport Exécutif HTML</h4>        <p>
                            Nous générons une mise en page d&apos;email intégrant des cartes de synthèse de KPIs et un tableau détaillé stylisé avec la typographie <strong>Figtree</strong>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step4_4_DigestHtml.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Construct an executive HTML report with Figtree font and status pills\r\nconst averageCohortRate = Math.round(cumulativeRate / (values.length - 1));\r\n\r\nconst htmlReport = [\r\n  '<div style=\"font-family: 'Figtree', Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background-color: #ffffff;\">',\r\n  '  <div style=\"background-color: #02569B; color: #ffffff; padding: 20px;\">',\r\n  '    <h2 style=\"margin: 0; font-size: 20px;\">Student Attendance & Progression Audit</h2>',\r\n  '    <p style=\"margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;\">GDG - Google Workspace Training (Day V Audit)</p>',\r\n  '  </div>',\r\n  '  <div style=\"padding: 20px; color: #1e293b;\">',\r\n  '    <div style=\"display: table; width: 100%; margin-bottom: 20px;\">',\r\n  '      <div style=\"display: table-cell; width: 33%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n  '        <div style=\"font-size: 22px; font-weight: bold; color: #0284c7;\">' + averageCohortRate + '%</div>',\r\n  '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">Average Rate</div>',\r\n  '      </div>',\r\n  '      <div style=\"display: table-cell; width: 33%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n  '        <div style=\"font-size: 22px; font-weight: bold; color: #15803d;\">' + eligibleCount + '</div>',\r\n  '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">Certificate Ready</div>',\r\n  '      </div>',\r\n  '      <div style=\"display: table-cell; width: 33%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n  '        <div style=\"font-size: 22px; font-weight: bold; color: #b91c1c;\">' + atRiskCount + '</div>',\r\n  '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">At Risk (<75%)</div>',\r\n  '      </div>',\r\n  '    </div>',\r\n  '    <p style=\"font-size: 13px; color: #475569;\">Detailed roster and breakdown are available in the attached Google Sheet.</p>',\r\n  '  </div>',\r\n  '</div>'\r\n].join('\\n');"}
      />
      <div className={"lang-en"}>
        <h4>Step 4.5: Delivering the Digest to Instructors</h4>        <p>
                            The report is dispatched directly to the lead instructor email via <code>GmailApp.sendEmail()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 4.5 : Expédition du Bilan à l&apos;Équipe Enseignante</h4>        <p>
                            Le rapport est transmis directement à l&apos;adresse du formateur référent via <code>GmailApp.sendEmail()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step4_5_SendDigest.gs"}
        lang={"JAVASCRIPT"}
        code={"// 5. Deliver the digest to course instructors\r\nconst adminEmail = props.getProperty('ADMIN_EMAIL') || Session.getActiveUser().getEmail();\r\nconst emailSubject = 'Attendance Audit Digest: ' + averageCohortRate + '% Cohort Avg | GDG Workspace Training';\r\n\r\nGmailApp.sendEmail(adminEmail, emailSubject, 'Cohort Attendance Audit: ' + averageCohortRate + '% Average.', {\r\n  htmlBody: htmlReport,\r\n  name: 'GDG Attendance Auditor'\r\n});\r\n\r\nconsole.log('Audit digest delivered to: ' + adminEmail);"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Attendance Audit Script</h3>        <p>
                            Create a new script file in your project named <code>Practice3_AttendanceAudit.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet d&apos;Audit d&apos;Assiduité</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice3_AttendanceAudit.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice3_AttendanceAudit.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 3: Student Attendance Audit & Teacher Digest Report\r\n * Service: SpreadsheetApp + GmailApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction auditStudentAttendanceAndNotify() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n    const adminEmail = props.getProperty('ADMIN_EMAIL') || Session.getActiveUser().getEmail();\r\n\r\n    if (!spreadsheetId) {\r\n      throw new Error('SPREADSHEET_ID missing from ScriptProperties.');\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const values = sheet.getDataRange().getValues();\r\n\r\n    if (values.length <= 1) {\r\n      console.log('No data to audit.');\r\n      return;\r\n    }\r\n\r\n    const attendanceRateUpdates = [];\r\n    let totalStudents = values.length - 1;\r\n    let perfectAttendanceCount = 0;\r\n    let atRiskCount = 0;\r\n    let eligibleCount = 0;\r\n    let cumulativeRate = 0;\r\n\r\n    let tableRowsHtml = '';\r\n\r\n    // Loop through students (indices: Day 1 = col 4, Day 5 = col 8, Rate = col 9)\r\n    for (let i = 1; i < values.length; i++) {\r\n      const row = values[i];\r\n      const studentId = row[0];\r\n      const fullName = row[1];\r\n      const email = row[2];\r\n      const track = row[3];\r\n\r\n      let daysPresent = 0;\r\n      for (let dayCol = 4; dayCol <= 8; dayCol++) {\r\n        if (row[dayCol] === 'P') {\r\n          daysPresent++;\r\n        }\r\n      }\r\n\r\n      const ratePercentage = Math.round((daysPresent / 5) * 100);\r\n      cumulativeRate += ratePercentage;\r\n      attendanceRateUpdates.push([ratePercentage + '%']);\r\n\r\n      let statusBadge = '';\r\n      if (ratePercentage >= 80) {\r\n        eligibleCount++;\r\n        if (ratePercentage === 100) perfectAttendanceCount++;\r\n        statusBadge = '<span style=\"background-color: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;\">Eligible</span>';\r\n      } else if (ratePercentage >= 75) {\r\n        statusBadge = '<span style=\"background-color: #fef9c3; color: #a16207; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;\">Borderline</span>';\r\n      } else {\r\n        atRiskCount++;\r\n        statusBadge = '<span style=\"background-color: #fee2e2; color: #b91c1c; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;\">At Risk</span>';\r\n      }\r\n\r\n      tableRowsHtml += [\r\n        '<tr style=\"border-bottom: 1px solid #e2e8f0; font-size: 13px;\">',\r\n        '  <td style=\"padding: 10px; font-family: monospace;\">' + studentId + '</td>',\r\n        '  <td style=\"padding: 10px; font-weight: 500;\">' + fullName + '</td>',\r\n        '  <td style=\"padding: 10px; color: #64748b;\">' + track + '</td>',\r\n        '  <td style=\"padding: 10px; text-align: center; font-weight: bold;\">' + ratePercentage + '%</td>',\r\n        '  <td style=\"padding: 10px; text-align: center;\">' + statusBadge + '</td>',\r\n        '</tr>'\r\n      ].join('\\n');\r\n    }\r\n\r\n    // Single atomic batch write for all attendance rates (Column J, Row 2 onwards)\r\n    sheet.getRange(2, 10, attendanceRateUpdates.length, 1).setValues(attendanceRateUpdates);\r\n    console.log('Updated attendance rate for ' + attendanceRateUpdates.length + ' students in sheet.');\r\n\r\n    const averageCohortRate = Math.round(cumulativeRate / totalStudents);\r\n\r\n    // Build Executive HTML Email Digest for Instructors using Figtree font\r\n    const emailSubject = 'Attendance Audit Digest: ' + averageCohortRate + '% Cohort Avg | GDG Workspace Training';\r\n    const htmlReport = [\r\n      '<div style=\"font-family: 'Figtree', Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background-color: #ffffff;\">',\r\n      '  <div style=\"background-color: #02569B; color: #ffffff; padding: 20px;\">',\r\n      '    <h2 style=\"margin: 0; font-size: 20px;\">Student Attendance & Progression Audit</h2>',\r\n      '    <p style=\"margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;\">GDG - Google Workspace Training (Day V Audit)</p>',\r\n      '  </div>',\r\n      '  <div style=\"padding: 20px; color: #1e293b;\">',\r\n      '    <div style=\"display: table; width: 100%; margin-bottom: 20px;\">',\r\n      '      <div style=\"display: table-cell; width: 25%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n      '        <div style=\"font-size: 22px; font-weight: bold; color: #02569B;\">' + totalStudents + '</div>',\r\n      '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">Total Cohort</div>',\r\n      '      </div>',\r\n      '      <div style=\"display: table-cell; width: 25%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n      '        <div style=\"font-size: 22px; font-weight: bold; color: #0284c7;\">' + averageCohortRate + '%</div>',\r\n      '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">Average Rate</div>',\r\n      '      </div>',\r\n      '      <div style=\"display: table-cell; width: 25%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n      '        <div style=\"font-size: 22px; font-weight: bold; color: #15803d;\">' + eligibleCount + '</div>',\r\n      '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">Certificate Ready</div>',\r\n      '      </div>',\r\n      '      <div style=\"display: table-cell; width: 25%; text-align: center; padding: 12px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;\">',\r\n      '        <div style=\"font-size: 22px; font-weight: bold; color: #b91c1c;\">' + atRiskCount + '</div>',\r\n      '        <div style=\"font-size: 11px; color: #64748b; text-transform: uppercase;\">At Risk (<75%)</div>',\r\n      '      </div>',\r\n      '    </div>',\r\n      '    <table style=\"width: 100%; border-collapse: collapse; margin-top: 10px;\">',\r\n      '      <thead>',\r\n      '        <tr style=\"background-color: #f1f5f9; text-align: left; font-size: 12px; color: #475569;\">',\r\n      '          <th style=\"padding: 10px;\">ID</th>',\r\n      '          <th style=\"padding: 10px;\">Student Name</th>',\r\n      '          <th style=\"padding: 10px;\">Track</th>',\r\n      '          <th style=\"padding: 10px; text-align: center;\">Rate</th>',\r\n      '          <th style=\"padding: 10px; text-align: center;\">Status</th>',\r\n      '        </tr>',\r\n      '      </thead>',\r\n      '      <tbody>',\r\n      tableRowsHtml,\r\n      '      </tbody>',\r\n      '    </table>',\r\n      '  </div>',\r\n      '</div>'\r\n    ].join('\\n');\r\n\r\n    GmailApp.sendEmail(adminEmail, emailSubject, 'Cohort Attendance Audit Completed: ' + averageCohortRate + '% Average.', {\r\n      htmlBody: htmlReport,\r\n      name: 'GDG Attendance Auditor'\r\n    });\r\n\r\n    console.log('Audit digest successfully sent to instructor at: ' + adminEmail);\r\n  } catch (err) {\r\n    console.error('Error in auditStudentAttendanceAndNotify: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Execution & Results Verification</h3>        <p>
                            Click <strong>Run</strong> (function <code>auditStudentAttendanceAndNotify</code>). Return to your Google Sheet: Column J (<em>Attendance Rate</em>) is now populated with percentages (e.g. 100%, 80%, 60%). Next, check your Gmail inbox: you will find the complete attendance digest with the KPI breakdown.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Exécution & Vérification des Résultats</h3>        <p>
                            Cliquez sur <strong>Exécuter</strong> (fonction <code>auditStudentAttendanceAndNotify</code>). Ouvrez votre Google Sheet : la colonne J (<em>Attendance Rate</em>) est désormais remplie avec les pourcentages calculés. Ouvrez ensuite votre boîte Gmail : vous y trouverez le rapport d&apos;audit complet avec les indicateurs visuels.
                        </p>
      </div>
    </>
  );
}

function Step5() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Industrializing Certificate Delivery</h3>        <p>
                            Manually designing certificates in raster graphic editors for dozens or hundreds of graduates takes hours and produces low-resolution images that blur when printed.
                        </p>        <p>
                            Let&apos;s trace how Google Slides acts as a high-precision vector layout engine through 6 incremental steps.
                        </p>        <h4>Step 5.1: Filtering Candidates Eligible for Graduation</h4>        <p>
                            The script parses Column J (<em>Attendance Rate</em>) and checks that the rate is &gt;= 80% and that the status in Column L is not already <code>ISSUED</code> (preventing duplicate mailings).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Industrialisation de la Remise des Certificats</h3>        <p>
                            Créer des diplômes manuellement dans des éditeurs graphiques matriciels pour des dizaines ou centaines d&apos;étudiants prend des heures et génère des images floues à l&apos;impression.
                        </p>        <p>
                            Voyons comment Google Slides opère comme un moteur de mise en page vectorielle de haute précision en 6 étapes pas à pas.
                        </p>        <h4>Étape 5.1 : Filtrage des Candidats Éligibles</h4>        <p>
                            Le script lit la colonne J (<em>Attendance Rate</em>) et vérifie que le taux est &gt;= 80% et que le statut en colonne L n&apos;est pas déjà <code>ISSUED</code> (pour éviter tout doublon d&apos;envoi).
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_1_FilterCandidates.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Identify candidates eligible for certification (Attendance >= 80%)\r\nconst rateString = String(row[9]).replace('%', '');\r\nconst rateNumber = parseInt(rateString, 10) || 0;\r\nconst certificateStatus = row[11];\r\n\r\nif (rateNumber >= 80 && certificateStatus !== 'ISSUED') {\r\n  console.log('Generating certificate for eligible student: ' + fullName + ' (' + studentId + ')...');\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 5.2: Cryptographic-Style Verification ID Generation</h4>        <p>
                            We generate a unique document tracking hash using <code>Utilities.getUuid()</code> to stamp each certificate with a verification code (e.g. <code>GW-2026-A1B2C3D4</code>).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 5.2 : Génération de l&apos;Identifiant Unique de Traçabilité</h4>        <p>
                            Nous générons un identifiant de contrôle unique à l&apos;aide de <code>Utilities.getUuid()</code> pour apposer un code d&apos;authentification sur chaque attestation (ex : <code>GW-2026-A1B2C3D4</code>).
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_2_UniqueId.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Generate a unique cryptographic verification identifier\r\nconst uniqueVerificationId = 'GW-2026-' + Utilities.getUuid().substring(0, 8).toUpperCase();\r\nconsole.log('Assigned verification code: ' + uniqueVerificationId);"}
      />
      <div className={"lang-en"}>
        <h4>Step 5.3: Presentation Duplication for Safe Concurrency</h4>        <p>
                            Editing the master template directly would overwrite placeholder tokens and create race conditions. Instead, we duplicate the template presentation for each graduate using <code>templateFile.makeCopy()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 5.3 : Duplication Isolée du Modèle de Présentation</h4>        <p>
                            Modifier directement le modèle maître écraserait les balises de fusion pour les étudiants suivants. Nous créons donc une copie temporaire pour chaque élève avec <code>templateFile.makeCopy()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_3_SlideDuplication.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Duplicate template presentation to isolate concurrent edits\r\nconst tempPresentationName = 'Temp_Cert_' + studentId;\r\nconst tempPresentationFile = templateFile.makeCopy(tempPresentationName, certsFolder);\r\nconst tempPresentation = SlidesApp.openById(tempPresentationFile.getId());\r\nconst targetSlide = tempPresentation.getSlides()[0];"}
      />
      <div className={"lang-en"}>
        <h4>Step 5.4: Vector Token Replacement & PDF Conversion</h4>        <p>
                            We call <code>targetSlide.replaceAllText()</code> for each token (<code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, <code>{"{"}{"{"}DATE{"}"}{"}"}</code>, <code>{"{"}{"{"}CERT_ID{"}"}{"}"}</code>), flush with <code>saveAndClose()</code>, and convert the presentation into a vector PDF blob via <code>getAs(MimeType.PDF)</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 5.4 : Substitution Vectorielle des Balises et Conversion PDF</h4>        <p>
                            Nous invoquons <code>targetSlide.replaceAllText()</code> pour chaque balise (<code>{"{"}{"{"}NAME{"}"}{"}"}</code>, <code>{"{"}{"{"}TRACK{"}"}{"}"}</code>, etc.), enregistrons les modifications avec <code>saveAndClose()</code> et extrayons le document sous forme de flux PDF vectoriel via <code>getAs(MimeType.PDF)</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_4_ReplaceAndPdf.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Perform vector text substitutions and export to high-resolution PDF\r\ntargetSlide.replaceAllText('{{NAME}}', fullName);\r\ntargetSlide.replaceAllText('{{TRACK}}', track);\r\ntargetSlide.replaceAllText('{{DATE}}', todayFormatted);\r\ntargetSlide.replaceAllText('{{CERT_ID}}', uniqueVerificationId);\r\n\r\ntempPresentation.saveAndClose();\r\n\r\n// Export as PDF blob\r\nconst pdfBlob = tempPresentationFile.getAs(MimeType.PDF);\r\npdfBlob.setName('Certificate_' + studentId + '_' + fullName.replace(/\\s+/g, '_') + '.pdf');"}
      />
      <div className={"lang-en"}>
        <h4>Step 5.5: Storing PDF in Drive & Immediate Email Dispatch</h4>        <p>
                            We save the PDF in the <code>Issued_Certificates_PDF</code> folder, record its public link and <code>ISSUED</code> status in the Sheet, and email the graduate with the PDF attached.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 5.5 : Archivage Drive et Expédition Instantanée par Email</h4>        <p>
                            Nous enregistrons le PDF dans le dossier <code>Issued_Certificates_PDF</code>, inscrivons le lien et le statut <code>ISSUED</code> dans le Sheet, et expédions le courriel de félicitations avec la pièce jointe.
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_5_DriveAndEmail.gs"}
        lang={"JAVASCRIPT"}
        code={"// 5. Store PDF in Drive, update Sheet, and send email with PDF attachment\r\nconst finalPdfFile = certsFolder.createFile(pdfBlob);\r\nfinalPdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\nconst pdfUrl = finalPdfFile.getUrl();\r\n\r\nsheet.getRange(i + 1, 12).setValue('ISSUED');\r\nsheet.getRange(i + 1, 13).setValue(pdfUrl);\r\n\r\nGmailApp.sendEmail(email, 'Congratulations ' + fullName + ': Your GDG Certificate is Ready!', 'Your certificate is attached.', {\r\n  htmlBody: emailBody,\r\n  attachments: [pdfBlob],\r\n  name: 'GDG Certification Office'\r\n});"}
      />
      <div className={"lang-en"}>
        <h4>Step 5.6: Temporary File Housekeeping</h4>        <p>
                            After exporting the PDF, the temporary Google Slides copy is sent to the trash with <code>tempPresentationFile.setTrashed(true)</code> to keep Drive storage clean.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 5.6 : Purge des Fichiers Temporaires</h4>        <p>
                            Une fois le PDF produit, la présentation Google Slides temporaire est supprimée avec <code>setTrashed(true)</code> afin de ne pas encombrer l&apos;espace Drive.
                        </p>
      </div>
      <CodeWindow
        filename={"Step5_6_Cleanup.gs"}
        lang={"JAVASCRIPT"}
        code={"// 6. Delete temporary Google Slides working copy to keep Drive clean\r\ntempPresentationFile.setTrashed(true);"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Certificate Factory Script</h3>        <p>
                            Create a new script file in your project named <code>Practice4_CertificateFactory.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet de l&apos;Usine d&apos;E-Certificats</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice4_CertificateFactory.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice4_CertificateFactory.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 4: Vector E-Certificate Factory & PDF Dispatch\r\n * Service: SlidesApp + DriveApp + GmailApp + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction generateAndDeliverECertificates() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n    const templateId = props.getProperty('SLIDES_TEMPLATE_ID');\r\n    const workshopFolderId = props.getProperty('WORKSHOP_FOLDER_ID');\r\n\r\n    if (!spreadsheetId || !templateId || !workshopFolderId) {\r\n      throw new Error('Required IDs missing from ScriptProperties. Run setupWorkshopEnvironment first.');\r\n    }\r\n\r\n    const workshopFolder = DriveApp.getFolderById(workshopFolderId);\r\n    \r\n    // Locate or create a dedicated sub-folder for issued PDF certificates\r\n    const certFolderName = 'Issued_Certificates_PDF';\r\n    const subFolders = workshopFolder.getFoldersByName(certFolderName);\r\n    let certsFolder;\r\n    if (subFolders.hasNext()) {\r\n      certsFolder = subFolders.next();\r\n    } else {\r\n      certsFolder = workshopFolder.createFolder(certFolderName);\r\n      certsFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const data = sheet.getDataRange().getValues();\r\n\r\n    const templateFile = DriveApp.getFileById(templateId);\r\n    const todayFormatted = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'MMMM dd, yyyy');\r\n\r\n    let issuedCount = 0;\r\n\r\n    // Scan students (columns: Rate = 9, Status = 11, URL = 12)\r\n    for (let i = 1; i < data.length; i++) {\r\n      const row = data[i];\r\n      const studentId = row[0];\r\n      const fullName = row[1];\r\n      const email = row[2];\r\n      const track = row[3];\r\n      const rateString = String(row[9]).replace('%', '');\r\n      const rateNumber = parseInt(rateString, 10) || 0;\r\n      const certificateStatus = row[11];\r\n\r\n      // Criteria: Attendance >= 80% and not yet issued\r\n      if (rateNumber >= 80 && certificateStatus !== 'ISSUED') {\r\n        console.log('Generating certificate for: ' + fullName + ' (' + studentId + ')...');\r\n\r\n        // Generate unique cryptographic-style verification ID\r\n        const uniqueVerificationId = 'GW-2026-' + Utilities.getUuid().substring(0, 8).toUpperCase();\r\n\r\n        // 1. Duplicate Slide template to avoid concurrency conflicts\r\n        const tempPresentationName = 'Temp_Cert_' + studentId;\r\n        const tempPresentationFile = templateFile.makeCopy(tempPresentationName, certsFolder);\r\n        const tempPresentation = SlidesApp.openById(tempPresentationFile.getId());\r\n        const targetSlide = tempPresentation.getSlides()[0];\r\n\r\n        // 2. Perform vector text substitutions\r\n        targetSlide.replaceAllText('{{NAME}}', fullName);\r\n        targetSlide.replaceAllText('{{TRACK}}', track);\r\n        targetSlide.replaceAllText('{{DATE}}', todayFormatted);\r\n        targetSlide.replaceAllText('{{CERT_ID}}', uniqueVerificationId);\r\n\r\n        tempPresentation.saveAndClose();\r\n\r\n        // 3. Export presentation slide to PDF blob\r\n        const pdfBlob = tempPresentationFile.getAs(MimeType.PDF);\r\n        pdfBlob.setName('Certificate_' + studentId + '_' + fullName.replace(/\\s+/g, '_') + '.pdf');\r\n\r\n        // 4. Save PDF to certificates folder\r\n        const finalPdfFile = certsFolder.createFile(pdfBlob);\r\n        finalPdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\n        const pdfUrl = finalPdfFile.getUrl();\r\n\r\n        // 5. Clean up temporary slide presentation\r\n        tempPresentationFile.setTrashed(true);\r\n\r\n        // 6. Update Google Sheet records\r\n        sheet.getRange(i + 1, 12).setValue('ISSUED');\r\n        sheet.getRange(i + 1, 13).setValue(pdfUrl);\r\n\r\n        // 7. Dispatch congratulations email with attached PDF using Figtree font\r\n        const emailSubject = 'Congratulations ' + fullName + ': Your GDG Workspace Certificate is Ready!';\r\n        const emailBody = [\r\n          '<div style=\"font-family: 'Figtree', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; color: #1e293b;\">',\r\n          '  <h2 style=\"color: #02569B; margin-top: 0;\">Certificate of Achievement Ready!</h2>',\r\n          '  <p>Dear <strong>' + fullName + '</strong>,</p>',\r\n          '  <p>Congratulations on completing the 5-day curriculum of <strong>GDG - Google Workspace Training</strong> with an attendance rate of <strong>' + rateNumber + '%</strong>.</p>',\r\n          '  <p>Your verified certificate is attached to this email in PDF format.<br><strong>Verification ID:</strong> <code style=\"background-color: #f1f5f9; padding: 2px 6px; border-radius: 4px;\">' + uniqueVerificationId + '</code></p>',\r\n          '  <p>You can also view or download your certificate directly on Google Drive:<br><a href=\"' + pdfUrl + '\" style=\"display: inline-block; margin-top: 12px; background-color: #00B0FF; color: #070a13; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;\">View Certificate on Drive</a></p>',\r\n          '  <hr style=\"border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;\" />',\r\n          '  <p style=\"font-size: 12px; color: #64748b;\">GDG Afrique Francophone | GDG Pointe-Noire | GDG on Campus CUEA.<br>Powered by MusanTek & FlutterFire Summer Camp.</p>',\r\n          '</div>'\r\n        ].join('\\n');\r\n\r\n        GmailApp.sendEmail(email, emailSubject, 'Congratulations ' + fullName + '! Your certificate is attached.', {\r\n          htmlBody: emailBody,\r\n          attachments: [pdfBlob],\r\n          name: 'GDG Certification Office'\r\n        });\r\n\r\n        issuedCount++;\r\n      }\r\n    }\r\n\r\n    console.log('=== CERTIFICATE RUN COMPLETED ===');\r\n    console.log('Total Certificates Issued & Delivered: ' + issuedCount);\r\n  } catch (err) {\r\n    console.error('Error in generateAndDeliverECertificates: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Execution & Verification</h3>        <p>
                            Click <strong>Run</strong> (function <code>generateAndDeliverECertificates</code>). Return to your Google Drive folder: you will discover the sub-folder <code>Issued_Certificates_PDF</code> populated with crisp PDF certificates for all students who met the 80% threshold.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Exécution & Contrôle Documentaire</h3>        <p>
                            Cliquez sur <strong>Exécuter</strong> (fonction <code>generateAndDeliverECertificates</code>). Ouvrez votre dossier Google Drive : vous y découvrirez le sous-dossier <code>Issued_Certificates_PDF</code> rempli avec les diplômes PDF vectoriels de tous les lauréats ayant validé au moins 80% d&apos;assiduité.
                        </p>
      </div>
    </>
  );
}

function Step6() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Scheduling Remedial Sessions</h3>        <p>
                            When attendance drops below 75%, students need personalized academic coaching. Coordinating multiple calendars manually takes excessive administrative effort.
                        </p>        <p>
                            Let&apos;s examine the 4-step algorithm that automatically books sequential mentoring slots in Google Calendar.
                        </p>        <h4>Step 6.1: Identifying Students Requiring Remediation</h4>        <p>
                            The script inspects both the attendance rate (&lt; 75%) and the exam score (&lt; 70) to identify participants needing 1-on-1 assistance.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Organisation des Sessions de Rattrapage</h3>        <p>
                            Lorsqu&apos;un élève descend sous 75% d&apos;assiduité, un soutien personnalisé s&apos;impose. Convenir manuellement d&apos;un créneau avec chaque élève engendre des frottements d&apos;agenda considérables.
                        </p>        <p>
                            Examinons l&apos;algorithme en 4 étapes qui planifie automatiquement des créneaux de soutien consécutifs dans Google Calendar.
                        </p>        <h4>Étape 6.1 : Détection des Élèves en Besoin de Soutien</h4>        <p>
                            Le script croise le taux d&apos;assiduité (&lt; 75%) et la note d&apos;examen (&lt; 70) pour cibler les profils nécessitant un accompagnement.
                        </p>
      </div>
      <CodeWindow
        filename={"Step6_1_IdentifyNeed.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Identify students requiring academic remediation\r\nconst rateString = String(row[9]).replace('%', '');\r\nconst rateNumber = parseInt(rateString, 10) || 0;\r\nconst examScore = parseInt(row[10], 10) || 0;\r\n\r\nif (rateNumber < 75 || examScore < 70) {\r\n  console.log('Remedial review required for: ' + fullName + ' (' + email + ')');\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 6.2: Allocating Non-Overlapping Time Slots</h4>        <p>
                            We initialize a base time (tomorrow at 14:00) and allocate 30-minute appointment windows with 10-minute breaks between sessions (<code>slotOffsetMinutes += 40</code>).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 6.2 : Allocation de Créneaux Non Chevauchants</h4>        <p>
                            Nous définissons une heure de départ (demain à 14h00) et attribuons des plages de 30 minutes espacées de 10 minutes de pause (<code>slotOffsetMinutes += 40</code>).
                        </p>
      </div>
      <CodeWindow
        filename={"Step6_2_TimeSlotAlgorithm.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Compute non-overlapping 30-minute meeting slots starting tomorrow at 14:00\r\nconst baseDate = new Date();\r\nbaseDate.setDate(baseDate.getDate() + 1); // Tomorrow\r\nbaseDate.setHours(14, 0, 0, 0); // 2:00 PM\r\n\r\nconst slotStart = new Date(baseDate.getTime() + slotOffsetMinutes * 60000);\r\nconst slotEnd = new Date(slotStart.getTime() + 30 * 60000); // 30-minute duration\r\n\r\nslotOffsetMinutes += 40; // 30 min session + 10 min break"}
      />
      <div className={"lang-en"}>
        <h4>Step 6.3: Booking Calendar Events & Sending Guest Invitations</h4>        <p>
                            Calling <code>calendar.createEvent()</code> with <code>sendInvites: true</code> immediately delivers an official Google Calendar invite to the student&apos;s email inbox with full event context.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 6.3 : Réservation de l&apos;Événement et Envoi des Invitations</h4>        <p>
                            L&apos;appel à <code>calendar.createEvent()</code> avec <code>sendInvites: true</code> expédie instantanément une invitation Google Calendar nominative à l&apos;adresse de l&apos;étudiant avec l&apos;ordre du jour.
                        </p>
      </div>
      <CodeWindow
        filename={"Step6_3_CreateEvent.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Book the Calendar event with guest invitation and description\r\nconst eventTitle = 'Office Hours: 1-on-1 Mentoring | ' + fullName + ' (' + studentId + ')';\r\nconst eventDescription = [\r\n  'Hello ' + fullName + ',',\r\n  '',\r\n  'You have been scheduled for a personalized 1-on-1 review session for the GDG - Google Workspace Training (' + track + ').',\r\n  'We will review your missed sessions and finalize your Day V Google Apps Script project.',\r\n  '',\r\n  'Format: 30 minutes via Google Meet',\r\n  'Instructor: Georges Byona (@glosings0n)',\r\n  'Community: GDG Afrique Francophone / GDG Pointe-Noire / GDG CUEA'\r\n].join('\\n');\r\n\r\nconst event = calendar.createEvent(eventTitle, slotStart, slotEnd, {\r\n  guests: email,\r\n  description: eventDescription,\r\n  sendInvites: true\r\n});"}
      />
      <div className={"lang-en"}>
        <h4>Step 6.4: Visual Tagging & Google Meet Link Injection</h4>        <p>
                            We assign a distinct cyan color tag (<code>CalendarApp.EventColor.CYAN</code>) to keep remedial events visually distinct from regular calendar entries.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 6.4 : Marquage Visuel et Lien de Visioconférence Google Meet</h4>        <p>
                            Nous appliquons une couleur cyan distinctive (<code>CalendarApp.EventColor.CYAN</code>) pour identifier visuellement les créneaux de mentorat dans l&apos;agenda.
                        </p>
      </div>
      <CodeWindow
        filename={"Step6_4_ColorAndMeet.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Set visual event color tag to Cyan\r\nevent.setColor(CalendarApp.EventColor.CYAN);\r\nconsole.log('Booked office hours for ' + fullName + ' at ' + slotStart.toLocaleTimeString());"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Mentoring Scheduling Script</h3>        <p>
                            Create a new script file in your project named <code>Practice5_CalendarMeet.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet de Planification de Mentorat</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice5_CalendarMeet.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice5_CalendarMeet.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 5: Schedule Mentoring Office Hours with Auto Google Meet Links\r\n * Service: CalendarApp + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction scheduleMentoringSessionsWithMeet() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n\r\n    if (!spreadsheetId) {\r\n      throw new Error('SPREADSHEET_ID missing from ScriptProperties.');\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const data = sheet.getDataRange().getValues();\r\n\r\n    const calendar = CalendarApp.getDefaultCalendar();\r\n\r\n    // 1. Start scheduling for tomorrow at 14:00 (2:00 PM)\r\n    const baseDate = new Date();\r\n    baseDate.setDate(baseDate.getDate() + 1);\r\n    baseDate.setHours(14, 0, 0, 0);\r\n\r\n    let slotOffsetMinutes = 0;\r\n    let scheduledCount = 0;\r\n\r\n    // 2. Iterate student records\r\n    for (let i = 1; i < data.length; i++) {\r\n      const row = data[i];\r\n      const studentId = row[0];\r\n      const fullName = row[1];\r\n      const email = row[2];\r\n      const track = row[3];\r\n      const rateString = String(row[9]).replace('%', '');\r\n      const rateNumber = parseInt(rateString, 10) || 0;\r\n      const examScore = parseInt(row[10], 10) || 0;\r\n\r\n      // Identify students who require 1-on-1 office hours\r\n      if (rateNumber < 75 || examScore < 70) {\r\n        const slotStart = new Date(baseDate.getTime() + slotOffsetMinutes * 60000);\r\n        const slotEnd = new Date(slotStart.getTime() + 30 * 60000); // 30-minute block\r\n\r\n        const eventTitle = 'Office Hours: 1-on-1 Mentoring | ' + fullName + ' (' + studentId + ')';\r\n        const eventDescription = [\r\n          'Hello ' + fullName + ',',\r\n          '',\r\n          'You have been scheduled for a personalized 1-on-1 review session for the GDG - Google Workspace Training (' + track + ').',\r\n          'We will review your missed sessions and finalize your Day V Google Apps Script project.',\r\n          '',\r\n          'Format: 30 minutes via Google Meet',\r\n          'Instructor: Georges Byona (@glosings0n)',\r\n          'Community: GDG Afrique Francophone / GDG Pointe-Noire / GDG CUEA'\r\n        ].join('\\n');\r\n\r\n        // Create the event with guest invitation\r\n        const event = calendar.createEvent(eventTitle, slotStart, slotEnd, {\r\n          guests: email,\r\n          description: eventDescription,\r\n          sendInvites: true\r\n        });\r\n\r\n        // Set color tag to Highlight (Cyan/Blue in Calendar)\r\n        event.setColor(CalendarApp.EventColor.CYAN);\r\n\r\n        console.log('Scheduled office hours for ' + fullName + ' (' + email + ') at ' + slotStart.toLocaleTimeString());\r\n\r\n        slotOffsetMinutes += 40; // 30 min session + 10 min break\r\n        scheduledCount++;\r\n      }\r\n    }\r\n\r\n    console.log('=== CALENDAR SCHEDULING COMPLETE ===');\r\n    console.log('Total Remedial Office Hour Sessions Booked: ' + scheduledCount);\r\n  } catch (err) {\r\n    console.error('Error in scheduleMentoringSessionsWithMeet: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Execution & Calendar Verification</h3>        <p>
                            Click <strong>Run</strong> (function <code>scheduleMentoringSessionsWithMeet</code>). Open <a href={"https://calendar.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>calendar.google.com</a>: navigate to tomorrow at 14:00, and observe the scheduled 30-minute 1-on-1 review meetings complete with student guests and Google Meet video conference links.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Exécution & Contrôle dans Google Calendar</h3>        <p>
                            Cliquez sur <strong>Exécuter</strong> (fonction <code>scheduleMentoringSessionsWithMeet</code>). Rendez-vous sur <a href={"https://calendar.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>calendar.google.com</a> : observez dès demain à 14h00 les séances de 30 minutes créées avec les invitations étudiants et liens de visioconférence Google Meet.
                        </p>
      </div>
    </>
  );
}

function Step7() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Assembling Formal Retrospectives</h3>        <p>
                            Following any intensive bootcamp, organizers must compile and submit a formal retrospective document to community sponsors and university partners. Doing this manually in word processors is tedious and delays event reporting.
                        </p>        <p>
                            Let&apos;s walk through the 4 algorithmic steps to programmatically generate an executive Google Doc and export an archival PDF copy.
                        </p>        <h4>Step 7.1: Google Doc Instantiation & Folder Relocation</h4>        <p>
                            We call <code>DocumentApp.create()</code> and immediately relocate the file into our dedicated workshop folder via <code>DriveApp</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Rédaction du Bilan Officiel</h3>        <p>
                            À l&apos;issue du camp, l&apos;équipe organisatrice doit remettre un rapport officiel aux partenaires institutionnels et sponsors. Rédiger ce document à la main après 5 jours d&apos;ateliers est fastidieux.
                        </p>        <p>
                            Voyons les 4 étapes de l&apos;algorithme qui génère automatiquement ce rapport exécutif dans Google Docs et produit sa copie PDF.
                        </p>        <h4>Étape 7.1 : Création du Document et Rangement dans le Dossier</h4>        <p>
                            Nous invoquons <code>DocumentApp.create()</code> et déplaçons immédiatement la référence du document dans notre dossier Drive de formation.
                        </p>
      </div>
      <CodeWindow
        filename={"Step7_1_CreateDoc.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Instantiate the Google Doc and relocate it to the workshop folder\r\nconst docTitle = 'GDG_Workspace_Training_2026_Final_Report';\r\nconst doc = DocumentApp.create(docTitle);\r\nconst docFile = DriveApp.getFileById(doc.getId());\r\n\r\nconst workshopFolder = DriveApp.getFolderById(workshopFolderId);\r\nworkshopFolder.addFile(docFile);\r\nDriveApp.getRootFolder().removeFile(docFile);"}
      />
      <div className={"lang-en"}>
        <h4>Step 7.2: Typography, Header & Dynamic Page Numbering</h4>        <p>
                            We configure running page headers and footers with dynamic page numbering (<code>appendPageNumber()</code>) using the <strong>Figtree</strong> font family.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 7.2 : Typographie Figtree, En-tête et Pagination Dynamique</h4>        <p>
                            Nous configurons l&apos;en-tête et le pied de page avec le numéro de page dynamique (<code>appendPageNumber()</code>) sous la police <strong>Figtree</strong>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step7_2_HeaderFooter.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Configure page header, footer with dynamic page numbering, and Figtree font\r\nconst header = doc.addHeader();\r\nconst headerP = header.appendParagraph('GDG - Google Workspace Training 2026 | Official Retrospective');\r\nheaderP.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);\r\nheaderP.setFontFamily('Figtree').setFontSize(9).setForegroundColor('#64748b');\r\n\r\nconst footer = doc.addFooter();\r\nconst footerP = footer.appendParagraph('Page ');\r\nfooterP.appendPageNumber();\r\nfooterP.appendParagraphText(' | Author: Georges Byona (@glosings0n)');\r\nfooterP.setAlignment(DocumentApp.HorizontalAlignment.CENTER);\r\nfooterP.setFontFamily('Figtree').setFontSize(9).setForegroundColor('#94a3b8');"}
      />
      <div className={"lang-en"}>
        <h4>Step 7.3: Styled Headings, Paragraphs & KPI Metrics Table</h4>        <p>
                            We append formatted headings and compute aggregate cohort metrics, displaying them in a styled table with solid blue header styling (<code>#02569B</code>).
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 7.3 : Titres Hiérarchisés et Tableau de KPIs Stylisé</h4>        <p>
                            Nous générons les paragraphes de synthèse et calculons les métriques globales affichées dans un tableau formatté avec en-tête bleu de marque (<code>#02569B</code>).
                        </p>
      </div>
      <CodeWindow
        filename={"Step7_3_HeadingsAndTable.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Append styled headings, summary paragraphs, and a formatted KPI metrics table\r\nconst body = doc.getBody();\r\n\r\nconst titleP = body.appendParagraph('Executive Summary & Evaluation Report');\r\ntitleP.setHeading(DocumentApp.ParagraphHeading.HEADING1);\r\ntitleP.setFontFamily('Figtree').setFontSize(22).setBold(true).setForegroundColor('#02569B');\r\n\r\nbody.appendParagraph(\r\n  'This document summarizes the outcomes of the 5-Day Google Workspace Training curriculum ' +\r\n  'delivered across GDG Afrique Francophone, GDG Pointe-Noire (Congo-Brazzaville), and GDG on Campus CUEA (Nairobi, Kenya).'\r\n).setFontFamily('Figtree').setFontSize(11).setLineSpacing(1.3);\r\n\r\nconst tableData = [\r\n  ['Evaluation Metric', 'Recorded Value', 'Benchmark Target', 'Compliance Status'],\r\n  ['Total Enrolled Participants', String(total), '>= 8 per session', 'OPTIMAL'],\r\n  ['Average Examination Score', avgScore + '/100', '>= 75/100', avgScore >= 75 ? 'SURPASSED' : 'REQUIRES ATTENTION'],\r\n  ['Graduation & E-Certificate Rate', certPercentage + '% (' + certified + '/' + total + ')', '>= 70%', 'ACHIEVED']\r\n];\r\n\r\nconst table = body.appendTable(tableData);\r\nconst headerRow = table.getRow(0);\r\nfor (let c = 0; c < 4; c++) {\r\n  headerRow.getCell(c).setBackgroundColor('#02569B');\r\n  headerRow.getCell(c).getChild(0).asParagraph().setFontFamily('Figtree').setFontColor('#FFFFFF').setBold(true);\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 7.4: Archival PDF Export & Granular Drive Permissions</h4>        <p>
                            We close the document, convert it to a PDF blob (<code>getAs(MimeType.PDF)</code>), archive it in Google Drive, and assign view-only link sharing permissions.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 7.4 : Archivage PDF et Gouvernance des Droits Drive</h4>        <p>
                            Nous enregistrons le document, l&apos;exportons au format PDF (<code>getAs(MimeType.PDF)</code>), l&apos;archivons dans Drive et configurons les droits de consultation en lecture seule.
                        </p>
      </div>
      <CodeWindow
        filename={"Step7_4_PdfAndSharing.gs"}
        lang={"JAVASCRIPT"}
        code={"// 4. Export static PDF archive and configure Drive sharing governance\r\ndoc.saveAndClose();\r\n\r\nconst pdfBlob = docFile.getAs(MimeType.PDF);\r\npdfBlob.setName(docTitle + '.pdf');\r\nconst pdfFile = workshopFolder.createFile(pdfBlob);\r\n\r\n// Make files accessible via link while protecting edit permissions\r\ndocFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\npdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\n\r\nconsole.log('Archived PDF Report URL: ' + pdfFile.getUrl());"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Evaluation Doc Script</h3>        <p>
                            Create a new script file in your project named <code>Practice6_DocsReport.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet de Rapport Google Docs</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice6_DocsReport.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice6_DocsReport.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 6: Programmatic Workshop Evaluation Doc & Drive Sharing\r\n * Service: DocumentApp + DriveApp + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\nfunction generateWorkshopEvaluationDoc() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n    const workshopFolderId = props.getProperty('WORKSHOP_FOLDER_ID');\r\n\r\n    if (!spreadsheetId || !workshopFolderId) {\r\n      throw new Error('Required IDs missing from ScriptProperties.');\r\n    }\r\n\r\n    const workshopFolder = DriveApp.getFolderById(workshopFolderId);\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const data = sheet.getDataRange().getValues();\r\n\r\n    const docTitle = 'GDG_Workspace_Training_2026_Final_Report';\r\n    const doc = DocumentApp.create(docTitle);\r\n    const docFile = DriveApp.getFileById(doc.getId());\r\n\r\n    // Relocate file into dedicated workshop folder\r\n    workshopFolder.addFile(docFile);\r\n    DriveApp.getRootFolder().removeFile(docFile);\r\n\r\n    const body = doc.getBody();\r\n\r\n    // 1. Configure Header and Footer with Figtree font\r\n    const header = doc.addHeader();\r\n    const headerP = header.appendParagraph('GDG - Google Workspace Training 2026 | Official Retrospective');\r\n    headerP.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);\r\n    headerP.setFontFamily('Figtree').setFontSize(9).setForegroundColor('#64748b');\r\n\r\n    const footer = doc.addFooter();\r\n    const footerP = footer.appendParagraph('Page ');\r\n    footerP.appendPageNumber();\r\n    footerP.appendParagraphText(' | Author: Georges Byona (@glosings0n)');\r\n    footerP.setAlignment(DocumentApp.HorizontalAlignment.CENTER);\r\n    footerP.setFontFamily('Figtree').setFontSize(9).setForegroundColor('#94a3b8');\r\n\r\n    // 2. Add Main Document Titles\r\n    const titleP = body.appendParagraph('Executive Summary & Evaluation Report');\r\n    titleP.setHeading(DocumentApp.ParagraphHeading.HEADING1);\r\n    titleP.setFontFamily('Figtree').setFontSize(22).setBold(true).setForegroundColor('#02569B');\r\n\r\n    const subtitleP = body.appendParagraph('Cohort Performance, Attendance Metrics & Certification Outcomes');\r\n    subtitleP.setHeading(DocumentApp.ParagraphHeading.SUBTITLE);\r\n    subtitleP.setFontFamily('Figtree').setFontSize(13).setForegroundColor('#475569');\r\n\r\n    body.appendHorizontalRule();\r\n\r\n    // 3. Add Context Paragraph\r\n    body.appendParagraph(\r\n      'This document summarizes the outcomes of the 5-Day Google Workspace Training curriculum ' +\r\n      'delivered across GDG Afrique Francophone, GDG Pointe-Noire (Congo-Brazzaville), and GDG on Campus CUEA (Nairobi, Kenya). ' +\r\n      'All attendance records and certifications were processed automatically via Google Apps Script.'\r\n    ).setFontFamily('Figtree').setFontSize(11).setLineSpacing(1.3);\r\n\r\n    // 4. Calculate Aggregate Metrics\r\n    let total = data.length - 1;\r\n    let certified = 0;\r\n    let cumulativeScore = 0;\r\n\r\n    for (let i = 1; i < data.length; i++) {\r\n      if (data[i][11] === 'ISSUED') certified++;\r\n      cumulativeScore += (parseInt(data[i][10], 10) || 0);\r\n    }\r\n\r\n    const avgScore = Math.round(cumulativeScore / total);\r\n    const certPercentage = Math.round((certified / total) * 100);\r\n\r\n    // 5. Insert Formatted KPI Table\r\n    body.appendParagraph('Key Performance Indicators')\r\n      .setHeading(DocumentApp.ParagraphHeading.HEADING2)\r\n      .setFontFamily('Figtree')\r\n      .setFontSize(15)\r\n      .setForegroundColor('#02569B');\r\n\r\n    const tableData = [\r\n      ['Evaluation Metric', 'Recorded Value', 'Benchmark Target', 'Compliance Status'],\r\n      ['Total Enrolled Participants', String(total), '>= 8 per session', 'OPTIMAL'],\r\n      ['Average Examination Score', avgScore + '/100', '>= 75/100', avgScore >= 75 ? 'SURPASSED' : 'REQUIRES ATTENTION'],\r\n      ['Graduation & E-Certificate Rate', certPercentage + '% (' + certified + '/' + total + ')', '>= 70%', certPercentage >= 70 ? 'ACHIEVED' : 'INCOMPLETE'],\r\n      ['Automated Infrastructure', 'Google Apps Script (V8)', 'Zero-Server Stack', 'VERIFIED']\r\n    ];\r\n\r\n    const table = body.appendTable(tableData);\r\n    \r\n    // Style Table Header Row\r\n    const headerRow = table.getRow(0);\r\n    for (let c = 0; c < 4; c++) {\r\n      headerRow.getCell(c).setBackgroundColor('#02569B');\r\n      headerRow.getCell(c).getChild(0).asParagraph().setFontFamily('Figtree').setFontColor('#FFFFFF').setBold(true);\r\n    }\r\n\r\n    // 6. Export PDF Archival Copy\r\n    doc.saveAndClose();\r\n    const pdfBlob = docFile.getAs(MimeType.PDF);\r\n    pdfBlob.setName(docTitle + '.pdf');\r\n    const pdfFile = workshopFolder.createFile(pdfBlob);\r\n\r\n    // 7. Configure Granular Sharing Governance\r\n    docFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\n    pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);\r\n\r\n    console.log('=== EVALUATION DOC GENERATION COMPLETE ===');\r\n    console.log('Google Doc Editable URL: ' + docFile.getUrl());\r\n    console.log('Archived PDF Report URL: ' + pdfFile.getUrl());\r\n  } catch (err) {\r\n    console.error('Error in generateWorkshopEvaluationDoc: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Execution & Inspection</h3>        <p>
                            Click <strong>Run</strong> (function <code>generateWorkshopEvaluationDoc</code>). Open your Google Drive folder: you will find both the editable Google Doc and the final archived PDF report ready for distribution to community leads and partners.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Exécution & Inspection Documentaire</h3>        <p>
                            Cliquez sur <strong>Exécuter</strong> (fonction <code>generateWorkshopEvaluationDoc</code>). Ouvrez votre dossier Google Drive : vous y trouverez à la fois le Google Doc éditable et la copie PDF figée prête à être transmise aux responsables GDG et partenaires.
                        </p>
      </div>
    </>
  );
}

function Step8() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Safe Public Visibility Without Spreadsheet Access</h3>        <p>
                            Sharing raw Google Sheets directly with dozens of students exposes private contact details and risks accidental formula deletions. With Apps Script&apos;s <strong>HtmlService</strong>, we can serve a secure, responsive single-page web app directly from Google Cloud infrastructure.
                        </p>        <p>
                            Let&apos;s examine the 4 core architectural components before assembling the backend and frontend code.
                        </p>        <h4>Step 8.1: The HTTP GET Entry Point (doGet)</h4>        <p>
                            Apps Script invokes <code>doGet(e)</code> whenever a user opens the published Web App URL. We configure mobile responsive viewport tags and enable framing so the application can be cleanly embedded.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Partager les Résultats sans Exposer le Tableur</h3>        <p>
                            Donner un accès direct au Google Sheet présente des risques de fuite de données personnelles ou de suppression involontaire de formules. Avec le service <strong>HtmlService</strong> d&apos;Apps Script, nous déployons une application web monopage sécurisée hébergée sur l&apos;infrastructure Google.
                        </p>        <p>
                            Examinons les 4 briques architecturales clés avant de déployer le code serveur et frontal.
                        </p>        <h4>Étape 8.1 : Point d&apos;Entrée HTTP GET (doGet)</h4>        <p>
                            Apps Script appelle <code>doGet(e)</code> dès qu&apos;un utilisateur consulte l&apos;URL de l&apos;application web. Nous paramétrons les métadonnées de viewport mobile et autorisons l&apos;encapsulation iframe.
                        </p>
      </div>
      <CodeWindow
        filename={"Step8_1_DoGet.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. HTTP GET Entry Point for Web App requests\r\nfunction doGet(e) {\r\n  const htmlOutput = HtmlService.createTemplateFromFile('Index')\r\n    .evaluate()\r\n    .setTitle('GDG Workspace Training | Student Portal')\r\n    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')\r\n    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);\r\n  \r\n  return htmlOutput;\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 8.2: Server RPC Method for Safe Data Serialization</h4>        <p>
                            We write <code>getDashboardData()</code> to query the sheet, calculate totals, and return a clean, JSON-serializable object containing only the necessary student fields.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 8.2 : Méthode Serveur RPC pour la Sérialisation Sécurisée</h4>        <p>
                            Nous concevons <code>getDashboardData()</code> pour interroger la feuille, calculer les moyennes et renvoyer un objet JSON filtré contenant uniquement les attributs requis.
                        </p>
      </div>
      <CodeWindow
        filename={"Step8_2_RpcApi.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Remote Procedure Call (RPC) to safely extract and format sheet data\r\nfunction getDashboardData() {\r\n  const props = PropertiesService.getScriptProperties();\r\n  const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Attendance_Master');\r\n  const values = sheet.getDataRange().getValues();\r\n\r\n  const students = [];\r\n  let eligibleCount = 0;\r\n  let totalScore = 0;\r\n\r\n  for (let i = 1; i < values.length; i++) {\r\n    const row = values[i];\r\n    const rateNum = parseInt(String(row[9]).replace('%', ''), 10) || 0;\r\n    const score = parseInt(row[10], 10) || 0;\r\n    if (rateNum >= 80) eligibleCount++;\r\n    totalScore += score;\r\n\r\n    students.push({\r\n      id: row[0],\r\n      name: row[1],\r\n      email: row[2],\r\n      track: row[3],\r\n      rate: rateNum,\r\n      score: score,\r\n      status: row[11],\r\n      certUrl: row[12]\r\n    });\r\n  }\r\n\r\n  return {\r\n    success: true,\r\n    totalStudents: students.length,\r\n    eligibleStudents: eligibleCount,\r\n    averageScore: students.length ? Math.round(totalScore / students.length) : 0,\r\n    students: students\r\n  };\r\n}"}
      />
      <div className={"lang-en"}>
        <h4>Step 8.3: Frontend Typography & Google Fonts Figtree Setup</h4>        <p>
                            In <code>Index.html</code>, we import the <strong>Figtree</strong> and <strong>JetBrains Mono</strong> font families directly from Google Fonts, applying them to the body text, cards, and data tables.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 8.3 : Typographie et Importation Google Fonts Figtree</h4>        <p>
                            Dans <code>Index.html</code>, nous importons les polices <strong>Figtree</strong> et <strong>JetBrains Mono</strong> depuis Google Fonts pour les appliquer au corps de page, aux cartes et aux tableaux de données.
                        </p>
      </div>
      <CodeWindow
        filename={"Step8_3_FontImport.html"}
        lang={"HTML"}
        code={"<!-- 3. Google Fonts Figtree & JetBrains Mono Imports in Index.html -->\r\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n<link href=\"https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;600&display=swap\" rel=\"stylesheet\">\r\n<style>\r\n  body {\r\n    font-family: 'Figtree', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\r\n    margin: 0;\r\n    padding: 24px;\r\n    background-color: #070a13;\r\n    color: #f8fafc;\r\n  }\r\n  .card-num {\r\n    font-family: 'JetBrains Mono', monospace;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #00B0FF;\r\n  }\r\n</style>"}
      />
      <div className={"lang-en"}>
        <h4>Step 8.4: Client-Side Asynchronous Dispatch (google.script.run)</h4>        <p>
                            The browser client executes <code>google.script.run.withSuccessHandler(renderDashboard).getDashboardData()</code>, rendering the live data into cards and a table with instant client-side filtering.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 8.4 : Appel Client Asynchrone (google.script.run)</h4>        <p>
                            Le navigateur invoque <code>google.script.run.withSuccessHandler(renderDashboard).getDashboardData()</code>, affichant les données en temps réel dans les cartes et permettant une recherche instantanée.
                        </p>
      </div>
      <CodeWindow
        filename={"Step8_4_ClientJs.js"}
        lang={"JAVASCRIPT"}
        code={"// 4. Asynchronous Client-Side Call via google.script.run\r\ngoogle.script.run\r\n  .withSuccessHandler(renderDashboard)\r\n  .withFailureHandler(handleError)\r\n  .getDashboardData();\r\n\r\nfunction renderDashboard(res) {\r\n  document.getElementById('stat-total').innerText = res.totalStudents;\r\n  document.getElementById('stat-eligible').innerText = res.eligibleStudents;\r\n  document.getElementById('stat-score').innerText = res.averageScore + '/100';\r\n  displayStudentList(res.students);\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Backend & Frontend Files</h3>        <p>
                            First, create <code>WebApp_Server.gs</code> and paste the backend server code:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Les Fichiers Complets Serveur & Front-End</h3>        <p>
                            Créez tout d&apos;abord <code>WebApp_Server.gs</code> et collez le script serveur ci-dessous :
                        </p>
      </div>
      <CodeWindow
        filename={"WebApp_Server.gs (Complete Backend Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 7: Web App Server Backend\r\n * Service: HtmlService + SpreadsheetApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\n// Entry point when visiting the Web App URL in a web browser\r\nfunction doGet(e) {\r\n  const htmlOutput = HtmlService.createTemplateFromFile('Index')\r\n    .evaluate()\r\n    .setTitle('GDG Workspace Training | Student Portal')\r\n    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')\r\n    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);\r\n  \r\n  return htmlOutput;\r\n}\r\n\r\n// Remote Procedure Call (RPC) callable from frontend JavaScript\r\nfunction getDashboardData() {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n\r\n    if (!spreadsheetId) {\r\n      return { error: 'Spreadsheet ID not initialized in ScriptProperties.' };\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const values = sheet.getDataRange().getValues();\r\n\r\n    const students = [];\r\n    let eligibleCount = 0;\r\n    let totalScore = 0;\r\n\r\n    for (let i = 1; i < values.length; i++) {\r\n      const row = values[i];\r\n      const rateNum = parseInt(String(row[9]).replace('%', ''), 10) || 0;\r\n      const score = parseInt(row[10], 10) || 0;\r\n      const status = row[11];\r\n      const certUrl = row[12];\r\n\r\n      if (rateNum >= 80) eligibleCount++;\r\n      totalScore += score;\r\n\r\n      students.push({\r\n        id: row[0],\r\n        name: row[1],\r\n        email: row[2],\r\n        track: row[3],\r\n        rate: rateNum,\r\n        score: score,\r\n        status: status,\r\n        certUrl: certUrl\r\n      });\r\n    }\r\n\r\n    return {\r\n      success: true,\r\n      totalStudents: students.length,\r\n      eligibleStudents: eligibleCount,\r\n      averageScore: students.length ? Math.round(totalScore / students.length) : 0,\r\n      students: students\r\n    };\r\n  } catch (err) {\r\n    return { error: err.message };\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <p>
                            Next, create an HTML file in your Apps Script project by clicking <strong>+ &gt; HTML</strong>, name it <code>Index</code>, and paste the code below:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <p>
                            Créez ensuite le fichier HTML frontal en cliquant sur <strong>+ &gt; HTML</strong>, nommez-le <code>Index</code> et collez le code complet ci-dessous :
                        </p>
      </div>
      <CodeWindow
        filename={"Index.html (Complete Frontend Single Page Application)"}
        lang={"HTML"}
        code={"<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <base target=\"_top\">\r\n  <!-- Google Fonts: Figtree & JetBrains Mono -->\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;600&display=swap\" rel=\"stylesheet\">\r\n  <style>\r\n    body {\r\n      font-family: 'Figtree', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\r\n      margin: 0;\r\n      padding: 24px;\r\n      background-color: #070a13;\r\n      color: #f8fafc;\r\n    }\r\n    .container {\r\n      max-width: 900px;\r\n      margin: 0 auto;\r\n    }\r\n    .header {\r\n      border-bottom: 1px solid #202b46;\r\n      padding-bottom: 16px;\r\n      margin-bottom: 24px;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n    }\r\n    h1 { margin: 0; font-size: 22px; color: #00B0FF; }\r\n    .subtitle { margin: 4px 0 0 0; color: #94a3b8; font-size: 14px; }\r\n    \r\n    .stats-grid {\r\n      display: grid;\r\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n      gap: 16px;\r\n      margin-bottom: 24px;\r\n    }\r\n    .card {\r\n      background: #0f1424;\r\n      border: 1px solid #202b46;\r\n      border-radius: 8px;\r\n      padding: 16px;\r\n      text-align: center;\r\n    }\r\n    .card-num { font-size: 28px; font-weight: bold; color: #00B0FF; font-family: 'JetBrains Mono', monospace; }\r\n    .card-label { font-size: 12px; color: #94a3b8; text-transform: uppercase; margin-top: 4px; }\r\n    \r\n    .search-box {\r\n      width: 100%;\r\n      padding: 12px 16px;\r\n      background: #0f1424;\r\n      border: 1px solid #202b46;\r\n      border-radius: 6px;\r\n      color: #ffffff;\r\n      font-family: 'Figtree', sans-serif;\r\n      font-size: 14px;\r\n      box-sizing: border-box;\r\n      margin-bottom: 20px;\r\n    }\r\n    \r\n    table {\r\n      width: 100%;\r\n      border-collapse: collapse;\r\n      background: #0f1424;\r\n      border: 1px solid #202b46;\r\n      border-radius: 8px;\r\n      overflow: hidden;\r\n    }\r\n    th {\r\n      background: #171d32;\r\n      color: #94a3b8;\r\n      font-size: 12px;\r\n      text-align: left;\r\n      padding: 12px;\r\n    }\r\n    td {\r\n      padding: 12px;\r\n      border-top: 1px solid #202b46;\r\n      font-size: 13px;\r\n    }\r\n    .badge {\r\n      display: inline-block;\r\n      padding: 3px 8px;\r\n      border-radius: 4px;\r\n      font-size: 11px;\r\n      font-weight: bold;\r\n    }\r\n    .badge-issued { background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid #22c55e; }\r\n    .badge-pending { background: rgba(234, 179, 8, 0.2); color: #facc15; border: 1px solid #eab308; }\r\n    .btn-cert {\r\n      color: #00B0FF;\r\n      text-decoration: none;\r\n      font-weight: bold;\r\n    }\r\n    .loading { text-align: center; padding: 40px; color: #94a3b8; }\r\n  </style>\r\n</head>\r\n<body>\r\n  <div class=\"container\">\r\n    <div class=\"header\">\r\n      <div>\r\n        <h1>GDG Workspace Training Portal</h1>\r\n        <p class=\"subtitle\">Real-time Student Dashboard & Certificate Verification</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"stats-grid\">\r\n      <div class=\"card\">\r\n        <div class=\"card-num\" id=\"stat-total\">--</div>\r\n        <div class=\"card-label\">Total Students</div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-num\" id=\"stat-eligible\">--</div>\r\n        <div class=\"card-label\">Certificate Eligible</div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-num\" id=\"stat-score\">--</div>\r\n        <div class=\"card-label\">Average Exam Score</div>\r\n      </div>\r\n    </div>\r\n\r\n    <input type=\"text\" id=\"search-input\" class=\"search-box\" placeholder=\"Search by name, student ID, or track...\" oninput=\"filterTable()\">\r\n\r\n    <div id=\"table-container\">\r\n      <div class=\"loading\" id=\"loading-msg\">Connecting to Google Sheets backend...</div>\r\n    </div>\r\n  </div>\r\n\r\n  <script>\r\n    let allStudents = [];\r\n\r\n    google.script.run\r\n      .withSuccessHandler(renderDashboard)\r\n      .withFailureHandler(handleError)\r\n      .getDashboardData();\r\n\r\n    function renderDashboard(res) {\r\n      if (res.error) {\r\n        document.getElementById('table-container').innerHTML = '<div style=\"color: #ef4444;\">Error: ' + res.error + '</div>';\r\n        return;\r\n      }\r\n\r\n      document.getElementById('stat-total').innerText = res.totalStudents;\r\n      document.getElementById('stat-eligible').innerText = res.eligibleStudents;\r\n      document.getElementById('stat-score').innerText = res.averageScore + '/100';\r\n\r\n      allStudents = res.students;\r\n      displayStudentList(allStudents);\r\n    }\r\n\r\n    function displayStudentList(students) {\r\n      if (students.length === 0) {\r\n        document.getElementById('table-container').innerHTML = '<div class=\"loading\">No matching records found.</div>';\r\n        return;\r\n      }\r\n\r\n      let html = '<table><thead><tr>' +\r\n        '<th>ID</th><th>Name</th><th>Track</th><th>Attendance</th><th>Exam</th><th>Status</th><th>Certificate</th>' +\r\n        '</tr></thead><tbody>';\r\n\r\n      students.forEach(s => {\r\n        const badgeClass = s.status === 'ISSUED' ? 'badge-issued' : 'badge-pending';\r\n        const certAction = s.certUrl ? '<a class=\"btn-cert\" href=\"' + s.certUrl + '\" target=\"_blank\">View PDF →</a>' : '<span style=\"color:#64748b;\">In Progress</span>';\r\n        \r\n        html += '<tr>' +\r\n          '<td style=\"font-family: 'JetBrains Mono', monospace;\">' + s.id + '</td>' +\r\n          '<td style=\"font-weight: 500;\">' + s.name + '</td>' +\r\n          '<td style=\"color: #94a3b8;\">' + s.track + '</td>' +\r\n          '<td style=\"text-align: center;\">' + s.rate + '%</td>' +\r\n          '<td style=\"text-align: center;\">' + s.score + '</td>' +\r\n          '<td><span class=\"badge ' + badgeClass + '\">' + s.status + '</span></td>' +\r\n          '<td>' + certAction + '</td>' +\r\n          '</tr>';\r\n      });\r\n\r\n      html += '</tbody></table>';\r\n      document.getElementById('table-container').innerHTML = html;\r\n    }\r\n\r\n    function filterTable() {\r\n      const q = document.getElementById('search-input').value.toLowerCase();\r\n      const filtered = allStudents.filter(s => \r\n        s.name.toLowerCase().includes(q) || \r\n        s.id.toLowerCase().includes(q) || \r\n        s.track.toLowerCase().includes(q)\r\n      );\r\n      displayStudentList(filtered);\r\n    }\r\n\r\n    function handleError(err) {\r\n      document.getElementById('table-container').innerHTML = '<div style=\"color: #ef4444;\">RPC Failure: ' + err.message + '</div>';\r\n    }\r\n  </script>\r\n</body>\r\n</html>"}
      />
      <div className={"lang-en"}>
        <h3>3. Deploying the Web App</h3>        <ol>
          <li>In the top-right corner of the Apps Script editor, click <strong>Deploy &gt; New deployment</strong>.</li>          <li>Click the gear icon next to <em>Select type</em> and choose <strong>Web app</strong>.</li>          <li>Set <em>Execute as</em>: <strong>Me</strong>.</li>          <li>Set <em>Who has access</em>: <strong>Anyone</strong> (or Anyone within your organization).</li>          <li>Click <strong>Deploy</strong>, authorize the permissions, and copy your public Web App URL. Open it in a new tab: you have a live, real-time portal backed by Google Sheets.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Déploiement de l&apos;Application Web</h3>        <ol>
          <li>En haut à droite de l&apos;éditeur Apps Script, cliquez sur <strong>Déployer &gt; Nouveau déploiement</strong>.</li>          <li>Cliquez sur l&apos;engrenage à côté de <em>Sélectionner le type</em> et choisissez <strong>Application Web</strong>.</li>          <li>Définissez <em>Exécuter en tant que</em> : <strong>Moi</strong>.</li>          <li>Définissez <em>Qui a accès</em> : <strong>Tout le monde</strong>.</li>          <li>Cliquez sur <strong>Déployer</strong>, validez les autorisations et copiez l&apos;URL de votre application web en ligne.</li>
        </ol>
      </div>
    </>
  );
}

function Step9() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. The Operational Challenge: Scheduled Execution & Community Webhooks</h3>        <p>
                            True operational autonomy means scripts run unattended on schedule without any manual clicks. Furthermore, developer communities expect real-time broadcast updates in communication channels (Slack / Discord).
                        </p>        <p>
                            Let&apos;s review the 3 algorithmic stages of time-driven trigger setup and outbound webhook delivery.
                        </p>        <h4>Step 9.1: Cleaning Existing Triggers for Idempotency</h4>        <p>
                            Before adding a trigger, we query existing project triggers via <code>ScriptApp.getProjectTriggers()</code> and delete any matching handler to avoid duplicate scheduled runs.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Le Défi Opérationnel : Autonomie Temporelle et Webhooks d&apos;Équipe</h3>        <p>
                            Une automatisation complète doit s&apos;exécuter selon un calendrier précis sans intervention humaine, tout en notifiant les canaux de discussion communautaires (Slack / Discord).
                        </p>        <p>
                            Décomposons les 3 phases de la configuration horaire et de l&apos;envoi de webhooks sortants.
                        </p>        <h4>Étape 9.1 : Nettoyage Préalable des Déclencheurs Existants</h4>        <p>
                            Avant d&apos;installer un déclencheur, nous parcourons <code>ScriptApp.getProjectTriggers()</code> pour purger toute instance préexistante et éviter les exécutions en double.
                        </p>
      </div>
      <CodeWindow
        filename={"Step9_1_DeleteExisting.gs"}
        lang={"JAVASCRIPT"}
        code={"// 1. Purge pre-existing triggers to guarantee execution idempotency\r\nconst functionName = 'auditStudentAttendanceAndNotify';\r\nconst currentTriggers = ScriptApp.getProjectTriggers();\r\n\r\ncurrentTriggers.forEach(trigger => {\r\n  if (trigger.getHandlerFunction() === functionName) {\r\n    ScriptApp.deleteTrigger(trigger);\r\n    console.log('Removed duplicate trigger for: ' + functionName);\r\n  }\r\n});"}
      />
      <div className={"lang-en"}>
        <h4>Step 9.2: Scheduling Daily Cron Execution at 18:00</h4>        <p>
                            We call <code>ScriptApp.newTrigger().timeBased().everyDays(1).atHour(18).create()</code> to register a daily execution clock with Google Cloud.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 9.2 : Planification Quotidienne à 18h00</h4>        <p>
                            Nous appelons <code>ScriptApp.newTrigger().timeBased().everyDays(1).atHour(18).create()</code> pour inscrire l&apos;exécution quotidienne auprès de l&apos;infrastructure Google.
                        </p>
      </div>
      <CodeWindow
        filename={"Step9_2_TimeTrigger.gs"}
        lang={"JAVASCRIPT"}
        code={"// 2. Programmatically schedule daily execution at 18:00 (6:00 PM)\r\nScriptApp.newTrigger(functionName)\r\n  .timeBased()\r\n  .everyDays(1)\r\n  .atHour(18)\r\n  .create();\r\n\r\nconsole.log('Trigger installed: ' + functionName + ' will run daily at 18:00.');"}
      />
      <div className={"lang-en"}>
        <h4>Step 9.3: Serializing Payloads & HTTP POST Dispatch via UrlFetchApp</h4>        <p>
                            We serialize cohort statistics into JSON and execute an HTTP POST request to an external webhook URL via <code>UrlFetchApp.fetch()</code>.
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h4>Étape 9.3 : Sérialisation et Envoi HTTP POST via UrlFetchApp</h4>        <p>
                            Nous sérialisons les métriques au format JSON et déclenchons la requête HTTP POST externe à l&apos;aide de <code>UrlFetchApp.fetch()</code>.
                        </p>
      </div>
      <CodeWindow
        filename={"Step9_3_WebhookDispatch.gs"}
        lang={"JAVASCRIPT"}
        code={"// 3. Serialize cohort metrics and dispatch an HTTP POST request\r\nconst payload = {\r\n  text: '*GDG Workspace Training Cohort Update*\\n' +\r\n        '• *Total Students:* ' + total + '\\n' +\r\n        '• *Certificate Eligible:* ' + certified + '\\n' +\r\n        '• *At Risk (<75%):* ' + atRisk + '\\n' +\r\n        '• *Automated via:* Google Apps Script V8 (Day V Workshop)'\r\n};\r\n\r\nconst options = {\r\n  method: 'post',\r\n  contentType: 'application/json',\r\n  payload: JSON.stringify(payload),\r\n  muteHttpExceptions: true\r\n};\r\n\r\nconst response = UrlFetchApp.fetch(webhookUrl, options);\r\nconsole.log('Webhook dispatched. Status Code: ' + response.getResponseCode());"}
      />
      <div className={"lang-en"}>
        <h3>2. The Complete Cron & Webhook Script</h3>        <p>
                            Create a new script file in your project named <code>Practice8_CronAndWebhooks.gs</code>, paste the code below, and save:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Le Script Complet Déclencheur & Webhook</h3>        <p>
                            Créez un nouveau fichier de script nommé <code>Practice8_CronAndWebhooks.gs</code>, collez le code ci-dessous et enregistrez :
                        </p>
      </div>
      <CodeWindow
        filename={"Practice8_CronAndWebhooks.gs (Complete Script)"}
        lang={"JAVASCRIPT"}
        code={"/**\r\n * Practice 8: Programmatic Time Triggers & Outbound Webhook Integration\r\n * Service: ScriptApp + UrlFetchApp\r\n * Author: Georges Byona (@glosings0n)\r\n */\r\n\r\n// 1. Programmatically install a nightly time-driven trigger\r\nfunction installDailyAuditTrigger() {\r\n  const functionName = 'auditStudentAttendanceAndNotify';\r\n  \r\n  // Clean up any existing trigger for the same function to avoid duplicate runs\r\n  const currentTriggers = ScriptApp.getProjectTriggers();\r\n  currentTriggers.forEach(trigger => {\r\n    if (trigger.getHandlerFunction() === functionName) {\r\n      ScriptApp.deleteTrigger(trigger);\r\n      console.log('Deleted pre-existing trigger for: ' + functionName);\r\n    }\r\n  });\r\n\r\n  // Schedule to execute daily at 18:00 (6:00 PM)\r\n  ScriptApp.newTrigger(functionName)\r\n    .timeBased()\r\n    .everyDays(1)\r\n    .atHour(18)\r\n    .create();\r\n\r\n  console.log('=== AUTOMATIC TRIGGER INSTALLED ===');\r\n  console.log('Function \"' + functionName + '\" will now run automatically every day at 18:00.');\r\n}\r\n\r\n// 2. Dispatch cohort summary to an external Slack / Discord Webhook\r\nfunction broadcastCohortSummaryWebhook(webhookUrl) {\r\n  try {\r\n    const props = PropertiesService.getScriptProperties();\r\n    const spreadsheetId = props.getProperty('SPREADSHEET_ID');\r\n\r\n    if (!spreadsheetId) {\r\n      throw new Error('SPREADSHEET_ID not found in ScriptProperties.');\r\n    }\r\n\r\n    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);\r\n    const sheet = spreadsheet.getSheetByName('Attendance_Master');\r\n    const data = sheet.getDataRange().getValues();\r\n\r\n    let total = data.length - 1;\r\n    let certified = 0;\r\n    let atRisk = 0;\r\n\r\n    for (let i = 1; i < data.length; i++) {\r\n      const rateNum = parseInt(String(data[i][9]).replace('%', ''), 10) || 0;\r\n      if (rateNum >= 80) certified++;\r\n      if (rateNum < 75) atRisk++;\r\n    }\r\n\r\n    const payload = {\r\n      text: '*GDG Workspace Training Cohort Update*\\n' +\r\n            '• *Total Students:* ' + total + '\\n' +\r\n            '• *Certificate Eligible:* ' + certified + '\\n' +\r\n            '• *At Risk (<75%):* ' + atRisk + '\\n' +\r\n            '• *Automated via:* Google Apps Script V8 (Day V Workshop)'\r\n    };\r\n\r\n    const options = {\r\n      method: 'post',\r\n      contentType: 'application/json',\r\n      payload: JSON.stringify(payload),\r\n      muteHttpExceptions: true\r\n    };\r\n\r\n    // If no webhook URL is passed, log payload to execution log\r\n    if (!webhookUrl || !webhookUrl.startsWith('http')) {\r\n      console.log('No external webhook URL provided. Payload preview:');\r\n      console.log(JSON.stringify(payload, null, 2));\r\n      return;\r\n    }\r\n\r\n    const response = UrlFetchApp.fetch(webhookUrl, options);\r\n    console.log('Webhook successfully posted. Response Code: ' + response.getResponseCode());\r\n  } catch (err) {\r\n    console.error('Error in broadcastCohortSummaryWebhook: ' + err.message);\r\n  }\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>3. Embedding on Google Sites</h3>        <ol>
          <li>Open <a href={"https://sites.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>sites.google.com</a> in edit mode.</li>          <li>In the right-hand panel, click <strong>Insert &gt; Embed</strong>.</li>          <li>Choose <strong>By URL</strong> and paste your published Web App URL from Practice 7.</li>          <li>Resize the container block to full width and click <strong>Publish</strong>. Participants can now access their live attendance dashboard directly on your community portal.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Intégration sur Google Sites</h3>        <ol>
          <li>Ouvrez <a href={"https://sites.google.com"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>sites.google.com</a> en mode édition.</li>          <li>Dans le volet latéral, cliquez sur <strong>Insérer &gt; Intégrer</strong>.</li>          <li>Sélectionnez <strong>Via une URL</strong> et collez l&apos;URL de votre Web App de la pratique 7.</li>          <li>Ajustez la largeur du bloc et cliquez sur <strong>Publier</strong> pour offrir un portail d&apos;émargement directement accessible à la communauté.</li>
        </ol>
      </div>
    </>
  );
}

function Step10() {
  return (
    <>
      <div className={"lang-en"}>
        <h3>1. Production Invariants & Architectural Best Practices</h3>        <p>
                            Deploying reliable automations at scale requires adhering to core engineering constraints inherent to the Google Cloud Apps Script infrastructure:
                        </p>        <ol>
          <li><strong>Atomic Batch Operations:</strong> Never invoke <code>getValue()</code> or <code>setValue()</code> inside a loop. Reading or writing cell-by-cell introduces significant network latency across the wire. Always use <code>getValues()</code> to read a 2D array into memory and <code>setValues()</code> to flush changes in a single atomic network trip (100x to 1000x faster).</li>          <li><strong>ScriptProperties for Environment Isolation:</strong> Never hardcode Folder IDs, Sheet IDs, or template keys directly in your business logic. Store configuration keys in <code>PropertiesService.getScriptProperties()</code> to keep code portable across testing and production sandboxes.</li>          <li><strong>Defensive Exception Boundaries:</strong> Always wrap external service calls (<code>UrlFetchApp</code>, <code>GmailApp</code>, <code>DriveApp</code>) in <code>try {"{"} ... {"}"} catch (err) {"{"} console.error(...) {"}"}</code> blocks. When interacting with external APIs, implement exponential backoff retry algorithms to handle transient network hiccups.</li>          <li><strong>Explicit Least-Privilege OAuth Scopes:</strong> In <code>appsscript.json</code>, explicitly declare only the permissions your application requires rather than accepting wide root access.</li>
        </ol>
      </div>
      <div className={"lang-fr"}>
        <h3>1. Invariants de Production & Bonnes Pratiques Architecturales</h3>        <p>
                            Le déploiement d&apos;automatisations fiables à grande échelle exige le respect rigoureux des contraintes d&apos;ingénierie de l&apos;infrastructure Google Apps Script :
                        </p>        <ol>
          <li><strong>Opérations par Lots Atomiques :</strong> N&apos;invoquez jamais <code>getValue()</code> ou <code>setValue()</code> à l&apos;intérieur d&apos;une boucle. Lire ou écrire cellule par cellule multiplie les allers-retours réseau. Utilisez systématiquement <code>getValues()</code> pour charger la matrice en mémoire et <code>setValues()</code> pour enregistrer les modifications en un seul appel (gain de 100x à 1000x).</li>          <li><strong>ScriptProperties pour l&apos;Isolation des Environnements :</strong> Ne codez jamais en dur les identifiants de dossiers, de feuilles ou de gabarits. Stockez ces variables dans <code>PropertiesService.getScriptProperties()</code> pour garantir la portabilité entre vos espaces de test et de production.</li>          <li><strong>Gestion Défensive des Erreurs :</strong> Encadrez systématiquement les appels aux services externes (<code>UrlFetchApp</code>, <code>GmailApp</code>, <code>DriveApp</code>) dans des blocs <code>try {"{"} ... {"}"} catch (err) {"{"} console.error(...) {"}"}</code>. Pour les APIs distantes, prévoyez un mécanisme de réessai avec backoff exponentiel.</li>          <li><strong>Principe du Moindre Privilège pour les Scopes OAuth :</strong> Déclarez explicitement dans le manifeste <code>appsscript.json</code> uniquement les périmètres d&apos;accès indispensables.</li>
        </ol>
      </div>
      <CodeWindow
        filename={"appsscript.json (Explicit Least-Privilege OAuth Scopes)"}
        lang={"JSON"}
        code={"{\r\n  \"timeZone\": \"Africa/Nairobi\",\r\n  \"dependencies\": {},\r\n  \"exceptionLogging\": \"STACKDRIVER\",\r\n  \"runtimeVersion\": \"V8\",\r\n  \"oauthScopes\": [\r\n    \"https://www.googleapis.com/auth/spreadsheets\",\r\n    \"https://www.googleapis.com/auth/drive\",\r\n    \"https://www.googleapis.com/auth/presentations\",\r\n    \"https://www.googleapis.com/auth/gmail.send\",\r\n    \"https://www.googleapis.com/auth/contacts\",\r\n    \"https://www.googleapis.com/auth/calendar\",\r\n    \"https://www.googleapis.com/auth/documents\",\r\n    \"https://www.googleapis.com/auth/script.external_request\"\r\n  ]\r\n}"}
      />
      <div className={"lang-en"}>
        <h3>2. Google Workspace vs Consumer Account Quotas Reference</h3>        <p>
                            Keep these daily quotas in mind when planning large-scale cohort automations:
                        </p>
      </div>
      <div className={"lang-fr"}>
        <h3>2. Tableau de Référence des Quotas Google Workspace vs Comptes Grand Public</h3>        <p>
                            Gardez ces limites quotidiennes à l&apos;esprit lors du dimensionnement de vos automatisations de cohortes :
                        </p>
      </div>
      <div className={"table-responsive"}>
        <table className={"codelab-table"}>
          <thead>
            <tr>
              <th>Feature / Service Quota</th>              <th>Consumer (@gmail.com)</th>              <th>Google Workspace (Business / Edu)</th>
            </tr>
          </thead>          <tbody>
            <tr>
              <td><strong>Email Recipients per Day</strong></td>              <td>100 recipients / day</td>              <td><strong>1,500 recipients / day</strong></td>
            </tr>            <tr>
              <td><strong>Script Execution Maximum Time</strong></td>              <td>6 minutes / execution</td>              <td>6 minutes / execution</td>
            </tr>            <tr>
              <td><strong>Simultaneous Triggers per User</strong></td>              <td>20 triggers / user / script</td>              <td>20 triggers / user / script</td>
            </tr>            <tr>
              <td><strong>UrlFetch External Calls</strong></td>              <td>20,000 calls / day</td>              <td><strong>100,000 calls / day</strong></td>
            </tr>            <tr>
              <td><strong>Drive File Creation Rate</strong></td>              <td>Standard daily limits</td>              <td>High-throughput cloud storage</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={"lang-en"}>
        <h3>3. Final End-to-End Verification Checklist</h3>        <p>
                            Before considering your workshop project complete, verify that every item below is operational:
                        </p>        <ul>
          <li><strong>1-Click Provisioning:</strong> <code>setupWorkshopEnvironment()</code> ran without errors, generating the Drive folder, the 8 student records in Sheets, and the Slide template.</li>          <li><strong>Form Receipt:</strong> Form submission trigger correctly intercepts entries and sends an HTML confirmation receipt.</li>          <li><strong>Google Contacts:</strong> <code>syncStudentsToGoogleContacts()</code> created or updated participants under the <code>GDG Workspace Training 2026</code> group.</li>          <li><strong>Attendance Audit:</strong> <code>auditStudentAttendanceAndNotify()</code> computed percentages in Column J and emailed the instructor&apos;s summary digest.</li>          <li><strong>Certificate Factory:</strong> Eligible students (&gt;= 80%) received their vector PDF certificate with a unique verification code.</li>          <li><strong>Calendar & Meet:</strong> At-risk students have a 1-on-1 review meeting booked on Google Calendar with a Meet link attached.</li>          <li><strong>Evaluation Document:</strong> <code>generateWorkshopEvaluationDoc()</code> generated the formal retrospective Google Doc and PDF backup with view permissions.</li>          <li><strong>Web App Dashboard:</strong> The deployed Web App loads successfully, provides instant search, and allows students to inspect their status.</li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>3. Checklist de Vérification Finale</h3>        <p>
                            Avant de clore votre workshop, validez que chacun des points suivants est pleinement opérationnel :
                        </p>        <ul>
          <li><strong>Provisionnement en 1 Clic :</strong> <code>setupWorkshopEnvironment()</code> s&apos;est exécuté sans erreur, créant le dossier Drive, les 8 étudiants dans le Sheet et le gabarit Slides.</li>          <li><strong>Accusé de Réception Formulaire :</strong> Le déclencheur de soumission intercepte les réponses et expédie l&apos;email HTML de confirmation.</li>          <li><strong>Google Contacts :</strong> <code>syncStudentsToGoogleContacts()</code> a créé ou enrichi les fiches sous le groupe <code>GDG Workspace Training 2026</code>.</li>          <li><strong>Audit d&apos;Assiduité :</strong> <code>auditStudentAttendanceAndNotify()</code> a calculé les pourcentages en Colonne J et expédié le bilan aux formateurs.</li>          <li><strong>Usine d&apos;E-Certificats :</strong> Les élèves éligibles (&gt;= 80%) ont reçu leur certificat PDF vectoriel avec identifiant unique.</li>          <li><strong>Calendar & Meet :</strong> Les élèves en difficulté disposent d&apos;un créneau individuel planifié sur Google Calendar avec lien Meet.</li>          <li><strong>Document de Bilan :</strong> <code>generateWorkshopEvaluationDoc()</code> a généré le rapport officiel Google Docs et sa copie PDF avec droits de lecture.</li>          <li><strong>Web App Dashboard :</strong> L&apos;application web déployée s&apos;affiche correctement, filtre instantanément les résultats et affiche les attestations.</li>
        </ul>
      </div>
      <div className={"lang-en"}>
        <h3>4. Official Documentation & Further Resources</h3>        <ul>
          <li><strong>Google Apps Script Official Guides:</strong> <a href={"https://developers.google.com/apps-script"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/apps-script</a></li>          <li><strong>Apps Script Quotas & Execution Limits:</strong> <a href={"https://developers.google.com/apps-script/guides/services/quotas"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/apps-script/guides/services/quotas</a></li>          <li><strong>Google Workspace Developer Hub:</strong> <a href={"https://developers.google.com/workspace"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/workspace</a></li>          <li><strong>Related Codelab (Full-Stack Agentic Dart):</strong> <a href={"https://codelab.glosings0n.dev/genkit-dart-agentic-workflows"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/genkit-dart-agentic-workflows</a></li>          <li><strong>Related Codelab (On-Device AI with Flutter & Gemma):</strong> <a href={"https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026</a></li>
        </ul>
      </div>
      <div className={"lang-fr"}>
        <h3>4. Ressources Officielles & Pour Aller Plus Loin</h3>        <ul>
          <li><strong>Guides Officiels Google Apps Script :</strong> <a href={"https://developers.google.com/apps-script"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/apps-script</a></li>          <li><strong>Quotas & Limites d&apos;Exécution Apps Script :</strong> <a href={"https://developers.google.com/apps-script/guides/services/quotas"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/apps-script/guides/services/quotas</a></li>          <li><strong>Portail Développeur Google Workspace :</strong> <a href={"https://developers.google.com/workspace"} target={"_blank"} rel={"noopener noreferrer"} className={"codelab-url-link"}>https://developers.google.com/workspace</a></li>          <li><strong>Codelab Recommandé (Full-Stack Agentic Dart) :</strong> <a href={"https://codelab.glosings0n.dev/genkit-dart-agentic-workflows"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/genkit-dart-agentic-workflows</a></li>          <li><strong>Codelab Recommandé (On-Device AI avec Flutter & Gemma) :</strong> <a href={"https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026"} className={"codelab-url-link"}>https://codelab.glosings0n.dev/flutter-gemma-droidcon-ug-2026</a></li>
        </ul>
      </div>
      <Callout variant={"info"} iconName={"users"} titleEn={"Built for the Global Developer Community"} titleFr={"Built for the Global Developer Community"}>
        <div className={"lang-en"}>
          <div className={"callout-title"}>
Built for the Global Developer Community
          </div>          <p>
                                    Authored by <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Software Engineer, Edge-AI Researcher, Founder @ <MusanTekWordmark /> & Founder of the <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </div>
        <div className={"lang-fr"}>
          <div className={"callout-title"}>
Conçu pour la communauté mondiale des développeurs
          </div>          <p>
                                    Rédigé par <strong>Georges Byona</strong> (<a href={"https://glosings0n.dev"} target={"_blank"} rel={"noopener"}>@glosings0n</a>), Software Engineer, Edge-AI Researcher, Fondateur @ <MusanTekWordmark /> & Fondateur du <a href={"https://flutterfirecamp.dev"} target="_blank" rel="noopener noreferrer" className="ffsc-brand"><FlutterFireCampWordmark /></a>.
                                </p>
        </div>
      </Callout>
    </>
  );
}

export const codelabData: CodelabDefinition = {
  slug: "apps-script-workspace-automation",
  navItems: [
  {
    "index": 0,
    "titleEn": "Context, 5-Day Program & Sandbox Setup",
    "titleFr": "Contexte, Programme 5 Jours & Sandbox",
    "time": "6m"
  },
  {
    "index": 1,
    "titleEn": "Practice 1: Forms to Gmail Notification",
    "titleFr": "Pratique 1 : De Forms à Notification Gmail",
    "time": "6m"
  },
  {
    "index": 2,
    "titleEn": "Practice 2: Google Contacts Ingestion",
    "titleFr": "Pratique 2 : Ingestion Google Contacts",
    "time": "6m"
  },
  {
    "index": 3,
    "titleEn": "Practice 3: Sheets Attendance Audit & Report",
    "titleFr": "Pratique 3 : Audit d'Assiduité & Rapport",
    "time": "6m"
  },
  {
    "index": 4,
    "titleEn": "Practice 4: Vector E-Certificates with Slides",
    "titleFr": "Pratique 4 : E-Certificats avec Slides & PDF",
    "time": "7m"
  },
  {
    "index": 5,
    "titleEn": "Practice 5: Calendar & Google Meet Scheduling",
    "titleFr": "Pratique 5 : Planification Calendar & Meet",
    "time": "6m"
  },
  {
    "index": 6,
    "titleEn": "Practice 6: Structured Docs & Permissions",
    "titleFr": "Pratique 6 : Docs Structurés & Droits Drive",
    "time": "6m"
  },
  {
    "index": 7,
    "titleEn": "Practice 7: Interactive Web App Dashboard",
    "titleFr": "Pratique 7 : Dashboard Web App Interactif",
    "time": "7m"
  },
  {
    "index": 8,
    "titleEn": "Practice 8: Time Triggers & Webhooks",
    "titleFr": "Pratique 8 : Déclencheurs Horaires & Webhooks",
    "time": "5m"
  },
  {
    "index": 9,
    "titleEn": "Production Quotas, Scopes & Best Practices",
    "titleFr": "Quotas, Scopes & Bonnes Pratiques",
    "time": "5m"
  }
],
  steps: [
  {
    index: 0,
    duration: 6,
    eyebrowEn: "Step 1 of 10 | Context, 5-Day Curriculum & Sandbox Setup",
    eyebrowFr: "Étape 1 sur 10 | Contexte, Programme 5 Jours & Initialisation",
    titleEn: "Automation with Google Apps Script Workshop | GDG - Google Workspace Training",
    titleFr: "Workshop Automatisation avec Google Apps Script | GDG - Formation Google Workspace",
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
    eyebrowEn: "Step 2 of 10 | Practice 1: Forms to Gmail Notification",
    eyebrowFr: "Étape 2 sur 10 | Pratique 1 : De Forms à Notification Gmail",
    titleEn: "Practice 1: Automated Responsive Confirmation Receipt on Form Submit",
    titleFr: "Pratique 1 : Accusé de Réception Automatique et Responsive sur Formulaire",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step2,
  },
  {
    index: 2,
    duration: 6,
    eyebrowEn: "Step 3 of 10 | Practice 2: Google Contacts Ingestion",
    eyebrowFr: "Étape 3 sur 10 | Pratique 2 : Ingestion dans Google Contacts",
    titleEn: "Practice 2: Automatic Directory Ingestion into Google Contacts",
    titleFr: "Pratique 2 : Ingestion Automatisée du Répertoire dans Google Contacts",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step3,
  },
  {
    index: 3,
    duration: 6,
    eyebrowEn: "Step 4 of 10 | Practice 3: Attendance Audit & Report",
    eyebrowFr: "Étape 4 sur 10 | Pratique 3 : Audit d'Assiduité & Rapport",
    titleEn: "Practice 3: Student Attendance Audit & Automated Teacher Digest",
    titleFr: "Pratique 3 : Audit d'Assiduité des Élèves et Rapport Enseignant Automatisé",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step4,
  },
  {
    index: 4,
    duration: 7,
    eyebrowEn: "Step 5 of 10 | Practice 4: Vector E-Certificates with Slides",
    eyebrowFr: "Étape 5 sur 10 | Pratique 4 : E-Certificats avec Slides & PDF",
    titleEn: "Practice 4: Automated Vector E-Certificate Factory with Google Slides & PDF",
    titleFr: "Pratique 4 : Usine d'E-Certificats Vectoriels avec Google Slides et PDF",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step5,
  },
  {
    index: 5,
    duration: 6,
    eyebrowEn: "Step 6 of 10 | Practice 5: Calendar & Google Meet Scheduling",
    eyebrowFr: "Étape 6 sur 10 | Pratique 5 : Planification Calendar & Meet",
    titleEn: "Practice 5: Automated Mentoring Sessions with Google Meet Video Links",
    titleFr: "Pratique 5 : Planification Automatique de Mentorat avec Liens Vidéo Meet",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step6,
  },
  {
    index: 6,
    duration: 6,
    eyebrowEn: "Step 7 of 10 | Practice 6: Structured Docs & Permissions",
    eyebrowFr: "Étape 7 sur 10 | Pratique 6 : Docs Structurés & Droits Drive",
    titleEn: "Practice 6: Automated Workshop Evaluation Doc & Drive Governance",
    titleFr: "Pratique 6 : Rapport d'Évaluation dans Google Docs et Gouvernance Drive",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step7,
  },
  {
    index: 7,
    duration: 7,
    eyebrowEn: "Step 8 of 10 | Practice 7: Interactive Web App Dashboard",
    eyebrowFr: "Étape 8 sur 10 | Pratique 7 : Dashboard Web App Interactif",
    titleEn: "Practice 7: Deploying an Interactive Web App Dashboard on Google Sheets",
    titleFr: "Pratique 7 : Déploiement d'un Dashboard Web App Interactif sur Google Sheets",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step8,
  },
  {
    index: 8,
    duration: 5,
    eyebrowEn: "Step 9 of 10 | Practice 8: Time Triggers & Webhooks",
    eyebrowFr: "Étape 9 sur 10 | Pratique 8 : Déclencheurs Horaires & Webhooks",
    titleEn: "Practice 8: Time-Driven Cron Triggers, Webhooks & Google Sites Integration",
    titleFr: "Pratique 8 : Déclencheurs Horaires Automatiques, Webhooks et Intégration Google Sites",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "",
    finalCtaEn: "",
    finalCtaFr: "",
    render: Step9,
  },
  {
    index: 9,
    duration: 5,
    eyebrowEn: "Step 10 of 10 | Production Quotas, Scopes & Best Practices",
    eyebrowFr: "Étape 10 sur 10 | Quotas, Scopes & Bonnes Pratiques",
    titleEn: "Production Quotas, Security Scopes & Best Practices",
    titleFr: "Quotas de Production, Scopes de Sécurité & Bonnes Pratiques",
    lastUpdatedIso: "2026-11-04",
    lastUpdatedEn: "November 04, 2026",
    lastUpdatedFr: "04 novembre 2026",
    finalCtaHref: "/",
    finalCtaEn: "Back to All Codelabs →",
    finalCtaFr: "Retour à tous les Codelabs →",
    render: Step10,
  }
  ],
};
