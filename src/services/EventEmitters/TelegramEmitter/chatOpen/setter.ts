import { targetMatchesChatItemElement } from './matchers';

const delegateChatListItemClick = (callback: () => void) => (event: MouseEvent) => {
  if (targetMatchesChatItemElement(event.target)) {
    callback();
  }
};

const setChatOpenListenerTo = (el: HTMLElement, callback: () => void) => {
  el.addEventListener('click', delegateChatListItemClick(callback));
};

export { setChatOpenListenerTo };
