import {
  createTextToDOMElement,
  appendChildToDOMElement,
} from './appendChildAndAddText.js';

export function addRepoElements() {
  // create the DOM elements
  const contentWrapper = document.createElement('section');
  contentWrapper.setAttribute('id', 'content');
  const content = document.createElement('section');
  content.setAttribute('id', 'content1');
  const repositoryHeading = document.createElement('h5');
  const repositoryName = document.createElement('a');
  const repositoryDescription = document.createElement('h5');
  const repositoryForks = document.createElement('h5');
  const repositoryUpdated = document.createElement('h5');
  const repositoryHeadingSpan = document.createElement('span');
  const repositoryDescriptionSpan = document.createElement('span');
  const repositoryForksSpan = document.createElement('span');
  const repositoryUpdatedSpan = document.createElement('span');

  // add the text
  createTextToDOMElement('Repository: ', repositoryHeading);
  createTextToDOMElement('Description: ', repositoryDescription);
  createTextToDOMElement('Forks: ', repositoryForks);
  createTextToDOMElement('Updated: ', repositoryUpdated);

  // append the elements to the DOM
  appendChildToDOMElement(contentWrapper, container);
  appendChildToDOMElement(content, contentWrapper);

  appendChildToDOMElement(repositoryHeading, content);
  appendChildToDOMElement(repositoryName, repositoryHeading);
  appendChildToDOMElement(repositoryHeadingSpan, repositoryName);
  appendChildToDOMElement(repositoryDescription, content);
  appendChildToDOMElement(repositoryDescriptionSpan, repositoryDescription);
  appendChildToDOMElement(repositoryForks, content);
  appendChildToDOMElement(repositoryForksSpan, repositoryForks);
  appendChildToDOMElement(repositoryUpdated, content);
  appendChildToDOMElement(repositoryUpdatedSpan, repositoryUpdated);
}
