import { addHeader } from './addHeaderContent.js';
import { fetchData } from './fetchData.js';
import { sortData } from './sortData.js';

let options;
// export function addOptionsToSelect() {
//   const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
//   fetchData(url).then(data => {
//     data = sortData(data);
//     data.forEach(repo => {
//       options = document.createElement('option');
//       options.textContent = repo.name;
//       options.value = repo.name;
//       //  `<option value = "${repo.name}">${repo.name}</option>`;
//       console.log(options);
//       selectEl.appendChild(options);
//       return options;
//     });
//   });
// }
