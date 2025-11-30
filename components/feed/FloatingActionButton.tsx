import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    onPress: () => void;
    style?: ViewStyle;
}

const FloatingActionButton: React.FC<Props> = ({ onPress, style }) => (
    <TouchableOpacity style={[styles.fab, style]} onPress={onPress} activeOpacity={0.85}>
        <Ionicons name="add" size={30} color="white" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 110,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
});

export default FloatingActionButton;

