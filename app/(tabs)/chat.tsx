import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

import ChatList from '../../components/chat/ChatList';
import { ChatItem } from '../../types/chat';

// === 2. 模拟数据 (Telegram 风格) ===
const MOCK_CHATS: ChatItem[] = [
    {
        id: '1',
        name: 'Tofino Research Group',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
        message: 'Professor: The P4 compiler is throwing an error on stage 3...',
        time: '10:42 AM',
        unread: 5,
    },
    {
        id: '2',
        name: 'Alice (RUC)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        message: 'Sent you the draft for the IWQoS paper. Check it out!',
        time: 'Yesterday',
        unread: 1,
        isOnline: true,
    },
    {
        id: '3',
        name: 'Server Monitor Bot',
        avatar: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=200&fit=crop', // 机器人头像
        message: '⚠️ Alert: GPU usage on Node-04 exceeded 95% for 10 mins.',
        time: 'Friday',
        unread: 0,
    },
    {
        id: '4',
        name: '福州大学计算机学院',
        avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',
        message: '通知：关于2025届研究生毕业答辩的安排...',
        time: 'Mon',
        unread: 0,
    },
    {
        id: '5',
        name: 'Saved Messages',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
        message: 'Todo: Config Tofino SDE 9.7.0 environment.',
        time: 'May 20',
        unread: 0,
    },
    // 重复一些数据以测试滚动性能
    { id: '6', name: 'Bob', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', message: 'Lunch?', time: 'May 19', unread: 0 },
    { id: '7', name: 'Charlie', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', message: 'Okay.', time: 'May 18', unread: 0 },
    { id: '8', name: 'David', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop', message: 'See you.', time: 'May 17', unread: 0 },
];

// === 4. 主页面 ===
export default function ChatScreen() {
    return (
        <View style={styles.container}>
            {/* iOS 原生导航栏配置 */}
            <Stack.Screen
                options={{
                    title: 'Chats',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                    headerSearchBarOptions: {
                        placeholder: 'Search for messages or users',
                        onChangeText: (e) => console.log(e.nativeEvent.text),
                        hideWhenScrolling: false,
                    }
                }}
            />

            <ChatList chats={MOCK_CHATS} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});