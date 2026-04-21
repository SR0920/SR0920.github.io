/**
 * ============================================================
 * data/profile.js — 孙瑞个人学术主页 · 数据配置文件
 * ============================================================
 * 【修改说明】
 * 本文件是网站的"数据中心"，所有个人信息均在此处集中管理。
 * 修改步骤：
 *   1. 找到对应的数据字段
 *   2. 直接修改对应的字符串/数组内容
 *   3. 保存后刷新浏览器即可生效
 * 不需要修改任何 HTML 或 CSS 文件。
 * ============================================================
 */

window.PROFILE = {

  /* ----------------------------------------------------------
   * 基本信息
   * 修改：直接改对应字段的值
   * ---------------------------------------------------------- */
  basic: {
    nameCn:     "孙瑞",
    nameEn:     "Rui Sun",
    avatarUrl:  "https://api.dicebear.com/7.x/avataaars/svg?seed=SunRui&backgroundColor=b6e3f4",
    // 替换为真实照片：avatarUrl: "photo.jpg"
    birth:      "1999/9/20",
    political:  "中共党员",
    hometown:   "陕西·榆林",
    phone:      "138 9228 0733",
    email:      "siri00@126.com",
    researchCn: "计算机视觉 · 深度学习 · 多模态大模型",
    researchEn: "Computer Vision · Deep Learning · Multimodal LLM",
    locationCn: "上海·复旦大学",
    locationEn: "Shanghai, Fudan University",
    wechat:     "（见简历二维码）",
    mypage:     "#",          // 个人主页链接
    github:     "#",          // GitHub 链接
    googleScholar: "#",       // Google Scholar 链接
    cvUrl:      "cv.pdf",     // 简历 PDF 路径
  },

  /* ----------------------------------------------------------
   * 个人简介（显示在主页头部）
   * 修改：直接改 summaryItems 数组的字符串
   * ---------------------------------------------------------- */
  summary: `孙瑞，男，复旦大学和上海创智学院博士研究生，中共党员，<strong>2023年硕士研究生国家奖学金获得者</strong>。
研究方向为：深度学习、计算机视觉，现已发表学术论文 <strong>6篇</strong>，其中 CCF A 类会议一篇（IJCAI），SCI 一区 Top 期刊两篇（IEEE JBHI、TNNLS），公开中国发明专利 <strong>3项</strong>。
曾获得 ICCSMT 2023 国际会议 <strong>Best Oral Presentation</strong>、研究生电子设计竞赛<strong>全国一等奖</strong>和最佳论文奖等国家级奖项 3 项、省级奖项 6 项、校级奖项 15 项；
参与横向课题 2 项，国家自然科学基金项目 3 项，省自然科学基金项目 2 项，国际会议公开作报告 2 次。
熟悉机器学习、深度学习等常用框架与算法，担任 <strong>IET Image Processing 期刊审稿人</strong>、<strong>Frontiers in Signal Processing 期刊客座副主编</strong>。`,

  /* ----------------------------------------------------------
   * 最新动态（主页展示，最多显示 5 条，其余可展开）
   * 修改：在数组中增减对象即可，格式：{ date, type, content }
   * type 取值："论文"|"奖项"|"会议"|"实习"|"其他"
   * ---------------------------------------------------------- */
  news: [
    { date: "2025-04", type: "其他",  content: "接见国家主席习近平来上海市调研人工智能发展，<strong>登上央视新闻联播</strong>" },
    { date: "2025-07", type: "其他",  content: "接见<strong>教育部副部长吴岩</strong>来学院调研人工智能发展" },
    { date: "2025-10", type: "项目",  content: "主导<strong>心脏多模态全维感知与智能分析系统</strong>项目启动，合作单位为上海知名三甲医院" },
    { date: "2024-09", type: "教育",  content: "入读<strong>复旦大学</strong>生物医学工程博士 & <strong>上海创智学院</strong>人工智能博士" },
    { date: "2024-06", type: "奖项",  content: "荣获校级<strong>优秀硕士毕业论文</strong>、优秀毕业生学生干部（学院唯一）" },
    { date: "2023-10", type: "奖项",  content: "荣获<strong>硕士研究生国家奖学金</strong>" },
    { date: "2023-10", type: "奖项",  content: "荣获 <strong>ICCSMT 2023</strong> 国际会议 Best Oral Presentation（唯一一项）" },
    { date: "2023-08", type: "奖项",  content: "荣获第十八届中国研究生电子设计竞赛<strong>全国一等奖和最佳论文奖</strong>" },
  ],

  /* ----------------------------------------------------------
   * 教育背景
   * 修改：在数组中增减对象
   * ---------------------------------------------------------- */
  education: [
    {
      period:   "2024.09 — 至今",
      school:   "上海创智学院",
      degree:   "博士研究生",
      major:    "人工智能",
      advisor:  "程远 研究员（复旦人工智能创新与产业研究院副院长，曾任蚂蚁集团视觉认知团队负责人）",
      active:   true,
    },
    {
      period:   "2024.09 — 至今",
      school:   "复旦大学",
      degree:   "博士研究生",
      major:    "生物医学工程",
      advisor:  "江雪 副教授（国家优青、上海市曙光人才、MIT科技评论35岁以下科技创新35人）",
      active:   true,
    },
    {
      period:   "2021.09 — 2024.06",
      school:   "陕西科技大学",
      degree:   "硕士（保研）",
      major:    "计算机技术",
      advisor:  "雷涛 教授（陕西省杰青、校学术委员会委员、学院院长、全球前2%顶尖科学家）",
      active:   false,
    },
  ],

  /* ----------------------------------------------------------
   * 研究兴趣标签
   * 修改：直接增删数组元素
   * ---------------------------------------------------------- */
  interests: [
    "计算机视觉", "深度学习", "医学图像分割", "多模态大模型",
    "Transformer架构", "目标检测", "知识蒸馏", "图神经网络",
  ],

  /* ----------------------------------------------------------
   * 技能标签（用于侧边栏显示）
   * ---------------------------------------------------------- */
  skills: [
    { name: "Python",     level: 95 },
    { name: "PyTorch",    level: 92 },
    { name: "TensorFlow", level: 80 },
    { name: "CUDA/C++",   level: 70 },
    { name: "Linux",      level: 85 },
  ],

  /* ----------------------------------------------------------
   * 统计数字（主页卡片显示）
   * ---------------------------------------------------------- */
  stats: [
    { num: 6,   label: "学术论文" },
    { num: 3,   label: "发明专利" },
    { num: 3,   label: "国家级奖项" },
    { num: 167, label: "最高引用数" },
  ],

  /* ----------------------------------------------------------
   * 论文成果
   * 修改：增减 publications 数组中的对象
   * 字段说明：
   *   authors   作者列表（本人用 <strong>孙瑞</strong> 标记）
   *   title     论文标题
   *   venue     发表期刊/会议全称
   *   venueShort 简称（用于筛选标签）
   *   year      年份（用于筛选）
   *   type      "conference" | "journal" | "preprint"
   *   level     "CCF-A" | "SCI-Q1" | "EI" | ""
   *   if_       影响因子（可选）
   *   citations 引用次数
   *   award     获奖信息（可选，有则显示金色标签）
   *   isFirst   是否本人一作
   *   links     链接对象 { paper, code, project, dataset, video, poster }
   *   bibtex    BibTeX 引用字符串
   * ---------------------------------------------------------- */
  publications: [
    {
      id: "p1",
      authors: "Tao Lei, <strong>Rui Sun</strong>, et al.",
      title:   "CiT-Net: Convolutional Neural Networks Hand in Hand with Vision Transformers for Medical Image Segmentation",
      venue:   "The 32nd International Joint Conference on Artificial Intelligence (IJCAI 2023), Macao, Aug. 2023",
      venueShort: "IJCAI",
      year:    2023,
      type:    "conference",
      level:   "CCF-A",
      if_:     "",
      citations: 38,
      isFirst: false,
      award:   "",
      links:   { paper: "#", code: "#" },
      bibtex:  `@inproceedings{lei2023citnet,
  title={CiT-Net: Convolutional Neural Networks Hand in Hand with Vision Transformers for Medical Image Segmentation},
  author={Lei, Tao and Sun, Rui and others},
  booktitle={IJCAI},
  year={2023}
}`,
    },
    {
      id: "p2",
      authors: "Tao Lei, <strong>Rui Sun</strong>, et al.",
      title:   "SGU-Net: Shape-Guided Ultralight Network for Abdominal Image Segmentation",
      venue:   "IEEE Journal of Biomedical and Health Informatics, vol. 27, no. 3, pp. 1431–1442, Mar. 2023",
      venueShort: "IEEE JBHI",
      year:    2023,
      type:    "journal",
      level:   "SCI-Q1",
      if_:     "7.7",
      citations: 40,
      isFirst: false,
      award:   "",
      links:   { paper: "#", code: "#" },
      bibtex:  `@article{lei2023sgunet,
  title={SGU-Net: Shape-Guided Ultralight Network for Abdominal Image Segmentation},
  author={Lei, Tao and Sun, Rui and others},
  journal={IEEE JBHI},
  year={2023}
}`,
    },
    {
      id: "p3",
      authors: "<strong>Rui Sun</strong>, Tao Lei*, et al.",
      title:   "Survey of Image Edge Detection",
      venue:   "Frontiers in Signal Processing, vol. 2, pp. 1–13, article 826967",
      venueShort: "Frontiers",
      year:    2022,
      type:    "journal",
      level:   "",
      if_:     "",
      citations: 167,
      isFirst: true,
      award:   "",
      links:   { paper: "https://doi.org/10.3389/frsip.2022.826967" },
      bibtex:  `@article{sun2022survey,
  title={Survey of Image Edge Detection},
  author={Sun, Rui and Lei, Tao and others},
  journal={Frontiers in Signal Processing},
  year={2022}
}`,
    },
    {
      id: "p4",
      authors: "<strong>Rui Sun</strong>.",
      title:   "DCTC-Net: Dual-Branch Cross-Fusion Transformer-CNN Architecture for Medical Image Segmentation",
      venue:   "IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2025",
      venueShort: "TNNLS",
      year:    2025,
      type:    "journal",
      level:   "SCI-Q1",
      if_:     "10.2",
      citations: 9,
      isFirst: true,
      award:   "",
      links:   { paper: "#" },
      bibtex:  `@article{sun2025dctcnet,
  title={DCTC-Net: Dual-Branch Cross-Fusion Transformer-CNN Architecture for Medical Image Segmentation},
  author={Sun, Rui},
  journal={IEEE TNNLS},
  year={2025}
}`,
    },
    {
      id: "p5",
      authors: "<strong>Rui Sun</strong>, Tao Lei*, et al.",
      title:   "TEC-Net: Vision Transformer Embrace Convolutional Neural Networks for Medical Image Segmentation",
      venue:   "IEEE Transactions on Medical Imaging (TMI). arXiv:2306.04086, 2023",
      venueShort: "TMI",
      year:    2023,
      type:    "journal",
      level:   "SCI-Q1",
      if_:     "10.6",
      citations: 8,
      isFirst: true,
      award:   "",
      links:   { paper: "#", code: "#" },
      bibtex:  `@article{sun2023tecnet,
  title={TEC-Net: Vision Transformer Embrace Convolutional Neural Networks for Medical Image Segmentation},
  author={Sun, Rui and Lei, Tao and others},
  journal={IEEE TMI},
  year={2023}
}`,
    },
    {
      id: "p6",
      authors: "<strong>Rui Sun</strong>, Peilei Wang, et al.",
      title:   "Cross-Task Feature Learning Mamba Network for Breast Cancer Ultrasound Lesion Segmentation and Lymph Node Metastasis Prediction",
      venue:   "Nature Communications（在投）",
      venueShort: "Nature Commun.",
      year:    2025,
      type:    "preprint",
      level:   "",
      if_:     "16.6",
      citations: 0,
      isFirst: true,
      award:   "",
      links:   {},
      bibtex:  `@article{sun2025mamba,
  title={Cross-Task Feature Learning Mamba Network for Breast Cancer Ultrasound Lesion Segmentation and Lymph Node Metastasis Prediction},
  author={Sun, Rui and Wang, Peilei and others},
  journal={Nature Communications (Under Review)},
  year={2025}
}`,
    },
  ],

  /* ----------------------------------------------------------
   * 发明专利
   * 修改：增减 patents 数组中的对象
   * ---------------------------------------------------------- */
  patents: [
    {
      title:    "一种基于动态可变形卷积与滑窗自适应互补注意力机制的人体肝脏和心脏器官分割方法",
      authors:  "雷涛，孙瑞，杜晓刚，杨子瑶，薛明园，闵重丹",
      number:   "CN116805318A",
      date:     "2023-06-14",
      status:   "实质审查",
    },
    {
      title:    "一种基于差分曲率的肝脏表面平滑度的测量方法",
      authors:  "张栋，雷涛，孙瑞，陈琦，王兴武，张月，杜晓刚",
      number:   "ZL202110757748.6",
      date:     "2023-09-19",
      status:   "已授权",
    },
    {
      title:    "一种基于多尺度特征金字塔网络及密集人群计数方法",
      authors:  "雷涛，张栋，孙瑞，王兴武，杜晓刚",
      number:   "ZL202110293926.4",
      date:     "2024-03-12",
      status:   "已授权",
    },
  ],

  /* ----------------------------------------------------------
   * 科研/项目经历
   * 修改：增减 experiences 数组中的对象
   * ---------------------------------------------------------- */
  experiences: [
    {
      period:   "2025.10 — 至今",
      title:    "算法设计与项目全流程搭建",
      org:      "心脏多模态全维感知与智能分析系统",
      orgType:  "横向课题",
      partner:  "合作单位：上海市某知名三甲医院",
      active:   true,
      desc:     "针对心血管疾病诊断中数据模态复杂、异构性强的痛点，以多模态大模型为认知中枢，创新性地开发和集成多种专业工具。同时引入多专家协同架构，使智能体具备类医生的慢思考能力，能够精准识别数据模态并自主规划最优诊疗路径，实现从感知、推理到临床决策的端到端闭环。",
      tags:     ["多模态大模型", "医学AI", "MCP架构", "心血管诊断"],
    },
    {
      period:   "2022.11 — 2023.04",
      title:    "算法开发设计与模型测试",
      org:      "电磁屏蔽光窗特征统计分析系统",
      orgType:  "横向课题",
      partner:  "部署于：中国科学院西安光学精密机械研究所",
      active:   false,
      desc:     "结合当前主流的 CNN 和 Transformer 神经网络架构，设计出针对电磁屏蔽光窗纹路分割的算法。该算法需要克服不同采集环境和采集背景下的干扰，准确分割出电磁屏蔽光窗中的纹路。",
      tags:     ["图像分割", "CNN", "Transformer", "工业视觉"],
    },
    {
      period:   "2021.09 — 2022.12",
      title:    "算法设计与模型测试",
      org:      "基于AI的肝脏功能智能评估与报告生成系统",
      orgType:  "横向课题",
      partner:  "部署于：西安交通大学第一附属医院老年肝胆外科",
      active:   false,
      desc:     "设计出 CNN 与 Transformer 混合的神经网络架构，对人体腹部 CT、MRI 类型数据中的肝脏器官和肝脏肿瘤进行准确分割与评估，同时在保证分割准确度的情况下将模型轻量化。",
      tags:     ["医学图像分割", "模型轻量化", "CT/MRI", "肝脏分割"],
    },
  ],

  /* ----------------------------------------------------------
   * 学生干部经历
   * 修改：增减 leadership 数组中的对象
   * ---------------------------------------------------------- */
  leadership: [
    {
      period:   "2021.09 — 2024.06",
      title:    "研究生第一党支部书记",
      org:      "陕西科技大学",
      desc:     "以思想建设为引领，不断淬炼支部党员的党性修养。2022年被推选为中共陕西科技大学第三次代表大会全校12名学生代表之一（学院唯一），展现出青年党员的责任与担当。2023年党支部获评校级研究生优秀党支部（学院唯一）。",
      highlights: ["全校12名学生代表之一（学院唯一）", "党支部获评研究生优秀党支部"],
    },
    {
      period:   "2021.09 — 2024.06",
      title:    "研21级大班长",
      org:      "陕西科技大学",
      desc:     "积极协助老师完成各项工作，组织开展了研究生学术活动月、科研竞赛经验交流会、考博就业交流会、新生入学教育等各类活动累计超 47 项。连续 3 年作为学院研究生复试工作后勤保障负责人。",
      highlights: ["累计组织活动超 47 项", "连续 3 年复试后勤负责人"],
    },
    {
      period:   "2021.09 — 2024.06",
      title:    "研究生辅导员助理",
      org:      "陕西科技大学",
      desc:     "以热情洋溢的态度，积极参与学院学生工作，搭建学生与学院之间的桥梁，成为学生们的良师益友。先后荣获校级优秀团干、优秀研究生干部、先进个人等荣誉称号。",
      highlights: ["获优秀团干、优秀研究生干部、先进个人"],
    },
    {
      period:   "2020.09 — 2021.06",
      title:    "电信专业学生党支部副书记",
      org:      "陕西科技大学",
      desc:     "积极学习贯彻党的路线方针政策，带头参加支部组织生活，负责党支部内党员日常管理、党员发展、党员考核，协助书记做好党员思想政治教育和组织生活会等工作。",
      highlights: [],
    },
    {
      period:   "2019.09 — 2020.09",
      title:    "学院学生党务中心主任",
      org:      "陕西科技大学",
      desc:     "负责组织开展学院所有学生党支部建设和党员管理工作，指导各党支部开展组织生活，制定和完善党建工作制度，规范党务工作流程，确保党建工作规范化、制度化。",
      highlights: [],
    },
  ],

  /* ----------------------------------------------------------
   * 荣誉奖项（分类存储，支持展开/收起）
   * type: "national"=国家级 | "provincial"=省级 | "school"=校级 | "personal"=个人荣誉
   * ---------------------------------------------------------- */
  honors: [
    // ── 国家级 ──
    { date: "2025-04", type: "national", title: "央视新闻联播", detail: "接见国家主席习近平来上海市调研人工智能发展，登上央视新闻联播" },
    { date: "2023-10", type: "national", title: "硕士研究生国家奖学金", detail: "陕西科技大学" },
    { date: "2023-10", type: "national", title: "ICCSMT 2023 Best Oral Presentation", detail: "唯一一项" },
    { date: "2023-08", type: "national", title: "研究生电子设计竞赛全国一等奖", detail: "第十八届中国研究生电子设计竞赛" },
    { date: "2023-08", type: "national", title: "研究生电子设计竞赛最佳论文奖", detail: "第十八届中国研究生电子设计竞赛" },
    { date: "2021-10", type: "national", title: "中国国际互联网+大赛国家级铜奖", detail: "第七届" },
    // ── 省级 ──
    { date: "2023-10", type: "provincial", title: "互联网+大赛陕西省银奖", detail: "第九届中国国际互联网+大赛" },
    { date: "2023-07", type: "provincial", title: "陕西省研究生创新成果展省级二等奖", detail: "陕西省第七届研究生创新成果展" },
    { date: "2023-07", type: "provincial", title: "研电赛技术赛西北赛区一等奖", detail: "中国研究生电子设计竞赛" },
    { date: "2023-07", type: "provincial", title: "研电赛商业赛西北赛区二等奖", detail: "中国研究生电子设计竞赛" },
    // ── 校级 ──
    { date: "2024-06", type: "school", title: "优秀硕士毕业论文", detail: "陕西科技大学 2024 年" },
    { date: "2024-06", type: "school", title: "优秀毕业生学生干部（学院唯一）", detail: "陕西科技大学 2024 届" },
    { date: "2023-10", type: "school", title: "一等研究生学业奖学金 & 学生干部奖学金", detail: "陕西科技大学" },
    { date: "2023-05", type: "school", title: "研究生创新成果展一等奖", detail: "陕西科技大学" },
    { date: "2022-12", type: "school", title: "一等研究生学业奖学金 & 学生干部奖学金", detail: "陕西科技大学" },
    // ── 个人荣誉称号 ──
    { date: "2024-06", type: "personal", title: "优秀毕业生学生干部（学院唯一）", detail: "" },
    { date: "2023-12", type: "personal", title: "优秀研究生干部", detail: "2022-2023学年" },
    { date: "2023-05", type: "personal", title: "优秀团干", detail: "2022-2023学年" },
    { date: "2022-12", type: "personal", title: "优秀研究生干部", detail: "2021-2022学年" },
    { date: "2022-12", type: "personal", title: "优秀党员标兵（学院唯一）", detail: "2022年度" },
    { date: "2021-07", type: "personal", title: "优秀共产党员", detail: "" },
    { date: "2021-06", type: "personal", title: "优秀学生干部", detail: "2021届" },
    { date: "2020-07", type: "personal", title: "优秀党务工作者", detail: "" },
    { date: "2020-06", type: "personal", title: "优秀学生干部", detail: "2019-2020学年" },
    { date: "2020-06", type: "personal", title: "三好学生", detail: "" },
    { date: "2019-05", type: "personal", title: "优秀团员", detail: "" },
  ],

  /* ----------------------------------------------------------
   * 学术服务
   * ---------------------------------------------------------- */
  academicService: {
    // 担任期刊审稿人
    reviewer: [
      { journal: "IET Image Processing",          role: "审稿人（Reviewer）" },
      { journal: "Frontiers in Signal Processing", role: "客座副主编（Guest Associate Editor）" },
    ],
    // 会议报告经历
    talks: [
      { event: "ICCSMT 2023 国际会议",      topic: "医学图像分割主题报告",   award: "Best Oral Presentation" },
      { event: "IJCAI 2023 国际会议",        topic: "CiT-Net 论文报告",       award: "" },
    ],
    // 参与项目
    projects: [
      { name: "国家自然科学基金项目", count: 3 },
      { name: "省自然科学基金项目",   count: 2 },
      { name: "横向课题",             count: 2 },
    ],
  },

  /* ----------------------------------------------------------
   * 联系方式
   * ---------------------------------------------------------- */
  contact: {
    email:    "siri00@126.com",
    phone:    "138 9228 0733",
    address:  "上海市·复旦大学",
    wechat:   "（见简历二维码）",
    reply:    "通常 24 小时内回复",
    social: {
      github:        "#",
      googleScholar: "#",
      linkedin:      "#",
      mypage:        "#",
    },
  },
};
