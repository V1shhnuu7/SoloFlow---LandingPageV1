"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, inView, stagger } from "@/lib/motion";

const items = [
  {
    q: "Why shouldn't I just use WhatsApp + Drive?",
    a: "You can — most freelancers do. But work scatters across chats, files get buried, payments slip. SoloFlow replaces that chaos with one shareable link your client can bookmark — progress, files, invoices, payments, all in one place.",
  },
  {
    q: "When does SoloFlow launch publicly?",
    a: "Public launch is targeted for Q3 2026. Early-access members get in 4–6 weeks before launch and lock in founding pricing forever.",
  },
  {
    q: "What do I get on the waitlist?",
    a: "50% off Pro and Starter plans locked forever, founding member badge, and direct access to the team to shape the roadmap.",
  },
  {
    q: "Is the free plan really free forever?",
    a: "Yes. Free plan, free forever, one client portal. No card. Upgrade to Pro only when you need more.",
  },
  {
    q: "How does Razorpay/Stripe integration work?",
    a: "Connect your existing Razorpay or Stripe account in under five minutes. Clients pay through their portal — funds settle on the standard payout schedule directly to your bank.",
  },
  {
    q: "Will my founding pricing change after launch?",
    a: "Never. Whatever price you lock during early access is yours forever — even after public launch. Founding member promise.",
  },
  {
    q: "Can I export my data?",
    a: "Always. Export client data, project history, files, and invoices anytime — including on the free plan. Your data is yours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" style={{ padding: "var(--sf-section-y) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        <motion.div className="text-center max-w-[720px] mx-auto mb-14" variants={stagger(0.08, 0.05)} {...inView}>
          <motion.span variants={fadeUpSm} className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3" style={{ color: "var(--sf-ink-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(38px, 4.7vw, 66px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Questions about{" "}
            <em className="whitespace-nowrap" style={{ fontWeight: 500, color: "var(--sf-accent)", fontStyle: "normal" }}>early access.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-[820px] mx-auto border-t"
          style={{ borderColor: "var(--sf-line)" }}
          variants={stagger(0.05, 0.05)}
          {...inView}
        >
          {items.map((item, i) => (
            <motion.div variants={fadeUpSm} key={item.q} className="border-b" style={{ borderColor: "var(--sf-line)" }}>
              <button
                className="w-full text-left flex items-center justify-between gap-5 py-5 font-medium transition-colors"
                style={{ fontSize: 17, letterSpacing: "-0.015em", color: "var(--sf-ink)" }}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {item.q}
                <span
                  className="w-6 h-6 rounded-full flex-shrink-0 inline-flex items-center justify-center text-sm transition-all duration-300"
                  style={{
                    background: open === i ? "var(--sf-ink)" : "var(--sf-bg-soft)",
                    border: `1px solid ${open === i ? "var(--sf-ink)" : "var(--sf-line)"}`,
                    color: open === i ? "var(--sf-bg)" : "var(--sf-ink-2)",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-[350ms]"
                style={{ maxHeight: open === i ? 320 : 0 }}
              >
                <p className="pb-6 m-0 max-w-[640px]" style={{ color: "var(--sf-ink-2)", fontSize: 15, lineHeight: 1.55 }}>
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
