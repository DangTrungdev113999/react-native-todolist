import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [persion, setPersion] = useState([
    { name: 'trung', id: "1" },
    { name: 'trung', id: '2' },
    { name: 'trung', id: '3' },
    { name: 'trung', id: '4' },
    { name: 'trung', id: '5' },
    { name: 'trung', id: '6' },
    { name: 'trung', id: '7' },
  ]);

  const onPressHandler = id => {
    setPersion(prevPersion => {
      return prevPersion.filter(persion => persion.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={persion}
        keyExtractor={item => item.id}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressHandler(item.id)} >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 40,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink'
  }
});
