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
