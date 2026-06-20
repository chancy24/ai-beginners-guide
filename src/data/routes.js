export const identities = [
  { id: 'beginner', name: '零基础小白', icon: '🌱', subtitle: '完全没接触过 AI', description: '对 AI 零了解，想从零开始系统学习' },
  { id: 'student', name: '大学生', icon: '🎓', subtitle: '在校学生', description: '想用 AI 提升学习效率、辅助完成学业' },
  { id: 'newbie', name: '职场新人', icon: '💼', subtitle: '刚入职场 1-3 年', description: '想用 AI 快速提升办公效率脱颖而出' },
  { id: 'pm', name: '产品经理', icon: '📋', subtitle: '互联网/软件行业', description: '想用 AI 做调研、写文档、出原型' },
  { id: 'developer', name: '程序员', icon: '💻', subtitle: '有编程基础', description: '想用 AI 加速开发、学习新技术' },
  { id: 'designer', name: '设计师', icon: '🎨', subtitle: 'UI/UX/平面设计', description: '想用 AI 辅助创意、生成素材、提升效率' },
  { id: 'founder', name: '创业者', icon: '🚀', subtitle: '正在或准备创业', description: '想用 AI 做 MVP、市场调研、降本增效' },
  { id: 'manager', name: '企业管理者', icon: '🏢', subtitle: '团队/部门负责人', description: '想了解 AI 如何赋能团队、优化流程' },
  { id: 'creator', name: '自媒体创作者', icon: '📱', subtitle: '内容创作者', description: '想用 AI 做选题、写脚本、生成素材' },
];

export const goals = [
  { id: 'basics', name: '了解 AI 基础', icon: '🧠', description: '从零认识 AI，建立正确认知' },
  { id: 'study', name: '提高学习效率', icon: '📚', description: '用 AI 辅助学习、考试、写论文' },
  { id: 'office', name: '提高办公效率', icon: '⚡', description: '用 AI 写文档、做 PPT、处理邮件' },
  { id: 'coding', name: '学会 AI 编程', icon: '💻', description: 'Vibe Coding，用自然语言写代码' },
  { id: 'build', name: '搭建 AI 应用', icon: '🛠️', description: '创建自己的 AI 助手和知识库' },
  { id: 'agent', name: '了解 Agent', icon: '🤖', description: '理解 AI Agent 原理和用法' },
  { id: 'knowledge', name: '搭建知识库', icon: '📖', description: '用 RAG 构建专属知识问答系统' },
  { id: 'automation', name: '做自动化工作流', icon: '⚙️', description: '用 AI 串联工具，自动完成重复任务' },
  { id: 'content', name: '做内容创作', icon: '✍️', description: '用 AI 写脚本、做选题、生成配图' },
  { id: 'business', name: '做商业项目', icon: '🚀', description: '用 AI 做调研、分析、快速验证想法' },
];

function toStep(str) {
  const match = str.match(/^\d+\.\s+(.+?)(?:（(.+?)）)?$/);
  if (match) {
    return { title: match[1], duration: match[2] || null };
  }
  return { title: str, duration: null };
}

const routeData = {
  beginner: {
    basics: {
      name: '零基础入门 AI',
      steps: [
        '1. 用大白话了解 AI、大模型、生成式 AI（30分钟）',
        '2. 注册 Claude 或 ChatGPT 免费版（15分钟）',
        '3. 学会写基本提示词：说清楚你是谁、要什么、什么格式（30分钟）',
        '4. 用 AI 完成 3 个日常任务：写邮件、解释概念、做总结（1小时）',
        '5. 了解 AI 的三大边界：幻觉、隐私、安全（20分钟）',
      ].map(toStep),
      mustKnow: ['AI', '大语言模型(LLM)', '生成式 AI', '提示词(Prompt)', '幻觉(Hallucination)'],
      tools: ['Claude', 'ChatGPT', 'DeepSeek', 'Gemini'],
      agents: ['聊天型 Agent'],
      firstTask: '让 AI 用小学生都能懂的语言解释"机器学习"，然后让它举一个生活中的例子',
      prompt: '请用小学生都能听懂的语言解释什么是"机器学习"。举一个生活中的例子。不要用专业术语，如果必须用请先解释。',
      warnings: ['AI 会自信地胡编——重要信息一定要核实', '不要上传身份证、密码等敏感信息', 'AI 代码不要直接部署到重要项目'],
    },
    study: {
      name: '用 AI 提高学习效率',
      steps: [
        '1. 用 AI 解释任何学科的难懂概念（即学即用）',
        '2. 让 AI 做知识总结和思维导图大纲（20分钟）',
        '3. 用 AI 生成练习题自测 + AI 批改（30分钟）',
        '4. 用 AI 润色论文语言、检查逻辑漏洞（15分钟）',
        '5. 搭建个人学习知识库（进阶，1小时）',
      ].map(toStep),
      mustKnow: ['提示词工程', 'RAG', '上下文窗口'],
      tools: ['Claude', 'ChatGPT', 'NotebookLM', 'DeepSeek'],
      agents: ['聊天型 Agent', 'RAG 知识库 Agent'],
      firstTask: '找一门你最头疼的课，把一页内容复制给 AI，让它用最通俗的方式重新解释',
      prompt: '我是一名【大学生/专业】的学生。请用通俗易懂的语言解释以下概念：【概念】。包含：1. 一句话定义 2. 生活类比 3. 为什么重要 4. 一个简单示例。',
      warnings: ['AI 解释可能有误，要和课本对照', '不要让 AI 替你写整篇论文——属于学术不端'],
    },
    office: {
      name: '用 AI 提高办公效率',
      steps: [
        '1. 用 AI 写日报、周报、邮件（10分钟/篇）',
        '2. 用 AI 整理会议纪要——粘贴录音转文字稿即可（5分钟）',
        '3. 用 AI 分析 Excel 表格数据并生成报告（15分钟）',
        '4. 用 AI 生成 PPT 大纲和汇报框架（10分钟）',
        '5. 把高频任务固化成提示词模板，一次写好反复用',
      ].map(toStep),
      mustKnow: ['提示词工程', '结构化输出', '工作流'],
      tools: ['Claude', 'ChatGPT', 'Notion AI', 'Gamma'],
      agents: ['聊天型 Agent', '工作流 Agent'],
      firstTask: '把最近一次会议的笔记发给 AI，让它整理成结构化会议纪要',
      prompt: '请将以下会议内容整理成结构化纪要。格式：1. 会议主题 2. 参与人 3. 关键讨论 4. 决议事项 5. 待办任务（含负责人和截止时间）。内容：【粘贴会议笔记】',
      warnings: ['公司敏感数据不要上传公共 AI', 'AI 生成的汇报内容检查数字和事实'],
    },
    coding: {
      name: '学会 AI 编程（Vibe Coding）',
      steps: [
        '1. 了解 Vibe Coding：用自然语言描述需求，AI 写代码（10分钟）',
        '2. 安装 AI 编程工具：推荐 Claude Code（终端）或 Cursor（IDE）（15分钟）',
        '3. 从简单网页练手：个人主页、博客、工具页面（30分钟）',
        '4. 学会"描述→生成→运行→报错发给 AI→修复"循环',
        '5. 逐步尝试复杂项目：数据看板、管理系统、API 服务',
      ].map(toStep),
      mustKnow: ['Vibe Coding', 'Git 基础', '命令行基础', 'MCP'],
      tools: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Windsurf'],
      agents: ['编程 Agent', '工具调用型 Agent'],
      firstTask: '用 AI 生成一个个人介绍网页，包含头像、简介、技能标签和联系方式',
      prompt: '请帮我创建一个个人介绍网页。要求：1. 深色背景 2. 居中布局 3. 圆形头像、姓名、一句话介绍、3-5个技能标签、联系方式 4. 使用 HTML+CSS+JS 单文件 5. 简洁现代风格。直接给完整代码。',
      warnings: ['AI 代码一定要看懂再运行', '不要直接把 AI 代码部署到生产环境', '用 Git 保存版本——改坏了能回退'],
    },
    build: {
      name: '搭建 AI 应用',
      steps: [
        '1. 了解 AI 应用基本架构：前端→API→模型（15分钟）',
        '2. 选择低代码平台：推荐 Dify 或 Coze 扣子（5分钟注册）',
        '3. 搭建第一个 AI 聊天应用——拖拽式操作（20分钟）',
        '4. 接入知识库，搭建 RAG 应用：上传文档即可（30分钟）',
        '5. 学习 MCP，给 AI 连接更多工具（搜索、数据库、邮件等）',
      ].map(toStep),
      mustKnow: ['API', 'RAG', 'MCP', '工作流', '向量数据库'],
      tools: ['Dify', 'Coze', 'Flowise', 'n8n'],
      agents: ['RAG 知识库 Agent', '工作流 Agent', '多智能体系统'],
      firstTask: '在 Dify 上创建能回答"公司规章制度"问题的 AI 助手',
      prompt: '我要搭建企业知识库问答助手。请告诉我：1. Dify 基本操作流程 2. 如何上传知识库文档 3. 如何设置提示词让 AI 只基于知识库回答 4. 常见问题和解决方案。',
      warnings: ['API Key 不要泄露或提交到 GitHub', '知识库权限要分级控制'],
    },
    agent: {
      name: '了解 AI Agent',
      steps: [
        '1. 理解 Agent 核心：Agent = LLM（大脑）+ 工具（手脚）+ 规划（逻辑）（10分钟）',
        '2. 从聊天 Agent 开始感受"对话式交互"',
        '3. 体验带工具调用的 Agent：联网搜索、代码执行、数据查询（20分钟）',
        '4. 了解不同 Agent 类型和适用场景：编程/RAG/工作流/多智能体',
        '5. 在 Dify 或 Coze 搭建你的第一个 Agent（30分钟）',
      ].map(toStep),
      mustKnow: ['Agent', '工具调用', 'RAG', 'MCP', '工作流', '多Agent协作'],
      tools: ['Claude Code', 'Dify', 'Coze', 'CrewAI'],
      agents: ['聊天型 Agent', '工具调用型 Agent', 'RAG Agent', '工作流 Agent'],
      firstTask: '在 Dify 或 Coze 创建能搜天气+讲笑话的简单 Agent',
      prompt: '帮我设计一个简单 Agent：用户问天气时调用天气 API，用户无聊时讲笑话，其他问题用通用 AI 回答。请告诉我搭建步骤和提示词怎么写。',
      warnings: ['Agent 越复杂越容易出错，从小开始', '工具权限要最小化——不给不需要的权限'],
    },
    knowledge: {
      name: '搭建知识库 Agent',
      steps: [
        '1. 理解 RAG 原理：提问→检索相关文档→喂给 AI→生成回答（10分钟）',
        '2. 整理文档资料：PDF、Word、网页、笔记等（质量决定效果）',
        '3. 选平台：小白推荐 Dify，有开发能力推荐 LlamaIndex（5分钟）',
        '4. 上传资料并测试问答效果，调整分段策略（30分钟）',
        '5. 优化提示词，设置"不知道就说不知道"的兜底逻辑',
      ].map(toStep),
      mustKnow: ['RAG', '向量数据库', '嵌入(Embedding)', '语义搜索'],
      tools: ['Dify', 'Coze', 'LlamaIndex', 'AnythingLLM'],
      agents: ['RAG 知识库 Agent'],
      firstTask: '把学习笔记整理成 PDF，上传到 Dify 做"个人学习笔记问答助手"',
      prompt: '我要搭建知识库问答助手。文档类型是【类型】。请帮我：1. 设计提示词（只基于文档回答，不知道就说不知道）2. 建议文档分段策略 3. 列出测试问题清单。',
      warnings: ['文档质量决定回答质量——垃圾进垃圾出', '定期更新知识库，删除过期信息'],
    },
    automation: {
      name: '做自动化工作流',
      steps: [
        '1. 理解工作流：触发器→步骤1→步骤2→条件判断→输出（10分钟）',
        '2. 选平台：小白推荐 n8n 或 Zapier（5分钟注册）',
        '3. 搭第一个自动化：自动保存邮件附件到云盘（20分钟）',
        '4. 加入 AI 步骤：自动分类邮件、生成摘要、翻译（20分钟）',
        '5. 设计复杂流：多条件分支、多步骤串联、错误处理',
      ].map(toStep),
      mustKnow: ['工作流(Workflow)', '触发器(Trigger)', 'API', '自动化'],
      tools: ['n8n', 'Zapier', 'Dify Workflow', 'Coze Workflow'],
      agents: ['工作流 Agent'],
      firstTask: '搭建"收到特定邮件→AI 生成摘要→发送到飞书/微信"的自动化',
      prompt: '我想搭建自动化工作流：收到标为【重要】的邮件时，用 AI 生成 200 字摘要，发送到飞书。请告诉我用什么工具、具体步骤和注意事项。',
      warnings: ['自动化出错可能连锁反应——先小范围测试', '注意 API 调用频率和费用'],
    },
    content: {
      name: '做 AI 内容创作',
      steps: [
        '1. 用 AI 做选题策划：分析热点、用户痛点、差异化角度（15分钟）',
        '2. 用 AI 写初稿：短视频脚本、公众号文章、小红书文案（20分钟）',
        '3. 用 AI 生成配图提示词：Midjourney/DALL-E/可灵（10分钟）',
        '4. 用 AI 改写优化：调整语气和风格适配不同平台（10分钟）',
        '5. 建立创作 SOP：选题→大纲→初稿→优化→配图→发布',
      ].map(toStep),
      mustKnow: ['提示词工程', '文生文', '文生图', '文生视频'],
      tools: ['Claude', 'ChatGPT', 'Midjourney', 'Sora', '可灵'],
      agents: ['聊天型 Agent', '内容创作 Agent'],
      firstTask: '用 AI 为你感兴趣的领域策划 10 个爆款选题',
      prompt: '我是【平台】的内容创作者，专注【领域】。请帮我策划 10 个高互动率选题。每个选题包含：1. 标题 2. 为什么能火 3. 目标受众 4. 内容大纲 5. 推荐形式（图文/短视频/长文）。',
      warnings: ['AI 生成内容要加入个人观点才有独特性', '图片/音乐/视频版权需了解平台政策'],
    },
    business: {
      name: '用 AI 做商业项目',
      steps: [
        '1. 用 AI 做市场调研：市场规模、竞争格局、用户痛点（30分钟）',
        '2. 用 AI 辅助商业计划书和投资人路演稿（1小时）',
        '3. 用 Vibe Coding 快速搭建 MVP 原型（2-4小时）',
        '4. 用 AI 设计营销方案和用户画像（30分钟）',
        '5. 用 AI 做数据分析和运营决策辅助（持续）',
      ].map(toStep),
      mustKnow: ['Vibe Coding', 'Agent', '数据分析', '工作流'],
      tools: ['Claude Code', 'Cursor', 'Claude', 'ChatGPT', 'Gamma'],
      agents: ['聊天型 Agent', '编程 Agent', '数据分析 Agent'],
      firstTask: '用 AI 做一份目标市场的竞品分析报告',
      prompt: '我要创业做【项目简述】。请帮我做竞品分析：1. 列出 5-8 个主要竞品 2. 每个竞品的优劣势 3. 市场空白机会 4. 差异化建议。以表格形式输出，语言客观中立。',
      warnings: ['AI 的市场数据可能过时——要自己验证', '商业决策最终靠自己，AI 只是辅助'],
    },
  },
};

function generateRoute(identityId, goalId) {
  const identity = identities.find((i) => i.id === identityId);
  const goal = goals.find((g) => g.id === goalId);
  const config = routeData[identityId]?.[goalId];

  if (!identity || !goal || !config) return null;

  return {
    identity: identity.name,
    goal: goal.name,
    ...config,
  };
}

export function getRoute(identityId, goalId) {
  const route = generateRoute(identityId, goalId);
  if (route) return route;

  const identity = identities.find((i) => i.id === identityId) || identities[0];
  const goal = goals.find((g) => g.id === goalId) || goals[0];

  return {
    identity: identity.name,
    goal: goal.name,
    name: `${identity.name}的${goal.name}路线`,
    steps: [
      '1. 先浏览本网站"AI 是什么"板块，建立基本认知（30分钟）',
      '2. 了解 3-5 个与你目标相关的 AI 名词',
      '3. 选择 1-2 个适合你的 AI 工具，注册并开始使用',
      '4. 复制本网站提供的提示词模板，实际动手操作',
      '5. 完成第一个小任务后，逐步增加复杂度',
    ].map(toStep),
    mustKnow: ['AI', '大语言模型', '提示词', 'Agent'],
    tools: ['Claude', 'ChatGPT', 'DeepSeek'],
    agents: ['聊天型 Agent'],
    firstTask: '用 AI 完成一个与你目标相关的简单任务',
    prompt: '请用通俗易懂的语言帮我解释【你想了解的概念】。包含：1. 是什么 2. 为什么重要 3. 怎么用 4. 一个实际例子。',
    warnings: ['AI 的回答可能有误，重要信息要核实', '从简单的任务开始，循序渐进'],
  };
}
