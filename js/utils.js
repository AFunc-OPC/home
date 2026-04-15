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
    return `${diffDays} ${i18n.t('timeAgo.days')}`;
  } else if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} ${i18n.t('timeAgo.weeks')}`;
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} ${i18n.t('timeAgo.months')}`;
  } else {
    return `${Math.floor(diffDays / 365)} ${i18n.t('timeAgo.years')}`;
  }
}

function getStatusLabel(status) {
  return i18n.t(`project.status.${status}`);
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
  const description = typeof project.description === 'object' ? project.description[i18n.currentLang] : project.description;
  
  return `
    <article class="project-card ${featuredClass} fade-in-up" data-id="${project.id}">
      <div class="project-card__header">
        <span class="project-card__icon">${project.icon}</span>
        <h3 class="project-card__title">${project.name}</h3>
      </div>
      <p class="project-card__description">${description}</p>
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

function renderTeamCard(member) {
  const role = typeof member.role === 'object' ? member.role[i18n.currentLang] : member.role;
  
  return `
    <div class="team-card">
      <div class="team-card__avatar">${member.avatar}</div>
      <h4 class="team-card__name">${member.name}</h4>
      <p class="team-card__role">${role}</p>
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
  const longDescription = typeof project.longDescription === 'object' ? project.longDescription[i18n.currentLang] : project.longDescription;
  
  let screenshotsHtml = '';
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHtml = `
      <div class="screenshots">
        <h3 class="screenshots__title">${i18n.t('project.screenshots')}</h3>
        <div class="screenshots__grid">
          ${project.screenshots.map((shot, index) => {
            const alt = typeof shot.alt === 'object' ? shot.alt[i18n.currentLang] : (shot.alt || '');
            return `
              <div class="screenshot-item" data-screenshot-index="${index}">
                <img src="${shot.src}" alt="${alt}" loading="lazy">
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  return `
    <div class="project-detail">
      <div class="project-detail__header">
        <span class="project-detail__icon">${project.icon}</span>
        <h2 class="project-detail__title">${project.name}</h2>
      </div>
      <div class="project-detail__stats">
        <span>⭐ ${formatNumber(project.stars)} ${i18n.t('project.stars')}</span>
        <span>🍴 ${formatNumber(project.forks)} ${i18n.t('project.forks')}</span>
        <span>● ${getStatusLabel(project.status)}</span>
      </div>
      <p class="project-detail__description">${longDescription}</p>
      <div class="project-detail__tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-detail__links">
        <a href="${project.links.github}" class="btn btn--primary" target="_blank" rel="noopener">GitHub</a>
        ${project.links.gitee ? `<a href="${project.links.gitee}" class="btn btn--secondary" target="_blank" rel="noopener">Gitee</a>` : ''}
      </div>
      ${screenshotsHtml}
      ${project.image ? `
        <div class="project-detail__image">
          <img src="${project.image}" alt="${project.name} ${i18n.t('project.screenshot')}" loading="lazy">
        </div>
      ` : ''}
    </div>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <div class="empty-state__icon">🔍</div>
      <h3 class="empty-state__title">${i18n.t('empty.title')}</h3>
      <p class="empty-state__text">${i18n.t('empty.text')}</p>
      <button class="btn btn--primary clear-filters">${i18n.t('empty.clearFilters')}</button>
    </div>
  `;
}
