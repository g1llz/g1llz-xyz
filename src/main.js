"use strict";
import { me, links } from "./data";

const DEFAULT_COLOR = "#585959";

function socialLink({ text, link, color }) {
  const element = document.createElement("li");
  element.innerHTML = `<a href="${link}" class="social-link" target="_blank">${text}</a>`;
  element.style.color = color ?? DEFAULT_COLOR;

  return element;
}

function createLinks() {
  const element = document.createElement("ul");

  links.forEach((item) => element.appendChild(socialLink(item)));
  document.querySelector(".social").appendChild(element);
}

function setNameAndPosition() {
  document.querySelector(".name").innerHTML = me.name;
  document.querySelector(".position").textContent = me.position;
}

function setPicture() {
  const element = document.createElement("img");

  element.setAttribute("src", me.picture);
  element.setAttribute("alt", me.name);

  document.querySelector(".picture").appendChild(element);
}

(function () {
  setPicture();
  setNameAndPosition();
  createLinks();
})();
