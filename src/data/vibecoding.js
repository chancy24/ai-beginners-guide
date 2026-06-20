export const vibeCodingIntro = {
  whatIs: 'Vibe Coding 就是用自然语言向 AI 描述你想要什么，AI 帮你生成、修改、调试和优化代码。2026 年这已成为主流开发方式之一——你不需要记语法，只需要说清楚需求和逻辑，AI 就把代码写出来。',
  analogy: '如同你口述菜谱，AI 帮你炒菜。你不需要知道火候和调料比例——你只需要说"我想吃酸甜口味的鸡肉"，AI 就帮你做出来。当然好不好吃还得你尝一尝、提提意见。',
  suitableFor: [
    '个人网站和博客',
    '学习项目和课程作业',
    '管理系统原型（CRM、ERP、OA）',
    '数据看板和可视化页面',
    '自动化脚本和工具',
    'AI 应用 Demo 和 POC',
    '创业 MVP（最小可行产品）',
    'Chrome 浏览器插件',
    '小游戏和互动页面',
    'API 接口和后台服务',
  ],
};

export const vibeCodingFlow = [
  { step: 1, title: '明确目标', description: '想清楚做什么、给谁用、解决什么问题。越具体越好。', example: '不只是"做网站"，而是"给大学生用的课表管理网站，能添加课程、查看每周课表、设置作业提醒"' },
  { step: 2, title: '描述页面结构', description: '告诉 AI 你的网站有哪些页面、每个页面做什么。', example: '"首页展示本周课表概览，课程页增删改课程，提醒页管理作业和考试"' },
  { step: 3, title: '指定技术栈', description: '告诉 AI 用什么技术。这是关键一步，不说清楚 AI 可能用你不想用的框架。', example: '"使用 React + Vite + Tailwind CSS 开发"' },
  { step: 4, title: '让 AI 生成代码', description: '先生成项目结构和核心代码，不要求一步完美。', example: '"请先生成项目的文件结构和首页基本框架"' },
  { step: 5, title: '运行测试', description: '本地跑起来看效果，列出需要修改的地方。', example: 'npm run dev → 查看页面 → 记录"导航栏需要搜索框，卡片间距太小"' },
  { step: 6, title: '把问题发给 AI', description: '描述清楚问题和预期，完整复制报错信息给 AI。', example: '"首页课程卡片在手机上显示不全，请增加移动端适配。点击添加按钮无反应，控制台报错：[粘贴]"' },
  { step: 7, title: '迭代优化', description: '每次只改 1-2 个方面，逐步打磨。', example: '第一轮修 Bug → 第二轮优化 UI → 第三轮加功能 → 第四轮性能优化' },
  { step: 8, title: '部署上线', description: '项目满意后部署到 GitHub Pages 或 Vercel，获得可分享的网址。', example: '用 AI 生成部署步骤，推送到 GitHub，连接 Vercel 自动部署' },
];

export const vibeCodingMistakes = [
  { mistake: '需求太模糊', consequence: 'AI 不知道你到底要什么，代码可能完全跑偏', fix: '把"做个好看的网站"改成"深色主题个人博客，左侧导航，右侧文章列表，点击文章展开全文"' },
  { mistake: '不指定技术栈', consequence: 'AI 可能用你不熟悉的框架或库', fix: '每次明确说"使用 React + Tailwind CSS"或"使用 HTML+CSS 单文件"' },
  { mistake: '一次要求太多', consequence: 'AI 顾此失彼，代码质量和 Bug 变多', fix: '分步开发：先静态页面 → 加交互 → 加数据 → 优化样式 → 部署' },
  { mistake: '报错只说"不行"', consequence: 'AI 不知道具体哪出了问题，修复效率极低', fix: '复制完整报错 + 描述操作步骤 + 说明预期结果' },
  { mistake: '不让 AI 自查', consequence: '代码可能存在逻辑错误或安全漏洞', fix: '生成后追问："请检查以上代码是否有潜在问题、安全风险和性能瓶颈"' },
  { mistake: '不审查代码', consequence: '直接部署可能有安全隐患', fix: '至少读懂核心逻辑；API Key 永远不要写死在代码里；敏感信息用环境变量' },
  { mistake: '不保存版本', consequence: '改坏了无法回退，白费功夫', fix: '用 Git 保存版本：每个功能完成 commit 一次；用 GitHub Desktop 省去命令行' },
];

export const vibeCodingPrompts = [
  {
    title: '生成网页',
    scenario: '从零创建网页项目',
    content: '请帮我创建一个【项目类型，如：个人博客/作品集/产品介绍页】。\n技术栈：React + Vite + Tailwind CSS。\n页面结构：\n1. 导航栏（Logo、菜单、搜索框）\n2. 主内容区（【描述】）\n3. 页脚（链接和版权）\n设计要求：\n- 深色主题，蓝紫色主色调\n- 卡片式布局，玻璃拟态效果\n- 移动端适配\n- 动画过渡自然\n请生成完整项目文件结构和所有代码。',
    parameters: [
      { name: '项目类型', description: '做什么类型的网站', example: '个人博客' },
      { name: '主内容', description: '页面核心内容', example: '文章列表，显示标题、摘要、日期和标签' },
    ],
  },
  {
    title: '优化 UI 设计',
    scenario: '功能正常但不够好看',
    content: '当前页面功能基本正常，但 UI 不够好看。请优化以下方面：\n1. 整体视觉更现代、更有科技感\n2. 优化排版和间距\n3. 增加微动效（hover、过渡动画）\n4. 改进色彩搭配\n5. 优化移动端显示\n保持现有功能不变，只改进视觉和交互设计。\n当前代码：【粘贴代码】',
    parameters: [
      { name: '优化重点', description: '最想改进的设计方面', example: '配色和字体' },
    ],
  },
  {
    title: '修复 Bug',
    scenario: '代码报错或功能不对',
    content: '我遇到了以下问题：\n报错信息：\n```\n【粘贴完整报错，包括 stack trace】\n```\n相关代码：\n```\n【粘贴相关代码文件】\n```\n预期行为：【你的期望】\n实际行为：【实际发生了什么】\n操作步骤：\n1. 【步骤1】\n2. 【步骤2】\n请：1. 分析原因 2. 给出修复代码 3. 解释原因帮助我理解。',
    parameters: [
      { name: '报错信息', description: '完整错误信息', example: 'TypeError: Cannot read property...' },
      { name: '预期行为', description: '你期望发生什么', example: '点击按钮弹出对话框' },
    ],
  },
  {
    title: '添加新功能',
    scenario: '在已有项目上加功能',
    content: '请帮我在现有项目添加新功能：\n功能描述：【详细描述】\n现有技术栈：【React + Tailwind / 其他】\n要求：\n1. 不影响现有功能\n2. 保持代码风格一致\n3. 移动端适配\n4. 写清楚新增和修改了哪些文件\n现有代码：【粘贴相关文件或项目结构】',
    parameters: [
      { name: '功能描述', description: '新功能做什么', example: '给博客添加评论功能' },
    ],
  },
  {
    title: '代码自查',
    scenario: '让 AI 检查代码质量和安全',
    content: '请审查以下代码：\n1. 功能逻辑是否正确\n2. 是否有安全隐患（XSS、注入、数据泄露）\n3. 是否有性能问题\n4. 代码结构和可维护性\n5. 是否有更好的实现方式\n6. 依赖库是否有已知漏洞\n请按严重程度排序，给出每个问题的风险和修复方案。\n代码：【粘贴】',
    parameters: [
      { name: '审查重点', description: '最担心的方面', example: '安全性' },
    ],
  },
  {
    title: '生成 README',
    scenario: '项目需要写文档',
    content: '请为以下项目生成 README.md：\n项目名称：【名称】\n项目简介：【一句话描述】\n技术栈：【技术栈列表】\n功能列表：\n- 【功能1】\n- 【功能2】\nREADME 结构：\n1. 标题和简介\n2. 功能特性\n3. 快速开始（完整步骤）\n4. 项目结构说明\n5. 技术栈\n6. 许可证\n请用 Markdown 格式输出。',
    parameters: [
      { name: '项目名称', description: '项目名', example: 'AI 新手导航站' },
    ],
  },
  {
    title: '部署到 GitHub Pages',
    scenario: '项目需要上线',
    content: '请告诉我如何部署项目到 GitHub Pages。\n项目类型：【React(Vite) / 纯HTML / Next.js】\n请提供：\n1. 部署前准备工作\n2. 每一步具体命令（包括 git 命令）\n3. 可能遇到的问题和解决方案\n4. 部署后验证方法\n5. 自定义域名配置（如需要）',
    parameters: [
      { name: '项目类型', description: '技术栈', example: 'React + Vite' },
    ],
  },
  {
    title: '重构代码',
    scenario: '代码能跑但结构混乱',
    content: '请帮我重构以下代码：\n重构目标：\n1. 拆大文件为组件/模块\n2. 消除重复代码\n3. 改善命名\n4. 抽取可复用逻辑\n要求：保持功能完全不变，只改进代码结构。\n当前代码：【粘贴】',
    parameters: [
      { name: '重构目标', description: '最想改进什么', example: '组件拆分，所有代码在一个文件里' },
    ],
  },
  {
    title: '移动端适配',
    scenario: '手机显示有问题',
    content: '请帮我为以下页面增加移动端适配：\n问题描述：【具体问题】\n当前 CSS 方案：【Tailwind / 普通CSS】\n要求：\n1. 小屏幕（< 640px）合理布局\n2. 导航栏改为汉堡菜单\n3. 卡片改为单列\n4. 文字大小适合移动端\n5. 按钮点击区域至少 44px\n当前代码：【粘贴】',
    parameters: [
      { name: '具体问题', description: '手机上的显示问题', example: '导航栏挤在一起，卡片太宽' },
    ],
  },
  {
    title: '对接 API',
    scenario: '前后端对接',
    content: '请帮我实现前后端 API 对接。\n后端 API：【描述 API 接口，附文档链接或接口定义】\n前端技术栈：【React / Vue / 原生JS】\n要求：\n1. 封装 API 请求模块\n2. 处理加载状态和错误状态\n3. 数据缓存策略\n4. 请求防抖/节流\n请生成完整可用的代码。',
    parameters: [
      { name: 'API 描述', description: '接口信息', example: 'RESTful API，GET /api/users 返回用户列表' },
    ],
  },
];
