export const targetIsHtmlElement = (target: EventTarget | null): target is HTMLElement =>
  target instanceof HTMLElement;
