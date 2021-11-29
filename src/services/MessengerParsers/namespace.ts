interface IMessage {
  id: string;
  text: string;
  title: string | null;
  isSelected: boolean;
  isOwn: boolean;
}

interface IChatInfo {
  title: string;
  isDialog: boolean;
}

interface IProfileInfo {
  username: string | null;
  phone: string | null;
  additional: string | null;
}

interface IUiState {
  chatIsOpen: boolean;
  profileInfoIsOpen: boolean;
  selectModeActive: boolean;
}

interface IMessengerParser {
  getMessages(): IMessage[];
  getChatInfo(): IChatInfo;
  getProfileInfo(): IProfileInfo;
  getUiState(): IUiState;
}

export type { IMessage, IChatInfo, IProfileInfo, IUiState, IMessengerParser };
