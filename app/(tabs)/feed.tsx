import { View, Platform, StatusBar, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router'; // 引入 useRouter
import { FlashList } from '@shopify/flash-list';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import PostRow from '../../components/feed/PostRow';
import FloatingActionButton from '../../components/feed/FloatingActionButton';
import { MOCK_FEED } from '../../constants/feed/mockData'; // 改为从 constants 引入数据

export default function FeedScreen() {
    const colorScheme = useColorScheme();
    const router = useRouter(); // 初始化 Router

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View className="flex-1 bg-white dark:bg-black">
                <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

                <Stack.Screen
                    options={{
                        title: 'Home',
                        headerLargeTitle: true,
                        headerTransparent: Platform.OS === 'ios',
                        headerBlurEffect: 'regular',
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? '#fff' : undefined,
                        },
                        headerShadowVisible: false,
                    }}
                />

                <FlashList
                    className="flex-1"
                    data={MOCK_FEED}
                    renderItem={({item}) => <PostRow item={item}/>}
                    contentInsetAdjustmentBehavior="automatic"
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ItemSeparatorComponent={() => (
                        <View className="h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-[72px]" />
                    )}
                />

                <FloatingActionButton
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        // 跳转到发帖页
                        router.push('/post/compose');
                    }}
                />
            </View>
        </GestureHandlerRootView>
    );
}