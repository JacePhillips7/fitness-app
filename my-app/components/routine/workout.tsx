import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Routine, { routine } from "./routine";
import { Card, ProgressBar } from "react-native-paper";
import { color } from "../../theme/color_theme";
interface Workout {
  _id: string;
  date: Date;
  stopwatch: string;
  complete: boolean;
  routine: routine[];
}
const exampleWorkout = {
  _id: "workoutid",
  date: new Date(),
  stopwatch: "00:00",
  complete: false,
  routine: [
    {
      _id: "id1",
      name: "Pushups",
      sets: 3,
      reps: 10,
      complete: false,
    },
    {
      _id: "id2",
      name: "Pullups",
      sets: 3,
      reps: 10,
      complete: false,
    },
    {
      _id: "id3",
      name: "Pushups",
      sets: 3,
      reps: 10,
      complete: false,
    },
    {
      _id: "id4",
      name: "Pullups",
      sets: 3,
      reps: 10,
      complete: false,
    },
  ],
};
const toggleComplete = (id: string, data: Workout) => {
  console.log("updating");
  console.log(id, data);
  const updatedRoutine = data.routine.map((exercise) => {
    if (exercise._id === id) {
      return { ...exercise, complete: !exercise.complete };
    }
    return exercise;
  });
  console.log(id, data);
  return { ...data, routine: updatedRoutine };
};
const Workout = () => {
  const [data, setData] = useState(exampleWorkout);
  return (
    <View style={styles.container}>
      <View>
        <ProgressBar progress={0.5} color={color.primary} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.card_content}>
          {data.routine.map((exercise, index) => (
            <View key={index} style={styles.routine}>
              <Routine
                routine={exercise}
                update={() => {
                  console.log("settings state", data);
                  setData(toggleComplete(exercise._id, data));
                }}
              />
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
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  card: {
    width: "100%",
    overflow: "scroll",
    height: "85%",
  },
  card_content: {
    height: "90%",
    overflow: "scroll",
  },
  routine: {
    margin: 10,
  },
});
