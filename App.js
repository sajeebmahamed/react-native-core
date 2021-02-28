import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);

    const addGoalHandler = (goalTitle) => {
        // setCourseGoal([...courseGoal, enteredGoal])
        setCourseGoal((currentGoals) => [
            ...currentGoals,
            { key: Math.random().toString(), value: goalTitle },
        ]);
    };
    const removeGoalHandler = (goalId) => {
        setCourseGoal((currentGoals) => currentGoals.filter((goal) => goal.key !== goalId));
    };
    return (
        <View style={styles.screen}>
            <GoalInput addGoalHandler={addGoalHandler} />
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
