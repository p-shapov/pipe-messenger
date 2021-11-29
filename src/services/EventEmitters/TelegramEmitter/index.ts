import { misc } from 'shared/helpers';
import { TEvents } from 'services/EventEmitters';
import { flow } from 'fp-ts/function';
import { setChatOpenListenerTo } from './chatOpen/setter';
import { setProfileInfoOpenListener } from './profileInfoOpen/setter';
import { setProfileInfoCloseListenerTo } from './profileInfoClose/setter';
import { setSelectionModeEndListener } from './selectionModeEnd/setter';
import { ROOT_ID } from './constants';
import { setMessageSelectListenerTo } from './messageSelect/setter';
import { setSelectionModeStartListener } from './selectionModeStart/setter';

const getRootElement = () => document.querySelector<HTMLElement>(`#${ROOT_ID}`);

const setListener = (type: TEvents, callback: () => void) => (el: HTMLElement) => {
  switch (type) {
    case 'chatOpen': {
      setChatOpenListenerTo(el, callback);
      break;
    }
    case 'profileInfoOpen': {
      setProfileInfoOpenListener(el, callback);
      break;
    }
    case 'profileInfoClose': {
      setProfileInfoCloseListenerTo(el, callback);
      break;
    }
    case 'selectionModeStart': {
      setSelectionModeStartListener(el, callback);
      break;
    }
    case 'selectionModeEnd': {
      setSelectionModeEndListener(el, callback);
      break;
    }
    case 'messageSelect': {
      setMessageSelectListenerTo(el, callback);
      break;
    }
    default: {
      break;
    }
  }
};

export const subscribe = (type: TEvents, callback: () => void) =>
  flow(getRootElement, misc.nonNullable('rootElement'), setListener(type, callback))();
