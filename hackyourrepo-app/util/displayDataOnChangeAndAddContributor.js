import { fetchData } from './fetchData.js';
import { addRepoInfo } from './addRepoInfoAndOptions.js';
import { appendChildToDOMElement } from './appendChildAndAddText.js';

import {
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
        let contributorContent = '';
        contributorsData.forEach(async contributor => {
          if (repoName === event.target.value) {
            contributorContent += addContributorsContent(
              contributor.avatar_url,
              contributor.login,
              contributor.html_url,
              contributor.login,
              contributor.contributions,
            );
          }
          contributors.innerHTML = contributorContent;
        });
      }
      appendChildToDOMElement(contributors, contributorsDiv);
      appendChildToDOMElement(contentWrapper, container);
      appendChildToDOMElement(contributorsDiv, contentWrapper);
    });
  } catch (error) {
    contentWrapper.innerHTML = `<div id ="error">Network Request Failed</div>`;
  }
};
