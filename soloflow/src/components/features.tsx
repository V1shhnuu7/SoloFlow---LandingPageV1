"use client";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, inView, stagger } from "@/lib/motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import type { ReactNode } from "react";
import { Avatar, Eyebrow, FCard, MiniClientSidebar, PD, Pill, monoFont } from "./product-ui";

/* ─── Bento backgrounds — peek into actual product screens ─── */

function BgPortal() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: PD.pageBg,
        maskImage: "linear-gradient(to bottom, black 62%, transparent 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 95%)",
      }}
    >
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "138px 1fr", opacity: 0.95 }}>
        <MiniClientSidebar active="overview" scale={0.72} />
        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <Eyebrow style={{ fontSize: 8 }}>BRAND REDESIGN</Eyebrow>
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2, color: PD.ink, letterSpacing: -0.3 }}>Welcome back, Aman</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
            {[
              { l: "Progress", v: "65%", bar: 65 },
              { l: "Due", v: "$2,400", sub: "13 DAYS", c: PD.amber },
              { l: "Files", v: "4", sub: "1 NEW", c: PD.blue },
            ].map(t => (
              <FCard key={t.l} muted pad={8} interactive={false}>
                <div style={{ fontSize: 7, fontFamily: monoFont, letterSpacing: 0.6, color: PD.muted2, textTransform: "uppercase" }}>{t.l}</div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: -0.2, marginTop: 3, color: PD.ink }}>{t.v}</div>
                {t.bar !== undefined && (
                  <div style={{ height: 2, background: PD.trackBg, borderRadius: 999, overflow: "hidden", marginTop: 4 }}>
                    <div className="sf-product-progress" style={{ width: `${t.bar}%`, height: "100%" }} />
                  </div>
                )}
                {t.sub && <div style={{ fontSize: 7, color: t.c, marginTop: 3, fontFamily: monoFont, letterSpacing: 0.4 }}>{t.sub}</div>}
              </FCard>
            ))}
          </div>
          <FCard pad={9} interactive={false}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: PD.ink }}>Project progress</div>
              <div style={{ fontFamily: monoFont, fontSize: 7, color: PD.muted2 }}>3 of 4</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, marginTop: 9 }}>
              {[true, true, true, "active"].map((s, i) => (
                <div key={i} style={{ height: 3, borderRadius: 2, position: "relative", background: s === true ? PD.blue : (s === "active" ? PD.blueLight : PD.trackBg) }}>
                  {s === "active" && <div className="sf-product-shimmer" style={{ position: "absolute", inset: 0, borderRadius: 2 }} />}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 8, padding: "5px 7px", background: PD.blueBg, border: `1px solid ${PD.blueLight}`,
              borderRadius: 5, display: "flex", alignItems: "center", gap: 6,
            }}>
              <div className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.blue, flexShrink: 0 }} />
              <div style={{ flex: 1, fontSize: 8.5, color: PD.ink }}><b>Homepage v3 ready</b></div>
            </div>
          </FCard>

          {/* tiny activity feed — fills the empty zone with subtle live signal */}
          <div style={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { who: "Kira", what: "shared homepage-v3.fig", when: "2H", color: PD.warmAvatarBg, tc: PD.warmAvatarFg, fresh: true },
              { who: "Aman", what: "approved logo direction B", when: "1D", color: PD.blueAvatarBg, tc: PD.blueAvatarFg, fresh: false },
            ].map((a, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "3px 4px",
                fontSize: 8.5, color: PD.muted2,
              }}>
                <Avatar name={a.who} size={12} color={a.color} textColor={a.tc} />
                <span style={{ color: PD.ink2, fontWeight: 600 }}>{a.who}</span>
                <span style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.what}</span>
                {a.fresh && <span className="sf-product-pulse" style={{ width: 4, height: 4, borderRadius: "50%", background: PD.green, flexShrink: 0 }} />}
                <span style={{ fontFamily: monoFont, fontSize: 7.5, letterSpacing: 0.4, color: PD.muted2, flexShrink: 0 }}>{a.when}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BgProjects() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: PD.pageBg, padding: 12,
        maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
      }}
    >
      <FCard pad={0} interactive={false} style={{ overflow: "hidden", opacity: 0.95 }}>
        {/* Header with realtime indicator */}
        <div style={{
          padding: "8px 12px", borderBottom: `1px solid ${PD.borderSoft}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: PD.ink }}>Active portals</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />
            <span style={{ fontFamily: monoFont, fontSize: 7.5, color: PD.muted2, letterSpacing: 0.5 }}>LIVE · 4</span>
          </div>
        </div>

        {/* Featured row — expanded with collaborator cluster + milestone rail */}
        <div style={{
          padding: "9px 12px 10px",
          background: "linear-gradient(180deg, transparent 0%, rgba(41,82,255,0.025) 100%)",
          borderBottom: `1px solid ${PD.borderSoft}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <Avatar name="Aman Verma" size={20} color={PD.blueAvatarBg} textColor={PD.blueAvatarFg} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: PD.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Aman Verma
              </div>
              <div style={{ fontSize: 8, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.4 }}>
                BRAND REDESIGN · 4 OF 5 MILESTONES
              </div>
            </div>
            {/* tiny collaborator cluster */}
            <div style={{ display: "inline-flex", flexShrink: 0 }}>
              <Avatar name="Kira Sen" size={14} color={PD.warmAvatarBg} textColor={PD.warmAvatarFg} />
              <div style={{ marginLeft: -5 }}>
                <Avatar name="Aman Verma" size={14} color={PD.blueAvatarBg} textColor={PD.blueAvatarFg} />
              </div>
              <div style={{ marginLeft: -5 }}>
                <Avatar name="Rohan Das" size={14} color="#e7eaf3" textColor="#5a5648" />
              </div>
            </div>
            <span style={{ fontFamily: monoFont, fontSize: 9.5, fontWeight: 700, color: PD.ink, minWidth: 38, textAlign: "right" }}>
              ₹2,400
            </span>
          </div>

          {/* MILESTONE RAIL — the compositional surprise. 5 dots over a connecting line. */}
          <div style={{ position: "relative", marginTop: 9, paddingLeft: 2, paddingRight: 50 }}>
            <div style={{ position: "absolute", left: 4, right: 50, top: 4, height: 1, background: PD.borderSoft }} />
            <div style={{ position: "absolute", left: 4, top: 4, height: 1, width: "calc((100% - 50px) * 0.65)", background: PD.blue }} />
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              {[
                { state: "done" },
                { state: "done" },
                { state: "done" },
                { state: "active" },
                { state: "next" },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {m.state === "done" && (
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: PD.blue, boxShadow: "0 0 0 2px #fff" }} />
                  )}
                  {m.state === "active" && (
                    <div style={{
                      width: 9, height: 9, borderRadius: "50%",
                      background: "#fff", border: `1.5px solid ${PD.blue}`,
                      boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${PD.blueSoft}`,
                      display: "grid", placeItems: "center",
                    }}>
                      <div className="sf-product-pulse" style={{ width: 3, height: 3, borderRadius: "50%", background: PD.blue }} />
                    </div>
                  )}
                  {m.state === "next" && (
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", border: `1.5px solid #d8d4ca`, boxShadow: "0 0 0 2px #fff" }} />
                  )}
                </div>
              ))}
            </div>
            {/* live activity ticker, anchored to the right of the rail */}
            <span style={{
              position: "absolute", right: 0, top: -1,
              display: "inline-flex", alignItems: "center", gap: 4,
              fontFamily: monoFont, fontSize: 7.5, color: PD.green,
              letterSpacing: 0.4, fontWeight: 600,
            }}>
              <span className="sf-product-pulse" style={{ width: 4, height: 4, borderRadius: "50%", background: PD.green }} />
              KIRA · 2H
            </span>
          </div>
        </div>

        {/* Condensed rows — different rhythm: dot + avatar + name + percent + amount */}
        {[
          { client: "Studio Noor", prog: 82, amt: "₹62k", color: "#dbeadc", tc: PD.green, dot: PD.green, sub: "ON TRACK" },
          { client: "Toby Reeves", prog: 45, amt: "$640", color: "#fbe4e1", tc: PD.rose, dot: PD.rose, sub: "OVERDUE 4D" },
        ].map((p, i, arr) => (
          <div key={p.client} style={{
            padding: "7px 12px", display: "flex", alignItems: "center", gap: 7,
            borderBottom: i === arr.length - 1 ? "none" : `1px solid ${PD.borderSoft}`,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: p.dot, flexShrink: 0 }} />
            <Avatar name={p.client} size={16} color={p.color} textColor={p.tc} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9.5, fontWeight: 600, color: PD.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {p.client}
              </div>
              <div style={{ fontSize: 7.5, color: p.dot, fontFamily: monoFont, letterSpacing: 0.4, fontWeight: 600 }}>
                {p.sub}
              </div>
            </div>
            <span style={{ fontFamily: monoFont, fontSize: 8, color: PD.muted2 }}>{p.prog}%</span>
            <span style={{ fontFamily: monoFont, fontSize: 9, fontWeight: 600, color: PD.ink, minWidth: 36, textAlign: "right" }}>
              {p.amt}
            </span>
          </div>
        ))}
      </FCard>
    </div>
  );
}

function BgInvoices() {
  const rows = [
    { id: "#042", label: "Design milestone", amt: "$2,400", tone: "amber" as const, status: "Pending" },
    { id: "#039", label: "Retainer · Mar", amt: "$600", tone: "rose" as const, status: "Overdue" },
    { id: "#041", label: "Discovery", amt: "$1,200", tone: "green" as const, status: "Paid" },
  ];
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: PD.pageBg, padding: 12,
        maskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
      }}
    >
      <FCard pad={0} interactive={false} style={{ height: "100%", overflow: "hidden", opacity: 0.95 }}>
        <div style={{
          padding: "7px 11px", borderBottom: `1px solid ${PD.borderSoft}`,
          display: "grid", gridTemplateColumns: "0.5fr 1.4fr 0.7fr 0.7fr", gap: 8,
          fontSize: 7.5, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.9, textTransform: "uppercase",
        }}>
          <span>Invoice</span><span>Description</span><span>Amount</span><span style={{ textAlign: "right" }}>Status</span>
        </div>
        {rows.map((r, i) => (
          <div key={r.id} style={{
            padding: "8px 11px", display: "grid", gridTemplateColumns: "0.5fr 1.4fr 0.7fr 0.7fr", gap: 8, alignItems: "center",
            borderBottom: i === rows.length - 1 ? "none" : `1px solid ${PD.borderSoft}`,
          }}>
            <span style={{ fontFamily: monoFont, fontSize: 9, color: PD.ink2, fontWeight: 500 }}>{r.id}</span>
            <span style={{ fontSize: 9.5, color: PD.ink, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</span>
            <span style={{ fontFamily: monoFont, fontSize: 9.5, color: PD.ink, fontWeight: 600 }}>{r.amt}</span>
            <span style={{ display: "flex", justifyContent: "flex-end" }}><Pill tone={r.tone}>{r.status}</Pill></span>
          </div>
        ))}
      </FCard>
    </div>
  );
}

/* Payments — the WOW card. Single dark Pay-hero, intentional crop, live toast. */
function BgPayments() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
      }}
    >
      {/* single dark Pay-hero card, perfectly cropped within the upper half */}
      <div style={{ position: "absolute", top: 24, left: 22, right: 22 }}>
        <div
          style={{
            background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
            borderRadius: 12, padding: "14px 16px", color: "#fff",
            position: "relative", overflow: "hidden",
            // extended downward shadow softens the transition into the text block below
            boxShadow:
              "0 28px 56px -16px rgba(20,18,14,0.22), 0 8px 20px rgba(20,18,14,0.08)",
          }}
        >
          {/* corner glow */}
          <div
            style={{
              position: "absolute", top: -45, right: -45,
              width: 140, height: 140, borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(41,82,255,0.28), transparent 70%)",
            }}
          />

          {/* invoice meta row */}
          <div
            style={{
              position: "relative", display: "flex",
              justifyContent: "space-between", alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: monoFont, fontSize: 9, letterSpacing: 1.2,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              INVOICE #042
            </span>
            <span
              style={{
                fontSize: 8, padding: "2px 6px", borderRadius: 999,
                background: "rgba(184,118,28,0.18)", color: PD.amberLight,
                fontFamily: monoFont, fontWeight: 600, letterSpacing: 0.4,
              }}
            >
              13 DAYS
            </span>
          </div>

          {/* amount */}
          <div
            style={{
              position: "relative", marginTop: 8,
              display: "flex", alignItems: "baseline", gap: 6,
            }}
          >
            <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.8, lineHeight: 1 }}>
              $2,400
            </span>
            <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>
              · by 20 May
            </span>
          </div>
          <div
            style={{
              position: "relative", fontSize: 9.5,
              color: "rgba(255,255,255,0.55)", marginTop: 3,
            }}
          >
            Design milestone — homepage v3
          </div>

          {/* CTA */}
          <div
            style={{
              position: "relative", marginTop: 12,
              padding: "10px 12px", borderRadius: 7,
              background: PD.blue, color: "#fff",
              fontSize: 11.5, fontWeight: 600,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              boxShadow: "0 4px 12px rgba(41,82,255,0.28)",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />
              Pay $2,400 with Stripe
            </span>
            <span
              style={{
                fontFamily: monoFont, fontSize: 10,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              ↗
            </span>
          </div>

          {/* security strip */}
          <div
            style={{
              position: "relative", marginTop: 7,
              fontFamily: monoFont, fontSize: 8,
              color: "#3fdc8f", letterSpacing: 0.5,
            }}
          >
            ● PCI-DSS · ~12 MIN SETTLE
          </div>
        </div>

        {/* thin gradient hairline — softer transition, no competing data */}
        <div
          style={{
            marginTop: 22,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(20,18,14,0.10) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* WOW: live settlement toast — the "stop scrolling" detail */}
      <div
        style={{
          position: "absolute", top: 32, right: 36,
          animation: "settlement-toast 7s ease-in-out infinite",
          willChange: "opacity, transform",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: `1px solid color-mix(in oklab, ${PD.green} 22%, ${PD.border})`,
            padding: "6px 10px 6px 8px",
            borderRadius: 999,
            boxShadow:
              "0 12px 28px -8px rgba(20,18,14,0.18), 0 2px 6px rgba(20,18,14,0.06)",
            display: "inline-flex", alignItems: "center", gap: 7,
          }}
        >
          <span
            className="sf-product-pulse"
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: PD.green, flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 10, fontWeight: 600, color: PD.ink, whiteSpace: "nowrap" }}>
            Aman paid +₹2,400
          </span>
          <span
            style={{
              fontSize: 8, color: PD.muted2,
              fontFamily: monoFont, letterSpacing: 0.4,
            }}
          >
            JUST NOW
          </span>
        </div>
      </div>
    </div>
  );
}

/* WhatsApp follow-ups — the autopilot card */
function BgWhatsApp() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, black 62%, transparent 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 95%)",
      }}
    >
      <div
        className="absolute inset-0 grid items-start"
        style={{ gridTemplateColumns: "1.05fr 1fr", gap: 18, padding: "22px 26px" }}
      >
        {/* LEFT — WhatsApp message preview */}
        <div
          style={{
            background: "#fff",
            border: `1px solid ${PD.border}`,
            borderRadius: 12,
            padding: "12px 14px",
            boxShadow: "0 1px 2px rgba(20,18,14,0.025), 0 10px 24px -8px rgba(20,18,14,0.08)",
          }}
        >
          {/* contact header */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: 9,
              paddingBottom: 9, borderBottom: `1px solid ${PD.borderSoft}`,
            }}
          >
            <div
              style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                display: "grid", placeItems: "center",
                color: "#fff", fontWeight: 700, fontSize: 11,
                boxShadow: "0 0 0 0.5px rgba(0,0,0,0.06)",
              }}
            >K</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, color: PD.ink }}>Studio Kira</div>
              <div
                style={{
                  fontSize: 8.5, fontFamily: monoFont, letterSpacing: 0.5,
                  color: "oklch(58% 0.15 145)",
                  display: "inline-flex", alignItems: "center", gap: 4,
                }}
              >
                <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "oklch(64% 0.15 145)" }} />
                VIA WHATSAPP · BUSINESS
              </div>
            </div>
            <span style={{ fontSize: 8.5, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.4 }}>2H</span>
          </div>

          {/* outgoing message bubble */}
          <div style={{ marginTop: 10 }}>
            <div
              style={{
                maxWidth: "95%",
                background: "color-mix(in oklab, oklch(64% 0.15 145) 11%, var(--sf-bg))",
                border: "1px solid color-mix(in oklab, oklch(64% 0.15 145) 24%, transparent)",
                borderRadius: "12px 12px 12px 3px",
                padding: "9px 11px",
                fontSize: 10.5,
                color: PD.ink,
                lineHeight: 1.5,
              }}
            >
              <div style={{ fontWeight: 600 }}>Hi Aman 👋</div>
              <div style={{ marginTop: 5 }}>
                Friendly reminder — Invoice <strong>#042</strong> (<strong>₹2,400</strong>) is due in <strong>3 days</strong>. You can pay in one tap below.
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: "7px 9px",
                  background: "#fff",
                  border: `1px solid ${PD.border}`,
                  borderRadius: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 7,
                  fontSize: 10,
                }}
              >
                <span style={{ fontFamily: monoFont, color: PD.muted2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1, minWidth: 0 }}>
                  app.soloflow.in/client/aman
                </span>
                <span style={{ fontWeight: 600, color: PD.blue, whiteSpace: "nowrap" }}>Pay ₹2,400 ↗</span>
              </div>
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 8.5,
                color: PD.muted2,
                fontFamily: monoFont,
                letterSpacing: 0.4,
                paddingLeft: 4,
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="9" height="9" style={{ color: "oklch(58% 0.15 145)" }}>
                <path d="m5 12 5 5L20 7" /><path d="m11 12 5 5" />
              </svg>
              AUTO-SENT · DELIVERED · 2H AGO
            </div>
          </div>
        </div>

        {/* RIGHT — cadence rules + results */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <FCard pad={11} interactive={false}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: PD.ink }}>Auto-reminder cadence</div>
              <span
                style={{
                  fontSize: 8.5, fontFamily: monoFont,
                  color: "oklch(58% 0.15 145)", letterSpacing: 0.5, fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: 4,
                }}
              >
                <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "oklch(64% 0.15 145)" }} />
                ACTIVE
              </span>
            </div>
            <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 3 }}>
              {[
                { label: "2 days before due",      tone: "soft" },
                { label: "On the due date",        tone: "soft" },
                { label: "3 days after · firmly",  tone: "amber" },
              ].map(r => (
                <div
                  key={r.label}
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    padding: "5px 7px", borderRadius: 5,
                    background: PD.cardMuted,
                    fontSize: 10,
                  }}
                >
                  <span
                    style={{
                      width: 14, height: 14, borderRadius: "50%",
                      background: PD.greenBg, color: PD.green,
                      display: "grid", placeItems: "center",
                      fontSize: 8, fontWeight: 700, flexShrink: 0,
                    }}
                  >✓</span>
                  <span style={{ color: PD.ink2, flex: 1 }}>{r.label}</span>
                  {/* toggle */}
                  <span style={{ width: 22, height: 11, background: "oklch(64% 0.15 145)", borderRadius: 999, position: "relative", flexShrink: 0 }}>
                    <span style={{ position: "absolute", right: 1, top: 1, width: 9, height: 9, borderRadius: "50%", background: "#fff" }} />
                  </span>
                </div>
              ))}
            </div>
          </FCard>

          <FCard pad={11} interactive={false} muted>
            <div style={{ fontSize: 8.5, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.5 }}>
              RESULTS · LAST 90 DAYS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
              <div>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: -0.3, color: PD.ink, lineHeight: 1 }}>84%</div>
                <div style={{ fontSize: 8.5, color: PD.green, fontFamily: monoFont, letterSpacing: 0.4, marginTop: 4 }}>PAID ON TIME</div>
              </div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: -0.3, color: PD.ink, lineHeight: 1 }}>1.4</div>
                <div style={{ fontSize: 8.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.4, marginTop: 4 }}>AVG REMINDERS / CLIENT</div>
              </div>
            </div>
          </FCard>
        </div>
      </div>
    </div>
  );
}

/* ─── Depth hierarchy: recessed / floating / baseline / dominant ─── */
type CSSStyle = React.CSSProperties;

/* Unified shadow language: same blur radii across cards, only intensity + tint differ. */
const depthStyles: Record<"recessed" | "floating" | "baseline" | "dominant", CSSStyle> = {
  recessed: {
    background: "linear-gradient(180deg, #fbfaf6 0%, #f6f4ed 100%)",
    boxShadow:
      "0 0 0 1px rgba(20,18,14,0.04), 0 2px 6px rgba(20,18,14,0.025), 0 16px 32px -10px rgba(20,18,14,0.05), inset 0 1px 0 rgba(255,255,255,0.5)",
  },
  baseline: {
    background: "#ffffff",
    boxShadow:
      "0 0 0 1px rgba(20,18,14,0.05), 0 2px 6px rgba(20,18,14,0.04), 0 16px 32px -10px rgba(20,18,14,0.08)",
  },
  floating: {
    background: "#ffffff",
    boxShadow:
      "0 0 0 1px rgba(20,18,14,0.06), 0 4px 10px rgba(20,18,14,0.06), 0 16px 32px -10px rgba(20,18,14,0.12)",
    transform: "translateY(-6px)",
    zIndex: 2,
  },
  dominant: {
    background: "linear-gradient(135deg, #ffffff 0%, #fafaff 55%, #f3f5ff 100%)",
    boxShadow:
      "0 0 0 1px rgba(41,82,255,0.10), 0 2px 6px rgba(20,18,14,0.04), 0 16px 32px -10px rgba(41,82,255,0.10)",
  },
};

const features: {
  name: string;
  description: string;
  background: ReactNode;
  className: string;
  href: string;
  cta: string;
  style: CSSStyle;
}[] = [
  {
    name: "Client portal",
    description: "Every client gets a permanent, branded URL — progress, files, invoices, feedback, all in one place.",
    background: <BgPortal />,
    className: "col-span-3 lg:col-span-2",
    href: "#features",
    cta: "47 active portals today",
    style: depthStyles.recessed,
  },
  {
    name: "Project management",
    description: "Track every active portal at a glance. Real-time progress, status, and last activity.",
    background: <BgProjects />,
    className: "col-span-3 lg:col-span-1",
    href: "#features",
    cta: "Realtime · 4 timezones",
    style: depthStyles.floating,
  },
  {
    name: "Invoice management",
    description: "GST-ready invoices in seconds. Sent, viewed, paid, reconciled — tracked end to end.",
    background: <BgInvoices />,
    className: "col-span-3 lg:col-span-1",
    href: "#features",
    cta: "GST · USD · automated",
    style: depthStyles.baseline,
  },
  {
    name: "Razorpay & Stripe built in",
    description: "Local clients via UPI & Razorpay, international via Stripe — all in the same dashboard.",
    background: <BgPayments />,
    className: "col-span-3 lg:col-span-2",
    href: "#features",
    cta: "₹64,400 settled this week",
    style: depthStyles.dominant,
  },
  {
    name: "WhatsApp reminders, on autopilot",
    description: "Polite, branded follow-ups go out before, on, and after due dates. You don't chase. 84% of clients pay before the third reminder lands.",
    background: <BgWhatsApp />,
    className: "col-span-3",
    href: "#features",
    cta: "84% paid on time · zero manual nudge",
    style: depthStyles.baseline,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative" style={{ padding: "var(--sf-section-y) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--sf-pad-x)" }}>
        <motion.div className="text-center max-w-[720px] mx-auto mb-14" variants={stagger(0.08, 0.05)} {...inView}>
          <motion.span variants={fadeUpSm} className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.08em] mb-3" style={{ color: "var(--sf-ink-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sf-brand)" }} />
            Core features
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-3" style={{ fontSize: "clamp(38px, 4.7vw, 66px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Built for{" "}
            <em style={{ fontWeight: 500, color: "var(--sf-accent)", fontStyle: "normal" }}>modern</em>{" "}
            client work.
          </motion.h2>
          <motion.p variants={fadeUpSm} className="text-lg mx-auto" style={{ color: "var(--sf-ink-2)", maxWidth: 560 }}>
            Five primitives. Endlessly composable. Replaces the messy stack you've cobbled together.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger(0.12, 0.1)} {...inView}>
          <BentoGrid>
            {features.map(f => (
              <motion.div key={f.name} variants={fadeUp} className={f.className}>
                <BentoCard {...f} className="h-full" />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
