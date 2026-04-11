## Chunk 4: 测试与部署

### Task 7: 本地测试和验证

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 验证HTML结构完整性**

运行：在浏览器中打开 `index.html`
预期：页面正常加载，无JavaScript错误

- [ ] **Step 2: 验证CSS加载**

检查：浏览器开发者工具 → Network标签
预期：所有CSS文件成功加载（variables.css, base.css, layout.css, components.css, animations.css）

- [ ] **Step 3: 验证JavaScript功能**

测试项：
- 导航栏滚动背景变化
- 导航链接平滑滚动
- 项目筛选功能
- 搜索功能
- 模态框打开/关闭
- 返回顶部按钮
- 统计数字动画

预期：所有功能正常工作

- [ ] **Step 4: 响应式测试**

测试断点：
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

预期：布局正确适配，汉堡菜单正常工作

- [ ] **Step 5: 无障碍测试**

测试项：
- Tab键导航
- 屏幕阅读器兼容性
- 对比度检查
- 键盘操作

预期：符合WCAG AA标准

### Task 8: 性能优化

**Files:**
- Modify: `index.html`
- Modify: `css/*.css`
- Modify: `js/*.js`

- [ ] **Step 1: 优化图片加载**

在 `index.html` 中添加懒加载：

```html
<!-- 确保所有图片都有 loading="lazy" -->
<img src="..." loading="lazy" alt="...">
```

- [ ] **Step 2: 添加关键CSS内联（可选）**

在 `index.html` 的 `<head>` 中添加：

```html
<style>
  /* 关键CSS：首屏渲染所需的最小样式 */
  :root {
    --color-background: #0f0f23;
    --color-text-primary: #ffffff;
  }
  body {
    margin: 0;
    background: var(--color-background);
    color: var(--color-text-primary);
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
```

- [ ] **Step 3: 压缩CSS和JS（可选）**

使用在线工具压缩：
- CSS: https://cssnano.co/playground/
- JS: https://javascript-minifier.com/

或使用命令行工具：

```bash
# 安装工具
npm install -g csso-cli uglify-js

# 压缩CSS
csso css/variables.css -o css/variables.min.css
csso css/base.css -o css/base.min.css
csso css/layout.css -o css/layout.min.css
csso css/components.css -o css/components.min.css
csso css/animations.css -o css/animations.min.css

# 压缩JS
uglifyjs js/utils.js -o js/utils.min.js -c -m
uglifyjs js/app.js -o js/app.min.js -c -m
```

- [ ] **Step 4: 测试性能**

使用 Lighthouse 测试：
- 打开 Chrome DevTools → Lighthouse
- 选择 Performance, Accessibility, Best Practices, SEO
- 生成报告

目标：
- Performance > 90
- Accessibility > 90
- Best Practices > 90
- SEO > 90

- [ ] **Step 5: 提交优化代码**

```bash
git add .
git commit -m "perf: optimize loading and performance

- Add lazy loading to images
- Inline critical CSS
- Minify CSS and JS files
- Improve performance scores"
```

### Task 9: 创建 README 和部署准备

**Files:**
- Create: `README.md`
- Create: `.gitignore`
- Create: `404.html`

- [ ] **Step 1: 创建 README.md**

```markdown
# AFunc-OPC 官网

> vibe-coding projects showcase

## 简介

AFunc-OPC 是一个展示 vibe-coding 开源项目的企业级官网，采用创意实验性视觉风格，展示团队的技术实力和项目成果。

## 特性

- 🎨 **创意实验性设计** - 液态渐变流动风格，玻璃态效果
- 📱 **完全响应式** - 适配桌面、平板、移动端
- ⚡ **高性能** - 纯静态部署，快速加载
- ♿ **无障碍支持** - 符合 WCAG AA 标准
- 🔍 **智能筛选** - 标签筛选和实时搜索
- 🎭 **流畅动画** - 滚动触发动画和微交互

## 技术栈

- **HTML5** - 语义化结构
- **CSS3** - CSS Variables, Grid, Flexbox, 动画
- **Vanilla JavaScript** - ES6+, Intersection Observer API

## 项目结构

```
/
├── index.html              # 主页面
├── css/
│   ├── variables.css       # 设计语言变量
│   ├── base.css           # 基础样式
│   ├── layout.css         # 布局系统
│   ├── components.css     # 组件样式
│   └── animations.css     # 动画效果
├── js/
│   ├── data.js            # 数据
│   ├── utils.js           # 工具函数
│   └── app.js             # 主应用逻辑
└── assets/
    ├── images/            # 图片资源
    └── icons/             # SVG图标
```

## 快速开始

### 本地预览

直接在浏览器中打开 `index.html` 文件，或使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server

# 使用 PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`

### 修改数据

编辑 `js/data.js` 文件：

```javascript
const projects = [
  {
    id: "your-project",
    name: "项目名称",
    description: "项目描述",
    icon: "🚀",
    tags: ["react", "typescript"],
    stars: 1000,
    forks: 500,
    status: "active",
    links: {
      github: "https://github.com/...",
      demo: "https://...",
      docs: "https://..."
    },
    image: "https://...",
    featured: false,
    createdAt: "2024-01-01",
    updatedAt: "2024-03-01"
  }
];
```

## 部署

### GitHub Pages

1. 推送代码到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 选择 Source: main branch
4. 访问 `https://username.github.io/repo-name`

### 其他平台

网站为纯静态文件，可部署到任何静态托管平台：
- Vercel
- Netlify
- Firebase Hosting
- 阿里云 OSS
- 腾讯云 COS

## 自定义

### 修改配色

编辑 `css/variables.css` 中的颜色变量：

```css
:root {
  --color-primary-purple: #667eea;
  --color-primary-pink: #764ba2;
  --color-accent-pink: #f093fb;
  --color-accent-blue: #00d4ff;
}
```

### 修改字体

修改 `index.html` 中的 Google Fonts 链接，并更新 `css/variables.css`：

```css
:root {
  --font-display: 'Your-Font', sans-serif;
  --font-body: 'Your-Font', sans-serif;
}
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

## 性能

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 联系方式

- GitHub: https://github.com/afunc-opc
- Email: contact@afunc-opc.com

---

Built with ❤️ by vibe-coding
```

- [ ] **Step 2: 创建 .gitignore**

```
# 依赖
node_modules/
package-lock.json

# 构建输出
dist/
build/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# 日志
*.log
npm-debug.log*

# 临时文件
*.tmp
.cache/

# 压缩文件
*.min.css
*.min.js
```

- [ ] **Step 3: 创建 404.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - 页面未找到 | AFunc-OPC</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0f0f23;
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
    }
    
    h1 {
      font-size: 120px;
      font-weight: 700;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
      line-height: 1;
    }
    
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.9);
    }
    
    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 30px;
      line-height: 1.6;
    }
    
    a {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    a:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <h2>页面未找到</h2>
    <p>抱歉，您访问的页面不存在或已被移动。请检查URL是否正确，或返回首页继续浏览。</p>
    <a href="/">返回首页</a>
  </div>
</body>
</html>
```

- [ ] **Step 4: 提交文档和配置**

```bash
git add README.md .gitignore 404.html
git commit -m "docs: add README and configuration files

- Add comprehensive README with setup instructions
- Create .gitignore for common ignores
- Add custom 404 page"
```

### Task 10: 最终部署

**Files:**
- All files

- [ ] **Step 1: 最终检查清单**

检查项：
- [ ] 所有文件已提交
- [ ] 无 console.log 或调试代码
- [ ] 图片路径正确
- [ ] 链接有效
- [ ] 响应式布局正常
- [ ] 性能指标达标
- [ ] 无障碍功能完整

- [ ] **Step 2: 推送到 GitHub**

```bash
# 查看当前状态
git status

# 添加所有文件
git add .

# 最终提交
git commit -m "feat: complete AFunc-OPC website implementation

- Creative experimental design with liquid gradient style
- Responsive layout for all devices
- Project filtering and search functionality
- Modal system for project/article details
- Scroll-triggered animations
- Accessibility support (WCAG AA)
- Performance optimized (Lighthouse > 90)"

# 推送到 GitHub
git push origin main
```

- [ ] **Step 3: 启用 GitHub Pages**

1. 访问 GitHub 仓库
2. 进入 Settings → Pages
3. Source: Deploy from a branch
4. Branch: main, / (root)
5. Save
6. 等待部署完成（1-2分钟）
7. 访问 `https://username.github.io/afunc-opc`

- [ ] **Step 4: 验证部署**

检查项：
- [ ] 网站可访问
- [ ] 所有资源加载正常
- [ ] 功能正常工作
- [ ] HTTPS 已启用

- [ ] **Step 5: （可选）配置自定义域名**

如需使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件：
```bash
echo "www.afunc-opc.com" > CNAME
```

2. 在域名服务商处配置 DNS：
   - 类型: CNAME
   - 名称: www
   - 值: username.github.io

3. 等待 DNS 生效（可能需要几小时）

4. 提交更改：
```bash
git add CNAME
git commit -m "feat: add custom domain"
git push origin main
```

---

## 完成总结

恭喜！🎉 AFunc-OPC 企业官网已完成开发和部署。

### 已实现功能

✅ 创意实验性视觉设计（液态渐变流动风格）
✅ 完全响应式布局（桌面/平板/移动端）
✅ 项目展示库（卡片展示、筛选、搜索）
✅ 关于我们（团队介绍、愿景使命）
✅ 博客文章系统（分类浏览）
✅ 数据看板（统计展示、技术栈分布）
✅ 单页应用导航（平滑滚动）
✅ 模态框系统（项目/文章详情）
✅ 滚动触发动画
✅ 无障碍支持（WCAG AA）
✅ 性能优化（Lighthouse > 90）
✅ GitHub Pages 部署

### 后续优化建议

- 添加深色/浅色主题切换
- 实现多语言支持
- 集成 GitHub API 动态获取数据
- 添加评论系统
- 实现 RSS 订阅
- 添加更多交互动画

### 文件清单

```
/
├── index.html              ✅ 主页面
├── README.md               ✅ 项目文档
├── .gitignore              ✅ Git 忽略配置
├── 404.html                ✅ 404 页面
├── css/
│   ├── variables.css       ✅ 设计变量
│   ├── base.css            ✅ 基础样式
│   ├── layout.css          ✅ 布局系统
│   ├── components.css      ✅ 组件样式
│   └── animations.css      ✅ 动画效果
├── js/
│   ├── data.js             ✅ 数据定义
│   ├── utils.js            ✅ 工具函数
│   └── app.js              ✅ 主应用逻辑
└── assets/
    ├── images/             📁 图片资源
    └── icons/              📁 图标资源
```

---

**计划完成！** 🚀
