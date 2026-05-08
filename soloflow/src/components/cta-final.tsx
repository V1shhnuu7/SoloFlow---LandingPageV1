"use client";
import { useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function CtaFinal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lockPrice, setLockPrice] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/mdaygdeq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, lockPrice }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Couldn't submit — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeModal() {
    setModalOpen(false);
    // reset success state after closing so user can re-open clean if they want
    setTimeout(() => {
      setSubmitted(false);
      setError(null);
    }, 250);
  }

  return (
    <>
      <section
        id="cta"
        className="relative overflow-hidden rounded-[32px] flex flex-col items-center justify-center text-center group"
        style={{
          margin: "0 var(--sf-pad-x) 64px",
          background: "var(--sf-dark-bg)",
          color: "var(--sf-dark-ink)",
          padding: "clamp(80px, 12vw, 160px) clamp(28px, 5vw, 80px)",
        }}
      >
        {/* Animated Aurora Background to reduce static feel */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] rounded-full blur-[100px] opacity-40 transition-transform duration-[10s] ease-in-out group-hover:translate-x-[5%] group-hover:scale-110"
            style={{ background: "color-mix(in oklab, #2563eb 40%, transparent)" }} />
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] rounded-full blur-[100px] opacity-30 transition-transform duration-[8s] ease-in-out group-hover:-translate-x-[5%] group-hover:-translate-y-[5%]"
            style={{ background: "color-mix(in oklab, oklch(70% 0.18 75) 40%, transparent)" }} />
        </div>

        {/* Elegant top white glow fade */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[100%] pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% -10%, rgba(255,255,255,0.15) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 style={{ fontSize: "clamp(38px, 5.5vw, 76px)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--sf-dark-ink)", lineHeight: 1.05 }}>
            Turn your workflow into{" "}
            <em style={{ fontWeight: 500, color: "oklch(78% 0.10 258)", fontStyle: "normal" }}>
              clarity
            </em>
          </h2>
          <p className="mt-5" style={{ color: "var(--sf-dark-ink-2)", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.5, maxWidth: "480px" }}>
            SoloFlow makes it effortless to manage projects, invoices, and clients in one place.
          </p>
          
          <div className="mt-8 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <ShimmerButton
              onClick={() => setModalOpen(true)}
              background="linear-gradient(180deg, oklch(22% 0.012 260) 0%, var(--sf-ink) 100%)"
              borderRadius="999px"
              shimmerDuration="2.8s"
              shimmerSize="0.06em"
              className="shadow-md"
            >
              <span className="font-medium px-4 tracking-tight" style={{ fontSize: "15px", color: "var(--sf-bg)", textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>
                Get Started
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          <div
            className="relative w-full max-w-md rounded-[24px] p-8 shadow-2xl"
            style={{
              background: "var(--sf-dark-bg)",
              color: "var(--sf-dark-ink)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 text-white/40 hover:text-white"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1L13 13M1 13L13 1" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-semibold mb-2">Join the waitlist</h3>
                <p className="text-sm mb-6" style={{ color: "var(--sf-dark-ink-2)" }}>Be the first to know when we launch.</p>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5 block" style={{ color: "var(--sf-dark-ink-2)" }}>Name</label>
                    <input
                      type="text" required value={name} onChange={e => setName(e.target.value)}
                      className="w-full rounded-[10px] px-3.5 py-3 text-sm border border-white/10 bg-black/20 outline-none transition-colors focus:border-blue-500 focus:bg-white/5"
                      style={{ color: "var(--sf-dark-ink)" }}
                      placeholder="Aman Verma"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.08em] mb-1.5 block" style={{ color: "var(--sf-dark-ink-2)" }}>Email</label>
                    <input
                      type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full rounded-[10px] px-3.5 py-3 text-sm border border-white/10 bg-black/20 outline-none transition-colors focus:border-blue-500 focus:bg-white/5"
                      style={{ color: "var(--sf-dark-ink)" }}
                      placeholder="aman@studio.in"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2 py-2">
                    <span className="text-sm" style={{ color: "var(--sf-dark-ink-2)" }}>Lock founding price registration</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={lockPrice} onChange={e => setLockPrice(e.target.checked)} />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  {error && (
                    <div className="text-[12.5px] py-1" style={{ color: "#ff8b6b" }}>{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || !email || !name}
                    className="mt-4 w-full py-3.5 rounded-[10px] font-medium text-sm text-black bg-white transition-all hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Joining…" : "Join the waitlist"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-2">
                <div
                  className="w-14 h-14 mx-auto rounded-full grid place-items-center mb-5 relative"
                  style={{ background: "linear-gradient(135deg, #2563eb, oklch(70% 0.18 75))" }}
                >
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">You're in{name ? `, ${name}` : ""}.</h3>
                <p className="text-sm mb-6" style={{ color: "var(--sf-dark-ink-2)", lineHeight: 1.5 }}>
                  We'll email <strong style={{ color: "var(--sf-dark-ink)" }}>{email}</strong> the moment early access opens.{lockPrice ? " Your founding price is locked." : ""}
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-3 rounded-[10px] font-medium text-sm transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--sf-dark-ink)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  Got it
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
