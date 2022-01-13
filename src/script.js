let show = true;
let counter = 0;

const menu = document.getElementsByClassName("cabecalho__container")[0];
const menuToogle = document.getElementsByClassName("menu-toggle")[0];

menuToogle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menu.classList.toggle("cabecalho__container--on", show);
  show = !show;
})

function ativar() {
  let width = getWidth();
  if(width <= 450) {
    document.body.style.overflow = show ? "hidden" : "initial";
    menu.classList.toggle("cabecalho__container--on", show);
    show = !show;
  }
}

function modificar() {
  let width = getWidth();
  if(width > 450 && !show) {
    document.body.style.overflow = "initial";
  }
  if(width <= 450 && !show) {
    document.body.style.overflow = "initial";
    menu.classList.toggle("cabecalho__container--on", show);
  }
}

function getWidth() { 
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

