import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Card, IconButton, Text } from "react-native-paper";
export interface routine {
  _id: string;
  name: string;
  sets: number;
  reps: number;
  complete: boolean;
}
const CheckButton = ({
  complete,
  toggleComplete,
}: {
  complete: boolean;
  toggleComplete: Function;
}) => (
  <IconButton
    size={24}
    icon={complete ? "check" : "checkbox-blank-circle-outline"}
    iconColor={complete ? "green" : "black"}
    onPress={() => {
      toggleComplete();
    }}
  />
);
const Routine = ({
  routine,
  update,
}: {
  routine: routine;
  update: Function;
}) => {
  return (
    <View>
      <Card>
        <Card.Title
          title={routine.name}
          right={() => (
            <CheckButton complete={routine.complete} toggleComplete={update} />
          )}
        />
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
