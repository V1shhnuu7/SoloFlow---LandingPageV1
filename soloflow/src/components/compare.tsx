"use client";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, inView, scaleIn, stagger } from "@/lib/motion";

const rows = [
  { task: "Client communication", old: "WhatsApp, Email, Meet", sf: "Built into the portal" },
  { task: "Project tracking", old: "Trello, Notion, Asana", sf: "Native kanban + timeline" },
  { task: "Invoicing", old: "Excel, Zoho, Invoice.to", sf: "Generated & tracked" },
  { task: "Payment collection", old: "Manual transfers, PayPal", sf: "Razorpay + Stripe inline" },
  { task: "Following up on payments", old: "Manual WhatsApp / email pings", sf: "Auto WhatsApp reminders, branded" },
  { task: "Client management", old: "Spreadsheets & CRMs", sf: "Centralized client history" },
  { task: "File sharing", old: "Drive, Dropbox, email", sf: "Project-attached storage" },
];

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] flex-shrink-0" style={{ background: "var(--sf-brand)" }}>
      ✓
    </span>
  );
}

export default function Compare() {
  return (
    <section id="compare" style={{ padding: "var(--sf-section-y) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        <motion.div className="text-center max-w-[720px] mx-auto mb-14" variants={stagger(0.08, 0.05)} {...inView}>
          <motion.span variants={fadeUpSm} className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3" style={{ color: "var(--sf-ink-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            Stack comparison
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-3" style={{ fontSize: "clamp(38px, 4.7vw, 66px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Six tools, or{" "}
            <em style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--sf-accent)", fontSize: "0.96em" }}>one</em>.
          </motion.h2>
          <motion.p variants={fadeUpSm} style={{ color: "var(--sf-ink-2)", fontSize: 17 }}>What you're using now versus what you could be using.</motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          {...inView}
          className="rounded-[22px] border overflow-hidden"
          style={{ borderColor: "var(--sf-line)", background: "var(--sf-bg)", boxShadow: "0 1px 2px oklch(0% 0 0 / 0.03)" }}
        >
          {/* Header */}
          <div className="grid" style={{ gridTemplateColumns: "1.4fr 1.6fr 1.2fr", borderBottom: "1px solid var(--sf-line)" }}>
            {["What you do", "Today (the stack)", "SoloFlow"].map((h, i) => (
              <div key={h} className="px-6 py-3.5 font-mono text-[11.5px] uppercase tracking-[0.08em] border-l first:border-l-0"
                style={{ borderColor: "var(--sf-line)", background: "var(--sf-bg-soft)", color: i === 2 ? "var(--sf-brand)" : "var(--sf-ink-3)" }}>
                {h}
              </div>
            ))}
          </div>
          <motion.div variants={stagger(0.05, 0.15)} {...inView}>
            {rows.map(r => (
              <motion.div
                key={r.task}
                variants={fadeUpSm}
                className="grid border-t"
                style={{ gridTemplateColumns: "1.4fr 1.6fr 1.2fr", borderColor: "var(--sf-line)" }}
              >
                <div className="px-6 py-5 text-sm font-medium border-l first:border-l-0" style={{ borderColor: "var(--sf-line)", color: "var(--sf-ink)" }}>{r.task}</div>
                <div className="px-6 py-5 text-sm border-l" style={{ borderColor: "var(--sf-line)", color: "var(--sf-ink-2)" }}>{r.old}</div>
                <div className="px-6 py-5 text-sm font-medium flex items-center gap-2 border-l"
                  style={{ borderColor: "var(--sf-line)", background: "color-mix(in oklab, var(--sf-brand-soft) 50%, var(--sf-bg))", color: "var(--sf-ink)" }}>
                  <Check /> {r.sf}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
