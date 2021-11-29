import React from 'react';
import { List, ListItemText } from '@mui/material';
import { connect } from 'react-redux';
import { IChatState, IProfileInfo } from 'features/messengerData';

interface IProps extends IProfileInfo {}

const mapProps = <T extends { chat: IChatState }>({ chat }: T): IProps => ({ ...chat.profileInfo });

const ProfileInfoComponent = React.memo(({ status, phone, username, additional }: IProps) => (
  <List>
    <ListItemText primary='profileInfo.status' secondary={`${status}`} />
    <ListItemText primary='profileInfo.phone' secondary={`${phone}`} />
    <ListItemText primary='profileInfo.username' secondary={`${username}`} />
    <ListItemText primary='profileInfo.additional' secondary={`${additional}`} />
  </List>
));

const ProfileInfo = connect(mapProps)(ProfileInfoComponent);

export { ProfileInfoComponent, ProfileInfo };
export type { IProps as IProfileInfoProps };
