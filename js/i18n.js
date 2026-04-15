const i18n = {
  currentLang: localStorage.getItem('lang') || 'zh',
  
  translations: {
    zh: {
      nav: {
        projects: '项目',
        about: '关于'
      },
      hero: {
        skipLink: '跳到主要内容',
        title: 'AFunc-OPC',
        subtitle: 'vibe-coding projects showcase',
        description: '探索我们的开源项目集合，vibe-coding支撑每一个有想法的产品，自此人人皆是自己的产品经理。',
        exploreProjects: '探索项目',
        learnMore: '了解更多',
        scrollDown: '向下滚动'
      },
      projects: {
        title: 'Featured Projects',
        subtitle: '探索我们的开源项目',
        searchPlaceholder: '搜索项目...',
        searchLabel: '搜索项目',
        clearSearch: '清除',
        all: '全部'
      },
      about: {
        title: '关于 AFunc-OPC',
        vision: '我们的愿景',
        visionText: 'AI降低技术门槛，让每个人都能实现自己心中的产品，我们只做自己想做的产品。我们相信代码的力量，致力于打造能够真正解决问题的产品。',
        techPhilosophy: '技术理念',
        techValues: ['没有技术，只做产品']
      },
      project: {
        stars: 'stars',
        forks: 'forks',
        demo: '在线演示',
        docs: '文档',
        screenshot: '截图',
        screenshots: '截图预览',
        status: {
          active: '活跃',
          archived: '已归档',
          developing: '开发中'
        }
      },
      empty: {
        title: '没有找到相关项目',
        text: '尝试其他关键词或清除筛选条件',
        clearFilters: '清除筛选'
      },
      modal: {
        close: '关闭'
      },
      backToTop: '返回顶部',
      menuLabel: '打开菜单',
      copyright: '© 2026 AFunc-OPC. All rights reserved.',
      timeAgo: {
        days: '天前',
        weeks: '周前',
        months: '个月前',
        years: '年前'
      }
    },
    en: {
      nav: {
        projects: 'Projects',
        about: 'About'
      },
      hero: {
        skipLink: 'Skip to main content',
        title: 'AFunc-OPC',
        subtitle: 'vibe-coding projects showcase',
        description: 'Explore our open source project collection. Vibe-coding empowers every idea, making everyone their own product manager.',
        exploreProjects: 'Explore Projects',
        learnMore: 'Learn More',
        scrollDown: 'Scroll Down'
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Explore our open source projects',
        searchPlaceholder: 'Search projects...',
        searchLabel: 'Search projects',
        clearSearch: 'Clear',
        all: 'All'
      },
      about: {
        title: 'About AFunc-OPC',
        vision: 'Our Vision',
        visionText: 'AI lowers the technical barrier, enabling everyone to realize their product ideas. We only build products we want to build. We believe in the power of code and are dedicated to creating products that truly solve problems.',
        techPhilosophy: 'Technical Philosophy',
        techValues: ['No tech, just products']
      },
      project: {
        stars: 'stars',
        forks: 'forks',
        demo: 'Live Demo',
        docs: 'Documentation',
        screenshot: 'screenshot',
        screenshots: 'Screenshots',
        status: {
          active: 'Active',
          archived: 'Archived',
          developing: 'In Development'
        }
      },
      empty: {
        title: 'No projects found',
        text: 'Try different keywords or clear filters',
        clearFilters: 'Clear Filters'
      },
      modal: {
        close: 'Close'
      },
      backToTop: 'Back to top',
      menuLabel: 'Open menu',
      copyright: '© 2026 AFunc-OPC. All rights reserved.',
      timeAgo: {
        days: 'days ago',
        weeks: 'weeks ago',
        months: 'months ago',
        years: 'years ago'
      }
    }
  },

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.updatePageContent();
  },

  toggleLang() {
    const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
    this.setLang(newLang);
  },

  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });

    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

    if (typeof App !== 'undefined' && App.render) {
      App.render();
    }
  },

  init() {
    this.updatePageContent();
  }
};
