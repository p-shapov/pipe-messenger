import { utils } from 'services/EventEmitters';
import { CHAT_FOLDERS_CLASS, CHAT_ITEM_CLASS } from '../constants';

export const targetMatchesChatItemElement = utils.targetMatchesSelectors([
  `.${CHAT_FOLDERS_CLASS} .${CHAT_ITEM_CLASS}`,
  `.${CHAT_FOLDERS_CLASS} .${CHAT_ITEM_CLASS} *`,
]);
