export function appendChildToDOMElement(child, element) {
  return element.appendChild(child);
}

export function createTextToDOMElement(text, element) {
  return (element.textContent = text);
}
