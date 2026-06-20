# AI 小白通关手册

一个面向 AI 新人的中文学习网站，用小白能听懂的方式整理 AI 学习路径、AI 名词、Agent 工具、平台工具对比、Vibe Coding、提示词模板和避坑指南。

## 项目亮点

- AI 入门概念：解释大模型、生成式 AI、RAG、多模态、MCP、工作流等高频名词。
- 名词地图与词典：按类别浏览 AI 领域常见术语，配有人话解释、类比和误区提醒。
- Agent 与工具对比：整理 Claude Code、Codex、Cursor、Manus、DeepSeek 等工具的差异与适用场景。
- 学习路径生成：根据身份、目标和基础生成适合新人的学习路线。
- 提示词模板：提供可复制的写作、编程、分析、办公和学习类提示词。
- 避坑指南：帮助新人识别 AI 学习和工具选择中的常见误区。

## 技术栈

- React 18
- Vite 5
- Tailwind CSS
- lucide-react

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址通常为：

```text
http://localhost:5175/
```

如果端口被占用，Vite 会自动切换到其他可用端口。

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## 目录结构

```text
src/
  components/   页面模块组件
  data/         术语、工具、提示词、FAQ 等结构化内容
  App.jsx       页面主结构
  main.jsx      React 入口
  index.css     Tailwind 与全局样式
```

## 开源协议

本项目使用 MIT License。
