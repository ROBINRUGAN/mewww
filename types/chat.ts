export interface ChatItem {
    id: string;
    name: string;
    avatar: string;
    message: string;
    time: string;
    unread: number;
    // 状态标识
    isOnline?: boolean;
    isPinned?: boolean;
    isMuted?: boolean;
    typing?: boolean;
    // 特殊消息类型
    draft?: string;
    mediaType?: 'photo' | 'video' | 'audio' | 'file' | 'voice';
}