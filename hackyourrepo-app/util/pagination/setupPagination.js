import { paginationButton } from './paginationButton.js';

export function setupPaginatation(
  items,
  wrapper,
  rowsPerPage,
  wrapper2,
  wrapperDiv,
) {
  wrapper.innerHTML = '';
  wrapperDiv.innerHTML = ''; // to setup the page content - the data in the previous page- whenever the button is clicked

  const pageCount = Math.ceil(items.length / rowsPerPage); // the count of the page is estimated according to the length of the data, so here we do math ceil to provide pure (absolute) number (without comma). we used math ceil to not be losing items from the data. so here the data is divided by 5
  for (let i = 1; i < pageCount + 1; i++) {
    // the index here is starting at 1 so the buttons will be numbered from 1 to the page count according to the size of the data
    const btn = paginationButton(i, items); // creating buttons according to the size of data divided by 5 and the inner text of the button will be i as it is represent the page in pagination button function
    wrapper.appendChild(btn);
    wrapper2.appendChild(wrapper);
  }
}
