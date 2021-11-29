import { utils } from 'services/EventEmitters';
import { BUTTON_CLASS, MESSAGE_SELECT_TOOLBAR } from '../constants';

export const targetMatchesMessageListItemElement = utils.targetMatchesSelectors([
  `.${MESSAGE_SELECT_TOOLBAR} .${BUTTON_CLASS}`,
  `.${MESSAGE_SELECT_TOOLBAR} .${BUTTON_CLASS} *`,
]);
