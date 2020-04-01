import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import TodoListItem from './src/components/TodoListItem';
import AddTodo from './src/components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Do home work', key: '1' },
    { text: 'Learning reactjs', key: '2' },
    { text: 'easy  leaning react-native ', key: '3' }
  ])

  const onDeleteItem = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.key !== key)
    })
  }

  const onAddItem = text => {
    setTodos(prevTodos => {
      return [
        { text }, ...prevTodos,
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        {/* to form */}
        <View style={styles.list}>
          <AddTodo onAddItem={onAddItem}  />
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoListItem item={item} onDeleteItem={onDeleteItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
