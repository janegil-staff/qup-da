// app/trailmark/delete-account/page.jsx
// Public account & data deletion page for Trailmark (required by Google Play).
// Must be reachable without logging in.

export const metadata = {
  title: "Trailmark — Delete Your Account",
  description:
    "How to delete your Trailmark account and all associated data.",
};

const LAST_UPDATED = "29 June 2026";
const DELETE_EMAIL = "post@qupda.com"; // TODO: confirm deletion request address

export default function TrailmarkDeleteAccountPage() {
  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <h1 style={styles.h1}>Delete Your Trailmark Account</h1>
        <p style={styles.meta}>Trailmark · Last updated {LAST_UPDATED}</p>

        <p style={styles.p}>
          This page explains how to delete your Trailmark account and the data
          associated with it. Trailmark is developed by Qup DA, Bergen, Norway.
        </p>

        <h2 style={styles.h2}>Delete from within the app (recommended)</h2>
        <p style={styles.p}>
          The fastest way to delete your account is directly in the app:
        </p>
        <ol style={styles.ol}>
          <li>Open Trailmark and sign in.</li>
          <li>Go to Profile / Settings.</li>
          <li>Tap &quot;Delete account&quot; and confirm.</li>
        </ol>
        <p style={styles.p}>
          This permanently removes your account and your associated data,
          including your trips, routes, and notes.
        </p>

        <h2 style={styles.h2}>Request deletion by email</h2>
        <p style={styles.p}>
          If you can no longer access the app, you can request deletion by
          emailing{" "}
          <a style={styles.a} href={`mailto:${DELETE_EMAIL}`}>
            {DELETE_EMAIL}
          </a>{" "}
          from the email address associated with your account, with the subject
          &quot;Delete my Trailmark account&quot;. We will verify your request
          and delete your account and associated data.
        </p>

        <h2 style={styles.h2}>What data is deleted</h2>
        <p style={styles.p}>
          When your account is deleted, we remove the personal data linked to
          it, including:
        </p>
        <ul style={styles.ul}>
          <li>your account details (email address);</li>
          <li>your trips, recorded routes, and pinned notes;</li>
          <li>your saved settings and preferences.</li>
        </ul>

        <h2 style={styles.h2}>Data retention</h2>
        <p style={styles.p}>
          Account deletion requests are processed promptly, typically within 30
          days. Certain limited information may be retained only where required
          to comply with legal obligations; it is not used for any other
          purpose and is deleted once those obligations are met.
        </p>

        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.p}>
          Qup DA, Bergen, Norway —{" "}
          <a style={styles.a} href={`mailto:jan.egil@qupda.com`}>
            {DELETE_EMAIL}
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
  ol: { margin: "0 0 14px", paddingLeft: 22 },
  a: { color: "#4a7ab5", textDecoration: "underline" },
};