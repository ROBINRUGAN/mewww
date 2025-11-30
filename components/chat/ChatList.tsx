import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';
import ChatListItem from './ChatListItem';
import { ChatItem } from '../../types/chat';

interface Props {
    chats: ChatItem[];
}

const ChatList: React.FC<Props> = ({ chats }) => (
    <FlashList
        data={chats}
        renderItem={({ item }) => <ChatListItem item={item} />}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.listContent}
    />
);

const styles = StyleSheet.create({
    listContent: {
        paddingBottom: 40,
    },
});

export default ChatList;

