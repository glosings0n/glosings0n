"use client";

import type { CodelabSummary } from "@/data/catalog";
import { getCodelabDefinition } from "@/data/codelabs";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Bilingual } from "./Bilingual";
import { CodelabTopbar } from "./CodelabTopbar";

interface CodelabViewerProps {
  summary: CodelabSummary;
}

const STEP_EVENT = "glosings0n:step";

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener(STEP_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(STEP_EVENT, onChange);
  };
}

export function CodelabViewer({ summary }: CodelabViewerProps) {
  const definition = getCodelabDefinition(summary.slug);
  const steps = definition?.steps ?? [];
  const navItems = definition?.navItems ?? [];
  const stepCount = steps.length;

  const getStepFromHash = useCallback(() => {
    const hashMatch = window.location.hash.match(/^#step-(\d+)$/);
    if (!hashMatch) return 0;
    const idx = parseInt(hashMatch[1] ?? "1", 10) - 1;
    return idx >= 0 && idx < stepCount ? idx : 0;
  }, [stepCount]);

  const currentStepIndex = useSyncExternalStore(
    subscribeHash,
    getStepFromHash,
    () => 0,
  );

  const [maxVisitedStep, setMaxVisitedStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.add("codelab-page");
    return () => {
      document.body.classList.remove("codelab-page");
    };
  }, []);

  const goToStep = useCallback(
    (index: number) => {
      if (index < 0 || index >= stepCount) return;
      setMaxVisitedStep((prev) => Math.max(prev, index));
      setSidebarOpen(false);
      history.replaceState(null, "", `#step-${index + 1}`);
      window.dispatchEvent(new Event(STEP_EVENT));
      mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [stepCount],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName ?? "").toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight" && currentStepIndex < stepCount - 1) {
        goToStep(currentStepIndex + 1);
      } else if (e.key === "ArrowLeft" && currentStepIndex > 0) {
        goToStep(currentStepIndex - 1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [currentStepIndex, goToStep, stepCount]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!sidebarOpen) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        !target.closest("#codelab-sidebar") &&
        !target.closest("#sidebar-toggle-btn")
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [sidebarOpen]);

  const remainingMins = steps
    .slice(currentStepIndex)
    .reduce((acc, step) => acc + step.duration, 0);
  const progressPct =
    stepCount > 0 ? ((currentStepIndex + 1) / stepCount) * 100 : 100;

  return (
    <>
      <CodelabTopbar
        codelabTitleEn={summary.headerTitleEn}
        codelabTitleFr={summary.headerTitleFr}
        remainingMins={remainingMins}
        progressPct={progressPct}
        githubUrl={summary.githubUrl}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        showSidebarToggle
      />

      <div className="codelab-layout">
        <aside
          className={`codelab-sidebar${sidebarOpen ? " open" : ""}`}
          id="codelab-sidebar"
        >
          <ul className="step-nav-list">
            {navItems.map((item) => {
              const isActive = item.index === currentStepIndex;
              const isCompleted =
                item.index < Math.max(currentStepIndex, maxVisitedStep);
              return (
                <li
                  key={item.index}
                  className={`step-nav-item${isActive ? " active" : ""}${isCompleted ? " completed" : ""}`}
                  data-step={item.index}
                  onClick={() => goToStep(item.index)}
                >
                  <span className="step-num">{item.index + 1}</span>
                  <span className="step-nav-title">
                    <Bilingual en={item.titleEn} fr={item.titleFr} />
                  </span>
                  <span className="step-nav-time">{item.time}</span>
                </li>
              );
            })}
          </ul>

          <div className="sidebar-footer">
            <div>
              <strong>
                <Bilingual
                  en={summary.footerRoleEn}
                  fr={summary.footerRoleFr}
                />
              </strong>{" "}
              Georges Byona (<span className="font-mono">@glosings0n</span>)
            </div>
            <div>
              <strong>
                <Bilingual
                  en={summary.footerTrackLabelEn}
                  fr={summary.footerTrackLabelFr}
                />
              </strong>{" "}
              {summary.footerTrackValue}
            </div>
            <div className="sidebar-copyright">
              &copy; {summary.copyrightYear}{" "}
              <span className="font-mono">glosings0n</span>
            </div>
          </div>
        </aside>

        <main className="codelab-main" ref={mainRef}>
          <div className="codelab-content-wrapper">
            {steps.map((step) => {
              const StepBody = step.render;
              const isActive = step.index === currentStepIndex;
              const isLast = step.index === stepCount - 1;
              return (
                <article
                  key={step.index}
                  className={`codelab-step${isActive ? " active" : ""}`}
                  id={`step-${step.index + 1}`}
                  data-duration={step.duration}
                >
                  <div className="step-header">
                    <div className="step-eyebrow">
                      <span>
                        <Bilingual en={step.eyebrowEn} fr={step.eyebrowFr} />
                      </span>
                      {step.lastUpdatedIso ? (
                        <span className="codelab-last-updated">
                          <Bilingual
                            en={
                              <>
                                Last updated:{" "}
                                <time dateTime={step.lastUpdatedIso}>
                                  {step.lastUpdatedEn}
                                </time>
                              </>
                            }
                            fr={
                              <>
                                Dernière mise à jour :{" "}
                                <time dateTime={step.lastUpdatedIso}>
                                  {step.lastUpdatedFr}
                                </time>
                              </>
                            }
                          />
                        </span>
                      ) : null}
                    </div>
                    <h1 className="step-title">
                      <Bilingual en={step.titleEn} fr={step.titleFr} />
                    </h1>
                  </div>

                  <StepBody />

                  <div className="step-pagination">
                    <button
                      type="button"
                      className="nav-step-btn"
                      disabled={step.index === 0}
                      onClick={() => goToStep(step.index - 1)}
                    >
                      <Bilingual en="← Previous" fr="← Précédent" />
                    </button>

                    {isLast && step.finalCtaHref ? (
                      step.finalCtaHref.startsWith("/") ? (
                        <Link
                          href={step.finalCtaHref}
                          className="nav-step-btn primary"
                        >
                          <Bilingual
                            en={step.finalCtaEn}
                            fr={step.finalCtaFr}
                          />
                        </Link>
                      ) : (
                        <a
                          href={step.finalCtaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-step-btn primary"
                        >
                          <Bilingual
                            en={step.finalCtaEn}
                            fr={step.finalCtaFr}
                          />
                        </a>
                      )
                    ) : !isLast ? (
                      <button
                        type="button"
                        className="nav-step-btn primary"
                        onClick={() => goToStep(step.index + 1)}
                      >
                        <Bilingual en="Next Step →" fr="Étape suivante →" />
                      </button>
                    ) : (
                      <Link href="/" className="nav-step-btn primary">
                        <Bilingual
                          en="Back to Codelabs →"
                          fr="Retour aux Codelabs →"
                        />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
