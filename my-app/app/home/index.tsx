import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Icon } from "react-native-paper";
import WorkoutComponent from "../../components/routine/workout";
import Timer from "../../components/timer";
import { storage } from "../../firebase.config";
import { IWorkout } from "../../services/repos/workoutRepo";
import { UserDataStore } from "../../services/userdata.service";
import { color } from "../../theme/color_theme";
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
  function navToCreate(): void {
    router.push("/home/create");
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Timer />
      </View>
      <View style={styles.bottom_half}>
        {workout ? (
          <WorkoutComponent workout={workout} />
        ) : (
          <Card style={styles.null_card}>
            <Card.Title title={"No Routine Set"}></Card.Title>
            <Card.Content>
              <Button mode="contained" onPress={navToCreate} buttonColor={color.primary}>
                Make one <Icon size={18} source={"plus"} color="white"></Icon>
              </Button>
            </Card.Content>
          </Card>
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
  null_card: {
    width: "100%",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});
