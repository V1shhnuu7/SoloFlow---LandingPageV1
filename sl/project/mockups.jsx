/* ── Feature section mockups ──
   Smaller, focused mocks for each of the 4 feature rows.
   Floating browser frames at a slight tilt for visual depth. */

const mockStyle = {
  shell: {
    border: '1px solid var(--line)',
    borderRadius: 18,
    background: 'var(--bg)',
    overflow: 'hidden',
    boxShadow:
      '0 1px 0 oklch(100% 0 0 / 0.6) inset, 0 30px 60px -28px oklch(0% 0 0 / 0.18), 0 8px 22px -10px oklch(0% 0 0 / 0.08)',
  },
  bar: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '10px 14px',
    borderBottom: '1px solid var(--line)',
    background: 'var(--bg-soft)',
  },
  url: {
    flex: 1, textAlign: 'center',
    fontFamily: "'Geist Mono', monospace",
    fontSize: 10.5,
    color: 'var(--ink-3)',
    padding: '3px 8px',
    background: 'var(--bg)',
    border: '1px solid var(--line-2)',
    borderRadius: 6,
    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
  },
};

function Dots() {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(72% 0.16 30)' }}></span>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(80% 0.13 90)' }}></span>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'oklch(72% 0.14 145)' }}></span>
    </div>
  );
}

/* ── 1. Portal mock ── */
function MockPortal() {
  return (
    <div style={{ ...mockStyle.shell }}>
      <div style={mockStyle.bar}>
        <Dots />
        <div style={mockStyle.url}>app.soloflow.in/client/<strong style={{ color: 'var(--ink)' }}>aman-verma</strong></div>
        <div style={{ width: 50 }}></div>
      </div>
      <div style={{ padding: 22, display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, var(--brand), oklch(60% 0.18 280))' }}></div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Aman Verma</div>
            <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>Brand redesign · Q2 2026</div>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: 10.5, fontFamily: "'Geist Mono', monospace", color: 'var(--green)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="pulse-dot"></span> LIVE
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {[
            { v: '65%', l: 'Progress' },
            { v: '$2,400', l: 'Budget' },
            { v: '4', l: 'Files' },
            { v: '20 May', l: 'Due' },
          ].map((m) => (
            <div key={m.l} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: '10px 12px' }}>
              <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.02em' }}>{m.v}</div>
              <div style={{ fontSize: 10, fontFamily: "'Geist Mono', monospace", color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{m.l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          {['Project kickoff', 'UI / UX design', 'Development', 'QA &amp; launch'].map((label, i) => {
            const states = ['done', 'done', 'now', 'next'];
            const colors = { done: 'var(--brand)', now: 'oklch(78% 0.16 75)', next: 'var(--line)' };
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                <span style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: colors[states[i]],
                  border: states[i] === 'next' ? '1.5px solid var(--line)' : 'none',
                  flexShrink: 0,
                }}></span>
                <span style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: label }}></span>
                {states[i] === 'now' && <span style={{ fontSize: 10, fontFamily: "'Geist Mono', monospace", color: 'oklch(50% 0.16 75)' }}>NOW</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── 2. Projects/kanban mock ── */
function MockProjects() {
  return (
    <div style={mockStyle.shell}>
      <div style={mockStyle.bar}>
        <Dots />
        <div style={mockStyle.url}>app.soloflow.in/projects</div>
        <div style={{ width: 50 }}></div>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Brand redesign · Kanban</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ padding: '4px 10px', borderRadius: 7, background: 'var(--ink)', color: 'var(--bg)', fontSize: 10.5, fontFamily: "'Geist Mono', monospace" }}>Kanban</span>
            <span style={{ padding: '4px 10px', borderRadius: 7, color: 'var(--ink-3)', fontSize: 10.5, fontFamily: "'Geist Mono', monospace" }}>Timeline</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { name: 'Backlog', items: ['Logo concepts', 'Mood board'], n: 2 },
            { name: 'In Progress', items: ['Homepage v3', 'Brand voice'], n: 2, live: 0 },
            { name: 'Done', items: ['Wireframes', 'Discovery'], n: 2 },
          ].map((col) => (
            <div key={col.name} style={{ background: 'var(--bg-soft)', borderRadius: 10, padding: 8, display: 'grid', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 4px', fontSize: 10.5 }}>
                <span style={{ fontWeight: 500, color: 'var(--ink-2)' }}>{col.name}</span>
                <span style={{ color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>{col.n}</span>
              </div>
              {col.items.map((it, i) => (
                <div key={it} style={{
                  background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 7,
                  padding: '8px 10px', fontSize: 11,
                  boxShadow: col.live === i ? '0 0 0 2px color-mix(in oklab, var(--brand) 30%, transparent)' : 'none',
                }}>
                  <div style={{ fontWeight: 500 }}>{it}</div>
                  <div style={{ display: 'flex', gap: 4, marginTop: 4, alignItems: 'center' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'oklch(78% 0.13 258)' }}></span>
                    <span style={{ fontSize: 9.5, color: 'var(--ink-3)' }}>design</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 3. Invoice mock ── */
function MockInvoices() {
  const rows = [
    { id: '#042', client: 'Aman Verma', amount: '₹2,400', status: 'Paid' },
    { id: '#041', client: 'Priya Shah', amount: '₹1,800', status: 'Sent' },
    { id: '#040', client: 'TechCorp Ltd', amount: '₹6,500', status: 'Overdue' },
    { id: '#039', client: 'Studio Nine', amount: '₹3,200', status: 'Paid' },
  ];
  const ss = {
    Paid: { bg: 'oklch(94% 0.04 145)', fg: 'oklch(40% 0.12 145)' },
    Sent: { bg: 'oklch(94% 0.04 258)', fg: 'oklch(40% 0.12 258)' },
    Overdue: { bg: 'oklch(94% 0.04 30)', fg: 'oklch(45% 0.15 30)' },
  };
  return (
    <div style={mockStyle.shell}>
      <div style={mockStyle.bar}>
        <Dots />
        <div style={mockStyle.url}>app.soloflow.in/invoices</div>
        <div style={{ width: 50 }}></div>
      </div>
      <div style={{ padding: 18, display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>OUTSTANDING</div>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.025em', marginTop: 2 }}>₹6,500</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>COLLECTED · MAY</div>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.025em', marginTop: 2 }}>₹13,900</div>
          </div>
        </div>
        <div style={{ border: '1px solid var(--line)', borderRadius: 10, overflow: 'hidden' }}>
          {rows.map((r, i) => (
            <div key={r.id} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr 80px 70px',
              alignItems: 'center', padding: '10px 12px', gap: 10, fontSize: 11.5,
              borderTop: i ? '1px solid var(--line-2)' : 'none',
            }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", color: 'var(--ink-3)' }}>{r.id}</span>
              <span style={{ fontWeight: 500 }}>{r.client}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", textAlign: 'right' }}>{r.amount}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ padding: '2px 7px', borderRadius: 100, fontSize: 10, background: ss[r.status].bg, color: ss[r.status].fg, fontWeight: 500 }}>{r.status}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 4. Payments mock ── */
function MockPayments() {
  const points = [12, 24, 18, 38, 30, 48, 42, 56, 64, 58, 72, 80];
  const max = 80;
  return (
    <div style={mockStyle.shell}>
      <div style={mockStyle.bar}>
        <Dots />
        <div style={mockStyle.url}>app.soloflow.in/earnings</div>
        <div style={{ width: 50 }}></div>
      </div>
      <div style={{ padding: 22, display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: "'Geist Mono', monospace" }}>EARNINGS · LAST 12 WEEKS</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
              <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.03em' }}>₹1,84,200</div>
              <div style={{ fontSize: 12, color: 'var(--green)', fontFamily: "'Geist Mono', monospace" }}>↑ 28%</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ padding: '4px 10px', borderRadius: 7, background: 'var(--ink)', color: 'var(--bg)', fontSize: 10.5, fontFamily: "'Geist Mono', monospace" }}>12W</span>
            <span style={{ padding: '4px 10px', borderRadius: 7, color: 'var(--ink-3)', fontSize: 10.5, fontFamily: "'Geist Mono', monospace" }}>YTD</span>
          </div>
        </div>
        <svg viewBox="0 0 320 110" preserveAspectRatio="none" style={{ width: '100%', height: 110 }}>
          <defs>
            <linearGradient id="grad-mp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(56% 0.19 258)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="oklch(56% 0.19 258)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((y) => (
            <line key={y} x1="0" y1={110*y} x2="320" y2={110*y} stroke="oklch(90% 0.005 260)" strokeWidth="1" strokeDasharray="2 4" />
          ))}
          <path
            d={`M0,${110-(points[0]/max)*100} ${points.map((p, i) => `L${(i/(points.length-1))*320},${110-(p/max)*100}`).join(' ')} L320,110 L0,110 Z`}
            fill="url(#grad-mp)"
          />
          <path
            d={`M0,${110-(points[0]/max)*100} ${points.map((p, i) => `L${(i/(points.length-1))*320},${110-(p/max)*100}`).join(' ')}`}
            fill="none" stroke="oklch(56% 0.19 258)" strokeWidth="2" strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: 'var(--ink-2)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: '#3D8BFD' }}></span>
            Razorpay · UPI &amp; cards
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: 'var(--ink-2)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: '#635BFF' }}></span>
            Stripe · International
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: 'var(--green)' }}>
            <span className="pulse-dot"></span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5 }}>SETTLED IN 12M</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── How-it-works step visuals (small) ── */
function StepVisual1() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ width: '100%', background: 'oklch(20% 0.012 260)', border: '1px solid oklch(28% 0.012 260)', borderRadius: 8, padding: 12, display: 'grid', gap: 8 }}>
        <div style={{ fontSize: 10.5, color: 'oklch(72% 0.012 260)', fontFamily: "'Geist Mono', monospace" }}>EMAIL</div>
        <div style={{ height: 24, background: 'oklch(15% 0.012 260)', borderRadius: 5, padding: '6px 8px', fontSize: 11, color: 'oklch(85% 0.005 85)' }}>aman@studio.in</div>
        <div style={{ background: 'oklch(78% 0.16 75)', color: 'oklch(15% 0.012 260)', textAlign: 'center', padding: '6px', borderRadius: 5, fontSize: 11, fontWeight: 500 }}>Send magic link →</div>
      </div>
    </div>
  );
}
function StepVisual2() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      <div style={{ width: '100%', display: 'grid', gap: 6 }}>
        {['Client name', 'Project title', 'Budget'].map((l, i) => (
          <div key={l} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 8, alignItems: 'center', fontSize: 10.5 }}>
            <span style={{ color: 'oklch(72% 0.012 260)', fontFamily: "'Geist Mono', monospace" }}>{l}</span>
            <span style={{ background: 'oklch(20% 0.012 260)', border: '1px solid oklch(28% 0.012 260)', borderRadius: 5, padding: '5px 8px', color: 'oklch(85% 0.005 85)' }}>
              {['Aman Verma', 'Brand redesign', '₹2,400'][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
function StepVisual3() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 14 }}>
      <div style={{ width: '100%', display: 'grid', gap: 8 }}>
        <div style={{ background: 'oklch(20% 0.012 260)', border: '1px solid oklch(28% 0.012 260)', borderRadius: 6, padding: 8, fontSize: 10, fontFamily: "'Geist Mono', monospace", color: 'oklch(78% 0.16 75)', textAlign: 'center' }}>
          app.soloflow.in/client/aman
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10.5, color: 'oklch(85% 0.005 85)' }}>
          <span>Invoice #042</span>
          <span style={{ background: 'oklch(35% 0.12 145)', color: 'oklch(85% 0.13 145)', padding: '2px 7px', borderRadius: 100, fontSize: 9.5, fontWeight: 500 }}>PAID</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: 'oklch(72% 0.012 260)' }}>
          <span>Settled</span>
          <span style={{ fontFamily: "'Geist Mono', monospace", color: 'oklch(78% 0.16 145)' }}>+₹2,400</span>
        </div>
      </div>
    </div>
  );
}

window.MockPortal = MockPortal;
window.MockProjects = MockProjects;
window.MockInvoices = MockInvoices;
window.MockPayments = MockPayments;
window.StepVisual1 = StepVisual1;
window.StepVisual2 = StepVisual2;
window.StepVisual3 = StepVisual3;
