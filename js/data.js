const projects = [
  {
    id: "project-001",
    name: "AFunc Core",
    description: { zh: "核心函数库，提供高性能的工具函数和实用工具集", en: "Core function library with high-performance utility functions" },
    longDescription: { 
      zh: "AFunc Core 是一个现代化的 JavaScript 工具函数库，提供了 100+ 个高性能、经过充分测试的工具函数。支持 Tree-shaking，零依赖，TypeScript 类型完整，适用于浏览器和 Node.js 环境。",
      en: "AFunc Core is a modern JavaScript utility library providing 100+ high-performance, well-tested utility functions. Supports tree-shaking, zero dependencies, full TypeScript types, works in browser and Node.js environments."
    },
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
    description: { zh: "现代化的 React 组件库，专注于开发者体验和可访问性", en: "Modern React component library focused on developer experience and accessibility" },
    longDescription: {
      zh: "Vibe UI 是一个从头设计的 React 组件库，专注于提供最佳的开发者体验和用户可访问性。包含 50+ 组件，支持暗色主题，完全可定制，遵循 WAI-ARIA 规范。",
      en: "Vibe UI is a React component library designed from scratch, focusing on the best developer experience and user accessibility. Includes 50+ components, supports dark theme, fully customizable, follows WAI-ARIA specification."
    },
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
    description: { zh: "可视化代码编辑器，支持实时协作和 AI 辅助编程", en: "Visual code editor with real-time collaboration and AI-assisted programming" },
    longDescription: {
      zh: "CodeFlow 是一个创新的在线代码编辑器，支持多人实时协作、AI 代码补全和智能重构建议。基于 Monaco Editor 构建，提供类似 VS Code 的编辑体验。",
      en: "CodeFlow is an innovative online code editor supporting real-time multi-user collaboration, AI code completion, and intelligent refactoring suggestions. Built on Monaco Editor, providing a VS Code-like editing experience."
    },
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
    description: { zh: "交互式数据可视化库，支持 20+ 图表类型", en: "Interactive data visualization library with 20+ chart types" },
    longDescription: {
      zh: "DataViz Pro 是一个强大的数据可视化库，基于 D3.js 构建，提供 20+ 种交互式图表。支持大数据量渲染，响应式设计，完整的 TypeScript 类型支持。",
      en: "DataViz Pro is a powerful data visualization library built on D3.js, providing 20+ interactive charts. Supports large data rendering, responsive design, and full TypeScript type support."
    },
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
    description: { zh: "API 开发和测试工具，支持 Mock 服务器和文档生成", en: "API development and testing tool with Mock server and documentation generation" },
    longDescription: {
      zh: "APIForge 是一个全面的 API 开发工具，支持 API 设计、Mock 服务器、自动化测试和文档生成。与 OpenAPI 规范完全兼容，提供直观的可视化界面。",
      en: "APIForge is a comprehensive API development tool supporting API design, Mock server, automated testing, and documentation generation. Fully compatible with OpenAPI specification, providing intuitive visual interface."
    },
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
    description: { zh: "开发者个人仪表板，集成 GitHub、Notion 等服务", en: "Developer personal dashboard integrating GitHub, Notion, and other services" },
    longDescription: {
      zh: "DevBoard 是一个可定制的开发者个人仪表板，集成 GitHub、Notion、Calendar 等常用服务。支持小部件系统，可以自由拖拽和配置布局。",
      en: "DevBoard is a customizable developer personal dashboard integrating GitHub, Notion, Calendar, and other common services. Supports widget system with free drag-and-drop layout configuration."
    },
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

const team = [
  {
    name: "Alex Chen",
    role: { zh: "创始人 & 核心开发者", en: "Founder & Core Developer" },
    avatar: "👨‍💻",
    bio: { 
      zh: "10年全栈开发经验，专注于 JavaScript 生态系统和开发者工具",
      en: "10 years full-stack development experience, focused on JavaScript ecosystem and developer tools"
    },
    links: {
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen",
      email: "alex@afunc-opc.com"
    }
  },
  {
    name: "Sarah Wang",
    role: { zh: "UI/UX 设计师", en: "UI/UX Designer" },
    avatar: "👩‍🎨",
    bio: {
      zh: "专注于开发者体验和可访问性设计，推动组件库的设计方向",
      en: "Focused on developer experience and accessibility design, driving component library design direction"
    },
    links: {
      github: "https://github.com/sarahwang",
      twitter: "https://twitter.com/sarahwang",
      email: "sarah@afunc-opc.com"
    }
  },
  {
    name: "Mike Liu",
    role: { zh: "后端架构师", en: "Backend Architect" },
    avatar: "👨‍🔬",
    bio: {
      zh: "云原生和微服务架构专家，负责 API 平台和基础设施设计",
      en: "Cloud-native and microservices architecture expert, responsible for API platform and infrastructure design"
    },
    links: {
      github: "https://github.com/mikeliu",
      twitter: null,
      email: "mike@afunc-opc.com"
    }
  },
  {
    name: "Emily Zhang",
    role: { zh: "全栈开发者", en: "Full-stack Developer" },
    avatar: "👩‍💻",
    bio: {
      zh: "专注于实时系统和协作工具开发，CodeFlow 项目核心贡献者",
      en: "Focused on real-time systems and collaboration tools development, CodeFlow core contributor"
    },
    links: {
      github: "https://github.com/emilyzhang",
      twitter: "https://twitter.com/emilyzhang",
      email: "emily@afunc-opc.com"
    }
  }
];

const filterTags = [
  { id: "all", get label() { return i18n.t('projects.all'); } },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "nodejs", label: "Node.js" },
  { id: "ui", label: "UI" },
  { id: "api", label: "API" },
  { id: "tools", label: "Tools" },
  { id: "visualization", label: "Visualization" }
];
