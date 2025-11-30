import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';
import { Shortcut } from '../../types/dashboard';

const ShortcutButton: React.FC<Shortcut> = ({ icon, color, label, isActive }) => {
    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        // TODO: hook up actual action sheet/menu when available
    };

    return (
        <TouchableOpacity
            className={`w-20 h-20 rounded-2xl items-center justify-center p-2 shadow ${isActive ? '' : 'bg-card'}`}
            style={isActive ? { backgroundColor: color } : undefined}
            onPress={handlePress}
        >
            <SymbolView
                name={icon}
                tintColor={isActive ? '#FFF' : color}
                style={{ width: 24, height: 24 }}
            />
            <Text className={`text-xs font-medium mt-2 ${isActive ? 'text-white' : 'text-primary'}`}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ShortcutButton;
