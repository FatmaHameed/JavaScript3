import { fetchData, errorMessage } from './independentFunctions/fetchData.js';
import { sortData } from './independentFunctions/sortData.js';
import { addContributorsContent } from './addContributorContent.js';
import {
  selectEl,
  contentWrapper,
  // content,
  contributors,
  contributorsDiv,
  url,
} from './globalVariables.js';
import { appendChildToDOMElement } from './independentFunctions/appendChild.js';
import { addRepoInfo } from './addRepoInfo.js';

export function addOptionToSelectEl() {
  try {
    fetchData(url).then(data => {
      let options;

      const sortedData = sortData(data);
      // console.log(data);
      sortedData.forEach(repo => {
        options += `<option value = "${repo.name}">${repo.name}</option>`;
        selectEl.innerHTML = options;
        if (repo.name === selectEl.value) {
          addRepoInfo(repo);
          fetchData(repo.contributors_url).then(data => {
            let contributorContent = '';
            data.forEach(contributor => {
              contributorContent += addContributorsContent(
                contributor.avatar_url,
                contributor.login,
                contributor.html_url,
                contributor.login,
                contributor.contributions,
              );
            });
            contributors.innerHTML = contributorContent;
          });

          appendChildToDOMElement(contributors, contributorsDiv);
          appendChildToDOMElement(contributorsDiv, contentWrapper);
        }
      });
    });
  } catch (error) {
    console.log(error);
    contentWrapper.innerHTML = errorMessage;
  }
}
