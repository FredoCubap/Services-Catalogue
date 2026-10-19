# AGENTS.md

Guía de desarrollo para agentes de IA y colaboradores en este repositorio. Recoge las reglas y arquitectura que no se deducen a simple vista leyendo el código.

---

## 📌 Proyecto & Propósito

**Services Catalogue** es un cuaderno técnico digital interactivo con estética de **plano de arquitecto / libreta de notas de ingeniería con bordes garabateados dinámicos**, diseñado para brindar asesoría transparente, servicios web reales y administración de servidores para clientes internacionales y especialmente para la realidad de **Cuba**.

Principales pilares:
1. **Tutoría & Asesoramiento Inicial 100% Gratuito:** Explicar cómo funciona internet y qué se necesita realmente antes de gastar dinero.
2. **Desarrollo Web & Software a Medida:** Sitios ligeros, aplicaciones a medida y futuras licencias de software propio del grupo madre.
3. **Servidores & Hostinger / VPS:** Regla clara de pago previo del servicio de montaje + mantenimiento mensual opcional.
4. **Hablemos Claro (Para Cuba):** Factibilidad honesta sobre la realidad de infraestructura en la isla (cortes eléctricos, Nauta Hogar, servidores locales en PC con DDNS, sistemas offline-first).
5. **Demos Visuales Estáticas:** Maquetas en `/demos/` para apreciar diseño y ergonomía visual sin exponer código fuente ni lógica de backend.
6. **Conversión Directa:** Cero modales o formularios que queden en el limbo; cada llamada a la acción abre directamente **WhatsApp Business** (+53 55608402) con mensajes pre-redactados.

---

## 🏛️ Arquitectura & Dónde está cada cosa

- **`js/data.js`**: **Fuente de la verdad.** Contiene la configuración global (`CONFIG` con número de WhatsApp y constructor de URL `buildWhatsAppUrl`), el catálogo `SERVICES_DATA` y las maquetas `DEMOS_DATA`.
- **`js/catalogue.js`**: Renderizado de tarjetas blueprint y de la galería de maquetas estáticas, vinculando dinámicamente cada acción a WhatsApp.
- **`demos/`**:
  - `dashboard-preview.html`: Prototipo visual estático de panel administrativo/ERP.
  - `catalog-preview.html`: Prototipo visual de escaparate digital con pedidos por WhatsApp.
  - `landing-preview.html`: Prototipo de página de captación de servicios.
- **`styles/`**:
  - `blueprint.css`: Retícula de plano de arquitecto, tipografía técnica (`JetBrains Mono`), fuente manuscrita (`Architects Daughter`) y animación de bordes garabateados (`sketch-wobble`).
  - `main.css`, `components.css`, `animations.css`: Base visual y utilitarios.
- **`index.html`**: Página principal accesible, responsiva y semántica.

---

## ⚙️ Reglas de Código & Convenciones

1. **Vanilla First**:
   - Todo debe mantenerse en **HTML5, Vanilla CSS y Vanilla JS**.
   - Cero dependencias pesadas de npm ni compiladores complejos.
   - Todo corre de inmediato al abrir `index.html` o con GitHub Pages.

2. **Estética Blueprint & Notas**:
   - Mantener la estética técnica de cuadrícula azul/carbón, sellos técnicos (`[PLANO 01]`), notas al margen y animaciones discretas de bordes dibujados a mano.

3. **Protección Intelectual**:
   - Todas las demos públicas deben permanecer estrictamente estáticas para salvaguardar la lógica y el código fuente propietario.

---

## 🌿 Flujo Git & Contribuciones

Consulta siempre [`CONTRIBUTING.md`](CONTRIBUTING.md) antes de crear ramas o redactar commits:
- **Ramas:** `<prefijo>/<ref>-descripcion-breve`
- **Commits atómicos:** `<prefijo>: <verbo en 3ª persona del presente> <descripción corta>` (máximo 72 caracteres).
- **Sin `Co-Authored-By`**.
- **Pull Requests:** Máximo 500 líneas cambiadas recomendadas. Llenar siempre `.github/pull_request_template.md`.

---

## 🚫 Lista de "Nunca"

- **Nunca** hacer push directo a `main`: todo entra por PR (protegido por `.github/workflows/protect-main.yml`).
- **Nunca** implementar formularios que simulen envío sin canal real: todo contacto va directo a WhatsApp.
- **Nunca** pintar paisajes irreales sobre la infraestructura de Cuba: se habla con transparencia técnica.
- **Nunca** exponer código fuente o lógica de backend en las carpetas de demostración visual.
