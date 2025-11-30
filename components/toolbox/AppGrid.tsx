import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    <View className="px-5 mb-6">
        <View className="flex-row bg-card rounded-2xl p-5 justify-between shadow-sm">
            {apps.map((app) => (
                <TouchableOpacity
                    key={app.id}
                    className="items-center gap-2"
                    onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                >
                    <View className="w-14 h-14 rounded-xl items-center justify-center" style={{ backgroundColor: app.color }}>
                        <SymbolView name={app.icon} tintColor="#FFF" style={{ width: 28, height: 28 }} />
                    </View>
                    <Text className="text-xs font-medium text-primary text-center">{app.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export default AppGrid;
