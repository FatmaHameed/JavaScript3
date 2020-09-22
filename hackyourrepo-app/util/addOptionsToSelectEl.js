// import { fetchData } from './fetchData.js';
// import { appendChildToDOMElement } from './appendChildAndAddText.js';
// import { sortData } from './sortData.js';
// import { addRepoInfo } from './addRepoInfo.js';

// export function addOptionToSelectEl(
//   selectEl,
//   contributors,
//   contributorsDiv,
//   contentWrapper,
// ) {
//   const firstURL =
//     'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
//   fetchData(firstURL).then(data => {
//     selectEl = document.createElement('select');
//     contributors = document.createElement('section');
//     let options;

//     data = sortData(data);
//     // console.log(data);
//     data.forEach(repo => {
//       options = document.createElement('option');
//       options.value = repo.name;
//       options.textContent = repo.name;
//       selectEl.appendChild(options);
//       if (repo.name === selectEl.value) {
//         addRepoInfo(repo);
//         fetchData(repo.contributors_url).then(data => {
//           let contributorContent = '';
//           data.forEach(contributor => {
//             if (repo.name === selectEl.value) {
//               contributorContent += `<div class="contributor-content">
//                         <h5><img src='${contributor.avatar_url}' alt ="${contributor.login}" class ="avatar-img"><a href='${contributor.html_url}' target= "_blank"><span>${contributor.login} </span></a><span>${contributor.contributions}</span></h5></div>`;
//             }
//           });
//           contributors.innerHTML = contributorContent;
//         });

//         appendChildToDOMElement(contributors, contributorsDiv);
//         appendChildToDOMElement(contributorsDiv, contentWrapper);
//       }
//     });
//   });
// }
// export function contributorsContent() {
//   return `<div class="contributor-content">
//                           <h5><img src='${contributor.avatar_url}' alt ="${contributor.login}" class ="avatar-img"><a href='${contributor.html_url}' target= "_blank"><span>${contributor.login} </span></a><span>${contributor.contributions}</span></h5></div>`;
// }
