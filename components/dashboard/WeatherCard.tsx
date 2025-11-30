import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';

const WeatherCard: React.FC = () => (
    <View style={styles.weatherCard}>
        <View>
            <Text style={styles.weatherTemp}>28°</Text>
            <Text style={styles.weatherCity}>Fuzhou, China</Text>
            <Text style={styles.weatherDesc}>Partly Cloudy · H:31° L:24°</Text>
        </View>
        <SymbolView name="cloud.sun.fill" tintColor="#FFD60A" style={{ width: 60, height: 60 }} />
    </View>
);

const styles = StyleSheet.create({
    weatherCard: {
        backgroundColor: '#007AFF',
        marginHorizontal: 16,
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
    },
    weatherTemp: {
        fontSize: 48,
        fontWeight: '300',
        color: '#FFF',
    },
    weatherCity: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 4,
    },
    weatherDesc: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 4,
    },
});

export default WeatherCard;

