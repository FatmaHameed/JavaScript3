'use strict';

// document.body.innerHTML = 'hello';
/*
  Write here your JavaScript for HackYourRepo!
*/

import {
  createTextToDOMElement,
  appendChildToDOMElement,
} from './appendChildAndAddText.js';

import { fetchData, errorMessage } from './fetchData.js';
import { addContributorsContent } from './addContributorsContent.js';
import { sortData } from './sortData.js';
import { addRepoInfo } from './addRepoInfo.js';

// const API = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// addContributorsElements();
// fetchData(API);
// addOptionsToSelect();
// sortData();
// addRepoInfo();

function main() {
  // 1- create DOM Elements
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  const header = document.createElement('section');
  header.setAttribute('id', 'header');
  header.classList.add('navigation', 'box', 'flex');
  const heading = document.createElement('h1');
  const selectEl = document.createElement('select');
  const contentWrapper = document.createElement('section');
  contentWrapper.setAttribute('id', 'content');
  contentWrapper.classList.add('flex');
  const content = document.createElement('section');
  const contributors = document.createElement('section');
  const repositoryHeading = document.createElement('h5');
  const repositoryDescription = document.createElement('h5');
  const repositoryForks = document.createElement('h5');
  const repositoryUpdated = document.createElement('h5');
  const repositoryHeadingSpan = document.createElement('span');
  const repositoryDescriptionSpan = document.createElement('span');
  const repositoryForksSpan = document.createElement('span');
  const repositoryUpdatedSpan = document.createElement('span');
  const contributorsDiv = document.createElement('div');
  contributorsDiv.setAttribute('id', 'contributors');
  contributorsDiv.classList.add('flex');
  const contributorsText = document.createElement('section');
  const footer = document.createElement('footer');
  footer.classList.add('navigation', 'box');

  // Add text content to DOM Elements
  createTextToDOMElement('HYF Repositories', heading);
  createTextToDOMElement('Contributors', contributorsText);
  createTextToDOMElement('Repository: ', repositoryHeading);
  createTextToDOMElement('Description: ', repositoryDescription);
  createTextToDOMElement('Forks: ', repositoryForks);
  createTextToDOMElement('Updated: ', repositoryUpdated);
  createTextToDOMElement('HYF Repositories ', footer);

  // Append the elements to html
  document.body.appendChild(container);
  appendChildToDOMElement(header, container);
  appendChildToDOMElement(heading, header);
  appendChildToDOMElement(selectEl, header);
  appendChildToDOMElement(contentWrapper, container);
  appendChildToDOMElement(content, contentWrapper);
  appendChildToDOMElement(contributorsText, contributorsDiv);
  appendChildToDOMElement(contributors, contentWrapper);
  appendChildToDOMElement(contentWrapper, container);
  // appendChildToDOMElement(contributorsText, contributors);
  appendChildToDOMElement(repositoryHeading, content);
  appendChildToDOMElement(repositoryHeadingSpan, repositoryHeading);
  appendChildToDOMElement(repositoryDescription, content);
  appendChildToDOMElement(repositoryDescriptionSpan, repositoryDescription);
  appendChildToDOMElement(repositoryForks, content);
  appendChildToDOMElement(repositoryForksSpan, repositoryForks);
  appendChildToDOMElement(repositoryUpdated, content);
  appendChildToDOMElement(repositoryUpdatedSpan, repositoryUpdated);
  document.body.appendChild(footer);

  // Create function to add the options to the DOM
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  function addOptionToSelectEl() {
    try {
      fetchData(url).then(data => {
        let options;

        data = sortData(data);
        // console.log(data);
        data.forEach(repo => {
          options += `<option value = "${repo.name}">${repo.name}</option>`;
          selectEl.innerHTML = options;
          if (repo.name === selectEl.value) {
            addRepoInfo(repo);
            fetchData(repo.contributors_url).then(data => {
              let contributorContent = '';
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
      contentWrapper.innerHTML = errorMessage;
    }
  }
  // addOptionToSelectEl(selectEl, contributors, contributorsDiv, contentWrapper);
  //  create the functionality to selected options
  selectEl.addEventListener('change', changeRepository);
  function changeRepository(event) {
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
      contentWrapper.innerHTML = errorMessage;
    }
  }
  addOptionToSelectEl();
}
window.addEventListener('load', main);
