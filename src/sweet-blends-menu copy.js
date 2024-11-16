const contactUsContainer = document.createElement("div");
contactUsContainer.classList.add("content-container");
export default contactUsContainer;

import { buildIntroContainer } from "./cake-menu";

import emailIcon from "./email-icon.svg";
import hoursIcon from "./hours-icon.svg";
import locationIcon from "./location-icon.svg";
import phoneIcon from "./phone-icon.svg";

const contactUsIntro = {
  category: "Contact Us",
  tagline: "We’d love to hear from you!",
  description:
    "Whether you have a question about our menu, want to give feedback, or simply want to say hello, we’re here to help. Reach out to us using the details below, or drop by and experience Crumble’s warm and welcoming atmosphere in person.",
};

buildIntroContainer(contactUsIntro, contactUsContainer);

const contactDetailsContainer = document.createElement("section");

contactDetailsContainer.classList.add("contact-details-container");
locationContainerDiv.classList.add("location-container");

contactDetailsContainer.appendChild(locationContainerDiv);

const contactUs = [
  {
    class: "location-container",
    svg: locationIcon,
    heading: "Location",
    alt: "A location vector icon",
    details: "Crumble Artisan Café, 123 Gourmet Avenue Hidden Leaf Village",
  },
  {
    class: "phone-container",
    svg: phoneIcon,
    heading: "Phone",
    alt: "A phone vector icon",
    details: "(02) 123-4567",
  },
  {
    class: "email-container",
    svg: emailIcon,
    heading: "Email",
    alt: "An email icon",
    details: "hello@crumblecafe.com",
  },
  {
    class: "operating-hours-container",
    svg: hoursIcon,
    heading: "Operating Hours",
    alt: "A clock icon",
    details: "Monday - Sunday",
    details2: "7:00 AM - 8:00 PM",
  },
];

function createContactUsDiv(obj) {
  const divContainer = document.createElement("div");
  const imgContainer = document.createElement("img");
  const h2Container = document.createElement("h2");
  const pContainer = document.createElement("p");

  divContainer.classList.add(obj.class);
  imgContainer.src = obj.svg;
  h2Container.textContent = obj.heading;
  pContainer.textContent = obj.details;

  divContainer.append(imgContainer);
}
