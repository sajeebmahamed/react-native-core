import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalInputHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    };
    return (
        <Modal visible={visible} animationType="slide" style={styles.inputContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalInputHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    },
});

export default GoalInput;
