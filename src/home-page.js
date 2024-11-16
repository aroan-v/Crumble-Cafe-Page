const divContainer = document.createElement("div");
divContainer.classList.add("content-container");
export default divContainer;
import cakePng from "./cakes.png";
import donutPng from "./donut.png";
import sweetBlendsPng from "./sweet-blends.png";

const aboutUsSection = document.createElement("section");
const p = document.createElement("p");
aboutUsSection.classList.add("about-us");

p.innerHTML = ` Welcome to Crumble – Where Every Bite is Pure Bliss!  <br />Indulge in
          a world of handcrafted cakes, freshly-made donuts, and artisan coffee.
          Dive into the flavors you crave, in a place that feels like home.`;

aboutUsSection.appendChild(p);
divContainer.appendChild(aboutUsSection);

const cafeMenuSection = document.createElement("section");
const cafeClassNames = [
  "cakes-container",
  "donuts-container",
  "sweet-blends-container",
];

const cafeMenu = [
  {
    header: "Cakes",
    class: "cakes-container",
    buttonClass: "cakes-menu-button",
    image: cakePng,
    imageAlt: "A picture of Crumble Cafe's Cake",
    tagline: "Layers of Love in Every Slice.",
    description:
      " Our cakes are baked fresh, crafted to bring you moments of joy in every slice. From rich, velvety chocolate layers to light, airy sponges, each creation at Crumble is designed to satisfy your sweet cravings. Dive into classics or try one of our seasonal specialties – each bite is a celebration of flavor.",
    buttonName: "Cakes Menu",
  },
  {
    header: "Donuts",
    class: "donuts-container",
    buttonClass: "donuts-menu-button",
    image: donutPng,
    imageAlt: "A picture of Crumble Cafe's donut",
    tagline: "Freshly Fried, Lovingly Filled, and Ready for You!",
    description:
      "From fluffy to filled, Crumble’s donuts are the ultimate treat. Made fresh daily, our donuts come in a variety of flavors, each one more tempting than the last. Try our crowd-favorite classic glaze or go bold with unique creations that pack a punch of flavor. Perfect for breakfast, a snack, or simply because you deserve it.",
    buttonName: "Donuts Menu",
  },
  {
    header: "Sweet Blends",
    class: "sweet-blends-container",
    buttonClass: "sweet-blends-menu-button",
    image: sweetBlendsPng,
    imageAlt: "A picture of Crumble Cafe's Coffee",
    tagline: "Brewing Comfort, One Cup at a Time.",
    description:
      "At Crumble, coffee is more than a drink – it’s a ritual. Our skilled baristas craft each cup to perfection, whether you’re craving a classic espresso, a velvety latte, or one of our signature Sweet Blends, topped and whipped to perfection. Sourced from the finest beans, each sip is a blend of warmth and flavor, made to keep you coming back.",
    buttonName: "Sweet Blends Menu",
  },
];
cafeMenuSection.classList.add("cafe-menu");

cafeMenu.forEach((cssClass) => {
  cafeMenuSection.appendChild(createDivElementTester(cssClass));
});

divContainer.appendChild(cafeMenuSection);

function createDivElement(cssClass) {
  const div = document.createElement("div");
  const img = document.createElement("img");

  div.classList.add(cssClass);
  div.classList.add("sub-menu");
  img.src = cakePng;

  div.appendChild(img);

  return div;
}

function createDivElementTester(obj) {
  const div = document.createElement("div");
  const divChild = document.createElement("div");
  const divChildImg = document.createElement("div");
  const h1 = document.createElement("h1");
  const pTagline = document.createElement("p");
  const pDescription = document.createElement("p");
  const button = document.createElement("button");
  const img = document.createElement("img");

  div.classList.add(obj.class);
  div.classList.add("sub-menu");

  img.src = obj.image;
  img.alt = obj.imageAlt;

  divChildImg.classList.add("sub-menu-img");
  divChild.classList.add("sub-menu-details");
  h1.textContent = obj.header;
  pTagline.classList.add("tagline");
  pTagline.textContent = obj.tagline;
  pDescription.textContent = obj.description;
  button.textContent = obj.buttonName;
  button.classList.add(obj.buttonClass);

  divChildImg.appendChild(img);
  divChild.append(h1, pTagline, pDescription, button);
  div.append(divChildImg, divChild);

  return div;
}
