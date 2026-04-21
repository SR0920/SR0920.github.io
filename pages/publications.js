/**
 * ============================================================
 * pages/publications.js — 论文成果页渲染
 * ============================================================
 * 【修改说明】
 * - 增删论文：修改 data/profile.js 中的 publications 数组
 * - 增删专利：修改 data/profile.js 中的 patents 数组
 * - 筛选标签：修改下方 FILTERS 数组（label=显示名，key=筛选关键词）
 * ============================================================
 */

/**
 * 筛选标签配置
 * key 需与 publications 中的 venueShort 或 year 或 level 匹配
 * 修改：增删此数组
 */
const PUB_FILTERS = [
  { label: "全部",       key: "all"    },
  { label: "本人一作",   key: "first"  },
  { label: "CCF-A",      key: "CCF-A"  },
  { label: "SCI Q1",     key: "SCI-Q1" },
  { label: "2025",       key: "2025"   },
  { label: "2024",       key: "2024"   },
  { label: "2023",       key: "2023"   },
  { label: "2022",       key: "2022"   },
  { label: "在投",       key: "preprint"},
];

/** level → 顶部色条 CSS 类 */
function levelBarClass(lvl) {
  if (lvl === 'CCF-A')  return 'pub-level-ccfa';
  if (lvl === 'SCI-Q1') return 'pub-level-sci-q1';
  return 'pub-level-default';
}

/** 渲染单篇论文卡片 */
function renderPubCard(pub) {
  // 链接按钮
  const linkMap = { paper: "📄 论文", code: "💻 代码", project: "🌐 项目主页", dataset: "📊 数据集", video: "🎬 视频", poster: "📋 海报" };
  const linksHTML = Object.entries(pub.links || {}).map(([k, url]) =>
    `<a class="pub-link" href="${url}" target="_blank" rel="noopener">${linkMap[k] || k}</a>`
  ).join('');

  // 徽章
  const badges = [];
  if (pub.level)   badges.push(`<span class="badge badge-${pub.level==='CCF-A'?'red':'blue'}">${pub.level}</span>`);
  if (pub.if_)     badges.push(`<span class="badge badge-green">IF=${pub.if_}</span>`);
  if (pub.isFirst) badges.push(`<span class="badge badge-gold">本人一作</span>`);
  if (pub.type === 'preprint') badges.push(`<span class="badge" style="background:rgba(167,139,250,.14);color:#a78bfa">在投</span>`);
  if (pub.award)   badges.push(`<span class="badge badge-gold">🏆 ${pub.award}</span>`);

  // 引用数
  const citeHTML = pub.citations > 0
    ? `<span class="pub-cite">被引 ${pub.citations}+</span>`
    : '';

  // BibTeX
  const bibHTML = pub.bibtex ? `
    <button class="pub-bibtex-btn" onclick="toggleBibtex('bib-${pub.id}')">查看 BibTeX ▸</button>
    <div class="pub-bibtex-block" id="bib-${pub.id}">
      <pre>${pub.bibtex.trim()}</pre>
    </div>
  ` : '';

  // data-tags 用于 JS 筛选（包含 venueShort + year + level + first/preprint）
  const tags = [
    pub.venueShort, String(pub.year), pub.level || '',
    pub.isFirst ? 'first' : '',
    pub.type === 'preprint' ? 'preprint' : '',
  ].filter(Boolean).join(' ').toLowerCase();

  return `
    <div class="pub-card reveal" data-tags="${tags}">
      <div class="pub-level-bar ${levelBarClass(pub.level)}"></div>
      <div class="pub-badges">${badges.join('')}</div>
      <div class="pub-title"><a href="${Object.values(pub.links||{})[0]||'#'}" target="_blank">${pub.title}</a></div>
      <div class="pub-authors">${pub.authors}</div>
      <div class="pub-venue">${pub.venue}</div>
      <div class="pub-links">
        ${linksHTML}
        ${citeHTML}
      </div>
      ${bibHTML}
    </div>
  `;
}

/** 渲染专利卡片 */
function renderPatentItem(pat) {
  const statusClass = pat.status === '已授权' ? 'badge-green' : 'badge-blue';
  return `
    <div class="patent-item reveal">
      <div>
        <div class="patent-title">${pat.title}</div>
        <div class="patent-authors">${pat.authors}</div>
      </div>
      <div class="patent-info">
        <div class="patent-num">${pat.number}</div>
        <div style="margin-top:.3rem"><span class="badge ${statusClass}">${pat.status}</span></div>
        <div style="font-size:.68rem;color:var(--txt-3);margin-top:.25rem">${pat.date}</div>
      </div>
    </div>
  `;
}

/**
 * renderPublications() — 由 script.js 路由调用
 */
window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.publications = function() {
  const P = window.PROFILE;

  const filterBtns = PUB_FILTERS.map(f =>
    `<button class="pf-btn ${f.key==='all'?'active':''}" data-filter="${f.key}">${f.label}</button>`
  ).join('');

  const pubCards = P.publications.map(renderPubCard).join('');
  const patentItems = P.patents.map(renderPatentItem).join('');

  // 学术服务（会议报告）
  const talksHTML = P.academicService.talks.map(t => `
    <div class="hl-item reveal">
      <span class="hl-icon">🎤</span>
      <div>
        <div class="hl-title">${t.event}</div>
        <div class="hl-sub">${t.topic}${t.award ? ' · <span style="color:var(--gold)">'+t.award+'</span>' : ''}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="page-view">

      <div class="section-head reveal">
        <div class="section-eyebrow">PUBLICATIONS & PATENTS</div>
        <h2 class="section-title">论文成果</h2>
        <p class="section-desc">已发表顶级会议/期刊论文 ${P.publications.length} 篇，公开发明专利 ${P.patents.length} 项</p>
      </div>

      <!-- 筛选标签 -->
      <div class="pub-filter reveal" id="pubFilter">${filterBtns}</div>

      <!-- 论文列表 -->
      <div class="pub-list" id="pubList">${pubCards}</div>

      <!-- 发明专利 -->
      <div class="card reveal" style="margin-top:2rem">
        <div class="card-header">
          <span class="card-icon">🔏</span>
          <h3>发明专利</h3>
          <span class="badge badge-blue" style="margin-left:auto">${P.patents.length} 项</span>
        </div>
        <div class="patent-list">${patentItems}</div>
      </div>

      <!-- 国际会议报告 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">🎤</span>
          <h3>国际会议报告</h3>
        </div>
        <div class="highlights">${talksHTML}</div>
      </div>

    </div>
  `;
};

/**
 * initPublicationsPage() — 初始化筛选器交互（页面渲染后调用）
 */
window.initPublicationsPage = function() {
  const filterEl = document.getElementById('pubFilter');
  if (!filterEl) return;

  filterEl.addEventListener('click', e => {
    const btn = e.target.closest('.pf-btn');
    if (!btn) return;

    // 更新激活状态
    filterEl.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter.toLowerCase();
    document.querySelectorAll('#pubList .pub-card').forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      if (f === 'all') {
        card.classList.remove('pub-hidden');
      } else {
        card.classList.toggle('pub-hidden', !tags.includes(f));
      }
    });
  });
};

/**
 * toggleBibtex(id) — 展开/收起 BibTeX 块
 */
window.toggleBibtex = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
  const btn = el.previousElementSibling;
  if (btn) btn.textContent = el.classList.contains('open') ? '隐藏 BibTeX ▾' : '查看 BibTeX ▸';
};
