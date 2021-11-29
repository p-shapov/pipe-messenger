import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMessengerParser,
  getProfileInfoFromParser,
  parserExistenceCheck,
} from 'services/MessengerParsers';

const messengerParser = createMessengerParser();

const payloadCreator = (delay: number = 250) =>
  getProfileInfoFromParser(parserExistenceCheck(messengerParser), delay);

const updateProfileInfo = createAsyncThunk('chat/updateProfileInfo', payloadCreator);

export { updateProfileInfo };
