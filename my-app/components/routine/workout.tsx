import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Routine, { routine } from "./routine";
import { Card } from "react-native-paper";
interface Workout {
  date: Date;
  stopwatch: string;
  complete: boolean;
  routine: routine[];
}
const exampleWorkout = {
  date: new Date(),
  stopwatch: "00:00",
  complete: false,
  routine: [
    {
      name: "Pushups",
      sets: 3,
      reps: 10,
      complete: false,
    },
    {
      name: "Pullups",
      sets: 3,
      reps: 10,
      complete: false,
    },
  ],
};
const Workout = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {exampleWorkout.routine.map((exercise, index) => (
            <View key={index}>
              <Routine routine={exercise} />
            </View>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    width: "100%",
  },
});
