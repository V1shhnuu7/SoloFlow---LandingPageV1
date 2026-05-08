"use client";
import { motion } from "framer-motion";
import { fadeUp, inView, stagger } from "@/lib/motion";

const stats = [
  { num: "6", suffix: "×", label: "Faster Payments" },
  { num: "60", suffix: "s", label: "To Set Up" },
  { num: "1", suffix: "", label: "Link, Every Client" },
  { num: "0", suffix: "", label: "Tools To Juggle" },
];

export default function Stats() {
  return (
    <section className="py-10 border-y" style={{ borderColor: "var(--sf-line)" }}>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}
        variants={stagger(0.1, 0.1)}
        {...inView}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="text-center py-5 border-l first:border-l-0"
            style={{ borderColor: "var(--sf-line)" }}
          >
            <div className="font-medium tracking-tight" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", color: "var(--sf-ink)", letterSpacing: "-0.03em" }}>
              {s.num}
              {s.suffix && (
                <em style={{ fontWeight: 500, color: "var(--sf-accent)", fontStyle: "normal" }}>
                  {s.suffix}
                </em>
              )}
            </div>
            <div className="font-mono text-[11.5px] uppercase mt-1 tracking-[0.08em]" style={{ color: "var(--sf-ink-3)" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
