"use client";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, inView, stagger } from "@/lib/motion";

const testimonials = [
  {
    quote: "Following up for payments is honestly the most frustrating part of freelancing. This makes everything feel professional.",
    name: "Thanish",
    role: "Beta · Freelance creative artist",
    initial: "T",
  },
  {
    quote: "I forget pending payments when juggling clients. SoloFlow keeps me on top of every invoice without lifting a finger.",
    name: "Hithend",
    role: "Early adopter · Designer",
    initial: "H",
  },
  {
    quote: "The portal makes me look like a studio, not a freelancer. Clients pay faster because the workflow respects their time.",
    name: "Sanjay",
    role: "Verified user · Designer",
    initial: "S",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "var(--sf-section-y) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        <motion.div
          className="text-center max-w-[720px] mx-auto mb-14"
          variants={stagger(0.08, 0.05)}
          {...inView}
        >
          <motion.span variants={fadeUpSm} className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3" style={{ color: "var(--sf-ink-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            From the waitlist
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-3" style={{ fontSize: "clamp(38px, 4.7vw, 66px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Freelancers tired of{" "}
            <em style={{ fontWeight: 500, color: "var(--sf-accent)", fontStyle: "normal" }}>chasing payments.</em>
          </motion.h2>
          <motion.p variants={fadeUpSm} style={{ color: "var(--sf-ink-2)", fontSize: 17 }}>Early users told us what's broken. Then they told us what they'd pay for.</motion.p>
        </motion.div>

        <motion.div className="grid gap-4 md:grid-cols-3" variants={stagger(0.12, 0.05)} {...inView}>
          {testimonials.map(t => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="magic-card flex flex-col gap-5 p-7 rounded-[14px] border transition-all duration-250 hover:-translate-y-0.5"
              style={{ borderColor: "var(--sf-line)", background: "var(--sf-bg)", boxShadow: "0 0 0 0 transparent" }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = "0 12px 30px -12px oklch(0% 0 0 / 0.12)")}
              onMouseOut={e => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
            >
              <p className="text-lg leading-relaxed" style={{ letterSpacing: "-0.012em", color: "var(--sf-ink)", margin: 0 }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 border-t pt-4 mt-auto" style={{ borderColor: "var(--sf-line-2)" }}>
                <span className="w-9 h-9 rounded-full flex-shrink-0 inline-flex items-center justify-center text-white text-sm font-medium"
                  style={{ background: "linear-gradient(135deg, var(--sf-brand), oklch(60% 0.18 280))" }}>
                  {t.initial}
                </span>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--sf-ink)" }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--sf-ink-3)" }}>{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
