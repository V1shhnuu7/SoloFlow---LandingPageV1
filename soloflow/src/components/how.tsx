/* ─── How it works — premium vertical alternating chapters ───
   Mockups now match the actual product design system from /sp/project/. */
"use client";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, inView, slideInLeft, slideInRight, stagger } from "@/lib/motion";
import { Eyebrow, FCard, PD, monoFont } from "./product-ui";

/* ─── Step 1: Magic-link sign-in — asymmetrically composed ─── */
function MockupSignup() {
  return (
    <div className="relative">
      {/* off-center glow — anchor weight to the lower-left, not the middle */}
      <div aria-hidden className="absolute -inset-8 -z-10 opacity-50"
        style={{ background: "radial-gradient(circle at 32% 70%, color-mix(in oklab, #2952ff 18%, transparent), transparent 65%)" }} />

      {/* macOS-style window chrome */}
      <div className="rounded-[14px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(20,18,14,0.20),_0_8px_22px_-8px_rgba(20,18,14,0.10)]"
        style={{ border: `1px solid ${PD.border}`, background: PD.cardBg }}>
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b" style={{ background: "#f3f1eb", borderColor: PD.border }}>
          <div className="flex gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map(c => (
              <span key={c} className="w-[10px] h-[10px] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 text-center font-mono text-[10.5px] mx-auto px-3 py-1 rounded-md max-w-[260px]"
            style={{ color: PD.muted, background: "#fff", border: `1px solid ${PD.border}`, fontFamily: monoFont, letterSpacing: 0.4 }}>
            app.soloflow.in/login
          </div>
          <div className="w-12" />
        </div>

        {/* Symmetric padding for a perfectly centered app window layout */}
        <div style={{ padding: "48px 40px" }}>
          <div className="flex flex-col items-center text-center">
            {/* heading + lede, centered */}
            <div className="text-[22px] font-semibold mb-2 tracking-tight" style={{ color: PD.ink, letterSpacing: "-0.02em" }}>
              Welcome back, Kira
            </div>
            <div className="text-[14px] mb-8" style={{ color: PD.muted, maxWidth: 260, lineHeight: 1.6 }}>
              We'll mail a magic link to your inbox.
              No password to remember.
            </div>

            {/* form — centered */}
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <div className="text-left">
                <div className="text-[10px] font-medium tracking-[0.06em] uppercase mb-1.5" style={{ color: PD.muted2 }}>Email</div>
                <div className="rounded-[10px] px-3.5 py-3 flex items-center gap-2.5 transition-all"
                  style={{ 
                    border: `1px solid rgba(41,82,255,0.4)`, 
                    background: "#fff", 
                    boxShadow: `0 0 0 3px rgba(41,82,255,0.1), inset 0 2px 4px rgba(0,0,0,0.01)` 
                  }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" style={{ color: PD.muted2 }}>
                    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
                  </svg>
                  <span className="text-[14px] font-medium leading-none mt-px" style={{ color: PD.ink }}>kira@studio.in</span>
                  <span className="ml-auto w-[1.5px] h-4 animate-pulse rounded-full" style={{ background: PD.blue }} />
                </div>
              </div>
              <button
                className="rounded-[10px] py-3 text-[14px] font-medium transition-all relative overflow-hidden flex justify-center items-center gap-1.5"
                style={{ 
                  background: "linear-gradient(180deg, #4b7bff 0%, #2952ff 100%)", 
                  color: "#fff", 
                  border: "1px solid #1a3cdd", 
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 14px rgba(41,82,255,0.25)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.15)"
                }}>
                Send magic link <span style={{ opacity: 0.8 }}>→</span>
              </button>
            </div>

            {/* success pill — perfectly centered */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-medium"
              style={{
                background: "rgba(40,200,64,0.08)",
                border: `1px solid rgba(40,200,64,0.2)`,
                color: "#1b932b",
                marginTop: 32,
              }}>
              <span className="w-[5px] h-[5px] rounded-full sf-product-pulse" style={{ background: "#28c840" }} />
              Magic link sent — check your inbox
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 2: Create Portal — mini freelancer form ─── */
function MockupCreateClient() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 -z-10 opacity-50"
        style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, #2952ff 18%, transparent), transparent 65%)" }} />

      <FCard pad={26} interactive={false} style={{ boxShadow: "0 30px 80px -20px rgba(20,18,14,0.20), 0 8px 22px -8px rgba(20,18,14,0.10)" }}>
        <Eyebrow style={{ fontSize: 10.5, letterSpacing: 1.2 }}>PORTALS · NEW</Eyebrow>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.4, color: PD.ink, marginTop: 4 }}>Create a client portal</div>
        <div style={{ fontSize: 11.5, color: PD.muted2, marginTop: 4 }}>One shareable link. Your client sees what you publish.</div>

        <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
          {[
            { label: "Project name", value: "Brand redesign" },
            { label: "Client", value: "Aman Verma · aman@versa.studio" },
          ].map(field => (
            <div key={field.label}>
              <Eyebrow style={{ fontSize: 9.5, marginBottom: 6 }}>{field.label}</Eyebrow>
              <div className="rounded-[7px] px-3 py-2.5 text-[12.5px]"
                style={{ border: `1px solid ${PD.inputBorder}`, background: "#fff", color: PD.ink }}>
                {field.value}
              </div>
            </div>
          ))}

          <div>
            <Eyebrow style={{ fontSize: 9.5, marginBottom: 6 }}>Pricing region</Eyebrow>
            <div style={{ display: "inline-flex", padding: 3, background: PD.segBg, borderRadius: 7, border: `1px solid ${PD.border}` }}>
              {[
                { v: "local", label: "🇮🇳 Local · INR", active: true },
                { v: "intl", label: "🌐 International · USD", active: false },
              ].map(o => (
                <span key={o.v} style={{
                  padding: "5px 11px", borderRadius: 5,
                  background: o.active ? "#fff" : "transparent",
                  color: o.active ? PD.ink : PD.muted,
                  fontSize: 11, fontWeight: o.active ? 600 : 500,
                  boxShadow: o.active ? "0 1px 2px rgba(0,0,0,.06)" : "none",
                }}>{o.label}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { v: "razorpay", name: "Razorpay", sub: "UPI · Cards · Netbanking", tag: "INDIA", active: true },
              { v: "stripe", name: "Stripe", sub: "Cards · ACH · Wire", tag: "GLOBAL", active: false },
            ].map(o => (
              <div key={o.v} style={{
                padding: 11,
                border: o.active ? `1.5px solid ${PD.blue}` : `1px solid ${PD.inputBorder}`,
                borderRadius: 7, background: o.active ? PD.blueBg : "#fff",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: PD.ink }}>{o.name}</span>
                  <span style={{ fontSize: 8.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.6 }}>{o.tag}</span>
                </div>
                <div style={{ fontSize: 9.5, color: PD.muted2, marginTop: 2 }}>{o.sub}</div>
              </div>
            ))}
          </div>

          {/* generated URL preview */}
          <div style={{
            padding: "10px 12px", borderRadius: 7,
            background: PD.blueBg, border: `1px solid ${PD.blueLight}`,
          }}>
            <Eyebrow style={{ fontSize: 8.5, marginBottom: 4, color: PD.blue }}>YOUR PERMANENT URL</Eyebrow>
            <div style={{ fontFamily: monoFont, fontSize: 11, display: "flex", alignItems: "center", gap: 8, color: PD.ink }}>
              app.soloflow.in/client/<strong style={{ color: PD.blue }}>aman-verma</strong>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, color: PD.green }}>
                <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />Live
              </span>
            </div>
          </div>

          <button style={{
            padding: "10px 14px", borderRadius: 7, background: PD.ink, color: "#fff",
            fontSize: 12, fontWeight: 600, border: "none", marginTop: 4,
          }}>
            Create portal
          </button>
        </div>
      </FCard>
    </div>
  );
}

/* ─── Step 3: Pay-now hero card + payment received toast ─── */
function MockupShareAndPaid() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 -z-10 opacity-50"
        style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, #2952ff 18%, transparent), transparent 65%)" }} />

      <div className="grid gap-3">
        {/* Pay-hero card */}
        <div style={{
          background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
          borderRadius: 14, padding: 22, color: "#fff",
          position: "relative", overflow: "hidden",
          boxShadow: "0 30px 80px -20px rgba(20,18,14,0.30), 0 8px 22px -8px rgba(20,18,14,0.18)",
        }}>
          <div style={{
            position: "absolute", top: -50, right: -50, width: 180, height: 180,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(41,82,255,0.25), transparent 70%)",
          }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
            <div style={{ fontFamily: monoFont, fontSize: 10.5, letterSpacing: 1.4, color: "rgba(255,255,255,0.55)" }}>
              INVOICE #042
            </div>
            <span style={{
              fontSize: 10, padding: "2.5px 8px", borderRadius: 999,
              background: "rgba(184,118,28,0.18)", color: PD.amberLight,
              fontFamily: monoFont, fontWeight: 600, letterSpacing: 0.5,
            }}>DUE IN 13 DAYS</span>
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.1, marginTop: 14, position: "relative" }}>$2,400</div>
          <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 4, position: "relative" }}>Design milestone — homepage v3 review</div>
          <div style={{ marginTop: 16, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", position: "relative" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Stripe fee</span>
            <span style={{ fontFamily: monoFont, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>Covered</span>
          </div>
          <div style={{
            marginTop: 14,
            padding: "12px 14px", borderRadius: 8, background: PD.blue, color: "#fff",
            fontSize: 13, fontWeight: 600,
            display: "inline-flex", alignItems: "center", justifyContent: "space-between",
            boxShadow: "0 6px 16px rgba(41,82,255,0.35)", position: "relative",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />
              Pay $2,400 with Stripe
            </span>
            <span style={{ fontFamily: monoFont, fontSize: 11, color: "rgba(255,255,255,0.85)" }}>↗</span>
          </div>
          <div style={{ marginTop: 9, fontFamily: monoFont, fontSize: 9.5, color: "#3fdc8f", letterSpacing: 0.5, position: "relative" }}>
            ● PCI-DSS · SETTLES IN ~12 MIN
          </div>
        </div>

        {/* Payment received toast */}
        <div style={{
          padding: "11px 13px", borderRadius: 10,
          background: "#fff", border: `1px solid ${PD.greenLight}`,
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: "0 20px 50px -15px rgba(20,18,14,0.18)",
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: "50%",
            background: PD.greenBg, display: "grid", placeItems: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" style={{ color: PD.green }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: PD.ink }}>Aman paid $2,400</div>
            <div style={{ fontSize: 9.5, fontFamily: monoFont, color: PD.muted2, marginTop: 1, letterSpacing: 0.4 }}>STRIPE · CARD · SETTLED IN 9 MIN</div>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: PD.green, fontFamily: monoFont }}>+$2,400</div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    eyebrow: "Sign up",
    title: "Email and a magic link.",
    desc: "No credit card. No lengthy onboarding. You're inside in 10 seconds flat — and everything's already configured.",
    bullets: ["Magic-link auth", "Zero password fatigue", "Workspace ready instantly"],
    Mockup: MockupSignup,
  },
  {
    num: "02",
    eyebrow: "Add a client",
    title: "Spin up a permanent portal.",
    desc: "Drop in client name, project, and budget. SoloFlow mints a permanent, branded URL they can bookmark — for this project and the next.",
    bullets: ["Permanent client URL", "Branded with your studio", "Razorpay or Stripe — pick once"],
    Mockup: MockupCreateClient,
  },
  {
    num: "03",
    eyebrow: "Share the link",
    title: "Watch the payments land.",
    desc: "Send the link via WhatsApp or email. Clients pay in one click — UPI, card, or international. You see it the moment money moves.",
    bullets: ["Razorpay + Stripe inline", "Real-time payment notifications", "Auto-reconciled with invoices"],
    Mockup: MockupShareAndPaid,
  },
];

export default function How() {
  return (
    <section id="how" className="relative overflow-hidden" style={{ padding: "var(--sf-section-y) 0" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--sf-ink) 8%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
        }}
      />

      <div className="relative" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        <motion.div className="text-center max-w-[720px] mx-auto mb-20" variants={stagger(0.08, 0.05)} {...inView}>
          <motion.span variants={fadeUpSm} className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3" style={{ color: "var(--sf-ink-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            How it works
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4" style={{ fontSize: "clamp(38px, 4.7vw, 66px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Live in{" "}
            <em style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--sf-accent)", fontSize: "0.96em" }}>
              under sixty
            </em>{" "}
            seconds.
          </motion.h2>
          <motion.p variants={fadeUpSm} style={{ fontSize: 17, color: "var(--sf-ink-2)" }}>
            No onboarding calls. No setup wizard. No learning curve. Three steps and you're collecting payments.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, i) => {
            const flip = i % 2 === 1;
            const Mockup = step.Mockup;
            return (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div aria-hidden
                    className="absolute left-1/2 -bottom-24 md:-bottom-32 w-px h-24 md:h-32 -translate-x-1/2"
                    style={{ background: "linear-gradient(to bottom, var(--sf-line), transparent)" }} />
                )}

                <motion.div
                  className="grid gap-10 md:gap-16 items-center md:grid-cols-2"
                  variants={stagger(0.15, 0)}
                  {...inView}
                >
                  <motion.div
                    variants={flip ? slideInRight : slideInLeft}
                    className={`${flip ? "md:order-2" : ""} flex flex-col gap-5`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-instrument-serif)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "clamp(72px, 9vw, 128px)",
                          color: "var(--sf-brand)",
                          letterSpacing: "-0.04em",
                        }}>
                        {step.num}
                      </span>
                      <span className="font-mono text-[11.5px] uppercase tracking-[0.1em]" style={{ color: "var(--sf-ink-3)" }}>
                        {step.eyebrow}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--sf-ink)" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--sf-ink-2)", fontSize: 16.5, lineHeight: 1.55, maxWidth: 480 }}>
                      {step.desc}
                    </p>
                    <ul className="grid gap-2.5 mt-1">
                      {step.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2.5 text-sm" style={{ listStyle: "none", color: "var(--sf-ink-2)" }}>
                          <span className="mt-1.5 w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
                            style={{ background: "var(--sf-brand-soft)", border: "1.5px solid var(--sf-brand)" }}>
                            <span className="w-1 h-1 rounded-full" style={{ background: "var(--sf-brand)" }} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={flip ? slideInLeft : slideInRight}
                    className={`${flip ? "md:order-1" : ""}`}
                  >
                    <Mockup />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
