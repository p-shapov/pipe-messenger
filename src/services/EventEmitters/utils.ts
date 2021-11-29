import { dom, guards } from 'shared/helpers';

export const targetMatchesSelectors =
  (selectors: string[]) =>
  (target: EventTarget | null): target is HTMLElement =>
    guards.targetIsHtmlElement(target) && dom.elementMatchesSelectors(selectors)(target);
