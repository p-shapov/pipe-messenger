import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMessengerParser,
  getChatInfoFromParser,
  parserExistenceCheck,
} from 'services/MessengerParsers';

const messengerParser = createMessengerParser();

const payloadCreator = (delay: number = 250) =>
  getChatInfoFromParser(parserExistenceCheck(messengerParser), delay);

const updateChatInfo = createAsyncThunk('chat/updateChatInfo', payloadCreator);

export { updateChatInfo };
