import { fetchData } from './independentFunctions/fetchData.js';
import { addContributorsContent } from './addContributorContent.js';
import { addRepoInfo } from './addRepoInfo.js';
import { appendChildToDOMElement } from './independentFunctions/appendChild.js';
// import { displayList } from './pagination/displayList.js';
import { setupPaginatation } from './pagination/setupPagination.js';
import { paginationButton } from './pagination/paginationButton.js';
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
        // console.log(contributorsData);

        // start pagination

        let contributorContent = '';
        const currentPage = 1;
        const rows = 5;
        function displayList(
          contributorsData,
          contributors,
          rows,
          currentPage,
        ) {
          contributors.innerHTML = '';
          currentPage--;
          const start = rows * currentPage;
          const end = start + rows;
          const paginatedData = contributorsData.slice(start, end);
          for (let i = 0; i < paginatedData.length; i++) {
            const contributor = paginatedData[i];

            const buttons = paginationButton(i, paginatedData[i]);
            console.log(buttons);

            buttonWrapper.innerHTML = buttons;
            contributorContent += addContributorsContent(
              contributor.avatar_url,
              contributor.login,
              contributor.html_url,
              contributor.login,
              contributor.contributions,
            );
          }
          appendChildToDOMElement(buttonWrapper, buttonWrapper2);

          contributors.innerHTML = contributorContent;
        }

        displayList(contributorsData, contributors, rows, currentPage);

        setupPaginatation(contributorsData, buttonWrapper, rows);
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
