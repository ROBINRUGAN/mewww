import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';
import type { SymbolName } from '../../types/symbols';

interface AppItem {
    id: string;
    name: string;
    icon: SymbolName;
    color: string;
}

interface Props {
    apps: AppItem[];
}

const AppGrid: React.FC<Props> = ({ apps }) => (
    <View style={styles.toolsContainer}>
        <View style={styles.toolsGrid}>
            {apps.map((app) => (
                <TouchableOpacity
                    key={app.id}
                    style={styles.appItem}
                    onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                >
                    <View style={[styles.appIconBg, { backgroundColor: app.color }]}>
                        <SymbolView name={app.icon} tintColor="#FFF" style={{ width: 28, height: 28 }} />
                    </View>
                    <Text style={styles.appName}>{app.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    toolsContainer: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    toolsGrid: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 20,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    appItem: {
        alignItems: 'center',
        gap: 8,
    },
    appIconBg: {
        width: 56,
        height: 56,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appName: {
        fontSize: 12,
        color: '#000',
        fontWeight: '500',
    },
});

export default AppGrid;
