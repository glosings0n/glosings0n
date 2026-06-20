/**
 * Portfolio Interactivity - Glosingson
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollReveal();
    initActiveLinkHighlighting();
    initCurrentYear();
    initAppConfig();
    handleInitialScroll();
});

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
