/**
 * ============================================================
 * pages/honors.js — 荣誉奖项页渲染
 * ============================================================
 * 【修改说明】
 * - 增删荣誉：修改 data/profile.js 中的 honors 数组
 * - 字段 type："national"=国家级 | "provincial"=省级
 *              "school"=校级    | "personal"=个人荣誉称号
 * - 每个分类默认显示前 INITIAL_SHOW 条，剩余点击"加载更多"
 * ============================================================
 */

/** 默认每类显示条数（其余需点击展开） */
const INITIAL_SHOW = 6;

/** type → 显示名 & 颜色 */
const TYPE_META = {
  national:   { label: "🏅 国家级",      color: "badge-red"    },
  provincial: { label: "🥇 省级",        color: "badge-gold"   },
  school:     { label: "🏫 校级",        color: "badge-blue"   },
  personal:   { label: "🎖️ 个人荣誉称号", color: "badge-green"  },
};

/** 渲染单个荣誉条目 */
function renderHonorItem(h, idx, showCount) {
  const hidden = idx >= showCount ? 'hon-hidden' : '';
  return `
    <div class="honor-item ${hidden}" data-type="${h.type}">
      <span class="honor-date">${h.date}</span>
      <span class="badge ${TYPE_META[h.type]?.color || ''}">${TYPE_META[h.type]?.label.replace(/🏅|🥇|🏫|🎖️/g,'').trim() || h.type}</span>
      <div>
        <div class="honor-title-text">${h.title}</div>
        ${h.detail ? `<div class="honor-detail">${h.detail}</div>` : ''}
      </div>
    </div>
  `;
}

window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.honors = function() {
  const P = window.PROFILE;
  const honors = P.honors;

  // 按类型分组
  const groups = { national: [], provincial: [], school: [], personal: [] };
  honors.forEach(h => { if (groups[h.type]) groups[h.type].push(h); });

  // 分类标签按钮
  const tabs = [
    { key: 'all', label: '全部', count: honors.length },
    ...Object.entries(groups).map(([k, arr]) => ({
      key: k, label: TYPE_META[k]?.label || k, count: arr.length
    }))
  ];

  const tabsHTML = tabs.map(t => `
    <button class="honor-tab ${t.key==='all'?'active':''}" data-htab="${t.key}">
      ${t.label} <span style="opacity:.6;font-size:.65rem">(${t.count})</span>
    </button>
  `).join('');

  // 全部条目（用于"全部"视图）
  const allHTML = honors.map((h, i) => renderHonorItem(h, i, INITIAL_SHOW)).join('');

  // 统计数字
  const natCount = groups.national.length;
  const proCount = groups.provincial.length;
  const schCount = groups.school.length;
  const perCount = groups.personal.length;

  return `
    <div class="page-view">

      <div class="section-head reveal">
        <div class="section-eyebrow">HONORS & AWARDS</div>
        <h2 class="section-title">荣誉奖项</h2>
        <p class="section-desc">国家级 ${natCount} 项 · 省级 ${proCount} 项 · 校级 ${schCount} 项 · 个人荣誉 ${perCount} 项</p>
      </div>

      <!-- 汇总数字 -->
      <div class="sidebar-stats reveal" style="grid-template-columns:repeat(4,1fr);margin-bottom:1.5rem">
        <div class="stat-box"><span class="stat-n" style="color:var(--red)">${natCount}</span><span class="stat-l">国家级</span></div>
        <div class="stat-box"><span class="stat-n" style="color:var(--gold)">${proCount}</span><span class="stat-l">省级</span></div>
        <div class="stat-box"><span class="stat-n" style="color:var(--accent)">${schCount}</span><span class="stat-l">校级</span></div>
        <div class="stat-box"><span class="stat-n" style="color:var(--green)">${perCount}</span><span class="stat-l">个人荣誉</span></div>
      </div>

      <!-- 分类标签 -->
      <div class="honor-tabs reveal" id="honorTabs">${tabsHTML}</div>

      <!-- 荣誉列表 -->
      <div class="honor-list" id="honorList">${allHTML}</div>

      <!-- 展开更多按钮（超过 INITIAL_SHOW 条时显示） -->
      ${honors.length > INITIAL_SHOW
        ? `<button class="load-more-btn" id="honMoreBtn" onclick="window.loadMoreHonors()">展开全部 ${honors.length} 条荣誉 ↓</button>`
        : ''}

    </div>
  `;
};

/**
 * initHonorsPage() — 初始化分类标签交互（页面渲染后调用）
 */
window.initHonorsPage = function() {
  const tabs = document.getElementById('honorTabs');
  if (!tabs) return;

  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.honor-tab');
    if (!btn) return;

    tabs.querySelectorAll('.honor-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const key = btn.dataset.htab;
    const P = window.PROFILE;
    const list = document.getElementById('honorList');
    const moreBtn = document.getElementById('honMoreBtn');

    // 重新渲染对应分类
    let filtered = key === 'all' ? P.honors : P.honors.filter(h => h.type === key);
    list.innerHTML = filtered.map((h, i) => renderHonorItem(h, i, INITIAL_SHOW)).join('');

    // 控制"加载更多"按钮
    if (moreBtn) {
      moreBtn.textContent = `展开全部 ${filtered.length} 条荣誉 ↓`;
      moreBtn.dataset.total = filtered.length;
      moreBtn.style.display = filtered.length > INITIAL_SHOW ? 'block' : 'none';
    }

    // 重新初始化揭入动画
    if (window.triggerReveal) window.triggerReveal();
  });
};

/**
 * 展开全部荣誉
 */
window.loadMoreHonors = function() {
  const btn = document.getElementById('honMoreBtn');
  const items = document.querySelectorAll('#honorList .hon-hidden');
  items.forEach(el => el.classList.remove('hon-hidden'));
  if (btn) btn.style.display = 'none';
};
