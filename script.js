// button

const btnOpen = document.getElementById("menu-button");
const btnClose = document.getElementById("menu-close");

// arrow
const arrowOpen = document.querySelector(".arrow-down-1");
const arrowClose = document.querySelector(".arrow-up-1");
const arrowOpen2 = document.querySelector(".arrow-down-2");
const arrowClose2 = document.querySelector(".arrow-up-2");

// nav list
const navList = document.querySelector(".nav-list");

// feature list

const featureSpan = document.querySelector(".feature");
const featureSpan1 = document.querySelector(".feature-1");

// company list
const companySpan = document.querySelector(".company");
const companySpan1 = document.querySelector(".company-1");

// list items

const navItems1 = document.querySelector(".list-items-1");
const navItems2 = document.querySelector(".list-items-2");

// nav arrow list
const navArrow1 = document.querySelector(".nav-arrow-1");
const navArrow2 = document.querySelector(".nav-arrow-2");

// drop shadow

const dropShadow = document.querySelector(".drop-shadow");

// mobile nav

btnOpen.addEventListener("click", () => {
  dropShadow.classList.remove("hidden");
  navList.style.display = "block";
});

btnClose.addEventListener("click", () => {
  dropShadow.classList.add("hidden");
  navList.style.display = "none";
});

// nav Feature & company list mobile

featureSpan.addEventListener("click", expandFirstList);

featureSpan1.addEventListener("click", notExpandFirstList);

function notExpandFirstList() {
  arrowOpen.classList.remove("hidden");
  arrowClose.classList.add("hidden");
  navArrow1.classList.add("hidden");
  navArrow1.classList.add("close");
  featureSpan.classList.remove("hidden");
  featureSpan1.classList.add("hidden");
}

function expandFirstList() {
  arrowOpen.classList.add("hidden");
  arrowClose.classList.remove("hidden");
  navArrow1.classList.remove("hidden");
  navArrow1.classList.remove("close");
  featureSpan.classList.add("hidden");
  featureSpan1.classList.remove("hidden");
}
companySpan.addEventListener("click", expandSecondList);

companySpan1.addEventListener("click", notExpandSecondList);

function expandSecondList() {
  arrowOpen2.classList.add("hidden");
  arrowClose2.classList.remove("hidden");
  navArrow2.classList.remove("hidden");
  navArrow2.classList.remove("close");
  companySpan.classList.add("hidden");
  companySpan1.classList.remove("hidden");
}

function notExpandSecondList() {
  arrowOpen2.classList.remove("hidden");
  arrowClose2.classList.add("hidden");
  navArrow2.classList.add("hidden");
  navArrow2.classList.add("close");
  companySpan.classList.remove("hidden");
  companySpan1.classList.add("hidden");
}

// challenge completed
