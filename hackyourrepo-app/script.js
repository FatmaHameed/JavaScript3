'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
const repositories = document.getElementById('repositories');
const content1 = document.getElementById('content1');
console.log(content1);
repositories.addEventListener('change', createOptions);

let options;
// console.log(repositories.value);
for (let i = 0; i < placeholderRepos.length; i++) {
  options = document.createElement('option');
  options.innerText = placeholderRepos[i].name;
  repositories.appendChild(options);
  if (placeholderRepos[i].name === repositories.value) {
    // console.log(placeholderRepos[i].name);
    content1.innerHTML = `<h5>Repository: <a href='#'><span>${placeholderRepos[i].name}</span></a></h5>
    <h5>Description: <span>${placeholderRepos[i].description}</span></h5>
    <h5>Forks: <span>${placeholderRepos[i].forks}</span></h5>
    <h5>Updated: <span>${placeholderRepos[i].updated}</span></h5>`;
  }
}

function createOptions() {
  for (let i = 0; i < placeholderRepos.length; i++) {
    if (placeholderRepos[i].name === repositories.value) {
      // console.log(placeholderRepos[i]);
      content1.innerHTML = `<h5>Repository: <a href ='#'><span>${placeholderRepos[i].name}</span></a></h5>
    <h5>Description: <span>${placeholderRepos[i].description}</span></h5>
    <h5>Forks: <span>${placeholderRepos[i].forks}</span></h5>
    <h5>Updated: <span>${placeholderRepos[i].updated}</span></h5>`;
    }
  }
}
