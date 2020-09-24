import { addContributorsContent } from './displayDataOnChangeAndAddContributor.js';
import { buttonWrapper, contributors } from './globalVariables.js';

// this code was learned from video tutorial and used code along approach to use the code with some modification in it. The link of the video is 'https://www.youtube.com/watch?v=IqYiVHrO2U8&ab_channel=TylerPotts'

let currentPage = 1;
const rows = 5;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = '';
  page--; // reduce 1 from the page number so now the page is 0

  const start = rowsPerPage * page; // 0*5 = 0
  const end = start + rowsPerPage; // 0+5 = 5
  const paginatedItems = items.slice(start, end); // The slicing of the array will be started from 0 index to stop at 5 index, so there is 5 items in the sliced array(0, 1, 2, 3 ,4)
  for (let i = 0; i < paginatedItems.length; i++) {
    // loop through the sliced array starting from index 0 in sliced array
    const contributor = paginatedItems[i]; // the items inside the sliced array
    const itemElement = document.createElement('div'); // display the sliced items into the page
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
  wrapper.innerHTML = ''; // to setup the page content - the data in the previous page- whenever the button is clicked
  const pageCount = Math.ceil(items.length / rowsPerPage); // the count of the page is estimated according to the length of the data, so here we do math ceil to provide pure (absolute) number (without comma). we used math ceil to not be losing items from the data. so here the data is divided by 5
  for (let i = 1; i < pageCount + 1; i++) {
    // the index here is starting at 1 so the buttons will be numbered from 1 to the page count according to the size of the data

    const btn = paginationButton(i, items); // creating buttons according to the size of data divided by 5 and the inner text of the button will be i as it is represent the page in pagination button function
    wrapper.appendChild(btn);
  }
}
function paginationButton(page, items) {
  const button = document.createElement('button'); // creating buttons
  button.innerText = page;
  if (currentPage == page) {
    button.classList.add('active'); // this is working to activate the pressed button to add styling on it
  }
  button.addEventListener('click', () => {
    currentPage = page; // the current page now is = to i (page), display the list for this page in each iteration in setup pagination function and in displaylist function
    // call displayList here
    displayList(items, contributors, rows, currentPage);
    // console.log(items);
    const currentBtn = document.querySelector('.active');
    currentBtn.classList.remove('active');
    button.classList.add('active');
  });
  return button;
}

export { displayList, setupPaginatation, paginationButton, rows, currentPage };
