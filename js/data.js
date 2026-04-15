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
