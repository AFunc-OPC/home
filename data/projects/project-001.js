registerProject({
  id: "project-001",
  name: "Skiller",
  description: { zh: "Skiller：一款跨平台的 AI Skills管理工具", en: "Skiller: A cross-platform AI Skills management tool" },
  longDescription: { 
    zh: `Skiller 是一款现代化的 AI Skills 管理工具，提供了丰富的功能和高性能的体验。支持多平台，零依赖，适用于各种环境。
        <br/>核心功能：
        <br/>- 技能中心：统一管理所有技能，支持从文件、NPX、仓库导入
        <br/>- 项目管理：为不同项目配置技能预设，支持一键分发
        <br/>- 仓库管理：接入 Git 仓库自动同步技能，支持 SSH/HTTPS 认证
        <br/>- 标签治理：层级标签分类，拖拽排序
        <br/>- 技能分发：将技能复制或软链接到目标工具目录
        <br/>技术栈： Tauri + React + TypeScript + Tailwind CSS
        <br/>定位： 解决 AI 技能文件分散管理的问题，让开发者能够跨工具、跨项目高效复用技能。
    `,
    en: "Skiller is a modern AI Skills management tool providing rich features and high-performance experience. Supports multiple platforms, zero dependencies, suitable for various environments."
  },
  icon: `<svg viewBox="0 0 44 44" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-merged">
        <defs>
          <linearGradient id="logo-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34d399" />
            <stop offset="50%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#059669" />
          </linearGradient>
          <filter id="logo-glow-merged" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- 充满整个44×44区域的圆角矩形 -->
        <rect x="2" y="2" width="40" height="40" rx="11" fill="url(#logo-grad-bg)" />

        <!-- 图标居中放大，更饱满 -->
        <path 
          d="M14 20L22 16L30 20V28L22 32L14 28V24L22 28L30 24" 
          stroke="white" 
          stroke-width="2.2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          fill="none"
          opacity="0.97"
        />
        <circle cx="22" cy="24" r="2.6" fill="white" opacity="0.95" />
      </svg>
      `,
  tags: ["Tauri", "Rust", "React", "SQLite"],
  stars: 0,
  forks: 0,
  status: "active",
  links: {
    github: "https://github.com/AFunc-OPC/Skiller",
    gitee: "https://gitee.com/Grantr/Skiller"
  },
  screenshots: [
    {
      src: "data/projects/images/project-001/image.png",
      alt: { zh: "主界面", en: "Main Interface" }
    },
    {
      src: "data/projects/images/project-001/image2.png",
      alt: { zh: "技能中心", en: "Skills Center" }
    },
    {
      src: "data/projects/images/project-001/image2-1.png",
      alt: { zh: "技能中心-查找安装技能", en: "Skills Center - Find and Install Skills" }
    },
    {
      src: "data/projects/images/project-001/image2-2.png",
      alt: { zh: "技能中心-从仓库导入技能", en: "Skills Center - Import Skills from Repository" }
    },
    {
      src: "data/projects/images/project-001/image2-3.png",
      alt: { zh: "技能中心-技能分发", en: "Skills Center - Skills Distribution" }
    },
    {
      src: "data/projects/images/project-001/image3.png",
      alt: { zh: "项目管理", en: "Project Management" }
    },
    {
      src: "data/projects/images/project-001/image3-1.png",
      alt: { zh: "项目管理-从技能中心导入技能", en: "Project Management - Import Skills from Skills Center" }
    },
    {
      src: "data/projects/images/project-001/image4.png",
      alt: { zh: "仓库管理", en: "Repository Management" }
    },
    {
      src: "data/projects/images/project-001/image5.png",
      alt: { zh: "标签治理", en: "Tag Management" }
    },
    {
      src: "data/projects/images/project-001/image6.png",
      alt: { zh: "设置", en: "Settings" }
    },
    
  ],
  image: "https://via.placeholder.com/800x400/667eea/ffffff?text=AFunc+Core",
  featured: true,
  createdAt: "2024-01-15",
  updatedAt: "2026-04-10"
});
