# AGENTS.md

Guía de desarrollo para agentes de IA y colaboradores en este repositorio. Recoge las reglas y arquitectura que no se deducen a simple vista leyendo el código.

---

## 📌 Proyecto & Propósito

Catálogo web interactivo y responsivo de servicios informáticos y soluciones cloud para **clientes y contratistas**. 
Abarca las líneas de:
- Servicios Web
- Software & Desarrollo
- Soluciones Remotas
- Servidores & Cloud
- VPS (Servidores Privados Virtuales)
- CCM (Customer Communication Management) & Telefonía IP
- Dominios & DNS

El proyecto está diseñado para funcionar como un sitio estático puro, desplegable de forma directa y gratuita en **GitHub Pages**.

---

## 🏛️ Arquitectura & Dónde está cada cosa

- **`js/data.js`**: **Única fuente de la verdad de los datos.** Contiene `SERVICES_DATA` y `CATEGORIES_DATA`. Al agregar o editar un servicio aquí, los contadores de categorías, filtros, buscador y modales se actualizan de forma automática.
- **`js/catalogue.js`**: Lógica reactiva en cliente para el renderizado de tarjetas, buscador instantáneo (con debounce), selección de categoría y filtrado por perfil (Clientes / Contratistas). Incluye el atajo de teclado `/` para enfocar la búsqueda.
- **`js/modal.js`**: Controlador de los elementos nativos `<dialog>` (`#service-modal` y `#quote-modal`). Gestiona el *light dismiss* (cierre al hacer clic fuera del diálogo), cierre con tecla `Esc` y envío simulado del formulario con toast feedback.
- **`styles/`**:
  - `main.css`: Variables CSS (*design tokens*), tipografía *Plus Jakarta Sans*, reseteo y clases utilitarias (`.badge`, `.btn`, `.text-gradient`).
  - `components.css`: Navbar, hero con estadísticas en vivo, barra de controles, tarjetas interactivas con efecto hover, modales y pie de página.
  - `animations.css`: Keyframes para desvanecimientos, micro-interacciones, efectos de brillo (*glow*) y notificaciones *toast*.
- **`index.html`**: Estructura semántica accesible con soporte SEO y etiquetas OpenGraph.

---

## ⚙️ Reglas de Código & Convenciones

1. **Vanilla First**:
   - Mantener la arquitectura en **HTML5 semántico, Vanilla CSS y Vanilla JS**.
   - No añadir frameworks (React, Vue, Angular) ni preprocesadores pesados innecesarios a menos que sea un requerimiento explícito.
   - Todo debe ejecutarse de forma inmediata abriendo `index.html` o con cualquier servidor HTTP local (`python -m http.server`).

2. **Estética y UI**:
   - Respetar la estética *dark mode* premium con fondos oscuros profundos (`#0a0e1a`), acentos cian (`#06b6d4`), violeta/índigo (`#6366f1`) y *glassmorphism* suave.
   - Mantener siempre diseño *mobile-first* y accesible.
   - No usar imágenes genéricas rotas o marcadores de posición sin formato.

3. **Estructura de Datos**:
   - Todo servicio en `SERVICES_DATA` debe contar con: `id`, `category`, `categoryName`, `title`, `shortDesc`, `fullDesc`, `targetAudience` (array con "Clientes" y/o "Contratistas"), `badge`, `icon` (SVG en línea limpio), `tags`, `features` (mínimo 3 viñetas), `deliverables` y `sla`.

---

## 🌿 Flujo Git & Contribuciones

Consulta siempre [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de crear ramas o redactar commits:

- **Ramas:** `<prefijo>/<ref>-descripcion-breve` (ejemplo: `feat/gh-12-filtro-precio-vps`). Siempre en minúsculas y formato ASCII.
- **Commits atómicos:** `<prefijo>: <verbo en 3ª persona del presente> <descripción corta>` (ejemplo: `feat: agrega selector de moneda para cotizaciones`). Máximo 72 caracteres y sin paréntesis.
- **Sin `Co-Authored-By`** en los mensajes de commit.
- **Pull Requests:** Máximo 500 líneas cambiadas recomendadas. Llenar siempre la plantilla `.github/pull_request_template.md`.

---

## 🚫 Lista de "Nunca"

- **Nunca** hacer push directo a la rama `main`: todo entra por Pull Request.
- **Nunca** agregar librerías externas o frameworks pesados vía npm que rompan la portabilidad de GitHub Pages.
- **Nunca** modificar o agregar servicios de forma hardcodeada directamente en `index.html`: agrégalos a `js/data.js`.
- **Nunca** usar títulos de commit vacíos o genéricos como `Update index.html`, `wip`, `fixes` o `cambios`.
- **Nunca** añadir `Co-Authored-By` a los commits.
