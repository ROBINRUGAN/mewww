import type { SymbolName } from './symbols';

export interface Shortcut {
    icon: SymbolName;
    color: string;
    label: string;
    isActive?: boolean;
}

export interface StatCardData {
    title: string;
    value: string;
    unit: string;
    icon: SymbolName;
    color: string;
    subtext: string;
    fullWidth?: boolean;
}

export interface TodoItemData {
    id: string;
    time: string;
    title: string;
    subtitle: string;
    highlight?: boolean;
}
