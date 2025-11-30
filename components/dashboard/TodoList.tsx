import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoItemData } from '../../types/dashboard';

interface Props {
    todos: TodoItemData[];
}

const TodoList: React.FC<Props> = ({ todos }) => (
    <View style={styles.todoList}>
        {todos.map((todo, index) => (
            <View
                key={todo.id}
                style={[styles.todoItem, index === todos.length - 1 && styles.lastItem]}
            >
                <View style={[styles.timeTag, todo.highlight && styles.highlightTag]}>
                    <Text style={styles.timeText}>{todo.time}</Text>
                </View>
                <View style={styles.todoContent}>
                    <Text style={styles.todoTitle}>{todo.title}</Text>
                    <Text style={styles.todoSub}>{todo.subtitle}</Text>
                </View>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    todoList: {
        backgroundColor: '#FFF',
        marginHorizontal: 16,
        borderRadius: 20,
        paddingVertical: 4,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5EA',
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    timeTag: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginRight: 12,
    },
    highlightTag: {
        backgroundColor: '#FF9500',
    },
    timeText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
    },
    todoContent: {
        flex: 1,
    },
    todoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    todoSub: {
        fontSize: 13,
        color: '#8E8E93',
        marginTop: 2,
    },
});

export default TodoList;

