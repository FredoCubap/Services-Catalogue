# Demo — Catálogo de Productos

Demo estático del catálogo de productos para clientes. **No contiene código fuente ni lógica de backend del sistema SISTEMA_GESTIÓN.**

## Contenido

- `index.html` — página principal del demo
- `styles/main.css` — estilos
- `js/data.js` — datos mockeados (sin conexión a backend)
- `js/catalogue.js` — lógica de renderizado

## Publicación

Este demo se publica en GitHub Pages del repo público `Services-Catalogue` mediante el script `scripts/sync-demo.ps1`.

```powershell
cd "C:\Users\fredo\SISTEMA_GESTIÓN\scripts"
.\sync-demo.ps1
```

URL pública: https://fredocubap.github.io/Services-Catalogue/demos/sistema-gestion/

## Reglas

- **Solo HTML/CSS/JS estático.** Sin llamadas a API, sin variables de entorno, sin lógica de backend.
- **Datos mockeados.** No usar datos reales de clientes ni del sistema.
- **Sin código fuente.** No incluir archivos del backend ni del frontend del sistema.
- **Versión visible.** Cada demo debe mostrar su versión en el footer.
