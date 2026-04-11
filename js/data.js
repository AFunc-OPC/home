const projects = [
  {
    id: "project-001",
    name: "AFunc Core",
    description: "核心函数库，提供高性能的工具函数和实用工具集",
    longDescription: "AFunc Core 是一个现代化的 JavaScript 工具函数库，提供了 100+ 个高性能、经过充分测试的工具函数。支持 Tree-shaking，零依赖，TypeScript 类型完整，适用于浏览器和 Node.js 环境。",
    icon: "⚡",
    tags: ["javascript", "typescript", "utils"],
    stars: 1234,
    forks: 256,
    status: "active",
    links: {
      github: "https://github.com/afunc-opc/afunc-core",
      demo: "https://afunc-core-demo.netlify.app",
      docs: "https://afunc-core-docs.netlify.app"
    },
    image: "https://via.placeholder.com/800x400/667eea/ffffff?text=AFunc+Core",
    featured: true,
    createdAt: "2024-01-15",
    updatedAt: "2026-04-10"
  },
  {
    id: "project-002",
    name: "Vibe UI",
    description: "现代化的 React 组件库，专注于开发者体验和可访问性",
    longDescription: "Vibe UI 是一个从头设计的 React 组件库，专注于提供最佳的开发者体验和用户可访问性。包含 50+ 组件，支持暗色主题，完全可定制，遵循 WAI-ARIA 规范。",
    icon: "🎨",
    tags: ["react", "typescript", "ui"],
    stars: 892,
    forks: 134,
    status: "active",
    links: {
      github: "https://github.com/afunc-opc/vibe-ui",
      demo: "https://vibe-ui-demo.vercel.app",
      docs: "https://vibe-ui-docs.vercel.app"
    },
    image: "https://via.placeholder.com/800x400/764ba2/ffffff?text=Vibe+UI",
    featured: true,
    createdAt: "2024-03-20",
    updatedAt: "2026-04-08"
  },
  {
    id: "project-003",
    name: "CodeFlow",
    description: "可视化代码编辑器，支持实时协作和 AI 辅助编程",
    longDescription: "CodeFlow 是一个创新的在线代码编辑器，支持多人实时协作、AI 代码补全和智能重构建议。基于 Monaco Editor 构建，提供类似 VS Code 的编辑体验。",
    icon: "💻",
    tags: ["javascript", "web", "editor"],
    stars: 2341,
    forks: 456,
    status: "active",
    links: {
      github: "https://github.com/afunc-opc/codeflow",
      demo: "https://codeflow.app",
      docs: "https://docs.codeflow.app"
    },
    image: "https://via.placeholder.com/800x400/f093fb/ffffff?text=CodeFlow",
    featured: false,
    createdAt: "2024-05-10",
    updatedAt: "2026-04-11"
  },
  {
    id: "project-004",
    name: "DataViz Pro",
    description: "交互式数据可视化库，支持 20+ 图表类型",
    longDescription: "DataViz Pro 是一个强大的数据可视化库，基于 D3.js 构建，提供 20+ 种交互式图表。支持大数据量渲染，响应式设计，完整的 TypeScript 类型支持。",
    icon: "📊",
    tags: ["javascript", "d3", "visualization"],
    stars: 567,
    forks: 89,
    status: "active",
    links: {
      github: "https://github.com/afunc-opc/dataviz-pro",
      demo: "https://dataviz-pro-demo.netlify.app",
      docs: "https://dataviz-pro-docs.netlify.app"
    },
    image: "https://via.placeholder.com/800x400/00d4ff/ffffff?text=DataViz+Pro",
    featured: false,
    createdAt: "2024-07-01",
    updatedAt: "2026-03-28"
  },
  {
    id: "project-005",
    name: "APIForge",
    description: "API 开发和测试工具，支持 Mock 服务器和文档生成",
    longDescription: "APIForge 是一个全面的 API 开发工具，支持 API 设计、Mock 服务器、自动化测试和文档生成。与 OpenAPI 规范完全兼容，提供直观的可视化界面。",
    icon: "🔌",
    tags: ["nodejs", "api", "tools"],
    stars: 423,
    forks: 67,
    status: "developing",
    links: {
      github: "https://github.com/afunc-opc/apiforge",
      demo: null,
      docs: "https://apiforge-docs.netlify.app"
    },
    image: "https://via.placeholder.com/800x400/4ade80/ffffff?text=APIForge",
    featured: false,
    createdAt: "2025-09-15",
    updatedAt: "2026-04-05"
  },
  {
    id: "project-006",
    name: "DevBoard",
    description: "开发者个人仪表板，集成 GitHub、Notion 等服务",
    longDescription: "DevBoard 是一个可定制的开发者个人仪表板，集成 GitHub、Notion、Calendar 等常用服务。支持小部件系统，可以自由拖拽和配置布局。",
    icon: "🎯",
    tags: ["react", "dashboard", "integration"],
    stars: 312,
    forks: 45,
    status: "archived",
    links: {
      github: "https://github.com/afunc-opc/devboard",
      demo: "https://devboard-demo.vercel.app",
      docs: null
    },
    image: "https://via.placeholder.com/800x400/fbbf24/ffffff?text=DevBoard",
    featured: false,
    createdAt: "2024-11-20",
    updatedAt: "2025-06-15"
  }
];

const articles = [
  {
    id: "article-001",
    title: "构建高性能 JavaScript 工具库的最佳实践",
    excerpt: "深入探讨如何设计和实现一个高性能、可维护的 JavaScript 工具库，包括 Tree-shaking 优化、类型设计和性能测试策略。",
    content: "在构建 JavaScript 工具库时，性能和可维护性是两个核心目标...",
    author: "Alex Chen",
    authorAvatar: "https://via.placeholder.com/48/667eea/ffffff?text=A",
    category: "tutorial",
    tags: ["javascript", "performance", "best-practices"],
    coverImage: "https://via.placeholder.com/400x225/667eea/ffffff?text=Tutorial",
    publishedAt: "2026-04-05",
    readTime: 8
  },
  {
    id: "article-002",
    title: "React 组件设计模式深度解析",
    excerpt: "探索 10 种常用的 React 组件设计模式，包括 Compound Components、Render Props、Hooks 等模式的实现和应用场景。",
    content: "React 组件设计模式是构建可复用、可维护 UI 的关键...",
    author: "Sarah Wang",
    authorAvatar: "https://via.placeholder.com/48/764ba2/ffffff?text=S",
    category: "insight",
    tags: ["react", "patterns", "architecture"],
    coverImage: "https://via.placeholder.com/400x225/764ba2/ffffff?text=Insight",
    publishedAt: "2026-03-28",
    readTime: 12
  },
  {
    id: "article-003",
    title: "TypeScript 5.0 新特性完全指南",
    excerpt: "全面介绍 TypeScript 5.0 带来的新特性，包括新的模块解析策略、装饰器改进和性能优化。",
    content: "TypeScript 5.0 带来了许多令人兴奋的新特性...",
    author: "Mike Liu",
    authorAvatar: "https://via.placeholder.com/48/f093fb/ffffff?text=M",
    category: "tutorial",
    tags: ["typescript", "release", "guide"],
    coverImage: "https://via.placeholder.com/400x225/f093fb/ffffff?text=Tutorial",
    publishedAt: "2026-03-15",
    readTime: 10
  },
  {
    id: "article-004",
    title: "从零构建实时协作编辑器",
    excerpt: "详细讲解如何基于 CRDT 算法实现一个支持多人实时协作的代码编辑器，包括冲突解决和状态同步。",
    content: "实时协作是现代应用的重要特性...",
    author: "Emily Zhang",
    authorAvatar: "https://via.placeholder.com/48/00d4ff/ffffff?text=E",
    category: "insight",
    tags: ["collaboration", "crdt", "architecture"],
    coverImage: "https://via.placeholder.com/400x225/00d4ff/ffffff?text=Insight",
    publishedAt: "2026-02-20",
    readTime: 15
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "创始人 & 核心开发者",
    avatar: "👨‍💻",
    bio: "10年全栈开发经验，专注于 JavaScript 生态系统和开发者工具。",
    links: {
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen",
      email: "alex@afunc-opc.com"
    }
  },
  {
    name: "Sarah Wang",
    role: "UI/UX 设计师",
    avatar: "👩‍🎨",
    bio: "专注于开发者体验和可访问性设计，推动组件库的设计方向。",
    links: {
      github: "https://github.com/sarahwang",
      twitter: "https://twitter.com/sarahwang",
      email: "sarah@afunc-opc.com"
    }
  },
  {
    name: "Mike Liu",
    role: "后端架构师",
    avatar: "👨‍🔬",
    bio: "云原生和微服务架构专家，负责 API 平台和基础设施设计。",
    links: {
      github: "https://github.com/mikeliu",
      twitter: null,
      email: "mike@afunc-opc.com"
    }
  },
  {
    name: "Emily Zhang",
    role: "全栈开发者",
    avatar: "👩‍💻",
    bio: "专注于实时系统和协作工具开发，CodeFlow 项目核心贡献者。",
    links: {
      github: "https://github.com/emilyzhang",
      twitter: "https://twitter.com/emilyzhang",
      email: "emily@afunc-opc.com"
    }
  }
];

const stats = {
  totalProjects: 20,
  totalStars: 15234,
  totalForks: 3456,
  techStackCount: 15,
  activeContributors: 8,
  lastUpdate: "2026-04-12",
  techDistribution: [
    { name: "JavaScript", count: 12, percentage: 60 },
    { name: "TypeScript", count: 10, percentage: 50 },
    { name: "React", count: 8, percentage: 40 },
    { name: "Node.js", count: 6, percentage: 30 },
    { name: "Python", count: 3, percentage: 15 },
    { name: "Rust", count: 2, percentage: 10 }
  ],
  recentUpdates: [
    {
      projectName: "AFunc Core",
      type: "release",
      message: "v2.5.0 - 新增 20 个工具函数",
      date: "2026-04-10"
    },
    {
      projectName: "Vibe UI",
      type: "commit",
      message: "优化组件性能，减少 30% 包大小",
      date: "2026-04-08"
    },
    {
      projectName: "CodeFlow",
      type: "release",
      message: "v1.2.0 - 新增 AI 代码补全功能",
      date: "2026-04-11"
    },
    {
      projectName: "DataViz Pro",
      type: "commit",
      message: "添加热力图和雷达图支持",
      date: "2026-03-28"
    }
  ]
};

const filterTags = [
  { id: "all", label: "全部" },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nodejs", label: "Node.js" },
  { id: "ui", label: "UI" },
  { id: "api", label: "API" },
  { id: "tools", label: "Tools" },
  { id: "visualization", label: "Visualization" }
];

const categories = [
  { id: "all", label: "全部" },
  { id: "tutorial", label: "教程" },
  { id: "insight", label: "洞察" }
];
