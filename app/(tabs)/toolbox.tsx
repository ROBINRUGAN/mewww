import {View, Text, ScrollView, TouchableOpacity, useColorScheme, StatusBar} from 'react-native';
import {Stack} from 'expo-router';
import React from 'react';

import AchievementCarousel from '../../components/toolbox/AchievementCarousel';
import AppGrid from '../../components/toolbox/AppGrid';
import SettingRow from '../../components/toolbox/SettingRow';
import type {SymbolName} from '../../types/symbols';

// === 1. 数据模型 ===

// 荣誉/成就数据 (已替换为高可用图床)
const ACHIEVEMENTS = [
    {
        id: '1',
        title: 'IWQoS Paper',
        subtitle: 'IEEE / ACM 2024',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'National Scholarship',
        subtitle: 'Top 1% @ Fuzhou Univ',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'RUC Admission',
        subtitle: 'Master of Engineering',
        image: 'https://images.unsplash.com/photo-1592280771884-47d3a1c001ce?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Hackathon Winner',
        subtitle: '1st Place @ FZU Hack',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Dean\'s List',
        subtitle: 'Academic Excellence 2023',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Open Source',
        subtitle: '100+ Commits to React',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    },
];

// 工具箱应用
const MY_APPS: { id: string; name: string; icon: SymbolName; color: string }[] = [
    {id: 'ping', name: 'Net Ping', icon: 'network', color: '#34C759'},
    {id: 'ssh', name: 'SSH Term', icon: 'terminal.fill', color: '#000000'},
    {id: 'tofino', name: 'P4 Debug', icon: 'server.rack', color: '#5856D6'},
    {id: 'game', name: 'Dino Run', icon: 'gamecontroller.fill', color: '#FF9500'},
];

// === 3. 主页面 ===
export default function ToolboxScreen() {
    const colorScheme = useColorScheme(); // 获取当前系统主题

    return (
        <View className="flex-1 bg-surface">
            <Stack.Screen options={{
                title: 'Toolbox',
                headerLargeTitle: true,
                headerTransparent: true,
                headerBlurEffect: 'prominent'
            }}/>
            {/* 动态设置状态栏：
                - 如果是深色模式 (dark)，文字设为白色 (light-content)
                - 如果是浅色模式 (light)，文字设为黑色 (dark-content)
            */}
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}/>

            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{paddingBottom: 40}}
                        showsVerticalScrollIndicator={false}>
                <View className="flex-row justify-between items-baseline pr-5">
                    <Text className="text-xl font-bold text-primary ml-5 mb-2">Achievements</Text>
                    <TouchableOpacity><Text className="text-accent-primary text-base">See All</Text></TouchableOpacity>
                </View>
                <AchievementCarousel items={ACHIEVEMENTS}/>

                <Text className="text-xl font-bold text-primary ml-5 mb-2">My Lab & Games</Text>
                <AppGrid apps={MY_APPS}/>

                <Text className="text-xl font-bold text-primary ml-5 mb-2">Preferences</Text>
                <View className="bg-card mx-5 rounded-xl overflow-hidden mb-6">
                    <SettingRow icon="globe" color="#007AFF" label="Language" value="English"/>
                    <SettingRow icon="moon.fill" color="#5856D6" label="Dark Mode" type="switch"/>
                </View>

                <Text className="text-xl font-bold text-primary ml-5 mb-2">Privacy & Security</Text>
                <View className="bg-card mx-5 rounded-xl overflow-hidden mb-6">
                    <SettingRow icon="bell.badge.fill" color="#FF3B30" label="Notifications" type="switch"
                                initValue={true}/>
                    <SettingRow icon="faceid" color="#34C759" label="Face ID Lock" type="switch" initValue={true}
                                isLast/>
                </View>

                <Text className="text-xl font-bold text-primary ml-5 mb-2">Data</Text>
                <View className="bg-card mx-5 rounded-xl overflow-hidden mb-6">
                    <SettingRow icon="trash.fill" color="#8E8E93" label="Clear Cache" value="24 MB" isLast/>
                </View>

                <Text className="text-center text-secondary text-sm leading-5 mt-3">
                    Mewww v1.0.0 (Build 2025.11) {'\n'}Designed by Robin @ FZU
                </Text>

                <View className="h-24"/>

            </ScrollView>
        </View>
    );
}
