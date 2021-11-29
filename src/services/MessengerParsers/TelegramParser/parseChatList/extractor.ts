import { IMessage } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import * as A from 'fp-ts/Array';
import { flow, pipe } from 'fp-ts/function';
import { MESSAGE_IS_OWN_MOD_CLASS, MESSAGE_IS_SELECTED_MOD_CLASS } from '../constants';
import {
  getMessageGroupElementsFrom,
  getMessageItemElementsFrom,
  getMessageMetaElementFrom,
  getMessageSvgAppendixElement,
  getMessageTextContentElementFrom,
  getMessageTitleElementFrom,
} from '../getters';

const withTitleSplit =
  (
    memoTitle: string | null,
    onMessageSplit: (titleToMemo: string) => void,
    extractFrom: (el: HTMLElement) => IMessage
  ) =>
  (el: HTMLElement) => {
    const splitted = !getMessageSvgAppendixElement(el);
    const message = extractFrom(el);

    if (message.title && splitted) {
      onMessageSplit(message.title);
    }

    return { ...message, title: message.title || memoTitle };
  };

const extractMessageFrom = (el: HTMLElement): IMessage => {
  const messageTextContentElement = getMessageTextContentElementFrom(el);
  const messageTitleElement = getMessageTitleElementFrom(el);

  const id = misc.nonNullable('messageId')(el.dataset.messageId);
  const isOwn = el.classList.contains(MESSAGE_IS_OWN_MOD_CLASS);
  const isSelected = el.classList.contains(MESSAGE_IS_SELECTED_MOD_CLASS);
  const title = messageTitleElement ? messageTitleElement.innerText : null;

  if (messageTextContentElement) {
    const messageMetaElement = getMessageMetaElementFrom(el);
    const meta = messageMetaElement ? messageMetaElement.innerText : '';
    const text = messageTextContentElement.innerText.replace(meta, '');

    return { id, text, title, isOwn, isSelected };
  }

  return { text: '', id, title, isOwn, isSelected };
};

const extractMessagesFrom = (el: HTMLElement): IMessage[] => {
  let memoTitle: null | string = null;

  const memoizeTitle = (title: string | null) => {
    memoTitle = title;
  };

  return pipe(
    el,
    getMessageItemElementsFrom,
    A.map(flow(withTitleSplit(memoTitle, memoizeTitle, extractMessageFrom)))
  );
};

export default (el: HTMLElement): IMessage[] =>
  pipe(
    getMessageGroupElementsFrom(el),
    A.map(extractMessagesFrom),
    A.flatten,
    A.filter(({ text }) => text.length > 0)
  );
