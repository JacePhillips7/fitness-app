import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Routine, { IRoutine } from "./routine";
import { Card, ProgressBar } from "react-native-paper";
import { color } from "../../theme/color_theme";
import { IWorkout } from "../../services/repos/workoutRepo";

const toggleComplete = (id: string, data: IWorkout) => {
  const updatedRoutine = data.routine.map((exercise) => {
    if (exercise._id === id) {
      return { ...exercise, complete: !exercise.complete };
    }
    return exercise;
  });
  return { ...data, routine: updatedRoutine };
};
const getProgress = (data: IWorkout) => {
  let length = data.routine.length;
  let complete = data.routine.filter((r) => {
    return r.complete;
  }).length;
  return complete / length;
};
const WorkoutComponent = ({ workout }: { workout: IWorkout }) => {
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
                  let newData = toggleComplete(exercise._id, data);
                  setData(newData);
                  setProgress(getProgress(newData));
                }}
              />
            </View>
          ))}
        </Card.Content>
      </Card>
    </View>
  );
};

export default WorkoutComponent;

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
