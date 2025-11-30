import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';
import { Shortcut } from '../../types/dashboard';

interface Props extends Shortcut {}

const ShortcutButton: React.FC<Props> = ({ icon, color, label, isActive }) => {
    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        // TODO: hook up actual action sheet/menu when available
    };

    return (
        <TouchableOpacity
            style={[styles.shortcutBtn, isActive && { backgroundColor: color }]}
            onPress={handlePress}
        >
            <SymbolView
                name={icon}
                tintColor={isActive ? '#FFF' : color}
                style={{ width: 24, height: 24 }}
            />
            <Text style={[styles.shortcutLabel, isActive && { color: '#FFF' }]}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shortcutBtn: {
        width: 80,
        height: 80,
        backgroundColor: '#FFF',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    shortcutLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 8,
        color: '#333',
    },
});

export default ShortcutButton;

