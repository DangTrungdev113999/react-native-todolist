import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Do home work', key: '1'},
    {text: 'Learning reactjs', key: '2'},
    {text: 'easy  leaning react-native ', key: '3'}
  ])

  return (
    <View style={styles.container}>
      <Header/>
    <View style={styles.content} >
      {/* to form */}
    <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Text>{item.text}</Text>
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
