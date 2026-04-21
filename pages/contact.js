/**
 * ============================================================
 * pages/contact.js — 联系方式页渲染
 * ============================================================
 * 【修改说明】
 * - 联系信息：修改 data/profile.js 中的 contact 字段
 * ============================================================
 */

window.PAGE_RENDERERS = window.PAGE_RENDERERS || {};
window.PAGE_RENDERERS.contact = function() {
  const C = window.PROFILE.contact;

  const contactCards = [
    { icon: "✉️", label: "邮箱",   val: `<a href="mailto:${C.email}">${C.email}</a>` },
    { icon: "📱", label: "电话",   val: C.phone },
    { icon: "📍", label: "地址",   val: C.address },
    { icon: "💬", label: "微信",   val: C.wechat },
    { icon: "🕐", label: "回复时间", val: C.reply },
  ];

  const contactHTML = contactCards.map(c => `
    <div class="contact-card reveal">
      <div class="cc-icon">${c.icon}</div>
      <div class="cc-label">${c.label}</div>
      <div class="cc-val">${c.val}</div>
    </div>
  `).join('');

  const socialLinks = [
    { icon: "🐙", label: "GitHub",        url: C.social.github },
    { icon: "🎓", label: "Google Scholar", url: C.social.googleScholar },
    { icon: "💼", label: "LinkedIn",       url: C.social.linkedin },
    { icon: "🌐", label: "个人主页",        url: C.social.mypage },
  ];

  const socialHTML = socialLinks.map(s => `
    <a class="ql-a reveal" href="${s.url}" target="_blank">
      <span>${s.icon}</span> ${s.label}
    </a>
  `).join('');

  return `
    <div class="page-view">

      <div class="section-head reveal">
        <div class="section-eyebrow">CONTACT</div>
        <h2 class="section-title">联系方式</h2>
        <p class="section-desc">欢迎学术合作、论文讨论或简单打个招呼，通常 24 小时内回复</p>
      </div>

      <!-- 联系卡片 -->
      <div class="contact-grid">${contactHTML}</div>

      <!-- 社交链接 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">🔗</span>
          <h3>社交主页</h3>
        </div>
        <div class="quick-links">${socialHTML}</div>
      </div>

      <!-- 留言表单 -->
      <div class="card reveal">
        <div class="card-header">
          <span class="card-icon">📬</span>
          <h3>发送留言</h3>
        </div>
        <form class="contact-form" id="contactForm" onsubmit="window.submitForm(event)">
          <div class="form-row">
            <div class="form-group">
              <label>姓名 *</label>
              <input type="text" placeholder="您的姓名" required />
            </div>
            <div class="form-group">
              <label>邮箱 *</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div class="form-group">
            <label>主题</label>
            <select>
              <option>学术合作</option>
              <option>论文讨论</option>
              <option>科研竞赛经验交流</option>
              <option>其他</option>
            </select>
          </div>
          <div class="form-group">
            <label>消息内容 *</label>
            <textarea rows="5" placeholder="请输入您的消息…" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="formSubmitBtn">发送消息 →</button>
          <div class="form-success" id="formSuccess">✅ 消息已发送！我会尽快回复您。</div>
        </form>
      </div>

    </div>
  `;
};

/**
 * 表单提交模拟（实际部署可接入 Formspree / EmailJS 等服务）
 * 修改：将 fetch 地址改为真实后端接口
 */
window.submitForm = function(e) {
  e.preventDefault();
  const btn = document.getElementById('formSubmitBtn');
  const succ = document.getElementById('formSuccess');
  btn.textContent = '发送中…'; btn.disabled = true;
  setTimeout(() => {
    succ.classList.add('show');
    btn.textContent = '✅ 已发送';
    e.target.reset();
    setTimeout(() => {
      succ.classList.remove('show');
      btn.textContent = '发送消息 →'; btn.disabled = false;
    }, 3500);
  }, 1200);
};
