import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('trung');
  const [age, setAge] = useState(15);

  return (
    <View style={styles.container}>
      <Text>Enter name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="etc abc xyz"
        value={name}
        onChangeText={val => setName(val)}
      />

      <Text>Enter age</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="etc abc xyz"
        value={age}
        onChangeText={val => setAge(val)}
      />
      <Text style={styles.boldText} >Name: {name} age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    margin: 8,
    padding: 8,
    borderColor: '#777',
    color: 'tomato',
    borderWidth: 2,
    width: 250,
  }
});
