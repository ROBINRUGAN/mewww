export interface PostItem {
    id: string;
    user: {
        name: string;
        handle: string;
        avatar: string;
    };
    content: string;
    image?: string;
    stats: {
        comments: number;
        retweets: number;
        likes: number;
    };
    time: string;
}

