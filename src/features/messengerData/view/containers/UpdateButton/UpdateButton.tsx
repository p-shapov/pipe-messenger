import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import {
  updateChatList,
  updateChatInfo,
  updateProfileInfo,
  updateUiStateInfo,
} from 'features/messengerData';

interface IProps {
  onUpdateChatInfo(): void;
  onUpdateChatList(): void;
  onUpdateProfileInfo(): void;
  onUpdateUiStateInfo(): void;
}

const mapDispatch = {
  onUpdateChatInfo: updateChatInfo,
  onUpdateProfileInfo: updateProfileInfo,
  onUpdateChatList: updateChatList,
  onUpdateUiStateInfo: updateUiStateInfo,
};

const UpdateButtonComponent = React.memo(
  ({ onUpdateChatInfo, onUpdateChatList, onUpdateProfileInfo, onUpdateUiStateInfo }: IProps) => {
    const handleClick = useCallback(() => {
      onUpdateChatInfo();
      onUpdateChatList();
      onUpdateProfileInfo();
      onUpdateUiStateInfo();
    }, [onUpdateChatList, onUpdateChatInfo, onUpdateProfileInfo, onUpdateUiStateInfo]);

    return <Button onClick={handleClick}>Update</Button>;
  }
);

const UpdateButton = connect(null, mapDispatch)(UpdateButtonComponent);

export { UpdateButton, UpdateButtonComponent };
export type { IProps as IUpdateButtonProps };
