/**
 * ============================================================
 * pages/experience.js — 科研经历页渲染
 * ============================================================
 * 【修改说明】
 * - 增删项目经历：修改 data/profile.js 中的 experiences 数组
 * - 图标字符：修改 logoChar 映射对象
 * ============================================================
 */

/** 项目 → 图标字母映射（可按需增加） */
const EXP_LOGO = {
  "心脏多模态": { char: "❤", color: "rgba(239,68,68,.15)", txtColor: "var(--red)" },
  "电磁屏蔽":   { char: "⚡", color: "rgba(245,166,35,.15)", txtColor: "var(--gold)" },
  "肝脏":       { char: "🔬", color: "rgba(16,185,129,.15)", txtColor: "var(--green)" },
};

function getExpLogo(title) {
  for (const [k, v] of Object.entries(EXP_LOGO)) {
    if (title.includes(k)) return v;
  }
  return { char: "📁", color: "rgba(61,155,255,.15)", txtColor: "var(--accent)" };
}

window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.experience = function() {
  const P = window.PROFILE;

  // ── 项目时间轴 ──
  const expItems = P.experiences.map(exp => {
    const logo = getExpLogo(exp.org);
    const tagsHTML = exp.tags.map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="exp-item reveal">
        <div class="exp-dot ${exp.active ? 'active' : ''}"></div>
        <div class="exp-card">
          <div class="exp-head">
            <div class="exp-logo" style="background:${logo.color};color:${logo.txtColor}">${logo.char}</div>
            <div>
              <div class="exp-org-title">${exp.title}</div>
              <div class="exp-org-name">📌 ${exp.org}</div>
              ${exp.partner ? `<div class="exp-partner">🏥 ${exp.partner}</div>` : ''}
              <div class="exp-period">${exp.period}</div>
            </div>
            ${exp.active ? `<span class="badge badge-green" style="margin-left:auto;align-self:flex-start">进行中</span>` : ''}
          </div>
          <div class="exp-desc">${exp.desc}</div>
          <div class="exp-tags">${tagsHTML}</div>
        </div>
      </div>
    `;
  }).join('');

  // ── 参与项目统计 ──
  const projHTML = P.academicService.projects.map(p => `
    <div class="stat-box" style="display:flex;flex-direction:column;align-items:center;justify-content:center">
      <span class="stat-n">${p.count}</span>
      <span class="stat-l">${p.name}</span>
    </div>
  `).join('');

  return `
    <div class="page-view">

      <div class="section-head reveal">
        <div class="section-eyebrow">RESEARCH EXPERIENCE</div>
        <h2 class="section-title">科研经历</h2>
        <p class="section-desc">参与横向课题 2 项，国家自然科学基金项目 3 项，省自然科学基金项目 2 项</p>
      </div>

      <!-- 项目统计 -->
      <div class="sidebar-stats reveal" style="margin-bottom:1.5rem;grid-template-columns:repeat(3,1fr)">
        ${projHTML}
      </div>

      <!-- 时间轴 -->
      <div class="exp-timeline">${expItems}</div>

    </div>
  `;
};
