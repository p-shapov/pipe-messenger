import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMessengerParser,
  getUiStateFromParser,
  parserExistenceCheck,
} from 'services/MessengerParsers';

const messengerParser = createMessengerParser();

const payloadCreator = (delay: number = 250) =>
  getUiStateFromParser(parserExistenceCheck(messengerParser), delay);

const updateUiStateInfo = createAsyncThunk('chat/updateUiState', payloadCreator);

export { updateUiStateInfo };
