/**
 * glosings0n Codelabs Interactive Engine
 * Supports: Light/Dark Theme, Step-by-Step Navigation, Progress Bar,
 * Time Remaining, Keyboard Shortcuts, and One-Click Code Copy.
 */

document.addEventListener('DOMContentLoaded', () => {
    initEnvironmentLinks();
    initThemeToggle();
    initStepNavigation();
    initCodeCopyButtons();
    initMobileSidebar();
});

/**
 * 0. Environment-Aware Routing (Local Dev vs. Live codelabs.glosings0n.dev)
 * - In Live (codelabs.glosings0n.dev):
 *   * Hub is at "/"
 *   * Codelab session is at "/<slug>"
 *   * Hub logo points to "https://glosings0n.dev"
 *   * Codelab logo points back to Hub "/"
 * - In Local Dev (localhost, 127.0.0.1, or non-subdomain preview):
 *   * Hub is at "/codelabs/hub.html"
 *   * Codelab session is at "/codelabs/<slug>/index.html"
 *   * Hub logo points to "/" (local portfolio index.html)
 *   * Codelab logo points back to "/codelabs/hub.html"
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

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const iconContainer = document.getElementById('theme-toggle-icon');

    const targetModeLabel = theme === 'dark' ? 'Light mode' : 'Dark mode';
    if (toggleBtn) {
        toggleBtn.setAttribute('title', targetModeLabel);
        toggleBtn.setAttribute('aria-label', targetModeLabel);
    }

    if (iconContainer) {
        if (theme === 'dark') {
            // Sun icon for switching to Light mode
            iconContainer.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            // Moon icon for switching to Dark mode
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
    const timeRemainingEl = document.getElementById('time-remaining-label');

    if (steps.length === 0 || navItems.length === 0) return;

    let currentStepIndex = 0;

    function goToStep(index, updateHash = true) {
        if (index < 0 || index >= steps.length) return;
        currentStepIndex = index;

        // Activate current step panel
        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx === index);
        });

        // Update sidebar items
        navItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
            if (idx < index) {
                item.classList.add('completed');
            }
        });

        // Update top progress bar
        if (progressFill) {
            const pct = ((index + 1) / steps.length) * 100;
            progressFill.style.width = `${pct}%`;
        }

        // Calculate remaining minutes from step data-duration attributes
        if (timeRemainingEl) {
            let remainingMins = 0;
            for (let i = index; i < steps.length; i++) {
                remainingMins += parseInt(steps[i].getAttribute('data-duration') || '5', 10);
            }
            timeRemainingEl.textContent = `${remainingMins} min left`;
        }

        // Update URL hash without jumping
        if (updateHash) {
            history.replaceState(null, null, `#step-${index + 1}`);
        }

        // Close mobile drawer if open
        const sidebar = document.getElementById('codelab-sidebar');
        if (sidebar) sidebar.classList.remove('open');

        // Scroll to top of step smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Sidebar item clicks
    navItems.forEach((item, idx) => {
        item.addEventListener('click', () => goToStep(idx));
    });

    // Prev / Next buttons inside step footers
    document.querySelectorAll('[data-step-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = parseInt(btn.getAttribute('data-step-target'), 10);
            goToStep(target);
        });
    });

    // Keyboard navigation (Left / Right arrows when not inside an input)
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

    // Restore step from URL hash (#step-1 .. #step-N)
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
                const originalHtml = btn.innerHTML;
                btn.classList.add('copied');
                btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;

                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalHtml;
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
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}
