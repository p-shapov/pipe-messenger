import React from 'react';
import { List, ListItemText } from '@mui/material';
import { connect } from 'react-redux';
import { IChatInfo, IChatState } from 'features/messengerData';

interface IProps extends IChatInfo {}

const ChatInfoComponent = React.memo(({ title, status, isDialog }: IProps) => (
  <List>
    <ListItemText primary='chatInfo.status' secondary={`${status}`} />
    <ListItemText primary='chatInfo.title' secondary={`${title}`} />
    <ListItemText primary='chatInfo.isDialog' secondary={`${isDialog}`} />
  </List>
));

const mapState = <T extends { chat: IChatState }>({ chat }: T) => ({ ...chat.chatInfo });

const ChatInfo = connect(mapState)(ChatInfoComponent);

export { ChatInfoComponent, ChatInfo };
export type { IProps as IChatInfoProps };
