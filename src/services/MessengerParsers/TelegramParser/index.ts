import { IChatInfo, IMessage, IProfileInfo, IUiState } from 'services/MessengerParsers';
import { parseChatList } from './parseChatList/parser';
import { parseChatInfo } from './parseChatInfo/parser';
import { parseProfileInfo } from './parseProfileInfo/parser';
import { parseUiStateInfo } from './parseUiStateFrom/parser';

export const getMessages = (): IMessage[] => parseChatList();

export const getChatInfo = (): IChatInfo => parseChatInfo();

export const getProfileInfo = (): IProfileInfo => parseProfileInfo();

export const getUiState = (): IUiState => parseUiStateInfo();
