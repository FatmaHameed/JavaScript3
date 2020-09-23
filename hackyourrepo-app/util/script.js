'use strict';

// document.body.innerHTML = 'hello';
/*
  Write here your JavaScript for HackYourRepo!
*/

import {
  createTextToDOMElement,
  appendChildToDOMElement,
} from './appendChildAndAddText.js';

import { changeReboInfo } from './displayDataOnChangeAndAddContributor.js';
import { addOptionToSelectEl } from './addRepoInfoAndOptions.js';
import {
  container,
  header,
  heading,
  selectEl,
  contentWrapper,
  content,
  contributorsDiv,
  contributorsText,
} from './globalVariables.js';

function main() {
  // 1- create DOM Elements
  container.setAttribute('id', 'container');
  header.setAttribute('id', 'header');
  header.classList.add('navigation', 'box', 'flex');
  contentWrapper.setAttribute('id', 'content');
  contentWrapper.classList.add('flex');
  content.classList.add('box');
  contributorsDiv.setAttribute('id', 'contributors');
  contributorsDiv.classList.add('flex');
  const footer = document.createElement('footer');
  footer.classList.add('navigation', 'box');
  footer.classList.add('navigation', 'box');

  // Add text content to DOM Elements
  createTextToDOMElement('HYF Repositories', heading);
  createTextToDOMElement('Contributors', contributorsText);
  createTextToDOMElement('HYF Repositories ', footer);

  // Append the elements to html
  document.body.appendChild(container);
  appendChildToDOMElement(header, container);
  appendChildToDOMElement(heading, header);
  appendChildToDOMElement(selectEl, header);
  appendChildToDOMElement(contentWrapper, container);
  appendChildToDOMElement(content, contentWrapper);
  appendChildToDOMElement(contributorsText, contributorsDiv);
  document.body.appendChild(footer);
  addOptionToSelectEl();
  // displayDataOnChange(selectEl);
  selectEl.addEventListener('change', changeReboInfo);
  addOptionToSelectEl();
}
window.addEventListener('load', main);
