// app/index.tsx
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {Image} from 'expo-image';
import * as Haptics from 'expo-haptics';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useEffect} from 'react';

export default function WelcomeScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        const timeout = setTimeout(() => router.replace('/feed'), 1600);
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <View style={[styles.container]}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View style={styles.inner}>
                {/* logo 或 欢迎图 */}
                <Image
                    source="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    style={styles.heroImage}
                    contentFit="cover"
                />

                <View style={styles.content}>
                    <Text style={styles.subtitle}>丝滑体验马上开始</Text>
                    <ActivityIndicator size="large" color="#007AFF" style={styles.spinner}/>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        flex: 1,
        backgroundColor: '#000',
    },
    heroImage: {
        width: '100%',
        height: '60%', // 图片占上半部分
        opacity: 0.8,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30, // 像一张卡片一样盖上来
        borderTopRightRadius: 30,
        marginTop: -30, // 稍微往上挤一点
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 24,
    },
    spinner: {
        marginTop: 24,
    },
});