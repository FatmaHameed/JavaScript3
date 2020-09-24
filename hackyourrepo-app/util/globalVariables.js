const container = document.createElement('div');
const header = document.createElement('section');
const heading = document.createElement('h1');
const selectEl = document.createElement('select');
const contentWrapper = document.createElement('section');
const buttonWrapper = document.createElement('div');
const buttonWrapper2 = document.createElement('div');
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
const contributorsText = document.createElement('section');

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

export {
  container,
  header,
  heading,
  selectEl,
  contentWrapper,
  content,
  contributors,
  repositoryHeading,
  repositoryDescription,
  repositoryForks,
  repositoryUpdated,
  repositoryHeadingSpan,
  repositoryDescriptionSpan,
  repositoryForksSpan,
  repositoryUpdatedSpan,
  contributorsDiv,
  contributorsText,
  buttonWrapper,
  buttonWrapper2,
  url,
};
