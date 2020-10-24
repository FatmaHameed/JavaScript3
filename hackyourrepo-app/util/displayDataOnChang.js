import { fetchData } from './independentFunctions/fetchData.js';
// import { addContributorsContent } from './addContributorContent.js';
import { addRepoInfo } from './addRepoInfo.js';
import { appendChildToDOMElement } from './independentFunctions/appendChild.js';
import { displayList } from './pagination/displayList.js';
import { setupPaginatation } from './pagination/setupPagination.js';
import {
  buttonWrapper,
  buttonWrapper2,
  container,
  contentWrapper,
  contributors,
  contributorsDiv,
  url,
} from './globalVariables.js';

export const changeReboInfo = async event => {
  try {
    const fetchURL = await fetchData(url);
    const fetchedData = await fetchURL;
    fetchedData.forEach(async repo => {
      const repoName = await repo.name;
      const contributorsURL = await repo.contributors_url;
      if (repoName === event.target.value) {
        addRepoInfo(repo);
        const fetchURL2 = await fetchData(contributorsURL);
        const contributorsData = await fetchURL2;

        // start pagination

        const currentPage = 1;
        const rows = 5;
        displayList(contributorsData, contributors, rows, currentPage);
        setupPaginatation(
          contributorsData,
          buttonWrapper,
          rows,
          buttonWrapper2,
          contributorsDiv,
        );
        // end Pagination
      }
      appendChildToDOMElement(contributors, contributorsDiv);
      appendChildToDOMElement(contentWrapper, container);
      appendChildToDOMElement(contributorsDiv, contentWrapper);
    });
  } catch (error) {
    contentWrapper.innerHTML = `<div id ="error">Network Request Failed</div>`;
  }
};
