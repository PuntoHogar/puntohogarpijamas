# AGENTS.md — Guía para trabajar en este repositorio

Tienda al detal de **Punto Hogar Pijamas — by Fredy Henao**: un `index.html`
monolítico publicado por GitHub Pages en
**https://PuntoHogar.github.io/puntohogarpijamas/**, con checkout por WhatsApp
(+57 314 724 7260). Clonada de `github.com/ikib2c/iki` el 29-10-2026 y
rebrandeada al brief de Punto Hogar Pijamas. Ver `README.md` para la
arquitectura completa y `CHECKPOINT_CLONACION.md` para el historial.

## Reglas de oro

1. **El repo es público.** Nada de tokens, llaves ni costos reales en claro.
   Los archivos privados (`.txt` con tokens, enlaces de configuración) viven
   fuera del repo o en `.gitignore`, y **no se commitean**.
2. **`catalogo.js` es una foto estática** del catálogo real de iki (88
   productos de ropa). No hay cron ni proveedor que lo regenere: se edita a
   mano con cuidado y se valida con `scripts/validar_catalogo.py`.
3. **`data/configuracion.js` lo escribe el PANEL** (API de GitHub), no las
   personas. Si se cambia algo de la tienda a mano, hay que actualizar también
   este archivo o el cambio será invisible para los visitantes.
4. La rama de publicación es **`master`** (no `main`). Publicar =
   `git push origin master`.
5. Antes de publicar: sintaxis JS OK y catálogo válido (ver comandos abajo).
6. Textos de la tienda: español de Colombia, tuteo, tono cálido y tranquilo
   (descanso, hogar). Los mensajes de commit no llevan tildes (estilo
   histórico del proyecto).

## Identidad de marca (brief)

- Nombre: **Punto Hogar Pijamas** · Firma: **by Fredy Henao**.
- Eslogan: **Descansa cómodo, siéntete en casa**.
- Colores (`:root` de `index.html`): verde lima `#A6C83A` (primario), gris
  carbón `#27313B` (texto), gris acero `#7D858D`, gris perla `#EEF0F2`,
  rosa empolvado `#E7C8CF`, azul noche `#263747`.
- Tipografías: **Poppins** (titulares) + **Montserrat** (cuerpo) +
  **Dancing Script** (acentos). Se cargan por Google Fonts.
- Logo: `Logo circular de pijamas Punto Hogar.png` (maestro), con derivados
  `logo_120.png`, `logo_512.png` y favicons (`favicon.ico`, `favicon-32.png`,
  `favicon-48.png`, `apple-touch-icon.png`).
- WhatsApp pedidos e información: **`573147247260`** (314 724 7260).
- Sin tienda física: no hay dirección ni mapas; solo entrega a domicilio.

## Comandos de verificación

```bash
node --check catalogo.js
node --check data/configuracion.js
python scripts/validar_catalogo.py
```

Sintaxis de los `<script>` inline de `index.html` (los dos primeros son
JSON-LD y no cuentan):

```bash
node -e "const h=require('fs').readFileSync('index.html','utf8');const re=/<script(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>([\s\S]*?)<\/script>/gi;let m;while((m=re.exec(h))!==null){if(m[1].trim())new Function(m[1]);}console.log('OK')"
```

Auditoría de render y de producción: ver `PLAN_AUDITORIA_QA.md`.
El workflow `qa-smoke.yml` corre todos los días a las 12:00 UTC contra el
sitio publicado y abre/cierra un issue con la etiqueta `qa-smoke` si falla.

## Mapa del código (index.html)

- **Configuración editable**: `TIENDA_DEFECTO` y `PRECIOS_DEFECTO` son la
  FÁBRICA; `data/configuracion.js` (`window.CONFIG_PUBLICADA`) es lo
  PUBLICADO desde el panel y **manda sobre la fábrica**. "Guardar en MI
  computador" queda solo en localStorage del navegador.
- **Precios**: `precioFinal(p)` = `p × multiplicadorBase × (1 + margen)`,
  redondeado a mil. Ropa con margen 0.60, global 0.25, temporada de Navidad
  +0.10 entre el 15-11 y el 06-01. El precio base vive en `catalogo.js`.
- **Catálogo**: `CATALOGO_IKI` se evalúa al cargar y se copia a
  `window.PRODUCTOS` aplicando precios. Categorías en `CATS` (pijamas,
  conjuntos, pantalones, shorts, interior, enterizos, niños, navidad).
- **Hero y favoritos**: `TIENDA_DEFECTO.heroIds` / `.favoritos` (y lo
  publicado) usan los IDs reales del catálogo (`mXX`). Si un ID no existe,
  esa foto desaparece del collage/carrusel.
- **Carrito**: `cart` fusiona líneas por `lineId`, el total sale de
  `getCartSummary()` y el pedido se arma en `sendWhatsAppOrder()` hacia
  `wa.me/573147247260` con referencias de producto y precios finales.
- **Panel de administración**: login con `TIENDA_DEFECTO.claveAdmin`
  (fábrica `PUNTOHOGAR123*`; es una barrera de conveniencia, no seguridad
  real), se abre con "Administración" del pie, `?admin=1` o Ctrl+Shift+A.
  Publica TIENDA+PRECIOS a `data/configuracion.js` vía `REPO_API`
  (`https://api.github.com/repos/PuntoHogar/puntohogarpijamas`) y **nunca**
  publica la clave.
- **Analítica**: Pixel de Meta, GA4 y Clarity vienen vacíos de fábrica; se
  activan pegando el ID en el panel.
- **Sincronización**: no existe. `sync-catalogos.yml` es dispatch-only y solo
  verifica el catálogo; `scripts/validar_catalogo.py` es el validador local.

## Gotchas conocidos

- **Fotos por hash**: en `img/p/` conviven 2.000+ webp heredados de iki
  (juguetes, joyas, otros productos). El catálogo actual referencia 312;
  el resto no se usa pero no estorba. Los 128 placeholders `pj*.webp` que se
  generaron al inicio de la clonación quedaron sin uso.
- **Fuente de iki con codificación mixta**: su `catalogo.js` mezcla
  Windows-1252 y UTF-8. Al regenerar nombres hay que reparar el mojibake por
  cadena (así se hizo con `m75` "Única" y "Moño") y verificar con:
  `python -c "print(open('catalogo.js',encoding='utf-8').read().count('\ufffd'))"`
  (debe dar 0).
- **Caché**: GitHub Pages cachea estáticos 10 minutos. Al reemplazar
  favicons, logos o `catalogo.js`, subir el `?v=` correspondiente en
  `index.html`/`legal.html` o los navegadores seguirán viendo lo viejo.
- **Sin service worker**: no hay PWA ni caché persistente; un "recargar" o
  cerrar y abrir la pestaña basta.
- **El workflow "Verificar catalogo" usa `JSON.parse`** sobre `catalogo.js`,
  pero el archivo es JavaScript con claves sin comillas: si se ejecuta a
  mano fallará. Es dispatch-only, no rompe producción. Si se quiere usar en
  serio, cambiar el parser a `eval`/`new Function` o usar
  `scripts/validar_catalogo.py`.
- **Auditorías con Chrome headless**: si el puerto 9222 está ocupado por una
  instancia vieja, el script de auditoría puede reportar una página anterior.
  Verificar el dueño con `netstat -ano | findstr :9222` y matar ese árbol
  antes de auditar. Las imágenes bajo el pliegue aparecen como `pending`:
  es lazy-load normal, no un error.
- **Las fechas de temporada** dependen del reloj del visitante; el margen de
  Navidad se aplica solo dentro de la ventana configurada.
