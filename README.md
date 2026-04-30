# 孙瑞个人学术主页

**复旦大学 & 上海创智学院博士研究生 · 计算机视觉 · 深度学习**

---

## 📁 文件架构

```
sunrui-homepage/
├── index.html          ← 主框架（导航、侧边栏、布局）
├── style.css           ← 全局样式（主题、动画、响应式）
├── script.js           ← 主逻辑（路由、动画、渲染）
├── data/
│   └── profile.js      ← ⭐ 所有个人信息在此修改
└── pages/
    ├── home.js         ← 主页内容
    ├── publications.js ← 论文成果
    ├── experience.js   ← 科研经历
    ├── leadership.js   ← 学生干部
    ├── honors.js       ← 荣誉奖项
    └── contact.js      ← 联系方式
```

---

## ✏️ 快速修改指南

### 修改个人信息
> **只需编辑 `data/profile.js`，无需碰其他文件**

| 要改的内容 | 对应字段 |
|---|---|
| 姓名/邮箱/电话 | `basic.nameCn / basic.email / basic.phone` |
| 头像照片 | `basic.avatarUrl`（改为 `"photo.jpg"` 并上传照片） |
| 个人简介 | `summary` |
| 最新动态 | `news` 数组 |
| 教育背景 | `education` 数组 |
| 论文 | `publications` 数组 |
| 专利 | `patents` 数组 |
| 科研经历 | `experiences` 数组 |
| 学生干部 | `leadership` 数组 |
| 荣誉奖项 | `honors` 数组 |
| 期刊审稿人 | `academicService.reviewer` 数组 |

### 增加新论文
在 `data/profile.js` 的 `publications` 数组中添加对象：
```js
{
  id: "p7",                    // 唯一 ID（自增）
  authors: "<strong>孙瑞</strong>, ...",
  title:   "论文标题",
  venue:   "会议/期刊全称",
  venueShort: "CVPR",         // 用于筛选
  year:    2025,
  type:    "conference",      // conference / journal / preprint
  level:   "CCF-A",           // CCF-A / SCI-Q1 / ""
  if_:     "",                // 影响因子（可选）
  citations: 0,
  isFirst: true,
  links:   { paper: "#", code: "#" },
  bibtex:  `@inproceedings{...}`,
}
```

### 增加新荣誉
在 `honors` 数组中添加：
```js
{ date: "2025-10", type: "national", title: "奖项名称", detail: "颁奖机构" }
// type 取值：national / provincial / school / personal
```

---

---

## ⌨️ 键盘快捷键

| 快捷键 | 功能 |
|---|---|
| `T` | 切换深色/浅色主题 |
| `1` | 跳转主页 |
| `2` | 跳转论文成果 |
| `3` | 跳转科研经历 |
| `4` | 跳转学生干部 |
| `5` | 跳转荣誉奖项 |
| `6` | 跳转联系方式 |

---

## 🎨 主题色修改

编辑 `style.css` 第一个 `:root` 块中的变量：
```css
--accent: #3d9bff;  /* 主蓝色 */
--gold:   #f5a623;  /* 金色 */
--green:  #10b981;  /* 绿色 */
```

---

## ➕ 增加新页面

1. 在 `pages/` 下新建 `newpage.js`
2. 在文件中注册：`window.PAGE_RENDERERS.newpage = function() { return '<div>...</div>'; };`
3. 在 `index.html` 中：
   - 导航栏添加 `<li><a class="nav-link" data-page="newpage">新页面</a></li>`
   - `</body>` 前添加 `<script src="pages/newpage.js"></script>`
