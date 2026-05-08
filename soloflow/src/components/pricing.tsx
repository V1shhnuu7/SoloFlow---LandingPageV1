"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

type Mode = "local" | "intl";

const plans: {
  tag: string;
  tagCase: "sentence" | "upper";
  sub: string;
  price: Record<Mode, string>;
  period: Record<Mode, string>;
  oldPrice?: Record<Mode, string>;
  features: string[];
  cta: string;
  featured: boolean;
}[] = [
  {
    tag: "Free",
    tagCase: "sentence",
    sub: "For trying SoloFlow",
    price: { local: "Free", intl: "Free" },
    period: { local: "forever", intl: "forever" },
    features: ["1 client portal", "Milestone tracking", "File sharing", "Early access badge"],
    cta: "Start free",
    featured: false,
  },
  {
    tag: "ONGOING",
    tagCase: "upper",
    sub: "For active freelancers",
    price: { local: "₹499", intl: "$9" },
    period: { local: "/month", intl: "/month" },
    oldPrice: { local: "₹699", intl: "$12" },
    features: [
      "Unlimited portals",
      "Custom branding & domain",
      "GST + international invoicing",
      "Automated WhatsApp reminders",
      "Priority support",
    ],
    cta: "Lock founding price",
    featured: true,
  },
  {
    tag: "PROJECT PASS",
    tagCase: "upper",
    sub: "For occasional client work",
    price: { local: "₹209", intl: "$5" },
    period: { local: "/project", intl: "/project" },
    features: ["Full client workspace", "Payments + revisions", "No subscription", "One project at a time"],
    cta: "Unlock a project",
    featured: false,
  },
];

function Check({ tone = "ink" }: { tone?: "ink" | "brand" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-[14px] h-[14px] flex-shrink-0"
      style={{ color: tone === "brand" ? "var(--sf-brand)" : "var(--sf-ink-2)" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4.5 4.5L20 6" />
    </svg>
  );
}

export default function Pricing() {
  const [mode, setMode] = useState<Mode>("local");

  return (
    <section id="pricing" style={{ padding: "var(--sf-section-y) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        {/* Section head */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span
            className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3"
            style={{ color: "var(--sf-ink-3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            Founding pricing
          </span>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(38px, 4.7vw, 66px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Pricing plans
          </h2>
          <p className="mb-8" style={{ color: "var(--sf-ink-2)", fontSize: 17 }}>
            Choose the right plan for the way you work — founding pricing locks in{" "}
            <em style={{ fontWeight: 500, color: "var(--sf-accent)", fontStyle: "normal" }}>forever.</em>
          </p>

          {/* Local / International toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full"
            style={{
              background: "var(--sf-bg-soft)",
              border: "1px solid var(--sf-line)",
            }}
          >
            <button
              onClick={() => setMode("local")}
              className="px-5 py-2 rounded-full font-medium text-[13.5px] transition-all"
              style={{
                background: mode === "local" ? "var(--sf-ink)" : "transparent",
                color: mode === "local" ? "var(--sf-bg)" : "var(--sf-ink-2)",
              }}
            >
              Local clients
            </button>
            <button
              onClick={() => setMode("intl")}
              className="px-5 py-2 rounded-full font-medium text-[13.5px] transition-all"
              style={{
                background: mode === "intl" ? "var(--sf-ink)" : "transparent",
                color: mode === "intl" ? "var(--sf-bg)" : "var(--sf-ink-2)",
              }}
            >
              International
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.tag} delay={0.4 + (index * 0.15)} dir="up">
              <article
                className={`rounded-[24px] h-full overflow-hidden flex flex-col transition-transform duration-300 ${plan.featured ? 'hover:-translate-y-1' : ''}`}
              style={{
                opacity: plan.featured ? 1 : 0.55,
                filter: plan.featured ? "none" : "grayscale(30%)",
                background: "var(--sf-bg)",
                border: "1px solid var(--sf-line)",
                boxShadow: plan.featured
                  ? "0 28px 60px -18px oklch(56% 0.19 258 / 0.18), 0 8px 22px -8px rgba(20,18,14,0.10)"
                  : "0 16px 32px -16px rgba(20,18,14,0.08), 0 2px 6px rgba(20,18,14,0.03)",
              }}
            >
              {/* ── Top: tag + price ── */}
              <div
                style={{
                  padding: "26px 28px 30px",
                  background: plan.featured
                    ? "linear-gradient(135deg, oklch(94% 0.045 258) 0%, oklch(96.5% 0.025 268) 60%, oklch(97.5% 0.018 285) 100%)"
                    : "var(--sf-bg-soft)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 999,
                    background: plan.featured ? "rgba(255,255,255,0.85)" : "var(--sf-bg)",
                    border: "1px solid color-mix(in oklab, var(--sf-line) 90%, transparent)",
                    fontFamily: plan.tagCase === "upper" ? "var(--font-ibm-plex-mono)" : "var(--font-geist-sans)",
                    fontSize: plan.tagCase === "upper" ? 10.5 : 12.5,
                    fontWeight: 600,
                    letterSpacing: plan.tagCase === "upper" ? "0.08em" : "-0.005em",
                    color: "var(--sf-ink)",
                  }}
                >
                  {plan.tag}
                </span>

                <div style={{ marginTop: 28, display: "flex", alignItems: "baseline", gap: 4, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "clamp(40px, 4.6vw, 52px)",
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      color: "var(--sf-ink)",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price[mode]}
                  </span>
                  <span style={{ fontSize: 15, color: "var(--sf-ink-3)" }}>{plan.period[mode]}</span>
                </div>

                <div className="mt-2 flex items-center min-h-[18px]">
                  {plan.oldPrice ? (
                    <div
                      className="inline-flex items-center gap-2"
                      style={{ fontSize: 12, color: "var(--sf-ink-3)" }}
                    >
                      <span style={{ textDecoration: "line-through", opacity: 0.55 }}>{plan.oldPrice[mode]}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontSize: 10.5,
                          letterSpacing: "0.06em",
                          color: "var(--sf-brand)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                        }}
                      >
                        Founding · 30% off forever
                      </span>
                    </div>
                  ) : (
                    <div
                      className="inline-flex items-center"
                      style={{ fontSize: 12, color: "var(--sf-ink-3)" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono)",
                          fontSize: 10.5,
                          letterSpacing: "0.06em",
                          fontWeight: 600,
                          textTransform: "uppercase",
                        }}
                      >
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Middle: tagline + CTA pill ── */}
              <div style={{ padding: "20px 28px 24px" }}>
                <div style={{ fontSize: 14.5, color: "var(--sf-ink)", fontWeight: 500, marginBottom: 14 }}>
                  {plan.sub}
                </div>
                <button
                  disabled={!plan.featured}
                  onClick={() => {
                    if (plan.featured) {
                      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full transition-all duration-200 ${plan.featured ? 'hover:-translate-y-px cursor-pointer' : 'cursor-not-allowed opacity-80'}`}
                  style={{
                    padding: "14px 22px",
                    borderRadius: "999px",
                    background: plan.featured ? "var(--sf-ink)" : "#e5e7eb",
                    color: plan.featured ? "var(--sf-bg)" : "var(--sf-ink-3)",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "none",
                    boxShadow: "none",
                    letterSpacing: "-0.01em",
                    outline: "none"
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {!plan.featured && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    )}
                    {plan.featured ? plan.cta : "Coming soon"}
                  </span>
                </button>
              </div>

              {/* ── Bottom: features ── */}
              <div
                style={{
                  padding: "20px 28px 30px",
                  borderTop: "1px solid var(--sf-line-2)",
                  flex: 1,
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                  }}
                >
                  {plan.features.map(f => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: "var(--sf-ink-2)",
                        lineHeight: 1.4,
                      }}
                    >
                      <Check tone={plan.featured ? "brand" : "ink"} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>            </Reveal>          ))}
        </div>
      </div>
    </section>
  );
}
