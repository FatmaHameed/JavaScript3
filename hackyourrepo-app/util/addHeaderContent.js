// import { addOptionsToSelect } from './addOptionsToSelect.js';
import {
  createTextToDOMElement,
  appendChildToDOMElement,
} from './appendChildAndAddText.js';
import { fetchData } from './fetchData.js';
import { sortData } from './sortData.js';
import { addRepoInfo } from './addRepoInfo.js';
import { changeRepository } from './changeRepo.js';

export function addHeader() {
  const header = document.createElement('section');
  header.setAttribute('id', 'header');
  const heading = document.createElement('h1');
  const selectEl = document.createElement('select');
  // create text to heading Element
  createTextToDOMElement('HYF Repositories', heading);
  // Append header elements
  appendChildToDOMElement(header, container);
  appendChildToDOMElement(heading, header);
  appendChildToDOMElement(selectEl, header);
  selectEl.addEventListener('change', changeRepository);

  // add option to select element

  function addOptionsToSelect() {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    let options;
    fetchData(url).then(data => {
      data = sortData(data);
      data.forEach(repo => {
        // options += `<option value = "${repo.name}">${repo.name}</option>`;
        // selectEl.innerHTML = options;
        options = document.createElement('option');
        options.textContent = repo.name;
        options.value = repo.name;
        selectEl.appendChild(options);
        if (repo.name === selectEl.value) {
          addRepoInfo(repo);
        }
      });
    });
  }
  addOptionsToSelect();
}
