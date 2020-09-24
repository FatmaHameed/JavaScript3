import { fetchData, errorMessage } from './fetchData.js';
import { sortData } from './sortData.js';
import { addContributorsContent } from './displayDataOnChangeAndAddContributor.js';
import {
  selectEl,
  contentWrapper,
  content,
  contributors,
  contributorsDiv,
  url,
} from './globalVariables.js';
import { appendChildToDOMElement } from './appendChildAndAddText.js';
import { setupPaginatation, rows } from './addPagination.js';

export function addRepoInfo(repo, repoDescription) {
  let { description } = repo;
  function checkDescription() {
    if (description == null) {
      description = '';
    } else {
      description = repo.description;
    }
    return description;
  }
  repoDescription = checkDescription();

  content.innerHTML = `<div><h5>Repository: <a href='${repo.html_url}' target="_blank"><span>${repo.name}</span></a></h5>
  <h5>Description: <span>${repoDescription}</span></h5>
  <h5>Forks: <span>${repo.forks_count}</span></h5>
  <h5>Updated: <span>${repo.updated_at}</span></h5></div>`;
}
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
            setupPaginatation(data, contributors, rows);
            data.forEach(contributor => {
              if (repo.name === selectEl.value) {
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
