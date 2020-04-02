import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './src/components/Header';
import TodoListItem from './src/components/TodoListItem';
import AddTodo from './src/components/AddTodo';
import Sanbox from './src/components/Sanbox';

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
    if (text.length <= 3) {
      Alert.alert('OPPS!', 'Todo must be over 3 chars long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed'),
        }
      ])
    } else {
      setTodos(prevTodos => {
        return [
          { text }, ...prevTodos,
        ]
      })
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          <AddTodo onAddItem={onAddItem} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoListItem item={item} onDeleteItem={onDeleteItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
