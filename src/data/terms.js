// ============================================================
// AI 初学者指南 - 116 个 AI 术语完整词典
// 涵盖基础概念、应用技术、智能体、平台工具、安全治理五大领域
// ============================================================

export const termCategories = [
  { id: "basics", name: "基础概念", icon: "🧠" },
  { id: "application", name: "应用技术", icon: "⚡" },
  { id: "agent", name: "智能体", icon: "🤖" },
  { id: "platform", name: "平台工具", icon: "🛠️" },
  { id: "safety", name: "安全治理", icon: "🛡️" },
];

export const terms = [
  // ========================================================================
  // 基础概念 (1-24)
  // ========================================================================

  // 1. AI
  {
    id: "ai",
    name: "AI",
    cnName: "人工智能",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "人工智能是让计算机模拟人类智能行为的科学技术，通过算法和数据让机器能感知环境、理解语言、做出决策。AI 不是单一产品，而是一大类技术的统称——就像「交通工具」包含汽车、飞机、轮船一样。2026 年，GPT-5、Claude 4、DeepSeek、Gemini 2.5 等先进 AI 已经能写文章、编程、绘画、诊断疾病，深度融入日常生活。",
    analogy: "AI 就像一个读过整个互联网、看过数以亿计图片的超能力助手——它可以帮你写作、画画、编程、翻译，几乎什么都会一点。",
    useCases: ["用 ChatGPT 或 Claude 写工作总结和邮件", "用 Midjourney 生成产品宣传图", "用 AI 编程助手自动补全代码"],
    misconception: "很多人以为 AI 就是 ChatGPT，其实 ChatGPT 只是 AI 的一种具体产品，AI 还包括图像识别、语音合成、自动驾驶等众多领域。",
    beginnerTip: "初次接触 AI 可从 ChatGPT 或 Claude 的免费版开始，用日常语言和它聊天，感受 AI 的能力边界，不必一开始就学原理。",
  },

  // 2. Machine Learning
  {
    id: "machine-learning",
    name: "Machine Learning",
    cnName: "机器学习",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "机器学习是 AI 的核心方法，让计算机从数据中自动学习规律而非手工编写规则。传统编程是「告诉机器每一步怎么做」，机器学习是「给机器一堆例子，让它自己总结」。比如给它看成千上万张猫的照片，它就能自己学会识别猫，而不需要人定义「猫有尖耳朵、胡须、四条腿」。",
    analogy: "传统编程像给机器人一张精确地图和每一步的行走指令；机器学习则像让它自己在城市里转一个月，自然就知道哪条路通向哪里——前者靠规则，后者靠经验。",
    useCases: ["垃圾邮件自动过滤", "电商网站的「猜你喜欢」推荐系统", "银行信用卡欺诈交易的自动识别"],
    misconception: "机器学习只是从数据中找出统计规律，它并不真正「理解」任何东西——它做的是数学上的模式匹配，而非人类式的领悟。",
    beginnerTip: "最快入门方式是用 Python 的 scikit-learn 训练一个鸢尾花分类器，只需 10 行代码就能感受「让机器从数据中学习」的过程。",
  },

  // 3. Deep Learning
  {
    id: "deep-learning",
    name: "Deep Learning",
    cnName: "深度学习",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "深度学习是机器学习的子领域，使用深层神经网络（几十到几百层计算单元堆叠）处理海量数据。浅层网络只识别简单的边缘和颜色，深层网络则逐层抽象——从边缘到形状到部件再到完整物体。GPT-5、Claude 4、图像生成、语音识别等所有令人惊叹的 AI 底层都是深度学习技术。",
    analogy: "机器学习像让一个人通过读书学知识，深度学习则像在他大脑里装了一个几百层的超级处理器——第一层识别线条，第二层识别形状，第三层识别物体，第一百层可能已经能理解「这张照片表达的情感」了。",
    useCases: ["自动驾驶中识别行人、车辆和交通标志", "AlphaFold 预测蛋白质的三维结构", "DALL-E 和 Midjourney 生成逼真的图像"],
    misconception: "「深度学习」的「深」指网络层数多，不是理解得深。一个 100 层的深度学习模型对常识的理解可能还不如一个 5 岁小孩。",
    beginnerTip: "入门推荐从 PyTorch 开始，先学会训练手写数字识别（MNIST），理解前向传播和反向传播这两个核心概念就好。",
  },

  // 4. Neural Network
  {
    id: "neural-network",
    name: "Neural Network",
    cnName: "神经网络",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "神经网络是一种受大脑启发的计算模型，由大量相互连接的「神经元」（计算节点）组成。每个神经元接收输入信号、进行加权计算、再通过激活函数输出结果。数据从输入层流入，经过多个隐藏层逐层处理，最终从输出层得出结果。GPT-5 和 Claude 4 的底层都是超大规模的神经网络。",
    analogy: "神经网络就像一座多层审批工厂：原材料（数据）从第一层传送带进入，每个工人（神经元）对材料做一个简单的加工判断再传给下一层。每个工人只做很简单的事，但几百层协作就能创造奇迹。",
    useCases: ["图像识别：判断照片里是猫还是狗", "机器翻译：将英文句子翻译成中文", "游戏 AI：AlphaGo 中评估棋盘局势的价值网络"],
    misconception: "生物大脑比最复杂的人工神经网络还要复杂无数倍——人工神经网络只是一个极其简化的数学模型，两者工作原理差异巨大。",
    beginnerTip: "神经网络的核心就是简单的乘法和加法。先从感知机（Perceptron）模型学起，理解一个神经元如何做决策，再逐步扩展到多层网络。",
  },

  // 5. LLM
  {
    id: "llm",
    name: "LLM",
    cnName: "大语言模型",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "大语言模型（LLM）是通过海量文本数据训练出的超大规模 AI 模型，专门用来理解和生成人类语言。GPT-5、Claude 4、Gemini 2.5、DeepSeek 都是 2026 年的主流 LLM。它们「大」在三个维度：参数量大（万亿级）、训练数据量大（几乎覆盖整个互联网）、上下文窗口大（百万 Token 级别）。LLM 是当前 AI 热潮的核心驱动力。",
    analogy: "LLM 就像一个读遍了人类所有书籍和网页的超级书虫，你问它任何问题，它都能根据读过的内容组织出像模像样的回答——它不是在搜索答案，而是在「预测最合理的下一个词」。",
    useCases: ["用 ChatGPT 或 Claude 撰写文案、翻译、总结文档", "搭建智能客服自动回答用户问题", "作为 AI 编程助手理解需求并生成代码"],
    misconception: "LLM 本质上是一个极其复杂的「下一词预测器」，不真正理解语义，只是统计上知道这些词后面最常跟着哪些词——所以它有时会「一本正经地胡说八道」。",
    beginnerTip: "把 LLM 当作「超级实习生」：它很能干，但需要你给出清晰的指令，而且它的产出需要你审阅和把关，不要盲信。",
  },

  // 6. Generative AI
  {
    id: "generative-ai",
    name: "Generative AI",
    cnName: "生成式AI",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "生成式 AI 是指能够创造新内容的 AI——不只是分析和分类已有数据，而是能「凭空」生成文字、图片、音频、视频甚至代码。ChatGPT 生文字、Midjourney 生图片、Suno 生音乐，都属于生成式 AI。它代表了 AI 从「判断」到「创造」的跨越。",
    analogy: "与传统 AI 相比，传统 AI 是鉴定师（能辨别古董真伪），生成式 AI 是艺术家（能创作全新的画作）——鉴定师判断「这是什么」，艺术家创造世界上从未存在过的东西。",
    useCases: ["用 DALL-E 或 Midjourney 生成创意海报", "用 Suno 或 Udio 为短视频配原创背景音乐", "用 Runway 或 Pika 生成产品宣传视频"],
    misconception: "生成式 AI 不是「复制粘贴」训练数据，而是在学习数据中潜在模式和规律后生成全新内容——但它可能无意中产生与训练数据相似的内容，涉及版权风险。",
    beginnerTip: "生成式 AI 是入门 AI 的最佳切入点，效果直观、反馈即时。建议从文本生成（ChatGPT 或 Claude）开始，再尝试图片生成（Midjourney），逐步扩展。",
  },

  // 7. Multimodal AI
  {
    id: "multimodal-ai",
    name: "Multimodal AI",
    cnName: "多模态AI",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "多模态 AI 能同时理解和处理多种类型的数据——文字、图像、音频、视频等。2026 年，GPT-5、Claude 4、Gemini 2.5、DeepSeek 等主流模型都已实现原生多模态，你可以上传照片、发送语音、展示视频，AI 都能综合理解并做出回应。多模态让 AI 更像一个五官俱全的人，而不只是一个只会读书的学者。",
    analogy: "单模态 AI 像一个只能读书的学者（只会处理文字），多模态 AI 则像一个五官俱全的人——能看、能听、能读、能说。你给它看一道菜的图片，它能告诉你怎么做；你哼一段旋律，它能告诉你这是什么歌。",
    useCases: ["上传检查报告图片，AI 综合阅读图片和文字给出健康建议", "拍会议白板照片，AI 识别手写内容并整理成电子笔记", "上传产品照片，AI 自动生成电商详情页图文描述"],
    misconception: "真正的多模态是让不同模态信息在模型内部深度融合——不是先看图再读字然后拼接，而是在模型「大脑」里融合理解，这对模型架构设计提出了更高要求。",
    beginnerTip: "体验多模态 AI 最好用 GPT-5、Gemini 2.5 或 Claude 4 的免费版，拍一张你桌上的物品或上传一份手写笔记，你会立刻感受到多种感官融合的强大。",
  },

  // 8. Training
  {
    id: "training",
    name: "Training",
    cnName: "训练",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "训练是让 AI 模型从数据中学习的过程：准备海量高质量数据，用强大的 GPU 集群跑数周到数月，让模型不断调整参数直到输出越来越准确。2026 年，训练 GPT-5 这样的顶级模型需要数万张 GPU、数千万甚至上亿美元的成本。不过，DeepSeek 等团队通过算法创新大幅降低了训练开销，正在改变「烧钱才能训大模型」的格局。",
    analogy: "训练 AI 就像培养一个孩子学习认字——最初它什么都不认识，你给它看「苹果」并告诉它这是苹果，经过成千上万次对照学习，它终于学会了。只是 AI 训练速度极快，几天就能「看完」一个人一辈子也读不完的书。",
    useCases: ["OpenAI 训练 GPT-5 用了数万张 GPU 跑了好几个月", "DeepSeek-V3 用创新的训练策略大幅降低了训练成本", "自动驾驶公司用数百万小时驾驶视频训练感知模型"],
    misconception: "训练不是把知识「存」进模型里——模型学到的是数据背后的统计规律和模式，不是把原文背下来。这也是为什么模型能回答从未见过的问题。",
    beginnerTip: "大多数初学者不需要自己从头训练模型（太贵了），使用已训练好的预训练模型做微调，效果同样好且成本极低。",
  },

  // 9. Inference
  {
    id: "inference",
    name: "Inference",
    cnName: "推理",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "推理在 AI 语境下有两层含义。技术层面：模型训练完成后，给它输入让它输出结果的过程——你每次向 ChatGPT 提问，后台就是在做推理。逻辑层面：模型根据已知信息推导出新结论的能力。训练让模型「学会」，推理让模型「运用」——训练只有几次，推理却要发生亿万次。",
    analogy: "训练就像学生花三年学习数学（成本高、时间长），推理就像学生参加考试做题（速度快、成本低）。训练决定了学生的上限，推理则把这个能力交付给用户使用。",
    useCases: ["每次在 ChatGPT 或 Claude 中输入问题并得到回复，就是一次推理", "手机语音助手理解指令并执行", "自动驾驶实时分析路况并做出驾驶决策"],
    misconception: "AI 的「推理」和人类逻辑推理不一样——它更像是基于统计的直觉判断，而非一步一步的逻辑推导，这也是它有时会犯常识性错误的原因。",
    beginnerTip: "使用大模型 API 时，你主要关注的是推理成本（按 Token 计费）。训练是模型厂商的事，推理是你按量付费的服务。",
  },

  // 10. Parameters
  {
    id: "parameters",
    name: "Parameters",
    cnName: "参数",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "参数是 AI 模型内部用于存储「知识」的数字变量，可理解为模型的「脑细胞」数量。GPT-3 有 1750 亿个参数，2026 年的 GPT-5 据传达数万亿。通常参数越多，模型能力越强——但运行成本也越高、速度越慢。DeepSeek 等模型已证明，优秀的架构设计和训练策略可以让中等参数量达到甚至超越大得多的模型的效果。",
    analogy: "参数就像大脑中的神经元连接数量——连接更多的大脑能存储和处理更多信息，但如果连接杂乱无章，可能还不如连接更少但更有条理的大脑。模型的「智商」取决于参数的数量、质量和训练方式。",
    useCases: ["GPT-5 的高参数让它能处理复杂的多步推理和长程规划", "DeepSeek 使用 MoE 架构在中等参数下实现接近超大模型的效果", "手机上运行的轻量级模型通常只有 10 亿到 70 亿参数"],
    misconception: "「参数越多模型越强」是常见误区。一个训练充分的 70 亿参数模型可能在某些任务上超过训练不足的 700 亿参数模型——参数的「质」有时比「量」更重要。",
    beginnerTip: "作为用户无需记住具体参数数字，只需知道：参数越大的模型越聪明但越贵越慢。日常简单任务用小模型即可，复杂分析才需要大模型。",
  },

  // 11. Token
  {
    id: "token",
    name: "Token",
    cnName: "Token",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "Token 是大语言模型处理文本的最小单位，可以是一个单词、一个汉字、一个标点，甚至一个词的前半部分。英文约 1 Token = 0.75 个单词，中文约 1 Token = 1.5-2 个汉字。API 按 Token 计费，上下文窗口也用 Token 衡量——理解 Token 就是理解 AI 的「计费单位」和处理能力「度量衡」。",
    analogy: "Token 就像 AI「阅读」时的最小单位——有时一个 Token 是完整的词，有时是半个词。就像用乐高积木搭房子，每块积木就是一个 Token，你拥有的 Token 越多，能搭的房子就越大越复杂。",
    useCases: ["计算 API 费用：一段 1000 Token 的输入大约花费几分钱", "判断能否处理长文档：上下文窗口决定了最大 Token 数", "优化提示词：同样的意思用更少的 Token 表达可以省钱提速"],
    misconception: "一个 Token 不等于一个字或一个词。Token 的划分由分词器决定，同一个句子在不同模型中可能有不同的 Token 数量。",
    beginnerTip: "用 OpenAI 的 Tokenizer 工具可以直观看到任意文字被切分成多少个 Token，试一下中英文混合文本就能立刻理解 Token 的切分逻辑。",
  },

  // 12. Context Window
  {
    id: "context-window",
    name: "Context Window",
    cnName: "上下文窗口",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "上下文窗口是模型在一次对话中能「记住」和处理的 Token 总量上限。2026 年，Claude 4 和 Gemini 2.5 的上下文窗口已达百万 Token 级别，相当于一次能处理数十万字的长篇内容。所有超出窗口的内容都会被「遗忘」——这就是长对话中 AI 会「忘记」开头说了什么的原因。",
    analogy: "上下文窗口就像 AI 的「工作桌面」——桌面大小有限，窗口内的信息它都能「看到」，窗口外的它就「忘」了。一本书如果只有 30 页你可以全部摊开，500 页就只能每次摊开一部分。",
    useCases: ["将整本手册放进上下文窗口，让 AI 基于完整文档回答问题", "长篇小说翻译时保持前后术语和风格一致", "代码审查时把整个项目的关键文件一起放进窗口供分析"],
    misconception: "很多人以为上下文窗口大就意味着 AI 记忆力好。但实际上，模型对窗口开头和结尾的信息「注意力」更强，中间部分容易被忽略——这叫「迷失在中间（Lost in the Middle）」现象。",
    beginnerTip: "重要信息尽量放在提示词的开头或结尾（而非中间），这样模型更容易注意到。长对话中途可以小结关键信息再继续，相当于帮 AI「复习」。",
  },

  // 13. Hallucination
  {
    id: "hallucination",
    name: "Hallucination",
    cnName: "幻觉",
    category: "基础概念",
    difficulty: "入门",
    simpleExplain: "AI 幻觉是指模型生成的内容看起来合理通顺，但实际上是错误的或虚构的。比如你问「某本书的作者是谁」，它可能一本正经地编造一个不存在的人名。这不是 AI 在「撒谎」——它只是在统计上预测了「最像正确答案」的词序列，并不知道自己说的是错的。包括 GPT-5 和 Claude 4 在内的所有大模型，目前都无法完全避免幻觉。",
    analogy: "AI 幻觉就像一个极其自信但偶尔记错事的图书管理员——你问他某本书在哪，他绝不会说「我不知道」，而是凭经验指一个书架，即使指错了也信心满满。他不是想骗你，只是分不清「真的知道」和「猜的」。",
    useCases: ["写论文时引用 AI 提供的文献，发现参考文献根本不存在", "AI 写代码时导入了不存在的库或编造了 API 参数", "AI 回答法律问题时「引用」虚构的法条和判例"],
    misconception: "幻觉是当前基于概率预测词序列的技术架构的内在特性，就像人会记错事一样无法完全消除——只能通过各种手段（RAG、联网搜索等）来降低。",
    beginnerTip: "对付幻觉最实用的方法是「重要信息必须验证」：AI 提到的关键数据、法律条文、文献出处，都要到权威来源再确认一遍。把 AI 当参谋，不当法官。",
  },

  // 14. Embedding
  {
    id: "embedding",
    name: "Embedding",
    cnName: "嵌入",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "嵌入（Embedding）是将文字、图片等非结构化数据转换成一串数字（向量）的技术。语义相近的内容，其向量在数学空间中的距离也更近——比如「猫」和「小猫」的向量距离很近，而「猫」和「汽车」的距离很远。嵌入是实现语义搜索和 RAG（检索增强生成）的底层基础。",
    analogy: "嵌入就像给每个词、每句话分配一个高维空间中的坐标——意思相近的词像住在同一个小区的邻居，距离很近；意思不相关的词像住在不同城市。AI 通过比较坐标距离，就能判断两段话是否在说同一件事。",
    useCases: ["在知识库中搜索与用户问题最相关的文档片段", "电商平台根据商品描述语义相似度做智能推荐", "判断论文是否存在抄袭（比较语义嵌入的相似度）"],
    misconception: "嵌入只是一种「数字化表示」方法，它需要配合向量数据库、检索算法和大语言模型才能发挥价值——它是关键的一块拼图，但不是全部。",
    beginnerTip: "理解嵌入最好的方式是动手：用 OpenAI 的 Embedding API 把「今天天气真好」和「阳光明媚的一天」转成向量，计算它们的余弦相似度，你会发现它们确实非常接近。",
  },

  // 15. Vector
  {
    id: "vector",
    name: "Vector",
    cnName: "向量",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "在 AI 语境中，向量是一串有序数字的集合，用来表示文本、图片等内容的语义特征。例如一段文字可能被表示为一个 1536 维的向量（1536 个数字排成一列）。向量之间的「距离」可以量化语义相似度，这是现代搜索、推荐和 AI 知识库系统的数学基础。",
    analogy: "向量就像给每段内容做了一份「DNA 基因图谱」——两个人的 DNA 越接近，生物特征就越相似；两段内容的向量越接近，语义就越相似。有了这份「基因图谱」，AI 就能快速在海量内容中找到最相关的匹配。",
    useCases: ["向量搜索：在百万级文档中毫秒级找到相关内容", "推荐系统：找到与用户历史喜好最相似的商品", "图像去重：通过图像向量找出数据库中重复或相似的图片"],
    misconception: "向量维度不是越高越好——维度过高会带来「维度灾难」导致计算变慢、存储变大，但语义区分能力的提升却很有限。大多数场景 768-1536 维已足够。",
    beginnerTip: "不要把向量想得太神秘——它就是把语义「翻译」成数学语言。你不需要懂线性代数也能用向量技术，有大量现成的 API 和工具帮你处理了一切。",
  },

  // 16. Vector Database
  {
    id: "vector-database",
    name: "Vector Database",
    cnName: "向量数据库",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "向量数据库是专门存储和检索向量数据的数据库。与传统数据库用「精确匹配」查找不同，向量数据库用「语义相似」查找——输入一个向量，返回最相似的 N 条数据。它是 RAG（检索增强生成）系统的核心组件。常用的有 Milvus、Pinecone、Chroma、Weaviate 等。",
    analogy: "传统数据库像严格的书架管理员，只能按书名、作者精确找书。向量数据库则像博览群书的图书馆馆长——你说「我想找一本关于温暖治愈故事的书」，即使书名不匹配，他也能凭对内容的理解找到最相关的书。",
    useCases: ["企业知识库：把公司文档向量化存储，员工用自然语言搜索", "长时记忆系统：把 Agent 历史交互存入向量库，实现跨会话记忆", "图片搜索引擎：上传一张图片，找到视觉上最相似的其他图片"],
    misconception: "向量数据库和传统数据库是互补的——传统数据库管「精确数据」（订单金额、用户 ID），向量数据库管「模糊语义」（相似内容检索）。好系统往往两者都用。",
    beginnerTip: "初学者可从 Chroma 入门——开源、用 Python 几行代码就能跑起来，不需要注册云服务，适合本地开发和学习。",
  },

  // 17. Fine-tuning
  {
    id: "fine-tuning",
    name: "Fine-tuning",
    cnName: "微调",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "微调是在已训练好的模型基础上，用特定领域的小规模数据继续训练，让模型在特定领域表现更好。不需从头训练（太贵），只需几百到几千条高质量示例，就能让通用大模型变成某个领域的专家。微调的本质是「在通才的基础上培养专才」。",
    analogy: "微调就像让一个顶尖大学毕业的通才学生去某个具体岗位实习几个月——他不仅保留了通用知识，还掌握了专业技能。用最低的成本获得了一个合格的专才。",
    useCases: ["把通用模型微调成能写公司风格文案的市场助手", "用历史客服对话数据微调，让模型学会处理特定产品的售后问题", "在法律文书数据上微调，让模型更准确地使用法律术语"],
    misconception: "微调主要改变的是模型的「风格」和「格式行为」，而非注入大量新的事实性知识——新知识更适合用 RAG 来解决。",
    beginnerTip: "在考虑微调之前，先试试 Prompt Engineering 和 RAG——大多数需求其实不需要微调就能解决。微调是最后的手段，不是第一步。",
  },

  // 18. Distillation
  {
    id: "distillation",
    name: "Distillation",
    cnName: "蒸馏",
    category: "基础概念",
    difficulty: "专业",
    simpleExplain: "模型蒸馏（知识蒸馏）是把大模型的能力「压缩」进小模型的技术。用一个强大的教师模型教导学生模型，学生学会模仿教师输出，在很多任务上达到接近大模型的效果，但参数量只有几分之一。2026 年，DeepSeek 和 Qwen 系列广泛使用蒸馏技术，让强 AI 能在手机和边缘设备上流畅运行。",
    analogy: "蒸馏就像让资深教授（大模型）带年轻助教（小模型）——教授把每个问题的答案思路和推理过程讲给助教听，助教学会了核心方法，能独自回答大部分常见问题，而且反应更快、成本更低。",
    useCases: ["将 GPT-5 或 Claude 4 的能力蒸馏到小模型中在手机上离线运行", "将大模型的法律推理能力蒸馏到专业法律助手模型中", "降低企业 AI 应用成本：用量大时用小模型替代大模型"],
    misconception: "蒸馏后的模型不只是大模型的「缩水版」——好的蒸馏在特定任务上有时能比大模型表现更好，因为它被专门训练来做好这一件事，心无旁骛。",
    beginnerTip: "作为初学者，蒸馏更多是「知道这个概念」即可。实际使用中看到的「XX-small」「XX-mini」模型，很可能就是通过蒸馏技术压缩出来的。",
  },

  // 19. Alignment
  {
    id: "alignment",
    name: "Alignment",
    cnName: "对齐",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "对齐是指让 AI 的行为和输出符合人类的价值观、偏好和安全要求。经过对齐训练的模型会拒绝回答危险问题，输出更符合人类期望。对齐是一整套持续优化过程，包括收集人类反馈、训练奖励模型、强化学习等，目标是让 AI 做到「三个 H」——有帮助（Helpful）、内容真实（Honest）、安全性好（Harmless）。",
    analogy: "对齐就像给一个超级聪明但不懂社会规则的神童做「社会化教育」——在不压制智力的前提下，教会他什么话能说、什么不能说、什么情况下要拒绝。对齐不是让他变笨，而是让他变「懂事」。",
    useCases: ["训练模型拒绝回答制造武器、毒品等有害问题", "让 AI 客服始终保持礼貌和专业", "确保医疗 AI 不会给出可能危及生命的错误建议"],
    misconception: "对齐不是「思想审查」——它的核心是让 AI 安全可靠，就像教小孩子不要玩火，这是保护使用者的必要措施，不是限制自由。",
    beginnerTip: "当 AI 拒绝回答某些问题时，它很可能是在执行对齐策略。可以换表达方式试试，但请注意：对齐拒绝往往有道理，不要强行绕过。",
  },

  // 20. RL
  {
    id: "rl",
    name: "RL",
    cnName: "强化学习",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "强化学习是让 AI 通过「试错」来学习的方法。AI 在环境中做出动作，环境给予奖励或惩罚，AI 的目标是学会一套策略来最大化长期累积奖励。与监督学习（给你标准答案照着学）不同，强化学习中 AI 必须自己探索。2026 年，RL 技术被广泛用于提升 GPT-5 和 Claude 4 等模型的推理能力。",
    analogy: "强化学习就像训练宠物狗——它做对了给零食（正奖励），做错了不给或批评（负奖励）。经过无数次尝试，狗狗自己总结出一套行为规则。AI 也一样，只不过它一秒可以尝试上千次。",
    useCases: ["AlphaGo / AlphaZero 通过自我博弈学会下围棋和国际象棋", "训练机器人走、跑、跳——摔倒给负奖励，走稳给正奖励", "GPT-5 和 Claude 4 的训练流程中使用 RL 来优化推理能力"],
    misconception: "强化学习不是「给正确答案打分」——关键区别在于 AI 必须自己探索和试错，奖励信号只是引导方向，这和有人把答案告诉你的监督学习完全不同。",
    beginnerTip: "强化学习是 AI 中数学门槛最高的领域之一。刚入门先了解基本概念（Agent、环境、奖励、策略），等有机器学习基础再深入学习。",
  },

  // 21. RLHF
  {
    id: "rlhf",
    name: "RLHF",
    cnName: "人类反馈强化学习",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "RLHF（Reinforcement Learning from Human Feedback）是 ChatGPT 和 Claude 成功的关键技术。流程：人类标注员对模型多个输出进行偏好排序，用这些偏好数据训练一个「奖励模型」，再用强化学习让大模型按奖励模型的偏好来生成内容。2026 年，GPT-5、Claude 4、Gemini 2.5 都采用了更精细的 RLHF 变体来优化对齐效果。",
    analogy: "RLHF 就像一位严格的写作老师——每次给你几个版本让你选出最好的，老师渐渐摸清了你的审美标准，以后就能按照这套标准来指导学生。AI 通过大量人类偏好的「投票」，学会了什么样的回答才是人类喜欢的。",
    useCases: ["ChatGPT、Claude 使用 RLHF 学习回答更友好、更有帮助", "让 AI 客服学会更礼貌地应对愤怒的客户", "训练 AI 助手拒绝不合理要求的同时保持礼貌和建设性"],
    misconception: "RLHF 不是简单地「让人类选哪个好」——它是非常精密的训练流程，先训练奖励模型再用强化学习调整大模型，涉及多步骤和大量计算资源。",
    beginnerTip: "RLHF 解释了为什么现代 AI 助手「说话好听」——它们的输出风格是经过大量人类偏好训练「设计」出来的，理解这一点有助于你更好地驾驭它们。",
  },

  // 22. MoE
  {
    id: "moe",
    name: "MoE",
    cnName: "混合专家模型",
    category: "基础概念",
    difficulty: "专业",
    simpleExplain: "MoE（Mixture of Experts，混合专家模型）是一种让大模型更高效的架构。模型内部有多个「专家子模块」，各擅长不同类型的问题。输入进入模型时，「路由器」只激活其中部分专家，而非全部。2026 年，GPT-5 和 DeepSeek-V3 都使用 MoE 架构，实现了「大参数量 + 高推理速度」的平衡。",
    analogy: "MoE 就像一家大型医院——有很多科室（专家），但你看病时只去挂号处护士（路由器）判断你应该去的那个科室。医院虽然规模很大，每个病人只用了其中一小部分资源，效率很高。",
    useCases: ["GPT-5 和 DeepSeek-V3 使用 MoE 架构平衡大参数量与高推理速度", "MoE 让大模型推理时只激活部分参数，大幅降低成本和延迟", "Google Gemini 2.5 的部分版本也采用了 MoE 技术"],
    misconception: "MoE 模型推理时只激活部分参数，这不等同于「等效参数量」仅等于激活参数量——总参数量的价值在于为不同任务提供多样化专家组合的选择。",
    beginnerTip: "作为使用者无需深入了解 MoE，只需知道：采用 MoE 架构的模型通常「又大又快」，在同成本下可能比纯密集模型表现更好。",
  },

  // 23. Transformer
  {
    id: "transformer",
    name: "Transformer",
    cnName: "Transformer",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "Transformer 是 2017 年由 Google 提出的神经网络架构，其核心创新是「自注意力机制」——让模型能同时关注输入序列中所有位置的关系，而非按顺序逐个处理。2026 年，GPT-5、Claude 4、Gemini 2.5、DeepSeek 等几乎所有大语言模型都基于 Transformer 架构构建，它是现代 AI 的基石。",
    analogy: "旧模型读文章像在隧道里举着手电筒前行——只能看到眼前一小段，看完后面就模糊了前面。Transformer 则像用无人机从空中俯瞰整篇文章——所有内容尽收眼底，任何两个词之间的关系一目了然。这个「全局视野」是它革命性的关键。",
    useCases: ["GPT 系列：基于 Transformer Decoder 部分做文本生成", "BERT：基于 Transformer Encoder 部分做文本理解", "Vision Transformer (ViT)：将 Transformer 用于图像识别"],
    misconception: "Transformer 是一种架构蓝图，不是 GPT 的别称——GPT 用了它的 Decoder 部分，BERT 用了 Encoder 部分，同一个 Transformer 不同用法造出不同的模型。",
    beginnerTip: "推荐阅读 Google 2017 年论文《Attention Is All You Need》的图解版（网上有大量中文图解），这是理解现代 AI 基石的绝佳起点和必读经典。",
  },

  // 24. Attention
  {
    id: "attention",
    name: "Attention",
    cnName: "注意力机制",
    category: "基础概念",
    difficulty: "进阶",
    simpleExplain: "注意力机制是 Transformer 的核心，让模型在处理某个词时能「注意到」输入中所有其他词与它的关系。比如处理「小明把桌上的苹果吃了」时，「吃」会与「小明」（谁吃？）和「苹果」（吃什么？）建立强关联。每个词给其他所有词打一个「相关度分数」，相关度越高，影响力越大。",
    analogy: "注意力机制就像在嘈杂的鸡尾酒会上和人聊天——周围很多人说话，但你的大脑自动「调高」对面那个人的音量、「调低」其他人的声音。AI 的注意力也是同样的事：在大量文字中自动聚焦最相关的部分。",
    useCases: ["机器翻译中，翻译某个词时重点关注原文对应位置附近的词", "代码理解中，分析某行代码时重点关注相关的变量定义和函数调用", "长篇文档问答中，自动聚焦与问题最相关的段落"],
    misconception: "「注意力」完全是数学模型——矩阵乘法和 Softmax 归一化的结果，没有任何「意识」参与，它只是在数学上算出了词之间的「关联分数」。",
    beginnerTip: "理解注意力机制的最好方法是看可视化的注意力热力图——网上有很多工具能将句子中词与词之间的注意力权重可视化，一目了然。",
  },

  // ========================================================================
  // 应用技术 (25-60)
  // ========================================================================

  // 25. Chatbot
  {
    id: "chatbot",
    name: "Chatbot",
    cnName: "聊天机器人",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "聊天机器人是由 GPT-5、Claude 4 等大语言模型驱动的对话 AI，支持多模态交互、Function Calling 和 MCP 集成。它已从简单的问答工具进化为综合性智能入口，覆盖客服、教育、编程辅助等场景。",
    analogy: "传统聊天机器人像自动售货机，只响应预设按钮。AI 聊天机器人则像全能导购，能理解任意问题并调用外部工具完成任务。",
    useCases: ["企业 24 小时 AI 客服，集成 RAG 知识库精准应答", "AI 编程助手（Claude Code、Cursor）实时协作开发", "个人 AI 伙伴，通过 MCP 连接本地文件和应用"],
    misconception: "很多人以为聊天机器人只会「聊天」，实际上它已集成工具调用、联网搜索、多模态理解等能力，是综合性智能入口。",
    beginnerTip: "像和人对话一样描述完整需求，而非用关键词搜索。善用系统提示词和 Chain of Thought 引导，能显著提升回答质量。",
  },

  // 26. Copilot
  {
    id: "copilot",
    name: "Copilot",
    cnName: "副驾驶",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Copilot（副驾驶）是 AI 辅助人类工作的模式——AI 不替代你，而是增强你。GitHub Copilot、Cursor 和 Claude Code 是 2026 年最主流的 AI 编程副驾驶，核心哲学是「人在回路中，AI 做辅助」。",
    analogy: "Copilot 就像赛车领航员——你掌握方向盘和最终决策权，它观察路况、建议路线、帮你计算。你开得更快更安全，但最终是你在开车。",
    useCases: ["GitHub Copilot/Cursor 实时补全代码和生成函数", "Microsoft 365 Copilot 在文档中撰写和润色内容", "Claude Code 在终端中自动完成编码-测试-提交循环"],
    misconception: "Copilot 是增强工具而非替代工具，它处理重复劳动，让你专注于判断力和创造力。就像自动挡没有淘汰司机，只是让开车更轻松。",
    beginnerTip: "使用 Copilot 类工具的关键是「审阅而非盲从」——AI 建议大部分靠谱，但总有翻车时，养成每次采纳前快速扫一眼的好习惯。",
  },

  // 27. AI Agent
  {
    id: "ai-agent",
    name: "AI Agent",
    cnName: "AI智能体",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "AI Agent（智能体）是能自主理解任务、制定计划并使用工具完成目标的 AI 系统。与聊天机器人只能「说」不同，Agent 能「做」——拆解任务、调用工具、自我纠错，是 2026 年 AI 应用的核心范式。Claude Code、Cursor Agent 和 Dify/Coze 上的智能体是典型实现。",
    analogy: "聊天机器人是只能指路的导游，AI Agent 是能亲自帮你订酒店、买门票、安排行程的旅行管家——它有「自主权」去规划和使用资源达成目标。",
    useCases: ["自动客服工单：分析意图→查询→回复或转人工", "智能运维 Agent：检测故障→诊断→修复", "个人助理：管理日程→预订会议→发送提醒"],
    misconception: "AI Agent 比聊天机器人多了规划、工具使用、记忆和自我纠错能力——它是一个能独立完成任务的「系统」，聊天机器人只是其中「大脑」组件。",
    beginnerTip: "在 Dify 或 Coze 上搭建一个知识库问答 Agent，十分钟就能直观感受 Agent 和普通聊天机器人的本质区别。",
  },

  // 28. RAG
  {
    id: "rag",
    name: "RAG",
    cnName: "检索增强生成",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "RAG（检索增强生成）让大模型结合外部知识库回答问题：用户提问→从向量数据库检索相关内容→送给大模型生成答案。它解决了模型「知识过时」和「私有知识盲区」两大痛点，是 2026 年企业 AI 落地的主流方案。",
    analogy: "RAG 像给博学的教授配了随身资料柜——学生提问时，教授先从资料柜翻出相关文件，基于可靠资料给出精准回答。资料柜随时更新，答案永远最新。",
    useCases: ["企业知识库问答：员工问政策，AI 从文档中检索回答", "产品售后：用户问用法，AI 从说明书中调取准确信息", "合规审查：基于最新法规库审核合同风险"],
    misconception: "RAG 不是简单的「先搜索再让 AI 总结」——它涉及文档切分、Embedding 向量化、语义检索排序等技术环节，每个环节都显著影响最终效果。",
    beginnerTip: "入门 RAG 最快是用 Dify 或 Coze 搭建知识库应用——上传文档搭问答机器人，十分钟覆盖完整 RAG 流程。",
  },

  // 29. Function Calling
  {
    id: "function-calling",
    name: "Function Calling",
    cnName: "工具调用",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Function Calling 让大模型能「指挥」外部 API 完成任务——模型自动判断调用哪个函数、传什么参数，但只输出 JSON 指令不执行。它是实现 AI Agent 和 Tool Use 的基础能力，GPT-5 和 Claude 4 均提供成熟支持。",
    analogy: "Function Calling 像只能发号施令的总司令——他不能亲自开飞机，但知道什么时候该给哪个部队下什么命令。部队执行后汇报结果，总司令再做下一步决策。",
    useCases: ["用户问天气 → AI 调用 getWeather()", "用户要发邮件 → AI 调用 sendEmail()", "用户查数据 → AI 调用 queryDatabase()"],
    misconception: "AI 只输出「调用哪个函数、传什么参数」的 JSON，真正执行和安全校验在应用代码中完成——安全控制权始终在开发者手里。",
    beginnerTip: "建议从 OpenAI 的 JSON Schema 定义方式入手，先用简单函数（如查天气）练手，理解流程后再扩展。",
  },

  // 30. Tool Use
  {
    id: "tool-use",
    name: "Tool Use",
    cnName: "工具使用",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Tool Use 是比 Function Calling 更广义的概念，指 AI Agent 灵活组合多种外部工具（API、数据库、浏览器、代码执行器等）完成任务的能力。Claude 4 和 GPT-5 在 Tool Use 上提供了精细的 JSON Schema 支持和多工具协同调用。",
    analogy: "Tool Use 像技工师傅的工具箱——接到任务后先判断需要什么工具，电钻不够力就换冲击钻，扳手不对就换一个。AI 根据任务灵活选择和组合工具。",
    useCases: ["数据分析：数据库取数→计算分析→图表可视化", "旅行规划：航班查询→酒店比价→餐厅推荐", "编程 Agent：读文件→生成代码→执行→测试"],
    misconception: "工具不是越多越好——太多反而让模型混淆，增加 Token 消耗。好的 Tool Use 设计是「少而精」，每个工具职责清晰不重叠。",
    beginnerTip: "每个工具的 description 要写清「什么时候用、什么时候不用」。模糊的工具描述是第一大坑——宁可多花时间写清楚。",
  },

  // 31. Workflow
  {
    id: "workflow",
    name: "Workflow",
    cnName: "工作流",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "AI Workflow 是将多个 AI 步骤和外部服务串联成自动化流水线。比如用户反馈流程：接收→AI 分类→情感分析→生成回复草稿→人工审核→发送。Dify、n8n、Coze 提供可视化工作流编排，支持条件分支、定时触发和并行处理。",
    analogy: "工作流像工厂流水线——原材料从传送带进入，经 AI 分类→情感分析→生成回复→人工审核→打包出货。每个工位只做一件事，串联起来完成完整生产流程。",
    useCases: ["客服工单：分类→优先级→生成回复→人工确认", "内容发布：选题→AI 撰稿→审核→多平台发布", "数据报告：连接数据库→清洗→AI 分析→图表生成"],
    misconception: "好的工作流包含条件分支、并行执行、错误重试、超时处理等逻辑，像一个小型程序而非简单直线执行。",
    beginnerTip: "入门推荐 Dify 或 n8n 的可视化编排，拖拽节点搭建流程。先从「收到邮件→AI 总结→发到飞书」开始。",
  },

  // 32. Automation
  {
    id: "automation",
    name: "Automation",
    cnName: "自动化",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "AI 自动化利用 AI 处理传统规则自动化无法应对的模糊、多变任务——如自动理解邮件内容并分类、从合同中提取关键条款。2026 年，n8n、Zapier 等平台将 AI 深度集成进自动化流程，把自动化从「体力重复」扩展到「脑力重复」。",
    analogy: "传统自动化像只能生产固定产品的流水线；AI 自动化像智能工厂，能自动识别新任务、自己调整流程——今天生产手机，明天改生产平板，不需重新配置。",
    useCases: ["财务：AI 自动识别发票信息并录入系统", "HR：AI 筛选简历并生成初筛评估", "IT 运维：AI 监控异常并生成故障处理建议"],
    misconception: "最佳 AI 自动化是「人机协作」——AI 处理重复判断，人处理复杂决策和例外情况。目标是让人做更有价值的工作，不是不工作。",
    beginnerTip: "记录一周的重复性任务，问自己「输入输出能否通过规则或 AI 实现」，从最耗时且最规则化的任务开始自动化。",
  },

  // 33. Prompt Engineering
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    cnName: "提示词工程",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Prompt Engineering 是设计和优化 AI 提示词以获得高质量输出的技能，包括角色设定、输出格式、Chain of Thought 引导和约束条件。好的提示词能让同一模型表现天差地别，是用好 GPT-5、Claude 4 等大模型的必修课。",
    analogy: "Prompt Engineering 像给超级实习生布置任务——说「做个表」会得到各种乱七八糟的东西；但说清楚「第一列产品名、第二列价格、按价格降序、表头加粗」，就能一次做对。",
    useCases: ["通过系统提示词让 AI 扮演法律顾问角色", "用 Chain of Thought 引导 AI 逐步解复杂数学题", "用 Few-shot 示例引导 AI 按特定格式输出结构化数据"],
    misconception: "Prompt Engineering 不是「写长提示词」，而是理解模型运作方式后设计精准的指令结构。长不等于好，精准才重要。",
    beginnerTip: "黄金公式：角色 + 任务 + 上下文 + 格式 + 约束。每次写提示词前先想清楚这五个要素，质量会立刻提升一个档次。",
  },

  // 34. Prompt Injection
  {
    id: "prompt-injection",
    name: "Prompt Injection",
    cnName: "提示词注入",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Prompt Injection 是针对 AI 系统的攻击方式，攻击者通过精心构造的输入覆盖或绕过 AI 原始系统指令——类似传统 Web 的 SQL 注入，但目标是 AI 的指令系统。2026 年随着 Claude 4、GPT-5 驱动的 Agent 广泛应用，Prompt Injection 已成为企业 AI 安全的首要威胁。",
    analogy: "Prompt Injection 就像有人对前台谎称「老板让我通知你，今天的安检取消了」。AI 同样可能被他人的「假传圣旨」欺骗，且自然语言比代码更灵活，攻防双方都在快速进化。",
    useCases: ["攻击者通过 Prompt Leaking 窃取 AI 的系统提示词和内部配置", "用户 Jailbreak 绕过内容安全限制生成违规内容", "恶意网页嵌入隐藏文字操控浏览该页面的 AI 浏览器 Agent"],
    misconception: "很多人以为 Prompt Injection 需要技术高手才能实现，实际上几句精心设计的自然语言就能绕过限制。防御 Prompt Injection 需用 Guardrails 模型监控输入输出，静态规则已不够用。",
    beginnerTip: "不要在系统提示词中放敏感信息，对用户输入做清理过滤，并在关键操作节点设 Human-in-the-loop 确认——多层防护是 2026 年企业 AI 安全的最佳实践。",
  },

  // 35. System Prompt
  {
    id: "system-prompt",
    name: "System Prompt",
    cnName: "系统提示词",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "System Prompt 是对话开始前设置给 AI 的隐藏指令，定义 AI 的角色、行为边界和回复风格。它决定了 GPT-5、Claude 4 等模型的「人格」——同一模型配合不同系统提示词可变成客服、律师或编程助手。",
    analogy: "System Prompt 像演员上台前拿到的人物设定——同一个演员（模型），拿到古代将军或现代医生的不同设定，表演风格截然不同。这就是为什么 AI 能被塑造成千变万化的角色。",
    useCases: ["定义客服 AI 的品牌语气、服务范围和升级规则", "限制企业 AI 助手只回答业务相关问题并拒绝越界请求", "给 Claude Code 等编程 Agent 设定代码风格和框架偏好"],
    misconception: "很多人以为系统提示词越长越好。实际上过长的提示词反而让模型抓不住重点——好的系统提示词应像法律条文，简洁、明确、无歧义。",
    beginnerTip: "写系统提示词遵循「边界先于风格」原则：先定严格的禁止项，再补充语气和格式。每次修改后用越界问题测试防护是否有效。",
  },

  // 36. Chain of Thought
  {
    id: "chain-of-thought",
    name: "Chain of Thought",
    cnName: "思维链",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Chain of Thought（CoT，思维链）是通过让 AI「一步步推理」来提升复杂任务准确率的提示技巧。GPT-5、Claude 4 等模型已内置隐式思维链能力（如深度思考模式），显式引导推理步骤能大幅减少逻辑错误和幻觉。",
    analogy: "CoT 像数学考试中要求和「写出解题过程」——如果只报答案容易出错，但逐步写下推理链，学生（AI）自己会发现中间步骤的错误并修正。",
    useCases: ["数学题求解：逐步分析条件→列方程式→分步计算", "代码调试：阅读错误日志→列出可能原因→逐一排查→给出修复", "商业分析：分析背景→评估方案利弊→综合给出建议"],
    misconception: "很多人以为 CoT 只是让 AI「做笔记」。实际上它改变了计算路径——将复杂一步推理拆成多个简单子问题，每个子问题更准确，整体准确率大幅提升。",
    beginnerTip: "在问题后加一句「请一步步思考展示推理过程」就能启用 CoT。对于复杂任务，可进一步要求「列出假设→验证→结论」三步法，效果更好。",
  },

  // 37. Few-shot Prompting
  {
    id: "few-shot-prompting",
    name: "Few-shot Prompting",
    cnName: "少样本提示",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Few-shot Prompting 是在提示词中给出 2-3 个示例，让 AI「依样画葫芦」完成新任务。AI 从示例中推断你的期望格式和判断标准，往往比长篇规则说明更高效。配合 GPT-5、Claude 4 的上下文理解能力，精选示例效果极佳。",
    analogy: "Few-shot 像教实习生做报表——不用写操作手册，直接把上个月 3 份优质报表给他看：「照这个格式做」。看范例比读文档快得多。",
    useCases: ["给 AI 看 3 条正确分类的工单，让它自动分类新工单", "给出 2 篇范文让 AI 按相同风格撰写产品文案", "展示标准 JSON 输出示例引导 AI 产出结构化数据"],
    misconception: "示例的关键不在数量而在多样性和代表性——3 个精心挑选的示例效果好于 10 个随机堆砌。示例太多还会消耗 Token 窗口压缩处理新内容的空间。",
    beginnerTip: "设计示例遵循「最简差异原则」：标准情况、边界情况、特殊情况各一个。三个代表性示例覆盖典型场景，AI 就获得足够参照。",
  },

  // 38. Zero-shot Prompting
  {
    id: "zero-shot-prompting",
    name: "Zero-shot Prompting",
    cnName: "零样本提示",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Zero-shot Prompting 是不提供任何示例，仅通过自然语言指令让 AI 完成任务。得益于 GPT-5、Claude 4 等现代大模型在海量数据上训练出的强大泛化能力，几年前需要示例的任务现在一句话就能搞定。",
    analogy: "Zero-shot 像直接跟博学助理说「帮我把文件翻译成英文」——你不需要先给他看翻译范例，默认他理解任务本身。而 Few-shot 则是「按上次那种报表再做一份」。",
    useCases: ["直接让 AI 总结文章要点无需给出示例", "直接让 AI 提取文本中的人名、地名、机构名", "直接让 AI 判断一段文字的情感倾向"],
    misconception: "Zero-shot 不是「随便问随便答」——正因没有示例参考，你更需要用精准的语言描述需求。它的本质是「用指令代替示例」而非降低指令质量。",
    beginnerTip: "最高效策略是先零样本看效果，不满意立即切少样本给 2-3 个范例纠偏。2026 年模型零样本能力已很强，大多日常任务无需示例。",
  },

  // 39. Structured Output
  {
    id: "structured-output",
    name: "Structured Output",
    cnName: "结构化输出",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Structured Output 让 AI 按照预定义的 JSON Schema 输出结构化数据而非自由文本。GPT-5 和 Claude 4 均提供原生结构化输出功能，保证输出严格符合 Schema，是将 AI 嵌入生产级应用的基础能力。",
    analogy: "非结构化输出像让助手随意描述订单——「张三买了两台笔记本花了六千」——程序难解析。结构化输出则像让助手填标准表格：{客户:'张三',商品:'笔记本',数量:2,金额:6000}——程序直接读取。",
    useCases: ["从邮件正文提取结构化信息（发件人、日期、意图）存为 JSON", "让 AI 生成可直接被前端渲染的 UI 组件 JSON 描述", "批量处理文档让 AI 输出统一元数据结构方便入库"],
    misconception: "很多人以为在提示词写「请用 JSON 输出」就够了。实际上普通提示词的 JSON 输出无 Schema 保障，可能缺字段或夹带解释文字。可靠的结构化输出需底层 Schema 约束技术保证。",
    beginnerTip: "代码中调用 AI 并解析结果时，务必使用官方 Structured Output / JSON Mode 功能而非手工要求 JSON。后者上线后解析失败率远超预期。",
  },

  // 40. JSON Mode
  {
    id: "json-mode",
    name: "JSON Mode",
    cnName: "JSON模式",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "JSON Mode 是 GPT-5、Claude 4 等模型 API 的输出约束功能，强制回复为合法 JSON 格式。结合 JSON Schema 定义，从模型层面保证格式正确，避免 AI 在 JSON 中夹带解释文字、缺括号等问题，是将 AI 嵌入生产级应用的基础能力。",
    analogy: "JSON Mode 像餐厅标准化订单系统——每道菜有唯一编号和明确选项，信息传递不走样。相比口头传达「微辣」可能被误解，标准化杜绝歧义。AI 输出也通过 JSON Mode 达成「契约性可靠」。",
    useCases: ["RAG 系统中用 JSON Mode 确保检索结果统一结构返回", "Agent 工具链中用 JSON Mode 确保 Function Calling 参数格式正确", "批量数据流水线中让 AI 输出每条记录格式一致"],
    misconception: "JSON Mode 只保证「格式合法」（能解析），不保证「内容正确」（字段值是否符合业务逻辑）。格式校验交给 API，内容验证仍需在代码中自己做。",
    beginnerTip: "使用 JSON Mode 时同时启用 Schema 定义功能——不只是「输出合法 JSON」而是「字段类型和必选字段都按你的定义来」。这能大幅减少输出不合预期的处理成本。",
  },

  // 41. MCP
  {
    id: "mcp",
    name: "MCP",
    cnName: "模型上下文协议",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "MCP（Model Context Protocol）是 Anthropic 推出的开放协议，标准化 AI 与外部数据源和工具的连接方式。它像 AI 世界的「USB-C」——支持 MCP 即插即用，2026 年 Claude Code、Cursor、Gemini 等均已支持，成为 Agent 连接万物的标准。",
    analogy: "MCP 像 AI 世界的 USB-C 标准——以前每种设备需要不同连接线，现在一个接口连接所有。MCP 让 AI 工具和数据源用同一种协议交流，即插即用。",
    useCases: ["Claude Desktop 通过 MCP 服务器访问本地文件和文件夹", "开发者构建 MCP 服务器让 AI 查询公司内部数据库和 API", "通过 MCP 在不同 AI 工具间共享上下文和工具能力"],
    misconception: "MCP 并非 Anthropic 私有协议——它是完全开放的标准。2026 年 MCP 生态已扩展至 Google Gemini、Cursor 等，成为跨模型跨平台的通用连接标准。",
    beginnerTip: "用 Python 写一个简单 MCP 服务器连接你的数据源，在 Claude Desktop 测试。体验就像「给 AI 写了一个插件」，AI 突然多了一项能力。",
  },

  // 42. API
  {
    id: "api",
    name: "API",
    cnName: "API",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "AI API 是 GPT-5、Claude 4、DeepSeek-V3 等大模型厂商提供的编程调用接口，几行代码即可将 AI 能力嵌入自己的应用。按 Token 用量计费，无需自部署模型。2026 年几乎所有 AI 应用底层都在调用模型 API。",
    analogy: "API 像外卖服务——你不需要买菜切菜炒菜（训练部署模型），只需打电话（调用 API）点菜，热菜送上门（收到输出）。只关心「吃什么」和「付多少钱」。",
    useCases: ["在 APP 中集成 AI 对话，后端调用 OpenAI API", "批量处理 10 万条用户评论的情感分析", "构建自动工作流：定时调用 API 生成日报推送到飞书"],
    misconception: "主流厂商（OpenAI、Anthropic）承诺不用 API 数据训练模型且通过合规认证。对敏感场景可考虑本地部署 DeepSeek 等开源模型方案。",
    beginnerTip: "先申请 API Key 并设置消费限额。5-10 行代码即可发出第一个请求。建议从 OpenAI 或 Anthropic 官方 SDK 开始，快速入门。",
  },

  // 43. OCR
  {
    id: "ocr",
    name: "OCR",
    cnName: "文字识别",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "OCR（光学字符识别）将图片中文字转为可编辑数字文本。2026 年 GPT-5、Claude 4 等多模态大模型驱动的 OCR 能精准识别任意字体、手写体、复杂表格并保留排版结构，拍张照片即可。",
    analogy: "AI OCR 像经验丰富的档案管理员——文件模糊有涂改也能根据上下文「猜」出内容，不仅抄下文字还还原排版。远胜传统逐字描红式 OCR。",
    useCases: ["纸质合同扫描转可搜索可编辑电子文档", "名片信息自动提取存入通讯录", "复杂财务报表图片识别并导入 Excel"],
    misconception: "现代 AI OCR 远超「截图转文字」——能理解表格结构、识别多栏排版、处理混合语言、直接翻译图片中外语文字，是多模态理解能力。",
    beginnerTip: "拍一张手写笔记上传到 ChatGPT 或 Claude 转成文字——对潦草手写体的识别力远超传统 OCR 工具。",
  },

  // 44. ASR
  {
    id: "asr",
    name: "ASR",
    cnName: "语音识别",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "ASR（自动语音识别）将人类语音实时转成文字。2026 年 OpenAI Whisper 等模型支持近百种语言，能在嘈杂环境中保持高准确率，识别不同口音和语速。ASR 是 Voice Agent、会议记录、无障碍辅助的底层核心技术。",
    analogy: "ASR 像听懂各种方言的专业速记员——自动过滤背景噪音，听懂带口音的普通话，甚至分辨说话人身份（说话人识别），在任意环境下准确记录。",
    useCases: ["会议实时转录：多人会议语音实时转文字记录", "视频自动字幕：为视频内容自动生成中英文字幕", "语音输入法：用户说话 AI 实时转文字"],
    misconception: "高质量 ASR 不仅做音字转换——还需处理同音词消歧（公式/攻势）、标点添加、段落分割，甚至结合上下文理解说话人意图。",
    beginnerTip: "OpenAI 开源 Whisper 模型是最好的 ASR 起点——免费、支持近百种语言、可本地运行。几行 Python 代码即可将音频转高质量文字。",
  },

  // 45. TTS
  {
    id: "tts",
    name: "TTS",
    cnName: "语音合成",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "TTS（文本转语音）将文字转为自然逼真的语音。2026 年 ElevenLabs、OpenAI TTS 等产品已能以假乱真，合成带有情感、停顿和节奏变化的拟人声音，甚至克隆特定人声线。与 ASR 一正一反构成 AI 语音交互完整链路。",
    analogy: "早期 TTS 像刚学说话的外国人——发音标准但毫无感情。现代 AI TTS 像专业配音演员——知道哪里停顿、加重、变速，甚至笑和叹气都恰到好处。",
    useCases: ["有声书自动生成：文字转有感情语音朗读", "短视频配音：AI 语音配解说旁白", "无障碍工具：帮视障人士「听」网页和文档"],
    misconception: "现代 TTS 不仅能朗读——已融合情感表达、多角色配音、流式合成，能根据内容自动调整语速语调，新闻和故事用不同语气播报。",
    beginnerTip: "ElevenLabs 在声音多样性上更强，OpenAI TTS 集成更便利。两者都有免费试用额度，推荐从这两家开始尝试。",
  },

  // 46. AI Search
  {
    id: "ai-search",
    name: "AI Search",
    cnName: "AI搜索",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "AI 搜索将 LLM 与搜索引擎结合：后台自动搜索多来源→阅读整合→生成带引用的完整答案。2026 年 Perplexity、ChatGPT 联网搜索、Gemini Deep Research 是代表产品，重新定义了「找信息」的方式。",
    analogy: "传统搜索像图书馆目录——给你书号和位置自己找。AI 搜索像超能图书管理员——你问一个问题，他翻几十本书整合成通顺答案并告诉你每句话来源。",
    useCases: ["快速了解陌生领域：AI 整合多个来源生成概述", "产品选购对比：AI 搜索各平台评测和价格生成对比报告", "学术调研：AI 自动检索论文库总结领域研究现状"],
    misconception: "AI 搜索的核心价值在于信息整合和溯源——不仅找到信息还帮你消化组织，并标注每句话的来源。这比简单「搜索+总结」多了可信度验证维度。",
    beginnerTip: "务必检查引用来源是否可靠——答案中标注的链接点开一两条，确认是权威来源而非营销软文。",
  },

  // 47. AI Browser Agent
  {
    id: "ai-browser-agent",
    name: "AI Browser Agent",
    cnName: "浏览器智能体",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "AI Browser Agent 能像人一样操控网页浏览器——打开网页、点击按钮、填写表单、截取信息。它以网页截图为「眼睛」，多模态 LLM 为「大脑」，让没有 API 的网站也能被 AI 操作。Claude Computer Use 和 Browser Use 框架是典型代表。",
    analogy: "Browser Agent 像你请虚拟助理坐在电脑前帮你上网——「帮我在某网站找最便宜的产品并截图」，他就自己打开网页、浏览、比价、截图。和真人操作一样，但手速是十倍。",
    useCases: ["自动从多个电商平台采集商品价格并对比", "自动填写提交在线表单（批量申报、注册）", "对 Web 应用做自动化回归测试模拟用户操作"],
    misconception: "Browser Agent 不是「按坐标点击的自动脚本」——它「看」屏幕理解视觉内容和布局后再操作，页面布局变了也能适应。这和基于坐标的脚本有本质区别。",
    beginnerTip: "先体验 Claude Computer Use Demo 感受「AI 看着屏幕操作电脑」。它操作较慢（截屏-分析-操作循环），适合无 API 可用的场景而不适合追求速度的场景。",
  },

  // 48. Computer Use
  {
    id: "computer-use",
    name: "Computer Use",
    cnName: "电脑操作",
    category: "应用技术",
    difficulty: "专业",
    simpleExplain: "Computer Use 是 Claude 的前沿能力，让 AI 像人一样操作电脑——截图看屏幕→分析画面→决定操作（点击/输入/滚动）→执行→再截图，循环至任务完成。代表 AI 从纯文本到通用 GUI 交互的跨越。",
    analogy: "Computer Use 像你用远程桌面连一台电脑，但操作者不是人而是 AI——你看到鼠标在移动、点击、打字，纯靠「看」和「点」完成一切，不依赖代码接口。",
    useCases: ["让 AI 操作没有 API 的旧版企业软件完成数据迁移", "让 AI 在网站上自动搜集整理数据", "用 AI 测试不同平台的用户注册登录流程"],
    misconception: "Computer Use 不能替代所有 API——它速度慢（每步需截图分析），成本高（大量图片 Token），适合 API 不可用时的备选方案。能用 API 解决的用 API 更高效。",
    beginnerTip: "Computer Use 仍在早期阶段，操作慢且偶尔「手滑」。建议先看 Anthropic 官方 Demo 视频建立直观感受，再决定是否深入使用。",
  },

  // 49. Code Agent
  {
    id: "code-agent",
    name: "Code Agent",
    cnName: "编程智能体",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Code Agent 是专门用于软件开发的 AI Agent，能理解项目结构、跨文件修改代码、调试错误、编写测试。Claude Code 和 Cursor Agent 是 2026 年标杆——它们操作文件系统、执行命令、使用版本控制，像真正的开发者一样工作。",
    analogy: "Code Agent 像你的 AI 结对编程搭档——你描述功能需求，它自己去读代码库、找相关文件、写代码、跑测试、修 Bug。就像有一个不会累的程序员在和你配合。",
    useCases: ["根据需求从零实现完整功能模块", "分析和修复跨多文件的 Bug 自动定位根源", "对老旧代码重构提升质量和可维护性"],
    misconception: "Code Agent 不能完全替代程序员——它省去重复性编码劳动，但架构设计、技术决策、需求理解和代码审查仍需人来主导。它是高效工具而非替代者。",
    beginnerTip: "使用 Code Agent 最有效的方式是「小步快跑」——把大需求拆成小独立任务，每次让 Agent 做一个，做完你确认再继续。让每个变更显示出来确认而非直接应用。",
  },

  // 50. Data Agent
  {
    id: "data-agent-app",
    name: "Data Agent",
    cnName: "数据分析智能体",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Data Agent 是专门处理数据任务的 AI Agent，能读取 Excel、CSV、PDF 等文件，自动完成数据清洗、统计分析、图表生成和洞察提炼。用户只需自然语言描述需求，Agent 自动编写执行 Python 代码，降低了数据分析的技术门槛。",
    analogy: "Data Agent 像 24 小时待命的数据分析师——你把原始数据甩给他，说「帮我看看上个月哪个产品卖得最好做个趋势图」，他默默处理一切然后给你清晰的分析报告和图表。",
    useCases: ["销售团队上传 Excel 让 Agent 自动生成多维分析图表", "运营团队上传用户行为数据让 Agent 识别流失因素", "财务人员上传发票账单让 Agent 自动分类统计"],
    misconception: "Data Agent 能做探索性分析——你不需要提前知道要分析什么，说「帮我看看有什么有意思的发现」它就能主动找出异常值、趋势和关联性。",
    beginnerTip: "用 Data Agent 前花 5 分钟清理数据是最高 ROI 的动作：表头清晰、无合并单元格、日期格式统一、数值列确是数字。脏数据会让 AI 花一半算力在「猜意思」上。",
  },

  // 51. 文生文
  {
    id: "text-to-text",
    name: "Text-to-Text",
    cnName: "文生文",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Text-to-Text（文生文）是生成式 AI 最基础的能力——输入文字，输出文字，涵盖写作、翻译、摘要、润色、改写等。GPT-5、Claude 4、DeepSeek-V3 的底层都是文生文，这是使用频率最高的 AI 能力。",
    analogy: "文生文像随身秘书——「帮我写一封感谢邮件」「把这段话翻译成英文」「这个报告缩到 200 字」——输入输出都是文字，但变化无穷。",
    useCases: ["日常办公撰写邮件、报告、演讲稿", "学习场景知识总结、读书笔记生成", "内容创作文案撰写、故事创作、头脑风暴"],
    misconception: "文生文的最好方式是协作而非替代——你提供想法、框架和审阅，AI 负责初稿整理。最终作品体现你的思想判断，效率大幅提升。",
    beginnerTip: "最实用技巧是「角色设定 + 示例参考」：「你是一流财经记者，请分析此财报写 500 字评论，风格参考财新网」。输出质量会明显提升。",
  },

  // 52. 文生图
  {
    id: "text-to-image",
    name: "Text-to-Image",
    cnName: "文生图",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Text-to-Image（文生图）用文字描述生成图片。2026 年 Midjourney、DALL-E、Stable Diffusion 是三大主流工具，支持描述画面内容、风格（水墨/油画/动漫/3D）、构图、光线等，几秒到几十秒出图。让「创意可视化」变得前所未有的简单。",
    analogy: "文生图像「想象力打印机」——以前需要学会画画或雇设计师才能呈现脑海画面，现在只需描述「一只穿宇航服的橘猫站在月球上，赛博朋克风格」——几秒后打印机就输出你脑海中的图。",
    useCases: ["产品设计师快速生成多个外观方案草图", "营销团队为社交媒体生成配图节省摄影设计成本", "游戏设计师快速生成角色设定图和场景概念图"],
    misconception: "写 Prompt 本身是门技术——构图、视角、光线、风格、色彩、细节密度需精心设计。高质量出图的关键在于描述质量而非模型本身。",
    beginnerTip: "入门推荐 Midjourney（效果最好需付费）或免费 Leonardo AI。Prompt 公式：「主体+场景+风格+细节+画质」。多参考社区优秀作品进步最快。",
  },

  // 53. 图生图
  {
    id: "image-to-image",
    name: "Image-to-Image",
    cnName: "图生图",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Image-to-Image（图生图）是在已有图片基础上用 AI 生成新图片——换风格（动漫/油画/水彩）、换背景、换表情、增减物体。AI 保留原图结构信息的同时按描述改变内容或风格，2026 年已广泛应用于照片美化、风格迁移、老照片修复。",
    analogy: "图生图像「AI 整容师+造型师」合体——拿图片给他说「把这个人变动漫风格」，他保持五官位置加动漫线条；说「背景换海边」，自动识别背景只替换。原图骨架在，外形焕然一新。",
    useCases: ["产品草图快速渲染成逼真成品效果图", "自拍照转动漫头像或艺术风格头像", "老照片上色修复还原历史影像色彩"],
    misconception: "图生图不是「加个滤镜」——它是真正的重新创作，每像素由 AI 根据语义理解重新生成。原图仅提供结构参考，不是简单叠加效果。",
    beginnerTip: "最实用参数是「降噪强度（Denoising Strength）」：0.3-0.5 适合风格迁移保留原图结构，0.6-0.8 适合大改动换背景换风格。",
  },

  // 54. 文生视频
  {
    id: "text-to-video",
    name: "Text-to-Video",
    cnName: "文生视频",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Text-to-Video（文生视频）用文字描述直接生成视频。2026 年 Sora（OpenAI）、Runway Gen-4、Pika、可灵 Kling 是代表产品。虽视频长度和物理一致性仍有挑战，但进步速度惊人——不到两年从「勉强能动」到「几乎以假乱真」。",
    analogy: "文生视频像给 AI 一个「电影分镜脚本」就能拍出短片。传统拍视频需导演、摄影师、演员、灯光、后期整团队，AI 只需一段文字脚本——像「微型好莱坞」塞进手机。",
    useCases: ["营销团队快速生成多个短视频广告素材做 A/B 测试", "教育机构制作科普动画短片降低视频制作成本", "独立创作者一个人就是一个视频团队"],
    misconception: "当前技术只能生成几秒到一两分钟连续镜头，人物动作和物理效果偶尔违反自然规律。适合短视频素材和概念演示，要成为电影级工具还有距离。",
    beginnerTip: "入门推荐免费 Pika 或可灵 Kling。写提示词关键是描述「动态变化」——不只说画面里有什么，还要说清楚什么在动、怎么动。",
  },

  // 55. 图生视频
  {
    id: "image-to-video",
    name: "Image-to-Video",
    cnName: "图生视频",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Image-to-Video（图生视频）让静态图片变为动态视频——AI 理解图片内容和结构后自动补间生成连贯动画。比文生视频更可控，因为起始画面确定。广泛应用于老照片复活、产品展示、视觉特效。",
    analogy: "图像给静态照片注入「生命魔法」——像哈利波特中会动的报纸照片，拿一张照片，AI 就让里面的人微笑、走动、仿佛要从相框里走出来。",
    useCases: ["老照片人物动起来仿佛回到拍摄时刻", "产品图片生成 360 度旋转展示视频提升电商转化", "静态插画加动态效果制作社交媒体动画"],
    misconception: "图生视频不是「图片+平移缩放特效」——AI 理解物体结构和空间关系后生成真实运动，人物自然走动不是僵硬位移，水面有真实波纹不是变形滤镜。",
    beginnerTip: "效果最好的图片特点：主体清晰、背景不杂乱、有明显可想象运动方向。画面「干净」的图比元素混乱的图效果好上好几倍。",
  },

  // 56. 文生语音
  {
    id: "text-to-speech-app",
    name: "Text-to-Speech",
    cnName: "文生语音",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "Text-to-Speech（文生语音）将文字转自然语音。选一个「声音角色」（温柔女声/沉稳男声/活泼童声），AI 生成对应语音。与文生文是好搭档——先生成文字再播报。让内容消费从「看」扩展到「听」。",
    analogy: "文生语音像给每段文字配专业配音演员——以前要请人录音、租录音棚、反复重录，现在一行文字几秒就能生成专业语音。",
    useCases: ["公众号文章自动转语音满足通勤族听读需求", "在线课程自动生成多语种教学语音降本", "产品宣传视频配音制作无需专业配音演员"],
    misconception: "最新 ElevenLabs、OpenAI TTS 已能模拟自然呼吸、情绪化语调、即兴语气词——闭上眼很多时候分不清是人是 AI，远非「机器人音」。",
    beginnerTip: "中文语音合成推荐百度或阿里语音服务，中文语感节奏控制好。多语种或丰富声音角色推荐 ElevenLabs。",
  },

  // 57. 数字人
  {
    id: "digital-human",
    name: "Digital Human",
    cnName: "数字人",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "Digital Human（数字人）是 AI 创建的虚拟人物，融合 CG、动作捕捉、TTS 和 NLP 技术，具有逼真外貌、自然动作和 LLM 驱动的智能对话。2D 或 3D 形式，可 24/7 做直播、客服、培训、播报，是 AI 与人交互的前沿形式。",
    analogy: "数字人像《头号玩家》中的虚拟替身但更先进——不仅能「变成」数字人，还能「雇佣」数字人为你工作：直播间带货、银行引导客户、前台迎接访客。24 小时在岗、永远充满热情的「数字员工」。",
    useCases: ["电商直播间 AI 数字人主播 24 小时不间断带货", "银行大厅数字人导览员引导客户办理业务", "在线教育 AI 数字人教师 1v1 互动授课"],
    misconception: "今天的 AI 数字人与传统虚拟偶像有本质区别——数字人有 LLM 驱动的「大脑」，能根据上下文实时生成回应，而非播放预设台词和动画。是真正的「虚拟人」而非仅「虚拟形象」。",
    beginnerTip: "想体验数字人？试试 HeyGen 或 D-ID——上传照片和文字，几分钟生成会说话的数字人视频。这是最直观的入门方式。",
  },

  // 58. AI绘画
  {
    id: "ai-painting",
    name: "AI-Powered Painting",
    cnName: "AI绘画",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "AI-Powered Painting（AI 绘画）涵盖文生图、图生图、风格迁移、智能修图。它不仅是工具更是新创作范式——人提供创意方向和审美选择，AI 执行技术细节。降低视觉创作门槛，专业人士用它快速迭代草稿和探索风格。",
    analogy: "AI 绘画像每位创作者身边多了一位永不疲倦的画室助手——你脑中的画面动嘴描述，助手出草图；「太冷了调暖一些」立刻修改；「试试印象派」几分钟出几个变体。你始终在创造，执行效率提升十倍。",
    useCases: ["插画师 AI 辅助快速生成多风格草图加速迭代", "创业者用 AI 生成产品概念图和商业提案配图", "游戏美术用 AI 批量生成道具图标背景素材"],
    misconception: "AI 绘画更像摄影术的发明——没有消灭绘画而是创造新艺术形式。它解放了画师从重复技术工作，让他们更专注于创意和风格表达。",
    beginnerTip: "选定一个工具深耕（Midjourney 或 Stable Diffusion），每天生成 20 张图复盘哪些描述有效，一周后 Prompt 功力超过 90% 的人。",
  },

  // 59. AI视频生成
  {
    id: "ai-video-generation",
    name: "AI Video Generation",
    cnName: "AI视频生成",
    category: "应用技术",
    difficulty: "进阶",
    simpleExplain: "AI Video Generation 涵盖文生视频、图生视频、视频编辑、风格化等能力。2026 年 Runway Gen-4、Sora、可灵 Kling、剪映 AI 是代表产品。不仅能生成动态内容，还能自动完成智能剪辑、加字幕、调色。",
    analogy: "AI 视频生成像请了一整个视频制作团队——你当导演决定方向和审美，AI 团队执行拍摄生成、自动剪辑、调色、特效、字幕。以前四五个人干几天，现在一个人几小时搞定。",
    useCases: ["短视频创作者快速生成多风格视频做流量测试", "企业内部培训自动将文字教程转教学视频", "房产中介将房源照片自动生成配音解说看房视频"],
    misconception: "当前 AI 视频本质是「辅助创作」而非「全自动创作」——擅长生成短片段、自动剪辑、自动特效，但完整故事性长视频仍需人来策划结构和串联。",
    beginnerTip: "工具更新极快，关注 Runway、Pika、可灵三个代表性产品，每月试用更新感受技术迭代速度。不要执着于单一工具。",
  },

  // 60. AI音乐生成
  {
    id: "ai-music-generation",
    name: "AI Music Generation",
    cnName: "AI音乐生成",
    category: "应用技术",
    difficulty: "入门",
    simpleExplain: "AI Music Generation 用 AI 自动创作音乐——涵盖作曲、编曲、配器甚至填词演唱。描述风格（欢快钢琴/90年代摇滚/电影配乐风）、情绪、节奏、时长即可生成原创音乐。2026 年 Suno、Udio 是最热门工具，质量让非专业人士难辨 AI 还是人类创作。",
    analogy: "AI 音乐生成像随身带了一个精通所有风格的全能作曲家——「帮我写一首婚礼上放的温馨浪漫小提琴曲」，几秒到几分钟后一首从未存在过的曲子就诞生了。不需要音乐学院毕业证，但曲子能打动人心。",
    useCases: ["短视频创作者用 AI 生成免版税背景音乐避免侵权", "独立游戏开发者用 AI 为游戏场景生成专属配乐", "健身教练用 AI 生成不同节奏运动伴奏匹配训练阶段"],
    misconception: "现代 AI 音乐是从零创作——它学习音乐底层规律（和弦进行、节奏型、旋律发展）然后按规律创作全新音乐，不是「把现有歌曲拼接」。是真正的「作曲」。",
    beginnerTip: "入门推荐 Suno——免费版支持中文歌词和曲风描述。首次使用从熟悉风格+简单主题开始，如「一首轻快民谣关于旅行和自由」，很快听到结果。",
  },

  // ========================================================================
  // 智能体 (61-80)
  // ========================================================================

  // 61. 单Agent
  {
    id: "single-agent",
    name: "Single Agent",
    cnName: "单Agent",
    category: "智能体",
    difficulty: "入门",
    simpleExplain: "Single Agent 是由一个 AI 智能体独立完成任务的模式——独自理解任务、制定计划、调用工具、产出结果。2026 年绝大多数 AI 应用（Claude Code、客服机器人、个人助手）都是单 Agent 架构，优点是简单易控。",
    analogy: "单 Agent 像优秀的个体户手艺人——从接单到交付全部自己搞定，做事利落。但如果遇到需要多种完全不同专长的大型项目，一个人就应付不来——需要多 Agent 系统。",
    useCases: ["个人 AI 编程助手独立完成代码补全和 Bug 修复", "AI 客服机器人独立处理用户咨询和问题", "AI 翻译助手独立完成文本翻译和润色"],
    misconception: "单 Agent 不等于「功能简单」——设计精良的单 Agent + 强工具组合往往比多 Agent + 弱工具更有效。关键在能力和工具，不在数量。",
    beginnerTip: "构建 AI 应用永远先从单 Agent 开始。只有单 Agent 确实搞不定（需并行处理多类型任务、多视角交叉验证）时再引入多 Agent 架构。",
  },

  // 62. 多Agent
  {
    id: "multi-agent-app",
    name: "Multi-Agent System",
    cnName: "多Agent",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Multi-Agent System（多智能体系统）由多个扮演不同角色的 AI Agent 协作完成任务——通过通信、分工、结果传递共同处理单个 Agent 难以应对的复杂任务。2026 年 CrewAI、AutoGen、LangGraph 是主流多 Agent 框架。",
    analogy: "多 Agent 系统像组建一支专业 AI 团队——研究员搜集资料、分析师处理数据、写手撰稿、审校把关。每个 Agent 是自己领域的专家，团队配合完成单个专家做不到的事。",
    useCases: ["深度研究报告：研究者→分析师→写手→审校流水线", "软件开发：架构设计→编码→测试→代码审查", "内容生产：选题策划→资料搜集→初稿→编辑润色→分发"],
    misconception: "多 Agent 未必一定比单 Agent 好——引入通信开销、协调成本和错误传导风险。组织不当 3 个 Agent 不如 1 个。多 Agent 是解决特定问题的工具，不是万能药。",
    beginnerTip: "学习多 Agent 推荐从 CrewAI 开始——API 直观，定义 Agent 分配 Task 几行代码就见效。先用最简单的 2 个 Agent 搭配练手。",
  },

  // 63. Planner
  {
    id: "planner",
    name: "Planner",
    cnName: "规划器",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Planner（规划器）是 Agent 系统的关键组件，负责将用户模糊目标拆解为可执行步骤序列——如「做市场分析报告」被拆为调研规模→分析竞品→分析用户→SWOT→撰写结论。再分配子任务给 Executor。",
    analogy: "Planner 像建筑总工程师——业主说「我要盖楼」，总工先画整体规划图（地基/楼层/管线），再把任务分给结构队、水电队、装修队。没有规划师，各队伍无法有序协作。",
    useCases: ["将分析报告任务拆为调研→分析→撰写→审核步骤链", "将软件开发拆为需求分析→架构设计→编码→测试流水线", "将旅行规划拆为航班→酒店→行程→餐厅并行搜索"],
    misconception: "好的 Planner 不是简单「把任务分几步」——需考虑子任务依赖关系（哪个先做）、资源约束（哪些可并行）、执行可行性（每步需什么工具）。做的是「有约束优化规划」。",
    beginnerTip: "在系统提示词加规划引导：「行动前先列出完成任务的步骤清单，然后按顺序逐步执行」。这就是最简单的内置 Planner。",
  },

  // 64. Executor
  {
    id: "executor",
    name: "Executor",
    cnName: "执行器",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Executor（执行器）是 Agent 系统中负责具体执行任务的组件——Planner 制定计划后，Executor 调用工具和 API 完成每一步，反馈结果。多 Agent 系统中可有代码执行器、数据库执行器、浏览器执行器等不同类型。",
    analogy: "Executor 像施工队现场负责人——总工程师（Planner）给图纸后，负责人调配挖掘机（工具）、混凝土（外部资源）、人工处理（推理），落实每一个施工细节。没他，图纸只是纸上谈兵。",
    useCases: ["代码执行器：按规划伪代码编写运行实际 Python 代码", "数据库执行器：自然语言查询转 SQL 在数据库执行", "浏览器执行器：按规划步骤逐个打开网页提取信息"],
    misconception: "好的 Executor 不是「机械按步骤执行」——需在执行中判断：步骤失败是重试、换工具、还是回 Planner 重新规划？应变能力比执行速度更重要。",
    beginnerTip: "为 Executor 设计好错误处理策略是新手最易忽略的要事：为每步设置超时时间、最大重试次数、失败降级方案。",
  },

  // 65. Critic
  {
    id: "critic",
    name: "Critic",
    cnName: "评审器",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Critic（评审器）是 Agent 系统中审查输出质量的组件——检查事实准确性、逻辑连贯性、格式规范性。在多 Agent 系统中通常是独立 Agent，通过「产出-评审-改进」循环显著提升 AI 输出质量。",
    analogy: "Critic 像出版社审稿编辑——作者（Executor）写初稿后编辑仔细检查：这段逻辑有问题、那句话事实有误、结构需调整。作者按意见修改再提交，几轮后质量大幅提升。",
    useCases: ["研究报告流程中 Critic 检查数据准确性和论据充分性", "代码生成流程中 Critic 检查安全性、性能和质量", "翻译流程中 Critic 对照原文检查准确性和流畅度"],
    misconception: "Critic 自身也是 AI 也会犯错——可能忽略错误、给出不合理建议、与产出 Agent 陷入误解循环。Critic 提升了质量下限，但上限仍需人来把关。",
    beginnerTip: "最佳实践是每个 Critic 只看一个维度——一个检查事实性，一个检查格式，一个检查风格。职责越专一审查效果越好。",
  },

  // 66. Memory
  {
    id: "memory",
    name: "Memory",
    cnName: "记忆",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Memory（记忆）是 Agent 存储和回忆历史信息的能力——分为短期记忆（当前上下文窗口）和长期记忆（向量数据库跨会话存储）。有记忆的 Agent 能记住对话历史、用户偏好、任务记录，是从「一次性工具」升级为「长期伙伴」的关键能力。",
    analogy: "没记忆的 Agent 像金鱼——每次见面都是「初次见面」得重新介绍。有记忆的 Agent 像老朋友——记得你的偏好和历史问题，对话无缝衔接。",
    useCases: ["客服 Agent 记住客户历史问题避免反复描述", "个人 AI 助手记住工作习惯和偏好提供个性化服务", "编程 Agent 记住项目历史和技术决策在新任务中参考"],
    misconception: "好的记忆系统需「选择性遗忘」——只保留有长期价值的信息丢弃噪音。否则记忆库日益臃肿，有用回忆反被垃圾淹没。",
    beginnerTip: "最简单实现是「会话摘要」——长对话结束时让 AI 生成关键信息摘要存向量数据库。新对话开始时检索相关摘要加载到上下文，成本低效果好。",
  },

  // 67. Long-term Memory
  {
    id: "long-term-memory",
    name: "Long-term Memory",
    cnName: "长期记忆",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Long-term Memory（长期记忆）让 Agent 跨会话记住历史信息——将关键事实向量化存入向量数据库，新对话开始时检索相关内容加载到上下文窗口。使 Agent 在几个月后仍能「回忆」起之前讨论的事。核心挑战是「存什么」和「取什么」。",
    analogy: "长期记忆像私人助理永不丢失的笔记本——重要决策、偏好、待办都记在本上。三个月后你提起相关事，助理翻本找到记录立刻接上脉络。短期记忆在脑子里，长期记忆在本子上。",
    useCases: ["企业 Agent 记住每位客户沟通历史和偏好产品线", "学习 Agent 追踪学生学习进度和薄弱知识点", "项目 Agent 记录开发过程中技术决策和设计讨论"],
    misconception: "不能把所有历史塞进上下文窗口——长期记忆核心挑战是「何时存什么」和「何时取什么」。存太多无用是浪费，取太多无关是干扰。",
    beginnerTip: "不要存用户每句话，让 AI 提炼「关键事实」（如「用户偏好 Python」）存入向量库。检索时按语义相似度取最相关几条，远比整段对话存入有效。",
  },

  // 68. Short-term Memory
  {
    id: "short-term-memory",
    name: "Short-term Memory",
    cnName: "短期记忆",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Short-term Memory（短期记忆）是 Agent 当前会话内的临时记忆——即上下文窗口中的全部内容（对话消息、工具调用记录、中间结果）。会话结束即清除。优势是即时可用响应快，但容量受 Token 窗口大小限制。",
    analogy: "短期记忆像办公桌上的便签条——手头工作的零碎想法、临时数字、刚查信息先记在便签上。工作做完，重要信息抄笔记本（长期记忆），不重要便签扔掉。桌面空间有限。",
    useCases: ["多轮对话中记住用户前几句的要求和约束", "工具调用循环中追踪每步执行结果和中间数据", "任务执行中维护当前子任务进展状态和待办清单"],
    misconception: "短期记忆不仅是「记住前几句」——是整个上下文窗口的全部内容：对话 + 工具定义 + 系统提示词 + 工具调用结果。这些一起占窗口「座位」，空间管理是 Agent 设计重要课题。",
    beginnerTip: "关注「短期记忆预算」：系统提示词、工具定义、中间结果各占多少 Token。对话长了 Agent 开始失忆，可能是短期记忆溢出需压缩或会话摘要。",
  },

  // 69. Handoff
  {
    id: "handoff",
    name: "Handoff",
    cnName: "任务交接",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Handoff（任务交接）在多 Agent 系统中将当前 Agent 的任务和上下文无缝转交另一个更合适的 Agent。类似医院「转诊」——全科医生将患者连同病历转给专科医生，用户无断裂感。关键在传递任务描述+上下文状态。",
    analogy: "Handoff 像 400 客服电话转接——你描述问题后一线说「转技术支持」，转过去不需重新描述，技术支持已看到全部问题记录。好的 Handoff 让切换「无感」。",
    useCases: ["通用客服 Agent 将技术问题转交技术支持专用 Agent", "内容生产中研究 Agent 将检索结果转交撰写 Agent", "医疗应用中将患者描述转诊对应科室 AI Agent"],
    misconception: "高质量 Handoff 需传递两个东西：任务描述（要做什么）和上下文状态（当前进展和历史）。只有任务没有上下文，接手方从头来效率大减。",
    beginnerTip: "为接手方准备「交接简报」——用结构化 JSON 传递当前任务、已完成步骤、关键发现、待办事项。简报不超上下文窗口 10%，否则新 Agent 刚接手就快满了。",
  },

  // 70. Guardrails
  {
    id: "guardrails",
    name: "Guardrails",
    cnName: "安全护栏",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Guardrails（安全护栏）是围绕 Agent 行为设置的安全边界——输入侧检查用户是否试图越界，输出侧检查回复是否不当，行为侧限制访问敏感系统。2026 年企业 AI 应用中必不可少，常用 AI 监控 AI 的动态方案替代静态规则。",
    analogy: "Guardrails 像高速公路防护栏和车道线——不阻止你开车去目的地，但确保你不会冲出道路或逆行。Agent 的护栏同理：不限制正常能力但确保不误入禁区。",
    useCases: ["客服 Agent 限制只评论自家产品不能比较竞品", "编程 Agent 禁止删除修改生产环境数据库配置", "内容生成 Agent 过滤涉及暴力色情等不当输出"],
    misconception: "现代 Guardrails 不是固定关键词黑名单——攻击者会用各种技巧绕过。需要用专门安全评审模型实时评估 Agent 行为是否越界，静态防线不够用。",
    beginnerTip: "遵循「最小权限+关键点人工确认」原则：Agent 默认只能做最低风险操作，涉及支付、删除、发布等敏感操作时要求人工确认。",
  },

  // 71. Human-in-the-loop
  {
    id: "human-in-the-loop",
    name: "Human-in-the-loop",
    cnName: "人类在环",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Human-in-the-loop（HITL，人类在环）在 AI 流程的关键节点插入人工审核确认。AI 处理 95% 常规工作，高风险或需价值判断的节点暂停请求人干预。兼顾 AI 效率和人类安全审慎，2026 年是企业级 Agent 的标配设计。",
    analogy: "HITL 像商场自动结账机——顾客自己扫码付款（AI 处理大部分流程），检测到需核对年龄商品（如酒类）时暂停要店员确认。店员不参与每个扫码，但关键决策点必须出现。",
    useCases: ["AI 客服生成涉及赔付承诺的回复前人工审核", "编程 Agent 执行删除文件或修改生产代码前人工确认", "医疗 AI 诊断建议标注「仅供参考以医生诊断为准」"],
    misconception: "好的 HITL 设计是「AI 干活人把关关键点」——95% 自动完成，人只介入最关键的 5%。不仅不拖慢效率，反而因降低出错风险而整体更高效。",
    beginnerTip: "关键是选对介入点而非越多越好——风险越高、决策越不可逆的节点越需 HITL。低风险常规操作让 AI 自己跑即可。",
  },

  // 72. Autonomous Agent
  {
    id: "autonomous-agent",
    name: "Autonomous Agent",
    cnName: "自主智能体",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Autonomous Agent（自主智能体）给定高级目标后能长时间独立自主运行——拆解任务、规划步骤、调用工具、处理异常、调整策略直到目标达成。2026 年仍处研究和探索阶段，因完全自主需极强规划、纠错和风险管理能力。",
    analogy: "自主智能体像自动驾驶远洋货轮——你告诉目的地港口，船长（AI）自己规划航线、关注天气、调整航向、处理突发、补充燃料。全程自主，但 GPS 和紧急报警（人类监督）仍在后台。",
    useCases: ["给定「调研 AI 市场并生成报告」目标自主执行", "智能运维 Agent 自主监控发现异常自动诊断修复报告", "交易 Agent 在风控边界内自主分析市场数据执行交易"],
    misconception: "「完全自主」在 2026 年仍是理想并非现实——多数「自主 Agent」实践仍需定期人类监督核查。完全放手几小时后结果常出人意料。",
    beginnerTip: "实验自主 Agent 时务必设置最大步数限制和预算上限——无限制 Agent 可能在循环思考中烧掉大量 API 费却产出一堆废话。从小范围短时间任务试起。",
  },

  // 73. Tool-calling Agent
  {
    id: "tool-calling-agent-app",
    name: "Tool-calling Agent",
    cnName: "工具调用智能体",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Tool-calling Agent（工具调用智能体）核心能力是根据任务自动选择、调用和组合各种外部工具（API、数据库、搜索引擎、代码执行器）。与普通聊天 AI 只能「说」不同，它能「做」——查天气、发邮件、查数据库、跑代码。",
    analogy: "像熟练车间技术员——根据任务从工具箱挑合适的扳手、电钻、焊枪，不合适就换，不万能先用锤子敲。这种「选择使用工具」的能力是与聊天 AI 的本质区别。",
    useCases: ["智能运维 Agent 调用监控 API、日志工具、命令执行工具排查故障", "HR 助理 Agent 调用邮件、日程、HR 系统 API 自动完成入职流程", "销售支持 Agent 调用 CRM API 查客户信息生成报告"],
    misconception: "工具调用好坏取决于「工具描述」质量——不清晰告诉 AI 每个工具何时用（Use Case）和何时不用（Edge Case），AI 容易用错工具或用错参数。不是「把 API 列表扔给 AI」就行。",
    beginnerTip: "每个工具描述分三部分：(1)工具做什么 (2)什么场景使用 (3)什么场景绝不能使用。第三点最被忽略但也最重要。",
  },

  // 74. RAG Agent
  {
    id: "rag-agent-app",
    name: "RAG Agent",
    cnName: "知识库智能体",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "RAG Agent（知识库智能体）将 RAG 能力深度集成，专门处理基于大量私有文档和知识库回答问题的场景。2026 年企业 AI 落地最稳定类型之一——能判断何时查知识库、何时靠自身知识、检索不足时如何追问用户。",
    analogy: "RAG Agent 像随身带整个公司图书馆的法律顾问——回答合同问题时翻到原文说「根据第 X 条第 Y 款答案是...」。回答永远有据可查有源可溯，适合高准确性和可追溯性场景。",
    useCases: ["企业知识库 Agent 从制度文档检索后回答 HR 政策问题", "产品售后 Agent 结合产品手册和维修文档回答故障排查", "合规审查 Agent 检索最新法规条文审核合同合规风险"],
    misconception: "RAG Agent 不是「知识库+大模型」简单拼接——涉及文档切分策略、检索排序算法、相似度阈值设置、多轮检索策略等大量细节，每个环节都显著影响最终效果。",
    beginnerTip: "最易踩的坑是「文档切太碎」——太短丢上下文，太长检索不准。建议每个片段 500-1000 Token，根据文档类型实验确定最佳切分长度。",
  },

  // 75. Browser Agent
  {
    id: "browser-agent-app",
    name: "Browser Agent",
    cnName: "浏览器智能体",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Browser Agent（浏览器智能体）能自主操控网页浏览器——截图看页面→分析内容→决定操作（点击/输入/滚动）→执行→再截图，循环至任务完成。不依赖目标网站提供 API，理论上能操作任何网页。2026 年 Claude Computer Use 是典型实现。",
    analogy: "Browser Agent 像远程雇佣的虚拟文员——「去淘宝找最便宜的 XX 商品，价格和链接整理成表格发我」。文员在自己电脑（虚拟浏览器）上操作：打开网页、搜索、浏览、比价、整理表格。他和你一样靠「看」操作。",
    useCases: ["定时监控多个电商平台特定商品价格变化并记录", "自动搜集多个来源行业新闻生成每日资讯摘要", "对 Web 应用执行回归测试模拟真实用户操作路径"],
    misconception: "Browser Agent 每步操作需截图→传图→分析→决策，循环几秒到十几秒。它不是批量处理的速度型工具，是解决「没有 API 可用」场景的灵活性工具。",
    beginnerTip: "如果目标网站提供 API，用 API 方案比 Browser Agent 快得多便宜得多稳定得多。先用 API，API 不够再考虑 Browser Agent。",
  },

  // 76. Coding Agent
  {
    id: "coding-agent-app",
    name: "Coding Agent",
    cnName: "编程智能体",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Coding Agent（编程智能体）专门为软件开发设计，能理解整个代码库，根据需求编写、修改、重构代码，调试错误，运行测试和命令。Claude Code 和 Cursor Agent 是 2026 年标杆产品——在编程这种结构化、结果可验证的领域，Agent 价值最直接。",
    analogy: "Coding Agent 像你的 AI 编程搭档——说「帮我在用户管理模块加批量导入功能」，它就读代码、找相关文件、写代码、跑测试确保不破坏已有功能。像真有一个程序员在旁边和你配合。",
    useCases: ["根据自然语言需求在现有项目中实现完整新功能", "阅读整个代码库定位并修复深层 Bug", "对老旧代码重构统一风格提升性能和可读性"],
    misconception: "顶级 Coding Agent（如 Claude Code）能独立完成复杂功能——理解项目架构、跨多文件修改代码、写测试并验证。不仅能补全代码，还能「理解」和「创造」。",
    beginnerTip: "最有效协作方式是「小步快跑」：把大需求拆成多个独立小任务，每次让 Agent 做一个你确认再继续。比一次性描述全部需求效果好得多。",
  },

  // 77. Voice Agent
  {
    id: "voice-agent-app",
    name: "Voice Agent",
    cnName: "语音智能体",
    category: "智能体",
    difficulty: "进阶",
    simpleExplain: "Voice Agent（语音智能体）融合 ASR + LLM + TTS 三大技术，通过语音与用户交互——用户说话→AI 理解→AI 思考→AI 回复语音。适合驾驶、运动、家务等不看屏幕场景。2026 年 GPT-5 实时语音模式是标杆。",
    analogy: "Voice Agent 像随时在你身边的私人助理——开车时说「帮回张总消息，说我在路上了」就处理回复；做菜时问「红烧肉要炖多久」立刻回答。解放双手双眼，让 AI 融入日常。",
    useCases: ["车载语音助手：驾驶员语音导航、控制音乐、收发消息", "智能家居 AI：语音控制灯光、温度、家电", "无障碍助手：视障人士通过语音获取信息操作设备"],
    misconception: "Voice Agent 不是「聊天机器人+语音输入」——需处理背景噪音过滤、多人对话辨识、打断处理、情绪识别、语速自适应等「语音特有」挑战，远比文本交互复杂。",
    beginnerTip: "开发语音 Agent 优先考虑 OpenAI Realtime API——ASR+LLM+TTS 打包在低延迟链路，无需手动串联三环节。这是目前最低门槛方案。",
  },

  // 78. Data Agent
  {
    id: "data-agent-agent",
    name: "Data Agent",
    cnName: "数据智能体",
    category: "智能体",
    difficulty: "入门",
    simpleExplain: "Data Agent（数据智能体）专门处理和分析数据——自动读取文件、理解结构、编写分析代码、生成图表报告。让非技术人员用自然语言做数据分析：上传 Excel，说「分析各地区销售趋势找最赚钱产品线」，Agent 自动处理一切。",
    analogy: "Data Agent 像专属数据分析师——以前要自己学 SQL/Python 或求数据部门排期。现在上传数据用说话告诉他你想知道什么，他后台写代码跑数据画图表，几分钟后给你专业报告。你不会编程但可以「说话」指挥编程。",
    useCases: ["销售团队上传 Excel 让 Agent 自动生成多维分析报告", "HR 上传员工调查数据让 Agent 分析满意度和趋势", "学生上传实验数据让 Agent 自动统计检验生成图表"],
    misconception: "Data Agent 能做探索性分析——不需要知道具体要分析什么，说「帮我看看有什么值得关注的发现」它就能主动发现趋势、异常和相关性。",
    beginnerTip: "用前花 5 分钟整理数据是最高 ROI：表头清晰、无合并单元格、日期格式统一、数值列确是数字。脏数据让 AI 花一半算力在「猜意思」上。",
  },

  // 79. Workflow Agent
  {
    id: "workflow-agent-app",
    name: "Workflow Agent",
    cnName: "工作流智能体",
    category: "智能体",
    difficulty: "入门",
    simpleExplain: "Workflow Agent（工作流智能体）将 AI 处理能力与自动化工作流引擎深度结合，按预设流程图在每个节点执行操作（AI 判断、API 调用、条件分支），完成端到端业务流程。2026 年 Dify、Coze、n8n 是典型平台，实现「一次设计自动运行」。",
    analogy: "Workflow Agent 像装修项目经理——拆墙→水电→泥瓦→木工→油漆→验收，每阶段不同工人和标准。项目经理按流程推进每个节点，遇到问题调整方案，毛坯房变精装修。AI 工作流做同样的事。",
    useCases: ["客户反馈自动处理：接收→AI 分类→AI 生成回复草稿→人工确认→发送", "日报自动生成：定时触发→提取数据→AI 分析→AI 撰写→推送到群", "发票处理：接收 PDF→OCR 识别→AI 提取关键字段→存入财务系统"],
    misconception: "好的 Workflow Agent 不是简单「串起来」——包含条件分支、并行处理、错误重试、超时处理、人工审批等复杂逻辑。更像「可视化编程」而非简单步骤串联。",
    beginnerTip: "入门推荐 Dify 可视化 Workflow 模式——拖拽节点搭建流程。从最简单的「聊天→知识库检索→LLM 回答」三步流程开始，感受节点输入输出关系。",
  },

  // 80. Multi-agent System
  {
    id: "multi-agent-system",
    name: "Multi-agent System",
    cnName: "多智能体系统",
    category: "智能体",
    difficulty: "专业",
    simpleExplain: "Multi-agent System（多智能体系统）由多个不同角色的 AI Agent 组成协作系统——通过通信、任务分配、结果汇总处理复杂任务。协作模式有顺序流水线（A→B→C）、并行处理、辩论模式。2026 年 CrewAI、AutoGen、LangGraph 是主流框架，代表 AI Agent 最前沿方向。",
    analogy: "多智能体像组建「AI 全明星队」——做投资分析报告时让行业研究员、财务分析师、法律专家、风险分析师、首席撰稿人各司其职。每个 AI 做最擅长的事，团队产出远超单打独斗。",
    useCases: ["软件工程：需求分析→架构→前端→后端→测试→审查各 Agent 分工", "内容工厂：选题策划→资料搜集→初稿→编辑→SEO→多平台分发", "投资分析：行业研究+财务分析+法律审查+风险管理四角交叉验证"],
    misconception: "真正的多 Agent 系统涉及通信协议、任务依赖管理、冲突解决、结果融合等系统设计——是一套「组织架构」而非简单的并行聊天加合并。",
    beginnerTip: "入门推荐 CrewAI 的「顺序流程」模式——A Agent 完成后 B 接着做，感受信息传递。理解基础模式后再逐步尝试更复杂协作方式。",
  },

  // ========================================================================
  // 平台工具 (81-104)
  // ========================================================================

  // 81. ChatGPT
  {
    id: "chatgpt",
    name: "ChatGPT",
    cnName: "ChatGPT",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "ChatGPT 是 OpenAI 开发的对话式 AI 产品，基于 GPT 系列模型（2026年最新为 GPT-5），于 2022 年底引爆全球 AI 热潮。它支持文字对话、DALL-E 图片生成、文件分析、联网搜索和代码执行，有免费版和 Plus/Pro 付费版。ChatGPT 是许多人第一次接触 AI 的地方。",
    analogy: "ChatGPT 就像 AI 界的「iPhone 时刻」——它将强大 AI 能力装进人人都能用的聊天界面，让 AI 从实验室工具变成每个人的日常伙伴。",
    useCases: ["日常写作、翻译、头脑风暴和知识问答", "用 GPTs 定制特定场景的 AI 助手", "上传文件让 AI 自动分析数据并生成报告"],
    misconception: "ChatGPT 并非唯一的「最强 AI」——Claude 4 在编程和长文本上更强，Gemini 在多模态上更优，DeepSeek 在性价比上突出。不同模型各有所长。",
    beginnerTip: "ChatGPT 免费版足够应对大多数日常需求。先摸清免费版的能力边界，再根据实际需要决定是否升级到 GPT-5 等付费功能。",
  },

  // 82. Claude
  {
    id: "claude",
    name: "Claude",
    cnName: "Claude",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Claude 是 Anthropic 开发的大语言模型系列（2026年最新为 Claude 4），以安全性、超长上下文（20万 Token）和编程能力见长。Claude Code 是其命令行编程工具，在开发者群体中广受欢迎。Claude 有免费版和 Pro/Team 付费版。",
    analogy: "Claude 像一个在编程和长文本处理领域造诣极深的学者——它能一天读完你全年的合同，写出精细的代码，并严格遵守你的复杂指令。",
    useCases: ["将整本小说或全年合同放入上下文窗口进行分析和总结", "使用 Claude Code 在终端完成复杂代码开发和重构", "处理需要高度安全性的法律文档和敏感内容审查"],
    misconception: "Claude 和 ChatGPT 有明显「性格」差异——Claude 更谨慎、注重安全边界和推理过程；ChatGPT 更开放、主动。两者不是简单替代关系。",
    beginnerTip: "如果你需要处理超长文档或 AI 编程辅助，强烈推荐 Claude 4。它的 20 万 Token 上下文窗口和 Claude Code 是两大核心优势。",
  },

  // 83. Gemini
  {
    id: "gemini",
    name: "Gemini",
    cnName: "Gemini",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Gemini 是 Google 开发的原生多模态大模型系列，从设计之初就能同时理解文字、图片、音频、视频和代码。它深度集成在 Google 生态中（Gmail、Docs、YouTube 等），有免费版和 Gemini Advanced 付费版。2026 年 Gemini 2.5 在综合多模态理解上表现出色。",
    analogy: "Gemini 像一个「生在 Google 生态里的 AI 管家」——能直接读你的 Gmail、翻你的 Google Drive、理解 YouTube 视频内容，在 Google 全家桶中如鱼得水。",
    useCases: ["在 Gmail 中自动总结邮件线索并生成回复草稿", "上传 YouTube 视频链接让 Gemini 总结要点", "在 Google Meet 中实时记录并生成会议纪要"],
    misconception: "Gemini 的核心差异是原生多模态——它不是后来「拼接」的多模态，而是从设计第一天就内置了对图片空间关系、视频时间序列和音频变化的深层理解。",
    beginnerTip: "如果你日常重度使用 Google 全家桶，Gemini 是最无缝的 AI 伴侣。从 Gmail 侧边栏的 Gemini 总结功能开始体验最直观。",
  },

  // 84. Copilot (GitHub Copilot)
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    cnName: "GitHub Copilot",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "GitHub Copilot 是 GitHub（微软）推出的 AI 编程助手，深度集成在 VS Code、JetBrains 等主流 IDE 中。它能根据注释和上下文实时补全代码、生成完整函数、编写测试和修复 Bug。2026 年它仍是全球最流行的 AI 编程助手之一，与 Cursor 和 Windsurf 互补共存。",
    analogy: "GitHub Copilot 就像坐在你旁边看屏幕的资深程序员搭档——你写注释它补全代码，你定义函数名它实现逻辑，编程节奏从「自己敲」变成「AI 敲你审」。",
    useCases: ["根据注释自动生成完整函数实现", "为已有代码自动生成单元测试", "在 IDE 中用自然语言描述需求让 Copilot 生成对应代码"],
    misconception: "GitHub Copilot 的代码补全基于公开数据训练，你的私有代码不会被上传给其他用户或用于训练他人模型——公司代码是私密的。",
    beginnerTip: "Copilot 对新手的最大价值是「学习」——写一段中文注释描述需求，看它给出的实现，这就是最省力的编程学习方式之一。",
  },

  // 85. Cursor
  {
    id: "cursor",
    name: "Cursor",
    cnName: "Cursor",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "Cursor 是一款 AI-first 代码编辑器（基于 VS Code），将 AI 深度嵌入编辑器的每个角落——Inline Edit、Chat、Composer 和 Agent Mode。它在 2024-2026 年间迅速崛起，与 Windsurf 并列为新一代 AI IDE 的代表。Cursor 能理解整个项目的文件结构、Git 历史和跨文件上下文。",
    analogy: "传统 IDE + AI 插件是「编辑器外包一个 AI 助手」；Cursor 则是 AI 即编辑器，编辑器即 AI——你说它写，你选它改，你问整个项目它答。",
    useCases: ["用 Composer 模式让 AI 同时修改多个文件完成功能开发", "用 Chat 模式针对整个代码库提问而非单个文件", "用 Agent Mode 让 AI 自动完成从编码到测试的完整循环"],
    misconception: "Cursor 并非简单的「VS Code + AI 插件」——它的 AI 集成深度远超插件，能理解项目全局结构、跨文件上下文和 Git 历史，这是普通插件无法实现的。",
    beginnerTip: "从 VS Code 迁移到 Cursor 可导入原有配置、快捷键和扩展，几乎零迁移成本。优先练熟 Tab（接受建议）和 Ctrl+K（内联编辑）两个核心快捷键。",
  },

  // 86. Claude Code
  {
    id: "claude-code",
    name: "Claude Code",
    cnName: "Claude Code",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "Claude Code 是 Anthropic 推出的命令行 AI 编程工具，让开发者在终端中与 Claude 4 协作编程。它能直接读写文件、执行 Shell 命令、操作 Git、运行测试，像一个能真正「动手干活」的 AI 程序员。2026 年它与 Cursor、Windsurf 共同引领 AI 编程新范式。",
    analogy: "Claude Code 就像在命令行里雇佣了一个全栈工程师——你描述任务，它去探索代码库、理解结构、实现代码、运行测试，你像技术主管它像高效程序员。",
    useCases: ["从零搭建完整项目：自动创建文件结构、写代码、配置环境", "跨多文件系统性重构和代码审查", "描述 Bug 现象后自动定位、修复并验证"],
    misconception: "Claude Code 不是 SDK 而是完整的命令行编程工具产品——它有独立的 CLI 和交互方式，在任何项目中均可使用，调用的是 Claude 4 模型。",
    beginnerTip: "Claude Code 最神奇的时刻是让它探索陌生代码库——切到一个从未见过的项目目录让它分析结构，你会惊讶于它对代码的理解深度。",
  },

  // 87. Codex
  {
    id: "codex",
    name: "Codex",
    cnName: "Codex (OpenAI)",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "Codex 是 OpenAI 推出的编程专项 AI 模型，是 GitHub Copilot 早期的底层引擎。它专门在巨量代码数据上训练，擅长将自然语言转译为可运行代码。如今其能力已整合进 GPT-5 等统一模型中，Codex 作为独立品牌更多是历史概念。",
    analogy: "Codex 像一个只读代码手册长大的超级程序员——训练数据绝大部分是代码和开发文档，所以对编程语言的「语感」特别纯正。",
    useCases: ["将自然语言算法描述翻译为可运行代码", "在语言之间自动翻译代码（如 Python → JavaScript）", "为不熟悉的 API 和库生成调用代码"],
    misconception: "Codex 今天更多是一个「历史品牌」——它的能力已被整合进 GPT-5 等通用模型中。如今调用 ChatGPT 的编程能力，底层已不再是单独的 Codex 模型。",
    beginnerTip: "现在无需单独关注 Codex API。编程 AI 能力建议直接用 GPT-5 API 或 Claude Code / Cursor，它们继承了 Codex 的全部能力并大幅超越。",
  },

  // 88. LangChain
  {
    id: "langchain",
    name: "LangChain",
    cnName: "LangChain",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "LangChain 是最流行的 AI 应用开发框架（Python/JS），提供标准化的「积木」来快速搭建 LLM 应用。它封装了 Prompt 模板、Chain、Agent、Tool、Memory、RAG 等常见模式。2026 年 LangChain 与 LangGraph 生态已相当成熟，是企业级 AI 应用开发的主流选择。",
    analogy: "LangChain 就像 AI 应用开发的「宜家模块化家具」——你不用从零锯木板，而是用现成的标准化模块来拼装你的 AI 应用。",
    useCases: ["搭建 RAG 知识库问答系统：Document Loader + Vector Store + Chain", "用 LangGraph 实现有状态的复杂 Agent 工作流", "构建多工具 AI Agent 实现自动调度"],
    misconception: "LangChain 并非学习 AI 开发的必修课——对于简单场景，直接调用模型 API 更轻便。它的价值主要在复杂场景：多工具协作、长链路推理、复杂状态管理。",
    beginnerTip: "学习 LangChain 建议从 Quickstart 文档开始，跟着搭建第一个「聊天机器人 + 知识库检索」应用。不要一次理解所有模块，边用边学最有效。",
  },

  // 89. LlamaIndex
  {
    id: "llamaindex",
    name: "LlamaIndex",
    cnName: "LlamaIndex",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "LlamaIndex 是专注于数据连接的 AI 开发框架，核心定位是「让 LLM 能接入和理解你的私有数据」。它在 RAG 方面提供丰富工具集——支持 160+ 数据源、几十种文档切分策略和检索算法。2026 年 LlamaIndex 已成为企业数据接入场景的首选框架。",
    analogy: "LlamaIndex 就像一个「AI 专用数据翻译官」——将 PDF、数据库、API 等五花八门的数据翻译成 AI 能理解和检索的统一格式。",
    useCases: ["构建企业文档智能助手：连接 SharePoint、Google Drive 等异构数据源", "搭建高级 RAG 系统：使用树索引和摘要索引提升检索质量", "构建数据分析 Agent：让 AI 自动查询数据库并基于结果回答问题"],
    misconception: "LlamaIndex 和 LangChain 并非竞争关系——LlamaIndex 专攻「数据接入和检索」，LangChain 强在「Agent 编排和工作流」。很多生产级应用同时使用两者。",
    beginnerTip: "LlamaIndex 的数据连接器是它最强大的武器——几行代码就能把 Notion、Google Docs、数据库等数据源接入 AI。从这个功能开始尝试最直观。",
  },

  // 90. CrewAI
  {
    id: "crewai",
    name: "CrewAI",
    cnName: "CrewAI",
    category: "平台工具",
    difficulty: "专业",
    simpleExplain: "CrewAI 是构建多 Agent 协作系统的 Python 框架，用简洁代码定义多个 AI Agent 的角色和任务，让它们像团队一样协同工作。API 设计直观——定义 Agent（角色、目标）、定义 Task、组装成 Crew、kickoff。2026 年 CrewAI 是业界最主流的多 Agent 框架之一。",
    analogy: "CrewAI 就像给 AI Agent 设计的「公司组织架构图生成器」——你定义 CEO、研究员、写手、审校等角色，它帮你「激活」这些数字员工，让它们像微型公司一样协作运转。",
    useCases: ["自动化内容生产：研究员搜集→写手撰稿→审校润色→发布全链条协作", "智能客服：分诊 Agent → 专员 Agent → 复核 Agent → 人工兜底", "研究报告生成：多个专业 Agent 分工撰写章节，最终整合为完整报告"],
    misconception: "CrewAI 不是简单「把多个 ChatGPT 调用串起来」——它提供角色特化、任务依赖管理和消息传递机制。Agent 之间真的在「协作」，不是简单的先后执行。",
    beginnerTip: "用 CrewAI 先从 2 Agent 的最小组建开始——比如「研究员 + 写手」——理解 Agent 间的信息传递逻辑后，再逐步增加角色。",
  },

  // 91. AutoGen
  {
    id: "autogen",
    name: "AutoGen",
    cnName: "AutoGen",
    category: "平台工具",
    difficulty: "专业",
    simpleExplain: "AutoGen 是微软推出的多 Agent 对话框架，核心概念是「可对话智能体」——每个 Agent 可与其他 Agent 或人类进行多轮对话来协同完成任务。它特别擅长构建人机混合工作流，让人类和多个 AI Agent 在同一「聊天室」中协同。2026 年 AutoGen 是多 Agent 框架的重要参与者。",
    analogy: "AutoGen 就像给 AI Agent 建的「工作群聊」——人类主管布置任务，多个 AI Agent 在群里讨论、分配工作、传递结果，人类随时可以插嘴纠正方向。",
    useCases: ["搭建人机混合工作流：人类定义方向，多个 AI Agent 协作执行，关键节点人工审核", "学术研究辅助：文献搜集 Agent + 数据分析 Agent + 论文写作 Agent 三件套协作", "代码项目协作：架构师 Agent 设计→程序员 Agent 编码→测试 Agent 验证"],
    misconception: "AutoGen 和 CrewAI 设计哲学不同——AutoGen 强调「对话驱动协作」，Agent 靠聊天交互；CrewAI 强调「角色驱动协作」，Agent 按预设流程执行。两者适合不同场景。",
    beginnerTip: "AutoGen 学习曲线比 CrewAI 稍陡，但它对人工参与的灵活支持是独特优势。建议从官方「Human-in-the-loop」示例开始，这是 AutoGen 最能发挥的场景。",
  },

  // 92. Google ADK
  {
    id: "google-adk",
    name: "Google ADK",
    cnName: "Google ADK",
    category: "平台工具",
    difficulty: "专业",
    simpleExplain: "Google ADK（Agent Development Kit）是 Google 推出的 AI Agent 开发框架，基于 Gemini 模型生态。它深度集成 Google 云服务和开发者工具链，与搜索、地图、Gmail 等服务原生打通。2026 年它是 Google 生态内 Agent 开发的首选框架。",
    analogy: "Google ADK 就像 Google 给 AI 开发者发的「官方工装」——搜索、邮件、地图、云端能力全打包好，你只需专注 Agent 的业务逻辑，底层基础设施由 Google 搞定。",
    useCases: ["构建深度集成 Google 生态的 AI 助手（自动处理邮件 + 管理日历 + 分析文档）", "使用 Google Search 工具让 Agent 获得实时搜索能力", "在 Google Cloud 上部署和运维企业级 Agent 服务"],
    misconception: "Google ADK 不是 Google 版的 LangChain——它的优势在于「Google 全家桶无缝连接」和部署运维能力，而非跨平台通用性。重度依赖 Google 生态的场景下 ADK 是首选。",
    beginnerTip: "如果你是 Google Cloud 用户，从官方文档的「Quickstart: Build your first agent」教程开始，这是上手 Google ADK 最快的路径。",
  },

  // 93. OpenAI Agents SDK
  {
    id: "openai-agents-sdk",
    name: "OpenAI Agents SDK",
    cnName: "OpenAI Agents SDK",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "OpenAI Agents SDK 是 OpenAI 官方推出的 Agent 开发工具包（Python），提供 Agent 定义、Tool 注册、Handoff、Memory、Guardrails 等核心模块。作为官方出品，新模型的新能力 SDK 第一时间就支持。2026 年它是 GPT 生态 Agent 开发的首选。",
    analogy: "OpenAI Agents SDK 就像「GPT 原厂的官方改装套件」——发动机（GPT 模型）配上官方变速箱（Agent 调度）、刹车（Guardrails）和方向盘（Handoff），量身定制，装上就能跑出最佳性能。",
    useCases: ["构建客服 Agent：利用 Handoff 和 Guardrails 实现多级客服自动转接", "开发工具调用 Agent：注册多个外部工具让 Agent 自动选择和调用", "搭建多 Agent 系统：通过 Handoff 实现 Agent 间任务交接"],
    misconception: "OpenAI Agents SDK 深度绑定 GPT 系列模型。如果你计划用 Claude 或 Gemini 作为主力模型，它就不合适了——选 LangChain 或对应官方的 SDK 更合适。",
    beginnerTip: "如果你确定用 OpenAI API 作为主力模型，OpenAI Agents SDK 是开发 Agent 的首选——文档质量好、官方直接维护，不用担心第三方框架突然没人维护。",
  },

  // 94. Dify
  {
    id: "dify",
    name: "Dify",
    cnName: "Dify",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Dify 是开源的 AI 应用开发平台，主打「低代码/可视化」——通过拖拽和配置就能搭建完整的 AI 应用。支持聊天助手、知识库问答（RAG）、Agent 工具调用和工作流编排。有云端版和私有部署版，2026 年是低代码 AI 平台中最主流的选择之一。",
    analogy: "Dify 就像 AI 应用界的「乐高套装」——用现成的标准化组件（知识库模块、大模型模块、工具模块、工作流模块）来「搭」AI 应用，不用从零写代码。",
    useCases: ["10 分钟搭建企业内部知识库问答应用", "用可视化工作流搭建客户反馈自动处理流水线", "通过 Agent 模式让 AI 调用多个业务 API 完成复杂任务"],
    misconception: "Dify 不只是「原型演示工具」——它支持私有部署、企业级权限管理、多模型接入和复杂工作流编排，完全可在生产环境中运行真实业务。",
    beginnerTip: "Dify 是 AI 初学者最佳的动手平台——不需要写代码，上传几份文档就能搭出知识库问答应用。先注册免费云端版，花 20 分钟跟着官方 Quickstart 走一遍。",
  },

  // 95. Coze
  {
    id: "coze",
    name: "Coze",
    cnName: "Coze (扣子)",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Coze（扣子）是字节跳动推出的 AI Bot 搭建平台，主打低代码/可视化搭建，支持知识库、工作流、插件和变量管理。它深度集成字节生态——飞书、抖音、豆包——搭好 Bot 后一键发布到飞书群、抖音号、微信客服等渠道。2026 年它是国内 AI 应用开发最接地气的平台。",
    analogy: "Coze 就像字节跳动给所有人发的「AI 工具箱 + 发布平台」——搭建好 Bot 后立刻「上岗」去飞书群回答问题、去抖音号回复评论、去微信服务客户，把「造 AI」和「用 AI」做成了闭环。",
    useCases: ["搭建飞书群 AI 助手：自动回答群成员常见问题", "创建抖音 AI 客服：自动回复用户评论中的产品咨询", "构建企业内部知识库 Bot：连接公司文档，员工随时查询"],
    misconception: "Coze 不只限于字节系产品——它也开放了 API 接口，可以在自己的网站或 APP 中通过 API 调用 Coze 上搭建的 Bot。",
    beginnerTip: "如果你在国内做 AI 应用，Coze 是首选入门平台。从「创建飞书群 FAQ Bot」开始——上传常见问题文档、搭好 Bot、一键发布到飞书，全程不超过 30 分钟。",
  },

  // 96. Flowise
  {
    id: "flowise",
    name: "Flowise",
    cnName: "Flowise",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Flowise 是开源的 AI 工作流可视化搭建工具，基于 Node.js 和 LangChain。通过拖拽节点搭建 AI 应用流程——数据源→向量化→检索→LLM 回答——全程可视化。可 Docker 一键私有部署，2026 年是「可视化学习 AI」的最佳工具之一。",
    analogy: "Flowise 就像一个「AI 流程图绘画板」——画好流程图点「运行」，流程图就变成了真实在工作的 AI 应用。",
    useCases: ["通过图形化拖拽快速搭建 RAG 知识库问答应用（无代码）", "可视化设计和调试 AI 工作流，清晰看到每个节点的输入输出", "用于 AI 原型教学：学生通过「搭积木」理解 RAG 原理"],
    misconception: "Flowise 不是 Dify 的简单替代品——Flowise 偏「框架可视化层」（LangChain 的图形化包装），适合学习和原型；Dify 偏「完整应用平台」（含部署、监控、权限），适合生产落地。",
    beginnerTip: "Flowise 是理解 AI 应用底层逻辑的绝佳工具——每个拖拽节点对应 LangChain 的一个模块。用它「可视化学习」RAG 流程比看代码直观得多。",
  },

  // 97. n8n
  {
    id: "n8n",
    name: "n8n",
    cnName: "n8n",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "n8n 是开源的自动化工作流平台，连接 400+ 应用和服务。它不仅做传统自动化，还深度集成 AI 能力——在工作流中插入 AI 节点做智能分类、内容生成和情感分析。关键优势：开源、私有部署、代码节点（支持自定义 JavaScript/Python）。2026 年是灵活自动化场景的首选。",
    analogy: "n8n 就像「万能遥控器 + 智能大脑」——传统自动化只能「如果 A 就做 B」，n8n 加上 AI 能做「如果 A 就分析一下，想清楚再决定做 B 还是 C」。",
    useCases: ["自动处理邮件：收到邮件→AI 分析意图→分类→AI 生成回复→存入 CRM", "定时报告生成：定时触发→提取数据→AI 分析→生成报告→推送到群", "社交媒体管理：AI 生成内容→多平台定时发布→收集互动数据→AI 分析效果"],
    misconception: "n8n 不只是 Zapier 的开源替代版——它的代码节点和 AI 节点远超 Zapier，能嵌入真正的编程逻辑和 AI 推理，处理更复杂的智能自动化场景。",
    beginnerTip: "n8n 的 AI 节点对主流模型（OpenAI、Anthropic、Google）都有良好支持。建议先从替换现有的手动重复流程开始，插入一个 AI 节点感受「自动化 + AI」的威力。",
  },

  // 98. Zapier
  {
    id: "zapier",
    name: "Zapier",
    cnName: "Zapier",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Zapier 是全球最大的商业自动化平台，连接 7000+ 应用和服务。用自然语言描述自动化流程即可实现，也加入了 AI 能力（Zapier AI Actions）。最大优势是「应用连接数量」和「免配置体验」——几乎覆盖所有常见商业应用。",
    analogy: "Zapier 就像「超级万能胶」——把本来不互通的商业软件粘在一起协作。CRM、邮件、表格、聊天软件出厂时不互通，Zapier 在它们之间加了一层翻译层。",
    useCases: ["收到客户邮件→AI 分析意图→自动创建 CRM 任务分配给销售", "表单提交→AI 对内容分类→根据类别自动存档到不同文件夹", "电商订单生成→自动创建发货单→AI 生成发货通知邮件"],
    misconception: "Zapier 和 n8n 定位不同——Zapier 胜在「量大」（7000+ 连接）、「省心」（托管服务）、「简单」；n8n 胜在「灵活」（代码节点）、「自主」（开源私有部署）、「复杂」（支持复杂分支和状态管理）。",
    beginnerTip: "追求「最省心的自动化」选 Zapier 免费版就够了。但如果处理敏感数据或需要复杂自定义逻辑，n8n 私有部署更合适。",
  },

  // 99. Hugging Face
  {
    id: "hugging-face",
    name: "Hugging Face",
    cnName: "Hugging Face",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "Hugging Face 是全球最大的 AI 模型和数据集开源社区，被称为「AI 界的 GitHub」。托管几十万个开源模型和海量数据集，提供 Transformers 库、免费推理 API、训练工具和 Spaces 部署服务。2026 年它仍是 AI 开发者日常离不开的核心平台。",
    analogy: "Hugging Face 就像 AI 模型界的「GitHub + 应用商店」——GitHub 分享代码，Hugging Face 分享训练好的模型和数据集，可浏览、下载、在线试用。",
    useCases: ["从 Hugging Face 下载开源模型（Llama、Mistral、Qwen）在本地运行", "使用 Hugging Face Spaces 一键部署 AI Demo 应用", "通过 Transformers 库用几行代码加载和使用前沿 AI 模型"],
    misconception: "Hugging Face 不只是「模型下载站」——它是完整 AI 开发生态，包括模型库、数据集、训练工具、部署服务和竞赛平台。企业从「找模型」到「微调」到「部署」的完整流程都可在上面完成。",
    beginnerTip: "Hugging Face 的模型卡片（Model Card）是了解 AI 模型的最好窗口——有介绍、示例、性能指标和局限性说明。尝试任何新开源模型前先读它的 Model Card。",
  },

  // 100. Ollama
  {
    id: "ollama",
    name: "Ollama",
    cnName: "Ollama",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "Ollama 是让你在个人电脑上轻松运行大语言模型的工具，把「下载→配置→运行→提供 API」简化为一行命令（`ollama run llama3`）。支持 Llama、Qwen、DeepSeek 等几十种开源模型。2026 年它是本地 AI 最便捷的入口。",
    analogy: "Ollama 就像 AI 模型界的「一键安装管家」——说一句「装 Llama 3」，管家全包下载、安装、配置、运行，你坐下来就能用。",
    useCases: ["在个人电脑上免费运行开源大模型（数据不出本地，保护隐私）", "开发者用 Ollama 本地 API 开发和测试 AI 应用（零 API 费用）", "在离线环境中使用 AI 能力（如车间、实验室、涉密场所）"],
    misconception: "Ollama 不只运行小模型——它支持百亿级参数模型（如 Llama 3 70B），只是需要足够的 RAM 和 GPU 内存。硬件到位时本地模型表现可以很出色。",
    beginnerTip: "Ollama 第一个模型建议从小模型开始（如 Llama 3 8B 或 Qwen 2.5 7B），普通笔记本就能流畅运行。之后再根据硬件条件决定是否上更大模型。",
  },

  // 101. Local LLM
  {
    id: "local-llm",
    name: "Local LLM",
    cnName: "本地大模型",
    category: "平台工具",
    difficulty: "进阶",
    simpleExplain: "本地大模型是在自己电脑或服务器上运行、不依赖云服务的 LLM。通过 Ollama、vLLM、llama.cpp 等工具运行 Llama、Qwen、DeepSeek 等开源模型。最大优势是数据完全不出机器，适合处理涉密文件、客户隐私等敏感信息。",
    analogy: "本地大模型就像把你家变成「私人图书馆 + 智库」——云端 AI 是去公共图书馆查资料（方便但被人看到），本地 AI 是自家书房里的专属学者，讨论内容不会有第三人知道。",
    useCases: ["分析包含商业机密的内部文档，数据不离开公司网络", "在无网络或网络受限环境中使用 AI（如安全实验室、远洋船舶）", "用本地模型开发和测试 AI 应用，节省 API 调用成本"],
    misconception: "本地大模型不是「离线版 ChatGPT」——受限于硬件和训练数据，大多数任务上仍与顶级云端模型有差距。但差距正在快速缩小，很多场景已「够用且隐私更优」。",
    beginnerTip: "判断机器能不能跑本地模型：至少 16GB RAM 是门槛，32GB 以上更好。独立 GPU 显存 8GB 以上大幅加速，纯 CPU 也能跑只是慢一些。",
  },

  // 102. Open-source Model
  {
    id: "open-source-model",
    name: "Open-source Model",
    cnName: "开源模型",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "开源模型指模型权重对所有人公开、可下载使用甚至二次训练的模型。代表有 Llama（Meta）、Qwen（阿里）、DeepSeek（深度求索）、Mistral 等。2026 年开源模型是推动 AI 民主化的重要力量——任何人无需巨头许可就能运行强大 AI。",
    analogy: "开源模型就像「AI 菜谱全部公开的餐厅」——闭源模型你只能去吃但不知道配方，开源模型连菜谱和烹饪流程都公开了，你可以回家自己做、改配方（微调）、甚至发明新菜品。",
    useCases: ["企业在自己服务器上部署开源模型，保护数据隐私", "研究者基于开源模型微调和实验，推动学术研究", "开发者将开源模型集成到本地应用中，不依赖云 API"],
    misconception: "开源不等于免费——模型权重免费，但运行需要硬件成本，商业使用需遵守许可协议（有些限制商业用途）。「开源」不等于「零成本」也不等于「随便用」。",
    beginnerTip: "入门开源模型建议从 Qwen（通义千问）或 Llama 3 的 7B/8B 版本开始，有完善的中文支持和丰富文档。通过 Ollama 下载体验最方便。",
  },

  // 103. Closed-source Model
  {
    id: "closed-source-model",
    name: "Closed-source Model",
    cnName: "闭源模型",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "闭源模型指模型权重和训练方法不对公众开放、只能通过官方 API 或产品使用的模型。GPT-5（OpenAI）、Claude 4（Anthropic）、Gemini 2.5（Google）都是闭源模型。它们通常代表当前 AI 能力最高水平，代价是不能自己部署，数据需上传到官方服务器。",
    analogy: "闭源模型就像五星级酒店的招牌菜——你只能在酒店吃到（通过官方 API），菜谱保密（权重不公开），但确实做得好，因为有一整个专业厨师团队在持续打磨。",
    useCases: ["通过 API 或产品直接使用当前最强 AI 能力（无需自己部署）", "需要最高推理质量的复杂任务时使用闭源模型", "将闭源模型作为评估基准来衡量开源模型水平"],
    misconception: "闭源模型不一定总比开源好——通用任务上顶级闭源更强，但特定领域精细微调后的开源模型可能更优。关键看场景，不是绝对的。",
    beginnerTip: "AI 初学者应从闭源模型产品（ChatGPT、Claude、Gemini）开始——体验最好、不折腾。技术能力提升后再探索开源模型。",
  },

  // 104. Model Provider
  {
    id: "model-provider",
    name: "Model Provider",
    cnName: "模型供应商",
    category: "平台工具",
    difficulty: "入门",
    simpleExplain: "模型供应商是开发和提供 AI 模型服务的公司或组织。主要玩家包括 OpenAI（GPT-5）、Anthropic（Claude 4）、Google（Gemini 2.5）、Meta（Llama 开源）、阿里（Qwen 开源）、DeepSeek（开源）等。各供应商侧重不同——安全可靠、技术开源、性价比——理解各自特点有助于场景化选型。",
    analogy: "模型供应商就像不同风格的汽车制造商——特斯拉（OpenAI）主打科技感和全能，沃尔沃（Anthropic）主打安全可靠，丰田（Google）主打实用集成，比亚迪（阿里）主打性价比和本地化。",
    useCases: ["根据任务需求和应用场景选择合适的模型供应商", "在 AI 应用中接入多个供应商 API 实现备份和切换", "对比不同供应商模型在特定任务上的表现选择最优解"],
    misconception: "模型供应商不仅是「卖模型」——更是「卖服务」。API 服务、产品体验、安全合规、技术支持、生态集成等才是核心价值。你付钱买的不只是模型，更是一个可靠的服务。",
    beginnerTip: "不要把需求都绑在一个供应商上。至少熟悉 2-3 个主要供应商的产品和 API，当一个出问题或涨价时，你有随时切换的 Plan B。",
  },

  // ========================================================================
  // 安全治理 (105-116)
  // ========================================================================

  // 105. AI安全
  {
    id: "ai-safety",
    name: "AI Safety",
    cnName: "AI安全",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 安全是确保 AI 系统不对人类、社会和环境造成危害的综合性实践。核心技术包括 Guardrails（安全护栏）、Red Teaming（红队攻击测试）、Prompt Injection（提示注入防御）和 Hallucination（幻觉缓解）。2026 年 AI 安全已从「可选关注」变为产品和合规的必选项。",
    analogy: "AI 安全就像给超级跑车设计安全系统——不仅要有刹车和气囊（Guardrails），出车前还要请黑客尝试攻破（Red Teaming），确保安全是「内置」而非「外挂」的。",
    useCases: ["对用户输入进行 Prompt Injection 扫描，防止 AI 被利用生成危险内容", "通过 Red Teaming 评估 AI 系统在恶意输入下的行为", "部署 Guardrails 对 AI 输出进行实时安全检测和拦截"],
    misconception: "AI 安全不只是「加关键词过滤」——真正的安全需要多层纵深防御：输入 Guardrails + 模型行为约束 + 输出检测 + Red Teaming。单靠一层防线挡不住 Prompt Injection 等攻击。",
    beginnerTip: "无论 AI 项目多小，至少做到三件事：(1) 输入安全过滤 (2) 输出敏感词检查 (3) 记录所有交互日志。这三条成本很低，能挡住大部分常见问题。",
  },

  // 106. 数据隐私
  {
    id: "data-privacy",
    name: "Data Privacy",
    cnName: "数据隐私",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 数据隐私指在使用 AI 服务时保护用户和企业数据不被未授权访问、泄露或滥用。核心问题：你的数据去了哪里？谁能看到？会不会被用于训练模型？2026 年 Privacy 已成企业 AI 选型的首要考量，不同厂商隐私政策差异很大。",
    analogy: "数据隐私就像把重要文件交给打印店——你关心老板会不会偷看、会不会多复印一份、会不会当模板帮别人印。好的厂商有明确隐私政策并遵守，不好的在你不知情时「占便宜」。",
    useCases: ["选择承诺「不将 API 数据用于训练」的供应商处理敏感业务", "使用企业版服务（如 ChatGPT Enterprise）获得更强数据隐私保障", "对特别敏感的数据使用本地模型方案确保数据不出企业网络"],
    misconception: "「免费版=数据被拿去训练」不一定成立——各厂商政策不同，有的免费版也有 Privacy 保护。具体看每家隐私政策，不能一概而论。",
    beginnerTip: "使用任何 AI 产品前花 5 分钟读隐私政策中「数据使用」部分。关注两点：(1) 是否用你的输入训练模型？(2) 数据存储在哪个国家/地区？",
  },

  // 107. 权限控制
  {
    id: "access-control",
    name: "Access Control",
    cnName: "权限控制",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 权限控制是对 AI Agent 能访问哪些数据、调用哪些工具、执行哪些操作进行精细化管理的机制。核心是明确「谁能让它做」和「它能做多大范围」，遵循最小权限原则——Agent 只被授予完成任务所必需的最低权限。",
    analogy: "权限控制就像给保洁阿姨钥匙——只给她打扫卫生需要的那几把（最小权限），不给保险柜和抽屉的钥匙。万一钥匙丢了，损失也仅限于那几个地方。",
    useCases: ["限制客服 Agent 只能查询客户信息，不能修改或删除", "为编程 Agent 设置只能修改特定项目目录的文件", "给数据分析 Agent 只读访问数据库，禁止写入"],
    misconception: "权限控制不是「限制 AI 功能」——而是「精准释放能力」，确保 AI 在边界内安全地发挥最大价值。它保护使用者和系统，不是束缚。",
    beginnerTip: "给 AI Agent 配置权限从「最小权限」开始——先给最基本能力，确认稳定后再逐步开放。一次给太多权限再回收，远比逐步开放更危险。",
  },

  // 108. 日志审计
  {
    id: "audit-logging",
    name: "Audit Logging",
    cnName: "日志审计",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 日志审计是对 AI 系统所有关键操作进行记录和审查的机制。每次交互——输入、输出、工具调用、权限变更——都应记录到不可篡改的日志中。三大作用：出问题能回溯、合规能证明、运行状况能分析。没有日志的 AI 就像没有黑匣子的飞机。",
    analogy: "日志审计就像 AI 的「黑匣子 + 行车记录仪」——平时默默记录每次交互，一旦出现安全事故或用户投诉，这些记录就是「破案」的唯一线索。",
    useCases: ["企业 AI 应用记录每次对话和工具调用，满足审计和合规要求", "出现安全事故后通过日志回溯定位问题根源和影响范围", "分析 AI 交互日志来优化系统——哪些问题频繁出现？哪些工具调用失败？"],
    misconception: "日志审计不只是「存聊天记录」——完整的审计日志还需记录时间戳、用户标识、操作类型、请求参数、返回结果、是否命中安全规则等元信息。缺任何一环都可能漏掉关键线索。",
    beginnerTip: "在 AI 应用中使用结构化日志（JSON 格式）而非纯文本——后续分析和审计方便得多。每个日志至少包含：时间、用户、操作类型、请求摘要、结果、是否异常。",
  },

  // 109. 版权风险
  {
    id: "copyright-risk",
    name: "Copyright Risk",
    cnName: "版权风险",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 版权风险指使用 AI 生成的内容可能涉及知识产权侵权。如果 AI 生成的图片与现有作品高度相似，或代码包含受 Copyright 保护的第三方片段，可能面临侵权责任。2026 年各国对 AI 内容版权认定仍未统一，企业需了解风险并自我保护。",
    analogy: "AI 版权风险就像一个看过无数画作的画家——他画的确实是「新」画，但可能无意融入了记忆中名画的构图或风格。商用就可能惹上 Copyright 麻烦，即使你没有抄袭意图。",
    useCases: ["使用 AI 生成商用图片前用反向搜索检查是否与现有作品高度相似", "商业代码中使用 AI 生成代码前检查是否包含版权保护的代码片段", "在合同中明确 AI 生成内容的 Copyright 归属和使用限制"],
    misconception: "「AI 生成的内容默认为我的 Copyright」不一定成立——各国法律对 AI 内容版权归属认定复杂，有些国家认为不享有版权保护，有些要求「足够的人类创造性参与」。",
    beginnerTip: "计划将 AI 生成内容商用（特别是图片和音乐），一定用反向图像搜索或音频指纹检测确认不构成实质性相似。商业用途的 Copyright 风险远高于个人学习。",
  },

  // 110. 模型偏见
  {
    id: "model-bias",
    name: "Model Bias",
    cnName: "模型偏见",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "模型偏见是 AI 在训练数据中学习并放大了人类社会的既有偏见，导致对不同群体输出系统性不公平。例如问 AI「CEO 长什么样」可能倾向生成白人男性——这不是 AI 本性，而是训练数据中的偏见。它是 AI 伦理中最受关注的问题之一。",
    analogy: "模型偏见就像哈哈镜——反射的不是真实世界，而是被扭曲的倒影。AI 的「课本」（训练数据）本身带偏见，AI 不加批判地把偏见继承了下来。",
    useCases: ["招聘 AI 中检测对性别、年龄的隐性偏好", "医疗 AI 中确保不同种族诊断准确率一致", "客服 AI 中检查对不同表达方式的用户是否公平对待"],
    misconception: "AI 因为「理性」地学习了人类数据中的偏见模式，反而非常「擅长」有偏见——不加批判地复制数据中的不公平。因为输出看起来「客观」，人们更容易轻信。",
    beginnerTip: "检查模型偏见最简单的方法是「对称测试」——同样的意思用不同性别/地域/年龄的表达方式各问一遍。回答有显著差异就暴露了偏见。",
  },

  // 111. 事实核查
  {
    id: "fact-checking",
    name: "Fact-checking",
    cnName: "事实核查",
    category: "安全治理",
    difficulty: "入门",
    simpleExplain: "AI 事实核查是在采纳 AI 信息前通过权威来源验证其真实性的过程。因为 AI 存在 Hallucination（幻觉）——可能把错误信息说得跟真的一样——对重要事实（日期、数据、法律、医学建议）必须人工核查。把 AI 当参谋，不当法官。",
    analogy: "AI 就像一个知识渊博但偶尔自信地胡说八道的朋友——查一下权威资料验证他说的，他不是故意的，但你得自己把关。",
    useCases: ["AI 提供医疗建议后在权威机构网站核实", "AI 生成的代码 API 在官方文档中确认", "AI 引用法律条文时登录官方数据库核对原文"],
    misconception: "很多人以为事实核查是「不相信 AI」。实际上，它是「合理使用 AI 的必要步骤」——像你不会盲信专家文章的每句话一样，核查是因为重视准确性，不是因为不信任。",
    beginnerTip: "对 AI 重要信息用「双重验证法则」——至少两个独立权威来源确认。涉及医疗、法律、财务时绝不能只看一个 AI 的回答。",
  },

  // 112. 可靠性评估
  {
    id: "reliability-evaluation",
    name: "Reliability Evaluation",
    cnName: "可靠性评估",
    category: "安全治理",
    difficulty: "专业",
    simpleExplain: "AI 可靠性评估是系统性测试 AI 系统在真实场景中稳定性、准确性和安全性的过程。不是「偶尔试一下看看效果」，而是建立标准化测试集和评估指标，定期对 AI 进行「体检」。评估维度包括准确率、一致性、鲁棒性和安全性。",
    analogy: "可靠性评估就像新药上市前的临床试验。不能因为「吃了 10 个人都没事」就说这个药安全有效，而是要有标准化的测试流程——双盲实验、安慰剂对照、大样本统计——才能得出可靠的结论。AI 系统也需要类似的严谨测试，而不能仅凭开发者的「我感觉它挺好用」来判断。",
    useCases: ["为客服 AI 建立标准测试集，包含 500 个真实用户常见问题并标注期望答案", "对 AI 系统进行压力测试——输入大量异常和恶意请求，观察是否崩溃或失常", "在多轮对话场景中评估 AI 的记忆准确性和上下文追踪能力"],
    misconception: "很多人以为可靠性评估就是「用几个例子测一测」。实际上，随手测试往往带来虚假安全感——你会下意识选「好测」的例子回避「硬骨头」。真正的可靠性评估需要系统性和全面性的测试设计。",
    beginnerTip: "建立你的 AI 应用的「回归测试集」——把上线以来所有出过错的真实案例收集起来，每次更新系统或换模型版本时，用这个测试集跑一遍。这是成本最低但最有效的可靠性保障方法。",
  },

  // 113. Agent权限边界
  {
    id: "agent-permission-boundary",
    name: "Agent Permission Boundary",
    cnName: "Agent权限边界",
    category: "安全治理",
    difficulty: "专业",
    simpleExplain: "Agent 权限边界是为 AI Agent 划定的明确能力范围——边界内自由行动，超出必须停止或请求人工授权。例如客服 Agent 的权限边界可能是「只能查订单和产品信息，不能改订单、不能退款、不能看支付信息」。提前画好「能」和「不能」的线，让 Agent 在线内自由奔跑，永远不跨越红线。",
    analogy: "Agent 权限边界就像给智能车设置「电子围栏」——在市区内可以自由接单，但不能上高速、不能出城。围栏内的 Agent 可以自主行动，但触碰边缘就自动锁定。",
    useCases: ["为财务 Agent 设置「只能生成报告，不能发起实际转账」的硬边界", "为 HR Agent 划定「可以答复常见问题，不能透露员工薪资」的约束", "为编程 Agent 配置「可以读写 dev 分支，不能操作 main 分支」的限制"],
    misconception: "很多人以为权限边界会让 Agent 「束手束脚」。实际上，清晰的权限边界让 Agent 能够「放心地跑得更快」——就像一个明确知道交通规则的老司机，因为知道界限在哪里，反而能在界限内更自信地驾驶。",
    beginnerTip: "定义 Agent 权限边界时，用「白名单思维」而非「黑名单思维」——先说清楚 Agent 「只能做什么」，剩下的都是不允许的。反过来（「列出不允许做的事」）很容易出现遗漏，留下安全漏洞。",
  },

  // 114. 最小权限原则
  {
    id: "least-privilege",
    name: "Least Privilege Principle",
    cnName: "最小权限原则",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "最小权限原则是信息安全黄金法则，在 AI Agent 领域同样适用：每个 Agent 只被授予完成当前任务所需的最少权限。不是「不给权限」，而是「精准给权限」——文件处理 Agent 不需要能发邮件，发邮件 Agent 不需要能访问数据库。即使 Agent 被攻破，损失也仅限于其最小权限范围。",
    analogy: "最小权限原则就像给公司的每个员工发门禁卡。门口的前台能进大厅和会议室，但进不了财务室；财务能进财务室，但进不了服务器机房；IT 管理员能进机房，但进不了高管的办公室。每个人的卡只刷开他工作需要的门——不是不信任大家，而是万一某张卡丢了，损失也只局限在少数几扇门。",
    useCases: ["客服 Agent 只有「查询」权限，没有「修改」或「删除」权限", "代码审查 Agent 有「读文件+写评论」权限，没有「修改代码」权限", "社交媒体运营 Agent 有「发帖」权限，没有「删除历史内容」权限"],
    misconception: "很多人以为最小权限就是「把 Agent 绑死」。实际上，「最小」指刚好够用——需要的权限就给，不需要的绝对不给。它不是「少给」，而是「精准给」。",
    beginnerTip: "每次准备给 Agent 增加一个新权限时，先问自己：「这个权限是不是完成任务真正必需的？有没有某种方式可以不依赖这个权限也能完成任务？」如果答案是可以不用，就不加。",
  },

  // 115. 可解释性
  {
    id: "explainability",
    name: "Explainability",
    cnName: "可解释性",
    category: "安全治理",
    difficulty: "专业",
    simpleExplain: "AI 可解释性是指 AI 的决策能被人类理解和追溯的程度——它告诉你「我为什么给出这个答案」而不只丢出一个结果。在医疗、信贷、司法等高风险场景，可解释性是法律和伦理要求，不是锦上添花。大模型的「黑箱」特性是当前最大的挑战。",
    analogy: "可解释性就像看病时医生不仅要开药方，还要告诉你「为什么开这个药」和可能的副作用。AI 也一样——说「你应该这样做」不够，还得解释「基于什么信息、什么逻辑得出这个结论」。",
    useCases: ["在医疗 AI 诊断中显示「这个诊断结论是基于哪些影像特征得出的」", "在信贷 AI 审批中说明「拒绝这笔贷款的主要因素是什么」", "在内容审核 AI 中标注「这条内容被判定违规的具体原因和违反的规则」"],
    misconception: "很多人以为可解释的 AI 就是「AI 回答后加一段解释」。实际上，那可能只是 AI 生成的「听上去有道理的解释」，不一定是它真正的决策原因。真正的可解释性需要从模型架构层面设计，而不是靠「让 AI 解释自己」。",
    beginnerTip: "即使你使用的 AI 模型本身是「黑箱」，你仍可以通过「强制引用来源」来大幅提升可解释性——要求 AI 在给出结论时必须引用它依据的具体文档、数据或推理步骤。有据可查比有话说服有力得多。",
  },

  // 116. 可追溯性
  {
    id: "traceability",
    name: "Traceability",
    cnName: "可追溯性",
    category: "安全治理",
    difficulty: "进阶",
    simpleExplain: "AI 可追溯性是指能回溯 AI 系统每个决策和执行步骤的能力——从最终输出追溯至原始输入、推理过程、工具调用和中间判断全过程。比可解释性更进一步：可解释性是「知道为什么」，可追溯性是「知道全过程」。在故障排查、安全审计、合规监管中必不可少。",
    analogy: "可追溯性就像快递物流追踪——从「仓库出库→分拣→运输→派送→签收」看到全程每一步的时间和经手人。AI 也一样，追踪推理步骤、工具调用、引用来源，形成完整的「决策轨迹」。",
    useCases: ["AI 客服给出退款决定后，追溯其决策依据：查阅了哪些条款？参考了哪些历史案例？", "安全事件调查：AI 为什么在那个时间执行了那个操作？完整回溯触发链路", "合规审计：向监管机构展示 AI 系统的每一个决策都有据可查、有迹可循"],
    misconception: "很多人以为可追溯性就是「记录日志」。日志记录是基础，但两者不等同——完整的可追溯性还包括「把零散日志串联成可读的决策链」的能力。光有一堆原始日志，不能替代可追溯的完整故事。",
    beginnerTip: "在你的 AI 应用中，为每一次用户请求生成一个唯一的「Trace ID」，贯穿 AI 推理、工具调用、最终输出的全流程。所有日志都带上这个 ID——出现问题时，Trace ID 就是你「一键回溯全程」的钥匙。",
  },
];