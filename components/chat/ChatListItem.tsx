import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ChatItem } from '../../types/chat';

interface Props {
    item: ChatItem;
}

const ChatListItem: React.FC<Props> = React.memo(({ item }) => {
    const router = useRouter();

    const handlePress = () => {
        // TODO: push chat detail page once available
        console.log('Open chat:', item.name);
    };

    return (
        <TouchableHighlight
            onPress={handlePress}
            underlayColor="#E5E5EA"
            style={styles.rowContainer}
        >
            <View style={styles.rowContent}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar} contentFit="cover" />
                    {item.isOnline && <View style={styles.onlineBadge} />}
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.headerRow}>
                        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                        <Text style={[styles.time, item.unread > 0 && styles.activeTime]}>{item.time}</Text>
                    </View>

                    <View style={styles.messageRow}>
                        <Text style={styles.message} numberOfLines={2}>{item.message}</Text>
                        {item.unread > 0 && (
                            <View style={styles.unreadBadge}>
                                <Text style={styles.unreadText}>{item.unread}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
});

const styles = StyleSheet.create({
    rowContainer: {
        height: 76,
        paddingLeft: 16,
        backgroundColor: '#fff',
    },
    rowContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 12,
        position: 'relative',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#F2F2F7',
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#34C759',
        borderWidth: 2,
        borderColor: '#fff',
    },
    textContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        paddingRight: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#C6C6C8',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
        flex: 1,
        marginRight: 10,
    },
    time: {
        fontSize: 14,
        color: '#8E8E93',
    },
    activeTime: {
        color: '#007AFF',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    message: {
        fontSize: 15,
        color: '#8E8E93',
        flex: 1,
        marginRight: 10,
        lineHeight: 20,
    },
    unreadBadge: {
        backgroundColor: '#007AFF',
        borderRadius: 10,
        paddingHorizontal: 6,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 20,
    },
    unreadText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});

export default ChatListItem;

