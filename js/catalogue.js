/**
 * LÓGICA DE INTERACCIÓN & RENDERIZADO DEL CATÁLOGO (ESTÉTICA BLUEPRINT)
 */

document.addEventListener('DOMContentLoaded', () => {
  const servicesGrid = document.getElementById('services-grid');
  const demosGrid = document.getElementById('demos-grid');
  const cubaWhatsappBtn = document.getElementById('cuba-whatsapp-btn');
  const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
  const generalWhatsappBtn = document.getElementById('nav-whatsapp-btn');

  // Configure Global WhatsApp Buttons
  if (heroWhatsappBtn) {
    heroWhatsappBtn.href = CONFIG.buildWhatsAppUrl(
      "Hola Fredo! Estuve revisando tu cuaderno de soluciones técnicas y me gustaría conversar sobre un proyecto."
    );
  }

  if (generalWhatsappBtn) {
    generalWhatsappBtn.href = CONFIG.buildWhatsAppUrl(
      "Hola Fredo! Me gustaría solicitar información técnica y cotización."
    );
  }

  if (cubaWhatsappBtn) {
    cubaWhatsappBtn.href = CONFIG.buildWhatsAppUrl(
      "Hola Fredo! Te escribo desde Cuba. Leí la sección de la página y me gustaría evaluar con total honestidad qué solución técnica es viable para mi situación."
    );
  }

  // Render Services Cards
  if (servicesGrid && typeof SERVICES_DATA !== 'undefined') {
    servicesGrid.innerHTML = SERVICES_DATA.map((service, index) => {
      const waUrl = CONFIG.buildWhatsAppUrl(service.whatsappPrompt);
      const isFree = service.id === 'tutoria-gratuita';

      return `
        <article class="blueprint-card" id="${service.id}">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
            <span class="blueprint-stamp">PLANO 0${index + 1} // ${service.categoryName}</span>
            <span class="badge ${service.badgeClass}">${service.badge}</span>
          </div>

          <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.5rem; color: #fff;">
            ${service.title}
          </h3>

          <div class="margin-note" style="margin: 0.75rem 0 1.25rem;">
            <div class="margin-note-title">Apunte del especialista:</div>
            <p style="font-family: var(--font-hand); color: var(--ink-amber); font-size: 1.15rem; margin: 0; line-height: 1.4;">
              "${service.annotation}"
            </p>
          </div>

          <p style="color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${service.shortDesc}
          </p>

          <div style="margin-bottom: 1.25rem; padding: 0.75rem; background: rgba(0, 0, 0, 0.25); border-radius: 8px; border: 1px dashed var(--bp-card-border);">
            <span style="font-family: var(--font-tech); font-size: 0.75rem; color: var(--ink-cyan); display: block; margin-bottom: 0.25rem; text-transform: uppercase;">
              Política de Costos:
            </span>
            <p style="font-size: 0.85rem; color: #e2e8f0; margin: 0;">
              ${service.pricingPolicy}
            </p>
          </div>

          <ul style="list-style: none; padding: 0; margin: 0 0 1.75rem; display: flex; flex-direction: column; gap: 0.6rem;">
            ${service.features.map(f => `
              <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: var(--ink-muted);">
                <span style="color: var(--ink-cyan); font-family: var(--font-tech); font-weight: bold;">[✓]</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px dashed var(--bp-card-border); display: flex; justify-content: flex-end;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="width: 100%;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 0 1-5.83 2.42c-1.48 0-2.94-.39-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
              </svg>
              <span>${isFree ? 'Solicitar Tutoría Gratis' : 'Consultar por WhatsApp'}</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Render Visual Demos Section
  if (demosGrid && typeof DEMOS_DATA !== 'undefined') {
    demosGrid.innerHTML = DEMOS_DATA.map(demo => `
      <div class="demo-card">
        <div class="demo-preview-frame">
          <span class="demo-disclaimer-pill">Maqueta Estática // No Backend</span>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--ink-blue)" stroke-width="1.5" style="opacity: 0.8; margin-bottom: 0.5rem;">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span style="font-family: var(--font-tech); font-size: 0.75rem; color: var(--ink-muted);">VISTA PREVIA ESTÁTICA</span>
        </div>

        <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">${demo.title}</h4>
        <p style="font-size: 0.88rem; color: var(--ink-muted); margin-bottom: 1rem; line-height: 1.5; flex-grow: 1;">
          ${demo.desc}
        </p>

        <ul style="list-style: none; padding: 0; margin: 0 0 1.25rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${demo.bullets.map(b => `
            <li style="font-size: 0.8rem; color: var(--ink-muted); display: flex; align-items: center; gap: 0.4rem;">
              <span style="color: var(--ink-amber);">•</span>
              <span>${b}</span>
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; gap: 0.75rem;">
          <a href="${demo.path}" target="_blank" class="btn-blueprint" style="flex: 1; justify-content: center;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Ver Maqueta
          </a>
          <a href="${CONFIG.buildWhatsAppUrl('Hola Fredo! Vi la ' + demo.title + ' y me gustaría consultar por algo similar.')}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 0.65rem 0.9rem;" title="Preguntar por esta maqueta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 0 1-5.83 2.42c-1.48 0-2.94-.39-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
            </svg>
          </a>
        </div>
      </div>
    `).join('');
  }
});
