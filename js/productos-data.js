'use strict';

/* ═══════════════════════════════════════════
   PRODUCTOS — datos compartidos en todas las páginas
   ═══════════════════════════════════════════ */
const PRODUCTOS = [
  { id:1,  nombre:'Arroz Bambi QQ VERDE - 100 Lb.',           precio:1400, img:'img/Arroz_Bambi_QQ_VERDE_-_100_Lb_.png',               contenido:'100 libras',           empaque:'Saco polipropileno', tipo:'80% grano entero',         categoria:'arroz' },
  { id:2,  nombre:'Arroz Bambi SAQ VERDE - 25 Lb.',            precio:400,  img:'img/Arroz_Bambi_SAQ_VERDE_-_25_Lb_.png',               contenido:'25 libras',            empaque:'Saco polipropileno', tipo:'80% grano entero',         categoria:'arroz' },
  { id:3,  nombre:'Arroz Bambi QQ ROJO - 100 Lb.',             precio:1400, img:'img/Arroz_Bambi_QQ_ROJO_-_100_Lb_.png',                contenido:'100 libras',           empaque:'Saco polipropileno', tipo:'80% grano entero',         categoria:'arroz' },
  { id:4,  nombre:'Arroz Bambi SAQ ROJO - 25 Lb.',             precio:400,  img:'img/Arroz_Bambi_SAQ_ROJO_-_25_Lb_.png',                contenido:'25 libras',            empaque:'Saco polipropileno', tipo:'80% grano entero',         categoria:'arroz' },
  { id:5,  nombre:'Arroz Mr. Dieck QQ - 100 Lb.',              precio:1400, img:'img/Arroz_Mr__Dieck_QQ_-_100_Lb_.png',                 contenido:'100 libras',           empaque:'Saco polipropileno', tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:6,  nombre:'Arroz Mr. Dieck SAQ - 25 Lb.',              precio:400,  img:'img/Arroz_Mr__Dieck_SAQ_-_25_Lb_.png',                 contenido:'25 libras',            empaque:'Saco polipropileno', tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:7,  nombre:'Arroz Mr. Dieck 1.75 Kgs. - 3.8 Lb.',      precio:100,  img:'img/Arroz_Mr__Dieck_1_75_Kgs__-_3_8_Lb_.png',          contenido:'3.8 libras',           empaque:'Bolsa plastica',     tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:8,  nombre:'Arroz Mr. Dieck 1.5 Kgs. - 3.3 Lb.',       precio:80,   img:'img/Arroz_Mr__Dieck_1_5_Kgs__-_3_3_Lb_.png',           contenido:'3.3 libras',           empaque:'Bolsa plastica',     tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:9,  nombre:'Arroz Mr. Dieck 454 g. - 1 Lb.',            precio:20,   img:'img/Arroz_Mr__Dieck_454_g__-_Lb_.png',                 contenido:'1 libra',              empaque:'Bolsa plastica',     tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:10, nombre:'Arroz Mr. Dieck 350 g. - 0.77 Lb.',         precio:15,   img:'img/Arroz_Mr__Dieck_350_g_-0_77_Lb.png',               contenido:'350 gramos',           empaque:'Bolsa plastica',     tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:11, nombre:'Arroz Mr. Dieck 175 g. - 0.39 Lb.',         precio:10,   img:'img/Arroz_Mr__Dieck_175_g_-0_39_Lb.png',               contenido:'175 gramos',           empaque:'Bolsa plastica',     tipo:'Arroz blanco grano largo', categoria:'arroz' },
  { id:12, nombre:'Arroz Mr. Dieck Escaldado SAQ - 25 Lb.',    precio:400,  img:'img/Arroz_Mr__Dieck_escaldado_SAQ_-_25_Lb_.png',        contenido:'25 libras',            empaque:'Saco polipropileno', tipo:'Parboiled rice',           categoria:'arroz' },
  { id:13, nombre:'Arroz Mr. Dieck Escaldado QQ - 100 Lb.',    precio:1400, img:'img/Arroz_Mr__Dieck_escaldado_QQ_100_Lb.png',           contenido:'100 libras',           empaque:'Saco polipropileno', tipo:'Parboiled rice',           categoria:'arroz' },
  { id:14, nombre:'Arroz Mr. Dieck Escaldado 1.75 Kgs. - 3.8 Lb.', precio:100, img:'img/Arroz_Mr__Dieck_escaldado_1_75_Kgs__-_3_8_Lb_.png', contenido:'3.8 libras',      empaque:'Bolsa plastica',     tipo:'Parboiled rice',           categoria:'arroz' },
  { id:15, nombre:'Harina Manhattan',                           precio:null, img:'https://www.edd.hn/archivos/multimedia/Marcas/HarinaManhattan.png',    contenido:'Variable', empaque:'Bolsa plastica', tipo:'Harina de trigo', categoria:'harina' },
  { id:16, nombre:'Harina de Trigo Mr. Dieck',                  precio:null, img:'https://www.edd.hn/archivos/multimedia/Marcas/HarinaTrigoMrDieck.png', contenido:'Variable', empaque:'Bolsa plastica', tipo:'Harina de trigo', categoria:'harina' },
  { id:17, nombre:'Rumba Vasos Desechables',                    precio:null, img:'https://www.edd.hn/archivos/multimedia/Marcas/RumbaVasos.png',          contenido:'Variable', empaque:'Bolsa',          tipo:'Vasos plasticos', categoria:'vasos'  },
  { id:18, nombre:'Agua Fresca Botelon 5 Galones',              precio:50,   img:'img/Botelon_5_galones.jpg',                             contenido:'5 galones (18,927 ml)', empaque:'Botelon plastico', tipo:'Agua purificada', categoria:'agua'   },
  { id:19, nombre:'Agua Fresca Botella 500 ml.',                precio:15,   img:'img/Botella_500_ml_.jpeg',                              contenido:'500 ml',               empaque:'Botella plastica', tipo:'Agua purificada', categoria:'agua'   },
];

const WHATSAPP = '50497113417';

/* ═══════════ CART HELPERS ═══════════ */
function getCart()              { try { return JSON.parse(localStorage.getItem('edd_cart') || '[]'); } catch { return []; } }
function saveCart(c)            { localStorage.setItem('edd_cart', JSON.stringify(c)); _updateBadges(); }
function addToCart(id, qty)     { const c = getCart(); const i = c.findIndex(x => x.id===id); i>-1 ? c[i].qty+=qty : c.push({id,qty}); saveCart(c); }
function removeFromCart(id)     { saveCart(getCart().filter(x => x.id!==id)); }
function setCartQty(id, qty)    { const c = getCart(); const i = c.findIndex(x => x.id===id); if(i>-1){ qty>0 ? c[i].qty=qty : c.splice(i,1); } saveCart(c); }
function getCartCount()         { return getCart().reduce((s,x) => s+x.qty, 0); }
function getCartTotal()         { return getCart().reduce((s,x) => { const p=PRODUCTOS.find(pr=>pr.id===x.id); return s+(p&&p.precio ? p.precio*x.qty : 0); }, 0); }
function formatLps(n)           { return 'L. ' + n.toLocaleString('es-HN',{minimumFractionDigits:2,maximumFractionDigits:2}); }

function _updateBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
  });
}

document.addEventListener('DOMContentLoaded', _updateBadges);
