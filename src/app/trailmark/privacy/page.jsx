// app/trailmark/privacy/page.jsx
// Privacy Policy for the Trailmark mobile app (Qup DA).
//
// NOTE: This is a template, not legal advice. Because Trailmark collects
// precise and background location, have it reviewed before publishing.

export const metadata = {
  title: "Trailmark — Privacy Policy",
  description: "How the Trailmark app collects, uses, and protects your data.",
};

const LAST_UPDATED = "29 June 2026";
const CONTACT_EMAIL = "post@qupda.com"; // TODO: confirm contact address

export default function TrailmarkPrivacyPage() {
  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.meta}>Trailmark · Last updated {LAST_UPDATED}</p>

        <p style={styles.p}>
          This Privacy Policy explains how Qup DA (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your
          information when you use the Trailmark mobile application (the
          &quot;App&quot;). We are based in Bergen, Norway, and we process
          personal data in accordance with the EU General Data Protection
          Regulation (GDPR) and applicable Norwegian law.
        </p>

        <h2 style={styles.h2}>Who is responsible for your data</h2>
        <p style={styles.p}>
          The data controller is Qup DA (org. no. 912 372 022), Bergen, Norway.
          For any privacy questions or to exercise your rights, contact us at{" "}
          <a style={styles.a} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 style={styles.h2}>Information we collect</h2>
        <p style={styles.p}>
          <strong>Account information.</strong> When you create an account, we
          collect your email address and a securely hashed password. This is
          used to authenticate you and sync your data across devices.
        </p>
        <p style={styles.p}>
          <strong>Location data.</strong> The core function of Trailmark is to
          record the routes you travel. When you start tracking, the App
          collects precise GPS location data, including while the App is running
          in the background, so that your route continues to be recorded with
          the screen off. Location data is collected only while a tracking
          session is active and is used to build and store your trips.
        </p>
        <p style={styles.p}>
          <strong>Trip data.</strong> The routes, distances, timestamps, and any
          notes you add are stored as part of your trip history.
        </p>
        <p style={styles.p}>
          <strong>Technical data.</strong> We may process limited technical
          information needed to operate the service, such as authentication
          tokens and basic error information.
        </p>

        <h2 style={styles.h2}>How we use your information</h2>
        <p style={styles.p}>We use your information to:</p>
        <ul style={styles.ul}>
          <li>record, display, and store the routes and trips you create;</li>
          <li>provide background location tracking during active sessions;</li>
          <li>authenticate your account and sync your data across devices;</li>
          <li>operate, maintain, and improve the App; and</li>
          <li>comply with our legal obligations.</li>
        </ul>

        <h2 style={styles.h2}>Legal basis for processing</h2>
        <p style={styles.p}>
          We process account and trip data on the basis of performing our
          contract with you (providing the App). We process location data on the
          basis of your consent, which you provide through your device&apos;s
          location permission and by starting a tracking session. You can
          withdraw consent at any time by disabling location permission or by
          not starting tracking.
        </p>

        <h2 style={styles.h2}>Location permissions</h2>
        <p style={styles.p}>
          Trailmark requests foreground and background location permission. You
          control these permissions in your device settings and can revoke them
          at any time. If you revoke location permission, route tracking will no
          longer function, but the rest of your account remains usable.
        </p>

        <h2 style={styles.h2}>How your data is stored and shared</h2>
        <p style={styles.p}>
          Your account and trip data are stored on secured servers operated on
          our behalf by infrastructure providers. We do not sell your personal
          data. We do not share your location or trip data with third parties
          for advertising. We may share data with service providers strictly to
          operate the App (for example, hosting and email delivery), and where
          required by law.
        </p>
        <p style={styles.p}>
          Map functionality is provided using mapping services (including Google
          Maps on Android). Use of those services is subject to the relevant
          provider&apos;s own privacy terms.
        </p>

        <h2 style={styles.h2}>Data retention</h2>
        <p style={styles.p}>
          We retain your account and trip data for as long as your account is
          active. When you delete your account, your associated personal data is
          deleted, except where we are required to retain certain information to
          comply with legal obligations.
        </p>

        <h2 style={styles.h2}>Your rights</h2>
        <p style={styles.p}>
          Under the GDPR you have the right to access, correct, delete, and port
          your personal data, to restrict or object to certain processing, and
          to withdraw consent. You can delete your account and its data directly
          from within the App. To exercise any other right, contact us at{" "}
          <a style={styles.a} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . You also have the right to lodge a complaint with the Norwegian Data
          Protection Authority (Datatilsynet).
        </p>

        <h2 style={styles.h2}>Children</h2>
        <p style={styles.p}>
          Trailmark is not directed to children under the age of 16, and we do
          not knowingly collect personal data from them.
        </p>

        <h2 style={styles.h2}>Changes to this policy</h2>
        <p style={styles.p}>
          We may update this Privacy Policy from time to time. Material changes
          will be reflected by updating the date at the top of this page.
        </p>

        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.p}>
          Qup DA, Bergen, Norway —{" "}
          <a style={styles.a} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </article>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "#f0f4f8",
    padding: "48px 16px",
    display: "flex",
    justifyContent: "center",
  },
  article: {
    maxWidth: 760,
    width: "100%",
    background: "#ffffff",
    borderRadius: 16,
    padding: "48px 40px",
    boxShadow: "0 1px 3px rgba(45,74,110,0.12)",
    color: "#2d4a6e",
    lineHeight: 1.65,
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  h1: { fontSize: 32, margin: "0 0 4px", color: "#2d4a6e" },
  h2: { fontSize: 20, margin: "32px 0 8px", color: "#4a7ab5" },
  meta: { fontSize: 14, color: "#6b7c93", margin: "0 0 24px" },
  p: { margin: "0 0 14px", fontSize: 16 },
  ul: { margin: "0 0 14px", paddingLeft: 22 },
  a: { color: "#4a7ab5", textDecoration: "underline" },
};