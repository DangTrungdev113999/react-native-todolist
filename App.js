import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('trung');
  const [person, setPerson] = useState({name: 'hoang', age: 12});

  const clickHandler = () => {
    setName('nam');
    setPerson({name: 'tu', age: 23});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText} >My name is {name}</Text>
      <Text style={styles.boldText} >His name is {person.name}, his age is {person.age}</Text>
      <View style={styles.buttonContainer} >
        <Button
          title='update state...'
          onPress={clickHandler}
        />
      </View>
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
  buttonContainer: {
    marginTop: 50,
    backgroundColor: 'tomato',
  }
});
