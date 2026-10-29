// ======================================================================
// catalogo.js de Punto Hogar Pijamas
// (2026-10-29). Productos de pijamas y ropa para dormir.
// ======================================================================
const CATALOGO_IKI=[
/* pijamas: 20 productos */
{id:"pj01",n:"Pijama Algodón Estampado Lunares",p:89000,cat:"pijamas",prov:"ph",cid:"PHP-001",img:"img/p/pj01.webp?v=2",imgs:["img/p/pj01_1.webp?v=2","img/p/pj01_2.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Azul Marino","Gris Claro","Rosa Palo"]}},
{id:"pj02",n:"Pijama Seda Sintética Cuello Camisa",p:125000,cat:"pijamas",prov:"ph",cid:"PHP-002",img:"img/p/pj02.webp?v=2",imgs:["img/p/pj02_1.webp?v=2","img/p/pj02_2.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Negro","Blanco","Champán"]}},
{id:"pj03",n:"Pijama Flanela Cuadros Escoceses",p:95000,cat:"pijamas",prov:"ph",cid:"PHP-003",img:"img/p/pj03.webp?v=2",imgs:["img/p/pj03_1.webp?v=2","img/p/pj03_2.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Rojo/Verde","Azul/Gris","Mostaza/Azul"]}},
{id:"pj04",n:"Pijama Algodón Orgánico Liso",p:78000,cat:"pijamas",prov:"ph",cid:"PHP-004",img:"img/p/pj04.webp?v=2",imgs:["img/p/pj04_1.webp?v=2"],var:{"Talla":["XS","S","M","L","XL"],"Color":["Blanco","Gris Perla","Azul Noche","Rosa Empolvado"]}},
{id:"pj05",n:"Pijama Modal Manga Corta Verano",p:68000,cat:"pijamas",prov:"ph",cid:"PHP-005",img:"img/p/pj05.webp?v=2",imgs:["img/p/pj05_1.webp?v=2","img/p/pj05_2.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Celeste","Lavanda","Menta"]}},
{id:"pj06",n:"Pijama Térmica Interior Polar",p:110000,cat:"pijamas",prov:"ph",cid:"PHP-006",img:"img/p/pj06.webp?v=2",imgs:["img/p/pj06_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Gris Oscuro","Azul Marino","Negro"]}},
{id:"pj07",n:"Pijama Pareja A Juego Corazones",p:165000,cat:"pijamas",prov:"ph",cid:"PHP-007",img:"img/p/pj07.webp?v=2",imgs:["img/p/pj07_1.webp?v=2","img/p/pj07_2.webp?v=2"],var:{"Talla Pareja":["S/M","M/L","L/XL"],"Estampado":["Corazones Rojos","Corazones Rosados"]}},
{id:"pj08",n:"Pijama Familiar Navideño Renos",p:220000,cat:"navidad",prov:"ph",cid:"PHP-008",img:"img/p/pj08.webp?v=2",imgs:["img/p/pj08_1.webp?v=2","img/p/pj08_2.webp?v=2","img/p/pj08_3.webp?v=2"],var:{"Talla Adulto":["S","M","L","XL"],"Talla Niño":["4","6","8","10","12"],"Estampado":["Renos","Copos de Nieve","Papá Noel"]}},
{id:"pj09",n:"Pijama Niños Dinosaurios Brillantes",p:55000,cat:"ninos",prov:"ph",cid:"PHP-009",img:"img/p/pj09.webp?v=2",imgs:["img/p/pj09_1.webp?v=2"],var:{"Talla":["4","6","8","10","12","14"],"Color":["Verde","Azul","Gris"]}},
{id:"pj10",n:"Pijama Niñas Unicornios Estrellas",p:55000,cat:"ninos",prov:"ph",cid:"PHP-010",img:"img/p/pj10.webp?v=2",imgs:["img/p/pj10_1.webp?v=2"],var:{"Talla":["4","6","8","10","12","14"],"Color":["Rosa","Lila","Blanco"]}},
{id:"pj11",n:"Pijama Maternidad Lactancia Acceso",p:98000,cat:"pijamas",prov:"ph",cid:"PHP-011",img:"img/p/pj11.webp?v=2",imgs:["img/p/pj11_1.webp?v=2"],var:{"Talla":["M","L","XL","XXL"],"Color":["Gris Claro","Rosa Palo","Blanco"]}},
{id:"pj12",n:"Pijama Hombre Clásico Rayas",p:85000,cat:"pijamas",prov:"ph",cid:"PHP-012",img:"img/p/pj12.webp?v=2",imgs:["img/p/pj12_1.webp?v=2"],var:{"Talla":["M","L","XL","XXL"],"Color":["Azul Marino/Blanco","Gris/Blanco","Negro/Gris"]}},
{id:"pj13",n:"Pijama Mujer Encaje Detalle Cuello",p:105000,cat:"pijamas",prov:"ph",cid:"PHP-013",img:"img/p/pj13.webp?v=2",imgs:["img/p/pj13_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Negro","Blanco","Vino Tinto","Azul Noche"]}},
{id:"pj14",n:"Pijama Corta Verano Short Camiseta",p:58000,cat:"pijamas",prov:"ph",cid:"PHP-014",img:"img/p/pj14.webp?v=2",imgs:["img/p/pj14_1.webp?v=2","img/p/pj14_2.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Celeste","Rosa","Amarillo Pastel"]}},
{id:"pj15",n:"Pijama Entrerizo Una Pieza Cremallera",p:92000,cat:"enterizos",prov:"ph",cid:"PHP-015",img:"img/p/pj15.webp?v=2",imgs:["img/p/pj15_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Gris Oscuro","Azul Marino","Rosa Palo"]}},
{id:"pj16",n:"Bata Kimono Satín Largo",p:75000,cat:"conjuntos",prov:"ph",cid:"PHP-016",img:"img/p/pj16.webp?v=2",imgs:["img/p/pj16_1.webp?v=2"],var:{"Talla":["S/M","L/XL"],"Color":["Negro","Blanco","Champán","Rosa Empolvado"]}},
{id:"pj17",n:"Pantalón Pijama Talle Alto Algodón",p:45000,cat:"pantalones",prov:"ph",cid:"PHP-017",img:"img/p/pj17.webp?v=2",imgs:["img/p/pj17_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Gris Claro","Negro","Azul Marino","Blanco"]}},
{id:"pj18",n:"Camiseta Manga Larga Cuello Redondo",p:38000,cat:"conjuntos",prov:"ph",cid:"PHP-018",img:"img/p/pj18.webp?v=2",imgs:["img/p/pj18_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Gris Perla","Negro","Rosa Palo"]}},
{id:"pj19",n:"Short Pijama Verano Cintura Elástica",p:35000,cat:"shorts",prov:"ph",cid:"PHP-019",img:"img/p/pj19.webp?v=2",imgs:["img/p/pj19_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Azul Marino","Gris","Blanco","Verde Menta"]}},
{id:"pj20",n:"Pack 3 Calzoncillos Algodón Suave",p:42000,cat:"interior",prov:"ph",cid:"PHP-020",img:"img/p/pj20.webp?v=2",imgs:["img/p/pj20_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Negro/Blanco/Gris","Azul Marino/Gris/Blanco"]}},

/* conjuntos: 8 productos */
{id:"cj01",n:"Conjunto Camiseta + Pantalón Rayas",p:72000,cat:"conjuntos",prov:"ph",cid:"PHC-001",img:"img/p/cj01.webp?v=2",imgs:["img/p/cj01_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Azul/Blanco","Gris/Blanco","Rosa/Blanco"]}},
{id:"cj02",n:"Conjunto Top + Short Verano",p:58000,cat:"conjuntos",prov:"ph",cid:"PHC-002",img:"img/p/cj02.webp?v=2",imgs:["img/p/cj02_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Celeste","Lavanda"]}},
{id:"cj03",n:"Conjunto Manga Larga + Pantalón Invierno",p:88000,cat:"conjuntos",prov:"ph",cid:"PHC-003",img:"img/p/cj03.webp?v=2",imgs:["img/p/cj03_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Gris Oscuro","Azul Marino","Negro"]}},
{id:"cj04",n:"Conjunto Pareja A Juego Invierno",p:155000,cat:"conjuntos",prov:"ph",cid:"PHC-004",img:"img/p/cj04.webp?v=2",imgs:["img/p/cj04_1.webp?v=2"],var:{"Talla Pareja":["S/M","M/L","L/XL"],"Color":["Gris/Blanco","Azul Marino/Blanco"]}},
{id:"cj05",n:"Conjunto Niño Camiseta + Short Dinosaurios",p:48000,cat:"conjuntos",prov:"ph",cid:"PHC-005",img:"img/p/cj05.webp?v=2",imgs:["img/p/cj05_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Verde","Azul","Gris"]}},
{id:"cj06",n:"Conjunto Niña Top + Short Flores",p:48000,cat:"conjuntos",prov:"ph",cid:"PHC-006",img:"img/p/cj06.webp?v=2",imgs:["img/p/cj06_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Blanco","Lila"]}},
{id:"cj07",n:"Conjunto Maternidad Camiseta + Pantalón",p:85000,cat:"conjuntos",prov:"ph",cid:"PHC-007",img:"img/p/cj07.webp?v=2",imgs:["img/p/cj07_1.webp?v=2"],var:{"Talla":["M","L","XL"],"Color":["Gris Claro","Rosa Palo","Blanco"]}},
{id:"cj08",n:"Conjunto Hombre Camisa + Pantalón Clásico",p:92000,cat:"conjuntos",prov:"ph",cid:"PHC-008",img:"img/p/cj08.webp?v=2",imgs:["img/p/cj08_1.webp?v=2"],var:{"Talla":["M","L","XL","XXL"],"Color":["Azul Marino","Gris Oscuro","Negro"]}},

/* pantalones: 6 productos */
{id:"pt01",n:"Pantalón Pijama Talle Alto Algodón",p:45000,cat:"pantalones",prov:"ph",cid:"PHP-017",img:"img/p/pt01.webp?v=2",imgs:["img/p/pt01_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Gris Claro","Negro","Azul Marino","Blanco"]}},
{id:"pt02",n:"Pantalón Flanela Cuadros Invierno",p:52000,cat:"pantalones",prov:"ph",cid:"PHP-021",img:"img/p/pt02.webp?v=2",imgs:["img/p/pt02_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Rojo/Verde","Azul/Gris"]}},
{id:"pt03",n:"Pantalón Modal Verano Ligero",p:38000,cat:"pantalones",prov:"ph",cid:"PHP-022",img:"img/p/pt03.webp?v=2",imgs:["img/p/pt03_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Celeste","Gris Perla"]}},
{id:"pt04",n:"Pantalón Térmico Polar Interior",p:58000,cat:"pantalones",prov:"ph",cid:"PHP-023",img:"img/p/pt04.webp?v=2",imgs:["img/p/pt04_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Gris Oscuro","Negro","Azul Marino"]}},
{id:"pt05",n:"Pantalón Niño Algodón Estampado",p:32000,cat:"pantalones",prov:"ph",cid:"PHP-024",img:"img/p/pt05.webp?v=2",imgs:["img/p/pt05_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Azul","Verde","Gris"]}},
{id:"pt06",n:"Pantalón Niña Algodón Estampado",p:32000,cat:"pantalones",prov:"ph",cid:"PHP-025",img:"img/p/pt06.webp?v=2",imgs:["img/p/pt06_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lila","Blanco"]}},

/* shorts: 4 productos */
{id:"sh01",n:"Short Pijama Verano Cintura Elástica",p:35000,cat:"shorts",prov:"ph",cid:"PHP-019",img:"img/p/sh01.webp?v=2",imgs:["img/p/sh01_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Azul Marino","Gris","Blanco","Verde Menta"]}},
{id:"sh02",n:"Short Algodón Estampado Lunares",p:32000,cat:"shorts",prov:"ph",cid:"PHP-026",img:"img/p/sh02.webp?v=2",imgs:["img/p/sh02_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco/Azul","Rosa/Blanco","Gris/Blanco"]}},
{id:"sh03",n:"Short Niño Verano Dinosaurios",p:28000,cat:"shorts",prov:"ph",cid:"PHP-027",img:"img/p/sh03.webp?v=2",imgs:["img/p/sh03_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Verde","Azul","Gris"]}},
{id:"sh04",n:"Short Niña Verano Unicornios",p:28000,cat:"shorts",prov:"ph",cid:"PHP-028",img:"img/p/sh04.webp?v=2",imgs:["img/p/sh04_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lila","Blanco"]}},

/* interior: 6 productos */
{id:"in01",n:"Pack 3 Calzoncillos Algodón Suave Hombre",p:42000,cat:"interior",prov:"ph",cid:"PHP-020",img:"img/p/in01.webp?v=2",imgs:["img/p/in01_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Negro/Blanco/Gris","Azul Marino/Gris/Blanco"]}},
{id:"in02",n:"Pack 3 Panties Algodón Mujer",p:38000,cat:"interior",prov:"ph",cid:"PHP-029",img:"img/p/in02.webp?v=2",imgs:["img/p/in02_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco/Negro/Gris","Rosa/Blanco/Lila"]}},
{id:"in03",n:"Boxer Algodón Hombre Sin Costuras",p:28000,cat:"interior",prov:"ph",cid:"PHP-030",img:"img/p/in03.webp?v=2",imgs:["img/p/in03_1.webp?v=2"],var:{"Talla":["S","M","L","XL","XXL"],"Color":["Negro","Azul Marino","Gris","Blanco"]}},
{id:"in04",n:"Brassiere Suave Sin Aro Mujer",p:35000,cat:"interior",prov:"ph",cid:"PHP-031",img:"img/p/in04.webp?v=2",imgs:["img/p/in04_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Beige","Negro","Blanco","Rosa Palo"]}},
{id:"in05",n:"Camiseta Interior Manga Larga Térmica",p:42000,cat:"interior",prov:"ph",cid:"PHP-032",img:"img/p/in05.webp?v=2",imgs:["img/p/in05_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Blanco","Gris Claro","Negro"]}},
{id:"in06",n:"Pack 2 Calcetines Algodón Suaves",p:18000,cat:"interior",prov:"ph",cid:"PHP-033",img:"img/p/in06.webp?v=2",imgs:["img/p/in06_1.webp?v=2"],var:{"Talla":["Única (39-42)","Única (43-46)"],"Color":["Blanco","Negro","Gris","Azul Marino"]}},

/* enterizos: 4 productos */
{id:"en01",n:"Pijama Entrerizo Una Pieza Cremallera",p:92000,cat:"enterizos",prov:"ph",cid:"PHP-015",img:"img/p/en01.webp?v=2",imgs:["img/p/en01_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Gris Oscuro","Azul Marino","Rosa Palo"]}},
{id:"en02",n:"Enterizo Invierno Capucha Oso",p:85000,cat:"enterizos",prov:"ph",cid:"PHP-034",img:"img/p/en02.webp?v=2",imgs:["img/p/en02_1.webp?v=2"],var:{"Talla":["S","M","L","XL"],"Color":["Beige","Gris Claro","Rosa"]}},
{id:"en03",n:"Enterizo Niños Dinosaurio Capucha",p:55000,cat:"enterizos",prov:"ph",cid:"PHP-035",img:"img/p/en03.webp?v=2",imgs:["img/p/en03_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Verde","Azul"]}},
{id:"en04",n:"Enterizo Niñas Unicornio Capucha",p:55000,cat:"enterizos",prov:"ph",cid:"PHP-036",img:"img/p/en04.webp?v=2",imgs:["img/p/en04_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lila"]}},

/* niños: 6 productos (adicionales a pijamas de niños) */
{id:"ni01",n:"Pijama Niño Dos Piezas Carros",p:48000,cat:"ninos",prov:"ph",cid:"PHP-037",img:"img/p/ni01.webp?v=2",imgs:["img/p/ni01_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Azul","Rojo","Gris"]}},
{id:"ni02",n:"Pijama Niña Dos Piezas Flores",p:48000,cat:"ninos",prov:"ph",cid:"PHP-038",img:"img/p/ni02.webp?v=2",imgs:["img/p/ni02_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lila","Blanco"]}},
{id:"ni03",n:"Pijama Niño Manga Corta Verano",p:42000,cat:"ninos",prov:"ph",cid:"PHP-039",img:"img/p/ni03.webp?v=2",imgs:["img/p/ni03_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Celeste","Verde Menta","Blanco"]}},
{id:"ni04",n:"Pijama Niña Manga Corta Verano",p:42000,cat:"ninos",prov:"ph",cid:"PHP-040",img:"img/p/ni04.webp?v=2",imgs:["img/p/ni04_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lavanda","Amarillo Pastel"]}},
{id:"ni05",n:"Bata Niño Polar Con Capucha",p:58000,cat:"ninos",prov:"ph",cid:"PHP-041",img:"img/p/ni05.webp?v=2",imgs:["img/p/ni05_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Azul Marino","Gris","Verde"]}},
{id:"ni06",n:"Bata Niña Polar Con Capucha",p:58000,cat:"ninos",prov:"ph",cid:"PHP-042",img:"img/p/ni06.webp?v=2",imgs:["img/p/ni06_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rosa","Lila","Blanco"]}},

/* navidad: 5 productos */
{id:"nv01",n:"Pijama Familiar Navideño Renos",p:220000,cat:"navidad",prov:"ph",cid:"PHP-008",img:"img/p/nv01.webp?v=2",imgs:["img/p/nv01_1.webp?v=2","img/p/nv01_2.webp?v=2","img/p/nv01_3.webp?v=2"],var:{"Talla Adulto":["S","M","L","XL"],"Talla Niño":["4","6","8","10","12"],"Estampado":["Renos","Copos de Nieve","Papá Noel"]}},
{id:"nv02",n:"Pijama Pareja Navideño Copos Nieve",p:155000,cat:"navidad",prov:"ph",cid:"PHP-043",img:"img/p/nv02.webp?v=2",imgs:["img/p/nv02_1.webp?v=2"],var:{"Talla Pareja":["S/M","M/L","L/XL"],"Color":["Rojo/Blanco","Verde/Blanco","Azul/Blanco"]}},
{id:"nv03",n:"Pijama Niño Navideño Papá Noel",p:58000,cat:"navidad",prov:"ph",cid:"PHP-044",img:"img/p/nv03.webp?v=2",imgs:["img/p/nv03_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rojo","Verde","Blanco"]}},
{id:"nv04",n:"Pijama Niña Navideña Reno",p:58000,cat:"navidad",prov:"ph",cid:"PHP-045",img:"img/p/nv04.webp?v=2",imgs:["img/p/nv04_1.webp?v=2"],var:{"Talla":["4","6","8","10","12"],"Color":["Rojo","Verde","Blanco"]}},
{id:"nv05",n:"Bata Navideña Larga Felpa",p:78000,cat:"navidad",prov:"ph",cid:"PHP-046",img:"img/p/nv05.webp?v=2",imgs:["img/p/nv05_1.webp?v=2"],var:{"Talla":["S/M","L/XL"],"Color":["Rojo","Verde","Blanco"]}}];