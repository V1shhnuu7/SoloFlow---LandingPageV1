/* ── App orchestration ──
   - Mounts the 4 hero scenes & feature mocks
   - Drives the auto-cycling tabbed showcase
   - FAQ accordion
   - Tweaks panel for live customization */

const SCENE_DURATION = 5200; // ms per scene

/* ─── Hero showcase: cycling tabbed scenes ─── */
function Showcase() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const tabsRef = React.useRef(null);
  const bgRef = React.useRef(null);
  const sceneCount = 4;

  // auto-cycle
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % sceneCount), SCENE_DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  // animate tab indicator
  React.useEffect(() => {
    const tabs = tabsRef.current?.querySelectorAll('.showcase-tab');
    if (!tabs || !bgRef.current) return;
    const el = tabs[active];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const parentRect = tabsRef.current.getBoundingClientRect();
    bgRef.current.style.left = (rect.left - parentRect.left) + 'px';
    bgRef.current.style.width = rect.width + 'px';

    // reset and play progress on active tab
    tabs.forEach((t, i) => {
      const p = t.querySelector('.tab-progress');
      if (!p) return;
      p.style.transition = 'none';
      p.style.transform = 'scaleX(0)';
      // force reflow
      void p.offsetWidth;
      if (i === active && !paused) {
        p.style.transition = `transform ${SCENE_DURATION}ms linear`;
        p.style.transform = 'scaleX(1)';
      }
    });
  }, [active, paused]);

  // re-position indicator on resize
  React.useEffect(() => {
    const onResize = () => {
      const tabs = tabsRef.current?.querySelectorAll('.showcase-tab');
      const el = tabs?.[active];
      if (!el || !bgRef.current) return;
      const rect = el.getBoundingClientRect();
      const parentRect = tabsRef.current.getBoundingClientRect();
      bgRef.current.style.left = (rect.left - parentRect.left) + 'px';
      bgRef.current.style.width = rect.width + 'px';
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  // wire tabs to existing DOM (so HTML stays semantic)
  React.useEffect(() => {
    const tabsEl = document.getElementById('showcase-tabs');
    const bgEl = document.getElementById('tab-bg');
    if (!tabsEl || !bgEl) return;
    tabsRef.current = tabsEl;
    bgRef.current = bgEl;

    const tabs = tabsEl.querySelectorAll('.showcase-tab');
    const handlers = [];
    tabs.forEach((t, i) => {
      const h = () => { setPaused(false); setActive(i); };
      t.addEventListener('click', h);
      handlers.push([t, h]);
    });

    return () => handlers.forEach(([t, h]) => t.removeEventListener('click', h));
  }, []);

  // sync active class on DOM
  React.useEffect(() => {
    const tabs = document.querySelectorAll('#showcase-tabs .showcase-tab');
    tabs.forEach((t, i) => t.classList.toggle('active', i === active));
  }, [active]);

  return (
    <>
      <div className={`scene ${active === 0 ? 'active' : ''}`}>
        <ScenePortal />
      </div>
      <div className={`scene ${active === 1 ? 'active' : ''}`}>
        <SceneProjects />
      </div>
      <div className={`scene ${active === 2 ? 'active' : ''}`}>
        <SceneInvoices />
      </div>
      <div className={`scene ${active === 3 ? 'active' : ''}`}>
        <ScenePayments />
      </div>
    </>
  );
}

/* ─── Mount the showcase + feature mocks ─── */
function App() {
  return (
    <>
      <Showcase />
    </>
  );
}

const scenesRoot = document.getElementById('scenes');
if (scenesRoot) ReactDOM.createRoot(scenesRoot).render(<App />);

/* mount mocks individually */
const mountPoints = [
  ['mock-portal', MockPortal],
  ['mock-projects', MockProjects],
  ['mock-invoices', MockInvoices],
  ['mock-payments', MockPayments],
  ['step-visual-1', StepVisual1],
  ['step-visual-2', StepVisual2],
  ['step-visual-3', StepVisual3],
];
mountPoints.forEach(([id, Comp]) => {
  const el = document.getElementById(id);
  if (el) ReactDOM.createRoot(el).render(<Comp />);
});

/* mount animated grid */
document.querySelectorAll('.hero-grid-bg').forEach((el) => {
  ReactDOM.createRoot(el).render(
    <AnimatedGridPattern 
      numSquares={60} 
      maxOpacity={0.6} 
      duration={3} 
      repeatDelay={1} 
      width={60}
      height={60}
    />
  );
});

/* ─── FAQ accordion ─── */
document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  q?.addEventListener('click', () => {
    const open = item.getAttribute('data-open') === 'true';
    document.querySelectorAll('.faq-item').forEach((other) => other.setAttribute('data-open', 'false'));
    item.setAttribute('data-open', open ? 'false' : 'true');
  });
});

/* ─── Reveal-on-scroll for sections ─── */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach((s) => {
  s.classList.add('reveal');
  io.observe(s);
});

/* ─── Tweaks panel ─── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mode": "light",
  "density": "default",
  "type": "sans",
  "accent": "indigo",
  "heroAnim": "cycle",
  "sectionOrder": "default"
}/*EDITMODE-END*/;

const ACCENTS = {
  indigo: { brand: 'oklch(56% 0.19 258)', brand2: 'oklch(63% 0.18 258)', soft: 'oklch(95% 0.04 258)' },
  amber:  { brand: 'oklch(62% 0.16 75)',  brand2: 'oklch(70% 0.14 75)',  soft: 'oklch(96% 0.04 75)' },
  emerald:{ brand: 'oklch(56% 0.13 155)', brand2: 'oklch(64% 0.12 155)', soft: 'oklch(95% 0.04 155)' },
  rose:   { brand: 'oklch(60% 0.18 18)',  brand2: 'oklch(68% 0.17 18)',  soft: 'oklch(96% 0.04 18)' },
};

function applyTweaks(t) {
  document.body.dataset.mode = t.mode;
  document.body.dataset.density = t.density;
  document.body.dataset.type = t.type;
  const a = ACCENTS[t.accent] || ACCENTS.indigo;
  document.documentElement.style.setProperty('--brand', a.brand);
  document.documentElement.style.setProperty('--brand-2', a.brand2);
  document.documentElement.style.setProperty('--brand-soft', a.soft);
}

function TweakUI() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => applyTweaks(t), [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Color & mode">
        <TweakRadio
          label="Mode"
          value={t.mode}
          onChange={(v) => setTweak('mode', v)}
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
          options={[
            { value: 'indigo',  color: 'oklch(56% 0.19 258)' },
            { value: 'amber',   color: 'oklch(62% 0.16 75)' },
            { value: 'emerald', color: 'oklch(56% 0.13 155)' },
            { value: 'rose',    color: 'oklch(60% 0.18 18)' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Typography">
        <TweakRadio
          label="Headline style"
          value={t.type}
          onChange={(v) => setTweak('type', v)}
          options={[
            { value: 'sans',  label: 'Geist' },
            { value: 'serif', label: 'Serif' },
            { value: 'mono',  label: 'Mono' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Density">
        <TweakRadio
          label="Spacing"
          value={t.density}
          onChange={(v) => setTweak('density', v)}
          options={[
            { value: 'compact',  label: 'Compact' },
            { value: 'default',  label: 'Default' },
            { value: 'spacious', label: 'Spacious' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Hero animation">
        <TweakRadio
          label="Behavior"
          value={t.heroAnim}
          onChange={(v) => {
            setTweak('heroAnim', v);
            // bus event handled below
            window.dispatchEvent(new CustomEvent('tweak:heroAnim', { detail: v }));
          }}
          options={[
            { value: 'cycle', label: 'Auto-cycle' },
            { value: 'manual', label: 'Manual' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Section order">
        <TweakSelect
          label="Layout flow"
          value={t.sectionOrder}
          onChange={(v) => {
            setTweak('sectionOrder', v);
            applySectionOrder(v);
          }}
          options={[
            { value: 'default',     label: 'Default (features → how → pricing)' },
            { value: 'social-first', label: 'Social-proof first' },
            { value: 'pricing-up',   label: 'Pricing above features' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* section order swap */
function applySectionOrder(mode) {
  const ids = {
    features: document.getElementById('features'),
    how: document.getElementById('how'),
    compare: document.getElementById('compare'),
    pricing: document.getElementById('pricing'),
    faq: document.getElementById('faq'),
  };
  const tests = document.querySelector('.testimonials');
  const stats = document.querySelector('.stats');
  const replaces = document.querySelector('.replaces');
  // find a stable parent — they are all direct siblings in <body> after nav
  const parent = ids.features?.parentElement;
  if (!parent) return;
  const ctaFinal = document.querySelector('.cta-final');

  const baseOrder = [replaces, stats, ids.features, ids.how, ids.compare, tests, ids.pricing, ids.faq, ctaFinal];
  let order = baseOrder;
  if (mode === 'social-first') {
    order = [replaces, stats, tests, ids.features, ids.how, ids.compare, ids.pricing, ids.faq, ctaFinal];
  } else if (mode === 'pricing-up') {
    order = [replaces, stats, ids.pricing, ids.features, ids.how, ids.compare, tests, ids.faq, ctaFinal];
  }
  order.filter(Boolean).forEach((el) => parent.appendChild(el));
}

const tweakRoot = document.createElement('div');
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<TweakUI />);

/* listen for hero anim mode (pause auto-cycle) */
window.addEventListener('tweak:heroAnim', (e) => {
  // Showcase reads document.body.dataset.heroAnim each cycle
  document.body.dataset.heroAnim = e.detail;
});

/* small smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    const top = t.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
