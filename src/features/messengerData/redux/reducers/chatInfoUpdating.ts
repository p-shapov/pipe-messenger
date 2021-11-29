import { Draft } from '@reduxjs/toolkit';
import { updateChatInfo, IChatState } from 'features/messengerData';

const chatInfoUpdatingAsync = {
  [updateChatInfo.pending.type]({ chatInfo }: Draft<IChatState>) {
    chatInfo.status = 'loading';
  },
  [updateChatInfo.fulfilled.type](
    { chatInfo }: Draft<IChatState>,
    { payload }: ReturnType<typeof updateChatInfo.fulfilled>
  ) {
    chatInfo.status = 'succeeded';
    chatInfo.title = payload.title;
    chatInfo.isDialog = payload.isDialog;
  },
  [updateChatInfo.rejected.type](
    { chatInfo }: Draft<IChatState>,
    { error }: ReturnType<typeof updateChatInfo.rejected>
  ) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    chatInfo.status = 'failed';
  },
};

export { chatInfoUpdatingAsync };
