import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
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
            style={[styles.settingRow, isLast && styles.lastRow]}
            onPress={() => type !== 'switch' && Haptics.selectionAsync()}
            activeOpacity={type === 'switch' ? 1 : 0.7}
        >
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <SymbolView name={icon} tintColor="#FFF" style={{ width: 18, height: 18 }} />
            </View>
            <Text style={styles.settingLabel}>{label}</Text>
            <View style={styles.settingRight}>
                {type === 'switch' ? (
                    <Switch value={isEnabled} onValueChange={handleToggle} />
                ) : (
                    <>
                        <Text style={styles.settingValue}>{value}</Text>
                        <SymbolView name="chevron.right" tintColor="#C7C7CC" style={{ width: 16, height: 16 }} />
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 16,
        backgroundColor: '#FFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#C6C6C8',
    },
    lastRow: {
        borderBottomWidth: 0,
    },
    iconContainer: {
        width: 28,
        height: 28,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    settingLabel: {
        fontSize: 17,
        color: '#000',
        flex: 1,
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16,
        gap: 6,
    },
    settingValue: {
        fontSize: 17,
        color: '#8E8E93',
    },
});

export default SettingRow;
