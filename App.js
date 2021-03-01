import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);
    const [isMode, setIsMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        // setCourseGoal([...courseGoal, enteredGoal])
        if (goalTitle.length === 0) {
            return;
        }
        setCourseGoal((currentGoals) => [
            ...currentGoals,
            { key: Math.random().toString(), value: goalTitle },
        ]);
        setIsMode(false);
    };
    const removeGoalHandler = (goalId) => {
        setCourseGoal((currentGoals) => currentGoals.filter((goal) => goal.key !== goalId));
    };
    const handleOnCancel = () => {
        setIsMode(false);
    };
    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsMode(true)} />
            <GoalInput onCancel={handleOnCancel} visible={isMode} addGoalHandler={addGoalHandler} />
            {/* <ScrollView>
                {courseGoal.map((goal) => (
                    <View style={styles.listItem} key={goal}>
                        <Text> {goal} </Text>
                    </View>
                ))}
            </ScrollView> */}
            <FlatList
                keyExtractor={(item) => item.key}
                data={courseGoal}
                renderItem={(itemData) => (
                    <GoalItem
                        id={itemData.item.key}
                        onDelete={removeGoalHandler}
                        data={itemData.item.value}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
