import { IUiState } from 'services/MessengerParsers';
import * as misc from 'shared/helpers/misc';
import { pipe } from 'fp-ts/function';
import { getRootElement } from '../getters';
import extractFrom from './extractor';

export const parseUiStateInfo = (): IUiState =>
  pipe(getRootElement(), misc.nonNullable('rootElement'), extractFrom);
