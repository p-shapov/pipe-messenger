import { utils } from 'services/EventEmitters';
import { CLOSE_BUTTON_CLASS, RIGHT_HEADER_CLASS } from '../constants';

export const targetMatchesProfileInfoCloseElement = utils.targetMatchesSelectors([
  `.${RIGHT_HEADER_CLASS} .${CLOSE_BUTTON_CLASS}`,
  `.${RIGHT_HEADER_CLASS} .${CLOSE_BUTTON_CLASS} *`,
]);
