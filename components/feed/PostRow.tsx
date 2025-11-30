import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActionSheetIOS } from 'react-native';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import PostActionBar from './PostActionBar';
import { PostItem } from '../../types/feed';

interface Props {
    item: PostItem;
}

const PostRow: React.FC<Props> = React.memo(({ item }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setLiked((prev) => !prev);
    };

    const handleMore = () => {
        Haptics.selectionAsync();
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancel', 'Copy Text', 'Share', 'Report'],
                destructiveButtonIndex: 3,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex === 1) {
                }
            }
        );
    };

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.rowContainer}>
            <View style={styles.leftCol}>
                <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>

            <View style={styles.rightCol}>
                <View style={styles.headerRow}>
                    <Text style={styles.userName} numberOfLines={1}>{item.user.name}</Text>
                    <Text style={styles.userHandle} numberOfLines={1}>{`${item.user.handle} · ${item.time}`}</Text>
                    <TouchableOpacity style={styles.moreBtn} onPress={handleMore}>
                        <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.postText}>{item.content}</Text>

                {item.image && (
                    <Image
                        source={{ uri: item.image }}
                        style={styles.postImage}
                        contentFit="cover"
                        transition={300}
                    />
                )}

                <PostActionBar
                    comments={item.stats.comments}
                    retweets={item.stats.retweets}
                    likes={item.stats.likes}
                    liked={liked}
                    onLike={handleLike}
                />
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        padding: 12,
        paddingBottom: 4,
    },
    leftCol: {
        marginRight: 12,
    },
    rightCol: {
        flex: 1,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F2F2F7',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        justifyContent: 'space-between',
    },
    userName: {
        fontWeight: '700',
        fontSize: 15,
        marginRight: 4,
        color: '#000',
    },
    userHandle: {
        color: '#8E8E93',
        fontSize: 15,
        flex: 1,
    },
    moreBtn: {
        padding: 4,
    },
    postText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#0F1419',
        marginBottom: 8,
    },
    postImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 12,
        marginBottom: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.1)',
    },
});

export default PostRow;
