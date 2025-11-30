import { PostItem } from '../../types/feed';

// === Feed (帖子流) 模拟数据 ===
// 供列表页和详情页共享使用
export const MOCK_FEED: PostItem[] = [
    {
        id: '1',
        user: {
            name: 'Elon Musk',
            handle: '@elonmusk',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
        },
        content: 'Starship flight 5 was successful. The catch mechanism worked perfectly on the first try! 🚀 Mars is looking more reachable than ever.',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80',
        stats: {comments: 5420, retweets: 12000, likes: 85000},
        time: '2h',
    },
    {
        id: '2',
        user: {
            name: 'Design Digest',
            handle: '@designdigest',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
        content: 'Minimalism isn’t just about less. It’s about more of what matters. Here are 5 principles of Apple’s design philosophy 🧵',
        stats: {comments: 124, retweets: 432, likes: 2100},
        time: '4h',
    },
    {
        id: '3',
        user: {
            name: 'Photography Daily',
            handle: '@photo_daily',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        content: 'Golden hour in Kyoto. The light was absolutely magical this evening.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        stats: {comments: 56, retweets: 120, likes: 892},
        time: '6h',
    },
    {
        id: '4',
        user: {
            name: 'Tech Insider',
            handle: '@tech_insider',
            avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop',
        },
        content: 'Breaking: The new M5 chip benchmarks have leaked and they are destroying everything in multi-core performance.',
        stats: {comments: 890, retweets: 1500, likes: 4500},
        time: '8h',
    },
    {
        id: '5',
        user: {
            name: 'Nature Bot',
            handle: '@nature_pics',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
        content: 'Just a peaceful forest walk to clear the mind. 🌲✨',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
        stats: {comments: 23, retweets: 89, likes: 670},
        time: '12h',
    },
];