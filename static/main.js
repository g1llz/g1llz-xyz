"use strict";
import { me, links } from './data';

const DEFAULT_COLOR = "#585959";

function socialButton({ text, link, color }) {
  const element = document.createElement("li");
  element.innerHTML = `<a href="${link}" class="social-link" target="_blank">${text}</a>`;
  element.style.color = color ?? DEFAULT_COLOR;

  return element;
}

function createLinks() {
  const target = document.querySelector(".social");
  const element = document.createElement("ul");

  links.forEach((item) => element.appendChild(socialButton(item)));
  target.appendChild(element);
}

function setName() {
  const target = document.querySelector(".name");
  target.innerHTML = me.name;
}

function setPosition() {
  const target = document.querySelector(".position");
  target.textContent = me.position;
}

function setPicture() {
  const target = document.querySelector(".picture");
  const element = document.createElement("img");

  element.setAttribute("src", me.picture);
  element.setAttribute("alt", me.name);

  target.appendChild(element);
}

(function () {
  setPicture();
  setName();
  setPosition();
  createLinks();
})();
