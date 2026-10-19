# Catálogo de Servicios y Soluciones Tecnológicas

> Plataforma web moderna e interactiva diseñada para presentar y cotizar servicios de desarrollo web, software a medida, infraestructura de servidores, VPS, soluciones remotas, CCM y gestión de dominios para **clientes y contratistas**.

---

## 🚀 Alcance del Catálogo

El catálogo reúne de manera estructurada las principales líneas de negocio tecnológicas:

1. **Servicios Web**:
   - Desarrollo Web Corporativo y Portales.
   - E-Commerce con integración de pasarelas de pago y logística.
   - Auditorías de rendimiento Core Web Vitals y optimización SEO técnica.

2. **Software & Desarrollo**:
   - Desarrollo de Software a Medida (Web, APIs, arquitecturas modulares).
   - Integración de APIs RESTful, GraphQL y Webhooks con ERPs/CRMs.
   - Automatización de procesos mediante RPA y scripting programado.

3. **Soluciones Remotas**:
   - Redes Privadas Virtuales corporativas (VPN WireGuard / IPsec / OpenVPN) con Zero Trust y 2FA.
   - Mesa de ayuda y soporte técnico especializado L1, L2 y L3.
   - Entornos de Escritorio Remoto centralizado (RDP / VDI) para contratistas.

4. **Servidores & Cloud**:
   - Administración SysAdmin en Linux (Ubuntu, Debian, AlmaLinux) y Windows Server.
   - Hardening perimetral, cortafuegos, Docker y monitoreo de disponibilidad.
   - Migración de infraestructuras entre proveedores con mínima o nula interrupción (Zero Downtime).

5. **VPS (Servidores Privados Virtuales)**:
   - Aprovisionamiento de VPS de alto rendimiento con almacenamiento NVMe y virtualización KVM.
   - Implementación de paneles de control (cPanel, Plesk, CloudPanel, Webmin).
   - Planes de Backup 3-2-1 automatizados y recuperación ante desastres (DRP).

6. **CCM (Customer Communication Management) & Telefonía**:
   - Canales omnicanal integrados (WhatsApp Business API oficial, SMS y Email transaccional).
   - Centrales telefónicas virtuales PBX / VoIP en la nube (Asterisk, FreePBX, Cisco CallManager).
   - Gestión automatizada de comprobantes, facturas electrónicas y documentos dinámicos en PDF.

7. **Dominios & DNS**:
   - Registro, transferencia y gestión de portafolios de dominios con Whois Privacy.
   - Configuración DNS Anycast y protección contra suplantación (SPF, DKIM, DMARC, DNSSEC).
   - Certificados digitales SSL/TLS Wildcard con renovación automática.

---

## 🛠️ Tecnologías Empleadas

Construido siguiendo los estándares web más modernos, sin dependencias pesadas:

- **Estructura**: HTML5 semántico con elementos interactivos nativos (`<dialog>`, `::backdrop`).
- **Estilos**: Vanilla CSS con variables CSS personalizadas, diseño oscuro (*dark mode*), acentos cian/índigo, efectos *glassmorphism* y micro-animaciones fluidas.
- **Lógica**: JavaScript Vanilla estructurado modularmente (`data.js`, `catalogue.js`, `modal.js`).
- **Rendimiento**: 100% estático, ultra-ligero y listo para ser distribuido a través de cualquier CDN o GitHub Pages sin requerir compilación ni Node.js.

---

## 📂 Estructura del Proyecto

```text
services-catalogue/
├── index.html              # Página principal del catálogo
├── styles/
│   ├── main.css            # Tokens de diseño, tipografía y estilos base
│   ├── components.css      # Componentes (Navbar, Hero, Tarjetas, Filtros, Modales)
│   └── animations.css      # Efectos visuales y micro-interacciones
├── js/
│   ├── data.js             # Base de datos centralizada de servicios y categorías
│   ├── catalogue.js        # Lógica reactiva de filtros, búsqueda y renderizado
│   └── modal.js            # Control de modales (<dialog>) y formulario de cotización
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Documentación general del repositorio
```

---

## 💻 Vista Previa Local

Para visualizar el catálogo en tu equipo local:

### Opción 1: Abrir directamente en el navegador
Haz doble clic sobre el archivo `index.html` o ábrelo desde tu navegador web preferido.

### Opción 2: Usar un servidor local ligero
Con Python:
```bash
python -m http.server 8080
```
O con Node.js (`npx`):
```bash
npx serve .
```
Luego visita `http://localhost:8080` en tu navegador.

---

## 🌐 Publicación en GitHub Pages

Dado que es un sitio estático puro, puedes alojarlo gratis en **GitHub Pages**:

1. Sube los cambios a la rama principal:
   ```bash
   git branch -M main
   git push -u origin main
   ```
2. En GitHub, dirígete a: **Settings** > **Pages**.
3. En **Source**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Haz clic en **Save**. En un par de minutos tu catálogo estará publicado en una URL pública como:
   `https://fredocubap.github.io/Services-Catalogue/`

---

## 🤝 Contribuciones & Extensiones

Para agregar o modificar servicios:
1. Edita el archivo `js/data.js` agregando un nuevo objeto al arreglo `SERVICES_DATA`.
2. Las categorías, contadores, etiquetas y tarjetas se actualizarán de forma automática.
