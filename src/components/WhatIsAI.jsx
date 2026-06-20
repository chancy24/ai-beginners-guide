import { useState } from 'react';
import { ChevronDown, Lightbulb, BookOpen, Zap, Brain, Sparkles, TrendingUp, GitCompare, CheckCircle2, AlertTriangle, Compass } from 'lucide-react';
import SectionTitle from './SectionTitle';

const concepts = [
  {
    id: 'ai-basics',
    icon: Brain,
    title: 'AI 是什么？',
    tag: '基础概念',
    tagColor: 'tag-accent',
    humanExplanation:
      'AI（人工智能）就是让计算机做那些通常需要人类智慧的事——看懂图片、听懂语音、写出文章、做出决策。它不是魔法，而是用大量数据训练出的数学模型。传统程序是"人写规则，机器执行"；AI 是"人给例子，机器自己找规律"。2026 年的 AI 已经能通过视觉理解世界、用自然语言深度对话、独立完成编程等复杂任务。',
    analogy:
      '把 AI 想象成一个超级实习生：你给它看海量案例，它自己总结规律，而且不吃不睡，一天能"看"几百万份资料。但它缺乏真实世界的经验，有时候会自信地说出错误答案。',
    example:
      '拍照时手机自动识别脸部并自动对焦、短视频刷不完的精准推荐、语音助手听懂"明天 8 点叫我起床"——这些背后都是 AI。2026 年，你甚至可以让 AI Agent 独立帮你订机票、写代码、分析财报。',
  },
  {
    id: 'machine-learning',
    icon: TrendingUp,
    title: '什么是机器学习？',
    tag: '核心原理',
    tagColor: 'badge-easy',
    humanExplanation:
      '机器学习是让 AI 变聪明的核心方法。传统编程是"人写规则"：if 温度>30 then 开风扇。机器学习是"人给数据，机器找规则"：喂给它几万组"温度+是否开风扇"的数据，它自己找出阈值。数据越多，规律越准。',
    analogy:
      '教小孩认猫：你不会让他背《猫科动物生物学》，而是给他看大量猫的图片。看多了自然就能认出——哪怕是从没见过的品种。机器学习一模一样：给模型看成千上万标注好的图片，它自己学会。',
    example:
      '垃圾邮件过滤是经典案例。你不写规则，而是收集几百万封"正常邮件"和"垃圾邮件"，让模型自己发现：垃圾邮件的真正特征可能是"域名注册不到 3 天 + 链接占比超过 50%"，而不是某个关键词。准确率可达 99.9%。',
  },
  {
    id: 'deep-learning',
    icon: Zap,
    title: '什么是深度学习？',
    tag: '进阶概念',
    tagColor: 'badge-medium',
    humanExplanation:
      '深度学习是机器学习的进阶版，用"人工神经网络"模拟人脑——很多层计算单元堆叠，每层加工数据后传给下一层。浅层学"边缘和颜色"，中层学"形状和纹理"，深层能识别"人脸"或"物体"。层数越深，能学的东西越复杂。',
    analogy:
      '工厂质检流水线：第一道看颜色、第二道看形状、第三道判断整体是否合格、最后主管综合判断。深度学习就是很多个简单的"神经元"层层堆叠，每个只做简单判断，但合在一起能完成极其复杂的识别。',
    example:
      '手机上的人脸解锁就是深度学习：录入时将你的面部特征提取为几百个数据点，每次解锁时重新提取对比。即使你戴了眼镜、换了发型，它依然能认出你——因为它学会了哪些特征是不变的核心特征。',
  },
  {
    id: 'llm',
    icon: BookOpen,
    title: '大模型 (LLM) 是什么？',
    tag: '必知必会',
    tagColor: 'badge-easy',
    humanExplanation:
      '大语言模型（LLM）是一个"读"过海量文字和代码的 AI。它通过"预测下一个词"学会了语言、知识、推理甚至编程。2026 年的主流大模型有 Claude 4、GPT-5、Gemini 2.5、DeepSeek-V3 等。你可以把它理解为读过整个互联网的超级大脑——知识面极广，但不真正"理解"，而是擅长预测和生成文字。',
    analogy:
      '超级学霸被关在图书馆三年只读书不出门。你问他任何问题，他都能根据书里的知识回答——但他没亲身经历过。大模型知道如何做菜但没进过厨房，懂法律条文但没上过法庭。你问它"今天天气"它不知道，除非你给它联网。',
    example:
      '你让 AI "写一封礼貌但坚定的辞职信"，它几秒就能写好——不是因为它辞过职，而是它读过成千上万封信函，掌握了格式和措辞规律。让它"用 Python 写一个贪吃蛇游戏"，它也不是真会编程，而是见过海量 Python 代码。',
  },
  {
    id: 'generative-ai',
    icon: Sparkles,
    title: '生成式 AI 是什么？',
    tag: '热门前沿',
    tagColor: 'badge-medium',
    humanExplanation:
      '生成式 AI（Generative AI）能创造全新内容——文字、图片、音乐、视频、代码。传统 AI 做"识别"（这是猫还是狗？），生成式 AI 做"创造"（画一只戴墨镜的猫）。它学习海量作品中的规律，然后根据你的提示生成从未存在过的新内容。',
    analogy:
      '传统 AI 是鉴宝专家——看一眼就知道真伪。生成式 AI 是工匠——你描述想要什么样的花瓶，他就能做出来。他见过成千上万的花瓶，掌握了"花瓶应该长什么样"的规律。',
    example:
      '你对 Midjourney 说"穿宇航服的柴犬在月球散步"，它生成的图从未存在过——是 AI 将这些概念在参数空间中"组合创造"出来的。你用 Suno 输入"周杰伦风格的中国风 R&B"，它就能生成完整歌曲。2026 年，Sora、可灵等已能生成以假乱真的视频。',
  },
  {
    id: 'why-now',
    icon: TrendingUp,
    title: '为什么 AI 现在突然火了？',
    tag: '背景知识',
    tagColor: 'badge-medium',
    humanExplanation:
      'AI 概念 1950 年代就有了，近 3 年才爆发。四个原因：①互联网积累了海量数据 ②GPU 算力飞跃让训练大模型变得可行 ③2017 年 Transformer 架构奠定了大模型基础 ④2022 年底 ChatGPT 上线，让普通人第一次直观感受到 AI 的强大。到了 2026 年，AI Agent 已能独立完成编程、数据分析、流程自动化等复杂工作。',
    analogy:
      '做菜四个条件齐了才出满汉全席：食材（数据）堆满仓库、大火灶（算力）到位、金牌食谱（算法）公开、有人办免费试吃（ChatGPT 出圈）让所有人尝到味道——全世界都涌进来了。',
    example:
      '关键时间线：2017年 Transformer 论文 → 2020年 GPT-3 → 2022年11月 ChatGPT（2个月过亿用户）→ 2023年 GPT-4/Claude/Gemini 百花齐放 → 2024-2026年 AI Agent、多模态、MCP 生态爆发 → 2026年 Agent 编程、视觉推理、长程任务自动化成熟。',
  },
  {
    id: 'ai-vs-software',
    icon: GitCompare,
    title: 'AI 和普通软件有什么不同？',
    tag: '思维转变',
    tagColor: 'badge-easy',
    humanExplanation:
      '普通软件"规则驱动"——程序员写好所有逻辑，1+1 永远等于 2。AI 是"数据驱动"——程序员不写具体规则，用数据训练出模型，模型自己总结规律。同一问题问两次可能得到不同答案。AI 的核心特征：概率性（不是100%确定）、适应性（能应对新情况）、不可解释性（有时连开发者都不知道它为什么这么回答）。',
    analogy:
      '普通软件是自动售货机——按 A3 掉可乐，十万次不变。AI 是厨师——你说"做点好吃的"，每次可能不同，取决于他的状态和你的语气。你无法精准预测，但大概率是好吃的。',
    example:
      '垃圾邮件过滤对比：规则版写"标题含【中奖】→垃圾"，但垃圾邮件改成"中-奖"就绕过了。AI 版从几百万封邮件中自己学到：发件人域名注册不满 3 天 + 链接占比超 50% + 无签名档 = 垃圾。这些复杂规律人类很难手写。',
  },
  {
    id: 'ai-can-do',
    icon: CheckCircle2,
    title: 'AI 能做什么？',
    tag: '能力边界',
    tagColor: 'badge-easy',
    humanExplanation:
      '2026 年的 AI 已经非常能干了。文字方面：写作、翻译、总结、润色。编程方面：写代码、Debug、代码审查、自动化项目搭建（Claude Code、Cursor 等工具已让 Vibe Coding 成为主流）。图像方面：文生图、图片编辑、视频生成。数据分析：从 Excel 和数据库中自动发现趋势。Agent 方面：独立完成多步骤任务，如自动调研、订票、运营工作流。一句话：凡是涉及"语言理解"和"模式识别"的任务，AI 已经做得很好了。',
    analogy:
      'AI 是读了万卷书的学者（能写）、精通多语言的翻译官（能译）、熟练的程序员（能编程）、细心的分析师（能分析数据）。但它不是能做手术的医生、能打官司的律师——尽管它能"扮演"这些角色。',
    example:
      '2026 年日常：学生用 Claude 理解论文并润色；程序员用 Claude Code 或 Cursor 让 AI 写代码、Debug、部署；自媒体用 AI 一篇文案改写成小红书/公众号/抖音三版；创业者用 AI Agent 自动做竞品调研并生成分析报告。',
  },
  {
    id: 'ai-cant-do',
    icon: AlertTriangle,
    title: 'AI 不能做什么？',
    tag: '重要认知',
    tagColor: 'badge-hard',
    humanExplanation:
      'AI 的根本局限：①不真正"理解"——它只是概率预测，没有意识和感觉 ②会"幻觉"——一本正经编造不存在的事实、论文、数据，语气极其自信 ③输出质量依赖输入质量——垃圾提示词得到垃圾结果 ④缺乏物理世界常识——不知道"水是湿的"意味着什么 ⑤不能承担法律责任，不能做需要道德判断和共情的决策。',
    analogy:
      'AI 是"考试机器"——所有题库背得滚瓜烂熟，考试分数极高，但不理解题目含义。你突然改个条件超出题库，它就"瞎编"一个答案，而且编得跟真的一样。它没有"我不知道"的概念。',
    example:
      '真实翻车案例：律师用 AI 准备法律文书，AI 编造了几个不存在的判例（案件名称、编号、判决结果全虚构），律师没核实就提交法院，结果面临处罚。有人让 AI 分析某公司财报，AI 洋洋洒洒几千字——但那份财报根本还没发布，所有数据都是 AI"合理编造"的。',
  },
  {
    id: 'how-to-think',
    icon: Compass,
    title: '小白如何正确理解 AI？',
    tag: '心态指南',
    tagColor: 'badge-easy',
    humanExplanation:
      '最重要的八个字：**信任但要核实**。把 AI 当成知识面极广、反应极快、但偶尔犯错的助手。知识性问题用 AI 快速了解框架，再去查一手资料确认。创意任务用 AI 头脑风暴和初稿，人工打磨。编程让 AI 加速开发，但 Review 每一行它写的代码。不要焦虑——你不是在和 AI 竞争，你是在学习驾驭 AI 这个工具放大自己的能力。',
    analogy:
      'AI 像你博学但偶尔不靠谱的同事小张：什么都懂，滔滔不绝，但有时把道听途说当事实，有时为了"显得懂"而编造细节。聪明的做法：当信息参谋和创意伙伴超好用，但重大决策前自己翻原始资料核实。',
    example:
      '实用三步法：①用 AI 快速了解陌生领域框架（"用 200 字科普 RAG"）②找权威来源交叉验证（官方文档、维基百科）③动手实操巩固（自己搭一个 RAG 应用）。这三步下来，你既学到了真知识，也建立了对 AI 边界的准确感知——这是 AI 时代最核心的素养。',
  },
];

const iconMap = {
  '基础概念': Brain,
  '核心原理': TrendingUp,
  '进阶概念': Zap,
  '必知必会': BookOpen,
  '热门前沿': Sparkles,
  '背景知识': TrendingUp,
  '思维转变': GitCompare,
  '能力边界': CheckCircle2,
  '重要认知': AlertTriangle,
  '心态指南': Compass,
};

export default function WhatIsAI() {
  const [expandedId, setExpandedId] = useState('ai-basics');

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="what-is-ai" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          badge="核心概念"
          title="用人话讲清楚 AI 是什么"
          subtitle="每个概念都用人话解释 + 生活类比 + 真实例子，零基础也能看懂"
        />

        <div className="space-y-4 mt-12">
          {concepts.map((concept, index) => {
            const isOpen = expandedId === concept.id;
            const TagIcon = iconMap[concept.tag] || Lightbulb;
            const Icon = concept.icon;

            return (
              <div
                key={concept.id}
                id={concept.id}
                className={`glass-card transition-all duration-300 overflow-hidden ${
                  isOpen ? 'ring-1 ring-primary/30 shadow-lg shadow-primary/5' : ''
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: `animate-fade-in 0.5s ease-out ${index * 80}ms both`,
                }}
              >
                {/* Header — clickable */}
                <button
                  onClick={() => toggle(concept.id)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left focus:outline-none group"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-primary text-white' : 'bg-surface-light text-primary-light group-hover:bg-primary/20'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & tag */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                        {concept.title}
                      </h3>
                      <span className={`tag ${concept.tagColor} flex items-center gap-1 text-xs`}>
                        <TagIcon className="w-3 h-3" />
                        {concept.tag}
                      </span>
                    </div>
                  </div>

                  {/* Chevron */}
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary-light' : 'text-gray-500'}`} />
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 space-y-5 border-t border-white/5 pt-5">
                    {/* 人话解释 */}
                    <ContentBlock
                      icon={Brain}
                      color="text-accent"
                      bgColor="bg-accent/5"
                      borderColor="border-accent/10"
                      label="人话解释"
                      body={concept.humanExplanation}
                    />

                    {/* 类比 */}
                    <ContentBlock
                      icon={Lightbulb}
                      color="text-yellow-400"
                      bgColor="bg-yellow-400/5"
                      borderColor="border-yellow-400/10"
                      label="生活类比"
                      body={concept.analogy}
                    />

                    {/* 例子 */}
                    <ContentBlock
                      icon={Zap}
                      color="text-green-400"
                      bgColor="bg-green-400/5"
                      borderColor="border-green-400/10"
                      label="真实例子"
                      body={concept.example}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 p-5 rounded-2xl glass-sm text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            理解了这些基本概念，你就已经超过了 90% 的人。2026 年的 AI 世界正在快速进化，接下来去
            <a href="#agent-intro" className="text-primary-light underline underline-offset-2 hover:text-accent transition-colors">了解 Agent</a>、
            学习 <a href="#prompt" className="text-primary-light underline underline-offset-2 hover:text-accent transition-colors">提示词技巧</a>，
            或者 <a href="#learning-path" className="text-primary-light underline underline-offset-2 hover:text-accent transition-colors">查看学习路线</a>。
          </p>
        </div>
      </div>
    </section>
  );
}

/** Reusable content block for 人话解释 / 类比 / 例子 */
function ContentBlock({ icon: Icon, color, bgColor, borderColor, label, body }) {
  return (
    <div className={`rounded-xl p-4 sm:p-5 border ${bgColor} ${borderColor}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className={`text-xs font-semibold tracking-wide uppercase ${color}`}>{label}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed text-balance">{body}</p>
    </div>
  );
}
