import { chatListUpdating, chatListUpdatingAsync } from './chatListUpdating';
import { chatInfoUpdatingAsync } from './chatInfoUpdating';
import { profileInfoUpdatingAsync } from './profileInfoUpdating';
import { uiStateInfoUpdatingAsync } from './uiStateInfoUpdating';

const reducers = { ...chatListUpdating };

const extraReducers = {
  ...chatListUpdatingAsync,
  ...chatInfoUpdatingAsync,
  ...profileInfoUpdatingAsync,
  ...uiStateInfoUpdatingAsync,
};

export { reducers, extraReducers };
