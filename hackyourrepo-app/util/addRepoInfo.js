import { fetchData } from './fetchData.js';

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
  // console.log(repoDescription);
  content.innerHTML = `<h5>Repository: <a href='${repo.html_url}'><span>${repo.name}</span></a></h5>
  <h5>Description: <span>${repoDescription}</span></h5>
  <h5>Forks: <span>${repo.forks_count}</span></h5>
  <h5>Updated: <span>${repo.updated_at}</span></h5>`;
}
