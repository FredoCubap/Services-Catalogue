# Cómo contribuir

Flujo ágil y sin ceremonias:

```
Issue / Tarea ➔ Rama desde main ➔ Commits atómicos ➔ PR a main ➔ Review ➔ Merge
```

---

## 1. Referencia obligatoria

Todo cambio parte de una referencia clara y el Pull Request (PR) la enlaza siempre:

- **Issue de GitHub**: Es la vía estándar (`gh-` + número del issue, por ejemplo `Closes #12`).
- **Tarjeta de gestión / Tablero interno** (si aplica).

No se acepta ningún PR sin su correspondiente referencia o issue justificado.

### Antes de crear la rama, planifica

Haz una estimación rápida: nombre de la rama, commits previstos y si el cambio cabe en el límite recomendado de [500 líneas cambiadas](#tamaño-un-pr-debe-no-superar-500-líneas-cambiadas). Si no cabe, divídelo en varios PRs temáticos (por ejemplo: primero estructura/datos, luego componentes/estilos).

---

## 2. Ramas

Formato de nomenclatura:

```
<prefijo>/<ref>-descripcion-breve
```

| Origen | `<ref>` | Ejemplo |
|---|---|---|
| Issue de GitHub | `gh-` + número del issue | `feat/gh-12-filtro-precio-vps` |
| Tarea interna | código o número de tarea | `fix/45-desbordamiento-modal-movil` |

### Reglas para ramas:
- Se crea siempre a partir de `main` actualizado.
- **Prefijo:** el mismo del cambio principal (ver [prefijos](#prefijos)).
- Todo en minúsculas, formato kebab-case y **ASCII puro**: sin tildes, sin `ñ` y sin espacios.
- Guion entre el número y la descripción, y sin guion final:
  - ❌ *Mal:* `feat/40agrega-servicio`, `fix-100-arreglar-boton`, `feat/invoicePDF`
  - ✅ *Bien:* `feat/gh-12-nueva-categoria-ccm`, `fix/gh-18-estilo-tarjeta-vps`
- La rama se elimina tras mergear el PR.

### Conflictos con `main` (Rebase)

Mantén tu rama actualizada con **rebase**, no con commits de merge de `main`:

```bash
git fetch origin
git rebase origin/main
# En caso de conflicto: resuelve los ficheros, git add <ficheros> y git rebase --continue
git push --force-with-lease
```

- Si surge algún problema durante el rebase: `git rebase --abort`.
- Usa siempre `--force-with-lease` en lugar de `--force`.
- Nunca hagas rebase ni push forzado sobre la rama `main`.

---

## 3. Commits

### Atómicos y en orden

- **Un commit, un cambio lógico.** No mezcles en un mismo commit un refactor de estilos, un cambio de datos y la corrección de un bug.
- **Orden:** primero la estructura o refactor base, luego la funcionalidad o datos nuevos, y al final documentación o retoques.

### Título

```
<prefijo>: <verbo en 3ª persona> <descripción corta>
```

- **Verbo en 3ª persona del presente:** *agrega*, *corrige*, *actualiza*, *elimina*, *optimiza*. Nunca en infinitivo (*agregar*) ni en participio (*agregado*).
- Minúscula tras los dos puntos y sin punto final.
- Se permiten tildes y caracteres en español (`ñ`).
- Máximo 72 caracteres.
- Sin paréntesis en el título. Si hace falta detallar alcance o contexto, se escribe en el body.
- Prohibidos los títulos genéricos o vacíos: `Update file`, `fix`, `correcciones`, `cambios`, `wip`.
- **Nunca** añadir `Co-Authored-By`.

### Prefijos

| Prefijo | Uso |
|---|---|
| `feat` | Funcionalidad nueva o servicio visible en el catálogo |
| `fix` | Corrección de un fallo visual, de filtrado o de interfaz |
| `refactor`| Reorganización de código JS/CSS sin cambio de comportamiento |
| `style` | Ajustes estéticos, espaciado o pulido visual CSS |
| `docs` | Cambios exclusivamente en documentación (`README.md`, guías) |
| `chore` | Tareas de configuración, scripts o archivos del repositorio |
| `ci` | Workflows de GitHub Actions |

### Body del Commit

**Obligatorio si el cambio no es trivial.** Explica el **por qué** del cambio (el *qué* ya lo cuenta el diff de Git). Va separado del título por una línea en blanco y con renglones de máximo 72 caracteres:

```
fix: corrige el cálculo de ancho del modal en dispositivos móviles

En pantallas con ancho menor a 400px el modal de cotización sobresalía
del viewport por tener min-width fijado en 380px con márgenes laterales.
Se sustituyó por un valor porcentual con max-width restrictivo.
```

---

## 4. Pull Requests

### Título del PR

```
<Verbo en 3ª persona> <descripción funcional>, rel <ref>
```

- Mayúscula inicial, sin prefijo `feat:` o `fix:`.
- Ejemplo:
  ```
  Agrega cálculo automático de cotizaciones en modal, rel gh-14
  Corrige el centrado del icono en tarjetas de dominios, rel gh-22
  ```

### Tamaño: máximo 500 líneas cambiadas

- Un PR pequeño se revisa con mayor velocidad, reduce riesgos y facilita el control de calidad.
- No cuentan los archivos generados ni la documentación extensa si va en su propio PR.
- Si el cambio requiere más de 500 líneas, divídelo en etapas o explica la justificación en la sección **Tamaño** de la plantilla del PR.

### Antes de solicitar Review

1. Abre el catálogo en el navegador (`index.html` o vía servidor local) y verifica:
   - Que no existan errores en la consola de JavaScript.
   - Que el filtrado por categorías y la búsqueda funcionen correctamente.
   - Que la visualización responsive en móvil y escritorio sea fluida.
2. Revisa que el código cumpla con los estándares de CSS Vanilla y HTML semántico sin dependencias externas innecesarias.

### Review y Merge

- Las correcciones solicitadas en la revisión se suben como nuevos commits en la misma rama.
- El merge se realiza mediante **Merge commit** o **Squash and merge** según la naturaleza de la rama.
- Tras el merge, se elimina la rama remota.

---

## 5. Rama `main`

- `main` es la rama de producción y la fuente directa para el despliegue en **GitHub Pages**.
- No se realiza push directo a `main`: todo cambio entra a través de Pull Request validado.
- Un workflow automatizado supervisa la rama `main` y alerta sobre cualquier push directo.
