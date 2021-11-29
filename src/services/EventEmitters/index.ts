import { misc } from 'shared/helpers';
import * as utils from './utils';
import * as telegramEmitter from './TelegramEmitter';
import { IEventEmitter } from './namespace';

type REACT_APP_EXTENSION_PARSER_TYPE = 'telegram:z' | 'telegram:k' | 'telegram:legacy';

const parserType = process.env.REACT_APP_EXTENSION_PARSER_TYPE as REACT_APP_EXTENSION_PARSER_TYPE;

// TODO: make emitters for k and legacy versions

const createEventEmitter = (): IEventEmitter | null => {
  switch (parserType) {
    case 'telegram:z': {
      return telegramEmitter;
    }
    case 'telegram:k': {
      return telegramEmitter;
    }
    case 'telegram:legacy': {
      return telegramEmitter;
    }
    default: {
      const _: never = parserType;
      return null;
    }
  }
};

const emitterExistenceCheck = misc.nonNullable('emitter');

export { utils, emitterExistenceCheck, createEventEmitter };
export type { TEvents, IEventEmitter } from './namespace';
