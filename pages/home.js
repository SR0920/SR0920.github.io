/**
 * ============================================================
 * pages/home.js — 主页内容渲染
 * ============================================================
 * 【修改说明】
 * - 个人简介文字：修改 data/profile.js 中的 summary 字段
 * - 亮点条目：修改 data/profile.js 中的 news 数组
 * - 研究方向卡片：修改本文件中 RESEARCH_CARDS 数组
 * ============================================================
 */

/**
 * 研究方向卡片配置
 * 修改：增删下方数组中的对象，字段：icon emoji 图标, title 标题, desc 描述
 */
const RESEARCH_CARDS = [
  { icon: "🧠", title: "医学图像分割",    desc: "CNN-Transformer 混合架构，腹部CT/MRI器官与肿瘤精准分割" },
  { icon: "👁️", title: "计算机视觉",      desc: "目标检测、图像分割、视觉-语言跨模态理解" },
  { icon: "⚡", title: "轻量化深度学习",   desc: "模型压缩、知识蒸馏、高效 Transformer 架构设计" },
  { icon: "🌐", title: "多模态大模型",     desc: "多模态感知与推理，MCP多专家协同架构，医疗AI Agent" },
  { icon: "🔬", title: "医学AI应用",      desc: "肝脏、心脏等器官智能诊断，与三甲医院深度合作" },
  { icon: "✨", title: "边缘检测与分析",   desc: "图像边缘检测综述，被引200+次，SCI-Q2期刊" },
];

/**
 * 亮点条目（"关于我"卡片下方）
 * 修改：直接增删 HIGHLIGHTS 数组
 */
const HIGHLIGHTS = [
  { icon: "🏆", title: "ICLR / IJCAI / TNNLS 等顶级成果", sub: "CCF-A × 2，SCI Q1 × 2，共 6 篇学术论文" },
  { icon: "🎖️", title: "研究生电子设计竞赛全国一等奖 & 最佳论文奖", sub: "国家级奖项 3 项，省级奖项 6 项，校级奖项 15 项" },
  { icon: "📡", title: "央视新闻联播报道（2025.04）", sub: "接见国家主席习近平调研上海人工智能发展" },
  { icon: "📝", title: "IEEE JBHI、Neurocomputing、Neural Networks等期刊审稿人或客座副主编", sub: "兼任 Frontiers in Signal Processing 期刊客座副主编" },
];

/**
 * renderHome() — 渲染主页所有内容，由 script.js 路由调用
 */
window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.home = function() {
  const P = window.PROFILE;
  const news = P.news;

  // 新闻类型 → 标签样式映射
  const typeClass = {
    "论文": "tag-red",
    "奖项": "tag-gold",
    "会议": "tag-blue",
    "项目": "tag-green",
    "教育": "tag-purple",
    "其他": "tag-blue",
  };

  // ── 新闻列表 HTML（前5条可见，其余隐藏）──
  const newsRows = news.map((n, i) => `
    <div class="news-row ${i === 0 ? 'news-featured' : ''} ${i >= 5 ? 'news-hidden' : ''}">
      <span class="news-date">${n.date}</span>
      <span class="tag ${typeClass[n.type] || 'tag-blue'}">${n.type}</span>
      <span class="news-content">${n.content}</span>
    </div>
  `).join('');

  // ── 研究方向卡片 HTML ──
  const rcHTML = RESEARCH_CARDS.map(r => `
    <div class="rc reveal">
      <div class="rc-icon">${r.icon}</div>
      <div class="rc-title">${r.title}</div>
      <div class="rc-desc">${r.desc}</div>
    </div>
  `).join('');

  // ── 亮点条目 HTML ──
  const hlHTML = HIGHLIGHTS.map(h => `
    <div class="hl-item reveal">
      <span class="hl-icon">${h.icon}</span>
      <div>
        <div class="hl-title">${h.title}</div>
        <div class="hl-sub">${h.sub}</div>
      </div>
    </div>
  `).join('');

  // ── 组装完整主页 HTML ──
  return `
    <div class="page-view">

      <!-- 英雄区 -->
      <div class="hero reveal">
        <div class="hero-eyebrow">ACADEMIC HOMEPAGE · 个人学术主页</div>
        <h1 class="hero-name">${P.basic.nameCn} · ${P.basic.nameEn}</h1>
        <p class="hero-sub">${P.basic.researchCn}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#" data-page="publications">📄 查看论文</a>
          <a class="btn btn-ghost" href="${P.basic.cvUrl}" download>⬇ 下载简历</a>
          <a class="btn btn-ghost" href="#" data-page="contact">✉️ 联系我</a>
        </div>
      </div>

      <!-- 关于我 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">⚡</span>
          <h3>关于我</h3>
        </div>
        <p class="about-p">${P.summary}</p>
        <div class="highlights" style="margin-top:1rem">${hlHTML}</div>
      </div>

      <!-- 最新动态 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">📰</span>
          <h3>最新动态</h3>
          <span class="badge badge-blue" style="margin-left:auto">${news.length} 条</span>
        </div>
        <div class="news-list" id="newsList">${newsRows}</div>
        ${news.length > 5 ? `<button class="news-more-btn" id="newMoreBtn" onclick="window.toggleNews()">展开全部动态 ↓</button>` : ''}
      </div>

      <!-- 研究方向 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">🔭</span>
          <h3>研究方向</h3>
        </div>
        <div class="research-grid">${rcHTML}</div>
      </div>

    </div>
  `;
};

/**
 * 展开/收起更多动态
 * 由 HTML 中 onclick="window.toggleNews()" 调用
 */
window.toggleNews = function() {
  const btn = document.getElementById('newMoreBtn');
  const hidden = document.querySelectorAll('#newsList .news-hidden');
  const isOpen = btn.textContent.includes('收起');

  if (isOpen) {
    // 收起
    hidden.forEach(el => el.classList.add('news-hidden'));
    btn.textContent = '展开全部动态 ↓';
  } else {
    // 展开
    document.querySelectorAll('#newsList .news-row').forEach(el => el.classList.remove('news-hidden'));
    btn.textContent = '收起 ↑';
  }
};
