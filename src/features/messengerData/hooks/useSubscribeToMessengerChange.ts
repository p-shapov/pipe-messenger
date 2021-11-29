import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createEventEmitter, emitterExistenceCheck } from 'services/EventEmitters';
import { flow } from 'fp-ts/function';
import { Dispatch } from 'redux';
import {
  resetChatList,
  updateChatInfo,
  updateChatList,
  updateProfileInfo,
  updateUiStateInfo,
} from '../redux';

const getSubscribeMap = (dispatch: Dispatch<any>) =>
  [
    [
      'chatOpen',
      () => {
        dispatch(resetChatList());
        dispatch(updateChatInfo(100));
      },
    ],
    [
      'profileInfoOpen',
      () => {
        dispatch(updateUiStateInfo(500));
        dispatch(updateProfileInfo(500));
      },
    ],
    [
      'profileInfoClose',
      () => {
        dispatch(updateUiStateInfo(500));
        dispatch(updateProfileInfo(500));
      },
    ],
    [
      'selectionModeStart',
      () => {
        dispatch(updateChatList(250));
        dispatch(updateUiStateInfo(250));
      },
    ],
    [
      'selectionModeEnd',
      () => {
        dispatch(resetChatList());
        dispatch(updateUiStateInfo(250));
      },
    ],
    [
      'messageSelect',
      () => {
        dispatch(updateChatList(100));
      },
    ],
  ] as const;

export const useSubscribeToMessengerChange = (handleError: (err: Error) => void) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribeMap = getSubscribeMap(dispatch);

    try {
      const emitter = flow(createEventEmitter, emitterExistenceCheck)();

      subscribeMap.forEach(([event, callback]) => emitter.subscribe(event, callback));
    } catch (err) {
      if (err instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    }
  }, [dispatch, handleError]);
};
