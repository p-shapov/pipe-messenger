import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from 'features/messengerData';

export default configureStore({
  reducer: {
    chat: chatReducer,
  },
});
