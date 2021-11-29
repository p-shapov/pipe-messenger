import { Draft } from '@reduxjs/toolkit';
import { updateUiStateInfo, IChatState } from 'features/messengerData';

const uiStateInfoUpdatingAsync = {
  [updateUiStateInfo.pending.type]({ uiStateInfo }: Draft<IChatState>) {
    uiStateInfo.status = 'loading';
  },
  [updateUiStateInfo.fulfilled.type](
    { uiStateInfo }: Draft<IChatState>,
    { payload }: ReturnType<typeof updateUiStateInfo.fulfilled>
  ) {
    uiStateInfo.status = 'succeeded';
    uiStateInfo.profileInfoIsOpen = payload.profileInfoIsOpen;
    uiStateInfo.chatIsOpen = payload.chatIsOpen;
    uiStateInfo.selectionModeActive = payload.selectModeActive;
  },
  [updateUiStateInfo.rejected.type](
    { uiStateInfo }: Draft<IChatState>,
    { error }: ReturnType<typeof updateUiStateInfo.rejected>
  ) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    uiStateInfo.status = 'failed';
  },
};

export { uiStateInfoUpdatingAsync };
