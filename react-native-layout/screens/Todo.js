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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20
  },
  searchBar: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10
  },
  todoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  todoText: {
    flexShrink: 1,
    maxWidth: "75%",
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    width: '85%',
    marginRight: 10
  },
  addButton: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'deeppink',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
    