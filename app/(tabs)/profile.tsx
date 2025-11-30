import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Stack} from 'expo-router';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Tabs, MaterialTabBar} from 'react-native-collapsible-tab-view';
import {SymbolView} from 'expo-symbols';

import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileTabs from '../../components/profile/ProfileTabs';
import PostRow from '../../components/feed/PostRow';
import {PostItem} from '../../types/feed';
import type {SymbolName} from '../../types/symbols';

// 1. 引入终极库

// === 数据 ===
const USER_INFO = {
    name: 'Wu Rongbang',
    handle: '@robin_rugan',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop',
    bio: 'CS @ Fuzhou Univ 🎓\nIncoming Master @ RUC 🏛️\nFocus on AI4Net & Programmable Switches (Tofino).',
    stats: {posts: 42, followers: 1205, following: 180},
};

const REAL_IMAGES = [
    'photo-1498050108023-c5249f4df085',
    'photo-1488590528505-98d2b5aba04b',
    'photo-1518770660439-4636190af475',
    'photo-1550751827-4bd374c3f58b',
];

const MOCK_POSTS: PostItem[] = Array.from({length: 20}).map((_, i) => ({
    id: i.toString(),
    user: {name: USER_INFO.name, handle: USER_INFO.handle, avatar: USER_INFO.avatar},
    content: `Update ${i + 1}: Implementing P4 runtime on Tofino. Data plane programmability is the future! 🚀 #Network`,
    time: `${i + 1}h`,
    image: `https://images.unsplash.com/${REAL_IMAGES[i % REAL_IMAGES.length]}?q=80&w=800&auto=format&fit=crop`,
    stats: {
        comments: (i + 1) * 2,
        retweets: (i % 5) * 3,
        likes: 120 + i * 5,
    },
}));

const EMPTY_STATES: Record<string, {icon: SymbolName; text: string}> = {
    Replies: {icon: 'bubble.left.and.bubble.right', text: 'No replies yet'},
    Likes: {icon: 'heart', text: 'No likes yet'},
};

// === 组件：头部 (Header) - 现在不需要包含 Tab 了 ===
// const ProfileHeader = () => {
//     return (
//         <View style={styles.headerContainer}>
//             <View style={styles.topSection}>
//                 <Image source={{uri: USER_INFO.avatar}} style={styles.avatar} contentFit="cover"/>
//                 <View style={styles.statsRow}>
//                     <View style={styles.statItem}><Text style={styles.statNum}>{USER_INFO.stats.posts}</Text><Text
//                         style={styles.statLabel}>Posts</Text></View>
//                     <View style={styles.statItem}><Text style={styles.statNum}>{USER_INFO.stats.followers}</Text><Text
//                         style={styles.statLabel}>Followers</Text></View>
//                     <View style={styles.statItem}><Text style={styles.statNum}>{USER_INFO.stats.following}</Text><Text
//                         style={styles.statLabel}>Following</Text></View>
//                 </View>
//             </View>
//             <View style={styles.bioSection}>
//                 <Text style={styles.nameText}>{USER_INFO.name}</Text>
//                 <Text style={styles.handleText}>{USER_INFO.handle}</Text>
//                 <Text style={styles.bioText}>{USER_INFO.bio}</Text>
//             </View>
//             <View style={styles.buttonRow}>
//                 <TouchableOpacity style={styles.grayButton} onPress={() => Haptics.selectionAsync()}>
//                     <Text style={styles.buttonText}>Edit Profile</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.grayButton} onPress={() => Haptics.selectionAsync()}>
//                     <Text style={styles.buttonText}>Share Profile</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconButton}>
//                     <SymbolView name="person.badge.plus" tintColor="#000" style={{width: 20, height: 20}}/>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

export default function ProfileScreen() {
    const insets = useSafeAreaInsets();

    const renderTabBar = React.useCallback((props: any) => (
        <MaterialTabBar
            {...props}
            indicatorStyle={{backgroundColor: '#007AFF', height: 2}}
            style={{backgroundColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#E5E5EA'}}
            labelStyle={{color: 'black', fontWeight: '600', fontSize: 14, textTransform: 'capitalize'}}
            activeColor="#000"
            inactiveColor="#8E8E93"
            tabStyle={{height: 48}}
        />
    ), []);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Stack.Screen
                options={{
                    headerLargeTitle: false,
                    headerShadowVisible: false,
                    headerStyle: {backgroundColor: '#fff'},
                }}
            />

            {/* 核心容器 */}
            <Tabs.Container
                renderHeader={() => <ProfileHeader user={USER_INFO}/>}
                renderTabBar={renderTabBar}
                headerContainerStyle={{shadowOpacity: 0, elevation: 0}}
                containerStyle={{paddingTop: 0}}
                minHeaderHeight={0}
            >
                <Tabs.Tab name="Posts">
                    <ProfileTabs posts={MOCK_POSTS} renderPost={(item: PostItem) => <PostRow item={item} />}/>
                </Tabs.Tab>
                <Tabs.Tab name="Replies">
                    <Tabs.ScrollView contentContainerStyle={styles.centerPage}>
                        <SymbolView name={EMPTY_STATES.Replies.icon} tintColor="#8E8E93" style={{width: 50, height: 50}}/>
                        <Text style={styles.emptyText}>{EMPTY_STATES.Replies.text}</Text>
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="Likes">
                    <Tabs.ScrollView contentContainerStyle={styles.centerPage}>
                        <SymbolView name={EMPTY_STATES.Likes.icon} tintColor="#8E8E93" style={{width: 50, height: 50}}/>
                        <Text style={styles.emptyText}>{EMPTY_STATES.Likes.text}</Text>
                    </Tabs.ScrollView>
                </Tabs.Tab>
            </Tabs.Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff'},

    // 空状态样式
    centerPage: {flex: 1, alignItems: 'center', paddingTop: 100},
    emptyText: {marginTop: 10, color: '#8E8E93', fontSize: 15},

    // Post Card 样式 (复用)
    postContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5EA'
    },
    leftCol: {marginRight: 12},
    postAvatar: {width: 44, height: 44, borderRadius: 22, backgroundColor: '#eee'},
    rightCol: {flex: 1},
    headerRow: {flexDirection: 'row', marginBottom: 4, alignItems: 'center'},
    userName: {fontWeight: '700', fontSize: 15, marginRight: 5, color: '#000'},
    userHandle: {color: '#657786', fontSize: 15, flex: 1},
    postText: {fontSize: 15, lineHeight: 22, color: '#14171A', marginBottom: 8},
    postImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 12,
        marginBottom: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#f0f0f0'
    },
    actionBar: {flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40, marginTop: 4},
});
