import { targetMatchesProfileInfoCloseElement } from './matchers';

const delegateRightHeaderCloseButtonClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesProfileInfoCloseElement(event.target)) {
    callback();
  }
};

const setProfileInfoCloseListenerTo = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateRightHeaderCloseButtonClick(callback));
};

export { setProfileInfoCloseListenerTo };
