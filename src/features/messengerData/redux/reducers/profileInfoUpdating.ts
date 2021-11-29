import { Draft } from '@reduxjs/toolkit';
import { updateProfileInfo, IChatState } from 'features/messengerData';

const profileInfoUpdatingAsync = {
  [updateProfileInfo.pending.type]({ profileInfo }: Draft<IChatState>) {
    profileInfo.status = 'loading';
  },
  [updateProfileInfo.fulfilled.type](
    { profileInfo }: Draft<IChatState>,
    { payload }: ReturnType<typeof updateProfileInfo.fulfilled>
  ) {
    profileInfo.status = 'succeeded';
    profileInfo.phone = payload.phone;
    profileInfo.username = payload.username;
    profileInfo.additional = payload.additional;
  },
  [updateProfileInfo.rejected.type](
    { profileInfo }: Draft<IChatState>,
    { error }: ReturnType<typeof updateProfileInfo.rejected>
  ) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    profileInfo.status = 'failed';
  },
};

export { profileInfoUpdatingAsync };
