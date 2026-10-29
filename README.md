# Punto Hogar Pijamas — Descansa cómodo, siéntete en casa

Tienda online de pijamas y ropa para dormir de **Punto Hogar Pijamas — by Fredy Henao** (Colombia): venta asistida por WhatsApp, publicada en **https://PuntoHogar.github.io/puntohogarpijamas/** desde el repositorio `github.com/PuntoHogar/puntohogarpijamas`. Sin frameworks, sin build y sin backend: HTML + CSS + JS en un solo archivo, catálogo estático y panel de administración que publica la configuración por la API de GitHub.

El proyecto nació el **29-10-2026** como clon de `github.com/ikib2c/iki` con rebranding completo al brief de Punto Hogar Pijamas (ver `CHECKPOINT_CLONACION.md`). El catálogo actual es el **catálogo real de ropa del proyecto iki**: 88 productos con 312 fotos reales.

---

## 1. Arquitectura de archivos

| Archivo / carpeta | Rol |
|---|---|
| `index.html` | Tienda completa (HTML + CSS + JS en un archivo). Todo el comportamiento vive aquí |
| `catalogo.js` | Catálogo activo (88 productos). **Generado manualmente** a partir del catálogo de iki; no hay cron que lo regenere |
| `data/configuracion.js` | Configuración publicada desde el panel ("Publicar para TODOS"). La mantiene el panel vía API de GitHub |
| `legal.html` | 8 políticas con anclas; absorbe la configuración publicada (razón social, NIT, contacto) |
| `img/p/` | Fotos de productos (webp, nombre = hash del URL original) |
| `favicon.ico`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` | Favicons generados del logo de marca |
| `logo_120.png`, `logo_512.png` | Logo para menú móvil, tarjeta de compartir y QR |
| `qr_puntohogar.png` | QR de la tienda que dibuja la tarjeta de compartir |
| `Logo circular de pijamas Punto Hogar.png` | Logo maestro de la marca |
| `sitemap.xml`, `robots.txt` | SEO: canonical y envío a Google Search Console |
| `.github/workflows/` | QA smoke diario de producción (curl) y verificación manual del catálogo (dispatch-only) |
| `scripts/validar_catalogo.py` | Validación básica de estructura, categorías y número de productos de `catalogo.js` |
| `Brief_Branding_Punto_Hogar_Pijamas.md` | Manual de marca |
| `README.md`, `AGENTS.md`, `CHECKPOINT_CLONACION.md`, `PLAN_AUDITORIA_QA.md` | Documentación del proyecto |

---

## 2. Catálogo de productos

`catalogo.js` contiene **88 productos** tomados del catálogo real del proyecto iki (`ikib2c/iki`), filtrando únicamente las líneas de ropa/pijamas. Se conservaron sus IDs (`mXX`), referencias (`cid`/`sku`), nombres, variantes y fotos.

| Categoría | Productos |
|---|---|
| Pijamas | 5 |
| Conjuntos | 16 |
| Pantalones | 16 |
| Shorts | 15 |
| Interior | 13 |
| Enterizos | 7 |
| Niños | 7 |
| Navidad | 9 |
| **Total** | **88** |

Detalles técnicos:

- **Fotos 100 % locales**: las 312 referencias de imagen viven en `img/p/<hash>.webp` (hash del URL original de iki). No hay URLs externas en el catálogo.
- **IDs estables**: los IDs y `cid` de iki se conservan para que los enlaces de pedido (`?art=IKI-XXXX`) sigan funcionando.
- **Codificación corregida**: el catálogo fuente de iki mezcla Windows-1252 y UTF-8; los nombres se normalizaron a UTF-8 limpio (tildes y `ñ` correctos).
- **Hero y favoritos** (tomados de la configuración publicada de iki):
  - `heroIds`: `m86,m59,m80,m81,m82,m16` (6 fotos en el collage principal).
  - `favoritos`: 19 productos (`m86,m59,m80,m81,m84,m03,m06,m08,m11,m15,m16,m18,m21,m23,m29,m44,m47,m61,m66`).
- Las imágenes heredadas de iki que no usa el catálogo (juguetes, joyas, otros productos) permanecen en `img/p/` sin afectar el sitio.

### Precios

El precio que trae `catalogo.js` (`p`) es la base; la tienda muestra `p × multiplicadorBase × (1 + margen)`, redondeado a mil:

| Parámetro | Valor |
|---|---|
| `margenGlobal` | 0.25 |
| `margenesPorCategoria` (ropa: pijamas, conjuntos, pantalones, shorts, interior, enterizos, niños) | 0.60 |
| `margenTemporada` | 0.10 adicional en `navidad` (15-11 a 06-01) |
| `multiplicadorBase` | 1 |
| `redondeo` | 1000 |

Ejemplo: base $66.000 → venta $106.000; en temporada, un producto de Navidad con base $59.000 → $100.000.

Los precios se pueden cambiar desde el panel ("¿Cuánto quieres ganar?") sin tocar código; lo publicado en `data/configuracion.js` manda sobre la fábrica.

---

## 3. Panel de administración

Acceso: enlace "Administración" del pie, `?admin` o **Ctrl+Shift+A**. Clave de fábrica: **PUNTOHOGAR123*** (barrera de conveniencia, no seguridad real).

- **Publicar para TODOS**: sube la configuración vigente a `data/configuracion.js` vía API de GitHub (`REPO_API` apunta a `PuntoHogar/puntohogarpijamas`). Tarda ~1 minuto en verse en la tienda.
- **Guardar en MI computador**: solo previsualiza en ese navegador (localStorage).
- La clave del panel **nunca** se publica en `data/configuracion.js`.

---

## 4. Branding — Punto Hogar Pijamas

### Colores

| Color | Hex | Uso |
|---|---|---|
| Gris carbón | `#27313B` | Textos principales |
| Gris acero | `#7D858D` | Elementos secundarios |
| Verde lima | `#A6C83A` | Acento principal, CTA |
| Blanco | `#FFFFFF` | Fondos |
| Gris perla | `#EEF0F2` | Fondos suaves |
| Rosa empolvado | `#E7C8CF` | Acentos complementarios |
| Azul noche | `#263747` | Piezas nocturnas |

### Tipografía

- **Poppins** (titulares, 600/700/800)
- **Montserrat** (cuerpo, 400–700)
- **Dancing Script** (acentos manuscritos)

### Logo

`Logo circular de pijamas Punto Hogar.png`: circular, "Punto" (gris carbón + verde lima), "Hogar" (gris acero con casa en la H), "Pijamas" (script) y firma "by Fredy Henao"; ilustración de pijama, luna y estrellas. Los favicons y los logos de 120/512 px derivan de este archivo.

### Eslogan y contacto

- Eslogan: **Descansa cómodo, siéntete en casa**
- WhatsApp pedidos e información: **+57 314 724 7260** (`573147247260`)

---

## 5. Operación diaria

| Tarea | Cómo |
|---|---|
| Cambiar precios, favoritos, ocultar productos/categorías | Panel → "Ver cambios ahora" → "Publicar para TODOS" |
| Previsualizar sin publicar | Panel → "Guardar en MI computador" |
| Editar el catálogo (productos, fotos, variantes) | Editar `catalogo.js` con cuidado y validar con `scripts/validar_catalogo.py` |
| Cambiar el logo, favicon o QR | Reemplazar los archivos de la raíz (misma ruta) y subir el `?v=` de caché en `index.html`/`legal.html` |
| Refrescar el catálogo en los navegadores | Subir `?v=` del `<script src="catalogo.js?v=...">` en `index.html` |

---

## 6. Despliegue

1. Commit y push a la rama **`master`** (el repo no usa `main`):
   ```bash
   git push origin master
   ```
2. GitHub Pages sirve desde la raíz del repo.
3. URL: `https://PuntoHogar.github.io/puntohogarpijamas/` (GitHub Pages tarda 1–2 minutos en publicar).
4. Las imágenes y los archivos estáticos se cachean 10 minutos (`Cache-Control: max-age=600`); para forzar una recarga se usa un parámetro de versión (`?v=N`).

---

## 7. Verificación

Antes de publicar, como mínimo:

```bash
node --check catalogo.js
python scripts/validar_catalogo.py
```

El plan completo de auditoría (sintaxis, catálogo, render, producción y pedido real) está en **`PLAN_AUDITORIA_QA.md`**. Resumen del último chequeo de producción: **88 productos, 6 fotos en hero, 19 favoritos, 0 imágenes rotas, 0 errores de consola y 0 respuestas HTTP ≥ 400**.

---

## 8. Historial de commits clave

| Commit | Qué hizo |
|---|---|
| `e68b206` | Clonación completa desde iki + branding Punto Hogar Pijamas |
| `55181e8` | Favicons reales de la marca + placeholders de producto |
| `4764026` | Logos faltantes `logo_120.png` y `logo_512.png` |
| `94af1c6` | Hero y favoritos con productos (estaban vacíos) |
| `7d1446d` | Eslogan de marca, cache-busting y QR de compartir |
| `134f247` | Catálogo real de iki: 88 productos con fotos reales |

---

## 9. Contacto

- **WhatsApp**: +57 314 724 7260
- **Marca**: Punto Hogar Pijamas — by Fredy Henao
- **Repositorio**: `github.com/PuntoHogar/puntohogarpijamas`
