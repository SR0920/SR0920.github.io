/* ============================================================
   ACADEMIC HOMEPAGE – script.js
   ============================================================ */

// ===== Loading Screen =====
(function () {
  const screen = document.getElementById('loadingScreen');
  const bar = document.getElementById('loadingBar');
  const txt = document.getElementById('loadingText');
  const steps = ['加载资源...', '初始化界面...', '渲染组件...', '完成！'];
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 30 + 15;
    if (p > 100) p = 100;
    bar.style.width = p + '%';
    txt.textContent = steps[Math.floor((p / 100) * (steps.length - 1))];
    if (p === 100) {
      clearInterval(iv);
      setTimeout(() => {
        screen.classList.add('done');
        initAll();
      }, 400);
    }
  }, 200);
})();

function initAll() {
  initCursor();
  initCanvas();
  initNav();
  initSections();
  initCalendar();
  initVisitorCounter();
  initPublicationFilter();
  initReveal();
  initStatCounters();
  initSkillBars();
  initBackToTop();
  initTheme();
  initLang();
}

// ===== Custom Cursor =====
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
  });
  requestAnimationFrame(function loop() {
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  });
}

// ===== Canvas Starfield =====
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], connections = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const starColor = isDark ? '180,210,255' : '50,100,180';

    // Draw connections
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(${starColor},${(1 - dist / 120) * 0.08})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw stars
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${starColor},${s.alpha})`;
      ctx.fill();

      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;
    });

    requestAnimationFrame(draw);
  }

  resize();
  createStars(window.innerWidth > 768 ? 100 : 50);
  draw();
  window.addEventListener('resize', () => { resize(); createStars(window.innerWidth > 768 ? 100 : 50); });
}

// ===== Navigation =====
function initNav() {
  const links = document.querySelectorAll('.nav-link');
  const mobLinks = document.querySelectorAll('.mob-link');
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function goToSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      document.querySelector('.content-area').scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    links.forEach(l => {
      l.classList.toggle('active', l.dataset.section === id);
    });

    // trigger reveal for new section
    setTimeout(triggerReveal, 100);
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      goToSection(link.dataset.section);
    });
  });

  mobLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      goToSection(id);
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Smooth hash link support
  document.querySelectorAll('[href^="#"]').forEach(a => {
    if (a.classList.contains('nav-link') || a.classList.contains('mob-link')) return;
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (document.getElementById(id)) {
        e.preventDefault();
        goToSection(id);
        links.forEach(l => { if (l.dataset.section === id) l.classList.add('active'); });
      }
    });
  });
}

function initSections() {
  // already first section active via HTML
}

// ===== Calendar =====
let calDate = new Date();

function initCalendar() {
  renderCalendar();
  updateTodayLabel();
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const header = document.getElementById('calMonth');
  if (!grid) return;

  const year = calDate.getFullYear();
  const month = calDate.getMonth();

  const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  header.textContent = `${year}年 ${months[month]}`;

  const days = ['日','一','二','三','四','五','六'];
  const today = new Date();

  grid.innerHTML = '';

  // Header row
  days.forEach(d => {
    const el = document.createElement('div');
    el.className = 'cal-header-day';
    el.textContent = d;
    grid.appendChild(el);
  });

  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();

  for (let i = startDay - 1; i >= 0; i--) {
    const el = document.createElement('div');
    el.className = 'cal-day cal-day-other';
    el.textContent = prevDays - i;
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;
    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      el.classList.add('cal-day-today');
    }
    grid.appendChild(el);
  }

  const remaining = 42 - startDay - daysInMonth;
  for (let d = 1; d <= remaining; d++) {
    const el = document.createElement('div');
    el.className = 'cal-day cal-day-other';
    el.textContent = d;
    grid.appendChild(el);
  }
}

function changeMonth(dir) {
  calDate = new Date(calDate.getFullYear(), calDate.getMonth() + dir, 1);
  renderCalendar();
}

function updateTodayLabel() {
  const el = document.getElementById('todayLabel');
  if (!el) return;
  const days = ['周日','周一','周二','周三','周四','周五','周六'];
  const now = new Date();
  el.textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${days[now.getDay()]}`;
}

// ===== Visitor Counter =====
function initVisitorCounter() {
  const el = document.getElementById('vcDigits');
  if (!el) return;
  let count = parseInt(localStorage.getItem('vc_count') || '0') + 1;
  if (count > 999999) count = 1;
  localStorage.setItem('vc_count', count);
  const str = String(count).padStart(6, '0');
  el.innerHTML = '';
  str.split('').forEach(d => {
    const span = document.createElement('div');
    span.className = 'vc-digit';
    span.textContent = d;
    el.appendChild(span);
  });
}

// ===== Publication Filter =====
function initPublicationFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pub-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const tags = (card.dataset.tags || '').split(' ');
          card.classList.toggle('hidden', !tags.includes(filter));
        }
      });
    });
  });
}

// ===== Reveal on Scroll =====
function triggerReveal() {
  const reveals = document.querySelectorAll('.section.active .reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 80);
  });
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  // Also trigger for initial section
  triggerReveal();
}

// ===== Stat Counters =====
function initStatCounters() {
  const els = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.count);
        animateCount(e.target, target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => observer.observe(el));
}

function animateCount(el, target) {
  const duration = 1200;
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(eased * target);
    if (t < 1) requestAnimationFrame(update);
    else el.textContent = target + (target > 100 ? '+' : '');
  };
  requestAnimationFrame(update);
}

// ===== Skill Bars =====
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w + '%';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
}

// ===== Back to Top =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ===== Theme Toggle =====
function initTheme() {
  const btn = document.getElementById('themeBtn');
  const icon = btn.querySelector('.theme-icon');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  icon.textContent = saved === 'dark' ? '☀' : '🌙';

  btn.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    icon.textContent = next === 'dark' ? '☀' : '🌙';
    showToast(next === 'dark' ? '已切换至深色模式' : '已切换至浅色模式');
  });
}

// ===== Language Toggle =====
const i18n = {
  zh: {
    name: '张明远',
    subtitle: '人工智能博士生 · 机器学习研究员',
    location: '中国 · 北京',
    affiliation: '清华大学计算机系',
    lab: '智能信息处理实验室',
    education: '教育背景',
    interests: '研究兴趣',
    skills: '技术技能',
    about: '关于我',
    aboutText: '专注于深度学习、计算机视觉和自然语言处理研究。目前在顶级AI实验室攻读博士学位，致力于推动人工智能技术的边界。近期研究聚焦于 Transformer 架构优化与多模态大语言模型的高效训练方法。',
    news: '最新动态',
    researchDir: '研究方向',
    pubTitle: '论文成果',
  },
  en: {
    name: 'Zhang Mingyuan',
    subtitle: 'AI PhD Student · Machine Learning Researcher',
    location: 'Beijing, China',
    affiliation: 'Dept. of Computer Science, Tsinghua Univ.',
    lab: 'Intelligent Information Processing Lab',
    education: 'Education',
    interests: 'Research Interests',
    skills: 'Technical Skills',
    about: 'About Me',
    aboutText: 'Focused on deep learning, computer vision, and natural language processing. Currently pursuing a PhD at a top AI lab, pushing the frontiers of artificial intelligence. Recent work concentrates on efficient Transformer architectures and multimodal large language models.',
    news: 'Latest News',
    researchDir: 'Research Areas',
    pubTitle: 'Publications',
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function initLang() {
  const btn = document.getElementById('langBtn');
  applyLang(currentLang);
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    applyLang(currentLang);
    btn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    showToast(currentLang === 'zh' ? '已切换至中文' : 'Switched to English');
  });
  btn.textContent = currentLang === 'zh' ? 'EN' : '中文';
}

function applyLang(lang) {
  const map = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (map[key]) el.textContent = map[key];
  });
}

// ===== BibTeX Toggle =====
function toggleBibtex(el) {
  const bib = el.nextElementSibling;
  bib.classList.toggle('open');
  el.textContent = bib.classList.contains('open') ? '隐藏 BibTeX ▾' : '查看 BibTeX ▸';
}

// ===== News Toggle =====
function toggleMoreNews() {
  const hidden = document.querySelectorAll('.news-hidden');
  const btn = document.getElementById('newsToggleBtn');
  const isOpen = btn.textContent.includes('收起');
  hidden.forEach(el => el.classList.toggle('news-hidden', isOpen));
  if (isOpen) {
    hidden.forEach(el => el.classList.add('news-hidden'));
    btn.textContent = '展开更多动态 ↓';
  } else {
    document.querySelectorAll('#moreNews, #moreNews ~ .news-item').forEach(el => {
      el.classList.remove('news-hidden');
    });
    btn.textContent = '收起 ↑';
  }
}

// ===== Contact Form =====
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '发送中...';
  btn.disabled = true;
  setTimeout(() => {
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    btn.textContent = '✅ 已发送';
    showToast('消息已发送！');
    e.target.reset();
    setTimeout(() => {
      success.classList.remove('show');
      btn.textContent = '发送消息 →';
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Keyboard shortcuts =====
document.addEventListener('keydown', e => {
  if (e.key === 't' && !e.ctrlKey && !e.metaKey && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
    document.getElementById('themeBtn').click();
  }
});

// ===== Clock in nav (optional) =====
(function initClock() {
  // Subtle clock display could be added here
})();
