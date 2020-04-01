import React, { useStatef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function AddTodo({ onAddItem }) {
  const [text, setText] = useState('');

  const changeHandler = text => {
    setText(text);
  }

  return (
  <View>
    <TextInput
      style={styles.input}
      placeholder='new todo...'
      onChangeText={changeHandler}
    />
    <Button
      title='Add Todo'
      onPress={() => onAddItem(text)}
      color='coral'
    />
  </View>
)

}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  }
})

export default AddTodo;
