/**
 * Lógica de Filtrado, Búsqueda y Renderizado del Catálogo
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const servicesGrid = document.getElementById('services-grid');
  const resultsCount = document.getElementById('results-count');
  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.getElementById('category-filters');
  const audienceButtons = document.querySelectorAll('.audience-btn');

  // State
  let currentCategory = 'all';
  let currentAudience = 'all';
  let currentSearchQuery = '';

  // Initialize Categories Navigation
  function renderCategories() {
    categoryFilters.innerHTML = '';
    CATEGORIES_DATA.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-pill ${cat.id === currentCategory ? 'active' : ''}`;
      btn.dataset.category = cat.id;
      btn.innerHTML = `
        ${cat.name}
        <span class="filter-pill-count">${cat.count}</span>
      `;
      btn.addEventListener('click', () => {
        currentCategory = cat.id;
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAndRenderServices();
      });
      categoryFilters.appendChild(btn);
    });
  }

  // Filter Services Logic
  function getFilteredServices() {
    return SERVICES_DATA.filter(service => {
      // Category check
      const matchesCategory = currentCategory === 'all' || service.category === currentCategory;

      // Audience check
      const matchesAudience = currentAudience === 'all' || 
        service.targetAudience.includes(currentAudience === 'clients' ? 'Clientes' : 'Contratistas');

      // Search query check (title, tags, category, shortDesc, features)
      const q = currentSearchQuery.trim().toLowerCase();
      const matchesSearch = !q || (
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.categoryName.toLowerCase().includes(q) ||
        service.tags.some(tag => tag.toLowerCase().includes(q)) ||
        service.features.some(f => f.toLowerCase().includes(q))
      );

      return matchesCategory && matchesAudience && matchesSearch;
    });
  }

  // Render Service Cards
  function filterAndRenderServices() {
    const filtered = getFilteredServices();

    // Update count display
    resultsCount.textContent = `Mostrando ${filtered.length} de ${SERVICES_DATA.length} servicios`;

    if (filtered.length === 0) {
      servicesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <h3>No se encontraron servicios</h3>
          <p>No encontramos soluciones que coincidan con los criterios seleccionados.</p>
          <button id="clear-filters-btn" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem;">
            Restablecer Filtros
          </button>
        </div>
      `;

      document.getElementById('clear-filters-btn')?.addEventListener('click', () => {
        currentCategory = 'all';
        currentAudience = 'all';
        currentSearchQuery = '';
        searchInput.value = '';
        renderCategories();
        audienceButtons.forEach(b => {
          b.classList.toggle('active', b.dataset.audience === 'all');
        });
        filterAndRenderServices();
      });
      return;
    }

    servicesGrid.innerHTML = filtered.map(service => {
      // Pick badge style
      let badgeClass = 'badge-primary';
      if (service.badge.includes('Demanda') || service.badge.includes('Solución')) badgeClass = 'badge-cyan';
      else if (service.badge.includes('Crítica') || service.badge.includes('Seguridad')) badgeClass = 'badge-amber';
      else if (service.badge.includes('Top') || service.badge.includes('Garantizado')) badgeClass = 'badge-emerald';

      const audienceBadges = service.targetAudience.map(aud => 
        `<span class="badge ${aud === 'Clientes' ? 'badge-primary' : 'badge-cyan'}" style="font-size: 0.68rem; padding: 0.15rem 0.5rem;">${aud}</span>`
      ).join('');

      const featuresHtml = service.features.slice(0, 3).map(feature => `
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${feature}</span>
        </li>
      `).join('');

      const tagsHtml = service.tags.slice(0, 4).map(tag => `
        <span class="tag-pill">${tag}</span>
      `).join('');

      return `
        <article class="service-card" data-id="${service.id}">
          <div class="card-top">
            <div class="card-icon-container">
              ${service.icon}
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem;">
              <span class="badge ${badgeClass}">${service.badge}</span>
              <div style="display: flex; gap: 0.25rem;">${audienceBadges}</div>
            </div>
          </div>

          <span class="card-category">${service.categoryName}</span>
          <h3 class="card-title">${service.title}</h3>
          <p class="card-desc">${service.shortDesc}</p>

          <ul class="card-features-list">
            ${featuresHtml}
          </ul>

          <div class="card-tags">
            ${tagsHtml}
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary btn-sm view-details-btn" data-id="${service.id}" style="flex: 1;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Detalles
            </button>
            <button class="btn btn-primary btn-sm request-quote-btn" data-id="${service.id}" data-title="${service.title}" style="flex: 1;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Cotizar
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    attachCardEventListeners();
  }

  function attachCardEventListeners() {
    // Open details modal
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        window.openServiceModal(id);
      });
    });

    // Open quote/contact drawer with preselected service
    document.querySelectorAll('.request-quote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.dataset.title;
        window.openQuoteModal(title);
      });
    });
  }

  // Search input handler with debounce
  let searchTimeout = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearchQuery = e.target.value;
      filterAndRenderServices();
    }, 180);
  });

  // Audience toggle handlers
  audienceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      audienceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAudience = btn.dataset.audience;
      filterAndRenderServices();
    });
  });

  // Keyboard shortcut: Pressing '/' focuses search input
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Initial Boot
  renderCategories();
  filterAndRenderServices();
});
