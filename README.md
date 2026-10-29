# Punto Hogar Pijamas — Descansa cómodo, siéntete en casa

Tienda online de pijamas y ropa para dormir de Punto Hogar Pijamas (Colombia): venta asistida por WhatsApp, publicada en **https://PuntoHogar.github.io/puntohogarpijamas/** desde el repositorio `github.com/PuntoHogar/puntohogarpijamas`. Sin frameworks, sin build, sin backend: HTML + CSS + JS en un archivo, catálogo generado y panel de administración que publica la configuración por API.

---

## 1. Arquitectura de archivos

| Archivo / carpeta | Rol |
|---|---|
| `index.html` | Tienda completa (HTML + CSS + JS en un archivo). Todo el comportamiento vive aquí |
| `catalogo.js` | Catálogo activo (productos de pijamas). **Generado manualmente** para esta versión |
| `data/configuracion.js` | Configuración publicada desde el panel ("Publicar para TODOS"). La mantiene el panel vía API de GitHub |
| `legal.html` | 8 políticas con anclas; absorbe la configuración publicada (razón social, NIT, contacto) |
| `img/p/` | Imágenes de productos (miniaturas webp) |
| `sitemap.xml`, `robots.txt` | SEO: envío a Google Search Console; canonical en index/legal |
| `Brief_Branding_Punto_Hogar_Pijamas.md` | Manual de marca |

---

## 2. Catálogo de productos

El catálogo incluye productos de las siguientes categorías:

- **Pijamas** (20 productos): Algodón, seda sintética, flanela, modal, térmica, pareja, familiar, maternidad, niños
- **Conjuntos** (8 productos): Camiseta+pantalón, top+short, manga larga, pareja, niños, maternidad, hombre
- **Pantalones** (6 productos): Talle alto, flanela, modal, térmico, niños
- **Shorts** (4 productos): Verano, estampados, niños
- **Interior** (6 productos): Calzoncillos, panties, boxer, brassiere, térmica, calcetines
- **Enterizos** (4 productos): Una pieza, invierno capucha, niños
- **Niños** (6 productos): Dos piezas, verano, batas
- **Navidad** (5 productos): Familiar, pareja, niños, bata

---

## 3. Panel de administración

Acceso: footer "Administración", `?admin` o Ctrl+Shift+A (clave: **PUNTOHOGAR123***).

- **Publicar para TODOS**: sube la configuración vigente a `data/configuracion.js` vía API de GitHub
- **Previsualizar sin publicar**: Panel → "Guardar en MI computador" (solo este navegador)

---

## 4. Branding - Punto Hogar Pijamas

### Colores
- **Gris carbón**: `#27313B` (textos principales, contraste)
- **Gris acero**: `#7D858D` (elementos secundarios, bordes)
- **Verde lima**: `#A6C83A` (acento principal, CTA)
- **Blanco**: `#FFFFFF` (fondos)
- **Gris perla**: `#EEF0F2` (fondos suaves)
- **Rosa empolvado**: `#E7C8CF` (acentos complementarios)
- **Azul noche**: `#263747` (piezas nocturnas)

### Tipografía
- **Principal**: Poppins ExtraBold (títulos, marca)
- **Secundaria**: Montserrat Medium/SemiBold (cuerpo, UI)
- **Acento**: Dancing Script ("Pijamas", frases cortas)

### Logo
Archivo: `Logo circular de pijamas Punto Hogar.png`
- Circular con "Punto" (gris carbón + verde lima en la "o")
- "Hogar" (gris acero + casa integrada en la H)
- "Pijamas" (script manuscrito + líneas verde lima)
- "by Fredy Henao" (firma)
- Ilustración: pijama + luna + estrellas
- Marco circular gris acero

### Eslogan
**Descansa cómodo, siéntete en casa**

### WhatsApp
**57 3147247260** (pedidos e información)

---

## 5. Operación diaria

| Tarea | Cómo |
|---|---|
| Cambiar precios, favoritos, ocultar productos/categorías | Panel → "Ver cambios ahora" → "Publicar para TODOS" |
| Previsualizar sin publicar | Panel → "Guardar en MI computador" |
| Configurar un navegador nuevo del panel | `python generar_enlace_config.py` → abrir el enlace una vez |
| Refrescar el catálogo | Editar `catalogo.js` directamente |

---

## 6. Despliegue

1. Push a `main` branch
2. GitHub Pages sirve desde la raíz del repo
3. URL: `https://PuntoHogar.github.io/puntohogarpijamas/`

---

## 7. Contacto

- **WhatsApp**: 57 3147247260
- **Admin**: PUNTOHOGAR123*
- **Marca**: by Fredy Henao