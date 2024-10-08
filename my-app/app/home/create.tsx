/**
 * todo:
 * dynamic style on card click. make it turn blue for selected
 *
 * load options from template values
 *
 * on option select update current workout, save to firebase
 */
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { IRoutine } from "../../components/routine/routine";
import { storage } from "../../firebase.config";
import { IWorkout } from "../../services/repos/workoutRepo";
import { UserDataStore } from "../../services/userdata.service";
import { useAuth } from "../providers/auth.provider";
export default function CreateWorkout() {
  const { user } = useAuth();
  const datastore = new UserDataStore(storage, user!);
  let current_workout: IWorkout | null = null;
  useEffect(() => {
    datastore.getWorkout().then((data) => {
      current_workout = data;
      console.log(data);
    });
  });
  let selectedType = "Chest";
  function setSelectedType(event: any, opt: string): void {
    selectedType = opt;
  }
  function addToWorkout(routine: IRoutine) {
    current_workout?.routine.push(routine);
  }
  function removeFromWorkout(id: string) {
    if (!current_workout) return;
    let rm = current_workout?.routine.findIndex((r) => {
      return r._id === id;
    });
    if (rm === -1 || rm === undefined) {
      console.error(`Failed to find routine with id ${id}`);
      return;
    }
    current_workout.routine = current_workout?.routine.splice(rm, 1);
  }
  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Card
          style={styles.workoutCard}
          onPress={(e) => {
            setSelectedType(e, "Chest");
          }}
        >
          <Card.Title title="Chest"></Card.Title>
          <Card.Content>
            <Text>Chest</Text>
          </Card.Content>
        </Card>
        <Card style={styles.workoutCard}>
          <Card.Title title="Legs"></Card.Title>
          <Card.Content>
            <Text>Legs</Text>
          </Card.Content>
        </Card>
        <Card style={styles.workoutCard}>
          <Card.Title title="Back"></Card.Title>
          <Card.Content>
            <Text>Back</Text>
          </Card.Content>
        </Card>
        <Card style={styles.workoutCard}>
          <Card.Title title="Custom"></Card.Title>
          <Card.Content>
            <Text>Custom</Text>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.bottom_half}>
        <Text>Options from selection here</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top_half: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
  bottom_half: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginHorizontal: 25,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  workoutCard: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "45%",
    margin: 5,
  },
});
