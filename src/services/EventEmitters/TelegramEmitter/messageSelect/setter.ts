import { targetMatchesMessageListItemElement } from './matchers';

const delegateMessageClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesMessageListItemElement(event.target)) {
    callback();
  }
};

const setMessageSelectListenerTo = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateMessageClick(callback));
};

export { setMessageSelectListenerTo };
