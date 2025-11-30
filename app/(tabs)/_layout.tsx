import { View } from 'react-native';
import { NativeTabs, Icon, Label, Badge } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
        <View className="flex-1 bg-surface">
            <NativeTabs
            >
                {/* 1. Feed (首页/动态) */}
                <NativeTabs.Trigger name="feed">
                    <Label>Feed</Label>
                    {/* house.fill: 最标准的首页图标 */}
                    <Icon sf="house.fill" />
                </NativeTabs.Trigger>

                {/* 2. Chat (聊天) */}
                <NativeTabs.Trigger name="chat">
                    <Label>Chat</Label>
                    {/* bubble.left.and.bubble.right.fill: 经典的聊天气泡 */}
                    <Icon sf="bubble.left.and.bubble.right.fill"  />
                    {/* 假装有未读消息 */}
                    <Badge>9</Badge>
                </NativeTabs.Trigger>

                {/* 3. Dashboard (仪表盘) */}
                <NativeTabs.Trigger name="dashboard">
                    <Label>Dash</Label>
                    {/* speedometer: 仪表盘最直观的图标，或者 chart.bar.fill */}
                    <Icon sf="speedometer"/>
                </NativeTabs.Trigger>

                {/* 4. Profile (个人页) */}
                <NativeTabs.Trigger name="profile">
                    <Label>Me</Label>
                    <Icon sf="person.crop.circle.fill"/>
                </NativeTabs.Trigger>

                {/* 5. Toolbox (工具箱+设置) */}
                <NativeTabs.Trigger name="toolbox">
                    <Label>Tools</Label>
                    {/* archivebox.fill 或 briefcase.fill 都很适合工具箱 */}
                    <Icon sf="archivebox.fill" />
                </NativeTabs.Trigger>
            </NativeTabs>
        </View>
    );
}