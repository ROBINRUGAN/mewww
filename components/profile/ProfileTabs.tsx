import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';

interface Props {
    posts: any[];
    renderPost: (item: any) => React.ReactElement;
}

const ProfileTabs: React.FC<Props> = ({ posts, renderPost }) => (
    <Tabs.FlashList
        data={posts}
        renderItem={({ item }) => renderPost(item)}
        contentContainerStyle={{ paddingBottom: 100 }}
    />
);

export default ProfileTabs;
