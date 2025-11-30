import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';
import type { SymbolName } from '../../types/symbols';

interface Props {
    icon: SymbolName;
    color: string;
    label: string;
    value?: string;
    type?: 'arrow' | 'switch';
    isLast?: boolean;
    initValue?: boolean;
}

const SettingRow: React.FC<Props> = ({ icon, color, label, value, type = 'arrow', isLast, initValue = false }) => {
    const [isEnabled, setIsEnabled] = useState(initValue);

    const handleToggle = (v: boolean) => {
        setIsEnabled(v);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    return (
        <TouchableOpacity
            className={`flex-row items-center py-3 pl-4 bg-card border-b border-border ${isLast ? 'border-b-0' : ''}`}
            onPress={() => type !== 'switch' && Haptics.selectionAsync()}
            activeOpacity={type === 'switch' ? 1 : 0.7}
        >
            <View className="w-7 h-7 rounded-md items-center justify-center mr-3" style={{ backgroundColor: color }}>
                <SymbolView name={icon} tintColor="#FFF" style={{ width: 18, height: 18 }} />
            </View>
            <Text className="text-[17px] text-primary flex-1">{label}</Text>
            <View className="flex-row items-center pr-4 gap-1.5">
                {type === 'switch' ? (
                    <Switch value={isEnabled} onValueChange={handleToggle} />
                ) : (
                    <>
                        <Text className="text-[17px] text-secondary">{value}</Text>
                        <SymbolView name="chevron.right" tintColor="#C7C7CC" style={{ width: 16, height: 16 }} />
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default SettingRow;
