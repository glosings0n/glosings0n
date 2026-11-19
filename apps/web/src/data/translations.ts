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
    heroRolePrefix: "Software Engineer, Founder @ ",
    heroRoleSuffix:
      ", Builder & Edge-AI @ SautiLM, Community Leader, Tech Trainer, Content Creator & Speaker",
    heroCta: "Get in Touch",
    aboutTitle: "Achievements & Impact",
    block1Tag: "Founder & Engineering",
    block1HeadingPrefix: "Software Engineer & Founder of ",
    block1Text:
      "We design robust software architectures and intuitive applications with cutting-edge technologies. Performance, code quality, and strong community impact are at the core of our achievements.",
    blockSautilmTag: "Research & Edge-AI",
    blockSautilmHeading: "Edge-AI Researcher & SautiLM Initiative",
    blockSautilmText:
      "Pioneering offline-first Edge-AI and quantized Small Language Models (SLMs) for mother-tongue literacy in nomadic pastoralist and conflict-displaced communities across East Africa. Our open-source research pipeline fine-tunes lightweight models via LoRA and Unsloth, then applies INT8 quantization for 100% offline local inference on standard Android smartphones at zero data cost.",
    blockSautilmStat: "Offline Local Inference",
    block2Tag: "Bootcamp & Training",
    block2HeadingPrefix: "Initiator & Lead Organizer of ",
    block2TextPrefix:
      "I initiated and founded this large-scale summer program in French-speaking Africa to train developers on Flutter and Firebase. The camp directly bridges participants, recruiters, and French GDEs (Google Developer Experts) to open up concrete opportunities.",
    block2TextSuffix: "",
    block2Stat: "Participants impacted",
    block3Tag: "Community Impact",
    block3Heading: "GDG Leadership",
    block3TextPrefix:
      "Having served as a GDG Lead, I organized and hosted numerous developer workshops and tech conferences. Our mission successfully trained and introduced over ",
    block3TextHighlight: "500+ students",
    block3TextSuffix:
      " to digital technologies, actively boosting the tech ecosystem in the eastern part of the DRC.",
    block3Stat: "Students trained",
    block4Tag: "Knowledge Sharing",
    block4Heading: "Speaker & Tech Content Creator",
    block4TextPrefix:
      "Sharing knowledge through in-depth technical articles on Medium, immersive video tutorials on the ",
    block4TextSuffix:
      " YouTube channel, and speaking engagements at major tech events such as droidCon, flutterCon, Build with AI, Google I/O Extended, and DevFests.",
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
    heroRolePrefix: "Software Engineer, Fondateur @ ",
    heroRoleSuffix:
      ", Builder & Edge-AI @ SautiLM, Leader Communautaire, Formateur Tech, Créateur de contenu & Conférencier",
    heroCta: "Me contacter",
    aboutTitle: "Réalisations & Impact",
    block1Tag: "Fondateur & Ingénierie",
    block1HeadingPrefix: "Ingénieur Logiciel & Fondateur de ",
    block1Text:
      "Nous concevons des architectures logicielles robustes et des applications intuitives avec les technologies les plus modernes. Performance, qualité du code et fort impact communautaire sont au cœur de nos réalisations.",
    blockSautilmTag: "Recherche & Edge-AI",
    blockSautilmHeading: "Chercheur en Edge-AI & Initiative SautiLM",
    blockSautilmText:
      "Pionnier de l'IA embarquée hors-ligne et des Small Language Models (SLMs) quantifiés pour l'apprentissage en langue maternelle dans les communautés pastorales nomades et déplacées d'Afrique de l'Est. Notre pipeline de recherche open-source fine-tune des modèles légers avec LoRA et Unsloth, puis applique une quantification INT8 pour une inférence 100 % locale sur smartphones Android sans connexion ni frais de données.",
    blockSautilmStat: "Inférence locale hors-ligne",
    block2Tag: "Bootcamp & Formation",
    block2HeadingPrefix: "Initiateur & Organisateur Principal du ",
    block2TextPrefix:
      "J'ai fondé et initié ce programme d'été d'envergure en Afrique francophone pour former les développeurs sur Flutter et Firebase. Le camp crée un pont direct entre les participants, des recruteurs et des GDEs (Google Developer Experts) français pour ouvrir des opportunités concrètes.",
    block2TextSuffix: "",
    block2Stat: "Participants impactés",
    block3Tag: "Impact Communautaire",
    block3Heading: "Leadership GDG",
    block3TextPrefix:
      "En tant qu'ancien Lead GDG, j'ai eu à organiser et animer de nombreux ateliers et conférences technologiques. Notre mission a permis d'initier et de former plus de ",
    block3TextHighlight: "500 étudiants",
    block3TextSuffix:
      " aux technologies du numérique, dynamisant activement l'écosystème tech dans l'Est de la RDC.",
    block3Stat: "Étudiants formés",
    block4Tag: "Partage de connaissances",
    block4Heading: "Conférencier & Créateur de contenu Tech",
    block4TextPrefix:
      "Partage de connaissances à travers des articles techniques approfondis sur Medium, des tutoriels vidéo immersifs sur la chaîne YouTube de ",
    block4TextSuffix:
      ", ainsi que des interventions en tant que speaker lors d'événements technologiques majeurs tels que droidCon, flutterCon, Build with AI, Google I/O Extended et les DevFests.",
    block4Articles: "Articles",
    block4Videos: "Vidéos",
    block4Codelabs: "Codelabs",
    blockLinkMore: "En savoir plus",
    contactTitle: "Restons en contact",
    contactSubtitle:
      "Démarrons un projet ou discutons d'une intervention lors de votre prochain événement tech.",
  },
};
