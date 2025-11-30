import React, { useEffect, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';

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
            contentContainerStyle={styles.achievementList}
            onScrollBeginDrag={handleScrollBeginDrag}
            onScrollEndDrag={handleScrollEnd}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={16}
            onContentSizeChange={(w) => (contentWidth.current = w)}
            onLayout={(e) => (containerWidth.current = e.nativeEvent.layout.width)}
        >
            {items.map((item) => (
                <View key={item.id} style={styles.achievementCard}>
                    <Image source={{ uri: item.image }} style={styles.achievementImage} contentFit="cover" />
                    <View style={styles.achievementOverlay}>
                        <View style={styles.achievementTag}>
                            <SymbolView name="rosette" tintColor="#FFD60A" style={{ width: 14, height: 14 }} />
                            <Text style={styles.achievementTagText}>Award</Text>
                        </View>
                        <Text style={styles.achievementTitle} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.achievementSub} numberOfLines={1}>{item.subtitle}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    achievementList: {
        paddingHorizontal: 20,
        gap: 16,
        marginBottom: 24,
    },
    achievementCard: {
        width: 200,
        height: 140,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginRight: 16,
    },
    achievementImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    achievementOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
        padding: 12,
    },
    achievementTag: {
        position: 'absolute',
        top: 12,
        right: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },
    achievementTagText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '600',
    },
    achievementTitle: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 2,
    },
    achievementSub: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
    },
});

export default AchievementCarousel;

