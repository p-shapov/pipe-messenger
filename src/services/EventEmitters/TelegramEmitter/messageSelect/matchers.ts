import { utils } from 'services/EventEmitters';
import { MESSAGE_LIST_ITEM_CLASS } from '../constants';

export const targetMatchesMessageListItemElement = utils.targetMatchesSelectors([
  `.${MESSAGE_LIST_ITEM_CLASS}`,
  `.${MESSAGE_LIST_ITEM_CLASS} *`,
]);
