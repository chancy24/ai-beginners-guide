// ============================================================
// AI 初学者指南 - 平台 / 工具数据（2026 版）
// 涵盖 19 个主流 AI 平台和工具，内容精简实用
// ============================================================

export const platformFilters = [
  { id: "chat", name: "聊天助手", icon: "💬" },
  { id: "framework", name: "开发框架", icon: "🛠️" },
  { id: "lowcode", name: "低代码平台", icon: "🧩" },
  { id: "coding-tool", name: "编程工具", icon: "⌨️" },
  { id: "model-platform", name: "模型平台", icon: "☁️" },
];

export const platforms = [
  // ========================================================================
  // 1. Claude (Anthropic)
  // ========================================================================
  {
    id: "claude",
    name: "Claude",
    icon: "🧠",
    description:
      "Claude 是 Anthropic 推出的 AI 助手，以长上下文（200K Token）、深度推理和安全性著称。最新 Claude 4 系列（Opus/Sonnet/Haiku）在代码生成、文档分析和学术写作方面表现突出。支持 MCP 协议，可通过 Claude Code 等工具构建 Agent 工作流。",
    audience:
      "适合处理长文档的知识工作者、开发者、学术研究者。Claude 在写作质量和深度推理方面优势明显，是严肃内容创作和代码开发的首选助手之一。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "长文档分析（合同审阅、论文研读、代码库理解）",
      "高质量写作（学术论文、商业报告、创意内容）",
      "代码生成与代码审查",
      "深度推理和复杂问题分析",
    ],
    unsuitableFor: [
      "需要实时联网搜索的场景（默认无网络访问）",
      "需要生成图像的任务",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: false,
    pros: [
      "200K 超长上下文窗口，业内领先",
      "Claude 4 系列写作与推理能力卓越",
      "支持 MCP 协议扩展能力",
      "Artifacts 和 Projects 支持知识库与迭代预览",
      "中文表达自然流畅",
    ],
    cons: [
      "国内访问需要海外手机号和网络工具",
      "免费版有严格用量限制",
      "不支持原生图像生成和联网搜索",
      "订阅费用较高",
    ],
    recommendedScenarios: [
      "学术研究和论文写作",
      "长篇法务/合同文档分析",
      "高质量代码开发与审查",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "Claude 的写作和推理能力在 2026 年仍是行业标杆。建议先用免费版体验其风格，再决定是否订阅 Pro。与 MCP 生态配合可构建强大的定制化工作流。",
  },

  // ========================================================================
  // 2. ChatGPT (OpenAI)
  // ========================================================================
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    description:
      "ChatGPT 是 OpenAI 推出的全球用户量最大的 AI 助手。基于 GPT-5 系列模型，支持多轮对话、文件分析、联网搜索、DALL-E 图像生成、GPTs 自定义应用和高级数据分析。是目前功能覆盖面最广的消费者 AI 产品。",
    audience:
      "适合所有人群——从零基础初学者到专业开发者。涵盖写作、编程、学习、数据分析、图像创作等全场景。GPTs 生态让非技术人员也能定制专属 AI。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "日常问答、写作辅助和翻译",
      "数据分析和图表生成",
      "编程学习和代码辅助",
      "DALL-E 图像生成",
      "通过 GPTs 创建定制 AI 工具",
    ],
    unsuitableFor: [
      "构建复杂多步骤自动化工作流",
      "需要私有化部署的企业场景",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "上手极简，界面友好",
      "GPT-5 模型能力强大",
      "多模态支持（文字、图片、文件、语音）",
      "GPTs 生态丰富，可自定义应用",
      "教程和社区资源最丰富",
    ],
    cons: [
      "免费版功能和次数受限",
      "订阅费用较高",
      "国内访问需要特殊网络环境",
      "数据存储在美国，有跨境合规顾虑",
    ],
    recommendedScenarios: [
      "AI 初学者入门体验",
      "日常办公写作与头脑风暴",
      "快速原型验证和数据分析",
      "通过 GPTs 定制个性化 AI 工具",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "对于 AI 初学者，ChatGPT 仍是最推荐的入门平台。免费版足以体验核心能力，觉得有价值再升级。GPTs 生态是探索 AI 应用可能性最低门槛的方式。",
  },

  // ========================================================================
  // 3. DeepSeek
  // ========================================================================
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: "🔍",
    description:
      "DeepSeek 是深度求索推出的 AI 助手，以免费开放、开源模型和强大的推理能力迅速崛起。V3 基础模型和 R1 推理模型的组合在数学、编程和逻辑推理任务上表现一流。支持 128K 上下文，可通过官方 App 和网页端免费使用。",
    audience:
      "适合追求高性价比的中国用户、开发者和研究人员。DeepSeek 对中文的理解和生成质量优秀，开源模型可本地部署，深受技术社区喜爱。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "中文写作、翻译和内容创作",
      "数学、编程和逻辑推理任务",
      "开源模型的本地部署和定制",
      "日常问答和学习辅助",
    ],
    unsuitableFor: [
      "需要多模态识别的场景（当前主要支持文本）",
      "需要图像生成的任务",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "完全免费使用，无次数限制",
      "R1 推理模型能力接近顶级付费产品",
      "开源生态活跃，可本地部署",
      "中文理解和生成质量优秀",
      "API 定价极具竞争力",
    ],
    cons: [
      "多模态能力相对薄弱",
      "高峰期响应速度可能下降",
      "生态和第三方集成不如 OpenAI 成熟",
    ],
    recommendedScenarios: [
      "中文场景的高性价比 AI 助手",
      "编程和数学推理辅助",
      "开源模型本地部署和二次开发",
      "日常免费 AI 使用首选",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "DeepSeek 是 2026 年中国用户性价比最高的 AI 助手。免费且能力强，特别适合中文场景。如果你关注 AI 开源生态或需要本地部署模型，DeepSeek 的开源模型是首选。",
  },

  // ========================================================================
  // 4. Gemini (Google)
  // ========================================================================
  {
    id: "gemini",
    name: "Gemini",
    icon: "✨",
    description:
      "Gemini 是 Google 推出的多模态 AI 助手，基于 Gemini 2.5 模型，深度融合 Google 搜索、Gmail、Docs、YouTube 等生态。支持高达 100 万 Token 的上下文窗口和原生多模态理解能力。对 Google Workspace 用户来说，是最自然的 AI 搭档。",
    audience:
      "适合 Google 生态重度用户——使用 Gmail、Google Docs、YouTube 的个人和团队。也适合需要超大上下文和多模态理解的场景。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "Google Workspace 中的写作和数据分析",
      "YouTube 视频内容总结和分析",
      "多模态理解（图片、视频、音频）",
      "结合 Google 搜索的实时信息查询",
    ],
    unsuitableFor: [
      "中国大陆使用（网络访问受限）",
      "需要私有化部署的场景",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "与 Google 全家桶深度整合",
      "上下文窗口极大（100 万 Token）",
      "原生多模态，免费版功能慷慨",
      "结合搜索提供最新信息",
      "Gemini 2.5 推理能力大幅提升",
    ],
    cons: [
      "国内使用需特殊网络环境",
      "中文质量略逊于 Claude 和 DeepSeek",
      "与 Google 生态绑定较深",
      "部分功能有地区限制",
    ],
    recommendedScenarios: [
      "Google Workspace 用户日常办公",
      "YouTube 视频内容分析",
      "超长文档信息整合",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "如果你是 Google 生态深度用户，Gemini 的集成价值很高。国内用户若不方便访问 Google 服务，建议优先用 DeepSeek 或通义千问。免费版对初学者是很好的能力测试入口。",
  },

  // ========================================================================
  // 5. Kimi (Moonshot)
  // ========================================================================
  {
    id: "kimi",
    name: "Kimi",
    icon: "🌙",
    description:
      "Kimi 是月之暗面（Moonshot AI）推出的 AI 助手，以超长上下文处理和联网搜索能力闻名。支持多达 200 万字上下文，可将整本书或大量文档一次性加载分析。在国内 AI 助手市场中，Kimi 的长文档处理能力独树一帜。",
    audience:
      "适合需要处理大量文档的中国用户——研究人员、律师、学生、内容创作者。如果你是「把整本 PDF 扔给 AI 分析」的使用者，Kimi 是最佳选择。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "超长文档一次性分析（整本书、大量论文）",
      "联网搜索与信息整合",
      "中文写作和内容创作",
      "网页链接内容的阅读和总结",
    ],
    unsuitableFor: [
      "需要深度推理和复杂逻辑的场景",
      "代码生成和软件开发辅助",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "超长上下文处理能力（200 万字）",
      "国内网络环境直接使用，无需特殊工具",
      "联网搜索功能实用",
      "中文长文写作和总结质量优秀",
      "免费额度大方",
    ],
    cons: [
      "代码和推理能力不如 Claude/DeepSeek",
      "多模态能力有限",
      "国际化生态较弱",
      "高级功能需订阅",
    ],
    recommendedScenarios: [
      "长篇论文和书籍的快速阅读分析",
      "法律合同和文献综述",
      "联网搜索与资料整理",
      "中文长篇内容创作",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "Kimi 是国内长文档处理场景的首选。如果你是学生或研究人员，需要一次性让 AI「读完」大量资料再回答问题，Kimi 的超长上下文能力无可替代。日常使用可与 DeepSeek 互补。",
  },

  // ========================================================================
  // 6. 通义千问 (Alibaba)
  // ========================================================================
  {
    id: "tongyi",
    name: "通义千问",
    icon: "☁️",
    description:
      "通义千问是阿里巴巴推出的 AI 助手品牌，旗下包含通义千问 App（聊天助手）和通义万相（图像生成）等多款产品。基于通义 2.5 系列模型，与阿里云、钉钉、夸克等生态深度整合，是阿里系用户和国内企业的首选 AI 平台之一。",
    audience:
      "适合国内用户，尤其是阿里云和钉钉的企业用户。通义千问对中文理解深入，在国内企业办公场景中有较强的生态协同优势。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "中文日常问答和写作辅助",
      "钉钉办公场景的 AI 集成",
      "通义万相 AI 图像生成",
      "阿里云上的企业级 AI 应用开发",
    ],
    unsuitableFor: [
      "需要国际顶尖推理能力的复杂分析",
      "海外用户（主要面向中国市场）",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: false,
    pros: [
      "与阿里生态（钉钉、阿里云、夸克）深度整合",
      "国内直接使用，网络无障碍",
      "通义万相图像生成功能实用",
      "企业级安全和合规保障",
      "API 对国内开发者友好",
    ],
    cons: [
      "推理深度与 Claude/DeepSeek R1 有差距",
      "国际化影响力有限",
      "部分高级功能需阿里云付费",
      "产品线较多，体验分散",
    ],
    recommendedScenarios: [
      "阿里云和钉钉用户的企业办公",
      "国内日常 AI 辅助写作和问答",
      "中文图像生成（通义万相）",
      "企业级 AI 应用的合规部署",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "如果你是阿里生态用户（特别是钉钉企业用户），通义千问是最自然的 AI 选择。对国内普通用户来说，通义千问 App 是体验 AI 助手的便捷入口。通义万相在中文场景的图像生成上比国际产品更接地气。",
  },

  // ========================================================================
  // 7. 豆包 (ByteDance)
  // ========================================================================
  {
    id: "doubao",
    name: "豆包",
    icon: "🫘",
    description:
      "豆包是字节跳动推出的 AI 助手，集成在抖音、今日头条等字节系应用中，是国内用户量最大的 AI 产品之一。支持文字对话、语音交互、图像生成和文件分析。与字节生态的深度融合使其在国内消费级 AI 市场占据领先地位。",
    audience:
      "适合国内普通用户，尤其是已经在使用抖音、今日头条和飞书的人。豆包的语音交互体验优秀，对非文字输入偏好者（老人、儿童）特别友好。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "日常闲聊和语音交互",
      "抖音/头条生态内的 AI 辅助",
      "图像生成和创意内容",
      "飞书办公场景的 AI 能力",
      "儿童学习陪伴",
    ],
    unsuitableFor: [
      "需要深度推理和专业分析的场景",
      "代码开发和复杂技术问题",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: true,
    pros: [
      "国内用户量最大，生态覆盖广",
      "语音交互体验优秀",
      "与抖音/飞书深度整合",
      "完全免费使用",
      "上手门槛极低",
    ],
    cons: [
      "学术和专业技术能力较弱",
      "数据存储在字节跳动服务器",
      "非字节生态外使用受限",
      "高级推理不如专业 AI 助手",
    ],
    recommendedScenarios: [
      "国内普通用户的日常 AI 助手",
      "语音交互为主的场景",
      "抖音和飞书用户的生态 AI 体验",
      "儿童教育和陪伴场景",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "豆包是国内最「接地气」的 AI 助手，如果你已经在用字节系产品，它的集成体验非常自然。语音交互功能对不擅长打字的用户特别友好。如果需要更专业的分析或编程辅助，建议搭配 DeepSeek 或 Claude 使用。",
  },

  // ========================================================================
  // 8. Claude Code
  // ========================================================================
  {
    id: "claude-code",
    name: "Claude Code",
    icon: "🛠️",
    description:
      "Claude Code 是 Anthropic 推出的命令行 AI 编程 Agent，可直接读写文件、执行命令、管理 Git、运行测试。支持 MCP 协议扩展工具能力，通过 Extended Thinking 模式处理复杂架构设计和跨文件重构。是 2026 年能力最强的终端编程 Agent 之一。",
    audience:
      "面向有命令行使用经验的软件开发者。适合需要处理复杂跨文件编程任务的全栈工程师和架构师。不适合追求 GUI 体验或轻量代码补全的开发者。",
    needsCoding: true,
    difficulty: "进阶",
    suitableFor: [
      "复杂跨文件代码重构和架构调整",
      "从零搭建项目脚手架",
      "深度代码审查和 Bug 排查",
      "MCP 驱动的自定义编程工作流",
      "DevOps 和 CI/CD 自动化脚本",
    ],
    unsuitableFor: [
      "完全不会命令行的新手",
      "轻量级代码补全场景（用 Copilot 或 Cursor 更简便）",
    ],
    beginnerFriendly: false,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "Claude 4 模型驱动的强大代码理解能力",
      "可直接操作文件系统和执行命令",
      "支持 MCP 协议，工具链可无限扩展",
      "200K 上下文容纳大型项目理解",
      "Extended Thinking 擅长复杂逻辑",
    ],
    cons: [
      "需要命令行操作经验",
      "重度使用 Token 消耗大，成本较高",
      "国内使用需 API 访问工具",
      "无内置 GUI，代码变更预览不如 IDE 直观",
    ],
    recommendedScenarios: [
      "复杂项目的架构重构和迁移",
      "大型代码库理解和文档化",
      "需要深度思考的算法实现",
      "基于 MCP 的自定义开发工作流",
    ],
    category: "coding-tool",
    categoryLabel: "编程工具",
    recommendationNote:
      "Claude Code 是「重量级」编程 Agent——能力极强但门槛较高。建议有命令行经验的开发者尝试。搭配 MCP 可构建强大的自动化开发流水线。初学者可先从 Cursor 或 Copilot 入门。",
  },

  // ========================================================================
  // 9. Cursor
  // ========================================================================
  {
    id: "cursor",
    name: "Cursor",
    icon: "🖱️",
    description:
      "Cursor 是基于 VS Code 深度定制的 AI 优先代码编辑器。支持 Tab 智能补全、自然语言多文件编辑（Composer）、全项目上下文感知的聊天等功能。2026 年 Cursor 已集成 Agent 模式，可自主完成跨文件开发任务，是综合体验最好的 AI IDE 之一。",
    audience:
      "面向所有软件开发者，从编程初学者到资深工程师。VS Code 用户可零成本迁移。自然语言编程对新手特别友好，大幅降低学习门槛。",
    needsCoding: true,
    difficulty: "入门",
    suitableFor: [
      "日常编码的智能补全和加速",
      "自然语言驱动的多文件功能开发",
      "代码库探索和理解",
      "编程学习（AI 实时辅助和解释）",
      "快速原型和 MVP 构建",
    ],
    unsuitableFor: [
      "完全不需要写代码的业务场景",
      "需要在 CI/CD 中运行的自动化编程",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "基于 VS Code，迁移成本极低",
      "Tab 补全和 Composer 体验业界领先",
      "Agent 模式可自主完成开发任务",
      "全项目上下文感知能力强",
      "对编程初学者极其友好",
    ],
    cons: [
      "专业版需付费订阅",
      "国内下载和升级有时不便",
      "超大单体仓库性能可能下降",
      "数据处理需关注隐私条款",
    ],
    recommendedScenarios: [
      "日常软件开发的完整流程辅助",
      "编程学习的 AI 伴侣",
      "快速原型开发",
      "接手陌生代码库的探索和理解",
    ],
    category: "coding-tool",
    categoryLabel: "编程工具",
    recommendationNote:
      "Cursor 是 2026 年对编程初学者最友好的 AI 编程工具。VS Code 用户切换零成本。建议先用免费版试用，感受 Agent 模式的开发效率提升后再决定订阅。与 Claude Code 互补使用效果最佳。",
  },

  // ========================================================================
  // 10. GitHub Copilot
  // ========================================================================
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    icon: "👨‍✈️",
    description:
      "GitHub Copilot 是全球使用最广泛的 AI 编程助手，深度集成于 VS Code、JetBrains 等主流 IDE。2026 版已升级多模型支持（包括 GPT-5、Claude 4 等），提供代码补全、Chat、代码审查、Agent 模式等功能。对学生和开源维护者免费，生态最成熟。",
    audience:
      "面向所有软件开发者，尤其是已在 GitHub 生态中的用户。对学生免费，是学习编程时最稳妥的 AI 辅助选择。企业和团队可通过 Business/Enterprise 版获得管理功能。",
    needsCoding: true,
    difficulty: "入门",
    suitableFor: [
      "IDE 中的代码补全和生成",
      "通过 Chat 进行代码理解和解释",
      "自动生成单元测试",
      "代码审查和优化建议",
      "团队协作中的代码一致性",
    ],
    unsuitableFor: [
      "完全零编程基础的用户",
      "需要跨文件复杂操作的终端级任务",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "用户量最大，生态最成熟",
      "多模型支持，可选择不同后端",
      "IDE 集成无缝，代码补全几乎无延迟",
      "对学生和开源维护者免费",
      "与 GitHub 生态（Issues、PR）协同",
    ],
    cons: [
      "跨文件复杂操作不如 Claude Code",
      "Chat 交互体验不如 Cursor",
      "个人版需付费",
      "国内 GitHub 服务偶尔不稳定",
    ],
    recommendedScenarios: [
      "IDE 中的日常代码补全",
      "编程学习的即时辅助",
      "团队开发中的代码一致性",
      "开源项目维护",
    ],
    category: "coding-tool",
    categoryLabel: "编程工具",
    recommendationNote:
      "GitHub Copilot 是最「稳妥」的 AI 编程助手选择——成熟、稳定、覆盖面广。编程初学者建议从 Copilot 开始（学生免费），它的代码建议相对保守，更适合学习阶段。需要更强多文件操作能力时再补充 Cursor 或 Claude Code。",
  },

  // ========================================================================
  // 11. Windsurf
  // ========================================================================
  {
    id: "windsurf",
    name: "Windsurf",
    icon: "🌊",
    description:
      "Windsurf 是 Codeium 推出的 AI 优先 IDE，以创新的「Cascade」流式 Agent 体验著称。与 Cursor 类似基于 VS Code 但提供了更激进的 AI 集成方式——Agent 可自主分析、规划和执行多步骤编程任务。2026 年在多文件编辑和 Agent 自动化方面与 Cursor 形成强力竞争。",
    audience:
      "面向希望体验最激进 AI IDE 体验的开发者。如果你追求更高程度的 AI 自主编程能力，Windsurf 的 Cascade 模式可能比 Cursor 的 Composer 更合你的口味。",
    needsCoding: true,
    difficulty: "入门",
    suitableFor: [
      "AI 自主多步骤编程任务",
      "多文件编辑和重构",
      "代码库理解和迁移",
      "快速原型和项目初始化",
    ],
    unsuitableFor: [
      "偏好传统手动编码体验的开发者",
      "需要最小化 AI 干扰的精确控制场景",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "Cascade 流式 Agent 体验独特",
      "多步骤自主编程能力强",
      "基于 VS Code，学习成本低",
      "免费版功能相对慷慨",
      "更新迭代速度快",
    ],
    cons: [
      "市场知名度和社区不如 Cursor/Copilot",
      "团队版需付费",
      "Agent 自主执行结果有时不稳定",
      "国内下载和访问可能受限",
    ],
    recommendedScenarios: [
      "追求高自主 AI 编程体验",
      "多文件复杂编辑任务",
      "新项目快速搭建",
    ],
    category: "coding-tool",
    categoryLabel: "编程工具",
    recommendationNote:
      "Windsurf 是 Cursor 最有力的竞争对手。如果你喜欢 AI 更高程度的自主编程，它的 Cascade 模式值得一试。建议与 Cursor 同时体验，选择更符合自己工作流的一款。两者功能趋同但体验哲学不同。",
  },

  // ========================================================================
  // 12. Dify
  // ========================================================================
  {
    id: "dify",
    name: "Dify",
    icon: "🧩",
    description:
      "Dify 是国内外最流行的开源 AI 应用开发平台。通过可视化界面即可编排 Prompt、管理知识库、设计工作流、构建 Agent。支持对接 Claude、GPT、DeepSeek、通义千问等国内外主流模型。可一键发布为 API 或 Web 应用，是国内非技术人员构建 AI 应用的首选。",
    audience:
      "面向所有想构建 AI 应用但不想深入编程的人——产品经理、运营、创业者、企业 IT。也适合开发者用于快速原型验证。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "零代码搭建企业知识库问答机器人",
      "可视化设计 AI 工作流",
      "构建多 Agent 协作应用",
      "快速原型和 MVP 验证",
    ],
    unsuitableFor: [
      "对性能和定制有极致要求的超大规模系统",
      "完全离线环境中运行（云端版依赖网络）",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: true,
    supportsKnowledgeBase: true,
    supportsWorkflow: true,
    pros: [
      "开源可私有化部署，数据安全可控",
      "可视化操作真正降低 AI 开发门槛",
      "支持国内外多种主流模型",
      "中文生态完善（文档、教程、社区）",
      "知识库、工作流、Agent 功能一站齐全",
    ],
    cons: [
      "功能深度不如垂直专用工具",
      "私有化部署需要一定服务器资源",
      "复杂业务逻辑的可视化编排会变混乱",
      "社区版功能有限制",
    ],
    recommendedScenarios: [
      "中小企业快速搭建 AI 知识库问答",
      "非技术人员构建自动化 AI 流程",
      "AI 应用 MVP 快速验证",
    ],
    category: "lowcode",
    categoryLabel: "低代码平台",
    recommendationNote:
      "Dify 是 2026 年国内构建 AI 应用的最佳低代码选择。建议先在云端版免费体验，了解核心功能后决定是否私有化部署。零基础用户比学 LangChain 等框架轻松得多。",
  },

  // ========================================================================
  // 13. Coze (扣子)
  // ========================================================================
  {
    id: "coze",
    name: "Coze (扣子)",
    icon: "🧵",
    description:
      "Coze（扣子）是字节跳动推出的 AI Bot 构建平台，通过可视化界面快速创建和发布 AI 智能体。最大特色是一键发布到飞书、抖音、微信等社交平台。插件生态和知识库功能完善，是国内社交渠道部署 AI Bot 最便捷的选择。",
    audience:
      "面向运营、营销、社群管理和产品经理等非技术用户。如果需要在飞书、抖音、微信等渠道部署 AI 客服或互动 Bot，Coze 是门槛最低的方案。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "在社交平台（飞书、抖音、微信）部署 AI Bot",
      "快速搭建智能客服机器人",
      "创建特定人设的 AI 聊天角色",
      "利用插件扩展 Bot 能力",
    ],
    unsuitableFor: [
      "需要深度定制代码逻辑的复杂应用",
      "对数据隐私要求极高且不能使用字节云服务的场景",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: true,
    pros: [
      "真正零代码，界面友好易用",
      "一键发布到多个社交平台",
      "插件生态丰富",
      "与飞书/抖音生态深度整合",
      "中文支持完善",
    ],
    cons: [
      "非字节生态外分发受限",
      "高级定制能力有限",
      "数据存储在字节跳动云上",
      "复杂对话流程编排不如 Dify 灵活",
    ],
    recommendedScenarios: [
      "飞书/抖音上的 AI 互动 Bot 部署",
      "社群运营自动问答",
      "营销活动 AI 互动体验",
    ],
    category: "lowcode",
    categoryLabel: "低代码平台",
    recommendationNote:
      "如果目标是在字节系平台部署 Bot，Coze 是零门槛最佳选择。如果目标平台不限于字节生态或需更复杂的工作流编排，Dify 更灵活。两者都支持零代码操作，建议都试用。",
  },

  // ========================================================================
  // 14. Midjourney
  // ========================================================================
  {
    id: "midjourney",
    name: "Midjourney",
    icon: "🎨",
    description:
      "Midjourney 是 AI 图像生成领域的标杆产品，以极高的艺术品质和美学表现力著称。通过 Discord 或 Web App 输入自然语言描述即可生成精美图像。2026 版支持更精细的风格控制、角色一致性和图像编辑功能，是设计师和创意工作者的必备工具。",
    audience:
      "面向设计师、艺术家、营销创意人员和任何需要高质量图像的人。即使没有绘画基础也能产出专业级视觉作品。操作通过文字提示词即可，无需编程。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "概念艺术和视觉创意设计",
      "营销素材和社交媒体图像",
      "产品原型和设计灵感",
      "故事板和场景可视化",
    ],
    unsuitableFor: [
      "需要精确编辑或排版的设计任务",
      "生成指定真实人物或品牌的图像（有使用限制）",
    ],
    beginnerFriendly: true,
    enterpriseReady: false,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "图像艺术品质行业最高",
      "风格控制和美学表现力卓越",
      "社区活跃，提示词资源丰富",
      "持续迭代，功能更新快",
      "创作自由度极高",
    ],
    cons: [
      "需付费订阅才能使用",
      "国内访问需网络工具",
      "通过 Discord/Web 操作，集成灵活性一般",
      "中文提示词效果不如英文",
      "图像精确编辑能力有限",
    ],
    recommendedScenarios: [
      "创意设计和概念艺术",
      "营销和品牌视觉素材",
      "游戏和影视前期概念",
      "设计灵感探索",
    ],
    category: "model-platform",
    categoryLabel: "模型平台",
    recommendationNote:
      "Midjourney 是 AI 图像生成的艺术品质天花板。如果你需要高质量创意视觉素材，它是最值得订阅的工具之一。操作简单——学写好的提示词（Prompt）是关键。建议参考社区优秀案例快速入门。",
  },

  // ========================================================================
  // 15. DALL-E
  // ========================================================================
  {
    id: "dalle",
    name: "DALL-E",
    icon: "🎯",
    description:
      "DALL-E 是 OpenAI 推出的 AI 图像生成模型，深度集成在 ChatGPT 中，可通过自然语言对话生成和修改图像。最新版本在文字渲染、真实感和指令遵循方面大幅提升。最大的优势是「边聊边画」——在 ChatGPT 对话中无缝切换文字和图像创作。",
    audience:
      "面向 ChatGPT 用户和需要快速生成图像的普通用户。最大的优势是零门槛——在对话中说「帮我画一张...」即可。适合非设计专业但有图像需求的广泛人群。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "通过自然语言快速生成图像",
      "在 ChatGPT 对话中无缝创作",
      "社交媒体和内容配图",
      "教育演示和概念说明图",
    ],
    unsuitableFor: [
      "需要专业级艺术品质的场景（Midjourney 更优）",
      "需要精细后期编辑的设计任务",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "与 ChatGPT 深度集成，对话式创作",
      "文字理解准确，指令遵循度高",
      "最新版文字渲染能力大幅提升",
      "操作极其简单，零学习成本",
      "有 API 可集成到应用中",
    ],
    cons: [
      "需 ChatGPT Plus/Pro 订阅",
      "艺术性和风格控制不如 Midjourney",
      "国内使用需网络工具",
      "复杂场景的真实感仍在提升中",
    ],
    recommendedScenarios: [
      "ChatGPT 用户的一站式图文创作",
      "快速配图和社交媒体内容",
      "教育场景的视觉辅助",
      "通过 API 在产品中集成图像生成",
    ],
    category: "model-platform",
    categoryLabel: "模型平台",
    recommendationNote:
      "DALL-E 的最大优势是「方便」——如果你已经是 ChatGPT 用户，不需要额外工具就能生成图像。品质上 Midjourney 更优，但 DALL-E 的操作便利性和文字理解能力更胜一筹。两者可以互补使用。",
  },

  // ========================================================================
  // 16. Sora
  // ========================================================================
  {
    id: "sora",
    name: "Sora",
    icon: "🎬",
    description:
      "Sora 是 OpenAI 推出的 AI 视频生成模型，可将文字描述或参考图像转化为高质量视频。2026 版支持更长的视频时长、更好的物理一致性和更精细的镜头控制。已集成到 ChatGPT Plus/Pro 订阅中，是目前 AI 视频生成领域的领军产品之一。",
    audience:
      "面向内容创作者、营销团队、教育工作者和视频制作爱好者。无需专业视频制作技能，通过文字描述即可生成可用的视频素材。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "短视频和社交媒体内容创作",
      "概念视频和产品演示",
      "教育和培训视频素材",
      "创意叙事和故事板可视化",
    ],
    unsuitableFor: [
      "需要精确剪辑和专业后期的商业视频",
      "超长时长或复杂叙事的完整影片",
    ],
    beginnerFriendly: true,
    enterpriseReady: false,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "AI 视频生成领域技术领先",
      "物理一致性和画面质量持续提升",
      "集成在 ChatGPT 中，使用便捷",
      "支持文字和图像多模态输入",
      "OpenAI 持续投入，更新频繁",
    ],
    cons: [
      "需 ChatGPT Plus/Pro 订阅，成本较高",
      "国内访问需网络工具",
      "视频时长和分辨率仍有上限",
      "复杂场景的准确性有待提升",
      "生成速度受算力影响，可能需要等待",
    ],
    recommendedScenarios: [
      "短视频内容创作",
      "概念验证和产品 Demo",
      "社交媒体营销视频",
      "教育培训素材制作",
    ],
    category: "model-platform",
    categoryLabel: "模型平台",
    recommendationNote:
      "Sora 是 AI 视频生成的标杆产品。如果你是 ChatGPT 订阅用户，可以直接体验。AI 视频生成在 2026 年还处于快速发展期，适合尝鲜和创意探索。商业级视频制作仍需配合专业工具。",
  },

  // ========================================================================
  // 17. Perplexity
  // ========================================================================
  {
    id: "perplexity",
    name: "Perplexity",
    icon: "🔎",
    description:
      "Perplexity 是 AI 搜索引擎的代表产品，将大语言模型与实时网络搜索深度结合。每次回答都附带来源引用，可验证信息准确性。支持深度研究模式（自动多轮搜索和综合分析）、文件上传分析和知识库功能。2026 年是 AI 搜索领域全球用户最多的产品。",
    audience:
      "适合需要获取准确、可溯源信息的研究者、学生和知识工作者。如果你对 ChatGPT 的「一本正经胡说八道」有顾虑，Perplexity 的引用机制能提供更好的信息可信度。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "研究性搜索（论文、市场调查、事实核查）",
      "实时新闻和事件的深度分析",
      "旅行规划和产品比价",
      "学术文献搜索和综述",
    ],
    unsuitableFor: [
      "需要纯创意写作（非事实性内容）的场景",
      "长文档编辑和代码开发",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: false,
    pros: [
      "回答附带来源引用，信息可溯源",
      "实时联网搜索，信息时效性强",
      "深度研究模式可自动多轮搜索",
      "界面简洁，搜索体验优秀",
      "Pro 版支持高级模型和文件分析",
    ],
    cons: [
      "免费版深度研究次数有限",
      "国内访问需网络工具",
      "中文信息源的覆盖不如英文全面",
      "Pro 版订阅费用不低",
    ],
    recommendedScenarios: [
      "学术研究和事实核查",
      "市场和竞品调研",
      "旅行规划和信息综合",
      "需要高可信度的信息查询",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "Perplexity 是「搜索」和「AI 对话」的最佳结合。如果你经常需要查找最新信息并对准确性有要求，它比传统搜索引擎高效得多。建议与 ChatGPT 或 Claude 搭配使用——Perplexity 做搜索和研究，ChatGPT/Claude 做深度分析和创作。",
  },

  // ========================================================================
  // 18. NotebookLM
  // ========================================================================
  {
    id: "notebooklm",
    name: "NotebookLM",
    icon: "📓",
    description:
      "NotebookLM 是 Google 推出的 AI 研究笔记本，可上传文档、网页、视频等资料，让 AI 基于你的专属资料进行问答、总结和洞察生成。2026 版支持自动生成音频摘要（AI 播客风格双人对话），是研究和学习的革命性工具。免费使用，数据不上传至公共模型训练。",
    audience:
      "面向学生、研究人员、知识工作者和任何需要基于个人资料进行深度学习的人。如果你有大量资料需要 AI 帮你系统化理解和消化，NotebookLM 是独一无二的选择。",
    needsCoding: false,
    difficulty: "入门",
    suitableFor: [
      "基于个人文档的研究和问答",
      "课程笔记和学习资料整理",
      "音频摘要生成（播客式学习）",
      "会议记录和项目文档分析",
      "知识库的零代码构建",
    ],
    unsuitableFor: [
      "需要实时联网搜索的场景",
      "代码开发和编程辅助",
    ],
    beginnerFriendly: true,
    enterpriseReady: true,
    developerFriendly: false,
    supportsMultiAgent: false,
    supportsKnowledgeBase: true,
    supportsWorkflow: false,
    pros: [
      "完全免费使用",
      "基于专属资料，回答精准可控",
      "音频摘要（播客对话）功能独一无二",
      "隐私保护好，不用于模型训练",
      "界面极简，上手零门槛",
    ],
    cons: [
      "国内访问需网络工具",
      "不支持联网搜索",
      "上传资料有数量上限",
      "非 Google 生态用户的功能体验受限",
    ],
    recommendedScenarios: [
      "学生的课程学习和论文研究",
      "知识工作者的资料深度分析",
      "用音频摘要进行碎片化学习",
      "企业内部知识库的轻量搭建",
    ],
    category: "chat",
    categoryLabel: "聊天助手",
    recommendationNote:
      "NotebookLM 是最被低估的 AI 学习工具。如果你是学生或研究人员，上传课程 PDF 后让 AI 帮你梳理重点、生成问答——学习效率提升非常显著。音频摘要功能是通勤学习的利器。完全免费，强烈推荐尝试。",
  },

  // ========================================================================
  // 19. Ollama
  // ========================================================================
  {
    id: "ollama",
    name: "Ollama",
    icon: "🦙",
    description:
      "Ollama 是最流行的本地大模型运行平台，一键下载和运行 Llama、Qwen、DeepSeek、Mistral 等开源模型。支持 Windows/macOS/Linux 三平台，提供命令行和 REST API。2026 年已成为本地 AI 开发的事实标准工具，广泛用于隐私敏感场景和离线 AI 应用。",
    audience:
      "面向希望本地运行开源模型的 AI 爱好者、开发者和隐私关注者。适合有一台配置尚可的电脑（16GB+ RAM，推荐有独立 GPU）的用户。",
    needsCoding: false,
    difficulty: "进阶",
    suitableFor: [
      "本地运行开源大模型进行实验和评估",
      "构建离线 AI 应用（隐私优先）",
      "开发测试时作为本地模型后端",
      "学习和对比不同开源模型",
    ],
    unsuitableFor: [
      "硬件配置较低的电脑（低于 16GB RAM）",
      "追求云端顶级模型性能的场景",
    ],
    beginnerFriendly: false,
    enterpriseReady: false,
    developerFriendly: true,
    supportsMultiAgent: false,
    supportsKnowledgeBase: false,
    supportsWorkflow: false,
    pros: [
      "安装使用简单（类似 Docker 体验）",
      "支持几乎所有主流开源模型",
      "数据 100% 本地，隐私安全",
      "完全免费无订阅",
      "提供 REST API 方便集成",
    ],
    cons: [
      "对硬件有要求（建议 32GB RAM + 8GB VRAM）",
      "本地模型能力与云端顶级模型有差距",
      "大模型下载和加载耗时",
      "单机部署，不支持分布式扩展",
    ],
    recommendedScenarios: [
      "本地模型学习和实验",
      "隐私敏感场景的离线 AI",
      "免费开发测试（避免 API 费用）",
      "搭配 Open WebUI 构建本地 ChatGPT 替代品",
    ],
    category: "model-platform",
    categoryLabel: "模型平台",
    recommendationNote:
      "Ollama 是本地模型的门户工具。建议确保硬件达标后，从较小的模型（如 Qwen 3 7B 或 DeepSeek-R1-Distill 7B）开始体验。搭配 Open WebUI 可获得类 ChatGPT 的交互界面。开发时作为免费后端可大幅节省 API 费用。",
  },
];
