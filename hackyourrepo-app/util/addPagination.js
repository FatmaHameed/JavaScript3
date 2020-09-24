import { addContributorsContent } from './displayDataOnChangeAndAddContributor.js';
import { contributors } from './globalVariables.js';

const pagContainer = document.createElement('div');

let currentPage = 1;
const rows = 5;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  const start = rowsPerPage * page;
  const end = start + rowsPerPage;
  const paginatedItems = items.slice(start, end);
  for (let i = 0; i < paginatedItems.length; i++) {
    const contributor = paginatedItems[i];
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = addContributorsContent(
      contributor.avatar_url,
      contributor.login,
      contributor.html_url,
      contributor.login,
      contributor.contributions,
    );
    wrapper.appendChild(itemElement);
  }
}
function setupPaginatation(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = '';
  const pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    const btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}
function paginationButton(page, items) {
  const button = document.createElement('button');
  button.innerText = page;
  if (currentPage == page) {
    button.classList.add('active');
  }
  button.addEventListener('click', function() {
    currentPage = page;
    // call displayList here
    displayList(items, contributors, rows, currentPage);
    console.log(items);
    const currentBtn = document.querySelector('.active');
    currentBtn.classList.remove('active');
    button.classList.add('active');
  });
  return button;
}

export {
  displayList,
  setupPaginatation,
  paginationButton,
  rows,
  currentPage,
  pagContainer,
};
