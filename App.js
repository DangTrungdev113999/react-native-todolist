import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [persion, setPersion] = useState([
    { name: 'trung', key: 1 },
    { name: 'trung', key: 2 },
    { name: 'trung', key: 3 },
    { name: 'trung', key: 4 },
    { name: 'trung', key: 5 },
    { name: 'trung', key: 6 },
    { name: 'trung', key: 7 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {persion.map(item => (
          <View key={item.key} >
            <Text style={styles.text} >{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 40,
    padding: 60,
    backgroundColor: 'pink'
  }
});
