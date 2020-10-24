import { buttonWrapper, contributors } from '../globalVariables.js';
import { displayList, rows } from './displayList.js';

let currentPage = 1;
export function paginationButton(page, items, wrapper) {
  const button = document.createElement('button'); // creating buttons
  button.innerText = page;
  if (currentPage === page) {
    button.classList.add('active'); // this is working to activate the pressed button to add styling on it
  }
  button.addEventListener('click', () => {
    currentPage = page; // the current page now is = to i (page), display the list for this page in each iteration in setup pagination function and in displaylist function
    // call displayList here
    displayList(items, contributors, rows, currentPage);
    const currentBtn = document.querySelector('.active');
    // console.log(currentBtn);
    currentBtn.classList.remove('active');
    button.classList.add('active');
  });

  return button;
}
export { currentPage };
