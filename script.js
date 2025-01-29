document.addEventListener("DOMContentLoaded", (event) => {
  //links dropDown
  const linkFeatures = document.querySelector("[data-lista]");
  const linkCompany = document.querySelector("[data-lista2]");
  const dropdownMenu1 = document.querySelectorAll("[data-menu=dropdown]");
  const dropdownMenu2 = document.querySelectorAll("[data-menu=dropdown-2]");

  // link mobile
  const nav = document.querySelector(".nav");
  const menuMobile = document.querySelector('[data-menu="button"]');

  // destructuring
  const menuArray1 = [...dropdownMenu1];
  const menuArray2 = [...dropdownMenu2];

  //events
  const events = ["touchstart", "click"];
  const activeClass = "ativo";

  const html = document.documentElement;

  function initDropDown(event) {
    event.preventDefault();
    const targetMenuArray =
      event.target === linkFeatures ? menuArray1 : menuArray2;
    const targetLink =
      event.target === linkFeatures ? linkFeatures : linkCompany;

    targetMenuArray.forEach((menu) => menu.classList.toggle(activeClass));
    targetLink.classList.toggle(activeClass);

    return;
  }

  function initMenuMobile(event) {
    event.preventDefault();
    const burguerImg = document.getElementById("burguerImg");
    const willActivate = burguerImg.classList.contains(activeClass);

    const arrayElements = [nav, burguerImg];
    arrayElements.forEach((elements) => elements.classList.toggle(activeClass));

    if (menuMobile) {
      burguerImg.setAttribute(
        "src",
        willActivate ? "/images/icon-menu.svg" : "/images/icon-close-menu.svg"
      );
    }
    return;
  }

  if (events.length > 0) {
    events.forEach((eventType) => {
      linkFeatures.addEventListener(eventType, initDropDown);
      linkCompany.addEventListener(eventType, initDropDown);
      menuMobile.addEventListener(eventType, initMenuMobile);
    });
  } else {
    console.error("Error. Undeclared events!");
  }
});
