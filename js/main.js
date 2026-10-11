/* ═══════════════════════════════════════════════════════════
   PREMJEET.DEV — portfolio interactions
   ═══════════════════════════════════════════════════════════ */
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const FINE_POINTER = matchMedia('(pointer: fine)').matches;

/* ───────────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────────── */
const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const SKILLS = [
  // n: name · c: category · l: comfort level · f: invert dark logo
  { n: 'HTML5',        c: 'language',  l: 92, i: 'html5/html5-original' },
  { n: 'CSS3',         c: 'language',  l: 86, i: 'css3/css3-original' },
  { n: 'JavaScript',   c: 'language',  l: 80, i: 'javascript/javascript-original' },
  { n: 'TypeScript',   c: 'language',  l: 60, i: 'typescript/typescript-original' },
  { n: 'Python',       c: 'language',  l: 78, i: 'python/python-original' },
  { n: 'Java',         c: 'language',  l: 70, i: 'java/java-original' },
  { n: 'C',            c: 'language',  l: 72, i: 'c/c-original' },
  { n: 'C++',          c: 'language',  l: 64, i: 'cplusplus/cplusplus-original' },
  { n: 'SQL',          c: 'language',  l: 70, i: 'azuresqldatabase/azuresqldatabase-original' },
  { n: 'React',        c: 'framework', l: 70, i: 'react/react-original' },
  { n: 'Next.js',      c: 'framework', l: 58, i: 'nextjs/nextjs-original', f: 1 },
  { n: 'Tailwind CSS', c: 'framework', l: 84, i: 'tailwindcss/tailwindcss-original' },
  { n: 'Bootstrap',    c: 'framework', l: 74, i: 'bootstrap/bootstrap-original' },
  { n: 'Node.js',      c: 'framework', l: 62, i: 'nodejs/nodejs-original' },
  { n: 'Express',      c: 'framework', l: 58, i: 'express/express-original', f: 1 },
  { n: 'Django',       c: 'framework', l: 54, i: 'django/django-original' },
  { n: 'Git',          c: 'tool',      l: 78, i: 'git/git-original' },
  { n: 'GitHub',       c: 'tool',      l: 80, i: 'github/github-original', f: 1 },
  { n: 'VS Code',      c: 'tool',      l: 90, i: 'vscode/vscode-original' },
  { n: 'Figma',        c: 'tool',      l: 64, i: 'figma/figma-original' },
  { n: 'MySQL',        c: 'tool',      l: 72, i: 'mysql/mysql-original' },
  { n: 'MongoDB',      c: 'tool',      l: 56, i: 'mongodb/mongodb-original' },
  { n: 'Postman',      c: 'tool',      l: 60, i: 'postman/postman-original' },
  { n: 'Linux',        c: 'tool',      l: 58, i: 'linux/linux-original' },
];

const CHIP = {
  cyan:   'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
  sky:    'text-sky-300 border-sky-400/30 bg-sky-400/10',
  purple: 'text-purple-300 border-purple-400/30 bg-purple-400/10',
  green:  'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  yellow: 'text-yellow-300 border-yellow-400/25 bg-yellow-400/10',
  pink:   'text-pink-300 border-pink-400/30 bg-pink-400/10',
  orange: 'text-orange-300 border-orange-400/30 bg-orange-400/10',
  slate:  'text-slate-300 border-white/15 bg-white/5',
};

const PROJECTS = [
  {
    t: 'DevBoard', e: '📊', idx: '01', url: 'devboard-premjeet.vercel.app',
    p1: '#0ea5e9', p2: '#6366f1',
    d: 'A real-time developer dashboard that turns GitHub activity — commits, streaks, PRs — into one beautiful command center.',
    result: '⭐ 120+ users · 4.9/5 avg rating',
    challenge: 'Developers juggle 5+ tabs just to answer "how productive was I this month?" Existing tools were either enterprise-priced or ugly. The challenge: one dashboard, zero config, that surfaces meaningful GitHub stats in under 2 seconds.',
    role: 'Solo developer & designer — owned everything from the Figma wireframes to the Firebase schema and deployment pipeline.',
    process: 'Sketched 3 dashboard concepts in Figma and tested them with 5 classmates → built the chart layer first with mock data → wired Firebase realtime listeners → shipped a beta in the college tech group and iterated weekly on feedback.',
    results: ['120+ registered users within 2 months of launch', 'Avg session time of 4m 30s — 3× the initial prototype', '4.9/5 rating from 40+ feedback submissions', 'Load time cut from 4.1s → 1.6s after query batching'],
    stack: [['React', 'cyan'], ['Tailwind', 'sky'], ['Firebase', 'yellow'], ['Chart.js', 'green']],
    file: '~/devboard/src/components/Dashboard.jsx',
    code: `// Dashboard.jsx — live GitHub stats widget
import { useLiveStats } from "../hooks/useLiveStats";

export function Dashboard() {
  const { commits, stars, prs } = useLiveStats("premjeet");

  return (
    <section className="grid grid-cols-3 gap-4">
      <StatCard label="commits" value={commits} trend="+12%" />
      <StatCard label="stars" value={stars} trend="+3 today" />
      <StatCard label="open PRs" value={prs} trend="waiting" />
    </section>
  );
}`,
  },
  {
    t: 'QuizVerse', e: '🧠', idx: '02', url: 'quizverse.netlify.app',
    p1: '#a855f7', p2: '#ec4899',
    d: 'An adaptive quiz platform with streak-based difficulty, countdown timers, and a leaderboard that survives page reloads.',
    result: '🎓 300+ quiz sessions in exam month',
    challenge: 'Static quiz apps get boring in 5 minutes — the difficulty never adapts and scores vanish on refresh. The challenge: keep players in flow by scaling difficulty with their streak, while persisting leaderboards without a backend.',
    role: 'Solo developer — designed the adaptive-difficulty algorithm, UI, and the localStorage persistence layer.',
    process: 'Researched flow-state game design → prototyped the streak→difficulty mapping on paper → built the engine as a pure module with unit-testable state transitions → play-tested with 12 classmates and tuned timer values twice.',
    results: ['300+ sessions played during the December exam month', '78% of players finished a full 15-question round (vs ~40% industry norm for trivia)', 'Adaptive mode raised avg correct-answer rate to 63% vs 51% on fixed mode', 'Zero data-loss complaints after the persistence rewrite'],
    stack: [['JavaScript', 'yellow'], ['CSS3', 'sky'], ['LocalStorage', 'slate'], ['Trivia API', 'green']],
    file: '~/quizverse/src/core/quiz-engine.js',
    code: `// quiz-engine.js — adaptive difficulty router
const LEVELS = { easy: 5, medium: 10, hard: 15 };

export function nextQuestion(state, answer) {
  if (!state.locked) state.score += LEVELS[state.level] / 5;
  state.streak = answer.correct ? state.streak + 1 : 0;
  state.level = state.streak >= 3 ? "hard" : "medium";

  return fetch(\`/api/questions?level=\${state.level}\`)
    .then((res) => res.json())
    .then((q) => ({ ...q, timer: 15 }));
}`,
  },
  {
    t: 'ExpenseFlow', e: '💸', idx: '03', url: 'expenseflow-demo.app',
    p1: '#10b981', p2: '#0ea5e9',
    d: 'A personal finance tracker with monthly budgets, burn-rate charts and a brutally honest "can I afford this?" indicator.',
    result: '💰 Tracked ₹50k+ of real transactions',
    challenge: 'My own allowance kept evaporating with no trace. Budgeting apps felt built for accountants. The challenge: a tracker a broke student actually opens daily — fast entry, honest answers, zero clutter.',
    role: 'Full-stack developer — Flask backend, SQLite schema, chart front-end, and the daily-use UX design.',
    process: 'Logged my own spending on paper for 2 weeks to find the real workflow → designed the schema around "months" not dates → built CSV import so old data came along → added the affordability check as the emotional hook of the app.',
    results: ['Personally tracked ₹50,000+ across 6 months of real spending', 'Daily active usage for 150+ consecutive days (my own habit test)', 'Entry time: under 5 seconds per transaction', 'Spending overshots dropped ~30% once burn-rate alerts shipped'],
    stack: [['Python', 'green'], ['Flask', 'slate'], ['SQLite', 'sky'], ['Pandas', 'orange']],
    file: '~/expenseflow/app.py',
    code: `# app.py — monthly spending summary endpoint
@app.route("/api/summary/<int:month>")
def summary(month):
    txns = Transaction.query.filter_by(month=month).all()
    spent = sum(t.amount for t in txns if t.type == "debit")
    budget = Budget.query.get(month).limit

    return jsonify({
        "spent": round(spent, 2),
        "remaining": round(budget - spent, 2),
        "burn_rate": round(spent / budget * 100, 1),
    })`,
  },
  {
    t: 'ChatSphere', e: '💬', idx: '04', url: 'chatsphere-live.onrender.com',
    p1: '#f97316', p2: '#e11d48',
    d: 'Real-time chat rooms with typing indicators, online presence and message sanitization — all riding on WebSockets.',
    result: '⚡ 40+ concurrent users in testing',
    challenge: 'Study groups were coordinating over WhatsApp with zero structure. The challenge: purpose-built rooms with presence and typing indicators that stay responsive even on campus Wi-Fi — without a database bill.',
    role: 'Backend lead — WebSocket architecture, message sanitization, and room state management; collaborated with a batchmate on the front-end.',
    process: 'Benchmarked polling vs WebSockets (polling won only below 3 users) → designed room lifecycle with auto-cleanup of dead rooms → load-tested with 50 simulated clients → hardened input with sanitization and rate limiting before release.',
    results: ['Sustained 40+ concurrent users in load tests with <120ms round-trip latency', 'Message loss: zero across 10,000-test send burst', 'Dead rooms auto-cleaned — memory flat over 48h soak test', 'XSS-proof: all 6 injection attempts in testing were neutralized'],
    stack: [['Node.js', 'green'], ['Socket.IO', 'pink'], ['Express', 'slate']],
    file: '~/chatsphere/server.js',
    code: `// server.js — rooms & broadcasting
io.on("connection", (socket) => {
  socket.on("join", ({ room, user }) => {
    socket.join(room);
    io.to(room).emit("system", \`\${user} joined the room\`);
  });

  socket.on("message", (payload) => {
    const safe = sanitize(payload.text).slice(0, 500);
    io.to(payload.room).emit("message", { user: payload.user, text: safe });
  });
});`,
  },
  {
    t: 'WeatherPulse', e: '⛅', idx: '05', url: 'weatherpulse-premjeet.dev',
    p1: '#38bdf8', p2: '#818cf8',
    d: 'A weather app that geolocates you and renders animated 5-day forecasts straight from the OpenWeather API.',
    result: '🌦️ <1s cold load on 3G throttling',
    challenge: 'Every weather app buries the forecast under ads and permissions. The challenge: answer "do I need an umbrella today?" in one glance, work gracefully when geolocation is denied, and stay usable on slow mobile data.',
    role: 'Solo developer — API integration, geolocation fallback flow, and the animated forecast UI.',
    process: 'Mapped the API response to a 3-tier fallback (GPS → saved city → manual search) → designed cache-first fetching so repeat visits need zero network → profiled and trimmed the render path until cold loads beat 1s on throttled 3G.',
    results: ['Sub-1s cold load on simulated 3G (2.4s before caching)', 'Works fully offline for the last-fetched city via cache-first strategy', '92 Lighthouse performance score on mobile', 'Geolocation-denied users convert to search at 100% — no dead ends'],
    stack: [['JavaScript', 'yellow'], ['REST API', 'green'], ['Tailwind', 'sky'], ['Geolocation', 'purple']],
    file: '~/weatherpulse/src/weather.js',
    code: `// weather.js — 5-day forecast fetcher
const API = "https://api.openweathermap.org/data/2.5";

export async function getForecast(city) {
  const url = \`\${API}/forecast?q=\${city}&units=metric&appid=\${KEY}\`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("city_not_found");

  const { list } = await res.json();
  return list.filter((_, i) => i % 8 === 0).slice(0, 5);
}`,
  },
  {
    t: 'CampusHub', e: '🎓', idx: '06', url: 'campushub · college project',
    p1: '#14b8a6', p2: '#8b5cf6',
    d: 'A college event manager — JDBC CRUD, attendance tracking and a report generator that saved our semester marks.',
    result: '🏫 Adopted by 2 college clubs',
    challenge: 'Club events at college ran on paper attendance and WhatsApp chaos — no record of who came, and reports had to be reconstructed by hand at semester end. The challenge: a system non-technical club coordinators would actually use.',
    role: 'Team lead (2 members) — designed the database schema, wrote the JDBC service layer, and trained the club coordinators; my partner built the Swing UI.',
    process: 'Interviewed 3 club coordinators to map their real workflow → normalized the schema to 3NF and defended it in our DBMS viva → built the report generator that turned 4 hours of manual work into one click → ran a live pilot during tech fest week.',
    results: ['Adopted by 2 college clubs for a full semester of events', 'Report generation: 4 hours of manual work → 1 click', 'Tracked 600+ attendance records with zero disputes', 'Scored highest in our batch for the DBMS semester project'],
    stack: [['Java', 'orange'], ['MySQL', 'sky'], ['JDBC', 'slate'], ['Swing', 'purple']],
    file: '~/campushub/src/EventService.java',
    code: `// EventService.java — upcoming events (JDBC)
public List<Event> findUpcoming(int limit) throws SQLException {
    String sql = "SELECT * FROM events WHERE date >= CURDATE() LIMIT ?";
    try (PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setInt(1, limit);
        ResultSet rs = ps.executeQuery();

        List<Event> events = new ArrayList<>();
        while (rs.next()) events.add(mapRow(rs));
        return events;
    }
}`,
  },
];

/* ───────────────────────────────────────────────────────────
   TINY SYNTAX HIGHLIGHTER (for the fake code viewer)
─────────────────────────────────────────────────────────── */
function highlight(code) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const KW = /^(const|let|var|function|return|import|from|export|default|async|await|new|class|extends|try|catch|if|else|for|while|public|private|static|void|def|lambda|not|in|is|None|True|False|null|undefined|this|throw|typeof)$/;
  const re = /(\/\/[^\n]*|#[^\n]*)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\\n]|\\.)*`)|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_$][\w$]*)(\()?/g;
  let out = '', last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    if      (m[1]) out += `<span class="tk-cm">${esc(m[1])}</span>`;
    else if (m[2]) out += `<span class="tk-str">${esc(m[2])}</span>`;
    else if (m[3]) out += `<span class="tk-num">${m[3]}</span>`;
    else if (m[4]) {
      if (m[5]) out += `<span class="tk-fn">${esc(m[4])}</span>(`;
      else out += KW.test(m[4]) ? `<span class="tk-kw">${esc(m[4])}</span>` : esc(m[4]);
    }
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}

/* ───────────────────────────────────────────────────────────
   TOASTS
─────────────────────────────────────────────────────────── */
const toastBox = $('#toasts');
function toast(msg, type = 'info', life = 3400) {
  const icons = { success: '✅', info: '💡', error: '⚠️' };
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `
    <span class="toast-icon">${icons[type] || '💡'}</span>
    <span>${msg}</span>
    <span class="toast-bar" style="--life:${life}ms"></span>`;
  toastBox.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 350);
  }, life);
}

/* ───────────────────────────────────────────────────────────
   PRELOADER — terminal boot sequence
─────────────────────────────────────────────────────────── */
(function preloader() {
  const box = $('#preloader');
  if (!box) return;
  document.body.style.overflow = 'hidden';
  const lines = $$('[data-boot]', box);
  lines.forEach((l, i) => setTimeout(() => l.classList.add('shown'), 300 + i * 380));
  const total = 300 + lines.length * 380 + 520;
  setTimeout(() => {
    box.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => box.remove(), 650);
  }, total);
})();

/* ───────────────────────────────────────────────────────────
   CUSTOM CURSOR (fine pointers only)
─────────────────────────────────────────────────────────── */
(function cursor() {
  if (!FINE_POINTER) return;
  const dot = $('#cursor-dot'), ring = $('#cursor-ring');
  document.documentElement.classList.add('has-cursor');
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
  }, { passive: true });
  (function loop() {
    rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  const HOVERABLE = 'a,button,input,textarea,label,[data-tilt],.skill-tag,.filter-btn';
  document.addEventListener('mouseover', (e) => { if (e.target.closest(HOVERABLE)) ring.classList.add('hovering'); });
  document.addEventListener('mouseout',  (e) => { if (e.target.closest(HOVERABLE)) ring.classList.remove('hovering'); });
})();

/* ───────────────────────────────────────────────────────────
   HERO PARTICLE NETWORK
─────────────────────────────────────────────────────────── */
(function particles() {
  const canvas = $('#hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const COLORS = ['0,240,255', '168,85,247', '0,255,157'];
  let W, H, parts = [], raf = null, running = true;
  const mouse = { x: null, y: null };

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((W * H) / 16000));
    parts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.7 + 0.7,
      c: COLORS[(Math.random() * COLORS.length) | 0],
    }));
  }

  function step() {
    if (!running) { raf = null; return; }
    ctx.clearRect(0, 0, W, H);
    const LINK = 115;
    for (const p of parts) {
      // gentle mouse repulsion
      if (mouse.x !== null) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 130 && d > 0.01) { p.vx += (dx / d) * 0.045; p.vy += (dy / d) * 0.045; }
      }
      p.x += p.vx; p.y += p.vy;
      p.vx *= 0.985; p.vy *= 0.985;
      if (Math.abs(p.vx) < 0.12) p.vx += (Math.random() - 0.5) * 0.03;
      if (Math.abs(p.vy) < 0.12) p.vy += (Math.random() - 0.5) * 0.03;
      if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},.8)`;
      ctx.fill();
    }
    for (let i = 0; i < parts.length; i++) {
      for (let j = i + 1; j < parts.length; j++) {
        const a = parts[i], b = parts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.3;
          ctx.strokeStyle = `rgba(0,240,255,${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(step);
  }

  function start() { if (!raf && running) raf = requestAnimationFrame(step); }
  resize();
  start();
  addEventListener('resize', () => { resize(); start(); });
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });
  canvas.parentElement.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting && !document.hidden;
    if (running) start();
  }).observe(canvas.parentElement);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) start();
  });
})();

/* ───────────────────────────────────────────────────────────
   HERO TYPING EFFECT
─────────────────────────────────────────────────────────── */
(function typing() {
  const el = $('#typing');
  if (!el) return;
  const ROLES = ['BCA Student 🎓', '19 y/o Developer ⚡', 'Continuously Learning 📚', 'Full-Stack Dev 💻', 'UI/UX Enthusiast 🎨', 'Problem Solver 🧩'];
  let ri = 0, ci = 0, deleting = false;
  (function tick() {
    const word = ROLES[ri];
    el.textContent = word.slice(0, ci);
    let delay = deleting ? 42 : 92;
    if (!deleting && ci === word.length) { delay = 1700; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; delay = 380; }
    else ci += deleting ? -1 : 1;
    setTimeout(tick, delay);
  })();
})();

/* ───────────────────────────────────────────────────────────
   SECTION GLIDE — eased scroll + warp scanline transition
─────────────────────────────────────────────────────────── */
let glideRAF = null, glideFail = null;
function cancelGlide() {
  if (glideRAF) { cancelAnimationFrame(glideRAF); glideRAF = null; }
  if (glideFail) { clearTimeout(glideFail); glideFail = null; }
  document.documentElement.style.scrollBehavior = '';
}

function glideTo(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerH = $('#navbar')?.offsetHeight || 64;
  const startY = scrollY;
  const destY = id === 'home' ? 0 : Math.max(0, target.getBoundingClientRect().top + startY - headerH + 1);

  cancelGlide();
  if (Math.abs(destY - startY) < 2) {   // already there — no ceremony needed
    history.replaceState(null, '', '#' + id);
    return;
  }

  // neon scanline sweeps in the direction of travel
  const warp = $('#warp-line');
  if (warp) {
    warp.classList.remove('sweep', 'sweep-up');
    void warp.offsetWidth;
    warp.classList.add(destY >= startY ? 'sweep' : 'sweep-up');
  }

  const dist = destY - startY;
  const duration = Math.min(1300, 420 + Math.abs(dist) * 0.34); // longer trips = longer glide
  const ease = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2); // easeInOutQuart
  const t0 = performance.now();
  document.documentElement.style.scrollBehavior = 'auto'; // frame-perfect positioning

  const finish = () => {
    if (glideRAF) cancelAnimationFrame(glideRAF);
    if (glideFail) clearTimeout(glideFail);
    glideRAF = glideFail = null;
    window.scrollTo(0, destY);
    document.documentElement.style.scrollBehavior = '';
    history.replaceState(null, '', '#' + id);
    if (id !== 'home') {           // arrival glow pulse on the target section
      target.classList.remove('arrived');
      void target.offsetWidth;
      target.classList.add('arrived');
    }
  };

  (function frame(now) {
    const p = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, startY + dist * ease(p));
    if (p < 1) glideRAF = requestAnimationFrame(frame);
    else finish();
  })(t0);

  // failsafe: rAF freezes in background tabs — land at the target anyway
  glideFail = setTimeout(finish, duration + 400);
}

(function glideLinks() {
  // every in-page anchor glides instead of jumping
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id || !document.getElementById(id)) return;
    e.preventDefault();
    glideTo(id);
  });
  // let the user interrupt a glide by scrolling themselves
  addEventListener('wheel', cancelGlide, { passive: true });
  addEventListener('touchstart', cancelGlide, { passive: true });
})();

/* ───────────────────────────────────────────────────────────
   NAVBAR — scroll state · spy · mobile menu
─────────────────────────────────────────────────────────── */
const navbar = $('#navbar');
(function navScroll() {
  const progress = $('#scroll-progress');
  const toTop = $('#back-to-top');
  function onScroll() {
    const y = scrollY;
    navbar.classList.toggle('scrolled', y > 24);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    toTop.classList.toggle('show', y > 620);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => glideTo('home'));
})();

(function spy() {
  const io = new IntersectionObserver((ents) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      $$('.nav-link').forEach((l) => l.classList.toggle('active', l.dataset.spy === en.target.id));
    });
  }, { rootMargin: '-42% 0px -52% 0px' });
  ['home', 'about', 'services', 'projects', 'proof', 'resume', 'contact'].forEach((id) => {
    const s = document.getElementById(id);
    if (s) io.observe(s);
  });
})();

(function mobileMenu() {
  const btn = $('#menu-toggle'), menu = $('#mobile-menu');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  $$('.mobile-link', menu).forEach((a) => a.addEventListener('click', () => {
    menu.classList.add('hidden');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();

/* ───────────────────────────────────────────────────────────
   SCROLL REVEAL + COUNTERS
─────────────────────────────────────────────────────────── */
const revealIO = new IntersectionObserver((ents) => {
  ents.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('revealed');
    revealIO.unobserve(en.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
function observeReveals(root = document) { $$('.reveal', root).forEach((el) => revealIO.observe(el)); }

(function counters() {
  const io = new IntersectionObserver((ents) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      $$('[data-count]', en.target).concat(en.target.matches?.('[data-count]') ? [en.target] : []).forEach((el) => {
        const target = +el.dataset.count, suffix = el.dataset.suffix || '';
        const t0 = performance.now(), dur = 1400;
        (function tick(t) {
          const p = Math.min((t - t0) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    });
  }, { threshold: 0.4 });
  $$('.stat-card').forEach((el) => io.observe(el));
})();

/* ───────────────────────────────────────────────────────────
   SKILLS — render + filterable tags
─────────────────────────────────────────────────────────── */
(function skills() {
  const box = $('#skills-container');
  if (!box) return;

  // category counts on the filter buttons
  $$('#skill-filters [data-count-for]').forEach((b) => {
    const f = b.dataset.countFor;
    b.textContent = f === 'all' ? SKILLS.length : SKILLS.filter((s) => s.c === f).length;
  });

  function render(filter) {
    const list = filter === 'all' ? SKILLS : SKILLS.filter((s) => s.c === filter);
    box.innerHTML = list.map((s, i) => `
      <div class="skill-tag" style="animation-delay:${i * 35}ms" title="${s.n} — ${s.l}% comfort">
        <div class="flex items-center gap-2">
          <img src="${ICON_BASE}${s.i}.svg" alt="" loading="lazy" onerror="this.style.display='none'"${s.f ? ' style="filter:brightness(0) invert(1)"' : ''}>
          <span class="text-xs text-slate-300">${s.n}</span>
        </div>
        <div class="skill-track"><i class="skill-bar" style="--lvl:${s.l}%"></i></div>
      </div>`).join('');
  }

  $$('#skill-filters .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#skill-filters .filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  // defer the first render until the panel is in view (so the pop animation is seen)
  let rendered = false;
  const firstRender = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting || rendered) return;
    rendered = true;
    firstRender.disconnect();
    render('all');
  }, { threshold: 0.15 });
  firstRender.observe(box);
  setTimeout(() => { if (!rendered) { rendered = true; render('all'); } }, 3000); // failsafe
})();

/* ───────────────────────────────────────────────────────────
   PROJECTS — render · 3D tilt · code modal
─────────────────────────────────────────────────────────── */
function attachTilt(el, max = 7) {
  if (!FINE_POINTER) return;
  el.addEventListener('mouseenter', () => { el.style.transition = 'transform .12s ease-out'; });
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(950px) rotateX(${(py - 0.5) * -2 * max}deg) rotateY(${(px - 0.5) * 2 * max}deg)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  });
  el.addEventListener('mouseleave', () => {
    el.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
    el.style.transform = '';
  });
}

(function projects() {
  const grid = $('#projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="reveal" style="--d:${(i % 3) * 0.08}s">
      <article class="project-card h-full" data-tilt>
        <div class="card-glow"></div>
        <div class="card-preview" style="--p1:${p.p1};--p2:${p.p2}">
          <div class="preview-bg"></div>
          <div class="preview-pattern"></div>
          <div class="preview-veil"></div>
          <div class="browser-bar">
            <i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i>
            <span class="browser-url">${p.url}</span>
          </div>
          <div class="preview-emoji">${p.e}</div>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-bold text-lg text-slate-100">${p.t}</h3>
            <span class="font-mono text-[11px] text-slate-600 mt-1.5 shrink-0">#${p.idx}</span>
          </div>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">${p.d}</p>
          <div class="mt-3 font-mono text-[11px] text-cyber-cyan/90">${p.result}</div>
          <div class="mt-4 flex flex-wrap gap-1.5">
            ${p.stack.map(([n, c]) => `<span class="tech-badge ${CHIP[c]}">${n}</span>`).join('')}
          </div>
          <div class="card-actions">
            <button class="btn-code" data-view="${i}">🔍 Case Study</button>
            <button class="btn-live" data-live="${i}">▶ Live Demo</button>
          </div>
        </div>
      </article>
    </div>`).join('');

  $$('[data-tilt]', grid).forEach((el) => attachTilt(el));
  observeReveals(grid);

  grid.addEventListener('click', (e) => {
    const view = e.target.closest('[data-view]');
    const live = e.target.closest('[data-live]');
    if (view) openProject(+view.dataset.view);
    else if (live) {
      const p = PROJECTS[+live.dataset.live];
      toast(`🌐 <b>${p.t}</b> demo — deploy it &amp; add your link here!`, 'info');
    }
  });

  $('#github-cta')?.addEventListener('click', () =>
    toast('🔗 Plug your GitHub profile URL into this button!', 'info'));
})();

/* ───────────────────────────────────────────────────────────
   MODALS — generic open/close
─────────────────────────────────────────────────────────── */
const projectModal = $('#project-modal');
const successModal = $('#success-modal');

function openModal(m) {
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(m) {
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  if (!$$('.modal.open').length) document.body.style.overflow = '';
}
$$('.modal').forEach((m) => m.addEventListener('click', (e) => {
  if (e.target.closest('[data-close-modal]')) closeModal(m);
}));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') $$('.modal.open').forEach(closeModal);
});

function openProject(i) {
  const p = PROJECTS[i];
  $('#modal-file').textContent = p.file;
  $('#modal-code').innerHTML = highlight(p.code);
  $('#modal-title').textContent = p.t;
  $('#modal-desc').textContent = p.d;
  $('#modal-index').textContent = `project #${p.idx}`;
  $('#modal-stack').innerHTML = p.stack.map(([n, c]) => `<span class="tech-badge ${CHIP[c]}">${n}</span>`).join('');
  $('#modal-case').innerHTML = `
    <div class="case-block">
      <h4>🎯 The Challenge</h4>
      <p>${p.challenge}</p>
    </div>
    <div class="case-block">
      <h4>👤 My Role</h4>
      <p>${p.role}</p>
    </div>
    <div class="case-block">
      <h4>🛠️ The Process</h4>
      <p>${p.process}</p>
    </div>
    <div class="case-block">
      <h4>📈 Measurable Results</h4>
      <ul>${p.results.map((r) => `<li>${r}</li>`).join('')}</ul>
    </div>`;
  $('#modal-github').onclick = () => toast(`🔗 Add the repo URL for <b>${p.t}</b> here!`, 'info');
  openModal(projectModal);
}

/* ───────────────────────────────────────────────────────────
   CONTACT FORM — validation + simulated async send
─────────────────────────────────────────────────────────── */
(function contactForm() {
  const form = $('#contact-form');
  if (!form) return;
  const btn = $('#send-btn'), label = $('#send-label'), spinner = $('#send-spinner');
  const charCount = $('#char-count');
  const msgField = $('#f-message');

  const RULES = {
    'f-name':    (v) => v.trim().length >= 2 || 'name must be at least 2 chars',
    'f-email':   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "that email doesn't parse 🤔",
    'f-message': (v) => v.trim().length >= 10 || 'message needs at least 10 chars',
  };

  function setError(id, msg) {
    const input = document.getElementById(id);
    const err = $(`[data-error-for="${id}"]`);
    input.classList.toggle('invalid', !!msg);
    err.textContent = msg || '';
    err.classList.toggle('show', !!msg);
  }
  function check(id) {
    const res = RULES[id](document.getElementById(id).value);
    setError(id, res === true ? '' : res);
    return res === true;
  }

  Object.keys(RULES).forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => { if (input.classList.contains('invalid')) check(id); });
  });
  msgField.addEventListener('input', () => { charCount.textContent = Math.min(msgField.value.length, 600); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = Object.keys(RULES).map(check);
    if (results.includes(false)) {
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
      toast('Please fix the highlighted fields first', 'error');
      return;
    }
    // simulate transmission
    btn.disabled = true; btn.classList.add('opacity-80', 'pointer-events-none');
    spinner.classList.remove('hidden');
    const phases = ['📡 Transmitting…', '🔐 Encrypting…', '🚀 Sending…'];
    let pi = 0;
    label.textContent = phases[0];
    const phaseTimer = setInterval(() => { pi = (pi + 1) % phases.length; label.textContent = phases[pi]; }, 620);

    setTimeout(() => {
      clearInterval(phaseTimer);
      spinner.classList.add('hidden');
      label.textContent = '📡 Transmit Message';
      btn.disabled = false; btn.classList.remove('opacity-80', 'pointer-events-none');

      const name = $('#f-name').value.trim().split(/\s+/)[0] || 'friend';
      $('#success-text').textContent =
        `Thanks ${name}! Your message was received loud and clear. I'll get back to you within 24 hours.`;
      $('#success-id').textContent =
        `msg_id: #MSG-${Date.now().toString(36).toUpperCase()} · status: DELIVERED ✓`;

      // restart the checkmark draw + confetti
      successModal.classList.remove('animate-check');
      openModal(successModal);
      void successModal.offsetWidth;
      successModal.classList.add('animate-check');
      confettiBurst();

      toast('Message transmitted successfully!', 'success');
      form.reset();
      charCount.textContent = '0';
    }, 2100);
  });
})();

/* ───────────────────────────────────────────────────────────
   CONFETTI BURST
─────────────────────────────────────────────────────────── */
function confettiBurst() {
  const wrap = $('#confetti-burst');
  if (!wrap) return;
  wrap.innerHTML = '';
  const colors = ['#00f0ff', '#a855f7', '#00ff9d', '#ff2d78', '#fbbf24'];
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('i');
    s.className = 'confetti-piece';
    const ang = Math.random() * Math.PI * 2, dist = 65 + Math.random() * 95;
    s.style.setProperty('--cx', `${Math.cos(ang) * dist}px`);
    s.style.setProperty('--cy', `${Math.sin(ang) * dist - 45}px`);
    s.style.setProperty('--rot', `${(Math.random() * 540 - 270) | 0}deg`);
    s.style.setProperty('--clr', colors[i % colors.length]);
    s.style.animationDelay = `${(Math.random() * 0.15).toFixed(2)}s`;
    wrap.appendChild(s);
  }
}

/* ───────────────────────────────────────────────────────────
   MISC — socials · footer year · konami easter egg
─────────────────────────────────────────────────────────── */
$$('[data-social]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  toast(`🔗 Placeholder — add your <b>${a.dataset.social}</b> URL in index.html`, 'info');
}));

$('#year').textContent = new Date().getFullYear();

(function konami() {
  const SEQ = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let ki = 0;
  addEventListener('keydown', (e) => {
    ki = e.key === SEQ[ki] ? ki + 1 : (e.key === SEQ[0] ? 1 : 0);
    if (ki === SEQ.length) {
      ki = 0;
      document.documentElement.classList.toggle('party');
      toast('🎉 KONAMI CODE ACCEPTED — party mode toggled!', 'success');
    }
  });
})();

/* initial reveal pass */
observeReveals();
