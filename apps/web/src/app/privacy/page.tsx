import { logoSvg } from "@repo/assets";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | glosings0n",
  description:
    "Official Privacy Policy for glosings0n.dev, codelab.glosings0n.dev, and game.glosings0n.dev, detailing Google Sign-In usage, Firebase data handling, retention, and user privacy rights.",
  alternates: {
    canonical: "https://glosings0n.dev/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="privacy-header-inner">
          <Link href="/" className="logo">
            <img
              src={logoSvg.src}
              alt="glosings0n logo"
              className="logo-icon"
              width={28}
              height={28}
            />
            <span className="logo-text">glosings0n</span>
          </Link>
          <span className="privacy-badge">Legal &amp; Privacy</span>
        </div>
      </header>

      <main className="privacy-main">
        <article className="privacy-container">
          <div className="privacy-hero">
            <p className="privacy-kicker">https://glosings0n.dev/privacy</p>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-meta">
              Effective Date: <time dateTime="2026-11-22">November 22, 2026</time>{" "}
              | Operator: Georges Byona (glosings0n)
            </p>
            <p className="privacy-intro">
              This Privacy Policy explains how <strong>glosings0n</strong>{" "}
              (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
              uses, stores, and protects information when you visit{" "}
              <code>https://glosings0n.dev</code>, browse interactive developer
              guides on <code>https://codelab.glosings0n.dev</code>, participate
              in live warm-up sessions on{" "}
              <code>https://game.glosings0n.dev</code>, or use administrative
              event tools operated under the <code>glosings0n.dev</code> domain.
            </p>
          </div>

          <section className="privacy-card">
            <h2>1. Information We Collect</h2>
            <p>
              We collect only the minimum information required to operate
              authentication, live conference/student mini-game sessions, and
              site preferences:
            </p>
            <ul>
              <li>
                <strong>Google Account Profile Information:</strong> When you
                choose to sign in with Google via Firebase Authentication to
                submit a score to an event session or access authorized studio
                controls, Google shares your Firebase unique user identifier (
                <code>uid</code>), email address, email verification status,
                display name, and public profile photo URL (
                <code>photoURL</code>).
              </li>
              <li>
                <strong>Event Session &amp; Leaderboard Data:</strong> When you
                participate in a live event room on{" "}
                <code>game.glosings0n.dev</code>, we store your chosen
                leaderboard display name, best game score, formatted score
                metric, attempt count, and compact gameplay statistics (such as
                accuracy percentage, reaction latency in milliseconds, or streak
                length) associated with that session code.
              </li>
              <li>
                <strong>Local Browser Storage Preferences:</strong> Our web
                applications store functional preferences strictly in your
                browser&apos;s <code>localStorage</code>, including selected
                interface language (<code>EN</code> or <code>FR</code>), color
                theme (dark or light), and offline solo practice personal best
                scores. These local values remain on your device.
              </li>
              <li>
                <strong>Standard Operational Telemetry:</strong> Anonymous,
                aggregated traffic metrics provided by Vercel Web Analytics to
                monitor page reliability and performance without building
                advertising profiles.
              </li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>2. Google OAuth Scopes &amp; Purpose</h2>
            <p>
              Our Google Sign-In integration requests strictly non-sensitive
              identity scopes required for standard authentication:
            </p>
            <ul>
              <li>
                <code>openid</code>: Authenticates your session securely using
                OpenID Connect.
              </li>
              <li>
                <code>email</code>: Associates one unique verified account per
                event attempt and enforces server-side authorization for event
                organizers.
              </li>
              <li>
                <code>profile</code>: Pre-fills your display name and optional
                profile picture for event session leaderboards.
              </li>
            </ul>
            <p>
              We do not request access to Gmail messages, Google Drive files,
              Google Calendar events, Contacts, or any restricted Google
              Workspace APIs.
            </p>
          </section>

          <section className="privacy-card">
            <h2>3. How We Use Collected Information</h2>
            <ul>
              <li>
                Authenticate participants and prevent duplicate or automated
                score manipulation during live workshops, university talks, and
                developer conferences.
              </li>
              <li>
                Render real-time session leaderboards on event projector screens
                for active rooms.
              </li>
              <li>
                Remember your chosen UI language and theme across visits.
              </li>
              <li>
                Verify organizer permissions strictly server-side before
                allowing event session creation, moderation, or export.
              </li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>4. Data Sharing &amp; Service Providers</h2>
            <p>
              We do not sell, rent, trade, or monetize your personal
              information or Google user data. We do not share user data with
              advertisers or data brokers. Data is processed exclusively by
              essential infrastructure providers necessary to run the platform:
            </p>
            <ul>
              <li>
                <strong>Google Firebase (Authentication &amp; Cloud Firestore):</strong>{" "}
                Handles OAuth sign-in verification and real-time storage of
                event session leaderboards under project <code>glosings0n</code>.
              </li>
              <li>
                <strong>Vercel Inc.:</strong> Hosts our Next.js web
                applications and handles encrypted HTTPS routing and anonymous
                aggregate analytics.
              </li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>5. Google API Services User Data Policy Compliance</h2>
            <p>
              glosings0n&apos;s use and transfer to any other app of information
              received from Google APIs will adhere strictly to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements. Specifically, Google
              user data is used solely to provide and maintain the user-facing
              authentication and event leaderboard features, is never used for
              advertising, and is never transferred except to infrastructure
              providers required to deliver the service or as required by law.
            </p>
          </section>

          <section className="privacy-card">
            <h2>6. Data Retention, Security &amp; Deletion Rights</h2>
            <ul>
              <li>
                <strong>Retention:</strong> Event scores and session entries are
                retained only while an event session remains active or archived
                for speaker recap summaries, or until deleted by the organizer
                or requested by the participant.
              </li>
              <li>
                <strong>Security:</strong> All client and server traffic is
                encrypted via HTTPS/TLS. Database access is strictly enforced by
                server-side Firestore Security Rules and cryptographic Firebase ID
                Token verification.
              </li>
              <li>
                <strong>Your Rights (Access, Correction &amp; Deletion):</strong>{" "}
                You may request access to, correction of, or permanent deletion
                of your account profile and event leaderboard scores at any
                time, or revoke OAuth access directly from your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Account Permissions
                </a>{" "}
                settings.
              </li>
            </ul>
          </section>

          <section className="privacy-card">
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Our services are intended for software engineers, conference
              attendees, and university students aged 13 and older (or the
              applicable minimum digital consent age in your jurisdiction). We do
              not knowingly collect personal data from children under 13.
            </p>
          </section>

          <section className="privacy-card">
            <h2>8. Contact &amp; Policy Updates</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to
              exercise your data deletion rights, please contact the operator
              directly:
            </p>
            <p className="privacy-contact">
              <strong>Georges Byona (glosings0n)</strong>
              <br />
              Email:{" "}
              <a href="mailto:glosings0n.dev@gmail.com">
                glosings0n.dev@gmail.com
              </a>
              <br />
              Website:{" "}
              <Link href="/">https://glosings0n.dev</Link>
            </p>
            <p>
              We may update this policy periodically to reflect technical or
              regulatory changes. Updates take effect upon publication at this
              URL with a revised effective date.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
