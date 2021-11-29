import { getAllElementsFromBySelector, getElementFromBySelector } from 'shared/helpers/dom';
import {
  CHAT_GROUP_STATUS_CLASS,
  CHAT_INFO_CLASS,
  CHAT_TITLE_CLASS,
  MESSAGE_GROUP_CLASS,
  MESSAGE_ITEM_CLASS,
  MESSAGE_LAYOUT_CLASS,
  MESSAGE_LIST_CLASS,
  MESSAGE_META_CLASS,
  MESSAGE_SVG_APPENDIX_CLASS,
  MESSAGE_TEXT_CONTENT_CLASS,
  MESSAGE_TITLE_CLASS,
  PROFILE_INFO_CLASS,
  PROFILE_ITEM_ICON_INFO_CLASS,
  PROFILE_ITEM_ICON_MENTION_CLASS,
  PROFILE_ITEM_ICON_PHONE_CLASS,
  PROFILE_ITEM_TITLE_CLASS,
  PROFILE_LIST_ITEM_CLASS,
  PROFILE_MULTILINE_ITEM_CLASS,
  ROOT_ID,
  UI_MIDDLE_COLUMN_ID,
  UI_RIGHT_COLUMN_ID,
  UI_TRANSITION_CLASS,
} from './constants';

/* root getter */

export const getRootElement = () => document.querySelector<HTMLElement>(`#${ROOT_ID}`);

/* messages element-getters */

export const getMessageListElementFrom = getElementFromBySelector(`.${MESSAGE_LIST_CLASS}`);

export const getMessageLayoutElementFrom = getElementFromBySelector(`.${MESSAGE_LAYOUT_CLASS}`);

export const getMessageGroupElementsFrom = getAllElementsFromBySelector(`.${MESSAGE_GROUP_CLASS}`);

export const getMessageItemElementsFrom = getAllElementsFromBySelector(`.${MESSAGE_ITEM_CLASS}`);

export const getMessageTextContentElementFrom = getElementFromBySelector(
  `.${MESSAGE_TEXT_CONTENT_CLASS}`
);

export const getMessageTitleElementFrom = getElementFromBySelector(`.${MESSAGE_TITLE_CLASS}`);

export const getMessageMetaElementFrom = getElementFromBySelector(`.${MESSAGE_META_CLASS}`);

/* chat-info element-getters */

export const getChatInfoElementFrom = getElementFromBySelector(`.${CHAT_INFO_CLASS}`);

export const getChatTitleElementFrom = getElementFromBySelector(`.${CHAT_TITLE_CLASS}`);

export const getChatGroupStatusElementFrom = getElementFromBySelector(
  `.${CHAT_GROUP_STATUS_CLASS}`
);

export const getMessageSvgAppendixElement = getElementFromBySelector(
  `.${MESSAGE_SVG_APPENDIX_CLASS}`
);

/* profile-info element-getters */

export const getProfileInfoElementFrom = getElementFromBySelector(`.${PROFILE_INFO_CLASS}`);

export const getProfileListItemElementsFrom = getAllElementsFromBySelector(
  `.${PROFILE_LIST_ITEM_CLASS}`
);

export const getProfileMultilineItemElementFrom = getElementFromBySelector(
  `.${PROFILE_MULTILINE_ITEM_CLASS}`
);

export const getProfileItemTitleElementFrom = getElementFromBySelector(
  `.${PROFILE_ITEM_TITLE_CLASS}`
);

export const getProfileItemIconPhoneElementFrom = getElementFromBySelector(
  `.${PROFILE_ITEM_ICON_PHONE_CLASS}`
);

export const getProfileItemIconInfoElementFrom = getElementFromBySelector(
  `.${PROFILE_ITEM_ICON_INFO_CLASS}`
);

export const getProfileItemIconMentionElementFrom = getElementFromBySelector(
  `.${PROFILE_ITEM_ICON_MENTION_CLASS}`
);

/* ui element-getters */

export const getUiMiddleColumnElementFrom = getElementFromBySelector(`#${UI_MIDDLE_COLUMN_ID}`);

export const getUiRightColumnElementFrom = getElementFromBySelector(`#${UI_RIGHT_COLUMN_ID}`);

export const getUiTransitionElementFrom = getElementFromBySelector(
  `:scope > .${UI_TRANSITION_CLASS}`
);
