// index.js

import "./styles.css"; // Importing the CSS for styling
import { greeting, containerElement } from "./greeting.js"; // Importing the greeting text and the parent container
import divContainer from "./home-page.js";
import cakeContainer from "./cake-menu.js";
import donutContainer from "./donut-menu.js";
import sweetBlendsContainer from "./sweet-blends-menu.js";
import contactUsContainer from "./contact-us.js";

const bodyContainer = document.querySelector("body");
const personalLogoSection = document.querySelector(".personal-logo");
const cakeMenuButtons = document.getElementsByClassName("cakes-menu-button");
const donutMenuButtons = document.getElementsByClassName("donuts-menu-button");
const imageBGContainer = document.querySelector(".image-bg");
const sweetBlendMenuButtons = document.getElementsByClassName(
  "sweet-blends-menu-button"
);
const heroLogoButton = document.querySelector(".hero-logo-button");
const homeButton = document.querySelectorAll(".hero-logo-button, .home-button");
const mobileNavButton = document.querySelector(".hamburger-logo");
const closeButtonMobile = document.querySelector(".close-button-mobile");
const dynamicNav = document.querySelector(".dynamic-nav");
const contactButton = document.querySelector(".contact-us");

bodyContainer.insertBefore(divContainer, personalLogoSection);
imageBGContainer.className = "image-bg home";

console.log(greeting); // Logs the greeting message to the console

for (let cakeButton of cakeMenuButtons) {
  cakeButton.addEventListener("click", () => {
    modifyDOM(cakeContainer, "cake-menu");
  });
}

homeButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyDOM(divContainer, "home");
  });
});

for (let donutButton of donutMenuButtons) {
  donutButton.addEventListener("click", () => {
    modifyDOM(donutContainer, "donut-menu");
  });
}

for (let sweetBlendButton of sweetBlendMenuButtons) {
  sweetBlendButton.addEventListener("click", () => {
    modifyDOM(sweetBlendsContainer, "sweet-blend-menu");
  });
}

contactButton.addEventListener("click", () => {
  modifyDOM(contactUsContainer, "contact-us");
});

function modifyDOM(content, classForBG) {
  const contentContainer = document.querySelector(".content-container");
  bodyContainer.removeChild(contentContainer);
  bodyContainer.insertBefore(content, personalLogoSection);
  dynamicNav.classList.remove("open");
  mobileNavButton.classList.remove("open");

  imageBGContainer.classList.add("image-fade");

  window.scrollTo({
    top: 0,
  });

  setTimeout(() => {
    imageBGContainer.className = "image-bg";
    imageBGContainer.classList.add(classForBG);
  }, 1000); // Adjust timeout to match transition duration
}

mobileNavButton.addEventListener("click", () => {
  dynamicNav.classList.add("open");
  mobileNavButton.classList.add("open");
});

closeButtonMobile.addEventListener("click", () => {
  dynamicNav.classList.remove("open");
  mobileNavButton.classList.remove("open");
});

document.addEventListener("click", (event) => {
  // Check if the nav is open

  if (
    dynamicNav.classList.contains("open") &&
    !mobileNavButton.contains(event.target)
  ) {
    // If the click is outside the dynamic nav, close it
    if (!dynamicNav.contains(event.target)) {
      dynamicNav.classList.remove("open");
      mobileNavButton.classList.remove("open");
    }
  }
});
