import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Routine, { routine } from "./routine";
import { Card, ProgressBar } from "react-native-paper";
import { color } from "../../theme/color_theme";
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
      {/* <ProgressBar progress={0.5} color={color.primary} /> */}
      <Card style={styles.card}>
        <Card.Content style={styles.card_content}>
          {exampleWorkout.routine.map((exercise, index) => (
            <View key={index} style={styles.routine}>
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
