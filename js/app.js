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
