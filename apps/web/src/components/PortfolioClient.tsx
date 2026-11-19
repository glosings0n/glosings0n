"use client";

import { useStoredLang } from "@repo/ui";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PORTFOLIO_TRANSLATIONS } from "@/data/translations";
import { useCallback, useEffect, useState } from "react";

export function PortfolioClient() {
  const [lang, setLang] = useStoredLang("glosings0n_lang", false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#home") {
      history.replaceState(null, "", window.location.pathname);
    } else if (hash) {
      const targetId = hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const timer = setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      if (sections.length === 0) return;

      let currentActive = "";
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentActive = section.id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        const last = sections[sections.length - 1];
        if (last) currentActive = last.id;
      }

      if (currentActive) {
        setActiveSection(currentActive);
        const targetHash = currentActive === "home" ? "" : `#${currentActive}`;
        const targetUrl =
          currentActive === "home"
            ? window.location.pathname
            : `#${currentActive}`;
        if (window.location.hash !== targetHash) {
          history.replaceState(null, "", targetUrl);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateHome = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setActiveSection("home");
  }, []);

  const navigateHash = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    }
  }, []);

  const copy = PORTFOLIO_TRANSLATIONS[lang];

  return (
    <>
      <Header
        lang={lang}
        copy={copy}
        activeSection={activeSection}
        onChangeLang={setLang}
        onNavigateHash={navigateHash}
        onNavigateHome={navigateHome}
      />
      <main>
        <HeroSection copy={copy} onNavigateHash={navigateHash} />
        <AchievementsSection copy={copy} />
        <ContactSection copy={copy} currentYear={currentYear} />
      </main>
    </>
  );
}
