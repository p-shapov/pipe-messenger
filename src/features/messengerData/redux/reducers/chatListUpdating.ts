import { Draft } from '@reduxjs/toolkit';
import { updateChatList, IChatState } from 'features/messengerData';
import { utils } from '../index';

const chatListUpdating = {
  resetChatList({ chatList }: Draft<IChatState>) {
    chatList.messages = [];
  },
};

const chatListUpdatingAsync = {
  [updateChatList.pending.type]({ chatList }: Draft<IChatState>) {
    chatList.status = 'loading';
  },
  [updateChatList.fulfilled.type](
    { chatList }: Draft<IChatState>,
    { payload }: ReturnType<typeof updateChatList.fulfilled>
  ) {
    chatList.status = 'succeeded';
    chatList.messages = utils
      .mergeMessages(chatList.messages, payload)
      .filter(({ isSelected }) => isSelected);
  },
  [updateChatList.rejected.type](
    { chatList }: Draft<IChatState>,
    { error }: ReturnType<typeof updateChatList.rejected>
  ) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    chatList.status = 'failed';
  },
};

export { chatListUpdating, chatListUpdatingAsync };
