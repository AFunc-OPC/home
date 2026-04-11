# AFunc-OPC 企业官网设计规格文档

**版本：** 1.0  
**日期：** 2026-04-12  
**状态：** 设计完成，待实现

---

## 1. 项目概述

### 1.1 项目背景

AFunc-OPC 是一个展示 vibe-coding 项目的企业级官网，面向开发者社区，展示团队的技术实力和项目成果。

### 1.2 核心目标

- 展示所有 vibe-coding 项目，提供项目信息、演示、文档链接
- 建立团队品牌形象，吸引开发者社区关注
- 提供技术博客平台，分享技术见解和教程
- 展示项目统计数据，体现团队活跃度

### 1.3 目标用户

**主要用户：** 开发者社区
- 寻找有趣开源项目的技术爱好者
- 学习技术方案和最佳实践的开发者
- 寻找项目参考和学习资源的学习者

### 1.4 核心价值主张

通过创意实验性的视觉设计，展现 vibe-coding 的创新精神和技术实力，打造令人印象深刻的项目展示平台。

---

## 2. 设计方向

### 2.1 视觉风格

**选定风格：** 创意实验性 - 液态渐变流动

**设计理念：**
- 流动的渐变背景，营造现代感和动态感
- 玻璃态卡片设计，增添层次感和质感
- 柔和的色彩过渡，避免视觉疲劳
- 大胆但不失专业的配色方案

### 2.2 设计差异化

**避免的通用模式：**
- ❌ 紫色渐变 + 白色背景的典型AI风格
- ❌ Inter/Roboto等过度使用的字体
- ❌ 千篇一律的卡片网格布局
- ❌ 缺乏个性的配色方案

**独特设计元素：**
- ✅ 深色背景增强渐变效果
- ✅ Poppins几何字体 + Inter阅读字体组合
- ✅ 玻璃态效果（backdrop-filter）
- ✅ 不规则项目卡片排列
- ✅ 流动的背景动画

---

## 3. 技术架构

### 3.1 技术栈选择

**核心技术：**
- HTML5 - 语义化结构
- CSS3 - 样式、动画、Grid/Flexbox布局
- Vanilla JavaScript - 交互逻辑、数据处理

**选择理由：**
- ✅ 纯静态，无需服务端
- ✅ 直接GitHub Pages部署
- ✅ 无构建工具依赖
- ✅ 开发简单，易于维护
- ✅ 加载快速，性能优良

**不使用的技术：**
- ❌ React/Vue等框架（过度设计）
- ❌ 构建工具（增加复杂度）
- ❌ 外部API依赖（纯静态）
- ❌ CSS预处理器（CSS Variables足够）

### 3.2 文件结构

```
/
├── index.html              # 单页应用入口
├── css/
│   ├── variables.css       # 设计语言变量（颜色、字体、间距）
│   ├── base.css           # 重置样式、基础元素样式
│   ├── layout.css         # 布局系统、网格系统
│   ├── components.css     # 组件样式（卡片、按钮、模态框等）
│   └── animations.css     # 动画效果定义
├── js/
│   ├── data.js            # 所有数据（项目/文章/团队/统计）
│   ├── app.js             # 主应用逻辑、初始化、事件监听
│   └── utils.js           # 工具函数（筛选、搜索、渲染等）
└── assets/
    ├── images/            # 图片资源
    └── icons/             # SVG图标
```

**文件职责：**

**index.html**
- 页面结构
- 引入CSS和JS文件
- 无内联样式和脚本

**css/variables.css**
- 定义CSS变量：颜色、字体、间距、阴影、动画时长等
- 作为整个设计系统的基础

**css/base.css**
- CSS重置（normalize或reset）
- 基础元素样式：html, body, h1-h6, p, a, ul, ol等
- 工具类：.container, .sr-only等

**css/layout.css**
- 页面布局结构
- 网格系统
- 响应式断点

**css/components.css**
- 所有组件样式
- 项目卡片、导航栏、模态框、按钮、标签等

**css/animations.css**
- 所有动画定义
- 关键帧动画、过渡效果、动画类

**js/data.js**
- projects数组：项目数据
- articles数组：文章数据
- team数组：团队数据
- stats对象：统计数据

**js/app.js**
- 初始化函数
- 事件监听器设置
- 主要业务逻辑

**js/utils.js**
- DOM操作函数
- 筛选/搜索逻辑
- 渲染函数
- 工具函数

### 3.3 数据管理

**数据存储方式：**
- 所有数据存储在 js/data.js 中
- 使用JavaScript数组和对象
- 无需外部API或数据库

**数据加载：**
- 页面加载时立即可用
- 无网络请求延迟
- 零加载失败风险

**数据更新：**
- 直接编辑 js/data.js 文件
- 提交到Git仓库
- GitHub Pages自动部署

---

## 4. 设计语言系统

### 4.1 色彩系统

**主色系（液态渐变）：**
```css
--color-primary-purple: #667eea;
--color-primary-pink: #764ba2;
--color-accent-pink: #f093fb;
--color-accent-blue: #00d4ff;
```

**中性色：**
```css
--color-background: #0f0f23;
--color-surface: rgba(255, 255, 255, 0.1);
--color-surface-hover: rgba(255, 255, 255, 0.15);
--color-text-primary: #ffffff;
--color-text-secondary: rgba(255, 255, 255, 0.8);
--color-text-muted: rgba(255, 255, 255, 0.6);
```

**功能色：**
```css
--color-success: #4ade80;
--color-warning: #fbbf24;
--color-error: #f87171;
--color-info: #60a5fa;
```

**渐变定义：**
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
--gradient-glow: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
```

**玻璃态效果：**
```css
--glass-background: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-blur: blur(10px);
```

### 4.2 字体系统

**字体家族：**
```css
--font-display: 'Poppins', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

**字体大小：**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 2.25rem;   /* 36px */
--text-4xl: 3rem;      /* 48px */
```

**字体粗细：**
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

**行高：**
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 4.3 间距系统

**基础单位：** 8px

**间距变量：**
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
```

### 4.4 圆角系统

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */
--radius-full: 9999px;  /* 完全圆角 */
```

### 4.5 阴影系统

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(102, 126, 234, 0.3);
```

### 4.6 动画系统

**时长：**
```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 600ms;
```

**缓动函数：**
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

**延迟（用于stagger动画）：**
```css
--delay-1: 100ms;
--delay-2: 200ms;
--delay-3: 300ms;
--delay-4: 400ms;
```

---

## 5. 核心组件设计

### 5.1 导航栏组件

**结构：**
```html
<nav class="navbar">
  <div class="navbar__brand">
    <img src="logo.svg" alt="AFunc-OPC" class="navbar__logo">
    <span class="navbar__title">AFunc-OPC</span>
  </div>
  
  <ul class="navbar__menu">
    <li><a href="#projects" class="navbar__link">项目</a></li>
    <li><a href="#about" class="navbar__link">关于</a></li>
    <li><a href="#blog" class="navbar__link">博客</a></li>
    <li><a href="#stats" class="navbar__link">数据</a></li>
  </ul>
  
  <div class="navbar__actions">
    <button class="navbar__search" aria-label="搜索">
      <!-- 搜索图标 -->
    </button>
    <button class="navbar__hamburger" aria-label="菜单">
      <!-- 汉堡菜单图标 -->
    </button>
  </div>
</nav>
```

**样式特性：**
- 位置：fixed定位，顶部
- 背景：初始透明，滚动后玻璃态
- 高度：64px（桌面），56px（移动端）
- 过渡：背景色渐变过渡

**交互行为：**
- 点击导航链接：平滑滚动到对应区块
- 滚动时：高亮当前区块对应的导航项
- 移动端：汉堡菜单展开/收起
- 搜索按钮：打开搜索模态框

### 5.2 项目卡片组件

**结构：**
```html
<article class="project-card">
  <div class="project-card__header">
    <span class="project-card__icon">🚀</span>
    <h3 class="project-card__title">项目名称</h3>
  </div>
  
  <p class="project-card__description">项目描述文字</p>
  
  <div class="project-card__tags">
    <span class="tag">React</span>
    <span class="tag">TypeScript</span>
  </div>
  
  <div class="project-card__stats">
    <span class="project-card__stars">⭐ 1,234</span>
    <span class="project-card__forks">🍴 567</span>
  </div>
  
  <div class="project-card__actions">
    <a href="#" class="btn btn--primary">查看详情</a>
    <a href="#" class="btn btn--ghost">GitHub</a>
  </div>
</article>
```

**样式特性：**
- 背景：玻璃态
- 边框：1px solid rgba(255, 255, 255, 0.2)
- 圆角：16px
- 内边距：24px
- 布局：轻微旋转角度（±2度）

**交互行为：**
- 悬停：translateY(-4px) + 阴影增强
- 点击：打开项目详情模态框
- 标签点击：触发筛选

### 5.3 模态框组件

**结构：**
```html
<div class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal">
    <button class="modal__close" aria-label="关闭">×</button>
    
    <div class="modal__content">
      <!-- 内容动态加载 -->
    </div>
  </div>
</div>
```

**样式特性：**
- 遮罩：rgba(0, 0, 0, 0.8)
- 模态框：玻璃态背景
- 最大宽度：800px
- 居中显示
- 圆角：24px

**交互行为：**
- 打开动画：淡入 + 缩放
- 关闭：点击遮罩 / 点击关闭按钮 / 按ESC键
- 背景滚动锁定
- 焦点陷阱（Tab键循环在模态框内）

### 5.4 按钮组件

**类型：**

**Primary按钮：**
```html
<button class="btn btn--primary">主要按钮</button>
```
- 背景：渐变色
- 文字：白色
- 用途：主要操作

**Secondary按钮：**
```html
<button class="btn btn--secondary">次要按钮</button>
```
- 背景：玻璃态
- 文字：白色
- 用途：次要操作

**Ghost按钮：**
```html
<button class="btn btn--ghost">幽灵按钮</button>
```
- 背景：透明
- 边框：1px solid rgba(255, 255, 255, 0.3)
- 文字：白色
- 用途：辅助操作

**状态：**
- Hover：轻微缩放 + 亮度提升
- Active：按下效果
- Disabled：降低透明度，禁用点击

### 5.5 标签/筛选组件

**结构：**
```html
<div class="filter-bar">
  <button class="filter-tag filter-tag--active" data-tag="all">全部</button>
  <button class="filter-tag" data-tag="react">React</button>
  <button class="filter-tag" data-tag="vue">Vue</button>
  <button class="filter-tag" data-tag="node">Node.js</button>
</div>
```

**样式特性：**
- 形状：圆角胶囊（border-radius: 9999px）
- 内边距：8px 16px
- 背景：未选中透明，选中渐变色
- 边框：1px solid rgba(255, 255, 255, 0.3)

**交互行为：**
- 点击切换选中状态
- 多选支持（OR逻辑）
- 实时筛选项目列表

### 5.6 搜索组件

**结构：**
```html
<div class="search-box">
  <input 
    type="text" 
    class="search-box__input" 
    placeholder="搜索项目..."
    aria-label="搜索项目"
  >
  <button class="search-box__clear" aria-label="清除">×</button>
</div>
```

**样式特性：**
- 背景：玻璃态
- 圆角：12px
- 内边距：12px 16px
- 宽度：响应式

**交互行为：**
- 输入实时搜索（300ms防抖）
- 搜索项目名称、描述、标签
- 显示清除按钮（有输入时）
- 无结果显示提示信息

---

## 6. 页面布局设计

### 6.1 Hero区域（首屏）

**布局：**
- 高度：100vh（全屏）
- 内容居中对齐
- 下方滚动指示器

**元素：**
1. 动态渐变背景（流动动画）
2. 品牌Logo
3. 主标题：AFunc-OPC（font-size: 4rem）
4. 副标题：vibe-coding projects showcase
5. 描述文字：2-3行介绍
6. CTA按钮：探索项目 / 了解更多
7. 滚动指示器：向下箭头动画

**动画效果：**
- 背景：渐变色缓慢流动（20秒周期）
- 标题：淡入 + 轻微上浮（animation-delay: 0ms）
- 副标题：淡入 + 轻微上浮（animation-delay: 200ms）
- 描述：淡入 + 轻微上浮（animation-delay: 400ms）
- 按钮：淡入 + 轻微上浮（animation-delay: 600ms）
- 滚动指示器：无限上下弹跳

### 6.2 项目展示区

**区块ID：** `#projects`

**布局：**
```html
<section id="projects" class="section projects">
  <div class="container">
    <h2 class="section__title">Featured Projects</h2>
    <p class="section__subtitle">探索我们的开源项目</p>
    
    <div class="projects__toolbar">
      <div class="filter-bar">
        <!-- 筛选标签 -->
      </div>
      <div class="search-box">
        <!-- 搜索框 -->
      </div>
    </div>
    
    <div class="projects__grid">
      <!-- 项目卡片动态渲染 -->
    </div>
    
    <div class="projects__empty" hidden>
      <!-- 无结果提示 -->
    </div>
    
    <button class="btn btn--secondary load-more" hidden>
      加载更多
    </button>
  </div>
</section>
```

**网格布局：**
- 桌面：3列
- 平板：2列
- 移动端：1列
- 间距：24px
- 重点项目：跨2行或跨2列

**卡片排列：**
- 使用CSS Grid
- 不规则排列（通过grid-row span实现）
- 轻微随机旋转角度（CSS变量）

**动画效果：**
- 卡片滚动进入时淡入上浮
- 依次出现（stagger动画）

### 6.3 关于我们区

**区块ID：** `#about`

**布局：**
```html
<section id="about" class="section about">
  <div class="container">
    <h2 class="section__title">关于 AFunc-OPC</h2>
    
    <div class="about__content">
      <div class="about__left">
        <div class="about__team-photo">
          <!-- 团队照片或装饰插图 -->
        </div>
        
        <div class="about__stats">
          <div class="stat-card">
            <div class="stat-card__number">20+</div>
            <div class="stat-card__label">开源项目</div>
          </div>
          <div class="stat-card">
            <div class="stat-card__number">15K+</div>
            <div class="stat-card__label">GitHub Stars</div>
          </div>
        </div>
      </div>
      
      <div class="about__right">
        <h3 class="about__subtitle">我们的愿景</h3>
        <p class="about__text">愿景描述...</p>
        
        <h3 class="about__subtitle">技术理念</h3>
        <ul class="about__values">
          <li>开源精神</li>
          <li>技术驱动</li>
          <li>持续创新</li>
        </ul>
        
        <div class="about__team">
          <h3 class="about__subtitle">核心团队</h3>
          <div class="team-grid">
            <!-- 团队成员卡片 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**布局：**
- 桌面：左右分栏（1:2比例）
- 平板/移动端：垂直堆叠
- 背景：装饰性渐变斑点

**动画效果：**
- 统计数字滚动动画
- 元素依次淡入

### 6.4 博客/文章区

**区块ID：** `#blog`

**布局：**
```html
<section id="blog" class="section blog">
  <div class="container">
    <h2 class="section__title">Latest Articles</h2>
    <p class="section__subtitle">技术见解与教程分享</p>
    
    <div class="blog__filters">
      <button class="filter-tag filter-tag--active" data-category="all">全部</button>
      <button class="filter-tag" data-category="tutorial">教程</button>
      <button class="filter-tag" data-category="insight">洞察</button>
    </div>
    
    <div class="blog__grid">
      <!-- 文章卡片 -->
    </div>
    
    <button class="btn btn--secondary">查看全部文章</button>
  </div>
</section>
```

**文章卡片：**
```html
<article class="article-card">
  <img src="cover.jpg" alt="文章标题" class="article-card__image">
  <div class="article-card__content">
    <span class="article-card__category">技术教程</span>
    <h3 class="article-card__title">文章标题</h3>
    <p class="article-card__excerpt">文章摘要...</p>
    <div class="article-card__meta">
      <span class="article-card__author">作者名</span>
      <span class="article-card__date">2024-03-15</span>
      <span class="article-card__read-time">5 min read</span>
    </div>
  </div>
</article>
```

**布局：**
- 桌面：2-3列网格
- 平板：2列
- 移动端：1列

### 6.5 数据看板区

**区块ID：** `#stats`

**布局：**
```html
<section id="stats" class="section stats">
  <div class="container">
    <h2 class="section__title">数据看板</h2>
    <p class="section__subtitle">项目统计与动态</p>
    
    <div class="stats__grid">
      <div class="stat-card stat-card--large">
        <div class="stat-card__icon">📦</div>
        <div class="stat-card__number">20</div>
        <div class="stat-card__label">总项目数</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__icon">⭐</div>
        <div class="stat-card__number">15,234</div>
        <div class="stat-card__label">总星标</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__icon">🍴</div>
        <div class="stat-card__number">3,456</div>
        <div class="stat-card__label">总 Forks</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__icon">💻</div>
        <div class="stat-card__number">15</div>
        <div class="stat-card__label">技术栈</div>
      </div>
    </div>
    
    <div class="stats__charts">
      <div class="chart-card">
        <h3 class="chart-card__title">技术栈分布</h3>
        <div class="chart-card__body">
          <!-- 条形图或圆环图 -->
        </div>
      </div>
      
      <div class="chart-card">
        <h3 class="chart-card__title">最近更新</h3>
        <div class="chart-card__body">
          <!-- 时间线 -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**布局：**
- 统计卡片：2x2网格
- 图表区域：2列
- 背景：深色 + 数据可视化元素

---

## 7. 数据结构设计

### 7.1 项目数据结构

```javascript
const projects = [
  {
    id: "project-001",
    name: "项目名称",
    description: "简短描述（1-2句话，最多100字符）",
    longDescription: "详细介绍，支持Markdown格式",
    icon: "🚀", // emoji或图片URL
    tags: ["react", "typescript", "api"],
    stars: 1234,
    forks: 567,
    status: "active", // active | archived | developing
    links: {
      github: "https://github.com/username/repo",
      demo: "https://demo.example.com",
      docs: "https://docs.example.com"
    },
    image: "https://example.com/image.jpg", // 封面图URL
    featured: true, // 是否重点项目（大卡片展示）
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20"
  }
  // ... 更多项目
];
```

**字段说明：**

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | string | 是 | 唯一标识符 |
| name | string | 是 | 项目名称 |
| description | string | 是 | 简短描述（卡片展示） |
| longDescription | string | 否 | 详细介绍（模态框展示） |
| icon | string | 是 | emoji或图片URL |
| tags | array | 是 | 技术标签数组 |
| stars | number | 是 | GitHub星标数 |
| forks | number | 是 | GitHub fork数 |
| status | string | 是 | 项目状态 |
| links | object | 是 | 相关链接 |
| image | string | 否 | 封面图URL |
| featured | boolean | 否 | 是否重点项目 |
| createdAt | string | 是 | 创建日期 |
| updatedAt | string | 是 | 更新日期 |

### 7.2 文章数据结构

```javascript
const articles = [
  {
    id: "article-001",
    title: "文章标题",
    excerpt: "文章摘要（2-3句话，最多200字符）",
    content: "文章正文，支持Markdown格式",
    author: "作者名",
    authorAvatar: "https://example.com/avatar.jpg",
    category: "技术教程", // 分类名称
    tags: ["javascript", "best-practices"],
    coverImage: "https://example.com/cover.jpg",
    publishedAt: "2024-03-15",
    readTime: 5 // 分钟
  }
  // ... 更多文章
];
```

### 7.3 团队数据结构

```javascript
const team = [
  {
    name: "成员姓名",
    role: "角色/职位",
    avatar: "https://example.com/avatar.jpg",
    bio: "个人简介",
    links: {
      github: "https://github.com/username",
      twitter: "https://twitter.com/username",
      email: "email@example.com"
    }
  }
  // ... 更多成员
];
```

### 7.4 统计数据结构

```javascript
const stats = {
  totalProjects: 20,
  totalStars: 15234,
  totalForks: 3456,
  techStackCount: 15,
  activeContributors: 8,
  lastUpdate: "2024-03-20",
  techDistribution: [
    { name: "JavaScript", count: 12, percentage: 60 },
    { name: "TypeScript", count: 8, percentage: 40 },
    { name: "React", count: 6, percentage: 30 },
    // ... 更多技术栈
  ],
  recentUpdates: [
    {
      projectName: "项目名称",
      type: "commit", // commit | release | issue
      message: "更新说明",
      date: "2024-03-20"
    }
    // ... 更多更新
  ]
};
```

---

## 8. 交互设计与功能实现

### 8.1 SPA路由与导航

**实现方式：**

**URL Hash路由：**
- 使用 `window.location.hash` 管理路由
- 区块ID作为hash值：`#projects`, `#about`, `#blog`, `#stats`
- 支持浏览器前进/后退

**平滑滚动：**
```javascript
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, null, `#${sectionId}`);
  }
}
```

**导航高亮：**
- 使用 Intersection Observer 监听区块进入视口
- 当前区块对应的导航项添加 `active` 类

**实现代码结构：**
```javascript
// 监听导航点击
document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    scrollToSection(sectionId);
  });
});

// 监听滚动更新导航高亮
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      updateActiveNav(sectionId);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});
```

### 8.2 项目筛选与搜索

**筛选功能：**

**标签筛选：**
- 多选支持（OR逻辑）
- 点击标签切换选中状态
- 实时过滤项目列表

**实现逻辑：**
```javascript
let selectedTags = new Set(['all']);

function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();
  
  const filtered = projects.filter(project => {
    // 标签筛选
    const tagMatch = selectedTags.has('all') || 
      project.tags.some(tag => selectedTags.has(tag));
    
    // 搜索筛选
    const searchMatch = !searchTerm ||
      project.name.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    return tagMatch && searchMatch;
  });
  
  renderProjects(filtered);
}

// 标签点击事件
document.querySelectorAll('.filter-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const tagValue = tag.dataset.tag;
    
    if (tagValue === 'all') {
      selectedTags.clear();
      selectedTags.add('all');
    } else {
      selectedTags.delete('all');
      selectedTags.has(tagValue) 
        ? selectedTags.delete(tagValue)
        : selectedTags.add(tagValue);
      
      if (selectedTags.size === 0) selectedTags.add('all');
    }
    
    updateTagUI();
    filterProjects();
  });
});
```

**搜索功能：**

**实现逻辑：**
```javascript
const searchInput = document.querySelector('.search-box__input');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    filterProjects();
  }, 300); // 防抖300ms
});
```

**动画效果：**
- 筛选时卡片淡出：`opacity: 0; transform: scale(0.95);`
- 新卡片淡入：`opacity: 1; transform: scale(1);`
- 列表重新排列：使用CSS Grid自动处理

### 8.3 模态框系统

**项目详情模态框：**

**内容结构：**
```html
<div class="modal project-detail">
  <button class="modal__close">×</button>
  
  <div class="project-detail__header">
    <span class="project-detail__icon">🚀</span>
    <h2 class="project-detail__title">项目名称</h2>
  </div>
  
  <div class="project-detail__stats">
    <span>⭐ 1,234</span>
    <span>🍴 567</span>
    <span>📊 Active</span>
  </div>
  
  <div class="project-detail__description">
    <p>详细描述...</p>
  </div>
  
  <div class="project-detail__tags">
    <span class="tag">React</span>
    <span class="tag">TypeScript</span>
  </div>
  
  <div class="project-detail__links">
    <a href="#" class="btn btn--primary">GitHub</a>
    <a href="#" class="btn btn--secondary">Demo</a>
    <a href="#" class="btn btn--ghost">Docs</a>
  </div>
  
  <div class="project-detail__image">
    <img src="project-screenshot.jpg" alt="项目截图">
  </div>
</div>
```

**交互行为：**

**打开模态框：**
```javascript
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  // 渲染模态框内容
  renderProjectDetail(project);
  
  // 显示模态框
  const modal = document.querySelector('.modal-overlay');
  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  
  // 锁定背景滚动
  document.body.style.overflow = 'hidden';
  
  // 聚焦到模态框
  modal.focus();
}
```

**关闭模态框：**
```javascript
function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  
  // 恢复背景滚动
  document.body.style.overflow = '';
}

// 点击遮罩关闭
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

// ESC键关闭
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// 关闭按钮
document.querySelector('.modal__close').addEventListener('click', closeModal);
```

**焦点陷阱：**
```javascript
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
```

### 8.4 滚动动画

**实现方式：**
- 使用 Intersection Observer API
- 元素进入视口时添加动画类
- 只触发一次

**动画类型：**

**淡入上浮：**
```css
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**淡入缩放：**
```css
.fade-in-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-scale.is-visible {
  opacity: 1;
  transform: scale(1);
}
```

**依次出现：**
```css
.stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: 100ms; }
.stagger > *:nth-child(3) { transition-delay: 200ms; }
.stagger > *:nth-child(4) { transition-delay: 300ms; }

.stagger.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript实现：**
```javascript
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.fade-in-up, .fade-in-scale, .stagger').forEach(el => {
  animationObserver.observe(el);
});
```

### 8.5 响应式设计

**断点定义：**
```css
/* Mobile First */
/* Mobile: < 768px (默认) */

/* Tablet: 768px - 1024px */
@media (min-width: 768px) {
  /* 平板样式 */
}

/* Desktop: > 1024px */
@media (min-width: 1025px) {
  /* 桌面样式 */
}

/* Large Desktop: > 1440px */
@media (min-width: 1440px) {
  /* 大屏样式 */
}
```

**适配策略：**

**导航栏：**
```css
/* Mobile: 汉堡菜单 */
.navbar__menu {
  display: none;
}

.navbar__hamburger {
  display: block;
}

/* Desktop: 完整导航 */
@media (min-width: 1025px) {
  .navbar__menu {
    display: flex;
  }
  
  .navbar__hamburger {
    display: none;
  }
}
```

**项目网格：**
```css
.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**字体缩放：**
```css
.section__title {
  font-size: 2rem; /* 32px */
}

@media (min-width: 1025px) {
  .section__title {
    font-size: 3rem; /* 48px */
  }
}
```

**触摸优化：**
```css
/* 移动端触摸区域 */
@media (max-width: 1024px) {
  .btn,
  .navbar__link,
  .filter-tag {
    min-height: 44px;
    min-width: 44px;
  }
}

/* 移动端hover禁用 */
@media (hover: none) {
  .project-card:hover {
    transform: none;
  }
}
```

---

## 9. 性能优化策略

### 9.1 CSS优化

**使用CSS Variables：**
```css
:root {
  --color-primary: #667eea;
  /* 所有设计变量集中定义，减少重复 */
}
```

**避免过度使用backdrop-filter：**
```css
/* 只在关键元素使用 */
.navbar--scrolled,
.project-card,
.modal {
  backdrop-filter: blur(10px);
}

/* 其他元素使用半透明背景 */
.other-element {
  background: rgba(255, 255, 255, 0.1);
}
```

**使用transform代替top/left：**
```css
/* ✅ 推荐 */
.project-card {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}

/* ❌ 避免 */
.project-card {
  top: 0;
  transition: top 0.3s ease;
}

.project-card:hover {
  top: -4px;
}
```

**will-change提示：**
```css
.project-card {
  will-change: transform;
}

.modal {
  will-change: opacity, transform;
}
```

### 9.2 JavaScript优化

**事件委托：**
```javascript
// ✅ 推荐：委托到父元素
document.querySelector('.projects__grid').addEventListener('click', (e) => {
  const card = e.target.closest('.project-card');
  if (card) {
    openProjectModal(card.dataset.id);
  }
});

// ❌ 避免：每个卡片单独监听
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    openProjectModal(card.dataset.id);
  });
});
```

**防抖搜索：**
```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce(filterProjects, 300);
searchInput.addEventListener('input', debouncedSearch);
```

**懒加载模态框内容：**
```javascript
// 只在首次打开时渲染内容
let modalContentLoaded = false;

function openProjectModal(projectId) {
  if (!modalContentLoaded) {
    renderModalContent(projectId);
    modalContentLoaded = true;
  }
  // ...
}
```

### 9.3 资源优化

**图片优化：**
```html
<!-- 懒加载 -->
<img src="image.jpg" loading="lazy" alt="描述">

<!-- 响应式图片 -->
<img 
  src="image-small.jpg"
  srcset="image-small.jpg 768w, image-large.jpg 1024w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="描述"
>
```

**字体优化：**
```html
<!-- 只加载需要的字重 -->
<link 
  rel="preconnect" 
  href="https://fonts.googleapis.com"
>
<link 
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap" 
  rel="stylesheet"
>
```

```css
/* 使用font-display: swap */
@font-face {
  font-family: 'Poppins';
  font-display: swap;
  /* ... */
}
```

**关键CSS内联：**
```html
<head>
  <style>
    /* 关键CSS：首屏样式 */
    :root {
      --color-background: #0f0f23;
    }
    body {
      background: var(--color-background);
      color: white;
    }
    /* ... */
  </style>
  
  <!-- 其他CSS延迟加载 -->
  <link rel="stylesheet" href="css/main.css" media="print" onload="this.media='all'">
</head>
```

### 9.4 加载策略

**JavaScript位置：**
```html
<body>
  <!-- 页面内容 -->
  
  <!-- JavaScript放在底部 -->
  <script src="js/data.js"></script>
  <script src="js/utils.js"></script>
  <script src="js/app.js"></script>
</body>
```

**预连接：**
```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

**性能预算：**
- 总大小：< 1MB
- JavaScript：< 100KB
- CSS：< 50KB
- 图片：WebP格式，单张 < 200KB
- 首屏渲染：< 1.5s

---

## 10. 无障碍设计（A11y）

### 10.1 键盘导航

**焦点管理：**
- 所有交互元素可通过Tab访问
- 焦点顺序符合视觉顺序
- 焦点状态明显可见

**焦点样式：**
```css
/* 全局焦点样式 */
:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 2px;
}

/* 按钮焦点 */
.btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.5);
}
```

**跳过导航：**
```html
<body>
  <a href="#main-content" class="skip-link">跳到主要内容</a>
  
  <nav class="navbar">
    <!-- 导航内容 -->
  </nav>
  
  <main id="main-content">
    <!-- 主要内容 -->
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background: var(--color-primary-purple);
  color: white;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 10.2 语义化HTML

**页面结构：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AFunc-OPC - vibe-coding projects</title>
</head>
<body>
  <header>
    <nav class="navbar" role="navigation" aria-label="主导航">
      <!-- 导航内容 -->
    </nav>
  </header>
  
  <main role="main">
    <section id="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">AFunc-OPC</h1>
      <!-- Hero内容 -->
    </section>
    
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Featured Projects</h2>
      <!-- 项目内容 -->
    </section>
    
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">关于 AFunc-OPC</h2>
      <!-- 关于内容 -->
    </section>
    
    <section id="blog" aria-labelledby="blog-title">
      <h2 id="blog-title">Latest Articles</h2>
      <!-- 博客内容 -->
    </section>
    
    <section id="stats" aria-labelledby="stats-title">
      <h2 id="stats-title">数据看板</h2>
      <!-- 统计内容 -->
    </section>
  </main>
  
  <footer role="contentinfo">
    <!-- 页脚内容 -->
  </footer>
</body>
</html>
```

### 10.3 ARIA标签

**导航区域：**
```html
<nav role="navigation" aria-label="主导航">
  <ul>
    <li><a href="#projects" aria-current="page">项目</a></li>
    <li><a href="#about">关于</a></li>
  </ul>
</nav>
```

**模态框：**
```html
<div 
  class="modal-overlay" 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
  aria-hidden="true"
>
  <div class="modal">
    <h2 id="modal-title">项目详情</h2>
    <!-- 内容 -->
  </div>
</div>
```

**按钮：**
```html
<button aria-label="关闭模态框">×</button>
<button aria-label="搜索项目">
  <svg aria-hidden="true"><!-- 图标 --></svg>
</button>
```

**筛选状态：**
```html
<button 
  class="filter-tag" 
  aria-pressed="true"
  data-tag="react"
>
  React
</button>
```

### 10.4 视觉无障碍

**对比度：**
- 正文文字对比度 ≥ 4.5:1
- 大标题对比度 ≥ 3:1
- 使用对比度检查工具验证

**不只依赖颜色：**
```html
<!-- ✅ 推荐：图标 + 文字 + 颜色 -->
<span class="status">
  <span class="status__icon">✓</span>
  <span class="status__text">Active</span>
</span>

<!-- ❌ 避免：只依赖颜色 -->
<span class="status status--active">Active</span>
```

**文字缩放：**
```css
/* 使用相对单位 */
body {
  font-size: 100%; /* 基于用户浏览器设置 */
}

.section__title {
  font-size: 2rem; /* 相对单位 */
}
```

---

## 11. 错误处理与边界情况

### 11.1 数据加载错误

**图片加载失败：**
```html
<img 
  src="project-image.jpg" 
  alt="项目截图"
  onerror="this.onerror=null; this.src='placeholder.svg';"
>
```

**字体加载失败：**
```css
/* CSS font-family设置回退 */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 11.2 无数据状态

**筛选无结果：**
```html
<div class="projects__empty" hidden>
  <div class="empty-state">
    <span class="empty-state__icon">🔍</span>
    <h3 class="empty-state__title">没有找到相关项目</h3>
    <p class="empty-state__text">尝试其他关键词或清除筛选条件</p>
    <button class="btn btn--primary clear-filters">清除筛选</button>
  </div>
</div>
```

**实现逻辑：**
```javascript
function renderProjects(filteredProjects) {
  const container = document.querySelector('.projects__grid');
  const emptyState = document.querySelector('.projects__empty');
  
  if (filteredProjects.length === 0) {
    container.hidden = true;
    emptyState.hidden = false;
  } else {
    container.hidden = false;
    emptyState.hidden = true;
    // 渲染项目...
  }
}
```

### 11.3 浏览器兼容性

**CSS特性检测：**
```css
/* backdrop-filter降级 */
@supports (backdrop-filter: blur(10px)) {
  .navbar--scrolled {
    backdrop-filter: blur(10px);
    background: rgba(15, 15, 35, 0.8);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .navbar--scrolled {
    background: rgba(15, 15, 35, 0.95);
  }
}
```

**CSS Grid降级：**
```css
/* Flexbox降级 */
.projects__grid {
  display: flex;
  flex-wrap: wrap;
}

.projects__grid > * {
  width: calc(33.333% - 16px);
  margin: 8px;
}

/* Grid增强 */
@supports (display: grid) {
  .projects__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  
  .projects__grid > * {
    width: auto;
    margin: 0;
  }
}
```

**Intersection Observer降级：**
```javascript
// 特性检测
if ('IntersectionObserver' in window) {
  // 使用Intersection Observer
  const observer = new IntersectionObserver(callback);
} else {
  // 降级到scroll监听
  window.addEventListener('scroll', debounce(callback, 100));
}
```

### 11.4 移动端适配

**触摸事件优化：**
```javascript
// 检测触摸设备
const isTouchDevice = 'ontouchstart' in window;

if (isTouchDevice) {
  // 禁用hover效果
  document.body.classList.add('touch-device');
  
  // 使用touch事件
  element.addEventListener('touchstart', handler);
} else {
  // 使用鼠标事件
  element.addEventListener('mouseenter', handler);
}
```

**禁用双击缩放：**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

**移动端性能优化：**
```javascript
// 移动端减少动画复杂度
if (window.matchMedia('(max-width: 768px)').matches) {
  // 简化动画
  document.documentElement.style.setProperty('--duration-slow', '300ms');
}
```

---

## 12. 开发规范与文件组织

### 12.1 命名规范

**CSS类名（BEM）：**
```
.block {}                    /* 块 */
.block__element {}          /* 元素 */
.block--modifier {}         /* 修饰符 */

/* 示例 */
.project-card {}
.project-card__title {}
.project-card--featured {}

/* 状态类 */
.is-active {}
.is-hidden {}
.is-loading {}
```

**JavaScript命名：**
```javascript
// 变量：camelCase
const projectList = [];
let currentFilter = 'all';

// 常量：UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const ANIMATION_DURATION = 300;

// 函数：camelCase，动词开头
function renderProjects() {}
function handleFilterClick() {}
function updateNavigation() {}

// 类：PascalCase
class ProjectCard {}
class ModalManager {}
```

**文件命名：**
```
// 小写kebab-case
project-card.html
main-styles.css
data-utils.js

// 组件文件
navbar.component.js
modal.component.js
```

### 12.2 代码组织

**CSS组织顺序：**
```css
/* 1. CSS变量定义 */
:root {
  --color-primary: #667eea;
}

/* 2. 重置样式 */
* {
  margin: 0;
  padding: 0;
}

/* 3. 基础元素样式 */
body {
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-display);
}

/* 4. 布局样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* 5. 组件样式 */
.navbar { /* ... */ }
.project-card { /* ... */ }
.modal { /* ... */ }

/* 6. 动画定义 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 7. 工具类 */
.sr-only { /* ... */ }
.text-center { /* ... */ }

/* 8. 响应式媒体查询 */
@media (max-width: 768px) {
  /* ... */
}
```

**JavaScript组织结构：**
```javascript
// ========== 1. 数据定义 ==========
const projects = [ /* ... */ ];
const articles = [ /* ... */ ];

// ========== 2. DOM元素引用 ==========
const elements = {
  navbar: document.querySelector('.navbar'),
  projectsGrid: document.querySelector('.projects__grid'),
  modal: document.querySelector('.modal-overlay'),
  // ...
};

// ========== 3. 状态管理 ==========
let state = {
  currentFilter: 'all',
  searchQuery: '',
  selectedTags: new Set(['all']),
};

// ========== 4. 工具函数 ==========
function debounce(func, wait) { /* ... */ }
function formatDate(dateString) { /* ... */ }
function formatNumber(num) { /* ... */ }

// ========== 5. 渲染函数 ==========
function renderProjects(projects) { /* ... */ }
function renderArticles(articles) { /* ... */ }
function renderModalContent(project) { /* ... */ }

// ========== 6. 事件处理函数 ==========
function handleFilterClick(e) { /* ... */ }
function handleSearch(e) { /* ... */ }
function handleModalOpen(projectId) { /* ... */ }
function handleModalClose() { /* ... */ }

// ========== 7. 初始化函数 ==========
function initNavigation() { /* ... */ }
function initFilters() { /* ... */ }
function initAnimations() { /* ... */ }
function initModals() { /* ... */ }

// ========== 8. 主初始化 ==========
function init() {
  initNavigation();
  initFilters();
  initAnimations();
  initModals();
  renderProjects(projects);
  renderArticles(articles);
}

// ========== 9. DOMContentLoaded ==========
document.addEventListener('DOMContentLoaded', init);
```

### 12.3 注释规范

**HTML注释：**
```html
<!-- 导航栏 -->
<nav class="navbar">
  <!-- Logo和品牌 -->
  <div class="navbar__brand">...</div>
  
  <!-- 导航菜单 -->
  <ul class="navbar__menu">...</ul>
</nav>

<!-- 项目展示区块 -->
<section id="projects">
  ...
</section>
```

**CSS注释：**
```css
/**
 * 组件：项目卡片
 * 功能：展示项目信息，支持筛选和详情查看
 * 依赖：variables.css
 */

.project-card {
  /* 玻璃态背景 */
  background: var(--glass-background);
  backdrop-filter: var(--glass-blur);
  
  /* 布局 */
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
}

/* 悬停效果 */
.project-card:hover {
  transform: translateY(-4px);
}
```

**JavaScript注释：**
```javascript
/**
 * 筛选项目列表
 * @param {string} tag - 要筛选的标签
 * @returns {void}
 */
function filterProjectsByTag(tag) {
  // 清除之前的筛选
  selectedTags.clear();
  
  // 添加新标签
  if (tag !== 'all') {
    selectedTags.add(tag);
  } else {
    selectedTags.add('all');
  }
  
  // 重新渲染项目列表
  renderFilteredProjects();
}

// TODO: 添加搜索历史功能
// FIXME: 移动端筛选动画性能问题
```

---

## 13. 部署与维护

### 13.1 GitHub Pages部署

**部署步骤：**

1. **创建GitHub仓库：**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AFunc-OPC website"
   git branch -M main
   git remote add origin https://github.com/username/afunc-opc.git
   git push -u origin main
   ```

2. **启用GitHub Pages：**
   - 进入仓库 Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, / (root)
   - Save

3. **访问网站：**
   ```
   https://username.github.io/afunc-opc/
   ```

**自定义域名（可选）：**
```
# 在仓库根目录创建 CNAME 文件
echo "www.afunc-opc.com" > CNAME
```

**HTTPS：** GitHub Pages自动启用HTTPS

**404页面：**
```html
<!-- 创建 404.html -->
<!DOCTYPE html>
<html>
<head>
  <title>404 - 页面未找到 | AFunc-OPC</title>
</head>
<body>
  <h1>404 - 页面未找到</h1>
  <p><a href="/">返回首页</a></p>
</body>
</html>
```

### 13.2 更新维护

**添加新项目：**
```javascript
// 编辑 js/data.js
const projects = [
  {
    id: "new-project",
    name: "新项目名称",
    description: "项目描述",
    // ... 其他字段
  },
  // ... 现有项目
];
```

**更新流程：**
```bash
# 1. 编辑数据文件
vim js/data.js

# 2. 提交更改
git add js/data.js
git commit -m "Add new project: [项目名称]"

# 3. 推送到GitHub
git push origin main

# 4. GitHub Pages自动部署（1-2分钟生效）
```

**版本控制最佳实践：**
- 每次更新都要提交commit
- commit message清晰描述更改
- 重要更新打tag标记版本
- 保留修改历史，便于回滚

### 13.3 性能监控

**监控工具：**

**Lighthouse：**
```bash
# Chrome DevTools → Lighthouse → Generate report
# 或命令行：
lighthouse https://username.github.io/afunc-opc/ --view
```

**PageSpeed Insights：**
```
https://pagespeed.web.dev/
```

**WebPageTest：**
```
https://www.webpagetest.org/
```

**性能指标目标：**

| 指标 | 目标值 | 说明 |
|------|--------|------|
| First Contentful Paint (FCP) | < 1.8s | 首次内容绘制 |
| Largest Contentful Paint (LCP) | < 2.5s | 最大内容绘制 |
| Time to Interactive (TTI) | < 3.8s | 可交互时间 |
| Cumulative Layout Shift (CLS) | < 0.1 | 累积布局偏移 |
| First Input Delay (FID) | < 100ms | 首次输入延迟 |

---

## 14. 未来扩展性

### 14.1 功能扩展路线图

**短期扩展（3个月内）：**
- ✅ 深色/浅色主题切换
- ✅ 多语言支持（中英文切换）
- ✅ 项目收藏功能
- ✅ 分享功能（社交媒体）

**中期扩展（6个月内）：**
- 🔄 集成GitHub API动态获取数据
- 🔄 高级搜索（全文搜索、筛选保存）
- 🔄 RSS订阅功能
- 🔄 邮件订阅列表

**长期扩展（1年内）：**
- 📋 后端管理系统（CMS）
- 📋 用户认证系统
- 📋 社区功能（评论、讨论区）
- 📋 API开放接口

### 14.2 技术演进路径

**阶段0：当前（纯静态）**
```
纯HTML/CSS/JS
数据内嵌在JS文件中
GitHub Pages部署
```

**阶段1：静态 + 第三方服务**
```
保持静态架构
集成第三方服务：
- Disqus评论
- Google Analytics
- Algolia搜索
- GitHub API（客户端调用）
```

**阶段2：静态生成 + 构建工具**
```
引入构建工具（Vite/Webpack）
数据迁移到JSON/YAML文件
Markdown处理（文章内容）
构建时生成静态文件
```

**阶段3：服务端渲染（SSR）**
```
框架升级：Next.js/Nuxt.js
服务端渲染提升SEO
API路由支持
数据库集成
```

**阶段4：全栈应用**
```
后端服务（Node.js/Python）
数据库
用户系统
实时功能
```

### 14.3 数据管理演进

**阶段0：本地JS文件（当前）**
```javascript
// js/data.js
const projects = [ /* ... */ ];
```

**阶段1：JSON文件 + 构建时注入**
```json
// data/projects.json
[
  { "id": "project-001", "name": "..." }
]
```

**阶段2：Headless CMS**
```
使用第三方CMS：
- Contentful
- Notion
- Strapi
- Ghost

优点：
- 可视化编辑界面
- 团队协作
- 版本控制
- API访问
```

**阶段3：自建CMS系统**
```
开发专属管理系统：
- 项目管理后台
- 文章编辑器
- 用户权限管理
- 审核流程
```

---

## 15. 测试与验证

### 15.1 功能测试清单

**导航测试：**
- [ ] 点击导航链接平滑滚动到对应区块
- [ ] 滚动时导航项自动高亮
- [ ] URL hash正确更新
- [ ] 浏览器前进/后退正常工作
- [ ] 返回顶部按钮正常显示/隐藏

**项目筛选测试：**
- [ ] 点击标签筛选项目
- [ ] 多标签组合筛选正常
- [ ] 清除筛选功能正常
- [ ] 搜索功能实时响应
- [ ] 无结果时显示提示

**模态框测试：**
- [ ] 点击项目卡片打开模态框
- [ ] 点击遮罩关闭模态框
- [ ] 点击关闭按钮关闭模态框
- [ ] 按ESC键关闭模态框
- [ ] 背景滚动锁定正常
- [ ] Tab键焦点陷阱正常

**响应式测试：**
- [ ] 移动端（< 768px）布局正常
- [ ] 平板（768px - 1024px）布局正常
- [ ] 桌面（> 1024px）布局正常
- [ ] 汉堡菜单展开/收起正常
- [ ] 触摸交互正常

### 15.2 性能测试

**Lighthouse测试：**
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

**加载速度测试：**
- [ ] FCP < 1.8s
- [ ] LCP < 2.5s
- [ ] TTI < 3.8s
- [ ] CLS < 0.1

**资源大小测试：**
- [ ] 总页面大小 < 1MB
- [ ] JavaScript < 100KB
- [ ] CSS < 50KB
- [ ] 图片优化

### 15.3 兼容性测试

**浏览器测试：**
- [ ] Chrome (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)
- [ ] Edge (最新版)
- [ ] 移动端 Safari
- [ ] 移动端 Chrome

**功能降级测试：**
- [ ] backdrop-filter不支持时降级正常
- [ ] CSS Grid不支持时降级正常
- [ ] Intersection Observer不支持时降级正常
- [ ] JavaScript禁用时基本内容可访问

### 15.4 无障碍测试

**键盘导航测试：**
- [ ] Tab键可以访问所有交互元素
- [ ] 焦点顺序符合逻辑
- [ ] 焦点状态清晰可见
- [ ] ESC键关闭模态框
- [ ] 跳过导航链接正常工作

**屏幕阅读器测试：**
- [ ] VoiceOver (Mac) 测试通过
- [ ] NVDA (Windows) 测试通过
- [ ] 页面结构语义化
- [ ] ARIA标签正确

**对比度测试：**
- [ ] 正文文字对比度 ≥ 4.5:1
- [ ] 大标题对比度 ≥ 3:1
- [ ] 功能色对比度足够

---

## 16. 附录

### 16.1 参考资源

**设计灵感：**
- Dribbble: https://dribbble.com
- Behance: https://www.behance.net
- Awwwards: https://www.awwwards.com

**字体资源：**
- Google Fonts: https://fonts.google.com
- Poppins: https://fonts.google.com/specimen/Poppins
- Inter: https://fonts.google.com/specimen/Inter

**图标资源：**
- Heroicons: https://heroicons.com
- Feather Icons: https://feathericons.com
- Font Awesome: https://fontawesome.com

**颜色工具：**
- Coolors: https://coolors.co
- Adobe Color: https://color.adobe.com
- Contrast Checker: https://webaim.org/resources/contrastchecker

**性能工具：**
- Lighthouse: Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev
- WebPageTest: https://www.webpagetest.org

**无障碍工具：**
- WAVE: https://wave.webaim.org
- axe DevTools: Chrome Extension
- Pa11y: https://pa11y.org

### 16.2 技术文档链接

**MDN Web Docs：**
- HTML: https://developer.mozilla.org/zh-CN/docs/Web/HTML
- CSS: https://developer.mozilla.org/zh-CN/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

**CSS参考：**
- CSS Variables: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Grid: https://css-tricks.com/snippets/css/complete-guide-grid/

**JavaScript API：**
- Intersection Observer: https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
- Fetch API: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

**GitHub Pages：**
- 官方文档: https://docs.github.com/zh/pages

### 16.3 开发工具推荐

**代码编辑器：**
- VS Code: https://code.visualstudio.com
- Sublime Text: https://www.sublimetext.com

**浏览器开发工具：**
- Chrome DevTools
- Firefox Developer Tools

**版本控制：**
- Git: https://git-scm.com
- GitHub Desktop: https://desktop.github.com

**设计工具：**
- Figma: https://www.figma.com
- Sketch: https://www.sketch.com

---

## 17. 总结

本设计文档详细定义了AFunc-OPC企业官网的完整设计方案，包括：

**核心设计决策：**
- 创意实验性视觉风格（液态渐变流动）
- 纯静态技术架构（HTML/CSS/JS）
- 模块化文件组织
- GitHub Pages部署方案

**关键功能特性：**
- 单页应用平滑导航
- 项目展示与智能筛选
- 博客文章系统
- 数据可视化看板
- 响应式设计

**质量保障措施：**
- 性能优化策略
- 无障碍设计支持
- 错误处理机制
- 浏览器兼容性

**开发实施指导：**
- 详细的文件结构
- 清晰的代码规范
- 完整的数据结构
- 具体的交互实现

本设计文档为后续开发实施提供了明确的指导，确保项目能够按照预期目标高质量完成。
