import { cssInterop } from 'nativewind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { SymbolView } from 'expo-symbols';
import { FlashList } from '@shopify/flash-list';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { Ionicons } from '@expo/vector-icons';

cssInterop(Image, { className: 'style' });
cssInterop(LinearGradient, { className: 'style' });
cssInterop(SymbolView, { className: 'style' });
cssInterop(Ionicons, { className: 'style' });

cssInterop(FlashList, {
    className: 'style',
    contentContainerClassName: 'contentContainerStyle',
});

cssInterop(Tabs.ScrollView, {
    className: 'style',
    contentContainerClassName: 'contentContainerStyle',
});

cssInterop(Tabs.FlashList, {
    className: 'style',
    contentContainerClassName: 'contentContainerStyle',
});

cssInterop(MaterialTabBar, {
    className: 'style',
    indicatorClassName: 'indicatorStyle',
    labelClassName: 'labelStyle',
    contentContainerClassName: 'contentContainerStyle',
});
