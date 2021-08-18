// =--------- Declaring the variables -------------=
// --  --  --  --   Sections  --  --  --  --
const faleComigo = document.getElementById("contact");
const homePage = document.getElementById("home");
const aboutMe = document.getElementById("about-me");
// --  --  --  --   Links de Navegacao  --  --  --  --
const navBar = document.querySelector(".mobile");
const navItems = navBar.querySelectorAll("a");
const navItemsLinks = document
  .querySelector(".nav-items")
  .querySelectorAll("a");
const btnCallAct = document.querySelector(".btn-action");
const btnCallText = btnCallAct.querySelector("span");
const textHome = document.querySelector(".home-main-text").querySelector("p");
const mainTitleHome = document
  .querySelector(".home-main-text")
  .querySelector("h1");
const navIcon = document.querySelector(".nav-bar-icon");
const textHomeCont = document.querySelector(".home-main-text");
const nav = document.querySelector("nav");
//  --  --  --  --  Faixa de Produtos--  --  --  --
const productTexto = document.querySelector(".produtos-texto ");
const diaNamorados = document.querySelector(".dia-dos-namorados");
const aniversario = document.querySelector(".aniversario");
const diaMaes = document.querySelector(".dia-das-maes");
const pascoa = document.querySelector(".pascoa");
const diaCriancas = document.querySelector(".dia-das-criancas");
const produtosSection = document.querySelector("#products");
//  --  --  --  --  Outros elementos--  --  --  --
const pot = document.querySelector(".pot");
const bodyAll = document.querySelector("body");
const profile = document.querySelector(".perfil");
const formCase = document.querySelector(".form-case");
let menuShow = 0;

// =--------- Functioncs -------------=

const createSectionObserver = function () {
  const lazyLoading = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting && entry.intersectionRatio !== 1) {
      console.log(entry.target);

      entry.target.style.transition = "opacity 1s, transform 1s";
      entry.target.classList.remove("section-hidden");

      observer.unobserve(entry.target);
    }
  };
  return new IntersectionObserver(lazyLoading, {
    root: null,
    thershold: 0.3,
  });
};

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

const moveCenter = function () {
  this[0].style.transform = "translateX(0)";
};

const moveRight = function () {
  this.style.transform = "translateX(100%)";
  this.style.transition = "transform 1.5s";
};

var moveLeft = function () {
  this.style.transform = "translateX(-100%)";
  this.style.transition = "transform 1.5s";
};
// =--------- Product Slides -------------=
//
//
// ============== SLIDE RIGHT ==============
const addEventSlideRight = function (...entries) {
  entries.forEach((entry) => {
    entry.addEventListener("mouseenter", moveRight.bind(entry));
    entrChild = [...entry.children];
    entrChild.forEach((child) => {
      child.addEventListener("mouseenter", moveRight.bind(entry));
    });
  });
};

// ============== SLIDE LEFT ==============

const addEventSlideLeft = function (...entries) {
  entries.forEach((entry) => {
    entry.addEventListener("mouseenter", moveLeft.bind(entry));
    entrChild = [...entry.children];
    entrChild.forEach((child) => {
      child.addEventListener("mouseenter", moveLeft.bind(entry));
    });
  });
};

// ============== SLIDE CENTER ==============
const addEventSlideCenter = function (...entries) {
  entries.forEach((entry) => {
    entry[1].addEventListener("mouseleave", moveCenter.bind(entry));
  });
};

// =--------- Script -------------=

//  --  --  --  --  Navbar scroll smooth --  --  --  --
navItemsLinks.forEach((el) => {
  el.addEventListener("click", function () {
    const sectionScroll = document.getElementById(
      el.innerHTML.toLowerCase().replace(" ", "-")
    );
    sectionScroll.scrollIntoView({ behavior: "smooth" });
  });
});

navItems.forEach((el) => {
  el.addEventListener("click", function () {
    const sectionScroll = document.getElementById(
      el.innerHTML.toLowerCase().replace(" ", "-")
    );
    sectionScroll.scrollIntoView({ behavior: "smooth" });
  });
});

//  --  --  --  --  Products slide animation --  --  --  --
produtosSection.addEventListener("mouseenter", function () {});
window.addEventListener("resize", function () {
  // ----- IN CASE THE VIEW WIDTH IS LARGER THAN 900px
  if (window.innerWidth > 900) {
    addEventSlideRight(productTexto, aniversario);
    addEventSlideLeft(diaNamorados);
    addEventSlideCenter(
      [productTexto, diaMaes],
      [aniversario, diaCriancas],
      [diaNamorados, pascoa]
    );
  }

  // ----- IN CASE THE VIEW WIDTH IS SMALLER OR EQUAL TO 900px
  if (window.innerWidth <= 900) {
    const faixasAll = [
      productTexto,
      aniversario,
      diaNamorados,
      diaMaes,
      diaCriancas,
      pascoa,
    ];

    // Setting every product back to the center of the screen
    faixasAll.forEach((el) => {
      el.style.transform = "translateX(0)";
    });

    // Removing all the mouseenter and mouseleave animations:
    [productTexto, aniversario, diaNamorados].forEach((el) => {
      el.addEventListener("mouseenter", function () {
        el.style.transform = "translateX(0)";
      });
      [...el.children].forEach((child) => {
        child.addEventListener("mouseenter", function () {
          el.style.transform = "translateX(0)";
        });
      });
    });

    [(diaMaes, diaCriancas, pascoa)].forEach((el) => {
      el.removeEventListener("mouseleave", moveCenter);
      el.style.transform = "translateX(0)";
    });
    // Small asjustment to make the lines of products look better alternating colors
    document.querySelector(".faixa2").style.flexFlow = "column-reverse";
  }
});

//  Starter configuration in case the window is openned at a 900px+ width
if (window.innerWidth >= 900) {
  addEventSlideRight(productTexto, aniversario);
  addEventSlideLeft(diaNamorados);
  addEventSlideCenter(
    [productTexto, diaMaes],
    [aniversario, diaCriancas],
    [diaNamorados, pascoa]
  );

  if (window.innerHeight <= 900) {
    document.querySelector(".faixa2").style.flexFlow = "column-reverse";
  }
}
//
//
//  --  --  --  --  Call for action button animation into an envelope --  --  --  --
//
//
btnCallAct.addEventListener("click", function () {
  faleComigo.scrollIntoView({ behavior: "smooth" });
});

let ratio = window.innerWidth < 900 ? 0.5 : 0.6;

hoverAnimation(btnCallAct);
const options = {
  root: document,
  threshold: ratio,
};

const observer = new IntersectionObserver(function (entries) {
  [entry] = entries;
  if (entry.intersectionRatio < ratio) {
    btnCallAct.animate(
      [
        {
          borderRadius: "15px",
          position: "fixed",
          backgroundColor: "var(--dark-pink-text)",
          right: `${window.innerWidth < 900 ? "24vw" : "36vw"}`,
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
        duration: 600,
      }
    );

    btnCallText.animate(
      [{ fontSize: "1.3rem" }, { fontSize: "0rem", paddingRight: "0" }],
      {
        fill: "forwards",
        duration: 600,
      }
    );
  }
  if (entry.intersectionRatio >= ratio && entry.intersectionRatio < 0.9) {
    btnCallAct.animate(
      [
        {
          borderRadius: "50%",
          backgroundColor: "white",
          transform: `translate(47vw,${
            window.innerWidth < 900 ? "90vh" : "70vh"
          })`,
        },
        {
          position: "static",
          borderRadius: "15px",
          transform: "translate(0,0)",
          backgroundColor: "var(--dark-pink-text)",
        },
      ],
      {
        fill: "forwards",
        duration: 600,
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
        fill: "forwards",
        duration: 600,
      }
    );
  }
}, options);
observer.observe(homePage);
//
//
//  --  --  --  --  Nav bar animation --  --  --  --
//
//
navIcon.addEventListener("click", function () {
  if (menuShow === 0) {
    navBar.style.transform = "translateX(0)";
    navBar.style.transition = "transform 1s";
    menuShow++;
  } else if (menuShow === 1) {
    navBar.style.transform = "translateX(100%)";
    menuShow = 0;
  }
});
//
//
// ------------------ Nav items are hidden if scrolling: ------------------
//
//
nav.style.position = "fixed";
const oldPosMin = 0;
let oldPos = 70;
let altura = 0;
window.onscroll = function () {
  if (menuShow === 1) {
    navBar.style.transform = "translateX(100%)";
    menuShow = 0;
  }

  if (pageYOffset > oldPosMin && pageYOffset < oldPos) {
    altura >= 0 ? (altura = 0) : (altura += 10);
    nav.style.transform = `translatey(${altura}%)`;

    oldPos = pageYOffset;
  } else if (pageYOffset > oldPosMin && pageYOffset > oldPos) {
    altura <= -100 ? (altura = -100) : (altura -= 10);
    oldPos = pageYOffset;
    nav.style.transform = `translatey(${altura}%)`;
  } else {
    nav.style.transform = "translatey(0)";
  }
};

bodyAll.addEventListener("click", function (e) {
  if (menuShow === 1 && !e.target.classList.contains("fa-bars")) {
    navBar.style.transform = "translateX(100%)";
    menuShow = 0;
  }
});

// -------------------- Lazy loading ------------------
const sectionAll = [formCase, profile];
sectionAll.forEach((sectionN) => {
  sectionN.classList.add("section-hidden");
  console.log(sectionN);
  console.log("in");
  createSectionObserver().observe(sectionN);
});

mainTitleHome.style.transition = "transform 1s, opacity 1s ";
mainTitleHome.classList.remove("section-hidden");
