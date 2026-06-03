// qupda.com — Linux Lab privacy policy page
// App Router:  place at  app/linuxlab/privacy/page.jsx
// Pages Router: see note at bottom of this file.
//
// Self-contained: all styles inline, no external deps. Terminal-themed,
// matches the Linux Lab support page.

export const metadata = {
  title: "Linux Lab — Privacy Policy",
  description:
    "Privacy policy for Linux Lab — what we collect, how we use it, and your rights.",
};

var BG = "#0f0f0f";
var PANEL = "#16181d";
var TERRA = "#c97060";
var NAVY = "#2d4a6e";
var TX = "#e5e5e5";
var MU = "#9ca3af";
var DIM = "#6b7280";
var GREEN = "#4aba7a";

var UPDATED = "Last updated: June 2026";

var sections = [
  {
    h: "Overview",
    p: [
      "Linux Lab (\"the app\") is operated by Qup DA, a company registered in Norway (organisation no. 912 372 022). This policy explains what data we collect, why, and what rights you have. We aim to collect as little as possible.",
    ],
  },
  {
    h: "What we collect",
    p: [
      "Account data: your email address and a securely hashed password. That's the core of it.",
      "Session metadata: when you open a practice terminal, we store minimal technical metadata (timestamps, session status, and an internal container reference) so the app works and so we can enforce limits. We do NOT record or store your keystrokes or terminal output — practice content is processed in a temporary sandbox and discarded when the session ends.",
      "We do not collect location, contacts, advertising identifiers, or analytics profiles.",
    ],
  },
  {
    h: "How we use your data",
    p: [
      "To create and secure your account, to operate the learning features (sandbox sessions, progress tracking, lesson verification), and to contact you about your account if needed. We do not sell your data, and we do not use it for advertising.",
    ],
  },
  {
    h: "The sandbox",
    p: [
      "Each practice session runs in an isolated, disposable Linux container on our servers. The container — and anything you typed or created in it — is destroyed when the session ends. We retain only the minimal session metadata described above, never the contents.",
    ],
  },
  {
    h: "Data retention",
    p: [
      "Account data is kept while your account exists. Sandbox session contents are not retained. You can ask us to delete your account and associated data at any time (see Contact).",
    ],
  },
  {
    h: "Security",
    p: [
      "Passwords are stored hashed, never in plain text. Connections between the app and our servers use HTTPS/TLS. Any sensitive credentials you choose to store are encrypted at rest.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "Depending on where you live (including the EU/EEA under the GDPR), you have rights to access, correct, export, or delete your personal data, and to object to certain processing. To exercise any of these, email us at the address below and we'll help.",
    ],
  },
  {
    h: "Children",
    p: [
      "Linux Lab is not directed at children under 13. We do not knowingly collect personal data from children under 13.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this policy as the app evolves. Material changes will be reflected on this page with an updated date.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about privacy, or data access/deletion requests: janstovr@gmail.com.",
    ],
  },
];

export default function LinuxLabPrivacy() {
  return (
    <main style={s.page}>
      <div style={s.wrap}>
        <div style={s.term}>
          <div style={s.termBar}>
            <span style={{ ...s.dot, background: "#e05050" }} />
            <span style={{ ...s.dot, background: "#e8a838" }} />
            <span style={{ ...s.dot, background: GREEN }} />
            <span style={s.termTitle}>linuxlab — privacy — bash</span>
          </div>
          <div style={s.termBody}>
            <p style={s.line}>
              <span style={s.prompt}>linuxlab@legal</span>
              <span style={s.tilde}>:~$</span>{" "}
              <span style={s.cmd}>cat privacy-policy.txt</span>
            </p>
            <h1 style={s.h1}>Privacy Policy</h1>
            <p style={s.updated}>{UPDATED}</p>
          </div>
        </div>

        <section style={s.body}>
          {sections.map(function (sec, i) {
            return (
              <div key={i} style={s.section}>
                <h2 style={s.h2}>
                  <span style={s.hMark}>#</span> {sec.h}
                </h2>
                {sec.p.map(function (para, j) {
                  return (
                    <p key={j} style={s.para}>
                      {para}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </section>

        <footer style={s.footer}>
          Linux Lab is made by Qup DA · Organisation no. 912 372 022 · Norway
        </footer>
      </div>
    </main>
  );
}

var mono =
  '"SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, "Liberation Mono", monospace';

var s = {
  page: {
    minHeight: "100vh",
    background: BG,
    color: TX,
    fontFamily: mono,
    padding: "40px 20px",
    boxSizing: "border-box",
  },
  wrap: { maxWidth: 760, margin: "0 auto" },
  term: {
    background: PANEL,
    border: "1px solid " + NAVY,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },
  termBar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    background: "#0c0d11",
    borderBottom: "1px solid " + NAVY,
  },
  dot: { width: 12, height: 12, borderRadius: "50%", display: "inline-block" },
  termTitle: { color: DIM, fontSize: 12, marginLeft: 10 },
  termBody: { padding: "22px 24px 24px" },
  line: { margin: "0 0 18px", fontSize: 14 },
  prompt: { color: GREEN },
  tilde: { color: "#5a7bb0" },
  cmd: { color: TERRA },
  h1: { color: TERRA, fontSize: 26, margin: "0 0 6px", fontWeight: 700 },
  updated: { color: DIM, fontSize: 12, margin: 0 },
  body: { marginTop: 24 },
  section: {
    background: PANEL,
    border: "1px solid #23262d",
    borderRadius: 10,
    padding: "18px 20px",
    marginBottom: 12,
  },
  h2: {
    color: TX,
    fontSize: 15,
    fontWeight: 700,
    margin: "0 0 10px",
    display: "flex",
    gap: 8,
  },
  hMark: { color: GREEN },
  para: { color: MU, fontSize: 13.5, lineHeight: 1.7, margin: "0 0 10px" },
  footer: {
    marginTop: 28,
    textAlign: "center",
    color: DIM,
    fontSize: 12,
    lineHeight: 1.6,
  },
};

/*
  PAGES ROUTER (if your site uses /pages instead of /app):
  - Put this file at:  pages/linuxlab/privacy.jsx
  - Remove the `export const metadata = {...}` block above and instead add,
    inside the returned JSX, a <Head> from "next/head":
        import Head from "next/head";
        <Head><title>Linux Lab — Privacy Policy</title></Head>
*/