import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import * as Haptics from 'expo-haptics';

export interface ProfileUser {
    name: string;
    handle: string;
    avatar: string;
    bio: string;
    stats: {
        posts: number;
        followers: number;
        following: number;
    };
}

interface Props {
    user: ProfileUser;
}

const ProfileHeader: React.FC<Props> = ({ user }) => (
    <View className="pt-2 bg-card pb-3">
        <View className="flex-row items-center px-4 mb-3">
            <Image source={{ uri: user.avatar }} className="w-20 h-20 rounded-full border border-border bg-slate-200" contentFit="cover" />
            <View className="flex-1 flex-row justify-around ml-3">
                <View className="items-center">
                    <Text className="text-lg font-bold text-primary">{user.stats.posts}</Text>
                    <Text className="text-xs text-secondary mt-0.5">Posts</Text>
                </View>
                <View className="items-center">
                    <Text className="text-lg font-bold text-primary">{user.stats.followers}</Text>
                    <Text className="text-xs text-secondary mt-0.5">Followers</Text>
                </View>
                <View className="items-center">
                    <Text className="text-lg font-bold text-primary">{user.stats.following}</Text>
                    <Text className="text-xs text-secondary mt-0.5">Following</Text>
                </View>
            </View>
        </View>
        <View className="px-4 mb-4">
            <Text className="text-base font-semibold text-primary">{user.name}</Text>
            <Text className="text-sm text-accent-primary mb-1">{user.handle}</Text>
            <Text className="text-sm text-primary leading-5 whitespace-pre-line">{user.bio}</Text>
        </View>
        <View className="flex-row px-4 gap-2">
            <TouchableOpacity className="flex-1 bg-border/60 dark:bg-border/40 py-2 rounded-lg items-center" onPress={() => Haptics.selectionAsync()}>
                <Text className="font-semibold text-primary">Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-border/60 dark:bg-border/40 py-2 rounded-lg items-center" onPress={() => Haptics.selectionAsync()}>
                <Text className="font-semibold text-primary">Share Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 bg-border/60 dark:bg-border/40 rounded-lg items-center justify-center">
                <SymbolView name="person.badge.plus" tintColor="#000" style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    </View>
);

export default ProfileHeader;
