export interface ChatItem {
    id: string;
    name: string;
    avatar: string;
    message: string;
    time: string;
    unread: number;
    isOnline?: boolean;
}

