import { useLocalSearchParams, Stack } from 'expo-router';
import { View, ActivityIndicator, Platform, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import PostDetail from '../../components/feed/PostDetail';
import { MOCK_FEED } from '../../constants/feed/mockData';
import { PostItem } from '../../types/feed';

export default function PostDetailScreen() {
    const { id } = useLocalSearchParams();
    const [post, setPost] = useState<PostItem | null>(null);
    const colorScheme = useColorScheme(); // 获取当前颜色模式
    const isDark = colorScheme === 'dark';

    useEffect(() => {
        // 简单模拟根据 ID 查找数据
        if (id) {
            const found = MOCK_FEED.find((p) => p.id === id);
            setPost(found || null);
        }
    }, [id]);

    if (!post) {
        return (
            <View className="flex-1 justify-center items-center bg-white dark:bg-black">
                {/* 简单的 Loading 状态 Header */}
                <Stack.Screen options={{ title: 'Post' }} />
                <ActivityIndicator size="large" color={isDark ? '#fff' : '#000'} />
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white dark:bg-black">
            <Stack.Screen
                options={{
                    title: 'Post',
                    // 1. 动态设置标题颜色
                    headerTitleStyle: {
                        color: isDark ? '#fff' : '#000'
                    },
                    // 2. 动态设置返回箭头颜色
                    headerTintColor: isDark ? '#fff' : '#000',

                    // 修复丑陋的返回文字 (tabs)
                    headerBackTitle: 'Back',
                    headerShadowVisible: false,

                    // 3. 动态设置背景颜色 (Android 需要显式设置，iOS 默认透明或跟随 BlurEffect)
                    headerStyle: {
                        backgroundColor: isDark ? '#000' : '#fff'
                    }
                }}
            />

            <PostDetail post={post} />
        </View>
    );
}