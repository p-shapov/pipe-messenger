import React from 'react';
import { Provider } from 'react-redux';
import {
  ChatList,
  UpdateButton,
  ChatInfo,
  ProfileInfo,
  UiStateInfo,
  useInitMessengerData,
  useSubscribeToMessengerChange,
} from 'features/messengerData';
import store from './store';
import { appStyles } from './App.styles';

const App = () => {
  const styles = appStyles();

  // TODO: Temporary solution. In future move init and subscription logic to corresponding module

  const handleEmitterError = (err: Error) => console.log(err.message);

  useInitMessengerData();
  useSubscribeToMessengerChange(handleEmitterError);

  return (
    <div className={styles.app}>
      <UpdateButton />
      <UiStateInfo />
      <ChatInfo />
      <ProfileInfo />
      <ChatList />
    </div>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
