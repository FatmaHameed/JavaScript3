import { content } from './globalVariables.js';

export function addRepoInfo(repo, repoDescription) {
  let { description } = repo;
  const checkDescription = () => (repoDescription = repo.description ?? '');

  repoDescription = checkDescription();

  content.innerHTML = `<div><h5>Repository: <a href='${repo.html_url}' target="_blank"><span>${repo.name}</span></a></h5>
  <h5>Description: <span>${repoDescription}</span></h5>
  <h5>Forks: <span>${repo.forks_count}</span></h5>
  <h5>Updated: <span>${repo.updated_at}</span></h5></div>`;
}
