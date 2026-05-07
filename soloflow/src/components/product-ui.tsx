/* ─── Shared atoms matching the SoloFlow product design system ───
   Colors and patterns sourced from /sp/project/{client,freelancer}-screens.jsx
   - Page bg: #ecebe6, sidebar: #faf9f4, card bg: #fff (or #fbfaf6 muted)
   - Borders: #e8e6df
   - Accent blue: #2952ff (primary), #cfd6ff (light), #eef1ff (active)
   - Green: #16a34a (paid/live), Amber: #b8761c, Rose: #c0382b
   - Mono: IBM Plex Mono for uppercase labels with letter-spacing 1.4
*/

import type { CSSProperties, ReactNode } from "react";

export const PD = {
  pageBg: "#ecebe6",
  sidebarBg: "#faf9f4",
  cardBg: "#fff",
  cardMuted: "#fbfaf6",
  border: "#e8e6df",
  borderSoft: "#f0eee8",
  inputBorder: "#e3e1d8",
  ink: "#1a1a1a",
  ink2: "#3a3a3a",
  ink3: "#5a5648",
  muted: "#7a766c",
  muted2: "#8a857a",
  blue: "#2952ff",
  blueLight: "#cfd6ff",
  blueSoft: "#eef1ff",
  blueBg: "#f5f7ff",
  green: "#16a34a",
  greenLight: "#dbeadc",
  greenBg: "#ecf6ee",
  amber: "#b8761c",
  amberDot: "#d68d2e",
  amberBg: "#fdf3e3",
  amberLight: "#f3b961",
  rose: "#c0382b",
  roseBg: "#fbece9",
  warmAvatarBg: "#d6cdb8",
  warmAvatarFg: "#5a5340",
  blueAvatarBg: "#cfd6ff",
  blueAvatarFg: "#2952ff",
  trackBg: "#eee9dd",
  segBg: "#f1efe7",
};

export const monoFont = "var(--font-ibm-plex-mono), 'SF Mono', Menlo, Consolas, monospace";

export function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{
      fontFamily: monoFont, fontSize: 11, fontWeight: 500,
      color: PD.muted2, letterSpacing: 1.4, textTransform: "uppercase",
      ...style,
    }}>{children}</div>
  );
}

type Tone = "green" | "blue" | "amber" | "rose" | "grey";

export function Pill({ tone = "green", children }: { tone?: Tone; children: ReactNode }) {
  const tones: Record<Tone, { bg: string; fg: string; dot: string }> = {
    green: { bg: PD.greenBg, fg: PD.green, dot: PD.green },
    blue:  { bg: PD.blueSoft, fg: PD.blue, dot: PD.blue },
    amber: { bg: PD.amberBg, fg: PD.amber, dot: PD.amberDot },
    rose:  { bg: PD.roseBg, fg: PD.rose, dot: PD.rose },
    grey:  { bg: "#f1efe9", fg: "#6e6a60", dot: "#9a958a" },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999,
      background: t.bg, color: t.fg,
      fontSize: 11.5, fontWeight: 500, border: `1px solid ${t.bg}`,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.dot }} />
      {children}
    </span>
  );
}

export function Avatar({ name, size = 22, color = PD.warmAvatarBg, textColor = PD.warmAvatarFg }: {
  name: string; size?: number; color?: string; textColor?: string;
}) {
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("");
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color, color: textColor,
      display: "grid", placeItems: "center",
      fontSize: size * 0.42, fontWeight: 600, flexShrink: 0,
      border: "1.5px solid #fff", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.06)",
    }}>{initials}</div>
  );
}

export function FCard({ children, style, pad = 18, muted = false, interactive = true }: {
  children: ReactNode; style?: CSSProperties; pad?: number; muted?: boolean; interactive?: boolean;
}) {
  return (
    <div className={interactive ? "sf-product-card" : ""} style={{
      background: muted ? PD.cardMuted : PD.cardBg,
      border: `1px solid ${PD.border}`,
      borderRadius: 10, padding: pad,
      boxShadow: muted ? "none" : "0 1px 2px rgba(20,18,14,0.025)",
      ...style,
    }}>{children}</div>
  );
}

/* ─── Mini client sidebar — used in product previews ─── */
export function MiniClientSidebar({ active = "overview", scale = 1 }: { active?: string; scale?: number }) {
  const s = (n: number) => n * scale;
  const items: [string, string, { dot?: string; count?: string; fresh?: boolean } | null][] = [
    ["overview", "Overview", null],
    ["invoices", "Invoices", { dot: PD.amber, count: "1" }],
    ["files", "Files", { count: "4" }],
    ["updates", "Updates", { dot: PD.blue, count: "2", fresh: true }],
  ];
  return (
    <div className="sf-scene-sidebar" style={{
      borderRight: `1px solid ${PD.border}`,
      padding: `${s(14)}px ${s(10)}px`,
      display: "flex", flexDirection: "column", background: PD.sidebarBg,
      gap: s(2),
    }}>
      <div style={{
        display: "flex", gap: s(8), alignItems: "center",
        padding: s(8), borderRadius: 7, marginBottom: s(10),
        background: "#fff", border: `1px solid ${PD.border}`,
      }}>
        <div style={{
          width: s(24), height: s(24), borderRadius: 5,
          background: "linear-gradient(135deg,#1a1a1a,#2952ff)", flexShrink: 0,
        }} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: s(11), fontWeight: 600, color: PD.ink }}>Kira Sen Studio</div>
          <div style={{ fontSize: s(9), color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.4 }}>
            FOR <span style={{ color: PD.ink, fontWeight: 600 }}>AMAN VERMA</span>
          </div>
        </div>
      </div>
      <Eyebrow style={{ padding: `${s(2)}px ${s(8)}px ${s(4)}px`, fontSize: s(9.5) }}>Project</Eyebrow>
      {items.map(([id, label, badge]) => {
        const isActive = id === active;
        return (
          <div key={id} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: `${s(6)}px ${s(10)}px`, borderRadius: 5, marginBottom: 1,
            background: isActive ? PD.blueSoft : "transparent",
            color: isActive ? PD.blue : PD.ink2,
            fontWeight: isActive ? 600 : 500, fontSize: s(11.5),
          }}>
            <span>{label}</span>
            {badge && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: s(4) }}>
                {badge.dot && <span className={badge.fresh ? "sf-product-pulse" : ""} style={{ width: s(5), height: s(5), borderRadius: "50%", background: badge.dot }} />}
                <span style={{ fontSize: s(9.5), color: badge.dot || PD.muted2, fontFamily: monoFont, fontWeight: badge.dot ? 600 : 400 }}>{badge.count}</span>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Mini freelancer sidebar — the OTHER side of the workflow ─── */
export function MiniFreelancerSidebar({ active = "dashboard", scale = 1 }: { active?: string; scale?: number }) {
  const s = (n: number) => n * scale;
  const items: [string, string, { count?: string; dot?: string; fresh?: boolean } | null][] = [
    ["dashboard", "Dashboard",  null],
    ["portals",   "Portals",    { count: "4" }],
    ["invoices",  "Invoices",   { count: "3", dot: PD.amber }],
    ["clients",   "Clients",    { count: "8" }],
    ["settings",  "Settings",   null],
  ];
  return (
    <div className="sf-scene-sidebar" style={{
      borderRight: `1px solid ${PD.border}`,
      padding: `${s(14)}px ${s(10)}px`,
      display: "flex", flexDirection: "column", background: PD.sidebarBg,
      gap: s(2),
    }}>
      {/* studio identity block */}
      <div style={{
        display: "flex", gap: s(8), alignItems: "center",
        padding: s(8), borderRadius: 7, marginBottom: s(10),
        background: "#fff", border: `1px solid ${PD.border}`,
      }}>
        <div style={{
          width: s(24), height: s(24), borderRadius: 5,
          background: "linear-gradient(135deg,#1a1a1a,#2952ff)", flexShrink: 0,
        }} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: s(11), fontWeight: 600, color: PD.ink }}>Kira Sen Studio</div>
          <div style={{ fontSize: s(9), color: PD.muted2, fontFamily: monoFont, letterSpacing: 0.4 }}>
            WORKSPACE · MAY 2026
          </div>
        </div>
      </div>

      <Eyebrow style={{ padding: `${s(2)}px ${s(8)}px ${s(4)}px`, fontSize: s(9.5) }}>Workspace</Eyebrow>
      {items.map(([id, label, badge]) => {
        const isActive = id === active;
        return (
          <div key={id} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: `${s(6)}px ${s(10)}px`, borderRadius: 5, marginBottom: 1,
            background: isActive ? PD.blueSoft : "transparent",
            color: isActive ? PD.blue : PD.ink2,
            fontWeight: isActive ? 600 : 500, fontSize: s(11.5),
          }}>
            <span>{label}</span>
            {badge && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: s(4) }}>
                {badge.dot && <span style={{ width: s(5), height: s(5), borderRadius: "50%", background: badge.dot }} />}
                <span style={{ fontSize: s(9.5), color: badge.dot || PD.muted2, fontFamily: monoFont, fontWeight: badge.dot ? 600 : 400 }}>{badge.count}</span>
              </span>
            )}
          </div>
        );
      })}

      {/* primary action */}
      <div style={{ marginTop: "auto", paddingTop: s(8) }}>
        <div style={{
          padding: `${s(8)}px ${s(10)}px`, borderRadius: 6,
          background: PD.ink, color: "#fff",
          fontSize: s(11), fontWeight: 600,
          display: "flex", alignItems: "center", justifyContent: "center", gap: s(5),
        }}>
          <span>+</span>
          <span>New portal</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Pay-hero card (dark gradient, blue button) — the centerpiece ─── */
export function PayHeroCard({ amount = "$2,400", invoice = "INVOICE #042", desc = "Design milestone — homepage v3 review", dueLabel = "DUE IN 13 DAYS", scale = 1 }: {
  amount?: string; invoice?: string; desc?: string; dueLabel?: string; scale?: number;
}) {
  const s = (n: number) => n * scale;
  return (
    <div style={{
      background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)",
      borderRadius: 12, padding: s(20), color: "#fff",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
      boxShadow: "0 1px 2px rgba(20,18,14,0.04), 0 12px 32px rgba(20,18,14,0.18)",
    }}>
      <div style={{
        position: "absolute", top: -50, right: -50, width: 160, height: 160,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(41,82,255,0.22), transparent 70%)",
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
        <div style={{ fontFamily: monoFont, fontSize: s(10), letterSpacing: 1.4, color: "rgba(255,255,255,0.55)" }}>
          {invoice}
        </div>
        <span style={{
          fontSize: s(9.5), padding: `${s(2.5)}px ${s(7)}px`, borderRadius: 999,
          background: "rgba(184,118,28,0.18)", color: PD.amberLight,
          fontFamily: monoFont, fontWeight: 600, letterSpacing: 0.5,
        }}>{dueLabel}</span>
      </div>
      <div style={{ fontSize: s(34), fontWeight: 600, letterSpacing: -1, marginTop: s(14), position: "relative", lineHeight: 1 }}>{amount}</div>
      <div style={{ fontSize: s(11), color: "rgba(255,255,255,0.55)", marginTop: s(4), position: "relative" }}>{desc}</div>
      <div style={{ marginTop: s(14), padding: `${s(10)}px 0`, borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "relative", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: s(10.5), color: "rgba(255,255,255,0.55)" }}>Stripe fee</span>
        <span style={{ fontFamily: monoFont, fontSize: s(10.5), color: "rgba(255,255,255,0.7)" }}>Covered</span>
      </div>
      <div className="sf-product-paybtn" style={{
        marginTop: s(12),
        padding: `${s(11)}px ${s(14)}px`, borderRadius: 8,
        background: PD.blue, color: "#fff",
        fontSize: s(12.5), fontWeight: 600,
        position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 6px 16px rgba(41,82,255,0.35)",
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: s(7) }}>
          <span style={{ width: s(5), height: s(5), borderRadius: "50%", background: "#fff" }} />
          Pay {amount} with Stripe
        </span>
        <span style={{ fontFamily: monoFont, fontSize: s(10.5), color: "rgba(255,255,255,0.85)" }}>↗</span>
      </div>
      <div style={{ marginTop: s(8), fontFamily: monoFont, fontSize: s(9), color: "#3fdc8f", letterSpacing: 0.5, position: "relative" }}>
        ● PCI-DSS · SETTLES IN ~12 MIN
      </div>
    </div>
  );
}
