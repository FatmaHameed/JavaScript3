// Refactoring Fetch Data function to Async/Await
import { contentWrapper } from '../globalVariables.js';

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    contentWrapper.innerHTML = `<div id ="error">Network Request Failed</div>`;
  }
}
export const errorMessage = `<div id ="error">Network Request Failed</div>`;
