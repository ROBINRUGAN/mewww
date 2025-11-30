import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Dashboard',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                }}
            />

            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContent}>
                <WeatherCard />

                <Text style={styles.sectionHeader}>Quick Actions</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.shortcutRow} contentContainerStyle={styles.shortcutContent}>
                    {SHORTCUTS.map((item) => (
                        <ShortcutButton key={item.label} {...item} />
                    ))}
                </ScrollView>

                <Text style={styles.sectionHeader}>Overview</Text>
                <View style={styles.gridContainer}>
                    {STAT_CARDS.map((card) => (
                        <View key={card.title} style={[styles.statWrapper, card.fullWidth && styles.fullWidthWrapper]}>
                            <StatCard {...card} />
                        </View>
                    ))}
                </View>

                <Text style={styles.sectionHeader}>Up Next</Text>
                <TodoList todos={TODO_ITEMS} />

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    scrollContent: {
        paddingTop: 16,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginLeft: 16,
        marginBottom: 10,
        marginTop: 24,
    },
    shortcutRow: {
        flexGrow: 0,
    },
    shortcutContent: {
        paddingHorizontal: 16,
        gap: 12,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        gap: CARD_GAP,
    },
    statWrapper: {
        width: CARD_WIDTH,
    },
    fullWidthWrapper: {
        width: '100%',
    },
});
