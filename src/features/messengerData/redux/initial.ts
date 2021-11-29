import { IChatState } from './namespace';

const initialState: IChatState = {
  chatInfo: {
    status: 'loading',
    title: 'Chat-info title',
    isDialog: false,
  },
  chatList: {
    status: 'loading',
    messages: [
      {
        id: '1',
        text: 'Message text',
        title: 'Message title',
        isSelected: false,
        isOwn: false,
      },
    ],
  },
  profileInfo: {
    status: 'loading',
    phone: null,
    username: null,
    additional: null,
  },
  uiStateInfo: {
    status: 'loading',
    chatIsOpen: false,
    profileInfoIsOpen: false,
    selectionModeActive: false,
  },
};

export { initialState };
