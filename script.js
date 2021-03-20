// =--------- Declaring the variables -------------=
// --  --  --  --   Links de Navegacao  --  --  --  --
const navBar = document.querySelector(".nav-items");
const navItems = navBar.querySelectorAll("a");
//  --  --  --  --  Faixa de Produtos--  --  --  --
const productTexto = document.querySelector(".produtos-texto ");
const diaNamorados = document.querySelector(".dia-dos-namorados");
const aniversario = document.querySelector(".aniversario");
const diaMaes = document.querySelector(".dia-das-maes");
const pascoa = document.querySelector(".pascoa");
const diaCriancas = document.querySelector(".dia-das-criancas");
const produtosSection = document.querySelector("#produtos");

// =--------- Functioncs -------------=

const addEventSlideRight = function (...entries) {
  entries.forEach((entry) => {
    entry[0].addEventListener("mouseenter", function (e) {
      entry[0].style.transform = "translateX(100%)";
      entry[0].style.transition = "transform 1.5s";
    });

    entry[1].addEventListener("mouseout", function (e) {
      if (e.fromElement !== entry[1]) return;
      entry[0].style.transform = "translateX(0)";
    });
    entrChild = [...entry[1].children];
    entrChild.forEach((child) => {
      child.addEventListener("mouseover", function () {
        entry[0].style.transform = "translateX(100%)";
      });
    });
  });
};

const addEventSlideLeft = function (...entries) {
  entries.forEach((entry) => {
    entry[0].addEventListener("mouseenter", function (e) {
      entry[0].style.transform = "translateX(-100%)";
      entry[0].style.transition = "transform 1.5s";
    });
    entry[1].addEventListener("mouseout", function (e) {
      console.log(e);
      if (e.fromElement !== entry[1]) return;
      entry[0].style.transform = "translateX(0)";
    });
    entrChild = [...entry[1].children];
    entrChild.forEach((child) => {
      child.addEventListener("mouseover", function () {
        entry[0].style.transform = "translateX(-100%)";
      });
    });
  });
};

// =--------- Script -------------=

//  --  --  --  --  Navbar scroll smooth --  --  --  --
navItems.forEach((el) => {
  el.addEventListener("click", function () {
    const sectionScroll = document.getElementById(
      el.innerHTML.toLowerCase().replace(" ", "-")
    );
    sectionScroll.scrollIntoView({ behavior: "smooth" });
  });
});

//  --  --  --  --  Products slide animation --  --  --  --
addEventSlideRight([productTexto, diaMaes], [aniversario, diaCriancas]);
addEventSlideLeft([diaNamorados, pascoa]);
