/**
 * DATOS MAESTROS Y CONFIGURACIÓN COMERCIAL
 * Services Catalogue - Cuaderno de Ingeniería & Soluciones Web
 */

const CONFIG = {
  whatsappNumber: "+5355608402",
  brandName: "Services Catalogue",
  buildWhatsAppUrl: function (customMessage) {
    const encoded = encodeURIComponent(customMessage.trim());
    return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
  }
};

const SERVICES_DATA = [
  {
    id: "tutoria-gratuita",
    category: "asesoria",
    categoryName: "Tutoría & Guía",
    title: "Asesoramiento Técnico & Guía Web Inicial",
    badge: "100% GRATIS",
    badgeClass: "badge-emerald",
    annotation: "¡Nuestra recomendación antes de gastar un centavo!",
    shortDesc: "Te explicamos con palabras sencillas cómo funciona realmente una página web, qué es un hosting, un dominio y si tu negocio realmente necesita uno hoy.",
    pricingPolicy: "Tutoría completamente gratuita y sin compromiso.",
    features: [
      "Diagnóstico honesto: si no necesitas una web todavía, te lo decimos claro",
      "Explicación transparente de costos reales (dominio anual, hosting, certificados)",
      "Comparativa entre Hostinger, VPS, servidores locales o redes sociales",
      "Guía paso a paso de qué esperar en un proceso de desarrollo"
    ],
    whatsappPrompt: "Hola Fredo! Me gustaría coordinar la tutoría técnica inicial gratuita para entender cómo funciona el mundo web y qué le conviene a mi negocio."
  },
  {
    id: "paginas-web",
    category: "desarrollo",
    categoryName: "Desarrollo Web",
    title: "Páginas Web Corporativas & Landing Pages",
    badge: "Desarrollo",
    badgeClass: "badge-cyan",
    annotation: "Rápida, moderna y sin relleno innecesario",
    shortDesc: "Sitios web ligeros, modernos y adaptados a teléfonos celulares para presentar tu empresa, productos o servicios de manera profesional.",
    pricingPolicy: "Presupuesto cerrado por proyecto. Entrega lista para operar.",
    features: [
      "Diseño a medida con estándares modernos (carga en menos de 1 segundo)",
      "Optimización 100% para celulares y computadoras",
      "Botón directo de contacto a WhatsApp y llamadas",
      "Indexación en Google para que tus clientes te encuentren"
    ],
    whatsappPrompt: "Hola Fredo! Me interesa cotizar el desarrollo de una página web profesional para mi negocio."
  },
  {
    id: "software-apps",
    category: "desarrollo",
    categoryName: "Software a Medida",
    title: "Aplicaciones Web & Software a Medida",
    badge: "Avanzado",
    badgeClass: "badge-primary",
    annotation: "Diseñado para los procesos exactos de tu negocio",
    shortDesc: "Sistemas para gestionar inventario, citas, cotizaciones, clientes o contratistas sin depender de hojas de cálculo desordenadas.",
    pricingPolicy: "Desarrollo modular por hitos acordados.",
    features: [
      "Automatización de tareas repetitivas y ahorro de tiempo operativo",
      "Paneles de administración intuitivos para ti y tu equipo",
      "Bases de datos seguras y respaldadas contra pérdidas",
      "Capacitación directa para el uso del sistema"
    ],
    whatsappPrompt: "Hola Fredo! Necesito una aplicación web o software a medida para automatizar y gestionar los procesos de mi empresa."
  },
  {
    id: "vps-hostinger",
    category: "infraestructura",
    categoryName: "Servidores & Hosting",
    title: "Administración y Puesta a Punto de Hostinger & VPS",
    badge: "Servicio Técnico",
    badgeClass: "badge-amber",
    annotation: "Regla transparente: El servicio de montaje se paga primero",
    shortDesc: "Montamos, configuramos y blindamos tu hosting en Hostinger o servidor VPS privado para cualquier aplicación o proyecto.",
    pricingPolicy: "Pago por adelantado del servicio de configuración + mantenimiento mensual opcional.",
    features: [
      "Instalación limpia de entornos de ejecución (Linux, Nginx, Docker, Node/PHP/Python)",
      "Configuración de dominios, correos corporativos y certificados SSL seguros",
      "Copias de seguridad automatizadas y políticas de recuperación",
      "Planes de mantenimiento continuo para actualizaciones y parches de seguridad"
    ],
    whatsappPrompt: "Hola Fredo! Necesito ayuda para configurar o administrar un servidor VPS / Hostinger para mis proyectos."
  },
  {
    id: "licencias-software",
    category: "software-suite",
    categoryName: "Ecosistema Propio",
    title: "Licenciamiento de Soluciones Especializadas",
    badge: "Próximamente",
    badgeClass: "badge-cyan",
    annotation: "Desarrollado y respaldado por nuestro grupo madre",
    shortDesc: "Plataformas y herramientas de software industrial y empresarial listas para implementar mediante licencias periódicas accesibles.",
    pricingPolicy: "Modelo de suscripción / licencia según tamaño de operación.",
    features: [
      "Software robusto probado en entornos de producción reales",
      "Actualizaciones continuas sin costos imprevistos de desarrollo",
      "Soporte técnico directo con los creadores de la herramienta",
      "Implementación ágil sin meses de espera"
    ],
    whatsappPrompt: "Hola Fredo! Quisiera más información sobre las soluciones de software y licencias que implementará su grupo madre próximamente."
  }
];

const DEMOS_DATA = [
  {
    id: "demo-erp",
    title: "Maqueta: Panel Administrativo & Operaciones",
    tag: "Visual Preview",
    desc: "Vista ilustrativa de dashboards con métricas, gestión de contratos y personal. Demostración puramente estática para apreciar diseño y ergonomía visual.",
    path: "demos/dashboard-preview.html",
    bullets: ["Interfaz oscura con acentos visuales", "Tablas y tarjetas de métricas estáticas", "Sin conexión a bases de datos reales"]
  },
  {
    id: "demo-catalogo",
    title: "Maqueta: Catálogo de Productos & Pedidos",
    tag: "Visual Preview",
    desc: "Prototipo interactivo de escaparate con selector de artículos y botón de pedido para WhatsApp. Ideal para negocios que buscan vender sin pasarelas bancarias complejas.",
    path: "demos/catalog-preview.html",
    bullets: ["Filtros por categoría visuales", "Simulación de carrito de compras", "100% estático para protección de código"]
  },
  {
    id: "demo-landing",
    title: "Maqueta: Portal de Servicios & Captación",
    tag: "Visual Preview",
    desc: "Estructura de landing page de alta conversión para empresas de servicios técnicos o contratistas con testimonios, llamado a la acción y preguntas frecuentes.",
    path: "demos/landing-preview.html",
    bullets: ["Diseño adaptativo para smartphones", "Tipografía jerárquica limpia", "Plantilla de presentación estática"]
  }
];
