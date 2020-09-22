import { fetchData } from './fetchData.js';
import { addRepoInfo } from './addRepoInfo.js';
import {
  createTextToDOMElement,
  appendChildToDOMElement,
} from './appendChildAndAddText.js';

export function changeRepository(event) {
  // add DOM Elements for contributors content
  const contributors = document.createElement('section');
  const contributorsDiv = document.createElement('div');
  contributorsDiv.setAttribute('id', 'contributors');
  const contributorsText = document.createElement('section');
  const contentWrapper = document.createElement('section');
  contentWrapper.setAttribute('id', 'content');
  // Add text to contributors
  createTextToDOMElement('Contributors', contributorsText);
  appendChildToDOMElement(contributorsText, contributorsDiv);
  // appendChildToDOMElement(contributorsDiv, contentWrapper);
  appendChildToDOMElement(contributorsText, contributors);
  // appendChildToDOMElement(contentWrapper, container);

  // console.log(event.target.value);
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetchData(url).then(repoData =>
    repoData.forEach(repo => {
      // console.log(repo.name);
      const contributorsURL = repo.contributors_url;
      // console.log(event.target.value);
      if (repo.name === event.target.value) {
        addRepoInfo(repo);
        fetchData(contributorsURL).then(contributorsData => {
          let contributorContent = '';

          contributorsData.forEach(contributor => {
            // console.log(contributor);

            contributorContent += `<div class="contributor-content"> 
                        <h5><img src='${contributor.avatar_url}' alt ="${contributor.login}" class ="avatar-img"><a href='${contributor.html_url}' target= "_blank"><span>${contributor.login} </span></a><span>${contributor.contributions}</span></h5></div>`;
          });
          console.log(contributorContent);
          contributors.innerHTML = contributorContent;

          console.log('CONTRIBUTORS', contributors);
        });
        appendChildToDOMElement(contributors, contributorsDiv);
        appendChildToDOMElement(contributorsDiv, contentWrapper);
      }
    }),
  );
}
