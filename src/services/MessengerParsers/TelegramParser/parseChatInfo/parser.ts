import { IChatInfo } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import { pipe } from 'fp-ts/function';
import { getMessageLayoutElementFrom, getRootElement } from '../getters';
import extractFrom from './extractor';

export const parseChatInfo = (): IChatInfo =>
  pipe(
    getRootElement(),
    misc.nonNullable('rootElement'),
    getMessageLayoutElementFrom,
    misc.nonNullable('messageLayoutElement'),
    extractFrom
  );
