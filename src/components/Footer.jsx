const linkGroups = [
  {
    title: '认识 AI',
    links: [
      { label: 'AI 是什么', href: '#what-is-ai' },
      { label: '大模型 (LLM)', href: '#llm' },
      { label: '生成式 AI', href: '#generative-ai' },
      { label: '机器学习', href: '#machine-learning' },
      { label: 'AI 发展简史', href: '#ai-history' },
      { label: '核心术语表', href: '#glossary' },
    ],
  },
  {
    title: 'Agent',
    links: [
      { label: 'Agent 是什么', href: '#agent-intro' },
      { label: '主流 Agent 对比', href: '#agent-compare' },
      { label: 'AutoGPT', href: '#autogpt' },
      { label: 'Manus', href: '#manus' },
      { label: 'Coze 扣子', href: '#coze' },
      { label: 'Dify', href: '#dify' },
    ],
  },
  {
    title: '实操',
    links: [
      { label: 'Prompt 提示词教程', href: '#prompt' },
      { label: 'RAG 入门', href: '#rag' },
      { label: 'MCP 协议', href: '#mcp' },
      { label: '工作流搭建', href: '#workflow' },
      { label: 'Vibe Coding', href: '#vibe-coding' },
      { label: 'AI 工具推荐', href: '#tools' },
    ],
  },
  {
    title: '工具',
    links: [
      { label: 'ChatGPT 使用指南', href: '#chatgpt' },
      { label: 'Claude 使用指南', href: '#claude' },
      { label: 'Midjourney 入门', href: '#midjourney' },
      { label: 'Cursor 编程助手', href: '#cursor' },
      { label: 'Notion AI', href: '#notion-ai' },
      { label: '更多工具合集', href: '#more-tools' },
    ],
  },
];

const socialLinks = [
  { label: 'GitHub', href: '#', icon: GitHubIcon },
  { label: 'Twitter / X', href: '#', icon: TwitterIcon },
  { label: '微信公众号', href: '#', icon: WechatIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A14] border-t border-white/5 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top row: description + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Site info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
                  <path d="M4 14a8 8 0 0 1 16 0v2a8 8 0 0 1-16 0v-2z" />
                  <circle cx="9" cy="17" r="2" />
                  <circle cx="15" cy="17" r="2" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">AI 小白指南</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              用最通俗易懂的方式，讲清楚 AI 世界的所有关键概念。
              从零基础到能实操，这里是你最好的 AI 入门第一站。
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary-light transition-colors duration-200"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase opacity-80">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200 leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Disclaimer */}
          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl text-center sm:text-left">
            本网站内容仅供参考，AI 领域快速变化，请以官方最新文档为准。
            我们不保证信息的绝对准确性和时效性，使用任何 AI 工具前请自行评估风险。
          </p>
          <p className="text-gray-600 text-xs whitespace-nowrap">
            &copy; {new Date().getFullYear()} AI 小白指南 &mdash; 保留所有权利
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---- tiny inline social icons ---- */

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WechatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22a6.009 6.009 0 0 0 1.532 2.166l-.205.778a.27.27 0 0 0 .05.23.26.26 0 0 0 .213.096.26.26 0 0 0 .138-.044l1.397-.82a.665.665 0 0 1 .549-.074c.334.112.688.164 1.031.164 2.3 0 4.262-1.595 4.803-3.766.515-2.071-.528-4.22-2.138-5.345-1.522-1.065-3.427-1.374-5.245-.933h-.065z" />
    </svg>
  );
}
