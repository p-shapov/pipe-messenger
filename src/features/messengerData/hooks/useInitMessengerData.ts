import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateChatInfo, updateChatList, updateProfileInfo, updateUiStateInfo } from '../redux';

export const useInitMessengerData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateChatInfo(1000));
    dispatch(updateUiStateInfo(1000));
    dispatch(updateChatList(1000));
    dispatch(updateProfileInfo(1000));
  }, [dispatch]);
};
