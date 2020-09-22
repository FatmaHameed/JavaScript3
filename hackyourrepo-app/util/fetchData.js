import { displayError } from './displayError.js';

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    displayError();
  }
}
