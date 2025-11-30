import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SymbolView } from 'expo-symbols';
import { StatCardData } from '../../types/dashboard';

const StatCard: React.FC<StatCardData> = ({ title, value, unit, icon, color, subtext, fullWidth }) => (
    <View style={[styles.statCard, fullWidth && styles.fullWidthCard]}>
        <View style={styles.statHeader}>
            <View style={[styles.iconCircle, { backgroundColor: color }]}>
                <SymbolView name={icon} tintColor="#FFF" style={{ width: 18, height: 18 }} />
            </View>
            <Text style={styles.statTitle}>{title}</Text>
            {fullWidth && <Text style={styles.statMeta}>{subtext}</Text>}
        </View>
        <View style={styles.statBody}>
            <Text style={styles.statValue}>
                {value}
                <Text style={styles.statUnit}>{unit}</Text>
            </Text>
            {!fullWidth && <Text style={styles.statSub}>{subtext}</Text>}
        </View>
        {fullWidth && (
            <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '68%' }]} />
            </View>
        )}
    </View>
);

const styles = StyleSheet.create({
    statCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    fullWidthCard: {
        width: '100%',
        marginTop: 12,
    },
    statHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    statMeta: {
        marginLeft: 'auto',
        color: '#8E8E93',
    },
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    statTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    statBody: {
        marginTop: 4,
    },
    statValue: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    statUnit: {
        fontSize: 14,
        color: '#8E8E93',
        fontWeight: '500',
    },
    statSub: {
        fontSize: 12,
        color: '#8E8E93',
        marginTop: 4,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#F2F2F7',
        borderRadius: 4,
        marginTop: 10,
        width: '100%',
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#34C759',
        borderRadius: 4,
    },
});

export default StatCard;

