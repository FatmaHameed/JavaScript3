import { addContributorsContent } from '../addContributorContent.js';
// import { buttonWrapper, contributors } from '../globalVariables.js';

// this code was learned from video tutorial and used code along approach to use the code with some modification in it. The link of the video is 'https://www.youtube.com/watch?v=IqYiVHrO2U8&ab_channel=TylerPotts'

// const currentPage = 1;
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
    // display the sliced items into the page
    wrapper.innerHTML += addContributorsContent(
      contributor.avatar_url,
      contributor.login,
      contributor.html_url,
      contributor.login,
      contributor.contributions,
    );
  }
}

export { displayList, rows };
