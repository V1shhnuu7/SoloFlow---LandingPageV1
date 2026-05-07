"use client";
import { motion } from "framer-motion";
import { fadeUpSm, inView, stagger } from "@/lib/motion";

const tools = [
  { label: "WhatsApp threads", color: "#25D366" },
  { label: "Google Drive", color: "#FFBD03" },
  { label: "Excel invoices", color: "#107C41" },
  { label: "Trello / Notion", color: "#F22F46" },
  { label: "Email attachments", color: "#3D8BFD" },
  { label: "Manual reminders", color: "#0066FF" },
];

export default function Replaces() {
  return (
    <section
      className="relative py-14 border-y"
      style={{
        borderColor: "var(--sf-line)",
        backgroundImage: "repeating-linear-gradient(45deg, transparent 0 12px, color-mix(in oklab, var(--sf-line) 40%, transparent) 12px 13px)",
        backgroundSize: "18px 18px",
      }}
      aria-label="Tools SoloFlow replaces"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "var(--sf-bg)",
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />
      <motion.div
        className="relative z-[1] flex items-center gap-7 flex-wrap justify-center"
        style={{ padding: "0 var(--sf-pad-x)" }}
        variants={stagger(0.06, 0.05)}
        {...inView}
      >
        <motion.span
          variants={fadeUpSm}
          className="font-mono text-[11.5px] uppercase tracking-[0.1em]"
          style={{ color: "var(--sf-ink-3)" }}
        >
          Replaces
        </motion.span>
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          variants={stagger(0.05, 0)}
        >
          {tools.map(t => (
            <motion.span
              key={t.label}
              variants={fadeUpSm}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border"
              style={{
                background: "var(--sf-bg)",
                borderColor: "var(--sf-line)",
                color: "var(--sf-ink-2)",
                textDecoration: "line-through",
                textDecorationColor: "oklch(70% 0.18 30 / 0.7)",
                textDecorationThickness: "1.5px",
              }}
            >
              <span className="w-3.5 h-3.5 rounded-[3px] border flex-shrink-0" style={{ background: t.color, borderColor: t.color }} />
              {t.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
