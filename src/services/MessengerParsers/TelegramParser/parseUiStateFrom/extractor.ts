import { IUiState } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import { pipe } from 'fp-ts/function';
import * as dom from 'shared/helpers/dom';
import {
  getMessageLayoutElementFrom,
  getMessageListElementFrom,
  getProfileInfoElementFrom,
  getUiMiddleColumnElementFrom,
  getUiRightColumnElementFrom,
  getUiTransitionElementFrom,
} from '../getters';
import { MESSAGE_LIST_SELECTION_ACTIVE_MOD, UI_ZOOM_FADE_MOD_CLASS } from '../constants';

const extractChatIsOpenFrom = (el: HTMLElement): boolean =>
  pipe(
    el,
    getUiMiddleColumnElementFrom,
    misc.nonNullable('uiMiddleColumnElement'),
    getMessageLayoutElementFrom,
    Boolean
  );

const extractProfileInfoIsOpenFrom = (el: HTMLElement): boolean => {
  const rightColumnElement = pipe(
    el,
    getUiRightColumnElementFrom,
    misc.nonNullable('uiRightColumnElement')
  );
  const profileInfoExists = pipe(rightColumnElement, getProfileInfoElementFrom, Boolean);
  const profileInfoIsOpen = pipe(
    rightColumnElement,
    getUiTransitionElementFrom,
    misc.nonNullable('transitionElement in rightColumnElement'),
    dom.containsClass(UI_ZOOM_FADE_MOD_CLASS)
  );

  return profileInfoExists && profileInfoIsOpen;
};

const extractSelectModeActive = (el: HTMLElement) =>
  pipe(
    el,
    getMessageListElementFrom,
    misc.nonNullable('messageListElement'),
    dom.containsClass(MESSAGE_LIST_SELECTION_ACTIVE_MOD)
  );

export default (el: HTMLElement): IUiState => ({
  chatIsOpen: extractChatIsOpenFrom(el),
  profileInfoIsOpen: extractProfileInfoIsOpenFrom(el),
  selectModeActive: extractSelectModeActive(el),
});
