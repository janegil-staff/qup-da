// src/app/page.jsx  (or create a new Next.js project)
"use client";
import { useState, useEffect } from "react";

const NAVY = "#1a2c3d";
const BLUE = "#4a7ab5";
const LIGHT_BLUE = "#7AABDB";
const OFF_WHITE = "#f4f7fb";
const MUTED = "#7a9ab8";

export default function QupDA() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: NAVY, background: "#fff" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 32px",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(74,122,181,0.1)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>Q</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: NAVY, letterSpacing: "-0.5px" }}>Qup DA</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["about", "contact"].map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: MUTED, fontSize: 14, fontWeight: 600,
              fontFamily: "inherit", letterSpacing: "0.5px",
              textTransform: "uppercase", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = BLUE}
              onMouseLeave={e => e.target.style.color = MUTED}
            >
              {id}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${NAVY} 0%, #2d4a6e 50%, ${BLUE} 100%)`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "80px 24px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background orbs */}
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(122,171,219,0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "0%",
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(74,122,181,0.12)",
          pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", maxWidth: 700, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 30, padding: "6px 16px",
            marginBottom: 32,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
              Digital Health · Norway
            </span>
          </div>

          <h1 style={{
            color: "#fff", fontSize: "clamp(42px, 8vw, 80px)",
            fontWeight: 700, lineHeight: 1.05,
            margin: "0 0 24px",
            letterSpacing: "-2px",
          }}>
            Technology that<br />
            <span style={{ color: LIGHT_BLUE }}>supports recovery.</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2.5vw, 20px)",
            lineHeight: 1.7, margin: "0 0 48px",
            maxWidth: 520, marginLeft: "auto", marginRight: "auto",
          }}>
            Qup DA builds evidence-informed digital health tools for individuals
            and clinicians working in harm reduction and recovery.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>

            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent", color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 50,
              padding: "14px 32px", fontSize: 15, fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#fff"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.4)"; e.target.style.transform = "translateY(0)"; }}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: 32,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: 0.5,
        }}>
          <span style={{ color: "#fff", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.4)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{
        padding: "100px 24px",
        background: OFF_WHITE,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
            className="about-grid"
          >
            {/* Left */}
            <div>
              <div style={{
                fontSize: 11, fontWeight: 800, letterSpacing: 3,
                textTransform: "uppercase", color: BLUE, marginBottom: 16,
              }}>
                About Qup DA
              </div>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700,
                lineHeight: 1.1, margin: "0 0 24px",
                letterSpacing: "-1px", color: NAVY,
              }}>
                Built by people who believe in better outcomes.
              </h2>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, margin: "0 0 20px" }}>
                Qup DA is a Norwegian digital health company developing tools for harm reduction,
                recovery support, and clinical care coordination. We believe that technology
                should make it easier — not harder — for people to take control of their health.
              </p>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, margin: "0 0 32px" }}>
                Our products are built with clinicians, patients, and researchers,
                with a focus on privacy, evidence-based design, and accessibility across 12 languages.
              </p>
              <div style={{ display: "flex", gap: 40 }}>
                {[
                  { value: "12", label: "Languages" },
                  { value: "5+", label: "Apps built" },
                  { value: "🇳🇴", label: "Based in Norway" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: BLUE, lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 13, color: MUTED, marginTop: 4, fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — values */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "🔒", title: "Privacy first", desc: "Your data is yours. We never sell it, share it with advertisers, or use it for tracking." },
                { icon: "🌍", title: "Built for everyone", desc: "All apps support 12 languages. Healthcare shouldn't have a language barrier." },
                { icon: "🏥", title: "Clinically informed", desc: "Validated tools like GAD-7, PHQ-9 and AUDIT built into our products." },
                { icon: "💙", title: "Harm reduction", desc: "We meet people where they are, without judgment. Recovery is not one-size-fits-all." },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{
                  background: "#fff", borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex", gap: 16, alignItems: "flex-start",
                  boxShadow: "0 2px 16px rgba(74,122,181,0.07)",
                  border: "1px solid rgba(74,122,181,0.08)",
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 4 }}>{title}</div>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        padding: "100px 24px",
        background: `linear-gradient(160deg, ${NAVY} 0%, #2d4a6e 60%, ${BLUE} 100%)`,
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: 3,
            textTransform: "uppercase", color: LIGHT_BLUE, marginBottom: 16,
          }}>
            Get in touch
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700,
            lineHeight: 1.1, margin: "0 0 20px",
            letterSpacing: "-1px", color: "#fff",
          }}>
            Let's work together.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
            Whether you're a healthcare provider, researcher, or patient organisation —
            we'd love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
            <a href="mailto:post@qupda.com" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "#fff", color: NAVY,
              borderRadius: 50, padding: "16px 36px",
              fontSize: 16, fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = OFF_WHITE; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span>✉</span>
              jan.egil.staff@qupda.com
            </a>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
              Qup DA · Org. 912 372 022 · Norway
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#111d2b",
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: `linear-gradient(135deg, ${BLUE}, ${NAVY})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 12 }}>Q</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
            © 2026 Qup DA · All rights reserved
          </span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Privacy", href: "/privacy" },

          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: "rgba(255,255,255,0.4)", fontSize: 13,
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}