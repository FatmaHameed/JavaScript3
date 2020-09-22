import { createTextToDOMElement } from './appendChildAndAddText.js';

export function addContainerAndFooter() {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  const footer = document.createElement('footer');
  document.body.appendChild(container);
  document.body.appendChild(footer);
  createTextToDOMElement('HYF Repositories ', footer);
  // console.log(container);
}
// module.exports = addContainerAndFooter;
