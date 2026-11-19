"use client";

import { AppIcon } from "@repo/ui";
import { AppConfig } from "@/data/config";
import type { PortfolioCopy } from "@/data/translations";

interface ContactSectionProps {
  copy: PortfolioCopy;
  currentYear: number;
}

export function ContactSection({ copy, currentYear }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container reveal-on-scroll">
        <h2 className="contact-title">{copy.contactTitle}</h2>
        <p className="contact-subtitle">{copy.contactSubtitle}</p>

        <div className="contact-methods">
          <a
            href={`mailto:${AppConfig.email}`}
            className="contact-cta-btn"
            id="contact-email-link"
          >
            {AppConfig.email}
          </a>
        </div>

        <div className="contact-socials">
          <a
            href={AppConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
            id="social-github"
          >
            <AppIcon name="github" size={18} strokeWidth={1.5} />
          </a>
          <a
            href={AppConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
            id="social-linkedin"
          >
            <AppIcon name="linkedin" size={18} strokeWidth={1.5} />
          </a>
          <a
            href={AppConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-link"
            id="social-twitter"
          >
            <AppIcon name="twitter" size={18} strokeWidth={1.5} />
          </a>
          <a
            href={AppConfig.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="social-link"
            id="social-medium"
          >
            <AppIcon name="medium" size={18} strokeWidth={1.5} />
          </a>
          <a
            href={AppConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-link"
            id="social-youtube"
          >
            <AppIcon name="youtube" size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-copyright">
            &copy; <span id="current-year">{currentYear}</span>{" "}
            <span className="footer-username">glosings0n</span>
          </p>
        </div>
      </footer>
    </section>
  );
}
