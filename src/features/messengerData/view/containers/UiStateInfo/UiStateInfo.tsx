import React from 'react';
import { connect } from 'react-redux';
import { IChatState, IUiStateInfo } from 'features/messengerData';
import { List, ListItemText } from '@mui/material';

interface IProps extends IUiStateInfo {}

const mapProps = <T extends { chat: IChatState }>({ chat }: T): IProps => ({ ...chat.uiStateInfo });

const UiStateInfoComponent = React.memo(
  ({ status, profileInfoIsOpen, chatIsOpen, selectionModeActive }: IProps) => (
    <List>
      <ListItemText primary='uiStateInfo.status' secondary={`${status}`} />
      <ListItemText primary='uiStateInfo.profileInfoIsOpen' secondary={`${profileInfoIsOpen}`} />
      <ListItemText primary='uiStateInfo.chatIsOpen' secondary={`${chatIsOpen}`} />
      <ListItemText
        primary='uiStateInfo.selectionModeActive'
        secondary={`${selectionModeActive}`}
      />
    </List>
  )
);

const UiStateInfo = connect(mapProps)(UiStateInfoComponent);

export { UiStateInfo, UiStateInfoComponent };
export type { IProps as IUiStateInfoProps };
