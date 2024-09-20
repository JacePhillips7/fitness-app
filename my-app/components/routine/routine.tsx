import { StyleSheet, Text, View } from "react-native";
import React, { SetStateAction, useState } from "react";
import { Card, IconButton } from "react-native-paper";
export interface routine {
  name: string;
  sets: number;
  reps: number;
  complete: boolean;
}
const CheckButton = ({ toggleComplete }: { toggleComplete: React.Dispatch<SetStateAction<boolean>> }) => (
  <IconButton
    size={24}
    icon={"check"}
    onPress={() => {
      toggleComplete((prev) => !prev);
      console.log("pressed complete button");
    }}
  />
);
const Routine = ({ routine }: { routine: routine }) => {
  const [complete, toggleComplete] = useState(routine.complete);
  return (
    <View>
      <Card>
        <Card.Title title={routine.name} right={() => <CheckButton toggleComplete={toggleComplete} />} />
        <Card.Content>
          <Text>Sets: {routine.sets}</Text>
          <Text>Reps: {routine.reps}</Text>
          <Text>{complete ? "Complete" : "Incomplete"}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Routine;

const styles = StyleSheet.create({});
