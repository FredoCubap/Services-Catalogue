# Services Catalogue — Cuaderno Técnico & Soluciones Web

> Plataforma web interactiva con estética de **plano de arquitecto y libreta de notas de ingeniería**, diseñada para brindar asesoría técnica transparente, desarrollo web y administración de servidores para clientes internacionales y la realidad de **Cuba**.

---

## 📐 Propuesta de Valor & Filosofía

1. **Tutoría & Asesoría Inicial 100% Gratuita**:
   - Explicamos en lenguaje claro cómo funciona internet, qué es un hosting, un dominio y si tu negocio realmente necesita una web antes de hacer cualquier inversión.
2. **Desarrollo Web & Software a Medida**:
   - Creación de páginas web de alta velocidad, aplicaciones a medida y futuras licencias de software industrial desarrolladas por nuestro grupo madre.
3. **Servidores & Hostinger / VPS**:
   - Puesta a punto y hardening. Regla clara: **el servicio de montaje se paga primero** y el mantenimiento mensual es opcional pero recomendado.
4. **Hablemos Claro: Para Nuestra Gente en Cuba 🇨🇺**:
   - Diagnóstico honesto de viabilidad técnica tomando en cuenta las limitaciones reales del país (cortes eléctricos, Nauta Hogar, IPs dinámicas).
   - Alternativas viables: Servidores locales en PC con Nauta Hogar/DDNS, arquitecturas offline-first e intranets comerciales.
5. **Demos Visuales Estáticas (`demos/`)**:
   - Prototipos de muestra para apreciar el diseño de interfaces (UI/UX) sin exponer código fuente ni lógica de backend de la empresa.
6. **Canal Directo por WhatsApp**:
   - Contacto directo a **WhatsApp Business (+53 55608402)** sin intermediación de formularios o modales complejos.

---

## 🎨 Estética & Diseño Visual

- **Plano de Arquitecto (Blueprint)**: Fondo azul pizarra con cuadrícula técnica de ingeniería.
- **Tipografía Híbrida**: Código y sellos técnicos en *JetBrains Mono*, notas manuscritas al margen en *Architects Daughter* y lectura limpia en *Plus Jakarta Sans*.
- **Bordes Garabateados (Hand-Drawn Wobble)**: Micro-animaciones en CSS que simulan trazos trazados a mano en constante movimiento.

---

## 📂 Estructura del Repositorio

```text
services-catalogue/
├── index.html              # Página principal (Blueprint & Cuaderno técnico)
├── demos/                  # Maquetas estáticas para clientes
│   ├── dashboard-preview.html
│   ├── catalog-preview.html
│   └── landing-preview.html
├── styles/
│   ├── blueprint.css       # Retícula de plano, notas a mano y bordes doodle
│   ├── main.css            # Base de diseño y variables
│   ├── components.css      # Componentes adaptables
│   └── animations.css      # Animaciones visuales
├── js/
│   ├── data.js             # Fuente única: datos, WhatsApp config y demos
│   └── catalogue.js        # Lógica de renderizado y enlaces dinámicos a WhatsApp
├── .github/
│   ├── workflows/          # Workflow para proteger main
│   └── pull_request_template.md
├── CONTRIBUTING.md         # Guía de ramas, commits atómicos y PRs
├── AGENTS.md               # Guía de arquitectura y restricciones
└── README.md               # Documentación general
```

---

## 🌐 Publicación en GitHub Pages

El sitio se publica de manera automática en **GitHub Pages**:
👉 **`https://fredocubap.github.io/Services-Catalogue/`**

---

## 🤝 Reglas de Contribución

Consulta **[`CONTRIBUTING.md`](CONTRIBUTING.md)** y **[`AGENTS.md`](AGENTS.md)** para la convención de commits atómicos (`<prefijo>: <verbo en 3ª persona>`), ramas (`<prefijo>/<ref>-descripcion`) y plantilla de Pull Request.
