export const getElementFromBySelector = (s: string) => (el: Element) =>
  el.querySelector<HTMLElement>(s);

export const getAllElementsFromBySelector = (s: string) => (el: Element) => {
  const elements = el.querySelectorAll<HTMLElement>(s);

  return [...elements];
};

export const containsClass = (s: string) => (el: HTMLElement) => el.classList.contains(s);

export const elementMatchesSelectors = (selectors: string[]) => (el: HTMLElement) =>
  selectors.reduce((matches, selector) => (el.matches(selector) ? true : matches), false);
