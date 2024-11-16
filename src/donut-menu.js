const donutContainer = document.createElement("div");
donutContainer.classList.add("content-container");
export default donutContainer;

import mapleAlmondDonut from "./maple-almond-donut.png";
import berryBlissDonut from "./berry-bliss-donut.png";
import chocoLavaDonut from "./choco-lava-donut.png";
import espressoDreamDonut from "./espresso-dream-donut.png";
import goldenGlazeDonut from "./golden-glaze-donut.png";
import { buildIntroContainer } from "./cake-menu";

import { subMenuContainer } from "./cake-menu";

const donutIntro = {
  category: "Donuts",
  tagline: "Freshly Fried, Lovingly Filled, and Ready for You!",
  description: `From fluffy to filled, Crumble’s donuts are the ultimate treat. Made fresh daily, our donuts come in a variety of flavors, each one more tempting than the last. Try our crowd-favorite classic glaze or go bold with unique creations that pack a punch of flavor. Perfect for breakfast, a snack, or simply because you deserve it.`,
};

const donutMenu = [
  {
    header: "Golden Glaze Delight",
    class: "donut-class",
    image: goldenGlazeDonut,
    price: "$4.25",
    tagline: "A simple classic elevated to perfection.",
    description:
      "This airy donut is coated in a luxurious golden glaze, adding a subtle touch of sweetness with a hint of vanilla. It’s the perfect balance of soft texture and delicate sweetness, crafted to satisfy any craving, any time.",
    ingredients:
      "Vanilla bean glaze, All-purpose flour, Sugar, Eggs, Butter, Yeast.",
  },
  {
    header: "Choco-Lava Indulgence",
    class: "donut-class",
    image: chocoLavaDonut,
    price: "$4.50",
    tagline: "Dive into pure decadence with the Choco-Lava Indulgence.",
    description:
      "This donut hides a rich, molten chocolate filling inside a pillowy, chocolate-coated exterior. A sprinkle of dark chocolate shavings on top adds an extra layer of indulgence, making every bite a deep dive into chocolate heaven.",
    ingredients:
      "Dark chocolate ganache, Cocoa powder, All-purpose flour, Sugar, Eggs, Butter.",
  },
  {
    header: "Maple Almond Crunch",
    class: "donut-class",
    image: mapleAlmondDonut,
    price: "$4.75",
    tagline: "Smooth maple glaze with a nutty, caramelized crunch.",
    description:
      "This gourmet delight is glazed with a velvety maple coating and topped with caramelized almond bits for the perfect crunch. The combination of smooth maple and nutty almonds brings out a savory-sweet experience in every bite, making it an irresistible treat.",
    ingredients:
      "Maple glaze, Caramelized almonds, All-purpose flour, Sugar, Butter, Yeast.",
  },
  {
    header: "Berry Bliss Filled Donut",
    class: "donut-class",
    image: berryBlissDonut,
    price: "$4.75",
    tagline: "Bursting with a delightful berry compote.",
    description:
      "This fluffy donut is filled to perfection with a medley of fresh strawberries, raspberries, and blueberries. Topped with a light dusting of powdered sugar, it’s a juicy, vibrant twist on the classic jelly donut that’ll leave you craving more.",
    ingredients:
      "Mixed berry compote, Powdered sugar, All-purpose flour, Sugar, Butter, Yeast.",
  },
  {
    header: "Espresso Crème Dream",
    class: "donut-class",
    image: espressoDreamDonut,
    price: "$5.00",
    tagline: "The ultimate pick-me-up in donut form.",
    description:
      "This sophisticated donut is infused with a light coffee glaze and filled with smooth espresso cream, creating a perfect balance of sweetness and a bold coffee kick. Topped with a sprinkle of espresso powder, it’s the ideal treat for coffee lovers.",
    ingredients:
      "Espresso-infused cream filling, Coffee glaze, All-purpose flour, Sugar, Eggs, Butter, Espresso powder.",
  },
];

buildIntroContainer(donutIntro, donutContainer);

donutMenu.forEach((donut) => {
  donut.imageAlt = `A picture of ${donut.header} from Crumble Cafe`;
  donutContainer.appendChild(subMenuContainer(donut));
});
