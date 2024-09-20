import { StyleSheet, View } from "react-native";
import React, { SetStateAction, useState } from "react";
import { Card, IconButton, Text } from "react-native-paper";
export interface routine {
  name: string;
  sets: number;
  reps: number;
  complete: boolean;
}
const CheckButton = ({ complete, toggleComplete }: { complete: boolean; toggleComplete: React.Dispatch<SetStateAction<boolean>> }) => (
  <IconButton
    size={24}
    icon={complete ? "check" : "checkbox-blank-circle-outline"}
    iconColor={complete ? "green" : "black"}
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
        <Card.Title title={routine.name} right={() => <CheckButton complete={complete} toggleComplete={toggleComplete} />} />
        <Card.Content>
          <Text variant="titleLarge">
            {routine.sets} x {routine.reps}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Routine;

const styles = StyleSheet.create({});
