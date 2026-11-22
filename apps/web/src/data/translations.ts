export type PortfolioLang = "en" | "fr";

export interface PortfolioCopy {
  navHome: string;
  navAbout: string;
  navContact: string;
  heroRolePrefix: string;
  heroRoleSuffix: string;
  heroCta: string;
  aboutTitle: string;
  block1Tag: string;
  block1HeadingPrefix: string;
  block1Text: string;
  blockSautilmTag: string;
  blockSautilmHeading: string;
  blockSautilmText: string;
  blockSautilmStat: string;
  block2Tag: string;
  block2HeadingPrefix: string;
  block2TextPrefix: string;
  block2TextSuffix: string;
  block2Stat: string;
  block3Tag: string;
  block3Heading: string;
  block3TextPrefix: string;
  block3TextHighlight: string;
  block3TextSuffix: string;
  block3Stat: string;
  block4Tag: string;
  block4Heading: string;
  block4TextPrefix: string;
  block4TextSuffix: string;
  block4Articles: string;
  block4Videos: string;
  block4Codelabs: string;
  blockLinkMore: string;
  contactTitle: string;
  contactSubtitle: string;
}

export const PORTFOLIO_TRANSLATIONS: Record<PortfolioLang, PortfolioCopy> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    heroRolePrefix:
      "Founder & Software Engineer @ ",
    heroRoleSuffix:
      " | Edge-AI Researcher @ SautiLM | Founder @ FlutterFire Summer Camp | Offline-first Flutter & on-device AI | Speaker & Content Creator",
    heroCta: "Get in Touch",
    aboutTitle: "Achievements & Impact",
    block1Tag: "Founder & Engineering",
    block1HeadingPrefix:
      "Founder & Software Engineer at",
    block1Text:
      "MusanTek builds software and AI for the DRC and East Africa: web and mobile apps, offline-first architectures and on-device AI designed for real field conditions, with modest phones and unreliable networks. Performance, code quality and lasting local impact guide every product.",
    blockSautilmTag: "Research & Edge-AI",
    blockSautilmHeading:
      "Edge-AI Researcher at SautiLM",
    blockSautilmText:
      "Researching offline-first Edge-AI and quantized Small Language Models (SLMs) for African languages, to bring mother-tongue education back to conflict-affected and nomadic communities in Eastern DRC and East Africa. The open-source pipeline fine-tunes lightweight models with LoRA and Unsloth, then applies INT8 quantization (Gemma 3, LiteRT-LM) for 100% offline inference on everyday Android phones, at zero data cost.",
    blockSautilmStat: "Offline Local Inference",
    block2Tag: "Bootcamp & Training",
    block2HeadingPrefix:
      "Founder & Lead Organizer of ",
    block2TextPrefix:
      "I founded this large-scale summer program in French-speaking Africa to train developers on Flutter and Firebase. More than 1,000 participants so far, with a direct bridge to recruiters and French GDEs (Google Developer Experts) that opens up concrete opportunities.",
    block2TextSuffix: "",
    block2Stat: "Participants impacted",
    block3Tag: "Community Impact",
    block3Heading:
      "Former GDG Lead",
    block3TextPrefix:
      "As GDG on Campus Lead at the Université Catholique de Bukavu, I organized and hosted developer workshops and tech conferences. Together we trained and introduced more than ",
    block3TextHighlight:
      "500 students",
    block3TextSuffix:
      " to digital technologies, boosting the tech ecosystem in Eastern DRC.",
    block3Stat: "Students trained",
    block4Tag: "Knowledge Sharing",
    block4Heading: "Speaker & Tech Content Creator",
    block4TextPrefix:
      "Sharing knowledge through in-depth technical articles on Medium, immersive video tutorials on the ",
    block4TextSuffix:
      " YouTube channel, and talks at droidcon, flutterCon, DevFest, Google I/O Extended and Build with AI events.",
    block4Articles: "Articles",
    block4Videos: "Videos",
    block4Codelabs: "Codelabs",
    blockLinkMore: "Learn more",
    contactTitle: "Let's Keep in Touch",
    contactSubtitle:
      "Let's start a project or discuss a speaking engagement at your next tech event.",
  },
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navContact: "Contact",
    heroRolePrefix:
      "Fondateur & Software Engineer @ ",
    heroRoleSuffix:
      " | Chercheur Edge-AI @ SautiLM | Fondateur @ FlutterFire Summer Camp | Flutter offline-first & IA embarquée | Speaker & Créateur de contenu",
    heroCta: "Me contacter",
    aboutTitle: "Réalisations & Impact",
    block1Tag: "Fondateur & Ingénierie",
    block1HeadingPrefix:
      "Fondateur & Ingénieur logiciel chez",
    block1Text:
      "MusanTek conçoit des logiciels et de l'IA pour la RDC et l'Afrique de l'Est : applications web et mobiles, architectures offline-first et IA embarquée pensées pour le terrain, avec des téléphones modestes et des réseaux instables. Performance, qualité du code et impact local durable guident chaque produit.",
    blockSautilmTag: "Recherche & Edge-AI",
    blockSautilmHeading:
      "Chercheur en Edge-AI chez SautiLM",
    blockSautilmText:
      "Recherche sur l'IA embarquée hors ligne et les Small Language Models (SLMs) quantifiés pour les langues africaines, afin de ramener l'enseignement en langue maternelle dans les communautés nomades et touchées par les conflits de l'Est de la RDC et d'Afrique de l'Est. Le pipeline open source fine-tune des modèles légers avec LoRA et Unsloth, puis applique une quantification INT8 (Gemma 3, LiteRT-LM) pour une inférence 100 % hors ligne sur des smartphones Android ordinaires, sans frais de données.",
    blockSautilmStat: "Inférence locale hors-ligne",
    block2Tag: "Bootcamp & Formation",
    block2HeadingPrefix:
      "Fondateur & Organisateur principal du ",
    block2TextPrefix:
      "J'ai fondé ce programme d'été d'envergure en Afrique francophone pour former les développeurs sur Flutter et Firebase. Plus de 1 000 participants à ce jour, avec un pont direct vers des recruteurs et des GDEs (Google Developer Experts) français qui ouvre des opportunités concrètes.",
    block2TextSuffix: "",
    block2Stat: "Participants impactés",
    block3Tag: "Impact Communautaire",
    block3Heading:
      "Ancien Lead GDG",
    block3TextPrefix:
      "En tant que Lead du GDG on Campus de l'Université Catholique de Bukavu, j'ai organisé et animé des ateliers et des conférences tech. Ensemble, nous avons initié et formé plus de ",
    block3TextHighlight:
      "500 étudiants",
    block3TextSuffix:
      " aux technologies du numérique, dynamisant l'écosystème tech de l'Est de la RDC.",
    block3Stat: "Étudiants formés",
    block4Tag: "Partage de connaissances",
    block4Heading: "Conférencier & Créateur de contenu Tech",
    block4TextPrefix:
      "Partage de connaissances à travers des articles techniques approfondis sur Medium, des tutoriels vidéo immersifs sur la chaîne YouTube de ",
    block4TextSuffix:
      ", ainsi que des talks à droidcon, flutterCon, DevFest, Google I/O Extended et Build with AI.",
    block4Articles: "Articles",
    block4Videos: "Vidéos",
    block4Codelabs: "Codelabs",
    blockLinkMore: "En savoir plus",
    contactTitle: "Restons en contact",
    contactSubtitle:
      "Démarrons un projet ou discutons d'une intervention lors de votre prochain événement tech.",
  },
};
