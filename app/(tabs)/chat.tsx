import { View, Platform, StatusBar, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
// 1. 引入 GestureHandlerRootView 以支持手势拖拽
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ChatList from '../../components/chat/ChatList';
import FloatingActionButton from '../../components/chat/FloatingActionButton';
import { ChatItem } from '../../types/chat';
import * as Haptics from "expo-haptics";

// === 1. 模拟数据 (保持不变) ===
const MOCK_CHATS: ChatItem[] = [
    {
        id: '1',
        name: 'Tofino Research Group',
        avatar: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?w=200&h=200&fit=crop',
        message: 'Professor: Please check the latest P4 switch logs.',
        time: '10:42 AM',
        unread: 12,
        isPinned: true,
        mediaType: 'file',
    },
    {
        id: '2',
        name: 'Saved Messages',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
        message: 'Passport_Scan_2025.pdf',
        time: '9:15 AM',
        unread: 0,
        isPinned: true,
        mediaType: 'file',
    },
    {
        id: '3',
        name: 'Alice (RUC)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        message: 'typing...',
        time: '9:00 AM',
        unread: 0,
        isOnline: true,
        typing: true,
    },
    {
        id: '4',
        name: 'GitLab Bot',
        avatar: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=200&h=200&fit=crop',
        message: 'Pipeline #12934 failed on branch main.',
        time: 'Yesterday',
        unread: 1,
        isMuted: true,
    },
    {
        id: '5',
        name: 'Product Design Team',
        avatar: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
        message: 'Review the new Figma prototypes by Friday.',
        time: 'Yesterday',
        unread: 0,
        draft: 'I will take a look toni',
    },
    {
        id: '6',
        name: 'Bob Smith',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
        message: 'Sent a photo.',
        time: 'Mon',
        unread: 0,
        mediaType: 'photo',
    },
    {
        id: '7',
        name: 'FZU CS Notice',
        avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',
        message: '关于2025年寒假放假通知的安排...',
        time: 'Mon',
        unread: 0,
        isMuted: true,
    },
    {
        id: '8',
        name: 'Charlie',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
        message: 'Voice message (0:14)',
        time: 'Sun',
        unread: 2,
        mediaType: 'voice',
        isOnline: true,
    },
    {
        id: '9',
        name: 'David',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop',
        message: 'Can we reschedule the meeting?',
        time: 'May 20',
        unread: 0,
    },
    {
        id: '10',
        name: 'Eva',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        message: 'Video message',
        time: 'May 18',
        unread: 0,
        mediaType: 'video',
    },
];

// === 2. 主页面 ===
export default function ChatScreen() {
    const colorScheme = useColorScheme(); // 获取当前系统主题

    const handleAddChat = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        console.log('Add new chat clicked');
        // 这里添加导航逻辑，例如: router.push('/new-chat')
    };

    return (
        // 2. 将最外层的 View 替换为 GestureHandlerRootView
        // 这一步对于使拖拽手势 (GestureDetector) 生效至关重要
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View className="flex-1 bg-white dark:bg-black">
                <Stack.Screen options={{ headerShown: false }} />

                {/* 动态调整状态栏样式: 深色模式下用白色字(light-content)，浅色模式下用黑色字(dark-content) */}
                <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

                {/* 聊天列表 */}
                <ChatList
                    chats={MOCK_CHATS}
                />

                {/* 悬浮按钮 (支持拖拽吸附) */}
                <FloatingActionButton onPress={handleAddChat} />
            </View>
        </GestureHandlerRootView>
    );
}