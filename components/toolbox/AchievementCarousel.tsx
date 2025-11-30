import React, { useEffect, useRef } from 'react';
import { ScrollView, View, Text, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';

interface Achievement {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

interface Props {
    items: Achievement[];
}

const AchievementCarousel: React.FC<Props> = ({ items }) => {
    const scrollRef = useRef<ScrollView>(null);
    const scrollX = useRef(0);
    const isAutoScrolling = useRef(true);
    const contentWidth = useRef(0);
    const containerWidth = useRef(0);

    useEffect(() => {
        let animationFrameId: number;
        const animate = () => {
            if (isAutoScrolling.current && scrollRef.current && contentWidth.current > containerWidth.current) {
                scrollX.current += 0.5;
                const maxOffset = contentWidth.current - containerWidth.current;
                if (scrollX.current >= maxOffset) {
                    scrollX.current = 0;
                }
                scrollRef.current.scrollTo({ x: scrollX.current, animated: false });
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handleScrollBeginDrag = () => { isAutoScrolling.current = false; };
    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollX.current = event.nativeEvent.contentOffset.x;
        isAutoScrolling.current = true;
    };

    return (
        <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 16, marginBottom: 24 }}
            onScrollBeginDrag={handleScrollBeginDrag}
            onScrollEndDrag={handleScrollEnd}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={16}
            onContentSizeChange={(w) => (contentWidth.current = w)}
            onLayout={(e) => (containerWidth.current = e.nativeEvent.layout.width)}
        >
            {items.map((item) => (
                <View key={item.id} className="w-[200px] h-[140px] rounded-2xl overflow-hidden bg-card shadow-lg">
                    <Image source={{ uri: item.image }} className="absolute inset-0" contentFit="cover" />
                    <View className="flex-1 bg-black/30 justify-end p-3">
                        <View className="absolute top-3 right-3 flex-row items-center bg-black/50 px-2 py-1 rounded-full gap-1">
                            <SymbolView name="rosette" tintColor="#FFD60A" style={{ width: 14, height: 14 }} />
                            <Text className="text-white text-[11px] font-semibold">Award</Text>
                        </View>
                        <Text className="text-white text-lg font-bold mb-0.5" numberOfLines={1}>{item.title}</Text>
                        <Text className="text-white/90 text-sm" numberOfLines={1}>{item.subtitle}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default AchievementCarousel;
