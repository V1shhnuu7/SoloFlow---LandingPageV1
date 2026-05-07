"use client";
import { motion } from "framer-motion";
import { fadeUpSm, inView, stagger } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--sf-line)", padding: "40px 0 60px", color: "var(--sf-ink-3)", fontSize: 13 }}>
      <motion.div
        className="flex justify-between items-center flex-wrap gap-4 max-w-[1280px] mx-auto"
        style={{ padding: "0 var(--sf-pad-x)" }}
        variants={stagger(0.06, 0)}
        {...inView}
      >
        <motion.div variants={fadeUpSm} className="flex items-center gap-2.5 font-semibold text-base" style={{ color: "var(--sf-ink)", letterSpacing: "-0.02em" }}>
          <span
            className="w-8 h-8 flex-shrink-0"
            style={{
              background: `
                radial-gradient(circle at 10px 8px, var(--sf-brand) 5.5px, transparent 6px),
                radial-gradient(circle at 28px 6px, color-mix(in oklab, var(--sf-brand) 60%, transparent) 3.5px, transparent 4px),
                radial-gradient(circle at 4px 26px, color-mix(in oklab, var(--sf-brand) 60%, black) 3.5px, transparent 4px),
                radial-gradient(circle at 24px 26px, color-mix(in oklab, var(--sf-brand) 80%, black) 5.5px, transparent 6px)
              `,
            }}
          />
          <span>SoloFlow</span>
        </motion.div>
        <motion.div variants={fadeUpSm} className="flex gap-5">
          {[["#features", "Features"], ["#pricing", "Pricing"], ["#how", "How it works"], ["https://x.com/v1shhnuu7", "X"]].map(([href, label]) => (
            <a key={label} href={href} className="transition-colors hover:text-[var(--sf-ink)]">{label}</a>
          ))}
        </motion.div>
        <motion.div variants={fadeUpSm}>© 2026 SoloFlow</motion.div>
      </motion.div>
    </footer>
  );
}
