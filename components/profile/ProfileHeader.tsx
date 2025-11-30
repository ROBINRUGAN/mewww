import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';

export interface ProfileUser {
    name: string;
    handle: string;
    avatar: string;
    bio: string;
    stats: {
        posts: number;
        followers: number;
        following: number;
    };
}

interface Props {
    user: ProfileUser;
}

const ProfileHeader: React.FC<Props> = ({ user }) => (
    <View style={styles.headerContainer}>
        <View style={styles.topSection}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} contentFit="cover" />
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statNum}>{user.stats.posts}</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNum}>{user.stats.followers}</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNum}>{user.stats.following}</Text>
                    <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>
        </View>
        <View style={styles.bioSection}>
            <Text style={styles.nameText}>{user.name}</Text>
            <Text style={styles.handleText}>{user.handle}</Text>
            <Text style={styles.bioText}>{user.bio}</Text>
        </View>
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.grayButton} onPress={() => Haptics.selectionAsync()}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.grayButton} onPress={() => Haptics.selectionAsync()}>
                <Text style={styles.buttonText}>Share Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <SymbolView name="person.badge.plus" tintColor="#000" style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: { paddingTop: 10, backgroundColor: '#fff', paddingBottom: 10 },
    topSection: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginBottom: 12 },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        backgroundColor: '#f0f0f0',
    },
    statsRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 12 },
    statItem: { alignItems: 'center' },
    statNum: { fontSize: 18, fontWeight: '700', color: '#000' },
    statLabel: { fontSize: 13, color: '#000', marginTop: 2 },
    bioSection: { paddingHorizontal: 16, marginBottom: 16 },
    nameText: { fontSize: 16, fontWeight: '700', color: '#000' },
    handleText: { fontSize: 14, color: '#007AFF', marginBottom: 4 },
    bioText: { fontSize: 14, color: '#000', lineHeight: 20 },
    buttonRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8 },
    grayButton: {
        flex: 1,
        backgroundColor: '#E5E5EA',
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: { fontWeight: '600', fontSize: 14, color: '#000' },
    iconButton: {
        backgroundColor: '#E5E5EA',
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
    },
});

export default ProfileHeader;
