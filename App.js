import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View>
       <TextInput
        placeholder='Normal Field'
        style={{ borderColor: 'cyan', borderWidth: 1, padding: 10, margin: 5 }}
       />
        <Button title='submit' />
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
});
