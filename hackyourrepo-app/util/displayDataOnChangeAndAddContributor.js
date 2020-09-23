import { fetchData } from './fetchData.js';
import { addRepoInfo } from './addRepoInfoAndOptions.js';
import { appendChildToDOMElement } from './appendChildAndAddText.js';

import {
  container,
  selectEl,
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
export function displayDataOnChange() {
  selectEl.addEventListener('change', event => {
    try {
      fetchData(url).then(repoData => {
        repoData.forEach(repo => {
          const repoName = repo.name;
          const contributorsURL = repo.contributors_url;
          if (repoName === event.target.value) {
            addRepoInfo(repo);
            fetchData(contributorsURL).then(contributorData => {
              let contributorContent = '';
              contributorData.forEach(contributor => {
                if (repoName === event.target.value) {
                  contributorContent += addContributorsContent(
                    contributor.avatar_url,
                    contributor.login,
                    contributor.html_url,
                    contributor.login,
                    contributor.contributions,
                  );
                }
              });
              contributors.innerHTML = contributorContent;
            });
          }
          appendChildToDOMElement(contributors, contributorsDiv);
          appendChildToDOMElement(contentWrapper, container);
          appendChildToDOMElement(contributorsDiv, contentWrapper);
        });
      });
    } catch (error) {
      contentWrapper.innerHTML = `<div id ="error">Network Request Failed</div>`;
    }
  });
}
