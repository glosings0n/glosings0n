"use client";

import { heroImg } from "@repo/assets";
import { MusanTekWordmark } from "@repo/ui";
import type { PortfolioCopy } from "@/data/translations";

interface HeroSectionProps {
  copy: PortfolioCopy;
  onNavigateHash: (id: string) => void;
}

export function HeroSection({ copy, onNavigateHash }: HeroSectionProps) {
  return (
    <section className="hero-section" id="home">
      <img src={heroImg.src} alt="Glosingson" className="hero-bg-img" />
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Georges Byona -{" "}
            <span className="hero-title-light">@glosings0n</span>
          </h1>
          <p className="hero-subtitle">
            {copy.heroRolePrefix}
            <MusanTekWordmark />
            {copy.heroRoleSuffix}
          </p>
          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              id="hero-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHash("contact");
              }}
            >
              {copy.heroCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
