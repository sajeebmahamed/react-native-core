import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="name"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={() => addGoalHandler(enteredGoal)} />
        </View>
    );
};
const styles = StyleSheet.create({
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
    },
});

export default GoalInput;
