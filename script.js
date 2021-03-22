// =--------- Declaring the variables -------------=
// --  --  --  --   Sections  --  --  --  --
const faleComigo = document.getElementById("fale-comigo");
const homePage = document.getElementById("home");

// --  --  --  --   Links de Navegacao  --  --  --  --
const navBar = document.querySelector(".nav-items");
const navItems = navBar.querySelectorAll("a");
const btnCallAct = document.querySelector(".btn-action");
const btnCallText = btnCallAct.querySelector("span");
const textHome = document.querySelector(".home-main-text").querySelector("p");
const textHomeCont = document.querySelector(".home-main-text");
//  --  --  --  --  Faixa de Produtos--  --  --  --
const productTexto = document.querySelector(".produtos-texto ");
const diaNamorados = document.querySelector(".dia-dos-namorados");
const aniversario = document.querySelector(".aniversario");
const diaMaes = document.querySelector(".dia-das-maes");
const pascoa = document.querySelector(".pascoa");
const diaCriancas = document.querySelector(".dia-das-criancas");
const produtosSection = document.querySelector("#produtos");
//  --  --  --  --  Outros elementos--  --  --  --
const pot = document.querySelector(".pot");

// =--------- Functioncs -------------=

const hoverAnimation = function (el) {
  el.addEventListener("mouseover", function () {
    el.style.transition = "transform 0.6s";
    el.style.transform = "scale(1.15,1.15)";
    setTimeout(function () {
      el.style.transition = "transform 0.8s";
      el.style.transform = "scale(1.1,1.1)";
    }, 450);
  });

  el.addEventListener("mouseout", function () {
    el.style.transform = "scale(1,1)";
  });
};

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

//  --  --  --  --  Call for action button --  --  --  --
btnCallAct.addEventListener("click", function () {
  faleComigo.scrollIntoView({ behavior: "smooth" });
});

hoverAnimation(btnCallAct);
const options = {
  root: document,
  threshold: 0.6,
};

const observer = new IntersectionObserver(function (entries) {
  [entry] = entries;
  console.log(entry);
  if (entry.intersectionRatio < 0.6) {
    setTimeout(function () {
      setTimeout(function () {
        btnCallAct.animate(
          [
            {
              borderRadius: "15px",
              position: "fixed",
              backgroundColor: "var(--dark-pink-text)",
              right: "36vw",
              bottom: "76vh",
            },

            {
              borderRadius: "50%",
              position: "fixed",
              backgroundColor: "white",
              paddingRight: "17px",
              bottom: "15px",
              right: "15px",
            },
          ],
          {
            fill: "forwards",
            duration: 800,
          }
        );

        btnCallText.animate(
          [{ fontSize: "1.3rem" }, { fontSize: "0rem", paddingRight: "0" }],
          {
            fill: "forwards",
            duration: 800,
          }
        );
      }, 100);
    }, 250);

    console.log("block");
  }
  if (entry.intersectionRatio >= 0.6 && entry.intersectionRatio < 0.9) {
    console.log("none");
    btnCallAct.animate(
      [
        {
          borderRadius: "50%",
          backgroundColor: "white",
          transform: "translate(47vw,70vh)",
        },
        {
          position: "static",
          borderRadius: "15px",
          transform: "translate(0,0)",
          backgroundColor: "var(--dark-pink-text)",
        },
      ],
      {
        // timing options
        fill: "forwards",
        duration: 800,
      }
    );
    btnCallText.animate(
      [
        { fontSize: "0rem" },
        {
          fontSize: "1.3rem",
          paddingRight: "20px",
        },
      ],
      {
        // timing options
        fill: "forwards",
        duration: 800,
      }
    );

    // btnCallAct.classList.add("btn-call-action");
  }
}, options);
console.log(btnCallAct.offset, btnCallAct.offsetLeft);
observer.observe(homePage);
