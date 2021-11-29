import { targetMatchesMessageListItemElement } from './matchers';

const delegateEndSelectionButtonClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesMessageListItemElement(event.target)) {
    callback();
  }
};

const setSelectionModeEndListener = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateEndSelectionButtonClick(callback));
};

export { setSelectionModeEndListener };
