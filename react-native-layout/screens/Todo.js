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

}