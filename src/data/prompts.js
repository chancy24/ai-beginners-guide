// AI提示词库数据文件
// 包含12个分类、36条高质量中文提示词（2026版）

export const promptCategories = [
  { id: "study", name: "学习类", icon: "📚" },
  { id: "writing", name: "写作类", icon: "✍️" },
  { id: "office", name: "办公类", icon: "💼" },
  { id: "coding", name: "编程类", icon: "💻" },
  { id: "data", name: "数据分析类", icon: "📊" },
  { id: "design", name: "设计类", icon: "🎨" },
  { id: "startup", name: "创业类", icon: "🚀" },
  { id: "agent", name: "Agent设计类", icon: "🤖" },
  { id: "rag", name: "RAG知识库类", icon: "📖" },
  { id: "automation", name: "自动化工作流类", icon: "⚙️" },
  { id: "vibe", name: "Vibe Coding类", icon: "✨" },
  { id: "factcheck", name: "事实核查类", icon: "🔍" }
];

export const prompts = [
  // ===== 学习类 =====
  {
    id: "p001", title: "用大白话解释概念", category: "study",
    scenario: "遇到一个很难理解的概念，需要通俗解释", suitableTools: ["ChatGPT", "Claude", "DeepSeek"],
    content: "请用零基础小白能理解的语言解释【概念名称】。\n要求：1. 一句话说清它是什么 2. 用生活场景做类比 3. 说明它为什么重要、有什么用 4. 涉及专业术语先用大白话解释 5. 一句话总结核心要点",
    parameters: [{ name: "理解水平", description: "你希望的解释深度", example: "零基础小白" }, { name: "概念名称", description: "你想了解的概念", example: "注意力机制(Transformer)" }],
    reminder: "如果AI用了新术语你没听懂，追问【再通俗一点】或【换个类比】"
  },
  {
    id: "p002", title: "生成复习提纲", category: "study",
    scenario: "备考前整理复习资料", suitableTools: ["ChatGPT", "Claude", "NotebookLM"],
    content: "请根据以下课程内容生成复习提纲。\n考试类型：【开卷/闭卷/面试】\n你的阶段：【在校生/考研/考证/自学】\n要求：1. 按重要性和考频排序 2. 每项标注掌握程度（了解/掌握/熟练） 3. 列出3组易混淆概念对比 4. 给出5道重点题（附答案和思路） 5. 推荐复习顺序\n内容：【粘贴课程目录或知识点】",
    parameters: [{ name: "考试类型", description: "你参加的考试类型", example: "期末考试" }, { name: "学习阶段", description: "你的学习阶段", example: "大二学生" }],
    reminder: "提纲是骨架，具体内容还需要自己对照课本补充细节"
  },
  {
    id: "p003", title: "模拟面试练习", category: "study",
    scenario: "准备面试需要实战练习", suitableTools: ["ChatGPT", "Claude", "DeepSeek"],
    content: "请扮演一名【面试官类型】面试官，面试岗位是【岗位名称】。\n流程：1. 先简要介绍面试流程 2. 每次只问一个问题，等我回答完再追问 3. 难度由浅入深，持续约【N】轮 4. 结束后给出总体评分(1-10)和分维度评价（专业/表达/逻辑/应变） 5. 指出3个优点和3个改进点\n现在请开始第一个问题。",
    parameters: [{ name: "面试官类型", description: "技术面/行为面/综合面", example: "技术面试官" }, { name: "岗位名称", description: "你面试的岗位", example: "AI应用开发工程师" }],
    reminder: "认真回答每个问题，就像真实面试——AI的评价才能更准确"
  },

  // ===== 写作类 =====
  {
    id: "p004", title: "写公众号/博客文章", category: "writing",
    scenario: "需要写一篇有深度的长文", suitableTools: ["Claude", "ChatGPT", "DeepSeek"],
    content: "请帮我写一篇公众号/博客文章。\n主题：【文章主题】\n目标读者：【读者画像】\n风格：【深度干货/轻松幽默/情感共鸣/专业分析】\n长度：约1500-3000字\n结构：1. 标题提供3-5个备选（含数字/疑问句式） 2. 开头用故事/数据/问题抓住注意力 3. 正文分3-5节，每节有小标题 4. 结尾总结+互动引导 5. 附3-5个金句",
    parameters: [{ name: "文章主题", description: "你想写什么", example: "2026年AI工具选型指南" }, { name: "读者画像", description: "你的目标读者是谁", example: "职场新人" }],
    reminder: "AI生成的是初稿，务必加入你自己的观点和案例——读者想看的是你的独特洞见"
  },
  {
    id: "p005", title: "写短视频口播脚本", category: "writing",
    scenario: "拍摄短视频需要口播脚本", suitableTools: ["ChatGPT", "Claude", "DeepSeek"],
    content: "请帮我写一个短视频口播脚本。\n平台：【抖音/小红书/B站/视频号】\n主题：【视频主题】\n时长：【30秒/60秒/3分钟】\n要求：1. 黄金前3秒用一句话/一个问题抓住注意力 2. 每15-20秒一个信息点或转折 3. 结尾有明确互动引导 4. 语言口语化，像和朋友聊天 5. 标注重点停顿和语气变化",
    parameters: [{ name: "视频主题", description: "主题内容", example: "3个你每天都在犯的AI使用错误" }, { name: "平台", description: "发布平台", example: "抖音" }],
    reminder: "自己的语气和风格最重要——用AI脚本做骨架，加入你的口头禅和个性"
  },
  {
    id: "p006", title: "改写多平台文案", category: "writing",
    scenario: "一段文案需要适配不同平台", suitableTools: ["ChatGPT", "Claude"],
    content: "请将以下原文改写成【目标平台】风格。\n小红书：活泼、emoji丰富、分段多、有体验感\n知乎：理性深度、结构化论证\n朋友圈：简洁温暖、像随手分享\nLinkedIn：专业国际化、突出成果\n抖音：简短有力、引发好奇\n要求：1. 核心信息不变 2. 字数符合平台习惯 3. 给出标准版和创意版\n原文：【粘贴原文】",
    parameters: [{ name: "目标平台", description: "改写为哪个平台风格", example: "小红书" }],
    reminder: "不同平台不只是文风不同，用户需求也不同——内容深度也要相应调整"
  },

  // ===== 办公类 =====
  {
    id: "p007", title: "写周报/日报", category: "office",
    scenario: "需要快速生成工作汇报", suitableTools: ["ChatGPT", "Claude", "DeepSeek"],
    content: "请根据我的工作记录生成一份【周报/日报】。\n工作记录：【逐条列出你做的事】\n格式：1. 本周完成（做了什么+产出+状态） 2. 进行中（进度和预计完成时间） 3. 下周计划（按优先级） 4. 风险与需支持事项\n风格：【简洁高效/详细全面/突出成果】\n字数：200-400字",
    parameters: [{ name: "工作记录", description: "逐条列出你做的工作", example: "1. 完成用户登录模块\n2. 修复3个线上bug\n3. 参加产品评审会" }],
    reminder: "周报不是流水账——重点写成果和价值，不是写你有多忙"
  },
  {
    id: "p008", title: "整理会议纪要", category: "office",
    scenario: "开完会需要整理纪要", suitableTools: ["Claude", "ChatGPT", "NotebookLM"],
    content: "请将以下会议内容整理成结构化纪要。\n会议记录：【粘贴文字稿】\n格式：1. 基本信息（主题/时间/参会人） 2. 核心讨论（按议题分条，标注结论） 3. 决议事项 4. 待办任务（任务+负责人+截止时间+优先级） 5. 下次会议计划\n要求：只记录事实和结论，不确定处标注【需确认】",
    parameters: [{ name: "会议文字稿", description: "会议录音转文字内容", example: "粘贴飞书妙记/通义听悟转写的文字" }],
    reminder: "纪要发出去前让参会人确认待办任务和截止时间——这是最容易扯皮的地方"
  },
  {
    id: "p009", title: "生成PPT大纲", category: "office",
    scenario: "要做PPT但不知从何下手", suitableTools: ["ChatGPT", "Claude", "Gamma"],
    content: "请帮我设计一份PPT大纲。\n主题：【主题】\n受众：【投资人/客户/高管/团队】\n时长：【N分钟】\n目的：【汇报/说服/培训/路演】\n要求：1. 封面标题方案 2. 目录结构(3-5板块) 3. 每页标题+3要点 4. 标注需要图表的页面 5. 过渡页和结尾CTA 6. 逻辑流：为什么→是什么→怎么做→效果→下一步",
    parameters: [{ name: "PPT主题", description: "你的演讲主题", example: "Q2产品迭代回顾与Q3规划" }, { name: "目标受众", description: "谁会看这个PPT", example: "公司管理层" }],
    reminder: "PPT是辅助演讲的——每页信息不要太多，观众应该听你讲而不是读PPT"
  },

  // ===== 编程类 =====
  {
    id: "p010", title: "解释代码逻辑", category: "coding",
    scenario: "看到一段代码不明白是做什么的", suitableTools: ["Claude Code", "Cursor", "DeepSeek"],
    content: "请解释以下【编程语言】代码。\n我的水平：【初学者/有基础/有经验但不懂该语言】\n请按结构解释：1. 一句话总结目的 2. 整体结构 3. 关键逻辑逐段说明 4. 数据流（输入→处理→输出） 5. 潜在问题和改进建议\n代码：【粘贴代码】",
    parameters: [{ name: "编程水平", description: "你的编程水平", example: "会基础语法但看复杂代码吃力" }],
    reminder: "不要只看解释——尝试自己复述一遍代码逻辑，检验是否真的理解了"
  },
  {
    id: "p011", title: "修复Bug", category: "coding",
    scenario: "代码报错需要排查", suitableTools: ["Claude Code", "Cursor", "Windsurf"],
    content: "我遇到了以下Bug。\n语言/框架：【技术栈】\n报错信息：```【粘贴完整错误和stack trace】```\n相关代码：```【粘贴相关代码】```\n预期行为：【你期望做什么】 实际行为：【实际发生了什么】\n请：1. 分析根因 2. 给出修复代码 3. 解释如何避免此类Bug 4. 建议是否需要补充测试",
    parameters: [{ name: "报错信息", description: "完整的错误输出", example: "完整复制控制台/终端的报错" }],
    reminder: "花30秒理解为什么出现这个Bug——下次就能自己排查了"
  },
  {
    id: "p012", title: "生成网页/组件代码", category: "coding",
    scenario: "需要一个网页或UI组件", suitableTools: ["Claude Code", "Cursor", "Windsurf"],
    content: "请帮我创建一个【网页/组件】。\n技术栈：【React+Tailwind / Vue / HTML+CSS+JS】\n功能需求：【列出2-3个核心功能】\n设计要求：配色【深色/浅色/品牌色】、布局【卡片/列表/仪表盘】、需移动端适配\n要求：1. 直接给完整可运行代码 2. 标注关键样式和逻辑 3. 选最简单的实现方式",
    parameters: [{ name: "技术栈", description: "用什么技术实现", example: "React + Vite + Tailwind CSS" }, { name: "功能描述", description: "要做什么", example: "用户评价卡片：头像、姓名、星级、评价内容、时间" }],
    reminder: "生成代码后先在本地运行看效果，让AI迭代修复问题再继续优化"
  },

  // ===== 数据分析类 =====
  {
    id: "p013", title: "分析表格数据", category: "data",
    scenario: "有一份数据需要快速分析", suitableTools: ["ChatGPT", "Claude", "DeepSeek"],
    content: "请分析以下数据。\n格式：【Excel/CSV/表格】\n分析维度：1. 数据概览（行列数、类型、缺失情况） 2. 描述性统计（均值/中位数/标准差/极值） 3. 异常值检测 4. 趋势分析（如有时间维度） 5. 关键发现（3个最值得关注的）\n我特别关注：【你最关心的业务维度】\n数据：【上传文件或粘贴数据】",
    parameters: [{ name: "关注维度", description: "你最关心的业务角度", example: "用户留存率变化趋势" }],
    reminder: "AI的统计计算可能出错——关键数字自己复核或用专业工具验证"
  },
  {
    id: "p014", title: "写数据分析报告", category: "data",
    scenario: "分析完了需要输出报告", suitableTools: ["Claude", "ChatGPT"],
    content: "请帮我写一份数据分析报告。\n分析背景：【为什么做这次分析】\n主要发现：【列出2-3个核心发现】\n报告结构：1. 摘要（一页纸说清核心结论） 2. 数据概览 3. 核心发现（每项附数据支撑+业务解读） 4. 问题诊断 5. 建议措施（具体可执行、有优先级、有衡量指标）\n受众：【决策者/业务团队/技术团队】",
    parameters: [{ name: "分析背景", description: "为什么做这次分析", example: "Q3用户流失率上升，需要找出原因" }],
    reminder: "好报告的关键不是数据多全，而是结论够清晰、建议够具体、能指导行动"
  },
  {
    id: "p015", title: "构建数据指标体系", category: "data",
    scenario: "需要为产品/业务设计核心指标", suitableTools: ["ChatGPT", "Claude"],
    content: "请帮我为【产品/业务】设计数据指标体系。\n产品类型：【SaaS/内容平台/电商/社交/游戏】\n阶段：【冷启动/增长期/成熟期】\n当前重点：【增长/留存/营收/效率】\n要求：1. 北极星指标（1个核心指标） 2. 一级指标3-5个 3. 二级指标10-15个 4. 每个指标标注定义、计算方式、健康阈值 5. 指标之间的驱动关系 6. 标注需要避免的虚荣指标",
    parameters: [{ name: "产品类型", description: "你的产品/业务类型", example: "AI内容社区" }],
    reminder: "指标不是越多越好——找到真正驱动业务增长的那几个就够了"
  },

  // ===== 设计类 =====
  {
    id: "p016", title: "生成AI绘画提示词", category: "design",
    scenario: "需要AI绘画但不会写提示词", suitableTools: ["ChatGPT", "Claude", "Midjourney", "DALL-E"],
    content: "请帮我生成高质量AI绘画提示词。\n画面：【画面描述】\n风格：【摄影/插画/3D渲染/油画/水墨/赛博朋克】\n氛围：【温暖/冷酷/梦幻/科幻/自然/都市】\n用途：【配图/宣传/概念设计/头像/海报】\n平台：【Midjourney/DALL-E/Sora】\n请给3个版本：1. 细致版(含所有细节) 2. 风格化版(强调艺术方向) 3. 简洁版(核心要素50字内)\n每个版本附平台参数建议。",
    parameters: [{ name: "画面描述", description: "描述你想画什么", example: "一个女孩在星空下弹吉他，周围漂浮着发光的音符" }],
    reminder: "提示词是迭代出来的不是一次写对的——先生成一版看效果再调整"
  },
  {
    id: "p017", title: "设计UI文案", category: "design",
    scenario: "界面按钮和提示文字需要打磨", suitableTools: ["ChatGPT", "Claude"],
    content: "请帮我设计界面UI文案。\n产品：【App/网页/小程序/后台】\n场景：【登录/注册/空状态/错误页/引导页】\n调性：【专业严谨/轻松活泼/温暖亲切/潮流酷炫】\n请提供：1. 标题方案3个 2. 按钮CTA方案3个 3. 提示/说明文字 4. 成功/失败/加载中状态文案 5. 空状态文案\n要求：简洁、有温度、不说废话。",
    parameters: [{ name: "页面场景", description: "具体是什么页面", example: "App首次打开时的引导页" }],
    reminder: "好UI文案的标准：去掉形容词和废话后，用户依然知道该做什么"
  },
  {
    id: "p018", title: "生成配色方案", category: "design",
    scenario: "需要一个好看的配色方案", suitableTools: ["ChatGPT", "Claude"],
    content: "请帮我设计一套配色方案。\n项目：【网站/App/品牌VI/PPT/数据可视化/海报】\n风格：【科技蓝紫/温暖橙/自然绿/高端黑金/清新马卡龙/复古胶片】\n输出：1. 主色1个(hex值) 2. 辅助色2-3个 3. 中性色(背景/文字/边框) 4. 功能色(成功/警告/错误/信息) 5. 使用比例建议 6. 标题+正文+按钮+背景的搭配示例",
    parameters: [{ name: "项目类型", description: "什么项目的配色", example: "个人博客网站" }],
    reminder: "配色在屏幕上和手机上看起来不一样——在不同设备上测试一下"
  },

  // ===== 创业类 =====
  {
    id: "p019", title: "市场调研分析", category: "startup",
    scenario: "想进入一个新市场需要调研", suitableTools: ["ChatGPT", "Claude", "Perplexity"],
    content: "请帮我做一份市场调研分析。\n行业/赛道：【行业名称】\n目的：【创业/投资/写报告/了解趋势】\n维度：1. 市场规模（近3年数据，增长趋势） 2. 竞争格局（头部玩家和差异化） 3. 用户画像和核心痛点 4. 技术演进趋势（过去→现在→未来3年） 5. 政策环境 6. 机会窗口和切入点 7. 主要风险\n注意：标注信息来源类型，关键数据需自行交叉验证。",
    parameters: [{ name: "行业赛道", description: "你要调研的行业", example: "AI Agent开发平台" }],
    reminder: "AI引用的市场规模数字可能有多个版本——多找几份第三方报告交叉验证"
  },
  {
    id: "p020", title: "竞品分析", category: "startup",
    scenario: "需要系统分析竞争对手", suitableTools: ["ChatGPT", "Claude", "Perplexity"],
    content: "请帮我做一份竞品分析。\n我的产品：【一句话描述】\n竞品列表（3-6个）：【列出竞品】\n维度：1. 基本信息对比表（成立时间/融资/团队/用户量/定价） 2. 功能对比矩阵 3. 每个竞品3优势+3劣势 4. 用户评价摘要 5. 差异化机会（竞品没做好的缝隙） 6. 直接威胁评估\n输出以表格为主，方便对比。",
    parameters: [{ name: "竞品列表", description: "列出要分析的竞品", example: "Notion AI、Mem、Coda AI" }],
    reminder: "实际使用竞品比看分析报告重要100倍——自己体验才知道好在哪、差在哪"
  },
  {
    id: "p021", title: "商业计划书大纲", category: "startup",
    scenario: "准备融资或立项需要BP", suitableTools: ["Claude", "ChatGPT"],
    content: "请帮我起草商业计划书大纲。\n项目：【名称】\n定位：【一句话说清做什么】\n目标用户：【谁会使用】\n商业模式：【怎么赚钱】\n阶段：【想法/原型/MVP/已有用户/有收入】\n结构：1. 执行摘要(1页内) 2. 问题与机会 3. 解决方案 4. 市场分析(TAM/SAM/SOM) 5. 商业模式(收入模型/定价/单位经济学) 6. 增长策略 7. 团队 8. 财务预测(3-5年) 9. 融资需求(金额/用途/里程碑)",
    parameters: [{ name: "项目简述", description: "你的创业项目", example: "用AI帮中小企业做财务管理的SaaS工具" }],
    reminder: "BP写完后拿给5个人看，听听他们哪里看不懂、哪里不信服"
  },

  // ===== Agent设计类 =====
  {
    id: "p022", title: "设计Agent系统提示词", category: "agent",
    scenario: "需要为一个AI Agent写系统提示词", suitableTools: ["Claude", "ChatGPT", "Dify", "Coze"],
    content: "请帮我设计一个Agent的系统提示词(System Prompt)。\nAgent角色：【客服/编程导师/写作教练/知识库问答】\n服务对象：【谁会使用】\n核心能力：【需具备的能力】\n约束：【行为边界】\n结构：1. 角色定义（身份+专业领域+性格） 2. 能力范围 3. 行为规范（什么绝对不能做） 4. 输出格式（结构/风格/是否用Markdown） 5. 安全护栏（敏感请求处理） 6. 2-3轮理想对话示例",
    parameters: [{ name: "Agent角色", description: "这个Agent是什么角色", example: "AI编程学习助手" }],
    reminder: "系统提示词是迭代出来的——写好初版后反复测试，根据表现持续调整"
  },
  {
    id: "p023", title: "设计Agent工具调用与MCP集成", category: "agent",
    scenario: "Agent需要调用工具或MCP服务", suitableTools: ["Claude Code", "Cursor", "Dify", "Coze"],
    content: "我需要为Agent设计工具调用方案（含MCP协议集成）。\nAgent任务：【核心任务描述】\n可用工具/服务：\n1. 【工具1】- 功能：【描述】- 输入：【参数】- 输出：【返回值】\n2. 【工具2】...\n请设计：1. 工具选择逻辑（何时调用哪个工具） 2. MCP Server配置（如需外部服务，给出MCP连接方案） 3. 调用顺序与依赖关系 4. 错误处理与回退策略 5. 权限控制（哪些调用需用户确认） 6. 工具返回结果验证方法",
    parameters: [{ name: "Agent任务", description: "Agent要完成的核心任务", example: "帮用户预订合适的会议室，需要查日历、查会议室状态、发通知" }],
    reminder: "工具越多Agent出错概率越大——只给Agent真正需要的工具，MCP Server同理要精简"
  },
  {
    id: "p024", title: "设计多Agent协作方案", category: "agent",
    scenario: "复杂任务需要多个Agent分工", suitableTools: ["ChatGPT", "Claude", "Dify", "Coze"],
    content: "请帮我设计多Agent协作方案。\n总任务：【最终要完成的任务】\n子任务：1.【子任务1】 2.【子任务2】 3.【子任务3】\n请设计：1. 各子任务的Agent角色分配 2. 协作流程（谁先工作→输出给谁→谁汇总） 3. Agent间信息传递格式 4. 质量控制（谁检查、不合格怎么处理） 5. 容错机制（某Agent超时或出错怎么办） 6. 人类介入节点（哪些环节需人工确认）",
    parameters: [{ name: "总任务", description: "要完成的最终任务", example: "做一份行业分析报告：搜索资料→分析数据→写报告→设计图表→排版润色" }],
    reminder: "多Agent不一定比单Agent效果好——简单任务用多Agent是杀鸡用牛刀"
  },

  // ===== RAG知识库类 =====
  {
    id: "p025", title: "RAG系统提示词设计", category: "rag",
    scenario: "搭建知识库问答需要写提示词", suitableTools: ["Dify", "Coze", "Claude"],
    content: "请帮我设计RAG知识库问答的系统提示词。\n知识库内容：【公司制度/产品手册/课程资料】\n场景：【员工自助查询/学生问答/客户支持】\n要求：1. 角色定义：基于知识库的问答助手 2. 回答原则：只基于提供的知识回答，不知道就说不知道 3. 引用规范：标注信息来源（哪份文档的哪个部分） 4. 置信度：不确定时明确说明 5. 追问引导：问题不清晰时主动追问 6. 安全条款：不回答知识库无关的个人建议",
    parameters: [{ name: "知识库内容", description: "你的知识库是什么内容", example: "某公司内部技术文档和操作手册" }],
    reminder: "RAG提示词最重要的原则：让AI老实——不要脑补知识库里没有的信息"
  },
  {
    id: "p026", title: "知识库文档预处理指南", category: "rag",
    scenario: "准备文档上传到知识库", suitableTools: ["ChatGPT", "Claude", "Dify"],
    content: "我准备将文档上传到RAG知识库，请给出预处理建议。\n文档类型：【PDF/Word/网页/表格/Markdown】\n内容：【技术文档/规章制度/课程资料/产品手册】\n数量：【几份/几十份/几百份】\n请给出：1. 清洗步骤（去掉/保留哪些内容） 2. 分段策略（按标题/固定字数/语义分段） 3. 元数据标注建议 4. 上传前质量检查清单 5. 常见问题（分段太碎/格式错乱/表格不识别等）及解决方案",
    parameters: [{ name: "文档类型和内容", description: "你的文档情况", example: "50份PDF格式的产品使用手册" }],
    reminder: "知识库的质量上限 = 原始文档的质量——垃圾进垃圾出"
  },
  {
    id: "p027", title: "RAG检索质量评估与调优", category: "rag",
    scenario: "知识库效果不好需要诊断优化", suitableTools: ["Dify", "Coze", "Claude"],
    content: "我的RAG知识库回答问题效果不理想，请帮我诊断。\n知识库概况：【内容类型、文档数量、平均长度】\n当前问题：【具体描述：回答不准确/检索不到/答非所问/幻觉严重】\n典型Bad Case：【粘贴一个失败的问答示例】\n请分析：1. 可能原因（切片策略/Embedding模型/检索参数/提示词问题） 2. 检索质量评估方法（召回率/MRR等指标怎么测） 3. 调优建议（切片大小/重叠度/Top-K/重排序策略） 4. 多路召回方案（关键词+向量混合检索） 5. 评估测试集构建方法",
    parameters: [{ name: "当前问题", description: "具体遇到了什么问题", example: "用户问产品价格，检索到的都是产品功能介绍，没有价格信息" }],
    reminder: "RAG调优是系统性工程——不要只调一个参数，要从切片→检索→提示词全链路排查"
  },

  // ===== 自动化工作流类 =====
  {
    id: "p028", title: "设计自动化工作流", category: "automation",
    scenario: "有重复任务想自动化", suitableTools: ["Dify", "Coze", "n8n"],
    content: "请帮我设计一个AI自动化工作流。\n触发方式：【定时/收到邮件/表单提交/数据变化/手动】\n频率：【每小时/每天/每周/实时】\n步骤：1.【步骤1：输入→处理→输出】 2.【步骤2】 3.【步骤3】\n请设计：1. 完整节点连接图（文字描述：A→B→条件判断→C或D→E） 2. 各节点配置要求 3. 错误处理方案 4. 完成通知方式 5. 日志记录策略",
    parameters: [{ name: "触发方式", description: "什么事件触发工作流", example: "每天早上9点自动触发" }],
    reminder: "工作流上线前先在测试环境跑几遍——自动化了错误只会让错误发生得更快"
  },
  {
    id: "p029", title: "设计日报/周报自动化流程", category: "automation",
    scenario: "想自动生成工作汇报", suitableTools: ["Dify", "Coze", "n8n"],
    content: "请帮我设计日报/周报自动化流程。\n数据来源：【项目管理工具/日历/邮件/Git提交记录】\n频率：【每天/每周】\n发送渠道：【邮件/飞书/企业微信/钉钉/Slack】\n流程：1. 触发器设置（定时触发） 2. 数据收集（从各来源拉取） 3. AI处理（整理提炼、生成结构化汇报） 4. 人工审核（是否需确认再发送） 5. 发送和存档\n请给出每步具体配置指导。",
    parameters: [{ name: "数据来源", description: "从哪些工具获取工作数据", example: "Jira任务 + Google日历会议 + Git提交记录" }],
    reminder: "自动生成的汇报仍需人工扫一眼——机器人可能漏掉重要上下文"
  },
  {
    id: "p030", title: "AI工作流编排与链式调用", category: "automation",
    scenario: "需要多个AI步骤串联完成复杂任务", suitableTools: ["Dify", "Coze", "Claude Code"],
    content: "请帮我设计一个AI工作流编排方案。\n最终目标：【描述要达成的结果】\n涉及AI节点：【列出需要AI处理的环节，如：分类→摘要→翻译→润色→格式化】\n请设计：1. 各AI节点的输入/输出schema 2. 节点间数据流转格式 3. 条件分支逻辑（什么情况走什么分支） 4. 并行处理策略（哪些节点可同时执行） 5. 全流程超时与重试策略 6. 结果汇总与最终输出格式",
    parameters: [{ name: "最终目标", description: "工作流要达成的结果", example: "每日自动抓取10篇AI新闻→分类→摘要→翻译→排版→推送到飞书群" }],
    reminder: "链式调用的每一步都可能引入误差——关键节点加验证步骤，不要让错误逐级放大"
  },

  // ===== Vibe Coding类 =====
  {
    id: "p031", title: "从零开始Vibe Coding项目", category: "vibe",
    scenario: "想用AI从零写一个完整项目", suitableTools: ["Claude Code", "Cursor", "Windsurf"],
    content: "请帮我从零创建项目。\n类型：【网站/App/工具/脚本】\n名称：【项目名】\n核心功能（先做3个最重要的）：1.【功能1】 2.【功能2】 3.【功能3】\n技术栈：【React+Vite+Tailwind / Vue / 纯HTML+CSS+JS / Python】\n设计：【简洁/现代/科技感/可爱/专业】\n开发步骤：1. 先列文件结构 2. 创建配置文件 3. 逐个实现功能 4. 确保移动端适配 5. 给出运行方法\n每次只给一个文件的代码，我说继续再给下一个。",
    parameters: [{ name: "项目类型", description: "做什么类型的项目", example: "个人博客" }],
    reminder: "分步骤来，一次只做一件事。一口气要太多功能，AI的代码质量会下降"
  },
  {
    id: "p032", title: "设计稿/截图转代码", category: "vibe",
    scenario: "有设计图想转成网页代码", suitableTools: ["Claude Code", "Cursor", "Windsurf"],
    content: "我有一个页面的设计/截图，请帮我转成代码。\n页面描述：【详细描述布局和元素】\n技术栈：【React+Tailwind / HTML+CSS+JS】\n包含元素：导航栏【描述】、主内容区【描述】、按钮和交互【描述】、配色【描述】\n要求：1. 尽可能还原设计 2. 纯前端不需后端 3. 移动端适配 4. 必要微动效 5. 代码完整可运行",
    parameters: [{ name: "页面描述", description: "详细描述你的页面", example: "SaaS落地页：大标题+CTA按钮+产品截图+功能卡片三列+价格表+底部CTA" }],
    reminder: "拿AI生成的代码和原设计逐区对比，找出差异点让AI修正"
  },
  {
    id: "p033", title: "部署项目上线", category: "vibe",
    scenario: "项目写完了要上线", suitableTools: ["Claude Code", "Cursor"],
    content: "请告诉我如何将项目部署上线。\n项目类型：【React(Vite)/Next.js/Vue/静态HTML】\n代码托管：【GitHub/GitLab/未上传】\n部署目标：【GitHub Pages/Vercel/Netlify/自有服务器】\n请提供：1. 部署前检查清单 2. 具体部署步骤和命令 3. 环境变量配置方法 4. 自定义域名绑定 5. 部署后验证方法 6. 常见问题及解决方案",
    parameters: [{ name: "项目类型", description: "你的项目技术栈", example: "React + Vite" }],
    reminder: "首次部署建议用Vercel/Netlify——对新手最友好，GitHub推送后自动部署"
  },

  // ===== 事实核查类 =====
  {
    id: "p034", title: "验证AI输出的准确性", category: "factcheck",
    scenario: "AI给了一个回答，不确定对不对", suitableTools: ["ChatGPT", "Claude", "Perplexity"],
    content: "以下是一段AI生成的内容，请帮我核查事实准确性。\n内容：【粘贴AI回答】\n原问题背景：【你最初问AI什么】\n请逐条核查：1. 提取所有事实主张（事实/数据/引用/日期/人名） 2. 逐个标注：可靠/存疑/错误/无法验证 3. 对存疑和错误说明原因 4. 重要主张建议核实来源 5. 特别标注语气自信但内容错误的地方\n注意：你自己也是AI，请诚实评估——不确定就是不确定。",
    parameters: [{ name: "AI生成内容", description: "粘贴需要核查的AI回答", example: "粘贴AI生成的回答全文" }],
    reminder: "让AI核查AI——交叉验证可降低风险但不能完全消除。关键信息最终要靠人+原始来源确认"
  },
  {
    id: "p035", title: "数据准确性检查", category: "factcheck",
    scenario: "AI引用了数据需要验证可信度", suitableTools: ["ChatGPT", "Claude", "Perplexity"],
    content: "AI回答中提到了以下数据，请评估可信度。\n数据列表：1.【数据1】 2.【数据2】...\n对每个数据点评估：1. 常识判断（是否合理） 2. 可能的数据来源 3. 影响准确性的因素（统计口径/时间范围/样本偏差） 4. 建议去哪里找可靠的最新数据 5. 使用时的免责标注建议",
    parameters: [{ name: "引用数据", description: "AI回答中提到的数据", example: "2026年全球AI市场规模突破万亿美元" }],
    reminder: "看到精确数字比看到模糊数字更容易让人相信——但AI生成的'精确数字'往往最危险"
  },
  {
    id: "p036", title: "事实核查完整流程", category: "factcheck",
    scenario: "重要场合需要系统核查AI内容", suitableTools: ["ChatGPT", "Claude", "Perplexity"],
    content: "请帮我对以下AI生成内容进行系统化事实核查。\n用途：【论文/公众号/PPT/内部报告/公开发言】\n内容：【粘贴AI完整回答】\n核查流程：\n第一步：提取所有可验证陈述（事实/数据/引用/案例/定义/时间线）\n第二步：按重要性排序（哪些错误后果最严重）\n第三步：逐一标注可信度（已核实/高度可信/需核实/可疑/已确认错误）\n第四步：对需核实项提供核实方法和工具\n第五步：给出分类建议（直接可用/需修改后使用/建议弃用）\n第六步：对高风险错误提供正确版本和来源\n请保持批判性思维——不要轻信原内容。",
    parameters: [{ name: "内容用途", description: "这段内容用在什么地方", example: "准备发在公司公众号的行业分析文章" }],
    reminder: "越重要的场合越要花时间核查——为了一篇重要内容多花30分钟核查是值得的"
  }
];
