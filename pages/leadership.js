/**
 * ============================================================
 * pages/leadership.js — 学生干部经历页渲染
 * ============================================================
 * 【修改说明】
 * - 增删经历：修改 data/profile.js 中的 leadership 数组
 * ============================================================
 */

window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.leadership = function() {
  const P = window.PROFILE;

  const cards = P.leadership.map(item => {
    const hlHTML = item.highlights.map(h =>
      `<div class="leader-hl">${h}</div>`
    ).join('');

    return `
      <div class="leader-card reveal">
        <div class="leader-period">${item.period}</div>
        <div class="leader-title">${item.title}</div>
        <div class="leader-org">📍 ${item.org}</div>
        <div class="leader-desc">${item.desc}</div>
        ${hlHTML ? `<div class="leader-highlights">${hlHTML}</div>` : ''}
      </div>
    `;
  }).join('');

  // 综合荣誉称号（来自 profile.basic 侧边显示的荣誉标签列表）
  const honorTags = [
    "先进个人", "优秀团干", "优秀研究生党员标兵", "优秀研究生干部",
    "优秀共产党员", "优秀党务工作者", "优秀团员", "优秀学生干部", "三好学生"
  ].map(t => `<span class="tag tag-blue">${t}</span>`).join('');

  return `
    <div class="page-view">

      <div class="section-head reveal">
        <div class="section-eyebrow">STUDENT LEADERSHIP</div>
        <h2 class="section-title">学生干部经历</h2>
        <p class="section-desc">先后担任党支部书记、大班长、辅导员助理等职务，获个人荣誉十余项</p>
      </div>

      <!-- 荣誉称号汇总 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">🎖️</span>
          <h3>个人荣誉称号</h3>
        </div>
        <div class="interest-tags">${honorTags}</div>
        <p style="margin-top:.85rem;font-size:.84rem;color:var(--txt-3)">
          个人事迹在<strong style="color:var(--txt-2)">学校官微头条</strong>宣传报道；2022年被推选为中共陕西科技大学第三次代表大会<strong style="color:var(--txt-2)">全校12名学生代表之一（学院唯一）</strong>。
        </p>
      </div>

      <!-- 经历卡片网格 -->
      <div class="leader-grid">${cards}</div>

    </div>
  `;
};
