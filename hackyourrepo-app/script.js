'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

import { appendChildToDOMElement } from './util/independentFunctions/appendChild.js';
import { createTextToDOMElement } from './util/independentFunctions/addTextToDOM.js';

import { changeReboInfo } from './util/displayDataOnChang.js';
import { addOptionToSelectEl } from './util/addOptions.js';
import {
  container,
  header,
  heading,
  selectEl,
  contentWrapper,
  content,
  contributorsDiv,
  contributorsText,
  buttonWrapper2,
  buttonWrapper,
} from './util/globalVariables.js';

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
  buttonWrapper.classList.add('flex');
  buttonWrapper2.classList.add('buttonWrapper');
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
  // appendChildToDOMElement(buttonWrapper2, body);
  container.appendChild(buttonWrapper2);
  document.body.appendChild(footer);
  addOptionToSelectEl();
  // displayDataOnChange(selectEl);
  selectEl.addEventListener('change', changeReboInfo);
  addOptionToSelectEl();
}
window.addEventListener('load', main);
