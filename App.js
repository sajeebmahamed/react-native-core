import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoal, setCourseGoal] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    // setCourseGoal([...courseGoal, enteredGoal])
    setCourseGoal(currentGoals => [...currentGoals, enteredGoal])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='name'
          onChangeText={goalInputHandler}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View>
        { courseGoal.map((goal, i) => <Text key={i}> {goal} </Text>) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  }
})