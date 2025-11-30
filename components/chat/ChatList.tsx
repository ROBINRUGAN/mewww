import React from 'react';
import { FlashList } from '@shopify/flash-list';
import ChatListItem from './ChatListItem';
import { ChatItem } from '../../types/chat';
import { View } from 'react-native';

interface Props {
    chats: ChatItem[];
    ListHeaderComponent?: React.ReactElement; // 新增 Props
}

const ChatList: React.FC<Props> = ({ chats, ListHeaderComponent }) => (
    <FlashList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatListItem item={item} />}
        // 分割线：左侧留出 76px (头像宽度+边距) 的空白，模拟原生 iOS/Telegram 列表感
        ItemSeparatorComponent={() => (
            <View className="h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-[76px]" />
        )}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={ListHeaderComponent} // 传入 Header
        showsVerticalScrollIndicator={false}
    />
);

export default ChatList;