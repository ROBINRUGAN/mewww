import React from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,

} from 'react-native-reanimated'
import { scheduleOnRN } from'react-native-worklets'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

interface Props {
    onPress: () => void;
    style?: ViewStyle;
}

// 获取屏幕尺寸
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BUTTON_SIZE = 56; // w-14 = 56px
const MARGIN = 5; // 边缘吸附距离

const FloatingActionButton: React.FC<Props> = ({ onPress, style }) => {
    // 1. 计算初始位置 (对应 bottom-32 right-5)
    // right-5 = 20px, bottom-32 = 128px
    const initialX = SCREEN_WIDTH - BUTTON_SIZE - 5;
    const initialY = SCREEN_HEIGHT - BUTTON_SIZE - 128;

    // 2. 动画共享值
    const translateX = useSharedValue(initialX);
    const translateY = useSharedValue(initialY);
    // 用于记录上一次的位置
    const contextX = useSharedValue(0);
    const contextY = useSharedValue(0);

    // 3. 手势处理
    const pan = Gesture.Pan()
        .onStart(() => {
            contextX.value = translateX.value;
            contextY.value = translateY.value;
        })
        .onUpdate((event) => {
            translateX.value = contextX.value + event.translationX;
            translateY.value = contextY.value + event.translationY;
        })
        .onEnd(() => {
            // 限制 Y 轴不要跑出屏幕太远 (上下留出安全距离)
            const safeTop = 60; // 避开顶部状态栏
            const safeBottom = SCREEN_HEIGHT - BUTTON_SIZE - 80; // 避开底部 TabBar 区域

            let finalY = translateY.value;
            if (finalY < safeTop) finalY = safeTop;
            if (finalY > safeBottom) finalY = safeBottom;

            // X 轴吸附逻辑：判断离左边近还是右边近
            const centerX = translateX.value + BUTTON_SIZE / 2;
            let finalX = 0;

            if (centerX < SCREEN_WIDTH / 2) {
                // 吸附到左侧
                finalX = MARGIN;
            } else {
                // 吸附到右侧
                finalX = SCREEN_WIDTH - BUTTON_SIZE - MARGIN;
            }

            // 执行回弹动画
            translateX.value = withSpring(finalX, { damping: 30, stiffness: 500 });
            translateY.value = withSpring(finalY, { damping: 30, stiffness: 500 });
        });

    // 点击手势 (与拖拽分开，避免冲突)
    const tap = Gesture.Tap().onEnd(() => {
        scheduleOnRN(onPress);
    });

    // 组合手势：同时监听，但优先识别 Pan 拖拽
    const composed = Gesture.Race(pan, tap);

    // 4. 动画样式
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    });

    return (
        <GestureDetector gesture={composed}>
            <Animated.View
                className="absolute top-0 left-0 w-14 h-14 rounded-full bg-accent-primary items-center justify-center shadow-lg z-50"
                style={[
                    style,
                    animatedStyle, // 应用动画位置
                    {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        elevation: 8,
                    }
                ]}
            >
                <Ionicons name="add" size={30} className="text-white" />
            </Animated.View>
        </GestureDetector>
    );
};

export default FloatingActionButton;