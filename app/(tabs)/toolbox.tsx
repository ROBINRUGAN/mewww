import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

import AchievementCarousel from '../../components/toolbox/AchievementCarousel';
import AppGrid from '../../components/toolbox/AppGrid';
import SettingRow from '../../components/toolbox/SettingRow';
import type { SymbolName } from '../../types/symbols';

// === 1. 数据模型 ===

// 荣誉/成就数据 (已替换为高可用图床)
const ACHIEVEMENTS = [
    {
        id: '1',
        title: 'IWQoS Paper',
        subtitle: 'IEEE / ACM 2024',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'National Scholarship',
        subtitle: 'Top 1% @ Fuzhou Univ',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'RUC Admission',
        subtitle: 'Master of Engineering',
        image: 'https://images.unsplash.com/photo-1592280771884-47d3a1c001ce?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Hackathon Winner',
        subtitle: '1st Place @ FZU Hack',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Dean\'s List',
        subtitle: 'Academic Excellence 2023',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Open Source',
        subtitle: '100+ Commits to React',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    },
];

// 工具箱应用
const MY_APPS: { id: string; name: string; icon: SymbolName; color: string }[] = [
    { id: 'ping', name: 'Net Ping', icon: 'network', color: '#34C759' },
    { id: 'ssh', name: 'SSH Term', icon: 'terminal.fill', color: '#000000' },
    { id: 'tofino', name: 'P4 Debug', icon: 'server.rack', color: '#5856D6' },
    { id: 'game', name: 'Dino Run', icon: 'gamecontroller.fill', color: '#FF9500' },
];

// === 2. 组件：荣誉卡片 (Horizontal Card) ===
// const AchievementCard = ({ item }: any) => (
//     <TouchableOpacity
//         style={styles.achievementCard}
//         activeOpacity={0.8}
//         onPress={() => Haptics.selectionAsync()}
//     >
//         <Image source={{ uri: item.image }} style={styles.achievementImage} contentFit="cover" />
//         <View style={styles.achievementOverlay}>
//             <View style={styles.achievementTag}>
//                 <SymbolView name="rosette" tintColor="#FFD60A" style={{width: 14, height: 14}} />
//                 <Text style={styles.achievementTagText}>Award</Text>
//             </View>
//             <Text style={styles.achievementTitle} numberOfLines={1}>{item.title}</Text>
//             <Text style={styles.achievementSub} numberOfLines={1}>{item.subtitle}</Text>
//         </View>
//     </TouchableOpacity>
// );

// === 组件：工具图标 (Grid Icon) ===
// const AppIcon = ({ item }: any) => (
//     <TouchableOpacity
//         style={styles.appItem}
//         onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
//     >
//         <View style={[styles.appIconBg, { backgroundColor: item.color }]}>
//             <SymbolView name={item.icon} tintColor="#FFF" style={{width: 28, height: 28}} />
//         </View>
//         <Text style={styles.appName}>{item.name}</Text>
//     </TouchableOpacity>
// );

// === 组件：设置列表项 (List Item) ===
// const SettingRow = ({ icon, color, label, value, type = 'arrow', isLast = false, initValue = false }: any) => {
//     // 简单的内部状态演示
//     const [isEnabled, setIsEnabled] = useState(initValue);

//     return (
//         <TouchableOpacity
//             style={[styles.settingRow, isLast && styles.lastRow]}
//             onPress={() => type !== 'switch' && Haptics.selectionAsync()}
//             activeOpacity={type === 'switch' ? 1 : 0.7}
//         >
//             <View style={[styles.iconContainer, { backgroundColor: color }]}>
//                 <SymbolView name={icon} tintColor="#FFF" style={{width: 18, height: 18}} />
//             </View>
//             <Text style={styles.settingLabel}>{label}</Text>

//             <View style={styles.settingRight}>
//                 {type === 'switch' ? (
//                     <Switch
//                         value={isEnabled}
//                         onValueChange={(v) => {
//                             setIsEnabled(v);
//                             Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
//                         }}
//                     />
//                 ) : (
//                     <>
//                         <Text style={styles.settingValue}>{value}</Text>
//                         <SymbolView name="chevron.right" tintColor="#C7C7CC" style={{width: 16, height: 16}} />
//                     </>
//                 )}
//             </View>
//         </TouchableOpacity>
//     );
// }

// === 3. 主页面 ===
export default function ToolboxScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Toolbox', headerLargeTitle: true, headerTransparent: true, headerBlurEffect: 'prominent' }} />

            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeader}>Achievements</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>
                <AchievementCarousel items={ACHIEVEMENTS} />

                <Text style={styles.sectionHeader}>My Lab & Games</Text>
                <AppGrid apps={MY_APPS} />

                <Text style={styles.sectionHeader}>Preferences</Text>
                <View style={styles.groupedList}>
                    <SettingRow icon="globe" color="#007AFF" label="Language" value="English" />
                    <SettingRow icon="moon.fill" color="#5856D6" label="Dark Mode" type="switch" />
                </View>

                <Text style={styles.sectionHeader}>Privacy & Security</Text>
                <View style={styles.groupedList}>
                    <SettingRow icon="bell.badge.fill" color="#FF3B30" label="Notifications" type="switch" initValue={true} />
                    <SettingRow icon="faceid" color="#34C759" label="Face ID Lock" type="switch" initValue={true} isLast />
                </View>

                <Text style={styles.sectionHeader}>Data</Text>
                <View style={styles.groupedList}>
                    <SettingRow icon="trash.fill" color="#8E8E93" label="Clear Cache" value="24 MB" isLast />
                </View>

                <Text style={styles.footerText}>
                    Mewww v1.0.0 (Build 2025.11) {'\n'}
                    Designed by Robin @ FZU
                </Text>

                <View style={{height: 100}} />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7', // Grouped Background Color
    },
    scrollContent: {

    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingRight: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginLeft: 20,
        marginBottom: 8,
    },
    seeAll: {
        color: '#007AFF',
        fontSize: 15,
    },
    groupedList: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 24, // 组间距
    },
    footerText: {
        textAlign: 'center',
        color: '#8E8E93',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 10,
    },
});
