import { utils } from 'services/EventEmitters';
import { CHAT_INFO_CLASS } from '../constants';

export const targetMatchesChatInfoElement = utils.targetMatchesSelectors([
  `.${CHAT_INFO_CLASS}`,
  `.${CHAT_INFO_CLASS} *`,
]);
