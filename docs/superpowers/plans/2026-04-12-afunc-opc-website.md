# AFunc-OPC Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete AFunc-OPC enterprise website showcasing vibe-coding projects with liquid gradient design, glassmorphism effects, and pure static architecture deployable to GitHub Pages.

**Architecture:** Single-page application (SPA) with hash-based navigation, Intersection Observer for scroll animations, modular CSS with design system variables, and vanilla JavaScript for all interactivity. No build tools or frameworks required.

**Tech Stack:** HTML5, CSS3 (Variables, Grid, Flexbox, backdrop-filter), Vanilla JavaScript (ES6+), Google Fonts (Poppins, Inter, JetBrains Mono)

---

## File Structure Overview

```
/
├── index.html              # Single-page application entry
├── css/
│   ├── variables.css       # Design system variables
│   ├── base.css            # Reset and base element styles
│   ├── layout.css          # Page layout and grid system
│   ├── components.css      # Component styles
│   └── animations.css      # Animation definitions
├── js/
│   ├── data.js             # All data (projects, articles, team, stats)
│   ├── utils.js            # Utility functions
│   └── app.js              # Main application logic
└── assets/
    ├── images/             # Image resources
    └── icons/              # SVG icons
```

---

## Chunk 1: Project Setup and Design System

### Task 1.1: Create Directory Structure

**Files:**
- Create: `css/`, `js/`, `assets/`, `assets/images/`, `assets/icons/`

- [ ] **Step 1: Create all required directories**

Run:
```bash
mkdir -p css js assets/images assets/icons
```

Expected: Directories created successfully

- [ ] **Step 2: Verify directory structure**

Run:
```bash
ls -la
```

Expected:
```
drwxr-xr-x  css/
drwxr-xr-x  js/
drwxr-xr-x  assets/
```

---

### Task 1.2: Create Design System Variables

**Files:**
- Create: `css/variables.css`

- [ ] **Step 1: Create css/variables.css with complete design system**

```css
:root {
  /* ========== Color System ========== */
  
  /* Primary Colors - Liquid Gradient */
  --color-primary-purple: #667eea;
  --color-primary-pink: #764ba2;
  --color-accent-pink: #f093fb;
  --color-accent-blue: #00d4ff;
  
  /* Neutral Colors */
  --color-background: #0f0f23;
  --color-surface: rgba(255, 255, 255, 0.1);
  --color-surface-hover: rgba(255, 255, 255, 0.15);
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.8);
  --color-text-muted: rgba(255, 255, 255, 0.6);
  
  /* Functional Colors */
  --color-success: #4ade80;
  --color-warning: #fbbf24;
  --color-error: #f87171;
  --color-info: #60a5fa;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  --gradient-glow: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 33%, #f093fb 66%, #00d4ff 100%);
  
  /* Glass Effect */
  --glass-background: rgba(255, 255, 255, 0.1);
  --glass-background-hover: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: blur(10px);
  
  /* ========== Typography System ========== */
  
  /* Font Families */
  --font-display: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  /* ========== Spacing System (8px base) ========== */
  
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;
  
  /* ========== Border Radius ========== */
  
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  
  /* ========== Shadows ========== */
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-glow: 0 0 20px rgba(102, 126, 234, 0.3);
  --shadow-glow-lg: 0 0 40px rgba(102, 126, 234, 0.4);
  
  /* ========== Animation System ========== */
  
  /* Durations */
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --duration-slower: 1000ms;
  
  /* Easing Functions */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  
  /* Animation Delays (for stagger) */
  --delay-1: 100ms;
  --delay-2: 200ms;
  --delay-3: 300ms;
  --delay-4: 400ms;
  --delay-5: 500ms;
  
  /* ========== Layout ========== */
  
  --container-max-width: 1200px;
  --navbar-height: 64px;
  --navbar-height-mobile: 56px;
  
  /* ========== Z-Index Scale ========== */
  
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
  --z-toast: 700;
}
```

- [ ] **Step 2: Verify file creation**

Run:
```bash
ls -la css/
```

Expected: `variables.css` exists with content

---

### Task 1.3: Create Base Styles

**Files:**
- Create: `css/base.css`

- [ ] **Step 1: Create css/base.css with reset and base element styles**

```css
/* ========== CSS Reset ========== */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  background-color: var(--color-background);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========== Typography ========== */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

p {
  margin-bottom: var(--space-md);
  color: var(--color-text-secondary);
}

a {
  color: var(--color-accent-blue);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-smooth);
}

a:hover {
  color: var(--color-accent-pink);
}

strong, b { font-weight: var(--font-semibold); }
em, i { font-style: italic; }
small { font-size: var(--text-sm); }

code, pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

code {
  background: var(--color-surface);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
}

pre {
  background: var(--color-surface);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

pre code {
  background: none;
  padding: 0;
}

/* ========== Lists ========== */

ul, ol {
  list-style: none;
}

/* ========== Images ========== */

img, video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ========== Forms ========== */

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

input,
textarea {
  background: transparent;
  border: none;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-muted);
}

/* ========== Tables ========== */

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: var(--space-sm) var(--space-md);
}

/* ========== Selection ========== */

::selection {
  background: var(--color-primary-purple);
  color: var(--color-text-primary);
}

::-moz-selection {
  background: var(--color-primary-purple);
  color: var(--color-text-primary);
}

/* ========== Focus Styles ========== */

:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 2px;
}

/* ========== Scrollbar ========== */

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-background);
}

::-webkit-scrollbar-thumb {
  background: var(--color-surface-hover);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-purple);
}

/* ========== Utility Classes ========== */

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hidden {
  display: none !important;
}

.text-center {
  text-align: center;
}

.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========== Skip Link (Accessibility) ========== */

.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-md);
  z-index: var(--z-toast);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-primary-purple);
  color: var(--color-text-primary);
  border-radius: var(--radius-md);
  transition: top var(--duration-fast) var(--ease-smooth);
}

.skip-link:focus {
  top: var(--space-md);
}
```

- [ ] **Step 2: Verify file creation**

Run:
```bash
wc -l css/base.css
```

Expected: File has approximately 220 lines

---

### Task 1.4: Create Minimal HTML Shell

**Files:**
- Create: `index.html` (initial structure)

- [ ] **Step 1: Create index.html with basic structure and CSS imports**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="AFunc-OPC - vibe-coding projects showcase">
  <meta name="theme-color" content="#0f0f23">
  
  <title>AFunc-OPC - vibe-coding projects</title>
  
  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
</head>
<body>
  <!-- Skip Link for Accessibility -->
  <a href="#main-content" class="skip-link">跳到主要内容</a>
  
  <!-- Navigation -->
  <header>
    <nav class="navbar" role="navigation" aria-label="主导航">
      <div class="navbar__brand">
        <span class="navbar__logo">🚀</span>
        <span class="navbar__title">AFunc-OPC</span>
      </div>
      
      <ul class="navbar__menu">
        <li><a href="#projects" class="navbar__link">项目</a></li>
        <li><a href="#about" class="navbar__link">关于</a></li>
        <li><a href="#blog" class="navbar__link">博客</a></li>
        <li><a href="#stats" class="navbar__link">数据</a></li>
      </ul>
      
      <div class="navbar__actions">
        <button class="navbar__search" aria-label="搜索项目">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button class="navbar__hamburger" aria-label="打开菜单" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main id="main-content" role="main">
    <!-- Sections will be added in Chunk 2 & 3 -->
  </main>
  
  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <p>&copy; 2026 AFunc-OPC. All rights reserved.</p>
    </div>
  </footer>
  
  <!-- Modals -->
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal">
      <button class="modal__close" aria-label="关闭">×</button>
      <div class="modal__content"></div>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div class="mobile-menu" aria-hidden="true">
    <ul class="mobile-menu__list">
      <li><a href="#projects" class="mobile-menu__link">项目</a></li>
      <li><a href="#about" class="mobile-menu__link">关于</a></li>
      <li><a href="#blog" class="mobile-menu__link">博客</a></li>
      <li><a href="#stats" class="mobile-menu__link">数据</a></li>
    </ul>
  </div>
  
  <!-- Scripts -->
  <script src="js/data.js"></script>
  <script src="js/utils.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML structure**

Run:
```bash
grep -c "<" index.html
```

Expected: File contains HTML tags

---

### Task 1.5: Commit Chunk 1

- [ ] **Step 1: Stage all files**

Run:
```bash
git add css/ index.html
```

Expected: Files staged

- [ ] **Step 2: Commit Chunk 1 changes**

Run:
```bash
git commit -m "feat: setup project structure and design system

- Create directory structure (css/, js/, assets/)
- Add CSS design system variables (colors, typography, spacing)
- Add base CSS reset and element styles
- Create HTML shell with semantic structure"
```

Expected: Commit created successfully

---

## Chunk 2: Layout and Components

### Task 2.1: Create Layout Styles

**Files:**
- Create: `css/layout.css`

- [ ] **Step 1: Create css/layout.css with page layout system**

```css
/* ========== Page Layout ========== */

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ========== Sections ========== */

.section {
  padding: var(--space-4xl) 0;
  position: relative;
  overflow: hidden;
}

.section:first-of-type {
  padding-top: var(--space-5xl);
}

.section__title {
  font-size: var(--text-4xl);
  text-align: center;
  margin-bottom: var(--space-md);
}

.section__subtitle {
  font-size: var(--text-lg);
  text-align: center;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2xl);
}

/* ========== Hero Section ========== */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: var(--navbar-height);
  position: relative;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: var(--gradient-hero);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
}

.hero__background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 50% 0%, transparent 0%, var(--color-background) 70%);
}

.hero__content {
  max-width: 800px;
  padding: var(--space-xl);
}

.hero__logo {
  font-size: 6rem;
  margin-bottom: var(--space-lg);
  animation: float 3s ease-in-out infinite;
}

.hero__title {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-md);
}

.hero__subtitle {
  font-size: var(--text-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  animation: bounce 2s ease-in-out infinite;
}

.hero__scroll-indicator svg {
  margin-top: var(--space-sm);
}

/* ========== Projects Section ========== */

.projects {
  background: var(--color-background);
}

.projects__toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2xl);
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

.projects__empty {
  text-align: center;
  padding: var(--space-3xl);
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

/* ========== About Section ========== */

.about {
  position: relative;
}

.about__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
}

.about__left {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.about__team-photo {
  aspect-ratio: 4/3;
  background: var(--gradient-glow);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.about__right {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.about__subtitle {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-sm);
}

.about__text {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.about__values {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.about__values li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-secondary);
}

.about__values li::before {
  content: '✓';
  color: var(--color-success);
  font-weight: var(--font-bold);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

@media (min-width: 1025px) {
  .about__content {
    grid-template-columns: 1fr 2fr;
  }
}

/* ========== Blog Section ========== */

.blog__filters {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.blog__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .blog__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .blog__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ========== Stats Section ========== */

.stats {
  background: var(--gradient-glow);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.stats__charts {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .stats__grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .stats__charts {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ========== Footer ========== */

footer {
  background: rgba(0, 0, 0, 0.3);
  padding: var(--space-2xl) 0;
  text-align: center;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

footer a {
  color: var(--color-text-secondary);
}

footer a:hover {
  color: var(--color-text-primary);
}
```

- [ ] **Step 2: Verify layout.css creation**

Run:
```bash
wc -l css/layout.css
```

Expected: File has approximately 260 lines

---

### Task 2.2: Create Component Styles

**Files:**
- Create: `css/components.css`

- [ ] **Step 1: Create css/components.css with all component styles**

See separate file for component CSS (file is large, approximately 580 lines).

Key components to include:
- Navigation (.navbar, .navbar__menu, .navbar__link, etc.)
- Mobile Menu (.mobile-menu)
- Buttons (.btn, .btn--primary, .btn--secondary, .btn--ghost)
- Project Card (.project-card)
- Tags (.tag, .filter-tag)
- Search Box (.search-box)
- Article Card (.article-card)
- Stat Card (.stat-card)
- Team Card (.team-card)
- Chart Card (.chart-card)
- Modal (.modal-overlay, .modal)
- Empty State (.empty-state)
- Project Detail (.project-detail)
- Back to Top Button (.back-to-top)

- [ ] **Step 2: Verify components.css creation**

Run:
```bash
wc -l css/components.css
```

Expected: File has approximately 580 lines

---

### Task 2.3: Create Animation Styles

**Files:**
- Create: `css/animations.css`

- [ ] **Step 1: Create css/animations.css with all animations**

```css
/* ========== Keyframe Animations ========== */

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* ========== Animation Classes ========== */

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slow) var(--ease-smooth),
              transform var(--duration-slow) var(--ease-smooth);
}

.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity var(--duration-slow) var(--ease-smooth),
              transform var(--duration-slow) var(--ease-smooth);
}

.fade-in-scale.is-visible {
  opacity: 1;
  transform: scale(1);
}

/* ========== Stagger Animations ========== */

.stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-normal) var(--ease-smooth),
              transform var(--duration-normal) var(--ease-smooth);
}

.stagger.is-visible > * {
  opacity: 1;
  transform: translateY(0);
}

.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: var(--delay-1); }
.stagger > *:nth-child(3) { transition-delay: var(--delay-2); }
.stagger > *:nth-child(4) { transition-delay: var(--delay-3); }
.stagger > *:nth-child(5) { transition-delay: var(--delay-4); }
.stagger > *:nth-child(6) { transition-delay: var(--delay-5); }

/* ========== Hero Animations ========== */

.hero__logo { animation: float 3s ease-in-out infinite; }
.hero__title { animation: slideInUp 0.8s var(--ease-smooth) 0ms both; }
.hero__subtitle { animation: slideInUp 0.8s var(--ease-smooth) 200ms both; }
.hero__description { animation: slideInUp 0.8s var(--ease-smooth) 400ms both; }
.hero__cta { animation: slideInUp 0.8s var(--ease-smooth) 600ms both; }
.hero__scroll-indicator { animation: bounce 2s ease-in-out infinite; animation-delay: 1s; }

/* ========== Loading States ========== */

.is-loading {
  position: relative;
  pointer-events: none;
}

.is-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin: -12px 0 0 -12px;
  border: 2px solid var(--glass-border);
  border-top-color: var(--color-accent-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* ========== Reduced Motion ========== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hero__logo,
  .hero__scroll-indicator {
    animation: none;
  }
  
  .hero__title,
  .hero__subtitle,
  .hero__description,
  .hero__cta {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 2: Verify animations.css creation**

Run:
```bash
wc -l css/animations.css
```

Expected: File has approximately 180 lines

---

### Task 2.4: Commit Chunk 2

- [ ] **Step 1: Stage all CSS files**

Run:
```bash
git add css/
```

Expected: CSS files staged

- [ ] **Step 2: Commit Chunk 2 changes**

Run:
```bash
git commit -m "feat: add layout and component styles

- Add page layout system (sections, hero, grids)
- Add navigation and mobile menu styles
- Add button component variants
- Add project card, article card, stat card components
- Add modal and filter components
- Add keyframe animations and utility classes
- Add reduced motion support for accessibility"
```

Expected: Commit created successfully

---

## Chunk 3: JavaScript Functionality and Complete HTML

### Task 3.1: Create Data Module

**Files:**
- Create: `js/data.js`

- [ ] **Step 1: Create js/data.js with all data structures**

Data structures to include:
- `projects` array with 6 sample projects
- `articles` array with 4 sample articles
- `team` array with 4 team members
- `stats` object with aggregate statistics
- `filterTags` array for project filtering
- `categories` array for article filtering

Each project should have: id, name, description, longDescription, icon, tags, stars, forks, status, links, image, featured, createdAt, updatedAt

Each article should have: id, title, excerpt, content, author, authorAvatar, category, tags, coverImage, publishedAt, readTime

- [ ] **Step 2: Verify data.js creation**

Run:
```bash
wc -l js/data.js
```

Expected: File has approximately 280 lines

---

### Task 3.2: Create Utility Module

**Files:**
- Create: `js/utils.js`

- [ ] **Step 1: Create js/utils.js with utility functions**

Utility functions to include:
- `debounce(func, wait)` - Debounce function
- `throttle(func, limit)` - Throttle function
- `formatNumber(num)` - Format numbers with K/M suffix
- `formatDate(dateString)` - Format dates to relative time
- `getStatusLabel(status)` - Get localized status label
- `getCategoryLabel(category)` - Get localized category label
- `$(selector)` - Query selector shorthand
- `$$(selector)` - Query selector all shorthand
- `createElement(tag, className, innerHTML)` - Create DOM element
- `renderProjectCard(project)` - Render project card HTML
- `renderArticleCard(article)` - Render article card HTML
- `renderTeamCard(member)` - Render team card HTML
- `renderStatCard(stat, icon, label, isLarge)` - Render stat card HTML
- `renderFilterTags(tags, activeTag)` - Render filter tags HTML
- `renderProjectDetail(project)` - Render project detail modal HTML
- `renderEmptyState()` - Render empty state HTML
- `renderTechDistribution(techDistribution)` - Render tech chart HTML
- `renderRecentUpdates(updates)` - Render updates list HTML

- [ ] **Step 2: Verify utils.js creation**

Run:
```bash
wc -l js/utils.js
```

Expected: File has approximately 270 lines

---

### Task 3.3: Create Main Application Module

**Files:**
- Create: `js/app.js`

- [ ] **Step 1: Create js/app.js with main application logic**

Application modules to include:

1. **DOM Element References**
   - Cache all DOM elements on page load

2. **State Management**
   - selectedTags (Set)
   - searchQuery (string)
   - currentSection (string)
   - isModalOpen (boolean)
   - isMobileMenuOpen (boolean)

3. **Navigation Functions**
   - `initNavigation()` - Initialize all navigation
   - `setupSmoothScroll()` - Setup smooth scroll for nav links
   - `scrollToSection(sectionId)` - Scroll to section
   - `setupScrollSpy()` - Setup Intersection Observer for sections
   - `updateActiveNavLink(sectionId)` - Update active nav link
   - `setupNavbarScroll()` - Add scrolled class on scroll

4. **Mobile Menu Functions**
   - `initMobileMenu()` - Initialize mobile menu
   - `toggleMobileMenu()` - Toggle mobile menu state
   - `closeMobileMenu()` - Close mobile menu

5. **Filter Functions**
   - `initFilters()` - Initialize all filters
   - `renderFilterBar()` - Render filter tags
   - `setupFilterListeners()` - Setup filter event listeners
   - `handleFilterClick(e)` - Handle filter tag click
   - `handleBlogFilterClick(e)` - Handle blog filter click
   - `updateFilterUI(container, selectedTags)` - Update filter UI
   - `filterProjects()` - Filter projects by tags and search
   - `filterArticles(category)` - Filter articles by category

6. **Search Functions**
   - `setupSearchListeners()` - Setup search input listeners
   - `updateSearchClearButton()` - Show/hide clear button
   - `clearSearch()` - Clear search input

7. **Render Functions**
   - `renderProjects(projectList)` - Render project cards
   - `renderArticles(articleList)` - Render article cards
   - `renderTeam()` - Render team cards
   - `renderStats()` - Render stat cards
   - `showEmptyState()` - Show empty state message
   - `hideEmptyState()` - Hide empty state message

8. **Modal Functions**
   - `initModals()` - Initialize modals
   - `setupModalListeners()` - Setup modal event listeners
   - `setupProjectCardListeners()` - Setup project card clicks
   - `openProjectModal(projectId)` - Open project detail modal
   - `closeModal()` - Close modal
   - `trapFocus(modal)` - Trap focus in modal

9. **Scroll Animations**
   - `initScrollAnimations()` - Initialize Intersection Observer

10. **Back to Top Button**
    - `initBackToTop()` - Initialize back to top button

11. **Main Initialization**
    - `init()` - Main initialization function
    - DOMContentLoaded listener

- [ ] **Step 2: Verify app.js creation**

Run:
```bash
wc -l js/app.js
```

Expected: File has approximately 450 lines

---

### Task 3.4: Complete HTML Structure

**Files:**
- Modify: `index.html` (complete all sections)

- [ ] **Step 1: Update index.html with complete HTML structure**

Sections to add:
1. Hero Section (#hero)
2. Projects Section (#projects)
3. About Section (#about)
4. Blog Section (#blog)
5. Stats Section (#stats)

Each section should have proper ARIA labels and semantic structure.

- [ ] **Step 2: Verify complete HTML**

Run:
```bash
grep -c "<section" index.html
```

Expected: 5 sections (hero, projects, about, blog, stats)

---

### Task 3.5: Commit Chunk 3

- [ ] **Step 1: Stage all JavaScript and HTML files**

Run:
```bash
git add js/ index.html
```

Expected: Files staged

- [ ] **Step 2: Commit Chunk 3 changes**

Run:
```bash
git commit -m "feat: add JavaScript functionality and complete HTML

- Add data module with projects, articles, team, and stats
- Add utility functions (debounce, format, render)
- Add main application logic (navigation, filters, modals)
- Add scroll animations and back-to-top button
- Complete HTML structure with all sections
- Add accessibility features (focus trap, aria labels)"
```

Expected: Commit created successfully

---

## Chunk 4: Testing and Deployment

### Task 4.1: Manual Browser Testing Checklist

- [ ] **Step 1: Open index.html in browser**

Run:
```bash
open index.html
```

Expected: Page opens in browser

- [ ] **Step 2: Test navigation functionality**

Manual tests:
- [ ] Click each nav link - should scroll smoothly to section
- [ ] Scroll page - navbar should change background
- [ ] Scroll page - nav link should highlight current section
- [ ] Mobile menu should open/close on hamburger click

- [ ] **Step 3: Test filter functionality**

Manual tests:
- [ ] Click filter tags - projects should filter correctly
- [ ] Click multiple tags - should combine filters (OR logic)
- [ ] Click "All" tag - should show all projects
- [ ] Type in search box - should filter projects
- [ ] Click clear button - should clear search

- [ ] **Step 4: Test modal functionality**

Manual tests:
- [ ] Click project card - modal should open
- [ ] Click modal close button - modal should close
- [ ] Click outside modal - modal should close
- [ ] Press Escape key - modal should close
- [ ] Tab key should trap focus in modal

- [ ] **Step 5: Test responsive design**

Manual tests:
- [ ] Resize to mobile (< 768px) - hamburger menu appears
- [ ] Resize to tablet (768px - 1024px) - 2-column grid
- [ ] Resize to desktop (> 1024px) - 3-column grid
- [ ] All touch targets should be at least 44px

- [ ] **Step 6: Test animations**

Manual tests:
- [ ] Hero elements should animate on load
- [ ] Cards should fade in on scroll
- [ ] Background gradient should animate
- [ ] Hover effects should work on cards

---

### Task 4.2: Performance Testing

- [ ] **Step 1: Run Lighthouse audit**

Open Chrome DevTools → Lighthouse → Generate report

Expected scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

- [ ] **Step 2: Check page weight**

Run:
```bash
find . -name "*.css" -o -name "*.js" | xargs wc -c
```

Expected:
- CSS: < 50KB total
- JavaScript: < 100KB total

---

### Task 4.3: Create Deployment Files

**Files:**
- Create: `.nojekyll`
- Create: `404.html`

- [ ] **Step 1: Create .nojekyll for GitHub Pages**

```bash
touch .nojekyll
```

- [ ] **Step 2: Create 404.html**

Create a simple 404 page that redirects to home:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>404 - Page Not Found | AFunc-OPC</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 50px; background: #0f0f23; color: white; }
    a { color: #00d4ff; }
  </style>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p><a href="/">Return to Home</a></p>
</body>
</html>
```

---

### Task 4.4: Deploy to GitHub Pages

- [ ] **Step 1: Create GitHub repository (if not exists)**

Run:
```bash
git remote -v
```

Expected: Remote URL shown, or add remote:
```bash
git remote add origin https://github.com/username/afunc-opc.git
```

- [ ] **Step 2: Push to GitHub**

Run:
```bash
git push -u origin main
```

Expected: Code pushed to GitHub

- [ ] **Step 3: Enable GitHub Pages**

Navigate to: Repository Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Save

- [ ] **Step 4: Verify deployment**

Wait 1-2 minutes, then visit:
`https://username.github.io/afunc-opc/`

Expected: Website loads correctly

---

### Task 4.5: Final Verification Checklist

- [ ] All pages load without errors
- [ ] All navigation links work
- [ ] All filters and search work
- [ ] All modals open and close correctly
- [ ] Responsive design works on all screen sizes
- [ ] Animations play smoothly
- [ ] Lighthouse scores meet targets
- [ ] Website accessible via GitHub Pages URL

---

### Task 4.6: Commit Chunk 4

- [ ] **Step 1: Stage all remaining files**

Run:
```bash
git add .nojekyll 404.html
```

- [ ] **Step 2: Commit final changes**

Run:
```bash
git commit -m "chore: add deployment configuration

- Add .nojekyll for GitHub Pages
- Add 404 error page
- Complete testing verification"
```

Expected: Commit created successfully

- [ ] **Step 3: Push final changes**

Run:
```bash
git push origin main
```

Expected: Changes pushed to GitHub

---

## Summary

This plan covers the complete implementation of the AFunc-OPC website:

**Chunk 1: Project Setup and Design System**
- Directory structure creation
- CSS variables for design system
- Base CSS reset and styles
- Initial HTML shell

**Chunk 2: Layout and Components**
- Page layout system
- Navigation and mobile menu
- All UI components (cards, buttons, modals)
- Animation definitions

**Chunk 3: JavaScript Functionality and Complete HTML**
- Data structures
- Utility functions
- Main application logic
- Complete HTML sections

**Chunk 4: Testing and Deployment**
- Manual testing checklist
- Performance testing
- GitHub Pages deployment
- Final verification

Each task includes exact file paths, complete code, specific commands, and verification steps.
