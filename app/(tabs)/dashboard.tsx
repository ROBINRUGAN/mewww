import {View, Text, ScrollView, Dimensions, StatusBar, useColorScheme} from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

import WeatherCard from '../../components/dashboard/WeatherCard';
import ShortcutButton from '../../components/dashboard/ShortcutButton';
import StatCard from '../../components/dashboard/StatCard';
import TodoList from '../../components/dashboard/TodoList';
import { SHORTCUTS, STAT_CARDS, TODO_ITEMS } from '../../types/dashboardData';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const CARD_WIDTH = (width - 32 - CARD_GAP) / 2;

export default function DashboardScreen() {
    const colorScheme = useColorScheme(); // 获取当前系统主题
    return (
        <View className="flex-1 bg-surface">
            <Stack.Screen
                options={{
                    title: 'Dashboard',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                }}
            />

            {/* 动态设置状态栏：
                    - 如果是深色模式 (dark)，文字设为白色 (light-content)
                    - 如果是浅色模式 (light)，文字设为黑色 (dark-content)
                */}
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />


            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={{ paddingTop: 16 }}
            >
                <WeatherCard />

                <Text className="text-xl font-bold text-primary ml-4 mb-2 mt-6">Quick Actions</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="flex-grow-0"
                    contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
                >
                    {SHORTCUTS.map((item) => (
                        <ShortcutButton key={item.label} {...item} />
                    ))}
                </ScrollView>

                <Text className="text-xl font-bold text-primary ml-4 mb-2 mt-6">Overview</Text>
                <View className="flex-row flex-wrap px-4 gap-3">
                    {STAT_CARDS.map((card) => (
                        <View key={card.title} style={{ width: CARD_WIDTH }} className={card.fullWidth ? 'w-full' : ''}>
                            <StatCard {...card} />
                        </View>
                    ))}
                </View>

                <Text className="text-xl font-bold text-primary ml-4 mb-2 mt-6">Up Next</Text>
                <TodoList todos={TODO_ITEMS} />

                <View className="h-24" />
            </ScrollView>
        </View>
    );
}
