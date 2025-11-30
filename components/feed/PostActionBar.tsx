import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    comments: number;
    retweets: number;
    likes: number;
    views?: number;
    liked: boolean;
    onLike: () => void;
}

const ActionButton = ({ icon, count, color, active, onPress }: any) => (
    <TouchableOpacity
        className="flex-row items-center min-w-[50px]"
        onPress={onPress}
        activeOpacity={0.6}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
        <Ionicons
            name={icon}
            size={18}
            color={active ? color : '#8E8E93'}
            style={{ marginTop: 2 }}
        />
        {count > 0 && (
            <Text className={`text-[13px] ml-1.5 font-medium ${active ? '' : 'text-gray-500'}`} style={active ? { color } : {}}>
                {count}
            </Text>
        )}
    </TouchableOpacity>
);

const PostActionBar: React.FC<Props> = ({ comments, retweets, likes, views = 842, liked, onLike }) => {
    return (
        <View className="flex-row items-center mt-3 pr-4">
            {/* 左侧四个按钮区域：占满剩余空间，但右侧留出 mr-8 的距离给分享按钮 */}
            <View className="flex-1 flex-row justify-between mr-8">
                <ActionButton
                    icon="chatbubble-outline"
                    count={comments}
                    onPress={() => {}}
                />
                <ActionButton
                    icon="repeat-outline"
                    count={retweets}
                    color="#00BA7C"
                    onPress={() => {}}
                />
                <ActionButton
                    icon={liked ? "heart" : "heart-outline"}
                    count={likes}
                    color="#F91880"
                    active={liked}
                    onPress={onLike}
                />
                <ActionButton
                    icon="stats-chart-outline"
                    count={views}
                    onPress={() => {}}
                />
            </View>

            {/* 分享按钮：独立在右侧 */}
            <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
                <Ionicons name="share-outline" size={18} color="#8E8E93" />
            </TouchableOpacity>
        </View>
    );
};

export default PostActionBar;