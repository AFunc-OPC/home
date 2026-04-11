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
    <!-- Sections will be added in Chunk 3 -->
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

```css
/* ========== Navigation ========== */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
  background: transparent;
  transition: background var(--duration-normal) var(--ease-smooth),
              backdrop-filter var(--duration-normal) var(--ease-smooth);
}

.navbar--scrolled {
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.navbar__logo {
  font-size: var(--text-2xl);
}

.navbar__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__menu {
  display: none;
  align-items: center;
  gap: var(--space-xl);
  list-style: none;
}

@media (min-width: 1025px) {
  .navbar__menu {
    display: flex;
  }
}

.navbar__link {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  transition: color var(--duration-fast) var(--ease-smooth);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--duration-fast) var(--ease-smooth);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-text-primary);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 100%;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.navbar__search {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-smooth),
              color var(--duration-fast) var(--ease-smooth);
}

.navbar__search:hover {
  background: var(--color-surface);
  color: var(--color-text-primary);
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-smooth);
}

.navbar__hamburger:hover {
  background: var(--color-surface);
}

.navbar__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: transform var(--duration-fast) var(--ease-smooth),
              opacity var(--duration-fast) var(--ease-smooth);
}

.navbar__hamburger--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger--active span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (min-width: 1025px) {
  .navbar__hamburger {
    display: none;
  }
}

/* ========== Mobile Menu ========== */

.mobile-menu {
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-modal-backdrop);
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  padding: var(--space-xl);
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.mobile-menu--active {
  transform: translateX(0);
}

.mobile-menu__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  list-style: none;
}

.mobile-menu__link {
  display: block;
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  transition: background var(--duration-fast) var(--ease-smooth),
              color var(--duration-fast) var(--ease-smooth);
}

.mobile-menu__link:hover,
.mobile-menu__link--active {
  background: var(--color-surface);
  color: var(--color-text-primary);
}

/* ========== Buttons ========== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-smooth);
  cursor: pointer;
  text-decoration: none;
}

.btn--primary {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  border: none;
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background: var(--glass-background);
  color: var(--color-text-primary);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-blur);
}

.btn--secondary:hover {
  background: var(--glass-background-hover);
  transform: translateY(-2px);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn--ghost:hover {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border-color: var(--glass-border);
}

.btn--large {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-lg);
}

.btn--disabled,
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* ========== Project Card ========== */

.project-card {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  backdrop-filter: var(--glass-blur);
  transition: transform var(--duration-normal) var(--ease-smooth),
              box-shadow var(--duration-normal) var(--ease-smooth);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.project-card--featured {
  grid-row: span 2;
}

.project-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.project-card__icon {
  font-size: var(--text-3xl);
}

.project-card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.project-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: var(--leading-relaxed);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.project-card__stats {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-md);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.project-card__actions {
  display: flex;
  gap: var(--space-sm);
}

.project-card__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--text-xs);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  background: var(--color-surface);
}

.project-card__status--active {
  color: var(--color-success);
}

.project-card__status--archived {
  color: var(--color-warning);
}

.project-card__status--developing {
  color: var(--color-info);
}

/* ========== Tags ========== */

.tag {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  background: var(--color-surface);
  color: var(--color-text-secondary);
  transition: background var(--duration-fast) var(--ease-smooth);
}

.tag:hover {
  background: var(--color-surface-hover);
  color: var(--color-text-primary);
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-full);
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.filter-tag:hover {
  background: var(--color-surface);
  color: var(--color-text-primary);
}

.filter-tag--active {
  background: var(--gradient-primary);
  border-color: transparent;
  color: var(--color-text-primary);
}

/* ========== Search Box ========== */

.search-box {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.search-box__input {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  padding-right: var(--space-2xl);
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  backdrop-filter: var(--glass-blur);
  transition: border-color var(--duration-fast) var(--ease-smooth);
}

.search-box__input:focus {
  border-color: var(--color-accent-blue);
}

.search-box__clear {
  position: absolute;
  right: var(--space-sm);
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  transition: color var(--duration-fast) var(--ease-smooth);
  opacity: 0;
  visibility: hidden;
}

.search-box__clear:hover {
  color: var(--color-text-primary);
}

.search-box__clear--visible {
  opacity: 1;
  visibility: visible;
}

/* ========== Article Card ========== */

.article-card {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  backdrop-filter: var(--glass-blur);
  transition: transform var(--duration-normal) var(--ease-smooth),
              box-shadow var(--duration-normal) var(--ease-smooth);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.article-card__image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.article-card__content {
  padding: var(--space-lg);
}

.article-card__category {
  display: inline-block;
  font-size: var(--text-xs);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.article-card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.article-card__excerpt {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: var(--leading-relaxed);
}

.article-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.article-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.article-card__author-avatar {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  object-fit: cover;
}

/* ========== Stat Card ========== */

.stat-card {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  text-align: center;
  backdrop-filter: var(--glass-blur);
}

.stat-card--large {
  grid-column: span 2;
}

@media (max-width: 767px) {
  .stat-card--large {
    grid-column: span 1;
  }
}

.stat-card__icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-sm);
}

.stat-card__number {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-xs);
}

.stat-card__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

/* ========== Team Card ========== */

.team-card {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  text-align: center;
  backdrop-filter: var(--glass-blur);
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.team-card:hover {
  transform: translateY(-2px);
}

.team-card__avatar {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  margin: 0 auto var(--space-sm);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
}

.team-card__name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.team-card__role {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

/* ========== Chart Card ========== */

.chart-card {
  background: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  backdrop-filter: var(--glass-blur);
}

.chart-card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.chart-card__body {
  min-height: 200px;
}

/* ========== Modal ========== */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-modal-backdrop);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-lg);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-normal) var(--ease-smooth),
              visibility var(--duration-normal) var(--ease-smooth);
}

.modal-overlay--active {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  background: var(--color-background);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transform: scale(0.95);
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.modal-overlay--active .modal {
  transform: scale(1);
}

.modal__close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  background: var(--color-surface);
  transition: background var(--duration-fast) var(--ease-smooth),
              color var(--duration-fast) var(--ease-smooth);
  z-index: 1;
}

.modal__close:hover {
  background: var(--color-surface-hover);
  color: var(--color-text-primary);
}

.modal__content {
  padding: var(--space-xl);
  overflow-y: auto;
  max-height: 90vh;
}

/* ========== Empty State ========== */

.empty-state {
  text-align: center;
  padding: var(--space-3xl);
}

.empty-state__icon {
  font-size: 4rem;
  margin-bottom: var(--space-lg);
  opacity: 0.5;
}

.empty-state__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.empty-state__text {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

/* ========== Project Detail ========== */

.project-detail__header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.project-detail__icon {
  font-size: var(--text-4xl);
}

.project-detail__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
}

.project-detail__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.project-detail__description {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-lg);
}

.project-detail__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.project-detail__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.project-detail__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: var(--space-lg);
}

.project-detail__image img {
  width: 100%;
  height: auto;
}

/* ========== Back to Top Button ========== */

.back-to-top {
  position: fixed;
  bottom: var(--space-xl);
  right: var(--space-xl);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: opacity var(--duration-normal) var(--ease-smooth),
              visibility var(--duration-normal) var(--ease-smooth),
              transform var(--duration-normal) var(--ease-smooth);
  z-index: var(--z-sticky);
}

.back-to-top--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* ========== Filter Bar ========== */

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

/* ========== Load More Button ========== */

.load-more {
  display: block;
  margin: var(--space-xl) auto 0;
}
```

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

```javascript
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
```

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

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) {
    return `${diffDays} 天前`;
  } else if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} 周前`;
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} 个月前`;
  } else {
    return `${Math.floor(diffDays / 365)} 年前`;
  }
}

function getStatusLabel(status) {
  const labels = {
    active: '活跃',
    archived: '已归档',
    developing: '开发中'
  };
  return labels[status] || status;
}

function getCategoryLabel(category) {
  const labels = {
    tutorial: '教程',
    insight: '洞察'
  };
  return labels[category] || category;
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function createElement(tag, className, innerHTML) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}

function renderProjectCard(project) {
  const statusClass = `project-card__status--${project.status}`;
  const featuredClass = project.featured ? 'project-card--featured' : '';
  
  return `
    <article class="project-card ${featuredClass} fade-in-up" data-id="${project.id}">
      <div class="project-card__header">
        <span class="project-card__icon">${project.icon}</span>
        <h3 class="project-card__title">${project.name}</h3>
      </div>
      <p class="project-card__description">${project.description}</p>
      <div class="project-card__tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-card__stats">
        <span>⭐ ${formatNumber(project.stars)}</span>
        <span>🍴 ${formatNumber(project.forks)}</span>
        <span class="project-card__status ${statusClass}">● ${getStatusLabel(project.status)}</span>
      </div>
    </article>
  `;
}

function renderArticleCard(article) {
  return `
    <article class="article-card fade-in-up">
      <img src="${article.coverImage}" alt="${article.title}" class="article-card__image" loading="lazy">
      <div class="article-card__content">
        <span class="article-card__category">${getCategoryLabel(article.category)}</span>
        <h3 class="article-card__title">${article.title}</h3>
        <p class="article-card__excerpt">${article.excerpt}</p>
        <div class="article-card__meta">
          <span class="article-card__author">
            <span>${article.authorAvatar}</span>
            ${article.author}
          </span>
          <span>${formatDate(article.publishedAt)}</span>
          <span>${article.readTime} min read</span>
        </div>
      </div>
    </article>
  `;
}

function renderTeamCard(member) {
  return `
    <div class="team-card">
      <div class="team-card__avatar">${member.avatar}</div>
      <h4 class="team-card__name">${member.name}</h4>
      <p class="team-card__role">${member.role}</p>
    </div>
  `;
}

function renderStatCard(stat, icon, label, isLarge = false) {
  const largeClass = isLarge ? 'stat-card--large' : '';
  return `
    <div class="stat-card ${largeClass} fade-in-up">
      <div class="stat-card__icon">${icon}</div>
      <div class="stat-card__number">${formatNumber(stat)}</div>
      <div class="stat-card__label">${label}</div>
    </div>
  `;
}

function renderFilterTags(tags, activeTag) {
  return tags.map(tag => {
    const activeClass = tag.id === activeTag ? 'filter-tag--active' : '';
    const dataAttr = tag.id === 'all' ? 'data-tag="all"' : `data-tag="${tag.id}"`;
    return `<button class="filter-tag ${activeClass}" ${dataAttr} aria-pressed="${tag.id === activeTag}">${tag.label}</button>`;
  }).join('');
}

function renderProjectDetail(project) {
  return `
    <div class="project-detail">
      <div class="project-detail__header">
        <span class="project-detail__icon">${project.icon}</span>
        <h2 class="project-detail__title">${project.name}</h2>
      </div>
      <div class="project-detail__stats">
        <span>⭐ ${formatNumber(project.stars)} stars</span>
        <span>🍴 ${formatNumber(project.forks)} forks</span>
        <span>● ${getStatusLabel(project.status)}</span>
      </div>
      <p class="project-detail__description">${project.longDescription}</p>
      <div class="project-detail__tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-detail__links">
        <a href="${project.links.github}" class="btn btn--primary" target="_blank" rel="noopener">GitHub</a>
        ${project.links.demo ? `<a href="${project.links.demo}" class="btn btn--secondary" target="_blank" rel="noopener">在线演示</a>` : ''}
        ${project.links.docs ? `<a href="${project.links.docs}" class="btn btn--ghost" target="_blank" rel="noopener">文档</a>` : ''}
      </div>
      ${project.image ? `
        <div class="project-detail__image">
          <img src="${project.image}" alt="${project.name} 截图" loading="lazy">
        </div>
      ` : ''}
    </div>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <div class="empty-state__icon">🔍</div>
      <h3 class="empty-state__title">没有找到相关项目</h3>
      <p class="empty-state__text">尝试其他关键词或清除筛选条件</p>
      <button class="btn btn--primary clear-filters">清除筛选</button>
    </div>
  `;
}

function renderTechDistribution(techDistribution) {
  const maxCount = Math.max(...techDistribution.map(t => t.count));
  return `
    <div class="chart-card">
      <h3 class="chart-card__title">技术栈分布</h3>
      <div class="chart-card__body">
        ${techDistribution.map(tech => `
          <div style="margin-bottom: var(--space-sm);">
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-xs);">
              <span style="color: var(--color-text-secondary); font-size: var(--text-sm);">${tech.name}</span>
              <span style="color: var(--color-text-muted); font-size: var(--text-sm);">${tech.count} 项目</span>
            </div>
            <div style="height: 8px; background: var(--color-surface); border-radius: var(--radius-full); overflow: hidden;">
              <div style="width: ${(tech.count / maxCount) * 100}%; height: 100%; background: var(--gradient-primary); border-radius: var(--radius-full);"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderRecentUpdates(updates) {
  return `
    <div class="chart-card">
      <h3 class="chart-card__title">最近更新</h3>
      <div class="chart-card__body">
        ${updates.map(update => `
          <div style="display: flex; align-items: flex-start; gap: var(--space-md); padding: var(--space-md) 0; border-bottom: 1px solid var(--glass-border);">
            <span style="font-size: var(--text-lg);">${update.type === 'release' ? '🚀' : '📝'}</span>
            <div style="flex: 1;">
              <div style="font-weight: var(--font-medium); color: var(--color-text-primary); margin-bottom: var(--space-xs);">${update.projectName}</div>
              <div style="font-size: var(--text-sm); color: var(--color-text-secondary);">${update.message}</div>
              <div style="font-size: var(--text-xs); color: var(--color-text-muted); margin-top: var(--space-xs);">${formatDate(update.date)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
```

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

```javascript
const App = {
  elements: {},
  state: {
    selectedTags: new Set(['all']),
    searchQuery: '',
    currentSection: 'hero',
    isModalOpen: false,
    isMobileMenuOpen: false
  },

  init() {
    this.cacheElements();
    this.initNavigation();
    this.initMobileMenu();
    this.initFilters();
    this.initSearch();
    this.initModals();
    this.initScrollAnimations();
    this.initBackToTop();
    this.render();
  },

  cacheElements() {
    this.elements = {
      navbar: $('.navbar'),
      navbarLinks: $$('.navbar__link'),
      hamburger: $('.navbar__hamburger'),
      mobileMenu: $('.mobile-menu'),
      mobileMenuLinks: $$('.mobile-menu__link'),
      searchInput: $('.search-box__input'),
      searchClear: $('.search-box__clear'),
      filterBar: $('.filter-bar'),
      projectsGrid: $('.projects__grid'),
      projectsEmpty: $('.projects__empty'),
      blogFilters: $('.blog__filters'),
      blogGrid: $('.blog__grid'),
      teamGrid: $('.team-grid'),
      statsGrid: $('.stats__grid'),
      statsCharts: $('.stats__charts'),
      modalOverlay: $('.modal-overlay'),
      modal: $('.modal'),
      modalContent: $('.modal__content'),
      modalClose: $('.modal__close'),
      backToTop: $('.back-to-top'),
      sections: $$('section[id]')
    };
  },

  initNavigation() {
    this.setupSmoothScroll();
    this.setupScrollSpy();
    this.setupNavbarScroll();
  },

  setupSmoothScroll() {
    [...this.elements.navbarLinks, ...this.elements.mobileMenuLinks].forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const sectionId = href.substring(1);
        this.scrollToSection(sectionId);
        if (this.state.isMobileMenuOpen) {
          this.closeMobileMenu();
        }
      });
    });
  },

  scrollToSection(sectionId) {
    const section = $(`#${sectionId}`);
    if (section) {
      const navbarHeight = this.elements.navbar.offsetHeight;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      history.pushState(null, null, `#${sectionId}`);
    }
  },

  setupScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.updateActiveNavLink(entry.target.id);
        }
      });
    }, observerOptions);

    this.elements.sections.forEach(section => observer.observe(section));
  },

  updateActiveNavLink(sectionId) {
    this.state.currentSection = sectionId;
    
    this.elements.navbarLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('navbar__link--active', href === sectionId);
    });

    this.elements.mobileMenuLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('mobile-menu__link--active', href === sectionId);
    });
  },

  setupNavbarScroll() {
    const handleScroll = throttle(() => {
      const scrolled = window.scrollY > 50;
      this.elements.navbar.classList.toggle('navbar--scrolled', scrolled);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
  },

  initMobileMenu() {
    this.elements.hamburger.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    this.elements.mobileMenu.addEventListener('click', (e) => {
      if (e.target === this.elements.mobileMenu) {
        this.closeMobileMenu();
      }
    });
  },

  toggleMobileMenu() {
    this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
    this.elements.hamburger.classList.toggle('navbar__hamburger--active', this.state.isMobileMenuOpen);
    this.elements.mobileMenu.classList.toggle('mobile-menu--active', this.state.isMobileMenuOpen);
    this.elements.hamburger.setAttribute('aria-expanded', this.state.isMobileMenuOpen);
    this.elements.mobileMenu.setAttribute('aria-hidden', !this.state.isMobileMenuOpen);
    
    if (this.state.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },

  closeMobileMenu() {
    this.state.isMobileMenuOpen = false;
    this.elements.hamburger.classList.remove('navbar__hamburger--active');
    this.elements.mobileMenu.classList.remove('mobile-menu--active');
    this.elements.hamburger.setAttribute('aria-expanded', 'false');
    this.elements.mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  initFilters() {
    this.renderFilterBar();
    this.setupFilterListeners();
  },

  renderFilterBar() {
    if (this.elements.filterBar) {
      this.elements.filterBar.innerHTML = renderFilterTags(filterTags, 'all');
    }
    if (this.elements.blogFilters) {
      this.elements.blogFilters.innerHTML = renderFilterTags(categories, 'all');
    }
  },

  setupFilterListeners() {
    if (this.elements.filterBar) {
      this.elements.filterBar.addEventListener('click', (e) => {
        this.handleFilterClick(e);
      });
    }

    if (this.elements.blogFilters) {
      this.elements.blogFilters.addEventListener('click', (e) => {
        this.handleBlogFilterClick(e);
      });
    }
  },

  handleFilterClick(e) {
    const tag = e.target.closest('.filter-tag');
    if (!tag) return;

    const tagValue = tag.dataset.tag;

    if (tagValue === 'all') {
      this.state.selectedTags.clear();
      this.state.selectedTags.add('all');
    } else {
      this.state.selectedTags.delete('all');
      if (this.state.selectedTags.has(tagValue)) {
        this.state.selectedTags.delete(tagValue);
      } else {
        this.state.selectedTags.add(tagValue);
      }
      if (this.state.selectedTags.size === 0) {
        this.state.selectedTags.add('all');
      }
    }

    this.updateFilterUI(this.elements.filterBar, this.state.selectedTags);
    this.filterProjects();
  },

  handleBlogFilterClick(e) {
    const tag = e.target.closest('.filter-tag');
    if (!tag) return;

    const category = tag.dataset.tag;
    this.updateFilterUI(this.elements.blogFilters, new Set([category]));
    this.filterArticles(category);
  },

  updateFilterUI(container, selectedTags) {
    container.querySelectorAll('.filter-tag').forEach(tag => {
      const isActive = selectedTags.has(tag.dataset.tag);
      tag.classList.toggle('filter-tag--active', isActive);
      tag.setAttribute('aria-pressed', isActive);
    });
  },

  filterProjects() {
    const filtered = projects.filter(project => {
      const tagMatch = this.state.selectedTags.has('all') ||
        project.tags.some(tag => this.state.selectedTags.has(tag));

      const searchMatch = !this.state.searchQuery ||
        project.name.toLowerCase().includes(this.state.searchQuery) ||
        project.description.toLowerCase().includes(this.state.searchQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(this.state.searchQuery));

      return tagMatch && searchMatch;
    });

    this.renderProjects(filtered);
  },

  filterArticles(category) {
    const filtered = category === 'all' 
      ? articles 
      : articles.filter(article => article.category === category);
    this.renderArticles(filtered);
  },

  initSearch() {
    if (!this.elements.searchInput) return;

    const debouncedSearch = debounce(() => {
      this.state.searchQuery = this.elements.searchInput.value.toLowerCase().trim();
      this.updateSearchClearButton();
      this.filterProjects();
    }, 300);

    this.elements.searchInput.addEventListener('input', debouncedSearch);

    if (this.elements.searchClear) {
      this.elements.searchClear.addEventListener('click', () => {
        this.clearSearch();
      });
    }
  },

  updateSearchClearButton() {
    if (!this.elements.searchClear) return;
    const hasValue = this.elements.searchInput.value.length > 0;
    this.elements.searchClear.classList.toggle('search-box__clear--visible', hasValue);
  },

  clearSearch() {
    this.elements.searchInput.value = '';
    this.state.searchQuery = '';
    this.updateSearchClearButton();
    this.filterProjects();
  },

  render() {
    this.renderProjects(projects);
    this.renderArticles(articles);
    this.renderTeam();
    this.renderStats();
  },

  renderProjects(projectList) {
    if (!this.elements.projectsGrid) return;

    if (projectList.length === 0) {
      this.elements.projectsGrid.innerHTML = '';
      this.elements.projectsEmpty.hidden = false;
      this.elements.projectsEmpty.innerHTML = renderEmptyState();
      
      const clearBtn = this.elements.projectsEmpty.querySelector('.clear-filters');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          this.state.selectedTags.clear();
          this.state.selectedTags.add('all');
          this.state.searchQuery = '';
          this.elements.searchInput.value = '';
          this.updateSearchClearButton();
          this.updateFilterUI(this.elements.filterBar, this.state.selectedTags);
          this.filterProjects();
        });
      }
    } else {
      this.elements.projectsEmpty.hidden = true;
      this.elements.projectsGrid.innerHTML = projectList.map(renderProjectCard).join('');
      this.setupProjectCardListeners();
      this.initScrollAnimations();
    }
  },

  renderArticles(articleList) {
    if (!this.elements.blogGrid) return;
    this.elements.blogGrid.innerHTML = articleList.map(renderArticleCard).join('');
    this.initScrollAnimations();
  },

  renderTeam() {
    if (!this.elements.teamGrid) return;
    this.elements.teamGrid.innerHTML = team.map(renderTeamCard).join('');
  },

  renderStats() {
    if (!this.elements.statsGrid) return;
    this.elements.statsGrid.innerHTML = `
      ${renderStatCard(stats.totalProjects, '📦', '总项目数', true)}
      ${renderStatCard(stats.totalStars, '⭐', '总星标')}
      ${renderStatCard(stats.totalForks, '🍴', '总 Forks')}
      ${renderStatCard(stats.techStackCount, '💻', '技术栈')}
    `;

    if (this.elements.statsCharts) {
      this.elements.statsCharts.innerHTML = `
        ${renderTechDistribution(stats.techDistribution)}
        ${renderRecentUpdates(stats.recentUpdates)}
      `;
    }
  },

  initModals() {
    this.setupModalListeners();
    this.setupProjectCardListeners();
  },

  setupModalListeners() {
    this.elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.elements.modalOverlay) {
        this.closeModal();
      }
    });

    this.elements.modalClose.addEventListener('click', () => {
      this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.isModalOpen) {
        this.closeModal();
      }
    });
  },

  setupProjectCardListeners() {
    this.elements.projectsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        this.openProjectModal(card.dataset.id);
      }
    });
  },

  openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    this.elements.modalContent.innerHTML = renderProjectDetail(project);
    this.elements.modalOverlay.classList.add('modal-overlay--active');
    this.elements.modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.state.isModalOpen = true;

    this.trapFocus(this.elements.modal);
    this.elements.modalClose.focus();
  },

  closeModal() {
    this.elements.modalOverlay.classList.remove('modal-overlay--active');
    this.elements.modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.state.isModalOpen = false;
  },

  trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    modal.addEventListener('keydown', handleTabKey);
  },

  initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    $$('.fade-in-up, .fade-in-scale, .stagger').forEach(el => {
      observer.observe(el);
    });
  },

  initBackToTop() {
    if (!this.elements.backToTop) return;

    const handleScroll = throttle(() => {
      const showButton = window.scrollY > 500;
      this.elements.backToTop.classList.toggle('back-to-top--visible', showButton);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    this.elements.backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
```

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

Replace the `<main id="main-content" role="main">` section with:

```html
  <!-- Main Content -->
  <main id="main-content" role="main">
    <!-- Hero Section -->
    <section id="hero" class="hero" aria-labelledby="hero-title">
      <div class="hero__background"></div>
      <div class="hero__content">
        <div class="hero__logo">🚀</div>
        <h1 id="hero-title" class="hero__title">AFunc-OPC</h1>
        <p class="hero__subtitle text-gradient">vibe-coding projects showcase</p>
        <p class="hero__description">
          探索我们的开源项目集合，每一行代码都承载着对技术的热爱与创新精神。
          从工具库到组件框架，我们用代码构建未来。
        </p>
        <div class="hero__cta">
          <a href="#projects" class="btn btn--primary btn--large">探索项目</a>
          <a href="#about" class="btn btn--ghost btn--large">了解更多</a>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <span>向下滚动</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects" aria-labelledby="projects-title">
      <div class="container">
        <h2 id="projects-title" class="section__title">Featured Projects</h2>
        <p class="section__subtitle">探索我们的开源项目</p>
        
        <div class="projects__toolbar">
          <div class="filter-bar"></div>
          <div class="search-box">
            <input 
              type="text" 
              class="search-box__input" 
              placeholder="搜索项目..."
              aria-label="搜索项目"
            >
            <button class="search-box__clear" aria-label="清除">×</button>
          </div>
        </div>
        
        <div class="projects__grid"></div>
        <div class="projects__empty" hidden></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about" aria-labelledby="about-title">
      <div class="container">
        <h2 id="about-title" class="section__title">关于 AFunc-OPC</h2>
        
        <div class="about__content">
          <div class="about__left">
            <div class="about__team-photo">
              <span>🚀 AFunc-OPC Team</span>
            </div>
            
            <div class="about__stats">
              <div class="stat-card fade-in-up">
                <div class="stat-card__number">20+</div>
                <div class="stat-card__label">开源项目</div>
              </div>
              <div class="stat-card fade-in-up">
                <div class="stat-card__number">15K+</div>
                <div class="stat-card__label">GitHub Stars</div>
              </div>
            </div>
          </div>
          
          <div class="about__right">
            <div>
              <h3 class="about__subtitle">我们的愿景</h3>
              <p class="about__text">
                通过开源项目推动技术创新，为开发者社区提供高质量、易用的工具和框架。
                我们相信代码的力量，致力于打造能够真正解决问题的产品。
              </p>
            </div>
            
            <div>
              <h3 class="about__subtitle">技术理念</h3>
              <ul class="about__values">
                <li>开源精神 - 所有核心项目完全开源</li>
                <li>技术驱动 - 追求代码质量和最佳实践</li>
                <li>持续创新 - 不断探索新技术和解决方案</li>
                <li>社区优先 - 重视用户反馈和社区贡献</li>
              </ul>
            </div>
            
            <div>
              <h3 class="about__subtitle">核心团队</h3>
              <div class="team-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="section blog" aria-labelledby="blog-title">
      <div class="container">
        <h2 id="blog-title" class="section__title">Latest Articles</h2>
        <p class="section__subtitle">技术见解与教程分享</p>
        
        <div class="blog__filters"></div>
        
        <div class="blog__grid"></div>
        
        <div class="text-center">
          <button class="btn btn--secondary">查看全部文章</button>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="section stats" aria-labelledby="stats-title">
      <div class="container">
        <h2 id="stats-title" class="section__title">数据看板</h2>
        <p class="section__subtitle">项目统计与动态</p>
        
        <div class="stats__grid"></div>
        
        <div class="stats__charts"></div>
      </div>
    </section>
  </main>
```

Also add the back-to-top button before `</body>`:

```html
  <!-- Back to Top Button -->
  <button class="back-to-top" aria-label="返回顶部">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
```

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
