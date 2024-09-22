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
const getProgress = (data: Workout) => {
  let length = data.routine.length;
  let complete = data.routine.filter((r) => {
    r.complete;
  }).length;
  console.log(complete / length);
  return complete / length;
};
const Workout = ({ workout }: { workout: Workout }) => {
  const [data, setData] = useState(workout);
  const [progress, setProgress] = useState(getProgress(data));
  return (
    <View style={styles.container}>
      <View>
        <ProgressBar progress={progress} color={color.primary} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.card_content}>
          {data.routine.map((exercise, index) => (
            <View key={index} style={styles.routine}>
              <Routine
                routine={exercise}
                update={() => {
                  setData(toggleComplete(exercise._id, data));
                  setProgress(getProgress(data));
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
