import React from 'react';
import { connect } from 'react-redux';
import { List, ListItemText } from '@mui/material';
import { IChatList, IChatState } from 'features/messengerData';

interface IProps extends IChatList {}

const mapState = <T extends { chat: IChatState }>({ chat }: T) => ({
  status: chat.chatList.status,
  messages: chat.chatList.messages,
});

const ChatListComponent = React.memo(({ messages, status }: IProps) => (
  <List>
    <ListItemText primary='chatList.status' secondary={`${status}`} />
    <List>
      {messages.map(({ id, text, title, isOwn }) => (
        <ListItemText
          id={id}
          primary={text}
          secondary={`id: ${id}, ${isOwn ? 'you' : title || 'companion'}`}
        />
      ))}
    </List>
  </List>
));

const ChatList = connect(mapState)(ChatListComponent);

export { ChatList, ChatListComponent };
export type { IProps as IChatListProps };
