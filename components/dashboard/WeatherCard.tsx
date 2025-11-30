import React from 'react';
import { View, Text } from 'react-native';
import { SymbolView } from 'expo-symbols';

const WeatherCard: React.FC = () => (
    <View className="mx-4 rounded-2xl p-5 flex-row items-center justify-between bg-accent-primary shadow-lg shadow-accent-primary/40">
        <View>
            <Text className="text-5xl font-light text-white">28°</Text>
            <Text className="text-lg font-semibold text-white mt-1">Fuzhou, China</Text>
            <Text className="text-sm text-white/80 mt-1">Partly Cloudy · H:31° L:24°</Text>
        </View>
        <SymbolView name="cloud.sun.fill" tintColor="#FFD60A" style={{ width: 60, height: 60 }} />
    </View>
);

export default WeatherCard;
