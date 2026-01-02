const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

if(burger){
  burger.onclick = () => {
    mobile.style.display = mobile.style.display === "block" ? "none" : "block";
  };
}

document.addEventListener("click", e=>{
  if(mobile && !mobile.contains(e.target) && e.target !== burger){
    mobile.style.display = "none";
  }
});

const footer = document.getElementById("footer");
if(footer){
  footer.textContent = `© ${new Date().getFullYear()} LR Studio — Todos os direitos reservados.`;
}
