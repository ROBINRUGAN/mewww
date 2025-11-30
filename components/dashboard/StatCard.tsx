import React from 'react';
import { View, Text } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { StatCardData } from '../../types/dashboard';

const StatCard: React.FC<StatCardData> = ({ title, value, unit, icon, color, subtext, fullWidth }) => (
    <View className={`rounded-2xl p-4 shadow-sm ${fullWidth ? 'w-full mt-3' : ''} bg-card`}>
        <View className="flex-row items-center mb-3">
            <View className="w-8 h-8 rounded-full items-center justify-center mr-3" style={{ backgroundColor: color }}>
                <SymbolView name={icon} tintColor="#FFF" style={{ width: 18, height: 18 }} />
            </View>
            <Text className="text-sm font-semibold text-primary flex-1">{title}</Text>
            {fullWidth && <Text className="text-secondary">{subtext}</Text>}
        </View>
        <View>
            <Text className="text-3xl font-bold text-primary">
                {value}
                <Text className="text-base text-secondary font-medium">{unit}</Text>
            </Text>
            {!fullWidth && <Text className="text-xs text-secondary mt-2">{subtext}</Text>}
        </View>
        {fullWidth && (
            <View className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
                <View className="h-full bg-accent-success rounded-full w-[68%]" />
            </View>
        )}
    </View>
);

export default StatCard;
