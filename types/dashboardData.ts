import { Shortcut, StatCardData, TodoItemData } from './dashboard';

export const SHORTCUTS: Shortcut[] = [
    { icon: 'macbook.and.iphone', color: '#007AFF', label: 'Wake Mac' },
    { icon: 'server.rack', color: '#5856D6', label: 'Lab Server', isActive: true },
    { icon: 'bolt.fill', color: '#FF9500', label: 'Lights' },
    { icon: 'wifi', color: '#34C759', label: 'Router', isActive: true },
    { icon: 'lock.fill', color: '#FF2D55', label: 'Lock All' },
];

export const STAT_CARDS: StatCardData[] = [
    { title: 'Steps', value: '8,432', unit: '', icon: 'figure.walk', color: '#FF2D55', subtext: 'Goal: 10,000' },
    { title: 'Sleep', value: '7', unit: 'h 20m', icon: 'bed.double.fill', color: '#5856D6', subtext: 'In bed: 11:30 PM' },
    { title: 'Monthly Expense', value: '¥3,400', unit: ' / ¥5,000', icon: 'yensign', color: '#34C759', subtext: 'Progress', fullWidth: true },
];

export const TODO_ITEMS: TodoItemData[] = [
    { id: '1', time: '14:00', title: 'Group Meeting', subtitle: 'Room 204 · Discuss Tofino P4 bugs' },
    { id: '2', time: '19:30', title: 'Gym Workout', subtitle: 'Leg day 🏋️', highlight: true },
];
