/* ── Hero showcase scenes ──
   Four scenes that cycle: Client Portal, Projects, Invoices, Payments.
   Each is a clean, premium UI — not slop. Realistic dashboards. */

const sceneStyles = {
  panel: {
    background: 'var(--bg)',
    border: '1px solid var(--line)',
    borderRadius: 12,
    padding: 16,
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '4px 10px',
    borderRadius: 100,
    fontSize: 11,
    fontFamily: "'Geist Mono', monospace",
    border: '1px solid var(--line)',
    background: 'var(--bg-soft)',
    color: 'var(--ink-2)',
  },
  metric: {
    fontSize: 22, fontWeight: 500, letterSpacing: '-0.025em',
    color: 'var(--ink)',
  },
  metricLabel: {
    fontSize: 10.5,
    fontFamily: "'Geist Mono', monospace",
    color: 'var(--ink-3)',
    textTransform: 'uppercase', letterSpacing: '0.08em',
    marginTop: 4,
  },
};

/* ─── 1. Client Portal scene ─── */
function ScenePortal() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, height: '100%' }}>
      {/* sidebar */}
      <aside style={{ ...sceneStyles.panel, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid var(--line-2)' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, var(--brand), oklch(60% 0.18 280))' }}></div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Aman Verma</div>
            <div style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>Brand redesign</div>
          </div>
        </div>
        {[
          { label: 'Overview', active: true },
          { label: 'Milestones' },
          { label: 'Files', count: 4 },
          { label: 'Invoices', count: 2 },
          { label: 'Feedback' },
        ].map((item) => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '7px 10px',
            borderRadius: 7,
            fontSize: 12,
            background: item.active ? 'var(--brand-soft)' : 'transparent',
            color: item.active ? 'var(--brand)' : 'var(--ink-2)',
            fontWeight: item.active ? 500 : 400,
          }}>
            <span>{item.label}</span>
            {item.count && <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.count}</span>}
          </div>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 7, background: 'var(--bg-soft)', fontSize: 11, color: 'var(--ink-3)' }}>
          <span className="pulse-dot"></span> Connected
        </div>
      </aside>

      {/* main */}
      <main style={{ display: 'grid', gap: 12, gridTemplateRows: 'auto auto 1fr' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>BRAND REDESIGN</div>
            <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 2 }}>Welcome back, Aman</div>
          </div>
          <span style={sceneStyles.pill}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--green)'}}></span>On track</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { v: '65%', l: 'Progress' },
            { v: '$2,400', l: 'Budget' },
            { v: '4', l: 'Files' },
            { v: '20 May', l: 'Due' },
          ].map((m) => (
            <div key={m.l} style={sceneStyles.panel}>
              <div style={sceneStyles.metric}>{m.v}</div>
              <div style={sceneStyles.metricLabel}>{m.l}</div>
            </div>
          ))}
        </div>

        <div style={{ ...sceneStyles.panel, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Project progress</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>3 of 4 done</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,1,1,0].map((on, i) => (
              <div key={i} style={{
                flex: 1, height: 6, borderRadius: 3,
                background: on ? 'var(--brand)' : 'var(--line)',
              }}></div>
            ))}
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-2)' }}>
            <strong style={{ color: 'var(--ink)' }}>Next up:</strong> Client review of homepage v3 · due 20 May
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─── 2. Projects scene ─── */
function SceneProjects() {
  const cols = [
    { name: 'Backlog', items: [{ t: 'Logo concepts', tag: 'design' }, { t: 'Mood board', tag: 'research' }] },
    { name: 'In Progress', items: [{ t: 'Homepage v3', tag: 'design', live: true }, { t: 'Brand voice', tag: 'copy' }] },
    { name: 'Review', items: [{ t: 'About page', tag: 'review' }] },
    { name: 'Done', items: [{ t: 'Wireframes', tag: 'design' }, { t: 'Discovery', tag: 'research' }] },
  ];
  const tagColor = { design: 'oklch(78% 0.13 258)', research: 'oklch(78% 0.13 145)', copy: 'oklch(78% 0.13 75)', review: 'oklch(78% 0.13 30)' };
  return (
    <div style={{ display: 'grid', gap: 12, height: '100%', gridTemplateRows: 'auto 1fr' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>BRAND REDESIGN · KANBAN</div>
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 2 }}>Active milestones</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={sceneStyles.pill}>Kanban</span>
          <span style={{ ...sceneStyles.pill, background: 'var(--bg)', color: 'var(--ink-3)' }}>Timeline</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, minHeight: 0 }}>
        {cols.map((col) => (
          <div key={col.name} style={{ ...sceneStyles.panel, padding: 10, display: 'grid', gap: 8, alignContent: 'start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 4px' }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-2)' }}>{col.name}</span>
              <span style={{ fontSize: 10.5, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>{col.items.length}</span>
            </div>
            {col.items.map((it, i) => (
              <div key={i} style={{
                background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 8,
                padding: 10, display: 'grid', gap: 6,
                boxShadow: it.live ? '0 0 0 2px color-mix(in oklab, var(--brand) 25%, transparent)' : 'none',
              }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>{it.t}</div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: tagColor[it.tag] }}></span>
                  <span style={{ fontSize: 10.5, color: 'var(--ink-3)', textTransform: 'capitalize' }}>{it.tag}</span>
                  {it.live && (
                    <span style={{ marginLeft: 'auto', fontSize: 9.5, fontFamily: "'Geist Mono',monospace", color: 'var(--brand)' }}>● LIVE</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 3. Invoices scene ─── */
function SceneInvoices() {
  const rows = [
    { id: '#INV-042', client: 'Aman Verma', amount: '₹2,400', status: 'Paid', when: 'Today' },
    { id: '#INV-041', client: 'Priya Shah', amount: '₹1,800', status: 'Sent', when: '3 days ago' },
    { id: '#INV-040', client: 'TechCorp Ltd', amount: '₹6,500', status: 'Overdue', when: '12 days' },
    { id: '#INV-039', client: 'Studio Nine', amount: '₹3,200', status: 'Paid', when: '8 days ago' },
  ];
  const statusStyle = {
    Paid: { bg: 'oklch(94% 0.04 145)', fg: 'oklch(40% 0.12 145)' },
    Sent: { bg: 'oklch(94% 0.04 258)', fg: 'oklch(40% 0.12 258)' },
    Overdue: { bg: 'oklch(94% 0.04 30)', fg: 'oklch(45% 0.15 30)' },
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16, height: '100%' }}>
      <div style={{ display: 'grid', gap: 12, gridTemplateRows: 'auto auto 1fr', minHeight: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>INVOICES · MAY</div>
            <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 2 }}>Tracked &amp; chased</div>
          </div>
          <span style={{ ...sceneStyles.pill, background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' }}>+ New invoice</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[
            { v: '₹13,900', l: 'Collected' },
            { v: '₹6,500', l: 'Outstanding' },
            { v: '6×', l: 'Faster than email' },
          ].map((m) => (
            <div key={m.l} style={sceneStyles.panel}>
              <div style={sceneStyles.metric}>{m.v}</div>
              <div style={sceneStyles.metricLabel}>{m.l}</div>
            </div>
          ))}
        </div>

        <div style={{ ...sceneStyles.panel, padding: 0, overflow: 'hidden' }}>
          {rows.map((r, i) => (
            <div key={r.id} style={{
              display: 'grid', gridTemplateColumns: '70px 1fr 80px 90px 70px', alignItems: 'center',
              padding: '12px 14px', gap: 10,
              borderTop: i ? '1px solid var(--line-2)' : 'none',
              fontSize: 12,
            }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: 'var(--ink-3)' }}>{r.id}</span>
              <span style={{ fontWeight: 500 }}>{r.client}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", textAlign: 'right' }}>{r.amount}</span>
              <span style={{ textAlign: 'center' }}>
                <span style={{
                  padding: '3px 8px', borderRadius: 100, fontSize: 10.5,
                  background: statusStyle[r.status].bg, color: statusStyle[r.status].fg, fontWeight: 500,
                }}>{r.status}</span>
              </span>
              <span style={{ fontSize: 10.5, color: 'var(--ink-3)', textAlign: 'right' }}>{r.when}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp reminder preview */}
      <aside style={{ ...sceneStyles.panel, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, background: 'oklch(96% 0.005 85)' }}>
        <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>AUTO-REMINDER · WHATSAPP</div>
        <div style={{ background: '#DCF8C6', borderRadius: 10, padding: 10, fontSize: 11.5, color: '#0b3d2e', alignSelf: 'flex-end', maxWidth: '90%' }}>
          Quick reminder — your ₹6,500 invoice is 3 days overdue. One click to pay →
          <div style={{ fontSize: 9, color: '#5a8a6e', textAlign: 'right', marginTop: 4 }}>10:30 AM ✓✓</div>
        </div>
        <div style={{ background: '#DCF8C6', borderRadius: 10, padding: 10, fontSize: 11.5, color: '#0b3d2e', alignSelf: 'flex-end', maxWidth: '85%' }}>
          Last reminder — please pay to avoid project hold.
          <div style={{ fontSize: 9, color: '#5a8a6e', textAlign: 'right', marginTop: 4 }}>11:00 AM ✓✓</div>
        </div>
        <div style={{ marginTop: 'auto', fontSize: 10.5, color: 'var(--ink-3)', textAlign: 'center', fontFamily: "'Geist Mono', monospace" }}>
          You sent 0 reminders manually
        </div>
      </aside>
    </div>
  );
}

/* ─── 4. Payments scene ─── */
function ScenePayments() {
  const points = [12, 24, 18, 38, 30, 48, 42, 56, 64, 58, 72, 80];
  const max = 80;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, height: '100%' }}>
      <div style={{ display: 'grid', gap: 12, gridTemplateRows: 'auto auto 1fr', minHeight: 0 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>EARNINGS · LAST 12 WEEKS</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
            <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.03em' }}>₹1,84,200</div>
            <div style={{ fontSize: 12, color: 'var(--green)', fontFamily: "'Geist Mono', monospace" }}>↑ 28%</div>
          </div>
        </div>

        {/* chart */}
        <div style={{ ...sceneStyles.panel, padding: 14, position: 'relative' }}>
          <svg viewBox="0 0 320 110" preserveAspectRatio="none" style={{ width: '100%', height: 110 }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(56% 0.19 258)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="oklch(56% 0.19 258)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25,0.5,0.75].map((y) => (
              <line key={y} x1="0" y1={110*y} x2="320" y2={110*y} stroke="oklch(90% 0.005 260)" strokeWidth="1" strokeDasharray="2 4" />
            ))}
            <path
              d={`M0,${110-(points[0]/max)*100} ${points.map((p, i) => `L${(i/(points.length-1))*320},${110-(p/max)*100}`).join(' ')} L320,110 L0,110 Z`}
              fill="url(#grad)"
            />
            <path
              d={`M0,${110-(points[0]/max)*100} ${points.map((p, i) => `L${(i/(points.length-1))*320},${110-(p/max)*100}`).join(' ')}`}
              fill="none" stroke="oklch(56% 0.19 258)" strokeWidth="2" strokeLinejoin="round"
            />
            {points.map((p, i) => (
              <circle key={i} cx={(i/(points.length-1))*320} cy={110-(p/max)*100} r="2" fill="oklch(56% 0.19 258)" />
            ))}
          </svg>
        </div>

        <div style={{ ...sceneStyles.panel, display: 'grid', gap: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 500 }}>Recent settlements</div>
          {[
            { method: 'Razorpay · UPI', amount: '+₹2,400', time: '12 min ago' },
            { method: 'Stripe · Card', amount: '+$1,200', time: '2 hrs ago' },
            { method: 'Razorpay · Netbanking', amount: '+₹1,800', time: 'Yesterday' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11.5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }}></span>
                {s.method}
              </div>
              <div style={{ display: 'flex', gap: 12, fontFamily: "'Geist Mono', monospace" }}>
                <span style={{ color: 'var(--green)' }}>{s.amount}</span>
                <span style={{ color: 'var(--ink-3)' }}>{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* receipt mock */}
      <aside style={{ ...sceneStyles.panel, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, background: 'linear-gradient(180deg, var(--bg), var(--bg-soft))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 10.5, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>INVOICE #042</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Aman Verma</div>
          </div>
          <span style={{ background: 'oklch(94% 0.04 145)', color: 'oklch(40% 0.12 145)', padding: '3px 8px', borderRadius: 100, fontSize: 10.5, fontWeight: 500 }}>PAID</span>
        </div>
        <div style={{ borderTop: '1px dashed var(--line)', paddingTop: 12, display: 'grid', gap: 8, fontSize: 11.5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)' }}><span>Brand redesign</span><span style={{ fontFamily: "'Geist Mono', monospace" }}>₹2,000</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)' }}><span>GST 18%</span><span style={{ fontFamily: "'Geist Mono', monospace" }}>₹360</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)' }}><span>Razorpay fee</span><span style={{ fontFamily: "'Geist Mono', monospace" }}>₹40</span></div>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>TOTAL</span>
          <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>₹2,400</span>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 8, alignItems: 'center', fontSize: 10.5, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>
          <span className="pulse-dot"></span>
          <span>SETTLED IN 12 MINUTES</span>
        </div>
      </aside>
    </div>
  );
}

window.ScenePortal = ScenePortal;
window.SceneProjects = SceneProjects;
window.SceneInvoices = SceneInvoices;
window.ScenePayments = ScenePayments;
