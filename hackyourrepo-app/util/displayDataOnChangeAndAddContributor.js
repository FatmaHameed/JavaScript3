import { fetchData } from './fetchData.js';
import { addRepoInfo } from './addRepoInfoAndOptions.js';
import { appendChildToDOMElement } from './appendChildAndAddText.js';
import {
  displayList,
  setupPaginatation,
  paginationButton,
} from './addPagination.js';
import {
  buttonWrapper,
  buttonWrapper2,
  container,
  contentWrapper,
  contributors,
  contributorsDiv,
  url,
} from './globalVariables.js';

export function addContributorsContent(
  imageSrc,
  imageInfo,
  contribGitHup,
  contribLogin,
  contributions,
) {
  return `<div class="contributor-content box">
<h5 class="flex"><img src='${imageSrc}' alt ="${imageInfo}" class ="avatar-img"><a href='${contribGitHup}' target= "_blank"><span>${contribLogin} </span></a><span>${contributions}</span></h5></div>`;
}
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
        console.log(contributorsData);

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
