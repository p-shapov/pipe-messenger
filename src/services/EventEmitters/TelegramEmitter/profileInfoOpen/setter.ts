import { targetMatchesChatInfoElement } from './matchers';

const delegateChatInfoClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesChatInfoElement(event.target)) {
    callback();
  }
};
const setProfileInfoOpenListener = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateChatInfoClick(callback));
};

export { setProfileInfoOpenListener };
