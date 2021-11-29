import * as misc from 'shared/helpers/misc';
import * as utils from './utils';
import * as telegramParser from './TelegramParser';
import { IMessengerParser } from './namespace';

type REACT_APP_EXTENSION_PARSER_TYPE = 'telegram:z' | 'telegram:k' | 'telegram:legacy';

const type = process.env.REACT_APP_EXTENSION_PARSER_TYPE as REACT_APP_EXTENSION_PARSER_TYPE;

// TODO:: Make parsers for k and legacy versions

const createMessengerParser = (): IMessengerParser | null => {
  switch (type) {
    case 'telegram:z': {
      return telegramParser;
    }
    case 'telegram:k': {
      return telegramParser;
    }
    case 'telegram:legacy': {
      return telegramParser;
    }
    default: {
      const _: never = type;
      return null;
    }
  }
};

const parserExistenceCheck = misc.nonNullable('messengerParser');

const getChatListFrom = (messengerParser: IMessengerParser, delay: number) =>
  utils.withDelay(delay)(messengerParser.getMessages);

const getChatInfoFromParser = (messengerParser: IMessengerParser, delay: number) =>
  utils.withDelay(delay)(messengerParser.getChatInfo);

const getProfileInfoFromParser = (messengerParser: IMessengerParser, delay: number) =>
  utils.withDelay(delay)(messengerParser.getProfileInfo);

const getUiStateFromParser = (messengerParser: IMessengerParser, delay: number) =>
  utils.withDelay(delay)(messengerParser.getUiState);

export {
  createMessengerParser,
  parserExistenceCheck,
  getChatListFrom,
  getChatInfoFromParser,
  getUiStateFromParser,
  getProfileInfoFromParser,
};
export type { IMessengerParser, IProfileInfo, IChatInfo, IUiState, IMessage } from './namespace';
