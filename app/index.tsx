// app/index.tsx

import {View, Text, ActivityIndicator} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {Image} from 'expo-image';
import * as Haptics from 'expo-haptics';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useEffect, useRef, useState} from 'react';

import "@/nativewind-interop";
import "@/global.css";
import {LinearGradient} from "expo-linear-gradient";
import {verifyInstallation} from "nativewind";

export default function WelcomeScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [progress, setProgress] = useState(0);
    const bootCompletedRef = useRef(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return prev;
                }
                const step = prev > 85 ? 2 : 5 + Math.random() * 3;
                return Math.min(prev + step, 100);
            });
        }, 160);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress >= 100 && !bootCompletedRef.current) {
            bootCompletedRef.current = true;
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).finally(() => {
                setTimeout(() => router.replace('/feed'), 350);
            });
        }
    }, [progress, router]);

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View className="flex-1 bg-black">
                <View className="flex-1 relative overflow-hidden">
                    <Image
                        source="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                        className="absolute inset-0 w-full h-full opacity-90"
                        contentFit="cover"
                    />
                    <View className="absolute inset-0 bg-black/75" />
                    <View className="absolute -left-16 top-24 w-56 h-56 rounded-full bg-fuchsia-500/25" />
                    <View className="absolute right-[-60px] bottom-10 w-64 h-64 rounded-full bg-indigo-500/20" />
                    <View
                        className="flex-1 justify-between px-8"
                        style={{paddingTop: insets.top + 32, paddingBottom: insets.bottom + 40}}
                    >
                        <View>
                            <Text className="text-white/60 text-xs uppercase tracking-[0.5em]">
                                Personal Command
                            </Text>
                            <Text className="text-white text-5xl font-semibold mt-4">MEWWW</Text>
                            <Text className="text-white/85 text-lg mt-4 leading-7">
                                这是我的私人数字工作台，灵感、任务与情绪灯光都由我掌控。
                            </Text>
                            <View className="self-start mt-8 bg-white/10 rounded-full px-4 py-2 flex-row items-center">
                                <View className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                                <Text className="text-white/90 text-sm">Private build v1.0 syncing</Text>
                            </View>
                        </View>

                        <View className="pb-2">
                            <View className="bg-white/10 border border-white/15 rounded-3xl p-6">
                                <Text className="text-white text-xl font-medium">个人宇宙即将上线</Text>
                                <Text className="text-white/70 text-base mt-2">
                                    正在加载偏好、快捷指令与自定义氛围。
                                </Text>
                                <View className="mt-6 h-2 bg-white/15 rounded-full overflow-hidden">
                                    <LinearGradient
                                        colors={['#818cf8', '#c084fc', '#e879f9']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}

                                        className="h-full rounded-full"
                                        style={{ width: `${progress}%` }}
                                    />
                                </View>
                                <View className="flex-row items-center justify-between mt-6">
                                    <Text className="text-white/80 text-sm">
                                        Booting personal OS · {Math.round(progress)}%
                                    </Text>
                                    <ActivityIndicator size="small" color="#FACC15" animating={progress < 100} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
