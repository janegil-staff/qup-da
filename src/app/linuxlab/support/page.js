// qupda.com — Linux Lab support page
// App Router:  place at  app/linuxlab/support/page.jsx
// Pages Router: see note at bottom of this file.
//
// Self-contained: all styles inline, no external deps. Terminal-themed.

export const metadata = {
  title: "Linux Lab — Support",
  description:
    "Help and support for Linux Lab — learn the Linux command line by doing, in a safe sandboxed terminal.",
};

var BG = "#0f0f0f";
var PANEL = "#16181d";
var TERRA = "#c97060";
var NAVY = "#2d4a6e";
var TX = "#e5e5e5";
var MU = "#9ca3af";
var DIM = "#6b7280";
var GREEN = "#4aba7a";

var faqs = [
  {
    q: "What is Linux Lab?",
    a: "Linux Lab teaches the Linux command line by doing. You get a real terminal connected to your own private, sandboxed Linux environment, and work through 50 hands-on lessons — from your first command to writing scripts. No videos, no theory dumps: you type real commands and the app checks your work.",
  },
  {
    q: "Is it safe? Can I break something?",
    a: "It's completely safe. Every practice session runs in an isolated, disposable container that's discarded when you're done. Nothing you type can affect our servers, other users, or your device. That's the whole point — a place to experiment without fear.",
  },
  {
    q: "A lesson won't pass when I check my work.",
    a: "Make sure you've opened the terminal and actually run the command before tapping \"Check my work.\" Each lesson verifies the real result in your sandbox. If a lesson still won't pass after you've run the right command, email us the lesson name and we'll look into it.",
  },
  {
    q: "I forgot my password.",
    a: "Email us at the address below and we'll help you recover your account.",
  },
  {
    q: "Which languages does the app support?",
    a: "Linux Lab supports 12 languages: Norwegian, English, Dutch, French, German, Italian, Swedish, Danish, Finnish, Spanish, Polish, and Portuguese. Norwegian is the default.",
  },
  {
    q: "Do I need an internet connection?",
    a: "Yes. The sandbox terminal runs on our servers, so an active connection is required to open a session and check your work.",
  },
  {
    q: "How do I delete my account or data?",
    a: "Email us and we'll permanently delete your account and associated data. Sandbox session content is never retained — only minimal account data (your email) is stored while your account exists.",
  },
];

export default function LinuxLabSupport() {
  return (
    <main style={s.page}>
      <div style={s.wrap}>
        {/* terminal window chrome */}
        <div style={s.term}>
          <div style={s.termBar}>
            <span style={{ ...s.dot, background: "#e05050" }} />
            <span style={{ ...s.dot, background: "#e8a838" }} />
            <span style={{ ...s.dot, background: GREEN }} />
            <span style={s.termTitle}>linuxlab — support — bash</span>
          </div>
          <div style={s.termBody}>
            <p style={s.line}>
              <span style={s.prompt}>linuxlab@help</span>
              <span style={s.tilde}>:~$</span>{" "}
              <span style={s.cmd}>./how-can-we-help.sh</span>
            </p>
            <h1 style={s.h1}>Linux Lab — Support</h1>
            <p style={s.intro}>
              Learn the Linux command line by doing — real commands, in a safe
              sandbox, right on your phone. Below are answers to common
              questions, and a direct line to us if you get stuck.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <section style={s.faqSection}>
          {faqs.map(function (item, i) {
            return (
              <div key={i} style={s.faq}>
                <h2 style={s.q}>
                  <span style={s.qMark}>$</span> {item.q}
                </h2>
                <p style={s.a}>{item.a}</p>
              </div>
            );
          })}
        </section>

        {/* contact */}
        <section style={s.contact}>
          <h2 style={s.contactH}>Still need help?</h2>
          <p style={s.contactP}>
            Send us a message and we&apos;ll get back to you. We read every
            email.
          </p>
          <a
            href="mailto:janstovr@gmail.com?subject=Linux%20Lab%20Support"
            style={s.mail}
          >
            <span style={s.prompt}>mail</span>
            <span style={s.tilde}>:~$</span> janstovr@gmail.com
          </a>
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
  termBody: { padding: "22px 24px 28px" },
  line: { margin: "0 0 18px", fontSize: 14 },
  prompt: { color: GREEN },
  tilde: { color: "#5a7bb0" },
  cmd: { color: TERRA },
  h1: { color: TERRA, fontSize: 26, margin: "0 0 12px", fontWeight: 700 },
  intro: { color: MU, fontSize: 14, lineHeight: 1.7, margin: 0 },
  faqSection: { marginTop: 28, display: "flex", flexDirection: "column", gap: 4 },
  faq: {
    background: PANEL,
    border: "1px solid #23262d",
    borderRadius: 10,
    padding: "18px 20px",
    marginBottom: 12,
  },
  q: {
    color: TX,
    fontSize: 15,
    fontWeight: 700,
    margin: "0 0 8px",
    display: "flex",
    gap: 8,
  },
  qMark: { color: GREEN },
  a: { color: MU, fontSize: 13.5, lineHeight: 1.7, margin: 0 },
  contact: {
    marginTop: 28,
    background: "linear-gradient(180deg,#16181d,#121419)",
    border: "1px solid " + NAVY,
    borderRadius: 12,
    padding: "26px 24px",
    textAlign: "center",
  },
  contactH: { color: TERRA, fontSize: 18, margin: "0 0 8px" },
  contactP: { color: MU, fontSize: 14, lineHeight: 1.6, margin: "0 0 18px" },
  mail: {
    display: "inline-block",
    background: BG,
    border: "1px solid " + NAVY,
    borderRadius: 8,
    padding: "12px 18px",
    color: TX,
    textDecoration: "none",
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: DIM,
    fontSize: 12,
    lineHeight: 1.6,
  },
};

/*
  PAGES ROUTER (if your site uses /pages instead of /app):
  - Put this file at:  pages/linuxlab/support.jsx
  - Remove the `export const metadata = {...}` block above (Pages Router
    doesn't use it). Instead add, inside the component return, a <Head>:
        import Head from "next/head";
        ...
        <Head><title>Linux Lab — Support</title></Head>
*/