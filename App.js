import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch'
      }}
    >
     <View
        style={{
          padding: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
     >
       <Text> 1 </Text>
     </View>
      <View
        style={{
          padding: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> 2 </Text>
      </View>

      <View
        style={{
          padding: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> 2 </Text>
      </View>
    </View>
  );
}

