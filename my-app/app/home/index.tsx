import { View, StyleSheet, Text } from "react-native";
import Timer from "../../components/timer";
import WorkoutComponent from "../../components/routine/workout";
import { UserDataStore } from "../../services/userdata.service";
import { useEffect, useState } from "react";
import { storage } from "../../firebase.config";
import { IWorkout } from "../../services/repos/workoutRepo";
import { useAuth } from "../providers/auth.provider";
export default function HomeTab() {
  const [workout, setWorkout] = useState<IWorkout>();
  const { user } = useAuth();
  const datastore = new UserDataStore(storage, user!);
  useEffect(() => {
    datastore.getWorkout().then((data) => {
      console.log(data);
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Timer />
      </View>
      <View style={styles.bottom_half}>
        {workout ? (
          <WorkoutComponent workout={workout} />
        ) : (
          <Text> No workout set</Text>
        )}
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
  bottom_half: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
