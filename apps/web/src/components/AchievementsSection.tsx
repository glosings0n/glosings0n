"use client";

import {
  communityImg,
  ffscImg,
  musantekMarkSvg,
  sautilmSvg,
} from "@repo/assets";
import {
  AppIcon,
  FlutterFireCampWordmark,
  MusanTekLogo,
  useIsLocalHost,
} from "@repo/ui";
import { SpeakerCardStack } from "@/components/SpeakerCardStack";
import { AppConfig } from "@/data/config";
import type { PortfolioCopy } from "@/data/translations";

interface AchievementsSectionProps {
  copy: PortfolioCopy;
}

export function AchievementsSection({ copy }: AchievementsSectionProps) {
  const isLocal = useIsLocalHost();
  const codelabsHref = isLocal
    ? "http://localhost:3001"
    : AppConfig.links.codelabs;

  return (
    <section className="achievements-section" id="about">
      <div className="section-container">
        <h2 className="section-title">{copy.aboutTitle}</h2>

        {/* Block 1: Founder & Software Engineer at MusanTek */}
        <div className="achievement-block reveal-on-scroll" id="block-musantek">
          <div className="block-visual">
            <a
              href={AppConfig.links.musanTek}
              id="link-img-musantek"
              className="block-img-wrapper tilt-right"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={musantekMarkSvg.src}
                alt="MusanTek M logomark"
                className="block-img"
              />
            </a>
          </div>
          <div className="block-content">
            <div className="block-tag" id="tag-musantek">
              <AppIcon name="code" size={16} strokeWidth={1.5} className="tag-icon" />
              <span>{copy.block1Tag}</span>
            </div>
            <h3 className="block-heading">
              {copy.block1HeadingPrefix}
              <MusanTekLogo className="block-heading-logo" />
            </h3>
            <p className="block-text">{copy.block1Text}</p>
            <a
              href={AppConfig.links.musanTek}
              className="block-link"
              id="link-musantek"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.blockLinkMore} &rarr;
            </a>
          </div>
        </div>

        {/* Block 2: Edge-AI Researcher & SautiLM Initiative */}
        <div className="achievement-block reverse reveal-on-scroll" id="block-sautilm">
          <div className="block-visual">
            <a
              href={AppConfig.links.sautiLM}
              id="link-img-sautilm"
              className="block-img-wrapper tilt-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sautilmSvg.src}
                alt="SautiLM Edge-AI Research Initiative"
                className="block-img"
              />
            </a>
          </div>
          <div className="block-content">
            <div className="block-tag" id="tag-sautilm">
              <AppIcon name="layers" size={16} strokeWidth={1.5} className="tag-icon" />
              <span>{copy.blockSautilmTag}</span>
            </div>
            <h3 className="block-heading">{copy.blockSautilmHeading}</h3>
            <p className="block-text">{copy.blockSautilmText}</p>
            <div className="stat-badge" id="badge-sautilm-offline">
              <span className="stat-number">100%</span>
              <span className="stat-label">{copy.blockSautilmStat}</span>
            </div>
            <a
              href={AppConfig.links.sautiLM}
              className="block-link"
              id="link-sautilm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.blockLinkMore} &rarr;
            </a>
          </div>
        </div>

        {/* Block 3: FlutterFire Summer Camp Organizer */}
        <div className="achievement-block reveal-on-scroll" id="block-flutterfire">
          <div className="block-visual">
            <a
              href={AppConfig.links.flutterFireSummer}
              id="link-img-flutterfire"
              className="block-img-wrapper stack-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ffscImg.src}
                alt="FlutterFire Summer Camp Illustration"
                className="block-img"
              />
            </a>
          </div>
          <div className="block-content">
            <div className="block-tag" id="tag-flutterfire">
              <AppIcon name="globe" size={16} strokeWidth={1.5} className="tag-icon" />
              <span>{copy.block2Tag}</span>
            </div>
            <h3 className="block-heading">
              {copy.block2HeadingPrefix}
              <FlutterFireCampWordmark />
            </h3>
            <p className="block-text">{copy.block2TextPrefix}</p>
            <div className="stat-badge" id="badge-camp-participants">
              <span className="stat-number">1000+</span>
              <span className="stat-label">{copy.block2Stat}</span>
            </div>
            <a
              href={AppConfig.links.flutterFireSummer}
              className="block-link"
              id="link-flutterfire"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.blockLinkMore} &rarr;
            </a>
          </div>
        </div>

        {/* Block 4: GDG Leadership */}
        <div className="achievement-block reverse reveal-on-scroll" id="block-gdg">
          <div className="block-visual">
            <a
              href={AppConfig.links.gdgCampus}
              id="link-img-gdg"
              className="block-img-wrapper tilt-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={communityImg.src}
                alt="GDG Leadership Community"
                className="block-img"
              />
            </a>
          </div>
          <div className="block-content">
            <div className="block-tag" id="tag-gdg">
              <AppIcon name="google" size={16} strokeWidth={1.5} className="tag-icon" />
              <span>{copy.block3Tag}</span>
            </div>
            <h3 className="block-heading">{copy.block3Heading}</h3>
            <p className="block-text">
              {copy.block3TextPrefix}
              <strong>
                <span className="font-mono">{copy.block3TextHighlight}</span>
              </strong>
              {copy.block3TextSuffix}
            </p>
            <div className="stat-badge" id="badge-students-count">
              <span className="stat-number">500+</span>
              <span className="stat-label">{copy.block3Stat}</span>
            </div>
            <a
              href={AppConfig.links.gdgCampus}
              className="block-link"
              id="link-gdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.blockLinkMore} &rarr;
            </a>
          </div>
        </div>

        {/* Block 5: Content Creator & Speaker */}
        <div className="achievement-block reveal-on-scroll" id="block-creator">
          <div className="block-visual">
            <SpeakerCardStack />
          </div>
          <div className="block-content">
            <div className="block-tag" id="tag-creator">
              <AppIcon name="play" size={16} strokeWidth={1.5} className="tag-icon" />
              <span>{copy.block4Tag}</span>
            </div>
            <h3 className="block-heading">{copy.block4Heading}</h3>
            <p className="block-text">
              {copy.block4TextPrefix}
              <FlutterFireCampWordmark />
              {copy.block4TextSuffix}
            </p>
            <div className="creator-platforms">
              <a
                href={AppConfig.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn"
                id="btn-medium"
              >
                <AppIcon name="medium" size={20} strokeWidth={1.5} className="platform-icon" />
                {copy.block4Articles}
              </a>
              <a
                href={AppConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn"
                id="btn-youtube"
              >
                <AppIcon name="youtube" size={20} strokeWidth={1.5} className="platform-icon" />
                {copy.block4Videos}
              </a>
              <a
                href={codelabsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn"
                id="btn-codelabs"
              >
                <AppIcon name="codeFolder" size={20} strokeWidth={1.5} className="platform-icon" />
                {copy.block4Codelabs}
              </a>
            </div>
            <a
              href={AppConfig.links.medium}
              className="block-link"
              id="link-creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.blockLinkMore} &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
