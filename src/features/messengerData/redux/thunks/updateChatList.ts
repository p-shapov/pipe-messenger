import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMessengerParser,
  getChatListFrom,
  parserExistenceCheck,
} from 'services/MessengerParsers';

const messengerParser = createMessengerParser();

const payloadCreator = (delay: number = 250) =>
  getChatListFrom(parserExistenceCheck(messengerParser), delay);

const updateChatList = createAsyncThunk('chat/updateChatList', payloadCreator);

export { updateChatList };
