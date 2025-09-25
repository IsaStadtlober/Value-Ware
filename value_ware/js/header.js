const header = document.getElementById("mainHeader");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // se rolou para baixo e passou de 100px → esconde
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add("header-hidden");
  } 
  // se rolou para cima → mostra
  else if (scrollTop < lastScrollTop) {
    header.classList.remove("header-hidden");
  }

  // adiciona ou remove sombra
  header.classList.toggle("scrolled", scrollTop > 50);

  // atualiza posição (sempre ≥ 0)
  lastScrollTop = Math.max(scrollTop, 0);
}, { passive: true });