'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

function main() {
  // 1- create DOM Elements
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  const header = document.createElement('section');
  header.setAttribute('id', 'header');
  const heading = document.createElement('h1');
  const selectEl = document.createElement('select');
  const contentWrapper = document.createElement('section');
  contentWrapper.setAttribute('id', 'content');
  const content = document.createElement('section');
  content.setAttribute('id', 'content1');
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
  const contributorsText = document.createElement('section');
  const footer = document.createElement('footer');

  // 2- create a function to create text to the DOM element
  function createTextToDOMElement(text, element) {
    return (element.textContent = text);
  }

  // 3- Add text content to DOM Elements
  createTextToDOMElement('HYF Repositories', heading);
  createTextToDOMElement('Contributors', contributorsText);
  createTextToDOMElement('Repository: ', repositoryHeading);
  createTextToDOMElement('Description: ', repositoryDescription);
  createTextToDOMElement('Forks: ', repositoryForks);
  createTextToDOMElement('Updated: ', repositoryUpdated);
  createTextToDOMElement('HYF Repositories ', footer);

  // 4- Append the elements to html
  // 4- A create append child function
  document.body.appendChild(container);
  function appendChildToDOMElement(child, element) {
    return element.appendChild(child);
  }
  // 4- B append elements
  appendChildToDOMElement(header, container);
  appendChildToDOMElement(heading, header);
  appendChildToDOMElement(selectEl, header);
  appendChildToDOMElement(contentWrapper, container);
  appendChildToDOMElement(content, contentWrapper);
  appendChildToDOMElement(contributorsText, contributorsDiv);
  appendChildToDOMElement(contributors, contentWrapper);
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

  // 5- Create fetchData function

  function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        error = `<div id ="error">Network Request Failed</div>`;
        contentWrapper.innerHTML = error;
      });
  }

  // 6- create function to add repo info

  function addRepoInfo(repo, repoDescription) {
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
    // console.log(repoDescription);
    content.innerHTML = `<h5>Repository: <a href='${repo.html_url}'><span>${repo.name}</span></a></h5>
    <h5>Description: <span>${repoDescription}</span></h5>
    <h5>Forks: <span>${repo.forks_count}</span></h5>
    <h5>Updated: <span>${repo.updated_at}</span></h5>`;
  }

  // 7- create function to add the options to the DOM
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  function addOptionToSelectEl() {
    fetchData(url).then(data => {
      let options;
      const sortedData = () => {
        function compare(a, b) {
          const dataA = a.name.toUpperCase();
          const dataB = b.name.toUpperCase();
          let comparison = 0;
          if (dataA > dataB) {
            comparison = 1;
          } else if (dataA < dataB) {
            comparison = -1;
          }
          return comparison;
        }
        return data.sort(compare);
      };

      data = sortedData();
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
                contributorContent += `<div class="contributor-content"> 
                          <h5><img src='${contributor.avatar_url}' alt ="${contributor.login}" class ="avatar-img"><a href='${contributor.html_url}' target= "_blank"><span>${contributor.login} </span></a><span>${contributor.contributions}</span></h5></div>`;
              }
            });
            contributors.innerHTML = contributorContent;
          });

          appendChildToDOMElement(contributors, contributorsDiv);
          appendChildToDOMElement(contributorsDiv, contentWrapper);
        }
      });
    });
  }

  // 8- create the functionality to selected options
  selectEl.addEventListener('change', changeRepository);
  function changeRepository(event) {
    fetchData(url).then(repoData => {
      repoData.forEach(repo => {
        const repoName = repo.name;
        const contributorsURL = repo.contributors_url;
        let singleContributor;
        if (repoName === event.target.value) {
          addRepoInfo(repo);
          fetchData(contributorsURL).then(contributorData => {
            let contributorContent = '';
            contributorData.forEach(contributor => {
              singleContributor = contributor;
              contributorContent += ` <div class="contributor-content"> 
                <h5><img src='${singleContributor.avatar_url}' alt ="${singleContributor.login}" class ="avatar-img"><a href='${singleContributor.html_url}' target= "_blank"><span>${singleContributor.login} </span></a><span>${singleContributor.contributions}</span></h5></div>`;
            });
            contributors.innerHTML = contributorContent;
          });
        }
        appendChildToDOMElement(contributors, contributorsDiv);
      });
    });
  }

  addOptionToSelectEl();
}
window.addEventListener('load', main);
