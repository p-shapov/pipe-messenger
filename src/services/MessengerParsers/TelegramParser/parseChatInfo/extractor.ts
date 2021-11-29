import { IChatInfo } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import { pipe } from 'fp-ts/function';
import {
  getChatGroupStatusElementFrom,
  getChatInfoElementFrom,
  getChatTitleElementFrom,
} from '../getters';

const extractChatInfoFrom = (el: HTMLElement) => ({
  title: el.innerText,
  isDialog: !getChatGroupStatusElementFrom(el),
});

export default (el: HTMLElement): IChatInfo =>
  pipe(
    el,
    getChatInfoElementFrom,
    misc.nonNullable('chatInfoElement'),
    getChatTitleElementFrom,
    misc.nonNullable('chatTitleElement'),
    extractChatInfoFrom
  );
