import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { PostItem } from '../../types/feed';
import PostActionBar from './PostActionBar';

interface Props {
    post: PostItem;
}

const PostDetail: React.FC<Props> = ({ post }) => {
    // 模拟一个详细的时间显示，真实场景下会从 post.timestamp 格式化而来
    const fullTime = "10:30 AM · Oct 24, 2025";

    return (
        <ScrollView
            className="flex-1 bg-white dark:bg-black"
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
        >
            <View className="p-4">
                {/* 1. 用户信息行 (比列表页更大、垂直对齐) */}
                <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-row items-center">
                        <Image
                            source={{ uri: post.user.avatar }}
                            className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 mr-3"
                            contentFit="cover"
                        />
                        <View>
                            <Text className="font-bold text-[17px] text-black dark:text-white">
                                {post.user.name}
                            </Text>
                            <Text className="text-gray-500 text-[15px]">
                                {post.user.handle}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal" size={20} color="#8E8E93" />
                    </TouchableOpacity>
                </View>

                {/* 2. 正文内容 (字体更大，行高更舒适，支持选择) */}
                <Text className="text-[20px] leading-[30px] text-black dark:text-white mb-4 font-normal select-text">
                    {post.content}
                </Text>

                {/* 3. 图片 (圆角，全宽) */}
                {post.image && (
                    <Image
                        source={{ uri: post.image }}
                        className="w-full aspect-[16/9] rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4 border border-gray-100 dark:border-gray-800"
                        contentFit="cover"
                    />
                )}

                {/* 4. 时间和设备信息 (灰色分割线之上) */}
                <View className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                    <Text className="text-gray-500 text-[15px]">
                        {fullTime} · <Text className="text-black dark:text-white font-medium">iPhone</Text>
                    </Text>
                </View>

                {/* 5. 统计数据 (单独一行，数字加粗，灰色分割线之间) */}
                <View className="flex-row border-b border-gray-100 dark:border-gray-800 pb-4 mb-4 gap-6">
                    <Text className="text-gray-500 text-[15px]">
                        <Text className="font-bold text-black dark:text-white">{post.stats.retweets}</Text> Retweets
                    </Text>
                    <Text className="text-gray-500 text-[15px]">
                        <Text className="font-bold text-black dark:text-white">{post.stats.likes}</Text> Likes
                    </Text>
                </View>

                {/* 6. 操作栏 (底部) */}
                <View className="pb-4 border-b border-gray-100 dark:border-gray-800">
                    <PostActionBar
                        {...post.stats}
                        liked={false}
                        onLike={() => {}}
                    />
                </View>

                {/* 7. 评论区占位 */}
                <View className="mt-8 items-center">
                    <Text className="text-blue-500 font-medium">Read {post.stats.comments} replies</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default PostDetail;