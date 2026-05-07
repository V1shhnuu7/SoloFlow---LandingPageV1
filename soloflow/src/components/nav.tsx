"use client";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-60 backdrop-blur-[14px]"
      style={{
        background: "color-mix(in oklab, var(--sf-bg) 78%, transparent)",
        borderBottom: "1px solid color-mix(in oklab, var(--sf-line) 60%, transparent)",
      }}
    >
      <div
        className="flex items-center justify-between h-16 max-w-[1280px] mx-auto"
        style={{ padding: "0 var(--sf-pad-x)" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-semibold text-base tracking-tight" style={{ color: "var(--sf-ink)", letterSpacing: "-0.02em" }}>
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
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex gap-7 text-sm" style={{ color: "var(--sf-ink-2)", marginLeft: "auto", marginRight: "32px" }}>
          {["#features", "#how", "#pricing", "#faq"].map((href, i) => (
            <a key={href} href={href} className="hover:text-[var(--sf-ink)] transition-colors">
              {["Features", "How it works", "Pricing", "FAQ"][i]}
            </a>
          ))}
        </nav>

        <ShimmerButton
          background="var(--sf-ink)"
          borderRadius="999px"
          shimmerDuration="3s"
          shimmerSize="0.05em"
          className="px-3.5 py-2 text-[13.5px] font-medium"
          onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
        >
          Join waitlist
        </ShimmerButton>
      </div>
    </header>
  );
}
