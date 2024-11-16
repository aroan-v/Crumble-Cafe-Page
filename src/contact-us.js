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

contactUs.forEach((obj) => {
  contactDetailsContainer.appendChild(createContactUsDiv(obj));
});

const formSectionContainer = document.createElement("section");
const formDetailsDiv = document.createElement("div");

formSectionContainer.classList.add("form-section");
formDetailsDiv.classList.add("form-details");

const h1FormDetails = document.createElement("h1");
const pFormDetails = document.createElement("p");

h1FormDetails.textContent = "Have a Question?";
pFormDetails.innerHTML =
  "Feel free to send us a message by filling out the form below. <br /> We’ll get back to you as soon as possible!";

formDetailsDiv.append(h1FormDetails, pFormDetails);

const form = document.createElement("form");
const fieldSet = document.createElement("fieldset");
const inputEmail = document.createElement("input");
const labelEmail = document.createElement("label");
const labelMessage = document.createElement("label");
const textAreaMessage = document.createElement("textarea");
const submitButton = document.createElement("button");

form.method = "post";
form.action = "#";
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.name = "email";
inputEmail.placeholder = " ";
inputEmail.required = true;
labelEmail.for = "email";
labelEmail.textContent = "Email:";
fieldSet.append(inputEmail, labelEmail);

labelMessage.for = "message";
labelMessage.textContent = "Message:";

textAreaMessage.id = "message";
textAreaMessage.name = "message";
textAreaMessage.placeholder = "Type your message here...";
textAreaMessage.rows = "4";
textAreaMessage.required = true;

submitButton.type = "submit";
submitButton.textContent = "Send Message";

form.append(fieldSet, labelMessage, textAreaMessage, submitButton);

formSectionContainer.append(formDetailsDiv, form);
contactUsContainer.append(contactDetailsContainer, formSectionContainer);

function createContactUsDiv(obj) {
  const divContainer = document.createElement("div");
  const imgContainer = document.createElement("img");
  const h2Container = document.createElement("h2");
  const pContainer = document.createElement("p");

  divContainer.classList.add(obj.class);
  imgContainer.src = obj.svg;
  h2Container.textContent = obj.heading;

  if (obj.details2) {
    pContainer.innerHTML = `${obj.details}<br>${obj.details2}`;
  } else {
    pContainer.textContent = obj.details;
  }

  divContainer.append(imgContainer, h2Container, pContainer);

  return divContainer;
}
