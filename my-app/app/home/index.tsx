import { View, StyleSheet } from "react-native";
import Timer from "../../components/timer";
import Workout from "../../components/routine/workout";
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
export default function HomeTab() {
  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Timer />
      </View>
      <View style={styles.bottom_half}>
        <Workout workout={exampleWorkout} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top_half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  bottom_half: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start", width: "100%" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
