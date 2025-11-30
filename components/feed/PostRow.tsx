import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActionSheetIOS, Platform } from 'react-native';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // 引入 router
import PostActionBar from './PostActionBar';
import { PostItem } from '../../types/feed';

interface Props {
    item: PostItem;
}

const PostRow: React.FC<Props> = React.memo(({ item }) => {
    const router = useRouter(); // 使用 Router
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setLiked((prev) => !prev);
    };

    // 新增：处理点击跳转详情页
    const handlePress = () => {
        // 传递 ID 到动态路由
        router.push(`/post/${item.id}`);
    };

    const handleMore = () => {
        Haptics.selectionAsync();
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['Cancel', 'Copy Text', 'Share via...', 'Mute @' + item.user.handle, 'Block', 'Report Post'],
                    destructiveButtonIndex: 5,
                    cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                    // TODO: handle actions
                }
            );
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.65}
            onPress={handlePress} // 绑定点击事件
            className="flex-row px-4 py-3 bg-white dark:bg-black"
        >
            {/* 头像 */}
            <View className="mr-3">
                <Image
                    source={{ uri: item.user.avatar }}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    contentFit="cover"
                />
            </View>

            <View className="flex-1">
                {/* 头部信息 */}
                <View className="flex-row items-center justify-between mb-1">
                    <View className="flex-row items-center flex-1 pr-2 overflow-hidden">
                        <Text className="font-bold text-[15px] text-black dark:text-white mr-1.5" numberOfLines={1}>
                            {item.user.name}
                        </Text>
                        <Text className="text-gray-500 text-[15px]" numberOfLines={1}>
                            {item.user.handle} · {item.time}
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="p-1 opacity-60"
                        onPress={handleMore}
                        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                    >
                        <Ionicons name="ellipsis-horizontal" size={18} color="#8E8E93" />
                    </TouchableOpacity>
                </View>

                {/* 正文内容 */}
                <Text className="text-[15px] leading-[22px] text-black dark:text-white mb-2.5 font-normal">
                    {item.content}
                </Text>

                {/* 图片/媒体 - 即使点图片也跳转详情页，或者可以做查看大图逻辑 */}
                {item.image && (
                    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
                        <Image
                            source={{ uri: item.image }}
                            className="w-full aspect-[16/9] rounded-2xl bg-gray-100 dark:bg-gray-800 mb-2"
                            contentFit="cover"
                            transition={200}
                        />
                    </TouchableOpacity>
                )}

                {/* 操作栏 */}
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

export default PostRow;