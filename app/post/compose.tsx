import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, useColorScheme, StatusBar, ScrollView,
    Pressable // 1. 引入 Pressable
} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {Image} from 'expo-image';
import {Ionicons} from '@expo/vector-icons';
import React, {useState, useRef, useEffect} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ComposeScreen() {
    const router = useRouter();
    const [text, setText] = useState('');
    // 2. 新增状态：记录输入框是否聚焦
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const headerHeight = useHeaderHeight();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        // 进场自动聚焦
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    const handlePost = () => {
        console.log('发布内容:', text);
        router.back();
    };

    const isValid = text.trim().length > 0;

    return (
        <View className="flex-1 bg-white dark:bg-black">
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'New Post',
                    headerTitleStyle: {color: isDark ? 'white' : 'black', fontWeight: '600'},
                    headerBackTitle: 'Back',
                    headerShadowVisible: false,
                    headerTintColor: isDark ? '#fff' : '#000',
                    headerStyle: {backgroundColor: isDark ? '#000' : '#fff'},
                    headerRight: () => (
                        <TouchableOpacity onPress={handlePost} disabled={!isValid}>
                            <Ionicons
                                name="checkmark-circle"
                                size={36}
                                color={isValid ? '#3B82F6' : '#D1D5DB'}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'}/>

            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={headerHeight}
            >
                <View className="flex-1 flex-col">
                    <ScrollView
                        className="flex-1 px-4 pt-4"
                        keyboardShouldPersistTaps="handled"
                        // 3. 关键优化：允许拖拽关闭键盘 (iOS原生体验)
                        keyboardDismissMode="interactive"
                        showsVerticalScrollIndicator={false}
                    >
                        <View className="flex-row">
                            <Image
                                source={{uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'}}
                                className="w-10 h-10 rounded-full mr-3 bg-gray-200"
                            />

                            <View className="flex-1">
                                {/* 4. Pressable 包裹层：负责在未聚焦时接收点击 */}
                                <Pressable
                                    onPress={() => inputRef.current?.focus()}
                                    style={{flex: 1}} // 确保占满空间
                                >
                                    <TextInput
                                        ref={inputRef}
                                        className="text-[18px] text-black dark:text-white leading-6"
                                        placeholder="What's happening?"
                                        placeholderTextColor="#9CA3AF"
                                        multiline
                                        textAlignVertical="top"
                                        value={text}
                                        onChangeText={setText}
                                        scrollEnabled={false}
                                        style={{minHeight: 120}}

                                        // 5. 核心魔法：
                                        // 聚焦时：pointerEvents="auto" (正常打字、选词)
                                        // 未聚焦时：pointerEvents="none" (彻底忽略触摸，让 ScrollView 响应滑动)
                                        pointerEvents={isFocused ? 'auto' : 'none'}

                                        // 6. 维护聚焦状态
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <View className="h-20"/>
                    </ScrollView>

                    <View
                        style={{
                            paddingBottom: Math.max(insets.bottom, 10),
                            backgroundColor: isDark ? 'black' : 'white'
                        }}
                        className="border-t border-gray-100 dark:border-gray-800 px-4 pt-3 flex-row items-center gap-6"
                    >
                        <TouchableOpacity><Ionicons name="image-outline" size={26} color="#1D9BF0"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons name="camera-outline" size={26} color="#1D9BF0"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons name="mic-outline" size={26} color="#1D9BF0"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons name="location-outline" size={26}
                                                    color="#1D9BF0"/></TouchableOpacity>

                        <View className="flex-1"/>

                        {text.length > 0 && (
                            <View className="w-9 h-9 rounded-full border-2 border-blue-200 justify-center items-center">
                                <Text className="text-[10px] text-blue-500">{280 - text.length}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}