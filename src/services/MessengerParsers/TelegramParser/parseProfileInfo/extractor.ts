import { IProfileInfo } from 'services/MessengerParsers';
import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';
import {
  getProfileItemIconInfoElementFrom,
  getProfileItemIconMentionElementFrom,
  getProfileItemIconPhoneElementFrom,
  getProfileItemTitleElementFrom,
  getProfileListItemElementsFrom,
  getProfileMultilineItemElementFrom,
} from '../getters';

const getProfileTagIconByKeyFromElement = (el: HTMLElement, key: keyof IProfileInfo) => {
  switch (key) {
    case 'username': {
      return getProfileItemIconMentionElementFrom(el);
    }
    case 'phone': {
      return getProfileItemIconPhoneElementFrom(el);
    }
    case 'additional': {
      return getProfileItemIconInfoElementFrom(el);
    }
    default: {
      const _: never = key;
      return null;
    }
  }
};

const extractProfileInfoMemberFrom = (
  el: HTMLElement,
  key: keyof IProfileInfo
): IProfileInfo[keyof IProfileInfo] => {
  const profileMultilineItemElement = getProfileMultilineItemElementFrom(el);
  const profileItemTitleElement = getProfileItemTitleElementFrom(el);

  const title = profileItemTitleElement ? profileItemTitleElement.innerText : '';

  const profileTagIconElement = getProfileTagIconByKeyFromElement(el, key);

  return profileTagIconElement && profileMultilineItemElement ? title : null;
};

const collectProfileInfoFrom = (profileInfo: IProfileInfo, el: HTMLElement): IProfileInfo => {
  const extractedProfileMembers = [
    ['username', extractProfileInfoMemberFrom(el, 'username')],
    ['phone', extractProfileInfoMemberFrom(el, 'phone')],
    ['additional', extractProfileInfoMemberFrom(el, 'additional')],
  ] as const;

  return {
    ...profileInfo,
    ...extractedProfileMembers.reduce((xs, [key, val]) => (val ? { [key]: val } : xs), {}),
  };
};

export default (el: HTMLElement) =>
  pipe(
    el,
    getProfileListItemElementsFrom,
    A.reduce(
      {
        username: null,
        phone: null,
        additional: null,
      },
      collectProfileInfoFrom
    )
  );
