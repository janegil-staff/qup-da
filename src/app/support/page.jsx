// app/staff-arts/support/page.jsx
//
// Staff Arts — App Store support page for qupda.com
// Drop this at: app/staff-arts/support/page.jsx
// Live URL:     https://qupda.com/staff-arts/support
//
// Plain JavaScript (no TypeScript). Self-contained: all styling is inline
// via a styled-jsx <style> block so it doesn't depend on Tailwind or any
// global stylesheet in the qupda project.

export const metadata = {
  title: "Staff Arts — Support",
  description:
    "Help and support for the Staff Arts app. Find answers to common questions or get in touch with us.",
};

export default function StaffArtsSupportPage() {
  const faqs = [
    {
      q: "What is Staff Arts?",
      a: "Staff Arts is a curated marketplace for original, handmade mixed media art. You can browse one-of-a-kind pieces from independent artists and connect directly with the makers behind them.",
    },
    {
      q: "How do I contact an artist about a piece?",
      a: "Open any artwork and use the built-in messaging to start a conversation with the artist. Messages are delivered in real time, so you can ask about a piece, a commission, or the story behind the work.",
    },
    {
      q: "Is the art on Staff Arts original?",
      a: "Yes. Every piece is original and handmade by an independent artist — no mass production and no reprints. Each work is one of a kind.",
    },
    {
      q: "Which languages does the app support?",
      a: "Staff Arts is fully translated into 12 languages, so you can browse and connect comfortably wherever you are.",
    },
    {
      q: "I'm having a problem with the app. What should I do?",
      a: "If something isn't working as expected, please email us using the contact details below. Include your device model and a short description of the issue, and we'll get back to you as soon as we can.",
    },
    {
      q: "How do I delete my account or data?",
      a: "To request deletion of your account and associated data, email us from the address linked to your account and we'll process the request promptly.",
    },
  ];

  return (
    <main className="sa-support">
      <div className="sa-bg" aria-hidden="true" />

      <section className="sa-hero">
        <p className="sa-eyebrow">Staff Arts</p>
        <h1 className="sa-title">How can we help?</h1>
        <p className="sa-lede">
          Answers to common questions about Staff Arts, and a direct line to us
          if you need a hand. Original mixed media art, made by hand — we&apos;re
          here to make sure your experience is a good one.
        </p>
      </section>

      <section className="sa-faqs" aria-label="Frequently asked questions">
        {faqs.map((item, i) => (
          <details key={i} className="sa-faq" {...(i === 0 ? { open: true } : {})}>
            <summary className="sa-faq-q">
              <span>{item.q}</span>
              <span className="sa-faq-mark" aria-hidden="true" />
            </summary>
            <p className="sa-faq-a">{item.a}</p>
          </details>
        ))}
      </section>

      <section className="sa-contact" aria-label="Contact support">
        <div className="sa-contact-card">
          <h2 className="sa-contact-title">Still need help?</h2>
          <p className="sa-contact-text">
            Send us a message and we&apos;ll get back to you. We read every email.
          </p>
          <a className="sa-contact-btn" href="mailto:janstovr@gmail.com?subject=Staff%20Arts%20Support">
            janstovr@gmail.com
          </a>
        </div>
      </section>

      <footer className="sa-footer">
        <p>
          Staff Arts is made by Qup DA · Organisation no. 912&nbsp;372&nbsp;022 ·
          Norway
        </p>
      </footer>

      <style jsx>{`
        .sa-support {
          --parchment: #faf7f2;
          --ink: #2a2622;
          --muted: #6b625a;
          --terracotta: #c97060;
          --navy: #2d4a6e;
          --line: rgba(42, 38, 34, 0.1);
          --card: #fffdfa;

          position: relative;
          min-height: 100vh;
          width: 100%;
          background: var(--parchment);
          color: var(--ink);
          font-family: "Iowan Old Style", "Palatino Linotype", "Palatino",
            Georgia, serif;
          padding: clamp(3rem, 6vw, 6rem) clamp(1.25rem, 5vw, 3rem)
            clamp(2rem, 4vw, 4rem);
          overflow: hidden;
        }

        .sa-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
              60% 50% at 85% -5%,
              rgba(201, 112, 96, 0.1),
              transparent 70%
            ),
            radial-gradient(
              50% 45% at 5% 105%,
              rgba(45, 74, 110, 0.08),
              transparent 70%
            );
        }

        .sa-hero,
        .sa-faqs,
        .sa-contact,
        .sa-footer {
          position: relative;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .sa-eyebrow {
          margin: 0 0 0.75rem;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--terracotta);
        }

        .sa-title {
          margin: 0 0 1.25rem;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--navy);
        }

        .sa-lede {
          margin: 0;
          font-size: clamp(1.05rem, 2.2vw, 1.2rem);
          line-height: 1.6;
          color: var(--muted);
          max-width: 56ch;
        }

        .sa-faqs {
          margin-top: clamp(2.5rem, 5vw, 4rem);
          border-top: 1px solid var(--line);
        }

        .sa-faq {
          border-bottom: 1px solid var(--line);
        }

        .sa-faq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 0.25rem;
          cursor: pointer;
          list-style: none;
          font-size: clamp(1.05rem, 2.4vw, 1.22rem);
          font-weight: 600;
          color: var(--ink);
          transition: color 0.2s ease;
        }

        .sa-faq-q::-webkit-details-marker {
          display: none;
        }

        .sa-faq-q:hover {
          color: var(--terracotta);
        }

        .sa-faq-mark {
          position: relative;
          flex: 0 0 auto;
          width: 18px;
          height: 18px;
        }

        .sa-faq-mark::before,
        .sa-faq-mark::after {
          content: "";
          position: absolute;
          background: var(--terracotta);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .sa-faq-mark::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateY(-50%);
        }

        .sa-faq-mark::after {
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          transform: translateX(-50%);
        }

        .sa-faq[open] .sa-faq-mark::after {
          transform: translateX(-50%) scaleY(0);
          opacity: 0;
        }

        .sa-faq-a {
          margin: 0;
          padding: 0 0.25rem 1.6rem;
          font-size: clamp(1rem, 2.1vw, 1.08rem);
          line-height: 1.65;
          color: var(--muted);
          max-width: 62ch;
        }

        .sa-contact {
          margin-top: clamp(2.5rem, 5vw, 4rem);
        }

        .sa-contact-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: clamp(1.75rem, 4vw, 2.75rem);
          text-align: center;
          box-shadow: 0 24px 48px -28px rgba(45, 74, 110, 0.35);
        }

        .sa-contact-title {
          margin: 0 0 0.6rem;
          font-size: clamp(1.5rem, 3.5vw, 1.9rem);
          font-weight: 600;
          color: var(--navy);
        }

        .sa-contact-text {
          margin: 0 0 1.6rem;
          font-size: 1.05rem;
          line-height: 1.55;
          color: var(--muted);
        }

        .sa-contact-btn {
          display: inline-block;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--parchment);
          background: var(--terracotta);
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .sa-contact-btn:hover {
          background: #b75f50;
          transform: translateY(-2px);
        }

        .sa-footer {
          margin-top: clamp(3rem, 6vw, 5rem);
          padding-top: 1.5rem;
          border-top: 1px solid var(--line);
          text-align: center;
        }

        .sa-footer p {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--muted);
        }

        @media (prefers-color-scheme: dark) {
          .sa-support {
            --parchment: #0f0f0f;
            --ink: #f0ece6;
            --muted: #a89e94;
            --line: rgba(240, 236, 230, 0.12);
            --card: #1a1916;
            --navy: #8fb0d6;
          }
          .sa-contact-card {
            box-shadow: 0 24px 48px -28px rgba(0, 0, 0, 0.6);
          }
        }
      `}</style>
    </main>
  );
}