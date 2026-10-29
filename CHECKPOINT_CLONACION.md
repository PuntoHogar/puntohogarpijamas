# Checkpoint de clonación — 29-10-2026

Clonación completa del sistema de **IKI** (`github.com/ikib2c/iki`) hacia
este repo (`github.com/PuntoHogar/puntohogarpijamas`), con rebranding al
brief de **Punto Hogar Pijamas — by Fredy Henao**.

> **Actualización (29-10-2026, final):** el catálogo inventado de la primera
> clonación se reemplazó por el **catálogo real de ropa del proyecto iki**:
> 88 productos con 312 fotos reales. Es el estado actual del sitio.

## Cambios aplicados

### Identidad (brief de branding)

| Qué | Antes (iki) | Ahora (Punto Hogar Pijamas) |
|---|---|---|
| Nombre | IKI | **Punto Hogar Pijamas — by Fredy Henao** |
| Eslogan | Todo lo que te hace feliz, en un solo lugar | **Descansa cómodo, siéntete en casa** |
| Colores | violeta/cian del sistema original | Verde lima `#A6C83A`, carbón `#27313B`, acero `#7D858D`, perla `#EEF0F2`, rosa empolvado `#E7C8CF`, azul noche `#263747` |
| Tipografías | Fredoka/Outfit | **Poppins** + **Montserrat** + **Dancing Script** |
| Logo | `logo_120.png` de IKI | `Logo circular de pijamas Punto Hogar.png` + derivados 120/512 |
| Favicons | genéricos de IKI | `favicon.ico`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` generados del logo de marca |
| Eslogan en título/tarjeta de compartir | frase de IKI | frase de Punto Hogar (corregida en `aplicarIdentidad` y en el canvas de compartir) |

### Contacto y operación

| Qué | Antes | Ahora |
|---|---|---|
| WhatsApp pedidos | 573156371501 | **573147247260** (+57 314 724 7260) |
| WhatsApp información | vacío | **573147247260** |
| Razón social | IKI | **Punto Hogar Pijamas by Fredy Henao** |
| Instagram / TikTok | vacíos | vacíos (se configuran en el panel) |
| Pixel de Meta / GA4 | IDs de IKI | **Retirados** (vacíos = apagado) |
| Catálogo | 2.322 productos de iki (juguetes, joyas, ropa) | **88 productos de ropa/pijamas** con sus fotos reales |
| Favoritos | lista de iki | misma lista de iki menos `m85` (no está en las 8 categorías de la tienda) |
| Hero | lista de iki | misma lista de iki menos `m85`, más `m16` (6 fotos) |
| Enlaces de ficha (`?art=`) | `ikib2c.github.io/iki` | conservan los `cid` de iki (`IKI-XXXX`) dentro de esta tienda |

### Catálogo (lo más importante de esta clonación)

1. **Primera versión (descartada):** 59 productos inventados (`pj01…`) cuyas
   fotos no existían en el proyecto → se generaron placeholders de color con
   códigos (`PJ01`, `NV02`…). El sitio cargaba, pero no mostraba ropa real.
2. **Versión final:** se descargó `catalogo.js` de `ikib2c/iki` (2.322
   productos), se filtraron las 8 categorías de ropa y quedaron **88
   productos**: pijamas 5, conjuntos 16, pantalones 16, shorts 15, interior
   13, enterizos 7, niños 7, navidad 9.
3. **Fotos:** las 312 referencias ya existían en `img/p/` (los archivos se
   nombran con el hash del URL original); 0 faltantes, 0 URLs externas.
4. **Codificación:** la fuente de iki mezcla Windows-1252 y UTF-8; se reparó
   el mojibake por cadena. Verificado: 0 caracteres de reemplazo (`U+FFFD`).
5. **Precios:** se adoptó la regla de iki: base × (1 + margen), ropa al 60 %,
   global 25 %, redondeo a mil y +10 % en Navidad (15-11 a 06-01).
6. **Hero/favoritos:** se copiaron de la configuración publicada de iki y se
   validó que todos los IDs existan en el catálogo filtrado.

### Activos de marca

| Archivo | Origen |
|---|---|
| `favicon.ico`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` | Generados del logo circular de pijamas |
| `logo_120.png`, `logo_512.png` | Redimensionados del logo maestro (faltaban y el JS los usa) |
| `qr_puntohogar.png` | Generado (QR de la tienda) para la tarjeta de compartir |

### Caché

- Favicons e imágenes del catálogo con `?v=2` / `?v=3` en los enlaces.
- `<script src="catalogo.js?v=3">` y `configuracion.js?v=3` para forzar la
  recarga tras cada cambio de catálogo/configuración.
- GitHub Pages cachea 10 minutos (`max-age=600`).

## Commits de la clonación

| Commit | Fecha | Qué hizo |
|---|---|---|
| `e68b206` | 29-10-2026 | Clonación completa desde iki + branding Punto Hogar Pijamas |
| `55181e8` | 29-10-2026 | Favicons reales de la marca + 128 placeholders de producto |
| `4764026` | 29-10-2026 | Logos faltantes `logo_120.png` y `logo_512.png` |
| `94af1c6` | 29-10-2026 | Hero y favoritos poblados con IDs (estaban vacíos) |
| `7d1446d` | 29-10-2026 | Eslogan de marca, cache-busting y QR de compartir |
| `134f247` | 29-10-2026 | Catálogo real de iki: 88 productos con fotos reales |

## Verificación

| Prueba | Resultado |
|---|---|
| Sintaxis `catalogo.js` / `data/configuracion.js` (`node --check`) | OK |
| `scripts/validar_catalogo.py` | OK, 88 productos, 8 categorías |
| Referencias de imagen del catálogo | **312/312 existen** en `img/p/` |
| Caracteres `U+FFFD` en `catalogo.js` | **0** |
| Render local (jsdom) | 88 productos, 12 tarjetas visibles, 6 hero, 19 favoritos |
| Render en Chrome real (local) | 0 imágenes rotas, 0 errores de consola |
| Producción (CDP, Chrome headless) | 88 productos, 6 hero, 19 favoritos, **0 imágenes rotas, 0 errores, 0 requests fallidos, 0 HTTP ≥ 400** |
| Capturas de pantalla (local y producción) | Hero, categorías, favoritos y grilla con fotos reales |

## Pendientes manuales

1. **Panel de administración**: crear un token fine-grained sobre
   `PuntoHogar/puntohogarpijamas` (Contents Read+write), cargarlo en el panel
   y usar "Publicar para TODOS" cuando se cambien precios o favoritos.
2. **Analítica**: pegar los IDs propios de Pixel de Meta / GA4 / Clarity en
   el panel (hoy todo apagado).
3. **Datos legales**: NIT, dirección y correo están vacíos; se configuran en
   el panel y `legal.html` los absorbe.
4. **Limpieza opcional**: los 128 placeholders `pj*.webp` ya no se usan y
   quedan ~1.800 fotos de iki (juguetes/joyas) sin uso en `img/p/`. No afectan
   al sitio; se pueden borrar si se quiere aligerar el repo.
5. **Workflow "Verificar catalogo"**: usa `JSON.parse` sobre un archivo JS;
   si se va a ejecutar a mano, cambiar el parser. Es dispatch-only.
6. **Dominio propio** (opcional): agregar CNAME y actualizar `canonical`,
   `og:url`, `sitemap.xml` y las URLs de `catalogo.js`.
