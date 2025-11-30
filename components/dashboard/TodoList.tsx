import React from 'react';
import { View, Text } from 'react-native';
import { TodoItemData } from '../../types/dashboard';

interface Props {
    todos: TodoItemData[];
}

const TodoList: React.FC<Props> = ({ todos }) => (
    <View className="mx-4 rounded-2xl bg-card py-1">
        {todos.map((todo, index) => (
            <View
                key={todo.id}
                className={`flex-row items-center px-4 py-4 border-b border-border ${index === todos.length - 1 ? 'border-b-0' : ''}`}
            >
                <View className={`px-2 py-1 rounded-md mr-3 ${todo.highlight ? 'bg-accent-warning' : 'bg-accent-primary'}`}>
                    <Text className="text-white text-xs font-bold">{todo.time}</Text>
                </View>
                <View className="flex-1">
                    <Text className="text-base font-semibold text-primary">{todo.title}</Text>
                    <Text className="text-sm text-secondary mt-0.5">{todo.subtitle}</Text>
                </View>
            </View>
        ))}
    </View>
);

export default TodoList;
