"use client";
import { motion } from "framer-motion";
import { fadeUpSm, inView, stagger } from "@/lib/motion";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--sf-line)",
        padding: "clamp(32px, 5vw, 48px) 0 clamp(40px, 5vw, 60px)",
        color: "var(--sf-ink-3)",
        fontSize: 13,
      }}
    >
      <motion.div
        className="
          max-w-[1280px] mx-auto
          flex flex-col gap-7 items-center text-center
          md:flex-row md:items-center md:justify-between md:text-left md:gap-4 md:flex-wrap
        "
        style={{ padding: "0 var(--sf-pad-x)" }}
        variants={stagger(0.08, 0)}
        {...inView}
      >
        {/* Logo */}
        <motion.div
          variants={fadeUpSm}
          className="flex items-center gap-2.5 font-semibold text-base"
          style={{ color: "var(--sf-ink)", letterSpacing: "-0.02em" }}
        >
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

        {/* Nav links — wrap on tiny phones, single row on phones+ */}
        <motion.div
          variants={fadeUpSm}
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:gap-5"
        >
          {[
            ["#features", "Features"],
            ["#pricing", "Pricing"],
            ["#how", "How it works"],
            ["#faq", "FAQ"],
            ["https://x.com/v1shhnuu7", "X"],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-[var(--sf-ink)] py-1"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUpSm}
          className="text-[12.5px]"
          style={{ color: "var(--sf-ink-3)" }}
        >
          © 2026 SoloFlow · Built in India
        </motion.div>
      </motion.div>
    </footer>
  );
}
