/**
 * ============================================================
 * script.js — 孙瑞个人学术主页 · 主逻辑
 * ============================================================
 * 功能模块：
 *   A. 加载屏幕
 *   B. 自定义鼠标
 *   C. Canvas 粒子背景（大幅升级：神经网络脉冲效果）
 *   D. 侧边栏渲染（从 profile.js 读取数据）
 *   E. 右侧面板渲染（日历、审稿人、访客计数）
 *   F. 页面路由（SPA 模式，无需刷新）
 *   G. Reveal 揭入动画
 *   H. 主题切换
 *   I. 键盘快捷键
 *   J. 回到顶部 & Toast
 * ============================================================
 */

/* ══════════════════════════════════════════════════════════
   A. 加载屏幕
   ══════════════════════════════════════════════════════════ */
(function initLoading() {
  const screen = document.getElementById('loadingScreen');
  const fill   = document.getElementById('loadFill');
  const tip    = document.getElementById('loadTip');
  const TIPS   = ['正在加载资源…', '初始化粒子引擎…', '渲染界面组件…', '数据加载完成！'];
  let pct = 0;

  const iv = setInterval(() => {
    pct += Math.random() * 28 + 12;
    if (pct >= 100) { pct = 100; clearInterval(iv); }

    fill.style.width = pct + '%';
    tip.textContent  = TIPS[Math.min(3, Math.floor(pct / 25))];

    if (pct === 100) {
      setTimeout(() => {
        screen.classList.add('done');
        // 加载完成后初始化所有模块
        initAll();
      }, 350);
    }
  }, 180);
})();

/* ══════════════════════════════════════════════════════════
   B. 统一初始化入口
   ══════════════════════════════════════════════════════════ */
function initAll() {
  initCursor();
  initCanvas();
  initTheme();
  initSidebar();
  initRightPanel();
  // initNav();
  initRouter('home');   // 默认显示主页
  initReveal();
  initBackToTop();
}

/* ══════════════════════════════════════════════════════════
   C. 自定义鼠标
   ══════════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let rx = 0, ry = 0;  // ring 的平滑位置

  document.addEventListener('mousemove', e => {
    // 圆点直接跟随
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    // ring 存储目标位置，由 RAF 平滑插值
    rx += (e.clientX - rx) * 0.1;
    ry += (e.clientY - ry) * 0.1;
  });

  // 平滑 ring 追踪
  (function ringLoop() {
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(ringLoop);
  })();
}

/* ══════════════════════════════════════════════════════════
   D. Canvas 粒子背景（升级版：神经网络脉冲 + 流动连线）
   ══════════════════════════════════════════════════════════
   【修改说明】
   - PARTICLE_COUNT：粒子数量（移动端自动减半）
   - CONNECT_DIST：连线最大距离（像素）
   - PULSE_SPEED：脉冲流动速度
   ══════════════════════════════════════════════════════════ */
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], pulses = [];
  const PARTICLE_COUNT = window.innerWidth > 768 ? 120 : 55;
  const CONNECT_DIST   = 140;   // 连线最大距离
  const PULSE_SPEED    = 1.8;   // 脉冲流动速度

  /** 调整画布尺寸 */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  /** 创建粒子 */
  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.4,         // 半径
        vx: (Math.random() - 0.5) * 0.22,     // X 速度
        vy: (Math.random() - 0.5) * 0.22,     // Y 速度
        alpha: Math.random() * 0.5 + 0.2,     // 透明度
        pulseTimer: Math.random() * 200,       // 随机脉冲触发计时器
      });
    }
  }

  /** 脉冲对象（沿连线流动的光点） */
  function emitPulse(p1, p2) {
    pulses.push({ p1, p2, t: 0, speed: PULSE_SPEED / Math.hypot(p2.x - p1.x, p2.y - p1.y) });
  }

  /** 主绘制循环 */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // 粒子颜色
    const pc = isDark ? '130,185,255' : '50,100,200';
    const lc = isDark ? '80,160,255'  : '60,120,200';

    // ── 移动粒子 & 边界处理 ──
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      // 周期性发出脉冲
      p.pulseTimer--;
      if (p.pulseTimer <= 0) {
        p.pulseTimer = 180 + Math.random() * 220;
        // 找最近邻粒子并发射脉冲
        let nearest = null, nd = Infinity;
        particles.forEach(q => {
          if (q === p) return;
          const d = Math.hypot(q.x - p.x, q.y - p.y);
          if (d < CONNECT_DIST && d < nd) { nd = d; nearest = q; }
        });
        if (nearest) emitPulse(p, nearest);
      }
    });

    // ── 绘制连线 ──
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * (isDark ? 0.12 : 0.07);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lc},${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // ── 绘制粒子（有光晕） ──
    particles.forEach(p => {
      // 外层光晕
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      grad.addColorStop(0, `rgba(${pc},${p.alpha * 0.5})`);
      grad.addColorStop(1, `rgba(${pc},0)`);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();

      // 核心点
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${pc},${p.alpha})`;
      ctx.fill();
    });

    // ── 绘制脉冲光点 ──
    pulses = pulses.filter(pulse => {
      pulse.t += pulse.speed;
      if (pulse.t >= 1) return false;

      const x = pulse.p1.x + (pulse.p2.x - pulse.p1.x) * pulse.t;
      const y = pulse.p1.y + (pulse.p2.y - pulse.p1.y) * pulse.t;

      const fade = Math.sin(pulse.t * Math.PI); // 淡入淡出
      const grd = ctx.createRadialGradient(x, y, 0, x, y, 8);
      grd.addColorStop(0, `rgba(${isDark?'61,155,255':'30,80,220'},${fade * 0.9})`);
      grd.addColorStop(1, `rgba(${isDark?'61,155,255':'30,80,220'},0)`);

      ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();

      // 高亮节点
      ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${fade * 0.85})`;
      ctx.fill();

      return true;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

/* ══════════════════════════════════════════════════════════
   E. 主题切换
   ══════════════════════════════════════════════════════════ */
function initTheme() {
  const btn  = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');
  const saved = localStorage.getItem('sr-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const cur  = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('sr-theme', next);
    showToast(next === 'dark' ? '🌙 已切换至深色模式' : '☀️ 已切换至浅色模式');
  });

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    icon.textContent = t === 'dark' ? '☀' : '🌙';
  }
}

/* ══════════════════════════════════════════════════════════
   F. 侧边栏渲染（从 profile.js 数据层读取）
   ══════════════════════════════════════════════════════════ */
function initSidebar() {
  const P = window.PROFILE;

  // ── 头像卡片 ──
  const profileCard = document.getElementById('profileCard');
  if (profileCard) {
    profileCard.innerHTML = `
      <div class="avatar-wrap">
        <div class="avatar-ring"></div>
        <img class="avatar-img" src="${P.basic.avatarUrl}" alt="${P.basic.nameCn}头像" />
        <div class="status-badge" title="在读博士"></div>
      </div>
      <div class="profile-name">${P.basic.nameCn}</div>
      <div class="profile-school">
        复旦大学 & 上海创智学院<br>博士研究生 · ${P.basic.political}
      </div>
      <div class="profile-tags">
        <span class="tag tag-blue">复旦大学</span>
        <span class="tag tag-gold">国家奖学金</span>
        <span class="tag tag-green">NeurIPS</span>
      </div>
    `;
  }

  // ── 教育时间轴 ──
  const eduEl = document.getElementById('eduTimeline');
  if (eduEl) {
    eduEl.innerHTML = P.education.map(e => `
      <div class="edu-item">
        <div class="edu-dot ${e.active ? 'active' : ''}"></div>
        <div>
          <div class="edu-school">${e.school}</div>
          <div class="edu-info">${e.degree} · ${e.major}</div>
          <div class="edu-period">${e.period}</div>
        </div>
      </div>
    `).join('');
  }

  // ── 研究兴趣标签 ──
  const intEl = document.getElementById('interestTags');
  if (intEl) {
    intEl.innerHTML = P.interests.map((t, i) =>
      `<span class="tag ${i%3===0?'tag-blue':i%3===1?'tag-gold':'tag-green'}">${t}</span>`
    ).join('');
  }

  // ── 技能条 ──
  const skillEl = document.getElementById('skillList');
  if (skillEl) {
    skillEl.innerHTML = P.skills.map(s => `
      <div class="skill-item">
        <div class="skill-head">
          <span>${s.name}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="skill-track">
          <div class="skill-fill" data-w="${s.level}"></div>
        </div>
      </div>
    `).join('');
    // 触发技能条动画
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 600);
  }

  // ── 快速链接 ──
  const qlEl = document.getElementById('quickLinks');
  if (qlEl) {
    const links = [
      { icon: "🌐", label: "个人主页",        url: P.basic.mypage },
      { icon: "🎓", label: "Google Scholar", url: P.basic.googleScholar },
      { icon: "🐙", label: "GitHub",         url: P.basic.github },
      { icon: "✉️", label: P.basic.email,    url: `mailto:${P.basic.email}` },
      { icon: "📄", label: "下载简历",        url: P.basic.cvUrl, download: true },
    ];
    qlEl.innerHTML = links.map(l =>
      `<a class="ql-a" href="${l.url}" ${l.download ? 'download' : 'target="_blank"'}>${l.icon} ${l.label}</a>`
    ).join('');
  }

  // ── 统计数字 ──
  const statsEl = document.getElementById('sideStats');
  if (statsEl) {
    statsEl.innerHTML = P.stats.map(s => `
      <div class="stat-box">
        <span class="stat-n" data-count="${s.num}">0</span>
        <span class="stat-l">${s.label}</span>
      </div>
    `).join('');
    // 数字跳动动画
    setTimeout(() => animateCounters(), 800);
  }
}

/* ══════════════════════════════════════════════════════════
   G. 右侧面板渲染
   ══════════════════════════════════════════════════════════ */
function initRightPanel() {
  renderCalendar();
  renderReviewers();
  renderVisitorCounter();
  renderRpContact();
}

// ── 日历 ──
let calDate = new Date();

window.calPrev = () => { calDate = new Date(calDate.getFullYear(), calDate.getMonth() - 1, 1); renderCalendar(); };
window.calNext = () => { calDate = new Date(calDate.getFullYear(), calDate.getMonth() + 1, 1); renderCalendar(); };

function renderCalendar() {
  const grid    = document.getElementById('calGrid');
  const label   = document.getElementById('calMonthLabel');
  const footer  = document.getElementById('calFooter');
  if (!grid) return;

  const y = calDate.getFullYear(), m = calDate.getMonth();
  const MONTHS = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  const WDAYS  = ['日','一','二','三','四','五','六'];
  label.textContent = `${y}年 ${MONTHS[m]}`;

  const today = new Date();
  const firstDay   = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const prevDays    = new Date(y, m, 0).getDate();

  let html = WDAYS.map(d => `<div class="cal-hd">${d}</div>`).join('');

  // 上月补位
  for (let i = firstDay - 1; i >= 0; i--)
    html += `<div class="cal-day cal-other">${prevDays - i}</div>`;

  // 本月
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();
    html += `<div class="cal-day ${isToday ? 'cal-today' : ''}">${d}</div>`;
  }

  // 下月补位（填满 6 行）
  const total = firstDay + daysInMonth;
  const remain = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= remain; d++)
    html += `<div class="cal-day cal-other">${d}</div>`;

  grid.innerHTML = html;

  const WD  = ['周日','周一','周二','周三','周四','周五','周六'];
  footer.textContent = `今天 · ${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()} ${WD[today.getDay()]}`;
}

// ── 期刊审稿人 ──
function renderReviewers() {
  const el = document.getElementById('reviewerList');
  if (!el) return;
  const P = window.PROFILE;
  el.innerHTML = P.academicService.reviewer.map(r => `
    <div class="reviewer-item">
      <div class="rv-journal">${r.journal}</div>
      <div class="rv-role">${r.role}</div>
    </div>
  `).join('');
}

// ── 访客计数器 ──
function renderVisitorCounter() {
  const el = document.getElementById('visitCounter');
  if (!el) return;
  let cnt = parseInt(localStorage.getItem('sr_visits') || '0') + 1;
  if (cnt > 999999) cnt = 1;
  localStorage.setItem('sr_visits', cnt);
  const s = String(cnt).padStart(6, '0');
  el.innerHTML = s.split('').map(d => `<div class="vc-d">${d}</div>`).join('');
}

// ── 右侧快速联系 ──
function renderRpContact() {
  const el = document.getElementById('rpContact');
  if (!el) return;
  const P = window.PROFILE;
  const items = [
    { icon: "✉️", val: P.contact.email,   href: `mailto:${P.contact.email}` },
    { icon: "📍", val: P.contact.address, href: null },
    { icon: "🎓", val: "Google Scholar",  href: P.contact.social.googleScholar },
    { icon: "🐙", val: "GitHub",          href: P.contact.social.github },
  ];
  el.innerHTML = items.map(i =>
    i.href
      ? `<a class="rp-contact-item" href="${i.href}" target="_blank">${i.icon} ${i.val}</a>`
      : `<div class="rp-contact-item">${i.icon} ${i.val}</div>`
  ).join('');
}

/* ══════════════════════════════════════════════════════════
   H. 页面路由（SPA）
   ══════════════════════════════════════════════════════════
   【修改说明】
   添加新页面：
     1. 在 pages/ 目录下创建对应的 xxx.js 文件
     2. 在 index.html 中 <script> 引入该文件
     3. 在 xxx.js 中注册：window.PAGE_RENDERERS.xxx = function() { return html; }
     4. 在 index.html 导航中添加对应 data-page="xxx" 链接
   ══════════════════════════════════════════════════════════ */
function initRouter(defaultPage) {
  // 处理顶部导航点击
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) navigateTo(page);

      // 关闭移动端抽屉
      document.getElementById('drawer')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('open');
    });
  });

  // 内容区动态链接（如"查看论文"按钮）
  document.getElementById('contentMain').addEventListener('click', e => {
    const a = e.target.closest('[data-page]');
    if (a) { e.preventDefault(); navigateTo(a.dataset.page); }
  });

  // 汉堡菜单
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('drawer');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  navigateTo(defaultPage);
}

function navigateTo(page) {
  const renderer = window.PAGE_RENDERERS?.[page];
  if (!renderer) { console.warn(`页面 "${page}" 未找到渲染器`); return; }

  // 更新导航激活状态
  document.querySelectorAll('.nav-link, .drawer-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  // 渲染内容
  const main = document.getElementById('contentMain');
  main.innerHTML = renderer();

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
  main.scrollTop = 0;

  // 执行页面后初始化钩子
  const initFn = window[`init${page.charAt(0).toUpperCase() + page.slice(1)}Page`];
  if (typeof initFn === 'function') initFn();

  // 触发揭入动画
  setTimeout(triggerReveal, 80);
}

/* ══════════════════════════════════════════════════════════
   I. Reveal 揭入动画（IntersectionObserver）
   ══════════════════════════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 70);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/** 手动触发当前页面所有 .reveal 元素 */
window.triggerReveal = function() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  els.forEach((el, i) => setTimeout(() => el.classList.add('in'), i * 70));
};

/* ══════════════════════════════════════════════════════════
   J. 数字跳动动画
   ══════════════════════════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const dur    = 1300;
    const start  = performance.now();
    const tick   = now => {
      const t = Math.min((now - start) / dur, 1);
      const v = Math.floor(1 - Math.pow(1 - t, 3)) * target; // easeOutCubic
      el.textContent = Math.floor((1 - Math.pow(1 - t, 3)) * target);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target + (target >= 100 ? '+' : '');
    };
    requestAnimationFrame(tick);
  });
}

/* ══════════════════════════════════════════════════════════
   K. 回到顶部
   ══════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 300);
  });
}

/* ══════════════════════════════════════════════════════════
   L. Toast 提示
   ══════════════════════════════════════════════════════════ */
window.showToast = function(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
};

/* ══════════════════════════════════════════════════════════
   M. 键盘快捷键
   ══════════════════════════════════════════════════════════
   T = 切换主题
   1~6 = 切换对应导航页面
   ══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  const pages = ['home','publications','experience','leadership','honors','contact'];
  if (e.key === 't') document.getElementById('themeBtn').click();
  const n = parseInt(e.key);
  if (n >= 1 && n <= 6) navigateTo(pages[n - 1]);
});
