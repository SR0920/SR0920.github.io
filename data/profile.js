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
    // avatarUrl:  "https://api.dicebear.com/7.x/avataaars/svg?seed=SunRui&backgroundColor=b6e3f4",  // 网络随机选取的照片用来测试
    avatarUrl:  "./images/SR.jpg",
    birth:      "1999/09/20",
    political:  "中共党员",
    hometown:   "陕西·榆林",
    phone:      "138 9228 0733",
    email:      "siri00@126.com",
    researchCn: "计算机视觉 · 深度学习 · 多模态大模型",
    researchEn: "Computer Vision · Deep Learning · Multimodal Large Model",
    locationCn: "上海·复旦大学",
    locationEn: "Shanghai, Fudan University",
    wechat:     "138 9228 0733",
    mypage:     "https://sr0920.github.io",          // 个人主页链接
    github:     "https://github.com/SR0920",          // GitHub 链接
    googleScholar: "https://scholar.google.com/citations?user=sHBia6oAAAAJ&hl=zh-CN",       // Google Scholar 链接
    cvUrl:      "cv.pdf",     // 简历 PDF 路径
  },

  /* ----------------------------------------------------------
   * 个人简介（显示在主页头部）
   * 修改：直接改 summaryItems 数组的字符串
   * ---------------------------------------------------------- */
  summary: `孙瑞，男，复旦大学和上海创智学院博士研究生，中共党员，<strong>2023年硕士研究生国家奖学金获得者</strong>。
研究方向为：计算机视觉、深度学习、多模态大模型，现已在ICLR、IJCAI、IEEE TNNLS等顶级期刊和会议上以第一作者（共一或通讯）发表学术论文 <strong>6篇</strong>，其中 CCF A 类会议2篇（ICLR、IJCAI），SCI 一区 Top 期刊2篇（IEEE TNNLS、JBHI），公开中国发明专利 <strong>3项</strong>。
曾获得 ICCSMT 2023 国际会议 <strong>Best Oral Presentation</strong>、研究生电子设计竞赛<strong>全国一等奖</strong>和<strong>最佳论文奖</strong>等国家级奖项 6 项、省级奖项 6 项、校级奖项 15 项；
参与横向课题 2 项，国家自然科学基金项目 3 项，省自然科学基金项目 2 项，国际会议公开作报告 2 次。
熟悉机器学习、深度学习等常用框架与算法，目前担任 <strong>IEEE JBHI、Neurocomputing、Neural Networks、IET Image Processing等期刊审稿人</strong>、<strong>Frontiers in Signal Processing 期刊客座副主编</strong>。`,

  /* ----------------------------------------------------------
   * 最新动态（主页展示，最多显示 5 条，其余可展开）
   * 修改：在数组中增减对象即可，格式：{ date, type, content }
   * type 取值："论文"|"奖项"|"会议"|"实习"|"其他"
   * ---------------------------------------------------------- */
  news: [
    { date: "2026-01", type: "论文",  content: "Disco: Densely-overlapping Cell Instance Segmentation via Adjacency-aware Collaborative Coloring被<strong>CCF A类会议ICLR 2026</strong>接收发表" },
    { date: "2025-10", type: "论文",  content: "TEC-Net: Vision Transformer Embrace Convolutional Neural Networks for Medical Image Segmentation被<strong>一区Top期刊IEEE TNNLS</strong>接收发表" },
    { date: "2025-04", type: "其他",  content: "接见<strong>国家主席习近平</strong>来上海市调研人工智能发展，<strong>登上央视新闻联播</strong>" },
    { date: "2025-07", type: "其他",  content: "接见<strong>教育部副部长吴岩</strong>来学院调研人工智能发展" },
    { date: "2024-09", type: "教育",  content: "入读<strong>复旦大学</strong>生物医学工程博士 & <strong>上海创智学院</strong>人工智能博士" },
    { date: "2024-06", type: "奖项",  content: "荣获校级<strong>优秀硕士毕业论文</strong>、<strong>优秀毕业生学生干部（学院唯一）</strong>" },
    { date: "2023-10", type: "奖项",  content: "荣获<strong>硕士研究生国家奖学金</strong>" },
    { date: "2023-10", type: "奖项",  content: "荣获 ICCSMT 2023 国际会议  <strong>Best Oral Presentation（唯一一项）</strong>" },
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
      advisor:  "程远 研究员（复旦人工智能创新与产业研究院副院长，上海科学智能研究院副院长）",
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
  ],

  /* ----------------------------------------------------------
   * 研究兴趣标签
   * 修改：直接增删数组元素
   * ---------------------------------------------------------- */
  interests: [
    "计算机视觉", "深度学习", "医学图像分割", 
    "Transformer", "多模态Agent", "多模态大模型",
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
    { num: 6,   label: "国家级奖项" },
    { num: 300, label: "论文被引数" },
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
      id: "p6",
      authors: "<strong>Rui Sun</strong>, Yiwen Yang, et al.",
      title:   "Disco: Densely-overlapping Cell Instance Segmentation via Adjacency-aware Collaborative Coloring",
      venue:   "The Fourteenth International Conference on Learning Representations (ICLR 2026), Brazil, April 2026",
      venueShort: "ICLR",
      year:    2026,
      type:    "conference",
      level:   "CCF-A",
      if_:     "",
      citations: 1,
      isFirst: true,
      award:   "poster",
      links:   { paper: "https://arxiv.org/abs/2602.05420", code: "https://github.com/SR0920/Disco" },
      bibtex:  `@article{sun2026disco,
  title={Disco: Densely-overlapping Cell Instance Segmentation via Adjacency-aware Collaborative Coloring},
  author={Sun, Rui and Yang, Yiwen and Guo, Kaiyu and Jiang, Chen and Xu, Dongli and Liu, Zhaonan and Pan, Tan and Han, Limei and Jiang, Xue and Wei, Wu and others},
  journal={ICLR},
  year={2026}
}`,
    },
    {
      id: "p5",
      authors: "Tan Pan, Yixuan Sun, Chen Jiang, Qiong Gao, <strong>Rui Sun</strong>, et al.",
      title:   "Tracing the Heart’s Pathways: ECG Representation Learning from a Cardiac Conduction Perspective",
      venue:   "The Fortieth AAAI Conference on Artificial Intelligence (AAAI 2026), Singapore, January 2026",
      venueShort: "AAAI",
      year:    2026,
      type:    "conference",
      level:   "CCF-A",
      if_:     "",
      citations: 1,
      isFirst: false,
      award:   "",
      links:   { paper: "https://ojs.aaai.org/index.php/AAAI/article/view/37057", code: "https://github.com/Ashespt/CLEAR-HUG" },
      bibtex:  `@inproceedings{pan2026tracing,
  title={Tracing the Heart’s Pathways: ECG Representation Learning from a Cardiac Conduction Perspective},
  author={Pan, Tan and Sun, Yixuan and Jiang, Chen and Gao, Qiong and Sun, Rui and Zhang, Xingmeng and Yang, Zhenqi and Han, Limei and Liang, Yixiu and Cheng, Yuan and others},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={40},
  number={2},
  pages={890--898},
  year={2026}
}`,
    },
        {
      id: "p4",
      authors: "<strong>Rui Sun</strong>.",
      title:   "DCTC-Net: Dual-Branch Cross-Fusion Transformer-CNN Architecture for Medical Image Segmentation",
      venue:   "IEEE Transactions on Neural Networks and Learning Systems (IEEE TNNLS), 2025",
      venueShort: "TNNLS",
      year:    2025,
      type:    "journal",
      level:   "SCI-Q1",
      if_:     "10.2",
      citations: 10,
      isFirst: true,
      award:   "",
      links:   { paper: "https://ieeexplore.ieee.org/abstract/document/11270970" },
      bibtex:  `@article{sun2025dctcnet,
  title={DCTC-Net: Dual-Branch Cross-Fusion Transformer-CNN Architecture for Medical Image Segmentation},
  author={Sun, Rui},
  journal={IEEE TNNLS},
  year={2025}
}`,
    },    
    {
      id: "p3",
      authors: "Tao Lei, <strong>Rui Sun</strong>, et al.",
      title:   "CiT-Net: Convolutional Neural Networks Hand in Hand with Vision Transformers for Medical Image Segmentation",
      venue:   "The 32nd International Joint Conference on Artificial Intelligence (IJCAI 2023), Macao, Aug. 2023",
      venueShort: "IJCAI",
      year:    2023,
      type:    "conference",
      level:   "CCF-A",
      if_:     "",
      citations: 43,
      isFirst: true,
      award:   "",
      links:   { paper: "https://arxiv.org/abs/2306.03373", code: "https://github.com/SR0920/CiT-Net" },
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
      venue:   "IEEE Journal of Biomedical and Health Informatics (IEEE JBHI), vol. 27, no. 3, pp. 1431–1442, Mar. 2023",
      venueShort: "IEEE JBHI",
      year:    2023,
      type:    "journal",
      level:   "SCI-Q1",
      if_:     "7.7",
      citations: 48,
      isFirst: true,
      award:   "",
      links:   { paper: "https://ieeexplore.ieee.org/abstract/document/10021579", code: "https://github.com/SUST-reynole/SGUNet" },
      bibtex:  `@article{lei2023sgunet,
  title={SGU-Net: Shape-Guided Ultralight Network for Abdominal Image Segmentation},
  author={Lei, Tao and Sun, Rui and others},
  journal={IEEE JBHI},
  year={2023}
}`,
    },
    {
      id: "p1",
      authors: "<strong>Rui Sun</strong>, Tao Lei*, et al.",
      title:   "Survey of Image Edge Detection",
      venue:   "Frontiers in Signal Processing (FSP), vol. 2, pp. 1–13, article 826967",
      venueShort: "Frontiers",
      year:    2022,
      type:    "journal",
      level:   "SCI-Q2",
      if_:     "",
      citations: 200,
      isFirst: true,
      award:   "",
      links:   { paper: "https://www.frontiersin.org/journals/signal-processing/articles/10.3389/frsip.2022.826967/full" },
      bibtex:  `@article{sun2022survey,
  title={Survey of image edge detection},
  author={Sun, Rui and Lei, Tao and Chen, Qi and Wang, Zexuan and Du, Xiaogang and Zhao, Weiqiang and Nandi, Asoke K},
  journal={Frontiers in Signal Processing},
  volume={2},
  pages={826967},
  year={2022},
  publisher={Frontiers Media SA}
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
      orgType:  "科研项目",
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
      period:   "2024.09 — 至今",
      title:    "学院2401班班长",
      org:      "上海",
      desc:     "积极参与学院学生工作，搭建学生与学院之间的桥梁，协助老师完成各项工作。",
      highlights: [],
    },
    {
      period:   "2024.09 — 至今",
      title:    "学院学生第一党支部支委会成员",
      org:      "上海",
      desc:     "积极参与党支部工作，负责党支部内部日常活动开展，协助书记做好党员思想政治教育和组织生活会等工作。",
      highlights: [],
    },
    {
      period:   "2021.09 — 2024.06",
      title:    "研究生第一党支部书记",
      org:      "陕西 · 西安",
      desc:     "以思想建设为引领，不断淬炼支部党员的党性修养。2022年被推选为中共陕西科技大学第三次代表大会全校12名学生代表之一（学院唯一），展现出青年党员的责任与担当。2023年党支部获评校级研究生优秀党支部（学院唯一）。",
      highlights: ["全校12名学生党员代表之一（学院唯一）", "校级研究生优秀党支部", "校级优秀研究生党员标兵", "校级优秀党务工作者"],
    },
    {
      period:   "2021.09 — 2024.06",
      title:    "研21级大班长",
      org:      "陕西 · 西安",
      desc:     "积极协助老师完成各项工作，组织开展了研究生学术活动月、科研竞赛经验交流会、考博就业交流会、新生入学教育等各类活动累计超 47 项。连续 3 年作为学院研究生复试工作后勤保障负责人。",
      highlights: ["累计组织活动超 47 项", "连续 3 年作为学院研究生复试后勤负责人"],
    },
    {
      period:   "2021.09 — 2024.06",
      title:    "研究生辅导员助理",
      org:      "陕西 · 西安",
      desc:     "以热情洋溢的态度，积极参与学院学生工作，搭建学生与学院之间的桥梁，成为学生们的良师益友。先后荣获校级优秀团干、优秀研究生干部、先进个人等荣誉称号。",
      highlights: ["获优秀团干", "优秀研究生干部", "先进个人"],
    },
    {
      period:   "2020.09 — 2021.06",
      title:    "电信专业学生党支部副书记",
      org:      "陕西 · 西安",
      desc:     "积极学习贯彻党的路线方针政策，带头参加支部组织生活，负责党支部内党员日常管理、党员发展、党员考核，协助书记做好党员思想政治教育和组织生活会等工作。",
      highlights: ["优秀共产党员", "三好学生", "优秀学生干部"],
    },
    {
      period:   "2019.09 — 2020.09",
      title:    "学院新生班助",
      org:      "陕西 · 西安",
      desc:     "衔接师生桥梁，引领新生适应校园、融入集体、平稳开启大学生活。",
      highlights: [],
    },
    {
      period:   "2019.09 — 2020.09",
      title:    "学院学生党务中心主任",
      org:      "陕西 · 西安",
      desc:     "负责组织开展学院所有学生党支部建设和党员管理工作，指导各党支部开展组织生活，制定和完善党建工作制度，规范党务工作流程，确保党建工作规范化、制度化。",
      highlights: ["优秀学生干部", "优秀团员"],
    },
  ],

  /* ----------------------------------------------------------
   * 荣誉奖项（分类存储，支持展开/收起）
   * type: "national"=国家级 | "provincial"=省级 | "school"=校级 | "personal"=个人荣誉
   * ---------------------------------------------------------- */
  honors: [
    // ── 国家级 ──
    { date: "2025-04", type: "national", title: "央视新闻联播", detail: "接见国家主席习近平来上海市调研人工智能发展，登上央视新闻联播" },
    { date: "2023-10", type: "national", title: "2022-2023学年度硕士研究生国家奖学金", detail: "中华人民共和国教育部" },
    { date: "2023-10", type: "national", title: "ICCSMT 2023 国际会议 Best Oral Presentation", detail: "唯一一项" },
    { date: "2023-08", type: "national", title: "第十八届中国研究生电子设计竞赛国家级一等奖", detail: "中国电子学会" },
    { date: "2023-08", type: "national", title: "第十八届中国研究生电子设计竞赛国家级最佳论文奖", detail: "中国电子学会" },
    { date: "2023-08", type: "national", title: "第十八届中国研究生电子设计竞赛商业计划书专项赛国家级二等奖", detail: "中国电子学会" },
    { date: "2021-10", type: "national", title: "第七届中国国际‘互联网+’大学生创新创业大赛国家级铜奖", detail: "中国国际‘互联网+’大学生创新创业大赛组织委员会" },
    // ── 省级 ──
    { date: "2023-09", type: "provincial", title: "陕西省第七届研究生创新成果展高质量成果省级二等奖", detail: "陕西省教育厅" },
    { date: "2023-08", type: "provincial", title: "第九届中国国际‘互联网+’大学生创新创业大赛陕西赛区省级银奖", detail: "中国国际‘互联网+’大学生创新创业大赛陕西赛区组织委员会" },
    { date: "2023-07", type: "provincial", title: "第十八届中国研究生电子设计竞赛西北分赛区技术赛一等奖", detail: "中国研究生电子设计竞赛" },
    { date: "2023-07", type: "provincial", title: "第十八届中国研究生电子设计竞赛西北分赛区商业赛二等奖", detail: "中国研究生电子设计竞赛" },
    { date: "2021-09", type: "provincial", title: "第七届中国国际‘互联网+’大学生创新创业大赛陕西赛区省级金奖", detail: "中国国际‘互联网+’大学生创新创业大赛陕西赛区组织委员会" },
    { date: "2019-12", type: "provincial", title: "全国大学生数学建模竞赛本科组陕西赛区一等奖", detail: "陕西省教育厅" },
    // ── 校级 ──
    { date: "2024-06", type: "school", title: "校级优秀硕士毕业论文", detail: "2024年校级荣誉" },
    { date: "2024-06", type: "school", title: "校级优秀毕业生学生干部（学院唯一）", detail: "2024年校级荣誉" },
    { date: "2023-10", type: "school", title: "校级一等研究生学业奖学金 & 学生干部奖学金", detail: "2023年校级荣誉" },
    { date: "2023-09", type: "school", title: "2023年陕西省第七届研究生创新成果展校赛一等奖", detail: "2023年校级荣誉" },
    { date: "2023-06", type: "school", title: "2023年校级研究生电子设计竞赛技术赛一等奖", detail: "2023年校级荣誉" },
    { date: "2023-06", type: "school", title: "2023年校级研究生电子设计竞赛商业赛一等奖", detail: "2023年校级荣誉" },
    { date: "2023-05", type: "school", title: "研究生创新成果展一等奖", detail: "2023年校级荣誉" },
    { date: "2022-12", type: "school", title: "校级一等研究生学业奖学金 & 学生干部奖学金", detail: "2022年校级荣誉" },
    { date: "2022-06", type: "school", title: "2022年校级研究生人工智能创新大赛一等奖", detail: "2022年校级荣誉" },
    { date: "2021-11", type: "school", title: "第七届中国国际‘互联网+’大学生创新创业大赛校级特等奖", detail: "2021年校级荣誉" },
    { date: "2019-06", type: "school", title: "全国大学生数学建模竞赛本科组校赛一等奖", detail: "2019年校级荣誉" },
    { date: "2019-05", type: "school", title: "‘红色情景课堂’展演优秀奖", detail: "2019年校级荣誉" },
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
      { journal: "IEEE JBHI",          role: "审稿人（Reviewer）" },
      { journal: "Neurocomputing",          role: "审稿人（Reviewer）" },
      { journal: "Neural Networks",          role: "审稿人（Reviewer）" },
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
    wechat:   "138 9228 0733",
    reply:    "通常 24 小时内回复",
    social: {
      github:        "https://github.com/SR0920",
      googleScholar: "https://scholar.google.com/citations?user=sHBia6oAAAAJ&hl=zh-CN",
      linkedin:      "#",
      mypage:        "https://sr0920.github.io",
    },
  },
};
