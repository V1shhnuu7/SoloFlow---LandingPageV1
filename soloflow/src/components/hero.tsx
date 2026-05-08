"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, scaleIn, stagger } from "@/lib/motion";
import { Avatar, Eyebrow, FCard, MiniClientSidebar, MiniFreelancerSidebar, PayHeroCard, PD, Pill, monoFont } from "./product-ui";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const SCENE_DURATION = 5200;

type Perspective = "freelancer" | "client";

const tabs: {
  label: string;
  perspective: Perspective;
  url: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Workspace",
    perspective: "freelancer",
    url: "app.soloflow.in/workspace",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "New portal",
    perspective: "freelancer",
    url: "app.soloflow.in/workspace/portals/new",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70">
        <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    label: "Client portal",
    perspective: "client",
    url: "app.soloflow.in/client/aman-verma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70">
        <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Pay invoice",
    perspective: "client",
    url: "app.soloflow.in/client/aman-verma/invoices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70">
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" />
      </svg>
    ),
  },
];

/* ─── F1. Freelancer Workspace — Dashboard with active portals ─── */
function SceneWorkspace() {
  const projects = [
    { client: "Aman Verma",   proj: "Brand redesign", amt: "₹2,400",  prog: 65, tone: "green" as const, status: "On track",       last: "Client viewed 12m ago", lastTone: PD.green, color: PD.blueAvatarBg, tc: PD.blueAvatarFg },
    { client: "Studio Noor",  proj: "Packaging",      amt: "₹62,000", prog: 82, tone: "green" as const, status: "Paid 2h ago",   last: "Razorpay · UPI · settled", lastTone: PD.green, color: "#dbeadc", tc: PD.green },
    { client: "Toby Reeves",  proj: "Landing page",   amt: "$640",    prog: 45, tone: "rose"  as const, status: "Overdue 4d",     last: "Auto WhatsApp reminder · sent 4d",   lastTone: PD.rose, color: "#fbe4e1", tc: PD.rose },
  ];
  return (
    <div className="sf-scene-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", height: "100%", background: PD.pageBg }}>
      <MiniFreelancerSidebar active="dashboard" scale={0.85} />
      <div style={{ padding: "20px 24px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* HEADER */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <Eyebrow>WORKSPACE · MAY 2026</Eyebrow>
            <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Good morning, Kira</h1>
            <div style={{ marginTop: 4, fontSize: 11.5, color: PD.muted2, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                <span className="sf-product-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: PD.green }} />
                ₹2,400 settled · 12 min ago
              </span>
              <span>·</span>
              <span>3 clients viewed today</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ padding: "7px 12px", border: `1px solid ${PD.border}`, borderRadius: 7, background: "#fff", fontSize: 11.5, fontWeight: 500, color: PD.ink2 }}>↗ Send invoice</button>
            <button style={{ padding: "7px 12px", borderRadius: 7, background: PD.ink, color: "#fff", fontSize: 11.5, fontWeight: 600, border: "none" }}>+ New portal</button>
          </div>
        </div>

        {/* STAT TILES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {[
            { label: "Earnings · 12 wks", value: "₹1,84,200", sub: "↑ 28% vs prev",          subColor: PD.green },
            { label: "Outstanding",        value: "₹38,400",   sub: "3 invoices · 1 overdue", subColor: PD.amber },
            { label: "Active portals",     value: "4",         sub: "2 viewed today",          subColor: PD.muted2 },
            { label: "Avg. settle",        value: "12 min",    sub: "Razorpay UPI",            subColor: PD.green },
          ].map(t => (
            <FCard key={t.label} muted pad={12} interactive={false}>
              <Eyebrow style={{ fontSize: 9.5 }}>{t.label}</Eyebrow>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3, marginTop: 6, color: PD.ink }}>{t.value}</div>
              <div style={{ fontSize: 9.5, color: t.subColor, marginTop: 6, fontFamily: monoFont, letterSpacing: 0.3 }}>{t.sub}</div>
            </FCard>
          ))}
        </div>

        {/* ACTIVE PORTALS TABLE */}
        <FCard pad={0} interactive={false} style={{ flex: 1, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: `1px solid ${PD.borderSoft}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: PD.ink }}>Active portals</div>
            <span style={{ fontSize: 10.5, color: PD.muted2 }}>4 live · 1 draft · 2 awaiting payment</span>
          </div>
          {projects.map((p, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 0.8fr",
              gap: 12, alignItems: "center", padding: "9px 14px", fontSize: 11.5,
              borderBottom: i === projects.length - 1 ? "none" : `1px solid ${PD.borderSoft}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
                <Avatar name={p.client} size={22} color={p.color} textColor={p.tc} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: PD.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.client}</div>
                  <div style={{ fontSize: 9.5, color: p.lastTone, fontFamily: monoFont, letterSpacing: 0.3, marginTop: 1 }}>{p.last}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ flex: 1, height: 3, background: PD.trackBg, borderRadius: 999, overflow: "hidden" }}>
                  <div className="sf-product-progress" style={{ width: `${p.prog}%`, height: "100%" }} />
                </div>
                <span style={{ fontFamily: monoFont, fontSize: 9.5, color: PD.muted2, minWidth: 22 }}>{p.prog}%</span>
              </div>
              <Pill tone={p.tone}>{p.status}</Pill>
              <span style={{ fontFamily: monoFont, fontSize: 11, color: PD.ink, fontWeight: 700, textAlign: "right" }}>{p.amt}</span>
            </div>
          ))}
        </FCard>
      </div>
    </div>
  );
}

/* ─── F2. Freelancer Create Portal — the moment of setup ─── */
function SceneCreatePortal() {
  return (
    <div className="sf-scene-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", height: "100%", background: PD.pageBg }}>
      <MiniFreelancerSidebar active="portals" scale={0.85} />
      <div style={{ padding: "20px 24px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* HEADER */}
        <div>
          <Eyebrow>PORTALS · NEW</Eyebrow>
          <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Create a client portal</h1>
          <p style={{ margin: "4px 0 0", fontSize: 11.5, color: PD.muted2, maxWidth: 480 }}>
            One shareable link. Your client only sees what you publish — files, invoices, milestones.
          </p>
        </div>

        {/* FORM + PREVIEW SPLIT */}
        <div style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 12 }}>
          <FCard pad={16} interactive={false}>
            {/* project name */}
            <div>
              <Eyebrow style={{ fontSize: 9.5, marginBottom: 4 }}>PROJECT NAME</Eyebrow>
              <div style={{ borderRadius: 7, border: `1px solid ${PD.inputBorder}`, padding: "8px 10px", fontSize: 12, color: PD.ink, background: "#fff" }}>
                Brand redesign
              </div>
            </div>

            {/* client name + email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
              <div>
                <Eyebrow style={{ fontSize: 9.5, marginBottom: 4 }}>CLIENT</Eyebrow>
                <div style={{ borderRadius: 7, border: `1px solid ${PD.inputBorder}`, padding: "8px 10px", fontSize: 12, color: PD.ink, background: "#fff" }}>
                  Aman Verma
                </div>
              </div>
              <div>
                <Eyebrow style={{ fontSize: 9.5, marginBottom: 4 }}>EMAIL</Eyebrow>
                <div style={{ borderRadius: 7, border: `1px solid ${PD.inputBorder}`, padding: "8px 10px", fontSize: 12, color: PD.muted2, background: "#fff" }}>
                  aman@versa.studio
                </div>
              </div>
            </div>

            {/* pricing region toggle */}
            <div style={{ marginTop: 10 }}>
              <Eyebrow style={{ fontSize: 9.5, marginBottom: 4 }}>PRICING REGION</Eyebrow>
              <div style={{ display: "inline-flex", padding: 3, background: PD.segBg, borderRadius: 7, border: `1px solid ${PD.border}` }}>
                {[
                  { v: "local", label: "🇮🇳 Local · INR", active: true },
                  { v: "intl",  label: "🌐 International · USD", active: false },
                ].map(o => (
                  <span key={o.v} style={{
                    padding: "5px 10px", borderRadius: 5,
                    background: o.active ? "#fff" : "transparent",
                    color: o.active ? PD.ink : PD.muted,
                    fontSize: 10.5, fontWeight: o.active ? 600 : 500,
                    boxShadow: o.active ? "0 1px 2px rgba(0,0,0,.06)" : "none",
                  }}>{o.label}</span>
                ))}
              </div>
            </div>

            {/* payment method */}
            <div style={{ marginTop: 10 }}>
              <Eyebrow style={{ fontSize: 9.5, marginBottom: 4 }}>PAYMENT METHOD</Eyebrow>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
                {[
                  { name: "Razorpay", sub: "UPI · Cards · Netbanking", tag: "INDIA",  active: true },
                  { name: "Stripe",   sub: "Cards · ACH · Wire",       tag: "GLOBAL", active: false },
                ].map(o => (
                  <div key={o.name} style={{
                    padding: 9, borderRadius: 7,
                    border: o.active ? `1.5px solid ${PD.blue}` : `1px solid ${PD.inputBorder}`,
                    background: o.active ? PD.blueBg : "#fff",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: PD.ink }}>{o.name}</span>
                      <span style={{ fontSize: 8, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.5 }}>{o.tag}</span>
                    </div>
                    <div style={{ fontSize: 9, color: PD.muted2, marginTop: 2 }}>{o.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 7, marginTop: 14, paddingTop: 12, borderTop: `1px solid ${PD.borderSoft}`, alignItems: "center" }}>
              <button style={{ padding: "8px 14px", borderRadius: 7, background: PD.ink, color: "#fff", fontSize: 11.5, fontWeight: 600, border: "none" }}>
                Create portal
              </button>
              <button style={{ padding: "8px 14px", borderRadius: 7, background: "#fff", color: PD.ink2, fontSize: 11.5, fontWeight: 500, border: `1px solid ${PD.border}` }}>
                Save draft
              </button>
              <span style={{ marginLeft: "auto", fontFamily: monoFont, fontSize: 9, color: PD.muted2, letterSpacing: 0.5 }}>
                AUTO-SAVING…
              </span>
            </div>
          </FCard>

          {/* RIGHT PANE: live URL preview */}
          <FCard pad={14} interactive={false} style={{ background: "linear-gradient(180deg, #fff 0%, #f5f7ff 100%)", border: `1px solid ${PD.blueLight}` }}>
            <Eyebrow style={{ fontSize: 9, color: PD.blue }}>PERMANENT URL · WHAT YOUR CLIENT GETS</Eyebrow>
            <div style={{
              marginTop: 10, padding: "9px 11px",
              background: "#fff", border: `1px solid ${PD.blueLight}`,
              borderRadius: 7, display: "flex", alignItems: "center", gap: 7,
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" style={{ color: PD.muted2, flexShrink: 0 }}>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
              </svg>
              <span style={{ fontFamily: monoFont, fontSize: 10.5, color: PD.ink, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                app.soloflow.in/client/<strong style={{ color: PD.blue }}>aman-verma</strong>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, color: PD.green, fontFamily: monoFont, letterSpacing: 0.4 }}>
                <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />
                LIVE
              </span>
            </div>

            {/* what's included */}
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ fontSize: 10, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.4, marginBottom: 2 }}>YOUR CLIENT WILL SEE</div>
              {[
                "Project progress + milestones",
                "Files you publish (drag-drop ready)",
                "Invoices with one-click pay",
                "Direct comments thread",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10.5, color: PD.ink2 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: PD.greenBg, color: PD.green, display: "grid", placeItems: "center", fontSize: 8, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12, padding: "7px 9px", background: "#fff", border: `1px solid ${PD.borderSoft}`, borderRadius: 6, fontSize: 9.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.3 }}>
              ● You stay in control — only what you publish is visible.
            </div>
          </FCard>
        </div>
      </div>
    </div>
  );
}

/* ─── C1. Client Portal — Overview screen ─── */
function ScenePortal() {
  // 8-point sparkline showing project momentum (subtle data viz)
  const sparkData = [22, 28, 26, 32, 38, 36, 48, 65];
  const sparkMax = 70;
  const sparkPoints = sparkData
    .map((v, i) => `${(i / (sparkData.length - 1)) * 100},${100 - (v / sparkMax) * 100}`)
    .join(" ");
  // matching area path for soft fill under the line
  const sparkArea = `0,100 ${sparkPoints} 100,100`;

  return (
    <div className="sf-scene-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", height: "100%", background: PD.pageBg }}>
      <MiniClientSidebar active="overview" scale={0.85} />
      <div style={{ padding: "20px 24px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <Eyebrow>BRAND REDESIGN</Eyebrow>
            <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Welcome back, Aman</h1>
            <div style={{ marginTop: 4, fontSize: 11.5, color: PD.muted2 }}>Last update from Kira · 2h ago</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              {/* Collaborator avatar stack */}
              <div style={{ display: "inline-flex" }}>
                <Avatar name="Kira Sen" size={20} color={PD.warmAvatarBg} textColor={PD.warmAvatarFg} />
                <div style={{ marginLeft: -7 }}>
                  <Avatar name="Aman Verma" size={20} color={PD.blueAvatarBg} textColor={PD.blueAvatarFg} />
                </div>
                <div style={{ marginLeft: -7 }}>
                  <Avatar name="Rohan Das" size={20} color="#e7eaf3" textColor="#5a5648" />
                </div>
              </div>
              <Pill tone="green">On track</Pill>
            </div>
            {/* Live activity indicator */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 9.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 1 }}>
              <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />
              KIRA EDITING · 3 VIEWING
            </div>
          </div>
        </div>

        {/* STAT TILES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {/* Progress tile WITH sparkline — subtle data viz */}
          <FCard muted pad={12} interactive={false}>
            <Eyebrow style={{ fontSize: 9.5 }}>Progress</Eyebrow>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 5, gap: 8 }}>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3, color: PD.ink }}>65%</div>
              <svg width="46" height="20" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ flexShrink: 0 }}>
                {/* soft fill under the line for subtle depth */}
                <polygon points={sparkArea} fill={PD.blue} opacity={0.10} />
                <polyline
                  points={sparkPoints}
                  fill="none"
                  stroke={PD.blue}
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  opacity={0.75}
                />
                {/* tail dot */}
                <circle
                  cx={(7 / 7) * 100}
                  cy={100 - (sparkData[7] / sparkMax) * 100}
                  r="6"
                  fill={PD.blue}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <div style={{ height: 3, background: PD.trackBg, borderRadius: 999, overflow: "hidden", marginTop: 6 }}>
              <div className="sf-product-progress" style={{ width: "65%", height: "100%", borderRadius: 999 }} />
            </div>
          </FCard>
          {[
            { label: "Amount due", value: "$2,400", sub: "DUE IN 13 DAYS", subColor: PD.amber },
            { label: "Files shared", value: "4", sub: "1 NEEDS REVIEW", subColor: PD.blue },
            { label: "Next milestone", value: "20 May", sub: "HOMEPAGE V3", subColor: PD.muted2 },
          ].map(t => (
            <FCard key={t.label} muted pad={12} interactive={false}>
              <Eyebrow style={{ fontSize: 9.5 }}>{t.label}</Eyebrow>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3, marginTop: 5, color: PD.ink }}>{t.value}</div>
              <div style={{ fontSize: 9, color: t.subColor, marginTop: 6, fontFamily: monoFont, letterSpacing: 0.4 }}>{t.sub}</div>
            </FCard>
          ))}
        </div>

        {/* PROGRESS + PAYMENT HERO */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10, flex: 1, minHeight: 0 }}>
          <FCard pad={16} interactive={false}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: PD.ink }}>Project progress</div>
              <div style={{ fontFamily: monoFont, fontSize: 10.5, color: PD.muted2 }}>3 of 4 done</div>
            </div>
            {/* Segmented timeline bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5, marginTop: 18 }}>
              {[
                { done: true, active: false },
                { done: true, active: false },
                { done: true, active: false },
                { done: false, active: true },
              ].map((s, i) => (
                <div key={i} style={{ height: 5, borderRadius: 3, position: "relative", background: s.done ? PD.blue : (s.active ? PD.blueLight : PD.trackBg) }}>
                  {s.active && <div className="sf-product-shimmer" style={{ position: "absolute", inset: 0, borderRadius: 3 }} />}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 5, marginTop: 9 }}>
              {[
                ["DISCOVERY", "✓ 12 Feb", true],
                ["WIREFRAMES", "✓ 08 Mar", true],
                ["DESIGN", "✓ 02 Apr", true],
                ["HANDOFF", "Est 03 Jun", false],
              ].map(([l, d, done], i) => (
                <div key={i}>
                  <div style={{ fontSize: 9.5, color: done ? PD.green : PD.ink2, fontFamily: monoFont, fontWeight: 600, letterSpacing: 0.4 }}>{l}</div>
                  <div style={{ fontSize: 9, color: PD.muted2, fontFamily: monoFont, marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </div>
            {/* Active milestone callout */}
            <div style={{
              marginTop: 16, padding: "10px 12px",
              background: PD.blueBg, border: `1px solid ${PD.blueLight}`, borderRadius: 8,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff", border: `2px solid ${PD.blue}`, display: "grid", placeItems: "center", flexShrink: 0 }}>
                <div className="sf-product-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: PD.blue }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11.5, color: PD.ink }}><b>Homepage v3 ready for your review</b></div>
                <div style={{ fontSize: 10, color: PD.ink3, marginTop: 2, fontFamily: monoFont, letterSpacing: 0.4 }}>Due 20 May · est. 10 min review</div>
              </div>
              <div style={{ padding: "5px 10px", borderRadius: 6, background: PD.ink, color: "#fff", fontSize: 10.5, fontWeight: 500 }}>Open file ↗</div>
            </div>
            {/* Comment preview — subtle peek of in-thread feedback */}
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 7, paddingLeft: 4, minWidth: 0 }}>
              <Avatar name="Kira Sen" size={15} color={PD.warmAvatarBg} textColor={PD.warmAvatarFg} />
              <span style={{
                fontSize: 10, color: PD.muted2, lineHeight: 1.3, minWidth: 0, flex: 1,
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                <b style={{ color: PD.ink2, fontWeight: 600 }}>Kira</b> · &ldquo;Try the warmer accent on the hero — softer than v2.&rdquo;
              </span>
              <span style={{ fontFamily: monoFont, fontSize: 9, color: PD.muted2, flexShrink: 0 }}>5m</span>
            </div>
          </FCard>
          <PayHeroCard scale={0.78} />
        </div>
      </div>
    </div>
  );
}

/* ─── 2. Updates — Mini timeline + featured expanded milestone card ─── */
function SceneUpdates() {
  const milestones: { state: "done" | "active" | "next"; label: string; date: string }[] = [
    { state: "done",   label: "DISCOVERY",   date: "12 Feb" },
    { state: "done",   label: "WIREFRAMES",  date: "08 Mar" },
    { state: "done",   label: "LOGO",        date: "02 Apr" },
    { state: "active", label: "HOMEPAGE V3", date: "Due 20 May" },
    { state: "next",   label: "ABOUT",       date: "27 May" },
    { state: "next",   label: "HANDOFF",     date: "03 Jun" },
  ];
  // active is index 3 of 6 → progress fill ends at 50% (between dot 3 and 4)
  const activeIndex = milestones.findIndex(m => m.state === "active");
  const fillPct = activeIndex / (milestones.length - 1);

  return (
    <div className="sf-scene-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", height: "100%", background: PD.pageBg }}>
      <MiniClientSidebar active="updates" scale={0.85} />
      <div style={{ padding: "20px 24px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <Eyebrow>BRAND REDESIGN · UPDATES</Eyebrow>
            <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Milestones</h1>
          </div>
          <div style={{ fontSize: 10.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.4 }}>
            3 DONE · 1 IN PROGRESS · 2 UPCOMING
          </div>
        </div>

        {/* MINI HORIZONTAL TIMELINE — overview/collapsed tier */}
        <div style={{
          background: "#fff", border: `1px solid ${PD.border}`,
          borderRadius: 10, padding: "14px 22px 12px",
          boxShadow: "0 1px 2px rgba(20,18,14,0.025)",
        }}>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
            {/* base rail */}
            <div style={{ position: "absolute", left: 0, right: 0, top: 8, height: 2, background: PD.trackBg, borderRadius: 999 }} />
            {/* progress fill up to active */}
            <div style={{
              position: "absolute", left: 0, top: 8, height: 2, borderRadius: 999,
              width: `${fillPct * 100}%`,
              background: `linear-gradient(90deg, ${PD.green} 0%, ${PD.green} 75%, ${PD.blue} 100%)`,
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                {m.state === "done" && (
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%", background: PD.green,
                    color: "#fff", display: "grid", placeItems: "center",
                    fontSize: 10, fontWeight: 700, boxShadow: "0 0 0 3px #fff",
                  }}>✓</div>
                )}
                {m.state === "active" && (
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%", background: "#fff",
                    border: `2px solid ${PD.blue}`,
                    boxShadow: `0 0 0 3px #fff, 0 0 0 5px ${PD.blueSoft}`,
                    display: "grid", placeItems: "center",
                  }}>
                    <div className="sf-product-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: PD.blue }} />
                  </div>
                )}
                {m.state === "next" && (
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%", background: "#fff",
                    border: "1.5px solid #d8d4ca", marginTop: 2,
                    boxShadow: "0 0 0 3px #fff",
                  }} />
                )}
                <div style={{
                  fontSize: 8.5, fontFamily: monoFont,
                  color: m.state === "active" ? PD.blue : (m.state === "done" ? PD.ink2 : PD.muted2),
                  fontWeight: m.state === "active" ? 700 : 500,
                  letterSpacing: 0.5, marginTop: 4, whiteSpace: "nowrap",
                }}>
                  {m.label}
                </div>
                <div style={{
                  fontSize: 8, fontFamily: monoFont,
                  color: m.state === "active" ? PD.blue : PD.muted2,
                  letterSpacing: 0.3, opacity: 0.85,
                }}>
                  {m.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED ACTIVE CARD — expanded, the focal point */}
        <div style={{
          flex: 1, minHeight: 0,
          borderRadius: 12, padding: 16,
          background: "linear-gradient(180deg, #fff 0%, #f5f7ff 100%)",
          border: `1.5px solid ${PD.blueLight}`,
          boxShadow: "0 1px 2px rgba(20,18,14,0.025), 0 14px 36px -14px rgba(41,82,255,0.22)",
          position: "relative", overflow: "hidden",
        }}>
          {/* corner accent glow */}
          <div style={{
            position: "absolute", top: -50, right: -40, width: 180, height: 180,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${PD.blueLight} 0%, transparent 65%)`,
            opacity: 0.55, pointerEvents: "none",
          }} />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
            {/* TOP ROW: status pills + collaborator avatars */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Pill tone="blue">In progress</Pill>
              <span style={{ fontSize: 9.5, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.6 }}>
                DAY 3 OF 7 · DUE 20 MAY
              </span>
              <div style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 9, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.6 }}>OWNERS</span>
                <div style={{ display: "inline-flex" }}>
                  <Avatar name="Kira Sen" size={22} color={PD.warmAvatarBg} textColor={PD.warmAvatarFg} />
                  <div style={{ marginLeft: -7 }}>
                    <Avatar name="Aman Verma" size={22} color={PD.blueAvatarBg} textColor={PD.blueAvatarFg} />
                  </div>
                </div>
              </div>
            </div>

            {/* TITLE + DESCRIPTION */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3, color: PD.ink }}>
                Homepage v3 · review
              </h3>
              <p style={{ fontSize: 11.5, color: PD.ink2, lineHeight: 1.5, marginTop: 4, maxWidth: 460 }}>
                Three frames covering hero, value props and pricing. Leave comments directly on the file — Kira will iterate within 24h.
              </p>
            </div>

            {/* FILE PREVIEW + ACTIVITY */}
            <div style={{
              display: "flex", gap: 10, alignItems: "stretch", marginTop: 2,
              background: "#fff", border: `1px solid ${PD.border}`,
              borderRadius: 8, padding: 8,
            }}>
              {/* fake design canvas thumbnail */}
              <div style={{
                width: 72, height: 54, borderRadius: 6, flexShrink: 0,
                background: "linear-gradient(135deg, #eef1ff 0%, #fff 100%)",
                border: `1px solid ${PD.border}`,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 4, left: 4, right: 4, height: 5, background: PD.ink, borderRadius: 1.5, opacity: 0.85 }} />
                <div style={{ position: "absolute", top: 13, left: 4, width: 32, height: 4, background: PD.ink, borderRadius: 1.5, opacity: 0.5 }} />
                <div style={{ position: "absolute", top: 20, left: 4, width: 24, height: 3, background: PD.muted2, borderRadius: 1.5, opacity: 0.5 }} />
                <div style={{ position: "absolute", bottom: 6, left: 4, width: 20, height: 8, background: PD.blue, borderRadius: 2 }} />
                <div style={{ position: "absolute", bottom: 4, right: 4, width: 26, height: 16, background: "#fff", borderRadius: 3, border: `1px solid ${PD.border}` }} />
              </div>
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1px 0" }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: PD.ink, fontFamily: monoFont, letterSpacing: 0.2 }}>
                  homepage-v3.fig
                </div>
                <div style={{ fontSize: 9, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.4 }}>
                  3 FRAMES · 240KB · UPDATED 2H AGO
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.blue }} />
                  <span style={{ fontSize: 10, color: PD.blue, fontWeight: 600 }}>
                    Kira left 2 comments
                  </span>
                  <span style={{ fontSize: 9.5, color: PD.muted2, fontFamily: monoFont, marginLeft: 2 }}>· 12m</span>
                </div>
              </div>
            </div>

            {/* COMMENT PEEK */}
            <div style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              padding: "8px 10px", borderRadius: 7,
              background: "rgba(41,82,255,0.05)",
              border: "1px dashed rgba(41,82,255,0.18)",
            }}>
              <Avatar name="Kira Sen" size={16} color={PD.warmAvatarBg} textColor={PD.warmAvatarFg} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10.5, color: PD.ink2, lineHeight: 1.4 }}>
                  <b style={{ color: PD.ink, fontWeight: 600 }}>Kira</b>{" "}
                  <span style={{ color: PD.muted2 }}>on hero frame ·</span>{" "}
                  &ldquo;Try the warmer accent — softer than v2.&rdquo;
                </div>
              </div>
              <span style={{ fontSize: 9, fontFamily: monoFont, color: PD.muted2, letterSpacing: 0.4, flexShrink: 0 }}>5M</span>
            </div>

            {/* ACTION ROW */}
            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <button style={{
                padding: "7px 12px", borderRadius: 7,
                background: PD.ink, color: "#fff",
                fontSize: 11, fontWeight: 500, border: "none",
              }}>
                Open file ↗
              </button>
              <button style={{
                padding: "7px 12px", borderRadius: 7,
                background: "#fff", color: PD.ink2,
                fontSize: 11, fontWeight: 500, border: `1px solid ${PD.border}`,
              }}>
                Leave comment
              </button>
              <span style={{
                marginLeft: "auto", fontSize: 9.5, color: PD.muted2,
                fontFamily: monoFont, letterSpacing: 0.5,
              }}>
                ⌘ K · QUICK REPLY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. Invoices — Client invoices with pay-now hero, soft bridge, hoverable rows ─── */
function InvoiceDocIcon({ tone }: { tone: "amber" | "green" | "rose" }) {
  const tones = {
    amber: { bg: PD.amberBg, fg: PD.amber, line: "rgba(184,118,28,0.45)", fold: "rgba(184,118,28,0.18)" },
    green: { bg: PD.greenBg, fg: PD.green, line: "rgba(22,163,74,0.45)",  fold: "rgba(22,163,74,0.18)" },
    rose:  { bg: PD.roseBg,  fg: PD.rose,  line: "rgba(192,56,43,0.45)",  fold: "rgba(192,56,43,0.18)" },
  };
  const t = tones[tone];
  return (
    <div style={{
      width: 24, height: 30, borderRadius: 4, flexShrink: 0,
      background: t.bg, border: `1px solid color-mix(in oklab, ${t.fg} 30%, transparent)`,
      position: "relative",
      display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4px", gap: 2,
    }}>
      {/* folded corner */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 7, height: 7,
        background: t.fold,
        borderTopRightRadius: 3,
        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
      }} />
      <div style={{ height: 1.5, background: t.line, borderRadius: 1 }} />
      <div style={{ height: 1.5, background: t.line, borderRadius: 1, width: "70%" }} />
      <div style={{ height: 1.5, background: t.line, borderRadius: 1, width: "55%" }} />
    </div>
  );
}

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10" style={{ flexShrink: 0 }}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function SceneInvoices() {
  const rows = [
    { id: "#042", label: "Design milestone",    amt: "$2,400", date: "20 May", tone: "amber" as const, status: "Pending", viewed: "Viewed by you · 12m ago", icon: "amber" as const, action: "Pay now" },
    { id: "#039", label: "Retainer · March",    amt: "$600",   date: "28 Mar", tone: "rose"  as const, status: "Overdue", viewed: "Reminder sent · 2d ago",  icon: "rose"  as const, action: "Pay now" },
    { id: "#041", label: "Discovery & wires",   amt: "$1,200", date: "04 Apr", tone: "green" as const, status: "Paid",    viewed: "Razorpay · UPI · 9 min",  icon: "green" as const, action: "Receipt" },
  ];

  return (
    <div style={{ height: "100%", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10, background: PD.pageBg }}>
      <div>
        <Eyebrow>BRAND REDESIGN · INVOICES</Eyebrow>
        <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Invoices</h1>
      </div>

      {/* HERO PAY-NOW BANNER */}
      <div style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
        borderRadius: 11, padding: "16px 20px", color: "#fff",
        display: "grid", gridTemplateColumns: "1.4fr auto", gap: 16, alignItems: "center",
        position: "relative", overflow: "hidden",
        boxShadow: "0 12px 32px rgba(20,18,14,0.18)",
      }}>
        <div style={{ position: "absolute", top: -50, right: 200, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(41,82,255,0.22), transparent 70%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: monoFont, fontSize: 10, letterSpacing: 1.4, color: "rgba(255,255,255,0.55)" }}>NEXT DUE · INVOICE #042</span>
            <span style={{ fontSize: 9.5, padding: "2.5px 7px", borderRadius: 999, background: "rgba(184,118,28,0.18)", color: PD.amberLight, fontFamily: monoFont, fontWeight: 600 }}>13 DAYS</span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, marginTop: 7, letterSpacing: -0.7 }}>
            $2,400 <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>· by 20 May</span>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Design milestone — homepage v3 review</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative" }}>
          <div style={{ padding: "10px 18px", borderRadius: 8, background: PD.blue, color: "#fff", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(41,82,255,0.35)" }}>Pay $2,400 ↗</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", textAlign: "center", fontFamily: monoFont, letterSpacing: 0.4 }}>● PCI-DSS · ~12 MIN</div>
        </div>
      </div>

      {/* SOFT BRIDGE: 3 muted summary tiles between banner and table */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 2 }}>
        <FCard muted pad={11} interactive={false}>
          <Eyebrow style={{ fontSize: 9 }}>Total collected</Eyebrow>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3, marginTop: 5, color: PD.ink }}>$1,600</div>
          <div style={{ fontSize: 9, color: PD.green, marginTop: 4, display: "inline-flex", alignItems: "center", gap: 4, fontFamily: monoFont, letterSpacing: 0.4 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />
            2 PAID · AVG 12M
          </div>
        </FCard>
        <FCard muted pad={11} interactive={false}>
          <Eyebrow style={{ fontSize: 9 }}>Outstanding</Eyebrow>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3, marginTop: 5, color: PD.ink }}>$3,000</div>
          <div style={{ fontSize: 9, color: PD.amber, marginTop: 4, display: "inline-flex", alignItems: "center", gap: 4, fontFamily: monoFont, letterSpacing: 0.4 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: PD.amberDot }} />
            2 UNPAID · 1 OVERDUE
          </div>
        </FCard>
        <FCard muted pad={11} interactive={false}>
          <Eyebrow style={{ fontSize: 9 }}>Project total</Eyebrow>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3, marginTop: 5, color: PD.ink }}>$4,600</div>
          <div style={{ height: 3, background: PD.trackBg, borderRadius: 999, overflow: "hidden", marginTop: 5 }}>
            <div style={{ width: "35%", height: "100%", background: PD.green, borderRadius: 999 }} />
          </div>
          <div style={{ fontSize: 8.5, color: PD.muted2, marginTop: 3, fontFamily: monoFont, letterSpacing: 0.4 }}>35% PAID</div>
        </FCard>
      </div>

      {/* INVOICE TABLE */}
      <FCard pad={0} interactive={false} style={{ flex: 1, overflow: "hidden", marginTop: 2 }}>
        {/* table header */}
        <div style={{
          padding: "8px 14px", borderBottom: `1px solid ${PD.borderSoft}`,
          display: "grid", gridTemplateColumns: "30px 1.6fr 0.7fr 0.7fr 0.85fr 16px",
          gap: 10, alignItems: "center",
          fontSize: 9, fontFamily: monoFont, color: PD.muted2, letterSpacing: 1.1, textTransform: "uppercase",
        }}>
          <span></span>
          <span>Description</span>
          <span>Date</span>
          <span>Amount</span>
          <span style={{ textAlign: "right" }}>Status</span>
          <span></span>
        </div>

        {/* rows */}
        {rows.map((r, i) => (
          <div
            key={r.id}
            className="sf-product-row"
            style={{
              padding: "9px 14px",
              display: "grid", gridTemplateColumns: "30px 1.6fr 0.7fr 0.7fr 0.85fr 16px",
              gap: 10, alignItems: "center", cursor: "pointer",
              borderBottom: i === rows.length - 1 ? "none" : `1px solid ${PD.borderSoft}`,
            }}
          >
            {/* doc icon, status-tinted */}
            <InvoiceDocIcon tone={r.icon} />

            {/* invoice id + label + activity sub-line with eye icon */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontFamily: monoFont, fontSize: 10.5, color: PD.muted2, fontWeight: 500, flexShrink: 0 }}>{r.id}</span>
                <span style={{ fontSize: 11.5, color: PD.ink, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {r.label}
                </span>
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                marginTop: 2, fontSize: 9.5, color: r.tone === "rose" ? PD.rose : PD.muted2,
                fontFamily: monoFont, letterSpacing: 0.3,
              }}>
                <span style={{ color: r.tone === "rose" ? PD.rose : PD.muted2 }}><EyeIcon /></span>
                {r.viewed}
              </div>
            </div>

            <span style={{ fontFamily: monoFont, fontSize: 10.5, color: PD.muted2 }}>{r.date}</span>
            <span style={{ fontFamily: monoFont, fontSize: 11.5, color: PD.ink, fontWeight: 600 }}>{r.amt}</span>

            {/* status pill + hover-revealed quick action */}
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6 }}>
              <span
                className="sf-product-row-action"
                style={{
                  fontSize: 9.5, fontFamily: monoFont, fontWeight: 600,
                  color: r.tone === "green" ? PD.green : PD.blue,
                  letterSpacing: 0.5,
                }}
              >
                {r.action.toUpperCase()} ↗
              </span>
              <Pill tone={r.tone}>{r.status}</Pill>
            </div>

            {/* chevron — micro-interaction indicator */}
            <span className="sf-product-chevron" style={{ fontSize: 14, lineHeight: 1, fontWeight: 500 }}>›</span>
          </div>
        ))}
      </FCard>
    </div>
  );
}

/* ─── 4. Payments — Settlement velocity chart as the visual anchor ─── */
function ScenePayments() {
  // Daily settlement totals over 7 days (in ₹)
  const data = [
    { day: "MON", value: 4200 },
    { day: "TUE", value: 8400 },
    { day: "WED", value: 3800 },
    { day: "THU", value: 12200 },
    { day: "FRI", value: 6900 },
    { day: "SAT", value: 28000 },
    { day: "TODAY", value: 48200 },
  ];
  const max = 50000;
  const todayIdx = data.length - 1;

  // chart positioning (in viewBox coords)
  const VW = 600;
  const VH = 160;
  const PAD_X = 8;
  const TOP = 8;
  const BOT = 8;
  const xAt = (i: number) => PAD_X + (i / (data.length - 1)) * (VW - 2 * PAD_X);
  const yAt = (v: number) => TOP + (1 - v / max) * (VH - TOP - BOT);
  const linePoints = data.map((d, i) => `${xAt(i)},${yAt(d.value)}`).join(" ");
  const areaPoints = `${PAD_X},${VH - BOT} ${linePoints} ${VW - PAD_X},${VH - BOT}`;
  const todayX = xAt(todayIdx);
  const todayY = yAt(data[todayIdx].value);
  // x position of today as percentage of full width (for HTML overlay positioning)
  const todayLeftPct = (todayX / VW) * 100;
  const todayTopPct = (todayY / VH) * 100;

  return (
    <div style={{ height: "100%", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12, background: PD.pageBg }}>
      <div>
        <Eyebrow>PAYMENTS · LIVE</Eyebrow>
        <h1 style={{ margin: "4px 0 0", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: PD.ink }}>Settlement velocity</h1>
      </div>

      {/* ─── HERO CHART CARD — the anchor ─── */}
      <div style={{
        flex: 1, minHeight: 0,
        borderRadius: 12, padding: "16px 18px 12px",
        background: "#fff", border: `1px solid ${PD.border}`,
        boxShadow: "0 1px 2px rgba(20,18,14,0.025), 0 14px 36px -14px rgba(20,18,14,0.12)",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        {/* faint top-right radial accent so the chart breathes */}
        <div aria-hidden style={{
          position: "absolute", top: -60, right: -50,
          width: 220, height: 180, borderRadius: "50%",
          background: `radial-gradient(circle, color-mix(in oklab, ${PD.green} 15%, transparent), transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Chart header: KPI on left, time-range toggle on right */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
          <div>
            <Eyebrow style={{ fontSize: 9 }}>SETTLED · LAST 7 DAYS</Eyebrow>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.7, color: PD.ink, lineHeight: 1 }}>₹64,400</span>
              <span style={{
                fontSize: 10.5, color: PD.green,
                fontFamily: monoFont, fontWeight: 700, letterSpacing: 0.3,
                display: "inline-flex", alignItems: "center", gap: 3,
                background: PD.greenBg, padding: "2px 6px", borderRadius: 999,
              }}>
                ↑ 28%
              </span>
              <span style={{ fontSize: 10.5, color: PD.muted2 }}>vs prev week</span>
            </div>
          </div>

          {/* time-range toggle — micro affordance */}
          <div style={{
            display: "inline-flex", padding: 3,
            background: PD.segBg, borderRadius: 7, border: `1px solid ${PD.border}`,
          }}>
            {[
              { v: "7D", active: true },
              { v: "30D", active: false },
              { v: "ALL", active: false },
            ].map(o => (
              <span key={o.v} style={{
                padding: "3px 9px", borderRadius: 5,
                background: o.active ? "#fff" : "transparent",
                color: o.active ? PD.ink : PD.muted,
                fontSize: 10, fontWeight: o.active ? 700 : 500,
                fontFamily: monoFont, letterSpacing: 0.5,
                boxShadow: o.active ? "0 1px 2px rgba(0,0,0,.06)" : "none",
              }}>{o.v}</span>
            ))}
          </div>
        </div>

        {/* CHART */}
        <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="payGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={PD.green} stopOpacity="0.32" />
                <stop offset="100%" stopColor={PD.green} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* horizontal gridlines (3, dashed, very subtle) */}
            {[0.25, 0.5, 0.75].map(p => (
              <line
                key={p}
                x1={PAD_X} x2={VW - PAD_X}
                y1={TOP + (VH - TOP - BOT) * p} y2={TOP + (VH - TOP - BOT) * p}
                stroke={PD.borderSoft} strokeWidth="1" strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* vertical reference at TODAY */}
            <line
              x1={todayX} x2={todayX}
              y1={todayY} y2={VH - BOT}
              stroke={PD.green} strokeWidth="1" strokeDasharray="2 3" opacity="0.45"
              vectorEffect="non-scaling-stroke"
            />

            {/* area fill */}
            <polygon points={areaPoints} fill="url(#payGrad)" />

            {/* main line */}
            <polyline
              points={linePoints}
              fill="none" stroke={PD.green}
              strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* data point dots (non-active) */}
            {data.map((d, i) => i !== todayIdx && (
              <circle
                key={i}
                cx={xAt(i)} cy={yAt(d.value)} r="3.5"
                fill="#fff" stroke={PD.green} strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* today: pulsing wave */}
            <circle cx={todayX} cy={todayY} r="6" fill={PD.green} opacity="0.45" vectorEffect="non-scaling-stroke">
              <animate attributeName="r" values="6;16;6" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.55;0;0.55" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* today: solid dot */}
            <circle
              cx={todayX} cy={todayY} r="6"
              fill={PD.green} stroke="#fff" strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Floating callout — pinned to the live data point, the focal point */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: `calc(${todayLeftPct}% - 156px)`,
              top: `calc(${todayTopPct}% - 60px)`,
              width: 144,
              background: PD.ink, color: "#fff",
              padding: "8px 10px", borderRadius: 8,
              fontSize: 10.5, fontWeight: 500,
              boxShadow: "0 10px 24px rgba(20,18,14,0.22)",
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <Avatar name="Aman Verma" size={22} color={PD.blueAvatarBg} textColor={PD.blueAvatarFg} />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: "#fff" }}>Aman · +₹2,400</div>
              <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.6)", fontFamily: monoFont, marginTop: 1, letterSpacing: 0.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                RAZORPAY · UPI · 12M
              </div>
            </div>
            {/* arrow pointer toward the dot */}
            <div
              style={{
                position: "absolute",
                bottom: -5, right: 10,
                width: 10, height: 10,
                background: PD.ink,
                transform: "rotate(45deg)",
                borderRadius: 1,
              }}
            />
          </div>
        </div>

        {/* X-axis day labels */}
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`,
          padding: `0 ${PAD_X}px`,
        }}>
          {data.map((d, i) => (
            <div key={i} style={{
              fontSize: 9, fontFamily: monoFont,
              color: i === todayIdx ? PD.green : PD.muted2,
              fontWeight: i === todayIdx ? 700 : 500,
              letterSpacing: 0.4,
              textAlign: "center",
            }}>
              {d.day}
            </div>
          ))}
        </div>
      </div>

      {/* ─── SUPPORTING: condensed settlements feed ─── */}
      <FCard pad={0} interactive={false} style={{ flexShrink: 0 }}>
        <div style={{
          padding: "7px 14px", borderBottom: `1px solid ${PD.borderSoft}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: PD.ink }}>Recent settlements</span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <span className="sf-product-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green }} />
            <span style={{ fontFamily: monoFont, fontSize: 8.5, color: PD.muted2, letterSpacing: 0.6 }}>LIVE · 4 TODAY</span>
          </div>
        </div>
        {[
          { rail: "Razorpay · UPI", who: "Aman Verma", amt: "+₹2,400", when: "12m", fresh: true, ac: PD.blueAvatarBg, atc: PD.blueAvatarFg },
          { rail: "Stripe · Card", who: "Lena Kowalski", amt: "+$1,200", when: "2h", fresh: false, ac: "#fde6cf", atc: "#b8761c" },
          { rail: "Razorpay · Net", who: "Studio Noor", amt: "+₹1,800", when: "Yesterday", fresh: false, ac: "#dbeadc", atc: PD.green },
        ].map((p, i, arr) => (
          <div key={p.who} className="sf-product-row" style={{
            padding: "6px 14px", display: "flex", alignItems: "center", gap: 9,
            borderBottom: i === arr.length - 1 ? "none" : `1px solid ${PD.borderSoft}`,
            cursor: "pointer",
          }}>
            <span className={p.fresh ? "sf-product-pulse" : ""} style={{ width: 5, height: 5, borderRadius: "50%", background: PD.green, flexShrink: 0 }} />
            <Avatar name={p.who} size={20} color={p.ac} textColor={p.atc} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: PD.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.who}</div>
              <div style={{ fontSize: 8.5, color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.3 }}>{p.rail}</div>
            </div>
            <span style={{ fontFamily: monoFont, fontSize: 11, color: PD.green, fontWeight: 700 }}>{p.amt}</span>
            <span style={{ fontFamily: monoFont, fontSize: 9, color: PD.muted2, minWidth: 50, textAlign: "right" }}>{p.when}</span>
          </div>
        ))}
      </FCard>
    </div>
  );
}

const scenes = [SceneWorkspace, SceneCreatePortal, ScenePortal, SceneInvoices];

const ROTATING_WORDS = ["freelance", "design", "consulting", "agency"] as const;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);
  const progressRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Rotating heading word — simple state swap. The word stays inline with the heading,
  // taking its natural width, so it always aligns with the surrounding text.
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex(i => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive(a => (a + 1) % 4), SCENE_DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    const bg = bgRef.current;
    if (!container || !bg) return;
    const tabEls = container.querySelectorAll<HTMLButtonElement>(".sf-tab");
    const el = tabEls[active];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pRect = container.getBoundingClientRect();
    bg.style.left = rect.left - pRect.left + "px";
    bg.style.width = rect.width + "px";

    progressRefs.current.forEach((p, i) => {
      if (!p) return;
      p.style.transition = "none";
      p.style.transform = "scaleX(0)";
      void p.offsetWidth;
      if (i === active && !paused) {
        p.style.transition = `transform ${SCENE_DURATION}ms linear`;
        p.style.transform = "scaleX(1)";
      }
    });
  }, [active, paused]);

  useEffect(() => {
    const onResize = () => {
      const container = tabsContainerRef.current;
      const bg = bgRef.current;
      if (!container || !bg) return;
      const el = container.querySelectorAll<HTMLButtonElement>(".sf-tab")[active];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pRect = container.getBoundingClientRect();
      bg.style.left = rect.left - pRect.left + "px";
      bg.style.width = rect.width + "px";
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <section className="relative overflow-hidden" style={{ padding: "clamp(16px, 3vw, 28px) 0 clamp(28px, 4vw, 56px)" }}>
      {/* ─── Ambient directional lighting — sources sit off-canvas ─── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Cool source from off-screen upper-left.
             Wide, elongated ellipse — falls diagonally across the page. */}
        <div
          className="absolute"
          style={{
            top: "-55%", left: "-25%",
            width: "110%", height: "110%",
            background:
              "radial-gradient(ellipse 55% 38% at 28% 30%, var(--sf-brand) 0%, color-mix(in oklab, var(--sf-brand) 35%, transparent) 35%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.4,
            animation: "drift-cool 32s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* 2. Warm counter-light from off-screen lower-right.
             Smaller, lower opacity — feels like reflected sunlight. */}
        <div
          className="absolute"
          style={{
            bottom: "-45%", right: "-20%",
            width: "85%", height: "90%",
            background:
              "radial-gradient(ellipse 50% 50% at 70% 65%, oklch(70% 0.16 75) 0%, color-mix(in oklab, oklch(70% 0.16 75) 25%, transparent) 35%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.25,
            animation: "drift-warm 38s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* 3. Cool rim — a faint diagonal sweep to add direction */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--sf-brand) 8%, transparent) 0%, transparent 38%, transparent 70%, color-mix(in oklab, oklch(70% 0.16 75) 8%, transparent) 100%)",
            animation: "drift-rim 14s ease-in-out infinite",
          }}
        />

        {/* 4. Soft fade into the page bg below — keeps the rest of the page calm */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--sf-bg) 90%)",
          }}
        />

        {/* 5. Film grain — premium texture, kills the templated feel */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            opacity: 0.07,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <motion.div
        className="relative text-center max-w-[1240px] mx-auto"
        style={{ padding: "0 var(--sf-pad-x)" }}
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUpSm}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 sm:mb-5 text-[13px] sm:text-sm shadow-sm"
          style={{ borderColor: "var(--sf-line)", background: "var(--sf-bg)", color: "var(--sf-ink-2)" }}
        >
          <span className="px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-medium font-mono" style={{ background: "var(--sf-ink)", color: "var(--sf-bg)" }}>NEW</span>
          <span className="hidden sm:inline">Founding members get 50% off — forever</span>
          <span className="sm:hidden">Founding members · 50% off forever</span>
          <span style={{ color: "var(--sf-ink-3)" }}>→</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mb-3 sm:mb-4 lg:mb-5" style={{ fontSize: "clamp(36px, 6.2vw, 84px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.04 }}>
          One link to run your entire{" "}
          <span
            key={wordIndex}
            className="sf-rotating-word"
            style={{
              color: "var(--sf-accent)",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>{" "}
          business.
        </motion.h1>

        <motion.p variants={fadeUpSm} className="mx-auto mb-5 sm:mb-6" style={{ fontSize: "clamp(15.5px, 1.55vw, 20px)", color: "var(--sf-ink-2)", maxWidth: 680, lineHeight: 1.5 }}>
          SoloFlow replaces the six tools you stitch together every project.
          Client portals, project tracking, invoicing, payments — one workspace, one link, zero chaos.
        </motion.p>

        <motion.div variants={fadeUpSm} className="flex justify-center mb-3">
          <ShimmerButton
            background="linear-gradient(180deg, oklch(22% 0.012 260) 0%, var(--sf-ink) 100%)"
            borderRadius="999px"
            shimmerDuration="2.8s"
            shimmerSize="0.06em"
            className="px-5 py-3 text-[14.5px] font-medium"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the waitlist&nbsp;<span style={{ opacity: 0.65 }}>→</span>
          </ShimmerButton>
        </motion.div>

        <motion.div variants={fadeUpSm} className="flex gap-x-5 gap-y-1.5 sm:gap-6 justify-center flex-wrap text-[11.5px] sm:text-xs font-mono" style={{ color: "var(--sf-ink-3)" }}>
          {["Free to start", "No credit card", "Razorpay & Stripe ready"].map(s => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--sf-green)" }} />{s}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        id="showcase"
        className="relative mx-auto mt-7 sm:mt-9 lg:mt-10"
        style={{ maxWidth: 1320, padding: "0 var(--sf-pad-x)" }}
        variants={scaleIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        {/* tabs — horizontal scroll on mobile to avoid overflow without breaking the sliding bg */}
        <div className="overflow-x-auto overflow-y-hidden mb-3 sm:mb-4 -mx-4 sm:mx-0 px-4 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div ref={tabsContainerRef} className="relative flex gap-1 p-1.5 w-fit mx-auto rounded-[14px] border whitespace-nowrap"
            style={{ background: "var(--sf-bg-soft)", borderColor: "var(--sf-line)" }}>
          <span ref={bgRef} className="absolute top-[5px] bottom-[5px] rounded-[10px] z-[1] transition-[left,width] duration-[450ms] [transition-timing-function:cubic-bezier(.65,.05,.36,1)]"
            style={{ background: "var(--sf-bg)", boxShadow: "0 1px 3px oklch(0% 0 0 / 0.08), 0 0 0 1px var(--sf-line-2)" }} />
          {tabs.map((tab, i) => {
            const isFreelancer = tab.perspective === "freelancer";
            const dotColor = isFreelancer ? "#a8a294" : "var(--sf-brand)";
            // visual gap between freelancer (0,1) and client (2,3) tabs
            const isPerspectiveBoundary = i === 2;
            return (
              <button
                key={tab.label}
                className="sf-tab relative z-[2] flex items-center gap-2 px-4 py-2 rounded-[10px] text-[13.5px] font-medium overflow-hidden transition-colors duration-250"
                style={{
                  color: i === active ? "var(--sf-ink)" : "var(--sf-ink-3)",
                  marginLeft: isPerspectiveBoundary ? 6 : 0,
                  position: "relative",
                }}
                onClick={() => { setPaused(false); setActive(i); }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: dotColor,
                    opacity: i === active ? 1 : 0.55,
                  }}
                />
                {tab.icon}
                {tab.label}
                <span ref={el => { progressRefs.current[i] = el; }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] origin-left"
                  style={{ background: "var(--sf-brand)", transform: "scaleX(0)" }} />
              </button>
            );
          })}
          </div>
        </div>

        {/* ─── Perspective indicator: WHO is viewing the current scene ─── */}
        <div className="flex justify-center mb-3">
          <div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-300 max-w-full"
            style={{
              background:
                tabs[active].perspective === "freelancer"
                  ? "color-mix(in oklab, #f6f4ed 60%, transparent)"
                  : "color-mix(in oklab, var(--sf-brand-soft) 70%, transparent)",
              borderColor:
                tabs[active].perspective === "freelancer"
                  ? "rgba(20,18,14,0.10)"
                  : "color-mix(in oklab, var(--sf-brand) 22%, transparent)",
            }}
          >
            <span
              className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.10em] whitespace-nowrap"
              style={{
                color:
                  tabs[active].perspective === "freelancer"
                    ? "var(--sf-ink-2)"
                    : "var(--sf-brand)",
              }}
            >
              {tabs[active].perspective === "freelancer"
                ? "👤 As you · the freelancer"
                : "🌐 As your client · the link you share"}
            </span>
            <span className="hidden sm:inline" style={{ color: "var(--sf-ink-3)", fontSize: 11 }}>·</span>
            <span
              className="hidden sm:inline text-[11px] whitespace-nowrap"
              style={{ color: "var(--sf-ink-2)" }}
            >
              {tabs[active].perspective === "freelancer"
                ? "this is what only you see"
                : "this is what they see at the link you share"}
            </span>
          </div>
        </div>

        {/* ─── Showcase frame ─── */}
        <div className="relative">
          <div
            className="relative z-[2] rounded-[16px] sm:rounded-[22px] border overflow-hidden"
            style={{
              borderColor: "var(--sf-line)",
              background: "var(--sf-bg)",
              boxShadow: "0 1px 0 oklch(100% 0 0 / 0.6) inset, 0 40px 100px -20px oklch(0% 0 0 / 0.18), 0 16px 40px -16px oklch(0% 0 0 / 0.12)",
            }}
          >
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b" style={{ background: "var(--sf-bg-soft)", borderColor: "var(--sf-line)" }}>
              <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
                {["oklch(72% 0.16 30)", "oklch(80% 0.13 90)", "oklch(72% 0.14 145)"].map(c => (
                  <span key={c} className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-full" style={{ background: c }} />
                ))}
              </div>
              {/* dynamic URL bar — reflects the current scene's perspective */}
              <div
                className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs max-w-[440px] mx-auto px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg border transition-colors duration-300 overflow-hidden"
                style={{
                  color: "var(--sf-ink-3)",
                  background: "var(--sf-bg)",
                  borderColor:
                    tabs[active].perspective === "freelancer"
                      ? "var(--sf-line-2)"
                      : "color-mix(in oklab, var(--sf-brand) 18%, var(--sf-line-2))",
                }}
              >
                <span
                  className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.06em] px-1 sm:px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{
                    background:
                      tabs[active].perspective === "freelancer"
                        ? "rgba(20,18,14,0.06)"
                        : "var(--sf-brand-soft)",
                    color:
                      tabs[active].perspective === "freelancer"
                        ? "var(--sf-ink-2)"
                        : "var(--sf-brand)",
                  }}
                >
                  {tabs[active].perspective === "freelancer" ? "YOU" : "CLIENT"}
                </span>
                <span className="truncate" style={{ color: "var(--sf-ink)" }}>{tabs[active].url}</span>
                <span className="text-[9px] sm:text-[10px] font-medium flex-shrink-0" style={{ color: "var(--sf-green)" }}>● LIVE</span>
              </div>
              <div className="w-8 sm:w-16 flex-shrink-0" />
            </div>
            <div className="sf-scene-frame-body relative overflow-hidden aspect-[4/3] sm:aspect-[5/4] md:aspect-[16/10]" style={{ background: PD.pageBg }}>
              {scenes.map((Scene, i) => (
                <div
                  key={i}
                  className={`sf-scene absolute inset-0 ${i === active ? "sf-scene-active" : "sf-scene-exit"}`}
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                >
                  <Scene />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
