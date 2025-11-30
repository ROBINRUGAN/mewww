import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';
import { ChatItem } from '../../types/chat';

interface Props {
    item: ChatItem;
}

const ChatListItem: React.FC<Props> = React.memo(({ item }) => {
    const handlePress = () => {
        console.log('Open chat:', item.name);
    };

    // 格式化时间显示 (简单逻辑)
    const displayTime = item.time;

    return (
        <TouchableHighlight
            onPress={handlePress}
            underlayColor="#F5F5F5" // 更加轻量的按压颜色
            className="bg-card"
        >
            <View className="flex-row px-4 py-2.5 items-center">
                {/* 1. 头像区域 - 改为圆形 */}
                <View className="mr-3 relative">
                    <Image
                        source={{ uri: item.avatar }}
                        className="w-[54px] h-[54px] rounded-full bg-slate-200"
                        contentFit="cover"
                    />
                    {item.isOnline && (
                        <View className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-[2px] border-white dark:border-black" />
                    )}
                </View>

                {/* 2. 内容区域 - 更加紧凑 */}
                <View className="flex-1 justify-center h-[54px]">
                    {/* 上半部分: 名字 + 时间 */}
                    <View className="flex-row justify-between items-baseline mb-1">
                        <View className="flex-row items-center flex-1 pr-2">
                            {/* 名字加粗，字号微调 */}
                            <Text className="text-[16px] font-bold text-black dark:text-white" numberOfLines={1}>
                                {item.isPinned && <Text className="text-gray-400 text-[14px]">📌 </Text>}
                                {item.name}
                            </Text>
                            {item.isMuted && <Text className="text-gray-400 text-xs ml-1">🔕</Text>}
                        </View>
                        {/* 时间放在右上角，颜色变淡 */}
                        <Text className={`text-[13px] ${item.unread > 0 ? 'text-blue-500' : 'text-gray-400'}`}>
                            {displayTime}
                        </Text>
                    </View>

                    {/* 下半部分: 消息 + 徽标 */}
                    <View className="flex-row justify-between items-center">
                        <View className="flex-1 mr-4 flex-row items-center">
                            {item.typing ? (
                                <Text className="text-[15px] text-blue-500">Typing...</Text>
                            ) : (
                                <>
                                    {/*如果是自己发的，这里通常会显示双勾 Check，此处省略逻辑*/}
                                    {item.draft ? (
                                        <Text className="text-[15px] text-red-500" numberOfLines={1}>
                                            <Text className="font-medium">Draft: </Text>{item.draft}
                                        </Text>
                                    ) : (
                                        <Text className="text-[15px] text-gray-500 dark:text-gray-400 leading-5" numberOfLines={1}>
                                            {item.name === 'You' && <Text className="text-black dark:text-white">You: </Text>}
                                            {item.mediaType && <Text className="text-blue-500">{item.mediaType === 'photo' ? '📷 Photo ' : '📎 File '}</Text>}
                                            {item.message}
                                        </Text>
                                    )}
                                </>
                            )}
                        </View>

                        {/* 未读气泡 - Telegram 风格是纯色胶囊或圆形 */}
                        {item.unread > 0 && (
                            <View className="bg-blue-500 rounded-full h-5 min-w-[20px] px-1.5 justify-center items-center">
                                <Text className="text-[11px] text-white font-bold">
                                    {item.unread > 99 ? '99+' : item.unread}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
});

export default ChatListItem;