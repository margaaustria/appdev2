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
    const toggleTodo = (id) => {
    setTodoList(
        todoList.map(item =>
            item.id === id
                ? { ...item, completed: !item.completed }
                : item
        )
    )
}

    return (
    <View style={styles.container}>
    <Text style={styles.title}>Todo</Text>

    <TextInput
    placeholder="Search todos..."
    style={styles.searchBar}
    value={search}
    onChangeText={setSearch}
    />

    <ScrollView>
{filteredTodo.map(item => (
    <View style={styles.todoContainer} key={item.id}>
        <TouchableOpacity
            style={styles.todoTextWrapper}
            onPress={() => toggleTodo(item.id)}
        >
            {item.completed
                ? <Ionicons name="checkmark-circle-outline" size={30} />
                : <Ionicons name="ellipse-outline" size={30} />
            }

            <Text
                style={[
                    styles.todoText,
                    item.completed && { textDecorationLine: 'line-through' }
                ]}
                numberOfLines={1}
                ellipsizeMode='tail'
            >
                {item.text}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => confirmDelete(item.id)}>
            <Ionicons name="trash-outline" size={30} />
        </TouchableOpacity>
    </View>
))}
</ScrollView>

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
    <View style={styles.inputWrapper}>

    <TextInput
        placeholder="Add todo"
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
    />

    <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Ionicons name="add-outline" size={30} color="white" />
    </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
    </View>
    );
    }
    