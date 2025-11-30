import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    comments: number;
    retweets: number;
    likes: number;
    liked: boolean;
    onLike: () => void;
}

const PostActionBar: React.FC<Props> = ({ comments, retweets, likes, liked, onLike }) => {
    return (
        <View style={styles.actionBar}>
            <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="chatbubble-outline" size={18} color="#8E8E93" />
                <Text style={styles.actionCount}>{comments}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="repeat-outline" size={20} color="#8E8E93" />
                <Text style={styles.actionCount}>{retweets}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn} onPress={onLike}>
                <Ionicons name={liked ? 'heart' : 'heart-outline'} size={18} color={liked ? '#FF2D55' : '#8E8E93'} />
                <Text style={[styles.actionCount, liked && { color: '#FF2D55' }]}>
                    {liked ? likes + 1 : likes}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="share-outline" size={18} color="#8E8E93" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 40,
        marginTop: 4,
        marginBottom: 8,
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
    actionCount: {
        fontSize: 12,
        color: '#8E8E93',
        marginLeft: 4,
    },
});

export default PostActionBar;

