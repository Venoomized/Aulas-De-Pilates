// ===== CONFIG =====
const WHATSAPP_CONTACT = "351911918049";
const INSTAGRAM_URL = "https://www.instagram.com/lrstudio_pt?ighs=dWx2Yng0MWw4bWU4";

// Mets les liens Stripe ici (quand vous les avez)
const STRIPE_ESSENCIAL = "https://buy.stripe.com/REPLACE_39";
const STRIPE_PLUS      = "https://buy.stripe.com/REPLACE_79";

// ===== HELPERS =====
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

