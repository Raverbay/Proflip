window.FLIPCO={};
FLIPCO.load=async()=>{if(FLIPCO.products)return FLIPCO.products;const r=await fetch('data/products.json');if(!r.ok)throw new Error('Catalogo non disponibile');const d=await r.json();FLIPCO.products=d.products||[];return FLIPCO.products};
FLIPCO.collections=async()=>{if(FLIPCO.collectionData)return FLIPCO.collectionData;const r=await fetch('data/collections.json');const d=await r.json();FLIPCO.collectionData=d.collections||[];return FLIPCO.collectionData};
FLIPCO.site=async()=>{if(FLIPCO.siteData)return FLIPCO.siteData;const r=await fetch('data/site.json');FLIPCO.siteData=await r.json();return FLIPCO.siteData};
FLIPCO.stock=p=>Object.values(p.stock||{}).reduce((a,b)=>a+Number(b||0),0);
FLIPCO.money=v=>new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR'}).format(v);
FLIPCO.esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
FLIPCO.slug=v=>String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
