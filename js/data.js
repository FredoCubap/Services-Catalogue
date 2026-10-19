/**
 * Catálogo Maestro de Servicios y Soluciones Tecnológicas
 * Diseñado para Clientes Finales y Contratistas Tecnológicos
 */

const SERVICES_DATA = [
  // --- SERVICIOS WEB ---
  {
    id: "web-corp",
    category: "web",
    categoryName: "Servicios Web",
    title: "Desarrollo Web Corporativo & Portales",
    shortDesc: "Sitios web institucionales y portales de alto rendimiento, optimizados para conversión, velocidad y SEO.",
    fullDesc: "Construimos portales corporativos modernos adaptados a la identidad visual de su empresa. Implementamos arquitectura modular, tiempos de carga inferiores a 1 segundo, compatibilidad móvil total y panel de gestión intuitivo para su equipo.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Alta Demanda",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    tags: ["HTML5/CSS3", "JavaScript", "SEO", "Responsive", "UI/UX"],
    features: [
      "Diseño UI/UX a medida con identidad corporativa",
      "Optimización Core Web Vitals (Puntaje 95+)",
      "Indexación SEO técnica y metadatos estructurados",
      "Integración de analítica, formularios seguros y CDN global",
      "Seguridad perimetral y protección contra spam"
    ],
    deliverables: "Código fuente completo, despliegue en servidor/cloud, manual de administración y 30 días de garantía post-lanzamiento.",
    sla: "Entrega inicial en 10 a 20 días hábiles según alcance."
  },
  {
    id: "web-ecommerce",
    category: "web",
    categoryName: "Servicios Web",
    title: "E-Commerce & Pasarelas de Pago",
    shortDesc: "Tiendas online robustas con pasarelas de pago locales e internacionales, gestión de inventario y carrito optimizado.",
    fullDesc: "Soluciones de comercio electrónico escalables con integración de pagos (Stripe, PayPal, transferencias locales, pasarelas bancarias), cálculo dinámico de envíos y catálogo automatizado.",
    targetAudience: ["Clientes"],
    badge: "Popular",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    tags: ["E-Commerce", "Pagos", "Inventario", "SSL", "Checkout"],
    features: [
      "Pasarelas de pago múltiples (tarjetas de crédito, débito y transferencias)",
      "Gestor de inventario y panel de pedidos en tiempo real",
      "Notificaciones automáticas por email y WhatsApp",
      "Checkout optimizado en un solo paso para maximizar conversiones",
      "Certificado SSL de cifrado bancario de 256 bits"
    ],
    deliverables: "Tienda online operativa, configuración de pasarelas, catálogo de productos inicial y capacitación del personal.",
    sla: "Despliegue estándar en 15 a 25 días hábiles."
  },
  {
    id: "web-audit",
    category: "web",
    categoryName: "Servicios Web",
    title: "Auditoría de Rendimiento & Optimización Web",
    shortDesc: "Diagnóstico profundo y aceleración de sitios existentes para alcanzar máximas velocidades de carga y cumplimiento SEO.",
    fullDesc: "Análisis forense de código, imágenes, assets y servidores. Reducimos el LCP (Largest Contentful Paint), minimizamos el bloqueo de hilo principal y solventamos cuellos de botella en bases de datos.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Especializado",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    tags: ["Core Web Vitals", "LCP", "Cache", "Minificación", "Speed"],
    features: [
      "Auditoría técnica exhaustiva con reporte detallado antes/después",
      "Optimización de imágenes WebP/AVIF y Lazy Loading inteligente",
      "Refactorización y reducción de JavaScript/CSS bloqueante",
      "Configuración de compresión Gzip/Brotli y reglas de caché HTTP/CDN",
      "Validación de Core Web Vitals en Google Search Console"
    ],
    deliverables: "Informe ejecutivo técnico, código optimizado aplicado y garantía de mejora medible.",
    sla: "Ejecución en 3 a 5 días hábiles."
  },

  // --- SOFTWARE ---
  {
    id: "soft-custom",
    category: "software",
    categoryName: "Software & Desarrollo",
    title: "Desarrollo de Software a Medida",
    shortDesc: "Sistemas web y plataformas empresariales concebidas específicamente para la lógica de su negocio.",
    fullDesc: "Creamos herramientas de gestión interna, sistemas ERP/CRM personalizados, portales de clientes y dashboards ejecutivos adaptados exactamente a los procesos operativos de su organización.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Solución Clave",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    tags: ["Backend", "Frontend", "Bases de Datos", "Arquitectura", "Clean Code"],
    features: [
      "Arquitectura escalable basada en microservicios o modular monolítico",
      "Control granular de roles, permisos y bitácora de auditoría",
      "Base de datos relacionales (PostgreSQL/MySQL) o NoSQL optimizadas",
      "Diseño enfocado en alta disponibilidad y estabilidad operativa",
      "Documentación técnica integral para contratistas y soporte"
    ],
    deliverables: "Repositorio Git con código documentado, scripts de despliegue automatizado, documentación de API y capacitación.",
    sla: "Planificado por sprints ágiles (2 a 4 semanas por hito)."
  },
  {
    id: "soft-api-integration",
    category: "software",
    categoryName: "Software & Desarrollo",
    title: "Desarrollo e Integración de APIs & Webhooks",
    shortDesc: "Conexión fluida entre plataformas externas, ERPs, CRMs, servicios bancarios y herramientas de terceros.",
    fullDesc: "Diseño e implementación de endpoints RESTful y GraphQL seguros. Automatizamos el intercambio de datos bidireccional entre sistemas heterogéneos eliminando la duplicidad manual de tareas.",
    targetAudience: ["Contratistas", "Clientes"],
    badge: "Técnico",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    tags: ["REST API", "GraphQL", "Webhooks", "JSON", "OAuth2"],
    features: [
      "Autenticación segura (OAuth2, JWT, API Keys con rate-limiting)",
      "Colas de procesamiento asíncrono para alto volumen de peticiones",
      "Mapeo y normalización automática de datos entre sistemas",
      "Documentación interactiva OpenAPI / Swagger",
      "Monitoreo de latencia y sistema de reintentos ante fallos"
    ],
    deliverables: "Endpoints listos para producción, OpenAPI spec, tests automatizados y guía de integración.",
    sla: "5 a 12 días hábiles según número de endpoints y complejidad."
  },
  {
    id: "soft-automation",
    category: "software",
    categoryName: "Software & Desarrollo",
    title: "Automatización de Procesos (RPA & Scripts)",
    shortDesc: "Robots de software y scripts automáticos para procesar archivos, reportes, facturas y sincronización de datos.",
    fullDesc: "Desarrollo de bots y flujos automáticos que sustituyen horas de trabajo repetitivo: extracción de información de PDFs, conciliación de hojas de cálculo, alertas proactivas y tareas cron de alta confiabilidad.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Ahorro de Tiempo",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    tags: ["Python", "RPA", "Automatización", "Cron", "ETL"],
    features: [
      "Extracción y transformación de datos no estructurados a bases de datos",
      "Generación y distribución programada de informes ejecutivos",
      "Notificaciones en tiempo real vía Telegram, Slack o correo",
      "Manejo robusto de excepciones y logging continuo de auditoría",
      "Despliegue local, en servidor dedicado o entorno serverless"
    ],
    deliverables: "Scripts y binarios empaquetados, programación de tareas de ejecución y manual operativo.",
    sla: "3 a 7 días hábiles por flujo de proceso."
  },

  // --- SOLUCIONES REMOTAS ---
  {
    id: "remote-vpn-infra",
    category: "remotas",
    categoryName: "Soluciones Remotas",
    title: "Infraestructura VPN Segura & Zero Trust",
    shortDesc: "Túneles cifrados de alta velocidad (WireGuard, IPsec, OpenVPN) para trabajo remoto sin riesgos de intrusión.",
    fullDesc: "Implementación de redes privadas virtuales corporativas con segmentación de tráfico, autenticación de dos factores (2FA/MFA) y políticas Zero Trust. Permite a sus colaboradores y contratistas acceder a recursos internos de forma cifrada desde cualquier lugar.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Seguridad Crítica",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    tags: ["WireGuard", "OpenVPN", "Zero Trust", "2FA/MFA", "Cifrado"],
    features: [
      "Configuración de servidores VPN con WireGuard o OpenVPN con cifrado ChaCha20/AES-256",
      "Autenticación multifactor obligatoria (TOTP / Google Authenticator)",
      "Segmentación de red por departamentos y control de acceso por roles (RBAC)",
      "Clientes de conexión multiplataforma (Windows, macOS, Linux, iOS, Android)",
      "Aislamiento de contratistas externos con accesos temporales y restringidos"
    ],
    deliverables: "Servidor VPN configurado, perfiles de usuario generados, manual de conexión y soporte a usuarios.",
    sla: "Implementación en 48 a 72 horas."
  },
  {
    id: "remote-helpdesk",
    category: "remotas",
    categoryName: "Soluciones Remotas",
    title: "Soporte Técnico Remoto & Mesa de Ayuda",
    shortDesc: "Atención técnica especializada en niveles L1, L2 y L3 para resolver incidencias de software y conectividad en minutos.",
    fullDesc: "Servicio de asistencia remota a través de herramientas seguras de control y diagnóstico. Gestionamos tickets, incidencias en puestos de trabajo, configuración de suites de oficina, antivirus corporativo y optimización de estaciones de trabajo.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Disponibilidad Inmediata",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    tags: ["HelpDesk", "Soporte L1/L2/L3", "Remoto", "SLA", "Tickets"],
    features: [
      "Canales de atención por WhatsApp, ticket de soporte y sesión remota segura",
      "Diagnóstico y desinfección de malware / spyware",
      "Configuración y reparación de cuentas de correo y clientes de correo",
      "Optimización de software y arranque de sistemas operativos",
      "Planes con horas mensuales prepagadas o por incidente"
    ],
    deliverables: "Sistema de tickets para seguimiento en tiempo real, informes mensuales de incidencias y resolución garantizada.",
    sla: "Tiempo de primera respuesta < 30 minutos en horario hábil."
  },
  {
    id: "remote-rdp-workspaces",
    category: "remotas",
    categoryName: "Soluciones Remotas",
    title: "Entornos de Escritorio Remoto (RDP / VDI)",
    shortDesc: "Estaciones de trabajo centralizadas en la nube para acceso colaborativo de contratistas y equipos distribuidos.",
    fullDesc: "Despliegue de Remote Desktop Services (RDS) y Virtual Desktop Infrastructure (VDI) para permitir a contratistas trabajar sobre entornos corporativos homogéneos, garantizando que los datos nunca salgan del servidor central.",
    targetAudience: ["Contratistas", "Clientes"],
    badge: "Para Equipos",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    tags: ["RDP", "VDI", "Windows Server", "Guacamole", "Cifrado"],
    features: [
      "Acceso vía navegador web sin necesidad de instalar clientes pesados (Apache Guacamole)",
      "Aislamiento de sesiones y perfiles independientes de usuario",
      "Políticas de restricción de descargas y copiado de portapapeles según rol",
      "Respaldo diario de los perfiles de usuario",
      "Acceso de baja latencia con aceleración gráfica virtual"
    ],
    deliverables: "Gateway de escritorio remoto operativo, credenciales aprovisionadas y manual de buenas prácticas.",
    sla: "Configuración en 3 a 5 días hábiles."
  },

  // --- SERVIDORES & CLOUD ---
  {
    id: "server-sysadmin",
    category: "servidores",
    categoryName: "Servidores & Cloud",
    title: "Administración y SysAdmin de Servidores",
    shortDesc: "Gestión experta de servidores Linux (Ubuntu, Debian, RHEL, AlmaLinux) y Windows Server con soporte preventivo y correctivo.",
    fullDesc: "Servicio integral de administración de sistemas: parches de seguridad, tuning del kernel, configuración de servicios (Nginx, Apache, MySQL/MariaDB, PostgreSQL, Redis, Docker), hardening y políticas de respaldo.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Misión Crítica",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    tags: ["Linux", "Windows Server", "Nginx", "Docker", "SysAdmin"],
    features: [
      "Actualizaciones periódicas de seguridad sin tiempos de caída imprevistos",
      "Hardening de SSH, configuración de Fail2ban y firewall UFW / Iptables / nftables",
      "Optimización de consumo de memoria RAM, swap y rendimiento de I/O de disco",
      "Monitoreo de métricas en tiempo real (CPU, RAM, disco, ancho de banda)",
      "Respaldo automático con copias locales y offsite cifradas"
    ],
    deliverables: "Servidor asegurado y auditado, accesos encriptados con llaves SSH y reporte mensual de métricas.",
    sla: "Soporte de emergencias 24/7 disponible."
  },
  {
    id: "server-migration",
    category: "servidores",
    categoryName: "Servidores & Cloud",
    title: "Migración de Servidores & Alta Disponibilidad",
    shortDesc: "Traslado de aplicaciones, bases de datos y correos entre proveedores de hosting o nubes con cero pérdida de datos.",
    fullDesc: "Planificamos y ejecutamos migraciones complejas desde servidores físicos a nubes públicas (AWS, Google Cloud, DigitalOcean, Hetzner, OVH) o entre proveedores. Reducimos el downtime al mínimo absoluto mediante sincronizaciones progresivas.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Zero Downtime",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`,
    tags: ["Migración", "AWS", "DigitalOcean", "Hetzner", "Cero Downtime"],
    features: [
      "Plan de migración con ventanas controladas y pruebas de reversión (Rollback)",
      "Sincronización diferencial de bases de datos y archivos mediante rsync",
      "Transición ordenada de DNS con TTL reducido para propagación instantánea",
      "Verificación exhaustiva de integridad de datos y dependencias",
      "Auditoría de rendimiento post-migración"
    ],
    deliverables: "Plan de migración previo, ejecución supervisada paso a paso y certificado de validación post-corte.",
    sla: "Planificación de 3 a 5 días y corte en horario de bajo tráfico."
  },

  // --- VPS ---
  {
    id: "vps-provisioning",
    category: "vps",
    categoryName: "VPS (Servidores Privados Virtuales)",
    title: "Aprovisionamiento & Configuración de VPS",
    shortDesc: "Instalación y optimización de servidores virtuales privados con almacenamiento NVMe de ultra velocidad.",
    fullDesc: "Desplegamos instancias VPS ajustadas a los requerimientos exactos de su proyecto. Instalamos stacks tecnológicos optimizados (LEMP, LAMP, NodeJS, Python, Docker) y afinamos cada parámetro para extraer el 100% de la capacidad de hardware.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Rendimiento Top",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    tags: ["VPS", "NVMe", "KVM", "Docker", "LEMP"],
    features: [
      "Virtualización KVM con núcleos dedicados y memoria RAM 100% garantizada",
      "Discos NVMe en arreglo RAID para lecturas y escrituras de ultra alta velocidad",
      "Elección de ubicación geográfica para menor latencia según su público objetivo",
      "Configuración de red privada interna y reglas de firewall perimetral",
      "Acceso root completo con credenciales seguras y aislamiento total"
    ],
    deliverables: "Instancia VPS activa, credenciales de administración, llaves SSH y guía de bienvenida.",
    sla: "Entrega en menos de 24 horas tras confirmación de especificaciones."
  },
  {
    id: "vps-panels",
    category: "vps",
    categoryName: "VPS (Servidores Privados Virtuales)",
    title: "Paneles de Control para VPS (cPanel, Plesk, CloudPanel)",
    shortDesc: "Gestione múltiples sitios web, bases de datos y cuentas de correo de forma gráfica y simplificada.",
    fullDesc: "Implementación y licenciamiento de paneles de control líderes de la industria. Si busca opciones de código abierto y ligeras, instalamos CloudPanel o Webmin; si busca soluciones comerciales completas, configuramos cPanel/WHM o Plesk.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Facilidad de Uso",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    tags: ["cPanel", "Plesk", "CloudPanel", "Webmin", "DNS/Email"],
    features: [
      "Instalación limpia y configuración óptima del stack web nativo del panel",
      "Gestor de certificados SSL gratuitos automáticos con Let's Encrypt",
      "Configuración de servidores de correo integrados (Postfix, Dovecot, Roundcube)",
      "Creación de usuarios con cuotas limitadas de almacenamiento y ancho de banda",
      "Capacitación básica para la administración autónoma de sitios y correos"
    ],
    deliverables: "Panel de control accesible vía HTTPS, usuarios configurados y credenciales maestras protegidas.",
    sla: "Configuración completa en 24 a 48 horas."
  },
  {
    id: "vps-backup-drp",
    category: "vps",
    categoryName: "VPS (Servidores Privados Virtuales)",
    title: "Planes de Backup Automatizado & DRP",
    shortDesc: "Protección continua ante fallos, ransomware o errores humanos con copias de seguridad remotas.",
    fullDesc: "Estrategias de respaldo 3-2-1 para entornos VPS: tres copias de sus datos, en dos soportes distintos, con al menos una copia en una ubicación geográfica externa (Cloud Storage / S3 / Wasabi).",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Tranquilidad Total",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    tags: ["Backups", "DRP", "S3", "Snapshots", "Ransomware Defense"],
    features: [
      "Snapshots diarios automatizados sin suspensión del servicio",
      "Cifrado de backups en tránsito (TLS) y en reposo (AES-256)",
      "Retención configurable (7 días diarios, 4 semanales, 12 mensuales)",
      "Simulación periódica de restauración para garantizar integridad real",
      "Alertas automáticas ante cualquier eventualidad en el proceso de copia"
    ],
    deliverables: "Scripts de backup verificados, bucket externo configurado y manual de procedimiento de recuperación ante desastres.",
    sla: "Despliegue en 48 horas."
  },

  // --- CCM (Customer Communication Management) ---
  {
    id: "ccm-omnichannel",
    category: "ccm",
    categoryName: "CCM & Comunicaciones",
    title: "Plataformas Omnicanal (WhatsApp API, SMS, Email)",
    shortDesc: "Centralice todas las comunicaciones con sus clientes en una única plataforma con automatización y trazabilidad.",
    fullDesc: "Integramos la API oficial de WhatsApp Business, pasarelas de SMS masivos y transaccionales, y servidores de email marketing. Diseñe flujos conversacionales, chatbots y supervise a su equipo de atención desde un panel unificado.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Multiplica Ventas",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    tags: ["WhatsApp API", "SMS", "Email Transaccional", "Chatbots", "CRM"],
    features: [
      "Verificación de número oficial de WhatsApp Business API con Meta",
      "Bandeja de entrada multiagente para que varios operadores atiendan desde un solo número",
      "Plantillas aprobadas para notificaciones de estados de pedido y cobro",
      "Envío de SMS con remitente personalizado y reporte de entrega garantizado",
      "Conexión con su CRM o sistema de facturación vía Webhooks"
    ],
    deliverables: "Cuenta Meta Business configurada, números vinculados, panel multiagente y plantillas redactadas.",
    sla: "Gestión y activación en 5 a 10 días hábiles."
  },
  {
    id: "ccm-voip-telephony",
    category: "ccm",
    categoryName: "CCM & Comunicaciones",
    title: "Centrales Telefónicas IP / PBX Virtual (CCM / VoIP)",
    shortDesc: "Telefonía empresarial en la nube basada en Asterisk, FreePBX o Cisco CallManager con extensiones remotas.",
    fullDesc: "Instalación de centrales telefónicas PBX en la nube. Conecte extensiones en computadoras, teléfonos IP y celulares de sus contratistas y agentes. Incluye IVR (menú interactivo de voz), colas de espera, grabación de llamadas y derivación inteligente.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Empresarial",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    tags: ["VoIP", "Asterisk", "FreePBX", "SIP Trunk", "Call Center"],
    features: [
      "Configuración de Troncales SIP nacionales e internacionales al mejor costo",
      "Menú de voz interactivo (IVR) profesional con enrutamiento de llamadas por horarios",
      "Grabación legal de llamadas y panel de estadísticas de atención",
      "Softphone para smartphones y laptops sin necesidad de hardware físico costoso",
      "Módulos para supervisores con escucha en tiempo real y susurro"
    ],
    deliverables: "PBX virtual operativa en la nube, extensiones configuradas, audios de IVR cargados y guía para usuarios.",
    sla: "Puesta en marcha en 5 a 8 días hábiles."
  },
  {
    id: "ccm-transactional-docs",
    category: "ccm",
    categoryName: "CCM & Comunicaciones",
    title: "Gestión de Documentos Transaccionales & Facturación",
    shortDesc: "Automatización en la generación y entrega segura de estados de cuenta, facturas electrónicas y contratos digitales.",
    fullDesc: "Solución CCM integral para generar automáticamente documentos PDF personalizados de alta calidad a partir de datos transaccionales, despachándolos al cliente por correo electrónico cifrado y canal móvil con validación de recepción.",
    targetAudience: ["Clientes"],
    badge: "Cumplimiento Legal",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    tags: ["Facturación", "PDF Dinámico", "Email Seguro", "Firma Digital", "CCM"],
    features: [
      "Generación ultrarrápida de comprobantes y facturas con código QR",
      "Firma electrónica de documentos para validez probatoria",
      "Servidores de correo transaccional de alta entregabilidad con IP dedicada",
      "Portal seguro de descarga para clientes con código de seguridad OTP",
      "Reportes de apertura, clics y rebotes en tiempo real"
    ],
    deliverables: "Motor de plantillas dinámico, integración con su software contable/ERP y panel de auditoría.",
    sla: "Integración en 7 a 14 días hábiles."
  },

  // --- DOMINIOS & DNS ---
  {
    id: "dom-registration-mgmt",
    category: "dominios",
    categoryName: "Dominios & DNS",
    title: "Gestión Integral & Registro de Dominios",
    shortDesc: "Registro, renovación y protección de marcas en extensiones globales (.com, .net, .org, .io) y territoriales.",
    fullDesc: "Asesoramiento y gestión de portafolios de dominios para empresas. Blindaje contra transferencias no autorizadas, ocultación de datos personales (Whois Privacy gratuito) y renovación automática garantizada para evitar pérdidas accidentales.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Identidad Digital",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    tags: ["Dominios", "DNS", "Whois Privacy", "Branding", "SSL"],
    features: [
      "Búsqueda, reserva y registro inmediato de dominios globales y locales",
      "Privacidad Whois incluida sin costo adicional para prevenir llamadas comerciales y spam",
      "Bloqueo de transferencia de registro (Registrar Lock) contra secuestros de dominio",
      "Monitoreo de expiración y alertas preventivas multicanal",
      "Gestión de delegación de servidores de nombres hacia Cloudflare, AWS Route 53 o servidores propios"
    ],
    deliverables: "Dominio registrado a nombre del cliente o empresa, acceso directo al panel de control y factura fiscal.",
    sla: "Activación inmediata (menos de 2 horas)."
  },
  {
    id: "dom-dns-security",
    category: "dominios",
    categoryName: "Dominios & DNS",
    title: "Configuración DNS Avanzada & Seguridad Antifraude",
    shortDesc: "Proteja sus correos de la bandeja de spam y suplantaciones de identidad configurando SPF, DKIM, DMARC y DNSSEC.",
    fullDesc: "Implementación profesional de registros DNS con Anycast para resolución a nivel mundial en milisegundos. Blindamos su dominio contra phishing y spoofing configurando las políticas de autenticación de correo requeridas por Google y Yahoo.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Cero Spam",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    tags: ["DNS Anycast", "SPF", "DKIM", "DMARC", "DNSSEC", "Cloudflare"],
    features: [
      "Configuración estricta de registros SPF, DKIM (2048 bits) y DMARC con política 'reject' progresiva",
      "Protección contra ataques DDoS a nivel de DNS utilizando la red global de Cloudflare",
      "Activación de DNSSEC para certificar la autenticidad de las respuestas DNS",
      "Aceleración de consultas de navegación con CDN y enrutamiento inteligente Anycast",
      "Monitoreo continuo de reputación de dominio en listas negras (RBL / Blacklists)"
    ],
    deliverables: "Zona DNS auditada y protegida, reporte de entregabilidad de correo del 100% y validación con herramientas DMARC.",
    sla: "Configuración y verificación en 24 a 48 horas."
  },
  {
    id: "dom-ssl-tls",
    category: "dominios",
    categoryName: "Dominios & DNS",
    title: "Certificados SSL/TLS & Cifrado Wildcard",
    shortDesc: "Cifrado robusto para su web, subdominios, APIs y servicios de correo con renovación automática perpetua.",
    fullDesc: "Implementación de certificados digitales SSL/TLS de validación de dominio (DV), validación de organización (OV) y certificados Wildcard (*.sudominio.com). Protegemos la transmisión de datos confidenciales y eliminamos la advertencia de 'Sitio No Seguro'.",
    targetAudience: ["Clientes", "Contratistas"],
    badge: "Candado Verde",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    tags: ["SSL/TLS", "Wildcard", "HTTPS", "Let's Encrypt", "HSTS"],
    features: [
      "Instalación de certificados para el dominio raíz y todos los subdominios ilimitados",
      "Configuración de cabeceras de seguridad estrictas (HSTS, CSP, X-Frame-Options)",
      "Redirección forzada automática de HTTP a HTTPS con cifrado TLS 1.3",
      "Renovación automatizada mediante protocolos ACME para evitar vencimientos olvidados",
      "Compatibilidad con el 99.9% de los navegadores y dispositivos modernos"
    ],
    deliverables: "Certificado instalado en el servidor, calificación 'A+' en SSL Labs y scripts de auto-renovación activos.",
    sla: "Instalación en menos de 24 horas."
  }
];

const CATEGORIES_DATA = [
  { id: "all", name: "Todos los Servicios", count: SERVICES_DATA.length },
  { id: "web", name: "Servicios Web", count: SERVICES_DATA.filter(s => s.category === "web").length },
  { id: "software", name: "Software & Desarrollo", count: SERVICES_DATA.filter(s => s.category === "software").length },
  { id: "remotas", name: "Soluciones Remotas", count: SERVICES_DATA.filter(s => s.category === "remotas").length },
  { id: "servidores", name: "Servidores & Cloud", count: SERVICES_DATA.filter(s => s.category === "servidores").length },
  { id: "vps", name: "VPS", count: SERVICES_DATA.filter(s => s.category === "vps").length },
  { id: "ccm", name: "CCM & Comunicaciones", count: SERVICES_DATA.filter(s => s.category === "ccm").length },
  { id: "dominios", name: "Dominios & DNS", count: SERVICES_DATA.filter(s => s.category === "dominios").length }
];
