registerProject({
  id: "project-002",
  name: "Port Killer",
  description: { zh: "跨平台端口释放桌面工具 — 一键查看并释放被占用端口", en: "Visual port release tool supported by multi-platform" },
  longDescription: { 
    zh: `Port Killer 是一款现代化的跨平台端口管理工具，提供了简洁高效的端口释放功能。
        <br/>核心功能：
        <br/>- 端口扫描：实时扫描系统所有 TCP/UDP 端口占用，显示端口号、协议、进程名、PID
        <br/>- 一键释放：点击即可终止占用端口的进程，优雅终止 → 强制终止两阶段策略
        <br/>- 搜索过滤：支持按端口号或进程名实时过滤
        <br/>- 排序功能：点击列头按端口号、协议、进程名、PID 排序
        <br/>- 深色/浅色主题：支持一键切换深色与浅色外观，自动跟随系统主题
        <br/>- 国际化 (i18n)：支持中文与英文切换
        <br/>技术栈： Rust + Tauri + TypeScript + Vite
    `,
    en: "Port Killer is a modern cross-platform port management tool that provides efficient port release functionality."
  },
  icon: `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="16" width="480" height="480" rx="112" fill="#F4F7FB"/>
          <rect x="116" y="156" width="280" height="200" rx="72" fill="#E7EEF6" stroke="#8BA1B8" stroke-width="18"/>
          <circle cx="190" cy="228" r="18" fill="#5E738A"/>
          <circle cx="256" cy="228" r="18" fill="#5E738A"/>
          <circle cx="322" cy="228" r="18" fill="#5E738A"/>
          <path d="M164 292H308" stroke="#41576D" stroke-width="28" stroke-linecap="round"/>
          <path d="M314 266L392 344" stroke="#2F8CFF" stroke-width="28" stroke-linecap="round"/>
          <path d="M392 266L314 344" stroke="#2F8CFF" stroke-width="28" stroke-linecap="round"/>
        </svg>
      `,
  tags: ["Rust", "Tauri", "TypeScript", "Cross-platform"],
  stars: 0,
  forks: 0,
  status: "active",
  links: {
    github: "https://github.com/AFunc-OPC/Port-Killer"
  },
  screenshots: [
    {
      src: "data/projects/images/project-002/1780495281398.png",
      alt: { zh: "主界面", en: "Main Interface" }
    },
    {
      src: "data/projects/images/project-002/1780495447586.png",
      alt: { zh: "搜索过滤", en: "Search Filter" }
    },
    {
      src: "data/projects/images/project-002/1780495463247.png",
      alt: { zh: "操作历史", en: "Operation History" }
    },
    {
      src: "data/projects/images/project-002/1780495525445.png",
      alt: { zh: "深色模式", en: "Dark Mode" }
    }
  ],
  image: "https://via.placeholder.com/800x400/f97316/ffffff?text=Port+Killer",
  featured: true,
  createdAt: "2024-12-01",
  updatedAt: "2026-06-05"
});
