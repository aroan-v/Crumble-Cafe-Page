const sweetBlendsContainer = document.createElement("div");
sweetBlendsContainer.classList.add("content-container");
export default sweetBlendsContainer;

import vanillaAlmondBlend from "./vanilla-almond-blend.png";
import caramelCloudBlend from "./caramel-cloud-blend.png";
import hazelnutMochaBlend from "./hazelnut-mocha-blend.png";
import mapleCinnamonBlend from "./maple-cinnamon-blend.png";
import honeyLavenderLatte from "./honey-lavender-latte.png";
import { buildIntroContainer } from "./cake-menu";

import { subMenuContainer } from "./cake-menu";

const sweetBlendsIntro = {
  category: "Sweet Blends",
  tagline: "Brewing Comfort, One Cup at a Time.",
  description:
    "At Crumble, coffee is more than a drink – it’s a ritual. Our skilled baristas craft each cup to perfection, whether you’re craving a classic espresso, a velvety latte, or one of our signature Sweet Blends, topped and whipped to perfection. Sourced from the finest beans, each sip is a blend of warmth and flavor, made to keep you coming back.",
};

const sweetBlends = [
  {
    header: "Caramel Cloud Latte",
    class: "sweet-blend-class",
    image: caramelCloudBlend,
    price: "$6.50",
    tagline: "Fluffy, rich, and velvety smooth.",
    description:
      "The Caramel Cloud Latte combines a caramel-infused espresso with a delicate, cloud-like foam topping. The caramel flavor brings a touch of sweetness to balance the bold espresso, creating a drink that’s both indulgent and light as air.",
    ingredients: "Espresso, Caramel syrup, Frothed milk, Whipped cream.",
  },
  {
    header: "Hazelnut Mocha Velvet",
    class: "sweet-blend-class",
    image: hazelnutMochaBlend,
    price: "$6.75",
    tagline: "For the chocolate and coffee lover.",
    description:
      "The Hazelnut Mocha Velvet combines rich espresso, velvety chocolate syrup, and a hint of toasted hazelnut, topped with whipped cream and a sprinkle of chocolate shavings. This blend offers a luxurious, nutty sweetness and deep, satisfying flavor in every sip.",
    ingredients:
      "Espresso, Hazelnut syrup, Chocolate syrup, Whipped cream, Chocolate shavings.",
  },
  {
    header: "Vanilla Almond Frappe",
    class: "sweet-blend-class",
    image: vanillaAlmondBlend,
    price: "$7.00",
    tagline: "Refreshing yet creamy frappe with hints of nutty sweetness.",
    description:
      "This chilled blend of espresso, vanilla bean, and almond milk creates a refreshing yet creamy frappe with hints of nutty sweetness. Topped with a swirl of almond-flavored whipped cream and crushed almonds, it’s a sophisticated choice for a sweet, cool treat.",
    ingredients:
      "Espresso, Vanilla bean syrup, Almond milk, Almond-flavored whipped cream, Crushed almonds.",
  },
  {
    header: "Honey Lavender Latte",
    class: "sweet-blend-class",
    image: honeyLavenderLatte,
    price: "$6.25",
    tagline: "A soothing blend of espresso with subtle floral notes.",
    description:
      "This Honey Lavender Latte is infused with honey sweetness and a hint of lavender, making each sip calming yet full of character. Finished with delicate lavender buds on a creamy foam layer, it’s a unique blend of floral and sweet in one elegant cup.",
    ingredients:
      "Espresso, Honey syrup, Lavender extract, Frothed milk, Dried lavender buds.",
  },
  {
    header: "Maple Cinnamon Cappuccino",
    class: "sweet-blend-class",
    image: mapleCinnamonBlend,
    price: "$6.50",
    tagline: "A cozy blend of espresso with a hint of maple syrup.",
    description:
      "This cozy blend combines espresso with a hint of maple syrup and a dusting of cinnamon, topped with a creamy foam layer and a light sprinkle of cinnamon powder. With its warming notes and smooth texture, it’s the perfect autumn-inspired drink that brings comfort with every sip.",
    ingredients: "Espresso, Maple syrup, Frothed milk, Cinnamon powder.",
  },
];

buildIntroContainer(sweetBlendsIntro, sweetBlendsContainer);

sweetBlends.forEach((coffee) => {
  coffee.imageAlt = `A picture of ${coffee.header} from Crumble Cafe`;
  sweetBlendsContainer.appendChild(subMenuContainer(coffee));
});
