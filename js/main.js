/**
 * Portfolio Interactivity - Glosingson
 * Vanilla JavaScript (ES6+)
 */

const Translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "hero-subtitle": "Software Engineer, Founder of <span class=\"losingtech-font\">LosingTech</span>, Tech Speaker & Community Leader",
        "hero-cta": "Get in Touch",
        "about-title": "Achievements & Impact",
        "block1-tag": "Founder & Engineering",
        "block1-heading": "Software Engineer & Founder of <span class=\"losingtech-font\">LosingTech</span>",
        "block1-text": "Powering innovative and high-performance software solutions. At <span class=\"losingtech-font\">LosingTech</span>, we design robust architectures and intuitive applications using cutting-edge technologies, placing absolute priority on performance, code quality, and above all, community impact.",
        "block2-tag": "Bootcamp & Training",
        "block2-heading": "Initiator & Lead Organizer of FlutterFire Summer Camp",
        "block2-text": "As the founder, initiator, and lead organizer of this large-scale initiative, I designed and spearheaded the largest summer developer bootcamp dedicated to Flutter & Firebase in Africa. This program has impacted and empowered over 1000+ passionate participants through live-coding, real-world projects, and high-level technical mentorship.",
        "block2-stat": "Participants impacted",
        "block3-tag": "Community Impact",
        "block3-heading": "GDG Leadership",
        "block3-text": "As a GDG Lead, I organize and host numerous developer workshops and tech conferences. Our mission has trained over <strong>500+ students</strong> on topics ranging from Flutter mobile development to Cloud architectures.",
        "block3-stat": "Students trained",
        "block4-tag": "Knowledge Sharing",
        "block4-heading": "Speaker & Tech Content Creator",
        "block4-text": "Sharing knowledge through in-depth technical articles on Medium, immersive video tutorials on the FlutterFire Summer Camp YouTube channel, and speaking engagements at major tech events such as Build with AI, Google I/O Extended, and DevFests.",
        "block4-articles": `<svg class="platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6.5" cy="12" r="4.5"></circle><ellipse cx="15.5" cy="12" rx="2.5" ry="4.5"></ellipse><ellipse cx="21" cy="12" rx="1" ry="4.5"></ellipse></svg> Articles`,
        "block4-videos": `<svg class="platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"></path><path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke-linejoin="round"></path></svg> Videos`,
        "block-link-more": "Learn more &rarr;",
        "contact-title": "Let's Keep in Touch",
        "contact-subtitle": "Let's start a project or discuss a speaking engagement at your next tech event."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-contact": "Contact",
        "hero-subtitle": "Ingénieur Logiciel, Fondateur de <span class=\"losingtech-font\">LosingTech</span>, Conférencier Tech & Leader Communautaire",
        "hero-cta": "Me contacter",
        "about-title": "Réalisations & Impact",
        "block1-tag": "Fondateur & Ingénierie",
        "block1-heading": "Ingénieur Logiciel & Fondateur de <span class=\"losingtech-font\">LosingTech</span>",
        "block1-text": "Propulser des solutions logicielles innovantes et performantes. Chez <span class=\"losingtech-font\">LosingTech</span>, nous concevons des architectures robustes et des applications intuitives avec les technologies les plus modernes, en accordant une priorité absolue à la performance, la qualité du code, et surtout à un fort impact communautaire.",
        "block2-tag": "Bootcamp & Formation",
        "block2-heading": "Initiateur & Organisateur Principal du FlutterFire Summer Camp",
        "block2-text": "En tant qu'initiateur et organisateur principal de cette initiative d'envergure, j'ai fondé et propulsé le plus grand bootcamp d'été dédié à Flutter et Firebase en Afrique. Ce programme a réuni et formé plus de 1000 développeurs passionnés à travers des sessions de live-coding intensives, des projets réels et un mentorat technique de haut niveau.",
        "block2-stat": "Participants impactés",
        "block3-tag": "Impact Communautaire",
        "block3-heading": "Leadership GDG",
        "block3-text": "En tant que Lead GDG, j'organise et anime de nombreux ateliers et conférences technologiques. Notre mission a permis de former plus de <strong>500 étudiants</strong> sur des sujets allant du développement mobile avec Flutter aux architectures Cloud.",
        "block3-stat": "Étudiants formés",
        "block4-tag": "Partage de connaissances",
        "block4-heading": "Conférencier & Créateur de contenu Tech",
        "block4-text": "Partage de connaissances à travers des articles techniques approfondis sur Medium, des tutoriels vidéo immersifs sur la chaîne YouTube de FlutterFire Summer Camp, ainsi que des interventions en tant que speaker lors d'événements technologiques majeurs tels que Build with AI, Google I/O Extended et les DevFests.",
        "block4-articles": `<svg class="platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6.5" cy="12" r="4.5"></circle><ellipse cx="15.5" cy="12" rx="2.5" ry="4.5"></ellipse><ellipse cx="21" cy="12" rx="1" ry="4.5"></ellipse></svg> Articles`,
        "block4-videos": `<svg class="platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"></path><path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke-linejoin="round"></path></svg> Vidéos`,
        "block-link-more": "En savoir plus &rarr;",
        "contact-title": "Restons en contact",
        "contact-subtitle": "Démarrons un projet ou discutons d'une intervention lors de votre prochain événement tech."
    }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initScrollReveal();
    initActiveLinkHighlighting();
    initCurrentYear();
    initAppConfig();
    handleInitialScroll();
});

/**
 * Initialize language detection and switcher buttons
 */
function initLanguage() {
    // 1. Detect browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();

    // 2. Check if a language is saved in localStorage, default to browser language, fallback to 'en'
    let savedLang = localStorage.getItem('glosings0n_lang');
    if (!savedLang) {
        savedLang = (browserLang === 'fr') ? 'fr' : 'en';
    }

    // 3. Apply selected language
    setLanguage(savedLang);

    // 4. Setup manual toggle event listeners
    const btnEn = document.getElementById('lang-btn-en');
    const btnFr = document.getElementById('lang-btn-fr');

    if (btnEn && btnFr) {
        btnEn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
        btnFr.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('fr');
        });
    }
}

/**
 * Set current language across the document and dynamically replace strings
 */
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') {
        lang = 'en';
    }
    currentLanguage = lang;
    localStorage.setItem('glosings0n_lang', lang);

    // Update active button state
    const btnEn = document.getElementById('lang-btn-en');
    const btnFr = document.getElementById('lang-btn-fr');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnFr) btnFr.classList.toggle('active', lang === 'fr');

    // Translate all elements with data-i18n attribute
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (Translations[lang] && Translations[lang][key]) {
            element.innerHTML = Translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

/**
 * Smoothly scroll to the hash section on initial page load if present
 */
function handleInitialScroll() {
    const hash = window.location.hash;
    if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Slight delay to ensure content layout is fully computed
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    }
}

/**
 * Set Dynamic Current Year in Footer
 */
function initCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * Apply AppConfig values dynamically to the DOM elements
 */
function initAppConfig() {
    if (typeof AppConfig === 'undefined') return;

    // Contact Email Link
    const emailLink = document.getElementById('contact-email-link');
    if (emailLink) {
        emailLink.href = `mailto:${AppConfig.email}`;
        emailLink.textContent = AppConfig.email;
    }

    // Platforms in creation block
    const btnMedium = document.getElementById('btn-medium');
    if (btnMedium) btnMedium.href = AppConfig.links.medium;

    const btnYoutube = document.getElementById('btn-youtube');
    if (btnYoutube) btnYoutube.href = AppConfig.links.youtube;

    // Footer Socials
    const socialGithub = document.getElementById('social-github');
    if (socialGithub) socialGithub.href = AppConfig.links.github;

    const socialLinkedin = document.getElementById('social-linkedin');
    if (socialLinkedin) socialLinkedin.href = AppConfig.links.linkedin;

    const socialMedium = document.getElementById('social-medium');
    if (socialMedium) socialMedium.href = AppConfig.links.medium;

    const socialYoutube = document.getElementById('social-youtube');
    if (socialYoutube) socialYoutube.href = AppConfig.links.youtube;

    const socialTwitter = document.getElementById('social-twitter');
    if (socialTwitter) socialTwitter.href = AppConfig.links.twitter;

    // Learn More links & Image links
    const linkLosingtech = document.getElementById('link-losingtech');
    if (linkLosingtech) linkLosingtech.href = AppConfig.links.losingTech;
    const linkImgLosingtech = document.getElementById('link-img-losingtech');
    if (linkImgLosingtech) linkImgLosingtech.href = AppConfig.links.losingTech;

    const linkGdg = document.getElementById('link-gdg');
    if (linkGdg) linkGdg.href = AppConfig.links.gdgCampus;
    const linkImgGdg = document.getElementById('link-img-gdg');
    if (linkImgGdg) linkImgGdg.href = AppConfig.links.gdgCampus;

    const linkFlutterfire = document.getElementById('link-flutterfire');
    if (linkFlutterfire) linkFlutterfire.href = AppConfig.links.flutterFireSummer;
    const linkImgFlutterfire = document.getElementById('link-img-flutterfire');
    if (linkImgFlutterfire) linkImgFlutterfire.href = AppConfig.links.flutterFireSummer;

    const linkCreator = document.getElementById('link-creator');
    if (linkCreator) linkCreator.href = AppConfig.links.medium; // default block 4 to Medium
    const linkImgCreator = document.getElementById('link-img-creator');
    if (linkImgCreator) linkImgCreator.href = AppConfig.links.medium;
}

/**
 * Mobile Menu Toggle & Behavior
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('navigation-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileMenuBtn || !navMenu) return;

    // Toggle menu state on button click
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        mobileMenuBtn.classList.toggle('open');
        
        // Toggle aria-expanded for accessibility
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenuBtn.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside of the nav menu
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickInsideBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideBtn && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            mobileMenuBtn.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Scroll Reveal Animations (using Intersection Observer)
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it reaches the viewport center
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/**
 * Active Navigation Link Highlighting on Scroll & Dynamic URL Hash Update
 */
function initActiveLinkHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    // Handle clicks on nav links to avoid showing /#home
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    const targetUrl = targetId === 'home' ? window.location.pathname : href;
                    history.replaceState(null, null, targetUrl);
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        let currentActive = '';
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        // Fallback for bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            currentActive = sections[sections.length - 1].getAttribute('id');
        }

        if (currentActive) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${currentActive}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Update URL hash dynamically without screen jumping
            const targetHash = currentActive === 'home' ? '' : `#${currentActive}`;
            const targetUrl = currentActive === 'home' ? window.location.pathname : `#${currentActive}`;
            
            if (window.location.hash !== targetHash) {
                history.replaceState(null, null, targetUrl);
            }
        }
    });
}
