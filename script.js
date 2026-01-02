// ===== CONFIG =====
const WHATSAPP_CONTACT = "351911918049";
const INSTAGRAM_URL = "https://www.instagram.com/lrstudio_pt?ighs=dWx2Yng0MWw4bWU4";

// Remplace par tes liens Stripe quand tu les as
const STRIPE_ESSENCIAL = "https://buy.stripe.com/REPLACE_39";
const STRIPE_PLUS      = "https://buy.stripe.com/REPLACE_79";

function waLink(message){
  return "https://wa.me/" + WHATSAPP_CONTACT + "?text=" + encodeURIComponent(message);
}

// ===== MENU MOBILE =====
(function(){
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  if(!burger || !mobileMenu) return;

  function closeMenu(){
    mobileMenu.style.display = "none";
    burger.setAttribute("aria-expanded","false");
  }
  function toggleMenu(){
    const open = mobileMenu.style.display === "block";
    if(open) closeMenu();
    else{
      mobileMenu.style.display = "block";
      burger.setAttribute("aria-expanded","true");
    }
  }

  burger.addEventListener("click", (e)=>{ e.stopPropagation(); toggleMenu(); });
  document.addEventListener("click", ()=> closeMenu());
  mobileMenu.addEventListener("click", (e)=>{
    if(e.target && e.target.tagName === "A") closeMenu();
    e.stopPropagation();
  });
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeMenu(); });
})();

// ===== HEADER SCROLL EFFECT + TOP BUTTON =====
(function(){
  const header = document.querySelector("header");
  const toTop = document.getElementById("toTop");

  function onScroll(){
    const y = window.scrollY || 0;
    if(header){
      header.classList.toggle("scrolled", y > 8);
    }
    if(toTop){
      toTop.style.display = y > 450 ? "block" : "none";
    }
  }

  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  if(toTop){
    toTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
  }
})();

// ===== SCROLL REVEAL =====
(function(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;

  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  }, {threshold:0.14});

  items.forEach(el=>io.observe(el));
})();

// ===== ACTIVE MENU LINK (met un style sur la page actuelle) =====
(function(){
  const path = location.pathname;
  const isHome = /\/Aulas-De-Pilates\/?$/.test(path);

  const map = {
    home: isHome,
    packs: /\/packs\/?$/.test(path),
    testemunhos: /\/testemunhos\/?$/.test(path),
    contacto: /\/contacto\/?$/.test(path),
  };

  document.querySelectorAll("[data-nav]").forEach(a=>{
    const key = a.getAttribute("data-nav");
    if(map[key]) a.classList.add("active");
  });
})();

// ===== LIENS AUTOMATIQUES =====
(function(){
  // WhatsApp
  const waEss = document.getElementById("waEssencial");
  const waPlus = document.getElementById("waPlus");
  const waGeral = document.getElementById("waGeral");
  if(waEss)  waEss.href  = waLink("Olá! Quero o pack Pilates Essencial (39€).");
  if(waPlus) waPlus.href = waLink("Olá! Quero o pack Pilates Essencial Plus (79€).");
  if(waGeral) waGeral.href = waLink("Olá! Quero saber mais sobre os packs Pilates.");

  // Instagram
  const insta = document.getElementById("insta");
  if(insta) insta.href = INSTAGRAM_URL;

  // Stripe
  const payEss = document.getElementById("payEssencial");
  const payPlus = document.getElementById("payPlus");
  if(payEss) payEss.href = STRIPE_ESSENCIAL;
  if(payPlus) payPlus.href = STRIPE_PLUS;

  // Footer
  const footer = document.getElementById("footer");
  if(footer) footer.textContent = `© ${new Date().getFullYear()} LR Studio — Todos os direitos reservados.`;
})();
