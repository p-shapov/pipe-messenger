import { IProfileInfo } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import { pipe } from 'fp-ts/function';
import { getProfileInfoElementFrom, getRootElement } from '../getters';
import extractFrom from './extractor';

export const parseProfileInfo = (): IProfileInfo =>
  pipe(
    getRootElement(),
    misc.nonNullable('rootElement'),
    getProfileInfoElementFrom,
    misc.nonNullable('profileInfoElement'),
    extractFrom
  );
