interface IMessage {
  id: string;
  text: string;
  title: string | null;
  isSelected: boolean;
  isOwn: boolean;
}

interface IChatInfo {
  status: TStatus;
  title: string;
  isDialog: boolean;
}

interface IChatList {
  status: TStatus;
  messages: IMessage[];
}

interface IProfileInfo {
  status: TStatus;
  username: string | null;
  phone: string | null;
  additional: string | null;
}

interface IUiStateInfo {
  status: TStatus;
  chatIsOpen: boolean;
  profileInfoIsOpen: boolean;
  selectionModeActive: boolean;
}

type TStatus = 'loading' | 'succeeded' | 'failed';

interface IChatState {
  chatInfo: IChatInfo;
  chatList: IChatList;
  profileInfo: IProfileInfo;
  uiStateInfo: IUiStateInfo;
}

export type { IMessage, IChatList, IChatInfo, IProfileInfo, IUiStateInfo, TStatus, IChatState };
