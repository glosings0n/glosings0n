"use client";

import {
  AppIcon,
  FlutterFireCampWordmark,
  LosingTekWordmark,
} from "@repo/ui";
import { CODELAB_CATALOG } from "@/data/catalog";
import Link from "next/link";
import { Bilingual } from "./Bilingual";
import { CodelabTopbar } from "./CodelabTopbar";

export function CodelabHubClient() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <CodelabTopbar />

      <main className="hub-container">
        <section className="hub-hero">
          <h1 className="hub-title">
            <Bilingual
              en="Hands-On Engineering Codelabs"
              fr="Codelabs d'Ingénierie Pratiques"
            />
          </h1>
          <p className="hub-subtitle lang-en">
            Practical, production-tested guides and interactive workshops on Edge
            AI, Full-Stack Agentic Dart, Hybrid AI, and Flutter architectures by{" "}
            <strong>Georges Byona</strong> (
            <span className="font-mono">@glosings0n</span>), Founder @{" "}
            <LosingTekWordmark /> &amp; Founder @{" "}
            <a
              href="https://flutterfirecamp.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ffsc-brand"
            >
              <FlutterFireCampWordmark />
            </a>
            .
          </p>
          <p className="hub-subtitle lang-fr">
            Guides pratiques testés en production et ateliers interactifs sur
            l&apos;Edge AI, le Full-Stack Agentic Dart, l&apos;IA Hybride et les
            architectures Flutter par <strong>Georges Byona</strong> (
            <span className="font-mono">@glosings0n</span>), Fondateur @{" "}
            <LosingTekWordmark /> &amp; Fondateur du{" "}
            <a
              href="https://flutterfirecamp.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ffsc-brand"
            >
              <FlutterFireCampWordmark />
            </a>
            .
          </p>
        </section>

        <section className="codelab-card-grid">
          {CODELAB_CATALOG.map((card) => (
            <Link
              key={card.slug}
              href={`/${card.slug}`}
              id={card.id}
              data-codelab-slug={card.slug}
              className="codelab-card"
            >
              <div className="card-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h2>
                <Bilingual en={card.titleEn} fr={card.titleFr} />
              </h2>
              <p className="lang-en">{card.summaryEn}</p>
              <p className="lang-fr">{card.summaryFr}</p>
              <div className="card-footer">
                <span className="card-meta">
                  <AppIcon name="clock" size={14} strokeWidth={2} />
                  <Bilingual en={card.metaEn} fr={card.metaFr} />
                </span>
                <span className="card-cta">
                  <Bilingual en="Start Codelab →" fr="Démarrer →" />
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="hub-footer">
        <div className="hub-footer-container">
          <p className="hub-copyright">
            &copy; <span id="current-year">{currentYear}</span>{" "}
            <span className="font-mono">glosings0n</span>
          </p>
        </div>
      </footer>
    </>
  );
}
