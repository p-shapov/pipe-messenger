import { utils } from 'services/EventEmitters';
import { ICON_SELECT_CLASS, MENU_ITEM_CLASS, MESSAGE_LIST_ITEM_CLASS } from '../constants';

export const targetMatchesMenuItemSelectionElement = utils.targetMatchesSelectors([
  `.${MESSAGE_LIST_ITEM_CLASS} .${MENU_ITEM_CLASS}`,
  `.${MESSAGE_LIST_ITEM_CLASS} .${MENU_ITEM_CLASS} *`,
]);

export const targetMatchesIconSelection = utils.targetMatchesSelectors([`${ICON_SELECT_CLASS}`]);
