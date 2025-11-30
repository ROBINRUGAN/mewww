import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import * as Haptics from 'expo-haptics';
import React from 'react';

import PostRow from '../../components/feed/PostRow';
import FloatingActionButton from '../../components/feed/FloatingActionButton';
import { PostItem } from '../../types/feed';

// === 2. 模拟数据 ===
const MOCK_FEED: PostItem[] = [
    {
        id: '1',
        user: {
            name: 'Elon Musk',
            handle: '@elonmusk',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
        },
        content: 'Tofino chips are actually insane. The programmability is next level. 🚀',
        stats: { comments: 542, retweets: 1200, likes: 8500 },
        time: '2h',
    },
    {
        id: '2',
        user: {
            name: 'Research Bot',
            handle: '@daily_paper',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
        },
        content: 'New paper accepted at SIGCOMM 2025: "Optimizing RDMA for AI Clusters using P4". Link in bio.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
        stats: { comments: 23, retweets: 45, likes: 128 },
        time: '5h',
    },
    {
        id: '3',
        user: {
            name: 'Fuzhou Univ CS',
            handle: '@fzu_cs',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
        },
        content: 'Campus view today. ☀️ #FZU',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        stats: { comments: 10, retweets: 5, likes: 342 },
        time: '1d',
    },
    {
        id: '4',
        user: {
            name: 'Tim Cook',
            handle: '@tim_cook',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        },
        content: 'Good morning! Excited to announce the new iPhone 17 Pro with Liquid Glass design.',
        stats: { comments: 999, retweets: 5000, likes: 10000 },
        time: 'Just now',
    },
];

// === 4. 主页面 ===
export default function FeedScreen() {
    return (
        <View style={styles.container}>
            {/* 沉浸式导航栏 */}
            <Stack.Screen
                options={{
                    title: 'Feed',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                    headerSearchBarOptions: {
                        placeholder: 'Search Twitter',
                        // 原生搜索栏样式配置
                    }
                }}
            />

            <FlashList
                data={MOCK_FEED}
                renderItem={({ item }) => <PostRow item={item} />}
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.listContent}
                // 分割线
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />

            <FloatingActionButton
                onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContent: {
        paddingBottom: 100, // 给底部 TabBar 和 FAB 留空间
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E5E5EA',
        marginLeft: 70, // 跟内容对齐，头像下面没线
    },
});
