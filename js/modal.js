/**
 * Gestión de Diálogos Modales Nativos (<dialog>) y Cotizaciones
 */

document.addEventListener('DOMContentLoaded', () => {
  const serviceModal = document.getElementById('service-modal');
  const quoteModal = document.getElementById('quote-modal');
  const modalContentContainer = document.getElementById('modal-service-details');
  const quoteServiceSelect = document.getElementById('quote-service-select');
  const quoteForm = document.getElementById('quote-form');

  // Populate Service Options in Quote Form
  if (quoteServiceSelect && typeof SERVICES_DATA !== 'undefined') {
    quoteServiceSelect.innerHTML = `
      <option value="">Seleccione un servicio de interés...</option>
      ${SERVICES_DATA.map(s => `<option value="${s.title}">${s.categoryName}: ${s.title}</option>`).join('')}
    `;
  }

  // Open Service Details Modal
  window.openServiceModal = function(serviceId) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service || !serviceModal) return;

    modalContentContainer.innerHTML = `
      <span class="modal-category">${service.categoryName}</span>
      <h2 class="modal-title">${service.title}</h2>
      <p class="modal-desc">${service.fullDesc}</p>

      <div class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        Capacidades & Alcance Clave
      </div>
      <ul class="card-features-list" style="margin-bottom: 1.5rem;">
        ${service.features.map(f => `
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <strong>Entregables</strong>
          <p>${service.deliverables}</p>
        </div>
        <div class="modal-meta-item">
          <strong>Plazo Estimado (SLA)</strong>
          <p>${service.sla}</p>
        </div>
      </div>

      <div style="margin-top: 1.5rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-dim); display: block; margin-bottom: 0.5rem; font-weight: 700;">Tecnologías & Estándares</span>
        <div class="card-tags">
          ${service.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    `;

    // Configure Quote Button in Modal Footer
    const modalQuoteBtn = document.getElementById('modal-action-quote-btn');
    if (modalQuoteBtn) {
      modalQuoteBtn.onclick = () => {
        serviceModal.close();
        window.openQuoteModal(service.title);
      };
    }

    serviceModal.showModal();
  };

  // Open Quote / Contact Modal
  window.openQuoteModal = function(serviceTitle = '') {
    if (!quoteModal) return;

    if (quoteServiceSelect && serviceTitle) {
      quoteServiceSelect.value = serviceTitle;
    }
    quoteModal.showModal();
  };

  // Light dismiss on click outside modal dialog
  [serviceModal, quoteModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (event) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        modal.close();
      }
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('dialog');
      if (modal) modal.close();
    });
  });

  // Handle Quote Form Submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quote-name').value;
      const contact = document.getElementById('quote-contact').value;
      const type = document.getElementById('quote-type').value;
      const service = quoteServiceSelect.value || 'Consulta General';
      const notes = document.getElementById('quote-notes').value;

      // Close modal
      quoteModal.close();
      quoteForm.reset();

      // Show confirmation toast
      showToast(`¡Gracias ${name}! Tu solicitud para "${service}" ha sido recibida. Nos comunicaremos a la brevedad.`);
    });
  }

  // Toast Helper
  function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
});
