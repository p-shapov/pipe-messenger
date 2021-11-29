import { targetMatchesIconSelection, targetMatchesMenuItemSelectionElement } from './matchers';

const delegateMenuItemSelectClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesMenuItemSelectionElement(event.target)) {
    if (targetMatchesIconSelection(event.target.parentElement)) {
      callback();
    }
  }
};

const setSelectionModeStartListener = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateMenuItemSelectClick(callback));
};

export { setSelectionModeStartListener };
