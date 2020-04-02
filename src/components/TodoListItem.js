import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function TodoListItem({ item, onDeleteItem }) {
  return (
    <TouchableOpacity onPress={() => onDeleteItem(item.key)} >
      <View style={styles.item} >
        <MaterialIcons name='delete' size={20} color="#333" />
        <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  }
})

export default TodoListItem
