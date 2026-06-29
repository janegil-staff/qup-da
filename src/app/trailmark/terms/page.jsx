// app/trailmark/terms/page.jsx
// Terms of Service for the Trailmark mobile app (Qup DA).
//
// NOTE: This is a template, not legal advice. Review before publishing.

export const metadata = {
  title: "Trailmark — Terms of Service",
  description: "The terms governing your use of the Trailmark app.",
};

const LAST_UPDATED = "29 June 2026";
const CONTACT_EMAIL = "post@qupda.com"; // TODO: confirm contact address

export default function TrailmarkTermsPage() {
  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <h1 style={styles.h1}>Terms of Service</h1>
        <p style={styles.meta}>Trailmark · Last updated {LAST_UPDATED}</p>

        <p style={styles.p}>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          Trailmark mobile application (the &quot;App&quot;) provided by Qup DA
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading or
          using the App, you agree to these Terms. If you do not agree, please
          do not use the App.
        </p>

        <h2 style={styles.h2}>The service</h2>
        <p style={styles.p}>
          Trailmark lets you record GPS routes, view them on a map, add notes,
          and keep a history of your trips. Some features require you to create
          an account and to grant location permissions.
        </p>

        <h2 style={styles.h2}>Your account</h2>
        <p style={styles.p}>
          You are responsible for keeping your login credentials secure and for
          all activity under your account. You agree to provide accurate
          information and to notify us of any unauthorized use. You may delete
          your account at any time from within the App.
        </p>

        <h2 style={styles.h2}>Acceptable use</h2>
        <p style={styles.p}>You agree not to:</p>
        <ul style={styles.ul}>
          <li>use the App for any unlawful purpose;</li>
          <li>
            interfere with, disrupt, or attempt to gain unauthorized access to
            the App or its systems;
          </li>
          <li>
            reverse engineer or misuse the App except as permitted by law; or
          </li>
          <li>use the App in a way that infringes the rights of others.</li>
        </ul>

        <h2 style={styles.h2}>Location tracking and safety</h2>
        <p style={styles.p}>
          Trailmark relies on your device&apos;s GPS, which may be inaccurate or
          unavailable in some conditions. The App is provided for general
          recreational and informational use. You are responsible for your own
          safety and surroundings while using the App. Do not rely on Trailmark
          as your sole means of navigation in situations where inaccuracy could
          cause harm. Using location continuously, including in the background,
          may increase battery consumption.
        </p>

        <h2 style={styles.h2}>Your content</h2>
        <p style={styles.p}>
          You retain ownership of the trips, routes, and notes you create. You
          grant us the limited rights necessary to store and display that
          content back to you in order to operate the App.
        </p>

        <h2 style={styles.h2}>Availability and changes</h2>
        <p style={styles.p}>
          We may modify, suspend, or discontinue all or part of the App at any
          time. We may also update these Terms; continued use of the App after
          changes take effect constitutes acceptance of the updated Terms.
        </p>

        <h2 style={styles.h2}>Disclaimers</h2>
        <p style={styles.p}>
          The App is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, whether express or implied, to the
          fullest extent permitted by law. We do not warrant that the App will
          be uninterrupted, error-free, or accurate.
        </p>

        <h2 style={styles.h2}>Limitation of liability</h2>
        <p style={styles.p}>
          To the fullest extent permitted by applicable law, Qup DA shall not be
          liable for any indirect, incidental, or consequential damages arising
          out of or relating to your use of the App. Nothing in these Terms
          limits liability that cannot be limited under applicable law.
        </p>

        <h2 style={styles.h2}>Governing law</h2>
        <p style={styles.p}>
          These Terms are governed by the laws of Norway, without regard to
          conflict-of-law principles. Any disputes shall be subject to the
          jurisdiction of the Norwegian courts, subject to any mandatory
          consumer protections available to you.
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