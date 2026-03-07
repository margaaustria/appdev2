import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from "react-native"

export default function Todo() {

    const [search, setSearch] = useState("")
    const [todo, setTodo] = useState("");

    const [todoList, setTodoList] = useState([
        { id: 1, text: "Learn React Native Layout", completed: false },
        { id: 2, text: "Learn React Native Core Components", completed: true },
    ]);

    const filteredTodo = todoList.filter(item =>
    item.text.toLowerCase().includes(search.toLowerCase())
);
    const addTodo = () => {
        setTodoList([
            {
                id: Date.now().toString(),
                text: todo,
                completed: false
            },
            ...todoList
        ])
        setTodo("")
    }

    const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id))
}

    const confirmDelete = (id) => {
    Alert.alert(
        "Delete Todo",
        "Are you sure you want to delete this?",
        [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", style: "destructive", onPress: () => deleteTodo(id) }
        ]
    )
}

}