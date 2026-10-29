# Plan de auditoría y QA — Punto Hogar Pijamas

Qué se prueba, cómo y cuándo, para publicar sin miedo. Regla de oro del
repo: **no se commitea nada sin que la verificación esté en verde**.

## Niveles de verificación

### L0 — Sintaxis (antes de cada commit)

```bash
node --check catalogo.js
node --check data/configuracion.js
```

Bloques `<script>` inline de `index.html` (los dos primeros son JSON-LD y no
cuentan):

```bash
node -e "const h=require('fs').readFileSync('index.html','utf8');const re=/<script(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>([\s\S]*?)<\/script>/gi;let m;while((m=re.exec(h))!==null){if(m[1].trim())new Function(m[1]);}console.log('OK')"
```

### L1 — Integridad del catálogo

```bash
python scripts/validar_catalogo.py
```

Esperado: **88 productos** y las 8 categorías
(`pijamas, conjuntos, pantalones, shorts, interior, enterizos, ninos, navidad`).

Chequeo extendido (IDs de hero/favoritos válidos, 312 referencias de imagen
existentes y 0 caracteres `U+FFFD`):

```bash
node -e "
const fs=require('fs');
const t=fs.readFileSync('catalogo.js','utf8');
const a=eval(t.match(/const CATALOGO_IKI=(\[[\s\S]*\]);/)[1]);
const ids=new Set(a.map(p=>p.id));
const imgs=a.flatMap(p=>[p.img,...(p.imgs||[])]).filter(Boolean);
const miss=imgs.filter(i=>!fs.existsSync(i));
console.log('productos:',a.length,'refs:',imgs.length,'faltantes:',miss.length);
const cfg=fs.readFileSync('data/configuracion.js','utf8');
const m=JSON.parse(cfg.slice(cfg.indexOf('{'),cfg.lastIndexOf('}')+1));
const hero=m.tienda.heroIds.split(','),fav=m.tienda.favoritos.split(',');
console.log('hero sin producto:',hero.filter(i=>!ids.has(i)));
console.log('favoritos sin producto:',fav.filter(i=>!ids.has(i)));
console.log('U+FFFD:',t.split('\ufffd').length-1);
"
```

Esperado: `faltantes: 0`, listas de IDs inexistentes vacías y `U+FFFD: 0`.

### L2 — Render local (antes de publicar)

Abrir `index.html` en Chrome (o `file:///.../index.html`) y ejecutar en la
consola de DevTools:

```js
JSON.stringify({
  href: location.href,
  productos: PRODUCTOS.length,
  tarjetas: document.querySelectorAll('.card').length,
  imagenesDeTarjeta: document.querySelectorAll('.card img').length,
  hero: document.querySelectorAll('#heroGal img').length,
  favoritos: document.querySelectorAll('#carFav .cari').length,
  rotas: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src)
})
```

Esperado: `productos: 88`, `tarjetas` > 0, `imagenesDeTarjeta` = `tarjetas`,
`hero: 6`, `favoritos: 19`, `rotas: []`.

Captura de referencia con Chrome headless:

```bash
chrome --headless=new --disable-gpu --window-size=1400,1400 \
  --screenshot=local.png --user-data-dir=perfil-temporal \
  "file:///ruta/al/iki/index.html"
```

### L3 — Producción (después de publicar)

1. **Despliegue vivo** (GitHub Pages tarda 1–2 minutos; caché de 10 min):

   ```bash
   curl -s https://PuntoHogar.github.io/puntohogarpijamas/catalogo.js?v=3 | grep -c '{id:'
   ```

   Esperado: `88`.

2. **Archivos y fotos clave** responden 200:

   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" https://PuntoHogar.github.io/puntohogarpijamas/
   curl -s -o /dev/null -w "%{http_code}\n" https://PuntoHogar.github.io/puntohogarpijamas/img/p/91a4817c6ae271c6.webp
   curl -s -o /dev/null -w "%{http_code}\n" https://PuntoHogar.github.io/puntohogarpijamas/qr_puntohogar.png
   ```

3. **Auditoría de render en producción** con Chrome headless y CDP: navegar
   a la URL (no a `file://`) y correr el mismo chequeo de L2 en la consola
   remota. Además de lo anterior, con `Network.enable` verificar:
   - **0** `Network.loadingFailed` (sin `net::ERR_*`).
   - **0** respuestas HTTP ≥ 400.
   - **0** errores de consola (`console.error`, `Runtime.exceptionThrown`).
   - Las imágenes bajo el pliegue aparecen como `pending`: es lazy-load,
     no un fallo.

   Resultado del último chequeo (commit `134f247`): 88 productos, 6 hero,
   19 favoritos, 0 rotas, 0 errores, 0 requests fallidos, 0 HTTP ≥ 400.

4. **Vista móvil**: abrir la URL en el celular y recorrer hero, burbujas de
   categoría, favoritos, grilla, ficha y carrito.

### L4 — Pedido real de prueba (tras publicar)

1. Agregar 2–3 productos variados (uno de Navidad, uno de ropa interior, uno
   de niños).
2. Completar el checkout con datos de prueba y enviar el pedido.
3. Verificar en el WhatsApp **+57 314 724 7260**: llega
   `NUEVO PEDIDO — PUNTO HOGAR PIJAMAS`, con precios finales correctos
   (base × margen, redondeo a mil) y referencias por `cid`/`sku`.
4. Probar desde el celular (incluido iPhone si hay disponible).

El workflow `qa-smoke.yml` corre L3 parcial (index y legal responden 200)
todos los días a las 12:00 UTC y abre/cierra un issue con etiqueta
`qa-smoke` si falla.

## Calendario sugerido

| Momento | Nivel |
|---|---|
| Cada commit local | L0 + L1 |
| Cada push a `master` | L2 (render local) |
| Tras activar Pages o cambiar catálogo/precios/branding | L3 + L4 |
| Cambios grandes (precios, panel, checkout) | L1 + L2 + L3 + L4 |

## Gotchas de QA

- **Puerto 9222 ocupado**: si hay una instancia vieja de Chrome headless, la
  auditoría CDP puede reportar una página anterior (por eso una auditoría
  mostró 59 productos cuando ya había 88). Verificar el dueño con
  `netstat -ano | findstr :9222` y matar ese árbol antes de auditar.
- **El script de auditoría navega a la URL de producción**: para auditar
  `file://` hay que abrir Chrome directamente con la ruta local y no enviar
  `Page.navigate` a la URL pública.
- **Caché de GitHub Pages**: 10 minutos (`max-age=600`). Para verificar un
  cambio recién publicado, usar `?v=N` en la URL del archivo o esperar.
- **Lazy-load**: las imágenes bajo el pliegue no están "rotas"; aparecen
  como pendientes hasta que se hace scroll.
- **Codificación**: el catálogo fuente de iki mezcla Windows-1252 y UTF-8;
  cualquier regeneración debe dejar 0 caracteres `U+FFFD` y nombres como
  "Pijama Navideña", "Moño" y "Talla Única" correctos.
- **Placeholders**: si se ven cuadros con códigos `PJ01`, `NV02`… se está
  viendo una versión anterior del sitio (o caché); el catálogo actual usa
  fotos reales.
- **Playwright/chrome sobre `file://`** no registran Resource Timing:
  el rendimiento real se mide contra el sitio publicado.
