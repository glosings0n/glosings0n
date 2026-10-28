/**
 * glosings0n Codelabs Interactive Engine
 * Supports: Bilingual Switching (EN / FR with 100% English Code),
 * Light/Dark Theme, Public-Only GitHub Repo Button Guard,
 * Step-by-Step Navigation, Progress Bar, Time Remaining,
 * Keyboard Shortcuts, and One-Click Code Copy.
 */

let currentCodelabLang = 'en';
let currentRemainingMins = 0;

document.addEventListener('DOMContentLoaded', () => {
    initEnvironmentLinks();
    initGithubButtonGuard();
    initCurrentYear();
    initLanguageToggle();
    initThemeToggle();
    initStepNavigation();
    initCodeCopyButtons();
    initMobileSidebar();
});

/**
 * Populate dynamic current year ONLY on #current-year (Hub page),
 * while keeping individual Codelab session years fixed to their event year.
 */
function initCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * 0. Environment-Aware Routing (Local Dev vs. Live codelabs.glosings0n.dev)
 */
function initEnvironmentLinks() {
    const isSubdomain = window.location.hostname === 'codelabs.glosings0n.dev';
    const hubPath = isSubdomain ? '/' : '/codelabs/hub.html';
    const portfolioPath = isSubdomain ? 'https://glosings0n.dev' : '/';

    const hubBrandLink = document.getElementById('hub-brand-link');
    if (hubBrandLink) {
        hubBrandLink.href = portfolioPath;
    }

    const codelabHomeLink = document.getElementById('codelab-home-link');
    if (codelabHomeLink) {
        codelabHomeLink.href = hubPath;
    }

    const codelabSubLink = document.getElementById('codelab-sub-link');
    if (codelabSubLink) {
        codelabSubLink.href = hubPath;
    }

    document.querySelectorAll('.codelab-card[data-codelab-slug]').forEach(card => {
        const slug = card.getAttribute('data-codelab-slug');
        if (slug) {
            card.href = isSubdomain ? `/${slug}` : `/codelabs/${slug}/index.html`;
        }
    });
}

/**
 * 0b. Public-Only GitHub Button Guard
 * Automatically hides the GitHub button if no public GitHub URL is configured.
 */
function initGithubButtonGuard() {
    const githubBtns = document.querySelectorAll('#codelab-github-btn, .codelab-github-btn');
    githubBtns.forEach(btn => {
        const rawHref = (btn.getAttribute('href') || '').trim();
        const isPublicGithub = rawHref.startsWith('https://github.com/') && rawHref.length > 'https://github.com/'.length;
        if (!isPublicGithub || btn.hasAttribute('hidden')) {
            btn.setAttribute('hidden', '');
            btn.style.display = 'none';
            btn.setAttribute('aria-hidden', 'true');
        } else {
            btn.removeAttribute('hidden');
            btn.style.display = '';
            btn.removeAttribute('aria-hidden');
        }
    });
}

/**
 * 0c. Bilingual Switcher (EN / FR) for UI & Prose (Code blocks stay 100% EN)
 */
function initLanguageToggle() {
    const savedLang = localStorage.getItem('glosings0n_codelab_lang');
    const browserLang = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    const initialLang = (savedLang === 'fr' || savedLang === 'en') ? savedLang : browserLang;

    applyCodelabLanguage(initialLang);

    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            if (targetLang === 'en' || targetLang === 'fr') {
                applyCodelabLanguage(targetLang);
                localStorage.setItem('glosings0n_codelab_lang', targetLang);
            }
        });
    });
}

function applyCodelabLanguage(lang) {
    currentCodelabLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        const isCurrent = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    // Update elements with data-en / data-fr attributes (excluding code blocks)
    document.querySelectorAll('[data-en][data-fr]').forEach(el => {
        if (el.closest('pre, code')) return;
        const val = el.getAttribute(`data-${lang}`);
        if (val !== null) {
            el.innerHTML = val;
        }
    });

    // Update copy code button labels (not currently in 'copied' state)
    document.querySelectorAll('.copy-code-btn:not(.copied)').forEach(btn => {
        const label = lang === 'fr' ? 'Copier' : 'Copy';
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> ${label}`;
    });

    // Update time remaining label
    updateTimeRemainingLabel();

    // Update theme & GitHub button tooltips
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeLabels(currentTheme);

    document.querySelectorAll('#codelab-github-btn, .codelab-github-btn').forEach(btn => {
        const ghLabel = lang === 'fr' ? 'Ouvrir le dépôt GitHub' : 'Open the GitHub repo';
        btn.setAttribute('title', ghLabel);
        btn.setAttribute('aria-label', ghLabel);
    });
}

function updateTimeRemainingLabel() {
    const timeRemainingEl = document.getElementById('time-remaining-label');
    if (timeRemainingEl && currentRemainingMins > 0) {
        timeRemainingEl.textContent = currentCodelabLang === 'fr'
            ? `${currentRemainingMins} min restantes`
            : `${currentRemainingMins} min left`;
    }
}

/**
 * 1. Light / Dark Mode Switcher (Default: Dark matching glosings0n.dev)
 */
function initThemeToggle() {
    const savedTheme = localStorage.getItem('glosings0n_codelab_theme') || 'dark';
    applyTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('glosings0n_codelab_theme', next);
        });
    }
}

function updateThemeLabels(theme) {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;
    const targetModeLabel = theme === 'dark'
        ? (currentCodelabLang === 'fr' ? 'Mode clair' : 'Light mode')
        : (currentCodelabLang === 'fr' ? 'Mode sombre' : 'Dark mode');
    toggleBtn.setAttribute('title', targetModeLabel);
    toggleBtn.setAttribute('aria-label', targetModeLabel);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const iconContainer = document.getElementById('theme-toggle-icon');

    updateThemeLabels(theme);

    if (iconContainer) {
        if (theme === 'dark') {
            iconContainer.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            iconContainer.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        }
    }
}

/**
 * 2. Step-by-Step Codelab Navigation Engine
 */
function initStepNavigation() {
    const steps = Array.from(document.querySelectorAll('.codelab-step'));
    const navItems = Array.from(document.querySelectorAll('.step-nav-item'));
    const progressFill = document.getElementById('codelab-progress-fill');

    if (steps.length === 0 || navItems.length === 0) return;

    let currentStepIndex = 0;

    function goToStep(index, updateHash = true) {
        if (index < 0 || index >= steps.length) return;
        currentStepIndex = index;

        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx === index);
        });

        navItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
            if (idx < index) {
                item.classList.add('completed');
            }
        });

        if (progressFill) {
            const pct = ((index + 1) / steps.length) * 100;
            progressFill.style.width = `${pct}%`;
        }

        let remainingMins = 0;
        for (let i = index; i < steps.length; i++) {
            remainingMins += parseInt(steps[i].getAttribute('data-duration') || '5', 10);
        }
        currentRemainingMins = remainingMins;
        updateTimeRemainingLabel();

        if (updateHash) {
            history.replaceState(null, null, `#step-${index + 1}`);
        }

        const sidebar = document.getElementById('codelab-sidebar');
        const toggleBtn = document.getElementById('sidebar-toggle-btn');
        if (sidebar) sidebar.classList.remove('open');
        if (toggleBtn) {
            toggleBtn.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }

        const mainContainer = document.querySelector('.codelab-main');
        if (mainContainer) {
            mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navItems.forEach((item, idx) => {
        item.addEventListener('click', () => goToStep(idx));
    });

    document.querySelectorAll('[data-step-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = parseInt(btn.getAttribute('data-step-target'), 10);
            goToStep(target);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

        if (e.key === 'ArrowRight') {
            if (currentStepIndex < steps.length - 1) {
                goToStep(currentStepIndex + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentStepIndex > 0) {
                goToStep(currentStepIndex - 1);
            }
        }
    });

    const hashMatch = window.location.hash.match(/^#step-(\d+)$/);
    if (hashMatch) {
        const requestedIdx = parseInt(hashMatch[1], 10) - 1;
        if (requestedIdx >= 0 && requestedIdx < steps.length) {
            goToStep(requestedIdx, false);
            return;
        }
    }

    goToStep(0, false);
}

/**
 * 3. One-Click Copy Code Buttons
 */
function initCodeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-code-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeWindow = btn.closest('.code-window');
            const codeEl = codeWindow ? codeWindow.querySelector('pre code') : null;
            if (!codeEl) return;

            const rawCode = codeEl.innerText;
            try {
                await navigator.clipboard.writeText(rawCode);
                btn.classList.add('copied');
                const copiedText = currentCodelabLang === 'fr' ? 'Copié !' : 'Copied!';
                btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${copiedText}`;

                setTimeout(() => {
                    btn.classList.remove('copied');
                    const defaultLabel = currentCodelabLang === 'fr' ? 'Copier' : 'Copy';
                    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> ${defaultLabel}`;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });
}

/**
 * 4. Mobile Sidebar Drawer
 */
function initMobileSidebar() {
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.getElementById('codelab-sidebar');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = sidebar.classList.toggle('open');
        toggleBtn.classList.toggle('open', isOpen);
        toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            toggleBtn.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
}
