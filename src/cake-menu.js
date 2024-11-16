const cakeContainer = document.createElement("div");
cakeContainer.classList.add("content-container");
export default cakeContainer;

import berryCake from "./berry-whildwing-cake.png";
import citrusCake from "./citrus-cake.png";
import velvetCake from "./golden-velvet-cake.png";
import oreoCake from "./oreo-cake.png";
import smoresCake from "./smores-cake.png";

const cakeIntro = {
  category: "Cakes",
  tagline: "Layers of Love in Every Slice.",
  description:
    "Our cakes are baked fresh, crafted to bring you moments of joy in every slice. From rich, velvety chocolate layers to light, airy sponges, each creation at Crumble is designed to satisfy your sweet cravings. Dive into classics or try one of our seasonal specialties – each bite is a celebration of flavor.",
};

const cakeMenu = [
  {
    header: "Citrus Dreamscake",
    class: "cake-class",
    image: citrusCake,
    price: "$8.50",
    tagline: "Experience a slice of paradise with our Citrus DreamsCake!",
    description:
      "This enchanting creation features layers of zesty lemon cake infused with fresh berry compote, all enveloped in a light, velvety lemon buttercream. Each bite offers a refreshing burst of flavor, perfectly balanced with a sweet-tart finish. It’s a vibrant celebration of summer in every slice!",
    ingredients:
      "Lemon zest, Fresh mixed berries, All-purpose flour, Sugar, Eggs, Unsalted butter, Vanilla extract.",
  },
  {
    header: "Golden Velvet Indulgence",
    class: "cake-class",
    image: velvetCake,
    price: "$9.00",
    tagline:
      "Indulge in the luxurious flavors of our Golden Velvet Indulgence.",
    description:
      "This sumptuous cake is a lavish twist on the classic red velvet, featuring rich caramel layers that melt in your mouth. Frosted with a silky caramel cream cheese icing and adorned with delicate caramel drips, this cake is a decadent masterpiece that promises to leave you blissfully satisfied.",
    ingredients:
      "Cocoa powder, Sugar, Eggs, Buttermilk, Vegetable oil, Caramel sauce, Cream cheese.",
  },
  {
    header: "Berry Whirlwind Cheesecake",
    class: "cake-class",
    image: berryCake,
    price: "$9.50",
    tagline:
      "Dive into the Berry Whirlwind Cheesecake, where creamy perfection meets a vibrant medley of fresh berries.",
    description:
      "This dreamy cheesecake sits atop a buttery graham cracker crust and is swirled with raspberry and blueberry purée, creating a flavor explosion with every forkful. Topped with a dollop of whipped cream and seasonal berries, it’s a dessert experience like no other.",
    ingredients:
      "Cream cheese, Fresh raspberries, Fresh blueberries, Graham crackers, Sugar, Heavy cream, Lemon juice.",
  },
  {
    header: "S’mores Mocha Delight Cake",
    class: "cake-class",
    image: smoresCake,
    price: "$9.50",
    tagline:
      "Relish in the comforting flavors of campfire nostalgia with our S’mores Mocha Delight Cake.",
    description:
      "Layers of rich chocolate espresso cake are intertwined with fluffy marshmallow frosting and a decadent chocolate ganache. Topped with crushed graham crackers and toasted marshmallows, this cake captures the essence of a cozy evening under the stars, all in a single bite.",
    ingredients:
      "Dark chocolate, Espresso, Eggs, Sugar, Marshmallow fluff, Graham crackers, Heavy cream.",
  },
  {
    header: "Oreo Caramel Sensation",
    class: "cake-class",
    image: oreoCake,
    price: "$8.75",
    tagline:
      "Indulge in the Oreo Caramel Sensation, a delightful fusion of flavors that will satisfy your cravings.",
    description:
      "This decadent cake features layers of chocolate cake infused with crushed Oreo cookies and a luscious caramel filling. Frosted with a rich Oreo buttercream and finished with a drizzle of velvety caramel, this treat is a cookie lover’s dream come true!",
    ingredients:
      "Chocolate cake mix, Oreo cookies, Caramel sauce, Butter, Powdered sugar, Heavy cream.",
  },
];

buildIntroContainer(cakeIntro, cakeContainer);
// Dynamically set imageAlt based on header
cakeMenu.forEach((cake) => {
  cake.imageAlt = `A picture of ${cake.header} from Crumble Cafe`;
  cakeContainer.appendChild(subMenuContainer(cake));
});

export function buildIntroContainer(obj, parentContainer) {
  const intro = document.createElement("section");
  const headerIntro = document.createElement("h1");
  const taglineIntro = document.createElement("h2");
  const paragraphIntro = document.createElement("p");
  intro.classList.add("intro");

  headerIntro.textContent = obj.category;
  taglineIntro.textContent = obj.tagline;
  paragraphIntro.textContent = obj.description;

  intro.append(headerIntro, taglineIntro, paragraphIntro);
  parentContainer.appendChild(intro);
}

export function subMenuContainer(obj) {
  const subMenuDiv = document.createElement("div");
  const img = document.createElement("img");
  const subMenuImgDiv = document.createElement("div");
  const subMenuDetailsDiv = document.createElement("div");
  const subMenuItemDiv = document.createElement("div");
  const itemName = document.createElement("h1");
  const itemPrice = document.createElement("h1");
  const taglineP = document.createElement("p");
  const descriptionP = document.createElement("p");
  const ingredientsP = document.createElement("p");
  const ingredientsBold = document.createElement("b");

  subMenuDiv.classList.add("sub-menu", obj.class);
  subMenuDetailsDiv.classList.add("sub-menu-details");
  subMenuItemDiv.classList.add("sub-menu-item");
  subMenuImgDiv.classList.add("sub-menu-img");

  img.src = obj.image;
  img.alt = obj.imageAlt;

  itemName.textContent = obj.header;
  itemPrice.textContent = obj.price;
  subMenuItemDiv.append(itemName, itemPrice);

  taglineP.textContent = obj.tagline;
  descriptionP.textContent = obj.description;

  ingredientsBold.textContent = "Ingredients: ";
  ingredientsP.append(ingredientsBold, obj.ingredients);

  subMenuImgDiv.appendChild(img);
  subMenuDetailsDiv.append(
    subMenuItemDiv,
    taglineP,
    descriptionP,
    ingredientsP
  );
  subMenuDiv.append(subMenuImgDiv, subMenuDetailsDiv);

  return subMenuDiv;
}
